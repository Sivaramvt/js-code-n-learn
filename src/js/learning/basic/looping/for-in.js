/* for-in statement iterates over properties of the object */

var triangle = {a:10, b:20, c:30};

function ColoredTriangle(){
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();


for (var prop in obj) {
    console.log("obj." + prop + " = " + obj[prop]);
}


// hasOwnProperty
for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  }
}
