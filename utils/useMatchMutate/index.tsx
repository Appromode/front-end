import { useSWRConfig } from 'swr';

function useMatchMutate() {
  const { cache, mutate } = useSWRConfig();

  return (matcher: RegExp = /^\/api\//, ...args: []) => {
    if (!(cache instanceof Map)) {
      throw new Error('matchMutate requires the cache provider to be a Map instance');
    }

    const keys: string[] = [];

    Array.from(cache.keys()).forEach((key) => {
      if (matcher.test(key)) {
        keys.push(key);
      }
    });

    const mutations = keys.map((key) => mutate(key, ...args));

    return Promise.all(mutations);
  };
}

export default useMatchMutate;
