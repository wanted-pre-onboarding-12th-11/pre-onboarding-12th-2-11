import {Outlet} from 'react-router-dom';
import Header from 'components/common/Header';
import {styled} from 'styled-components';

const App = () => {
    return (
        <>
            <Header />
            <ContentsWrapperStyled>
                <Outlet />
            </ContentsWrapperStyled>
        </>
    );
};

export default App;

const ContentsWrapperStyled = styled.div`
    max-width: 768px;
    margin: 0 auto;
`;
