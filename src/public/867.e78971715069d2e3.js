'use strict';
(self.webpackChunkproject_dw_2023_client =
	self.webpackChunkproject_dw_2023_client || []).push([
	[867],
	{
		2867: (m, i, o) => {
			o.r(i), o.d(i, { PublicModule: () => s });
			var u = o(4755),
				l = o(4660),
				t = o(2223),
				c = o(1728);
			const a = [
				{
					path: '',
					children: [
						{
							path: '',
							component: (() => {
								class n {}
								return (
									(n.ɵfac = function (e) {
										return new (e || n)();
									}),
									(n.ɵcmp = t.Xpm({
										type: n,
										selectors: [['app-landing']],
										decls: 9,
										vars: 0,
										consts: [
											[
												1,
												'd-flex',
												'flex-column',
												'justify-content-around',
												'align-items-center',
												'background',
											],
											[
												'src',
												'../../../../assets/logo.svg',
												'alt',
												'A logo that says Dungeons and Turtles',
											],
											[1, 'text-center', 'landing-text', 'pb-4'],
											[1, 'd-flex', 'flex-column', 'gap-1'],
											[
												'mat-raised-button',
												'',
												'color',
												'primary',
												'routerLink',
												'/auth/login',
												1,
												'login',
											],
											[
												'mat-button',
												'',
												'color',
												'primary',
												'routerLink',
												'/auth/register',
												1,
												'register',
											],
										],
										template: function (e, f) {
											1 & e &&
												(t.TgZ(0, 'div', 0),
												t._UZ(1, 'img', 1),
												t.TgZ(2, 'p', 2),
												t._uU(3, ' Where you will find your next D&D group '),
												t.qZA(),
												t.TgZ(4, 'div', 3)(5, 'button', 4),
												t._uU(6, ' Log in '),
												t.qZA(),
												t.TgZ(7, 'button', 5),
												t._uU(8, ' Register '),
												t.qZA()()());
										},
										dependencies: [l.rH, c.lW],
										styles: [
											'button[_ngcontent-%COMP%]{width:7em}p[_ngcontent-%COMP%]{width:260px;margin-top:-3em;font-style:normal;font-weight:800;font-size:25px;line-height:30px;text-align:center;color:#671616}.background[_ngcontent-%COMP%]{background:url(Icewind.e944fb5ba71f54a4.svg);color:#fff;background-repeat:no-repeat;background-size:cover;background-color:#040404;height:100vh}img[_ngcontent-%COMP%]{margin-top:-3em}',
										],
									})),
									n
								);
							})(),
						},
						{ path: '**', redirectTo: '' },
					],
				},
			];
			let g = (() => {
				class n {}
				return (
					(n.ɵfac = function (e) {
						return new (e || n)();
					}),
					(n.ɵmod = t.oAB({ type: n })),
					(n.ɵinj = t.cJS({ imports: [l.Bz.forChild(a), l.Bz] })),
					n
				);
			})();
			var d = o(3766);
			let s = (() => {
				class n {}
				return (
					(n.ɵfac = function (e) {
						return new (e || n)();
					}),
					(n.ɵmod = t.oAB({ type: n })),
					(n.ɵinj = t.cJS({ imports: [u.ez, g, d.q] })),
					n
				);
			})();
		},
	},
]);