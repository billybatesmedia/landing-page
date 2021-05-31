// let navCont = document.createElement("li");
//     navContainer.innerHTML = '<li><a href="#one">One</a></li><li><a href="#two">Two</a></li><li><a href="#three">Three</a></li>';





// This function creates the Ul with links created from the array above
let menuItems = { "itemList": [{ "name": "One", "url": "#homeContent" }, { "name": "Two", "url": "#portfolioContent" }, { "name": "Three", "url": "#aboutContent" }, { "name": "Four", "url": "#contactContent" }] };

// This function creates the Ul with links created from the array above
function generate(array) {
    var ul = document.createElement('ul');
    array.forEach(function (a) {
        var li = document.createElement('li'),
        anchor = document.createElement('a');
        anchor.href = a.url;
        anchor.text = a.name;
        li.id = a.name;
        li.appendChild(anchor);
        li.classList.add("active");
        ul.appendChild(li);
    });
    return ul;
}


// ======================================== Adding function result to html element



document.getElementById('navContainer').appendChild(generate(menuItems.itemList));


// ======================================== 
// ======================================== adding content to page
// ======================================== 


// let oneCont = document.createElement("p");
//     homeContent.innerHTML = 'One - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';

// let twoCont = document.createElement("p");
//     portfolioContent.innerHTML = 'Two - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';

// let threeCont = document.createElement("p");
//     aboutContent.innerHTML = 'Three - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';

// let fourCont = document.createElement("p");
//     contactContent.innerHTML = 'Four - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.';
    

// ======================================== 
// ======================================== Menu scrolling styles
// ======================================== 











let contentItems = { "contentCopy": 
[
{ "Heading": "this Heading 1", "itemCopy": "This is the text of this section", "itemId": "homeContent", "imgSource": "./landing%20page/IMG/gear-1.jpeg" },
{ "Heading": "this Heading 2", "itemCopy": "This is the text of this section", "itemId": "portfolioContent", "imgSource": "./landing%20page/IMG/gear-2.jpeg" },
{ "Heading": "this Heading 3", "itemCopy": "This is the text of this section", "itemId": "aboutContent", "imgSource": "./landing%20page/IMG/gear-2.jpeg" }, 
{ "Heading": "this Heading 4", "itemCopy": "This is the text of this section", "itemId": "contactContent", "imgSource": "./landing%20page/IMG/Safety-3rd.jpeg" }
  ] };
// This function creates the Ul with links created from the array above

function generat(array) {
    var content = document.createElement('section');
     
     array.forEach(function (a) {

    var itemImg = document.createElement('img');    // creates h3 element
        itemheading = document.createElement('h3'); // creates h3 element
        divWrap = document.createElement('div');    // creates Div Wrapper
        innerWrap = document.createElement('div');    // creates Div Wrapper
        itemP = document.createElement('p');        // creates p element 
        elem = document.createElement("img");
        elem.src =  a.imgSource;             // adds url to image tag
        elem.classList.add("item-img");      // adds url to image tag
        divWrap.id = a.itemId; 
        divWrap.classList.add("section");   // adds id to div
         divWrap.appendChild(elem);
        divWrap.appendChild(innerWrap);   // adds id to div 
        divWrap.appendChild(itemheading);
        divWrap.appendChild(itemP);         // adds p element
          // adds class to div
        itemheading.innerHTML = a.Heading;  // adds text to heading

        itemP.innerHTML = a.itemCopy;       // adds text to p element
        
        content.appendChild(divWrap); 
              // adds whole thing to varible top (content) above
    });
    return content; 
}

// This function creates the Ul with links created from the array above.
// ======================================== Adding function result to html element.
document.getElementById('contentContainer').appendChild(generat(contentItems.contentCopy));
// =====================================================



(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();
