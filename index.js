const onoff = require("onoff")
const gpio = onoff.Gpio

console.log("Initializing solar application...")

if(!gpio.accessible) {
    console.error("Failed: gpio is not accessible")
    return
}

try {
    const upperRight = new gpio(17, "in")
    const lowerRight = new gpio(27, "in")
    const lowerLeft  = new gpio(22, "in")
    const upperLeft  = new gpio(23, "in")

    const leftRight = new gpio(24, "out", "both")
    const upDown = new gpio(25, "out", "both")
}
catch(e) {
    console.error("Failed to init gpio pins", e)
}

console.log("Initialized GPIO pins")

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

    return true || true || true || true ? 10 : 1000
}