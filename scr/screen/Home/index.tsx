import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainScreenProps} from '../../stack/Navigation';

export default function HomeScreen({
  navigation,
  route,
}: MainScreenProps<'Home'>) {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Text> {`${route?.params?.success}`}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            userID: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
