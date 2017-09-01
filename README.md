# ember-addon-state-bucket

This is an experiment to save state between Ember-CLI addons, using the
[node-persist](https://github.com/simonlast/node-persist) package.

This addon simply initializes the storage and assigns it to a property on the global build process
(`process.emberAddonStateBucket`).

To save state, simply call:

```js
process.emberAddonStateBucket.setItemSync('key', 'value');
```
Because node-persist uses JSON to store the data, only valid JSON values can be persisted.

To read out the state, you can call:

```js
process.emberAddonStateBucket.getItemSync('key');
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-addon-state-bucket`
* `npm install`

## Configuration

Other addons wishing to use this must be configured to run *after* this one in the `ember-addon` config section of their `package.json`.


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
