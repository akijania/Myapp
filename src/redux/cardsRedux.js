import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearchResults = ({cards}, searchWord) => cards.filter(card => new RegExp(searchWord, 'i').test(card.title)) ;

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
export const createAction_moveCard = payload => ({ payload, type: MOVE_CARD });
// reducer



export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}