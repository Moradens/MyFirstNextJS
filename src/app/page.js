import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>
                Cíl Úkolu
            </h1>
            <p>
                Vytvořte jednoduchou aplikaci pro správu her využívající Next.js a jeho nový App Router. Aplikace bude
                obsahovat následující stránky:
            </p>
            <ul>
                <li> 1. <b>Úvodní stránka</b> - stručně představí aplikaci.</li>
                <li> 2. <b>Dashboard</b> - zobrazí seznam všech her s možností přejít na detail každé hry.</li>
                <li>3. <b>Detail hry</b> - zobrazí podrobné informace o hře.</li>
                <li>4. <b>Editace hry</b> - formulář pro editaci informací o hře.</li>
            </ul>
            <Link href="/games">
                <p>Dashboard</p>
            </Link>
        </>
    );
}
