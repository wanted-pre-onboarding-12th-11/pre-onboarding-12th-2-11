import IssueListSkeleton from 'components/IssueList/IssueListSkeleton';
import styled from 'styled-components';

const IssueDetailSkeleton = () => {
    return (
        <DetailSkeletonStyled>
            <div className='issueHeader'>
                <div className='avatar' />
                <IssueListSkeleton />
            </div>
            <div className='issueBody' />
        </DetailSkeletonStyled>
    );
};

export default IssueDetailSkeleton;

const DetailSkeletonStyled = styled.div`
    border: 1px solid var(--listBorder);
    margin: 20px 0;
    border-radius: 12px;
    width: 100%;

    @keyframes shine {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }
    animation: shine 1s ease-in-out infinite;

    div:empty {
        background-color: var(--textCode);
    }

    .issueHeader {
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--listItemBg);
    }

    .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    .issueBody {
        box-sizing: border-box;
        width: 95%;
        height: 500px;
        margin: 30px auto;
        text-align: center;
        border-radius: 12px;
    }
`;
