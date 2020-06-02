const onoff = require("onoff")
const gpio = onoff.Gpio

console.log("Initializing solar application...")

if(!gpio.accessible) {
    console.error("Failed: gpio is not accessible")
    return
}

const upperRight = new gpio(12)
const lowerRight = new gpio(13)
const lowerLeft  = new gpio(14)
const upperLeft  = new gpio(15)

const leftRight = new gpio(16)
const upDown = new gpio(17)

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