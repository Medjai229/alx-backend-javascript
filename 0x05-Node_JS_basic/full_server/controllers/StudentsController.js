import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2]);
      const firstStr = 'This is the list of our students\n';
      const secondStr = `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`;
      const thirdStr = `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;
      res.send(firstStr + secondStr + thirdStr);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(process.argv[2]);
      const list = major === 'CS' ? data.csStudents.join(', ') : data.sweStudents.join(', ');
      return res.status(200).send(`List: ${list}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
