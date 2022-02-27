const { run } = require('npm-check-updates');
const path = require('path');
const shell = require('shelljs');

const logger = console.log;
console.log = () => {};

const updateDeps = async () => {
  const ora = (await import('ora')).default;

  let spinner = ora('Checking for updates').start();
  const updates = await run({ cwd: process.cwd(), deep: true });
  spinner.stop();

  if (
    !Object.keys(updates)
      .map((key) => {
        const subUpdates = updates[key];
        if (Object.entries(subUpdates).length === 0) return true;
        return false;
      })
      .includes(false)
  ) {
    console.log = logger;
    return console.log('Dependencies are up to date');
  }

  spinner = ora('Updating dependencies').start();

  Object.keys(updates).forEach(async (key) => {
    const subUpdates = updates[key];
    if (Object.entries(subUpdates).length > 0)
      await run({
        cwd: path.join(process.cwd(), path.dirname(key)),
        upgrade: true
      });
  });
  shell.exec('yarn', { cwd: process.cwd(), silent: true });
  spinner.stop();

  console.log = logger;
  console.log('Updated all dependencies successfully');
};

updateDeps();
