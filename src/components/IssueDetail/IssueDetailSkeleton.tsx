import styled from 'styled-components';

const IssueDetailSkeleton = () => {
    return <SkeletonStyled></SkeletonStyled>;
};

export default IssueDetailSkeleton;

const SkeletonStyled = styled.div`
    background-color: red;
    height: 100vh;
    width: 50vw;
`;
