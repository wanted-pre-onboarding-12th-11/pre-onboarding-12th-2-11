import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ad = () => {
    return (
        <AdStyled>
            <Link to='https://www.wanted.co.kr/' target='_blank'>
                <span className='ad-tag'>ad.</span>
                <img
                    src='https://cdn.discordapp.com/attachments/1143474691118485558/1146132601518686371/ad_image.png'
                    alt='원티드 광고 이미지'
                ></img>
            </Link>
        </AdStyled>
    );
};

export default Ad;

const AdStyled = styled.div`
    width: 100%;
    img {
        width: 200px;
    }
`;
