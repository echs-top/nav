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
# 日常
https://www.ruanyifeng.com/blog | 科技爱好者周刊
https://bf.zzxworld.com | BlogFinder
https://iao.su | 不死鸟
https://zishu.me/categories/weekly | 奇趣周刊
https://hellogithub.com | GITHUB月刊
https://dusays.com | 杜老师说
https://myql.eu.org | 雨夜回廊
https://echs.top | 我的网站导航
https://www.boyouquan.com/home | 博友圈
# 软件
https://www.flysheep6.com | 资源避难所|游戏
https://www.apprcn.com | 反斗软件
https://www.ghxi.com | 果核剥壳
https://myqqjd.com | 芊芊经典
https://www.uy5.net | 克隆窝
https://www.423down.com | 423Down
https://jamcz.com | 晨钟酱网络科技
https://echs.top | 我的应用集
# 媒体
https://weibo.iiilab.com | 视频解析下载
https://tool.liumingye.cn/music/# | 音乐试听下载
https://www.hifini.com | HIFI无损论坛
https://vocalremover.org/zh | 在线音频处理
https://www.y2mate.com | Youtube视频下载
https://www.hmxz.org | 海绵小站|天翼
https://www.leijing.xyz | 雷鲸小站|天翼
https://www.gying.page | 片库
https://myql.eu.org/article/Music | 音乐相关收集
https://echs.top/MUSIC | 我的音乐网盘
https://zm.i8k.tv | 字幕工具箱
https://yinghe.app | 硬核指南
# 图片
https://imagestool.com/zh_CN | 在线图片转换
https://www.waifu2x.net | Waifu2x图片放大
https://photo-to-anime.com | 图片动漫化
https://benisland.neocities.org/petpet | 摸头图制作
https://ascii2d.net | 图片在线识别
https://www.remove.bg/zh | 在线背景去除
https://tinify.cn | Tiny图片压缩
https://qrbtf.com/zh | 参数化二维码
https://bz.zzzmh.cn/index | 极简壁纸
https://www.uugai.com | 免费Logo制作
https://carbon.now.sh | 代码图片生成
https://echs.top/图片API | 原神随机图片
https://spacexcode.com/coverview | 封面图生成
https://lab.nulla.top/ba-logo | 蔚蓝图标生成
https://html.zone/background-remover | 一键去图片背景
https://www.iloveimg.com/zh-cn/compress-image/compress-gif | GIF压缩
# 书籍
http://www.tanglib.com | 世界名著
https://aspoem.com | 中国诗词
https://www.historyline.online | 中国历朝讲解
http://qikan.lifves.com | 期刊杂志阅读
https://zh.singlelogin.rs | Z-Library
https://www.qsbtxt.net | 趣书包
# 文本
https://tooltt.com | 文本在线工具
https://www.iamwawa.cn/reversetext.html | 文本反转排序
https://www.yishuzi.cn | 艺术字图片
https://it365.gitlab.io/zh-cn/link-finder | 文本链接提取
# 工具
https://momoyu.cc | 实时热榜
https://gh-proxy.ygxz.in | GitHub加速
https://act.mihoyo.com/ys/app/interactive-map | 原神地图
https://d3ward.github.io/toolz/adblock.html | 去广告测试
https://ocr.plantree.me/ocr | 在线OCR识别
https://fayin.love | 爱发音|音标
https://www.dute.org | 独特工具箱
https://qr.no0a.cn | 三合一收款码
https://www.autodraw.com | 在线画板
https://www.ppzhilian.com | PP直连
https://tools.miku.ac | MikuTools
https://ol.woobx.cn | 一个木函
https://whatshub.top/strule | 代理分流规则
https://www.yyai8.com | 边界AI
https://texttospeech.im/zh-CN | 文本转语音
https://rss.ygxz.in | RSSHub
https://www.socpk.com | 移动芯片排行
https://cooklikehoc.soilzhu.su/ | 老乡鸡菜谱
http://cpu.jy6d.com | CPU在线测试
https://lab.skk.moe/test-204 | Captive在线检测
# 网站
https://gonglue.qinggl.com/app/img/icon.jsp | 网站图标抓取
https://ssl-config.mozilla.org | 网站配置生成
https://myssl.com | 网站SSL评估
https://freecompress.com/zh-cn/compress-html | 在线代码压缩
https://www.racent.com/download-cert-chain | ssl证书链下载
https://aitdk.com/zh-CN | AI标题生成
https://ipcheck.ing | 网络IP检测
https://www.ggcx.com | 狗狗域名查询
https://www.helloworld.net/html2md | html/md互转
https://toolb.cn/favicon | 网站图标api
https://www.giftofspeed.com/gzip-test | Gzip/Brotli检测
https://img.lwgzs.cn | 付费图床CDN
https://www.debian.org | Debian系统
https://www.natfrp.com | 免费内网穿透
https://letsencrypt.osfipin.com/user-0408/coins/path | 来此加密
# 游戏
https://ys.mihoyo.com | 原神启动
http://lonelystar.org/download.htm | PvZ资源下载
https://www.minesweeper.cn | 网页扫雷
https://b23.tv/PnGt5C0 | 植物娘大战僵尸
`;