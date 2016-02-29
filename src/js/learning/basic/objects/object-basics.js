/* JS is an object based language. Unlike Java there is no class concept but
/* prototype. Object properties can be added at run time and code time. Object
/* are initialized using constructor. Every objct would have a prototype. */
/* JS supports single inheritance */

/* Semicolon is auto inserted and hence not required. However, it's good to use
/* semicolon as it improves readabilit */

/* Conceptually 2 prototypes in JS. (1) Prototype which is used for inheritance
/* (2) Function prototype which is used for addding properties for the function
/* at run time. */

function Employee(){
  this.name = 'Siva';
  this.dept = 'General';
}

function Manager(){
  // This is called constructor chaining
 Employee.call(this)
  this.reports = []
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee(){
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson(){
  WorkerBee.call(this);
  this.dept = 'Sales';
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

var manager = new Manager
console.log(manager.name);
console.log(Manager.prototype);
console.log(manager.reports);
