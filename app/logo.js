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
		'   ▄▄▄▄███▄▄▄▄      ▄███████▄  ▄█  \n' +
		' ▄██▀▀▀███▀▀▀██▄   ███    ███ ███  \n' +
		' ███   ███   ███   ███    ███ ███▌ \n' +
		' ███   ███   ███   ███    ███ ███▌ \n' +
		' ███   ███   ███ ▀█████████▀  ███▌ \n' +
		' ███   ███   ███   ███        ███  \n' +
		' ███   ███   ███   ███        ███  \n' +
		'  ▀█   ███   █▀   ▄████▀      █▀   \n' + ' ' + version + '\n\n';
                      
                           
	logo += '==> http://m.kissyui.com' + '\n';

	if (contex) {
		logo += '\nCMD: ' + green(contex.generatorName.toUpperCase()) + '\n';
	}

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

