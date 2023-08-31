import {IssuesController} from 'controllers/IssuesController';

import Ad from 'components/IssueList/Ad';
import {useRecoilValue} from 'recoil';
import {issuesStateAtom} from 'stores/atom';
import {useEffect} from 'react';
import NotFound from 'pages/NotFound';
import {useInfiniteScroll} from 'hooks/useInfiniteScroll';
import Item from 'components/common/IssueInfo';
import React from 'react';
import LoadingSkeleton from 'components/IssueList/IssueListSkeleton';
import LoadingSpinner from 'components/common/LoadingSpinner';

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
        <>
            {issues.length > 0 ? (
                issues.map((data, index) => {
                    const showAd = (index + 1) % 4 === 0;
                    return (
                        <React.Fragment key={data.number}>
                            <Item issue={data} />
                            {showAd && <Ad />}
                        </React.Fragment>
                    );
                })
            ) : (
                <LoadingSkeleton />
            )}
            {isLoading && !isRefetchNeeded && <LoadingSpinner />}
            {moreData && <div ref={getNextPageRef} />}
        </>
    );
};

export default IssueListContainer;
