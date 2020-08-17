var userAgent = navigator.userAgent;

if (userAgent.indexOf("Chrome")) {
  console.log("Hello from ES6");
} else {
  console.log("Hello from ES5");
}

function featureCheck() {
  try {
    eval("`Test String`");
  } catch (error) {
    return false;
  }
  return true;
}

function insertScript(type) {
  var el = document.createElement("script");
  el.src = type + ".js";
  document.body.appendChild(el);
}

if (featureCheck()) {
  insertScript("es6");
} else {
  insertScript("es5");
}
