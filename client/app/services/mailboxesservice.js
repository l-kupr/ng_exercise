export default function MailboxesServiceFunction($http, $q) {
    let mailboxes = null;
    let letters = null;
    let currentMailboxLetters = null;
    let currentMailbox = null;
    let maxId;
    this.getCurrentMailbox = () => currentMailbox
    this.getMailboxes = () => {
      if (mailboxes) return $q.resolve(mailboxes);
      return $http.get('mailboxes.json').then(res => mailboxes = res.data)
    };
    this.getLetters = (email) => {
      if (currentMailboxLetters && currentMailbox == email) return $q.resolve(currentMailboxLetters);
      function condition(item, index, array) {
        var result = false;
        if (item.to == email || item.from == email) result = true;
        return result;
      };
      if (letters) {
        currentMailboxLetters = letters.filter(condition);
        currentMailbox = email;
        return $q.resolve(currentMailboxLetters);
      }
      return $http.get('letters.json', {transformResponse: function(data){
          data = JSON.parse(data);
          for (var i = 0; i < data.length; i++) data[i].id = i;
          maxId = data.length;
          //console.log(res);
          return data;
        }
      }).then(res => {
        letters = res.data;
        currentMailbox = email;
        currentMailboxLetters = letters.filter(condition);
        return currentMailboxLetters;
      })
    };
    this.getLetter = (id) => {
      if (letters) {
        for (let letter of letters)
          if (letter.id == id) {
            return letter;
            break;
        }
      }
      return false;
    }
    this.deleteLetter = item => {
      letters.splice(letters.indexOf(item), 1);
      currentMailboxLetters.splice(currentMailboxLetters.indexOf(item), 1);
    };
    this.sentLetter = (letter) => {
      let request = $q.defer();
      // setTimeout вместо запроса
      setTimeout(() => {
        letter.id = maxId;
        maxId = maxId + 1;
        letter.received = Date.now();
        currentMailboxLetters.unshift(letter);
        if (letters.unshift(letter) > 0) {console.log(letters); request.resolve(true);}
        else request.reject(new Error("Ошибка при отправке сообщения")); 
         }, 100);
      return request.promise;
    }
  }