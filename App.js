import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CourseInput from './Component/CourseInput';




export default function App() {
  const [modalVisiable, setModalVisiable] = useState(false);
  const [courses, setCourses] = useState([]);
  const StartModal = () => {
    setModalVisiable(true);
  };

  const EndModal = () => {
    setModalVisiable(false)
  }

  const addcourse = (CourseTitle) => {
    setCourses((curentcourses) => [
      {
        text: CourseTitle, id: Math.random().toString()
      },
      ...curentcourses,
    ]);
    EndModal(true);
  };
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Button title='KURS EKLE ' color="red" onPress={StartModal} />
        <CourseInput
          visible={modalVisiable}
          onAddCourse={addcourse}
          onCancel={EndModal}
        />
        <View>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText} >
                  {item.text}
                </Text>
              </View>
            )}

          />
        </View>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,

  },
  itemContainer: {
    backgroundColor: "gray",
    margin: 8,

    borderRadius:10,
  },
  itemText: {
    padding:8,
    color:"white",
  },

});
