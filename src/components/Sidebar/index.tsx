import { CatCategory } from "../../redux/actions/types";
import styled from "styled-components";

interface SideBarProps {
    categories: CatCategory[];
    onCategorySelect: (id: number) => void;
}
export const Sidebar = ({ categories, onCategorySelect }: SideBarProps) => {
    return (
        <AsideStyled>
            <ul>
                {categories.map(category => (
                    <ListItemStyled key={category.id} onClick={() => onCategorySelect(category.id)}>
                        {category.name.toUpperCase()}
                    </ListItemStyled>
                ))}
            </ul>
        </AsideStyled>
    );
}

const AsideStyled = styled.aside`
  width: 250px;
  height: 100vh;
  border-right: 1px solid #ddd;
  
`;

const ListItemStyled = styled.li`
    cursor: pointer;
    padding: 10px 20px;
    background-color: white;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: darkorange;
      color: white;
    }
`;
