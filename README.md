# music-prd-writer

QQ 音乐产品经理 PRD 撰写器。前端为单页应用，公网部署时通过服务端代理调用 DeepSeek，访问用户不需要本机安装环境或填写 API Key。

## Deploy

推荐使用 Vercel：

1. 导入本仓库。
2. Project Root 选择仓库根目录。
3. 在 Environment Variables 中配置 `DEEPSEEK_API_KEY`。
4. 部署后访问 Vercel 生成的公网地址。

更多说明见 `DEPLOYMENT.md`。
