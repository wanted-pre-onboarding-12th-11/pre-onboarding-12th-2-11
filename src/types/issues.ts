export interface issueItemType {
    number: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
    comments: number;
}

export interface issueItemDetailType extends issueItemType {
    user: {
        login: string;
        avatar_url: string;
    };
    body: string;
}

export interface issuesStateType {
    isRefetchNeeded: boolean;
    isLoading: boolean;
    errorStatus: number | string;
    pageCount: number;
    moreData: boolean;
    issues: issueItemType[] | [];
}

export interface issueDetailStateType {
    isLoading: boolean;
    errorStatus: number | string;
    issue: issueItemDetailType;
}
