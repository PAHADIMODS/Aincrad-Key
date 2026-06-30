(function(){
    if(window._pm) return;
    window._pm = 1;

    // Premium UI Styles Injection
    const style = document.createElement('style');
    style.innerHTML = '#mko{position:fixed;inset:0;z-index:2147483647;display:flex;justify-content:center;align-items:center;font-family:system-ui,-apple-system,sans-serif;background:rgba(10,12,18,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}#p-content{width:100%;max-width:340px;background:rgba(18,22,32,.9);border:2px solid #00f2fe;border-radius:24px;padding:30px 20px;text-align:center;box-shadow:0 0 30px rgba(0,242,254,.45)}.mk-t{font-size:20px;font-weight:800;color:#00f2fe;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px}.mk-st{font-size:11px;font-weight:600;color:#8a99ad;text-transform:uppercase;letter-spacing:1px;margin-bottom:25px}.btn-zone{display:flex;flex-direction:column;gap:15px}.t-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:rgba(255,255,255,.03);color:#fff;padding:14px;font-size:14px;font-weight:700;border-radius:12px;cursor:pointer;transition:all .3s ease;text-transform:uppercase;letter-spacing:1px}.b-fst{border:1px solid #10b981}.b-fst:hover{background:rgba(16,185,129,.15);box-shadow:0 0 15px rgba(16,185,129,.4)}.b-sec{border:1px solid #f59e0b}.b-sec:hover{background:rgba(245,158,11,.15);box-shadow:0 0 15px rgba(245,158,11,.4)}.b-saf{border:1px solid #06b6d4}.b-saf:hover{background:rgba(6,182,212,.15);box-shadow:0 0 15px rgba(6,182,212,.4)}.mk-w{position:relative;width:160px;height:160px;margin:0 auto 25px;display:flex;align-items:center;justify-content:center;background:rgba(15,18,27,.9);border-radius:50%;box-shadow:0 0 35px rgba(0,0,0,.7)}.mk-v{position:absolute;z-index:3;transform:rotate(-90deg)}.mk-m{font-size:46px;font-weight:900;color:#fff;position:relative;z-index:4;text-shadow:0 0 15px #00ffcc}.success-box{background:rgba(15,18,27,.95);border:2px solid #00ffcc;border-radius:15px;padding:25px 15px;box-shadow:0 0 40px rgba(0,255,204,.3);animation:pulse 2s infinite}.success-t{font-size:18px;font-weight:800;color:#00ffcc;text-transform:uppercase;letter-spacing:1px;line-height:1.5;text-shadow:0 0 10px rgba(0,255,204,.5)}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}';
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'mko';
    overlay.innerHTML = '<div id="p-content"><div class="mk-t">Select System Mode</div><div class="mk-st">Choose Security Bypass Method</div><div class="btn-zone"><button class="t-btn b-fst" onclick="window._startPahadiTimer(20)">⚡ Fast Mode (20s)</button><button class="t-btn b-sec" onclick="window._startPahadiTimer(30)">🛡️ Secure Mode (30s)</button><button class="t-btn b-saf" onclick="window._startPahadiTimer(45)">🔐 Safe Mode (45s)</button></div></div>';
    document.body.appendChild(overlay);

    window._startPahadiTimer = function(duration) {
        const totalTime = duration;
        let timeLeft = totalTime;
        const brand = String.fromCharCode(80,65,72,65,68,73,32,77,79,68,83); // "PAHADI MODS"

        document.getElementById('p-content').innerHTML = '<div class="mk-t">'+brand+'</div><div style="font-size:11px;color:#8a99ad;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px">Bypassing Security...</div><div class="mk-w"><svg class="mk-v" width="160" height="160"><circle cx="80" cy="80" r="70" fill="none" stroke="rgba(0,255,204,0.06)" stroke-width="7"></circle><circle id="p-ring" cx="80" cy="80" r="70" fill="none" stroke="#00f2fe" stroke-width="7" stroke-dasharray="440" stroke-dashoffset="0" stroke-linecap="round" style="filter:drop-shadow(0 0 6px #00f2fe);transition:stroke-dashoffset 1s linear"></circle></svg><div class="mk-m" id="cnt">'+timeLeft+'</div></div>';

        const interval = setInterval(async () => {
            timeLeft--;
            const cDiv = document.getElementById('cnt');
            if(cDiv) cDiv.innerText = timeLeft;
            const ring = document.getElementById('p-ring');
            if(ring) ring.style.strokeDashoffset = 440 * (1 - (timeLeft / totalTime));

            if (timeLeft <= 0) {
                clearInterval(interval);
                document.getElementById('p-content').innerHTML = '<div class="success-box"><div class="success-t">Aincrad Key Bypassed<br>By Pahadi Mods</div></div>';
                
                setTimeout(async () => {
                    try {
                        // Hidden Fetch Path for "/Aincrad-Key/refs/heads/main/Load"
                        const gUrl = String.fromCharCode(104,116,116,112,115,58,47,47,114,97,119,46,103,105,116,104,117,98,117,115,101,114,99,111,110,116,101,110,116,46,99,111,109,47,80,65,72,65,68,73,77,79,68,83,47,65,105,110,99,114,97,100,45,75,101,121,47,114,101,102,115,47,104,101,97,100,115,47,109,97,105,110,47,76,111,97,100);
                        const res = await fetch(gUrl + '?t=' + Date.now());
                        let target = await res.text();
                        target = target.trim();

                        if (target.startsWith('http')) {
                            overlay.remove();
                            window.location.replace(target);
                        } else {
                            alert('Redirection link nahi mila!');
                            overlay.remove();
                        }
                    } catch (err) {
                        alert('Network Error!');
                        overlay.remove();
                    }
                }, 4000);
            }
        }, 1000);
    };
})();
