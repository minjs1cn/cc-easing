export function linear(k: number) {
	return k;
}

/** Quadratic */

export function quadIn(k: number) {
	return k * k;
}

export function quadOut(k: number) {
	return k * (2 - k);
}

export function quadInOut(k: number) {
	k *= 2;
	if (k < 1) {
		return 0.5 * k * k;
	}
	return -0.5 * (--k * (k - 2) - 1);
}

/** Cubic */

export function cubicIn(k: number) {
	return k * k * k;
}

export function cubicOut(k: number) {
	return --k * k * k + 1;
}

export function cubicInOut(k: number) {
	k *= 2;
	if (k < 1) {
		return 0.5 * k * k * k;
	}
	return 0.5 * ((k -= 2) * k * k + 2);
}

/** Quartic */

export function quartIn(k: number) {
	return k * k * k * k;
}

export function quartOut(k: number) {
	return 1 - --k * k * k * k;
}

export function quartInOut(k: number) {
	k *= 2;
	if (k < 1) {
		return 0.5 * k * k * k * k;
	}
	return -0.5 * ((k -= 2) * k * k * k - 2);
}

/** Quintic */

export function quintIn(k: number) {
	return k * k * k * k * k;
}

export function quintOut(k: number) {
	return --k * k * k * k * k + 1;
}

export function quintInOut(k: number) {
	k *= 2;
	if (k < 1) {
		return 0.5 * k * k * k * k * k;
	}
	return 0.5 * ((k -= 2) * k * k * k * k + 2);
}

/** Sinusoidal */

export function sineIn(k: number) {
	if (k === 1) {
		return 1;
	}
	return 1 - Math.cos((k * Math.PI) / 2);
}

export function sineOut(k: number) {
	return Math.sin((k * Math.PI) / 2);
}

export function sineInOut(k: number) {
	return 0.5 * (1 - Math.cos(Math.PI * k));
}

/** Exponential */

export function expoIn(k: number) {
	return k === 0 ? 0 : Math.pow(1024, k - 1);
}

export function expoOut(k: number) {
	return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
}

export function expoInOut(k: number) {
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	k *= 2;
	if (k < 1) {
		return 0.5 * Math.pow(1024, k - 1);
	}
	return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
}

/** Circular */

export function circIn(k: number) {
	return 1 - Math.sqrt(1 - k * k);
}

export function circOut(k: number) {
	return Math.sqrt(1 - --k * k);
}

export function circInOut(k: number) {
	k *= 2;
	if (k < 1) {
		return -0.5 * (Math.sqrt(1 - k * k) - 1);
	}
	return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
}

/** Elastic */

export function elasticIn(k: number) {
	let s;
	let a = 0.1;
	const p = 0.4;
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	} else {
		s = (p * Math.asin(1 / a)) / (2 * Math.PI);
	}
	return -(
		a *
		Math.pow(2, 10 * (k -= 1)) *
		Math.sin(((k - s) * (2 * Math.PI)) / p)
	);
}

export function elasticOut(k: number) {
	let s;
	let a = 0.1;
	const p = 0.4;
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	} else {
		s = (p * Math.asin(1 / a)) / (2 * Math.PI);
	}
	return a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1;
}

export function elasticInOut(k: number) {
	let s;
	let a = 0.1;
	const p = 0.4;
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	} else {
		s = (p * Math.asin(1 / a)) / (2 * Math.PI);
	}
	k *= 2;
	if (k < 1) {
		return (
			-0.5 *
			(a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p))
		);
	}
	return (
		a *
			Math.pow(2, -10 * (k -= 1)) *
			Math.sin(((k - s) * (2 * Math.PI)) / p) *
			0.5 +
		1
	);
}

/** Back */

export function backIn(k: number) {
	if (k === 1) {
		return 1;
	}
	const s = 1.70158;
	return k * k * ((s + 1) * k - s);
}

export function backOut(k: number) {
	if (k === 0) {
		return 0;
	}
	const s = 1.70158;
	return --k * k * ((s + 1) * k + s) + 1;
}

export function backInOut(k: number) {
	const s = 1.70158 * 1.525;
	k *= 2;
	if (k < 1) {
		return 0.5 * (k * k * ((s + 1) * k - s));
	}
	return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
}

/** Bounce */

export function bounceIn(k: number) {
	return 1 - bounceOut(1 - k);
}

export function bounceOut(k: number) {
	if (k < 1 / 2.75) {
		return 7.5625 * k * k;
	} else if (k < 2 / 2.75) {
		return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	} else if (k < 2.5 / 2.75) {
		return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	} else {
		return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	}
}

export function bounceInOut(k: number) {
	if (k < 0.5) {
		return bounceIn(k * 2) * 0.5;
	}
	return bounceOut(k * 2 - 1) * 0.5 + 0.5;
}

/** smooth */

export function smooth(k: number) {
	if (k <= 0) {
		return 0;
	}
	if (k >= 1) {
		return 1;
	}
	return k * k * (3 - 2 * k);
}

/** fade */

export function fade(k: number) {
	if (k <= 0) {
		return 0;
	}
	if (k >= 1) {
		return 1;
	}
	return k * k * k * (k * (k * 6 - 15) + 10);
}

export const quadOutIn = _makeOutIn(quadIn, quadOut);
export const cubicOutIn = _makeOutIn(cubicIn, cubicOut);
export const quartOutIn = _makeOutIn(quartIn, quartOut);
export const quintOutIn = _makeOutIn(quintIn, quintOut);
export const sineOutIn = _makeOutIn(sineIn, sineOut);
export const expoOutIn = _makeOutIn(expoIn, expoOut);
export const circOutIn = _makeOutIn(circIn, circOut);
export const elasticOutIn = _makeOutIn(elasticIn, elasticOut);
export const backOutIn = _makeOutIn(backIn, backOut);
export const bounceOutIn = _makeOutIn(bounceIn, bounceOut);

function _makeOutIn(fnIn: (k: number) => number, fnOut: (k: number) => number) {
	return (k: number) => {
		if (k < 0.5) {
			return fnOut(k * 2) / 2;
		}
		return fnIn(2 * k - 1) / 2 + 0.5;
	};
}
