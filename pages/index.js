import Link from "next/link";

export default function Receita9(){
    return (
        <div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                nav {
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                a {
                    text-decoration: none;
                    color: #000;
                    font-family: Arial, Verdana, sans-serif;
                    font-size: 20px;
                    padding: 5px;
                }
                a:hover {
                    color: #ccc;
                }
                h2 {
                    font-family: Arial, Verdana, sans-serif;
                    color: #000;
                    text-align: center;
                }
                p {
                    text-align: center;
                    font-family: Arial, Verdana, sans-serif;
                    color: #000;
                    font-size: 20px;
                    background-color: #ccc;
                    border-collapse: collapse;
                    border: 1px solid #444;
                    border-radius: 15px;
                    max-width: 500px;
                    gap: 7px;
                    padding: 5px;
                }
            `}
            </style>
            <h2>Receita-Next-09</h2>
            <p>Site para uma atividade da disciplina de Programação Web.</p>
            <nav>
                <Link href='rickandmorty/1'><a>API de Rick and Morty.</a></Link>
                <Link href='movies/tt0095801'><a>API Movies.</a></Link>
            </nav>
        </div>
    )
}
