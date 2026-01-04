
## 项目

最初修改自[5iux](https://github.com/5iux/sou)，精简、简单化处理

运行要求：html、js、css

预览：[https://dh.echs.top](https://dh.echs.top)

## nav.js

```js
const CONFIG = {
page_title: '导航', //名称
meta_description: '简单导航主页', //网站描述
background_image_url: 'https://api.echs.top/color', //背景图片
loading_man: 'true', //是否启用MAN加载
//需640×640 PNG，可从64×64临近取样生成
//classic_url、slim_url均不为空则随机二选一
classic_url: 'https://api.echs.top/classic', //MAN皮肤
slim_url: 'https://api.echs.top/slim', //细胳膊MAN皮肤
loading_quicklink: 'false', //是否加载quicklink预加载
footer_content_html: '' //底部信息
};
const NAV_DATA_TEXT = `
# 软件
https://www.flysheep6.com | 资源避难所|游戏
https://www.apprcn.com | 反斗软件
https://www.ghxi.com | 果核剥壳
https://myqqjd.com | 芊芊经典
https://www.uy5.net | 克隆窝
https://www.423down.com | 423Down
https://jamcz.com | 晨钟酱网络科技
https://echs.top | 我的应用集
# 游戏
https://ys.mihoyo.com | 原神启动
http://lonelystar.org/download.htm | PvZ资源下载
https://www.minesweeper.cn | 网页扫雷
https://b23.tv/PnGt5C0 | 植物娘大战僵尸
`;
```

## 目录

```
├── index.html
├── nav.js
├── style.css
├── man.js
├── sw.js
├──  CDN: jquery.slim.min-*.js
├──  CDN: quicklink-*.js
```

## 更新

```
//6.1 2026.01.03
更新man.js、优化css(相对很完美了)、加入serviceWorker
ps：不到20kb的js，虽然没多余功能，但总比加载SkinView3D库和Three.js好，它俩加起来快2MB了。
// 6.0 2026.01.03
本次更新大部分内容由gemini ai完成
内容重写；加入minecraft skin css样式；精简文件；
5.1：更换cdn链接

// 5.0 2025.11.02
精简html标签；去除css、js文件无意义内容；使用nav.js写入config及书签，去除PHP环境依赖，回归纯html

// 4.0 2025.10.27
精简html内容；常用自定义放置php顶部；精简优化css和js文件；更新quicklink-3.0.1.js和jquery.slim.min-4.0.0-rc.1.js
# 更新全靠AI修……

// 3.0 2025.02.21
新增nav.txt并通过php转化输出；html代码精简文本优化；尝试修正搜索按钮位置

// 2.0 2024.06.22
更换webp网站图标；替换jquery.slim.min.4.0.0.js；精简html js css；引入Quicklinkjs网页预加载；发现staticfile bootcdn等公共cdn被投毒 替换自用cdn加速
!!! 三方CDN被投毒 https://github.com/Tencent/vConsole/issues/683

// 1.0 2024.06.15
删除无意义内容 链接图标；优化搜索图标点击；a标签新标签页打开；更换静态资源链接；精简html；缩短主编辑区；引用jquery.slim.min.js
```
