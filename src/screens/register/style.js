import { StyleSheet } from "react-native";

export const stylesRegister = StyleSheet.create({
    container:  {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    butao: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 15,
        width: 200
      },
      geral: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20
      },
      inputs: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 12
      },
})