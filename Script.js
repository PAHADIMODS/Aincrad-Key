(function() {
    'use strict';

    const _expiry = 1785436200000;
    const _fallback = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _expiry) { window.location.href = _fallback; return; }

    // UI Render Function
    const renderCountdown = (sec) => {
        document.getElementById('selector').style.display = 'none'; // Pehle wala box hata dega
        const mko = document.createElement('div');
        mko.id = 'mko';
        mko.style = 'position:fixed;inset:0;background:#050505;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999999;color:#00f2fe;font-family:sans-serif;';
        mko.innerHTML = `
            <h1 style="font-size:24px;letter-spacing:4px;margin-bottom:30px;">PAHADI MODS</h1>
            <svg width="200" height="200" style="transform:rotate(-90deg);">
                <circle cx="100" cy="100" r="80" stroke="#111" stroke-width="8" fill="none"/>
                <circle id="ring" cx="100" cy="100" r="80" stroke="#00f2fe" stroke-width="8" fill="none" stroke-dasharray="502" style="transition:stroke-dashoffset 1s linear;"/>
            </svg>
            <h1 id="ct" style="position:absolute;font-size:48px;font-weight:900;">${sec}</h1>
            <p style="margin-top:30px;letter-spacing:3px;font-size:14px;">REDIRECTING...</p>
        `;
        document.body.appendChild(mko);

        let e = sec;
        const i = setInterval(async () => {
            e--;
            document.getElementById('ct').innerText = e;
            document.getElementById('ring').style.strokeDashoffset = 502 * (1 - (e / sec));
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = '<h2 style="text-align:center;color:#00ff00;">Aincard Mods Key Bypass<br>By Pahadi Mods</h2>';
                setTimeout(async () => {
                    try {
                        const res = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Load?v=' + Date.now());
                        const link = (await res.text()).trim();
                        window.location.replace(link);
                    } catch(err) { window.location.replace(_fallback); }
                }, 3000);
            }
        }, 1000);
    };

    // Initial Selection UI
    const sel = document.createElement('div');
    sel.id = 'selector';
    sel.style = 'position:fixed;top:20%;left:50%;transform:translateX(-50%);z-index:999999;background:#111;padding:20px;border:2px solid #00f2fe;border-radius:15px;text-align:center;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe">SELECT SYSTEM MODE</h2>
        <button onclick="window.runTimer(35)" style="display:block;width:200px;margin:10px;padding:10px;background:#222;color:#fff;border:1px solid #00f2fe;cursor:pointer;">⚡ FAST (35S)</button>
        <button onclick="window.runTimer(45)" style="display:block;width:200px;margin:10px;padding:10px;background:#222;color:#fff;border:1px solid #00f2fe;cursor:pointer;">🛡️ SECURE (45S)</button>
        <button onclick="window.runTimer(60)" style="display:block;width:200px;margin:10px;padding:10px;background:#222;color:#fff;border:1px solid #00f2fe;cursor:pointer;">🔒 SAFE (60S)</button>
    `;
    document.body.appendChild(sel);

    window.runTimer = (s) => renderCountdown(s);
})();
