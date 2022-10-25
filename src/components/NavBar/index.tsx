import { Box, Image, Link as BoxLink } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  vagas?: boolean;
  profissionais?: boolean;
  empresa?: boolean;
  login?: boolean;
}

const NavBar = ({ vagas, profissionais, empresa, login }: Props) => {
  return (
    <Box display={'flex'} justifyContent="space-between">
      <div>
        <BoxLink>
          <Link href="/">
            <Image
              width={'75px'}
              height={'75px'}
              src="/assets/images/logo/Logo_TV_2015.png"
              alt=""
            />
          </Link>
        </BoxLink>
      </div>
      <Box display={'flex'} alignItems="center" padding={'0 20px'}>
        {vagas ? (
          <BoxLink
            padding="8px 20px"
            borderBottom={'2px solid #9412dc'}
            borderRadius="4px"
          >
            <Link href={'/vagas'}>Ver vagas</Link>
          </BoxLink>
        ) : (
          <BoxLink padding="0 20px">
            <Link href={'/vagas'}>Ver vagas</Link>
          </BoxLink>
        )}
        {profissionais ? (
          <BoxLink
            padding="8px 20px"
            borderBottom={'2px solid #9412dc'}
            borderRadius="4px"
          >
            <Link href={'/profissionais'}>Para Profissionais</Link>
          </BoxLink>
        ) : (
          <BoxLink padding="0 20px">
            <Link href={'/profissionais'}>Para Profissionais</Link>
          </BoxLink>
        )}
        {empresa ? (
          <BoxLink
            padding="8px 20px"
            borderBottom={'2px solid #9412dc'}
            borderRadius="4px"
          >
            <Link href={'/empresa'}>Empresa</Link>
          </BoxLink>
        ) : (
          <BoxLink padding="0 20px">
            <Link href={'/empresa'}>Empresa</Link>
          </BoxLink>
        )}
        {login ? (
          <BoxLink
            padding="8px 20px"
            borderBottom={'2px solid #9412dc'}
            borderRadius="4px"
          >
            <Link href="/login">Login</Link>
          </BoxLink>
        ) : (
          <BoxLink padding="0 20px">
            <Link href="/login">Login</Link>
          </BoxLink>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
