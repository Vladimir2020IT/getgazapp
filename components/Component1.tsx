import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Component1 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.tabBar}>
        <View style={[styles.bg, styles.bgPosition]} />
      </View>
      <Text style={styles.text}>{`И мы предложим вам выбрать 
исполнителя по рейтингу, стоимости
 и срокам доставки`}</Text>
      <Image
        style={[styles.child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-511.png")}
      />
      <View style={[styles.homeIndicator, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text1}>Оформите заказ</Text>
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
        source={require("../assets/ellipse-2011.png")}
      />
      <View style={[styles.freepikDeviceInject35Parent, styles.bgPosition]}>
        <View style={[styles.freepikDeviceInject35, styles.bgPosition1]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.freepikDeviceInject35Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={[styles.getgaz, styles.getgazTypo]}>GetGaz</Text>
          <View style={[styles.freepikDeviceInject35Item, styles.innerBg]} />
        </View>
        <Image
          style={[styles.freepikCharaterInject35Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/freepikcharaterinject351.png")}
        />
      </View>
      <View style={styles.parent}>
        <View style={[styles.view1, styles.iconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/freepikdeviceinject43.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <View style={[styles.groupParent, styles.getgaz1Layout]}>
            <Image
              style={[styles.groupChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.getgaz1, styles.getgaz1Layout]}>GetGaz</Text>
          </View>
          <View style={[styles.inner, styles.innerBg]} />
        </View>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/211.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    display: "none",
    position: "absolute",
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
  bgPosition1: {
    right: "0%",
    top: "0%",
  },
  childLayout: {
    height: 81,
    width: 65,
    position: "absolute",
  },
  getgazTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  innerBg: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    bottom: "0%",
  },
  getgaz1Layout: {
    width: 74,
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
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
    top: "63.55%",
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
    top: 130,
    left: 46,
    width: 299,
    height: 297,
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
  },
  getgaz: {
    top: 197,
    left: 36,
    position: "absolute",
  },
  freepikDeviceInject35Item: {
    top: 17,
    left: 58,
    width: 31,
    height: 10,
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
  vectorIcon2: {
    height: "96.28%",
    width: "91.28%",
    top: "1.58%",
    right: "4.48%",
    bottom: "2.14%",
    left: "4.24%",
  },
  groupChild: {
    left: 5,
    top: 0,
  },
  getgaz1: {
    top: 93,
    height: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
  },
  groupParent: {
    top: 101,
    left: 44,
    height: 117,
  },
  inner: {
    height: "4.42%",
    width: "26.52%",
    top: "4.42%",
    right: "37.16%",
    bottom: "91.16%",
    left: "36.31%",
  },
  view1: {
    width: "63.85%",
    right: "36.15%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    height: "89.38%",
    width: "38.8%",
    top: "10.62%",
    left: "61.2%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
  },
  parent: {
    height: "39.04%",
    width: "67.73%",
    top: "16.87%",
    right: "16.27%",
    bottom: "44.09%",
    left: "16%",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component1;
