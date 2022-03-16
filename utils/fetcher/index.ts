const fetcher = async (url: string) => {
  const response = await fetch('/api/token');

  const authorization = await response.text();

  return fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${url}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Access-Control-Allow-Credentials': '*',
      Authorization: `Bearer ${authorization}`,
    },
  }).then((data) => data.json());
};

export default fetcher;
