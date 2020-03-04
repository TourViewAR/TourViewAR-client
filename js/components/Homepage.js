import React, { Component } from "react";

import { Image, StyleSheet, Alert } from "react-native";

import { connect } from "react-redux";

import { selectNavigator } from "../redux/render/render.selectors";

import {
  selectUserName,
  selectUserProfilePic
} from "../redux/user/user.selectors";

import { navigate } from "../redux/render/render.action";

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  View,
  Thumbnail,
  CardItem,
  Badge,
  Icon
} from "native-base";
import { selectTourName } from "../redux/tour/tour.selectors";

const HomePage = props => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Header style={{backgroundColor: '#2a7886'}}>
        <Left />
        <Body>
          <Title style={{color: 'white'}}>TourViewAR</Title>
        </Body>
        <Right />
      </Header>
      <Content style={{backgroundColor: '#49beb7'}}>
        <View style={{ borderTopColor: 'orange', borderTopWidth: 1, alignItems: "center", marginTop: width * 0.15, borderRadius: width * 0.3, backgroundColor: 'white', height: width * 0.6, width: width * 0.6, marginLeft: width * 0.2 }}>
          <View style={{marginTop: height * 0.1}}>
            <Text style={{fontFamily: 'Gill Sans', fontSize: 35, color: '#fe5f55'}}>TOURVIEWAR</Text>
          </View>  
          <View tyle={{marginTop: height * 0.1}}>
            <Text style={{color: '#a64942', fontSize: 15}}>Create Your Own Virtual Space</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 0.035 * height, marginBottom: 0.015 * height }}>
          <Image
            style={{ width: 0.15 * width, height: 0.15 * width, justifyContent: "center" }}
            source={require("../res/camera.png")}
          ></Image>
        </View>
        <CardItem style={{backgroundColor: '#49beb7'}}>
          <Body style={{ alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{color: 'white'}}>{`Welcome ${props.selectUserName}`}</Text>
            </View>
          </Body>
        </CardItem>
        <View style={{ marginTop: 50 }}>
          <Button
            block
            light
            style={styles.button}
            onPress={() => {
              props.navigate("SEARCH_PAGE");
            }}
            full
          >
            <Text>Search Tour</Text>
          </Button>
          <Button
            block
            light
            style={styles.button}
            onPress={() => {
              props.navigate("CREATE_TOUR");
            }}
            full
          >
            <Text>Create A New Tour</Text>
          </Button>
          <Button
            block
            style={styles.button}
            onPress={() => {
              props.navigate("LOGIN_PAGE");
            }}
            full
          >
            <Text>Log Out</Text>
          </Button>
        </View>
      </Content>
      <Footer style={{ height: 80 }}>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              props.navigate("PROFILE");
            }}
          >
            <Text>Profile</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("AR");
            }}
          >
            <Text>My AR</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("CAMERA_PAGE");
            }}
          >
            <Text>Take a Photo</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("IMAGE_UPLOAD");
            }}
          >
            <Text>Upload Image</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

let styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: { marginTop: 20, marginHorizontal: 50 }
});

const mapDispatchToProps = dispatch => {
  return { navigate: render => dispatch(navigate(render)) };
};

const mapStateToProps = state => {
  return {
    selectNavigator: selectNavigator(state),
    selectUserProfilePic: selectUserProfilePic(state),
    selectUserName: selectUserName(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
