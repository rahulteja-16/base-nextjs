import dynamic from 'next/dynamic';
const GameComponent = dynamic(() => import("game/Game"), {
    ssr: false,
    });

const Game = () => {
    return <GameComponent />
}

export default Game;