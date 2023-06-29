!(function (V, z) {
	'object' == typeof exports && typeof module < 'u'
		? (module.exports = z(require('@popperjs/core')))
		: 'function' == typeof define && define.amd
		? define(['@popperjs/core'], z)
		: ((V = typeof globalThis < 'u' ? globalThis : V || self).bootstrap = z(
				V.Popper
		  ));
})(this, function (V) {
	'use strict';
	function z(s) {
		const t = Object.create(null, {
			[Symbol.toStringTag]: { value: 'Module' },
		});
		if (s)
			for (const e in s)
				if ('default' !== e) {
					const n = Object.getOwnPropertyDescriptor(s, e);
					Object.defineProperty(
						t,
						e,
						n.get ? n : { enumerable: !0, get: () => s[e] }
					);
				}
		return (t.default = s), Object.freeze(t);
	}
	const it = z(V),
		S = new Map(),
		At = {
			set(s, t, e) {
				S.has(s) || S.set(s, new Map());
				const n = S.get(s);
				n.has(t) || 0 === n.size
					? n.set(t, e)
					: console.error(
							`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
								Array.from(n.keys())[0]
							}.`
					  );
			},
			get: (s, t) => (S.has(s) && S.get(s).get(t)) || null,
			remove(s, t) {
				if (!S.has(s)) return;
				const e = S.get(s);
				e.delete(t), 0 === e.size && S.delete(s);
			},
		},
		Tt = 'transitionend',
		Wt = s => (
			s &&
				window.CSS &&
				window.CSS.escape &&
				(s = s.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
			s
		),
		Yt = s => {
			s.dispatchEvent(new Event(Tt));
		},
		b = s =>
			!(!s || 'object' != typeof s) &&
			(typeof s.jquery < 'u' && (s = s[0]), typeof s.nodeType < 'u'),
		y = s =>
			b(s)
				? s.jquery
					? s[0]
					: s
				: 'string' == typeof s && s.length > 0
				? document.querySelector(Wt(s))
				: null,
		H = s => {
			if (!b(s) || 0 === s.getClientRects().length) return !1;
			const t =
					'visible' === getComputedStyle(s).getPropertyValue('visibility'),
				e = s.closest('details:not([open])');
			if (!e) return t;
			if (e !== s) {
				const n = s.closest('summary');
				if ((n && n.parentNode !== e) || null === n) return !1;
			}
			return t;
		},
		O = s =>
			!(
				s &&
				s.nodeType === Node.ELEMENT_NODE &&
				!s.classList.contains('disabled')
			) ||
			(typeof s.disabled < 'u'
				? s.disabled
				: s.hasAttribute('disabled') && 'false' !== s.getAttribute('disabled')),
		Ft = s => {
			if (!document.documentElement.attachShadow) return null;
			if ('function' == typeof s.getRootNode) {
				const t = s.getRootNode();
				return t instanceof ShadowRoot ? t : null;
			}
			return s instanceof ShadowRoot
				? s
				: s.parentNode
				? Ft(s.parentNode)
				: null;
		},
		ot = () => {},
		jt = () =>
			window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
				? window.jQuery
				: null,
		bt = [],
		d = () => 'rtl' === document.documentElement.dir,
		f = s => {
			(s => {
				'loading' === document.readyState
					? (bt.length ||
							document.addEventListener('DOMContentLoaded', () => {
								for (const t of bt) t();
							}),
					  bt.push(s))
					: s();
			})(() => {
				const t = jt();
				if (t) {
					const e = s.NAME,
						n = t.fn[e];
					(t.fn[e] = s.jQueryInterface),
						(t.fn[e].Constructor = s),
						(t.fn[e].noConflict = () => ((t.fn[e] = n), s.jQueryInterface));
				}
			});
		},
		u = (s, t = [], e = s) => ('function' == typeof s ? s(...t) : e),
		Bt = (s, t, e = !0) => {
			if (!e) return void u(s);
			const i =
				(s => {
					if (!s) return 0;
					let { transitionDuration: t, transitionDelay: e } =
						window.getComputedStyle(s);
					const n = Number.parseFloat(t),
						i = Number.parseFloat(e);
					return n || i
						? ((t = t.split(',')[0]),
						  (e = e.split(',')[0]),
						  1e3 * (Number.parseFloat(t) + Number.parseFloat(e)))
						: 0;
				})(t) + 5;
			let a = !1;
			const r = ({ target: c }) => {
				c === t && ((a = !0), t.removeEventListener(Tt, r), u(s));
			};
			t.addEventListener(Tt, r),
				setTimeout(() => {
					a || Yt(t);
				}, i);
		},
		Nt = (s, t, e, n) => {
			const i = s.length;
			let a = s.indexOf(t);
			return -1 === a
				? !e && n
					? s[i - 1]
					: s[0]
				: ((a += e ? 1 : -1),
				  n && (a = (a + i) % i),
				  s[Math.max(0, Math.min(a, i - 1))]);
		},
		ze = /[^.]*(?=\..*)\.|.*/,
		qe = /\..*/,
		Qe = /::\d+$/,
		Ct = {};
	let Ut = 1;
	const Gt = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
		Xe = new Set([
			'click',
			'dblclick',
			'mouseup',
			'mousedown',
			'contextmenu',
			'mousewheel',
			'DOMMouseScroll',
			'mouseover',
			'mouseout',
			'mousemove',
			'selectstart',
			'selectend',
			'keydown',
			'keypress',
			'keyup',
			'orientationchange',
			'touchstart',
			'touchmove',
			'touchend',
			'touchcancel',
			'pointerdown',
			'pointermove',
			'pointerup',
			'pointerleave',
			'pointercancel',
			'gesturestart',
			'gesturechange',
			'gestureend',
			'focus',
			'blur',
			'change',
			'reset',
			'select',
			'submit',
			'focusin',
			'focusout',
			'load',
			'unload',
			'beforeunload',
			'resize',
			'move',
			'DOMContentLoaded',
			'readystatechange',
			'error',
			'abort',
			'scroll',
		]);
	function zt(s, t) {
		return (t && `${t}::${Ut++}`) || s.uidEvent || Ut++;
	}
	function qt(s) {
		const t = zt(s);
		return (s.uidEvent = t), (Ct[t] = Ct[t] || {}), Ct[t];
	}
	function Qt(s, t, e = null) {
		return Object.values(s).find(
			n => n.callable === t && n.delegationSelector === e
		);
	}
	function Xt(s, t, e) {
		const n = 'string' == typeof t,
			i = n ? e : t || e;
		let a = Jt(s);
		return Xe.has(a) || (a = s), [n, i, a];
	}
	function Zt(s, t, e, n, i) {
		if ('string' != typeof t || !s) return;
		let [a, r, c] = Xt(t, e, n);
		var Uo;
		t in Gt &&
			((Uo = r),
			(r = function (G) {
				if (
					!G.relatedTarget ||
					(G.relatedTarget !== G.delegateTarget &&
						!G.delegateTarget.contains(G.relatedTarget))
				)
					return Uo.call(this, G);
			}));
		const _ = qt(s),
			E = _[c] || (_[c] = {}),
			h = Qt(E, r, a ? e : null);
		if (h) return void (h.oneOff = h.oneOff && i);
		const T = zt(r, t.replace(ze, '')),
			A = a
				? (function Je(s, t, e) {
						return function n(i) {
							const a = s.querySelectorAll(t);
							for (let { target: r } = i; r && r !== this; r = r.parentNode)
								for (const c of a)
									if (c === r)
										return (
											St(i, { delegateTarget: r }),
											n.oneOff && o.off(s, i.type, t, e),
											e.apply(r, [i])
										);
						};
				  })(s, e, r)
				: (function Ze(s, t) {
						return function e(n) {
							return (
								St(n, { delegateTarget: s }),
								e.oneOff && o.off(s, n.type, t),
								t.apply(s, [n])
							);
						};
				  })(s, r);
		(A.delegationSelector = a ? e : null),
			(A.callable = r),
			(A.oneOff = i),
			(A.uidEvent = T),
			(E[T] = A),
			s.addEventListener(c, A, a);
	}
	function vt(s, t, e, n, i) {
		const a = Qt(t[e], n, i);
		a && (s.removeEventListener(e, a, !!i), delete t[e][a.uidEvent]);
	}
	function ts(s, t, e, n) {
		const i = t[e] || {};
		for (const [a, r] of Object.entries(i))
			a.includes(n) && vt(s, t, e, r.callable, r.delegationSelector);
	}
	function Jt(s) {
		return (s = s.replace(qe, '')), Gt[s] || s;
	}
	const o = {
		on(s, t, e, n) {
			Zt(s, t, e, n, !1);
		},
		one(s, t, e, n) {
			Zt(s, t, e, n, !0);
		},
		off(s, t, e, n) {
			if ('string' != typeof t || !s) return;
			const [i, a, r] = Xt(t, e, n),
				c = r !== t,
				_ = qt(s),
				E = _[r] || {},
				h = t.startsWith('.');
			if (typeof a < 'u') {
				if (!Object.keys(E).length) return;
				vt(s, _, r, a, i ? e : null);
			} else {
				if (h) for (const T of Object.keys(_)) ts(s, _, T, t.slice(1));
				for (const [T, A] of Object.entries(E)) {
					const gt = T.replace(Qe, '');
					(!c || t.includes(gt)) &&
						vt(s, _, r, A.callable, A.delegationSelector);
				}
			}
		},
		trigger(s, t, e) {
			if ('string' != typeof t || !s) return null;
			const n = jt();
			let r = null,
				c = !0,
				_ = !0,
				E = !1;
			t !== Jt(t) &&
				n &&
				((r = n.Event(t, e)),
				n(s).trigger(r),
				(c = !r.isPropagationStopped()),
				(_ = !r.isImmediatePropagationStopped()),
				(E = r.isDefaultPrevented()));
			const h = St(new Event(t, { bubbles: c, cancelable: !0 }), e);
			return (
				E && h.preventDefault(),
				_ && s.dispatchEvent(h),
				h.defaultPrevented && r && r.preventDefault(),
				h
			);
		},
	};
	function St(s, t = {}) {
		for (const [e, n] of Object.entries(t))
			try {
				s[e] = n;
			} catch {
				Object.defineProperty(s, e, { configurable: !0, get: () => n });
			}
		return s;
	}
	function te(s) {
		if ('true' === s) return !0;
		if ('false' === s) return !1;
		if (s === Number(s).toString()) return Number(s);
		if ('' === s || 'null' === s) return null;
		if ('string' != typeof s) return s;
		try {
			return JSON.parse(decodeURIComponent(s));
		} catch {
			return s;
		}
	}
	function yt(s) {
		return s.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
	}
	const N = {
		setDataAttribute(s, t, e) {
			s.setAttribute(`data-bs-${yt(t)}`, e);
		},
		removeDataAttribute(s, t) {
			s.removeAttribute(`data-bs-${yt(t)}`);
		},
		getDataAttributes(s) {
			if (!s) return {};
			const t = {},
				e = Object.keys(s.dataset).filter(
					n => n.startsWith('bs') && !n.startsWith('bsConfig')
				);
			for (const n of e) {
				let i = n.replace(/^bs/, '');
				(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
					(t[i] = te(s.dataset[n]));
			}
			return t;
		},
		getDataAttribute: (s, t) => te(s.getAttribute(`data-bs-${yt(t)}`)),
	};
	class Q {
		static get Default() {
			return {};
		}
		static get DefaultType() {
			return {};
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!'
			);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return t;
		}
		_mergeConfigObj(t, e) {
			const n = b(e) ? N.getDataAttribute(e, 'config') : {};
			return {
				...this.constructor.Default,
				...('object' == typeof n ? n : {}),
				...(b(e) ? N.getDataAttributes(e) : {}),
				...('object' == typeof t ? t : {}),
			};
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (const [n, i] of Object.entries(e)) {
				const a = t[n],
					r = b(a)
						? 'element'
						: null == (s = a)
						? `${s}`
						: Object.prototype.toString
								.call(s)
								.match(/\s([a-z]+)/i)[1]
								.toLowerCase();
				if (!new RegExp(i).test(r))
					throw new TypeError(
						`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`
					);
			}
			var s;
		}
	}
	class m extends Q {
		constructor(t, e) {
			super(),
				(t = y(t)) &&
					((this._element = t),
					(this._config = this._getConfig(e)),
					At.set(this._element, this.constructor.DATA_KEY, this));
		}
		dispose() {
			At.remove(this._element, this.constructor.DATA_KEY),
				o.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
		}
		_queueCallback(t, e, n = !0) {
			Bt(t, e, n);
		}
		_getConfig(t) {
			return (
				(t = this._mergeConfigObj(t, this._element)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		static getInstance(t) {
			return At.get(y(t), this.DATA_KEY);
		}
		static getOrCreateInstance(t, e = {}) {
			return (
				this.getInstance(t) || new this(t, 'object' == typeof e ? e : null)
			);
		}
		static get VERSION() {
			return '5.3.0-alpha2';
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`;
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`;
		}
		static eventName(t) {
			return `${t}${this.EVENT_KEY}`;
		}
	}
	const Ot = s => {
			let t = s.getAttribute('data-bs-target');
			if (!t || '#' === t) {
				let e = s.getAttribute('href');
				if (!e || (!e.includes('#') && !e.startsWith('.'))) return null;
				e.includes('#') && !e.startsWith('#') && (e = `#${e.split('#')[1]}`),
					(t = e && '#' !== e ? e.trim() : null);
			}
			return Wt(t);
		},
		l = {
			find: (s, t = document.documentElement) =>
				[].concat(...Element.prototype.querySelectorAll.call(t, s)),
			findOne: (s, t = document.documentElement) =>
				Element.prototype.querySelector.call(t, s),
			children: (s, t) => [].concat(...s.children).filter(e => e.matches(t)),
			parents(s, t) {
				const e = [];
				let n = s.parentNode.closest(t);
				for (; n; ) e.push(n), (n = n.parentNode.closest(t));
				return e;
			},
			prev(s, t) {
				let e = s.previousElementSibling;
				for (; e; ) {
					if (e.matches(t)) return [e];
					e = e.previousElementSibling;
				}
				return [];
			},
			next(s, t) {
				let e = s.nextElementSibling;
				for (; e; ) {
					if (e.matches(t)) return [e];
					e = e.nextElementSibling;
				}
				return [];
			},
			focusableChildren(s) {
				const t = [
					'a',
					'button',
					'input',
					'textarea',
					'select',
					'details',
					'[tabindex]',
					'[contenteditable="true"]',
				]
					.map(e => `${e}:not([tabindex^="-"])`)
					.join(',');
				return this.find(t, s).filter(e => !O(e) && H(e));
			},
			getSelectorFromElement(s) {
				const t = Ot(s);
				return t && l.findOne(t) ? t : null;
			},
			getElementFromSelector(s) {
				const t = Ot(s);
				return t ? l.findOne(t) : null;
			},
			getMultipleElementsFromSelector(s) {
				const t = Ot(s);
				return t ? l.find(t) : [];
			},
		},
		rt = (s, t = 'hide') => {
			const n = s.NAME;
			o.on(
				document,
				`click.dismiss${s.EVENT_KEY}`,
				`[data-bs-dismiss="${n}"]`,
				function (i) {
					if (
						(['A', 'AREA'].includes(this.tagName) && i.preventDefault(),
						O(this))
					)
						return;
					const a = l.getElementFromSelector(this) || this.closest(`.${n}`);
					s.getOrCreateInstance(a)[t]();
				}
			);
		},
		ee = '.bs.alert',
		ns = `close${ee}`,
		is = `closed${ee}`;
	class X extends m {
		static get NAME() {
			return 'alert';
		}
		close() {
			if (o.trigger(this._element, ns).defaultPrevented) return;
			this._element.classList.remove('show');
			const e = this._element.classList.contains('fade');
			this._queueCallback(() => this._destroyElement(), this._element, e);
		}
		_destroyElement() {
			this._element.remove(), o.trigger(this._element, is), this.dispose();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = X.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	rt(X, 'close'), f(X);
	const se = '[data-bs-toggle="button"]';
	class Z extends m {
		static get NAME() {
			return 'button';
		}
		toggle() {
			this._element.setAttribute(
				'aria-pressed',
				this._element.classList.toggle('active')
			);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Z.getOrCreateInstance(this);
				'toggle' === t && e[t]();
			});
		}
	}
	o.on(document, 'click.bs.button.data-api', se, s => {
		s.preventDefault();
		const t = s.target.closest(se);
		Z.getOrCreateInstance(t).toggle();
	}),
		f(Z);
	const x = '.bs.swipe',
		ds = `touchstart${x}`,
		fs = `touchmove${x}`,
		ps = `touchend${x}`,
		Es = `pointerdown${x}`,
		ms = `pointerup${x}`,
		Ns = { endCallback: null, leftCallback: null, rightCallback: null },
		Cs = {
			endCallback: '(function|null)',
			leftCallback: '(function|null)',
			rightCallback: '(function|null)',
		};
	class at extends Q {
		constructor(t, e) {
			super(),
				(this._element = t),
				t &&
					at.isSupported() &&
					((this._config = this._getConfig(e)),
					(this._deltaX = 0),
					(this._supportPointerEvents = !!window.PointerEvent),
					this._initEvents());
		}
		static get Default() {
			return Ns;
		}
		static get DefaultType() {
			return Cs;
		}
		static get NAME() {
			return 'swipe';
		}
		dispose() {
			o.off(this._element, x);
		}
		_start(t) {
			this._supportPointerEvents
				? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
				: (this._deltaX = t.touches[0].clientX);
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) &&
				(this._deltaX = t.clientX - this._deltaX),
				this._handleSwipe(),
				u(this._config.endCallback);
		}
		_move(t) {
			this._deltaX =
				t.touches && t.touches.length > 1
					? 0
					: t.touches[0].clientX - this._deltaX;
		}
		_handleSwipe() {
			const t = Math.abs(this._deltaX);
			if (t <= 40) return;
			const e = t / this._deltaX;
			(this._deltaX = 0),
				e && u(e > 0 ? this._config.rightCallback : this._config.leftCallback);
		}
		_initEvents() {
			this._supportPointerEvents
				? (o.on(this._element, Es, t => this._start(t)),
				  o.on(this._element, ms, t => this._end(t)),
				  this._element.classList.add('pointer-event'))
				: (o.on(this._element, ds, t => this._start(t)),
				  o.on(this._element, fs, t => this._move(t)),
				  o.on(this._element, ps, t => this._end(t)));
		}
		_eventIsPointerPenTouch(t) {
			return (
				this._supportPointerEvents &&
				('pen' === t.pointerType || 'touch' === t.pointerType)
			);
		}
		static isSupported() {
			return (
				'ontouchstart' in document.documentElement ||
				navigator.maxTouchPoints > 0
			);
		}
	}
	const D = '.bs.carousel',
		ne = '.data-api',
		J = 'next',
		K = 'prev',
		W = 'left',
		lt = 'right',
		Ds = `slide${D}`,
		Dt = `slid${D}`,
		ws = `keydown${D}`,
		Ls = `mouseenter${D}`,
		$s = `mouseleave${D}`,
		Is = `dragstart${D}`,
		Ms = `load${D}${ne}`,
		Rs = `click${D}${ne}`,
		ie = 'carousel',
		ct = 'active',
		oe = '.active',
		re = '.carousel-item',
		Ks = oe + re,
		Bs = { ArrowLeft: lt, ArrowRight: W },
		Us = {
			interval: 5e3,
			keyboard: !0,
			pause: 'hover',
			ride: !1,
			touch: !0,
			wrap: !0,
		},
		Gs = {
			interval: '(number|boolean)',
			keyboard: 'boolean',
			pause: '(string|boolean)',
			ride: '(boolean|string)',
			touch: 'boolean',
			wrap: 'boolean',
		};
	class Y extends m {
		constructor(t, e) {
			super(t, e),
				(this._interval = null),
				(this._activeElement = null),
				(this._isSliding = !1),
				(this.touchTimeout = null),
				(this._swipeHelper = null),
				(this._indicatorsElement = l.findOne(
					'.carousel-indicators',
					this._element
				)),
				this._addEventListeners(),
				this._config.ride === ie && this.cycle();
		}
		static get Default() {
			return Us;
		}
		static get DefaultType() {
			return Gs;
		}
		static get NAME() {
			return 'carousel';
		}
		next() {
			this._slide(J);
		}
		nextWhenVisible() {
			!document.hidden && H(this._element) && this.next();
		}
		prev() {
			this._slide(K);
		}
		pause() {
			this._isSliding && Yt(this._element), this._clearInterval();
		}
		cycle() {
			this._clearInterval(),
				this._updateInterval(),
				(this._interval = setInterval(
					() => this.nextWhenVisible(),
					this._config.interval
				));
		}
		_maybeEnableCycle() {
			if (this._config.ride) {
				if (this._isSliding)
					return void o.one(this._element, Dt, () => this.cycle());
				this.cycle();
			}
		}
		to(t) {
			const e = this._getItems();
			if (t > e.length - 1 || t < 0) return;
			if (this._isSliding)
				return void o.one(this._element, Dt, () => this.to(t));
			const n = this._getItemIndex(this._getActive());
			n !== t && this._slide(t > n ? J : K, e[t]);
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
		}
		_configAfterMerge(t) {
			return (t.defaultInterval = t.interval), t;
		}
		_addEventListeners() {
			this._config.keyboard && o.on(this._element, ws, t => this._keydown(t)),
				'hover' === this._config.pause &&
					(o.on(this._element, Ls, () => this.pause()),
					o.on(this._element, $s, () => this._maybeEnableCycle())),
				this._config.touch &&
					at.isSupported() &&
					this._addTouchEventListeners();
		}
		_addTouchEventListeners() {
			for (const n of l.find('.carousel-item img', this._element))
				o.on(n, Is, i => i.preventDefault());
			this._swipeHelper = new at(this._element, {
				leftCallback: () => this._slide(this._directionToOrder(W)),
				rightCallback: () => this._slide(this._directionToOrder(lt)),
				endCallback: () => {
					'hover' === this._config.pause &&
						(this.pause(),
						this.touchTimeout && clearTimeout(this.touchTimeout),
						(this.touchTimeout = setTimeout(
							() => this._maybeEnableCycle(),
							500 + this._config.interval
						)));
				},
			});
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = Bs[t.key];
			e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
		}
		_getItemIndex(t) {
			return this._getItems().indexOf(t);
		}
		_setActiveIndicatorElement(t) {
			if (!this._indicatorsElement) return;
			const e = l.findOne(oe, this._indicatorsElement);
			e.classList.remove(ct), e.removeAttribute('aria-current');
			const n = l.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
			n && (n.classList.add(ct), n.setAttribute('aria-current', 'true'));
		}
		_updateInterval() {
			const t = this._activeElement || this._getActive();
			if (!t) return;
			const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
			this._config.interval = e || this._config.defaultInterval;
		}
		_slide(t, e = null) {
			if (this._isSliding) return;
			const n = this._getActive(),
				i = t === J,
				a = e || Nt(this._getItems(), n, i, this._config.wrap);
			if (a === n) return;
			const r = this._getItemIndex(a),
				c = gt =>
					o.trigger(this._element, gt, {
						relatedTarget: a,
						direction: this._orderToDirection(t),
						from: this._getItemIndex(n),
						to: r,
					});
			if (c(Ds).defaultPrevented || !n || !a) return;
			const E = !!this._interval;
			this.pause(),
				(this._isSliding = !0),
				this._setActiveIndicatorElement(r),
				(this._activeElement = a);
			const h = i ? 'carousel-item-start' : 'carousel-item-end',
				T = i ? 'carousel-item-next' : 'carousel-item-prev';
			a.classList.add(T),
				n.classList.add(h),
				a.classList.add(h),
				this._queueCallback(
					() => {
						a.classList.remove(h, T),
							a.classList.add(ct),
							n.classList.remove(ct, T, h),
							(this._isSliding = !1),
							c(Dt);
					},
					n,
					this._isAnimated()
				),
				E && this.cycle();
		}
		_isAnimated() {
			return this._element.classList.contains('slide');
		}
		_getActive() {
			return l.findOne(Ks, this._element);
		}
		_getItems() {
			return l.find(re, this._element);
		}
		_clearInterval() {
			this._interval &&
				(clearInterval(this._interval), (this._interval = null));
		}
		_directionToOrder(t) {
			return d() ? (t === W ? K : J) : t === W ? J : K;
		}
		_orderToDirection(t) {
			return d() ? (t === K ? W : lt) : t === K ? lt : W;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Y.getOrCreateInstance(this, t);
				if ('number' != typeof t) {
					if ('string' == typeof t) {
						if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
							throw new TypeError(`No method named "${t}"`);
						e[t]();
					}
				} else e.to(t);
			});
		}
	}
	o.on(document, Rs, '[data-bs-slide], [data-bs-slide-to]', function (s) {
		const t = l.getElementFromSelector(this);
		if (!t || !t.classList.contains(ie)) return;
		s.preventDefault();
		const e = Y.getOrCreateInstance(t),
			n = this.getAttribute('data-bs-slide-to');
		return n
			? (e.to(n), void e._maybeEnableCycle())
			: 'next' === N.getDataAttribute(this, 'slide')
			? (e.next(), void e._maybeEnableCycle())
			: (e.prev(), void e._maybeEnableCycle());
	}),
		o.on(window, Ms, () => {
			const s = l.find('[data-bs-ride="carousel"]');
			for (const t of s) Y.getOrCreateInstance(t);
		}),
		f(Y);
	const tt = '.bs.collapse',
		Qs = `show${tt}`,
		Xs = `shown${tt}`,
		Zs = `hide${tt}`,
		Js = `hidden${tt}`,
		tn = `click${tt}.data-api`,
		wt = 'show',
		F = 'collapse',
		ht = 'collapsing',
		sn = `:scope .${F} .${F}`,
		Lt = '[data-bs-toggle="collapse"]',
		ln = { parent: null, toggle: !0 },
		cn = { parent: '(null|element)', toggle: 'boolean' };
	class j extends m {
		constructor(t, e) {
			super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
			const n = l.find(Lt);
			for (const i of n) {
				const a = l.getSelectorFromElement(i),
					r = l.find(a).filter(c => c === this._element);
				null !== a && r.length && this._triggerArray.push(i);
			}
			this._initializeChildren(),
				this._config.parent ||
					this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
				this._config.toggle && this.toggle();
		}
		static get Default() {
			return ln;
		}
		static get DefaultType() {
			return cn;
		}
		static get NAME() {
			return 'collapse';
		}
		toggle() {
			this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (this._isTransitioning || this._isShown()) return;
			let t = [];
			if (
				(this._config.parent &&
					(t = this._getFirstLevelChildren(
						'.collapse.show, .collapse.collapsing'
					)
						.filter(c => c !== this._element)
						.map(c => j.getOrCreateInstance(c, { toggle: !1 }))),
				(t.length && t[0]._isTransitioning) ||
					o.trigger(this._element, Qs).defaultPrevented)
			)
				return;
			for (const c of t) c.hide();
			const n = this._getDimension();
			this._element.classList.remove(F),
				this._element.classList.add(ht),
				(this._element.style[n] = 0),
				this._addAriaAndCollapsedClass(this._triggerArray, !0),
				(this._isTransitioning = !0);
			const r = `scroll${n[0].toUpperCase() + n.slice(1)}`;
			this._queueCallback(
				() => {
					(this._isTransitioning = !1),
						this._element.classList.remove(ht),
						this._element.classList.add(F, wt),
						(this._element.style[n] = ''),
						o.trigger(this._element, Xs);
				},
				this._element,
				!0
			),
				(this._element.style[n] = `${this._element[r]}px`);
		}
		hide() {
			if (
				this._isTransitioning ||
				!this._isShown() ||
				o.trigger(this._element, Zs).defaultPrevented
			)
				return;
			const e = this._getDimension();
			(this._element.style[e] = `${
				this._element.getBoundingClientRect()[e]
			}px`),
				this._element.classList.add(ht),
				this._element.classList.remove(F, wt);
			for (const i of this._triggerArray) {
				const a = l.getElementFromSelector(i);
				a && !this._isShown(a) && this._addAriaAndCollapsedClass([i], !1);
			}
			(this._isTransitioning = !0),
				(this._element.style[e] = ''),
				this._queueCallback(
					() => {
						(this._isTransitioning = !1),
							this._element.classList.remove(ht),
							this._element.classList.add(F),
							o.trigger(this._element, Js);
					},
					this._element,
					!0
				);
		}
		_isShown(t = this._element) {
			return t.classList.contains(wt);
		}
		_configAfterMerge(t) {
			return (t.toggle = !!t.toggle), (t.parent = y(t.parent)), t;
		}
		_getDimension() {
			return this._element.classList.contains('collapse-horizontal')
				? 'width'
				: 'height';
		}
		_initializeChildren() {
			if (!this._config.parent) return;
			const t = this._getFirstLevelChildren(Lt);
			for (const e of t) {
				const n = l.getElementFromSelector(e);
				n && this._addAriaAndCollapsedClass([e], this._isShown(n));
			}
		}
		_getFirstLevelChildren(t) {
			const e = l.find(sn, this._config.parent);
			return l.find(t, this._config.parent).filter(n => !e.includes(n));
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const n of t)
					n.classList.toggle('collapsed', !e),
						n.setAttribute('aria-expanded', e);
		}
		static jQueryInterface(t) {
			const e = {};
			return (
				'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
				this.each(function () {
					const n = j.getOrCreateInstance(this, e);
					if ('string' == typeof t) {
						if (typeof n[t] > 'u')
							throw new TypeError(`No method named "${t}"`);
						n[t]();
					}
				})
			);
		}
	}
	o.on(document, tn, Lt, function (s) {
		('A' === s.target.tagName ||
			(s.delegateTarget && 'A' === s.delegateTarget.tagName)) &&
			s.preventDefault();
		for (const t of l.getMultipleElementsFromSelector(this))
			j.getOrCreateInstance(t, { toggle: !1 }).toggle();
	}),
		f(j);
	const ae = 'dropdown',
		L = '.bs.dropdown',
		$t = '.data-api',
		un = 'ArrowUp',
		ce = 'ArrowDown',
		dn = `hide${L}`,
		fn = `hidden${L}`,
		pn = `show${L}`,
		En = `shown${L}`,
		he = `click${L}${$t}`,
		ue = `keydown${L}${$t}`,
		mn = `keyup${L}${$t}`,
		B = 'show',
		$ = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		Cn = `${$}.${B}`,
		ut = '.dropdown-menu',
		On = d() ? 'top-end' : 'top-start',
		Dn = d() ? 'top-start' : 'top-end',
		wn = d() ? 'bottom-end' : 'bottom-start',
		Ln = d() ? 'bottom-start' : 'bottom-end',
		$n = d() ? 'left-start' : 'right-start',
		In = d() ? 'right-start' : 'left-start',
		Pn = {
			autoClose: !0,
			boundary: 'clippingParents',
			display: 'dynamic',
			offset: [0, 2],
			popperConfig: null,
			reference: 'toggle',
		},
		kn = {
			autoClose: '(boolean|string)',
			boundary: '(string|element)',
			display: 'string',
			offset: '(array|string|function)',
			popperConfig: '(null|object|function)',
			reference: '(string|element|object)',
		};
	class g extends m {
		constructor(t, e) {
			super(t, e),
				(this._popper = null),
				(this._parent = this._element.parentNode),
				(this._menu =
					l.next(this._element, ut)[0] ||
					l.prev(this._element, ut)[0] ||
					l.findOne(ut, this._parent)),
				(this._inNavbar = this._detectNavbar());
		}
		static get Default() {
			return Pn;
		}
		static get DefaultType() {
			return kn;
		}
		static get NAME() {
			return ae;
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show();
		}
		show() {
			if (O(this._element) || this._isShown()) return;
			const t = { relatedTarget: this._element };
			if (!o.trigger(this._element, pn, t).defaultPrevented) {
				if (
					(this._createPopper(),
					'ontouchstart' in document.documentElement &&
						!this._parent.closest('.navbar-nav'))
				)
					for (const n of [].concat(...document.body.children))
						o.on(n, 'mouseover', ot);
				this._element.focus(),
					this._element.setAttribute('aria-expanded', !0),
					this._menu.classList.add(B),
					this._element.classList.add(B),
					o.trigger(this._element, En, t);
			}
		}
		hide() {
			!O(this._element) &&
				this._isShown() &&
				this._completeHide({ relatedTarget: this._element });
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose();
		}
		update() {
			(this._inNavbar = this._detectNavbar()),
				this._popper && this._popper.update();
		}
		_completeHide(t) {
			if (!o.trigger(this._element, dn, t).defaultPrevented) {
				if ('ontouchstart' in document.documentElement)
					for (const n of [].concat(...document.body.children))
						o.off(n, 'mouseover', ot);
				this._popper && this._popper.destroy(),
					this._menu.classList.remove(B),
					this._element.classList.remove(B),
					this._element.setAttribute('aria-expanded', 'false'),
					N.removeDataAttribute(this._menu, 'popper'),
					o.trigger(this._element, fn, t);
			}
		}
		_getConfig(t) {
			if (
				'object' == typeof (t = super._getConfig(t)).reference &&
				!b(t.reference) &&
				'function' != typeof t.reference.getBoundingClientRect
			)
				throw new TypeError(
					`${ae.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
				);
			return t;
		}
		_createPopper() {
			if (typeof it > 'u')
				throw new TypeError(
					"Bootstrap's dropdowns require Popper (https://popper.js.org)"
				);
			let t = this._element;
			'parent' === this._config.reference
				? (t = this._parent)
				: b(this._config.reference)
				? (t = y(this._config.reference))
				: 'object' == typeof this._config.reference &&
				  (t = this._config.reference);
			const e = this._getPopperConfig();
			this._popper = it.createPopper(t, this._menu, e);
		}
		_isShown() {
			return this._menu.classList.contains(B);
		}
		_getPlacement() {
			const t = this._parent;
			if (t.classList.contains('dropend')) return $n;
			if (t.classList.contains('dropstart')) return In;
			if (t.classList.contains('dropup-center')) return 'top';
			if (t.classList.contains('dropdown-center')) return 'bottom';
			const e =
				'end' ===
				getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
			return t.classList.contains('dropup') ? (e ? Dn : On) : e ? Ln : wn;
		}
		_detectNavbar() {
			return null !== this._element.closest('.navbar');
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map(e => Number.parseInt(e, 10))
				: 'function' == typeof t
				? e => t(e, this._element)
				: t;
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
				],
			};
			return (
				(this._inNavbar || 'static' === this._config.display) &&
					(N.setDataAttribute(this._menu, 'popper', 'static'),
					(t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
				{ ...t, ...u(this._config.popperConfig, [t]) }
			);
		}
		_selectMenuItem({ key: t, target: e }) {
			const n = l
				.find(
					'.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
					this._menu
				)
				.filter(i => H(i));
			n.length && Nt(n, e, t === ce, !n.includes(e)).focus();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = g.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
		static clearMenus(t) {
			if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
			const e = l.find(Cn);
			for (const n of e) {
				const i = g.getInstance(n);
				if (!i || !1 === i._config.autoClose) continue;
				const a = t.composedPath(),
					r = a.includes(i._menu);
				if (
					a.includes(i._element) ||
					('inside' === i._config.autoClose && !r) ||
					('outside' === i._config.autoClose && r) ||
					(i._menu.contains(t.target) &&
						(('keyup' === t.type && 'Tab' === t.key) ||
							/input|select|option|textarea|form/i.test(t.target.tagName)))
				)
					continue;
				const c = { relatedTarget: i._element };
				'click' === t.type && (c.clickEvent = t), i._completeHide(c);
			}
		}
		static dataApiKeydownHandler(t) {
			const e = /input|textarea/i.test(t.target.tagName),
				n = 'Escape' === t.key,
				i = [un, ce].includes(t.key);
			if ((!i && !n) || (e && !n)) return;
			t.preventDefault();
			const a = this.matches($)
					? this
					: l.prev(this, $)[0] ||
					  l.next(this, $)[0] ||
					  l.findOne($, t.delegateTarget.parentNode),
				r = g.getOrCreateInstance(a);
			if (i) return t.stopPropagation(), r.show(), void r._selectMenuItem(t);
			r._isShown() && (t.stopPropagation(), r.hide(), a.focus());
		}
	}
	o.on(document, ue, $, g.dataApiKeydownHandler),
		o.on(document, ue, ut, g.dataApiKeydownHandler),
		o.on(document, he, g.clearMenus),
		o.on(document, mn, g.clearMenus),
		o.on(document, he, $, function (s) {
			s.preventDefault(), g.getOrCreateInstance(this).toggle();
		}),
		f(g);
	const _e = 'backdrop',
		fe = `mousedown.bs.${_e}`,
		Hn = {
			className: 'modal-backdrop',
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: 'body',
		},
		xn = {
			className: 'string',
			clickCallback: '(function|null)',
			isAnimated: 'boolean',
			isVisible: 'boolean',
			rootElement: '(element|string)',
		};
	class pe extends Q {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isAppended = !1),
				(this._element = null);
		}
		static get Default() {
			return Hn;
		}
		static get DefaultType() {
			return xn;
		}
		static get NAME() {
			return _e;
		}
		show(t) {
			if (!this._config.isVisible) return void u(t);
			this._append();
			this._getElement().classList.add('show'),
				this._emulateAnimation(() => {
					u(t);
				});
		}
		hide(t) {
			this._config.isVisible
				? (this._getElement().classList.remove('show'),
				  this._emulateAnimation(() => {
						this.dispose(), u(t);
				  }))
				: u(t);
		}
		dispose() {
			this._isAppended &&
				(o.off(this._element, fe),
				this._element.remove(),
				(this._isAppended = !1));
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement('div');
				(t.className = this._config.className),
					this._config.isAnimated && t.classList.add('fade'),
					(this._element = t);
			}
			return this._element;
		}
		_configAfterMerge(t) {
			return (t.rootElement = y(t.rootElement)), t;
		}
		_append() {
			if (this._isAppended) return;
			const t = this._getElement();
			this._config.rootElement.append(t),
				o.on(t, fe, () => {
					u(this._config.clickCallback);
				}),
				(this._isAppended = !0);
		}
		_emulateAnimation(t) {
			Bt(t, this._getElement(), this._config.isAnimated);
		}
	}
	const _t = '.bs.focustrap',
		Wn = `focusin${_t}`,
		Yn = `keydown.tab${_t}`,
		Ee = 'backward',
		Bn = { autofocus: !0, trapElement: null },
		Un = { autofocus: 'boolean', trapElement: 'element' };
	class me extends Q {
		constructor(t) {
			super(),
				(this._config = this._getConfig(t)),
				(this._isActive = !1),
				(this._lastTabNavDirection = null);
		}
		static get Default() {
			return Bn;
		}
		static get DefaultType() {
			return Un;
		}
		static get NAME() {
			return 'focustrap';
		}
		activate() {
			this._isActive ||
				(this._config.autofocus && this._config.trapElement.focus(),
				o.off(document, _t),
				o.on(document, Wn, t => this._handleFocusin(t)),
				o.on(document, Yn, t => this._handleKeydown(t)),
				(this._isActive = !0));
		}
		deactivate() {
			this._isActive && ((this._isActive = !1), o.off(document, _t));
		}
		_handleFocusin(t) {
			const { trapElement: e } = this._config;
			if (t.target === document || t.target === e || e.contains(t.target))
				return;
			const n = l.focusableChildren(e);
			0 === n.length
				? e.focus()
				: this._lastTabNavDirection === Ee
				? n[n.length - 1].focus()
				: n[0].focus();
		}
		_handleKeydown(t) {
			'Tab' === t.key &&
				(this._lastTabNavDirection = t.shiftKey ? Ee : 'forward');
		}
	}
	const ge = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
		Ae = '.sticky-top',
		dt = 'padding-right',
		Te = 'margin-right';
	class It {
		constructor() {
			this._element = document.body;
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t);
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(),
				this._setElementAttributes(this._element, dt, e => e + t),
				this._setElementAttributes(ge, dt, e => e + t),
				this._setElementAttributes(Ae, Te, e => e - t);
		}
		reset() {
			this._resetElementAttributes(this._element, 'overflow'),
				this._resetElementAttributes(this._element, dt),
				this._resetElementAttributes(ge, dt),
				this._resetElementAttributes(Ae, Te);
		}
		isOverflowing() {
			return this.getWidth() > 0;
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, 'overflow'),
				(this._element.style.overflow = 'hidden');
		}
		_setElementAttributes(t, e, n) {
			const i = this.getWidth();
			this._applyManipulationCallback(t, r => {
				if (r !== this._element && window.innerWidth > r.clientWidth + i)
					return;
				this._saveInitialAttribute(r, e);
				const c = window.getComputedStyle(r).getPropertyValue(e);
				r.style.setProperty(e, `${n(Number.parseFloat(c))}px`);
			});
		}
		_saveInitialAttribute(t, e) {
			const n = t.style.getPropertyValue(e);
			n && N.setDataAttribute(t, e, n);
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, i => {
				const a = N.getDataAttribute(i, e);
				null !== a
					? (N.removeDataAttribute(i, e), i.style.setProperty(e, a))
					: i.style.removeProperty(e);
			});
		}
		_applyManipulationCallback(t, e) {
			if (b(t)) e(t);
			else for (const n of l.find(t, this._element)) e(n);
		}
	}
	const p = '.bs.modal',
		Qn = `hide${p}`,
		Xn = `hidePrevented${p}`,
		be = `hidden${p}`,
		Ne = `show${p}`,
		Zn = `shown${p}`,
		Jn = `resize${p}`,
		ti = `click.dismiss${p}`,
		ei = `mousedown.dismiss${p}`,
		si = `keydown.dismiss${p}`,
		ni = `click${p}.data-api`,
		Ce = 'modal-open',
		Mt = 'modal-static',
		ci = { backdrop: !0, focus: !0, keyboard: !0 },
		hi = {
			backdrop: '(boolean|string)',
			focus: 'boolean',
			keyboard: 'boolean',
		};
	class I extends m {
		constructor(t, e) {
			super(t, e),
				(this._dialog = l.findOne('.modal-dialog', this._element)),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				(this._isShown = !1),
				(this._isTransitioning = !1),
				(this._scrollBar = new It()),
				this._addEventListeners();
		}
		static get Default() {
			return ci;
		}
		static get DefaultType() {
			return hi;
		}
		static get NAME() {
			return 'modal';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				this._isTransitioning ||
				o.trigger(this._element, Ne, { relatedTarget: t }).defaultPrevented ||
				((this._isShown = !0),
				(this._isTransitioning = !0),
				this._scrollBar.hide(),
				document.body.classList.add(Ce),
				this._adjustDialog(),
				this._backdrop.show(() => this._showElement(t)));
		}
		hide() {
			!this._isShown ||
				this._isTransitioning ||
				o.trigger(this._element, Qn).defaultPrevented ||
				((this._isShown = !1),
				(this._isTransitioning = !0),
				this._focustrap.deactivate(),
				this._element.classList.remove('show'),
				this._queueCallback(
					() => this._hideModal(),
					this._element,
					this._isAnimated()
				));
		}
		dispose() {
			o.off(window, p),
				o.off(this._dialog, p),
				this._backdrop.dispose(),
				this._focustrap.deactivate(),
				super.dispose();
		}
		handleUpdate() {
			this._adjustDialog();
		}
		_initializeBackDrop() {
			return new pe({
				isVisible: !!this._config.backdrop,
				isAnimated: this._isAnimated(),
			});
		}
		_initializeFocusTrap() {
			return new me({ trapElement: this._element });
		}
		_showElement(t) {
			document.body.contains(this._element) ||
				document.body.append(this._element),
				(this._element.style.display = 'block'),
				this._element.removeAttribute('aria-hidden'),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				(this._element.scrollTop = 0);
			const e = l.findOne('.modal-body', this._dialog);
			e && (e.scrollTop = 0),
				this._element.classList.add('show'),
				this._queueCallback(
					() => {
						this._config.focus && this._focustrap.activate(),
							(this._isTransitioning = !1),
							o.trigger(this._element, Zn, { relatedTarget: t });
					},
					this._dialog,
					this._isAnimated()
				);
		}
		_addEventListeners() {
			o.on(this._element, si, t => {
				if ('Escape' === t.key) {
					if (this._config.keyboard) return void this.hide();
					this._triggerBackdropTransition();
				}
			}),
				o.on(window, Jn, () => {
					this._isShown && !this._isTransitioning && this._adjustDialog();
				}),
				o.on(this._element, ei, t => {
					o.one(this._element, ti, e => {
						if (this._element === t.target && this._element === e.target) {
							if ('static' === this._config.backdrop)
								return void this._triggerBackdropTransition();
							this._config.backdrop && this.hide();
						}
					});
				});
		}
		_hideModal() {
			(this._element.style.display = 'none'),
				this._element.setAttribute('aria-hidden', !0),
				this._element.removeAttribute('aria-modal'),
				this._element.removeAttribute('role'),
				(this._isTransitioning = !1),
				this._backdrop.hide(() => {
					document.body.classList.remove(Ce),
						this._resetAdjustments(),
						this._scrollBar.reset(),
						o.trigger(this._element, be);
				});
		}
		_isAnimated() {
			return this._element.classList.contains('fade');
		}
		_triggerBackdropTransition() {
			if (o.trigger(this._element, Xn).defaultPrevented) return;
			const e =
					this._element.scrollHeight > document.documentElement.clientHeight,
				n = this._element.style.overflowY;
			'hidden' === n ||
				this._element.classList.contains(Mt) ||
				(e || (this._element.style.overflowY = 'hidden'),
				this._element.classList.add(Mt),
				this._queueCallback(() => {
					this._element.classList.remove(Mt),
						this._queueCallback(() => {
							this._element.style.overflowY = n;
						}, this._dialog);
				}, this._dialog),
				this._element.focus());
		}
		_adjustDialog() {
			const t =
					this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				n = e > 0;
			if (n && !t) {
				const i = d() ? 'paddingLeft' : 'paddingRight';
				this._element.style[i] = `${e}px`;
			}
			if (!n && t) {
				const i = d() ? 'paddingRight' : 'paddingLeft';
				this._element.style[i] = `${e}px`;
			}
		}
		_resetAdjustments() {
			(this._element.style.paddingLeft = ''),
				(this._element.style.paddingRight = '');
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const n = I.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`);
					n[t](e);
				}
			});
		}
	}
	o.on(document, ni, '[data-bs-toggle="modal"]', function (s) {
		const t = l.getElementFromSelector(this);
		['A', 'AREA'].includes(this.tagName) && s.preventDefault(),
			o.one(t, Ne, i => {
				i.defaultPrevented ||
					o.one(t, be, () => {
						H(this) && this.focus();
					});
			});
		const e = l.findOne('.modal.show');
		e && I.getInstance(e).hide(), I.getOrCreateInstance(t).toggle(this);
	}),
		rt(I),
		f(I);
	const C = '.bs.offcanvas',
		Se = '.data-api',
		_i = `load${C}${Se}`,
		Oe = 'showing',
		we = '.offcanvas.show',
		pi = `show${C}`,
		Ei = `shown${C}`,
		mi = `hide${C}`,
		Le = `hidePrevented${C}`,
		$e = `hidden${C}`,
		gi = `resize${C}`,
		Ai = `click${C}${Se}`,
		Ti = `keydown.dismiss${C}`,
		Ni = { backdrop: !0, keyboard: !0, scroll: !1 },
		Ci = {
			backdrop: '(boolean|string)',
			keyboard: 'boolean',
			scroll: 'boolean',
		};
	class v extends m {
		constructor(t, e) {
			super(t, e),
				(this._isShown = !1),
				(this._backdrop = this._initializeBackDrop()),
				(this._focustrap = this._initializeFocusTrap()),
				this._addEventListeners();
		}
		static get Default() {
			return Ni;
		}
		static get DefaultType() {
			return Ci;
		}
		static get NAME() {
			return 'offcanvas';
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				o.trigger(this._element, pi, { relatedTarget: t }).defaultPrevented ||
				((this._isShown = !0),
				this._backdrop.show(),
				this._config.scroll || new It().hide(),
				this._element.setAttribute('aria-modal', !0),
				this._element.setAttribute('role', 'dialog'),
				this._element.classList.add(Oe),
				this._queueCallback(
					() => {
						(!this._config.scroll || this._config.backdrop) &&
							this._focustrap.activate(),
							this._element.classList.add('show'),
							this._element.classList.remove(Oe),
							o.trigger(this._element, Ei, { relatedTarget: t });
					},
					this._element,
					!0
				));
		}
		hide() {
			this._isShown &&
				!o.trigger(this._element, mi).defaultPrevented &&
				(this._focustrap.deactivate(),
				this._element.blur(),
				(this._isShown = !1),
				this._element.classList.add('hiding'),
				this._backdrop.hide(),
				this._queueCallback(
					() => {
						this._element.classList.remove('show', 'hiding'),
							this._element.removeAttribute('aria-modal'),
							this._element.removeAttribute('role'),
							this._config.scroll || new It().reset(),
							o.trigger(this._element, $e);
					},
					this._element,
					!0
				));
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
		}
		_initializeBackDrop() {
			const e = !!this._config.backdrop;
			return new pe({
				className: 'offcanvas-backdrop',
				isVisible: e,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: e
					? () => {
							'static' !== this._config.backdrop
								? this.hide()
								: o.trigger(this._element, Le);
					  }
					: null,
			});
		}
		_initializeFocusTrap() {
			return new me({ trapElement: this._element });
		}
		_addEventListeners() {
			o.on(this._element, Ti, t => {
				if ('Escape' === t.key) {
					if (this._config.keyboard) return void this.hide();
					o.trigger(this._element, Le);
				}
			});
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = v.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	o.on(document, Ai, '[data-bs-toggle="offcanvas"]', function (s) {
		const t = l.getElementFromSelector(this);
		if ((['A', 'AREA'].includes(this.tagName) && s.preventDefault(), O(this)))
			return;
		o.one(t, $e, () => {
			H(this) && this.focus();
		});
		const e = l.findOne(we);
		e && e !== t && v.getInstance(e).hide(),
			v.getOrCreateInstance(t).toggle(this);
	}),
		o.on(window, _i, () => {
			for (const s of l.find(we)) v.getOrCreateInstance(s).show();
		}),
		o.on(window, gi, () => {
			for (const s of l.find('[aria-modal][class*=show][class*=offcanvas-]'))
				'fixed' !== getComputedStyle(s).position &&
					v.getOrCreateInstance(s).hide();
		}),
		rt(v),
		f(v);
	const vi = new Set([
			'background',
			'cite',
			'href',
			'itemtype',
			'longdesc',
			'poster',
			'src',
			'xlink:href',
		]),
		Si = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
		yi =
			/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		Oi = (s, t) => {
			const e = s.nodeName.toLowerCase();
			return t.includes(e)
				? !vi.has(e) || !(!Si.test(s.nodeValue) && !yi.test(s.nodeValue))
				: t.filter(n => n instanceof RegExp).some(n => n.test(e));
		},
		Ie = {
			'*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
			a: ['target', 'href', 'title', 'rel'],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		},
		Li = {
			allowList: Ie,
			content: {},
			extraClass: '',
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: '<div></div>',
		},
		$i = {
			allowList: 'object',
			content: 'object',
			extraClass: '(string|function)',
			html: 'boolean',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			template: 'string',
		},
		Ii = {
			entry: '(string|element|function|null)',
			selector: '(string|element)',
		};
	class Mi extends Q {
		constructor(t) {
			super(), (this._config = this._getConfig(t));
		}
		static get Default() {
			return Li;
		}
		static get DefaultType() {
			return $i;
		}
		static get NAME() {
			return 'TemplateFactory';
		}
		getContent() {
			return Object.values(this._config.content)
				.map(t => this._resolvePossibleFunction(t))
				.filter(Boolean);
		}
		hasContent() {
			return this.getContent().length > 0;
		}
		changeContent(t) {
			return (
				this._checkContent(t),
				(this._config.content = { ...this._config.content, ...t }),
				this
			);
		}
		toHtml() {
			const t = document.createElement('div');
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [i, a] of Object.entries(this._config.content))
				this._setContent(t, a, i);
			const e = t.children[0],
				n = this._resolvePossibleFunction(this._config.extraClass);
			return n && e.classList.add(...n.split(' ')), e;
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content);
		}
		_checkContent(t) {
			for (const [e, n] of Object.entries(t))
				super._typeCheckConfig({ selector: e, entry: n }, Ii);
		}
		_setContent(t, e, n) {
			const i = l.findOne(n, t);
			if (i) {
				if (!(e = this._resolvePossibleFunction(e))) return void i.remove();
				if (b(e)) return void this._putElementInTemplate(y(e), i);
				if (this._config.html)
					return void (i.innerHTML = this._maybeSanitize(e));
				i.textContent = e;
			}
		}
		_maybeSanitize(t) {
			return this._config.sanitize
				? (function Di(s, t, e) {
						if (!s.length) return s;
						if (e && 'function' == typeof e) return e(s);
						const i = new window.DOMParser().parseFromString(s, 'text/html'),
							a = [].concat(...i.body.querySelectorAll('*'));
						for (const r of a) {
							const c = r.nodeName.toLowerCase();
							if (!Object.keys(t).includes(c)) {
								r.remove();
								continue;
							}
							const _ = [].concat(...r.attributes),
								E = [].concat(t['*'] || [], t[c] || []);
							for (const h of _) Oi(h, E) || r.removeAttribute(h.nodeName);
						}
						return i.body.innerHTML;
				  })(t, this._config.allowList, this._config.sanitizeFn)
				: t;
		}
		_resolvePossibleFunction(t) {
			return u(t, [this]);
		}
		_putElementInTemplate(t, e) {
			if (this._config.html) return (e.innerHTML = ''), void e.append(t);
			e.textContent = t.textContent;
		}
	}
	const Pi = new Set(['sanitize', 'allowList', 'sanitizeFn']),
		Rt = 'fade',
		ft = 'show',
		Re = 'hide.bs.modal',
		et = 'hover',
		Pt = 'focus',
		Qi = {
			AUTO: 'auto',
			TOP: 'top',
			RIGHT: d() ? 'left' : 'right',
			BOTTOM: 'bottom',
			LEFT: d() ? 'right' : 'left',
		},
		Xi = {
			allowList: Ie,
			animation: !0,
			boundary: 'clippingParents',
			container: !1,
			customClass: '',
			delay: 0,
			fallbackPlacements: ['top', 'right', 'bottom', 'left'],
			html: !1,
			offset: [0, 6],
			placement: 'top',
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template:
				'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: '',
			trigger: 'hover focus',
		},
		Zi = {
			allowList: 'object',
			animation: 'boolean',
			boundary: '(string|element)',
			container: '(string|element|boolean)',
			customClass: '(string|function)',
			delay: '(number|object)',
			fallbackPlacements: 'array',
			html: 'boolean',
			offset: '(array|string|function)',
			placement: '(string|function)',
			popperConfig: '(null|object|function)',
			sanitize: 'boolean',
			sanitizeFn: '(null|function)',
			selector: '(string|boolean)',
			template: 'string',
			title: '(string|element|function)',
			trigger: 'string',
		};
	class M extends m {
		constructor(t, e) {
			if (typeof it > 'u')
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)"
				);
			super(t, e),
				(this._isEnabled = !0),
				(this._timeout = 0),
				(this._isHovered = null),
				(this._activeTrigger = {}),
				(this._popper = null),
				(this._templateFactory = null),
				(this._newContent = null),
				(this.tip = null),
				this._setListeners(),
				this._config.selector || this._fixTitle();
		}
		static get Default() {
			return Xi;
		}
		static get DefaultType() {
			return Zi;
		}
		static get NAME() {
			return 'tooltip';
		}
		enable() {
			this._isEnabled = !0;
		}
		disable() {
			this._isEnabled = !1;
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		}
		toggle() {
			if (this._isEnabled) {
				if (
					((this._activeTrigger.click = !this._activeTrigger.click),
					this._isShown())
				)
					return void this._leave();
				this._enter();
			}
		}
		dispose() {
			clearTimeout(this._timeout),
				o.off(this._element.closest('.modal'), Re, this._hideModalHandler),
				this._element.getAttribute('data-bs-original-title') &&
					this._element.setAttribute(
						'title',
						this._element.getAttribute('data-bs-original-title')
					),
				this._disposePopper(),
				super.dispose();
		}
		show() {
			if ('none' === this._element.style.display)
				throw new Error('Please use show on visible elements');
			if (!this._isWithContent() || !this._isEnabled) return;
			const t = o.trigger(this._element, this.constructor.eventName('show')),
				n = (
					Ft(this._element) || this._element.ownerDocument.documentElement
				).contains(this._element);
			if (t.defaultPrevented || !n) return;
			this._disposePopper();
			const i = this._getTipElement();
			this._element.setAttribute('aria-describedby', i.getAttribute('id'));
			const { container: a } = this._config;
			if (
				(this._element.ownerDocument.documentElement.contains(this.tip) ||
					(a.append(i),
					o.trigger(this._element, this.constructor.eventName('inserted'))),
				(this._popper = this._createPopper(i)),
				i.classList.add(ft),
				'ontouchstart' in document.documentElement)
			)
				for (const c of [].concat(...document.body.children))
					o.on(c, 'mouseover', ot);
			this._queueCallback(
				() => {
					o.trigger(this._element, this.constructor.eventName('shown')),
						!1 === this._isHovered && this._leave(),
						(this._isHovered = !1);
				},
				this.tip,
				this._isAnimated()
			);
		}
		hide() {
			if (
				this._isShown() &&
				!o.trigger(this._element, this.constructor.eventName('hide'))
					.defaultPrevented
			) {
				if (
					(this._getTipElement().classList.remove(ft),
					'ontouchstart' in document.documentElement)
				)
					for (const i of [].concat(...document.body.children))
						o.off(i, 'mouseover', ot);
				(this._activeTrigger.click = !1),
					(this._activeTrigger[Pt] = !1),
					(this._activeTrigger[et] = !1),
					(this._isHovered = null),
					this._queueCallback(
						() => {
							this._isWithActiveTrigger() ||
								(this._isHovered || this._disposePopper(),
								this._element.removeAttribute('aria-describedby'),
								o.trigger(this._element, this.constructor.eventName('hidden')));
						},
						this.tip,
						this._isAnimated()
					);
			}
		}
		update() {
			this._popper && this._popper.update();
		}
		_isWithContent() {
			return !!this._getTitle();
		}
		_getTipElement() {
			return (
				this.tip ||
					(this.tip = this._createTipElement(
						this._newContent || this._getContentForTemplate()
					)),
				this.tip
			);
		}
		_createTipElement(t) {
			const e = this._getTemplateFactory(t).toHtml();
			if (!e) return null;
			e.classList.remove(Rt, ft),
				e.classList.add(`bs-${this.constructor.NAME}-auto`);
			const n = (s => {
				do {
					s += Math.floor(1e6 * Math.random());
				} while (document.getElementById(s));
				return s;
			})(this.constructor.NAME).toString();
			return (
				e.setAttribute('id', n), this._isAnimated() && e.classList.add(Rt), e
			);
		}
		setContent(t) {
			(this._newContent = t),
				this._isShown() && (this._disposePopper(), this.show());
		}
		_getTemplateFactory(t) {
			return (
				this._templateFactory
					? this._templateFactory.changeContent(t)
					: (this._templateFactory = new Mi({
							...this._config,
							content: t,
							extraClass: this._resolvePossibleFunction(
								this._config.customClass
							),
					  })),
				this._templateFactory
			);
		}
		_getContentForTemplate() {
			return { '.tooltip-inner': this._getTitle() };
		}
		_getTitle() {
			return (
				this._resolvePossibleFunction(this._config.title) ||
				this._element.getAttribute('data-bs-original-title')
			);
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(
				t.delegateTarget,
				this._getDelegateConfig()
			);
		}
		_isAnimated() {
			return (
				this._config.animation || (this.tip && this.tip.classList.contains(Rt))
			);
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(ft);
		}
		_createPopper(t) {
			const e = u(this._config.placement, [this, t, this._element]),
				n = Qi[e.toUpperCase()];
			return it.createPopper(this._element, t, this._getPopperConfig(n));
		}
		_getOffset() {
			const { offset: t } = this._config;
			return 'string' == typeof t
				? t.split(',').map(e => Number.parseInt(e, 10))
				: 'function' == typeof t
				? e => t(e, this._element)
				: t;
		}
		_resolvePossibleFunction(t) {
			return u(t, [this._element]);
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [
					{
						name: 'flip',
						options: { fallbackPlacements: this._config.fallbackPlacements },
					},
					{ name: 'offset', options: { offset: this._getOffset() } },
					{
						name: 'preventOverflow',
						options: { boundary: this._config.boundary },
					},
					{
						name: 'arrow',
						options: { element: `.${this.constructor.NAME}-arrow` },
					},
					{
						name: 'preSetPlacement',
						enabled: !0,
						phase: 'beforeMain',
						fn: n => {
							this._getTipElement().setAttribute(
								'data-popper-placement',
								n.state.placement
							);
						},
					},
				],
			};
			return { ...e, ...u(this._config.popperConfig, [e]) };
		}
		_setListeners() {
			const t = this._config.trigger.split(' ');
			for (const e of t)
				if ('click' === e)
					o.on(
						this._element,
						this.constructor.eventName('click'),
						this._config.selector,
						n => {
							this._initializeOnDelegatedTarget(n).toggle();
						}
					);
				else if ('manual' !== e) {
					const n = this.constructor.eventName(
							e === et ? 'mouseenter' : 'focusin'
						),
						i = this.constructor.eventName(
							e === et ? 'mouseleave' : 'focusout'
						);
					o.on(this._element, n, this._config.selector, a => {
						const r = this._initializeOnDelegatedTarget(a);
						(r._activeTrigger['focusin' === a.type ? Pt : et] = !0), r._enter();
					}),
						o.on(this._element, i, this._config.selector, a => {
							const r = this._initializeOnDelegatedTarget(a);
							(r._activeTrigger['focusout' === a.type ? Pt : et] =
								r._element.contains(a.relatedTarget)),
								r._leave();
						});
				}
			(this._hideModalHandler = () => {
				this._element && this.hide();
			}),
				o.on(this._element.closest('.modal'), Re, this._hideModalHandler);
		}
		_fixTitle() {
			const t = this._element.getAttribute('title');
			t &&
				(!this._element.getAttribute('aria-label') &&
					!this._element.textContent.trim() &&
					this._element.setAttribute('aria-label', t),
				this._element.setAttribute('data-bs-original-title', t),
				this._element.removeAttribute('title'));
		}
		_enter() {
			this._isShown() || this._isHovered
				? (this._isHovered = !0)
				: ((this._isHovered = !0),
				  this._setTimeout(() => {
						this._isHovered && this.show();
				  }, this._config.delay.show));
		}
		_leave() {
			this._isWithActiveTrigger() ||
				((this._isHovered = !1),
				this._setTimeout(() => {
					this._isHovered || this.hide();
				}, this._config.delay.hide));
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(!0);
		}
		_getConfig(t) {
			const e = N.getDataAttributes(this._element);
			for (const n of Object.keys(e)) Pi.has(n) && delete e[n];
			return (
				(t = { ...e, ...('object' == typeof t && t ? t : {}) }),
				(t = this._mergeConfigObj(t)),
				(t = this._configAfterMerge(t)),
				this._typeCheckConfig(t),
				t
			);
		}
		_configAfterMerge(t) {
			return (
				(t.container = !1 === t.container ? document.body : y(t.container)),
				'number' == typeof t.delay &&
					(t.delay = { show: t.delay, hide: t.delay }),
				'number' == typeof t.title && (t.title = t.title.toString()),
				'number' == typeof t.content && (t.content = t.content.toString()),
				t
			);
		}
		_getDelegateConfig() {
			const t = {};
			for (const [e, n] of Object.entries(this._config))
				this.constructor.Default[e] !== n && (t[e] = n);
			return (t.selector = !1), (t.trigger = 'manual'), t;
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), (this._popper = null)),
				this.tip && (this.tip.remove(), (this.tip = null));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = M.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	f(M);
	const so = {
			...M.Default,
			content: '',
			offset: [0, 8],
			placement: 'right',
			template:
				'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: 'click',
		},
		no = { ...M.DefaultType, content: '(null|string|element|function)' };
	class pt extends M {
		static get Default() {
			return so;
		}
		static get DefaultType() {
			return no;
		}
		static get NAME() {
			return 'popover';
		}
		_isWithContent() {
			return this._getTitle() || this._getContent();
		}
		_getContentForTemplate() {
			return {
				'.popover-header': this._getTitle(),
				'.popover-body': this._getContent(),
			};
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = pt.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	f(pt);
	const kt = '.bs.scrollspy',
		ro = `activate${kt}`,
		Pe = `click${kt}`,
		ao = `load${kt}.data-api`,
		U = 'active',
		Vt = '[href]',
		ke = '.nav-link',
		uo = `${ke}, .nav-item > ${ke}, .list-group-item`,
		po = {
			offset: null,
			rootMargin: '0px 0px -25%',
			smoothScroll: !1,
			target: null,
			threshold: [0.1, 0.5, 1],
		},
		Eo = {
			offset: '(number|null)',
			rootMargin: 'string',
			smoothScroll: 'boolean',
			target: 'element',
			threshold: 'array',
		};
	class st extends m {
		constructor(t, e) {
			super(t, e),
				(this._targetLinks = new Map()),
				(this._observableSections = new Map()),
				(this._rootElement =
					'visible' === getComputedStyle(this._element).overflowY
						? null
						: this._element),
				(this._activeTarget = null),
				(this._observer = null),
				(this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
				this.refresh();
		}
		static get Default() {
			return po;
		}
		static get DefaultType() {
			return Eo;
		}
		static get NAME() {
			return 'scrollspy';
		}
		refresh() {
			this._initializeTargetsAndObservables(),
				this._maybeEnableSmoothScroll(),
				this._observer
					? this._observer.disconnect()
					: (this._observer = this._getNewObserver());
			for (const t of this._observableSections.values())
				this._observer.observe(t);
		}
		dispose() {
			this._observer.disconnect(), super.dispose();
		}
		_configAfterMerge(t) {
			return (
				(t.target = y(t.target) || document.body),
				(t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
				'string' == typeof t.threshold &&
					(t.threshold = t.threshold.split(',').map(e => Number.parseFloat(e))),
				t
			);
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll &&
				(o.off(this._config.target, Pe),
				o.on(this._config.target, Pe, Vt, t => {
					const e = this._observableSections.get(t.target.hash);
					if (e) {
						t.preventDefault();
						const n = this._rootElement || window,
							i = e.offsetTop - this._element.offsetTop;
						if (n.scrollTo)
							return void n.scrollTo({ top: i, behavior: 'smooth' });
						n.scrollTop = i;
					}
				}));
		}
		_getNewObserver() {
			return new IntersectionObserver(e => this._observerCallback(e), {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin,
			});
		}
		_observerCallback(t) {
			const e = r => this._targetLinks.get(`#${r.target.id}`),
				n = r => {
					(this._previousScrollData.visibleEntryTop = r.target.offsetTop),
						this._process(e(r));
				},
				i = (this._rootElement || document.documentElement).scrollTop,
				a = i >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = i;
			for (const r of t) {
				if (!r.isIntersecting) {
					(this._activeTarget = null), this._clearActiveClass(e(r));
					continue;
				}
				const c =
					r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
				if (a && c) {
					if ((n(r), !i)) return;
				} else !a && !c && n(r);
			}
		}
		_initializeTargetsAndObservables() {
			(this._targetLinks = new Map()), (this._observableSections = new Map());
			const t = l.find(Vt, this._config.target);
			for (const e of t) {
				if (!e.hash || O(e)) continue;
				const n = l.findOne(e.hash, this._element);
				H(n) &&
					(this._targetLinks.set(e.hash, e),
					this._observableSections.set(e.hash, n));
			}
		}
		_process(t) {
			this._activeTarget !== t &&
				(this._clearActiveClass(this._config.target),
				(this._activeTarget = t),
				t.classList.add(U),
				this._activateParents(t),
				o.trigger(this._element, ro, { relatedTarget: t }));
		}
		_activateParents(t) {
			if (t.classList.contains('dropdown-item'))
				l.findOne('.dropdown-toggle', t.closest('.dropdown')).classList.add(U);
			else
				for (const e of l.parents(t, '.nav, .list-group'))
					for (const n of l.prev(e, uo)) n.classList.add(U);
		}
		_clearActiveClass(t) {
			t.classList.remove(U);
			const e = l.find(`${Vt}.${U}`, t);
			for (const n of e) n.classList.remove(U);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = st.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	o.on(window, ao, () => {
		for (const s of l.find('[data-bs-spy="scroll"]')) st.getOrCreateInstance(s);
	}),
		f(st);
	const R = '.bs.tab',
		go = `hide${R}`,
		Ao = `hidden${R}`,
		To = `show${R}`,
		bo = `shown${R}`,
		No = `click${R}`,
		Co = `keydown${R}`,
		vo = `load${R}`,
		So = 'ArrowLeft',
		Ve = 'ArrowRight',
		yo = 'ArrowUp',
		He = 'ArrowDown',
		P = 'active',
		Ht = 'show',
		xt = ':not(.dropdown-toggle)',
		Ke =
			'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		Kt = `.nav-link${xt}, .list-group-item${xt}, [role="tab"]${xt}, ${Ke}`,
		Mo = `.${P}[data-bs-toggle="tab"], .${P}[data-bs-toggle="pill"], .${P}[data-bs-toggle="list"]`;
	class k extends m {
		constructor(t) {
			super(t),
				(this._parent = this._element.closest(
					'.list-group, .nav, [role="tablist"]'
				)),
				this._parent &&
					(this._setInitialAttributes(this._parent, this._getChildren()),
					o.on(this._element, Co, e => this._keydown(e)));
		}
		static get NAME() {
			return 'tab';
		}
		show() {
			const t = this._element;
			if (this._elemIsActive(t)) return;
			const e = this._getActiveElem(),
				n = e ? o.trigger(e, go, { relatedTarget: t }) : null;
			o.trigger(t, To, { relatedTarget: e }).defaultPrevented ||
				(n && n.defaultPrevented) ||
				(this._deactivate(e, t), this._activate(t, e));
		}
		_activate(t, e) {
			t &&
				(t.classList.add(P),
				this._activate(l.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.removeAttribute('tabindex'),
							  t.setAttribute('aria-selected', !0),
							  this._toggleDropDown(t, !0),
							  o.trigger(t, bo, { relatedTarget: e }))
							: t.classList.add(Ht);
					},
					t,
					t.classList.contains('fade')
				));
		}
		_deactivate(t, e) {
			t &&
				(t.classList.remove(P),
				t.blur(),
				this._deactivate(l.getElementFromSelector(t)),
				this._queueCallback(
					() => {
						'tab' === t.getAttribute('role')
							? (t.setAttribute('aria-selected', !1),
							  t.setAttribute('tabindex', '-1'),
							  this._toggleDropDown(t, !1),
							  o.trigger(t, Ao, { relatedTarget: e }))
							: t.classList.remove(Ht);
					},
					t,
					t.classList.contains('fade')
				));
		}
		_keydown(t) {
			if (![So, Ve, yo, He].includes(t.key)) return;
			t.stopPropagation(), t.preventDefault();
			const e = [Ve, He].includes(t.key),
				n = Nt(
					this._getChildren().filter(i => !O(i)),
					t.target,
					e,
					!0
				);
			n && (n.focus({ preventScroll: !0 }), k.getOrCreateInstance(n).show());
		}
		_getChildren() {
			return l.find(Kt, this._parent);
		}
		_getActiveElem() {
			return this._getChildren().find(t => this._elemIsActive(t)) || null;
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, 'role', 'tablist');
			for (const n of e) this._setInitialAttributesOnChild(n);
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			const e = this._elemIsActive(t),
				n = this._getOuterElement(t);
			t.setAttribute('aria-selected', e),
				n !== t && this._setAttributeIfNotExists(n, 'role', 'presentation'),
				e || t.setAttribute('tabindex', '-1'),
				this._setAttributeIfNotExists(t, 'role', 'tab'),
				this._setInitialAttributesOnTargetPanel(t);
		}
		_setInitialAttributesOnTargetPanel(t) {
			const e = l.getElementFromSelector(t);
			e &&
				(this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
				t.id && this._setAttributeIfNotExists(e, 'aria-labelledby', `${t.id}`));
		}
		_toggleDropDown(t, e) {
			const n = this._getOuterElement(t);
			if (!n.classList.contains('dropdown')) return;
			const i = (a, r) => {
				const c = l.findOne(a, n);
				c && c.classList.toggle(r, e);
			};
			i('.dropdown-toggle', P),
				i('.dropdown-menu', Ht),
				n.setAttribute('aria-expanded', e);
		}
		_setAttributeIfNotExists(t, e, n) {
			t.hasAttribute(e) || t.setAttribute(e, n);
		}
		_elemIsActive(t) {
			return t.classList.contains(P);
		}
		_getInnerElement(t) {
			return t.matches(Kt) ? t : l.findOne(Kt, t);
		}
		_getOuterElement(t) {
			return t.closest('.nav-item, .list-group-item') || t;
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = k.getOrCreateInstance(this);
				if ('string' == typeof t) {
					if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
						throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	o.on(document, No, Ke, function (s) {
		['A', 'AREA'].includes(this.tagName) && s.preventDefault(),
			!O(this) && k.getOrCreateInstance(this).show();
	}),
		o.on(window, vo, () => {
			for (const s of l.find(Mo)) k.getOrCreateInstance(s);
		}),
		f(k);
	const w = '.bs.toast',
		Po = `mouseover${w}`,
		ko = `mouseout${w}`,
		Vo = `focusin${w}`,
		Ho = `focusout${w}`,
		xo = `hide${w}`,
		Ko = `hidden${w}`,
		Wo = `show${w}`,
		Yo = `shown${w}`,
		Et = 'show',
		mt = 'showing',
		jo = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
		Bo = { animation: !0, autohide: !0, delay: 5e3 };
	class nt extends m {
		constructor(t, e) {
			super(t, e),
				(this._timeout = null),
				(this._hasMouseInteraction = !1),
				(this._hasKeyboardInteraction = !1),
				this._setListeners();
		}
		static get Default() {
			return Bo;
		}
		static get DefaultType() {
			return jo;
		}
		static get NAME() {
			return 'toast';
		}
		show() {
			o.trigger(this._element, Wo).defaultPrevented ||
				(this._clearTimeout(),
				this._config.animation && this._element.classList.add('fade'),
				this._element.classList.remove('hide'),
				this._element.classList.add(Et, mt),
				this._queueCallback(
					() => {
						this._element.classList.remove(mt),
							o.trigger(this._element, Yo),
							this._maybeScheduleHide();
					},
					this._element,
					this._config.animation
				));
		}
		hide() {
			this.isShown() &&
				!o.trigger(this._element, xo).defaultPrevented &&
				(this._element.classList.add(mt),
				this._queueCallback(
					() => {
						this._element.classList.add('hide'),
							this._element.classList.remove(mt, Et),
							o.trigger(this._element, Ko);
					},
					this._element,
					this._config.animation
				));
		}
		dispose() {
			this._clearTimeout(),
				this.isShown() && this._element.classList.remove(Et),
				super.dispose();
		}
		isShown() {
			return this._element.classList.contains(Et);
		}
		_maybeScheduleHide() {
			this._config.autohide &&
				(this._hasMouseInteraction ||
					this._hasKeyboardInteraction ||
					(this._timeout = setTimeout(() => {
						this.hide();
					}, this._config.delay)));
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case 'mouseover':
				case 'mouseout':
					this._hasMouseInteraction = e;
					break;
				case 'focusin':
				case 'focusout':
					this._hasKeyboardInteraction = e;
			}
			if (e) return void this._clearTimeout();
			const n = t.relatedTarget;
			this._element === n ||
				this._element.contains(n) ||
				this._maybeScheduleHide();
		}
		_setListeners() {
			o.on(this._element, Po, t => this._onInteraction(t, !0)),
				o.on(this._element, ko, t => this._onInteraction(t, !1)),
				o.on(this._element, Vo, t => this._onInteraction(t, !0)),
				o.on(this._element, Ho, t => this._onInteraction(t, !1));
		}
		_clearTimeout() {
			clearTimeout(this._timeout), (this._timeout = null);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = nt.getOrCreateInstance(this, t);
				if ('string' == typeof t) {
					if (typeof e[t] > 'u') throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	return (
		rt(nt),
		f(nt),
		{
			Alert: X,
			Button: Z,
			Carousel: Y,
			Collapse: j,
			Dropdown: g,
			Modal: I,
			Offcanvas: v,
			Popover: pt,
			ScrollSpy: st,
			Tab: k,
			Toast: nt,
			Tooltip: M,
		}
	);
});
