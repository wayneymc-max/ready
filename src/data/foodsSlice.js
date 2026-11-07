import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allFoods: [],
    filteredFoods: [],
    searchTerms: "",
    selectedColor: null,
    showDialog: true,
    isLoading: true,
    oneFood: null,
    isOpen: false,
    fromSearch: false,
    fromColor: false
};

const foodsSlice = createSlice({
    name: "foods",
    initialState,
    reducers: {
        setOneFood: (state, action) => {
            state.oneFood = action.payload;
        },
        setFoods: (state, action) => {
            state.allFoods = action.payload;
            // state.filteredFoods = action.payload;
            state.isLoading = false;
        },

        setSearchTerms: (state, action) => {
            state.searchTerms = action.payload;
            state.selectedColor = null;
            state.isOpen = false;
            state.fromSearch = true;
            state.fromColor = false;
            state.filteredFoods = state.allFoods.filter(food =>
                food.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },

        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
            state.searchTerms = "";
            state.fromColor = true;
            state.fromSearch = false;
            let result = [...state.allFoods];


            result = result.filter(
                food => food.overallFodmapLevel?.toLowerCase() === state.selectedColor
            );

            state.filteredFoods = result;
        },

        clearColors: (state) => {
            state.searchTerms = "";
            state.selectedColor = null;
            // state.isOpen = false;
            state.filteredFoods = state.allFoods;
        },
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
        },
        showDialog: (state) => {
            state.showDialog = true;
        },
        closeDialog: (state) => {
            state.showDialog = false;
        }
    },
});

export const {
    setFoods,
    setSearchTerms,
    setSelectedColor,
    clearColors,
    filteredFoods, searchTerms, selectedColor, showDialog, closeDialog, isLoading, setOneFood, oneFood, toggleSidebar, isOpen, fromSearch, fromColor
} = foodsSlice.actions;

export default foodsSlice.reducer;