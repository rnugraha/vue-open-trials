const resolvers = {
  Query: {
    trial: (_source, { id }, { dataSources }) => {
      return dataSources.trialAPI.getTrialById(id);
    },
    search: (_source, payload, { dataSources }) => {
      return dataSources.trialAPI.search(payload)
    }
  },
  // Trial: {
  //   publications(trial) {
  //     return publications.filter( p => p.id === trial.pub)
  //   }
  // }
};

module.exports = {
  resolvers
};
