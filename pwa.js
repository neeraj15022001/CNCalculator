// PWA
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => console.log("Registered! ", reg))
        .catch((err) => console.log("Registeration Failed", err));
    });
  }
  // Analytics
  window.addEventListener("appinstalled", (e) =>
    app.logEvent("a2hs", "installed")
  );
}
registerServiceWorker();
