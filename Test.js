javascript:(function(){
  "use strict";
  const SECRET = "SAKIR_SEC_K3Y_2026";
  
  const hash = (str) => {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) + h + str.charCodeAt(i);
      h = h & h;
    }
    return Math.abs(h).toString(16);
  };

  const deviceID = btoa(navigator.userAgent.substring(0, 60)).substring(0, 40);
  const ts = Date.now();
  const sig = hash(deviceID + ts + SECRET).substring(0, 12);
  
  const targetUrl = `https://getkey.sakirmobilepanel.shop/verify-key?device=${deviceID}&t=${ts}&sig=${sig}`;
  
  if (location.hostname === "getkey.sakirmobilepanel.shop") {
    const p = location.pathname.replace(/\/+$/, "");
    if (p.indexOf("/verify-key") === 0 && location.search.indexOf("sig=") !== -1) {
      // Grab the key if already on the verified page
      const grab = () => {
        const kEl = document.getElementById("licenseKey");
        if (kEl) {
          const key = kEl.textContent.trim();
          if (key) {
            alert("Sakir Aimbot Key: " + key);
            return true;
          }
        }
        return false;
      };
      if (!grab()) setTimeout(grab, 1000);
      return;
    }
  }
  
  location.replace(targetUrl);
})();
