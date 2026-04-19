# 💕 Love For You - 浪漫表白网页

一个精心设计的交互式表白网页，通过优雅的动画效果和温馨的用户体验，帮助你向特别的人表达心意。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.2.0-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ 项目特色

- 🎨 **精美视觉设计**：渐变背景、玻璃态效果、流畅动画
- 💌 **四阶段交互**：信封开启 → 情书展示 → 浪漫提问 → 爱心动画
- ⌨️ **打字机效果**：逐字显示情书内容，增强仪式感
- 🎭 **趣味互动**："再想想"按钮会调皮地逃跑
- 🎊 **庆祝特效**：成功后绽放爱心和闪光粒子
- 💫 **爱心动画**：跳动爱心 + 粒子系统 + 渐变背景
- 📱 **响应式设计**：完美适配各种屏幕尺寸

## 🚀 快速开始

直接双击 `index.html` 文件即可体验，无需服务器环境。

## 📋 四阶段功能详解

### 💌 第一阶段：神秘信封
- 粉色信封带火漆印章，悬停时轻轻浮动
- 点击后信封优雅翻转展开

### 📝 第二阶段：深情告白
- 打字机效果逐字显示情书（马善政毛笔字体）
- 标点符号处自动停顿，模拟真实书写
- 阅读完毕后点击"继续"

### 💕 第三阶段：浪漫提问
- 跳动的巨大爱心 + "你愿意做我的女朋友吗？"
- **"我愿意"**：触发庆祝特效，2.5秒后跳转到爱心动画
- **"再想想"**：鼠标靠近时会随机逃跑（无法点击）

### ✨ 第四阶段：爱心动画
- 渐变流动背景（紫色→粉色→橙色，8秒循环）
- 150px超大跳动爱心 + "我爱你"文字逐字淡入
- 三层粒子系统：上升粒子、环绕星光、漂浮爱心
- 无限循环播放，可持续观看

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 15+种动画效果、渐变背景、玻璃态效果
- **JavaScript** - DOM操作、事件监听、动态元素创建
- **Google Fonts** - 中文字体（马善政、志莽行）

## 🎨 自定义指南

### 修改情书内容
在 `script.js` 第18行编辑：
```javascript
const textToType = `亲爱的，

从我们相遇的那一刻起，
我的世界就因为你而变得不同。

// ... 在这里写你的专属情书 ...`;
```

### 调整打字速度
在 `script.js` 第29行修改：
```javascript
let typingSpeed = 100; // 毫秒/字符，数值越小越快
```

### 修改提问文本
在 `index.html` 第37行修改：
```html
<h1 id="question">所以...你愿意做我的女朋友吗？</h1>
```

### 更改主题颜色
在 `style.css` 中搜索并修改颜色值：
- 背景渐变：`body { background: linear-gradient(...); }`
- 主题色：`#ff4d6d`、`#ff758c` 等

### 调整跳转时间
在 `script.js` "Yes"按钮事件中修改：
```javascript
setTimeout(() => {
    switchScreen(screen3, screen4);
}, 2500); // 改为其他毫秒数
```

## 🌐 浏览器兼容性

| 浏览器 | 支持情况 |
|--------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| IE 11 | ❌ |

**注意**：需要现代浏览器支持 CSS `backdrop-filter` 属性。

## 📁 项目结构

```
love-for-you/
├── index.html      # 主页面（4个屏幕场景）
├── style.css       # 样式表（450+行，15+种动画）
├── script.js       # 交互逻辑（320+行，9个核心函数）
└── README.md       # 本文档
```

## 💡 创意扩展

你可以基于此项目定制：
- 📸 添加照片轮播
- 🎵 集成背景音乐
- 📝 多页情书分页展示
- 🎁 添加礼物线索或彩蛋
- 🎆 烟花爆炸特效
- 💬 添加聊天记录回顾

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 💌 寄语

> "最好的表白，不是华丽的辞藻，而是真诚的心意。"

祝你表白成功！🎉

---

<div align="center">

**Made with ❤️ for someone special**

*有问题？欢迎提交 Issue 或 Pull Request*

</div>
