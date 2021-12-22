export default {
  // 服务器配置
  SERVICE_CONFIG: {
    port: 3000
  },

  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'user_center',
    autoLoadEntities: true,
    synchronize: true
  }
}