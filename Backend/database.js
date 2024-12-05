const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: [process.env.CASSANDRA_HOST || '127.0.0.1'],
  localDataCenter: process.env.CASSANDRA_DATACENTER || 'datacenter1',
  keyspace: process.env.CASSANDRA_KEYSPACE || 'bloodbank',
});

module.exports = client;
