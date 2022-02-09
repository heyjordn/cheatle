#!/usr/bin/env node
import meow from 'meow';
import ora from 'ora';
import { wordles } from './wordles.js';

const cli = meow(`
	Usage
	  $ cheatle 

	Options
	  --postfix  Lorem ipsum  [Default: rainbows]

	Examples
	  $ cli-name
	  unicorns & rainbows
`, {
	flags: {
		postfix: {
			type: 'string',
			default: 'rainbows'
		}
	}
});

const cheatle = (startDate = new Date(2021,5,19,0,0,0,0), todaysDate = new Date) => {
	const start = new Date(startDate);
	const hoursPassed = new Date(todaysDate).setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0);
  return wordles[Math.round(hoursPassed / 864e5)];
}

const spinner = ora({text:'Accessing quantum wordles'}).start()
setTimeout(() => {
	spinner.succeed("Accessing quantum wordles\n")
	console.log(`🔮 Today's wordle is ${cheatle()}.`)
}, 1000);

