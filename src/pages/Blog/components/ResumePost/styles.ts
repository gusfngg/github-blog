import styled from "styled-components";

export const ResumePostContainer = styled.article`
   width: 100%;
   max-width: 416px;

   display: flex;
   flex-direction: column;
   gap: 1.25rem;
   cursor: pointer;

   background-color: ${props => props.theme.post};
   border: 2px solid transparent;
   border-radius: 10px;
   padding: 2rem;

   header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      h1 {
         color: ${props => props.theme.title};
         font-size: 1.25rem;
         line-height: 160%;

         max-width: 216px;
      }

      span {
         color: ${props => props.theme.span};
         font-size: 0.875rem;

      }
   }

   p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;

      line-height: 160%;
   }

   &:hover {
      border: 2px solid ${props => props.theme.label};
   }
`;