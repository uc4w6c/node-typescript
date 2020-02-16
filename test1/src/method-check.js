class Test {
    constructor() {
        // protected readonly responsePatterns: ConsumerSubscribeTopic[] = [];
        this.responsePatterns = [];
    }
    subscribeToResponseOf(pattern, fromBeginning) {
        const consumerSubscribeTopic = { topic: pattern, fromBeginning: fromBeginning };
        this.responsePatterns.push(consumerSubscribeTopic);
    }
    out() {
        this.responsePatterns.forEach((subscribeTo) => {
            console.log('topic:' + subscribeTo.topic);
            console.log('fromBeginning:' + subscribeTo.fromBeginning);
        });
    }
}
const test = new Test();
test.subscribeToResponseOf('test');
test.subscribeToResponseOf('aa');
test.subscribeToResponseOf('bb', true);
test.subscribeToResponseOf('cc', false);
test.out();
//# sourceMappingURL=method-check.js.map