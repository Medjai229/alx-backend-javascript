const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line !== '');
    lines.shift();
    const students = lines.map((line) => line.split(','));

    let result = `Number of students: ${students.length}\n`;

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    Object.keys(fields).forEach((field) => {
      result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    });
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(process.argv[2]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${data}`);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
