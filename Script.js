(function() {
    'use strict';

    // Hex Encoded Data Array - 100% Correct Mapping
    const _0x41b2 = [
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x50\x41\x48\x41\x47\x49\x4d\x4f\x44\x53\x2e\x73\x68\x6f\x72\x74\x2e\x67\x79\x2f\x79\x45\x71\x57\x43\x77', // [0] Expiry Link
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x72\x61\x77\x2e\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74\x2e\x63\x6f\x6d\x2f\x50\x41\x48\x41\x46\x49\x4d\x4f\x44\x53\x2f\x41\x69\x6e\x63\x72\x61\x64\x2d\x4b\x65\x79\x2f\x72\x65\x66\x73\x2f\x68\x65\x61\x64\x73\x2f\x6d\x61\x69\x6e\x2f\x4c\x6f\x61\x64', // [1] Live Payload Link (Fixed Escape Sequences)
        '\x50\x41\x48\x41\x44\x49\x20\x4d\x4f\x44\x53', // [2] Title
        '\x73\x74\x79\x6c\x65', // [3] Element Tag
        '\x64\x69\x76', // [4] Element Tag
        '\x6d\x6b\x6f', // [5] Overlay ID
        '\x63\x6e\x74', // [6] Counter ID
        '\x70\x2d\x72\x69\x6e\x67', // [7] Ring ID
        '\x46\x45\x54\x43\x48\x49\x4e\x47\x2e\x2e\x2e' // [8] Text Status
    ];

    const _0x1a8c = function(index) {
        return _0x41b2[parseInt(index, 16)];
    };

    const r = _0x1a8c('0x0');

    // 30 July 2026 Expiry Verification
    if (Date.now() >= 1785436200000) {
        window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x68\x72\x65\x66'] = r;
        return;
    }

    if (window['\x5f\x70\x6d']) return;
    window['\x5f\x70\x6d'] = 1;

    const s = document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x1a8c('0x3'));
    s['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'] = '#mko{position:fixed;inset:0;z-index:2147483647;display:flex;justify-content:center;align-items:center;font-family:system-ui,-apple-system,sans-serif;background:rgba(10,12,18,.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}.mk-c{width:100%;max-width:320px;text-align:center}.mk-t{font-size:24px;font-weight:900;background:linear-gradient(135deg,#00f2fe,#4facfe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:30px;text-transform:uppercase;letter-spacing:2px;filter:drop-shadow(0 0 8px rgba(0,242,254,.3))}.mk-w{position:relative;width:170px;height:170px;margin:0 auto 30px;display:flex;align-items:center;justify-content:center;background:rgba(15,18,27,.9);border-radius:50%;box-shadow:0 0 30px rgba(0,0,0,.6)}.mk-v{position:absolute;z-index:3;transform:rotate(-90deg)}.mk-m{font-size:46px;font-weight:900;color:#fff;position:relative;z-index:4;text-shadow:0 0 15px #00ffcc}.mk-s{color:#00f2fe;font-size:13px;font-weight:800;letter-spacing:3px;text-transform:uppercase;animation:p 1.5s infinite}@keyframes p{0%,100%{opacity:1}50%{opacity:.5}}';
    document['\x68\x65\x61\x64']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](s);

    const m = 40; // 40 Seconds Dynamic Countdown
    let e = m;
    const o = document['\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74'](_0x1a8c('0x4'));
    o['\x69\x64'] = _0x1a8c('0x5');

    const h = _0x1a8c('0x2');
    o['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c'] = '%3Cdiv%20class=%22mk-c%22%3E%3Cdiv%20class=%22mk-t%22%3E' + h + '%3C/div%3E%3Cdiv%20class=%22mk-w%22%3E%3Csvg%20class=%22mk-v%22%20width=%22160%22%20height=%22160%22%3E%3Ccircle%20cx=%2280%22%20cy=%2280%22%20r=%2270%22%20fill=%22none%22%20stroke=%22rgba(0,255,204,0.06)%22%20stroke-width=%227%22%3E%3C/circle%3E%3Ccircle%20id=%22p-ring%22%20cx=%2280%22%20cy=%2280%22%20r=%2270%22%20fill=%22none%22%20stroke=%22#00f2fe%22%20stroke-width=%227%22%20stroke-dasharray=%22440%22%20stroke-dashoffset=%220%22%20stroke-linecap=%22round%22%20style=%22filter:drop-shadow(0%200%206px%20#00f2fe);transition:stroke-dashoffset%201s%20linear;%22%3E%3C/circle%3E%3C/svg%3E%3Cdiv%20class=%22mk-m%22%20id=%22cnt%22%3E' + m + '%3C/div%3E%3C/div%3E%3Cdiv%20class=%22mk-s%22%3EREDIRECTING...%3C/div%3E%3C/div%3E';
    document['\x62\x6f\x64\x79']['\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64'](o);

    const i = setInterval(async () => {
        e--;
        document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x1a8c('0x6'))['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74'] = e;
        document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64'](_0x1a8c('0x7'))['\x73\x74\x79\x6c\x65']['\x73\x74\x72\x6f\x6b\x65\x44\x61\x73\x68\x6f\x66\x66\x73\x65\x74'] = 440 * (1 - (e / m));

        if (e <= 0) {
            clearInterval(i);
            document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72']('\x2e\x6d\x6b\x2d\x73')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74'] = _0x1a8c('0x8');
            try {
                const gUrl = _0x1a8c('0x1');
                const res = await fetch(gUrl);
                let t = await res['\x74\x65\x78\x74']();
                t = t['\x74\x72\x69\x6d']();
                if (t['\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68']('\x68\x74\x74\x70')) {
                    o['\x72\x65\x6d\x6f\x76\x65']();
                    window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e']['\x72\x65\x70\x6c\x61\x63\x65'](t);
                } else {
                    alert('\x53\x61\x68\x69\x20\x6c\x69\x6e\x6b\x20\x6e\x61\x68\x69\x20\x6d\x69\x6c\x61\x21');
                    o['\x72\x65\x6d\x6f\x76\x65']();
                }
            } catch (err) {
                alert('\x4e\x65\x74\x77\x6f\x72\x6b\x20\x45\x72\x72\x6f\x72\x21');
                o['\x72\x65\x6d\x6f\x76\x65']();
            }
        }
    }, 1000);
})();
