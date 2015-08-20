function Logo(contex) {
	var version = '';
	try {
		version = contex ? 'v' + contex.pkg.version : '';
	}
	catch (e) {
	}

	logo += ('need help?') + purple('  ===>  ') + green('yo clam:h') + '\n';

	var logo = 
		'\n' + 
	 	blue(' ▄▄       ▄▄ ') + yellow(' ▄▄▄▄▄▄▄▄▄▄▄ ') + red(' ▄▄▄▄▄▄▄▄▄▄▄ \n') +
		blue('▐░░▌     ▐░░▌') + yellow('▐░░░░░░░░░░░▌') + red('▐░░░░░░░░░░░▌\n') +
		blue('▐░▌░▌   ▐░▐░▌') + yellow('▐░█▀▀▀▀▀▀▀█░▌') + red(' ▀▀▀▀█░█▀▀▀▀ \n') +
		blue('▐░▌▐░▌ ▐░▌▐░▌') + yellow('▐░▌       ▐░▌') + red('     ▐░▌     \n') +
		blue('▐░▌ ▐░▐░▌ ▐░▌') + yellow('▐░█▄▄▄▄▄▄▄█░▌') + red('     ▐░▌     \n') +
		blue('▐░▌  ▐░▌  ▐░▌') + yellow('▐░░░░░░░░░░░▌') + red('     ▐░▌     \n') +
		blue('▐░▌   ▀   ▐░▌') + yellow('▐░█▀▀▀▀▀▀▀▀▀ ') + red('     ▐░▌     \n') +
		blue('▐░▌       ▐░▌') + yellow('▐░▌          ') + red('     ▐░▌     \n') +
		blue('▐░▌       ▐░▌') + yellow('▐░▌          ') + red(' ▄▄▄▄█░█▄▄▄▄ \n') +
		blue('▐░▌       ▐░▌') + yellow('▐░▌          ') + red('▐░░░░░░░░░░░▌\n') +
		blue(' ▀         ▀ ') + yellow(' ▀           ') + red(' ▀▀▀▀▀▀▀▀▀▀▀ ') + ' ' + green(version) + '\n\n';

                      
                           
	logo += purple('➭') + ' http://m.kissyui.com' + '\n' +
			purple('➭') + ' KISSY MINI 组件代码生成器' + '\n';

	logo += '\nPlease follow these questions.\n';

	return logo;
}

exports.Logo = Logo;

function consoleColor(str, num) {
	if (!num) {
		num = '32';
	}
	return "\033[" + num + "m" + str + "\033[0m";
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

function purple(str) {
	return consoleColor(str, 36);
}

