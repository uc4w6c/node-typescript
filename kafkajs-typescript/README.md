## topic作成
$ kafka-topics --create --zookeeper zookeeper:2181 --topic test-topic --partitions 3 --replication-factor 2

### partitionsオプション
partition数を指定

### replication-factorオプション
レプリケーション数を指定


## topicを確認
$ kafka-topics --zookeeper zookeeper:2181 --topic test-topic1 --alter --partitions 3

## partitionの追加
$ kafka-topics --describe --zookeeper zookeeper:2181 --topic test-topic1

## topic削除
$ kafka-topics --zookeeper zookeeper:2181 --topic test-topic --delete
