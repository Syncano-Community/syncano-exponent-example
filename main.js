import Exponent from 'exponent';
import _ from 'lodash';
import React from 'react';
import { AppRegistry, StyleSheet, Navigator } from 'react-native';
import InstanceList from './components/InstanceList';
import InstanceForm from './components/InstanceForm';
import {getInstanceList, createInstance, deleteInstance} from './api/syncano';

const SyncanoExample = React.createClass({

  getInitialState() {
    return {
      instances: []
    };
  },

  componentDidMount() {
    getInstanceList().then((list) => {
      instances = _.map(list, (instance) => {
        return { name: instance.name }
      })
      this.setState({ instances });
    })
  },

  onAddPress() {
    this.nav.push({
      name: 'instanceform'
    })
  },

  onCancel() {
    this.nav.pop();
  },

  onDelete(name) {
    deleteInstance(name)
      .then(() => {
        const instances = _.filter(this.state.instances, (i) => i.name !== name);
        this.setState({instances});
      });
  },

  onAdd(name) {
    createInstance(name)
      .then((instance) => {
        this.setState({ instances: [...this.state.instances, { name: instance.name}]});
      });
    this.nav.pop();
  },

  renderScene(route, nav) {
    switch(route.name) {
      case 'instanceform':
        return (
          <InstanceForm onAdd={this.onAdd} onCancel={this.onCancel} />
        );
      break;
      default:
        return(
          <InstanceList
            onAddPress={this.onAddPress}
            onDelete={this.onDelete}
            instances={this.state.instances}
           />
        );
    }
  },

  configureScene() {
    return Navigator.SceneConfigs.VerticalUpSwipeJump;
  },

  render() {
    return(
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'instanceList', index: 0}}
        ref={(nav) => { this.nav = nav; }}
        renderScene={this.renderScene}
      />
    );
  }
});

AppRegistry.registerComponent('main', () => SyncanoExample);
