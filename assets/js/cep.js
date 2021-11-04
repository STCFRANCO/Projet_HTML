const consulta = (numero) => /^[0-9]+$/.test(numero);

const meucep = (cep) => cep.length == 9 && consulta(cep);

const cep = document.querySelector("#cep");

const Resl_cep = (result) => {
  for (const cons_cep in result) {
    if (document.querySelector("#" + cons_cep)) {
      document.querySelector("#" + cons_cep).value = result[cons_cep];
    }
  }
};
cep.addEventListener("blur", (event) => {
  var via_Cep = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const url = `https://viacep.com.br/ws/${via_Cep}/json/`;
  fetch(url, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      Resl_cep(data);
    })
    .catch((error) => {
      console.log("error: CEP não encontrado o invalido!! " + error);
    });
});

function btncep() {

  var msgErro = [];

if (cep.value === null || cep.value === "") {
    msgErro.push(" Digite o cep");
    document.getElementById("cep").focus();
  }
  error.innerHTML = msgErro.join(",     ");
  
  return false;
}
