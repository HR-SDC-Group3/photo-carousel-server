// CREATE  KEYSPACE [IF NOT EXISTS] test 

// CREATE KEYSPACE IF NOT EXISTS test WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy', 'datacenter1' : 3 };

// //CREATE  KEYSPACE [IF NOT EXISTS] restaurants 
//    // WITH REPLICATION = { 
//    //    'class' : 'SimpleStrategy', 'replication_factor' : N } 
//    //   | 'class' : 'NetworkTopologyStrategy', 
//    //     'dc1_name' : N [, ...] 
//    // }
//    // [AND DURABLE_WRITES =  true|false] ;


//    //look up data center usage

CREATE KEYSPACE sdc
WITH REPLICATION = {
'class' : 'SimpleStrategy',
'replication_factor' : 3
}


// COPY table_name [( column_list )]
// FROM 'file_name'[, 'file2_name', ...] | STDIN
// [WITH option = 'value' [AND ...]]

// COPY restaurants (id) FROM 'sample_data.csv' WITH DELIMITER='|' AND HEADER=FALSE;

// //column families

// CREATE TABLE restaurants (id UUID PRIMARY KEY);

// INSERT INTO [keyspace_name.]table_name JSON '{"column_name": value [,…]}' [DEFAULT UNSET];

// //test query syntax


const setup = `CREATE TABLE test.new (
    id int  PRIMARY KEY,
    name text,
    phototags  list <frozen<map<text, text>>>
);`

// client.execute(setup, function (err, result) {
//        console.log('setup', err)
//        //var restaurant = result.first();
//        //console.log('restaurant', restaurant);
// });

//COPY test.new (id, name, phototags) FROM 'testdata1.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=1 AND PAGESIZE=10 AND DELIMITER='|' AND HEADER=FALSE;

COPY sdc.restaurants (id, name, phototags) FROM 'seed_data1.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=2 AND NUMPROCESSES=10 AND CHUNKSIZE=5000 AND PREPAREDSTATEMENTS=False AND DELIMITER='|' AND HEADER=FALSE;


COPY sdc.restaurants (id, name, phototags) FROM 'seed_data1.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=1 AND DELIMITER='|' AND HEADER=FALSE;


COPY test.check (id, name, phototags) FROM 'test_data1.csv' WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=2 AND NUMPROCESSES=10 AND CHUNKSIZE=5000 AND PREPAREDSTATEMENTS=False AND DELIMITER='|' AND HEADER=FALSE;

COPY test.new FROM 'testdata1.csv' WITH HEADER=FALSE;

// CREATE TABLE test.fourth (
//     id int  PRIMARY KEY,
//     name text,
//     phototags  list <frozen<map<text, text>>>
// );

// set <map<text, text>>
// INSERT INTO clients JSON '{"id":0,"name":"Lehner, Schuppe and Walker","phototags":[{"photo_type":"exterior","date":"2018-12-25T12:42:32.939Z","username":"Asia","photoURL":"https://s3-us-west-1.amazonaws.com/sdc-restaurantproject-assets/images/beverage-business-chairs-903376"}]}';

// INSERT INTO secondexp (id, name, phototags) VALUES (0, 'Saratoga', [{phototype:"exterior","date":"2018-12-25T12:42:32.939Z","username":"Asia","photoURL":"https://s3-us-west-1.amazonaws.com/sdc-restaurantproject-assets/images/beverage-business-chairs-903376"}]);
 INSERT INTO test.new (id, name, phototags) VALUES (4, 'Katog', [{'phototype':'exterior'}, {}]);

//cassandra loader experimental command

cassandra-loader -f seed_data1.csv -host 127.0.0.1 -schema "sdc.restaurants(id, name, phototags)"

// CREATE TABLE clients.client_photos ( id UUID PRIMARY KEY, lastname text, firstname text, races list<FROZEN <race>> );