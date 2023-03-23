const { readFile } = require('fs')

readFile(__filename, () => {
    new Promise(function (resolve) {
        console.log('new promise')
        resolve()
    }).then(() => {
        console.log('then 1')
    })

    async function foo () {
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
 * immediate 1
 * immediate 2
 * timeout 1
 * timeout 2
 */