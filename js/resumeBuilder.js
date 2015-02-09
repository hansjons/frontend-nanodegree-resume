/*
 resumeBuilder.js
 JSON data for project 2 of Udacity Frontend Developer Nanodegree
 methods to display the data
 Author: Hans Pétur Jónsson
 */

var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts":
        {
            "mobile": "550-555-5555",
            "email": "john@example.com",
            "github": "johndoe",
            "twitter": "@johndoe",
            "location": "San Francisco"
        }
    ,
    "welcomeMessage": "Lorem ipsum dolor sit amet etc etc etc",
    "skills": ["awesomeness", "delivering things", "cryogenic sleep",
        "serving the universe"],
    "biopipic": "./images/fry.jpg",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name),
            formattedRole = HTMLheaderRole.replace("%data%", bio.role),
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
            formattedPic = HTMLbioPic.replace("%data%", bio.biopipic),
            formattedWelcomemsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole).prepend(formattedName).append(formattedPic).
            append(formattedWelcomemsg);
        $("#topContacts").append(formattedMobile).append(formattedEmail).
            append(formattedGithub).append(formattedTwitter).append(formattedLocation);
        $("#footerContacts").append(formattedMobile).append(formattedEmail).
            append(formattedGithub).append(formattedTwitter).append(formattedLocation);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var len = bio.skills.length;
            for (var i = 0; i < len; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Nova Southeastern University",
            "location": "Fort Lauderdale, FL",
            "degree":   "Masters",
            "majors":   ["CS"],
            "dates":    2013,
            "url":  "www.nova.edu"
        },
        {
            "name": "Eckerd Collage",
            "location": "Saint Petersburg, FL",
            "degree":   "BA",
            "majors":   ["CS"],
            "dates":    2003,
            "url":  "www.eckerd.edu"
        }
    ],
    "onlineCourses":    [
        {
            "title": "Javascript Crash Course",
            "school": "Udacity",
            "date": 2014,
            "url" : "http://www.udacity.com/course/ud804"
        }
    ],
    "display": function () {
        if (education.schools.length > 0) {
            var len = education.schools.length;
            for (var i = 0; i < len; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name),
                    formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location),
                    formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
                    formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors),
                    formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry").last().append(formattedSchoolName + formattedSchoolDegree).append(formattedSchoolLocation).
                    append(formattedSchoolDates).append(formattedSchoolMajor);
            }
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            var len = education.onlineCourses.length;
            for (var i = 0; i < len; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title),
                    formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
                    formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date),
                    formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                $(".education-entry").last().append(formattedOnlineTitle + formattedOnlineSchool).
                    append(formattedOnlineDate).append(formattedOnlineURL);
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title":    "Delivery Boy",
            "location": "Brooklyn, NY",
            "dates":    "January 2000 - Future",
            "description":  "Cauliflower cheese caerphilly swiss. Jarlsberg goat" +
            " fromage taleggio manchego dolcelatte cheese on toast caerphilly. " +
            "Cheese slices queso manchego cauliflower cheese bocconcini port-" +
            "salut mascarpone mascarpone. Squirty cheese queso."
        },
        {
            "employer": "Panucci-s Pizza",
            "title":    "Delivery Boy",
            "location": "Manhattan, NY",
            "dates":    "1998 - December 31, 1999",
            "description":  "Cauliflower cheese caerphilly swiss. Jarlsberg goat" +
            " fromage taleggio manchego dolcelatte cheese on toast caerphilly. " +
            "Cheese slices queso manchego cauliflower cheese bocconcini port-" +
            "salut mascarpone mascarpone. Squirty cheese queso."
        }
    ],
    "display": function () {
        if (work.jobs.length > 0) {
            var len = work.jobs.length;
            for (var i = 0; i < len; i++) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
                    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title),
                    formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location),
                    formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates),
                    formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                $(".work-entry").last().append(formattedEmployer + formattedTitle).
                    append(formattedLocation).append(formattedDates).append(formattedDescription);
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Cauliflower cheese caerphilly swiss. Jarlsberg goat" +
            " fromage taleggio manchego dolcelatte cheese on toast caerphilly. " +
            "Cheese slices queso manchego cauliflower cheese bocconcini port-" +
            "salut mascarpone mascarpone. Squirty cheese queso.",
            "images": ["./images/197x148.gif", "./images/197x148.gif"]
        }
    ],
    "display": function () {
        if (projects.projects.length > 0) {
            var len = projects.projects.length;
            for (var i = 0; i < len; i++) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title),
                    formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates),
                    formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
                $(".project-entry").last().append(formattedTitle).append(formattedDates).append(formattedDescription);
                if (projects.projects[i].images.length > 0) {
                    var length = projects.projects[i].images.length;
                    for (var j = 0; j < length; j++) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                        $(".project-entry").last().append(formattedImage);
                    }
                }
            }
        }
    }
};

// Display JSON data
bio.display();
work.display();
projects.display();
education.display();

// Display Google Map
$("#mapDiv").append(googleMap);