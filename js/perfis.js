var urlParams = new URLSearchParams(window.location.search);
let categoria = urlParams.get("categoria")
const boxPerfil = document.querySelector('.maravilhosas__box');



fetch("http://localhost:3000/minas/" + categoria).then(response => response.json() )
    .then((minas) => {

        minas.forEach((mulher) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'maravilhosas__perfil card-content');
            boxPerfil.appendChild(card);

            // definir imagem
            const img = document.createElement('img');
            img.setAttribute('class', 'img-responsive');

            //comparação caso a imagem seja undefined o else irá definir o png como imagem do card
            // outro mode de fazer a comparação usando OU if (mulher.metadata == undefined || mulher.metadata.image == "")
            if (mulher && mulher.imagem) {
                img.setAttribute('src', mulher.imagem);
            } else {
                img.setAttribute('src', './img/img-mulher.png');
            }
            card.appendChild(img);

            const nome = document.createElement('p');
            nome.textContent = mulher.nome;
            card.appendChild(nome);

            const categoria = document.createElement('p');
            categoria.textContent = mulher.categoria;
            card.appendChild(categoria);

            const descricao = document.createElement('p');
            descricao.textContent = mulher.descricao;
            card.appendChild(descricao);

            
            const email = document.createElement('p');
            email.textContent = mulher.email;
            card.appendChild(email);


            const telefone = document.createElement('p');
            telefone.textContent = mulher.telefone;
            card.appendChild(telefone);

        })
    })