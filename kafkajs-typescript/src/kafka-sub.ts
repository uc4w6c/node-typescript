import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-test-sub',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const consumer = kafka.consumer({ groupId: 'test-group2' });

const runConsumer = async () => {
  await consumer.connect();
  // await consumer.subscribe({ topic: 'test-topic1', fromBeginning: true });
  await consumer.subscribe({ topic: 'math.sum1', fromBeginning: true });
  // await consumer.subscribe({ topic: 'math.sum' });
  await consumer.run({
    autoCommit: false,  // autoCommitを停止中
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
