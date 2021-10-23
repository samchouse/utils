const fs = require('fs');

const readWriteAsync = (newURL) => {
  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) throw err;

    const updatedReadme = data.replace(
      /^\*\*Android:\*\* \[Latest release\]\(https:\/\/xenfo-utils\.s3\.us-east-1\.amazonaws\.com\/[\w\d\.\/]*utils-[\w\d]+-signed\.apk\)$/gm,
      `**Android:** [Latest release](${newURL})`
    );

    fs.writeFile('README.md', updatedReadme, 'utf8', (err) => {
      if (err) throw err;

      console.log('README updated successfully!');
    });
  });
};

readWriteAsync(process.argv.slice(2)[0]);
