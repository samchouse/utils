import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList, RootStackParamList } from './Stacks';

export type RootNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Root'
>;

export type NotFoundNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'NotFound'
>;

export type HomeNavigationProps = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>;

export type TextNavigationProps = NativeStackScreenProps<
  MainStackParamList,
  'Text'
>;

export type MathNavigationProps = NativeStackScreenProps<
  MainStackParamList,
  'Math'
>;
