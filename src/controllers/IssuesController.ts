import {useRecoilState} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {issueItemDetailType, issueItemType, issuesStateType} from 'types/issues';
import * as api from 'apis/issues';
import {AxiosError} from 'axios';
import MESSAGE from 'constants/message';
import {PER_PAGE} from 'constants/api';

export const IssuesController = () => {
    const [issuesState, setIssuesState] = useRecoilState(issuesStateAtom);

    const getIssues = async (page: number) => {
        try {
            setIssuesState((prev: issuesStateType) => ({
                ...prev,
                moreData: false,
                isRefetchNeeded: false,
            }));
            const res = await api.getIssues(page);
            const newIssues = res.data;

            setIssuesState((prev: issuesStateType) => {
                // 서버 통신 전 코멘트 정렬이 변경될 경우 기존 배열 필터링하고 새로운 값 받기
                const filteredIssues = prev.issues.filter(
                    preIssue =>
                        !newIssues.some(
                            (newIssue: issueItemType) => newIssue.number === preIssue.number
                        )
                );
                return {
                    ...prev,
                    moreData: true,
                    issues: [...filteredIssues, ...newIssues],
                };
            });

            // 마지막 불러온 페이지가 빈 (마지막 페이지 +1 )페이지인 경우 더이상 무한스크롤 안되게 세팅
            if (!newIssues.length || newIssues.length < PER_PAGE) {
                return setIssuesState((prev: issuesStateType) => ({
                    ...prev,
                    moreData: false,
                }));
            }
        } catch (e) {
            const error = e as AxiosError;
            setIssuesState((prev: issuesStateType) => ({
                ...prev,
                errorStatus: error.response?.status ?? MESSAGE.INVALID_ERROR,
            }));
        } finally {
            setIssuesState((prev: issuesStateType) => ({...prev, isLoading: false}));
        }
    };

    const getNextPage = () => {
        const newPageCount = issuesState.pageCount + 1;
        setIssuesState((prev: issuesStateType) => ({
            ...prev,
            isLoading: true,
            pageCount: prev.pageCount + 1,
        }));
        getIssues(newPageCount);
    };

    const updateIssues = (newIssue: issueItemDetailType) => {
        const prevIssue = issuesState.issues.find(issue => issue.number === newIssue.number);
        if (
            prevIssue &&
            (prevIssue.title !== newIssue.title || prevIssue.comments !== newIssue.comments)
        ) {
            const {number, comments} = newIssue;
            const newIssues = [
                ...issuesState.issues.map(issue => (issue.number === number ? newIssue : issue)),
            ];
            if (prevIssue?.comments !== comments) {
                newIssues.sort((a, b) => b.comments - a.comments);
            }
            setIssuesState(prev => ({...prev, issues: newIssues}));
        }
    };

    return {getIssues, getNextPage, updateIssues};
};
