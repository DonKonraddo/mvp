module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  bigNumberStrings: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*js'],
  migrationsRun: false,
  // TODO: Prepare migration before production ready
  synchronize: true,
  cli: {
    migrationsDir: 'migration',
  },
};
