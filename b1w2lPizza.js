
var a = parseInt(prompt("Hoeveel small pizzas wil je? : €5,00"));
var b = parseInt(prompt("Hoeveel medium pizzas wil je? : €8,00"));
var c = parseInt(prompt("Hoeveel large pizzas wil je? : €12,00"));

var d = parseInt(a * 5);
var e = parseInt(b * 8);
var f = parseInt(c * 12);

document.write(a + " x " + "Small = " + "€" + d);
document.write("<br />");

document.write(b + " x " + "Medium = " + "€" + e);
document.write("<br />");

document.write(c + " x " + "Large = " + "€" + f);
document.write("<br />");
document.write("<br />");

document.write("Totaal: " + "€" + (d + e + f));


