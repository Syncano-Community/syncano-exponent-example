import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    fontWeight: '300'
  },
  deleteButton: {
    backgroundColor: '#e73b3b',
    padding: 5,
    borderRadius: 5
  },
  deleteText: {
    color: '#FFF'
  }
});

const InstanceRow = React.createClass({

  propTypes: {
    onDelete: React.PropTypes.func.isRequired,
    instance: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired
    }).isRequired
  },

  onDeletePressed() {
    this.props.onDelete(this.props.instance.name)
  },

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.instance.name}</Text>
        <TouchableHighlight
          style={styles.deleteButton}
          onPress={this.onDeletePressed}
        >
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

export default InstanceRow;
