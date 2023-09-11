import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame10 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={[styles.tabBarIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/tab-bar2.png")}
      />
      <Text style={styles.text}>Мы отправим вам код подтверждения</Text>
      <Text style={styles.text1}>Неверный формат телефона</Text>
      <View style={[styles.homeIndicator, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text2}>Введите ваш номер телефона</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text3, styles.textLayout]}>Продолжить</Text>
      </View>
      <View style={[styles.rectangleParent, styles.btnLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.text4, styles.textLayout]}>+7 900 000 00 00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    top: 0,
  },
  bgLayout: {
    height: 21,
    position: "absolute",
    width: 375,
  },
  btnLayout: {
    height: 55,
    left: 24,
    width: 327,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_5xs,
    height: 55,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  tabBarIcon: {
    height: 88,
    position: "absolute",
    width: 375,
  },
  text: {
    width: "82.93%",
    top: "27.09%",
    left: "8.53%",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text1: {
    top: "43.47%",
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    color: Color.colorLightcoral,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  bg: {
    left: 0,
    top: 0,
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
    left: 1,
  },
  text2: {
    top: "22.91%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    justifyContent: "center",
    color: Color.colorGray_200,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "6.4%",
    width: "87.2%",
    textAlign: "center",
    position: "absolute",
  },
  btnChild: {
    backgroundColor: Color.color,
  },
  text3: {
    top: 15,
    color: Color.colorWhite,
    width: 327,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    left: 0,
  },
  btn: {
    top: 395,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightcoral,
    borderWidth: 1,
  },
  text4: {
    top: "27.27%",
    left: "4.89%",
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  rectangleParent: {
    top: 288,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame10;
