console.log();
var bulls_cows_solver = require('./bulls-cows-solver.js');
QUnit.test("Test", function(assert) {
	assert.deepEqual(bulls_cows_solver([
			{guess:'1234', result:'1Б3К'},
		]),
		[ '1342', '1423', '2314', '2431', '3124', '3241', '4132', '4213' ]
	);
	assert.strictEqual(bulls_cows_solver([]), undefined);
});
QUnit.test("Invalid Input Detection", function(assert) {
	assert.throws(function(){bulls_cows_solver();}, /Invalid input./, "Detect invalid input.");
	assert.throws(function(){bulls_cows_solver("1324");}, /Invalid input./, "Detect invalid input.");
	assert.throws(function(){bulls_cows_solver(23432);}, /Invalid input./, "Detect invalid input.");
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'32a9',},
				{guess:'3234', result:'1Б3К'},
			]);
		},
		/Input 2 is invalid./,
		"Detect abnormal record."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'32a9', result:'0Б0К'},
				{guess:'3234', result:'1Б3К'},
			]);
		},
		/Input 2 is invalid./,
		"Detect non-number input."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'678', result:'0Б0К'},
				{guess:'3234', result:'1Б3К'},
			]);
		},
		/Input 2 is invalid./,
		"Detect number shorter than 4."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'67890', result:'0Б0К'},
				{guess:'3234', result:'1Б3К'},
			]);
		},
		/Input 2 is invalid./,
		"Detect number longer than 4."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'5678', result:'0Б0К'},
				{guess:'3234', result:'1Б3К'},
				{guess:'1234', result:'1Б3К'},
			]);
		},
		/Input 3 is invalid./,
		"Number with duplicated digit."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'1234', result:'1Б4К'},
				{guess:'1234', result:'2Б1К'},
			]);
		},
		/Input 2 is invalid./,
		"Invalid guess result."
	);
	assert.throws(
		function(){
			bulls_cows_solver([
				{guess:'1234', result:'1Б3К'},
				{guess:'4234', result:'1Б4К'},
				{guess:'1234', result:'2Б1К'},
			]);
		},
		/Input 2 is invalid./,
		"Invalid number and guess result."
	);
});
