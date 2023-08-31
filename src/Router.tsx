import App from 'App';
import {Navigate, createBrowserRouter} from 'react-router-dom';
import IssueList from 'pages/IssueList';
import IssueDetail from 'pages/IssueDetail';
import NotFound from 'pages/NotFound';
import ROUTES from 'constants/routes';
import Header from 'components/common/Header';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to={ROUTES.ISSUES} replace={true} />,
            },
            {
                path: ROUTES.ISSUES,
                element: <IssueList />,
            },
            {
                path: `${ROUTES.ISSUES}/:id`,
                element: <IssueDetail />,
            },
        ],
        errorElement: (
            <>
                <Header />
                <NotFound />
            </>
        ),
    },
]);
