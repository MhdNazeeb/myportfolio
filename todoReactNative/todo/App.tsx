/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Todo from './components/Todo';
import List from './components/List'

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Todo/>   
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
