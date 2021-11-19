import ora from 'ora';
import { run } from 'npm-check-updates';
import path from 'path';

const logger = console.log;
console.log = () => {};

const updateDeps = async () => {
  let spinner = ora('Checking for updates').start();

  const updates = await run({ cwd: process.cwd(), deep: true });

  spinner.stop();
  spinner = ora('Updating dependencies').start();

  if (Object.entries(updates).length === 0) 
    return console.log('Dependencies are up to date')

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

  await updater.then(() => spinner.stop());

  console.log = logger;
  console.log('Updated all dependencies successfully');
};

updateDeps();
