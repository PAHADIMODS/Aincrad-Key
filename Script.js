(function(){
    // Ye link expiry hone par redirect karega
    const r = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x50\x41\x48\x41\x47\x49\x4d\x4f\x44\x53\x2e\x73\x68\x6f\x72\x74\x2e\x67\x79\x2f\x79\x45\x71\x57\x43\x77';
    
    // 30 July 2026 Expiry
    if (Date.now() >= 1785436200000) { window.location.href = r; return; }

    const s = document.createElement('style');
    s.innerHTML = '#mko{position:fixed;inset:0;z-index:999999;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.95);font-family:sans-serif}#sel{text-align:center;padding:20px;border:2px solid #00f2fe;border-radius:15px;background:#111}.mode-btn{display:block;width:250px;padding:15px;margin:10px;color:#fff;background:#222;border:1px solid #00f2fe;border-radius:8px;cursor:pointer;font-weight:bold}';
    document.head.appendChild(s);

    const o = document.createElement('div');
    o.id = 'mko';
    o.innerHTML = '<div id="sel"><h2 style="color:#00f2fe">SELECT SYSTEM MODE</h2><button class="mode-btn" onclick="window.startTimer(35)">⚡ FAST (35S)</button><button class="mode-btn" onclick="window.startTimer(45)">🛡️ SECURE (45S)</button><button class="mode-btn" onclick="window.startTimer(60)">🔒 SAFE (60S)</button></div>';
    document.body.appendChild(o);

    window.startTimer = async function(sec) {
        let e = sec;
        const box = document.getElementById('sel');
        box.innerHTML = '<h1 style="color:#00f2fe;font-size:50px" id="ct">'+sec+'</h1><p style="color:#fff">Bypassing...</p>';
        
        const i = setInterval(async () => {
            e--;
            document.getElementById('ct').innerText = e;
            if (e <= 0) {
                clearInterval(i);
                box.innerHTML = '<h2 style="color:#00ff00;font-size:20px">Aincard Mods Key Bypass<br>By Pahadi Mods</h2>';
                setTimeout(async () => {
                    try {
                        const res = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Load?v='+Date.now());
                        const link = (await res.text()).trim();
                        window.location.replace(link);
                    } catch(err) { window.location.replace(r); }
                }, 3000);
            }
        }, 1000);
    };
})();
