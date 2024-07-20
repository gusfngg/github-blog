import styled from "styled-components";

export const InfoInssueContainer = styled.div`
   width: 100%;
   max-width: 54rem;
   padding: 2rem;

   margin: -5rem auto;
   position: relative;
   z-index: 8;

   background-color: ${props => props.theme.profile};

   h1 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 130%;
      color: ${props => props.theme.title}
   }

   header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      button {
         background: transparent;
         border: none;
         text-transform: uppercase;
         font-weight: bold;

         display: flex;
         align-items: center;
         gap: 0.5rem;
         color: ${props => props.theme.blue};
         border: 2px solid transparent;

         cursor: pointer;


      }
   }
`;

export const SocialInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;

   margin-top: 1rem;
`;