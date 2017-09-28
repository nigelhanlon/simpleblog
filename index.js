const schema = require('./schema');
const fastify = require('fastify')()

fastify.register(require('fastify-apollo'), {
    prefix: '/api',
    graphql: () => ({ schema }),
    graphiql: true,
    printSchema: true
});

fastify.listen(8000, function (err) {
    if (err) {
      throw err
    }
  
    console.log(`listening on ${fastify.server.address().port}`);
    console.log('Go to http://127.0.0.1:8000/api/graphiql to play with GraphQL!');
});