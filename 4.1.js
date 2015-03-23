function  showPic(whichpic) {
	if (!document.getElementById("placeholder")) {
		return true;
	} // default browser behavior if placeholder doesn't exist.
	var source = whichpic.getAttribute("href");
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

window.onload = prepareGallery;
