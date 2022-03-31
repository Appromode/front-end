type Comment = {
    parentThreadId: number,
    quotedCommentId: number;
    commentText: String,
    userId: String,
    canDelete: boolean,
};

export default Comment;
