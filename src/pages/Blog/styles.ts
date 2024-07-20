import styled from 'styled-components';

export const BlogContainer = styled.div`
   width: 100%;
   max-width: 864px;
   margin: -5rem auto 0;
`;

export const SearchContainer = styled.form`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;

   margin-top: 4.5rem;

   header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
         font-size: 1.125rem;
         font-weight: bold;
         line-height: 160% ;
         color: ${props => props.theme.subtitle};
      }

      span {
         font-size: 0.875rem;
         color: ${props => props.theme.span};
      }
   }

   input {
      padding: 0.75rem 1rem;
      background-color: ${props => props.theme.input};
      border: 1px solid ${props => props.theme.border};
      color: ${props => props.theme.text};
      border-radius: 6px;
      
      &::placeholder {
         color: ${props => props.theme.label};
      }
   }
`;

export const Posts = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;

   margin-top: 3rem;
   margin-bottom: 5rem;
`;