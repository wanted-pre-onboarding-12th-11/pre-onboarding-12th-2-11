import { instance } from './instance';
import { PATH } from 'constants/api';


export const getIssues = async (page: number, perPage = 24, state = 'open', sort = 'comments') => {
  const response = await instance.get(
    `${PATH}?page=${page}&per_page=${perPage}&state=${state}&sort=${sort}`
  );
  return response;
};

export const getIssue = async (postId: number) => {
  const response = await instance.get(`${PATH}/${postId}`);
  return response;
};