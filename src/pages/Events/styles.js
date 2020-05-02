import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {
  __backgroundColor,
  __backgroundColorCard,
  __backgroundColorInput,
  __backgroundColorButtom,
  __colorButtom,
  __colorTextSecundary,
  __textColor,
  __colorTextTitle,
} from '../global.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: __backgroundColor,
  },
  logo: {
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'right',
    fontSize: 15,
    color: __colorTextSecundary,
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 25,
    color: __colorTextTitle,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: __colorTextSecundary,
  },
  eventList: {
    marginTop: 32,
  },
  event: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  eventProperty: {
    fontSize: 14,
    color: __colorTextTitle,
    fontWeight: 'bold',
  },
  eventValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: __colorTextSecundary,
  },
  detailsButtom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: __backgroundColorButtom,
    borderRadius: 8,
    height: 40,
    width: '100%',

    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  detailsButtomText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
});
