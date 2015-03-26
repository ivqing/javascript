function displayAbbreviations() {
	// DOM souport check
	if (!document.getElementsByTagName ||
		!document.createTextNode ||
		!document.createElement) return false;
	// find the abbrs and save it in array defs.
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i=0; i<abbreviations.length; i++) {
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	// define dl and save the defs in.
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	// insert header and dl into the body
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(header);
	body.appendChild(dlist);
}

function displayCitations() {
	var quotes = document.getElementsByTagName("blockquote")
	for (var i=0; i<quotes.length; i++) {
		if (!quotes[i].getAttribute("cite")) continue;
		var url = quotes[i].getAttribute("cite");
		var quoteChildren = quotes[i].getElementsByTagName("*");
		if (quoteChildren.length < 1) continue;
		var last_elem = quoteChildren[quoteChildren.length - 1];
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href", url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		last_elem.appendChild(superscript);
	}
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
