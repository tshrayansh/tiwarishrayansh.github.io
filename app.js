/* -------------------------------------------------------------
 * Earthy Taupe & Warm Cream Interactive Scripts — app.js
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
});

/**
 * 1. Desktop Scroll-Spy & Active Section Highlights
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        
        navLinks.forEach(link => {
          if (link.getAttribute('data-target') === activeId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * 2. Smooth Scrolling to Sections (Desktop Link Clicks)
 */
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * 3. Mobile Tab Swapping
 */
function switchMobileTab(id) {
  const sections = document.querySelectorAll('.content-section');
  const tabs = document.querySelectorAll('.mobile-tab');
  
  // Hide all sections, show the active one
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Highlight the active tab button
  tabs.forEach(tab => {
    if (tab.id === `tab-${id}`) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  // Auto scroll to top of content on mobile tab change
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * 4. Persistent Lightbox Modal for Photo Gallery
 */
function openLightbox(src, title, specs) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSpecs = document.getElementById('lightbox-specs');

  if (lightbox && lightboxImg && lightboxTitle && lightboxSpecs) {
    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    lightboxSpecs.textContent = specs;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Close lightbox on pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
