# 图形小站

中文 R 可视化示例网站，目标地址 https://19zhangt.github.io 。使用 Quarto、ggplot2、tidyplots，按散点图、分布图、条形图、折线图、热图分别展示历史示例数据、可复制代码和真实生成的图片。

## 本地预览

需要 R >= 4.2、ggplot2、tidyplots 和 Quarto CLI。先在 R 中将工作目录设为本项目，执行 `source("scripts/generate-assets.R")`，然后在终端运行 `quarto preview`。发布前运行 `quarto render`；生成的静态网站位于 `_site/`。

代码片段在 `snippets/`，数据在 `data/`，图片在 `images/`。目前素材生成脚本会重建这些文件，修改示例时应同时修改脚本内的代码片段和对应作图逻辑。PNG 中文显示需要系统支持中文字体。每个页面给出数据下载入口，R 代码使用内置数据集，可直接复制运行。

## GitHub Pages 部署

该目录创建时没有自己的 `.git`，Git 命令会向上找到 `SZBL` 仓库。不要在这里直接执行 `git add .` 后向上层远程推送。请先将网站文件放到真正的 `19zhangt/19zhangt.github.io` 仓库根目录（包括隐藏的 `.github/`、`.gitignore`）。确认 `git rev-parse --show-toplevel` 和 `git remote -v` 都指向目标网站仓库后，再提交到其 `main` 分支。

在 GitHub 仓库 Settings → Pages → Build and deployment 中，将 Source 设为 **GitHub Actions**。推送到 main 将触发 `.github/workflows/publish.yml`，自动安装 R 依赖、生成两套图片、渲染并发布。也可以从 Actions 页面手动运行。成功部署后才能通过 https://19zhangt.github.io 访问；本项目创建本身不会更改 GitHub 设置或自动上线。

工作流固定 R 和 Quarto 版本，R 包使用构建时可用版本，尚未锁定包版本；若需要严格复现，可后续加入 renv 锁文件。

## 添加图型

复制一个 qmd 页面，调整数据说明和两组图片/代码片段引用。在 `scripts/generate-assets.R` 增加代码片段及图片生成逻辑，在 `_quarto.yml` 导航和 `index.qmd` 首页增加入口。所有资源使用相对路径。

## 数据来源与缺失值

iris、mtcars、airquality 来自 R 的 datasets 包。前两者无缺失；airquality 的 Ozone 与 Solar.R 有缺失，本示例折线图只使用无缺失的 Month 和 Temp，按月计算平均华氏气温，不进行插补。热图使用 mtcars 中 mpg、disp、hp、wt 的 Pearson 相关系数，仅供探索展示，不是因果关系或显著性检验。条形图用单行汇总频数，tidyplots 的 `add_mean_bar()` 在每组仅一行时显示的就是该频数。
