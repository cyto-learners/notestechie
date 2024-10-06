'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

    function filterPosts(category) {
      const posts = document.querySelectorAll('.post');
      posts.forEach(post => {
        if (category === 'all' || post.classList.contains(category)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }
    // Initially show all posts
    filterPosts('all');

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

const searchInput = document.getElementById('searchInput');
    const blogContainer = document.getElementById('blogContainer');

    document.getElementById('searchButton').addEventListener('click', () => {
        const filter = searchInput.value.toLowerCase();
        const cards = blogContainer.getElementsByClassName('blog-card');

        Array.from(cards).forEach(card => {
            const chapter = card.getAttribute('data-chapter').toLowerCase();
            card.style.display = chapter.includes(filter) ? '' : 'none';
        });
    });
function filterPosts(subject) {
    const cards = document.querySelectorAll('.blog-card');

    cards.forEach(card => {
        if (subject === 'all') {
            card.style.display = ''; // Show all cards
        } else {
            card.style.display = card.getAttribute('data-subject') === subject ? '' : 'none';
        }
    });
}

    window.onload = function() {
        document.body.style.width = '1024px';
        document.body.style.overflowX = 'auto';
    };


