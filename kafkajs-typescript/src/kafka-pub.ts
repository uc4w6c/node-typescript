import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-test',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const sendMessage = () => {
  return producer
    .send({
      topic: 'test-topic',
      messages: [
        { value: 'Hello KafkaJS user!' },
      ],
    })
    .then(console.log)
    .catch(console.error);
};

const runProducer = async () => {
  await producer.connect();
  setInterval(sendMessage, 3000);
  await producer.disconnect();
}

runProducer().catch(console.error);
