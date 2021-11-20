import { run } from 'npm-check-updates';
import ora from 'ora';
import path from 'path';
import shell from 'shelljs';

const logger = console.log;
console.log = () => {};

const updateDeps = async () => {
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

  const install = Promise.resolve(
    shell.exec('yarn', { cwd: process.cwd(), silent: true })
  );
  const updater = Promise.resolve(
    Object.keys(updates).forEach(async (key) => {
      const subUpdates = updates[key];
      if (Object.entries(subUpdates).length > 0)
        await run({
          cwd: path.join(process.cwd(), path.dirname(key)),
          upgrade: true
        });
    })
  );

  await updater.then(async () => install.then(() => spinner.stop()));

  console.log = logger;
  console.log('Updated all dependencies successfully');
};

updateDeps();
