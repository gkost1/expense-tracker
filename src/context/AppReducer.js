//Reducer specifies application state changes in response to certain actions

export default (state, action) => {
    //action.type is the category... i.e. deleting or adding
    switch(action.type) { 
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        default:
            return state
    }
}