import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  Modal,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ConnectWifi, WifiGet} from '../../store/actions/wifi';

const HeaderAnalyzer = () => {
  return (
    <View style={styles.headerAnalyzer}>
      <View style={styles.filters}>
        <Text>Nome</Text>
      </View>
      <View style={styles.filters}>
        <Text>Segurança</Text>
      </View>
      <View style={styles.filters}>
        <Text>Latência</Text>
      </View>
    </View>
  );
};

export default function WifiConnect() {
  const [isShowing, setShowing] = useState(0);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const wifi = useSelector(state => state.wifi);
  console.log(isShowing);
  console.log(password);
  return (
    <View style={styles.container}>
      <View style={styles.analyzerContainer}>
        <FlatList
          ListHeaderComponent={HeaderAnalyzer}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.cardWifi}
                onPress={() => setShowing(index + 1)}
              >
                <View style={styles.informations}>
                  <Text>{item.ssid}</Text>
                </View>

                <View style={styles.informations}>
                  <Text>{item.type}</Text>
                </View>
                <View style={styles.informations}>
                  <Text>{item.rssi}</Text>
                </View>
                <Modal
                  animationType="slide"
                  visible={isShowing === index + 1}
                  transparent={true}
                >
                  <View style={styles.containerPopup}>
                    <View style={styles.titlePopup}>
                      <Text style={{fontSize: 20}}>{item.ssid}</Text>
                    </View>
                    <View>
                      <TextInput
                        style={{backgroundColor: '#fff', borderRadius: 10}}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Button title="Cancelar" onPress={() => setShowing(0)} />
                      <Button
                        title="Confirmar"
                        onPress={() =>
                          dispatch(ConnectWifi(item.ssid, password))
                        }
                      />
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
            );
          }}
          data={!wifi.loading && wifi.info}
        />
        <Button
          title="Scan"
          color="#9e9e9e"
          onPress={async () => {
            dispatch(WifiGet());
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007ea8',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  analyzerContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    overflow: 'hidden',
  },
  containerPopup: {
    backgroundColor: '#a3a3a3',
    width: '90%',
    height: 200,
    justifyContent: 'space-around',
    alignSelf: 'center',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titlePopup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAnalyzer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
  },
  cardWifi: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
  },
  informations: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
  },
});
