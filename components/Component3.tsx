import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Component3 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
      </View>
      <Text style={styles.text}>{`Услуги по доставке газа 
и обслуживанию оборудования 
от проверенных поставщиков 
в одном месте`}</Text>
      <Image
        style={[styles.child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-53.png")}
      />
      <View style={[styles.homeIndicator, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text1}>{`Обслуживайте свой дом
в два клика
`}</Text>
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
        source={require("../assets/ellipse-203.png")}
      />
      <View style={styles.parent}>
        <View style={[styles.view1, styles.bgPosition]}>
          <Image
            style={[styles.freepikDeviceInject43Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/freepikdeviceinject43.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={styles.inner}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={styles.getgaz}>GetGaz</Text>
          <View style={styles.rectangleView} />
        </View>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarPosition: {
    left: 0,
    top: 0,
  },
  bgPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
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
  bg: {
    backgroundColor: Color.colorSilver,
    display: "none",
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    top: 135,
    left: 36,
    width: 315,
    height: 303,
    position: "absolute",
  },
  freepikDeviceInject43Icon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    height: "96.28%",
    width: "91.28%",
    top: "1.58%",
    right: "4.48%",
    bottom: "2.14%",
    left: "4.24%",
  },
  inner: {
    top: 101,
    left: 49,
    width: 65,
    height: 81,
    position: "absolute",
  },
  getgaz: {
    top: 194,
    left: 44,
    color: Color.colorBlack,
    textAlign: "left",
    width: 74,
    height: 24,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleView: {
    height: "4.42%",
    width: "26.52%",
    top: "4.42%",
    right: "37.16%",
    bottom: "91.16%",
    left: "36.31%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    position: "absolute",
  },
  view1: {
    width: "63.31%",
    left: "36.69%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    height: "92.87%",
    width: "56.47%",
    top: "5.87%",
    right: "43.53%",
    bottom: "1.26%",
    left: "0%",
  },
  parent: {
    height: "39.04%",
    width: "68.31%",
    top: "15.39%",
    right: "15.95%",
    bottom: "45.57%",
    left: "15.73%",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component3;
