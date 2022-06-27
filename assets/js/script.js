
// alert("coucou");

var valide= document.getElementById("envoi");
var nom= document.getElementById("nom");
var missNom= document.getElementById("missNom");
var prenom= document.getElementById("prenom");
var missPrenom= document.getElementById("missPrenom");
var feminin= document.getElementById("feminin");
var masculin= document.getElementById("masculin");
var missSexe= document.getElementById("missSexe");
var date= document.getElementById("date");
var missDate= document.getElementById("missDate");
var email= document.getElementById("email");
var missEmail= document.getElementById("missEmail");
var codepostale= document.getElementById("cp");
var missCodepostale= document.getElementById("missCp");
var sujet= document.getElementById("sujet");
var missSujet= document.getElementById("missSujet");
var commentaire= document.getElementById("commentaire");
var missCommentaire= document.getElementById("missCommentaire");
var formulaire= document.getElementById("checkbox");
var missFormulaire= document.getElementById("missFormuliare");
var form= document.getElementById("form1");
var regExp1= new RegExp("^[A-Za-z]+$");
var regExp2= new RegExp("^.[a-z0-9]+$");
var RegExp3= new RegExp("^[0-9]{5}$");


valide.addEventListener("click", validation);

function validation(e)

{
    
     console.log(nom.validity.valueMissing);
     console.log(codepostale.value);
     console.log(RegExp3.test(codepostale.value));

    if (nom.validity.valueMissing)

    {
        missNom.textContent="nom manquant";
        missNom.style.color="red";
        e.preventDefault();
    }

    else if(regExp1.test(nom.value)== false)
    
    {
        missNom.textContent=" le nom doit etre une chaine alphabathique";
        missNom.style.color="red";
        e.preventDefault();
    }

    else {
        missNom.textContent="";
    }

    if (prenom.validity.valueMissing)

    {
        missPrenom.textContent="prenom manquant";
        missPrenom.style.color="red";
        e.preventDefault();
    }

    else if (regExp1.test(prenom.value)==false)

    {
        missPrenom.textContent=" le prenom doit etre une chaine alphabathique";
        missPrenom.style.color="red";
        e.preventDefault();
    }

    if (masculin.validity.valueMissing || feminin.validity.valueMissing) 

    {
        missSexe.textContent=" sexe manquant";
        missSexe.style.color="red";
        e.preventDefault();
    }

    if (date.validity.valueMissing)

    {
        missDate.textContent="date manquante";
        missDate.style.color="red";
        e.preventDefault();
    }


    if (codepostale.validity.valueMissing)

    {
        missCodepostale.textContent="code postale manquant";
        missCodepostale.style.color="red";
        e.preventDefault();
    }

    else if (RegExp3.test(codepostale.value)== false)

    {
        missCodepostale.textContent= "format incorrect";
        missCodepostale.style.color= "red";
        e.preventDefault();
    }

    if (email.value.indexOf("@") == -1)

    {
        missEmail.textContent=" le @ doit etre lisible";
        missEmail.style.color="red";
        e.preventDefault();
    }

    //else if (regExp2.test(email.value)==false)

    //*{
       //* missEmail.textContent=" votre adresse mail doit comporter un point";
       //* missEmail.style.color="red";
       //* e.preventDefault();
    //*}

    if (sujet.validity.valueMissing)

    {
        missSujet.textContent="sujet manquant";
        missSujet.style.color="red";
        e.preventDefault();
    }

    if (commentaire.validity.valueMissing)

    {
        missCommentaire.textContent="commentaire manquant";
        missCommentaire.style.color="red";
        e.preventDefault();
    }

    if (formulaire.validity.valueMissing)
       
       {
        missFormulaire.textContent="Formulaire manquant";
        missFormulaire.style.color="red";
        e.preventDefault();
       }  
    }




