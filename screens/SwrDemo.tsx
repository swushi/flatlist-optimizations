import React, { useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";

import useSWRInfinite from "swr/infinite";

import { flatten } from "lodash";


// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getKey = (pageIndex: number, previousPageData: any) => {
  return `https://dev.getibble.com/api/v2/widgets/playlists/explore?size=4&page=${
    pageIndex + 1
  }`;
};

const SwrDemo = () => {
  const {
    data: allData,
    error,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(getKey, fetcher, { refreshInterval: 2000 });

  const data = useMemo(() => {
      console.log('memo fire')
    if (!allData) return [];

    return flatten(flatten(allData).map((entry) => entry.data)); // needed to support our current pagination structure
  }, [allData]);

  if (error) return <Text>Error...</Text>;

  if (!allData) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, idx) => idx.toString()}
      ListFooterComponent={() => (isValidating ? <ActivityIndicator /> : null)}
      onEndReached={() => setSize(size + 1)}
      onEndReachedThreshold={0.05}
      renderItem={({ item }) => (
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
            marginVertical: 4,
          }}
        >
          <Text>{item.widget}</Text>
        </View>
      )}
    />
  );
};

export default SwrDemo;
