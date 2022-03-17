import poster from '../../utils/poster';
import fetcher from '../../utils/fetcher';
import Grade from '../../types/grade';

export const getGrade = () => fetcher('/api/Grade');

export const postGrade = (grade: Grade) => poster('/api/Grade', 'POST', grade);

export const putGrade = (grade: Grade) => poster('/api/Grade', 'PUT', grade);
