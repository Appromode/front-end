import poster from '../../utils/poster';
import fetcher from '../../utils/fetcher';
import Marks from '../../types/marks';

export const getMark = () => fetcher('/api/Mark');

export const postMark = (marks: Marks) => poster('/api/Mark', 'POST', marks);

export const putMark = (marks: Marks) => poster('/api/Mark', 'PUT', marks);
