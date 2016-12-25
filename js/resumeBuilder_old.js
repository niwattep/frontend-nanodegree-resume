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

var skills = ["bash", "java", "js", "Linux", "c++", "html", "css"];

var bio = {
	"name" : "Niwat Jansutep",
	"role" : "Full-stack Developer",
	"contact" : "watniwat@hotmail.com",
	"pic" : "images/me.png",
	"message" : "Hello! This is my resume! Thank you for visiting!",
	"skills" : skills
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.pic);
$("#main").append(bio.message);
$("#main").append(bio.skills);

var work = {};
work.position = "Full-stack Developer";
work.employer = "Udacity";
work.year = 2017;
work.city = "Bangkok";

var oldeducation = {};
oldeducation.school = "Chulalongkorn University";
oldeducation.year = 2014;
oldeducation.city = "Bangkok";

$("#main").append(work["position"]);
$("#main").append(education.school);

var education = {
	"schools" : [
		{
			"name" : "TUP",
			"major" : "Maths-Art",
			"degree" : "Secondary Education",
			"city" : "Bangkok",
			"year" : 2008
		},
		{
			"name" : "Chulalongkorn University",
			"major" : "BIT",
			"degree" : "Undergraduate"
			"year" : 2014,
			"city" : "Bangkok"
			"online_course" : ["git & GitHub", "Linux Foundation", "Javascript Basic", "Intro to HTML and CSS"]
		}
	]
}		
		
