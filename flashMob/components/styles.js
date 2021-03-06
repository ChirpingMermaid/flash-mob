import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollHeight: {
    height: 600
  },
  container: {
    // flexWrap: 'nowrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  listView: {
    // marginTop: 70,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  flexRow: {
    flexDirection: 'row',
  },
  containerRight: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f0f8ff',
    flexDirection: 'row-reverse'
  },
  containerBottom: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#f0f8ff',
  },
  containerTop: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  containerEmpty: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: '#ff69b4',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3
  },
  topMargin: {
    marginTop: 70
  },
  navText: {
    fontSize: 15,
    color: '#ff69b4',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'right',
    marginTop: 70,
    marginRight: 5
  },
  containerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f0f8ff',
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f0f8ff',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  eventInputs: {
    marginTop: 70,
    flex: 1
  },
  eventTop: {
    marginTop: 10,
    flex: 1
  },
  imageEventPage: {
  },
  image: {
    height: 70,
    width: 60
  },
  imageIcon: {
    height: 20,
    width: 15
  },
  imageChar: {
    height: 30,
    width: 90,
    marginBottom: 10,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
  },
  subhead: {
    fontSize: 15,
    textAlign: 'center',
    color: '#696969',
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 18,
    color: '#ff69b4',
    alignSelf: 'center',
    marginBottom: 3,
  },
  greetings: {
    fontSize: 18,
    color: '#ff69b4',
    alignSelf: 'flex-start'
  },

  button: {
    height: 45,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginLeft: 5,
    marginRight: 5,
  },
  newButton: {
    marginBottom: 10,
    borderRadius: 15,
    flexDirection: 'row'
  },
  textInput: {
    height: 40,
    padding: 4,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
  },
  allText: {
    textAlign: 'left',
    left: 20,
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  textAlert: {
    textAlign: 'left',
    left: 20,
    fontSize: 16,
    color: '#ff69b4',
    marginBottom: 5,
  },
  events: {
    // marginTop: 70,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  publicButton: {
    flex: 1,
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginTop: 70,
    marginBottom: 10,
    // marginLeft: 320,
    borderRadius: 15,
  },
  greeting: {
    flex: 4,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  event: {
    flexDirection: 'column',
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#696969',
    marginLeft: 10,
    marginRight: 10
  },
  eventPublic: {
    flexDirection: 'column',
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#696969',
    marginLeft: 5,
    marginRight: 5
  },
  instagramContainter: {
    alignItems: 'center'
    
  },
  eventPageContainer: {
    padding: 10,
    alignItems: 'flex-start'


  },
  highlight: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    flex: 3,
    fontSize: 18,
    fontWeight: 'bold'
  },
  category: {
    flex: 1,
    fontSize: 15,
    textAlign: 'right',
    justifyContent: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
    // flexWrap: 'nowrap',
  },
  distAndTime: {
    color: 'grey',
    fontStyle: 'italic'
  },
  hidden: {
    marginLeft: 5,
  },
  meComing: {
    height: 30,
    width: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },

  meComingHightlight: {
    height: 30,
    width: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },

  hiddenButtons:{
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    height: 35,
  },
  Coming: {
    height: 30,
    width: 140,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginLeft: 0,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  EventInfo: {
    height: 30,
    width: 140,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginLeft: 25,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  eventButtons: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  eventInfoButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
  },
  instagramPhoto: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',

  },
    
  add: {
    height: 30,
    width: 30,
    // alignSelf: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff69b4',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  deleteEventButton: {
    height: 30,
    width: 140,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cc0000',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#cc0000',
    alignSelf: 'center'
  },
  meComingText: {
    fontSize: 16,
    color: '#ff69b4',
    alignSelf: 'center'
  },
  meComingTextBold: {
    fontSize: 18,
    color: '#ff69b4',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  eventsTextInput: {
    height: 38,
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 4,
    marginBottom: 10
  },
  eventsTextInputShort: {
    width: 260
  },
  description: {
    height: 85,
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    padding: 4,
    marginBottom: 10
  },
  eventText: {
    textAlign: 'left',
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical: 20
  },
  info: {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  textNoBottom: {
    marginBottom: 5,
  },
  confirm: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  modalView: {
    marginTop: 22,
    flex: 1,
    justifyContent: 'center'
  }
});
