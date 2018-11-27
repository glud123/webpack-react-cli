/**
 * 重命名action-type
 * @param {Object} actionTypeObj
 * @param {String} prefix
 */
const renameActionType = (actionTypeObj, prefix) => {
    for (const key in actionTypeObj) {
        if (actionTypeObj.hasOwnProperty(key)) {
            actionTypeObj[key] = `${prefix}${actionTypeObj[key]}`;
        }
    }
};
export default renameActionType;
