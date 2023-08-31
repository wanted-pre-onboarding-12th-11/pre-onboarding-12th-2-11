import {IssuesController} from 'controllers/IssuesController';
import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {useInfiniteScroll} from 'hooks/useInfiniteScroll';
import Ad from 'components/IssueList/Ad';
import NotFound from 'pages/NotFound';
import LoadingSkeleton from 'components/IssueList/IssueListSkeleton';
import LoadingSpinner from 'components/common/LoadingSpinner';
import IssueInfo from 'components/common/IssueInfo';
import styled from 'styled-components';

const IssueListContainer = () => {
    const issuesState = useRecoilValue(issuesStateAtom);
    const {isLoading, errorStatus, moreData, issues} = issuesState;
    const isRefetchNeeded = !issues.length;

    const {getIssues, getNextPage} = IssuesController();

    useEffect(() => {
        isRefetchNeeded && getIssues(1);
    }, []);

    const getNextPageRef = useInfiniteScroll(getNextPage);

    if (errorStatus) return <NotFound errorStatus={errorStatus} />;

    return (
        <ListContainer>
            <StyledPageTitle>Issues</StyledPageTitle>
            {issues.length > 0 ? (
                issues.map((data, index) => {
                    const showAd = (index + 1) % 4 === 0;
                    return (
                        <React.Fragment key={data.number}>
                            <IssueInfo issue={data} />
                            {showAd && <Ad />}
                        </React.Fragment>
                    );
                })
            ) : (
                <LoadingSkeleton />
            )}
            {isLoading && !isRefetchNeeded && <LoadingSpinner />}
            {moreData && <div ref={getNextPageRef} />}
        </ListContainer>
    );
};

export default IssueListContainer;

const ListContainer = styled.div`
    border: 1px solid var(--listBorder);
    border-radius: 12px;
    margin: 10px;
    overflow: hidden;
`;

const StyledPageTitle = styled.h3`
    padding: 10px;
    border-bottom: 1px solid var(--listBorder);
    background-color: var(--listItemBg);
`;
