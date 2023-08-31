export interface issueItemType {
    number: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
    comments: number;
}
