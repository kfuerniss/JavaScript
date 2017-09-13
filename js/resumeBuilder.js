"use strict";
	var bio = {
		"name" : "Kim Fuerniss",
		"role" : "Applications Developer",
		"contacts": {
			"mobile": "210-882-8288",
			"email": "kfuernis@swbell.net",
			"github": "kfuerniss",
			"location": "Henderson, NV"
			},
		"skills": [
			"Verint", "JavaScript", "HTML"
			],
		"bioPic":"image/kim.jpg"
	}
	
	var work = {};
		work.position = "Application Developer";
		work.employer = "ATT";
		work.years = 17;
		work.city = "Las Vegas, NV";
	
	var education = {};
		education["school"] : "University of Phoenix";
		education["years"] : "2002-2004";
		education["city"] : "Wichita, KS";
	
	var name = "Kim Fuerniss";
	var formattedName = HTMLheaderName.replace("%data%", name);
	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	
	$("#header").prepend(formattedName);
	$("#header").append(formattedRole);


