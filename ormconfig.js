const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
  cli: {
    migrationsDir: 'src/apps/init/db/migrations',
    entitiesDir: 'src/apps/oauth/entities'
  },
  migrations: ['src/apps/init/db/migrations/**/*.ts'],
  entities: ['src/apps/oauth/entities/**/*.ts']
  // cli: {
  //   migrationsDir: 'src/apps/init/db/migrations',
  //   entitiesDir: 'src/apps/oauth2/entities',
  // },
  // migrations: isTest ? [
  //   'src/apps/init/db/migrations/**/*.ts'
  // ] : [
  //   'dist/apps/init/db/migrations/**/*.js'
  // ],
  // entities: isTest ? [
  //   'src/apps/oauth2/entities/**/*.ts',
  // ] : [
  //   'dist/apps/oauth2/entities/**/*.js'
  // ],
};
