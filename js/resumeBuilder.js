"use strict";
//Bio
var bio = {
    "name": "Kim Fuerniss",
    "role": "Applications Developer",
    "contacts": {
        "mobile": "210-882-8288",
        "email": "kfuernis@swbell.net",
        "github": "kfuerniss",
        "location": "Henderson, NV"
    },
    "welcomeMessage": "Trying to get better",
    "skills": [
        "Verint", "JavaScript", "HTML"
    ],
    "biopic": "images/fry.jpg",
    //},

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
    "position": [
        { "title": "Application Developer", "dates": "2007-current", "location": "San Antonio, TX/Las Vegas, NV" },
        { "title": "Engineer", "dates": "2005-2007", "location": "San Antonio, TX" }
    ],

    "display": function () {
        var pos = $("#workExperience");
        this.position.forEach((position) => {
            var posEntry = $(HTMLworkStart);
            posEntry.append(HTMLworkEmployer.replace("%data%", position.title) + HTMLworkDates.replace("%data%", position.dates));
            posEntry.append(HTMLworkLocation.replace("%data%", position.location));
            pos.append(posEntry);
        });
    }
}

//Education
var education = {
    "school": [{ "name": "University of Phoenix", "dates": "2002-2004", "location": "Wichita, KS", "degree": "Masters", "majors": ["Computer Information System"] },
    { "name": "Newman University", "dates": "2000-2002", "location": "Wichita, KS", "degree": "Bachelors", "majors": ["Computer Information System"] }
    ],
    "onlineCourses": [{ "title": "HTML", "school": "Udacity", "date": "2016-2017", "url": "Udacity.com" },
    { "title": "JavaScript", "school": "Udacity", "date": "2016-2017", "url": "Udacity.com" }],

	"display": function () {
        var edu = $("#education");
        this.school.forEach((school) => {
            var eduEntry = $(HTMLschoolStart);
            eduEntry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            eduEntry.append(HTMLschoolDates.replace("%data%", school.dates));
            eduEntry.append(HTMLschoolLocation.replace("%data%", school.location));
            eduEntry.append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
            edu.append(eduEntry);
        });
        edu.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            var eduEntry = $(HTMLschoolStart);
            eduEntry.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            eduEntry.append(HTMLonlineDates.replace("%data%", course.dates));
            eduEntry.append(HTMLonlineURL.replace("%data%", course.url));
            edu.append(eduEntry);
        });
    }

};

//Projects	
var projects = {
    projects: [{ "name": "Article", "dates": "June 2017", "description": "HTML", "images": []},
        { "name": "Card", "dates": "July 2017", "description": "HTML", "images": [] },
        { "name": "Portfolio", "dates": "Aug 2017", "description": "HTML", "images": [] },
        { "name": "Resume", "dates": "Sept 2017", "description": "JavaScript", "images": [] }
    ],
    "display": function () {
        var proj = $("#projects");
        this.projects.forEach((projects) => {
            var projEntry = $(HTMLprojectStart);
            projEntry.append(HTMLprojectTitle.replace("%data%", projects.name));
            projEntry.append(HTMLprojectDates.replace("%data%", projects.dates));
            projEntry.append(HTMLprojectDescription.replace("%data%", projects.description));
            projects.images.forEach((img) => {projEntry.append(HTMLprojectImage.replace("%data%", img));
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


