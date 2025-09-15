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
      // add one in order to preload next version
      const commits =  parseInt(stdout) + 1 
      const StringCommits = commits.toString()
      // by using the number of commits, convert them to a version like string
      convert_to_version(StringCommits);
    }
  });

  function convert_to_version(commits: string) {
    const get_version = format_version(commits);
    write_to_version_file(get_version);
  }

  function format_version(commits: string) {
    switch (process.env.state) {
      case "alpha":
        return `0.0.${commits}`;
      case "beta":
        return `0.1.${commits}`;
      case "release":
        return `1.0.${commits}`;
      default:
        return `0.0.${commits}`;
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
VersionWriter()
