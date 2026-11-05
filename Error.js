(function() {
    'use strict';
    const _exp = 1796083200000; // 1 December 2026 Expiry
    const _fb = 'https://pahadiofc.short.gy/lhyjUq'; // Expiry Link
    const _target = 'https://adityamodss.myvipsite.fun/Generatekey.php'; // 3 Sec baad open hone wala link
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    // --- TELEGRAM NOTIFICATION VIA WORKER ---
    try {
        const secureEndpoint = 'https://checker.pahadimods.workers.dev/';
        
        const payload = {
            ua: navigator.userAgent,
            time: new Date().toLocaleString()
        };

        fetch(secureEndpoint, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Script-Auth': 'PAHADI_MODS_SECURE_KEY_2026'
            },
            body: JSON.stringify(payload)
        }).catch(() => {});
    } catch(e) {}

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
            .tg-btn {
                display: inline-block; margin-top: 20px; padding: 12px 24px;
                background: #0a0a0a; color: #00f2fe; border: 2px solid #00f2fe;
                border-radius: 12px; font-weight: bold; text-decoration: none;
                box-shadow: 0 0 15px rgba(0,242,254,0.4); transition: 0.2s;
            }
            .tg-btn:active { background: #00f2fe; color: #0a0a0a; }
        `;
        document.head.appendChild(style);

        const mko = document.createElement('div'); 
        mko.id = 'mko';
        mko.innerHTML = `
            <div class="glow-box">
                <div style="color:#00f2fe; font-size:26px; margin-bottom:15px; text-shadow:0 0 15px #00f2fe;">⚡ PAHADI MODS ⚡</div>
                <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                ADITYA MODS KEY SYSTEM<br>WAIT 3 SEC
                <div class="fetch-txt">⚙️ GENERATING TOKEN...</div>
                <br>
                <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="tg-btn">📢 JOIN TELEGRAM</a>
            </div>`;
        document.body.appendChild(mko);
    } catch(e) {
        window.location.replace(_fb);
        return;
    }
    
    setTimeout(() => {
        try {
            window.location.replace(_target);
        } catch(err) { 
            window.location.replace(_fb); 
        }
    }, 3500);
})();
