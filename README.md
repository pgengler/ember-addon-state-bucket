# ember-addon-state-bucket

This is an experiment to save state between Ember-CLI addons, using Node's
global process `EventEmitter`. It listens for a small set of namespaced events that
can `set`, `get` and `push` state to that global process.

Currently the event namespace is simply the addon name combined with the action being performed, meaning persisting state is as simple as:

```js
process.emit('ember-addon-state-bucket:set', 'my-important-state', {});
```

Reading that state later is as simple as:

```js
process.emit('ember-addon-state-bucket:get', 'my-important-state');
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-addon-state-bucket`
* `npm install`

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
