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

var heading=document.querySelector('.page__header');
var nav=document.querySelector('.navbar__menu');
const navBarList = document.querySelector('#navbar__list');
let sections=document.getElementsByClassName("landing__container");
const sectionArray = Array.from(sections);
const sectionParent = sectionArray[0].parentElement;
var listOfId=[];
const nameOfSection=[];
var counter=0;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
const isInViewport = (domElement, threshold = 0) => {
    const boundaries = domElement.getBoundingClientRect();
    return (
        boundaries.top >= threshold &&
        boundaries.left >= threshold &&
        boundaries.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - threshold) &&
        boundaries.right <= ((window.innerWidth || document.documentElement.clientWidth) - threshold)
    );
};




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function bulidNav(){
 document.addEventListener('DOMContentLoaded',numberOfSections);
 function numberOfSections(){
  for(let i=0;i<sections.length;i++)
  {
    let section=sections[i];
    counter+=1;
    let sectionsName=sections[i];
    let headerOfSection = sectionsName.querySelector('h2');
    const nameSection=headerOfSection.textContent;
    nameOfSection.push(nameSection);
    listOfId[i] = section.parentNode.id;

  }


  const fragment = document.createDocumentFragment();
  for(let i=0;i<counter;i++){
    const li=document.createElement('li');
    li.classList.add('nav_bar_items');
    const aLink=document.createElement('a');
    //Scroll to section on link click
    aLink.href="#"+listOfId[i];
    aLink.textContent=nameOfSection[i];
    li.appendChild(aLink);

    fragment.appendChild(li);
  }
  navBarList.appendChild(fragment);
 }
}
bulidNav();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu



/* Add event listener to update the visible section and its navigation bar item */
window.addEventListener("scroll", function () {
    sectionArray.forEach((section, index) => {

        const navBarChildren = Array.from(navBarList.children);
        // Check that the given section is visible
        const isOnScreen = isInViewport(section, -200);
        if (isOnScreen) {
            // Add active classes when the given section is visible
            section.classList.add("active-section");
            navBarChildren[index].classList.add("selected-nav-bar-item");
        } else {
            // Remove active classes when the given section is not visible
            section.classList.remove("active-section");
            navBarChildren[index].classList.remove("selected-nav-bar-item");
        }
    })
});
