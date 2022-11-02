import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
            <Image source={require('../assets/story_image_1.png')} style={styles.storyImage}></Image>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
              <Text style={styles.storyAuthor}>{this.props.story.author}</Text>
              <Text style={styles.storyDescription}>{this.props.story.description}</Text>
            </View>
            <View style={styles.actionContainter}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'white'}></Ionicons>
              <Text style={style.likeText}>12K</Text>
            </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  storyImage:{
    resizeMode: 'contain',
    width:"95%",
    alignSelf:'center',
    height:RFValue(250)
  },
  storyTitleText:{
    fontSize:RFValue(25),
    fontFamily:'Bubblegum-Sans',
    color:'white',
  },
  storyAuthor:{
    fontSize:RFValue(18),
    fontFamily:'Bubblegum-Sans',
    color:'white'
  },
  storyDescription:{
    fontFamity:'Bubblemgum-Sans',
    fontSize:13,
    color:'white',
    paddingTop:RFValue(10)
  },
  actionContainter:{
    justifyContent:'center',
    alignItems:'center',
    padding:RFValue(10)
  },
  likeText:{
    color:'white',
    fontFamily:"BUbblegum-Sans",
    fontSize:RFValue(35),
    marginLeft:RFValue(5)
  }
});
