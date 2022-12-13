export default function TheMovie({data}){
    if(data === undefined) {
        return (
            <div>
                <style jsx>{`
                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
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
                <p>Carregando...</p>    
            </div>
        )
    }
    if(data.Response === 'False') {
        return (
            <div>
                <style jsx>{`
                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
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
                <p>Não há o recurso solicitado no sistema.</p>
            </div>
        )
    }
    return (
        <div>
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                    font-family: Arial, Verdana, sans-serif;
                    background-color: #ccc;
                    border-collapse: collapse;
                    border: 1px solid #444;
                    border-radius: 15px;
                    max-width: 500px;
                    list-style: none;
                    gap: 7px;
                    padding: 5px;
                }
                ul li{
                    text-align: justify;
                    padding: 0 20px;
                }
            `}
            </style>
            <ul>
                <h2>{data.Title}</h2>
                <img width={210} src={data.Poster}></img>    
                <li><b>Ano:</b> {data.Year}</li>        
                <li><b>Classificado:</b> {data.Rated}</li>        
                <li><b>Lançamento:</b> {data.Released}</li>            
                <li><b>Tempo de execução:</b> {data.Runtime}</li>        
                <li><b>Gênero:</b> {data.Genre}</li>        
                <li><b>Diretor:</b> {data.Director}</li>            
                <li><b>Escritor:</b> {data.Writer}</li>        
                <li><b>Atores:</b> {data.Actors}</li>        
                <li><b>Enredo:</b> {data.Plot}</li>        
                <li><b>Língua:</b> {data.Language}</li>            
                <li><b>País:</b> {data.Country}</li>        
                <li><b>Prêmios:</b> {data.Awards}</li>    
            </ul>
        </div> 
    )
}

export async function getStaticPaths(){
    return {
        paths:[
            {params: {id: "tt0095801"}},
            {params: {id: "tt0033152"}},
            {params: {id: "tt0015400"}},
            {params: {id: "tt0041149"}},
            {params: {id: "tt0044388"}},
            {params: {id: "tt0098746"}},
            {params: {id: "tt0046322"}},
            {params: {id: "tt0046497"}},
            {params: {id: "tt0044389"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=8c3ab9c9&i=${params.id}`)
    const data = await res.json();
    return {
      props: {
        data
      }
    }
}