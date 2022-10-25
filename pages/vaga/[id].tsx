import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavBar from '../../src/components/NavBar';
import { useFetch } from '../../src/Hooks/useFetch';
import { IVagas } from '../../src/interfaces/IVagas';
import { MdCheckCircle, MdKeyboardBackspace } from 'react-icons/md';
import BoxInfos from '../../src/components/VagasCard/Location';
import { MdLocationOn, MdOutlineWork, MdAttachMoney } from 'react-icons/md';
import InfosDaVaga from '../../src/components/Vaga/InfosDaVaga';
import { useEffect, useState } from 'react';
import axios from 'axios';
const VagaId = () => {
  const router = useRouter();
  const [vaga, setVaga] = useState<IVagas>();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/vacancies/${router.query.id}`)
      .then((resposta) => {
        setVaga(resposta.data);
      });
  }, [router]);

  return (
    <Box bgColor="white.200">
      <Box bgColor="white">
        <NavBar />
      </Box>
      <Box bgColor="white" height="100%">
        <Box width="1280px" display="flex">
          <Box margin="0 auto">
            <Box display="flex">
              <Link href="/vagas">
                <Box
                  cursor="pointer"
                  color="primary.500"
                  display="flex"
                  alignItems="center"
                >
                  <Text marginRight="8px">
                    <MdKeyboardBackspace />
                  </Text>
                  <Text>{'     '} Voltar</Text>
                </Box>
              </Link>
            </Box>
            <Box marginTop="50px">
              <Heading>{vaga?.jobTitle}</Heading>
            </Box>
            <Box display="flex">
              {vaga?.technologies.map((technologie) => (
                <Box
                  border="3px solid"
                  borderColor="blue.400"
                  margin="28px 8px"
                  borderRadius="8px"
                  key={technologie.id}
                >
                  <Text margin="6px 12px">{technologie.technologies}</Text>
                </Box>
              ))}
            </Box>
            <Box>
              <InfosDaVaga vaga={vaga} />
            </Box>
            <Box marginTop="64px" marginBottom="20px">
              <Text
                fontWeight="700"
                marginBottom="0.5rem"
                color="primary.500"
                fontSize="16px"
              >
                Curtiu a vaga? Demonstre interesse e seja encontrado pela
                empresa
              </Text>
              <Box
                width="410px"
                display="flex"
                height="53px"
                alignItems="center"
              >
                <Button
                  colorScheme="blue"
                  padding="12px 24px"
                  bgColor="primary.500"
                  textTransform="uppercase"
                  letterSpacing="1.5px"
                  fontSize="12px"
                >
                  Criar perfil para demonstrar interesse
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        width="1280px"
        flexDirection="column"
        marginTop="32px"
      >
        <Container display="flex" width="720px">
          <Box margin="0 auto" bgColor="white" padding="42px">
            <Box>
              <Heading
                fontSize="28px"
                fontWeight="700"
                letterSpacing="1px"
                color="text.900"
              >
                Empresa
              </Heading>
            </Box>
            <Box display="flex" margin="16px 0">
              <Text>{vaga?.company?.adress}</Text>
              <Text marginLeft="12px">{vaga?.company?.companyDescription}</Text>
            </Box>
            <Box width="720px" minHeight="600px">
              {vaga?.jobDescription.split('\n').map((descricao) => (
                <Box>
                  <Text margin="0 auto"> {descricao}</Text>
                </Box>
              ))}
            </Box>
            <Box>
              <Heading
                fontSize="28px"
                fontWeight="700"
                letterSpacing="1px"
                color="text.900"
              >
                Beneficios
              </Heading>
              <SimpleGrid columns={3} padding="24px 0">
                {vaga?.benefits?.map((benefits) => (
                  <Box
                    margin="12px 0px"
                    display="flex"
                    alignItems="center"
                    width="100%"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      width="100%"
                      backgroundColor="white"
                      color="blue.400"
                      padding="4px"
                      borderRadius="12px"
                      maxWidth="28px"
                    >
                      <MdCheckCircle fontSize="20px" color="blue.300" />
                    </Box>
                    <Text fontSize="15px" marginLeft="12px">
                      {' '}
                      {benefits.benefits}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default VagaId;
