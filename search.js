
     $(document).ready(function(){
        $('.cep').mask('00000-000');
        $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
        });


        $(document).ready(function(){
            $("#cadastrar").click(function(){
                 
                $(function(){
                    $("#res").load("table.html"); 
                });
            })
       });        



function getCEP(){
    
    let urlAPI = "https://viacep.com.br/ws/";
    let cep = window.document.querySelector('#cep').value;
    
    if (cep != "") {   
        $.get(urlAPI + cep + "/json/", function(data, status){
            
            if (data.cep) {
                window.document.getElementById('rua').value = data.logradouro ? data.logradouro : "" ;
                window.document.getElementById('bairro').value = data.bairro ? data.bairro : "";
                window.document.getElementById('localidade').value = data.localidade ? data.localidade : "";
                window.document.getElementById('estado').value = data.uf ? data.uf : "";
                return;
            }

            alert("CEP Inválido")

        });  
    }else{
        alert("CEP não informado")
    }

  

};


function cadastrar(){
       
        let obj = {
            "nome":window.document.getElementById('rua').value,
            "bairro":window.document.getElementById('bairro').value,
            "localidade": window.document.getElementById('localidade').value,
            "estado": window.document.getElementById('estado').value
        }

        window.localStorage.setItem("endereco",obj);
        window.localStorage.getItem("endereco")
        console.log(window.localStorage.getItem("endereco"));


};

    



