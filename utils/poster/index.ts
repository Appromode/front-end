type Method = 'PUT' | 'PATCH' | 'POST';

const poster = <T>(url: string, method: Method, data: object | string, remote: boolean = true):
  Promise<T> => {
  const URI = remote ? `${process.env.NEXT_PUBLIC_API_ROUTE}${url}` : url;

  return fetch(URI, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default poster;
