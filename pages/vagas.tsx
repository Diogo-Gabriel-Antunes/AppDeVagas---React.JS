import NavBar from '../src/components/NavBar';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IVagas } from '../src/interfaces/IVagas';
import OpcoesCarreira from '../src/components/OpcoesCarreira';
import OpcoesTecnologia from '../src/components/OpcoesTecnologia';
import FormularioDeBuscar from '../src/components/FormularioDeBusca';
import VagasCard from '../src/components/VagasCard';
import { useFetch } from '../src/Hooks/useFetch';

const Vagas = () => {
  const [filtro, setFiltro] = useState('MaisRecentes');

  const { data: vagas } = useFetch<IVagas[]>('http://localhost:8080/vacancies');

  return (
    <Box>
      <Box>
        <NavBar vagas={true} />
      </Box>
      <Box bgColor="white.200">
        <Box maxWidth={'1280px'} margin="0 auto" padding="64px 16px 32px 16px">
          <Box>
            <Heading
              textAlign="center"
              fontSize="28px"
              marginBottom="5rem"
              fontFamily="Open Sans,sans-serif"
            >
              As melhores vagas para profissionais de tecnologia
            </Heading>
          </Box>
          <Box display="grid" gridTemplateColumns="1fr 1fr">
            <Box
              display="flex"
              justifyContent="space-between"
              width="874px"
              flexDirection="column"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                marginBottom="32px"
              >
                <Box display="flex">
                  <Text color="primary.500" fontWeight="700" marginRight="6px">
                    {vagas?.length} vagas
                  </Text>{' '}
                  <Text>disponiveis</Text>
                </Box>
                <Box marginRight="20px">
                  <Select
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    borderRadius="20px"
                    fontSize="14px"
                    borderColor={'primary.500'}
                    bgColor="primary.150"
                  >
                    <option value="MaisRecentes">Mais Recentes</option>
                    <option value="MaisAntigas">Mais Antigas</option>
                    <option value="MaiorSalario">Maior Salario</option>
                    <option value="MenorSalario">Menor Salario</option>
                  </Select>
                </Box>
              </Box>
              <Box>
                {vagas?.map((vaga) => (
                  <VagasCard vaga={vaga} key={vaga.id} />
                ))}
              </Box>
            </Box>

            <FormularioDeBuscar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Vagas;
