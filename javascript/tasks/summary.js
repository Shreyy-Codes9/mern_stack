
//JAVASCRIPT
//
//history of javascript
//-   it was created by Brandon Eich in 1995 at Netscape communications
//    its orighinal name was "Mocha" then it became "LiveScript" and finally "JavaScript"
//
//Why the name JavaScript?
//-   Netscape partnered with Sun Microsystems (creators of Java).
//    The name “JavaScript” was a marketing strategy to ride on the popularity of Java, 
//    though they are very different languages.
//
//why was it made?
//-   it was initially made to make web pages interactive
//    it was Initially designed to be a lightweight scripting language for the browser (Netscape Navigator)
//
//-   in 1997  The first official standard version of javascript was released as ECMAScript 1 (ES1)
//-   in 2005 because of AJAX released by GOODLE javascript began to gain popilarity again
//
//-   in 2015 , the coming of ECMAscript 6 was a massive update that put the niv of morden javascirpt
//
//JAVASCRIPT Engines
//1) V8 - Google Chrome
//2) spidermonkey - FireFox
//3) Javascriptcore - Safari
//4) Chakra - Microsoft Edge
//
//today javascript powers 95+ percentage of websites and is used in many places like (web apps , mobile apps , games etc..)
//
//
//
//WORKING of javascript
//                      -   
//                       JavaScript is a high-level, interpreted, single-threaded programming language that runs inside the browser (and also on servers via Node.js). Its main job is to make websites interactive and dynamic.
//                      
//                      - 
//                       So basically, when you open a website, your browser first loads the HTML — that’s just the structure of the page. While reading the HTML, it comes across JavaScript (either written inside the page or linked from another file). As soon as the browser sees that, it hands it over to something called the JavaScript engine (like V8 in Chrome) to run the code.
//                      
//                       Now, JavaScript runs line by line, one step at a time — it’s single-threaded. But even though it works like that, it can still handle stuff like button clicks, waiting for data, or delays using something called the event loop. This event loop helps JS keep the page from freezing while waiting for things like API responses or timers.
//                       
//                       The best part is that JavaScript can directly interact with the webpage using the DOM — which is like a tree version of all the elements on the page (buttons, text, images, etc.). With this, JavaScript can change text, show popups, hide sections, and basically make the website interactive.
//                       
//                       So overall, JavaScript is what makes websites come alive — it's loaded and run by the browser, it follows a step-by-step flow, it handles events smartly, and it can change anything on the page whenever needed.
//                      
//
//Single-Threaded 
//               - "single-threaded" means that the JavaScript engine has only one call stack and one memory heap. This implies that only one piece of code can be executed at a time. The program processes tasks sequentially, and each task must complete before the next one can begin.
//
//DOM 
//    - The Document Object Model (DOM) is a programming interface for web documents, representing a web page's structure as a tree of objects. It is not a programming language but a built-in API that allows JavaScript to interact with HTML or XML documents dynamically
//
//
//
//CLIENT AND SERVER SIDE JS : 
// 
//1) CLIENT SIDE :
//                - Client-side JavaScript is the part that runs directly in the browser. This is what most people think of when they hear "JavaScript." It controls how a web page behaves after it loads. For example, when you click a button and a menu opens, or when a form checks if you’ve entered a valid email — that’s client-side JS. It has access to the DOM, so it can change content, styles, and elements on the fly without needing to reload the page. This makes websites feel fast and interactive. All this runs on the user’s device (their browser), not on the server. 
//
//2) SERVER SIDE :
//                - Server-side JavaScript runs on the server, not in the browser. The most popular way to do this is with Node.js, which lets JavaScript handle things like storing data, connecting to databases, or handling user login. For example, when you submit a form and the data gets saved, server-side JS takes care of that. Unlike client-side JS, it doesn't interact with the webpage directly — instead, it processes requests, runs logic, and sends back responses (like HTML or data) to the browser. This makes JavaScript capable of handling both frontend and backend of a web app.
//
//
//
//STATIC and DYNAMIC Typed Languages
//
//1) STATIC TYPED LANG :
//                       - In static typed languages, you have to define the type of each variable before using it, and it doesn’t change. For example, if you say a variable is an int (number), you can’t suddenly use it like a string (text). The type is checked during compile time, which means most errors are caught early — before the code even runs. This makes the code more predictable and safer, especially in big projects. Examples of static typed languages are Java, C, C++, and TypeScript.
//
//
//2) DYNAMIC TYPED LANG :
//                       - In dynamic typed languages, you don’t have to tell the type of a variable — the language figures it out when the code runs. You can even change a variable’s type later. For example, you can make a variable a number, then later assign it a string — and the code will still run. This gives you more flexibility and makes the code shorter and faster to write, but it can also lead to bugs that are only found at runtime. Examples of dynamic typed languages are JavaScript, Python, Ruby, and PHP.