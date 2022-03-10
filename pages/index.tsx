import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = dynamic(() => import("appcontainer/AppContainer"), {
  ssr: false,
});

const HomeProps = {
  label: 'Rahul Teja'
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Home: NextPage = () => {

  return (
    <>
        <Container {...HomeProps}>
          <Wrapper>
            <Card title='Currency Exchange' desc='Currency Exchange app with realtime exchange values.' path="/currency"/>
            <Card title='Game' desc='Rock Paper Scissions Spock & Lizard Game' path="/game"/>
          </Wrapper>
         
        </Container>
    </>
  )
}

export default Home
