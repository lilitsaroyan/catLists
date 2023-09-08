import React, { useEffect } from 'react';
import { fetchCats, fetchMoreCats, fetchCatsCategories, setCategory, setLimit } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import styled from 'styled-components';

const LIMIT_DEFAULT = 10;

function App() {
  const {
    catCategories,
    selectedCategory,
  } = useSelector((state: RootState) => state.cats);

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCatsCategories());
  }, [dispatch]);

  const handleCategorySelection = (id: number) => {
    // @ts-ignore
    dispatch(fetchCats(LIMIT_DEFAULT, id))
    dispatch(setCategory(id))
  }

  const handleLoadMore = () => {
    // @ts-ignore
    dispatch(fetchMoreCats(LIMIT_DEFAULT, selectedCategory))
  }

  return (
    <WrapperStyled>
      <Sidebar categories={catCategories} onCategorySelect={handleCategorySelection} />
      <Content onLoadMore={handleLoadMore} />
    </WrapperStyled>
  );
}

const WrapperStyled = styled.div`
  display: flex;
  align-items: flex-start;
`;
export default App;
