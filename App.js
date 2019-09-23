import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native'
import { createAppContainer  } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import AllDecks from './components/AllDecks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { styles, blue } from './components/styles'
import { Feather } from '@expo/vector-icons'

export const AppNavigator = createStackNavigator(
  {
    AllDecks: {
      screen: AllDecks
    },

    NewDeck: {
      screen: NewDeck
    },

    DeckDetail: {
      screen: DeckDetail
    },

    NewCard: {
      screen: NewCard
    },

    Quiz: {
      screen: Quiz
    }
  },

);


const BottomTabNav = createBottomTabNavigator(
  {
    'All Decks': {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Feather name='layers' size={18} color={tintColor}/>

      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: blue,
      },
    }
  }
)

const Navigator = createAppContainer(BottomTabNav);

class App extends React.Component {

  render() {
    return (
        <Navigator/>
    );
  }
}


export default Navigator;
