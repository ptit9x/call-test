// Require the twilio and express modules
var twilio = require('twilio'),
    express = require('express');

// Create an express application
var app = express();

// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {

    // Create an object which will generate a capability token
    // Replace these two arguments with your own account SID
    // and auth token:
    var capability = new twilio.Capability(
      'ACebd7d3a78e2fdda9e51239bad6b09f97',
      '8d2af0937ed2a581dbb19f70dd1dd43b'
    );

    // Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming('kevin');
    capability.allowClientOutgoing('AP5d46bf675557ec0f73b1d08afcfcdc75');

    // Render an HTML page which contains our capability token
    res.render('index.ejs', {
        token:capability.generate()
    });
});

app.listen(1337);
console.log('Visit http://localhost:1337/ to accept inbound calls!');
