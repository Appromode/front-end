import poster from '../../utils/poster';
import Group from '../../types/group';

const postGroup = (group: Group) => poster('/api/Group', 'POST', group);

export default postGroup;
