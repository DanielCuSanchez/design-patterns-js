//Con node

const axios = require("axios");

const Users = (() => {
  const recurso = "https://jsonplaceholder.typicode.com/users";

  return {
    listar: async () =>
      await axios
        .get(recurso)
        .then((res) => res.data)
        .catch((e) => console.log(e)),
    crear: async (data) => {
      return await axios
        .post(recurso, {
          type: "POST",
          body: JSON.stringify(data),
        })
        .then((x) => x.json());
    },
  };
})();

(async () => {
  const users = await Users.listar();
  console.log(users);
})();

//Para el navegador
// const UsersFecth = (() => {
//   const recurso = "https://jsonplaceholder.typicode.com/users";

//   return {
//     listar: async () => {
//       return await fetch(recurso)
//         .then((response) => response.json())
//         .catch((e) => console.log(e));
//     },
//     crear: async (data) => {
//       return await fetch(recurso, {
//         type: "POST",
//         body: JSON.stringify(data),
//       }).then((x) => x.json());
//     },
//   };
// })();

// (async () => {
//   const users = await UsersFecth.listar();
//   console.log(users);
// })();
