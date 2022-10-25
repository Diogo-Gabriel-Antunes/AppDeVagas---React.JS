import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { MdLocationOn } from 'react-icons/md';

interface Props {
  infos: string | undefined;
  svg: ReactNode;
}
const BoxInfos = ({ infos, svg }: Props) => {
  return (
    <>
      <Box
        backgroundColor="blue.400"
        color="white"
        padding="4px"
        borderRadius="12px"
        maxWidth="24px"
      >
        {svg}
      </Box>
      <Box marginLeft="4px">{infos}</Box>
    </>
  );
};

export default BoxInfos;
