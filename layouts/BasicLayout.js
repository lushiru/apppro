import {
  View
} from "react-native";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <View>
      {children}
    </View>
  );
}
