"use strict";
/*
import  * as modLib from "./ModVar";
console.log(modLib.greeting); //Prints Hello World!
//greeting is a read-only property here, non-editable.
*/
exports.__esModule = true;
var ModVar_1 = require("./ModVar");
var addObject = new ModVar_1.Addition(10, 20);
addObject.Sum();
