import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
export default class App extends Component {
constructor() {
  super();
  this.state={
    text:'',
    isSearchPressed: false,
    isLoading: false,
    word:"Loading",
    lexicalCategory:'',
    definition:""
  };
}
getWord=(word)=>{var searchKeyword=word.toLowerCase()
var url="https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"

return fetch(url)
.then((data)=>{
  if(data.status===200){
    return data.json()

else{
  reurn null
}  }
})
.then((response)=>{
  var responseObject=response
  if(responseObject){
    var wordData=responseObject.defenetions[0]
    var definition=wordData.description
    var lexicalCategory=wordData.wordtype
  }
})
}
else{}
}
