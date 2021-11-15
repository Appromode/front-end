const useFilter = (array: string[], input: string): string[] => (
  input ? array.filter((data) => data.toLowerCase().includes(input)) : []
);

export default useFilter;
