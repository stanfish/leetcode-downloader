const fs = require('fs');

let output = '';

const submissions = fs.readdirSync('submission')
  .map(filename => filename.match(/(\d+)([\w\d-]+)\.\w+/));

submissions.forEach((submission) => {
  try {
    const question = fs.readFileSync(`problem/${submission[1]}${submission[2]}.txt`);
    const solution = fs.readFileSync(`submission/${submission[0]}`);

    output += `
Question ${submission[1]}:
${question}

${solution}
--------------------------------------------

`;
  } catch (err) {
    console.log(err);
  }
});

output = output.replace(/\n{3,}/g, '\n');

try {
  fs.writeFileSync('leetcode.txt', output);
  console.log('Success in writing file leetcode.txt');
} catch (err) {
  console.log('Error in writing file leetcode.txt');
  console.log(err);
}
