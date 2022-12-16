/*
import  * as modLib from "./ModVar";
console.log(modLib.greeting); //Prints Hello World!
//greeting is a read-only property here, non-editable.
*/

import {Addition} from './ModVar';  
  
let addObject = new Addition(10, 20);   
  
addObject.Sum();

