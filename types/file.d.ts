import Id from './id';

type File = Id & {
    fileName: string;
    fileDescription: string;
    uploadedAt: string;
    fileExtentsion: string;
    fileType: string;
    fileVersion: string;
};

export default File;
