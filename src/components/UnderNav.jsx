

import styled from "styled-components";



import '../index.css';

const Container = styled.div`

  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 50vh;
       }
 
`;


const Wrapper = styled.div`
  
  display: flex;
  min-height: 54vh;
  background:url(/img/back.jpg) no-repeat ;

  background-position: center;
  display: grid;
  place-items: center;
  padding-top: 15rem;
  background-repeat: no-repeat;
  background-size: 100%;

  @media only screen and (max-width: 380px) {
    height: 100%;
       }
`;


const InfoContainer = styled.div`
  flex: 1;
  margin-top:120px;
`;

const Title = styled.h1`
font-size: 43px;
background-color:var(--org);
  color:var(--pp);
`;







const UnderNav = () => {
 

  return (
    <Container>
     
      
      <Wrapper>
      <InfoContainer>
              <Title>LAMBORGINY 2021</Title>
              
          
            </InfoContainer>
      
        
              <button className="btn-nav">
                Detailes
              </button>
   
        
      
      </Wrapper>
    
       
    </Container>
  );
};

export default UnderNav;
