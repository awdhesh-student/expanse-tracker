import {
  ADD_EXPANSE,
  DELETE_EXPANSE,
  SERACH_EXPANSE,
} from "../action-types/expenses";

const initialList = () => {
  const list = localStorage.getItem("expanse-list");

  let expanse = [];
  if (list) {
    expanse = JSON.parse(list);
  }
  return expanse;
};
const initialState = {
  expanseList: initialList(),
  query: "",
};

export const expanseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_EXPANSE: {
      localStorage.setItem(
        "expanse-list",
        JSON.stringify(...state.expanseList, actions.data)
      );
      return {
        ...state,
        expanseList: [...state.expanseList, actions.data],
      };
    }
    case DELETE_EXPANSE: {
      const { data } = actions;
      const updatedList = state.expanseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expanse-list", JSON.stringify(updatedList));
      return {
        ...state,
        expanseList: updatedList,
      };
    }
    case SERACH_EXPANSE: {
      return {
        ...state,
        query: actions.query,
      };
    }
    default:
      return state;
  }
};
