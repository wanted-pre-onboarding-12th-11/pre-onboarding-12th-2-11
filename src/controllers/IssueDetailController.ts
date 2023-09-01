import * as api from 'apis/issues';
import {AxiosError} from 'axios';
import MESSAGE from 'constants/message';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {issueDetailStateType} from 'types/issues';

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

    const getIssue = async (id: number) => {
        try {
            const res = await api.getIssue(id);
            setIssueDetail(prev => ({...prev, issue: res.data}));
            if (res.data.state !== 'open') {
                const error = new AxiosError();
                setIssueDetail(prev => ({
                    ...prev,
                    errorStatus: error.response?.status ?? 'open 상태가 아닙니다',
                }));
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

    const updateIssuesState = (id: number, title: string, comments: number) => {
        const issue = issuesState.issues.find(issue => issue.number === id);

        if (issue && (issue.title !== title || issue.comments !== comments)) {
            const newIssue = {...issue, title, comments};
            setIssuesState(prev => ({...prev, issues: [...prev.issues, newIssue]}));
        }
    };

    return {issueDetail, getIssue, updateIssuesState};
};

export default IssueDetailController;
