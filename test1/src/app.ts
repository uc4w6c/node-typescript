import { JSError } from './types/JSError';

console.log('hogehoge');

const jsErrorBool = new JSError('Invalid partition metadata', { retriable: true });
const jsErrorString = new JSError('The group is rebalancing');
const jsErrorError = new JSError(new Error('💣'), { retriable: true });
const jsError = new JSError('Invalid partition metadata', { topic: "topic", partitionId: 11});
