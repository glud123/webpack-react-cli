import * as home from './action-type';

// 清空
export const clearData = () => {
	return {
		type: home.CLEARDATA
	};
};
// 更新标题
export const updateTitle = (data) => {
	return {
		type: home.UPDATE,
		data
	};
};