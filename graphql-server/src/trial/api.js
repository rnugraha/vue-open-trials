const { RESTDataSource } = require('apollo-datasource-rest');

const trialReducer = ({id, public_title, url, brief_summary, study_phase, status, conditions, registration_date, publications}) => {
  return {
    id,
    public_title,
    url,
    brief_summary,
    study_phase,
    status,
    conditions,
    registration_date,
    publications
  }
}

const searchResultReducer = ({total_count, items}) => {
  const trials = items.map(item => trialReducer(item));
  return {
    totalCount: total_count,
    items: trials
  }
}

class TrialsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opentrials.net/v1/';
  }

  async getTrialById(trialId) {
    const response = await this.get(`trials/${trialId}`);
    return response ? trialReducer(response) : null;
  }

  async search({q, page, per_page}) {
    const response = await this.get('search', {
      q,
      page,
      per_page
    })
    return response ? searchResultReducer(response) : null
  }
}

module.exports = {
  api: TrialsAPI
};
