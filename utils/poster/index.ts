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
<<<<<<< HEAD
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4MGZkYjRhOC05OTRjLTExZWMtYjU3NS1iNjZiZjU4Y2RkYWYiLCJlbWFpbCI6InNqcDc1QGtlbnQuYWMudWsiLCJqdGkiOiI5ODk1MDE4Ni0xMDQzLTQwYzctYjI2My05MmRhMjZhNTdiNzQiLCJuYmYiOjE2NDYyNTkzMjUsImV4cCI6MTY2MjE1MzMyNSwiaWF0IjoxNjQ2MjU5MzI1fQ.1ZBhiwGWz7GEy203V_GcCtvKUtdAtDU2xHWrO7Oz780',
=======
      Authorization: `Bearer ${authorization}`,
>>>>>>> develop
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export default poster;
