"use strict";
/**
 * Here’s the challenge: The example prints a message to the console. It does so using all the various ways in
 * which the execution of code can be scheduled in Node.js. Without running the code, can you tell me what message
 * it prints to the console?
 *
 * Answer is at the end of the document.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
new Promise(function (resolve) {
    console.log('new promise');
    resolve();
}).then(() => {
    console.log('then 1');
});
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('async function');
    });
}
foo().then(() => {
    console.log('then 2');
});
setImmediate(() => {
    console.log('immediate 1');
});
setTimeout(() => {
    console.log('timeout 1');
});
process.nextTick(() => {
    console.log('nextTick 1');
});
queueMicrotask(() => {
    console.log('microtask 1');
});
setTimeout(() => {
    console.log('timeout 2');
});
setImmediate(() => {
    console.log('immediate 2');
});
process.nextTick(() => {
    console.log('nextTick 2');
});
process.nextTick(() => {
    console.log('nextTick 3');
});
queueMicrotask(() => {
    console.log('microtask 2');
});
/**
 * ANSWER
 *
 * new promise
 * async function
 * then 1
 * then 2
 * microtask 1
 * microtask 2
 * nextTick 1
 * nextTick 2
 * nextTick 3
 * immediate 1
 * immediate 2
 * timeout 1
 * timeout 2
 */
