import {login} from './services'

const TOKEN_KEY = 'token'

export const authProvider = {
  login: async ({ username,password }) => {
      const accessToken = await login({
        username,
        password
      })

      if(!accessToken) return Promise.reject();

      localStorage.setItem(TOKEN_KEY, accessToken);
      return Promise.resolve();
  },
  logout: () => {
      localStorage.removeItem(TOKEN_KEY);
      return Promise.resolve();
  },
  checkError: ({ status }) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem(TOKEN_KEY);
          return Promise.reject();
      }
      return Promise.resolve();
  },
  checkAuth: () => {
      return localStorage.getItem(TOKEN_KEY)
          ? Promise.resolve()
          : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
