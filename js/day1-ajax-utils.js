document.addEventListener("DOMContentLoaded", function (event) {
  (function (global) {
    var ajaxutils = {};
    function returnXMLHttpObject() {
      if (global.XMLHttpRequest) {
        return new XMLHttpRequest();
      } else {
        global.alert("AJAX not supported");
        return null;
      }
    }

    ajaxutils.sendreq = function (requrl, responsehandler) {
      var req = returnXMLHttpObject();
      req.onreadystatechange = function () {
        handleresponses(req, responsehandler);
      };
      req.open("GET", requrl, true);
      req.send(null);
    };
    function handleresponses(req, responsehandler) {
      if (req.status == 200 && req.readyState == 4) responsehandler(req);
    }

    global.$ajaxutils = ajaxutils;
  })(window);
});
