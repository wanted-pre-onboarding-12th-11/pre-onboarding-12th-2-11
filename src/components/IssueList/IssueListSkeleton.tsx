import {ItemStyled} from 'components/common/IssueInfo';
import styled from 'styled-components';

const IssueListSkeleton = () => {
    return (
        <SkeletonStyled>
            <div className='left'>
                <div className='top'></div>
                <div className='bottom'></div>
            </div>
            <div className='right'></div>
        </SkeletonStyled>
    );
};

export default IssueListSkeleton;

const SkeletonStyled = styled(ItemStyled)`
    width: 100%;
    overflow: hidden;
    position: relative;

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

    div {
        border-radius: 6px;
    }

    .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;

        .top {
            height: 21px;
            background-color: var(--listItemBg);
        }

        .bottom {
            height: 21px;
            background-color: var(--textCode);
        }
    }

    .right {
        flex-shrink: 0;
        width: 70px;
        height: 16px;
        background-color: var(--textCode);
    }
`;
