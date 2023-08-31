import styled from 'styled-components';

const LoadingSkeleton = () => {
    return (
        <LoadingSkeletonStyled>
            <div className='left'>
                <div className='title'>
                    <span></span>
                </div>
                <div className='info'></div>
            </div>
            <div className='right'></div>
        </LoadingSkeletonStyled>
    );
};

export default LoadingSkeleton;

const LoadingSkeletonStyled = styled.div`
    background-color: red;
    height: 100vh;
    width: 50vw;
`;
