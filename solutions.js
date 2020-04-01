/**
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
 * @summary Iterates through blog articles and outputs an HTML representation of each.
 * 
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

class Article {
  constructor ( title = 'Blog Title', content = 'Lorem ipsum...' )
  {
    this.title = title;
    this.content = content;
  }
  output ()
  {
    // TODO: Prepare output to the browser...
    // TODO: Use template literals.
    /*Thanks to Vincent, he did big help to me to understand what I am supposed to do here.
    I do know querySelector/appendChild these syntax, but when I look at this ouptput here my brain went blank.
    I do need to overcome the fear of coding myself to practice more. */
    var content = document.querySelector(".content");
    var div = document.createElement("div");
    div.classList.add("blogParagr");
    div.innerHTML += 
    `<h3>${this.title}</h3>
     <p>${this.content}</p>`;
    content.appendChild(div);
  }
}

const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  ),
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )
];

// TODO: Add a new article to the array (add "SASS" inbetween the "CSS" and "JS" articles.)
const newArticle = new Article(
    'Now one step further. (SASS)',
    'Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a scripting language used in Sass files.- wiki'
  )
  
  blogArticles.splice(3, 0, newArticle);
for ( let article of blogArticles )
{
  // TODO: Loop through articles and output each of them to the browser.
  article.output();
}