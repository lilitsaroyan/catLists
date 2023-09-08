import {
    Cat,
    CatCategory,
    CatsActionTypes,
    FETCH_CATS_BY_CATEGORY_SUCCESS,
    FETCH_CATS_CATEGORIES_SUCCESS,
    FETCH_MORE_CATS_BY_CATEGORY_SUCCESS,
    SET_CATEGORY,
} from '../actions/types';

interface CatsState {
    cats: Cat[];
    catCategories: CatCategory[],
    selectedCategory: number | null,
}

const initialState: CatsState = {
    cats: [],
    catCategories: [],
    selectedCategory: null
};

const CatsReducer = (state = initialState, action: CatsActionTypes): CatsState => {
    switch (action.type) {
        case FETCH_CATS_CATEGORIES_SUCCESS:
            return {
                ...state,
                catCategories: action.payload,
            };
        case FETCH_CATS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                cats: action.payload,
            };
        case FETCH_MORE_CATS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                cats: [...state.cats, ...action.payload],
            };
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            };
        default:
            return state;
    }
};

export default CatsReducer;
