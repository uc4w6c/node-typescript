import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-test-pub',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const producer = kafka.producer();

const sendMessage = () => {
  return producer
    .send({
      topic: 'test-topic',
      messages: [
        { key: 'key1', value: 'Hello KafkaJS user 1!' },
        { key: 'key2', value: 'Hello KafkaJS user 2!' },
        // { key: 'key1', value: 'Hello KafkaJS user 1!', partition: 0 },
        // { key: 'key2', value: 'Hello KafkaJS user 2!', partition: 1 },
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
