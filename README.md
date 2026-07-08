# Wonly 社媒管理系统

这是一个可公开部署的静态社媒管理系统，用于团队规划 Phase 1 社媒内容、查看 12 周发布节奏、管理内容状态并追踪 Go/No-Go 数据。

目标仓库：[chloe19980401/wonly](https://github.com/chloe19980401/wonly)

默认公开地址：`https://chloe19980401.github.io/wonly/`

绑定域名：`https://wonlysocial.foreverdoodle.com/`

## 本地查看

直接打开 `index.html` 即可使用。

## 系统包含

- 项目总览：4 个内容系列、平台定位和本周任务
- 内容日历：12 周轮换发布节奏
- 内容库：内容状态、负责人、平台适配和目标
- 数据追踪：播放、完播率、互动率、粉丝增长和 Go/No-Go 规则
- 公开部署：GitHub Pages 自动发布配置、CNAME、404、站点图标和移动端 manifest

## GitHub Pages 部署

1. 在 GitHub 创建仓库，例如 `wonly-social-dashboard`。
2. 上传本目录所有文件。
3. 在仓库 `Settings > Pages` 中选择 `GitHub Actions` 发布。
4. 自定义域名已配置在 `CNAME`：`wonlysocial.foreverdoodle.com`。

## 域名连接

在域名服务商后台添加：

- 类型：`CNAME`
- 主机记录：`wonlysocial`
- 指向：`chloe19980401.github.io`

保存后回到 GitHub Pages 填入同一个域名，并等待 HTTPS 证书生效。

更完整的上线清单见 `DEPLOYMENT.md`。
