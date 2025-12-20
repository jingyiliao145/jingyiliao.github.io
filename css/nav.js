(function () {
  const path = window.location.pathname;

  const isCN = path.includes("/cn/");
  const base = isCN ? "/cn/" : "/en/";
  const switchLang = isCN ? "/en/index.html" : "/cn/index.html";
  const switchText = isCN ? "EN" : "中文";

  const navHTML = `
<header>
  <nav>
    <a href="${base}index.html">${isCN ? "首页" : "Home"}</a>
    <a href="${base}about.html">${isCN ? "关于我们" : "About Us"}</a>
    <a href="${base}services.html">${isCN ? "服务" : "Services"}</a>
    <a href="${base}product.html">${isCN ? "定制示例" : "Custom Examples"}</a>
    <a href="/data/products.html">${isCN ? "产品" : "Products"}</a>
    <a href="${base}sourcing.html">${isCN ? "采购" : "Sourcing"}</a>
    <a href="${base}manufacturing.html">${isCN ? "生产" : "Manufacturing"}</a>
    <a href="${base}how-we-work.html">${isCN ? "合作方式" : "How We Work"}</a>
    <a href="${base}certification.html">${isCN ? "认证" : "Certification"}</a>
    <a href="${base}sustainability.html">${isCN ? "可持续" : "Sustainability"}</a>
    <a href="${base}contact.html">${isCN ? "联系" : "Contact"}</a>
    <a href="${switchLang}">${switchText}</a>
  </nav>
</header>
`;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
})();
