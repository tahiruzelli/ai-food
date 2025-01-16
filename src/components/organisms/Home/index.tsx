import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { Colors } from "../../../utils/constans/colors";
import { HomeArrowsIcon } from "../../atoms/Icons";
import dimensions from "../../../utils/helpers/dimensions";
import HomeHeader from "../../molecules/Home/header";
import Carousel from "react-native-carousel-view";
import AppText from "../../atoms/app-text";
import PopulerCategoryCard from "../../molecules/Home/category-card";
import CoffeeIcon from "../../atoms/Icons/coffee";
import HomeShortcut from "../../molecules/Home/shortcut";

export default function HomeOrganism() {
  function RenderItem() {
    return (
      <View style={styles.contentContainer}>
        <Image
          width={dimensions().width - 32}
          height={(dimensions().width - 32) / 2}
          style={{ borderRadius: 16, overflow: "hidden" }}
          source={{
            uri: "https://www.gentlemansgazette.com/wp-content/uploads/2012/03/Bold-Horizontal-Stripe-Shirts-by-Etutee.jpg",
          }}
        />
      </View>
    );
  }

  const shortcutData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB4oT7gNktNBkw-By5NyxwVnfssvi0P7j4g&s",
      title: "Günün Tarifi",
    },
    {
      id: 2,
      image:
        "https://www.markettasarimi.com/wp-content/uploads/2021/12/komple-market-kurulumu.jpg",
      title: "Market Asistanım",
    },
    {
      id: 3,
      image:
        "https://www.bakambalaj.com.tr/images/kategoriler/toz-gida_95823.jpg",
      title: "Malzemelerim",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB4oT7gNktNBkw-By5NyxwVnfssvi0P7j4g&s",
      title: "Günün Tarifi",
    },
  ];
  return (
    <LinearGradient
      style={styles.mainStyle}
      colors={[Colors.primary, Colors.linearColor]}
      start={[0, 0.5]}
      end={[1, 0.5]}
    >
      <HomeHeader></HomeHeader>
      <ScrollView style={styles.container}>
        <Carousel
          width={dimensions().width - 32}
          height={(dimensions().width - 32) / 2}
          delay={3000}
          indicatorAtBottom={true}
          indicatorSize={12}
          indicatorColor="gray"
        >
          <RenderItem></RenderItem>
          <RenderItem></RenderItem>
          <RenderItem></RenderItem>
        </Carousel>
        <AppText
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: Colors.navy,
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          Popüler Kategoriler
        </AppText>
        <View style={{ height: 60 }}>
          <ScrollView horizontal={true}>
            <PopulerCategoryCard
              title={"Kahvaltı"}
              image={<CoffeeIcon></CoffeeIcon>}
            ></PopulerCategoryCard>
            <PopulerCategoryCard
              title={"Kahvaltı"}
              image={<CoffeeIcon></CoffeeIcon>}
            ></PopulerCategoryCard>
            <PopulerCategoryCard
              title={"Kahvaltı"}
              image={<CoffeeIcon></CoffeeIcon>}
            ></PopulerCategoryCard>
            <PopulerCategoryCard
              title={"Kahvaltı"}
              image={<CoffeeIcon></CoffeeIcon>}
            ></PopulerCategoryCard>
            <PopulerCategoryCard
              title={"Kahvaltı"}
              image={<CoffeeIcon></CoffeeIcon>}
            ></PopulerCategoryCard>
          </ScrollView>
        </View>
        <FlatList
          data={shortcutData}
          numColumns={2}
          renderItem={(item) => (
            <HomeShortcut
              uri={item.item.image}
              margin={item.index % 2 === 0}
              title={item.item.title}
            ></HomeShortcut>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
        {/* <View style={{ flexDirection: "row" }}>
          <HomeShortcut isOdd={true}></HomeShortcut>
          <HomeShortcut></HomeShortcut>
        </View>
        <View style={{ flexDirection: "row" }}>
          <HomeShortcut isOdd={true}></HomeShortcut>
          <HomeShortcut></HomeShortcut>
        </View> */}
      </ScrollView>
      <HomeArrowsIcon
        style={{ zIndex: 1, position: "absolute" }}
      ></HomeArrowsIcon>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    height: dimensions().height,
  },
  container: {
    marginTop: -10,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
    zIndex: 2,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  contentContainer: {
    width: dimensions().width - 32,
    height: (dimensions().width - 32) / 2,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    marginTop: 16,
    marginBottom: 10,
    fontStyle: "italic",
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    fontStyle: "italic",
    marginBottom: 12,
  },
});
