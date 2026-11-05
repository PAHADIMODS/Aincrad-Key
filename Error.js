(function() {
    'use strict';
    const _exp = 1796083200000; // 1 December 2026 Expiry
    const _fb = 'https://pahadiofc.short.gy/lhyjUq'; // Expiry Link
    const _target = 'https://adityamodss.myvipsite.fun/Generatekey.php'; // 3 Sec baad open hone wala link
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    // --- MULTI-USER IP & FLIGHT MODE CHECKER ---
    try {
        const checkUserIP = async () => {
            try {
                // Fetch public IP of current user
                const res = await fetch('https://api.ipify.org?format=json');
                const data = await res.json();
                const currentIP = data.ip;

                // Check stored IP in localStorage (unique per browser/device)
                const lastIP = localStorage.getItem('pahadi_last_ip');

                if (lastIP && lastIP === currentIP) {
                    // Same IP detected - Stop redirection and show Flight Mode alert
                    const style = document.createElement('style');
                    style.innerHTML = `
                        #mko { 
                            position: fixed; inset: 0; z-index: 999999; font-family: sans-serif;
                            display: flex; flex-direction: column; align-items: center; justify-content: center;
                            background: rgba(0,0,0,0.9); backdrop-filter: blur(15px);
                        }
                        .glow-box { 
                            border: 3px solid #ff3333; box-shadow: 0 0 25px #ff3333; border-radius: 20px; 
                            background: #0a0a0a; padding: 35px; text-align: center; font-weight: bold; 
                            width: 85%; max-width: 360px; color: #fff; 
                        }
                        .btn-fm {
                            display: inline-block; margin-top: 20px; padding: 12px 24px;
                            background: #0a0a0a; color: #ff3333; border: 2px solid #ff3333;
                            border-radius: 12px; font-weight: bold; text-decoration: none;
                            box-shadow: 0 0 15px rgba(255,51,51,0.4);
                        }
                    `;
                    document.head.appendChild(style);

                    const blockDiv = document.createElement('div');
                    blockDiv.id = 'mko';
                    blockDiv.innerHTML = `
                        <div class="glow-box">
                            <div style="font-size:40px; margin-bottom:10px;">✈️</div>
                            <div style="color:#ff3333; font-size:24px; margin-bottom:10px; text-shadow:0 0 10px #ff3333;">SAME IP DETECTED</div>
                            <div style="font-size:14px; color:#ccc; line-height:1.5; margin-bottom:15px;">
                                Ek IP par baar-baar key generate nahi hogi! Nayi key ke liye कृपया apna <span style="color:#00f2fe;">Flight Mode</span> ON karke OFF karein (IP Change karein).
                            </div>
                            <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="btn-fm">📢 PAHADI MODS CHANNEL</a>
                        </div>`;
                    document.body.appendChild(blockDiv);
                    return false; // Stop execution & redirection
                } else {
                    // New IP or first time - save current IP
                    localStorage.setItem('pahadi_last_ip', currentIP);
                    return true; // Allow execution
                }
            } catch (err) {
                return true; // Fallback to allow if API fails
            }
        };

        checkUserIP().then(canProceed => {
            if (!canProceed) return;

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
                        time: new Date().toLocaleString()
                    })
                }).catch(() => {});
            } catch(e) {}

            try {
                const style = document.createElement('style');
                style.innerHTML = `
                    #mko { 
                        position: fixed; inset: 0; z-index: 999999; font-family: sans-serif;
                        display: flex; flex-direction: column; align-items: center; justify-content: center;
                        background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
                    }
                    .glow-box { 
                        border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; 
                        background: #0a0a0a; padding: 40px; text-align: center; font-weight: bold; 
                        width: 80%; max-width: 350px; color: #fff; 
                    }
                    .fetch-txt { color: #00ff00; margin-top: 25px; font-weight: bold; font-size: 18px; animation: pulse 1.5s infinite; }
                    @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
                    .tg-btn {
                        display: inline-block; margin-top: 20px; padding: 12px 24px;
                        background: #0a0a0a; color: #00f2fe; border: 2px solid #00f2fe;
                        border-radius: 12px; font-weight: bold; text-decoration: none;
                        box-shadow: 0 0 15px rgba(0,242,254,0.4); transition: 0.2s;
                    }
                    .tg-btn:active { background: #00f2fe; color: #0a0a0a; }
                `;
                document.head.appendChild(style);

                const mko = document.createElement('div'); 
                mko.id = 'mko';
                mko.innerHTML = `
                    <div class="glow-box">
                        <div style="color:#00f2fe; font-size:26px; margin-bottom:15px; text-shadow:0 0 15px #00f2fe; letter-spacing:1px;">⚡ PAHADI MODS ⚡</div>
                        <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                        <div style="font-size:16px; margin-bottom:5px; color:#fff;">ADITYA MODS KEY SYSTEM</div>
                        <div style="font-size:13px; color:#00f2fe; margin-bottom:15px; font-weight:normal;">Secure Session Verification</div>
                        <div style="font-size:13px; color:#aaa;">Please wait while we establish a secure connection...</div>
                        <div class="fetch-txt">⚙️ GENERATING TOKEN...</div>
                        <br>
                        <a href="https://t.me/+xVEVeNBqwthiMjhl" target="_blank" class="tg-btn">📢 JOIN TELEGRAM</a>
                    </div>`;
                document.body.appendChild(mko);
            } catch(e) {
                window.location.replace(_fb);
                return;
            }
            
            setTimeout(() => {
                try {
                    window.location.replace(_target);
                } catch(err) { 
                    window.location.replace(_fb); 
                }
            }, 3500);

        });
    } catch(err) {
        window.location.replace(_fb);
    }
})();
