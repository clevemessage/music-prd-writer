# copilot 部署说明

这个目录可以直接作为一个 Vercel 项目部署。用户访问公网地址后不需要安装本机环境，也不需要自己填写 DeepSeek API Key。

## 部署方式

1. 将 `copilot-export-review` 目录上传到 GitHub 仓库。
2. 在 Vercel 中导入该仓库，项目根目录选择 `copilot-export-review`。
3. 在 Vercel 的 Environment Variables 中新增：
   - `DEEPSEEK_API_KEY`: 你的 DeepSeek API Key
4. 部署完成后，打开 Vercel 分配的公网地址即可使用。

## 工作方式

- `index.html` 是完整前端页面。
- `/api/deepseek/chat/completions` 是服务端代理接口。
- 前端默认使用代理模式，所有用户共用服务端配置的 Key。
- Key 不会出现在浏览器源码、localStorage 或网络请求的 Authorization header 中。
- 会话历史、模板、自定义 Skill、写作风格等用户侧记忆保存在访问者自己的浏览器 localStorage 中；不同用户互不共享。

## 本地预览

只看页面可以直接打开 `index.html`。如果要本地测试 AI 代理，需要用 Vercel CLI 或其他支持 Serverless API 的环境运行，并配置 `DEEPSEEK_API_KEY`。

## 成本与安全建议

- 公网开放后，任何访问者都能触发模型调用，建议给项目加访问控制、用量监控或后端限流。
- 当前代理已限制单次 prompt 约 60000 字符，避免超大请求误伤成本。
- 不建议再把任何 API Key 写进前端代码。
