import Id from '../../types/id';

function getById(data: Id[], id: number | string, idName: string): Id {
  return data.find((item) => item[idName] === id);
}

export default getById;
