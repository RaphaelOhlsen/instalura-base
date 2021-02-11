import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';

export default function Home() {
  return (
    <>
      <Menu />

        <div>
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left'
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
              md: 'left'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicingsdfsdsdfsdf.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          </Text>
          <Button 
            margin={{
              xs: 'auto',
              md: 'initial'
            }}
            display="block"
            variant="primary.main"
          >
            Cadastrar
          </Button>
        </div>

      <Footer />
    </>
  )
}
