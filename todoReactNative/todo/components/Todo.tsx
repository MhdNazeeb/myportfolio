import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Todo = (): JSX.Element => {
  console.log('fff');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.todoText}>
          <Text style={styles.text}>TODOLIST</Text>
        </View>
      </View>
      <View style={styles.taskMainContainer}>
        <TextInput style={styles.input}  keyboardType="numeric" />

        <View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.ButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoText: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 13,
    paddingRight: 5,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  container: {paddingTop: 40, height: 120},
  mainContainer: {backgroundColor: 'black', height: 779},
  text: {fontSize: 55, fontWeight: 'bold', color: 'white'},
  taskText: {color: 'white'},
  taskContainer: {
    backgroundColor: 'blue',
    paddingTop: 30,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 3,
  },
  taskMainContainer: {
    paddingTop: 20,
    width: 290,

    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionTask: {
    flex: 0,
    flexDirection: 'row',
    width: 344,
    justifyContent: 'space-between',
  },
  buttons: {paddingHorizontal: 6},
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderColor: 'white',
    color: 'white',
  },
  addButton: {
    backgroundColor: 'white',
    width: 66,
    height: 56,
    marginTop: 14,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {fontSize: 40, fontWeight: 'bold', color: 'black'},
});
