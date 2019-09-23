import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import QuizCard from './QuizCard'
import { styles } from './styles'
import CardsInDeck from './CardsInDeck'


class Quiz extends Component {

  render() {
    const { params } = this.props.navigation.state;
    const { deck } = this.props.navigation.state.params;

    const numQuestions = deck.questions.length

    if (deck.questions.length === 0) {
        return (
           <View>
              <Text style={styles.subtitleMedium}>{deck.title}</Text>
              <Text style={styles.center}>Sorry, there aren't any cards in the {deck.title} deck. Create some cards first!</Text>
           </View>
        )
    }


    return (
        <View>
           <Text style={styles.subtitleMediumPartialTop}>{deck.title}</Text>
           <CardsInDeck numQuestions={numQuestions}/>

           <QuizCard deck={deck}
                     navFxn={this.props.navigation.navigate}
                     deleteDeck={params.deleteDeck}
                     deck={deck} />


        </View>

    );
  }
}


export default Quiz
