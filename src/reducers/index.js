import {CREATE_TASK, EDIT_TASK, REMOVE_TASK} from "../actions/types";

const initialState = [
    // {
    //     id: 1,
    //     title: "Do dinner",
    //     description: "Do dinner at the 18:00",
    //     status:"Completed"
    // },
    // {
    //     id: 2,
    //     title: "Do breakfast",
    //     description: "Do breakfast at the 8:00",
    //     status:"In Progress"
    // },
    // {
    //     id: 3,
    //     title: "Do spaghetti",
    //     description: "Do breakfast at the 8:00",
    //     status:"Planned"
    // },
];

const tasks = (state = {tasks: initialState}, action) => {
    const {payload} = action;
    switch (action.type){
        case EDIT_TASK:{
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task
                })
            };
        }
        case CREATE_TASK:{
            return {
                tasks: state.tasks.concat(action.payload)
            };
        }
        case REMOVE_TASK:{
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        default:
            return state;
    }
};

export default tasks;