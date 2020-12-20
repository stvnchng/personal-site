// Scrolling animations and whatnot
$(document).ready(function () {
  $('nav a[href*="#"]').on("click", function () {
    if ($(this).attr("href") == "#contact") {
      $("html, body").animate(
        {
          scrollTop: $(document).height(),
        },
        1100
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        1100
      );
    }
  });

  $("#self").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    $(".landing").find("h1").replaceWith("<h1>Hi again.</h1>");
    $(".landing")
      .find("h6")
      .replaceWith("<h6>You're already on the site.</h6>");

    $("#self").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      $(".landing").find("h1").replaceWith("<h1>You clicked again?</h1>");
      $(".landing")
        .find("h6")
        .replaceWith("<h6>I'm not hiding anything, I swear.</h6>");

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
          $(".astronaut").fadeOut(5000);
        }, 7250);
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

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDgmSnaVMqXZjuJRDlIrLvOlyKPWL-J2gk",
  authDomain: "steven-website.firebaseapp.com",
  databaseURL: "https://steven-website.firebaseio.com",
  projectId: "steven-website",
  storageBucket: "steven-website.appspot.com",
  messagingSenderId: "397170568709",
  appId: "1:397170568709:web:a553ee5aead36ab564b66c",
  measurementId: "G-R63FD3NPNM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Messages reference
var messagesRef = firebase.database().ref("messages");

// Form submission listener
document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  saveMessage(name, email, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  $("html, body").animate(
    {
      scrollTop: $(document).height(),
    },
    0
  );

  document.getElementById("contactForm").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

document.getElementById("year").innerHTML = new Date().getFullYear();
