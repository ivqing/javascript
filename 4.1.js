function  showPic(whichpic) {
	// default browser behavior if placeholder doesn't exist.
	if (!document.getElementById("placeholder")) {
		return true;
	} 	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if (!document.getElementById("description")) {
		return false;
	} // cancel the default behavior when placeholder exist,
	  // description not.
	var text = whichpic.getAttribute("title") ? text = whichpic.getAttribute("title") : ""; 
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	return false;
	}
// create placeholder dynamicly.
function preparePlaceHolder() {
	// surport check
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "placeholder.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	//document.getElementsByTagName("body")[0].appendChild(palceholder);
	//document.getElementsByTagName("body")[0].appendChild(description);
	//document.body.appendChild(palaceholder);
	//document.body.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, gallery);
}


// bind the showPic to onclick outside html
function prepareGallery() {
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	//alert(links.length);
	for (var i=0; i < links.length; i ++) {
		links[i].onclick= function() {
			return(showPic(this));
			//return false;
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
// some prepare works onload
addLoadEvent(preparePlaceHolder);
addLoadEvent(prepareGallery);
