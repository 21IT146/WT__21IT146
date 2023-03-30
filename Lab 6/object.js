const user = {
    name: 'Nehal Mahida',
    userName: 'nehal_mahida',
    password: 'password:)',
    login: function(userName, password) {
      if (userName === this.userName && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    },
  };
  
  
  user.login('nehal', 'nehal');
  user.login('nehal_mahida', 'password:)');