export default function getStudentIdsSum(array) {
  if (!(array instanceof Array)) {
    return [];
  }

  return array.reduce((accumulator, student) => accumulator + student.id, 0);
}
