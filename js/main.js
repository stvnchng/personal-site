// jQuery
$(document).ready(function () {
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1100
    );
  });

  $("#self").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    $(".landing").find("h1").replaceWith("<h1>Hello again.</h1>");
    $(".landing")
      .find("h6")
      .replaceWith("<h6>You're on the site already.</h6>");

    $("#self").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      $(".landing").find("h1").replaceWith("<h1>Alright now.</h1>");
      $(".landing").find("h6").replaceWith("<h6>Please stop clicking.</h6>");

      $("#self").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          1000
        );
        $(".landing").find("h1").replaceWith("<h1>Enough.</h1>");
        $(".landing").find("h6").replaceWith("<h6>I'm warning you.</h6>");

        $("#self").on("click", function () {
          var audio = new Audio(
            "https://www.myinstants.com/media/sounds/untitled_dSmd8Co.mp3"
          );
          audio.play();

          $("html, body").animate(
            {
              scrollTop: 0,
            },
            1000
          );
          $(".landing").find("h1").replaceWith("<h1>change da world</h1>");
          $(".landing")
            .find("h6")
            .replaceWith("<h6>my final message. Goodb ye</h6>");

          setTimeout(function () {
            $(".astronaut").fadeOut(3000);
          }, 8700);
        });
      });
    });
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1500,
    once: true,
  });
});

// Poggers
document.getElementById("year").innerHTML = new Date().getFullYear();
