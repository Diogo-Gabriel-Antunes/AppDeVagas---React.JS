import { Heading, Button, FormLabel, Box, Input } from '@chakra-ui/react';
import { useState } from 'react';
import OpcoesCarreira from '../OpcoesCarreira';
import OpcoesTecnologia from '../OpcoesTecnologia';
import FaixaSalarial from './FaixaSalarial';
import CheckBoxForm from './CheckBoxForm';

const FormularioDeBuscar = () => {
  const [faixaSalarialInicial, setFaixaSalarialInicial] = useState(1000);
  const [faixaSalarialMaximo, setFaixaSalarialMaximo] = useState(27000);
  return (
    <Box bgColor="white.100" padding="2rem" height="770px">
      <Heading as="h2" fontWeight="700" fontSize="lg">
        Filtre sua busca{' '}
        <Button
          as="a"
          ml="4px"
          padding="0"
          textDecoration="underline"
          color="primary.500"
          border="none"
          bgColor="inherit"
          fontSize="12px"
        >
          Limpar
        </Button>
      </Heading>
      <Box marginTop="1.5rem">
        <FormLabel
          htmlFor=""
          display="block"
          textAlign={'start'}
          fontSize="14px"
          marginBottom={'0.25rem'}
          color={'text.900'}
          fontWeight="700"
        >
          Foco de Carreira
        </FormLabel>
        <OpcoesCarreira />
      </Box>
      <Box marginTop="1.5rem">
        <FormLabel
          htmlFor=""
          display="block"
          textAlign={'start'}
          fontSize="14px"
          marginBottom={'0.25rem'}
          color={'text.900'}
          fontWeight="700"
        >
          Habilidades
        </FormLabel>
        <OpcoesTecnologia />
      </Box>
      <Box marginTop="1.5rem">
        <Heading fontSize="14px">Tipo de vaga</Heading>
        <CheckBoxForm opcoes={['Remoto', 'Presencial']} />
      </Box>
      <Box marginTop="1.5rem">
        <FormLabel fontWeight="bold">Cidade da empresa</FormLabel>
        <Input
          flex="1"
          textAlign="left"
          border="1px solid "
          borderColor="#ccc"
          marginRight="3px"
          borderRadius="0"
        />
      </Box>
      <Box marginTop="1.5rem">
        <Heading fontSize="14px">Senioridade</Heading>
        <CheckBoxForm opcoes={['Junior', 'Pleno', 'Senior']} />
      </Box>
      <Box marginTop="1.5rem">
        <Heading fontSize="14px">Regime de trabalho</Heading>
        <Box padding="12px 0">
          <CheckBoxForm opcoes={['CLT', 'PJ']} />
        </Box>
      </Box>
      <FaixaSalarial
        faixaSalarialInicial={faixaSalarialInicial}
        faixaSalarialMaximo={faixaSalarialMaximo}
        setFaixaSalarialMaximo={setFaixaSalarialMaximo}
      />
      <Box display="flex" width="100%">
        <Button
          colorScheme="blue"
          margin="0 auto"
          width="100%"
          borderRadius="4px"
          letterSpacing="0.2em"
        >
          FILTRAR
        </Button>
      </Box>
    </Box>
  );
};
export default FormularioDeBuscar;
