import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router-dom';
import {issueItemType} from 'types/issues';
import ROUTES from 'constants/routes';
import {changeDateFormat} from 'utils/changeDateFormat';

interface IssueItemProps {
    issue: issueItemType;
}

const IssueInfo = ({issue}: IssueItemProps) => {
    const {
        number,
        title,
        user: {login},
        created_at: createdAt,
        comments,
    } = issue;

    const navigation = useNavigate();
    const params = useParams();
    const issueNumber = params.id;

    const navigateToDetailPage = () => {
        navigation(`${ROUTES.ISSUES}/${number}`);
    };

    return (
        <ItemStyled
            className={issueNumber ? '' : 'hover'}
            onClick={() => {
                !issueNumber && navigateToDetailPage();
            }}
        >
            <div className='left'>
                <div className='top'>
                    <span className='issueNumber'>#{number}</span>{' '}
                    <span className='title'>{title}</span>
                </div>
                <div className='bottom'>
                    작성자: {login}, 작성일: {changeDateFormat(createdAt)}
                </div>
            </div>
            <div className='right'>
                코멘트: <span>{comments}</span>
            </div>
        </ItemStyled>
    );
};

export default IssueInfo;

export const ItemStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    padding: 16px;

    &.hover {
        border-bottom: 1px solid var(--listBorder);
        cursor: pointer;
    }
    &.hover:hover {
        background-color: var(--listItemHoverBg);
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .top {
            display: inline;

            .issueNumber {
                margin-right: 6px;
                font-variant-numeric: tabular-nums;
            }
            .title {
                font-size: 18px;
                font-weight: 600;
            }
        }
        .bottom {
            display: flex;
            gap: 6px;
            color: var(--textSubtitle);
        }
    }
    .right {
        flex-shrink: 0;
        font-size: 14px;
        color: var(--textSubtitle);
        span {
            font-weight: 500;
        }
    }
`;
