import { customPrompt } from "../custom-prompt.mjs";

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

const demoGithubUser = async () => {
  try {
    let name = await customPrompt("Enter a name that is on github?");
    const githubResponse = await fetch(`https://api.github.com/users/${name}`);
    if (githubResponse.status == 200) {
      const user = await githubResponse.json();
      console.log(`Full name: ${user.name}.`);
      return user;
    } else if (githubResponse.status == 404) {
      console.log("No such user, please reenter.");
      return await demoGithubUser();
    } else {
      throw new HttpError(githubResponse);
    }
  } catch (error) {
    console.error(error);
  }
};

console.log("Starting github user demo...", await demoGithubUser());
