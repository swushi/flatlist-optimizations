import React from 'react'
import { FlatList } from 'react-native'
import StatelessListItem from '../components/StatelessListItem';

import data from '../data/MOCK_DATA';

interface Props {
    
}

const StatelessList = (props: Props) => {
    return (
        <FlatList 
            data={data}
            renderItem={({item}) => <StatelessListItem {...item} />}
        />
    )
}

export default StatelessList
