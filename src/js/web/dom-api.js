/* Key DOM data types
document - represents the html.
element - represents a node.
nodeList - array of elements
attribute - Similar to nodes.

Details -
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction */


window.onload = function() {
    var heading = document.createElement('h1');
     var headingText = document.createTextNode('Big head');
      heading.appendChild(headingText);
      document.body.appendChild(heading);
      // Adding event handler
      document.body.ondblclick = function (){alert('Why you clicked here, dude??')};
      document.querySe
}


  function changeColor(newColor) {
    var element = document.getElementsByTagName('button');
    element.style.color = 'red';

  }
