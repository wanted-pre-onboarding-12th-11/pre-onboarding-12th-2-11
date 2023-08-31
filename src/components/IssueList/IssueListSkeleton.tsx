import styled from 'styled-components';

const IssueListSkeleton = () => {
    return (
        <SkeletonStyled>
            <div className='left'>
                <div className='title'>
                    <span></span>
                </div>
                <div className='info'></div>
            </div>
            <div className='right'></div>
        </SkeletonStyled>
    );
};

export default IssueListSkeleton;

const SkeletonStyled = styled.div`
    background-color: red;
    height: 100vh;
    width: 50vw;
`;
