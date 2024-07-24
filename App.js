// App.js
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {MaskedTextInput} from 'stimulus-mask-rn';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>CPF:</Text>
        <MaskedTextInput
          maskFormat="999.999.999-99"
          placeholder="CPF"
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default App;