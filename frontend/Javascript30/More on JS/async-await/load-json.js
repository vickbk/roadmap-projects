// rerwiting with async await

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

const loadJson = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    alert(error);
  }
};
