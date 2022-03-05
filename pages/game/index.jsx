import dynamic from 'next/dynamic';
const GameComponent = dynamic(() => import("../../components/GameApp"), {
    ssr: false,
});

const Game = () => {
    console.log(3);
    return <GameComponent />
}

export default Game;