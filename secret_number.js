'use strict';
module.exports = function() {

	var secretNumber = Math.floor(Math.random() * 1000000 - 1) + 1;

	function test(){

		return secretNumber;


	}
	
	return test;

};