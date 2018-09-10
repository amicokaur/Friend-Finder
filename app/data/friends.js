// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsBook = [
    {
        "name":"brad",
        "photo":"http://www.gstatic.com/tv/thumb/persons/314/314_v9_bc.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Priyanka",
        "photo":"../images/friends.jpg",
        "scores":[
            5,
            3,
            4,
            4,
            5,
            2,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Sim",
        "photo":"../images/friends.jpg",
        "scores":[
            5,
            3,
            4,
            5,
            5,
            1,
            3,
            5,
            4,
            1
          ]
      }
  ];

  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsBook;
  