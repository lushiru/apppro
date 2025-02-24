import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor: {    
    width: width,
    height: width/2,
  },
  carousel: {
    width: width,
    height: width/2,
  },
  page: {    
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: "100%",
    height: width/2,
    resizeMode: "contain",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});