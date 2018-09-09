// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsBook = require("../data/friends.js");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsBook);
  });

  
  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var thisUser = req.body;
    var differences = [];
    for (var i =0; i < friendsBook.length; i++) {
        var userSurvey = thisUser.scores
        var userDiffrence = friendsBook[i].scores
        var totalDiffrence = 0;
        for (var j = 0; j < userDiffrence.length; j++){
            totalDiffrence += math.abs(userDiffrence[j]-userSurvey[j])
        }

    }
    score.push(totalDiffrence)
    var bestMatch = math.min(differences)
    var bestMatchUser = score.indexof(bestMatch)
    var bestCompatability = friendsBook[bestMatchUser]
        res.json(bestCompatability)
  
  });
        
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware


  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   
//     
};
