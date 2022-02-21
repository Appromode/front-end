import { Id } from '../../types/user';

function getById(data: Id[], id: number | string): Id {
  return data.find((item) => item.id === id);
}

export default getById;
