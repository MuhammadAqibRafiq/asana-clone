const initialData = {
    projectList: []
} 

const todoReducer = ( state=initialData, action ) => {

    switch(action.type)  {
        case 'ADD' :

        const {id,data} = action.payload;

        return {
            ...state,
            projectList: [
                ...state.projectList,
                {
                    id:id,
                    data:data
                }
            ]
        }

        case 'DELETE' :

        const newList = state.projectList.filter((list) => list.id !== action.id )

        return {
            ...state,
           projectList: newList
        }


        case 'REMOVE' :

        return {
            ...state,
           projectList: []
        }


        default : return state
    }
}
export default todoReducer;