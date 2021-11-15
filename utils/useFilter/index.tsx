function useFilter(array: string[], input: string) {
  return input ? array.filter((data) => data.toLowerCase().includes(input)) : [];
}

export default useFilter;
