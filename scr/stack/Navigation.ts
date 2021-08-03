import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
export type RootStackParamList = {
  Home: {success: boolean} | undefined;
  Details: {userID: number; otherParam: string} | undefined;
};
type S = keyof RootStackParamList;
export type RootScreenRouteProp<ScreenName extends S> = RouteProp<
  RootStackParamList,
  ScreenName
>;
export type RootScreenNavigationProp<ScreenName extends S> =
  StackNavigationProp<RootStackParamList, ScreenName>;
export type MainScreenProps<ScreenName extends S> = {
  route: RootScreenRouteProp<ScreenName>;
  navigation: RootScreenNavigationProp<ScreenName>;
};
