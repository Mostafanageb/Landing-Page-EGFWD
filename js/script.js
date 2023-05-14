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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// implementaion of smooth scroll function
const scrollSmoothly = function(e){
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}


let i = 1;

    const sections = Array.from(document.getElementsByTagName("section")); 
    const menu = document.getElementById('navbar__list');
    for (let section of sections){
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        listItemLink.textContent = section.dataset.nav;
        listItemLink.href = "#section"+i;
        i++;
        listItemLink.addEventListener('click',scrollSmoothly)
        listItemLink.classList.add('menu__link');
        listItem.appendChild(listItemLink);
        menu.appendChild(listItem);
    }





const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
const paragraph2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."

document.getElementById('button1').addEventListener('click',function(){
    //document.body.appendChild(document.getElementById('section2'));
    const nav = document.createElement('a');
    const list = document.getElementById('navbar__list');
    nav.textContent = "Section "+i;
    nav.href = "#section"+i;
    nav.classList.add('menu__link');

    //adding smooth scroll functionality
    nav.addEventListener('click',scrollSmoothly)


    const li = document.createElement('li')
    li.appendChild(nav);
    
    list.appendChild(li);




     

    const added_section = document.createElement('section');
    const div = document.createElement('div');
    div.className = 'landing__container';
    const header = document.createElement ('h2'); 
    header.innerHTML = 'Section '+i;
    const p1 = document.createElement('p');
    p1.textContent = paragraph1;
    const p2 = document.createElement('p');
    p2.textContent = paragraph2;
    div.appendChild(header);
    div.appendChild(p1);
    div.appendChild(p2);
    added_section.appendChild(div);
    added_section.id = 'section'+i;
    const main = document.getElementById('main');
    main.appendChild(added_section);
    i++;
    

})


document.getElementById('button2').addEventListener('click',function(){
    const list = document.getElementById('navbar__list');
    const sections = [...document.querySelectorAll("section")];
    list.removeChild(list.lastChild);
    sections[sections.length-1].remove();
    i--;
})

window.addEventListener('scroll',function(){
    const sections = this.document.querySelectorAll('section');
    const links = this.document.querySelectorAll('.menu__link');
    
    for (let section of sections){
        const pos = section.getBoundingClientRect();
        if (pos.bottom >= this.window.innerHeight-300 && pos.bottom< this.window.innerHeight){
            //adding section highlight
            section.classList.add('your-active-class');


            //adding highlight from navbar
            for (let link of links){
                if (link.href.includes(section.id)){
                    //link.style = 'color: #fff; background: #333;';
                    link.classList.add('active');
                    /*
                    this cancels the hover effect.
                    I couldn't figure out how to fix it nor even what is causing the problem!
                    */
                }
            }


        }
        
        else {
            //removing section highlight
            section.classList.remove('your-active-class');

            //removine highlight from navbar
            for (let link of links){
                if (link.href.includes(section.id)){
                    //link.style = 'color: #000; background: #fff;';
                    link.classList.remove('active');

                }
            }


        }
    }
})


