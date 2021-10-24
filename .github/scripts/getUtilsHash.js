const fs = require('fs');

const getHash = () => {
  const file = fs.readFileSync('README.md', 'utf8');
  if (!file) throw new Error('README.md not found');

  return file
    .match(
      /^\*\*Android:\*\* \[Latest release\]\(https:\/\/xenfo-utils\.s3\.us-east-1\.amazonaws\.com\/[\w\d\.\/]*utils-[\w\d]+-signed\.apk\)$/gm
    )[0]
    .match(/utils-[\w\d]+-signed\.apk/)[0]
    .match(/-[\w\d]+-/)[0]
    .replace('-', '');
};

console.log(getHash());
