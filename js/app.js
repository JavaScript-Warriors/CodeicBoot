'use strict';

const Course = function (key, name, description, cateogry, price, imgSrc) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.cateogry = cateogry;
    this.price = price;
    this.src = imgSrc;
    this.sales = false;
    this.comments = [];
    Course.allCourses.push(this);
};

Course.allCourses = [];

function generateCourses() {
    new Course('js1', 'JavaScript for Beginners','The JavaScript for Beginners course aims to build an in-depth understanding of the various aspects of JS that are mandatory for understanding how JavaScript applications work. With 3 hours of on-demand video, this course is one of the most compact and practical beginner-friendly JS courses. About 3k learners have benefitted from this course. You will be awarded a certificate on the successful completion to showcase all the efforts and hard work you put in for the course.',
        'js', 150,'assets/js1.png');
    new Course('js2', 'Modern JavaScript From The Beginning.','The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'js',199,'assets/js2.png');
    new Course('js3', 'Advanced JavaScript Concepts','Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'js', 350,'assets/js1.png');
    new Course('js4', 'The Complete JavaScript Course 2021: Build Real Projects.','Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'js', 250,'assets/js4.png');
    new Course('js5', 'Introduction to JavaScript.','Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'js', 57,'assets/js5.png');
    new Course('php1', 'JavaScript for Beginners','The JavaScript for Beginners course aims to build an in-depth understanding of the various aspects of JS that are mandatory for understanding how JavaScript applications work. With 3 hours of on-demand video, this course is one of the most compact and practical beginner-friendly JS courses. About 3k learners have benefitted from this course. You will be awarded a certificate on the successful completion to showcase all the efforts and hard work you put in for the course.',
        'php', 150,'assets/php1.png');
    new Course('php2', 'Modern JavaScript From The Beginning.','The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'php',199,'assets/php2.png');
    new Course('php3', 'Advanced JavaScript Concepts','Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'php', 350,'assets/php3.png');
    new Course('php4', 'The Complete JavaScript Course 2021: Build Real Projects.','Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'php', 250,'assets/php4.png');
    new Course('php5', 'Introduction to JavaScript.','Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'php', 57,'assets/php5.png');

        
    new Course('pyt1', 'Python for Absolute Beginners','Learn Python, a programming language with a wide variety of well-paying jobs in many fields, including data science and web development.  It is relatively easy to learn when compared to pretty much any other programming language since most of the time, using Python to do something will take less lines of code than with another programming language.',
        'pyt',100 ,'assets/pyt1');
    new Course('pyt2', '2021 Complete Python Bootcamp From Zero to Hero in Python','This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.',
        'pyt',120 ,'assets/pyt2');
    new Course('pyt3','Learn Python Programming Masterclass','This course is aimed at complete beginners who have never programmed before, as well as existing programmers who want to increase their career options by learning Python. The fact is, Python is one of the most popular programming languages in the world – Huge companies like Google use it in mission critical applications like Google Search.',
        'pyt', 280 ,'assets/pyt3');
    new Course('pyt4', 'Learning Python for Data Analysis and Visualization ',' You will get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data. You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers!',
        'pyt',200 ,'assets/pyt4');
    new Course('pyt5','The Python Mega Course: Build 10 Real World Applications ','he Python Mega Course is the most practical course you will find on the web today. In this course, rather than practicing rote memorization, students are actively problem-solving towards tangible goals. The purpose of this course is to get you from zero and help you become a Python programmer. We will achieve that by building actual desktop programs, developing interactive web applications, automating tasks, and even creating mobile apps entirely in Python 3.',
        'pyt', 220,'assets/pyt5');
}

generateCourses();


// let sale1 = document.getElementById('c-sale-1');
// let img = document.createElement('img');
// let h5 = document.createElement('h5');
// let p = document.createElement('p');
// let hr = document.createElement('hr');
// let a = document.createElement('a');
// let h4 = document.createElement('h4');

// img.setAttribute('src', Course.allCourses[0].src);
// a.setAttribute('href','cart.html');
// p.setAttribute('style','height:92px; overflow: hidden; text-overflow: ellipsis;');

// sale1.appendChild(img);
// sale1.appendChild(h5);
// sale1.appendChild(p);
// sale1.appendChild(hr);
// sale1.appendChild(a);
// sale1.appendChild(h4);

// h5.textContent = Course.allCourses[0].name;
// p.textContent = Course.allCourses[0].description;
// h4.textContent = Course.allCourses[0].price;
// a.textContent = 'Add to cart';

localStorage.setItem('allCourses', JSON.stringify(Course.allCourses));
console.log('ALL FROM APP.JS' ,Course.allCourses);
