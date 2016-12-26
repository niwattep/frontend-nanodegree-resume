console.log("Can you see me?");

var bio = {
	"name" : "Niwat Jansutep",
	"role" : "Full-stack Developer",
	"contacts" : {
		"email" : "watniwat@hotmail.com",
		"phone" : "0873526791",
		"github" : "niwattep",
		"city" : "Bangkok"
	},
	"pic" : "images/me.png",
	"message" : "Hello! This is my resume! Thank you for visiting!",
	"skills" : ["bash", "java", "js", "Linux", "c++", "html", "css"]
};

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
			"degree" : "Undergraduate",
			"year" : 2014,
			"city" : "Bangkok",
		}
	],
	"online_course" : ["git & GitHub", "Linux Foundation", "Javascript Basic", "Intro to HTML and CSS"]
};	

var work = {
	"jobs" : [
		{
			"employer" : "Udacity",
			"title" : "Full-stack Developer",
			"location" : "US",
			"date" : 2018,
			"description" : "Mostly front-end developer"
		},
		{
			"employer" : "J-Karn-Jeo",
			"title" : "CEO",
			"location" : "Bangkok",
			"date" : 2013,
			"description" : "I am a CEO, I have a power!"
		}
	]
}

var project = {
	"projects" : [
		{
			"title" : "ABC",
			"date" : 2017,
			"Description" : "It is a test project",
			"pic" : "images/197x148.gif"
		},
		{
			"title" : "DEF",
			"date" : 2017,
			"Description" : "It is a test project",
			"pic" : "images/197x148.gif"
		}
	]
}

//Because there is "topContact" in header, if we use append(), Our name and role will appear below contacts. So use prepend instead.
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedHeaderRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

for (contact in bio.contacts) {
	var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
	formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
	$("#topContacts").append(formattedContact);
}

var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	};	
}

$("#workExperience").append(HTMLworkStart);
for (var i = 0; i < work.jobs.length; i++) {
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerAndTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].date);
	$(".work-entry:last").append(formattedDates);
	
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	$(".work-entry:last").append(formattedLocation);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription);
}