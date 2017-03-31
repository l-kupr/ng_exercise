import ngStorage from 'ngstorage';

export default function AuthServiceFunction ($localStorage, $q) {
  "ngInject";
  let creds = {l: 'admin', p: '123'};
  // если пользователь авторизован, в $localStorage.auth хранится 1
  let auth = $localStorage.auth || 0;
  this.isAuth = () => auth
  this.Authorize = (l,p) => {
    let request = $q.defer();
    // setTimeout вместо запроса к БД
    setTimeout(() => {
      if (l===creds.l && p===creds.p) {
        auth = 1; $localStorage.auth = 1; 
        request.resolve(true);
      }
      else
        request.reject(new Error("Ошибка авторизации")); 
    }, 100);
    return request.promise;
  }
  this.exit = () => {
    let request = $q.defer();
    setTimeout(() => {
      if (auth == 1) {auth = 0; delete $localStorage.auth; 
      request.resolve(true);}
      else request.reject(new Error("Пользователь не авторизован")); 
      }, 100);
    return request.promise;
  }
}