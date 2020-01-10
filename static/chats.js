const ATJAUNOT = 500;


/*
Ielādē tērzēšanas datus no servera
Uzstāda laiku pēc kāda atkārtoti izsaukt šo pašu funkciju
*/
async function lasiChatu() {
    const atbilde = await fetch('/chats/lasi');
    const datuObjekts = await atbilde.json();
    raadiChataRindas(datuObjekts);
    await new Promise(resolve => setTimeout(resolve, ATJAUNOT));
    await lasiChatu();
}


function raadiChatuVienkarsi(dati) {
    var jaunaRinda = "<br/>";
    var chats = "";
    var chataDiv = document.getElementById("chats");
    for (var rinda of dati["chats"]) {
        chats = chats + rinda + jaunaRinda;
    }
    chataDiv.innerHTML = chats;
}


/*
Publicē tērzēšanas ziņas datus uz serveri
*/
async function suutiZinju() {
    // Nolasa ievades lauka saturu
    let zinjasElements = document.getElementById("zinja");
    let zinja = zinjasElements.value;
    // izdzēš ievades lauku
    zinjasElements.value = "";

    const atbilde = await fetch('/chats/suuti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "chats": zinja })
    });
    const datuObjekts = await atbilde.json();

    // parāda jauno chata saturu
    raadiChatuVienkarsi(datuObjekts);
}


// Ērtības funkcionalitāte
// Atrod ievades lauku
var ievadesLauks = document.getElementById("zinja");
// Gaida signālu no klaviatūras, ka ir nospiests Enter taustiņš
ievadesLauks.addEventListener("keyup", function(event) {
  // Numur 13 ir "Enter" taustiņš
  if (event.keyCode === 13) {
    suutiZinju();
  }
});

function raadiChataRindas(dati) {
    const chatUL = document.getElementById("chats");
    // novaacam ieprieksheejo saturu
    while (chatUL.firstChild) {
        chatUL.firstChild.remove();
    }
    for (let rinda of dati["chats"]) {
      chatLI = izveidoJaunuRindu(rinda);
      chatUL.appendChild(chatLI);
    }
    // noskrolleejam uz leju pie peedeejaa chata texta
    var chatScrollBox = chatUL.parentNode;
    chatScrollBox.scrollTop = chatScrollBox.scrollHeight;
  }
  
  
  function izveidoJaunuRindu(zinja) { 
    let newLI = document.createElement("li");
    newLI.className = "left clearfix"
    let newDiv = document.createElement("div"); 
    newDiv.className = "chat-body clearfix"
    let newContent = document.createTextNode(zinja); 
    newLI.appendChild(newDiv); 
    newDiv.appendChild(newContent); 
    return newLI;
  }