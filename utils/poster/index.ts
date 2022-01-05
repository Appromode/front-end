type Method = 'PUT' | 'PATCH' | 'POST';

const poster = (url: string, method: Method, data: object) => (
  fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
);

export default poster;
