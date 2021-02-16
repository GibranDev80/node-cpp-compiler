import arg from 'arg';

function parseRawArgs(rawArgs) {
	const args = arg({
		'--action': String,
		'--compile': Boolean,
		'-a': '--action',
		'-c': '--compile'
	}, {argv: rawArgs.slice(2)});
	
	return {
		action: args['--action'] || [],
		compile: args['--compile'] || false
	}
}

export function cli(args) {
	let options = parseRawArgs(args);
	console.log(options);
}
