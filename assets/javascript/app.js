 
//initialize Firebase
  var config = {
    apiKey: "AIzaSyAmzFi9GKoB7V6APAZr3goNsZnRGlaDCXA",
    authDomain: "maidenvoyage-9fa43.firebaseapp.com",
    databaseURL: "https://maidenvoyage-9fa43.firebaseio.com",
    projectId: "maidenvoyage-9fa43",
    storageBucket: "maidenvoyage-9fa43.appspot.com",
    messagingSenderId: "795370132163"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

    // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

    // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

    // Uploads employee data to the database
  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);