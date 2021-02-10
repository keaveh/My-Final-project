$(document).ready(function () {
  $("#login").on("click", function () {
    var email = $("#email").val();
    var password = $("#password").val();
    if (checkPass(password) === 3) {
      $(".txtError").hide();
      $("#login").text("loading...");
      checkUserInfo(password, email);
    } else {
      $(".txtError")
        .show()
        .text(`must have ${checkPass(password)}`);
    }
  });
});

function show() {
  var password = document.getElementById("password");
  var icon = document.querySelector(".fas");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
function checkPass(pass) {
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  var countNumber = 0;
  var txtErr = "";
  if (upperCaseLetters.test(pass)) {
    countNumber++;
  } else {
    txtErr += "upperCaseLetters, ";
  }
  if (lowerCaseLetters.test(pass)) {
    countNumber++;
  } else {
    txtErr += "lowerCaseLetters, ";
  }
  if (numbers.test(pass)) {
    countNumber++;
  } else {
    txtErr += "numbers, ";
  }
  if (countNumber === 3) {
    return countNumber;
  } else return txtErr;
}

function checkUserInfo(pass, email) {
  var option = {
    url: "https://demo.ali-chv.com/api/login",
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "application/json",
    },
    data: {
      email: email,
      password: pass,
    },
  };
  axios
    .request(option)
    .then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        window.location.href = "../game.rock.paper.sco/index.html";
      } else if (response.data.status === 401) {
        $(".txtError").show().text("wrongData");
        $("#login").text("login");
      }
    })
    .catch(function (error) {
      console.log(Error);
    });
}
