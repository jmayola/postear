import { exec } from "child_process";
import { writeFile } from "fs";
import path from "path";
import process, { exit } from "process";

export default function VersionWriter() {
  exec("git rev-list HEAD --count", (error, stdout, stderr) => {
    if (error) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    if (stdout) {
      const commits = stdout.split("");
      // by using the number of commits, convert them to a version like string
      convert_to_version(commits);
    }
  });

  function convert_to_version(commits: string[]) {
    const get_version = format_version(commits);
    write_to_version_file(get_version);
  }

  function format_version(commits: string[]) {
    const alpha: number = 0;
    const beta: number = 1;
    const release: number = 2;
    switch (process.env.state) {
      case "alpha":
        return `0.0.${commits[alpha]}`;
      case "beta":
        return `0.${commits[alpha]}.${commits[beta]}`;
      case "release":
        return `${commits[alpha]}.${commits[beta]}.${commits[release]}`;
      default:
        return `0.0.${commits[alpha]}`;
    }
  }

  function write_to_version_file(version: string) {
    writeFile(
      path.join(__dirname, "../public/VERSION"),
      version,
      "utf-8",
      (err) => {
        if (err) throw err;
        console.log(
          "File version has been saved correctly!: Version Output: ",
          version
        );
      }
    );
  }
  return true
}
