const { server } = require('./apolloServer');

describe('ApolloServer', () => {
  it('should create new apollo server instance', () => {
    expect(server).toBeDefined();
    expect(server).toHaveProperty('listen');
  });

  it('should have datasources', () => {
    expect(server.requestOptions.dataSources()).toHaveProperty('geneAPI');
    expect(server.requestOptions.dataSources()).toHaveProperty(
      'interactionsAPI'
    );
  });
});
