module.exports = {
  env: process.env.NODE_ENV || 'development',
  uri: {
    hostname: process.env.HOSTNAME || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  api: {
    baseUri: '/api/v1'
  },
  database: {
    url: '0.0.0.0',
    port: 27017,
    name: 'games',
    connectionString() {
      return `mongodb://${this.url}:${this.port}/${this.name}`;
    }
  }
};
