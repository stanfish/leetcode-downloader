# LeetCode Downloader

Download your accepted submissions and questions from LeetCode!

This repo refers to [noootown/leetcode-downloader](https://github.com/noootown/leetcode-downloader) with some fixes, graphql endpoint update and eslint.

Note: This branch contains my own leetcode solutions to those problems I have tried out

## Start

```
$ yarn
$ cp config-tmpl.json config.json
```

Do the following steps to get your cookie at LeetCode
1. Open Chrome and login [leetcode.com](https://leetcode.com/).
2. Open developer tools and network tab.
3. Open one request sending to LeetCode and copy the cookie.
4. Paste it into `config.json`.

![GitHub Logo](./cookie.png)

(Note: need to escape if there is double quote " in cookie)

```
# fetch the latest accepted submission of each question to folder submission
$ node fetchSubmission.js

# fetch the description of each question to folder problem
$ node fetchQuestion.js

# merge questions and accepted submissions to leetcode.txt
$ node mergeQA.js
```


## Daily Cron Job
### Script the run daily or weekly to update the questions and submissions to github repository

`crontab -e`

Add

`0 6 * * * /PATH/script/dailyScript.sh`



## License

MIT
