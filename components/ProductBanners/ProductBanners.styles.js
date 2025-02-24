import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    paddingTop : 100,
  },
  carousel: {
    width: width,
    height: width/2,
  },
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: "100%",
    height: width/2,
    resizeMode: "contain",
  }
});