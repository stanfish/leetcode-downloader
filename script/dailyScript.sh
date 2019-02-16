cd /home/pi/code/leetcode-downloader/
git checkout develop
node --version
which node
node fetchSubmission.js
node mergeQA.js
git add .
git commit -m "Submission update $(date +'%D')"
git push origin develop
