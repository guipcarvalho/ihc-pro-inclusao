import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";

export default function SaidaDoacao() {
  const [date, setDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [organicacao, setOrganizacao] = useState("");
  const [item, setItem] = useState("");

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      extraHeight={100}
      style={{ flex: 1, flexDirection: "column" }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <RNPickerSelect
          onValueChange={(value) => setOrganizacao(value)}
          items={[
            { label: "SOS Juiz de Fora 1", value: "SOS Juiz de Fora 1" },
            { label: "SOS Juiz de Fora 2", value: "SOS Juiz de Fora 2" },
            { label: "SOS Juiz de Fora 3", value: "SOS Juiz de Fora 3" }
          ]}
          value={organicacao}
          placeholder={{
            inputLabel: "Selecione uma Organização",
            label: "Selecione uma Organização"
          }}
          style={{
            inputIOS: styles.field,
            inputAndroid: styles.field
          }}
        />
        <RNPickerSelect
          onValueChange={(value) => setItem(value)}
          items={[
            { label: "Arroz", value: "Arroz" },
            { label: "Feijão", value: "Feijão" },
            { label: "Farinha", value: "Farinha" }
          ]}
          value={item}
          placeholder={{
            inputLabel: "Selecione um item",
            label: "Selecione um item"
          }}
          style={{
            inputIOS: styles.field,
            inputAndroid: styles.field
          }}
        />
        <TextInput style={styles.field} placeholder="Quantidade" number />
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
