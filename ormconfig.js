const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'user_center_dev',
  autoLoadEntities: true,
  synchronize: true,
  cli: {
    migrationsDir: 'src/db/migrations',
    entitiesDir: 'src/entities'
  },
  migrations: ['src/db/migrations/**/*.ts'],
  entities: ['src/entities/**/*.ts']
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
