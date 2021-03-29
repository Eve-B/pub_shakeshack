$(document).ready(function () {
   //header nav controll

   const trigger = $(".menu-trigger");
   const menuUl = $("nav ul");
   const menuBtn = $("nav ul a");

   menuBtn.hover(function () {
      $(this).toggleClass("hover");
   });

   //타블렛 이하 사이즈에서 접힌 메뉴를 열고 닫음
   trigger.click(function () {
      menuUl.toggleClass("active");
      //ul에서 마우스가 떠나도 ul이 접힌다
      if (menuUl.hasClass("active")) {
         menuUl.mouseleave(function () {
            menuUl.removeClass("active");
         });
      }
      trigger.toggleClass("active");
   });

   //접힘 메뉴 열린 채로 플랫 메뉴로 넘어갈 경우, 닫고 높이 맞추기
   $(window).resize(function () {
      const tabletWidth = 768;
      let winWidth = window.innerWidth;
      if (winWidth >= tabletWidth) {
         menuUl.removeClass("active");
         trigger.removeClass("active");
      }
   });

   /////////////////////////////////////////////

   // 메뉴 섹션 선택했을 때 menu.html로 넘어가면서 스크롤링
   //
   //index.html 메인페이지에서 menu 종류 선택하면
   //menu.html에 해당하는 section ID를 localStorage에 저장 후
   //menu.html로 이동
   const linkForMenu = $(".menu a");
   linkForMenu.click(function (e) {
      e.preventDefault();
      const targetHref = $(this).attr("href");
      const targetSection = targetHref.split("html")[1];
      localStorage.setItem("menuLocation", targetSection);
      location.assign("menu.html");
   });

   // menu.html에서 부드러운 스크롤링
   //
   // localstorage에서
   const currentURL = document.location.href;
   const isInMenuPage = currentURL.indexOf("menu.html");

   const h1Height = $("h1").height(),
      ulHeight = $(".gnb ul").height(),
      triggerHeight = $(".menu-trigger").height();

   let header_height = (function () {
      if (window.innerWidth >= 768) return h1Height + ulHeight;
      else return h1Height + triggerHeight;
   })();

   $(window).resize(function () {
      if (window.innerWidth >= 768) {
         header_height = h1Height + ulHeight;
      } else {
         header_height = h1Height + triggerHeight;
      }
      console.log(header_height);
   });

   if (isInMenuPage >= 0) {
      let givenSection = localStorage.getItem("menuLocation");
      let scrollTarget;
      if (givenSection == "") {
         scrollTarget = 0;
      } else {
         scrollTarget = $(givenSection).offset().top - header_height;
      }

      $("html, body").animate({ scrollTop: scrollTarget }, 800, clearSection);
   }

   //main에서 menu로 이동 완료 후 localStorage 초기화
   function clearSection() {
      localStorage.setItem("menuLocation", "");
   }

   // scroll(givenSection);
}); // document.ready
