/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Niwat");

var awesomeThought = "I am Niwat and I am AWESOME!";

console.log(awesomeThought);

var funThought = awesomeThought.replace("AWESOME", "FUN");

console.log(funThought);

$("#main").append(funThought);

var name = "Niwat Jansutep";
var role = "Full-stack Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName); 
$("#header").append(formattedRole);

/*$("#header").prepend(formattedName); 
$("#header").prepend(formattedRole);*/