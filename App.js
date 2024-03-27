import Constants from "expo-constants";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [QRCodeData, setQRCodeData] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          elevation: 20,
          fontSize: 30,
          fontWeight: "600",
          marginBottom: 100,
        }}
      >
        QR Code Generator
      </Text>

      <Text
        style={{
          width: 300,
          marginBottom: 20,
          fontSize: 17,
          fontWeight: "300",
        }}
      >
        Insira abaixo os dados que você quer inserir no seu QR Code:
      </Text>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{
            width: 310,
            elevation: 10,
            backgroundColor: "#FFFFFF",
            padding: 10,
            marginBottom: 50,
          }}
          multiline={true}
          placeholder="Ex: Chave pix / Link para sua rede social"
          onChangeText={(data) => setQRCodeData(data)}
        />

        {QRCodeData == "" ? null : (
          <QRCode
            style
            value={QRCodeData}
            size={243.06}
            color="white"
            backgroundColor="#40403C"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
