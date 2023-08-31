import MarkdownPreview from '@uiw/react-markdown-preview';

const IssueBody = ({source}: {source: string}) => {
    return <MarkdownPreview source={source} />;
};

export default IssueBody;
