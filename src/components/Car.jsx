
  import styled from "styled-components";
  import './car.css'

  
  const Container = styled.div`
    flex: 2;
    margin: 5px;
    min-width: 325px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1%;
    background-color: var(--blue);
    position: relative;
  
  
  
    @media only screen and (max-width: 380px) {
      min-width: 140px;
      height: 250px;
         }
  `;
  




  const Image = styled.img`
  width:98%;
    height: 98%;
   cursor:pointer;
    z-index: 2;
  
    @media only screen and (max-width: 380px) {
      width: 120px;
      height: 190px;
         }
  
  `;


  
  
  const Car = ({ item }) => {
    return (
      <Container>
     
        <Image src={item.img} />
  
      </Container>
    );
  };
  
  export default Car;
  