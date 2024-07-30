export default function hasValuesFromArray(set, array) {
  const arrSet = new Set(array);
  return set.isSupersetOf(arrSet);
}
