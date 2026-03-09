# 角色设定
你现在是一名拥有 10 年经验的海外 Affiliate Media Buyer 兼资深前端工程师。精通高转化 Landing Page 制作，深谙消费者心理学（特别是博彩/体育竞猜受众的 FOMO 心理），且必须符合 Google Ads 的内容合规底线。

# 任务目标
使用纯 HTML5 + Tailwind CSS (通过 CDN 引入) + 原生 JavaScript，为孟加拉板球市场编写一个“动态且极具诱惑力”的 Pre-lander（桥接页）。

# 核心策略：动态赛事快讯 + 软文评测 (Dynamic News & Advertorial)
页面伪装成一个实时的体育资讯与数据分析站。不仅有长期评测，还有每天可动态更换的“今日焦点赛事”和“突发新闻”。

# 设计与技术规范
1. **轻量级动态内容系统 (核心需求)**：
   - 不使用任何数据库。
   - 创建一个全局的 `config.js` 或在一个 `<script>` 标签内建立一个 JSON 对象。
   - 该对象必须包含以下可配置变量，方便广告主每天手动修改：
     - `breakingNews`: 顶部的滚动横幅新闻（如："🚨 突发：沙基布·阿尔·哈桑确认首发！"）。
     - `matchOfTheDay.team1` & `team2`: 今日焦点队伍。
     - `matchOfTheDay.odds`: 模拟的“胜率趋势”或“数据优势”。
     - `mainBannerImage`: 主图 URL。
     - `promoCode`: 动态促销码（制造稀缺感，如 "BPL2026MAX"）。
   - 页面的 HTML 内容必须由 JS 读取这些变量并动态渲染。
2. **移动端优先与极速**：针对 3G/4G 网络优化，单文件或极少请求，`max-width: 600px` 居中。
3. **安全合规词汇**：**绝对禁止**使用 "Casino, Gambling, Bet, Win Cash"。请使用 "Match Prediction, Sports Insights, Instant Withdrawals, VIP Rewards"。

# 页面结构与转化漏斗 (HTML Framework)

## 1. 顶部：紧急突发新闻条 (The Urgency Hook)
* 一个背景为红色的滚动条 (Marquee 或 CSS 动画)，读取 `breakingNews` 变量。
* 心理学目的：一秒钟抓住眼球，让用户觉得“这是最新的内幕”。

## 2. 动态焦点赛事卡片 (Match of the Day Widget)
* 设计成类似比分 App 的卡片。
* 读取 `matchOfTheDay` 变量，展示两支队伍的对决。
* 加上一个动态闪烁的绿点，旁边写着 "Live Data Active" (模拟实时感)。
* 文案引导：“Our AI prediction for today's match is ready.”

## 3. 核心评测与转化区 (BIGWIN959 高光区)
* 标题："Why 50,000+ BD Fans Are Using BIGWIN959 Today"
* **信任锚点 (Trust Anchors)**：放置 bKash, Nagad, Rocket 的清晰图标，文字注明 "Under 3 Minutes Payout" (3分钟内出款，这对孟加拉用户是最强春药)。
* **稀缺性诱导**：
  * 显示一个虚假的“今日剩余名额”进度条（如 87% 已满）。
  * 显示动态促销码 `promoCode`，并提示 "Valid only for the next 2 hours." (仅限未来两小时有效)。
* **主 CTA 按钮**：
  * 大尺寸，亮绿色或金色，带有脉冲动画 (Pulse)。
  * 文案："Copy Code & Get VIP Access Now" (复制验证码并获取 VIP 权限)。
  * 链接暂留空为 `href="{VOLUUM_OFFER_LINK}"`。

## 4. 实时滚动评论区 (Social Proof)
* 模拟 WhatsApp 或 Facebook 风格的评论。
* 使用 JS 制作简单的轮播或淡入淡出效果，让评论看起来是刚刚发出的。
* 评论内容要接地气，包含孟加拉语拼音 (Banglish) 或纯英文：
  * "Just got my withdrawal via bKash! Super fast." - 2 mins ago
  * "The analysis for the Dhaka match was 100% accurate bro 🔥" - 5 mins ago

## 5. 底部合规说明 (Footer)
* 包含版权信息，以及 Privacy Policy, Terms, Disclaimer 的占位链接（用于应付 Google Ads 机器审查）。

# 输出要求
请输出结构清晰的代码，最好将 HTML, CSS(Tailwind classes) 和 JS 逻辑放在一个代码块或明确分离的文件块中，确保配置文件 (`config`) 放置在最显眼、最易于让不懂代码的人修改的地方。