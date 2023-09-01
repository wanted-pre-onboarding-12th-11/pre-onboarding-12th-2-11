import {IssuesController} from 'controllers/IssuesController';
import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {useInfiniteScroll} from 'hooks/useInfiniteScroll';
import Ad from 'components/IssueList/Ad';
import NotFound from 'pages/NotFound';
import LoadingSpinner from 'components/common/LoadingSpinner';
import IssueInfo from 'components/common/IssueInfo';
import styled from 'styled-components';
import IssueListSkeleton from 'components/IssueList/IssueListSkeleton';

const IssueListContainer = () => {
    const issuesState = useRecoilValue(issuesStateAtom);
    const {isRefetchNeeded, isLoading, errorStatus, moreData, issues} = issuesState;

    const {getIssues, getNextPage} = IssuesController();

    useEffect(() => {
        isRefetchNeeded && getIssues(1);
    }, [getIssues, isRefetchNeeded]);

    const getNextPageRef = useInfiniteScroll(getNextPage);

    if (errorStatus) return <NotFound errorStatus={errorStatus} />;

    return (
        <ListContainerStyled>
            <StyledPageTitle>Issues</StyledPageTitle>
            {issues.length > 0
                ? issues.map((data, index) => {
                      const showAd = (index + 1) % 4 === 0;
                      return (
                          <React.Fragment key={data.number}>
                              <IssueInfo issue={data} />
                              {showAd && <Ad />}
                          </React.Fragment>
                      );
                  })
                : Array.from({length: 10}).map((_, index) => <IssueListSkeleton key={index} />)}
            {isLoading && !isRefetchNeeded && <LoadingSpinner />}
            {moreData && <div ref={getNextPageRef} />}
        </ListContainerStyled>
    );
};

export default IssueListContainer;

const ListContainerStyled = styled.div`
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
