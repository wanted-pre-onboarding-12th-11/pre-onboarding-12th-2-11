import * as api from 'apis/issues';
import {AxiosError} from 'axios';
import MESSAGE from 'constants/message';
import {useCallback, useState} from 'react';
import {issueDetailStateType} from 'types/issues';
import useIssues from './useIssues';

const useIssueDetail = () => {
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

    const {updateIssues} = useIssues();

    const getIssue = useCallback(
        async (id: number) => {
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

                // 가져온 정보가 업데이트 된 정보일 수 있기 때문에 이슈 목록 업데이트
                updateIssues(issue);
            } catch (e) {
                const error = e as AxiosError;
                setIssueDetail(prev => ({
                    ...prev,
                    errorStatus: error.response?.status ?? MESSAGE.INVALID_ERROR,
                }));
            } finally {
                setIssueDetail(prev => ({...prev, isLoading: false}));
            }
        },
        [updateIssues]
    );

    return {issueDetail, getIssue};
};

export default useIssueDetail;
