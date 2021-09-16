import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import data from "../data/MOCK_DATA";
import { Model } from "../data/model";

const StatefulItem = ({ id: providedId }: { id: number }) => {
  const [state, setState] = useState<Model>();

  useEffect(() => {
    setTimeout(() => {
      setState(data.find(({ id }) => id === providedId));
    }, 100);
  }, []);

  if (!state) return null;

  const { first_name, last_name, message, image } = state;

  return (
    <View
      key={providedId}
      style={{
        marginBottom: 25,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 12,
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

export default StatefulItem;
