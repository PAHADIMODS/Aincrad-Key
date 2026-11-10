(function () {
  const workerBase = "https://zxi-file-loader.ah4734536.workers.dev";
  const defaultUrl = "https://rodaemotor.com/carros-eletricos-a-revolucao-silenciosa-que-esta-redefinindo-o-futuro-da-mobilidade-global/";

  // --- Inject Original Styles & Keyframes ---
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Roboto+Mono:wght@400;700&display=swap');
    @keyframes zxi-lightning-glow {0%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc,inset 0 0 5px rgba(0,255,204,0.2);border-color:#00ffcc}25%{box-shadow:0 0 15px #00e6b8,0 0 25px #00ffcc,inset 0 0 10px rgba(0,255,204,0.4);border-color:#00e6b8}50%{box-shadow:0 0 25px #00ffff,0 0 40px #00ffcc,inset 0 0 15px rgba(0,255,204,0.5);border-color:#00ffff}100%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc,inset 0 0 5px rgba(0,255,204,0.2);border-color:#00ffcc}}
    @keyframes zxi-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    @keyframes zxi-premium-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .zxi-mode-btn{width:100%;border:1px solid rgba(0,255,204,0.3);padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:1.5px;margin-bottom:12px;color:#fff;transition:all 0.3s ease;text-transform:uppercase}
    .zxi-btn-fast{background:linear-gradient(90deg,rgba(0,255,150,0.1),rgba(0,255,150,0.2));border-color:#00ff96;box-shadow:0 0 8px rgba(0,255,150,0.2)}.zxi-btn-fast:hover{background:#00ff96;color:#030712;box-shadow:0 0 15px #00ff96}
    .zxi-btn-secure{background:linear-gradient(90deg,rgba(255,170,0,0.1),rgba(255,170,0,0.2));border-color:#ffaa00;box-shadow:0 0 8px rgba(255,170,0,0.2)}.zxi-btn-secure:hover{background:#ffaa00;color:#030712;box-shadow:0 0 15px #ffaa00}
    .zxi-btn-safe{background:linear-gradient(90deg,rgba(0,204,255,0.1),rgba(0,204,255,0.2));border-color:#00ccff;box-shadow:0 0 8px rgba(0,204,255,0.2)}.zxi-btn-safe:hover{background:#00ccff;color:#030712;box-shadow:0 0 15px #00ccff}
  `;
  document.head.appendChild(styleEl);

  // --- Main Mode Box UI ---
  const mainBox = document.createElement("div");
  mainBox.id = "zxi-auth-box";
  mainBox.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:2px solid #00ffcc;width:300px;box-sizing:border-box;animation:zxi-lightning-glow 3s linear infinite;";
  mainBox.innerHTML = `
    <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;text-transform:uppercase;">SELECT SYSTEM MODE</h3>
    <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE SECURITY BYPASS METHOD</p>
    <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE (1 Min)</button>
    <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE (1.5 Min)</button>
    <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE (2 Min)</button>
    <button id="zxi-btn-keygen" class="zxi-mode-btn" style="background:rgba(255,0,128,0.2);border-color:#ff0080;color:#ff0080;">🔑 GET LICENSE KEY</button>
  `;
  document.body.appendChild(mainBox);

  // --- Original Key Generator UI Window ---
  function openKeyGenerator() {
    mainBox.remove();
    const keyGenContainer = document.createElement("div");
    keyGenContainer.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:2147483647;display:flex;justify-content:center;align-items:center;font-family:'Roboto Mono',monospace;";
    keyGenContainer.innerHTML = `
      <div style="background:rgba(15, 5, 5, 0.95);border:1px solid rgba(255,255,255,0.1);border-radius:24px;width:420px;padding:45px 30px;text-align:center;box-shadow:0 0 60px rgba(180, 0, 0, 0.25);position:relative;">
        <div style="font-family:'Orbitron',sans-serif;font-size:36px;font-weight:900;letter-spacing:4px;color:#fff;text-shadow:0 0 15px rgba(255,0,0,0.6);margin-bottom:5px;">AKATSUKI</div>
        <div style="font-size:12px;letter-spacing:6px;color:#ff4d4d;margin-bottom:40px;font-weight:700;">NEXA-NETWING <span>KEY</span></div>
        <div id="zxi-kg-icon" style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#ff8c00,#e65c00);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:32px;color:#fff;">
          <div style="width:40px;height:40px;border:4px solid rgba(255,255,255,0.2);border-top:4px solid #fff;border-radius:50%;animation:spin 1s linear infinite;"></div>
        </div>
        <div id="zxi-kg-status" style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:700;color:#ffcc00;letter-spacing:3px;margin-bottom:20px;">GENERATING KEY...</div>
        <div id="zxi-kg-msg" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px;font-size:13px;color:#d1d1d1;line-height:1.5;margin-bottom:30px;word-break:break-all;">Please wait, your key is being generated...</div>
        <button id="zxi-kg-copy" style="width:100%;padding:16px;border:none;border-radius:12px;background:rgba(0,255,204,0.1);border:1px solid rgba(0,255,204,0.3);color:#00ffcc;font-size:16px;font-weight:700;letter-spacing:2px;cursor:pointer;margin-bottom:10px;display:none;">📋 COPY KEY</button>
        <button id="zxi-kg-close" style="width:100%;padding:16px;border:none;border-radius:12px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:#fff;font-size:16px;fontWeight:700;cursor:pointer;">✕ CLOSE</button>
      </div>
    `;
    document.body.appendChild(keyGenContainer);

    let generatedKey = "";
    const statusEl = keyGenContainer.querySelector("#zxi-kg-status");
    const messageEl = keyGenContainer.querySelector("#zxi-kg-msg");
    const iconEl = keyGenContainer.querySelector("#zxi-kg-icon");
    const copyBtn = keyGenContainer.querySelector("#zxi-kg-copy");

    keyGenContainer.querySelector("#zxi-kg-close").addEventListener("click", () => keyGenContainer.remove());

    // Generate Key Logic from original script[span_0](start_span)[span_0](end_span)
    setTimeout(async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const ip = data.ip;

        const day = Math.floor(Date.now() / 86400000);
        const ipSeed = parseInt(ip.replace(/\./g, "").substring(0, 6), 10);
        let seed = ipSeed + day + 2026;

        function random() {
          const x = Math.sin(seed++) * 10000;
          return Math.abs(x - Math.floor(x));
        }

        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        const parts = [];
        for (let i = 0; i < 4; i++) {
          let part = "";
          for (let j = 0; j < 4; j++) {
            const index = Math.floor(random() * chars.length);
            part += chars[index];
          }
          parts.push(part);
        }

        generatedKey = "NETWING-" + parts.join("-");

        statusEl.textContent = "KEY RECEIVED";
        statusEl.style.color = "#00ffcc";
        iconEl.innerHTML = "✓";
        iconEl.style.background = "linear-gradient(135deg, #00ffcc, #00b386)";
        messageEl.innerHTML = '<span style="font-family:Orbitron,sans-serif;font-size:18px;color:#00ffcc;font-weight:700;">' + generatedKey + '</span>';
        copyBtn.style.display = "block";
      } catch (e) {
        statusEl.textContent = "KEY NOT RECEIVED";
        statusEl.style.color = "#ff4d4d";
        iconEl.innerHTML = "⚠";
        messageEl.textContent = "Network error. Could not connect to the key server.";
      }
    }, 2000);

    copyBtn.addEventListener("click", () => {
      if (!generatedKey) return;
      navigator.clipboard.writeText(generatedKey).then(() => {
        copyBtn.innerHTML = "✅ COPIED!";
        setTimeout(() => { copyBtn.innerHTML = "📋 COPY KEY"; }, 2000);
      });
    });
  }

  // --- Step 1: Check Update Screen (Original Style) ---
  async function triggerMode(totalSeconds) {
    mainBox.remove();

    const checkOverlay = document.createElement("div");
    checkOverlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,7,18,0.85);backdrop-filter:blur(8px);z-index:2147483647;display:flex;align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;";
    checkOverlay.innerHTML = `
      <div style="text-align:center;background:rgba(6,10,23,0.95);padding:35px 30px;border-radius:16px;border:1px solid #00ffcc;width:290px;animation:zxi-lightning-glow 3s linear infinite;">
          <div style="width:45px;height:45px;border:4px solid rgba(0,254,204,0.1);border-top:4px solid #00ffcc;border-radius:50%;margin:0 auto 20px auto;animation:zxi-spin 0.8s linear infinite;"></div>
          <p id="zxi-check-text" style="color:#00ffcc;font-size:15px;font-weight:700;margin:0;letter-spacing:1.5px;text-shadow:0 0 8px rgba(0,255,204,0.3);">CHECKING UPDATE...</p>
      </div>
    `;
    document.body.appendChild(checkOverlay);

    let fetchedUrl = defaultUrl;
    let isUpdated = false;

    try {
      const response = await fetch(workerBase + "/?file=zxi.txt&key=Hey&t=" + Date.now());
      const text = (await response.text()).trim();
      if (text.startsWith("http")) {
        isUpdated = true;
        fetchedUrl = text;
      }
    } catch (e) {
      console.error("Worker fetch error:", e);
    }

    const statusText = checkOverlay.querySelector("#zxi-check-text");
    statusText.innerHTML = isUpdated ? 
      "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>" : 
      "<span style='color:#ff4444;'>No Update Available!</span>";

    setTimeout(() => {
      checkOverlay.remove();
      startCanvasRedirect(totalSeconds, fetchedUrl);
    }, 1500);
  }

  // --- Step 2: Canvas Animation & Timer Redirect ---
  function startCanvasRedirect(targetSecs, finalRedirectUrl) {
    const overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,7,18,0.4);backdrop-filter:blur(3px);z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;";
    overlay.innerHTML = `
      <canvas id="zxi-premium-canvas" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;"></canvas>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:2;">
          <div style="position:relative;width:320px;height:320px;margin:0 auto;display:flex;align-items:center;justify-content:center;">
              <div style="position:absolute;width:280px;height:280px;animation:zxi-premium-spin 4s linear infinite;">
                  <svg width="280" height="280" viewBox="0 0 280 280">
                      <circle cx="140" cy="140" r="120" fill="none" stroke="url(#grad1)" stroke-width="6" stroke-linecap="round" stroke-dasharray="200 400" />
                      <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0080" /><stop offset="50%" stop-color="#00ffcc" /><stop offset="100%" stop-color="#ffaa00" /></linearGradient></defs>
                  </svg>
              </div>
              <svg width="240" height="240" style="transform:rotate(-90deg);position:relative;z-index:3;">
                  <circle cx="120" cy="120" r="85" fill="rgba(6,10,23,0.94)" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                  <circle id="progress" cx="120" cy="120" r="85" fill="none" stroke="#00ccff" stroke-width="10" stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round" style="transition:stroke-dashoffset 0.5s linear;"></circle>
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

    let elapsedSec = 0;
    const progressBar = overlay.querySelector("#progress");
    const counterText = overlay.querySelector("#countdown-text");

    const timerInterval = setInterval(() => {
      elapsedSec++;
      const percent = Math.min(100, Math.round((elapsedSec / targetSecs) * 100));
      counterText.textContent = percent + "%";
      progressBar.style.strokeDashoffset = 534 - (534 * (percent / 100));

      if (elapsedSec >= targetSecs) {
        clearInterval(timerInterval);
        cancelAnimationFrame(animFrameId);
        overlay.remove();
        window.location.replace(finalRedirectUrl);
      }
    }, 1000);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }

  // Mode Triggers (Fast = 60s, Secure = 90s, Safe = 120s)[span_1](start_span)[span_1](end_span)
  document.getElementById("zxi-btn-fast").addEventListener("click", () => triggerMode(60));
  document.getElementById("zxi-btn-secure").addEventListener("click", () => triggerMode(90));
  document.getElementById("zxi-btn-safe").addEventListener("click", () => triggerMode(120));
  document.getElementById("zxi-btn-keygen").addEventListener("click", openKeyGenerator);
})();
