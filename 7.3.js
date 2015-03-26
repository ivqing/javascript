// createElement() usage

window.onload = function() {
	var para = document.createElement("p");
	var txt = document.createTextNode("Hello qing");
	para.appendChild(txt);
	var test = document.getElementById("test");
	test.appendChild(para);
	var h2 = document.createElement("h2");
	var t = document.createTextNode("The second headline");
	h2r = h2.appendChild(t);
	test.appendChild(h2r);
}


