export default function getListStudentsIds(array) {
  if (!(array instanceof Array)) {
    return [];
  }

  return array.map((item) => item.id);
}