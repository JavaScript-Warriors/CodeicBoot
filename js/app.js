'use strict';
let counter ;

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

    new Course('js1', 'JavaScript for Beginners', 'The JavaScript for Beginners course aims to build an in-depth understanding of the various aspects of JS that are mandatory for understanding how JavaScript applications work. With 3 hours of on-demand video, this course is one of the most compact and practical beginner-friendly JS courses. About 3k learners have benefitted from this course. You will be awarded a certificate on the successful completion to showcase all the efforts and hard work you put in for the course.',
        'js', 150, 'assets/js1.png');
    new Course('js2', 'Modern JavaScript From The Beginning.', 'The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'js', 199, 'assets/js2.png');
    new Course('js3', 'Advanced JavaScript Concepts', 'Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'js', 350, 'assets/js1.png');
    new Course('js4', 'The Complete JavaScript Course 2021: Build Real Projects.', 'Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'js', 250, 'assets/js4.png');
    new Course('js5', 'Introduction to JavaScript.', 'Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'js', 57, 'assets/js5.png');
    new Course('php1', 'JavaScript for Beginners', 'The JavaScript for Beginners course aims to build an in-depth understanding of the various aspects of JS that are mandatory for understanding how JavaScript applications work. With 3 hours of on-demand video, this course is one of the most compact and practical beginner-friendly JS courses. About 3k learners have benefitted from this course. You will be awarded a certificate on the successful completion to showcase all the efforts and hard work you put in for the course.',
        'php', 150, 'assets/php1.png');
    new Course('php2', 'Modern JavaScript From The Beginning.', 'The Modern JavaScript From the Beginning tutorial focuses on building projects without using any JS frameworks or libraries. It boasts an excellent 4.7-star rating averaged over 11k reviews. Other than English, the course is also available in Italian, Portuguese, and Spanish languages.',
        'php', 199, 'assets/php2.png');
    new Course('php3', 'Advanced JavaScript Concepts', 'Done with the JavaScript basics and looking to get a good grasp on the advanced JavaScript topics? If yes, then you should check out the Advanced JavaScript Concepts course offered by our website. It has 23.5 hours of on-demand video and 24 articles to fulfill the purpose. You will be able to learn all the modern advanced JavaScript practices that will put you ahead of your peers. Additionally, it also details both the functional programming and OOP aspects of JS.',
        'php', 350, 'assets/php3.png');
    new Course('php4', 'The Complete JavaScript Course 2021: Build Real Projects.', 'Looking to start JavaScript for building real projects instantly? Then you must this JS course offered by Udemy. Over 206k learners have enrolled for the course with an average of 4.6-star rating from over 47k reviews. The comprehensive JavaScript course is offered in 8 languages, including French, German, and Spanish. The course includes 28 hours of on-demand video along with ten articles, one downloadable resource, lifetime access, and a certification of completion. ',
        'php', 250, 'assets/php4.png');
    new Course('php5', 'Introduction to JavaScript.', 'Another great JavaScript course available for the programming greenhorns is the Introduction to JavaScript course offered by freecodecamp.org.Aimed for beginners in JS that have little to no experience working with the web scripting language, Introduction to JavaScript covers topics varying from data types and variables to JS objects and loops.One of the major attractions of this course is that a coding test follows each chapter. Hence, immediately after gulping up the new concepts, you can check how well you have grasped them with the practice exercises.',
        'php', 57, 'assets/php5.png');
    new Course('c1', 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++.', 'Which programming language is often seen as a badge of honor among software developers?  C++ Which programming language can you learn that when added to your resume,  will often get you a job interview?  C++  Which programming language is routinely ranked in the top 5 programming languages by popularity, and been consistently in the top 10 for close to 20 years?  C++',
        'c', 50, 'assets/c1.jpg');
    new Course('c2', 'Learn C++ Programming -Beginner to Advance- Deep Dive in C++.', 'his course covers C++ from very basic to more advanced features. Concepts of C++ programming are made very simple and easy.Every topic is covered in greater detail. All Lecture are discussed both on white board like a classroom session and practical demo.Programs and Bullet points are provided as resource.Every Topic is Explained with Real life Examples This course also covers features of modern C++ 11.Student Project at the end of Course',
        'c', 100, 'assets/c2.jpg');
    new Course('c3', 'C++: From Beginner to Expert.', 'Save your precious time by buying this course. You will learn how to program in C++ in a fast and easy way! The total length of the course is over 17 hours! You will learn theory and you will also gain lots of practice. During the course we will write many programs that will make you a great programmer.All of this is presented by a young man who shares his knowledge, so the language used can be easily understood by everyone. ',
        'c', 75, 'assets/c3.jpg');
    new Course('c4', 'Learn Advanced C++ Programming.', 'This course will take you from a basic knowledge of C++ to using more advanced features of the language. This course is for you if you want to deepen your basic knowledge of C++, you want to learn C++ 11 features, or you have taken my free beginners C++ course and you are looking for the next step.We willll start with a look at C++ file handling and move through STL, template classes, operator overloading, lambda expressions, move constructors and much more besides.At the end of the course I will show you how to create a program that generates fractal images, using a a few of the language features we have seen in the course and giving you a great work out with smart pointers and arrays.I will give you exercises throughout the course, ranging from easy near the start, to quite tricky (but optional!) near the end of the course. ',
        'c', 130, 'assets/c4.jpg');
    new Course('c5', 'This "critically-acclaimed" and "insanely successful" Unreal Engine course was created in collaboration with Epic Games.The course has been fully updated and remastered to Unreal Engine 4.22+. Existing students get all the new material for free.',
        'c', 200, 'assets/c5.jpg');
    new Course('rt1', 'ReactJS for beginners', 'React - The Complete Guide (incl Hooks, React Router, Redux)Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        'rt', 50, 'assets/rt1.jpg');
    new Course('rt2', 'ReactJS for newbies', 'Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks! Realize the power of building composable components and Master fundamental concepts behind structuring Redux applications',
        'rt', 100, 'assets/rt2.jpg');
    new Course('rt3', 'ReactJS from zero to hero', 'React from zero to heroe - The Complete Guide (incl Hooks, React Router, Redux)Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        'rt', 80, 'assets/rt3.jpg');
    new Course('rt4', 'React - the complete giude', 'Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now and Build powerful, fast, user-friendly and reactive web apps',
        'rt', 88, 'assets/rt4.jpg');
    new Course('rt5', 'react from zero to ninja', 'Learn Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects and Full Stack Development with MERN (MongoDB, Express, React, Node)',
        'rt', 150, 'assets/rt5.jpg');



}

generateCourses();

localStorage.setItem('allCourses', JSON.stringify(Course.allCourses));

let cartIcon = document.getElementById('cartIcon');

function x() {
    let item = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i] !== 'discount' && keys[i] !== 'allCourses' && keys[i] !=='counter') {
            item.push(JSON.parse(localStorage.getItem(keys[i])));
        }

    }
    return item;
}


