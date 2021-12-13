import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,

} from 'react-native'
import { useNavigation } from "@react-navigation/native"

import React from 'react';
import logozita from '../../images/logotwt.png'

export function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.imageview}>
                <Image source={logozita}
                    style={styles.imagem}
                />

            </View>

            <View>
                <Text style={styles.title}>Usuário:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor="#C3C3C3"
                />
            </View>

            <View style={styles.senha}>
                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#C3C3C3"
                />
            </View>

            <View>
                <TouchableOpacity style={styles.butao} onPress={()=> navigation.navigate("Following")}> 
                    <Text style={styles.btntext}>Entrar</Text>
                </TouchableOpacity>



            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#613FA0',
        paddingHorizontal: 30,
        paddingVertical: 70,

    },
    senha: {
        paddingVertical: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 9,
        fontWeight: 'bold',
    },
    btntext: {
        fontSize: 11,
        color: '#FFFFFF',


    },

    input: {
        backgroundColor: '#FFFFFF',
        color: 'black',
        padding: 9,
        borderRadius: 7,
        marginTop: 3,
        fontSize: 10,



    },
    butao: {
        backgroundColor: '#A370F7',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 3,



    },
    imagem: {
        justifyContent: 'center',
        marginVertical: 40,

        width: 150,
        height: 150,
    },
    imageview: {


        alignItems: 'center',


    }
});