import React, {RefAttributes} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';

export type Props = TextInputProps &
  RefAttributes<TextInput> & {error?: string};

export const MyTextInput: React.FC<Props> = React.forwardRef<TextInput, Props>(
  ({error, ...Other}: Props, ref) => {
    return (
      <>
        <TextInput ref={ref} {...Other} />
        {error && <Text style={styles.error}>{error}</Text>}
      </>
    );
  },
);
const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
export default MyTextInput;
