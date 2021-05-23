function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

var scripts = document.getElementsByTagName("script");
var div = document.getElementsByClassName("n-body1");
for (var i = 0; i < scripts.length; i++) {
  if (scripts[i].type.toLowerCase() == "application/ld+json") {
    var text = htmlDecode(JSON.parse(scripts[i].textContent).articleBody);
    var para = document.createElement("p");
    const regex = /\.(?![^\S\r\n])/g;
    text = text.replace(regex, ".<br><br>");
    para.innerHTML = text;
    div[0].innerHTML = "";
    div[0].appendChild(para);
    break;
  }
}
