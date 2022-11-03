import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function App() {

  const [textItem, setTextItem] = useState('')
  const [List, setList] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({})

  const onHandleChangeItem = (t) => setTextItem(t);

  const addItem = () => {
    setList(currentState => [
      ...currentState,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem("")
  }

  const selectedItem = () => {
    setItemSelected(List.filter(item => item.id === id)[0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setList((currentState) =>
       currentState.filter(item => item.id !== itemSelected.id)
      );
      setItemSelected({});
      setModalVisible(false)
  }

  const renderItem = ({ item }) => {
    <TouchableOpacity onPress={()=> selectedItem(item.id)}>
      <Text>{item.value}</Text>
      {/* <Button title='Borrar'/> */}
    </TouchableOpacity>
  }


  return (
    <View style={styles.navbar}>
      <Text>Comics</Text>

      <View style={styles.navbar__home}>
        <TextInput
          value={textItem}
          placeholder="Agregar item"
          onChangeText={onHandleChangeItem}
        />
        <Button title='home' onPress={addItem} />

        <View style={styles.navbar__logo}>
          {/* <TextInput /> */}
          <Button title='logo' />
        </View>

        <View style={styles.navbar__like}>
          {/* <TextInput /> */}
          <Button title='like' />
        </View>
      </View>
     
      <View>
        <FlatList
          data={List}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed");
            setModalVisible(!modalVisible);
          }}
        />
        <View>
          <View style={{backgroundColor: "white"}}>
            <Text>Borrar este elemento</Text>
            <Pressable
              onPress={() => deleteItem()}
              style={{backgroundColor: "red" }}
            >
              <Text>Eliminar</Text>
            </Pressable>
          </View>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    margin: 30,
    backgroundColor: "red",

  },

  navbar__home: {
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  navbar__logo: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  navbar__like: {
    flexDirection: 'row',
    justifyContent: "flex-end"
  }
});

 {/* <View>
        {itemList.map( (item)=> (
          <View >
            <Text>{item.value}</Text>
          </View>
        ))}
      </View> */}