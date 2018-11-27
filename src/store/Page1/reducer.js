import * as page1 from "./action-type";
import renameActionType from "Store/renameActionType";
renameActionType(page1, "Page1");

let defaultState = {
    title: "页面1"
};
// 数据
export const page1Data = (state = defaultState, action = {}) => {
    switch (action.type) {
        case page1.CLEARDATA:
            return { ...state, ...defaultState };
        case page1.UPDATE:
            return { ...state, ...{ title: action.data } };
        default:
            return state;
    }
};
