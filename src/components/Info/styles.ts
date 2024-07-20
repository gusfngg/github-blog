import styled from "styled-components";

export const InfoContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;

   text-decoration: none;
   line-height: 160%;
   color: ${props => props.theme.span};

   svg {
      color: ${props => props.theme.label};
      width: 18px;
      height: 18px;
   }
`;