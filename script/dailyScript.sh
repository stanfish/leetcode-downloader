cd /home/pi/dev/leetcode-downloader/
git checkout develop
node fetchSubmission.js
node mergeQA.js
git add .
git commit -m "Submission update $(date +'%D')"
git push origin develop
