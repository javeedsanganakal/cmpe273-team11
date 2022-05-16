// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

// the client ID lets kafka know who's producing the messages
const clientId = "my-app"

const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env

const ssl= true

const sasl = { username, password, mechanism: 'plain' }

// we can define the list of brokers in the cluster
const brokers = ["<url>:9092"]
// this is the topic to which we want to write messages
const topic = "poc_topic"

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers, ssl, sasl })

const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async () => {
	console.log('Hello');
	await producer.connect()
	let i = 0

	// after the produce has connected, we start an interval timer
	setInterval(async () => {
		try {
			// send a message to the configured topic with
			// the key and value formed from the current value of `i`
			await producer.send({
				topic,
				messages: [
					{
						key: String(i),
						value: "this is message " + i,
					},
				],
			})

			// if the message is written successfully, log it and increment `i`
			console.log("writes: ", i)
			i++
		} catch (err) {
			console.error("could not write message " + err)
		}
	}, 5000)
}

module.exports = produce