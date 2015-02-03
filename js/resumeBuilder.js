/*
 resumeBuilder.js
 JSON data for project 2 of Udacity Frontend Developer Nanodegree
 methods to display the data
 Author: Hans Pétur Jónsson
 */

var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": [
        {
            "mobile": "550-555-5555",
            "email": "john@example.com",
            "github": "johndoe",
            "twitter": "@johndoe",
            "location": "San Francisco"
        }
    ],
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing " +
    "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
    "ut aliquip ex ea commodo consequat.",
    "skills": ["awsomeness", "delivering things", "cryogenic sleep",
        "serving the universe"],
    "biopipic": "./images/fry.jpg",
    "display": function () {}
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
    "display": function () {}
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
    "display": function () {}
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
    "display": function () {}
};
