var Dictionary = require('./language/dictionary.js');

/*class InterestingWorld {

  constructor (API_KEY) {
  	var obj =  {
		'key': 2018, 
		'thisDayCount': 1001,
		'thisWeekCount': 2002,
		'thisMonthCount': 3003,
		'thisYearCount': 4004
		};
  	return obj;
  }

  get getLangResponse() {
  	return Dictionary('God');
  }
}*/

var InterestingWorld = function(API_KEY) {
	var obj =  {
		'key': 2018, 
		'thisDayCount': 1001,
		'thisWeekCount': 2002,
		'thisMonthCount': 3003,
		'thisYearCount': 4004
		};
  	//return obj;
  	this.getLangResponse = function(word) {
  		return new Dictionary('Syam Danda');
  	}
}

function AssociateAPI(interestingWorldObj) {
    var interestingWorld = new InterestingWorld();


}



module.exports = InterestingWorld;