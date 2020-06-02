const onoff = require("onoff")
const gpio = onoff.Gpio

console.log("Initializing solar application...")

if(!gpio.accessible) {
    console.error("Failed: gpio is not accessible")
    return
}

let upperRight
let lowerRight
let lowerLeft
let upperLeft
let leftRight
let upDown

try {
    upperRight = new gpio(17, "in")
    lowerRight = new gpio(27, "in")
    lowerLeft  = new gpio(22, "in")
    upperLeft  = new gpio(23, "in")

    leftRight = new gpio(24, "out", "both")
    upDown = new gpio(25, "out", "both")
}
catch(e) {
    console.error("Failed to init gpio pins", e)
}

console.log("Initialized GPIO pins")
console.log("Beginning solar tracker")

loop()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function loop() {
    while(true) {
        try {
            await tick()
        }
        catch(e) {
            console.error("Error in tick", e)
        }
    }
}

async function tick() {
    const responses = await Promise.all([
        upperRight.read(), 
        lowerRight.read(), 
        lowerLeft.read(), 
        upperLeft.read()
    ])

    const ms = await checkResponses(responses)

    await sleep(ms)
}

async function checkResponses(responses) {
    console.log(responses)

    if(true) {
        // top sensors are brighter
    }
    else if(true) {
        // bottom sensors are brighter
    }
    else if(true) {
        // right sensors are brighter
    }
    else if (true) {
        // left sensors are brighter
    }

    return true || true || true || true ? 1000 : 1000
}