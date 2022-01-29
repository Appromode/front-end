export type Project = {
  createdAt: string;
  ethicsAccepted: boolean;
  ethicsForm: any;
  ethicsFormId: string | number;
  isClosed: boolean;
  projectId: string | number;
  projectName: string;
  updatedAt: string;
}

export type Projects = Project[];

export default Project;
