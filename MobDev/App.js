import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function Counter() {
  // Array destructuring:
  const [count, setCount] = useState(0);

  const updateCount = (increment) => {
    setCount(count + (increment ? 1 : -1));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
          <Searchbar />
        </View>
        <View style={styles.screen}>
          <Text style={styles.countText}>
            Count:
            {count}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateCount(true)}
            >
              <Text style={styles.buttonText}>INCREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => updateCount(false)}
            >
              <Text style={styles.buttonText}>DECREMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "black",
    justifyContent: "center",
  },
  searchbar: {
    padding: 16,
    alignItems: "center",
  },
  screen: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  countText: {
    marginTop: 290,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: "white",
  },
});
