export interface issueItemType {
    number: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
    comments: number;
}

export interface issuesStateType {
    isLoading: boolean;
    errorStatus: number | string;
    pageCount: number;
    moreData: boolean;
    issues: issueItemType[] | [];
}
