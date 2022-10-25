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
import { useEffect } from 'react';

const OpcoesCarreira = () => {
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
                Escolha Sua Carreira
              </Box>
              <AccordionIcon margin={'0 auto'} />
            </AccordionButton>
          </h2>
          <AccordionPanel position="absolute">
            <Accordion allowToggle width={'310px'} margin="0 -15px">
              <AccordionItem
                position="absolute"
                width={'310px'}
                bgColor={'white.100'}
                margin="-8px -2px"
              >
                <h2>
                  <AccordionButton border="1px solid #ccc">
                    <Box flex="1" textAlign="left">
                      Desenvolvimento
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  position="absolute"
                  width={'310px'}
                  bgColor={'white.100'}
                >
                  <AccordionPanel
                    position="absolute"
                    width={'310px'}
                    bgColor={'white.100'}
                    overflow="auto"
                    zIndex={2}
                    border="1px solid #ccc"
                    margin="-8px -16px"
                  >
                    <FormControl display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Todos</FormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Front-end</FormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Back-End</FormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Full-stack</FormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Mobile</FormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          width="1rem"
                          borderWidth="2px"
                          borderRadius="0.125rem"
                          borderColor="gray.500"
                          margin="16px 0px"
                        ></Checkbox>
                        <FormLabel margin="auto 8px">Games</FormLabel>
                      </Box>
                    </FormControl>
                  </AccordionPanel>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default OpcoesCarreira;
