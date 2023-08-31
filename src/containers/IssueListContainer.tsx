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
        </>
    );
};

export default IssueListContainer;
