(function() {
  const path = window.location.pathname;
  const isCN = path.includes("/cn/");

  const baseLegal = "/legal/"; // legal文件位置不变
  const imprintText = isCN ? "法律声明" : "Imprint";
  const privacyText = isCN ? "隐私政策" : "Privacy Policy";

  const footerHTML = `
<footer>
  <a href="${baseLegal}imprint.html">${imprintText}</a> |
  <a href="${baseLegal}privacy.html">${privacyText}</a>
</footer>
`;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
