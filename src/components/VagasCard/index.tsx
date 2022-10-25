import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { IVagas } from '../../interfaces/IVagas';
import { MdLocationOn, MdOutlineWork, MdAttachMoney } from 'react-icons/md';
import Link from 'next/link';
import Location from './Location';
import VacanciLocation from './Location';
import BoxInfos from './Location';

interface Props {
  vaga: IVagas;
}

const VagasCard = ({ vaga }: Props) => {
  return (
    <Box backgroundColor="white" margin="6px 24px 12px 0">
      <Box padding="24px">
        <Heading fontSize="24px" fontWeight="500">
          {vaga.jobTitle}
        </Heading>
      </Box>
      <Box display="flex" marginLeft="12px">
        {vaga.technologies.map((technologies) => (
          <Box
            border="3px solid"
            borderColor="blue.400"
            margin="0 8px"
            borderRadius="8px"
            key={technologies.id}
          >
            <Text margin="6px 12px">{technologies.technologies}</Text>
          </Box>
        ))}
      </Box>
      <Box margin="24px 20px">
        <Box display="flex">
          <Box margin="0 12px 0 0" padding="8px">
            <Box>
              <Box display="flex" alignItems="center">
                <BoxInfos infos={vaga.vacancyLocation} svg={<MdLocationOn />} />
              </Box>
            </Box>
          </Box>
          <Box padding="8px">
            <Box display="flex" alignItems="center">
              <BoxInfos infos={vaga.seniority} svg={<MdOutlineWork />} />
            </Box>
          </Box>
        </Box>
        <Box margin="12px 8px">
          <Box display="flex" alignItems="center">
            <Box bgColor="blue.400" borderRadius="12px" color="white">
              <MdAttachMoney fontSize="24px" />
            </Box>
            <Box display="flex">
              <Text fontSize="18px" marginLeft="8px">
                R${'   '}
                {vaga.salaryRange}
                {'   '}-{'   '}
                {vaga.salaryRangeMax}
              </Text>
              <Text marginLeft="8px">({vaga.typeOfContract})</Text>
            </Box>
          </Box>
        </Box>
        <Box padding="24px 12px">
          <Text>
            {vaga.jobDescription
              .split('\n')
              .slice(0, 7)
              .map((paragrafo, index) => (
                <Box key={index}>
                  <Text>{paragrafo}</Text>
                  <br />
                </Box>
              ))}{' '}
          </Text>
        </Box>
        <Box padding="12px" display="flex" justifyContent="end">
          <Link href="/login">
            <Button
              variant="outline"
              colorScheme="blue"
              margin="12px 12px"
              borderRadius="4px"
            >
              Criar perfil para demonstrar interesse
            </Button>
          </Link>
          <Link href={`/vaga/${vaga.id}`}>
            <Button colorScheme="blue" margin="12px 12px" borderRadius="4px">
              Ver detalhes
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default VagasCard;
