import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Component2 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
      </View>
      <Text style={styles.text}>{`Это займет не более 5 минут, 
зато поможет быстро оформлять заказы`}</Text>
      <Image
        style={[styles.child, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-52.png")}
      />
      <View style={[styles.homeIndicator, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text1}>{`Зарегистрируйтесь и
заполните анкету`}</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={styles.text2}>Войти</Text>
      </View>
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/ellipse-202.png")}
      />
      <View style={[styles.freepikDeviceInject35Parent, styles.bgPosition]}>
        <View style={[styles.freepikDeviceInject35, styles.bgPosition1]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={styles.freepikDeviceInject35Child}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={styles.getgaz}>GetGaz</Text>
          <View style={styles.freepikDeviceInject35Item} />
        </View>
        <Image
          style={[styles.freepikCharaterInject35Icon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/freepikcharaterinject351.png")}
        />
      </View>
      <Image
        style={[styles.inner, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-99.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarPosition: {
    left: 0,
    top: 0,
  },
  bgPosition: {
    display: "none",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bg1Layout: {
    height: 21,
    left: 0,
    position: "absolute",
    width: 375,
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  bgPosition1: {
    right: "0%",
    top: "0%",
  },
  bg: {
    backgroundColor: Color.colorSilver,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  tabBar: {
    height: 88,
    position: "absolute",
    width: 375,
    left: 0,
  },
  text: {
    width: "82.93%",
    top: "69.95%",
    left: "8.53%",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "center",
    position: "absolute",
  },
  child: {
    height: "0.99%",
    width: "16.53%",
    top: "83.74%",
    right: "41.6%",
    bottom: "15.27%",
    left: "41.87%",
  },
  bg1: {
    top: 0,
    height: 21,
  },
  homeIndicator1: {
    top: 8,
    left: 120,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    width: 135,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 791,
  },
  text1: {
    width: "87.2%",
    top: "62.07%",
    left: "6.4%",
    lineHeight: 24,
    color: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  btnChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.color,
    left: 0,
    top: 0,
  },
  text2: {
    top: 15,
    fontSize: FontSize.size_mid,
    lineHeight: 25,
    color: Color.colorWhite,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  btn: {
    top: 720,
    left: 24,
  },
  item: {
    top: 129,
    left: 42,
    width: 303,
    height: 315,
    position: "absolute",
  },
  vectorIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  vectorIcon1: {
    height: "93.52%",
    width: "90.77%",
    top: "3.02%",
    right: "4.59%",
    bottom: "3.46%",
    left: "4.64%",
  },
  freepikDeviceInject35Child: {
    top: 104,
    left: 106,
    width: 65,
    height: 81,
    position: "absolute",
  },
  getgaz: {
    top: 197,
    left: 36,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  freepikDeviceInject35Item: {
    top: 17,
    left: 58,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 31,
    height: 10,
    position: "absolute",
  },
  freepikDeviceInject35: {
    height: "99.61%",
    width: "58.04%",
    bottom: "0.39%",
    left: "41.96%",
    position: "absolute",
  },
  freepikCharaterInject35Icon: {
    height: "92.87%",
    width: "57.41%",
    top: "7.13%",
    right: "42.59%",
    left: "0%",
    bottom: "0%",
  },
  freepikDeviceInject35Parent: {
    height: "39.05%",
    width: "67.37%",
    top: "14.9%",
    right: "14.76%",
    bottom: "46.05%",
    left: "17.87%",
  },
  inner: {
    height: "41.26%",
    width: "45.84%",
    top: "14.66%",
    right: "27.23%",
    bottom: "44.09%",
    left: "26.93%",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component2;
