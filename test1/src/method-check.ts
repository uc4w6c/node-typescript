export class Test {
    // protected readonly responsePatterns: ConsumerSubscribeTopic[] = [];

    protected readonly responsePatterns: {topic: any, fromBeginning?: boolean}[] = [];

    public subscribeToResponseOf(pattern: any, fromBeginning?: boolean): void {
        const consumerSubscribeTopic: ConsumerSubscribeTopic = { topic: pattern, fromBeginning: fromBeginning };
        this.responsePatterns.push(consumerSubscribeTopic);
    }
    public out(): void {
        this.responsePatterns.forEach((subscribeTo) => {
            console.log('topic:' + subscribeTo.topic);
            console.log('fromBeginning:' + subscribeTo.fromBeginning);
        });
    }
}
type ConsumerSubscribeTopic = { topic: string | RegExp; fromBeginning?: boolean };
