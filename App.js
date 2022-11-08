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

//import  Modal  from './Componentes/Modal';


export default function App() {

  const [textItem, setTextItem] = useState('')
  const [Itemlist, setItemList] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({})

  const onHandleChangeItem = (t) => {
    setTextItem(t);

  }

  const addItem = () => {
    setItemList(currentState => [
      ...currentState,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem("")
  }

  const renderItem = ({ item }) => {
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
      {/* <Button title='Borrar'/> */}
    </TouchableOpacity>
  }

  const selectedItem = (id) => {
    setItemSelected(Itemlist.filter(item => item.id === id)[0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setItemList((currentState) =>
       currentState.filter((item) => item.id !== itemSelected.id)
      );
      setItemSelected({});
      setModalVisible(false)
  }



  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Comics</Text>

      <View style={styles.navbar__home}>
        <TextInput
          onChangeText={onHandleChangeItem}
          placeholder="agregar item"
          placeholderTextColor="white"
          style={styles.inputStyle}
          value={textItem}
        />

        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Add </Text>
        </TouchableOpacity>

        <Button title='home' />

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
          data={Itemlist}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        {/* <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed");
            setModalVisible(!modalVisible);
          }}
        /> */}
        {/* <View>
          <View style={{backgroundColor: "white"}}>
            <Text>Borrar este elemento</Text>
            <Pressable
              onPress={() => deleteItem()}
              style={{backgroundColor: "red" }}
            >
              <Text>Eliminar</Text>
            </Pressable>
          </View>

        </View> */}
      </View>

      {/* <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} /> */}

    </View>

  
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    paddingTop: 100,
  },
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
  button: {
    backgroundColor: "white",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
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