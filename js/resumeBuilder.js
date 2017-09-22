"use strict";
//Bio
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
	},

	"display": function () {
        // top header information - name and role
        var header = $("#header");
        header.prepend(HTMLheaderRole.replace("%data%", this.role));
        header.prepend(HTMLheaderName.replace("%data%", this.name));

        // contacts in header and footer
        var topContacts = $("#topContacts");
        var bottomContacts = $("#footerContacts");
        var contact;
        function HTMLcontact(key, value) {
            return value ? HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value) : undefined;
	}

	contact = HTMLcontact("Phone", this.contacts.mobile);
    topContacts.append(contact);
    bottomContacts.append(contact);
    contact = HTMLcontact("Email", this.contacts.email);
    topContacts.append(contact);
    bottomContacts.append(contact);
    contact = HTMLcontact("Location", this.contacts.location);
    topContacts.append(contact);
    bottomContacts.append(contact);

    // other header information - picture, welcome, skills
    header.append(HTMLbioPic.replace("%data%", this.biopic));
    header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        // only show skills if it is truthy and length > 0
        if (this.skills && this.skills.length > 0) {
            header.append(HTMLskillsStart);
            var skills = $("#skills");
            this.skills.forEach((skill) => {
                skills.append(HTMLskills.replace("%data%", skill));
            });
        }
    	} 
	}; 




//Work	
	var work = {  
		"position" [
		{"title" : "Application Developer", "dates" : "2007-current", "location" : "San Antonio, TX/Las Vegas, NV"},
		{"title" : "Engineer", "dates" : "2005-2007", "location" : "San Antonio, TX"}
		],
	
	"display" : function () {
		var pos = $("#workExperience");
		this.work.forEach((job) => {
			var posEntry = $(HTMLposStart);
			posEntry.append(HTMLworkPosition.replace("%data%", position.title) + HTMLworkEmployer.replace("%data%", position.dates));
			posEntry.append(HTMLworkYears.replace("%data%", position.location));
			pos.append(posEntry);
		});
		}
	}

//Education
	var education = {
		"school" : [{"name" : "University of Phoenix", "dates" : "2002-2004", "city" : "Wichita, KS", "degree" : "MS CIS"},
		            {"name" : "Newman University", "dates": "2000-2002", "city" : "Wichita, KS", "degree" : "BS CIS"}
		           ],

	"display": function () {
        var edu = $("#education");
        this.schools.forEach((school) => {
            var eduEntry = $(HTMLschoolStart);
            eduEntry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            eduEntry.append(HTMLschoolDates.replace("%data%", school.dates));
            eduEntry.append(HTMLschoolCity.replace("%data%", school.city));
            edu.append(eduEntry);
		});
    	}
	};

//Projects	
	var projects = {
		projects : [{"name" : "Article", "dates" : "June 2017", "description" : "HTML"},
					{"name" : "Card", "dates" : "July 2017", "description" : "HTML"},
					{"name" : "Portfolio", "dates" : "Aug 2017", "description" : "HTML"},
					{"name" : "Resume", "dates" : "Sept 2017", "description" : "JavaScript"}
		],
	"display": function () {
        var proj = $("#projects");
        this.projects.forEach((project) => {
            var projEntry = $(HTMLprojectStart);
            projEntry.append(HTMLprojectName.replace("%data%", project.name));
            projEntry.append(HTMLprojectDates.replace("%data%", project.dates));
            projEntry.append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach((img) => {
               	projEntry.append(HTMLprojectImage.replace("%data%", img));
            });
            proj.append(projEntry);
        });
    	} 
	}; 
	


	bio.display();
	work.display();
	projects.display();
	education.display();

	$("#mapDiv").append(googleMap);


