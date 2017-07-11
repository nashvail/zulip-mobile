import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ZulipButton } from './';

const styles = StyleSheet.create({
  emptyState: {
    flex: 1
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 20
  },
  text: {
    fontSize: 18
  },
  button: {
    marginTop: 15,
    fontSize: 12,
    padding: 8
  }
});

export default ({
  text = "No Results",
  buttonText = "Show All",
  buttonAction
}) => (
    <View style={styles.emptyState}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
        {buttonAction && <ZulipButton
          style={styles.button}
          secondary
          text={buttonText}
          onPress={buttonAction}
        />}
      </View>
    </View>
  );
