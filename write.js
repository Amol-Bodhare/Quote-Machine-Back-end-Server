var AWS = require("aws-sdk");
AWS.config.loadFromPath('../aws-config/config.json');

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        
            "data": {
              "author": "author",
              "quote": "quote"
            },
            "quote_id": 3
          
    };
    var params = {
        TableName: "quotes",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();