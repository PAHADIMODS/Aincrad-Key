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
        .glow-box { border: 2px solid #fff; box-shadow: 0 0 20px #fff; border-radius: 15px; background: rgba(0,0,0,0.8); padding: 25px; text-align: center; font-weight:bold; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #fff; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #fff; }
        
        /* RGB Rotating Border */
        .rgb-border {
            width: 210px; height: 210px; border-radius: 50%;
            position: relative; overflow: hidden;
            display: flex; align-items: center; justify-content: center;
        }
        .rgb-border::before {
            content: ""; position: absolute; width: 200%; height: 200%;
            background: conic-gradient(#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
            animation: rot 3s linear infinite;
        }
        .rgb-border::after {
            content: ""; position: absolute; inset: 6px;
            background: #000; border-radius: 50%;
        }
        @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .fetch-txt { color:#00ff00; margin-top:15px; font-weight:bold; }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div class="rgb-border">
                <h1 id="ct" style="color:#fff; font-size:60px; font-weight:bold; z-index:1; text-shadow:0 0 10px #fff;">${sec}</h1>
            </div>
            <div id="stat" style="color:#fff; font-weight:bold; letter-spacing:2px; margin-top:30px; font-size:18px; text-shadow:0 0 5px #fff;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
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
        <h2 style="color:#fff; font-weight:bold; text-shadow:0 0 5px #fff;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(35)">⚡ FAST (35S)</button>
        <button class="btn" onclick="window.run(45)">🛡️ SECURE (45S)</button>
        <button class="btn" onclick="window.run(60)">🔒 SAFE (60S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { document.getElementById('selector').remove(); render(s); };
})();
