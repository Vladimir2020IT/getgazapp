import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Component5 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.homeIndicator}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.tabBar, styles.bgPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={styles.text}>Оформление заказа</Text>
        <Image
          style={[styles.notificationsIcon, styles.iconLayout2]}
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
        <Text style={[styles.text1, styles.textTypo2]}>Продолжить</Text>
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
        <Text style={[styles.text2, styles.textFlexBox]}>Выберите дом</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>Дом</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.childItemLayout]} />
        <Text style={[styles.text2, styles.textFlexBox]}>Имя принимающего</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>Имя</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.child, styles.childItemLayout]} />
        <Text style={[styles.text2, styles.textFlexBox]}>Ваш комментарий</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>Комментарий</Text>
      </View>
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.child, styles.childItemLayout]} />
        <Text style={[styles.text2, styles.textFlexBox]}>+7</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>Телефон</Text>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view5, styles.viewPosition3]}>
          <View style={[styles.bg2, styles.bg2Layout]} />
          <Text style={[styles.text10, styles.textFlexBox]}>Мои контакты</Text>
        </View>
        <View style={[styles.view6, styles.viewPosition3]}>
          <LinearGradient
            style={[styles.bg3, styles.bg2Layout]}
            locations={[0, 1]}
            colors={["#63b4ee", "#55ffd6"]}
          />
          <Image
            style={[styles.ellipseIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Text style={[styles.text10, styles.textFlexBox]}>
            Заказ примет другой человек
          </Text>
        </View>
      </View>
      <View style={[styles.btn1, styles.btnChildLayout]}>
        <View style={[styles.btnItem, styles.childItemLayout]} />
        <Text style={[styles.text12, styles.textTypo2]}>
          Повторить предыдущий заказ
        </Text>
        <Image
          style={[styles.right1Icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/right-11.png")}
        />
      </View>
      <View style={[styles.navbar, styles.bgPosition]}>
        <View style={[styles.bg4, styles.bg4Position]} />
        <View style={[styles.view7, styles.viewPosition]}>
          <View style={[styles.bg5, styles.bg1Position]} />
          <Text style={[styles.text13, styles.textTypo]}>Мои дома</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/12.png")}
          />
        </View>
        <View style={[styles.view8, styles.viewPosition]}>
          <View style={[styles.bg5, styles.bg1Position]} />
          <Text style={[styles.text13, styles.textTypo]}>История</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/21.png")}
          />
        </View>
        <View style={[styles.view9, styles.viewPosition]}>
          <View style={[styles.bg7, styles.bg1Position]} />
          <Text style={[styles.text15, styles.textTypo]}>Заказать</Text>
          <Image
            style={[styles.icon2, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/31.png")}
          />
        </View>
        <View style={[styles.view10, styles.viewPosition]}>
          <View style={[styles.bg5, styles.bg1Position]} />
          <Text style={[styles.text13, styles.textTypo]}>Профиль</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/41.png")}
          />
        </View>
        <View style={[styles.view11, styles.viewPosition]}>
          <View style={[styles.bg5, styles.bg1Position]} />
          <Text style={[styles.text13, styles.textTypo]}>Поддержка</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/52.png")}
          />
        </View>
        <View style={styles.homeIndicator2}>
          <View style={[styles.bg10, styles.bg1Position]} />
          <View style={[styles.homeIndicator3, styles.bg4Position]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  bg1Position: {
    display: "none",
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  textTypo2: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 15,
    lineHeight: 25,
    width: 327,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
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
  viewPosition3: {
    height: 32,
    left: 0,
    position: "absolute",
  },
  bg2Layout: {
    width: 32,
    borderRadius: Border.br_base,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  bg4Position: {
    width: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "41.46%",
    width: "32%",
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  bg: {
    backgroundColor: Color.colorWhite,
    top: 0,
    height: 21,
  },
  homeIndicator1: {
    left: 120,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_8xs,
    top: 8,
    position: "absolute",
  },
  homeIndicator: {
    top: 1117,
    left: 1,
    height: 21,
    position: "absolute",
    width: 375,
  },
  bg1: {
    backgroundColor: Color.colorSilver,
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  text: {
    width: "91.47%",
    left: "4.27%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    top: "72.73%",
    position: "absolute",
  },
  notificationsIcon: {
    height: "27.27%",
    width: "6.4%",
    right: "87.2%",
    left: "6.4%",
    top: "72.73%",
    maxWidth: "100%",
    bottom: "0%",
  },
  tabBar: {
    height: 88,
    top: 0,
  },
  btnChild: {
    backgroundColor: Color.color,
    height: 55,
    width: 327,
    position: "absolute",
    top: 0,
  },
  text1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 15,
  },
  btn: {
    top: 731,
    left: 24,
  },
  progressChild: {
    borderRadius: Border.br_5xs,
    left: 0,
    width: 327,
    height: 8,
    backgroundColor: Color.colorWhite,
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
    height: 8,
    left: 24,
  },
  child: {
    top: 28,
    height: 55,
    width: 327,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  right1Icon: {
    left: 296,
    width: 15,
    height: 15,
    top: 48,
    position: "absolute",
    overflow: "hidden",
  },
  text2: {
    top: 43,
    left: 16,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mid,
  },
  text3: {
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  view1: {
    top: 525,
  },
  view2: {
    top: 327,
  },
  view3: {
    top: 624,
  },
  view4: {
    top: 426,
  },
  bg2: {
    backgroundColor: Color.colorWhite,
  },
  text10: {
    top: 4,
    left: 48,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  view5: {
    width: 152,
    top: 0,
  },
  bg3: {
    backgroundColor: Color.color,
  },
  ellipseIcon: {
    left: 8,
    top: 8,
  },
  view6: {
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
    height: 55,
    width: 327,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text12: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 15,
    fontSize: FontSize.size_mini,
  },
  right1Icon1: {
    top: 20,
    left: 295,
    overflow: "hidden",
  },
  btn1: {
    top: 144,
    left: 24,
  },
  bg4: {
    height: "79.25%",
    top: "20.75%",
    shadowColor: "rgba(99, 126, 167, 0.1)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.colorWhite,
  },
  bg5: {
    height: "83.54%",
    top: "-520.52%",
    bottom: "536.98%",
    backgroundColor: Color.colorSilver,
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text13: {
    height: "29.27%",
    top: "70.73%",
    color: Color.colorGray_100,
  },
  icon: {
    right: "33.33%",
    left: "34.67%",
  },
  view7: {
    right: "80%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    left: "0%",
  },
  icon1: {
    right: "34.67%",
    left: "33.33%",
  },
  view8: {
    right: "60%",
    left: "20%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
  },
  bg7: {
    height: "45.67%",
    top: "-239.22%",
    bottom: "293.55%",
    backgroundColor: Color.colorSilver,
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text15: {
    height: "16%",
    top: "84%",
    color: Color.colorGray_200,
  },
  icon2: {
    height: "73.33%",
    width: "73.33%",
    right: "12%",
    bottom: "26.67%",
    left: "14.67%",
    top: "0%",
  },
  view9: {
    height: "70.75%",
    right: "40%",
    left: "40%",
    bottom: "29.25%",
    width: "20%",
    top: "0%",
  },
  view10: {
    right: "20%",
    left: "60%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
  },
  view11: {
    left: "80%",
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    width: "20%",
    right: "0%",
  },
  bg10: {
    height: "420%",
    width: "277.78%",
    top: "-160%",
    right: "-88.89%",
    bottom: "-160%",
    left: "-88.89%",
    backgroundColor: Color.colorWhite,
  },
  homeIndicator3: {
    backgroundColor: Color.colorGray_400,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  homeIndicator2: {
    height: "4.72%",
    width: "36%",
    top: "87.74%",
    right: "32%",
    bottom: "7.55%",
    left: "32%",
    position: "absolute",
  },
  navbar: {
    top: 810,
    height: 106,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 916,
    overflow: "hidden",
    width: 375,
  },
});

export default Component5;
