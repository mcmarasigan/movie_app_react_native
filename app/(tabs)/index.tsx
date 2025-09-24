import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, router } from "expo-router";
import { ScrollView, Text, View, Image } from "react-native";
import SearchBar from "@/components/Searchbar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%", 
        paddingBottom: 10 }}>
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

            <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search for a movie"
            />
            </View>
      </ScrollView>
    </View>
  );
}
