export default function getStudentsByLocation(array, city) {
  if (!(array instanceof Array) || (typeof city !== 'string')) {
    return [];
  }

  return array.filter((student) => student.location === city);
}
