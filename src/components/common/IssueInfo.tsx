import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router-dom';
import {issueItemType} from 'types/issues';
import ROUTES from 'constants/routes';

interface IssueItemProps {
    issue: issueItemType;
}

const Item = ({issue}: IssueItemProps) => {
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
            onClick={() => {
                !issueNumber && navigateToDetailPage();
            }}
        >
            <div className='left'>
                <div className='title'>
                    <span>#{number}</span> {title}
                </div>
                <div className='info'>
                    작성자: {login}, 작성일: {createdAt}
                </div>
            </div>
            <div className='right'>코멘트: {comments}</div>
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div``;
