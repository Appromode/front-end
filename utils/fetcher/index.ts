const fetcher = (url: string) => fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${url}`).then((res) => res.json());

export default fetcher;
