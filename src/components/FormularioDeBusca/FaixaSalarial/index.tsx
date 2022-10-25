import {
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  faixaSalarialInicial: number;
  faixaSalarialMaximo: number;
  setFaixaSalarialMaximo: Dispatch<SetStateAction<number>>;
}
const FaixaSalarial = ({
  faixaSalarialInicial,
  faixaSalarialMaximo,
  setFaixaSalarialMaximo,
}: Props) => {
  return (
    <Box marginTop="1.5rem">
      <Heading fontSize="14px">Faixa salarial (Mensal)</Heading>
      <Text>
        R${faixaSalarialInicial} - R${faixaSalarialMaximo}
      </Text>
      <Box padding="12px 0">
        <Slider
          min={1000}
          max={27000}
          value={faixaSalarialMaximo}
          aria-label="slider-ex-6"
          onChange={(val) => setFaixaSalarialMaximo(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
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

export default FaixaSalarial;
