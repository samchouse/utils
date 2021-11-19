import ora from 'ora';
import { run } from 'npm-check-updates';
import path from 'path';

const updateDeps = async () => {
  let spinner = ora('Checking for updates').start();

  const oldLog = console.log;
  console.log = () => {};

  const updates = await run({ cwd: process.cwd(), deep: true });

  spinner.stop();
  spinner = ora('Updating dependencies').start();

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

  console.log = oldLog;
  console.log('Updated all dependencies successfully');
};

updateDeps();
