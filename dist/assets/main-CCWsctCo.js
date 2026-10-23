import"./style-htyvuD_I.js";document.addEventListener(`DOMContentLoaded`,()=>{e(),a(),o(),c(),t(),n(),r(),i(),s()});function e(){let e=document.querySelector(`.mobile-toggle`),t=document.querySelector(`.nav-menu`);e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`mobile-open`)})}function t(){let e=document.querySelectorAll(`
    .gitos-hero-stage-card,
    .skills-clean-title,
    .skills-clean-card,
    .about-gitos-card,
    .projects-dark-title,
    .gitos-project-row,
    .process-left-content,
    .process-right-container,
    .process-step-item,
    .gitos-exp-header-wrap,
    .gitos-exp-clean-card,
    .section-title-wrap,
    .protfolis-card,
    .footer-top-cta,
    .footer-columns-grid
  `);e.forEach((e,t)=>{if(e.classList.add(`reveal-on-scroll`),e.classList.contains(`skills-clean-card`)||e.classList.contains(`protfolis-card`)){let n=t%2*.12;e.style.transitionDelay=`${n}s`}else if(e.classList.contains(`gitos-project-row`)){let n=t%6*.08;e.style.transitionDelay=`${n}s`}else if(e.classList.contains(`process-step-item`)||e.classList.contains(`gitos-exp-clean-card`)){let n=t%4*.1;e.style.transitionDelay=`${n}s`}});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{root:null,rootMargin:`0px 0px -60px 0px`,threshold:.1});e.forEach(e=>t.observe(e))}function n(){let e=document.querySelectorAll(`section[id]`),t=document.querySelectorAll(`.nav-menu .nav-link`);if(!e.length||!t.length)return;let n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let n=e.target.getAttribute(`id`);t.forEach(e=>{e.getAttribute(`href`)===`#${n}`?e.classList.add(`active`):e.classList.remove(`active`)})}})},{threshold:.3});e.forEach(e=>n.observe(e))}function r(){document.querySelectorAll(`
    .btn-hire-me,
    .btn-black-pill,
    .btn-footer-cta,
    .btn-learn-more,
    .btn-gitos-primary,
    .btn-gitos-secondary,
    .social-circle-btn,
    .filter-btn,
    .gitos-dark-filter-btn
  `).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-(n.left+n.width/2),i=t.clientY-(n.top+n.height/2);e.style.transform=`translate(${r*.2}px, ${i*.2}px) scale(1.03)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=`translate(0px, 0px) scale(1)`})})}function i(){let e=document.querySelector(`.gitos-hero-portrait-stage`),t=document.querySelector(`.gitos-hero-portrait-container`);!e||!t||window.innerWidth<992||(e.addEventListener(`mousemove`,n=>{let r=e.getBoundingClientRect(),i=n.clientX-(r.left+r.width/2),a=(n.clientY-(r.top+r.height/2))/r.height*-12,o=i/r.width*12;t.style.transform=`perspective(1000px) rotateX(${a}deg) rotateY(${o}deg) scale(1.03)`}),e.addEventListener(`mouseleave`,()=>{t.style.transform=`perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`}))}function a(){let e=document.querySelectorAll(`.project-filter-btn, .gitos-dark-filter-btn, .filter-btn`),t=document.querySelectorAll(`.project-grid-card, .gitos-project-row, .project-card-wrap`);e.forEach(n=>{n.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-filter`);t.forEach(e=>{let t=e.getAttribute(`data-category`);r===`all`||t===r?(e.style.display=`flex`,setTimeout(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0) scale(1)`},20)):(e.style.opacity=`0`,e.style.transform=`translateY(16px) scale(0.97)`,setTimeout(()=>{e.style.display=`none`},250))})})})}function o(){document.querySelectorAll(`.project-grid-card[data-project-id]`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`a`))return;let n=e.getAttribute(`data-project-href`)||`projects/${e.getAttribute(`data-project-id`)}.html`;n&&(window.location.href=n)}),e.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=e.getAttribute(`data-project-href`)||`projects/${e.getAttribute(`data-project-id`)}.html`;t&&(window.location.href=t)}})})}function s(){let e=document.querySelectorAll(`.gallery-item`);e.length&&(e.forEach(t=>{t.addEventListener(`click`,n=>{if(window.matchMedia(`(hover: none) and (pointer: coarse)`).matches||window.innerWidth<=991){let n=t.classList.contains(`touch-active`);e.forEach(e=>{e!==t&&e.classList.remove(`touch-active`)}),n?t.classList.remove(`touch-active`):t.classList.add(`touch-active`)}}),t.addEventListener(`keydown`,n=>{if(n.key===`Enter`||n.key===` `){n.preventDefault();let r=t.classList.contains(`touch-active`);e.forEach(e=>e.classList.remove(`touch-active`)),r||t.classList.add(`touch-active`)}})}),document.addEventListener(`click`,t=>{t.target.closest(`.gallery-item`)||e.forEach(e=>e.classList.remove(`touch-active`))}))}function c(){let e=document.getElementById(`contact-form`),t=document.getElementById(`contact-success`);e&&e.addEventListener(`submit`,n=>{n.preventDefault(),t&&(t.style.display=`block`,e.reset(),setTimeout(()=>{t.style.display=`none`},4e3))})}