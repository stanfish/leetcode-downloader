/* eslint-disable camelcase */

const fs = require('fs');
const {
  numberPadZero,
  sleep,
  request,
} = require('./utils');
const {
  SLEEP_TIME,
} = require('./config');

const extMap = {
  bash: 'sh',
  c: 'c',
  cpp: 'cpp',
  csharp: 'cs',
  golang: 'go',
  java: 'java',
  javascript: 'js',
  mysql: 'sql',
  python: 'py',
  python3: 'py',
  ruby: 'rb',
  scala: 'scala',
  swift: 'swift',
};

const dataPath = 'submission';

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

// const exclude = [1,2,6,7,8,9,11,12,13,20,26,38,42,50,66,70,121,167,217,698];
// const downloadAll = true;

(async () => {
  const problems = (await request(
    {
      url: 'https://leetcode.com/api/problems/all/',
    },
  ))
    .data.stat_status_pairs
    .map(({
      stat: {
        question_id: id,
        question__title_slug: slug,
      },
      status,
    }) => ({ id, slug, status }))
    .filter(({ status }) => status === 'ac')
    // .filter(({ id }) => downloadAll || !exclude.includes(id))
    .sort((a, b) => a.id - b.id);

  console.log(problems.length, ' problems');

  for (let i = 0; i < problems.length; i++) {
    const problem = problems[i];
    await sleep(SLEEP_TIME);
    const { id, slug } = problem;
    console.log(`Checking ${id} - ${slug}`);

    try {
      const { data: { submissions_dump } } = await request({
        url: `https://leetcode.com/api/submissions/${slug}`,
      });
      const acceptedSubmission = submissions_dump.filter(({ status_display }) => status_display === 'Accepted');

      await sleep(SLEEP_TIME);
      if (acceptedSubmission.length === 0) {
        await sleep(SLEEP_TIME);
      } else {
        const { url, lang } = acceptedSubmission[0];
        await sleep(SLEEP_TIME);
        const { data: codeData } = await request({
          url: `https://leetcode.com${url}`,
        });

        const idStr = numberPadZero(id, 4);
        const matches = codeData.match(/submissionCode: '(.*)',\n {2}editCodeUrl/);
        const code = `${
          matches[1].replace(/\\u[\dA-F]{4}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)))}\n`;
        const filename = `${idStr}-${slug}.${extMap[lang]}`;

        try {
          fs.writeFileSync(`${dataPath}/${filename}`, code);
          console.log(`Downloaded ${filename}`);
        } catch (err) {
          console.log(`Error in writing file ${filename}`);
          console.log(err);
        }
        await sleep(SLEEP_TIME);
      }
    } catch (err) {
      console.log(`Error in getting ${slug}`);
      console.log(err);
    }
  }
})();
