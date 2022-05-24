module.exports = {
  PORT: process.env.PORT || 4000,
  MONGODB_HOST: process.env.MONGODB_HOST || 'mongodb+srv://keren:dbmongo@hostcloud.dlqx3.mongodb.net/userhostcloud?retryWrites=true&w=majority',
  MONGODB_DATABASE: process.env.MONGODB_DB || 'usuarios'
}