import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Frame13 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.tabBar}>
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
      <Text
        style={[styles.text1, styles.textTypo]}
      >{`И мы предложим вам выбрать 
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
      <Text style={styles.text2}>Оформите заказ</Text>
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
        source={require("../assets/ellipse-2011.png")}
      />
      <View style={styles.freepikDeviceInject35Parent}>
        <View style={styles.freepikDeviceInject35}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.freepikDeviceInject35Child, styles.groupIconLayout]}
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
            style={[styles.backgroundIcon, styles.iconLayout]}
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
              style={[styles.groupIcon, styles.groupIconLayout]}
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
  groupIconLayout: {
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
    bottom: "0%",
    position: "absolute",
  },
  getgaz1Layout: {
    width: 74,
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
    width: 375,
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
    top: 130,
    left: 46,
    width: 299,
    height: 297,
    position: "absolute",
  },
  vectorIcon1: {
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
    right: "0%",
    top: "0%",
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
  vectorIcon2: {
    height: "96.28%",
    width: "91.28%",
    top: "1.58%",
    right: "4.48%",
    bottom: "2.14%",
    left: "4.24%",
    position: "absolute",
  },
  groupIcon: {
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
    left: "0%",
    top: "0%",
    height: "100%",
  },
  icon: {
    height: "89.38%",
    width: "38.8%",
    top: "10.62%",
    left: "61.2%",
    bottom: "0%",
    position: "absolute",
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

export default Frame13;
