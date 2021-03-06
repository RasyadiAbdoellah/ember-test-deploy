import ENV from 'ember-test-deploy/config/environment';
import ActiveModelAdapter from 'active-model-adapter';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,

  auth: service(),

  headers: computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
