# 公开上线清单

这个项目已经可以作为静态系统公开部署，推荐使用 GitHub Pages。

目标仓库：[chloe19980401/wonly](https://github.com/chloe19980401/wonly)

默认公开地址：`https://chloe19980401.github.io/wonly/`

绑定域名：`https://wonlysocial.foreverdoodle.com/`

## 需要你提供

- 域名 DNS 管理后台的访问方式，或由你自己添加 DNS 记录

## 发布步骤

1. 把整个项目推送到 `chloe19980401/wonly` 仓库的 `main` 分支。
2. 在 GitHub 仓库 `Settings > Pages` 中选择 `GitHub Actions`。
3. 等待 `.github/workflows/pages.yml` 自动发布完成。
4. 打开 `https://chloe19980401.github.io/wonly/` 查看公开系统。
5. GitHub Pages 会读取 `CNAME` 并绑定 `wonlysocial.foreverdoodle.com`。
6. 在域名服务商处添加 DNS：
   - 类型：`CNAME`
   - 主机记录：`wonlysocial`
   - 指向：`chloe19980401.github.io`
7. 回到 GitHub Pages 页面确认自定义域名和 HTTPS 状态。

## 当前系统边界

- 当前版本是公开可访问的前端系统。
- 内容数据写在前端文件中，适合第一版演示和团队确认流程。
- 如果要多人实时协作、账号登录、云端保存数据，需要下一步连接数据库或 GitHub/Google Sheets/Supabase 等后端。
