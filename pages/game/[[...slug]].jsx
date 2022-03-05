import dynamic from 'next/dynamic';
import Link from 'next/link'
const GameComponent = dynamic(() => import("../../components/GameApp"), {
    ssr: false,
});

const Game = () => {
    return <>
        <Link href="/game">
          <a>Game Home</a>
        </Link>
        <GameComponent />
    </>
}

export default Game;