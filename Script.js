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
        
        /* Fixed Star-Burst Beat Animation */
        .burst-container { position:relative; width:250px; height:250px; display:flex; align-items:center; justify-content:center; }
        .star-burst { position:absolute; width:100%; height:100%; stroke:#00f2fe; fill:none; stroke-width:3; filter:drop-shadow(0 0 8px #00f2fe); animation: rot 8s linear infinite; }
        @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .fetch-txt { color:#00ff00; margin-top:15px; font-weight:bold; }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div class="burst-container">
                <svg class="star-burst" viewBox="0 0 200 200">
                    <path d="M100 0 L115 40 L155 10 L130 50 L170 65 L130 80 L155 120 L115 90 L100 130 L85 90 L45 120 L70 80 L30 65 L70 50 L45 10 L85 40 Z"/>
                </svg>
                <svg width="200" height="200" style="transform:rotate(-90deg);">
                    <circle cx="100" cy="100" r="70" stroke="#00f2fe" stroke-width="6" fill="none" stroke-dasharray="440" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="position:absolute; color:#fff; font-size:50px; font-weight:bold;">${sec}</h1>
            </div>
            <div id="stat" style="color:#00f2fe; font-weight:bold; letter-spacing:2px; margin-top:20px;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 440 * (1 - (e / sec));
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
