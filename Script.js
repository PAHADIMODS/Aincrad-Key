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
            background: linear-gradient(45deg, #ff00ff, #00ffff, #ff0000, #ff00ff);
            background-size: 400% 400%; animation: rgb-bg 10s ease infinite;
        }
        @keyframes rgb-bg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        
        .glow-box { border: 2px solid #fff; box-shadow: 0 0 20px #fff; border-radius: 15px; background: rgba(0,0,0,0.8); padding: 25px; text-align: center; font-weight:bold; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #fff; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #fff; }
        
        .circle-container { position:relative; width:220px; height:220px; display:flex; align-items:center; justify-content:center; }
        .fetch-txt { color:#00ff00; margin-top:15px; font-weight:bold; }
    `;
    document.body.appendChild(style);

    const render = (sec) => {
        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div class="circle-container">
                <svg width="200" height="200" style="transform:rotate(-90deg);">
                    <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.2)" stroke-width="10" fill="none"/>
                    <circle cx="100" cy="100" r="90" stroke="#fff" stroke-width="10" fill="none" stroke-dasharray="565" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                </svg>
                <h1 id="ct" style="position:absolute; color:#fff; font-size:50px; font-weight:bold; text-shadow:0 0 10px #fff;">${sec}</h1>
            </div>
            <div id="stat" style="color:#fff; font-weight:bold; letter-spacing:2px; margin-top:20px; text-shadow:0 0 5px #fff;">REDIRECTING...</div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 565 * (1 - (e / sec));
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
        <h2 style="color:#fff; font-weight:bold; text-shadow:0 0 5px #fff;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(35)">⚡ FAST (35S)</button>
        <button class="btn" onclick="window.run(45)">🛡️ SECURE (45S)</button>
        <button class="btn" onclick="window.run(60)">🔒 SAFE (60S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { document.getElementById('selector').remove(); render(s); };
})();
