import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ad = () => {
    return (
        <AdStyled>
            <span className='ad-tag'>ad.</span>
            <Link to='https://www.wanted.co.kr/' target='_blank'>
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
    height: 60px;
    border-bottom: 1px solid var(--listBorder);
    position: relative;
    cursor: pointer;

    .ad-tag {
        padding: 4px;
        position: absolute;
        margin-top: 5px;
        right: 10px;
        color: var(--textSubtitle);
        border-radius: 4px;
        background-color: var(--listItemBg);
    }

    a {
        height: 100%;
        display: flex;
        justify-content: center;
    }
    img {
        width: 200px;
        align-self: center;
    }
`;
