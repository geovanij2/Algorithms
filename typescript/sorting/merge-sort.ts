export default function mergeSort<T>(list: T[]): T[] {
  if (list.length == 1) {
    return list;
  }
  const halfLength = (list.length / 2) >> 0; // ugh! js sucks
  const left = mergeSort(list.slice(0, halfLength));
  const right = mergeSort(list.slice(halfLength, list.length));
  return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
  let i = 0;
  let j = 0;
  const ret: T[] = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      ret.push(left[i]);
      i++;
    } else {
      ret.push(right[j]);
      j++;
    }
  }
  if (i >= left.length) {
    // left finish, so we add rest of right
    for (; j < right.length; j++) ret.push(right[j]);
  }
  if (j >= right.length) {
    // right finish, so we add rest of left
    for (; i < left.length; i++) ret.push(left[i]);
  }
  return ret;
}
