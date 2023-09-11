import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Component4 = () => {
  return (
    <View style={[styles.view, styles.viewLayout1]}>
      <View style={[styles.tabBar, styles.bg3Layout]}>
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
          <Text style={styles.text}>12:28</Text>
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
        <Text style={[styles.text1, styles.textFlexBox1]}>
          Оформление заказа
        </Text>
        <Image
          style={styles.notificationsIcon}
          contentFit="cover"
          source={require("../assets/notifications.png")}
        />
      </View>
      <View style={[styles.btn, styles.btnChildLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childItemLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text2, styles.textTypo1]}>Продолжить</Text>
      </View>
      <View style={[styles.progress, styles.progressLayout]}>
        <View style={[styles.progressChild, styles.progressLayout]} />
        <LinearGradient
          style={[styles.progressItem, styles.progressLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.child, styles.childItemLayout]} />
        <Image
          style={styles.right1Icon}
          contentFit="cover"
          source={require("../assets/right-1.png")}
        />
        <Text style={[styles.text3, styles.textFlexBox]}>Выберите дом</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Дом</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.childItemLayout]} />
        <Text style={[styles.text3, styles.textFlexBox]}>Ваш комментарий</Text>
        <Text style={[styles.text4, styles.textFlexBox]}>Комментарий</Text>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view3, styles.viewPosition]}>
          <LinearGradient
            style={[styles.bg1, styles.bg1Layout]}
            locations={[0, 1]}
            colors={["#63b4ee", "#55ffd6"]}
          />
          <Image
            style={styles.inner}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Text style={[styles.text7, styles.textFlexBox]}>Мои контакты</Text>
        </View>
        <View style={[styles.view4, styles.viewPosition]}>
          <View style={[styles.bg2, styles.bg1Layout]} />
          <Text style={[styles.text7, styles.textFlexBox]}>
            Заказ примет другой человек
          </Text>
        </View>
      </View>
      <View style={[styles.btn1, styles.btnChildLayout]}>
        <View style={[styles.btnItem, styles.childItemLayout]} />
        <Text style={[styles.text9, styles.textTypo1]}>
          Повторить предыдущий заказ
        </Text>
      </View>
      <View style={[styles.shadow, styles.viewLayout1]} />
      <View style={[styles.child1, styles.bg3Layout]} />
      <View style={styles.homeIndicator}>
        <View style={[styles.bg3, styles.bg3Layout]} />
        <View style={[styles.homeIndicator1, styles.homeLayout]} />
      </View>
      <View style={[styles.count, styles.bg3Layout]}>
        <Text style={[styles.text10, styles.textTypo]}>Дом №1</Text>
        <Text style={[styles.text11, styles.textLayout]}>
          Москва, мкр. Совушки, д 23
        </Text>
        <Text style={[styles.text12, styles.textTypo]}>Новый дом</Text>
        <Text style={[styles.text13, styles.textTypo]}>Дом №2</Text>
        <Text style={[styles.text14, styles.textLayout]}>
          Город, адрес дома
        </Text>
        <View style={[styles.countChild, styles.countBg]} />
        <View style={[styles.countItem, styles.countBg]} />
      </View>
      <Text style={[styles.text15, styles.textTypo1]}>Выберите дом</Text>
      <View style={[styles.homeIndicator2, styles.countBg]} />
      <View style={[styles.btn2, styles.btnChildLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.childItemLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text2, styles.textTypo1]}>Выбрать</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout1: {
    height: 812,
    width: 375,
  },
  bg3Layout: {
    width: 375,
    position: "absolute",
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
  groupLayout: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_12xs,
    width: "16.67%",
    bottom: "0%",
    position: "absolute",
  },
  textFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  btnChildLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  childItemLayout: {
    borderRadius: Border.br_5xs,
    left: 0,
  },
  textTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  progressLayout: {
    height: 8,
    position: "absolute",
  },
  viewLayout: {
    height: 83,
    width: 327,
    left: 24,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  viewPosition: {
    height: 32,
    left: 0,
    position: "absolute",
  },
  bg1Layout: {
    width: 32,
    borderRadius: Border.br_base,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeLayout: {
    borderRadius: Border.br_8xs,
    height: 5,
  },
  textTypo: {
    left: "21.33%",
    width: "57.33%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 16,
    color: Color.colorGray_100,
    textAlign: "center",
    position: "absolute",
  },
  countBg: {
    backgroundColor: Color.colorLightgray,
    position: "absolute",
  },
  bg: {
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
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
    fontFamily: FontFamily.sFUIText,
    color: Color.colorGray_300,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  groupChild: {
    left: "83.33%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_12xs,
    width: "16.67%",
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
    height: "50%",
  },
  text1: {
    width: "91.47%",
    left: "4.27%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: "72.73%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
  },
  notificationsIcon: {
    height: "27.27%",
    width: "6.4%",
    right: "87.2%",
    left: "6.4%",
    top: "72.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  tabBar: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
  },
  btnChild: {
    backgroundColor: Color.color,
    height: 55,
    width: 327,
    position: "absolute",
    top: 0,
  },
  text2: {
    color: Color.colorWhite,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  btn: {
    top: 533,
    left: 24,
  },
  progressChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    left: 0,
    width: 327,
    top: 0,
  },
  progressItem: {
    width: 109,
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  progress: {
    top: 112,
    width: 327,
    left: 24,
  },
  child: {
    top: 28,
    backgroundColor: Color.colorWhite,
    height: 55,
    width: 327,
    position: "absolute",
  },
  right1Icon: {
    left: 296,
    height: 15,
    top: 48,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    top: 43,
    left: 16,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
  },
  text4: {
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  view1: {
    top: 327,
  },
  view2: {
    top: 426,
  },
  bg1: {
    backgroundColor: Color.color,
  },
  inner: {
    top: 8,
    left: 8,
    width: 16,
    height: 16,
    position: "absolute",
  },
  text7: {
    top: 4,
    left: 48,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  view3: {
    width: 152,
    top: 0,
  },
  bg2: {
    backgroundColor: Color.colorWhite,
  },
  view4: {
    width: 269,
    top: 48,
  },
  parent: {
    top: 223,
    height: 80,
    width: 269,
    left: 24,
    position: "absolute",
  },
  btnItem: {
    backgroundColor: Color.colorWhite,
    height: 55,
    width: 327,
    position: "absolute",
    top: 0,
  },
  text9: {
    color: Color.colorLightskyblue,
    lineHeight: 25,
    top: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  btn1: {
    top: 144,
    left: 24,
  },
  shadow: {
    backgroundColor: Color.colorGray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  child1: {
    top: 393,
    height: 419,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke,
  },
  bg3: {
    top: -8,
    left: -120,
    height: 21,
    backgroundColor: Color.colorWhite,
    display: "none",
    position: "absolute",
  },
  homeIndicator1: {
    backgroundColor: Color.colorGray_200,
    width: 135,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    top: 799,
    left: 121,
    height: 5,
    width: 135,
    position: "absolute",
  },
  text10: {
    top: "36.14%",
    fontSize: 24,
    lineHeight: 40,
    color: Color.colorGray_200,
  },
  text11: {
    top: 113,
    left: 81,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  text12: {
    top: "7.92%",
    color: Color.colorGray_100,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
  },
  text13: {
    top: "80.2%",
    color: Color.colorGray_100,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
  },
  text14: {
    top: 186,
    left: 127,
    opacity: 0.5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
  },
  countChild: {
    top: "71.78%",
    bottom: "27.72%",
    right: "6.4%",
    width: "87.2%",
    height: "0.5%",
    backgroundColor: Color.colorLightgray,
    left: "6.4%",
  },
  countItem: {
    top: "27.72%",
    bottom: "71.78%",
    right: "6.4%",
    width: "87.2%",
    height: "0.5%",
    backgroundColor: Color.colorLightgray,
    left: "6.4%",
  },
  count: {
    top: 494,
    height: 202,
    left: 0,
    position: "absolute",
  },
  text15: {
    top: 446,
    fontSize: FontSize.size_xl,
    width: 327,
    left: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_200,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  homeIndicator2: {
    top: 417,
    left: 160,
    width: 55,
    borderRadius: Border.br_8xs,
    height: 5,
  },
  btn2: {
    top: 720,
    left: 24,
  },
  view: {
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default Component4;
