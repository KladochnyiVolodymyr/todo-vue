module.exports = (router) => {
    router.prefix('/_api')
    router.use('/tasks', require('./tasks'))
  }
  