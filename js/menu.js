$(document).ready(function () {
   const burger = $("#burger"),
      flatTopDog = $("#flat-top-dog"),
      fries = $("#fries"),
      custard = $("#custard"),
      drinks = $("#drinks"),
      beerAndWine = $("#beer-and-wine"),
      breakfast = $("#breakfast"),
      woof = $("#woof"),
      snbBtn = $(".side_menu-nav a"),
      h1Height = $("h1").height(),
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

   snbBtn.click(function (e) {
      e.preventDefault();
      const btn = $(this).attr("href");
      const targetTop = $(btn).offset().top - header_height;
      $("html, body").animate({ scrollTop: targetTop }, 800);
   });

   $(window).scroll(function () {
      let currentScroll = $(document).scrollTop();
      let burgerTop = burger.offset().top - header_height - 80,
         flatTopDogTop = flatTopDog.offset().top - header_height - 80,
         friesTop = fries.offset().top - header_height - 80,
         custardTop = custard.offset().top - header_height - 80,
         drinksTop = drinks.offset().top - header_height - 80,
         beerAndWineTop = beerAndWine.offset().top - header_height - 80,
         breakfastTop = breakfast.offset().top - header_height - 80,
         woofTop = woof.offset().top - header_height - 180;

      if (currentScroll >= 0 && currentScroll < flatTopDogTop) {
         snbBtn.removeClass("hover");
         snbBtn[0].classList.add("hover");
      } else if (currentScroll >= flatTopDogTop && currentScroll < friesTop) {
         snbBtn.removeClass("hover");
         snbBtn[1].classList.add("hover");
      } else if (currentScroll >= friesTop && currentScroll < custardTop) {
         snbBtn.removeClass("hover");
         snbBtn[2].classList.add("hover");
      } else if (currentScroll >= custardTop && currentScroll < drinksTop) {
         snbBtn.removeClass("hover");
         snbBtn[3].classList.add("hover");
      } else if (currentScroll >= drinksTop && currentScroll < beerAndWineTop) {
         snbBtn.removeClass("hover");
         snbBtn[4].classList.add("hover");
      } else if (currentScroll >= beerAndWineTop && currentScroll < breakfastTop) {
         snbBtn.removeClass("hover");
         snbBtn[5].classList.add("hover");
      } else if (currentScroll >= breakfastTop && currentScroll < woofTop) {
         snbBtn.removeClass("hover");
         snbBtn[6].classList.add("hover");
      } else if (currentScroll >= woofTop) {
         snbBtn.removeClass("hover");
         snbBtn[7].classList.add("hover");
      }
   });
}); //document.ready
