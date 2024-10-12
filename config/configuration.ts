export default () => ({
  host: process.env.NODE_ENV == 'production' ? '0.0.0.0' : '127.0.0.1',
});
