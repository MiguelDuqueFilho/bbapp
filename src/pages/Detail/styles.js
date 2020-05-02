import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
  __backgroundColor,
  __backgroundColorCard,
  __backgroundColorInput,
  __backgroundColorButtom,
  __colorButtom,
  __colorTextSecundary,
  __textColor,
  __colorTextTitle,
  __colorTextSubtitle,
} from "../global.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: __backgroundColor,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    borderRadius: 50,
  },
  event: {
    padding: 24,
    backgroundColor: __backgroundColorCard,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 48,
  },
  eventProperty: {
    fontSize: 14,
    color: __colorTextSubtitle,
    marginTop: 24,
    fontWeight: "bold",
  },
  eventValue: {
    marginTop: 8,
    fontSize: 15,
    color: __colorTextSecundary,
  },
  contentBox: {
    padding: 24,
    backgroundColor: __backgroundColorCard,
    borderRadius: 8,
    marginBottom: 16,
  },
  ContentTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: __colorTextTitle,
    lineHeight: 30,
  },
  ContentDescription: {
    fontSize: 15,
    color: __colorTextSecundary,
    marginTop: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    backgroundColor: __backgroundColorButtom,
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  actionText: {
    color: __backgroundColorInput,
    fontSize: 15,
    fontWeight: "bold",
  },
});
