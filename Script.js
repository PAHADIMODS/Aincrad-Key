(function () {
  const workerBase = "https://zxi-file-loader.ah4734536.workers.dev";
  const workerLink = workerBase + "/?file=zxi.txt&key=Hey";
  const rodaemotorUrl = "https://rodaemotor.com/carros-eletricos-a-revolucao-silenciosa-que-esta-redefinindo-o-futuro-da-mobilidade-global/";
  
  let l = null;
  let m = null;
  let musicBtn = null;

  // --- Background Styles & Keyframes Injection ---
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes zxi-premium-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    .zxi-mode-btn{width:100%;border:1px solid rgba(0,255,204,0.3);padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:1.5px;margin-bottom:12px;color:#fff;transition:all 0.3s ease;text-transform:uppercase}
    .zxi-btn-fast{background:linear-gradient(90deg,rgba(0,255,150,0.1),rgba(0,255,150,0.2));border-color:#00ff96;box-shadow:0 0 8px rgba(0,255,150,0.2)}.zxi-btn-fast:hover{background:#00ff96;color:#030712;box-shadow:0 0 15px #00ff96}
    .zxi-btn-secure{background:linear-gradient(90deg,rgba(255,170,0,0.1),rgba(255,170,0,0.2));border-color:#ffaa00;box-shadow:0 0 8px rgba(255,170,0,0.2)}.zxi-btn-secure:hover{background:#ffaa00;color:#030712;box-shadow:0 0 15px #ffaa00}
    .zxi-btn-safe{background:linear-gradient(90deg,rgba(0,204,255,0.1),rgba(0,204,255,0.2));border-color:#00ccff;box-shadow:0 0 8px rgba(0,204,255,0.2)}.zxi-btn-safe:hover{background:#00ccff;color:#030712;box-shadow:0 0 15px #00ccff}
    .zxi-btn-ads{background:linear-gradient(90deg,rgba(220,38,38,0.15),rgba(220,38,38,0.3));border-color:#dc2626;box-shadow:0 0 10px rgba(220,38,38,0.35)}.zxi-btn-ads:hover{background:#dc2626;color:#fff;box-shadow:0 0 20px #dc2626}
  `;
  document.head.appendChild(styleEl);

  // --- Mute/Unmute Music Button ---
  musicBtn = document.createElement("button");
  musicBtn.id = "zxi-music-btn";
  musicBtn.style.cssText = "position:fixed;bottom:15px;left:15px;background:rgba(6,10,23,0.95);border:2px solid rgba(0,255,204,0.5);color:#ff4444;border-radius:50%;width:45px;height:45px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.5);transition:all 0.3s ease;z-index:2147483647;outline:none;";
  musicBtn.textContent = "🔇";
  document.body.appendChild(musicBtn);

  musicBtn.addEventListener("click", async () => {
    if (!l) {
      try {
        musicBtn.textContent = "⏳";
        const res = await fetch(workerBase + "/?file=music.txt&t=" + Date.now());
        const audioUrl = (await res.text()).trim();
        if (audioUrl.startsWith("http")) {
          const audioBlob = await fetch(audioUrl);
          l = new Audio(URL.createObjectURL(await audioBlob.blob()));
          l.loop = true;
          l.crossOrigin = "anonymous";
        }
      } catch (e) {
        musicBtn.textContent = "🔇";
        return;
      }
    }

    if (l) {
      try {
        if (!m) {
          m = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (m.state === "suspended") {
          await m.resume();
        }
        if (l.paused) {
          await l.play();
          musicBtn.textContent = "🔊";
          musicBtn.style.color = "#00ffcc";
          musicBtn.style.borderColor = "#00ffcc";
          musicBtn.style.boxShadow = "0 0 15px rgba(0,255,204,0.6)";
        } else {
          l.pause();
          musicBtn.textContent = "🔇";
          musicBtn.style.color = "#ff4444";
          musicBtn.style.borderColor = "rgba(0,255,204,0.5)";
          musicBtn.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
        }
      } catch (err) {}
    }
  });

  // --- Main Selection UI Box ---
  const mainBox = document.createElement("div");
  mainBox.id = "zxi-auth-box";
  mainBox.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:2px solid #00ffcc;width:300px;box-sizing:border-box;";
  mainBox.innerHTML = `
    <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;">SELECT SYSTEM MODE</h3>
    <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE SECURITY BYPASS METHOD</p>
    <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE</button>
    <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE</button>
    <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE</button>
    <button id="zxi-btn-ads" class="zxi-mode-btn zxi-btn-ads">🔥 RODAEMOTOR ADS</button>
  `;
  document.body.appendChild(mainBox);

  // --- Timer & Redirect Handler fetching from Worker ---
  async function startRedirectTimer(targetProgress) {
    mainBox.remove();

    const overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(3,7,18,0.4);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;";
    overlay.innerHTML = `
      <canvas id="zxi-premium-canvas" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;"></canvas>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:2;">
          <div style="position:relative;width:320px;height:320px;margin:0 auto;display:flex;align-items:center;justify-content:center;">
              <div style="position:absolute;width:280px;height:280px;animation:zxi-premium-spin 4s linear infinite;">
                  <svg width="280" height="280" viewBox="0 0 280 280">
                      <circle cx="140" cy="140" r="120" fill="none" stroke="url(#grad1)" stroke-width="6" stroke-linecap="round" stroke-dasharray="200 400" />
                      <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0080" /><stop offset="50%" stop-color="#00ffcc" /><stop offset="100%" stop-color="#ffaa00" /></linearGradient>
                      </defs>
                  </svg>
              </div>
              <svg width="240" height="240" style="transform:rotate(-90deg);position:relative;z-index:3;">
                  <circle cx="120" cy="120" r="85" fill="rgba(6,10,23,0.94)" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                  <circle id="progress" cx="120" cy="120" r="85" fill="none" stroke="#00ccff" stroke-width="10" stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round" style="transition:stroke-dashoffset 1s linear;"></circle>
              </svg>
              <div id="countdown-text" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;font-weight:900;color:#fff;text-shadow:0 0 15px #00ccff;z-index:4;">0%</div>
          </div>
          <p style="margin-top:20px;color:#00ccff;font-size:15px;font-weight:700;letter-spacing:3px;text-shadow:0 0 10px rgba(0,204,255,0.4);">FETCHING LINK & REDIRECTING...</p>
      </div>
    `;
    document.body.appendChild(overlay);

    const canvas = document.getElementById("zxi-premium-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let currentProgress = 0;
    const progressBar = overlay.querySelector("#progress");
    const counterText = overlay.querySelector("#countdown-text");

    const timerInterval = setInterval(async () => {
      currentProgress++;
      const percent = Math.min(100, Math.round((currentProgress / targetProgress) * 100));
      counterText.textContent = percent + "%";
      progressBar.style.strokeDashoffset = 534 - (534 * (percent / 100));

      if (currentProgress >= targetProgress) {
        clearInterval(timerInterval);
        
        // Fetch final redirect link from Cloudflare Worker (`zxi.txt`)[span_1](start_span)[span_1](end_span)
        let finalUrl = rodaemotorUrl; // fallback
        try {
          const res = await fetch(workerLink + "&t=" + Date.now());
          const text = (await res.text()).trim();
          if (text.startsWith("http")) {
            finalUrl = text;
          }
        } catch (err) {
          console.error("Worker fetch failed, using fallback.");
        }

        if (l) l.pause();
        if (musicBtn) musicBtn.remove();
        overlay.remove();
        window.location.replace(finalUrl);
      }
    }, 1000);
  }

  // --- Event Listeners ---
  document.getElementById("zxi-btn-fast").addEventListener("click", () => startRedirectTimer(5));
  document.getElementById("zxi-btn-secure").addEventListener("click", () => startRedirectTimer(8));
  document.getElementById("zxi-btn-safe").addEventListener("click", () => startRedirectTimer(10));
  
  // Rodaemotor direct ad button
  document.getElementById("zxi-btn-ads").addEventListener("click", () => {
    if (l) l.pause();
    if (musicBtn) musicBtn.remove();
    mainBox.remove();
    window.location.replace(rodaemotorUrl);
  });
})();
