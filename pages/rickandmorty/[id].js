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
    if(data.error === 'Character not found') {
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
                <h2>{data.name}</h2>
                <img width={210} src={data.image}></img>    
                <li><b>Status:</b> {data.status}</li>        
                <li><b>Species:</b> {data.species}</li>                
                <li><b>Type:</b> {data.type}</li>        
                <li><b>Gender:</b> {data.gender}</li>        
                <li><b>Origin:</b> {data.origin.name}</li>            
                <li><b>Location:</b> {data.location.name}</li>        
            </ul>
        </div>     
    )
}

export async function getStaticPaths(){
    return {
        paths:[
            {params: {id: "1"}},
            {params: {id: "2"}},
            {params: {id: "3"}},
            {params: {id: "4"}},
            {params: {id: "5"}},
            {params: {id: "6"}},
            {params: {id: "7"}},
            {params: {id: "8"}},
            {params: {id: "9"}},
            {params: {id: "10"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const data = await res.json();
    return {
      props: {
        data
      }
    }
}