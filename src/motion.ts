export type TEasing = (k: number) => number;

type TMotionProps = {
	[index: string]: number;
};

function _motion(from: number, to: number, k: number) {
	return from + (to - from) * k;
}

export function motion<T extends number>(
	from: T,
	to: T,
	k: number,
	easing: TEasing,
): T;
export function motion<T extends TMotionProps, K extends T>(
	from: T,
	to: K,
	k: number,
	easing: TEasing,
): K;
export function motion<T extends TMotionProps | number, K extends T>(
	from: T,
	to: K,
	k: number,
	easing: TEasing,
) {
	if (typeof from === 'number') {
		return _motion(from, to as number, easing(k));
	}

	let start = 0,
		res: TMotionProps = {};

	for (const key in to) {
		if (Object.prototype.hasOwnProperty.call(to, key)) {
			start = (from as TMotionProps)[key] || 0;
			res[key] = _motion(start, (to as TMotionProps)[key], easing(k));
		}
	}

	return res;
}
