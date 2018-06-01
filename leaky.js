const React = require('react');
const Loading = require('./loading');
const Hello = require('./hello').default;
const LoadableVisibility = require('react-loadable-visibility');

// tslint:disable-next-line
const LoadableComponent = LoadableVisibility({
  loader: () => Promise.resolve(Hello),
  loading: Loading,
});

class Leaky extends React.Component {
  render() {
    return React.createElement(LoadableComponent);
  }
}

module.exports = Leaky;
