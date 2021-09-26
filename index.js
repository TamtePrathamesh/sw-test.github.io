if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => {
        console.log("Reg Successful ", reg);
      })
      .catch((err) => console.log("reg failed", err));
  });
}
