import {instance} from './instance';
import {PATH, PER_PAGE} from 'constants/api';

export const getIssues = async (
    page: number,
    perPage = PER_PAGE,
    state = 'open',
    sort = 'comments'
) => {
    const response = await instance.get(
        `${PATH}?page=${page}&per_page=${perPage}&state=${state}&sort=${sort}`
    );
    return response;
};

export const getIssue = async (postId: number) => {
    const response = await instance.get(`${PATH}/${postId}`);
    return response;
};
