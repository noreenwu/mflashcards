# Project: Mobile Flashcards
# Noreen Wu
# Udacity React: September 2019

# Overview

This Native React app allows the user to create decks of flashcards that s/he can then use
as a study aide. Cards, consisting of a question and an answer, may be added to a deck.
The user can then quiz him/herself, as each previously entered question and answer in the
selected deck is shown. The user receives a score at the end of each deck's quiz, based
on whether his/her answers match the ones that were entered into the deck. The user may
retake the quizzes as often as s/he likes.


## Installation

This project is being submitted through the github repo, located at
https://github.com/noreenwu/flashcards. It should require only npm install and npm start to launch.
However, there was an issue in my environment which required that I run "expo start -c"
in order to import the "expo" libraries.

This has been tested in an ios simulator and on an actual Android Pixel 3 via Expo.

## Implementation Notes

There are 4 main Views in the application:

  o the Home screen (All Decks)
  o the Deck Detail screen (individual Deck view)
  o the New Deck screen (to create a new Deck)
  o the Add Card screen (to add a card to a specific Deck)
  o the Quiz Me screen (to run through the cards of a Deck, allowing the user to grade him/herself)

There are 2 error Views:

  o there are no Decks in the app to display
  o there are no Cards in this Deck from which to run a quiz

The notification reminder is scheduled for 8pm the next day. It is turned off for the day if
the user utilizes the Quiz -- even if she does not finish the Quiz.

Two starter decks are provided at App-startup (React, JavaScript). When the App loads, these
are written (they are defined as a JavaScript object) and then read from AsyncStorage. Thereafter,
changes made (new decks, cards added to decks, deleted decks), are made both to the app's primary state
(in the AllDecks component) and to AsyncStorage.

A TabNavigator contains a single link which can return the user Home (the All Decks screen)
from any point in the App. A StackNavigator allows the user to retrace her steps using
a Back button.

Navigation between screens primarily occurs through the Stack Navigator. If an entity (TouchableOpacity or
ListItem) is clicked ("pressed"), then the Navigator's navigation.navigate brings the user to the specified screen,
defined in StackNavigator. It is through the onPress method that properties, such as objects
and functions from top-level components (AllDecks) that need to be invoked or updated to maintain state,
are passed from one View to another. The bulk of the application's state is kept in AllDecks,
while small pieces of the state, such as a single deck, may be passed down for display or updating by
child components, like NewCard.


## Required Files

index.js - reads from app.json to get the Application name and register it in the AppRegistry

App.js - contains the StackNavigator and the BottomTabNavigator

components/AllDecks.js - topmost component concerned with the content of the app, and is the first
      component rendered by StackNavigator. Contains all of the data loading and saving functions.

components/DeckListItem.js - a helper of AllDecks, displays a single Deck's name and number of cards on
      the main home screen

components/DeckDetail.js - this is a home screen for a specific Deck, listing name of Deck, number of
      cards and presenting options to Add a Card to the Deck, begin a Quiz, or to Delete the Deck.

components/NewCard.js - this screen allows the user to enter the information for a quiz card: a question
       and an answer. Submitting the question is a call to an update function which lives in AllDecks,
       with the application state. Local state for this component manages the input fields on this screen.

components/Quiz.js - this is the top-level component for the Quiz. It utilizes QuizCard to kick off
       a Quiz

components/QuizCard.js - this component contains most of the logic behind running the quizzes. It contains
       state to keep track of which question the user is on (idx), and mode to determine if the question, answer
       or results should be shown. It is also where the notification (reminder to study every day) is
       reset: that is, if the user even begins a Quiz, s/he is given credit for trying to study and
       the notification will not show for that day but will be set up for the same time the next day (8pm).

components/QuizResults.js - this component is responsible for rendering the number of questions the user
       got right, and the percentage correct. It is only called if the mode in QuizCard is set to
       RESULTS.

components/NewDeck.js - the button to access this is located on the main screen. When used, this component
       renders an input field and submit button, which invokes a function, createNewDeck, that actually
       lives in AllDecks, where all the data is managed.


components/CardsInDeck - this is just a stateless functional component that writes out how many
       cards are in a deck. DeckDetail and Quiz utilize this same description, "This deck contains {} cards".


components/styles.js - contains all the styling for the App. Some extra changes (like button color) are
       merged in individually within the components, but this central place for the majority of the
       styling ensures consistent color and size of buttons and titles.


utils/helpers.js

utils/api.js
