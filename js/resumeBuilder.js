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
			"year" : "2008-2013"
		},
		{
			"name" : "Chulalongkorn University",
			"major" : "BIT",
			"degree" : "Undergraduate",
			"year" : "2014-Now",
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
			"date" : "Future",
			"description" : "You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern. Met come add cold calm rose mile what. Tiled manor court at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in. "
		},
		{
			"employer" : "J-Karn-Jeo",
			"title" : "CEO",
			"location" : "Bangkok",
			"date" : "2013",
			"description" : "Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing. "
		}
	]
}

var project = {
	"projects" : [
		{
			"title" : "ABC",
			"date" : "2013",
			"Description" : "Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as. ",
			"pic" : "images/pj01.jpg"
		},
		{
			"title" : "DEF",
			"date" : "2013",
			"Description" : "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on. ",
			"pic" : "images/pj02.jpg"
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

$("#main").append(internationalizeButton);