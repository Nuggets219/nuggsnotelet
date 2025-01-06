/*
i am nuggets and today i will be your chef in...
COOKING UP HTML!

i will probably be wishing that it was me being cooked by the end of this!

note that "nodelet" and "notelet" are interchangable in these comments because
i can never manage to spell it one way or the other.
*/

// Our first Recipie is.... *drumroll*
// The HTML itself!!! of course!
// Time to remember/google how to do basic JS...

//vars place. idk. 

var noteletHolder = document.getElementById("noteletHolder"); // very very important, i feel, so it's just getting defined 


//end vars. for now. they always come back...

function main() { //Builds the nodelet, then runs the scripts. only run once or i WILL pull your eyes outta their damn sockets.
  /*
  nodelet will be built in whatever order i see fit- HOWEVER
  Most likely parent-child-child
  so #nodeletHolder will be declared, then #netherlandsTime, and all of its <p> tags. 
  all functions that must be run right away will do so AFTER the nodelet is done constructing.
  */

  //time functions
  var nlTimeDiv = document.createElement("div");
  nlTimeDiv.setAttribute("id","netherlandsTimeDiv");
  noteletHolder.appendChild(nlTimeDiv); //time div is added, now we can set up the internals.
  var nlPar1 = document.createElement("p");
  nlPar1.innerHTML = "Time in the Netherlands:";
  nlTimeDiv.appendChild(nlPar1); //staple it on
  var nlTimePar = document.createElement("p"); //making the actual paragraph that holds the time
  nlTimePar.setAttribute("id","netherlandsTimeParagraph");
  nlTimeDiv.appendChild(nlTimePar); //ka-CHUNK
  var timeButton = document.createElement("button");
  timebutton.setAttribute("id","timeButton");
  timebutton.setAttribute("class","button");
  
  //time function construction complete.
  
}
