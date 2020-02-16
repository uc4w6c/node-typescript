import { Test } from './method-check';

const test = new Test();
test.subscribeToResponseOf('test');
test.subscribeToResponseOf('aa');
test.subscribeToResponseOf('bb', true);
test.subscribeToResponseOf('cc', false);
test.out();
