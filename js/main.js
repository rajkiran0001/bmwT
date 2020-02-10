$( function() {
  $( "#from_datepicker" ).datepicker(),
  $( "#till_datepicker" ).datepicker()
} );

$(function () {

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

function createHTML(demoData) {

console.log(demoData);

var theTemplateScript = $("#address-template").html();

// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// Define our data object
var array=[{"station":"RCA510","bennenung":"0065","date": "2000-05-06"},{"station":"rrr10","bennenung":"5555","date": "2000-05-07"}];

///*

        var dateString = document.getElementById("from_datepicker").value;
        var end = document.getElementById("till_datepicker").value;
        // var dateString = "2000-05-06";
        var myDate = new Date(dateString);
            console.log(myDate);
            //add a day to the date
        myDate.setDate(myDate.getDate() + 1);
        console.log(myDate);
        var res = myDate.toISOString().slice(0,10).replace(/-/g,"-");
        console.log(res);

        function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].date === nameKey) {
                return myArray[i].station;
            }
        }
        }

        if (res == end){
          console.log("Equal");
      }else{
          var resultObject = search(res, array);
      }

      console.log(resultObject);

 //       */

// Pass our data to the template
var theCompiledHtml = theTemplate(array);

// Add the compiled html to the page
$('.content-placeholder').html(theCompiledHtml);

}

ourRequest.send();
  
});
