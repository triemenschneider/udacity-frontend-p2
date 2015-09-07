var bio = {
	"name"	: 	"Tobias Riemenschneider",
	"role"	: 	"Fast Food Ninja",
	"contacts"	: 	{
		"mobile"	: 	"123456789",
		"email"		: 	"tobi@gmail.com",
		"github"	: 	"https://github.com/tobi",
		"twitter"	: 	"@tobiasriemen",
		"location"	: 	"Germany"
	},
	"welcomeMessage"	: 	"Hi! How are you today?",
	"skills"		: 	["reading", "eating", "breathing"],
	"biopic"		: 	"http://bit.ly/1EIMloK",
	display 		: 	function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts, #footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts, #footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts, #footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts, #footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts, #footerContacts").append(formattedLocation);

		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBiopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header ul#skills").append(formattedSkills);
		}
	}
}

var work = {
	"jobs"	: 	[
		{
			"employer"		: 	"MC Donalds",
			"title"			: 	"Sous Chef de Burger",
			"location"		: 	"Munich",
			"dates"			: 	"Jan - Dec 2013",
			"description"	: 	"I killed it! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?"
		},
		{
			"employer"		: 	"Pizza Hut",
			"title"			: 	"Chef de Burger",
			"location"		: 	"Cologne",
			"dates"			: 	"Jan - Dec 2014",
			"description"	: 	"I rocked it! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?"
		},
		{
			"employer"		: 	"Burger King",
			"title"			: 	"Senior VP of Burger",
			"location"		: 	"Hamburg",
			"dates"			: 	"Jan 2015 - today",
			"description"	: 	"I'm the boss! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?"
		}
	],
	display 	: 	function() {
		for (index in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects"	: 	[
		{
			"title"			: 	"Fish Mac without Fish",
			"dates"			: 	"Jan - Dec 2013",
			"description"	: 	"Get rid of the fish. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?",
			"images"		: 	["http://bit.ly/1UA3YJ8"]
		},
		{
			"title"			: 	"Oven Time reduction",
			"dates"			: 	"Jan - Dec 2014",
			"description"	: 	"Shorten the time needed to bake it by 50%. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?",
			"images"		: 	["http://bit.ly/1NVMlVg"]
		},
		{
			"title"			: 	"Conquer the World",
			"dates"			: 	"Jan 2015 - today",
			"description"	: 	"Burgers everywhere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestias, sunt aspernatur architecto velit, quod cum nostrum dolorum iste consequuntur quisquam inventore fugit illum alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quas sit dolores sint, similique eligendi?",
			"images"		: 	["http://bit.ly/O9DgfM"]
		}
	],
	display	: 	function() {
		$("#projects").append(HTMLprojectStart);

		for (project in projects.projects) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

var education = {
	"schools"	:	[
		{
			"name"		: 	"Burger School",
			"location"	: 	"Burger Town",
			"degree"	: 	"BA Burger Sciences",
			"majors"	: 	["Table-Wiping", "Checkout Handling"],
			"dates" 	: 	2010,
			"url" 		: 	"http://bit.ly/1Nbcldy"
		},
		{
			"name"		: 	"Pizza School",
			"location"	: 	"Pizza Town",
			"degree"	: 	"BA Pizza Sciences",
			"majors"	: 	["Cutting", "Slicing"],
			"dates" 	: 	2011,
			"url" 		: 	"http://bit.ly/1LRBFDO"
		}
	],
	"onlineCourses"	: 	[
		{
			"title"		: 	"Pizza Slicing",
			"school" 	: 	"Lydia.com",
			"dates"		: 	2011,
			"url" 		: 	"http://bit.ly/1ueeN7q"
		},
		{
			"title"		: 	"Burger Grilling",
			"school" 	: 	"Pluralflight.com",
			"dates"		: 	2012,
			"url" 		: 	"http://bit.ly/1KypWNm"
		}
	],
	display 	: 	function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last-child").append(formattedSchoolName + formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
			$(".education-entry:last-child").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last-child").append(formattedSchoolLocation);

			for (major in education.schools[school].majors) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last-child").append(formattedSchoolMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last-child").append(formattedOnlineTitle + formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last-child").append(formattedOnlineDates);

			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last-child").append(formattedOnlineUrl);
		}
		
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);