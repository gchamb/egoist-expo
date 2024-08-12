import Button from "@/components/ui/button";
import EgoistView from "@/components/ui/egoist-view";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";

export default function LandingPage() {
  return (
    <EgoistView className="justify-center">
      <View className="mt-20 w-[200px] rounded-2xl h-[200px] mx-auto  justify-center items-center">
        <Image
          source={require("../assets/images/egoist-logo.png")}
          width={200}
          height={200}
        />
      </View>
      <View className="flex-1 mb-20 w-11/12 h-4/5 mx-auto justify-end">
        <Button text="Start Journey" onPress={() => router.push("/auth")} />
      </View>
    </EgoistView>
  );
}
