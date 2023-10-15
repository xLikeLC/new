// function send form

jQuery(document).ready(function () {
  $(".phone").mask("+373 (99) 999-999");

  jQuery(".send-form").click(function () {
    var form = jQuery(this).closest("form");

    if (form.valid()) {
      form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          form.css("opacity", "1");
          form.find(".status").html("Form send successful! Thank You!");
        },
        error: function () {
          form.find(".status").html("Server error");
        },
      });
    }
  });
});

$(document).ready(function () {
  const toTop = document.querySelector(".scroll-up-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });

  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["FrontEnd", "Software"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["FrontEnd Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
