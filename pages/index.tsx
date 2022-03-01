import type { NextPage } from 'next'
import dynamic from 'next/dynamic';

const Container = dynamic(() => import("appcontainer/AppContainer"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div >
        <Container />
    </div>
  )
}

export default Home
