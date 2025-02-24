import { useRef } from "react";
import { View, Image, Button } from "react-native";
import { styles } from "./ProductBanners.styles";
import { ENV } from "../../utils/constants";
import PagerView from 'react-native-pager-view';
import { map } from "lodash";



export function ProductBanners(props) {
  const { banners } = props;
  const ref = useRef();
  let ini = 0;

  const inicio = () => {
    ini=0;
    ref.current?.setPage(ini)
  }

  const cambiar = () => {
    ini++;
    ref.current?.setPage(ini)      
  }

  return (
    <View>
      <View style={styles.contenedor}>
        <PagerView style={styles.container} initialPage={0} ref={ref} >

          {map(banners, (item, index) => {

            return <View style={styles.page} key={index}>
              <Image source={{ uri: `${ENV.URL}/imagenes/${item.nombre}` }} style={styles.carousel} />
            </View>
          })}

        </PagerView>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => inicio(0) }
        />
        <Button
          title="Right button"
          onPress={() => cambiar() }
        />
      </View>
    </View>
  );
}