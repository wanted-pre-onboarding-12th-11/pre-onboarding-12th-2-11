import {Outlet} from 'react-router-dom';
import Header from 'components/common/Header';
import {styled} from 'styled-components';

const App = () => {
    return (
        <>
            <Header />
            <ContentsWrapper>
                <Outlet />
            </ContentsWrapper>
        </>
    );
};

export default App;

const ContentsWrapper = styled.div`
    max-width: 768px;
    margin: 0 auto;
`;
