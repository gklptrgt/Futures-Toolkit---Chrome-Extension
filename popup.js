function calculate() {
    const winroe = parseFloat(document.getElementById("roe1xwin").value);
    const riskroe = parseFloat(document.getElementById("roe1xrisk").value);
    const leverage = parseFloat(document.getElementById("leverage").value);
    const margin = parseFloat(document.getElementById("margin").value);
  
    const pnl = ((winroe * leverage) / 100) * margin;
    const roe = winroe * leverage;
    const risk = -((riskroe * leverage) / 100) * margin;
  
    document.getElementById("pnl").innerText = pnl.toFixed(2);
    document.getElementById("roe").innerText = roe.toFixed(2);
    document.getElementById("risk").innerText = risk.toFixed(2);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", calculate);
  });