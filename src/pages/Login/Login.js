import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../service/api";
import React, { useEffect, useState } from "react";
import logozita from "../../images/logotwt.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [btn, setBtn] = useState("");
  const navigation = useNavigation();



  //verificando se usuario existe na api
  async function entrar() {
    try {
      var { headers } = await api.post("/login", {
        email: login,
        senha: senha,
      });
      alert("Bem vindo " + login);

      await AsyncStorage.setItem("@login", login);

      navigation.navigate("Following");
    } catch {
      alert("USUARIO INVALIDO(NAO FOI ENCONTRADO NA API)!!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageview}>
        <Image source={logozita} style={styles.imagem} />
      </View>

      <View>
        <Text style={styles.title}>Usuário:</Text>
        <TextInput
          onChangeText={setLogin}
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.title}>Senha:</Text>
        <TextInput
          onChangeText={setSenha}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#C3C3C3"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.butao} onPress={entrar}>
          <Text style={styles.btntext}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613FA0",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  senha: {
    paddingVertical: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },
  btntext: {
    fontSize: 11,
    color: "#FFFFFF",
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "black",
    padding: 9,
    borderRadius: 7,
    marginTop: 3,
    fontSize: 10,
  },
  butao: {
    backgroundColor: "#A370F7",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 3,
  },
  imagem: {
    justifyContent: "center",
    marginVertical: 40,

    width: 150,
    height: 150,
  },
  imageview: {
    alignItems: "center",
  },
});
