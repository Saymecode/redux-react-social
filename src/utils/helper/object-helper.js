export const updateItemInArray = (items, itemId, objectPropName, newObjProps) => {
  return items.map(item => {
    if (item[objectPropName] === itemId) {
      return {...item, ...newObjProps}
    }
    return item
  })
}