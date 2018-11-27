import * as home from "./action-type";
import renameActionType from "Store/renameActionType";
renameActionType(home, "Home");

let defaultState = {
    title: "首页"
};
// 首页数据
export const homeData = (state = defaultState, action = {}) => {
    switch (action.type) {
        case home.CLEARDATA:
            return { ...state, ...defaultState };
        case home.UPDATE:
            return { ...state, ...{ title: action.data } };
        default:
            return state;
    }
};
