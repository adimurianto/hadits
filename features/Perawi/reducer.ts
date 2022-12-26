const initialState = {
    perawi: 'bukhari'
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "updatePerawi":
            return {
                perawi: action.perawi,
            }
        default: 
            return state    
    }
}

export default reducer;