import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Frame12 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <View style={[styles.bg, styles.bgBg]} />
        <View style={[styles.statusBarwhitebase, styles.statusLayout]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/background.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/battery-icon.png")}
          />
          <View style={[styles.statusBarwhitebaseChild, styles.statusLayout]} />
          <Text style={[styles.text, styles.textTypo]}>12:28</Text>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={[styles.group, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>{`Это поможет нам делать 
сервис лучше для вас!`}</Text>
      <Image
        style={[styles.child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-51.png")}
      />
      <View style={[styles.homeIndicator, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <Text style={styles.text2}>Оценивайте исполнителей</Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={styles.text3}>Войти</Text>
      </View>
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/ellipse-201.png")}
      />
      <View style={styles.view1}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/freepikdeviceinject43.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.inner, styles.innerLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <Text style={[styles.getgaz, styles.getgazTypo]}>GetGaz</Text>
        <View style={[styles.child1, styles.child1Bg]} />
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/22.png")}
      />
      <View style={styles.freepikDeviceInject35Parent}>
        <View style={[styles.freepikDeviceInject35, styles.bgPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.freepikDeviceInject35Child, styles.innerLayout]}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={[styles.getgaz1, styles.getgazTypo]}>GetGaz</Text>
          <View style={[styles.freepikDeviceInject35Item, styles.child1Bg]} />
        </View>
        <Image
          style={[styles.freepikCharaterInject35Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/freepikcharaterinject35.png")}
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
  bgBg: {
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  statusLayout: {
    height: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    top: "39.77%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    position: "absolute",
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
  innerLayout: {
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
    position: "absolute",
  },
  child1Bg: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  bgPosition: {
    right: "0%",
    top: "0%",
  },
  bg: {
    display: "none",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  batteryIcon: {
    height: "26.14%",
    width: "6.53%",
    right: "3.87%",
    bottom: "34.09%",
    left: "89.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBarwhitebaseChild: {
    width: "14.4%",
    top: "25%",
    right: "79.6%",
    bottom: "25%",
    left: "6%",
    borderRadius: Border.br_2xs,
    display: "none",
    backgroundColor: Color.colorSilver,
  },
  text: {
    width: "14.13%",
    top: "29.55%",
    left: "6.13%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUIText,
    color: Color.colorGray_300,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  groupChild: {
    left: "83.33%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  groupItem: {
    height: "80.95%",
    top: "19.05%",
    right: "27.78%",
    left: "55.56%",
  },
  groupInner: {
    height: "57.14%",
    top: "42.86%",
    right: "55.56%",
    left: "27.78%",
  },
  rectangleView: {
    height: "38.1%",
    top: "61.9%",
    right: "83.33%",
    left: "0%",
  },
  group: {
    height: "23.86%",
    width: "4.8%",
    right: "17.07%",
    bottom: "36.36%",
    left: "78.13%",
  },
  statusBarwhitebase: {
    bottom: "50%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  tabBar: {
    height: 88,
    position: "absolute",
    width: 375,
    left: 0,
  },
  text1: {
    width: "82.93%",
    top: "69.95%",
    left: "8.53%",
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  },
  child: {
    height: "0.99%",
    width: "16.53%",
    top: "83.74%",
    right: "41.6%",
    bottom: "15.27%",
    left: "41.87%",
    position: "absolute",
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
  text2: {
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
  text3: {
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
    width: 315,
    height: 303,
    left: 36,
    position: "absolute",
  },
  vectorIcon: {
    height: "96.28%",
    width: "91.28%",
    top: "1.58%",
    right: "4.48%",
    bottom: "2.14%",
    left: "4.24%",
    position: "absolute",
  },
  inner: {
    top: 101,
    left: 49,
  },
  getgaz: {
    top: 194,
    left: 44,
    width: 74,
    height: 24,
  },
  child1: {
    height: "4.42%",
    width: "26.52%",
    top: "4.42%",
    right: "37.16%",
    bottom: "91.16%",
    left: "36.31%",
  },
  view1: {
    height: "39.04%",
    width: "43.25%",
    top: "16.87%",
    right: "15.15%",
    bottom: "44.09%",
    left: "41.6%",
    position: "absolute",
  },
  icon: {
    height: "39.21%",
    width: "38.64%",
    top: "18.47%",
    right: "46.16%",
    bottom: "42.32%",
    left: "15.2%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "93.52%",
    width: "90.77%",
    top: "3.02%",
    right: "4.59%",
    bottom: "3.46%",
    left: "4.64%",
    position: "absolute",
  },
  freepikDeviceInject35Child: {
    top: 104,
    left: 106,
  },
  getgaz1: {
    top: 197,
    left: 36,
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
    position: "absolute",
  },
  freepikDeviceInject35Parent: {
    height: "39.05%",
    width: "67.37%",
    top: "14.9%",
    right: "14.76%",
    bottom: "46.05%",
    left: "17.87%",
    display: "none",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Frame12;
