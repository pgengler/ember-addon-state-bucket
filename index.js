/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-addon-state-bucket',

  included() {
    console.log('include from ember-addon-state-bucket');
    this.emberAddonStateBucket = { state: {} };
    process.on('ember-addon-state-bucket:getState', (key) => {
      console.log('requested state:', key);
      console.log('state:', this.emberAddonStateBucket.state[key]);
      return this.emberAddonStateBucket.state[key];
    });

    process.on('ember-addon-state-bucket:setState', (key, value) => {
      // default to object
      console.log('setting state:', { key, value });
      return this.emberAddonStateBucket.state[key] = value;
    });

    process.on('ember-addon-state-bucket:pushState', (key, value) => {
      if (this.emberAddonStateBucket.state[key] instanceof Array) {
        console.log('appending state:', { key, value });
        return this.emberAddonStateBucket.state[key].push(value);
      } else if (this.emberAddonStateBucket.state[key] instanceof Set) {
        console.log('appending state:', { key, value });
        return this.emberAddonStateBucket.state[key].add(value);
      }
    });
  },
};
