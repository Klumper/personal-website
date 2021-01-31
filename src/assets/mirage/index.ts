import { createServer } from 'miragejs'

import addJobRoutes from './handlers/job';

export default ({ environment = 'development' } = {}) => {
  return createServer({
    environment,
    routes() {
      this.urlPrefix = process.env.VUE_APP_API_BASEURL || null;
      addJobRoutes(this);
    }
  });
};

