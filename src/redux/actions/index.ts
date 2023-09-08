import axios from 'axios';
import { Dispatch } from 'redux';

import {
    Cat,
    CatCategory,
    SetCategory,
    FetchCatsSuccess,
    FetchMoreCatsSuccess,
    FetchCatsCategoriesSuccess,
    SET_CATEGORY,
    FETCH_CATS_CATEGORIES_SUCCESS,
    FETCH_CATS_BY_CATEGORY_SUCCESS,
    FETCH_MORE_CATS_BY_CATEGORY_SUCCESS
} from './types';

export const fetchCatsSuccess = (cats: Cat[]): FetchCatsSuccess => ({
    type: FETCH_CATS_BY_CATEGORY_SUCCESS,
    payload: cats,
});
export const fetchMoreCatsSuccess = (cats: Cat[]): FetchMoreCatsSuccess => ({
    type: FETCH_MORE_CATS_BY_CATEGORY_SUCCESS,
    payload: cats,
});
export const fetchCatsCategoriesSuccess = (categories: CatCategory[]): FetchCatsCategoriesSuccess => ({
    type: FETCH_CATS_CATEGORIES_SUCCESS,
    payload: categories,
});
export const setCategory = (category: number): SetCategory => ({
    type: SET_CATEGORY,
    payload: category,
});

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchCatsCategories = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/categories');
            dispatch(fetchCatsCategoriesSuccess(response.data));
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };
};
export const fetchCats = (limit: number, category = 1) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${API_URL}?limit=${limit}&category_ids=${category}`);
            dispatch(fetchCatsSuccess(response.data));
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };
};
export const fetchMoreCats = (limit: number, category: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${API_URL}?limit=${limit}&category_ids=${category}`);
            dispatch(fetchMoreCatsSuccess(response.data));
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };
};
