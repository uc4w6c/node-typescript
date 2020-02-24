import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-test-pub',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const producer = kafka.producer({ maxInFlightRequests: 1, idempotent: true, transactionalId: '1' });

let i = 0;
const sendMessage = async () => {
  i = i + 1
  const transaction = await producer.transaction();
  try {
    await transaction
      .send({
        // topic: 'test-topic',
        topic: 'tran.test',
        messages: [
          { value: 'Transaction' + i },
        ],
      })
      .then(console.log)
      .catch(console.error);
    await transaction.commit();
  } catch(e) {
    console.log('err!');
    await transaction.abort();
  }
};

const runProducer = async () => {
  await producer.connect();
  setInterval(sendMessage, 3000);
  await producer.disconnect();
}

runProducer().catch(console.error);
