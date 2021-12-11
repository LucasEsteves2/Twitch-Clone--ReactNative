import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native";

export function Login() {
  return (
    <>
      <View style={styles.div}>
        <Text>Boas-vindas á Twitch</Text>

        <Button style={styles.button} title="Logar"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
  },
});
