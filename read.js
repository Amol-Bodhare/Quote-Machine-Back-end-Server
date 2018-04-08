var AWS = require("aws-sdk");
const express = require('express');
const app = express();

AWS.config.loadFromPath('../aws-config/config.json');
let docClient = new AWS.DynamoDB.DocumentClient();


app.use(express.json());

app.get('/api/get-quotes/:id',(req, res) => {
    let fetchOneByKey = function () {
        var params = {
            TableName: "quotes",
            Key: {
                "quote_id": parseInt(req.params.id)
            }
        
        };
        docClient.get(params, function (err, data) {
            if (err) {
                console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
            }
            else {
                console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
                res.jsonp(data);
            }
        })
    }
    fetchOneByKey();
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));
