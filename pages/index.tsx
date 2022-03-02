import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

const Container = dynamic(() => import("appcontainer/AppContainer"), {
  ssr: false,
});

const HomeProps = {
  label: 'Rahul Teja'
}

const Home: NextPage = () => {
  return (
    <>
        <Container {...HomeProps}>
          Working from NextJS
        </Container>
    </>
  )
}

export default Home
