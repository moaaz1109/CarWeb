import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import '../index.css';


const Container = styled.div`
margin-top:-3px;
  display: flex;
   background-color:var(--orange);

`;

const Left = styled.div`
margin-left:260px;
  flex: 1;
  display: flex;
  margin-top:19px;
  flex-direction: column;
  padding: 5px;

  @media only screen and (max-width: 380px) {
    margin-left:40px;
    flex: 1;
    font-weight:600;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size:11px;
       }
`;



const Center = styled.div`
  flex: 1;
  padding: 20px;

`;

const Title = styled.h3`
  margin-bottom: 30px;

  color:var(--whi);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  margin-right:220px;
  padding: 20px;

  


`;

const ContactItem = styled.div`
  margin-bottom: 30px;
 
  display: flex;
  align-items: center;

  color: var(--soc);
  @media only screen and (max-width: 380px) {
  
    margin-left:-30px;
    padding: 0px;
    font-size:11px;
       }
`;


const Footer = () => {
  return (
    <Container>
  

    <Left>
        <Title>Social Media</Title>
        <ContactItem>
        <Facebook style={{marginRight:"10px"}} /> Facebook
        </ContactItem>
        <ContactItem>
        <Instagram  style={{marginRight:"10px"}}/> Instgram
        </ContactItem>
        <ContactItem>
        <Twitter style={{marginRight:"10px"}} />  Twitter
        </ContactItem>
       
        </Left>


        <Center>
        <Title></Title>
        <List>
         
         
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Sudan , Khartoum 123 Street
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 00249127
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> moaaz@gmail.com
        </ContactItem>
       
      </Right>
    </Container>
  );
};

export default Footer;
