export const removeItem = (itemType, id) => (
    {
        type: 'REMOVE_ITEM',
        payload: {
            itemType,
            id
        }
    }
)

export default removeItem