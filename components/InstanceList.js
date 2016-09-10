import React, {Component} from 'react';
import { ListView, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import InstanceRow from './InstanceRow';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    height: 60,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});

const InstanceList = React.createClass({

  getInitialState() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(this.props.instances)
    }
  },

  componentWillReceiveProps(nextProps) {
    const ds = this.state.dataSource.cloneWithRows(nextProps.instances);
    this.setState({ dataSource: ds });
  },

  propTypes: {
    onAddPress: React.PropTypes.func.isRequired,
    instances: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onDelete: React.PropTypes.func.isRequired,
  },

  renderRow(instance) {
    return(
      <InstanceRow onDelete={this.props.onDelete} instance={instance} />
    )
  },

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow}
        />
        <TouchableHighlight
          onPress={this.props.onAddPress}
          style={styles.button}
        >
            <Text style={styles.buttonText}>ADD INSTANCE</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

export default InstanceList;
