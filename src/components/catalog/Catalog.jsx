import React from 'react'
import Board from 'react-trello'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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

const Catalog = (props) => {

  const { cards, auth, lanes } = props;

  console.log('lanes :', lanes && lanes);

  const data = {
    lanes: lanes && lanes.map(lane => {
      return { ...lane, cards: cards.filter(card => card.lid === lane.id) }
    })
  }
  
  console.log('data :', data);

  const handleCardClick = (cardId, metadata) => {
    console.log(metadata)
  }

  return (
    <React.Fragment>
      { 
        lanes && (
          <Board
            onCardClick={handleCardClick}
            style={{ backgroundColor: '#eaeff1' }}
            laneStyle={{ backgroundColor: '#4e8094', color: '#fff', span: { fontWeight: 400 } }}
            data={data}
          />
        )
      }
  
    </React.Fragment>
    
  )
}

const mapStateToProps = (state) => {
  console.log('state :', state);
  return {
    // projects: state.firestore.ordered.projects,
    cards: state.firestore.ordered.cards,
    lanes: state.firestore.ordered.lanes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: 'projects' },
    { collection: 'cards' },
    { collection: 'lanes' }
  ])
)(Catalog)