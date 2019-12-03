export const createCard = (card) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('cards').add({
      ...card,
      id: 'tar-3',
      lane: 'lane/bA3ByEUX9CMVSL76ocRB',
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      createdAt: new Date()

    }).then(() => {
      dispatch({
        type: 'CREATE_CARD',
        card
      })
    }).catch((err) => {
      dispatch({type: 'CREATE_CARD_ERROR', err})
    })
  }
}

export const updateCard = (card) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    console.log('card', card)
    //firestore.collection("cards").doc(card.uid).update({status: '3'}).then(() => {
    firestore.update({collection: 'cards', doc: card.id}, card).then(() => {
      dispatch({
        type: 'UPDATE_CARD',
        card
      })
    }).catch((err) => {
      dispatch({type: 'UPDATE_CARD_ERROR', err})
    });
  }
}


export const deleteCard = (card) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    firestore.delete({collection: 'cards', doc: card.id}, card).then(() => {
      dispatch({
        type: 'DELETE_CARD',
        card
      })
    }).catch((err) => {
      dispatch({type: 'DELETE_CARD_ERROR', err})
    });
  }
}