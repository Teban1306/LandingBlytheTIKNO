interface Config {
  port: number;
  databaseUrl: string;
  jwtSecret: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase',
  jwtSecret: process.env.JWT_SECRET || 'tu_clave_secreta_aqui'
};

export default config;