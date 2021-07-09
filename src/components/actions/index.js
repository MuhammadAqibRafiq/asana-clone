export const Add = (data) => {
    return {
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const Delete = (id) => {
    return {
        type: "DELETE",
        id
    }
}

export const Remove = () => {
    return {
        type: "REMOVE",
        
    }
}