/**
 * Template Name: Gp - v4.10.0
 * Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
*/













(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  // here above we are using the spread operator to convert the nodelist into an array.
  // here select we are using the querySelectorAll method to select all the elements that match the specified selector its purpose is to return a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. on our site we are using it to select all the elements that match the specified selector.


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  // here we are create a function on that takes 4 parameters type, el, listener, all. here we are using the querySelectorAll method to select all the elements that match the specified selector its purpose is to return a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors. on our site we are using it to select all the elements that match the specified selector.

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  //purpose of above onsroll function is to add an event listener for the scroll event to the specified element means when the user scrolls the page, the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element .

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }

  // here navbarlinksActive function is used to add the active class to the navbar links when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element after that we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element here position is the current vertical position of the scroll bar and the navbarlinks is the nodelist of the elements that match the specified selector and the section is the element that match the specified selector and the offsetTop property returns the top position of an element relative to the top of the offsetParent element and the offsetHeight property returns the height of an element, including vertical padding and border and the 200 is the offset value to activate the link at the middle of the section . 
  
  // here if the position is greater than or equal to the section.offsetTop and the position is less than or equal to the section.offsetTop + section.offsetHeight then the navbarlink.classList.add('active') is executed and the active class is added to the navbarlink and if the position is not greater than or equal to the section.offsetTop and the position is not less than or equal to the section.offsetTop + section.offsetHeight then the navbarlink.classList.remove('active') is executed and the active class is removed from the navbarlink


  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  // here we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element. 


  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  // here scrollto function is used to scroll to the specified element with header offset and the elementPos is the top position of the specified element relative to the top of the offsetParent element and the offsetHeight property returns the height of an element, including vertical padding and border and the 100 is the offset value to activate the link at the middle of the section  and the behavior is the transition effect to use when scrolling to the specified element.
  // here header is the element that match the specified selector and the offset is the height of the header element, including vertical padding and border and the elementPos is the top position of the specified element relative to the top of the offsetParent element and the offsetHeight property returns the height of an element, including vertical padding and border and the 100 is the offset value to activate the link at the middle of the section  and the behavior is the transition effect to use when scrolling to the specified element.
  // here window.scrollTo is used to scroll to the specified coordinates in the document and the top is the vertical coordinate and the behavior is the transition effect to use when scrolling to the specified element.
  // behavior is the transition effect to use when scrolling to the specified element and the smooth is the smooth scrolling effect which is used to scroll to the specified element smoothly to make more smooth we can use the ease-in-out effect .

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
// here headerScrolled function is used to add the header-scrolled class to the header element when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element.
// here if the window.scrollY is greater than 100 then the selectHeader.classList.add('header-scrolled') is executed and the header-scrolled class is added to the header element and if the window.scrollY is not greater than 100 then the selectHeader.classList.remove('header-scrolled') is executed and the header-scrolled class is removed from the header element.

// here onscroll function is used to execute the specified function when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed and the document is the element that match the specified selector.

    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  // here toggleBacktotop function is used to add the active class to the backtotop element when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element.

    // here if the window.scrollY is greater than 100 then the backtotop.classList.add('active') is executed and the active class is added to the backtotop element and if the window.scrollY is not greater than 100 then the backtotop.classList.remove('active') is executed and the active class is removed from the backtotop element.
    // instead of backtotop we can use the toggleBacktotop function to add the active class to the backtotop element when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element.


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  // here on function is used to add an event listener for the click event to the specified element and the specified function is executed and the click event is passed as an argument to the function to be executed and the select('#navbar').classList.toggle('navbar-mobile') is used to toggle the navbar-mobile class to the navbar element and the this.classList.toggle('bi-list') is used to toggle the bi-list class to the this
  // element and the this.classList.toggle('bi-x') is used to toggle the bi-x class to the this element.
  // .mobile-nav-toggle is the element that match the specified selector and the click event is the event that is passed as an argument to the function to be executed and the select('#navbar').classList.toggle('navbar-mobile') is used to toggle the navbar-mobile class to the navbar element and the this.classList.toggle('bi-list') is used to toggle the bi-list class to the this
  //we can improve the code by using the toggleBacktotop function to add the active class to the backtotop element when the user scrolls the page and the specified function is executed and the scroll event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the load event to the specified element means when the page is fully loaded, the specified function is executed and the load event is passed as an argument to the function to be executed then we are using the addEventListener method to add an event listener for the scroll event to the specified element.

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  // here on function is used to add an event listener for the click event to the specified element and the specified function is executed and the click event is passed as an argument to the function to be executed and the select('#navbar').classList.contains('navbar-mobile') is used to check if the navbar-mobile class is present in the navbar element and the e.preventDefault() is used to prevent the default action of the click event and the this.nextElementSibling.classList.toggle('dropdown-active') is used to toggle the dropdown-active class to the this.nextElementSibling element.
  // .navbar .dropdown > a is the element that match the specified selector and the click event is the event that is passed as an argument to the function to be executed and the select('#navbar').classList.contains('navbar-mobile') is used to check if the navbar-mobile class is present in the navbar element and the e.preventDefault() is used to prevent the default action of the click event and the this.nextElementSibling.classList.toggle('dropdown-active') is used to toggle the dropdown-active class to the this.nextElementSibling element.


  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // here Swiper( is used to create a new swiper instance and the '.testimonials-slider' is used to select the element that match the specified selector and the speed: 600, is used to set the speed of the swiper instance and the loop: true, is used to set the loop of the swiper instance and the autoplay: { delay: 5000, disableOnInteraction: false } is used to set the autoplay of the swiper instance and the slidesPerView: 'auto', is used to set the slidesPerView of the swiper instance and the pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true } is used to set the pagination of the swiper instance.
  // improve the code by using the swiper instance to set the speed, loop, autoplay, slidesPerView and pagination that is used to set the speed, loop, autoplay, slidesPerView and pagination of the swiper instance .

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

// here the function is used to add an event listener for the click event to the specified element and the specified function is executed and the click event is passed as an argument to the function to be executed and the select('#navbar').classList.contains('navbar-mobile') is used to check if the navbar-mobile class is present in the navbar element and the e.preventDefault() is used to prevent the default action of the click event and the this.nextElementSibling.classList.toggle('dropdown-active') is used to toggle the dropdown-active class to the this.nextElementSibling element.
// addEventListener is used to add an event listener for the load event to the window object and the specified function is executed and the window.location.hash is used to get the hash value of the url and the select(window.location.hash) is used to select the element that match the specified selector and the scrollto(window.location.hash) is used to scroll to the specified element.
// AOS is used to animate the elements on the page and the duration is used to set the duration of the animation and the easing is used to set the easing function of the animation and the once is used to set whether the animation should be played only once and the mirror is used to set whether the animation should be played in reverse direction and the AOS.refresh() is used to refresh the animation.
// AOS.init is used to initialize the AOS and the duration is used to set the duration of the animation and the easing is used to set the easing function of the animation and the once is used to set whether the animation should be played only once and the mirror is used to set whether the animation should be played in reverse direction and the AOS.refresh() is used to refresh the animation.
// ease-in-out is used to set the easing function of the animation to ease-in-out and the once is used to set whether the animation should be played only once and the mirror is used to set whether the animation should be played in reverse direction and the AOS.refresh() is used to refresh the animation.
// PureCounter() is used to initialize the PureCounter and the PureCounter is used to create a counter that counts up or down to a specified number and the duration is used to set the duration of the animation and the easing is used to set the easing function of the animation and the once is used to set whether the animation should be played only once and the mirror is used to set whether the animation should be played in reverse direction and the AOS.refresh() is used to refresh the animation.





// let stars = document.getElementById("stars");
// let moon = document.getElementById("moon");
// let hills_B = document.getElementById("hills-back");
// let text = document.getElementById("mytext");
// let btn = document.getElementById("btn");
// let hills_F = document.getElementById("hills-front");
// let header = document.querySelector('header');


// window.addEventListener('scroll', function(){
//     let value = window.scrollY;
//     stars.style.left = value + 0.25+ 'px';
//     moon.style.top = value + 1.05 + 'px';
//     hills_F.style.top = value * 0.5 + 'px';
//     text.style.marginRight = value * 4 + 'px';
//     text.style.marginTop = value * 1 + 'px';
//     btn.style.marginTop = value * 1 + 'px';
//     header.style.top = value * 0.5 + 'px';

// })














