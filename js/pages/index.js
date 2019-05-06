import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Page1 from "./page1";
import Page2 from "./page2";

const Pages = createStackNavigator({
    page1: {
        screen: Page1
    },
    page2: {
        screen: Page2
    }
})

export default createAppContainer(Pages)