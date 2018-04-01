var request = require('request');

class Dictionary {
  constructor(word) {
    request.get(
        'https://api.datamuse.com/words?ml=' + word,
        { json: true},
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                return body;
            }
        }
    );
  }
}

module.exports = Dictionary;