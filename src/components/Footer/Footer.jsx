import {
  FooterDiv,
  FooterDiv2,
  Titulo1,
  Titulo2,
  Paragrafo,
  Paragrafo2,
  ParagrafoDiv2,
  MidiaDiv,
  MidiaImg,
  Serenity,
  QrCodeImg,
  Buttons,
  ButtonContainer
} from './Footer'; 

import FacebookImage from '../../assets/img/simbolo-de-aplicativo-do-facebook.png'
import InstagramImage from '../../assets/img/instagram.png' 
import LinkedinImage from '../../assets/img/logotipo-do-linkedin.png'
import QrCode from '../../assets/img/qrcode.png';

const Footer = () => {
  return (
    <>
    <FooterDiv>     
      <div>
        <Titulo1>Contatos <br></br> ________________</Titulo1>
        <Paragrafo><b>Telefone:</b> (11) 3456-7980</Paragrafo>
        <Paragrafo><b>Email:</b> contato@serinity.com.br</Paragrafo>
        <Paragrafo>
          <b>Redes sociais:</b>
          <MidiaDiv>
            <MidiaImg src={FacebookImage} alt="Facebook" />
            <MidiaImg src={InstagramImage} alt="Instagram" />
            <MidiaImg src={LinkedinImage} alt="LinkedIn" />
          </MidiaDiv>
        </Paragrafo>
      </div>

      <div>
        <Titulo2>Sobre<br></br> ________________</Titulo2>
        <Paragrafo2><b>Dúvidas</b></Paragrafo2>
        <Paragrafo2><b>Planos</b></Paragrafo2>
        <Paragrafo2><b>Endereço:</b> Rua Haddock Lobo, 595</Paragrafo2>
      </div>
      <div>
      <Serenity>
          Serenity 
      </Serenity>
      <ButtonContainer>
      <Buttons> Entrar</Buttons>
      <Buttons>Cadastro</Buttons>
      </ButtonContainer>
      </div>
        <QrCodeImg src={QrCode} alt="QR Code" /> 
    </FooterDiv>
    <FooterDiv2>
        <ParagrafoDiv2> Política de privacidade </ParagrafoDiv2>
        <ParagrafoDiv2> Termos de Uso do Grupo de serviços Serenity </ParagrafoDiv2>
        <ParagrafoDiv2> Termos e condições do aplicativo  </ParagrafoDiv2>
        <ParagrafoDiv2> Termos de Uso Serenity, Inc </ParagrafoDiv2>
        <ParagrafoDiv2> @2024  Serenity </ParagrafoDiv2>
      </FooterDiv2>
    </>
  );
};

export default Footer;
