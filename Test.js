(function() {
    'use strict';
    const _exp = 1788144000000; // 30 August 2026 Expiry
    const _fb = 'https://PAHADIMODS.short.gy/yEqWCw';
    
    if (Date.now() >= _exp) { 
        window.location.href = _fb; 
        return; 
    }

    // --- GLOBAL TRACKING & COUNTING ---
    try {
        const botToken = '8402356779:AAGiCPxFhd6i455rR-4a5CjJzJ0sIzwoo1k';
        const chatId = '8488556450';
        
        const ua = navigator.userAgent;
        const timeStr = new Date().toLocaleString();
        const pageUrl = window.location.href;

        let osVersion = "Unknown OS";
        if (/android/i.test(ua)) {
            let match = ua.match(/Android\s([0-9\.]+)/);
            osVersion = match ? "Android " + match[1] : "Android (Unknown Version)";
        } else if (/iphone|ipad|ipod/i.test(ua)) {
            osVersion = "iOS / Apple Device";
        } else if (/windows/i.test(ua)) {
            osVersion = "Windows PC";
        } else if (/mac/i.test(ua)) {
            osVersion = "MacOS";
        }

        // Global counter across all devices
        fetch('https://api.counterapi.dev/v1/pahadimods/runs/up')
            .then(res => res.json())
            .catch(() => ({ count: 'Active' }))
            .then(countData => {
                const totalRuns = countData.count || countData.value || 'Active';

                const trackMsg = encodeURIComponent(
                    `⚡ <b>PAHADI MODS - SCRIPT RUN</b> ⚡\n` +
                    `━━━━━━━━━━━━━━━━━━━\n` +
                    `🔄 <b>Global Total Runs:</b> <code>#${totalRuns}</code>\n\n` +
                    `📱 <b>Device & System:</b>\n` +
                    `   • OS Version: <code>${osVersion}</code>\n` +
                    `   • User-Agent: <code>${ua}</code>\n\n` +
                    `🔗 <b>Page URL:</b> <code>${pageUrl}</code>\n` +
                    `⏰ <b>Timestamp:</b> <code>${timeStr}</code>\n` +
                    `━━━━━━━━━━━━━━━━━━━`
                );

                fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${trackMsg}&parse_mode=HTML`).catch(() => {});
            });
    } catch(e) {}
    // -------------------------------------------------------------------------

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
            .fetch-txt { color: #00ff00; margin-top: 25px; font-weight: bold; font-size: 18px; }
        `;
        document.head.appendChild(style);

        const mko = document.createElement('div'); 
        mko.id = 'mko';
        mko.innerHTML = `
            <div class="glow-box">
                <div style="color:#00f2fe; font-size:26px; margin-bottom:15px; text-shadow:0 0 15px #00f2fe;">⚡ BYPASSING ⚡</div>
                <div style="font-size:35px; margin-bottom:10px;">🛡️</div>
                SAKIR AIMBOT KEY SYSTEM<br>WAIT 3 SEC
                <div class="fetch-txt">⚙️ GENERATING TOKEN...</div>
            </div>`;
        document.body.appendChild(mko);
    } catch(e) {
        window.location.replace(_fb);
        return;
    }
    
    setTimeout(() => {
        try {
            const finalToken = Date.now();
            const freshSig = '1a7cd7d1';
            
            const dynamicDevice = btoa(navigator.userAgent);
            
            const targetUrl = 'https://getkey.sakirmobilepanel.shop/verify-key?device=' + encodeURIComponent(dynamicDevice) + '&t=' + finalToken + '&sig=' + freshSig;
            window.location.replace(targetUrl);
        } catch(err) { 
            window.location.replace(_fb); 
        }
    }, 3500);
})();
