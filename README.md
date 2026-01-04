
## 项目

最初修改自[5iux](https://github.com/5iux/sou)，现已改的面目全非

运行要求：html、js、css

预览：[https://echsfxy.vercel.app](https://echsfxy.vercel.app)

只试了火狐和chrome系，其他浏览器自求多福，gemini不一定修的了

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

