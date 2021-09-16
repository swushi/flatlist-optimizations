import React from 'react'
import { FlatList } from 'react-native'
import StatefulItem from '../components/StatefulListItem';

import data from '../data/MOCK_DATA';

interface Props {
    
}

const MonoStateUpdateList = (props: Props) => {
    return (
        <FlatList 
            data={data}
            renderItem={({item}) => <StatefulItem id={item.id} /> }
        />
    )
}

export default MonoStateUpdateList
