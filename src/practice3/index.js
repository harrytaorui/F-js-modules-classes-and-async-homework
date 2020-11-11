export const getPoetry = async () => {
  const result = await fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
  });
  const text = await result.json();
  return [text.origin, text.author, text.content];
};

// export const getPoetry = () => {
//   return fetch("https://v1.jinrishici.com/all.json", {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((text) => {
//       return [text.origin, text.author, text.content];
//     });
// };
