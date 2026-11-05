(function() {
    'use strict';
    const _exp = 1796083200000; // 1 December 2026 Expiry
    const _fb = 'https://pahadiofc.short.gy/lhyjUq'; // Expiry Link
    const _target = 'https://adityamodss.myvipsite.fun/Generatekey.php'; // Target Link
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    // --- STRICT IP DETECTION & MULTI-LAYER LOCK ---
    const runScript = async () => {
        try {
            const res = await fetch('https://api.ipify.org?format=json');
            const data = await res.json();
            const currentIP = data.ip;

            // Check across localStorage and sessionStorage for strict restriction
            const lastIPLocal = localStorage.getItem('pahadi_strict_ip');
            const lastIPSess = sessionStorage.getItem('pahadi_strict_ip');

            if ((lastIPLocal && lastIPLocal === currentIP) || (lastIPSess && lastIPSess === currentIP)) {
                // Same IP Detected - Show Modern UI Warning Card
                renderBlockUI();
                return;
            }

            // Lock IP strictly
            localStorage.setItem('pahadi_strict_ip', currentIP);
            sessionStorage.setItem('pahadi_strict_ip', currentIP);

            // --- TELEGRAM NOTIFICATION VIA WORKER ---
            try {
                const secureEndpoint = 'https://checker.pahadimods.workers.dev/';
                fetch(secureEndpoint, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'X-Script-Auth': 'PAHADI_MODS_SECURE_KEY_2026'
                    },
                    body: JSON.stringify({
                        ua: navigator.userAgent,
                        time: new Date().toLocaleString(),
                        ip: currentIP
                    })
                }).catch(() => {});
            } catch(e) {}

            // Render Success / Loading UI matching the clean screenshot style
            renderMainUI(_target);

        } catch (err) {
            // Fallback if IP API fails
            renderMainUI(_target);
        }
    };

    const renderStyles = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            #mko-overlay { 
                position: fixed; inset: 0; z-index: 999999; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                background: rgba(240, 244, 255, 0.85); backdrop-filter: blur(20px);
            }
            .mko-card { 
                background: #ffffff; color: #1a1a1a;
                border-radius: 28px; box-shadow: 0 20px 50px rgba(0, 100, 255, 0.12); 
                padding: 35px 25px; text-align: center; width: 85%; max-width: 340px; 
                border: 1px solid rgba(255, 255, 255, 0.8);
            }
            .mko-logo {
                width: 60px; height: 60px; margin: 0 auto 15px auto;
                background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
                border-radius: 50%; display: flex; align-items: center; justify-content: center;
                box-shadow: 0 10px 20px rgba(0, 242, 254, 0.3); color: #fff; font-size: 26px;
            }
            .mko-title { font-size: 20px; font-weight: 800; letter-spacing: 1.5px; color: #111; margin-bottom: 5px; }
            .mko-subtitle { font-size: 11px; font-weight: 600; letter-spacing: 2px; color: #888; margin-bottom: 15px; text-transform: uppercase; }
            .mko-status {
                display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700;
                color: #00b074; background: rgba(0, 176, 116, 0.1); padding: 4px 12px; border-radius: 20px; margin-bottom: 25px;
            }
            .mko-status-dot { width: 7px; height: 7px; background: #00b074; border-radius: 50%; box-shadow: 0 0 8px #00b074; }
            .mko-pill {
                background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px;
                padding: 14px; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 12px;
                letter-spacing: 0.5px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
            }
            .mko-btn {
                display: block; width: 100%; padding: 14px; background: linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%);
                color: #fff; border: none; border-radius: 14px; font-size: 14px; font-weight: 700; cursor: pointer;
                box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3); text-decoration: none; margin-bottom: 12px; transition: 0.2s;
            }
            .mko-btn-outline {
                display: block; width: 100%; padding: 14px; background: #ffffff;
                color: #334155; border: 1px solid #cbd5e1; border-radius: 14px; font-size: 14px; font-weight: 700; 
                text-decoration: none; transition: 0.2s; box-sizing: border-box;
            }
            .mko-footer { font-size: 10px; color: #94a3b8; margin-top: 20px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; }
        `;
        document.head.appendChild(style);
    };

    const renderBlockUI = () => {
        renderStyles();
        const overlay = document.createElement('div');
        overlay.id = 'mko-overlay';
        overlay.innerHTML = `
            <div class="mko-card" style="border-color: #fee2e2;">
                <div class="mko-logo" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);">✈️</div>
                <div class="mko-title" style="color: #dc2626;">SAME IP DETECTED</div>
                <div class="mko-subtitle">Access Restricted</div>
                <div class="mko-status" style="color: #dc2626; background: rgba(239, 68, 68, 0.1);">
                    <div class="mko-status-dot" style="background: #dc2626; box-shadow: 0 0 8px #dc2626;"></div> FLIGHT MODE REQUIRED
                </div>
                <div class="mko-pill" style="color: #b91c1c; font-size: 12px; line-height: 1.5;">
                    Ek IP par dobara key generate nahi hogi! Nayi key ke liye apna <b>Flight Mode ON karke OFF karein</b> taaki IP change ho jaye.
                </div>
                <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="mko-btn" style="background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);">JOIN COMMUNITY</a>
                <div class="mko-footer">PAHADI MODS • SECURE SYSTEM</div>
            </div>
        `;
        document.body.appendChild(overlay);
    };

    const renderMainUI = (targetUrl) => {
        renderStyles();
        const overlay = document.createElement('div');
        overlay.id = 'mko-overlay';
        overlay.innerHTML = `
            <div class="mko-card">
                <div class="mko-logo">💧</div>
                <div class="mko-title">ADITYA MODS</div>
                <div class="mko-subtitle">Secure Access Gateway</div>
                <div class="mko-status">
                    <div class="mko-status-dot"></div> ONLINE SYSTEM
                </div>
                <div class="mko-pill" id="mko-status-text">
                    ⚡ Preparing Secure Token...
                </div>
                <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="mko-btn" id="mko-action-btn" style="opacity: 0.6; pointer-events: none;">PLEASE WAIT (3s)</a>
                <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="mko-btn-outline">JOIN COMMUNITY</a>
                <div class="mko-footer">PAHADI MODS • BUILD 3.1.0</div>
            </div>
        `;
        document.body.appendChild(overlay);

        let sec = 3;
        const statusText = document.getElementById('mko-status-text');
        const actionBtn = document.getElementById('mko-action-btn');

        const timer = setInterval(() => {
            sec--;
            if (sec > 0) {
                actionBtn.innerText = `PLEASE WAIT (${sec}s)`;
            } else {
                clearInterval(timer);
                statusText.innerText = "✅ Verification Successful!";
                actionBtn.innerText = "REDIRECTING...";
                actionBtn.style.opacity = "1";
                actionBtn.style.pointerEvents = "auto";
                
                setTimeout(() => {
                    window.location.replace(targetUrl);
                }, 800);
            }
        }, 1000);
    };

    runScript();
})();
