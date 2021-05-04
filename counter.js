var prompt = require('prompt-sync')();

function view(counter) {
    return String(`\n\n        Count: ${counter}
                   \n        (+) (-)
                   \n\n        (q) for quit\n`)
}


function update(msg, counter) {
    if (msg === "+") {
        return counter + 1
    } else if (msg === "-") {
        return counter - 1
    } else if (msg === "q") {
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
        console.log(currentView)
        const msg = prompt(`What would you do? `)
        counter = update(msg, counter)
        if (counter === false) {
            x = false
        }
    }
}

app(0)
