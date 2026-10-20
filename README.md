# Yucheng.Han — Personal website

双语个人名片网站，使用原生 HTML、CSS、JavaScript，无构建依赖，无外部字体、追踪脚本或服务端。

## 预览

在此目录运行 `python -m http.server 4173`，然后打开 `http://localhost:4173`。也可直接用浏览器打开 `index.html`。

## 更新内容

- `content.js`：全部双语文案、教育经历、技能卡片、学习方向、邮箱、GitHub 地址与审核状态。
- `minimal.css`：配色、简洁排版与响应式断点。
- `index.html`：页面结构；若更换名字、GitHub 地址，请同步替换此文件中的静态文案及链接。
- `assets/favicon.svg`：姓名字标图标。
- `assets/avatar.jpg`：来自用户指定 Pictures 目录的原始头像，通过样式显示为圆形。

技能条目支持 `title`、`description`、`tags`，以及可选的 `project: { label, href }`。学习条目使用 `title`（直接填写技术名称）与 `description`。中英文条目保持相同顺序。能力地图不显示状态标签、认证说明或预览横条。

## 内容审核与发布

当前是本地完整版本。按用户要求，页面已去除预览提示、能力状态标签和认证说明；搜索索引设置仍为 `noindex,nofollow`，等待正式发布。该设置不是访问权限控制。

1. 确认 `CONTENT-REVIEW.md` 中的称呼、简介、技能与学习方向；修改不准确内容，并同步两个语言版本。
2. 正式发布时，将 `content.js` 的 `profile.contentApproved` 设为 `true`，允许搜索索引；该字段不再控制页面文案或任何状态标签。
3. 同时把 `index.html` 的 robots 元标签改为 `index,follow`，保证不执行 JavaScript 的抓取器也获得正确状态。
4. 提交到已核实的仓库 `hxs898570462/hxs898570462.github.io` 的 `main` 分支，保留现有历史。上传本目录中的网页资源与 `.nojekyll`，审核记录不必公开。
5. 在仓库 Settings → Pages 中选择 Deploy from a branch → main → / (root)，保存。若已有发布设置，先核实再调整。
6. 等待 Pages 发布完成后，访问 `https://hxs898570462.github.io/`，检查中文、英文、移动布局和全部链接。

不需要打包或安装依赖。没有创建 Actions 工作流，因为这个静态网页可直接从分支发布。当前仓库已有一个 README，实施前已只读核查，未覆盖远程内容。

## 交互与无障碍

语言默认英文，右上角可切换中文，新的语言选择会保存在本地浏览器中；存储被禁用时切换仍然可用。此次使用新的语言偏好键，让此前中文默认版本的用户也先看到英文。静态 HTML 同样为英文。支持键盘导航、跳转到正文和可见焦点，尊重 `prefers-reduced-motion`。页面使用六项能力的双列列表与直接描述技术的学习列表。关闭 JavaScript 时保留英文介绍、头像、教育经历与联系入口，并提示开启脚本查看能力内容。

GitHub 链接打开新标签页并包含 `noopener noreferrer`。按用户要求展示邮箱 `Yucheng.Han23@student.xjtlu.edu.cn`，点击可打开邮件客户端；没有联系方式表单。教育经历为用户提供的西交利物浦大学本科、Big Data and Data Science 专业、2023 年入学至今在读；未添加毕业时间、成绩或学位荣誉。
