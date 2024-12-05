module.exports = {
    cassandra: {
      host: process.env.CASSANDRA_HOST || '127.0.0.1',
      datacenter: process.env.CASSANDRA_DATACENTER || 'datacenter1',
      keyspace: process.env.CASSANDRA_KEYSPACE || 'bloodbank',
    },
  };
  