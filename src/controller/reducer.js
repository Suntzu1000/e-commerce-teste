import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type"

const initialStore = {
    carts: [],
}


export const cartReducer = (state = initialStore, action ) => {
    switch (action.type) {
        case ADD_CART: 
       /* return{
            ...state,
            carts: [...state.carts,action.payload],
        }*/
        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id) 
        if(itemIndex >= 0){
            state.carts=[itemIndex].qty += 1
        }else{
            const temp = {...action.payload, qty: 1}
         return{
            ...state,
            carts: [...state.carts, temp],
        }
        
    }break
    case REMOVE : 
        const data = state.carts.filter((el) => el.id !== action.payload)
        return{
            ...state,
            carts: data,
        }

        case REMOVE_ITEM : 
        const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload)
        if(state.carts[itemIndex_desc].qty >= 1){
            const delete_item = (state.carts[itemIndex].qty -= 1)
            return{
                ...state,
                carts: [...state.carts],
            }}
            else if(state.carts[itemIndex_desc].qty === 1){
                const data = state.carts.filter((el) => el.id !== action.payload.id )
                return{
                    ...state,
                    carts: data,
                }
        }break
        default: 
        return state
    }
}