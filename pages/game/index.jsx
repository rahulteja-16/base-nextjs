import dynamic from 'next/dynamic';
const GameComponent = dynamic(() => import("../../components/GameApp"), {
    ssr: false,
});

const Game = () => {
    return <GameComponent />
}

export default Game;