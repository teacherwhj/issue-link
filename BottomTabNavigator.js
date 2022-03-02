import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionScreen from './transaction';
import SearchScreen from './search';

const Tab= createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen> name= "Transaction" component = {TransactionScreen}  </Tab.Screen>
                    <Tab.Screen> name= "Search" component={SearchScreen}  </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}