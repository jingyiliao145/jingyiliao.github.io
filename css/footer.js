(function() {
  const path = window.location.pathname;
  const isCN = path.includes("/cn/");

  const baseLegal = "/legal/"; // legal文件位置
  const imprintText = isCN ? "法律声明" : "Imprint";
  const privacyText = isCN ? "隐私政策" : "Privacy Policy";

  // 公司标识：文字 + logo.jpg
  const companyLogoHTML = `
    <div class="footer-logo" style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <img src="/images/logo.jpg" alt="My Company Logo" style="height:40px;">
      <span style="font-weight:bold;">My Company</span>
    </div>
  `;

  const footerHTML = `
<footer>
  ${companyLogoHTML}
  <a href="${baseLegal}imprint.html">${imprintText}</a> |
  <a href="${baseLegal}privacy.html">${privacyText}</a>
</footer>
`;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
