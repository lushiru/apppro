import { View, Image, Dimensions } from "react-native";
import { styles } from "./ProductBanners.styles";
import { ENV } from "../../utils/constants";
import PagerView from 'react-native-pager-view';
import { map } from "lodash";


export function ProductBanners(props) {
  const { banners } = props;
  
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>

        {map(banners, (item,index) => {
        
                  return <View style={styles.page} key={index}>
                            <Image source={{ uri: `${ENV.URL}/imagenes/${item.nombre}` }} style={styles.carousel} />
                          </View>
        })}
        
      </PagerView>
    </View>
  );
}