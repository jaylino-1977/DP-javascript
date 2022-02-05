var graphics = 1000;
graphics = graphics + 1000


var calligraphy = "font design"; //This is a global variable
var photography = "head shot"; //This is a global variable
var videography = "commercial production" //This is a global variable

{ 
   var graphics = 1000; //This is a block variable
}

let c = 1000 + 2000;
let d = 3000 * 2;
let e = 4000 - 500;
let f = 6000 / 3000;

let g = "juan" + " " + "Perez";

const camera = {type:"Mirrorless", model:"CanonR6", color:"black"};


console.log(graphics); 

// ******************************* Module 3 Assignment ******************************* //

 //functions//
function gallery (fonts, graphics, logos) {
    return fonts + graphics + logos; 
 }
 function gallery2 (fonts1, graphics1, logos1) {

   return fonts1 + graphics1 + logos1; 
 }
//objects with properties//
 const font = {typeface: "Arial", weight: "16px", color:"black"}
 const graphic = {type: "vector" }
 const graphic = {type: "raster"}

 //method//
 const font = {
   fontName: "Arial",
   fontweight : "16",
   color     : "black",
   fontFamily : function() {
     return this.fontName + this.fontweight + this.color;
   }
 };

