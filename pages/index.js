/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React, { useContext } from 'react';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import WebSitePageWrapper, {
  WebsitePageContext,
} from '../src/components/wrappers/WebsitePage';

function HomeScreen() {
  const websitePageContext = useContext(WebsitePageContext);
  return (
    <Box display="flex" flex="1" flexDirection="column">
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos.
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicingsdfsdsdfsdf.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => websitePageContext.toggleModalCadastro()}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Imagem Aplicativo"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default function Home() {
  return (
    <WebSitePageWrapper
      seoProps={{
        headTitle: 'Home',
      }}
      pageBoxProps={{
        backgroungImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
      menuProps={{
        display: false,
      }}
    >
      <HomeScreen />
    </WebSitePageWrapper>
  );
}
