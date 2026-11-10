(function () {
  const workerBase = "https://zxi-file-loader.ah4734536.workers.dev";
  const defaultUrl = "https://rodaemotor.com/carros-eletricos-a-revolucao-silenciosa-que-esta-redefinindo-o-futuro-da-mobilidade-global/";

  // --- Background Styles & Keyframes ---
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes zxi-premium-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    .zxi-mode-btn{width:100%;border:1px solid rgba(0,255,204,0.3);padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:1.5px;margin-bottom:12px;color:#fff;transition:all 0.3s ease;text-transform:uppercase}
    .zxi-btn-fast{background:linear-gradient(90deg,rgba(0,255,150,0.1),rgba(0,255,150,0.2));border-color:#00ff96;box-shadow:0 0 8px rgba(0,255,150,0.2)}.zxi-btn-fast:hover{background:#00ff96;color:#030712;box-shadow:0 0 15px #00ff96}
    .zxi-btn-secure{background:linear-gradient(90deg,rgba(255,170,0,0.1),rgba(255,170,0,0.2));border-color:#ffaa00;box-shadow:0 0 8px rgba(255,170,0,0.2)}.zxi-btn-secure:hover{background:#ffaa00;color:#030712;box-shadow:0 0 15px #ffaa00}
    .zxi-btn-safe{background:linear-gradient(90deg,rgba(0,204,255,0.1),rgba(0,204,255,0.2));border-color:#00ccff;box-shadow:0 0 8px rgba(0,204,255,0.2)}.zxi-btn-safe:hover{background:#00ccff;color:#030712;box-shadow:0 0 15px #00ccff}
  `;
  document.head.appendChild(styleEl);

  // --- Main UI Box ---
  const mainBox = document.createElement("div");
  mainBox.id = "zxi-auth-box";
  mainBox.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:2px solid #00ffcc;width:300px;box-sizing:border-box;";
  mainBox.innerHTML = `
    <h3 style="margin:0 0 8px 0;color:#00ffcc;font-size:18px;font-weight:800;">SELECT SYSTEM MODE</h3>
    <p style="margin:0 0 22px 0;color:#64748b;font-size:10px;letter-spacing:1px;">CHOOSE SECURITY BYPASS METHOD</p>
    <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE (1 Min)</button>
    <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE (1.5 Min)</button>
    <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE (2 Min)</button>
  `;
  document.body.appendChild(mainBox);

  // --- Timer & Worker Fetch Logic ---
  function runRedirect(totalSeconds) {
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
                      <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff0080" /><stop offset="50%" stop-color="#00ffcc" /><stop offset="100%" stop-color="#ffaa00" /></linearGradient></defs>
                  </svg>
              </div>
              <svg width="240" height="240" style="transform:rotate(-90deg);position:relative;z-index:3;">
                  <circle cx="120" cy="120" r="85" fill="rgba(6,10,23,0.94)" stroke="rgba(255,255,255,0.05)" stroke-width="10"></circle>
                  <circle id="progress" cx="120" cy="120" r="85" fill="none" stroke="#00ccff" stroke-width="10" stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round" style="transition:stroke-dashoffset 1s linear;"></circle>
              </svg>
              <div id="countdown-text" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;font-weight:900;color:#fff;text-shadow:0 0 15px #00ccff;z-index:4;">0%</div>
          </div>
          <p style="margin-top:20px;color:#00ccff;font-size:15px;font-weight:700;letter-spacing:3px;text-shadow:0 0 10px rgba(0,204,255,0.4);">WAITING & REDIRECTING...</p>
      </div>
    `;
    document.body.appendChild(overlay);

    const canvas = document.getElementById("zxi-premium-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let currentSec = 0;
    const progressBar = overlay.querySelector("#progress");
    const counterText = overlay.querySelector("#countdown-text");

    const intervalId = setInterval(async () => {
      currentSec++;
      const percent = Math.min(100, Math.round((currentSec / totalSeconds) * 100));
      counterText.textContent = percent + "%";
      progressBar.style.strokeDashoffset = 534 - (534 * (percent / 100));

      if (currentSec >= totalSeconds) {
        clearInterval(intervalId);
        
        let finalRedirect = defaultUrl;
        try {
          const response = await fetch(workerBase + "/?file=zxi.txt&key=Hey&t=" + Date.now());
          const textData = (await response.text()).trim();
          if (textData.startsWith("http")) {
            finalRedirect = textData;
          }
        } catch (err) {
          console.error("Worker fetch error:", err);
        }

        overlay.remove();
        window.location.replace(finalRedirect);
      }
    }, 1000);
  }

  // Button Triggers with custom timers:
  // 1 Min = 60 Seconds
  document.getElementById("zxi-btn-fast").addEventListener("click", () => runRedirect(60));
  // 1.5 Min = 90 Seconds
  document.getElementById("zxi-btn-secure").addEventListener("click", () => runRedirect(90));
  // 2 Min = 120 Seconds
  document.getElementById("zxi-btn-safe").addEventListener("click", () => runRedirect(120));
})();
