type Thread = {
    threadTitle: String,
    threadContent: String,
    linkedProjectId: number,
    totalMembers: string | number,
    threadStatus: boolean,
    userId: String,
    canDelete: boolean,
};

export default Thread;
