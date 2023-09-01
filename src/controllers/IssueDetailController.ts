import * as api from 'apis/issues';
import {AxiosError} from 'axios';
import MESSAGE from 'constants/message';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {issueDetailStateType, issueItemDetailType, issueItemType} from 'types/issues';

const IssueDetailController = () => {
    const [issueDetail, setIssueDetail] = useState<issueDetailStateType>({
        isLoading: true,
        errorStatus: 0,
        issue: {
            number: 0,
            title: '',
            user: {
                login: '',
                avatar_url: '',
            },
            created_at: '',
            comments: 0,
            body: '',
        },
    });

    const [issuesState, setIssuesState] = useRecoilState(issuesStateAtom);

    const updateIssuesState = (prevIssue: issueItemType, currentIssue: issueItemDetailType) => {
        const {number, comments} = currentIssue;
        const newIssues = [
            ...issuesState.issues.map(issue => (issue.number === number ? currentIssue : issue)),
        ];
        if (prevIssue.comments !== comments) {
            newIssues.sort((a, b) => b.comments - a.comments);
        }
        setIssuesState(prev => ({...prev, issues: newIssues}));
    };

    const getIssue = async (id: number) => {
        try {
            const res = await api.getIssue(id);
            const issue = res.data;
            setIssueDetail(prev => ({...prev, issue}));

            if (res.data.state !== 'open') {
                const error = new AxiosError();
                setIssueDetail(prev => ({
                    ...prev,
                    errorStatus: error.response?.status ?? 'open 상태가 아닙니다',
                }));
            }

            // 만약 이슈 목록의 이슈와 가져온 정보가 다르다면 이슈 목록 업데이트
            const prevIssue = issuesState.issues.find(
                prevIssue => prevIssue.number === issue.number
            );
            if (
                prevIssue &&
                (prevIssue.title !== issue.title || prevIssue.comments !== issue.comments)
            ) {
                updateIssuesState(prevIssue, issue);
            }
        } catch (e) {
            const error = e as AxiosError;
            setIssueDetail(prev => ({
                ...prev,
                errorStatus: error.response?.status ?? MESSAGE.INVALID_ERROR,
            }));
        } finally {
            setIssueDetail(prev => ({...prev, isLoading: false}));
        }
    };

    return {issueDetail, getIssue};
};

export default IssueDetailController;
