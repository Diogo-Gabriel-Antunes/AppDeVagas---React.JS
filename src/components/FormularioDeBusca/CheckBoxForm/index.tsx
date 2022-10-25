import { Box, Checkbox } from '@chakra-ui/react';
interface Props {
  opcoes: string[];
}
const CheckBoxForm = ({ opcoes }: Props) => {
  return (
    <Box padding="12px 0">
      {opcoes.map((opcao) => (
        <Checkbox borderColor="gray.700" padding="0 6px">
          {opcao}
        </Checkbox>
      ))}
    </Box>
  );
};

export default CheckBoxForm;
