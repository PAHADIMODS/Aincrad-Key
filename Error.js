(function() {
    'use strict';
    const _exp = 1788144000000; // 30 August 2026 Expiry
    const _fb = 'https://PAHADIMODS.short.gy/yEqWCw';
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    try {
        const style = document.createElement('style');
        style.innerHTML = `
            #mko { 
                position: fixed; inset: 0; z-index: 999999; font-family: sans-serif;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
            }
            .glow-box { 
                border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; 
                background: #0a0a0a; padding: 40px; text-align: center; font-weight: bold; 
                width: 80%; max-width: 350px; color: #fff; 
            }
            .fetch-txt { color: #00ff00; margin-top: 25px; font-weight: bold; font-size: 18px; }
        `;
        document.head.appendChild(style);

        const mko = document.createElement('div'); 
        mko.id = 'mko';
        mko.innerHTML = `
            <div class="glow-box">
                <div style="color:#00f2fe; font-size:26px; margin-bottom:15px; text-shadow:0 0 15px #00f2fe;">⚡ PAHADI MODS ⚡</div>
                <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                ERROR HACKER KEY SYSTEM<br>BY PAHADI MODS
                <div class="fetch-txt">⚙️ GENERATING TOKEN...</div>
            </div>`;
        document.body.appendChild(mko);
    } catch(e) {
        window.location.replace(_fb);
        return;
    }
    
    setTimeout(() => {
        try {
            // Live timestamp aur ek verified working signature combination use kiya hai
            const currentTimestamp = Date.now();
            const prefix = '178559';
            const randomSuffix = Math.floor(Math.random() * 9000000) + 1000000; 
            const finalToken = prefix + randomSuffix;
            
            // Server-accepted valid signature format
            const validSig = '10561416';
            
            const targetUrl = 'https://getkey.sakirmobilepanel.shop/verify-key?device=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDE2&t=' + finalToken + '&sig=' + validSig;
            window.location.replace(targetUrl);
        } catch(err) { 
            window.location.replace(_fb); 
        }
    }, 3500);
})();
