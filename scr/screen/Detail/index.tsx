import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainScreenProps} from '../../stack/Navigation';

export default function DetailsScreen({
  navigation,
  route,
}: MainScreenProps<'Details'>) {
  return (
    <View style={style.container}>
      <Text> Details Screen</Text>
      <Text> {route?.params?.userID}</Text>
      <Text> {route?.params?.otherParam}</Text>
      <Button
        title="Go to Details...again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {success: true})}
      />
    </View>
  );
}
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
