import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
export type Props = TouchableOpacityProps & {
  buttonText?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const MyButton: React.FC<Props> = ({
  textStyle = styles1.textStyle,
  buttonText = 'Button',
  buttonStyle = styles1.buttonstyles,
  ...Other
}) => {
  return (
    <TouchableOpacity style={buttonStyle} {...Other}>
      <Text style={textStyle}> {buttonText}</Text>
    </TouchableOpacity>
  );
};
export const styles1 = StyleSheet.create({
  buttonstyles: {
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'purple',
  },
  textStyle: {
    fontWeight: '700',
    textAlign: 'center',
    color: 'red',
  },
});
export default MyButton;
