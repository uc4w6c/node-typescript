## kafkaコマンドの保存場所
/usr/bin

ls | grep kafka

## topic作成
$ kafka-topics --create --zookeeper zookeeper:2181 --topic test-topic --partitions 3 --replication-factor 2

### partitionsオプション
partition数を指定

### replication-factorオプション
レプリケーション数を指定


## topicを確認
$ kafka-topics --describe --zookeeper zookeeper:2181 --topic test-topic1

## topic一覧を表示
$ kafka-topics --list --zookeeper zookeeper:2181

## partitionの追加
$ kafka-topics --zookeeper zookeeper:2181 --topic test-topic1 --alter --partitions 3

### PartitionCount
パーティションの数

### ReplicationFactor
レプリケーションファクターの数

### Partition
パーティション番号

### Leader
メイン

### Replicas


### ISR : in-sync replica
リーダーに追いついているレプリカのこと


## topic削除
$ kafka-topics --zookeeper zookeeper:2181 --topic test-topic --delete


## producer接続
$ kafka-console-producer --topic=test --broker-list=:9092

キーを指定
--property "parse.key=true" --property "key.separator=:"
>key1:value1
separatorでキーとvalueをわける文字を変える

sample
kafka-console-producer --topic=test-topic --broker-list=kafka1:29092,kafka2:29093,kafka3:29094
kafka-console-producer --topic=test-topic --broker-list=kafka1:29092,kafka2:29093,kafka3:29094 --property "parse.key=true" --property "key.separator=:"
## consumer接続
$ kafka-console-consumer --bootstrap-server=:9092 --topic=test --from-beginning

 --partition 0
 つければ取得する場所を指定可能

sample
$ kafka-console-consumer --bootstrap-server=localhost:9093 --topic=test-topic --from-beginning --partition 1
$ kafka-console-consumer --bootstrap-server=kafka1:29092,kafka2:29093,kafka3:29094 --topic=test-topic

/etc/kafka
consumer.properties
auto.offset.reset=earliest

## consumer group確認
$ kafka-consumer-groups --describe --bootstrap-server kafka1:29092,kafka2:29093,kafka3:29094 --group test-group2



## from begginingのメモ
autocommitしていない状態のときに利用可能
かつ、設定が反映されるには一定時間待つ必要がある。
そうすることでConsumer has joinedが発生して設定が新しく反映される
