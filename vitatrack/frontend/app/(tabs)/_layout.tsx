import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="reports" />
      <Tabs.Screen name="addHabit" />
      <Tabs.Screen name="friends" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
