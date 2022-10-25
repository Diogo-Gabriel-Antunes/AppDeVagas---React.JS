import {
  Box,
  ListItem,
  UnorderedList,
  Image,
  Container,
  Heading,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor="#000">
      <Box display="flex" padding="64px" alignItems="center">
        <UnorderedList
          listStyleType="none"
          color="#FFF"
          fontSize="12px"
          width="160px"
          margin="0 200px 0px 370px"
          paddingBottom="46px"
        >
          <ListItem>
            <Image
              width={'75px'}
              height={'75px'}
              src="/assets/images/logo/LogoGenerica.webp"
            />
          </ListItem>
          <ListItem margin="24px 0px">+55 (99) 9999-9999</ListItem>
          <ListItem margin="24px 0px">
            Rod. José Carlos Daux - SC 401, 4120 - km 4, Bairro Saco Grande -
            Florianópolis - SC CEP 88032-005.
          </ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType="none"
          color="#FFF"
          fontSize="12px"
          paddingBottom="131px"
          marginRight="100px"
        >
          <ListItem>
            <Heading fontSize="14px">PARA PROFISSIONAIS TECH</Heading>
          </ListItem>
          <ListItem margin="24px 0px">Blog de TI</ListItem>
          <ListItem margin="24px 0px">Calcular Salário de Programador</ListItem>
          <ListItem>Vagas de tecnologia</ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType="none"
          color="#FFF"
          fontSize="12px"
          paddingBottom="180px"
          marginRight="100px"
        >
          <ListItem>
            <Heading fontSize="14px">PARA EMPRESAS</Heading>
          </ListItem>
          <ListItem margin="24px 0px">Blog de RH Tech</ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType="none"
          color="#FFF"
          fontSize="12px"
          marginRight="100px"
        >
          <ListItem>
            <Heading fontSize="14px"> A EMPRESA</Heading>
          </ListItem>
          <ListItem margin="24px 0px">Sobre a empresa</ListItem>
          <ListItem margin="24px 0px">Trabalhe empresa</ListItem>
          <ListItem margin="24px 0px">Suporte</ListItem>
          <ListItem margin="24px 0px">Políticas de privacidade</ListItem>
          <ListItem margin="24px 0px">Termos de uso</ListItem>
          <ListItem margin="24px 0px">Portal LGPD</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Footer;
