## generator-mpi

[![Join the chat at https://gitter.im/jayli/generator-mpi](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jayli/generator-mpi?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

by bachi@taobao.com

### KISSY MINI 模块代码脚手架工具

<img src="http://gw.alicdn.com/tps/TB13sGbJXXXXXbaXVXXXXXXXXXX-360-196.png" width="200" />

[KISSY MINI](http://m.kissyui.com) 模块生成脚手架工具，KISSY MINI 的模块是基于 bower 的模块包，原则上不支持线上地址直接引用，而是推荐通过 bower insall 的方式安装引用。这里的脚手架工具即是生成这个 bower 模块包的脚手架工具。

阿里旅行的 KISSY MINI 模块代码存放在 [gitlab](http://gitlab.alibaba-inc.com/groups/mpi) 上，安装组件时需要配好`.bowerrc`，

	{
		"directory":"./",
		"shorthand_resolver":"http://gitlab.alibaba-inc.com/{{{owner}}}/{{{package}}}.git"
	}

这里的代码仓库前缀可以任意修改

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

模块的研发完全基于本地 Demo 页面，无需构建和特别的本地环境配置，因此非常干净简单，代码存储直接提交在 gitlab 里即可，他人安装此模块只需通过`bower install`即可。模块文件是需要被具体的项目脚本构建的，构建工具参照[grunt-kmb](https://www.npmjs.com/package/grunt-kmb)或者[gulp-kmc](https://www.npmjs.com/package/gulp-kmc)。阿里旅行前端同学请使用 [clam](http://clam.alitrip.net) 构建工具来生成项目.

因为已经安装好了`server-here`服务，代码checkout到本地后，直接在项目根目录中执行`here`，即可开启服务

	here

模块代码完成后，如需引用该模块，只需通过 bower 来安装该模块，例如：

	bower install mpi/widget-name

### Q & A

1. 模块代码可否被发布到 npm 或 tnpm 上？答：可以，需要自己配`package.json`，但强烈不推荐这样做，因为从日常开发角度看，人肉保持 git 仓库中代码和远程 npm 仓库代码的版本一致性要消耗掉极高的成本，所以仅用git来保存代码可以尽可能保持简单可依赖
1. KISSY MINI 的模块为什么不支持线上直接引用，就像 KISSY 1.4.x 和 KISSY 6.x 的组件都发布到线上一份一样？答：KISSY MINI 是面向移动设备研发的js库，性能优化方面，我们坚持资源离线的大的优化方向，资源离线后的瓶颈不在于资源个数，而在于资源体积和项目包（pkg）的内聚。即项目内原则上不会引用项目之外的资源，所以我们将 KISSY MINI 的开发规范和 bower 强绑定，所有的发布动作收敛到“项目发布”一个环节，而在组件和公用代码研发方面，不在单独走发布了，这样剔除了在线引用、强调离线资源引用，就极大的简化了模块代码和项目代码的耦合方式。
1. KISSY MINI 还支持 Combo 吗？答：1.x 及后续版本不在支持Combo，代码的合并完全交给构建工具去完成。
1. 基于 KISSY MINI 的模块代码为什么不需要构建？答：因为不需要发布到线上，所以我干脆就把构建给干掉了，构建的动作一律收敛到项目中，模块中的研发约定保持最简。
