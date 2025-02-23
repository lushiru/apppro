import {
  StatusBar as StatusBarRN,
  ScrollView,
} from "react-native";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <>
      <StatusBarRN backgroundColor="#5ac343" />
      <ScrollView>{children}</ScrollView>
    </>
  );
}
