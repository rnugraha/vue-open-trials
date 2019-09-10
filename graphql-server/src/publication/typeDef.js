const { gql } = require('apollo-server');

const typeDef = gql`  
  
  type Publication {
    id: String!
    title: String!
    authors: [String]
  }

  extend type Query {
    publication(id: String): Publication
  }  
`;

module.exports = {
  typeDef
};
