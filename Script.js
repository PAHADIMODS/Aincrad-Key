(function () {
  const workerUrl = "https://zxi-file-loader.ah4734536.workers.dev/?file=zxi.txt&key=Hey";
  const defaultUrl = "https://rodaemotor.com/carros-eletricos-a-revolucao-silenciosa-que-esta-redefinindo-o-futuro-da-mobilidade-global/";

  // Inject Styles
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    @keyframes zxi-lightning-glow {0%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc}50%{box-shadow:0 0 25px #00ffff,0 0 40px #00ffcc}100%{box-shadow:0 0 5px #00ffcc,0 0 10px #00ffcc}}
    @keyframes zxi-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    .zxi-mode-btn{width:100%;border:1px solid rgba(0,255,204,0.3);padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;letter-spacing:1.5px;margin-bottom:12px;color:#fff;text-transform:uppercase}
    .zxi-btn-fast{background:rgba(0,255,150,0.15);border-color:#00ff96}
    .zxi-btn-secure{background:rgba(255,170,0,0.15);border-color:#ffaa00}
    .zxi-btn-safe{background:rgba(0,204,255,0.15);border-color:#00ccff}
  `;
  document.head.appendChild(styleEl);

  // Remove existing UI if any
  const oldBox = document.getElementById("zxi-auth-box");
  if (oldBox) oldBox.remove();

  // Main UI Box
  const mainBox = document.createElement("div");
  mainBox.id = "zxi-auth-box";
  mainBox.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(6,10,23,0.95);color:#fff;padding:30px 25px;border-radius:16px;z-index:2147483647;font-family:system-ui,-apple-system,sans-serif;text-align:center;border:2px solid #00ffcc;width:300px;box-sizing:border-box;";
  mainBox.innerHTML = `
    <h3 style="margin:0 0 6px 0;color:#00ffcc;font-size:20px;font-weight:800;">PAHADI SYSTEM</h3>
    <p style="margin:0 0 20px 0;color:#64748b;font-size:11px;letter-spacing:2px;">SELECT SYSTEM MODE</p>
    <button id="zxi-btn-fast" class="zxi-mode-btn zxi-btn-fast">⚡ FAST MODE</button>
    <button id="zxi-btn-secure" class="zxi-mode-btn zxi-btn-secure">🛡️ SECURE MODE</button>
    <button id="zxi-btn-safe" class="zxi-mode-btn zxi-btn-safe">🔐 SAFE MODE</button>
  `;
  document.body.appendChild(mainBox);

  async function runMode(steps, fallbackUrl) {
    mainBox.remove();

    let finalUrl = fallbackUrl;
    try {
      const res = await fetch(workerUrl + "&t=" + Date.now());
      const text = (await res.text()).trim();
      if (text.startsWith("http")) {
        finalUrl = text;
      }
    } catch (e) {
      console.log("Using fallback URL due to network error.");
    }

    window.location.replace(finalUrl);
  }

  document.getElementById("zxi-btn-fast").addEventListener("click", () => runMode(95, defaultUrl));
  document.getElementById("zxi-btn-secure").addEventListener("click", () => runMode(100, defaultUrl));
  document.getElementById("zxi-btn-safe").addEventListener("click", () => runMode(110, defaultUrl));
})();
