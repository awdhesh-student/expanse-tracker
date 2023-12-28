import { ADD_EXPANSE, DELETE_EXPANSE, SERACH_EXPANSE } from "../action-types/expenses"

export const addExpanse = (data) => {
   return{
      type: ADD_EXPANSE,
      data
   }
}

export const deleteExpanse = (data) => {
   return{
      type: DELETE_EXPANSE,
      data
   }
}

export const searchExpanse = (query) => {
   return{
      type: SERACH_EXPANSE,
      query
   }
}