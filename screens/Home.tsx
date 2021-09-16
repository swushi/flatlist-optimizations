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
                onPress={() => navigation.navigate('MonoStateUpdateList')}
            />
        </View>
    )
}

export default Home
