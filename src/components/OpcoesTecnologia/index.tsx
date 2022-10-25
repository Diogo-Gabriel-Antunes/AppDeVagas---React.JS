import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  FormControl,
  Checkbox,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ITecnologia } from '../../interfaces/ITecnologia';

const OpcoesTecnologia = () => {
  const [tecnologia, setTecnologia] = useState<ITecnologia[]>();
  useEffect(() => {
    axios
      .get('http://localhost:8080/technologies')
      .then((resposta) => setTecnologia(resposta.data));
  }, []);
  return (
    <Box position="relative" mt="8px">
      <Accordion allowToggle width={'310px'} border="1px solid #ccc">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                borderRight="1px solid #ccc"
                marginRight="3px"
              >
                Habilidades
              </Box>
              <AccordionIcon margin={'0 auto'} />
            </AccordionButton>
          </h2>
          <AccordionPanel
            position="absolute"
            bgColor={'white.100'}
            width="100%"
            border="1px solid #ccc"
            top="38px"
          >
            <FormControl display="flex" flexDirection="column">
              {tecnologia?.map((item, index) => (
                <>
                  <Box display="flex" alignItems="center">
                    <Checkbox
                      width="1rem"
                      borderWidth="2px"
                      borderRadius="0.125rem"
                      borderColor="gray.500"
                      margin="16px 0px"
                      value={item.technologies}
                    ></Checkbox>
                    <FormLabel margin="auto 8px">{item.technologies}</FormLabel>
                  </Box>
                </>
              ))}
            </FormControl>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default OpcoesTecnologia;
