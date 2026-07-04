(function() {
    'use strict';
    const _exp = 1785436200000;
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { position:fixed; inset:0; background:rgba(0,0,0,0.98); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:999999; font-family:sans-serif; }
        .glow-box { border: 2px solid #00f2fe; box-shadow: 0 0 15px #00f2fe; border-radius: 15px; background: #0a0a0a; padding: 25px; text-align: center; font-weight:bold; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; }
        
        /* Fixed Spiky Burst Animation */
        .burst-anim { animation: rot 6s linear infinite; }
        @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .fetch-txt { color:#00ff00; margin-top:15px; font-weight:bold; }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div style="position:relative; width:220px; height:220px; display:flex; align-items:center; justify-content:center;">
                <svg class="burst-anim" width="220" height="220" viewBox="0 0 100 100" style="position:absolute;">
                    <path d="M50 0 L57 25 L82 5 L75 30 L100 50 L75 70 L82 95 L57 75 L50 100 L43 75 L18 95 L25 70 L0 50 L25 30 L18 5 L43 25 Z" fill="none" stroke="#00f2fe" stroke-width="2" filter="drop-shadow(0 0 5px #00f2fe)"/>
                </svg>
                <svg width="180" height="180" style="transform:rotate(-90deg);">
                    <circle cx="90" cy="90" r="80" stroke="#00f2fe" stroke-width="8" fill="none" stroke-dasharray="502" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="position:absolute; color:#fff; font-size:50px; font-weight:bold;">${sec}</h1>
            </div>
            <div id="stat" style="color:#00f2fe; font-weight:bold; letter-spacing:2px; margin-top:20px;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 502 * (1 - (e / sec));
            if (e <= 0) {
                clearInterval(i);
                document.getElementById('stat').innerHTML = `
                    <div class="glow-box">AINCARD MODS KEY BYPASS<br>BY PAHADI MODS</div>
                    <div class="fetch-txt">FETCHING...</div>
                `;
                setTimeout(async () => {
                    try {
                        const r = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Load?v=' + Date.now());
                        window.location.replace((await r.text()).trim());
                    } catch(err) { window.location.replace(_fb); }
                }, 3000);
            }
        }, 1000);
    };

    const sel = document.createElement('div'); sel.id = 'selector';
    sel.className = 'glow-box';
    sel.style = 'position:fixed; top:20%; left:50%; transform:translateX(-50%); z-index:999999;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe; font-weight:bold;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(35)">⚡ FAST (35S)</button>
        <button class="btn" onclick="window.run(45)">🛡️ SECURE (45S)</button>
        <button class="btn" onclick="window.run(60)">🔒 SAFE (60S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { document.getElementById('selector').remove(); render(s); };
})();
