//This program is to appoximatley convert age into months, days, hours, and seconds
var age = prompt("Enter your age in years", "20");

var s = age * 31536000;
var h = age * 8760;
var d = age * 365;
var m = age * 12;

var ss = "age in seconds:";
var hh = "age in hours:";
var dd = "age in days:";
var mm = "age in months:";

console.log(ss,s);
console.log(hh, h);
console.log(dd, d);
console.log(mm, m);
