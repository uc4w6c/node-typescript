export class JSError extends Error {
    constructor(e: Error | string, metadata?: KafkaJSErrorMetadata)
}

export interface KafkaJSErrorMetadata {
  retriable?: boolean
  topic?: string
  partitionId?: number
  metadata?: PartitionMetadata
}

export type PartitionMetadata = {
    partitionErrorCode: number
    partitionId: number
    leader: number
    replicas: number[]
    isr: number[]
}