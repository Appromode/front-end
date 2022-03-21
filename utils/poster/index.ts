type Method = 'PUT' | 'PATCH' | 'POST';

const poster = async<T>(url: string, method: Method, data: object | string, remote: boolean = true):
  Promise<T> => {
  const URI = remote ? `${process.env.NEXT_PUBLIC_API_ROUTE}${url}` : url;

  const res = await fetch('/api/token');

  const authorization = await res.text();

  return fetch(URI, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${authorization}`,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default poster;
