// ==UserScript==
// @name         SX2 Key Checker & Countdown Display
// @namespace    Made By @NickUpdates (Telegram)
// @version      5.0
// @match        https://sx2lador.online/GetKey.php
// @run-at       document-start
// @grant        none
// @license      MIT
// @description  Bypass SX2 Key System and Display Active Key
// ==/UserScript==

(async function () {

    async function waitForCloudflare() {
        while (true) {
             const title = document.title.toLowerCase();
            if (
                title.includes("just a moment") ||
                title.includes("checking your browser") ||
                document.querySelector("iframe[src*='turnstile']") ||
                document.querySelector(".cf-challenge")
            ) {
                await new Promise(r => setTimeout(r, 20000));
                continue;
            }
            break;
        }
    }
    await waitForCloudflare();
    "use strict";

    // --- Configuration ---
    const API_BASE = "https://sx2lador.online/api";
    const API_KEY = "SX2TEAM-SECRET-2024-XYZ789-ABCDEF";

    // Helper to replace page content with HTML
    function show(html) {
        document.open();
        document.write(html);
        document.close();
    }

    // Display temporary loading overlay
    show(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Checking Key...</title>
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
    padding: 2rem;
    background: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}
</style>
</head>
<body>
<div class="card">
    <h1>Checking Access Key...</h1>
    <p>Please wait while we check your session status.</p>
</div>
</body>
</html>
`);

    try {
        // 1. Check if a key already exists
        const checkRes = await fetch(`${API_BASE}/check_existing_key.php`, {
            method: "GET",
            headers: {
                "x-api-key": API_KEY
            }
        });

        if (!checkRes.ok) {
            show(`<h1>Key check HTTP Error: ${checkRes.status}</h1>`);
            return;
        }

        const data = await checkRes.json();

        // If a key exists, render the key card with a live countdown timer
        if (data && (data.has_key || data.key)) {
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
    <h1 style="color:#00ff88; margin-top:0;">Key Active!</h1>
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

        // 2. Send initiate payload if no key was found using the requested method
        const code = 'sx2' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const initResponse = await fetch(`${API_BASE}/initiate.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify({
                csrf_token: window.csrf_token || "",
                short_url: "https://vplink.in/Sx2Get",
                temp_verify_code: code
            })
        });

        if (!initResponse.ok) {
            location.href = "https://sx2lador.online/v.php?c=" + code;
            return;
        }

        const data1 = await initResponse.json();
        console.log(data1);
        
        if (data1 && data1.verify_code) {
            location.href = "https://sx2lador.online/v.php?c=" + data1.verify_code;
        } else {
            location.href = "https://sx2lador.online/v.php?c=" + code;
        }
        
    } catch (err) {
        const code = 'sx2' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        location.href = "https://sx2lador.online/v.php?c=" + code;
    }
})();
