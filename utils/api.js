import { AsyncStorage } from 'react-native'


const DECKS_STORAGE_KEY = 'Flashcards:decks';

// these are starter decks, so the app loads with some data. 
let decks = {
  'Latin Roots and Prefixes': {
    title: 'Latin Roots and Prefixes',
    questions: [
      {
        question: 'mit, miss',
        answer: 'send'
      },
      {
        question: 'nounce, nunce',
        answer: 'call'
      },
      {
        question: 'port',
        answer: 'carry'
      }
    ]
  },
  'Science: Evolution': {
    title: 'Science: Evolution',
    questions: [
      {
        question: 'What is a fossil?',
        answer: 'Traces or imprints of living things, such as animals, plants, bacteria and fungi that are preserved in rock'
      },
      {
        question: 'What is geologic timescale?',
        answer: 'A calendar used to outline the history of life on Earth'
      },
      {
        question: 'What are plate tectonics?',
        answer: 'Wilson\'s theory of how huge pieces of crust move around the globe'
      }
    ]
  },
  Osmosis: {
    title: 'Osmosis',
    questions: [
      {
        question: 'pinocytosis',
        answer: 'the ingestion of liquid into a cell by the budding of small vesicles from the cell membrane'
      },
      {
        question: 'phagocytosis',
        answer: 'A type of endocytosis in which a cell engulfs large particles or whole cells'
      }
    ]
  }
}



export function initDecks() {
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
      AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(results => JSON.stringify(results))
        .then(results => console.log("results of initDecks", results))
      });
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => JSON.parse(results))
}


export function _deleteDeck(deckTitle) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckTitle] = undefined

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data), () => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
          console.log(result)
        })
      })
  })
}


export function _saveDeck(deck) {
  console.log("_saveDeck")

  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck), () => {
    AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
      console.log(result);
    });
  });
}
