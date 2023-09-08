export const FETCH_CATS_CATEGORIES_SUCCESS = 'FETCH_CATS_CATEGORIES_SUCCESS';
export const FETCH_CATS_BY_CATEGORY_SUCCESS = 'FETCH_CATS_BY_CATEGORY_SUCCESS';
export const FETCH_MORE_CATS_BY_CATEGORY_SUCCESS = 'FETCH_MORE_CATS_BY_CATEGORY_SUCCESS';
export const SET_CATEGORY = 'SET_CATEGORY';


export interface Cat {
    id: number;
    url: string;
    width: string;
    height: string;
}
export interface CatCategory {
    id: number;
    name: string;
}

export interface FetchCatsCategoriesSuccess {
    type: typeof FETCH_CATS_CATEGORIES_SUCCESS;
    payload: CatCategory[];
}
export interface FetchCatsSuccess {
    type: typeof FETCH_CATS_BY_CATEGORY_SUCCESS;
    payload: Cat[];
}
export interface FetchMoreCatsSuccess {
    type: typeof FETCH_MORE_CATS_BY_CATEGORY_SUCCESS;
    payload: Cat[];
}

export interface SetCategory {
    type: typeof SET_CATEGORY;
    payload: number;
}

export type CatsActionTypes = FetchCatsSuccess | FetchMoreCatsSuccess | FetchCatsCategoriesSuccess | SetCategory;