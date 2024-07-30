export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!(array instanceof Array) || (typeof city !== 'string') || !(newGrades instanceof Array)) {
    return [];
  }

  return array.filter((student) => student.location === city).map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    return { ...student, grade };
  });
}
