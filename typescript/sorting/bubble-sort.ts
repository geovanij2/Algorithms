export default function bubbleSort<T>(list: T[]): T[] {
  for (let i = 0; i < list.length; i++) {
    for (let j = list.length - 1; j > i; j--) {
      if (list[j] < list[j - 1]) {
        // swap
        const aux = list[j];
        list[j] = list[j - 1];
        list[j - 1] = aux;
      }
    }
  }
  return list;
}
