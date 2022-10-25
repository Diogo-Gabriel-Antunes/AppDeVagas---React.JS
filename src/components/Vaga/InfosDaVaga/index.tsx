import { Heading, Box } from '@chakra-ui/react';

import { MdLocationOn, MdAttachMoney, MdOutlineWork } from 'react-icons/md';
import { IVagas } from '../../../interfaces/IVagas';

interface Props {
  vaga: IVagas | null;
}

const InfosDaVaga = ({ vaga }: Props) => {
  return (
    <Box display="flex" marginTop="24px">
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="32px"
          alignItems="start"
        >
          <Box
            backgroundColor="blue.400"
            color="white"
            padding="4px"
            borderRadius="12px"
            maxWidth="24px"
          >
            <MdLocationOn />
          </Box>
          <Box>
            <Heading fontSize="16px" margin="8px 0">
              Localizacao
            </Heading>
          </Box>
          <Box marginLeft="4px">{vaga?.vacancyLocation}</Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="50px"
          alignItems="start"
        >
          <Box
            backgroundColor="blue.400"
            color="white"
            padding="4px"
            borderRadius="12px"
            maxWidth="24px"
          >
            <MdAttachMoney fontSize="16px" />
          </Box>
          <Box>
            <Heading fontSize="16px" margin="8px 0">
              Faixa salarial
            </Heading>
          </Box>
          <Box marginLeft="4px">
            {vaga?.salaryRange.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}{' '}
            -{' '}
            {vaga?.salaryRangeMax.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
            {'   '}({vaga?.typeOfContract})
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        marginLeft="42px"
        alignItems="start"
      >
        <Box
          backgroundColor="blue.400"
          color="white"
          padding="4px"
          borderRadius="12px"
          maxWidth="24px"
        >
          <MdOutlineWork />
        </Box>
        <Box>
          <Heading fontSize="16px" margin="8px 0">
            Senioridade
          </Heading>
        </Box>
        <Box marginLeft="4px">{vaga?.seniority}</Box>
      </Box>
    </Box>
  );
};

export default InfosDaVaga;
