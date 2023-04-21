document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('form').onsubmit= function(){
        let pokeName = document.querySelector("#pokemon").value;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const speciesName = data.species.name;
            const typeName = data.types[0].type.name;
            const weight = data.weight;
            const height = data.height;
            const baseExperience = data.base_experience;
            // let output = `Species Name: ${speciesName}\n
            //           Type Name: ${typeName}\n
            //           Weight: ${weight}\n
            //           Height: ${height}\n
            //           Base Experience: ${baseExperience}`;
            const infos = [speciesName, typeName, weight, height, baseExperience]
            const info_list = document.querySelector("#result");
            infos.forEach(info => {
                let li = document.createElement('li');
                li.innerHTML = info;
                info_list.appendChild(li);
            })
            
            // console.log(output);
            // const result = document.querySelector('#result');                       
            // result.innerHTML = output;
        })
        .catch(error => console.log(error))
        .finally(() => {
            console.log('Experiment completed');
          });

        return false;
    }



});