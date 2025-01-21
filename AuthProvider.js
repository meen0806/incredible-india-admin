const authProvider = {
    login: ({ username, password }) => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('auth', true);
        return Promise.resolve();
      }
      return Promise.reject();
    },
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    checkAuth: () => {
      return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
  };
  
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    
  </Admin>;
  