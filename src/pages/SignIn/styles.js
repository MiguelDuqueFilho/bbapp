import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
  __backgroundColor,
  __backgroundColorInput,
  __backgroundColorButtom,
  __colorButtom,
  __colorTextSecundary,
  __textColor,
} from "../global.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: __backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 40,
    borderRadius: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: __backgroundColorInput,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: __textColor,
  },
  forgot: {
    color: __colorTextSecundary,
    fontSize: 14,
    marginTop: 20,
  },
  signup: {
    color: __colorTextSecundary,
    fontSize: 14,
    marginTop: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: __backgroundColorButtom,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  loginText: {
    color: __colorButtom,
  },
  errorMessage: {
    textAlign: "center",
    color: "#e02041",
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 20,
  },
});
