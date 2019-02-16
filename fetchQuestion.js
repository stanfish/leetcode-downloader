const fs = require('fs');
const {
  numberPadZero,
  sleep,
  request,
  // parseXpath,
} = require('./utils');
const {
  SLEEP_TIME,
} = require('./config');

const dataPath = 'problem';

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

(async () => {
  const problems = (await request(
    {
      url: 'https://leetcode.com/api/problems/all/',
    },
  ))
    .data.stat_status_pairs.map(({
      stat: {
        question_id: id,
        question__title_slug: slug,
      },
    }) => ({ id, slug })).sort((a, b) => a.id - b.id);


  const graphqlQuery = `query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        boundTopicId
        title
        titleSlug
        content
        translatedTitle
        translatedContent
        isPaidOnly
        difficulty
        likes
        dislikes
        isLiked
        similarQuestions
        contributors {
          username
          profileUrl
          avatarUrl
          __typename
        }
        langToValidPlayground
        topicTags {
          name
          slug
          translatedName
          __typename
        }
        companyTagStats
        codeSnippets {
          lang
          langSlug
          code
          __typename
        }
        stats
        hints
        solution {
          id
          canSeeDetail
          __typename
        }
        status
        sampleTestCase
        metaData
        judgerAvailable
        judgeType
        mysqlSchemas
        enableRunCode
        enableTestMode
        envInfo
        __typename
      }
    }`;

  for (let i = 0; i < problems.length; i++) {
    const problem = problems[i];
    // problems.forEach(async (problem) => {
    const { id, slug } = problem;
    const idStr = numberPadZero(id, 4);
    const filename = `${idStr}-${slug}.txt`;
    //    if (fs.existsSync(`${dataPath}/${filename}`)) {
    //      console.log(`File ${filename} exists: skipping`);
    //    } else {
    console.log(`Downloading ${slug}`);
    const { data: { data: { question: { content } } } } = await request({
      url: 'https://leetcode.com/graphql',
      method: 'post',
      data: {
        operationName: 'questionData',
        variables: { titleSlug: `${slug}` },
        query: graphqlQuery,
      },
    });

    try {
      fs.writeFileSync(`${dataPath}/${filename}`, content);
      console.log(`Downloaded ${filename}`);
    } catch (err) {
      console.log(`Error in writing file ${filename}`);
      console.log(err);
    }
    //    }
    await sleep(SLEEP_TIME);
  }
})();
