cd /home/pi/code/leetcode-downloader/

git checkout develop
node fetchSubmission.js
node fetchQuestion.js
node mergeQA.js
git add .
git commit -m "Problems and submission update $(date +'%D')"
git push origin develop
