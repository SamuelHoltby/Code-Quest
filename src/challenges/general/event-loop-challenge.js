'use strict';

/**
 * Here’s the challenge: The example prints a message to the console. It does so using all the various ways in
 * which the execution of code can be scheduled in Node.js. Without running the code, can you tell me what message
 * it prints to the console?
 *
 * Answer is at the end of the document.
 */

new Promise(function (resolve) {
    console.log('new promise')
    resolve()
}).then(() => {
    console.log('then 1')
})

async function foo() {
    console.log('async function')
}

foo().then(() => {
    console.log('then 2')
})

setImmediate(() => {
    console.log('immediate 1')
})

setTimeout(() => {
    console.log('timeout 1')
})

process.nextTick(() => {
    console.log('nextTick 1')
})

queueMicrotask(() => {
    console.log('microtask 1')
})

setTimeout(() => {
    console.log('timeout 2')
})

setImmediate(() => {
    console.log('immediate 2')
})

process.nextTick(() => {
    console.log('nextTick 2')
})

process.nextTick(() => {
    console.log('nextTick 3')
})

queueMicrotask(() => {
    console.log('microtask 2')
})


/**
 * ANSWER
 *
 * new promise
 * async function
 * nextTick 1
 * nextTick 2
 * nextTick 3
 * then 1
 * then 2
 * microtask 1
 * microtask 2
 * timeout 1
 * timeout 2
 * immediate 1
 * immediate 2
 */