import styled from "styled-components";
import { popularCars } from "../data";
import Car from "./Car";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Cars = () => {
  return (
    <Container>
      {popularCars.map((item) => (
        <Car item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cars;
