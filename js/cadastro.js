  const botao = document.querySelector('#criar_mina_button')
  botao.addEventListener("click", criarMina)

  function criarMina () {
    
    const nome = document.querySelector("#nome_input").value
    const telefone = document.querySelector("#telefone_input").value
    const email = document.querySelector("#email_input").value
    const cpf = document.querySelector("#cpf_input").value
   

    const categoria = document.querySelector("input[type='radio']:checked").value
    const descricao = document.querySelector("#descricao_input").value
    const mina = {
      nome, telefone, email, cpf, categoria, descricao
    }
    fetch(
      'http://localhost:3000/minas',
      {
        method: 'POST',
        body: JSON.stringify(mina),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => console.log("criou!"))
    }