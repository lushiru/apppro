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
  dotsContainer: {
    position: "absolute",
    bottom: -20,
    width: "100%",
  },
  dot: {
    backgroundColor: "#fff",
  },
  CarouselItem: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  img: {
    width: "100%",
    height: width/2,
    resizeMode: "contain",
  }
});