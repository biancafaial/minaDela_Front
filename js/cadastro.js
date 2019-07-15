  const botao = document.querySelector('#criar_mina_button')
  botao.addEventListener("click", criarMina)

  function criarMina (e) {
    e.preventDefault();
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
      'https://minadelas-back.herokuapp.com/minas',
      {
        method: 'POST',
        body: JSON.stringify(mina),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain */*'
        },
        mode: "cors"
      }
    ).then(response => console.log("criou!"))
    
    }