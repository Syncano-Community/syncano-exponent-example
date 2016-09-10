import React from 'react';
import { Text, TextInput, View, TouchableHighlight, StyleSheet } from 'react-native';
import generateInstanceName from '../utils/InstanceName';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 60,
    padding: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  button: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: '#1976d2',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    backgroundColor: '#DDDDDD'
  },
  cancelButtonText: {
    color: '#000'
  }
});

const InstanceForm = React.createClass({

  propTypes: {
    onCancel: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      name: generateInstanceName()
    }
  },

  onAddPressed() {
    this.props.onAdd(this.state.name);
  },

  onChangeName(name) {
    this.setState({name});
  },

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          defaultValue={this.state.name}
          placeholder="Instance name"
          onChangeText={this.onChangeName}
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed}
        >
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.onCancel}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>CANCEL</Text>
        </TouchableHighlight>
      </View>
    );
  }

});

export default InstanceForm;
