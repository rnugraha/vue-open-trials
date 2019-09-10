const { gql } = require('apollo-server');

const typeDef = gql`  
  
  type Condition {
    id: String
    name: String
    url: String
  }

  type PublicationSummary {
    id: String
    title: String
  }

  type Trial {
    id: String!
    public_title: String!
    registration_date: String
    url: String!
    brief_summary: String
    study_phase: [String]
    status: String
    conditions: [Condition]
    publications: [PublicationSummary]
  }

  type SearchResult {
    totalCount: Int
    items: [Trial]
  }

  extend type Query {
    trial(id: String): Trial
    search(q: String, page: Int, per_page: Int): SearchResult
  }  
`;

module.exports = {
  typeDef
};
