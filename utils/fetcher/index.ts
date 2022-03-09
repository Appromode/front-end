export const fetcher = async (url: string) => {
  const responseToken = await fetch('/api/token');

  const { token } = await responseToken.json();

  return fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export default fetcher;
