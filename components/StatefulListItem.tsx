import React from "react";
import { View, Text, Image } from "react-native";
import { Model } from "../data/model";

const StatelessListItem = ({ first_name, last_name, id, message, image }: Model) => {
  return (
    <View
      key={id}
      style={{
        marginBottom: 25,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ height: 50, width: 50, borderRadius: 100, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{first_name}</Text>
          <View style={{ height: 3 }} />
          <Text style={{ fontSize: 15, fontWeight: "400" }}>{last_name}</Text>
        </View>
      </View>
      <View style={{ height: 10 }} />
      <Text style={{ fontSize: 15, fontWeight: "400" }}>{message}</Text>
    </View>
  );
};

export default StatelessListItem;
