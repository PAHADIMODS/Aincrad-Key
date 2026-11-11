 (function () {
  const g = "https://zxi-file-loader.ah4734536.workers.dev";
  let h = -1;

  // --- Original Bookmark / Environment Loader Check ---
  if (window.ZXI_BOOKMARK_LOAD !== undefined) {
    h = 0;
  } else {
    for (let y = 1; y <= 500; y++) {
      if (window["ZXI" + y + "_BOOKMARK_LOAD"] !== undefined) {
        h = y;
        break;
      }
    }
  }

  // Fallback index if loaded directly so it doesn't throw Access Denied (-1)
  if (h === -1) {
    h = 0; 
  }

  const j = {
    r: g + "/?file=zxi.txt&key=Hey",
    m: g + "/?file=music.txt",
    n: g + "/?file=name.txt",
    s: "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:2px solid #00ffcc;width:300px;box-sizing:border-box;"
  };

  // --- Inject Original Styles & Keyframes ---
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes zxi-lightning-glow {0%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc,inset 0 0 5px rgba(0,255,204,0.2);border-color:#00ffcc}25%{box-shadow:0 0 15px #00e6b8,0 0 25px #00ffcc,inset 0 0 10px rgba(0,255,204,0.4);border-color:#00e6b8}50%{box-shadow:0 0 25px #00ffff,0 0 40px #00ffcc,inset 0 0 15px rgba(0,255,204,0.5);border-color:#00ffff}100%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc,inset 0 0 5px rgba(0,255,204,0.2);border-color:#00ffcc}}
    @keyframes zxi-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    @keyframes zxi-premium-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    .zxi-mode-btn{width:100%;border:1px solid rgba(0,255,204,0.3);padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:1.5px;margin-bottom:12px;color:#fff;transition:all 0.3s ease;text-transform:uppercase}
    .zxi-btn-fast{background:linear-gradient(90deg,rgba(0,255,150,0.1),rgba(0,255,150,0.2));border-color:#00ff96;box-shadow:0 0 8px rgba(0,255,150,0.2)}.zxi-btn-fast:hover{background:#00ff96;color:#030712;box-shadow:0 0 15px #00ff96}
    .zxi-btn-secure{background:linear-gradient(90deg,rgba(255,170,0,0.1),rgba(255,170,0,0.2));border-color:#ffaa00;box-shadow:0 0 8px rgba(255,170,0,0.2)}.zxi-btn-secure:hover{background:#ffaa00;color:#030712;box-shadow:0 0 15px #ffaa00}
    .zxi-btn-safe{background:linear-gradient(90deg,rgba(0,204,255,0.1),rgba(0,204,255,0.2));border-color:#00ccff;box-shadow:0 0 8px rgba(0,204,255,0.2)}.zxi-btn-safe:hover{background:#00ccff;color:#030712;box-shadow:0 0 15px #00ccff}
  `;
  document.head.appendChild(styleEl);

  let F = "ZXI";
  let G = "https://t.me/zxiowner";

  // --- Async Fetch matching original name.txt structure ---
  (async function () {
    try {
      const U = await fetch(j.n + "&t=" + Date.now());
      const V = (await U.text()).split(/\r?\n/).map(W => W.trim()).filter(W => W !== "");
      if (V[h]) {
        const W = V[h].match(/"([^"]+)"/g);
        if (W && W.length >= 3) {
          F = W[0].replace(/"/g, "");
          G = W[1].replace(/"/g, "");
        }
      }
    } catch (X) {
      console.error("Config fetch error:", X);
    }

    // --- Main UI Box (Aincrad Selection) ---
    const mainBox = document.createElement("div");
    mainBox.id = "zxi-auth-box";
    mainBox.style.cssText = j.s;
    mainBox.innerHTML = `
      <h3 style="margin:0 0 6px 0;color:#00ffcc;font-size:20px;letter-spacing:1.5px;font-weight:800;text-shadow:0 0 12px rgba(0,255,204,0.5);text-transform:uppercase;">${F} SYSTEM</h3>
      <p style="margin:0 0 20px 0;color:#64748b;font-size:11px;letter-spacing:2px;font-weight:600;">SELECT SYSTEM MODE</p>
      <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE</button>
      <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE</button>
      <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE</button>
    `;
    document.body.appendChild(mainBox);

    // --- Original R Function (Checking Update & Worker Match) ---
    async function R(Y, Z) {
      mainBox.remove();

      const checkOverlay = document.createElement("div");
      checkOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,7,18,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;";
      checkOverlay.innerHTML = `
        <div style="text-align:center;background:rgba(6,10,23,0.95);padding:35px 30px;border-radius:16px;border:1px solid #00ffcc;width:290px;animation:zxi-lightning-glow 3s linear infinite;">
            <div style="width:45px;height:45px;border:4px solid rgba(0,254,204,0.1);border-top:4px solid #00ffcc;border-radius:50%;margin:0 auto 20px auto;animation:zxi-spin 0.8s linear infinite;"></div>
            <p id="zxi-check-text" style="color:#00ffcc;font-size:15px;font-weight:700;margin:0;letter-spacing:1.5px;text-shadow:0 0 8px rgba(0,255,204,0.3);">CHECKING UPDATE...</p>
        </div>
      `;
      document.body.appendChild(checkOverlay);

      let finalRedirect = Z;
      let hasUpdate = false;

      try {
        const a7 = await fetch(Z + "&t=" + Date.now());
        const a8 = (await a7.text()).trim();
        if (a8.startsWith("http")) {
          hasUpdate = true;
          finalRedirect = a8;
        }
      } catch (a9) {
        console.error("Link fetch error:", a9);
      }

      const checkTextEl = checkOverlay.querySelector("#zxi-check-text");
      checkTextEl.innerHTML = hasUpdate ? 
        "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>" : 
        "<span style='color:#ff4444;'>No Update Available!</span>";

      setTimeout(() => {
        checkOverlay.remove();
        Q(Y, finalRedirect);
      }, 1500);
    }

    // --- Original Q Function (Canvas Animation & Exact Timing Flow)[span_3](start_span)[span_3](end_span) ---
    function Q(Y, Z) {
      const overlay = document.createElement("div");
      overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,7,18,0.4);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;";
      overlay.innerHTML = `
        <canvas id="zxi-premium-canvas" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;"></canvas>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:2;">
            <div style="position:relative;width:320px;height:320px;margin:0 auto;display:flex;align-items:center;justify-content:center;">
                <div style="position:absolute;width:280px;height:280px;animation:zxi-premium-spin 4s linear infinite;">
                    <svg width="280" height="280" viewBox="0 0 280 280">
                        <circle cx="140" cy="140" r="120" fill="none" stroke="url(#grad1)" stroke-width="6" stroke-linecap="round" stroke-dasharray="200 400" />
                        <circle cx="140" cy="140" r="110" fill="none" stroke="url(#grad2)" stroke-width="4" stroke-linecap="round" stroke-dasharray="150 450" />
                        <circle cx="140" cy="140" r="130" fill="none" stroke="url(#grad3)" stroke-width="2" stroke-linecap="round" stroke-dasharray="100 500" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0080" /><stop offset="50%" stop-color="#00ffcc" /><stop offset="100%" stop-color="#ffaa00" /></linearGradient>
                            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#00ccff" /><stop offset="50%" stop-color="#ff00ff" /><stop offset="100%" stop-color="#00ff96" /></linearGradient>
                            <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff3300" /><stop offset="50%" stop-color="#ffff00" /><stop offset="100%" stop-color="#00ffff" /></linearGradient>
                        </defs>
                    </svg>
                </div>
                <svg width="240" height="240" style="transform:rotate(-90deg);position:relative;z-index:3;">
                    <circle cx="120" cy="120" r="85" fill="rgba(6,10,23,0.94)" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                    <circle id="progress" cx="120" cy="120" r="85" fill="none" stroke="#00ccff" stroke-width="10" stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round" style="transition:stroke-dashoffset 1s linear;"></circle>
                </svg>
                <div id="countdown-text" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;font-weight:900;color:#fff;text-shadow:0 0 15px #00ccff;z-index:4;">0%</div>
            </div>
            <p style="margin-top:20px;color:#00ccff;font-size:15px;font-weight:700;letter-spacing:3px;text-shadow:0 0 10px rgba(0,204,255,0.4);">REDIRECTING...</p>
        </div>
      `;
      document.body.appendChild(overlay);

      const canvas = document.getElementById("zxi-premium-canvas");
      const ctx = canvas.getContext("2d");
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);

      const particles = [];
      for (let i = 0; i < 220; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          length: Math.random() * 25 + 20,
          speed: Math.random() * 5 + 3,
          opacity: Math.random() * 0.4 + 0.25,
          wind: Math.random() * 2 - 1
        });
      }

      let animFrameId;
      function renderCanvas() {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.wind * 5, p.y + p.length);
          ctx.strokeStyle = "rgba(174,194,224," + p.opacity + ")";
          ctx.lineWidth = 1.6;
          ctx.stroke();

          p.y += p.speed;
          p.x += p.wind * 2;

          if (p.y > h) {
            p.y = -p.length;
            p.x = Math.random() * w;
          }
        }
        animFrameId = requestAnimationFrame(renderCanvas);
      }
      renderCanvas();

      let af = 0;
      const ad = overlay.querySelector("#progress");
      const ae = overlay.querySelector("#countdown-text");

      const ag = setInterval(() => {
        af++;
        const al = Math.min(100, Math.round((af / Y) * 100));
        ae.textContent = al + "%";
        ad.style.strokeDashoffset = 534 - (534 * (al / 100));

        if (af >= Y) {
          clearInterval(ag);
          cancelAnimationFrame(animFrameId);
          overlay.remove();
          window.location.replace(Z);
        }
      }, 1000);

      window.addEventListener("resize", () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });
    }

    // --- Original Event Listeners (95, 100, 110 steps matching original script)[span_4](start_span)[span_4](end_span) ---
    document.getElementById("zxi-btn-fast").addEventListener("click", () => R(95, j.r));
    document.getElementById("zxi-btn-secure").addEventListener("click", () => R(100, j.r));
    document.getElementById("zxi-btn-safe").addEventListener("click", () => R(110, j.r));
  })();
})();
