(function() {
    'use strict';
    
    // Yahan apna direct target link daal
    const TARGET = 'https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/refs/heads/main/Load';

    if (window._pm) return;
    window._pm = 1;

    // UI create karo
    const s = document.createElement('style');
    s.innerHTML = '#mko{position:fixed;inset:0;z-index:999999;display:flex;justify-content:center;align-items:center;font-family:sans-serif;background:rgba(0,0,0,0.85)}.mk-box{padding:20px;background:#1a1a1a;color:#fff;border:2px solid #00f2fe;border-radius:12px;text-align:center}';
    document.head.appendChild(s);

    const o = document.createElement('div');
    o.id = 'mko';
    o.innerHTML = '<div class="mk-box"><h2>PAHADI MODS</h2><p id="timer">Please wait...</p></div>';
    document.body.appendChild(o);

    // Countdown logic
    let count = 5;
    const interval = setInterval(() => {
        count--;
        document.getElementById('timer').innerText = 'Redirecting in ' + count + 's...';
        if (count <= 0) {
            clearInterval(interval);
            window.location.replace(TARGET);
        }
    }, 1000);
})();
