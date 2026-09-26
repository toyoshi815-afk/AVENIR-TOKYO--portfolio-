'use strict'

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.hamburger_close');
const hamburgerContents = document.querySelector('.hamburger-contents');
const overlay = document.querySelector('.overlay');
console.log(overlay); // null や undefined になっていないか

hamburger.addEventListener('click', () => {
  hamburgerContents.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; 
  // searchWindow.classList.remove('active_search');
  // searchOverlay.classList.remove('active_search');
  //ハンバーガーと検索ウィンドウを同時に開く方法があれば必要だが、現状見つかっていないので付与

});

closeBtn.addEventListener('click', () => {
  hamburgerContents.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = ''; 
});

overlay.addEventListener('click', () => {
  hamburgerContents.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// 検索ウィンドウ
const searchBtn = document.querySelector('.search_button');
const searchClose = document.querySelector('.search_close');
const searchWindow = document.querySelector('.search_window');
const searchOverlay = document.querySelector('.overlay_search');
console.log(searchOverlay);

searchBtn.addEventListener('click', () => {
  searchWindow.classList.add('active_search');
  searchOverlay.classList.add('active_search');
  document.body.style.overflow = 'hidden';
  // hamburgerContents.classList.remove('active');
  // overlay.classList.remove('active');
});

searchClose.addEventListener('click', () => {
  searchWindow.classList.remove('active_search');
  searchOverlay.classList.remove('active_search');
  document.body.style.overflow = ''; 
  });

searchOverlay.addEventListener('click', () => {
  searchWindow.classList.remove('active_search');
  searchOverlay.classList.remove('active_search');
  document.body.style.overflow = ''; 
  });
