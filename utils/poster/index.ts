type Method = 'PUT' | 'PATCH' | 'POST';

const poster = (url: string, method: Method, data: object) => (
  fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4MGZkYjRhOC05OTRjLTExZWMtYjU3NS1iNjZiZjU4Y2RkYWYiLCJlbWFpbCI6InNqcDc1QGtlbnQuYWMudWsiLCJqdGkiOiI5ODk1MDE4Ni0xMDQzLTQwYzctYjI2My05MmRhMjZhNTdiNzQiLCJuYmYiOjE2NDYyNTkzMjUsImV4cCI6MTY2MjE1MzMyNSwiaWF0IjoxNjQ2MjU5MzI1fQ.1ZBhiwGWz7GEy203V_GcCtvKUtdAtDU2xHWrO7Oz780',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
);

export default poster;
