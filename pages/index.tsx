import type { NextPage } from 'next';
import NavBar from '../src/components/NavBar';
import { Button, Box, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import Footer from '../src/components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Box
        bgColor={'black'}
        display="flex"
        color="#FFF"
        padding="144px 200px"
        height="534px"
      >
        <Box width="1506px" padding="0px 284px" display={'flex'}>
          <Box width="384px">
            <Text fontSize={'36px'} margin="8px 0px 16px">
              As melhores vagas para profissionais de tecnologia
            </Text>
            <Text fontSize="15px" margin="0px 0px 32px">
              Cadastre-se e comece sua experiência com a Geek
            </Text>
            <Link href="/cadastro" as={'/cadastro'}>
              <Button bgColor={'primary.500'} display={'block'}>
                <a>Criar perfil gratis</a>
              </Button>
            </Link>
            <Text fontSize="14px" margin="8px 4px 0px 0px">
              Você é empresa?
              <Link href={'/cadastro'}>
                Contrate os melhores profissionais tech!
              </Link>
            </Text>
          </Box>
          <Box padding={'0px 128px'}>
            <Image
              width={'300px'}
              src="https://img.freepik.com/fotos-gratis/tela-vazia-branca_1194-7555.jpg?w=2000"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box padding="36px 200px">
        <Box>
          <Box margin="0px auto">
            <Text
              textAlign="center"
              fontSize="16px"
              marginBottom="60px"
              color={'primary.500'}
            >
              ALGUMAS EMPRESAS QUE JA CONTRATARAM COM A GENTE
            </Text>
          </Box>
          <Box display="flex" margin={'0 auto'}>
            <Box display="flex" margin={'0 auto'}>
              <Image
                width={'150px'}
                height="150px"
                margin={'0 30px'}
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt=""
              />
              <Image
                width={'150px'}
                height="150px"
                margin={'0 30px'}
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt=""
              />
              <Image
                width={'150px'}
                height="150px"
                margin={'0 30px'}
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt=""
              />
              <Image
                width={'150px'}
                height="150px"
                margin={'0 30px'}
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt=""
              />
              <Image
                width={'150px'}
                height="150px"
                margin={'0 30px'}
                src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        padding="36px 200px"
        display="flex"
        alignItems="center"
        backgroundColor={'background.200'}
        flexDirection="column"
      >
        <Box margin="0 auto" padding="48px 16px">
          <Text
            textAlign="center"
            marginBottom="16px"
            color="primary.500"
            lineHeight={1.5}
            fontWeight="700"
            textTransform="uppercase"
          >
            OS NÚMEROS PODEM DIZER MAIS
          </Text>
          <Box width="600px" margin="8px 0px 0px" padding="8px 0px 0px">
            <Text
              lineHeight={1.5}
              fontWeight="600"
              fontSize="36px"
              textAlign="center"
            >
              A Gente.... é eficiente para{' '}
              <strong> profissionais de tecnologia </strong> e
              <strong> empresas</strong>
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgColor={'background.700'}
            padding="24px 0px"
            width="320px"
          >
            <Box fontSize="42px" color="primary.500">
              <Text
                as="h2"
                textAlign="center"
                fontWeight="600"
                letterSpacing="1px"
              >
                +5 mil
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="24px"
                padding="8px 0"
                textAlign="center"
                letterSpacing="1px"
                fontWeight="600"
              >
                oportunidades de trabalho
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgColor={'background.700'}
            padding="24px 0px"
            width="320px"
            margin="0px 32px"
          >
            <Box fontSize="42px" color="primary.500">
              <Text
                as="h2"
                textAlign="center"
                fontWeight="600"
                letter-spacing="1px"
              >
                +500
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="24px"
                padding="8px 0"
                textAlign="center"
                letterSpacing="1px"
                fontWeight="600"
              >
                empresas <br /> contratando
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgColor={'background.700'}
            padding="24px 0px"
            width="320px"
          >
            <Box fontSize="42px" color="primary.500">
              <Text
                as="h2"
                textAlign="center"
                fontWeight="600"
                letterSpacing="1px"
              >
                +130 mil
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="24px"
                padding="8px 0"
                textAlign="center"
                letterSpacing="1px"
                fontWeight="600"
              >
                convites para <br /> entrevistas
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
