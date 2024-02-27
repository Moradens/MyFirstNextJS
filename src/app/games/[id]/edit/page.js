import { gamesdata } from "@/app/games/page";
import Link from "next/link";

export default function Page({ params }) {
    const selectedGame = gamesdata.find(game => game.id === parseInt(params.id));

    return (
        <div>
            <h2>{selectedGame.title}</h2>
            <p><strong>Genre:</strong> {selectedGame.genre}</p>
            <p><strong>Release Date:</strong> {selectedGame.release_date}</p>
            <p><strong>Description:</strong> {selectedGame.description}</p>
            <Link href={`/games/`}>
                <p>zpět</p>
            </Link>
        </div>
    );
}