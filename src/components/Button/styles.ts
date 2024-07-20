import styled from "styled-components";

export const ButtonContainer = styled.button`
   background: transparent;
   border: 2px solid transparent;

   a {
      color: ${props => props.theme.blue};
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;

      display: flex;
      gap: 0.5rem;
   }
   
   box-shadow: none;
   
   cursor: pointer;

   svg {
      width: 18px;
      height: 18px;
   }

   &:hover {
       border-bottom: 2px solid ${props => props.theme.blue};
   }
`;