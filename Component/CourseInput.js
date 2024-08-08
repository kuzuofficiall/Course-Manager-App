import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'



export default function CourseInput({ visible, onAddCourse, onCancel }) {
    const [entercoursedtext, setEntercoursedtext] = useState("");
    const ADDCourseHandler = () => {
        onAddCourse(entercoursedtext);
        setEntercoursedtext("");
    };

    // const courseInputHandler = (enteredText) => {
    //     setEntercoursedtext(enteredText)       -->    bu ikisinin kulanımı aynı -->   onChangeText={(text) => setEntercoursedtext(text)}
    // };

    return (
        <Modal animationType="slide" visible={visible} >
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/images/cblogo.png")} />
                <TextInput style={styles.TextİNput} placeholder='YENİ KURS EKLE'
                    value={entercoursedtext}
                    onChangeText={(text) => setEntercoursedtext(text)} />

                <View style={styles.ButtonContainer} >
                    <View style={styles.button}>
                        <Button title='iptal et ' color="red" onPress={onCancel} />
                    </View>
                    <View style={styles.button} >
                        <Button title='kurs ekle ' color="blue" onPress={ADDCourseHandler} />
                    </View>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 20,
        margin: 20,

    },

    TextİNput: {
        borderWidth: 2,
        width: "100%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "pink",
        borderColor: "pink"
    },
    ButtonContainer: {
        flexDirection: "row",
        marginTop: 15,
    },
    button: {
        width: 100,
        marginHorizontal: 10,
    },

})