import * as readline from "readline";

export const customPrompt = async (question) => {
  return new Promise((resolve, reject) => {
    const promptInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    promptInterface.question(`${question} \n`, (answer) => {
      resolve(answer);
      promptInterface.close();
    });
  }).then((a) => a);
};
