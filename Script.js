(function() {
    'use strict';
    const _exp = 1785436200000;
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { position:fixed; inset:0; background:rgba(0,0,0,0.98); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:999999; font-family:sans-serif; }
        .glow-box { border: 2px solid #00f2fe; box-shadow: 0 0 15px #00f2fe; border-radius: 15px; background: #0a0a0a; padding: 25px; text-align: center; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; text-transform:uppercase; box-shadow: 0 0 8px #00f2fe; }
        .star-ring { width:200px; height:200px; position:relative; display:flex; align-items:center; justify-content:center; }
        .beat-shape { position:absolute; width:100%; height:100%; border: 3px solid #00f2fe; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); box-shadow: 0 0 20px #00f2fe; }
        .fetch-txt { color:#00f2fe; margin-top:10px; font-weight:bold; font-size:12px; }
    `;
    document.head.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div class="star-ring">
                <div class="beat-shape"></div>
                <h1 id="ct" style="color:#fff; font-size:50px; z-index:1;">${sec}</h1>
            </div>
            <p style="color:#00f2fe; margin-top:20px; font-weight:bold; letter-spacing:2px;">REDIRECTING...</p>
        `;
        document.body.appendChild(mko);
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box">
                        <h2 style="color:#00ff00; font-weight:bold;">AINCRAD MODS KEY BYPASSED<br>By Pahadi Mods</h2>
                        <div class="fetch-txt">FETCHING...</div>
                    </div>`;
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
