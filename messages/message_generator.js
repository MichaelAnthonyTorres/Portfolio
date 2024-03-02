//This is meant to give different fortunes. Similar to an 8 ball.

const randMessage = arr => arr[Math.floor(Math.random() * arr.length)]

const generator = {  
    greetings: [
    'Hello there',
    'Greetings',
    'Welcome',
    'Long time no see',
    ],

    names: [
    'Buddy',
    'Stranger',
    'Pal',
    'Friend'
    ],

    fortunes: [
    'Money is coming your way',
    'You will meet somone new',
    'Your wildest dreams are going to come true',
    'The end is near',
    'You will lose a lot of things',
    'Maybe not the best time for you'
    ]
}

const createRandomFortune = () =>{
    let greeting = randMessage(generator.greetings)
    let name = randMessage(generator.names)
    let fortune = randMessage(generator.fortunes)

    console.log(`${greeting} ${name}. Here is your fortune. ${fortune}`)
}

createRandomFortune()