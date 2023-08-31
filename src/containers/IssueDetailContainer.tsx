import Item from 'components/common/IssueInfo';
import IssueBody from 'components/IssueDetail/IssueBody';
import IssueDetailSkeleton from 'components/IssueDetail/IssueDetailSkeleton';
import IssueDetailController from 'controllers/IssueDetailController';
import NotFound from 'pages/NotFound';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {styled} from 'styled-components';

const IssueDetailContainer = () => {
    const params = useParams();
    const issueNumber = Number(params.id);

    const {issueDetail, getIssue} = IssueDetailController();
    const {isLoading, errorStatus, issue} = issueDetail;

    useEffect(() => {
        getIssue(issueNumber);
    }, []);

    if (errorStatus) return <NotFound />;

    return (
        <>
            {isLoading ? (
                <IssueDetailSkeleton />
            ) : (
                <>
                    <Avatar src={issue.user.avatar_url} alt={`avatar-${issue.user.login}`} />
                    <Item issue={issue} />
                    <IssueBody source={issue.body} />
                </>
            )}
        </>
    );
};

export default IssueDetailContainer;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;
