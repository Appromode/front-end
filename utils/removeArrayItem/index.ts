function removeArrayItem<T>(array: T[], indexValue: number) : T[] {
  return array.length > 1 ? array.filter((value, index) => index !== indexValue) : [];
}

export default removeArrayItem;
