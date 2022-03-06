import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const sortBySlice = createSlice({
    name: 'sortBy',
    initialState: {
        sortBy: 'all',
    },
    reducers: {
        sortByChangedToActive : (sortBy) =>{
            sortBy.sortBy = 'active';
        },
        sortByChangedToCompleted : (sortBy) =>{
            sortBy.sortBy = 'completed'
        },
        sortByChangedToAll : (sortBy) =>{
            sortBy.sortBy = 'all'
        }
    }
})

export const {sortByChangedToActive, sortByChangedToAll, sortByChangedToCompleted} = sortBySlice.actions;
export default sortBySlice.reducer;

//selector
export const getSortBy = createSelector(
    state => state.entities.sortBy,
    (sortBy) => sortBy.sortBy
)