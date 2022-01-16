export default function selectionSort<T>(list: T[]): T[] {
  for (let i = 0; i < list.length; i++) {
    let lowest_index = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[lowest_index]) {
        lowest_index = j;
      }
    }
    // swap
    const key = list[lowest_index];
    list[lowest_index] = list[i];
    list[i] = key;
  }
  return list;
}
