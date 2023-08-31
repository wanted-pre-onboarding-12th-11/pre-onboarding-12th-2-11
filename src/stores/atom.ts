import {atom} from 'recoil';
import {issuesStateType} from 'types/issues';

export const issuesStateAtom = atom<issuesStateType>({
    key: 'issuesStateAtom',
    default: {isLoading: true, errorStatus: 0, pageCount: 1, moreData: true, issues: []},
});
