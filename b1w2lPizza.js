function Pizza(){
	var a = parseInt(document.querySelector("#small").value);
	var b = parseInt(document.querySelector("#medium").value);
	var c = parseInt(document.querySelector("#large").value);

	var d = parseInt(a * 5.25);
	var e = parseInt(b * 5.99);
	var f = parseInt(c * 10.99);

	alert("€" + d + " " + "€" + e + " " + "€" + f);
}
