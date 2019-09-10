const resolvers = {
  Query: {
    publication: (_source, { id }, { dataSources }) => {
      return dataSources.publicationAPI.getPublicationById(id);
    },
  }
};

module.exports = {
  resolvers
};
