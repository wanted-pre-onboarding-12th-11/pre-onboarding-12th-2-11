import {OWNER, REPO} from 'constants/api';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <StyledLink to={'/'}>
                {OWNER} / {REPO}
            </StyledLink>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
`;
