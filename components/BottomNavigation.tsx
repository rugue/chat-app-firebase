// components/BottomNavigation.tsx
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="person-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="people-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="camera-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Ionicons name="chatbubbles-outline" size={24} color="#4CAF50" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="settings-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10,
  },
  tab: {
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: "#4CAF50",
  },
});

export default BottomNavigation;
