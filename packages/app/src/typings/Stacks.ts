/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainStackParamList>;
  NotFound: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Text: NavigatorScreenParams<TextStackParamList>;
  Math: NavigatorScreenParams<MathStackParamList>;
};

export type TextStackParamList = {
  Main: undefined;
  WTF: undefined;
};

export type MathStackParamList = {
  Main: undefined;
  GCF: undefined;
  'Factors Of': undefined;
  'Product Sum': undefined;
};
