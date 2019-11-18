import React from 'react'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', metadata: {sha: 'opa'}},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', opa: 'opa', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

export default class App extends React.Component {

  handleCardClick(cardId, metadata) {
    console.log(metadata)
  }

  render() {
    return  ( 
      <Board
        onCardClick={this.handleCardClick}
        style={{backgroundColor: '#eaeff1'}}
        laneStyle={{backgroundColor: '#4e8094', color: '#fff', span: { fontWeight: 400}}}
        data={data}
      />
    )
  }
}