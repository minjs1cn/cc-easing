import { motion, Easing } from './src/main';

let from = 0,
	to = 300,
	duration = 2000,
	k = 0,
	start = undefined;

function run(t: number) {
	start = start || t;
	k = Math.min((t - start) / duration, 1);
	const a = motion(from, to, k, Easing.circInOut);
	console.log(a);
	k < 1 && requestAnimationFrame(run);
}

requestAnimationFrame(run);
