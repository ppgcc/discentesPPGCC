const consentButton = document.getElementById('consent-button');
const popupOverlay = document.getElementById('popup-overlay');
const closeButton = document.getElementById('close-button');

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
  }
  
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
function cookieConsent() {
    if (!getCookie('cookie-consent')) {
      document.getElementById('cookie-consent-popup').style.display = 'block';
      document.getElementById('cookie-consent-button').addEventListener('click', function() {
        document.getElementById('cookie-consent-popup').style.display = 'none';
        setCookie('cookie-consent', true, 365);
      });
    }
    consentButton.addEventListener('click', () => {
      popupOverlay.style.display = 'block';
    });
    
    closeButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  }
  
window.onload = function() {
    cookieConsent();
};


  