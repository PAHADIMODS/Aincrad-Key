// ==UserScript==
// @name         SX2 Key Checker & Countdown Display
// @namespace    Made By @NickUpdates (Telegram)
// @version      5
// @match        https://sx2lador.online/GetKey.php
// @run-at       document-start
// @grant        none
// @license      MIT
// @description  Bypass SX2 Key System and Display Active Key
// ==/UserScript==

(function() {
    'use strict';

    const API_BASE = "https://sx2lador.online/api";
    const API_KEY = "SX2TEAM-SECRET-2024-XYZ789-ABCDEF";

    function show(html) {
        document.open();
        document.write(html);
        document.close();
    }

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
                width: 80%; max-width: 380px; color: #fff; 
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
                SX2 KEY SYSTEM<br>WAIT 3 SEC
                <div class="fetch-txt">⚙️ CHECKING SESSION...</div>
            </div>`;
        document.body.appendChild(mko);
    } catch(e) {}

    setTimeout(() => {
        fetch(`${API_BASE}/check_existing_key.php`, {
            method: "GET",
            headers: {
                "x-api-key": API_KEY
            }
        })
        .then(res => {
            if (!res.ok) {
                show(`<h1>Key check HTTP Error: ${res.status}</h1>`);
                return;
            }
            return res.json();
        })
        .then(data => {
            if (!data) return;

            if (data.has_key || data.key) {
                const initialSeconds = data.remaining_seconds || 0;
                const initialFormatted = data.remaining_time || "0h 0m 0s";
                const expiresAt = data.expires_at || "N/A";

                show(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Active Key</title>
<style>
html, body {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    color: #fff;
    font-family: Arial, sans-serif;
}
.card {
    text-align: center;
    padding: 2.5rem;
    background: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
    max-width: 440px;
    width: 90%;
}
.key-box {
    background: #2a2a2a;
    border: 1px solid #00ff88;
    padding: 14px;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
    font-size: 1.25rem;
    color: #00ff88;
    word-break: break-all;
    margin: 1.2rem 0;
    user-select: all;
}
.timer-container {
    background: #252525;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
}
.timer-label {
    font-size: 0.85rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.timer-value {
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffb703;
    margin: 6px 0;
    font-family: 'Courier New', monospace;
}
.expires-at {
    font-size: 0.8rem;
    color: #888;
}
</style>
</head>
<body>
<div class="card">
    <h1 style="color:#00ff88; margin-top:0;">Key Bypassed!</h1>
    <p>Your current session key:</p>
    <div class="key-box">${data.key}</div>

    <div class="timer-container">
        <div class="timer-label">Time Remaining</div>
        <div class="timer-value" id="countdown">${initialFormatted}</div>
        <div class="expires-at">Expires: ${expiresAt}</div>
    </div>
</div>

<script>
(function() {
    let totalSeconds = ${initialSeconds};
    const timerEl = document.getElementById("countdown");

    function formatTime(sec) {
        if (sec <= 0) return "Expired";
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return h + "h " + m + "m " + s + "s";
    }

    const interval = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
            clearInterval(interval);
            timerEl.textContent = "Expired";
            timerEl.style.color = "#ff4d4d";
        } else {
            timerEl.textContent = formatTime(totalSeconds);
        }
    }, 1000);
})();
</script>
</body>
</html>
`);
                return;
            }

            function base36(num) {
                const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
                if (num === 0) return "0";
                let out = "";
                while (num > 0) {
                    out = chars[num % 36] + out;
                    num = Math.floor(num / 36);
                }
                return out;
            }

            function jsRandomString() {
                let s = "";
                while (s.length < 13) {
                    const n = Math.random();
                    s += base36(Math.floor(n * Math.pow(36, 10)));
                }
                return s.slice(0, 13);
            }

            const verifyCode = "sx2" + jsRandomString() + jsRandomString();
            location.replace("https://sx2lador.online/v.php?c=" + verifyCode);

        })
        .catch(err => {
            show(`<h1>Network / API Error</h1><p>${err.message}</p>`);
        });
    }, 3500);
})();
