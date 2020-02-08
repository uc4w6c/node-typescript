import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-test-sub',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic1', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic);
      console.log(partition);
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

runConsumer().catch(console.error);
