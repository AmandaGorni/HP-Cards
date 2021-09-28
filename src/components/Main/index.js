import React, { useState, useEffect } from 'react';
import * as S from './styles';


export default function Cards(){

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function getRepositories() {
          const response = await fetch(
            "http://hp-api.herokuapp.com/api/characters"
          );
          const data = await response.json();
          setRepositories(data);
          console.log(data)
        }
        getRepositories();
      }, []);

      

    return(
    <div className="App">      
      <S.Container>
        {repositories.map((item)=>
        <S.BoxCard>
            <h3>{item.name}</h3>
            <img src={item.image} alt={`${item.name} Poster`}/>
            <h3>{item.actor}</h3>      
        </S.BoxCard>
        )}   
      </S.Container>
    </div>
    )
}