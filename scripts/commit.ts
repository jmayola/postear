import { exec } from "child_process";
import readline from "node:readline";
import { exit } from "node:process";

// create interface for questions
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// require commit
rl.question("Introduce your comments: ", (response) => {
  if (response) create_commit(response);
  else exit("A response is required.");
});

function create_commit(response: string) {
  exec(`git commit -am "${response}"`, (err, stdout, stderr) => {
    if (err) throw stderr;
    console.log("commit has been created; ", stdout);
  });
    exit(0);
}
