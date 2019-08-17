const fs = require("fs");
const path = require("path");

const getGitHash = () => {
  const rev = fs
    .readFileSync(path.resolve(__dirname, "../../", ".git/HEAD"))
    .toString();
  if (rev.indexOf(":") === -1) {
    return rev;
  } else {
    const hash = fs
      .readFileSync(
        path.resolve(
          __dirname,
          "../../",
          ".git/",
          rev.substring(5).replace(/\n/g, ""),
        ),
      )
      .toString();
    return hash;
  }
};

process.env.GIT_HASH = getGitHash();
