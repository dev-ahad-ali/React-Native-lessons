import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/img/logo_light.png";
import React from "react";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{ marginVertical: 20 }} />
            <Text style={[styles.title, { color: "blue" }]}>The Number 1</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Reading List App
            </Text>
            <View style={styles.card}>
                <Text>Hello, This is a card</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
    },
    card: {
        backgroundColor: "#eee",
        padding: 20,
        borderRadius: 5,
        boxShadow: "4px 4px rgba(0,0,0,0.1)",
    },
});
