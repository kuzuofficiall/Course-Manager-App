# Course Manager App

This React Native application allows users to add and manage a list of courses. The app features a modal input form for entering new courses and a list that displays the added courses. It includes:

- A `CourseInput` component for handling the input and submission of new courses.
- A main `App` component that manages the state of the courses and controls the visibility of the modal.
- Use of `FlatList` for efficient rendering of the list of courses.
- Styled using `StyleSheet` to provide a simple and clean UI.

## Features

- **Add Courses**: Use the input field in the modal to add new courses to the list.
- **Cancel Adding Courses**: Close the modal without adding a new course.
- **Display Courses**: View a list of all added courses.

## Components

### `CourseInput`
- Renders a modal containing an input field and buttons for adding or canceling a course.
- Uses state to manage the input value.
- Calls functions passed as props to handle adding courses and canceling.

### `App`
- Manages the state of the courses list and the visibility of the modal.
- Renders the main UI including the button to open the modal and the list of courses.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.

## Example

```jsx
import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';
import CourseInput from './Component/CourseInput';

export default function App() {
  const [modalVisiable, setModalVisiable] = useState(false);
  const [courses, setCourses] = useState([]);
  const StartModal = () => setModalVisiable(true);
  const EndModal = () => setModalVisiable(false);

  const addcourse = (CourseTitle) => {
    setCourses((curentcourses) => [
      { text: CourseTitle, id: Math.random().toString() },
      ...curentcourses,
    ]);
    EndModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='KURS EKLE' color="red" onPress={StartModal} />
        <CourseInput
          visible={modalVisiable}
          onAddCourse={addcourse}
          onCancel={EndModal}
        />
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  itemContainer: { backgroundColor: "gray", margin: 8, borderRadius: 10 },
  itemText: { padding: 8, color: "white" },
});
```

## License

This project is licensed under the MIT License.
