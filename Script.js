(function() {
    'use strict';
    const _exp = 1801526400000; // 2 February 2027 Expiry
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { 
            position: fixed; inset: 0; z-index: 999999; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            background: rgba(8, 12, 18, 0.75); 
            backdrop-filter: blur(10px) brightness(0.4);
            -webkit-backdrop-filter: blur(10px) brightness(0.4);
            overflow: hidden;
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; color:#fff; z-index: 20; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; text-decoration:none; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }

        /* Floating Storm Clouds */
        .cloud {
            position: absolute;
            background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.18) 0%, rgba(200, 220, 240, 0.08) 50%, transparent 75%);
            border-radius: 50%;
            filter: blur(25px);
            pointer-events: none;
            z-index: 1;
            animation: drift linear infinite;
        }
        @keyframes drift {
            0% { transform: translateX(-150px); }
            100% { transform: translateX(110vw); }
        }

        /* Rain Drops */
        .rain-streak {
            position: absolute;
            width: 1.5px;
            height: 38px;
            background: linear-gradient(transparent, rgba(255, 255, 255, 0.55));
            opacity: 0.7;
            pointer-events: none;
            z-index: 2;
            animation: rainFall linear infinite;
        }
        @keyframes rainFall {
            0% { transform: translateY(-50px) rotate(4deg); opacity: 0; }
            20% { opacity: 0.8; }
            100% { transform: translateY(105vh) rotate(4deg); opacity: 0; }
        }

        /* Spinner Area */
        .spinner-box {
            position: relative;
            width: 250px;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
        }

        /* Slower smooth rotation matching the video */
        .rotating-arcs-svg {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: spinCounterClockwise 3.5s linear infinite;
        }
        @keyframes spinCounterClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }

        /* Dark Center Disc */
        .center-disc {
            position: absolute;
            width: 125px;
            height: 125px;
            background: radial-gradient(circle, #1a202c 0%, #0d1117 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 25px rgba(0,0,0,0.85);
            z-index: 12;
        }
        .center-disc h1 {
            color: #ffffff;
            font-size: 54px;
            font-weight: 700;
            margin: 0;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .redirect-label {
            color: #00c3ff;
            font-weight: bold;
            letter-spacing: 3px;
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 22px;
            z-index: 10;
            text-shadow: 0 0 10px rgba(0, 195, 255, 0.55);
        }
    `;
    document.head.appendChild(style);

    // --- CLIENT-SIDE ANTI-SPAM & BAN SYSTEM ---
    try {
        const now = Date.now();
        let spamData = JSON.parse(localStorage.getItem('pahadi_spam_data') || '{"timestamps":[], "bannedUntil":0}');

        if (spamData.bannedUntil && now < spamData.bannedUntil) {
            const banDiv = document.createElement('div');
            banDiv.id = 'mko';
            banDiv.innerHTML = `
                <div class="glow-box" style="border: 3px solid #ff3333; box-shadow: 0 0 25px #ff3333;">
                    <div style="font-size:40px; margin-bottom:10px;">🚫</div>
                    <div style="color:#ff3333; font-size:22px; margin-bottom:10px; text-shadow:0 0 10px #ff3333;">Don't Spam</div>
                    Your Ip Is Banned For 1Hr<br><br>
                    <span style="color:#00f2fe; font-size:18px; text-shadow:0 0 8px #00f2fe;">Pahadi Mods</span>
                </div>`;
            document.body.appendChild(banDiv);
            return; 
        }

        if (spamData.bannedUntil && now >= spamData.bannedUntil) {
            spamData = { timestamps: [], bannedUntil: 0 };
        }

        let timestamps = (spamData.timestamps || []).filter(t => now - t < 240000);

        if (timestamps.length >= 3) {
            spamData.bannedUntil = now + 3600000;
            spamData.timestamps = [];
            localStorage.setItem('pahadi_spam_data', JSON.stringify(spamData));

            const banDiv = document.createElement('div');
            banDiv.id = 'mko';
            banDiv.innerHTML = `
                <div class="glow-box" style="border: 3px solid #ff3333; box-shadow: 0 0 25px #ff3333;">
                    <div style="font-size:40px; margin-bottom:10px;">🚫</div>
                    <div style="color:#ff3333; font-size:22px; margin-bottom:10px; text-shadow:0 0 10px #ff3333;">Don't Spam</div>
                    Your Ip Is Banned For 1Hr<br><br>
                    <span style="color:#00f2fe; font-size:18px; text-shadow:0 0 8px #00f2fe;">Pahadi Mods</span>
                </div>`;
            document.body.appendChild(banDiv);
            return;
        }

        timestamps.push(now);
        spamData.timestamps = timestamps;
        localStorage.setItem('pahadi_spam_data', JSON.stringify(spamData));

        const secureEndpoint = 'https://checker.pahadimods.workers.dev/';
        fetch(secureEndpoint, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Script-Auth': 'PAHADI_MODS_SECURE_KEY_2026'
            },
            body: JSON.stringify({
                ua: navigator.userAgent,
                time: new Date().toLocaleString()
            })
        }).catch(() => {});

    } catch(e) {}
    // -------------------------------------------------------------------------

    const render = (sec) => {
        if (document.getElementById('mko')) document.getElementById('mko').remove();
        if (document.getElementById('selector')) document.getElementById('selector').remove();

        const mko = document.createElement('div'); mko.id = 'mko';

        // Background Clouds Effect
        const cloud1 = document.createElement('div');
        cloud1.className = 'cloud';
        cloud1.style.cssText = 'top: 15%; width: 320px; height: 140px; animation-duration: 22s; opacity: 0.6;';
        mko.appendChild(cloud1);

        const cloud2 = document.createElement('div');
        cloud2.className = 'cloud';
        cloud2.style.cssText = 'top: 25%; width: 260px; height: 110px; animation-duration: 16s; animation-delay: -8s; opacity: 0.45;';
        mko.appendChild(cloud2);

        // Falling Rain Background
        const rainBox = document.createElement('div');
        rainBox.style.cssText = 'position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:2;';
        for (let j = 0; j < 45; j++) {
            const drop = document.createElement('div');
            drop.className = 'rain-streak';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.top = (Math.random() * -100) + 'px';
            drop.style.animationDuration = (0.5 + Math.random() * 0.4) + 's';
            drop.style.animationDelay = (Math.random() * 2) + 's';
            rainBox.appendChild(drop);
        }
        mko.appendChild(rainBox);

        // Core UI Structure
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'position:relative; z-index:10; display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%;';
        contentDiv.innerHTML = `
            <div style="color:#00f2fe; font-size:26px; font-weight:bold; margin-bottom:30px; text-shadow:0 0 15px #00f2fe; letter-spacing:2px; white-space:nowrap;">⚡ PAHADI MODS ⚡</div>
            
            <div class="spinner-box">
                <!-- 3-Layered Arcs -->
                <svg class="rotating-arcs-svg" viewBox="0 0 240 240">
                    <defs>
                        <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <!-- Inner Cyan Arc (Thickest, Leading) -->
                    <circle cx="120" cy="120" r="74" fill="none" stroke="#00f0ff" stroke-width="7" stroke-linecap="round" stroke-dasharray="140 330" stroke-dashoffset="0" filter="url(#arcGlow)"/>
                    
                    <!-- Middle Magenta Arc (Medium thickness, Following) -->
                    <circle cx="120" cy="120" r="85" fill="none" stroke="#e000b0" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="110 430" stroke-dashoffset="-70" filter="url(#arcGlow)"/>
                    
                    <!-- Outer Lime Green Arc (Thinnest, Trailing tail) -->
                    <circle cx="120" cy="120" r="95" fill="none" stroke="#76ff03" stroke-width="3" stroke-linecap="round" stroke-dasharray="90 510" stroke-dashoffset="-140" filter="url(#arcGlow)"/>
                </svg>

                <div class="center-disc">
                    <h1 id="ct">${sec}</h1>
                </div>
            </div>
            
            <div class="redirect-label">REDIRECTING...</div>
            
            <a href="https://t.me/+YOUR_TELEGRAM_CHANNEL" target="_blank" class="btn" style="width:100%; max-width:240px; margin-top:35px; font-size:14px; padding:12px; background:transparent; border: 2px solid #00f2fe; box-shadow:0 0 8px #00f2fe; border-radius:10px;">📢 JOIN TELEGRAM</a>
        `;
        mko.appendChild(contentDiv);
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; 
            const ctEl = document.getElementById('ct');
            if (ctEl) ctEl.innerText = e;
            
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box" style="z-index:25;">
                        <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
                        AINCARD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ FETCHING DATA...</div>
                    </div>`;
                setTimeout(async () => {
                    try {
                        const r = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Pahadi.txt?v=' + Date.now());
                        let finalUrl = (await r.text()).trim();
                        if (!finalUrl || !finalUrl.startsWith('http')) finalUrl = _fb;
                        window.location.replace(finalUrl);
                    } catch(err) { window.location.replace(_fb); }
                }, 3000);
            }
        }, 1000);
    };

    const sel = document.createElement('div'); sel.id = 'selector';
    sel.className = 'glow-box';
    sel.style.cssText = 'position:fixed; top:20%; left:50%; transform:translateX(-50%); z-index:999999;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe; font-weight:bold;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(25)">⚡ FAST (25S)</button>
        <button class="btn" onclick="window.run(35)">🛡️ SECURE (35S)</button>
        <button class="btn" onclick="window.run(59)">🔒 SAFE (59S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { render(s); };
})();
