(function() {
    'use strict';
    const _exp = 1785436200000;
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { 
            position:fixed; inset:0; z-index:999999; font-family:sans-serif;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(10px);
        }
        .glow-box { border: 2px solid #00f2fe; box-shadow: 0 0 15px #00f2fe; border-radius: 15px; background: #0a0a0a; padding: 25px; text-align: center; font-weight:bold; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; }
        .fetch-txt { color:#00ff00; margin-top:15px; font-weight:bold; }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div style="color:#00f2fe; font-size:32px; font-weight:bold; margin-bottom:25px; text-shadow:0 0 15px #00f2fe; letter-spacing:1px;">PAHADI MODS</div>
            <div style="position:relative; width:220px; height:220px; display:flex; align-items:center; justify-content:center; border-radius:50%; box-shadow: 0 0 80px 30px rgba(0, 242, 254, 0.4);">
                <svg width="220" height="220" style="position:absolute; transform:rotate(-90deg);">
                    <circle cx="110" cy="110" r="95" stroke="#1a1a1a" stroke-width="12" fill="none"/>
                    <circle cx="110" cy="110" r="95" stroke="#00f2fe" stroke-width="12" fill="none" stroke-dasharray="597" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="color:#fff; font-size:60px; font-weight:bold; text-shadow:0 0 10px #fff;">${sec}</h1>
            </div>
            <div id="stat" style="color:#fff; font-weight:bold; letter-spacing:2px; margin-top:40px; font-size:18px;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 597 * (1 - (e / sec));
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box">
                        AINCARD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt" style="margin-top:20px;">FETCHING...</div>
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
