# jingyiliao.github.io

如果需要改变Formspree，比如发送bookmeeting到新的email：用户提交后会直接发送到你绑定的邮箱

2️⃣ 正确操作步骤

注册 / 登录 Formspree: https://formspree.io/
创建一个新表单,选择 “Collect submissions” 或免费方案
Formspree 会生成一个 URL，例如：https://formspree.io/f/mnqrbxyz
2️⃣ 设置接收邮箱
登录你的 Formspree 账号：找到表单 mnqrbxyz 
→ 点击 Edit Form 或 Settings
->在 Email to 或 Recipients 输入gemail
这是 Formspree 免费版支持单个收件邮箱.提交表单后，你就会收到邮件到这个邮箱

复制 hash 到你的表单 action, 也就是contact.html中
<form action="https://formspree.io/f/mnqrbxyz" method="POST">
