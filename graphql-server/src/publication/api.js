const { RESTDataSource } = require('apollo-datasource-rest');

const publicationReducer = ({id, title, authors}) => {
  return {
    id,
    title,
    authors
  }
}

class PublicationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.opentrials.net/v1/';
  }

  async getPublicationById(publicationId) {
    const response = await this.get(`publications/${publicationId}`);
    return response ? publicationReducer(response) : null;
  }
}

module.exports = {
  api: PublicationAPI
};
