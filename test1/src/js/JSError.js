class JSError extends Error {
    constructor(e, { retriable = true } = {}) {
      super(e)
      Error.captureStackTrace(this, this.constructor)
      this.message = e.message || e
      this.name = 'KafkaJSError'
      this.retriable = retriable
      this.helpUrl = e.helpUrl
    }
  }
  