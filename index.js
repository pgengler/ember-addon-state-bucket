/* eslint-env node */
'use strict';
const storage = require('node-persist');

module.exports = {
  name: 'ember-addon-state-bucket',

  included() {
    storage.initSync();
    process.emberAddonStateBucket = storage;
  },
};
