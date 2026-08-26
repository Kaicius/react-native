import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
    textPrimary: {
      fontSize: 42
    },
    btnPrimary: {
      backgroundColor: "#4e04b0",
      padding: 12,
      borderRadius: 20
    },
    btnSecondary: {
      backgroundColor: "black",
      padding: 12,
      borderRadius: 20
    },
    geral: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 20
    }
  });