// 'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ABC = require('abc-generator');
var Logo = require('./logo').Logo;
var exec = require('child_process').exec;
var gitConfig = require('git-config'),
	curGitUser = gitConfig.sync().user,
	curUserName = curGitUser.name,
	curUserEmail = curGitUser.email;

var MyGenerator = module.exports = function MyGenerator(args, options, config) {
	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

	ABC.UIBase.apply(this, arguments);

	this.on('error', function () {
	});
	this.on('end', function () {
		var cb = this.async();
		var that = this;

		console.log(green('\n启动服务,命令行运行 here\n'));

	}.bind(this));
};

util.inherits(MyGenerator, ABC.UIBase);

MyGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// welcome message
	console.log(Logo(this));

	var bowerJSON = {};
	try {
		bowerJSON = require(path.resolve(process.cwd(), 'bower.json'));
	} catch (e) {

	}

	// have Yeoman greet the user.
	// console.log(this.yeoman);
	var folderName = path.basename(process.cwd());

	// your-mojo-name => YourMojoName
	function parseMojoName(name) {
		return name.replace(/\b(\w)|(-\w)/g, function (m) {
			return m.toUpperCase().replace('-', '');
		});
	}

	var prompts = [
		{
			name   : 'projectName',
			message: 'widget Name?(模块名)',
			default: folderName,
			warning: ''
		},
		{
			name   : 'gitRepository',
			message: 'Chose Your Git Repository(git仓库):',
			type	 : 'list',
			choices: ['gitlab.alibaba-inc.com', 'github.com'],
			default: 'gitlab.alibaba-inc.com',
			warning: ''
		},
		{
			name   : 'projectDesc',
			message: 'Description of this Widget?(描述)',
			default: folderName,
			warning: ''
		},
		{
			name   : 'author',
			message: 'Author Name(花名):',
			default: curUserName,
			warning: ''
		},
		{
			name   : 'email',
			message: 'Author Email(邮箱):',
			default: curUserEmail,
			warning: ''
		},
		{
			name   : 'version',
			message: 'Version(版本):',
			default: '0.1.0',
			warning: ''
		}
	];

	/*
	 * projectName：驼峰名称,比如 ProjectName
	 * packageName：原目录名称，比如 project-name
	 **/
	this.prompt(prompts, function (props) {

		this.packageName = props.projectName;// project-name
		this.projectName = parseMojoName(this.packageName); //ProjectName
		this.packageDesc = props.projectDesc;
		this.gitRepository = props.gitRepository;
		this.author = props.author;
		this.email = props.email;
		this.version = props.version;

		cb();

	}.bind(this));
};

MyGenerator.prototype.bowerJSON = function bowerJSON() {
	this.template('_bower.json', 'bower.json');
	this.template('_bowerrc', '.bowerrc');
};

MyGenerator.prototype.git = function git() {
	this.copy('_gitignore', '.gitignore');
};

MyGenerator.prototype.app = function app() {
	var that = this;
	this.template('README.md');
	this.mkdir('demo');
	this.mkdir('test');
	this.mkdir('test/lib');

	// proxy template
	this.template('index.js', 'index.js');
	this.template('index.css', 'index.css');
	this.template('demo/index.html', 'demo/index.html');

	// 测试用例资源文件
	this.copy('test/lib/async.js', 'test/lib/async.js');
	this.copy('test/lib/chai.js','test/lib/chai.js');
	this.copy('test/lib/mocha.js','test/lib/mocha.js');
	this.copy('test/lib/mocha.css','test/lib/mocha.css');
	this.copy('test/lib/should.js','test/lib/should.js');
	this.copy('test/lib/simulate-dom-event.js','test/lib/simulate-dom-event.js');
	this.template('test/runner.html', 'test/runner.html');
	this.template('test/spec.js', 'test/spec.js');
};

function consoleColor(str, num) {
	if (!num) {
		num = '32';
	}
	return "\033[" + num + "m" + str + "\033[0m"
}

function green(str) {
	return consoleColor(str, 32);
}

function yellow(str) {
	return consoleColor(str, 33);
}

function red(str) {
	return consoleColor(str, 31);
}

function blue(str) {
	return consoleColor(str, 34);
}
