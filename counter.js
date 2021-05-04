var prompt = require('prompt-sync')();

function view(counter) {
    var str = String(counter)
    return str
}


function update(msg, counter) {
    if (msg == "+") {
        return counter + 1
    } else if (msg == "-") {
        return counter - 1
    } else if (msg == "q") {
        return false
    } else {
        return counter
    }
}

function app(counter) {
    var x = true
    while (x) {
        const currentView = view(counter)
        console.clear()
        console.log(`\n        Counter: ${currentView}\n`)
        console.log(`        (+) (-)\n\n`)
        console.log(`        (q) for quit\n`)
        const msg = prompt(`What would you do? `)
        counter = update(msg, counter)
        if (counter == false) {
            x = false
        }
    }
}

app(0)
