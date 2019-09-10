const { ApolloServer, gql } = require('apollo-server');
const trial = require('../trial');
const publication = require('../publication');
const typeDef = gql`
  type Query
`;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.

const server = new ApolloServer({
  typeDefs: [typeDef, trial.typeDef, publication.typeDef],
  resolvers: [trial.resolvers, publication.resolvers],
  dataSources: () => ({
    trialAPI: new trial.api(),
    publicationAPI: new publication.api()
  })
});

module.exports = {
  server
};
