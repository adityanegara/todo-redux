import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isThemeDark: false,
    },
    reducers: {
        themeChangedToDark : (theme) =>{
            theme.isThemeDark = true;
        },
        themeChangedToLight : (theme) =>{
            theme.isThemeDark = false;
        }
    }
})

export const {themeChangedToDark, themeChangedToLight} = themeSlice.actions;
export default themeSlice.reducer;

//selector
export const getTheme = createSelector(
    state => state.entities.theme,
    (theme) => theme
)