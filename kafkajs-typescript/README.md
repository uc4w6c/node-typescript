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
$ kafka-topics --zookeeper zookeeper:2181 --topic test-topic1 --alter --partitions 3

## partitionの追加
$ kafka-topics --describe --zookeeper zookeeper:2181 --topic test-topic1

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

## consumer接続
$ kafka-console-consumer --bootstrap-server=:9092 --topic=test --from-beginning

 --partition 0
 つければ取得する場所を指定可能