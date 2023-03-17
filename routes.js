const routes = [
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut - update 2";
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage Update 2";
    },
  },
];

module.exports = routes;
