export const routes = {
  home: {
    path: "/",
  },

  questions: {
    path: "/questions",
    js: {
      path: "/questions/js/:id",
    },
    react: {
      path: "/questions/react/:id",
    },
  },
};
