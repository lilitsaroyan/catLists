import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

import styled from "styled-components";

interface ContentProps {
    onLoadMore: () => void;
}

export const Content= ({ onLoadMore }: ContentProps) => {
    const {
        cats: catsList,
    } = useSelector((state: RootState) => state.cats);

    return catsList.length > 0 ? (

        <WrapperStyled>
            <SectionStyled>
                {catsList.map(cat => (
                    <img src={cat.url} key={cat.id} width={200} height={200} />
                ))}
            </SectionStyled>
            <ButtonStyled onClick={onLoadMore}>Load more</ButtonStyled>
        </WrapperStyled>
    ) : (
        <PlaceholderStyled><span>Please choose a category</span></PlaceholderStyled>
    );
}

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  align-items: center;
`;

const SectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 30px;
`;

const ButtonStyled = styled.button`
    width: 200px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: orange;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: darkorange;
    }
`;

const PlaceholderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  & span {
      color: gray;
      font-size: 30px;
      font-weight: bold;
  }
`;