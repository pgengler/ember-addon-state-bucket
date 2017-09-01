/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-addon-state-bucket',

  included() {
    this.emberAddonStateBucket = {
      state: {}
    };

    process.on('ember-addon-state-bucket:get', (key) => {
      let { state } = this.emberAddonStateBucket;
      return state[key];
    });

    process.on('ember-addon-state-bucket:set', (key, value) => {
      let { state } = this.emberAddonStateBucket;
      return state[key] = value;
    });

    process.on('ember-addon-state-bucket:push', (key, value) => {
      let { state } = this.emberAddonStateBucket;
      if (state[key] instanceof Array) {
        return state[key].push(value);
      } else if (state[key] instanceof Set) {
        return state[key].add(value);
      }
    });
  },
};
