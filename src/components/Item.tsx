import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {PATH} from 'constants/api';

import {issueItemType} from 'types/issues';

interface IssueItemProps {
    issue: issueItemType;
}

const IssueItem = ({issue}: IssueItemProps) => {
    const {
        number,
        title,
        user: {login},
        created_at: createdAt,
        comments,
    } = issue;

    const navigation = useNavigate();

    const navigateToDetailPage = () => {
        navigation(`${PATH}/${number}`);
    };

    return (
        <ItemStyled onClick={navigateToDetailPage}>
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

export default IssueItem;

const ItemStyled = styled.div``;
