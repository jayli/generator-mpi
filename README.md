# generator-mpi

# KISSY MINI 模块代码脚手架工具

![](https://gw.alicdn.com/tps/TB15OqcJXXXXXcAXFXXXXXXXXXX-552-276.png_300x300.jpg)

KISSY MINI 模块生成脚手架工具，KISSY MINI 的模块是基于 bower 管理的模块包，原则上不支持线上地址直接引用，而是推荐通过 bower insall 的方式安装引用。这里的脚手架工具即是生成这个 bower 模块包的脚手架工具。

阿里旅行的 KISSY MINI 模块代码存放在 [gitlab](http://gitlab.alibaba-inc.com/groups/mpi) 上，安装组件时需要配好`.bowerrc`，


	{
		"directory":"./",
		"shorthand_resolver":"http://gitlab.alibaba-inc.com/{{{owner}}}/{{{package}}}.git"
	}

安装 KISSY MINI 模块时只需要执行

	bower install mpi/widget-name

### 工具安装

> 如果你在阿里内网，请指向内网镜像 `sudo npm install -g tnpm --registry=http://registry.npm.alibaba-inc.com`

KISSY MINI 模块包代码只能通过 bower 来管理，因此非常干净，不包含本地服务和构建，运行本地Demo和测试用例只需用个人习惯的Node服务即可，比如[server-here](https://www.npmjs.com/package/server-here)。

首先安装三件套：

	tnpm install -g yo grunt-cli bower

然后安装本地服务和脚手架

	tnpm install -g server-here generator-mpi

完成。

### 运行

首先创建好一个模块的空目录，进入这个空目录，执行

	yo mpi

然后根据提示完成项目初始化的工作即可

### 开发、发布

在模块目录根目录中执行`here`便可启动本地服务，访问`demo/index.html`即可运行当前demo，访问`test/runner.html`即可运行当前测试用例。js 开发规范符合 CMD 规范，亦兼容 KMD 规范。

代码版本管理基于 [Gitlab](http://gitlab.alibaba-inc.com) ，所以源码中目录和文件名看不到版本信息，基于Bower的版本需要自行手动修改`bower.json`，如果当前代码对其他模块有依赖，也需要手动修改`bower.json`。比如[offline-app-router](http://gitlab.alibaba-inc.com/mpi/offline-app-router)这个模块的[bower.json](http://gitlab.alibaba-inc.com/mpi/offline-app-router/blob/d1b59ec230a91705e258e63d79ca88059a11eae8/bower.json)的内容如下：

	{
		"name": "offline-app-router",
		"version": "0.1.0",
		"description": "对在手淘，支付宝中的跨类目离线包跳转做封装",
		"authors": [
			"若狸 <jinglun.zjl@alibaba-inc.com>"
		],
		"main": "./index.js",
		"ignore": [
			".jshintrc",
			"**/*.txt"
		],
		"dependencies": {
			"base":"mpi/base"
		},
		"devDependencies": {
		}
	}

请注意版本的写法和依赖模块的写法，bower.json 是模块唯一最重要的配置文件

模块的研发完全基于Demo，无构建和特别的本地环境的配置，因此非常干净简单，代码存储直接提交在gitlab里即可，他人安装此模块只需通过bower install即可。模块文件是需要被具体的项目脚本构建的，构建工具参照[grunt-kmb](https://www.npmjs.com/package/grunt-kmb)或者[gulp-kmc](https://www.npmjs.com/package/gulp-kmc)。阿里旅行前端同学请使用 clam 构建工具来生成项目.
