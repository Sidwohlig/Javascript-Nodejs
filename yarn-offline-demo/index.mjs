// import chalk from 'chalk';

// console.log(chalk.green('Success!'));

// import _ from 'lodash';

// const original = { name: 'John', age: 30 };
// const copy = _.cloneDeep(original);
// console.log(chalk.blue('Original:', original));
// console.log(chalk.blue('Copy:', copy));

//Fetch data from a local file with Thrid Party Library and async function

// import { readFile } from 'fs/promises';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import chalk from 'chalk';

// // Setup __dirname for ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Path to the .txt file
// const filePath = path.join(__dirname, 'data.txt');

// async function readAndDisplayJson() {
//   try {
//     const fileContent = await readFile(filePath, 'utf-8');

//     // Parse file content
//     const jsonData = JSON.parse(fileContent);

//     console.log(chalk.green('✅ Successfully read and parsed data:\n'));

//     for (const [key, value] of Object.entries(jsonData)) {
//       console.log(chalk.blue(`${key}:`), chalk.yellow(`${value}`));
//     }
//   } catch (err) {
//     console.error(chalk.red('❌ Error reading or parsing file:'), err.message);
//   }
// }

// readAndDisplayJson();



// Axios example
// index.mjs

async function run() {
  try {
    // Dynamically import fs/promises and axios
    const fs = (await import('fs/promises'));
    const axios = (await import('axios')).default; // axios is a default export

    // Read config file
    const config = await fs.readFile('config.json', 'utf8');
    const { userId } = JSON.parse(config);

    // Fetch user data
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Write to output.json
    await fs.writeFile('output.json', JSON.stringify(res.data, null, 2));

    console.log("✅ User info saved to output.json");
  } catch (err) {
    console.error("❌ Something went wrong:", err.message);
  }
}

run();
