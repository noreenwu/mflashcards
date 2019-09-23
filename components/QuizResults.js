import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types'
import { styles } from './styles'

const RESULTS = 'results'

class QuizResults extends Component {


  render() {
    const { numQuestions, numCorrect } = this.props
    const percentage = Math.round((numCorrect * 100)/numQuestions);

    return (
      <View>
        <Text style={Object.assign({}, styles.subtitleMediumPartialTop, {fontStyle: 'italic'})}>How Did You Do?</Text>
        <Text style={styles.center}>You got {numCorrect} out of {numQuestions} correct or {percentage}% correct. </Text>
      </View>
    )

  }
}

QuizResults.propTypes = {
  numCorrect: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
}

export default QuizResults
