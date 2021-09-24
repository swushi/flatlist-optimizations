import React from 'react'
import { View, Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/core'
import { UseNavigationProp } from '../navigation/AppNavigator'

interface Props {
    
}

const Home = (props: Props) => {
    const navigation = useNavigation<UseNavigationProp>()
    return (
        <View>
            <Button 
                title="Stateless List (Preferred)"
                onPress={() => navigation.navigate('StatelessList')}
            />
            <Button 
                title="Single State Update Per Item"
                onPress={() => navigation.navigate('MonoStateUpdateList')}
            />
            <Button 
                title="SWR Demo"
                onPress={() => navigation.navigate('SwrDemo')}
            />
        </View>
    )
}

export default Home
