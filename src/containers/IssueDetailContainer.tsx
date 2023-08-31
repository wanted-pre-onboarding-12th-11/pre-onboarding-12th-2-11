import IssueInfo from 'components/common/IssueInfo';
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

    if (errorStatus) return <NotFound errorStatus={errorStatus} />;

    return (
        <>
            {isLoading ? (
                <IssueDetailSkeleton />
            ) : (
                <ContainerStyled>
                    <IssueHeaderStyled>
                        <AvatarStyled
                            src={issue.user.avatar_url}
                            alt={`avatar-${issue.user.login}`}
                        />
                        <IssueInfo issue={issue} />
                    </IssueHeaderStyled>
                    <IssueBody source={issue.body} />
                </ContainerStyled>
            )}
        </>
    );
};

export default IssueDetailContainer;

const ContainerStyled = styled.div`
    border: 1px solid var(--listBorder);
    margin: 20px 0;
    border-radius: 12px;
`;

const AvatarStyled = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const IssueHeaderStyled = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--listItemBg);
`;
