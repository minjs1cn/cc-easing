# easing

一些常用的缓动函数

## Install

```bash
$ yarn add @cc/easing
```

## Usage

```ts
import { motion, Easing } from '@cc/easing';

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
```

## Easing.&lt;type&gt;(k)

| type    | In  | Out | InOut | None |
| ------- | --- | --- | ----- | ---- |
| linear  | x   | x   | x     | ✓    |
| quad    | ✓   | ✓   | ✓     | x    |
| cubic   | ✓   | ✓   | ✓     | x    |
| quart   | ✓   | ✓   | ✓     | x    |
| quint   | ✓   | ✓   | ✓     | x    |
| sin     | ✓   | ✓   | ✓     | x    |
| expo    | ✓   | ✓   | ✓     | x    |
| circ    | ✓   | ✓   | ✓     | x    |
| elastic | ✓   | ✓   | ✓     | x    |
| back    | ✓   | ✓   | ✓     | x    |
| bounce  | ✓   | ✓   | ✓     | x    |

## License

The MIT License
