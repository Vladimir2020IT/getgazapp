import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Component6 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.navBar, styles.bg14Position]}>
        <View style={[styles.bg, styles.bgShadowBox]} />
        <View style={[styles.view1, styles.viewPosition8]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.vpn, styles.vpnTypo]}>VPN</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view2, styles.viewPosition7]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.vpn, styles.vpnTypo]}>Adblock</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view3, styles.viewPosition6]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.vpn, styles.vpnTypo]}>Утечки</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view4, styles.viewPosition5]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.vpn, styles.vpnTypo]}>Проверка ОС</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.view5, styles.viewPosition4]}>
          <View style={[styles.bg1, styles.bg1Bg]} />
          <Text style={[styles.text2, styles.vpnTypo]}>Главная</Text>
          <Image
            style={[styles.list1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/list-1.png")}
          />
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/ellipse-111.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.bg6Layout]}>
        <View style={[styles.bg6, styles.bg6Layout]} />
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.tabBar, styles.barLayout]}>
        <View style={[styles.bg7, styles.bg7Position]} />
        <Text style={[styles.text3, styles.textTypo3]}>Оформление заказа</Text>
        <Image
          style={[styles.notificationsIcon, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/notifications.png")}
        />
      </View>
      <View style={styles.navbar}>
        <View style={[styles.bg8, styles.bg7Position]} />
        <View style={[styles.view6, styles.viewPosition1]}>
          <View style={[styles.bg9, styles.bg7Position]} />
          <Text style={[styles.text4, styles.textTypo2]}>Мои дома</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/12.png")}
          />
        </View>
        <View style={[styles.view7, styles.viewPosition1]}>
          <View style={[styles.bg9, styles.bg7Position]} />
          <Text style={[styles.text4, styles.textTypo2]}>История</Text>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/21.png")}
          />
        </View>
        <View style={[styles.view8, styles.viewPosition1]}>
          <View style={[styles.bg11, styles.bg7Position]} />
          <Text style={[styles.text6, styles.textTypo2]}>Заказать</Text>
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/31.png")}
          />
        </View>
        <View style={[styles.view9, styles.viewPosition1]}>
          <View style={[styles.bg9, styles.bg7Position]} />
          <Text style={[styles.text4, styles.textTypo2]}>Профиль</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/41.png")}
          />
        </View>
        <View style={[styles.view10, styles.viewPosition1]}>
          <View style={[styles.bg9, styles.bg7Position]} />
          <Text style={[styles.text4, styles.textTypo2]}>Поддержка</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/52.png")}
          />
        </View>
        <View style={styles.homeIndicator2}>
          <View style={[styles.bg14, styles.bg14Position]} />
          <View style={[styles.homeIndicator3, styles.bg7Position]} />
        </View>
      </View>
      <View style={[styles.btn, styles.btnLayout]}>
        <LinearGradient
          style={[styles.btnChild, styles.btnItemLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
        <Text style={[styles.text9, styles.textTypo1]}>Продолжить</Text>
      </View>
      <View style={[styles.progress, styles.progressLayout]}>
        <View style={[styles.progressChild, styles.progressLayout]} />
        <LinearGradient
          style={[styles.progressItem, styles.progressLayout]}
          locations={[0, 1]}
          colors={["#63b4ee", "#55ffd6"]}
        />
      </View>
      <View style={[styles.view11, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.btnItemLayout]} />
        <Image
          style={styles.right1Icon}
          contentFit="cover"
          source={require("../assets/right-1.png")}
        />
        <Text style={[styles.text10, styles.textFlexBox]}>Выберите дом</Text>
        <Text style={[styles.text11, styles.textFlexBox]}>Дом</Text>
      </View>
      <View style={[styles.view12, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.btnItemLayout]} />
        <Text style={[styles.text10, styles.textFlexBox]}>Ваш комментарий</Text>
        <Text style={[styles.text11, styles.textFlexBox]}>Комментарий</Text>
      </View>
      <View style={styles.parent}>
        <View style={[styles.view13, styles.viewPosition]}>
          <LinearGradient
            style={[styles.bg15, styles.bg15Layout]}
            locations={[0, 1]}
            colors={["#63b4ee", "#55ffd6"]}
          />
          <Image
            style={[styles.child3, styles.child3Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-28.png")}
          />
          <Text style={[styles.text14, styles.textFlexBox]}>Мои контакты</Text>
        </View>
        <View style={[styles.view14, styles.viewPosition]}>
          <View style={[styles.bg16, styles.bg15Layout]} />
          <Text style={[styles.text14, styles.textFlexBox]}>
            Заказ примет другой человек
          </Text>
        </View>
      </View>
      <View style={[styles.btn1, styles.btnLayout]}>
        <View style={[styles.btnItem, styles.btnItemLayout]} />
        <Image
          style={[styles.right1Icon1, styles.child3Layout]}
          contentFit="cover"
          source={require("../assets/right-11.png")}
        />
        <Text style={[styles.text16, styles.textTypo1]}>
          Повторить предыдущий заказ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg14Position: {
    display: "none",
    position: "absolute",
  },
  bgShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    backgroundColor: Color.colorWhite,
  },
  viewPosition8: {
    left: "20%",
    right: "60%",
  },
  bg1Bg: {
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  vpnTypo: {
    height: 12,
    width: 75,
    fontFamily: FontFamily.sFUIText,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: 28,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewPosition7: {
    left: "40%",
    right: "40%",
  },
  viewPosition6: {
    left: "60%",
    right: "20%",
  },
  viewPosition5: {
    left: "80%",
    right: "0%",
  },
  viewPosition4: {
    right: "80%",
    left: "0%",
  },
  bg6Layout: {
    height: 21,
    position: "absolute",
    width: 375,
  },
  barLayout: {
    height: 88,
    left: 0,
    width: 375,
  },
  bg7Position: {
    width: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text3Position: {
    top: "72.73%",
    position: "absolute",
  },
  viewPosition1: {
    bottom: "29.25%",
    width: "20%",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "500",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "41.46%",
    height: "58.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "32%",
    position: "absolute",
    overflow: "hidden",
  },
  btnLayout: {
    height: 55,
    width: 327,
    position: "absolute",
  },
  btnItemLayout: {
    borderRadius: Border.br_5xs,
    left: 0,
  },
  textTypo1: {
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
  viewPosition: {
    height: 32,
    left: 0,
    position: "absolute",
  },
  bg15Layout: {
    width: 32,
    borderRadius: Border.br_base,
    height: 32,
    top: 0,
    left: 0,
    position: "absolute",
  },
  child3Layout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  bg: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: 0,
    height: 88,
    left: 0,
    width: 375,
    position: "absolute",
  },
  bg1: {
    height: "140%",
    width: "125.33%",
    top: "-20%",
    right: "-25.33%",
    bottom: "-20%",
    left: "0%",
    backgroundColor: Color.colorSilver,
    position: "absolute",
  },
  vpn: {
    color: Color.colorGray_100,
  },
  list1Icon: {
    height: "60%",
    right: "21.33%",
    bottom: "40%",
    left: "46.67%",
    top: "0%",
    width: "32%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
  },
  child: {
    left: 26,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  view1: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view2: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view3: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  view4: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  text2: {
    color: Color.colorBlack,
  },
  view5: {
    bottom: "32.95%",
    top: "21.59%",
    width: "20%",
    height: "45.45%",
    position: "absolute",
  },
  navBar: {
    top: 724,
    height: 88,
    left: 0,
    width: 375,
  },
  bg6: {
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
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
  },
  bg7: {
    bottom: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  text3: {
    width: "91.47%",
    left: "4.27%",
    color: Color.colorGray_200,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    top: "72.73%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
  },
  notificationsIcon: {
    height: "27.27%",
    width: "6.4%",
    right: "87.2%",
    left: "6.4%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tabBar: {
    top: 0,
    position: "absolute",
  },
  bg8: {
    height: "79.25%",
    top: "20.75%",
    shadowColor: "rgba(99, 126, 167, 0.1)",
    bottom: "0%",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    backgroundColor: Color.colorWhite,
  },
  bg9: {
    height: "83.54%",
    top: "-520.52%",
    bottom: "536.98%",
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  text4: {
    height: "29.27%",
    top: "70.73%",
    color: Color.colorGray_100,
  },
  icon: {
    right: "33.33%",
    left: "34.67%",
  },
  view6: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    right: "80%",
    left: "0%",
  },
  icon1: {
    right: "34.67%",
    left: "33.33%",
  },
  view7: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "20%",
    right: "60%",
  },
  bg11: {
    height: "45.67%",
    top: "-239.22%",
    bottom: "293.55%",
    backgroundColor: Color.colorSilver,
    display: "none",
  },
  text6: {
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
    position: "absolute",
  },
  view8: {
    height: "70.75%",
    left: "40%",
    right: "40%",
    top: "0%",
  },
  view9: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "60%",
    right: "20%",
  },
  view10: {
    top: "32.08%",
    height: "38.68%",
    bottom: "29.25%",
    left: "80%",
    right: "0%",
  },
  bg14: {
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
    bottom: "0%",
    height: "100%",
    width: "100%",
    top: "0%",
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
    top: 706,
    height: 106,
    left: 0,
    position: "absolute",
    width: 375,
  },
  btnChild: {
    backgroundColor: Color.color,
    height: 55,
    width: 327,
    position: "absolute",
    top: 0,
  },
  text9: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 15,
  },
  btn: {
    top: 533,
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
  rectangleView: {
    height: 55,
    width: 327,
    position: "absolute",
    top: 28,
    borderRadius: Border.br_5xs,
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
  text10: {
    top: 43,
    left: 16,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
  },
  text11: {
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    top: 0,
    left: 0,
  },
  view11: {
    top: 327,
  },
  view12: {
    top: 426,
  },
  bg15: {
    backgroundColor: Color.color,
  },
  child3: {
    left: 8,
    top: 8,
  },
  text14: {
    top: 4,
    left: 48,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  view13: {
    width: 152,
    top: 0,
  },
  bg16: {
    backgroundColor: Color.colorWhite,
  },
  view14: {
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
  right1Icon1: {
    top: 20,
    left: 295,
    overflow: "hidden",
  },
  text16: {
    color: Color.colorLightskyblue,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 15,
    fontSize: FontSize.size_mini,
  },
  btn1: {
    top: 144,
    left: 24,
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default Component6;
