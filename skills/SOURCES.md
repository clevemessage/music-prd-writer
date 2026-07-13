# Skill 来源状态

## 已接入

- `music-prd-writer`
  - 状态：已接入用户提供的原始 Skill.md。
  - 原始来源：`/Users/cleve/.workbuddy/skills/bubble-prd-writer-v5/SKILL.md`
  - 源文件：`skills/music-prd-writer.md`

- `create-prd`
  - 状态：已接入用户提供的原始 Skill.md。
  - 原始来源：`/Users/cleve/.workbuddy/skills/create-prd/create prdSKILL.md`
  - 源文件：`skills/create-prd.md`

- `prd-generator`
  - 状态：已接入用户提供的原始 Skill.md。
  - 原始来源：`/Users/cleve/.workbuddy/skills/prd-generator/prd generator SKILL.md`
  - 源文件：`skills/prd-generator.md`
  - 附属资源：
    - `skills/prd-generator/references/prd_template.md`
    - `skills/prd-generator/references/user_story_examples.md`
    - `skills/prd-generator/references/metrics_frameworks.md`
    - `skills/prd-generator/scripts/generate_prd.sh`
    - `skills/prd-generator/scripts/validate_prd.sh`
  - 说明：网页运行时已将三个 reference 文档合并进 `prd-generator` 的内置上下文；脚本作为源资源保存，不在浏览器端直接执行。

## 待接入原始 skill.md

以下名称目前没有接入可核验的原始 `skill.md` 文件。不要把它们当作真实 Skill 使用，也不要用本地补写内容冒充原版。

- `quick-report-prd`
- `universal-prd-writer`

## 接入规则

启用新的 Skill 前，需要满足至少一个条件：

1. 提供原始 `skill.md` 文件。
2. 提供可信仓库链接，并能定位到对应 `skill.md`。
3. 提供团队内部规范文档，并明确允许作为该 Skill 的来源。

接入后需要同步更新：

- `index.html` 中的 `SKILL_MD_STORE`
- `SKILL_STEP_MAP`
- `getSkillGenerationSpec()`
- `skills/` 下对应的 Markdown 源文件
