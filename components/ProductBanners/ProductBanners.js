import { useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { styles } from "./ProductBanners.styles";
import { ENV } from "../../utils/constants";
import Carousel from 'react-native-reanimated-carousel';

export function ProductBanners(props) {
  const { banners } = props;

  const [pagingEnabled, setPagingEnabled] = useState(true)
  
  const width = Dimensions.get("window").width;

  return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Carousel
                width={width}
                height={width / 2}
                autoPlay={true}
                data={banners}
                scrollAnimationDuration={2000}
                pagingEnabled={pagingEnabled}
                renderItem={({ item }) => (     
                      <Image source={{ uri: `${ENV.URL}/imagenes/${item.nombre}` }} style={styles.carousel} />      
                  )}
            />
        </View>
      </View>
  );
}