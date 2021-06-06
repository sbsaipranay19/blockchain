/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const navElements = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * 
 * Using for each loop to create the li with the id of all the sections created.
 * Once the element with the id is made than insertAdjacentHTML is used to add it to the 
 * navbar
 * 
 */

const navlist = document.createDocumentFragment();

navElements.forEach(section => {
    const listElement = document.createElement('li');
    listElement.className= "menu__link"
    listElement.innerHTML = `<a href="#${section.id}" class="">${section.dataset.nav}</a>`;
    navlist.appendChild(listElement);
})
navbar.appendChild(navlist);

/**
 * 
 * Scroll to anchor ID using scrollTO event
 * The user will be moved to the section clicked in the navbar
 * 
 */ 
function scrollTo() {
  navbar.addEventListener('click', function (event) {
      const sectionSelected = document.querySelector('#' + event.target.dataset.nav)
      sectionSelected.scrollIntoView({ behavior: 'smooth'});
  });
 };
 
 /**
  * 
  * When the heading is pressed the below function shows a popup with a message.
  * 
  */
 function myFunction() {
  const heading = document.getElementById("Popup");
  heading.classList.toggle("show");
 }
 function myFunction1() {
  const heading = document.getElementById("Popup1");
  heading.classList.toggle("show");
 }
 function myFunction2() {
  const heading = document.getElementById("Popup2");
  heading.classList.toggle("show");
 }
 function myFunction3() {
  const heading = document.getElementById("Popup3");
  heading.classList.toggle("show");
 }
 function myFunction4() {
  const heading = document.getElementById("Popup4");
  heading.classList.toggle("show");
 }
 /**
  * 
  * i)If the page is scrolled for down for 120px than the style for button is added with 
  * block display.
  * ii)When there is no scroll the buttons display is made ot be none.
  * iii)When th ebutton is pressed the top function takes the user back to top of the page.
  * 
  */
 moveTop = document.getElementById("scrollToTop");
 
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    moveTop.style.display = "block";
   } else {
    moveTop.style.display = "none";
   }
 }
 
 function topFunction() {
   document.documentElement.scrollTop = 0;
 }
 
 
 /** 
  * 
  * callback function to be run whenever a threshold is called. Threshold is declared in *  *  the next constructor
  * i)for each loop is used to check for every section continously.
  * ii)If the section enters and than if it matches the requirements given in options 
  * contructor below the section is changed to active in navbar and if already a section is
  *  in active state than it removed.
  * 
  */
 const callback = enteries => {
  enteries.forEach(entry => {
    const navListElement = document.querySelectorAll(`a[href="#${entry.target.id}"]`)[0]
    const section = document.getElementById(entry.target.id)
    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active')
      section.classList.add('your-active-class')
    } else if
       (navListElement.classList.contains('active')) {
        navListElement.classList.remove('active')
        section.classList.remove('your-active-class')
    }
  })
 }
 
 /**
  * 
  * Constructor to be called by Intersection Observer, Refered MDN
  * i)selectiong scrollArea to be the root
  * ii)shrinks or grows the sections, since it is set to 0
  * iii)1 represents when 100% of the target is visible. I have chose .6 that is when 60%   * of the section is visible the active section changes.
  *  
  * 
  */ 
 const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px', //
  threshold: 0.6, //
 }
 
 /** 
  * 
  * Intersection Observer takes 2 parameters the function activeElement and options and 
  * sets the active element if needed.
  * i)sending both callback function and options constructor
  * ii)for each loop to check every section
  * iii)observes the given section is 50% visible and if its true it calls callback function
  * 
  */ 
 const observer = new IntersectionObserver(callback, options)
 navElements.forEach(section => {
  observer.observe(document.getElementById(section.id))
 })
 
