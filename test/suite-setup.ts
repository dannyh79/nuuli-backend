import { exec } from 'child_process';

export default async () => {
  await new Promise<void>((resolve, reject) => {
    const process = exec('npm run db:reset:test', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return reject(error);
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      resolve();
    });

    process.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    process.stderr.on('data', (data) => {
      console.error(data.toString());
    });
  });
};
