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
import RNPickerSelect from "react-native-picker-select";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NumericInput from 'react-native-numeric-input';


import styles from "./styles";

export default function ExitDonationRegistration() {
  const [organicacao, setOrganizacao] = useState("");
  const [item, setItem] = useState("");

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      extraHeight={100}
      style={{ flex: 1, backgroundColor: 'white', flexDirection: "column" }}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeaderText}>Doar para</Text>
          <Text style={styles.infoName}>Almir Felipe de Arruda</Text>
          <Text style={styles.secondaryText}>154.654.785-54</Text>
          <Text style={styles.secondaryText}>São Matheus</Text>
        </View>
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
        <View style={styles.qtdContainer}>
            <Text style={styles.qtdText}>Quantidade:</Text>
            <NumericInput 
                minValue={0}
                containerStyle={styles.numericContainer}
                inputStyle={styles.numericContainer}
                totalWidth={150}
                totalHeight={40}
                rounded
                reachMinDecIconStyle={{ opacity: 0 }}
            />
        </View>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.registerText}>Salvar</Text>
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
