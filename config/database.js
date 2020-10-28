module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-54-224-175-142.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd82ocbopaf59u5'),
        username: env('DATABASE_USERNAME', 'zsqhlbjvcklihi'),
        password: env('DATABASE_PASSWORD', 'c9ee4e126f9d58c57ae8ec232250debb28b31f9070e464ab0987ff6a3ae2e28c'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});


