var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	var fName = request.query.fName ? request.query.fName : "missing parameter: fName";
	var lName = request.query.lName ? request.query.lName : "missing parameter: lName";

	var ec2 = new AWS.EC2();

	ec2.describeInstances({}, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else {     
		console.log(data);           // successful response
		callback(null, data);
	}


	});
	
}

exports.lab = task