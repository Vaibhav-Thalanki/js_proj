document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("button#btn").addEventListener("click", function () {
    $ajaxutils.sendreq("../myname.txt", function (response) {
      document.querySelector("div#fill").innerHTML =
        "<h3> Hello " + response.responseText + " !!</h3>";
    });
  });
});
