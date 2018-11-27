import * as page1 from './action-type';

// 保存图片地址
export const clearData = () => {
	return {
		type: page1.CLEARDATA
	};
};
// 更新首页
export const updateTitle = (data) => {
	return {
		type: page1.UPDATE,
		data
	};
};