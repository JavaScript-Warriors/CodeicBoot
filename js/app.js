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
        'js', '150$','assets/js1.png');
    new Course('js2', 'Modern JavaScript From The Beginning.','The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'js','199$','assets/js2.png');
    new Course('js3', 'Advanced JavaScript Concepts','Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'js', '350$','assets/js1.png');
    new Course('js4', 'The Complete JavaScript Course 2021: Build Real Projects.','Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'js', '250$','assets/js4.png');
    new Course('js5', 'Introduction to JavaScript.','Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'js', '57$','assets/js5.png');
    new Course('php1', 'PHP for Beginners - Become a PHP Master - CMS Project','Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi, and ending the course by building a CMS system similar to WordPress, Joomla, or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.',
        'php', '150$','assets/php1.png');
    new Course('php2', 'PHP with Laravel for beginners - Become a Master in Laravel','Laravel has become one of the most popular if not the most popular PHP framework. Employers are asking for this skill for all web programming jobs and in this course we have put together all of them, to give you the best chance of landing that job; or taking it to the next level.',
        'php','199$','assets/php2.png');
    new Course('php3', 'PHP OOP: Object Oriented Programming for beginners + Project','This course will guaranteed you success if you apply yourself, and take the time to learn everything included.PHP has allowed me to make a really great income, so much that It gives me time to teach others about it. You too can become a professional in the field, and create the life you always dreamed of. PHP is one of the best web programming languages in the world, and all the big important websites, like Google, Apple, Facebook, Yahoo, Wikipedia and many more, use it for their web applications.',
        'php', '350$','assets/php3.png');
    new Course('php4', 'Object Oriented PHP & MVC','In this course we will go step by step to build a complete custom MVC (Model View Controller) framework Called TraversyMVC using object oriented PHP. We will build something similar to Codeigniter but much much lighter. This framework is completely open source and you are free to change the name, add stuff, etc and use it as your own. This framework will include...',
        'php', '250$','assets/php4.png');
    new Course('php5', 'Build a Social Network from Scratch: JavaScript PHP + MySQL','Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi, and ending the course by building a CMS system similar to WordPress, Joomla, or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.',
        'php', '57$','assets/php5.png');
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
