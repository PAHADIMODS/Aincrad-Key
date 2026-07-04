(function() {
    'use strict';

    // Fallback Expiry Redirect Link
    const r = 'https://PAHAGIMODS.short.gy/yEqWCw';

    // 30 July 2026 Expiry Verification System
    if (Date.now() >= 1785436200000) {
        window.location.href = r;
        return;
    }

    if (window._pm) return;
    window._pm = 1;

    // Inject Styles
    const s = document.createElement('style');
    s.innerHTML = '#mko{position:fixed;inset:0;z-index:2147483647;display:flex;justify-content:center;align-items:center;font-family:system-ui,-apple-system,sans-serif;background:rgba(10,12,18,.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}.mk-c{width:100%;max-width:320px;text-align:center}.mk-t{font-size:24px;font-weight:900;background:linear-gradient(135deg,#00f2fe,#4facfe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:30px;text-transform:uppercase;letter-spacing:2px;filter:drop-shadow(0 0 8px rgba(0,242,254,.3))}.mk-w{position:relative;width:170px;height:170px;margin:0 auto 30px;display:flex;align-items:center;justify-content:center;background:rgba(15,18,27,.9);border-radius:50%;box-shadow:0 0 30px rgba(0,0,0,.6)}.mk-v{position:absolute;z-index:3;transform:rotate(-90deg)}.mk-m{font-size:46px;font-weight:900;color:#fff;position:relative;z-index:4;text-shadow:0 0 15px #00ffcc}.mk-s{color:#00f2fe;font-size:13px;font-weight:800;letter-spacing:3px;text-transform:uppercase;animation:p 1.5s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.5}}';
    document.head.appendChild(s);

    const m = 40; // 40-Second Countdown Timer
    let e = m;
    const o = document.createElement('div');
    o.id = 'mko';
    
    const h = String.fromCharCode(80, 65, 72, 65, 68, 73, 32, 77, 79, 68, 83); // PAHADI MODS
    o.innerHTML = '<div class="mk-c"><div class="mk-t">' + h + '</div><div class="mk-w"><svg class="mk-v" width="160" height="160"><circle cx="80" cy="80" r="70" fill="none" stroke="rgba(0,255,204,0.06)" stroke-width="7"></circle><circle id="p-ring" cx="80" cy="80" r="70" fill="none" stroke="#00f2fe" stroke-width="7" stroke-dasharray="440" stroke-dashoffset="0" stroke-linecap="round" style="filter:drop-shadow(0 0 6px #00f2fe);transition:stroke-dashoffset 1s linear;"></circle></svg><div class="mk-m" id="cnt">' + m + '</div></div><div class="mk-s">REDIRECTING...</div></div>';
    document.body.appendChild(o);

    const i = setInterval(async () => {
        e--;
        document.getElementById('cnt').innerText = e;
        document.getElementById('p-ring').style.strokeDashoffset = 440 * (1 - (e / m));

        if (e <= 0) {
            clearInterval(i);
            document.querySelector('.mk-s').innerText = 'FETCHING...';
            try {
                // Live Payload Link fetch system from your repo
                const gUrl = 'https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/refs/heads/main/Load';
                const res = await fetch(gUrl);
                let t = await res.text();
                t = t.trim();
                if (t.startsWith('http')) {
                    o.remove();
                    window.location.replace(t);
                } else {
                    alert('Sahi link nahi mila!');
                    o.remove();
                }
            } catch (err) {
                alert('Network Error!');
                o.remove();
            }
        }
    }, 1000);
})();
