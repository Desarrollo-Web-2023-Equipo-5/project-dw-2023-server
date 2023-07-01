'use strict';
(self.webpackChunkproject_dw_2023_client =
	self.webpackChunkproject_dw_2023_client || []).push([
	[625],
	{
		6625: (R, c, a) => {
			a.r(c), a.d(c, { AuthModule: () => F });
			var g = a(4755),
				d = a(4660),
				s = a(9401),
				e = a(2223),
				f = a(7556),
				h = a(2018),
				p = a(1728),
				w = a(430),
				u = a(9114),
				_ = a(8097);
			function Z(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('email'));
				}
			}
			function P(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('password'));
				}
			}
			function x(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('username'));
				}
			}
			function q(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('email'));
				}
			}
			function v(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('password'));
				}
			}
			function C(t, n) {
				if ((1 & t && (e.TgZ(0, 'mat-error'), e._uU(1), e.qZA()), 2 & t)) {
					const r = e.oxw();
					e.xp6(1), e.Oqu(r.getErrorMessage('repeatPassword'));
				}
			}
			const T = [
				{
					path: '',
					children: [
						{
							path: 'login',
							component: (() => {
								class t {
									constructor(r, o, i, l) {
										(this.authService = r),
											(this.fb = o),
											(this.router = i),
											(this.toastr = l),
											(this.hidePassword = !0),
											(this.isLoading = !1),
											(this.loginForm = this.fb.group({
												email: ['', [s.kI.required, s.kI.email]],
												password: ['', [s.kI.required]],
											}));
									}
									login() {
										const { email: r, password: o } = this.loginForm.value;
										(this.isLoading = !0),
											this.authService.login(r, o).subscribe({
												next: i => {
													i.token && this.router.navigateByUrl('/dashboard');
												},
												error: i => {
													console.error(i),
														(this.isLoading = !1),
														this.toastr.error(i.error.errors[0].msg);
												},
											});
									}
									getErrorMessage(r) {
										switch (r) {
											case 'email':
												return this.loginForm.get('email')?.hasError('required')
													? 'Email is required'
													: this.loginForm.get('email')?.hasError('email')
													? 'Email not valid'
													: '';
											case 'password':
												return this.loginForm
													.get('password')
													?.hasError('required')
													? 'Password is required'
													: '';
											default:
												return '';
										}
									}
								}
								return (
									(t.ɵfac = function (r) {
										return new (r || t)(
											e.Y36(f.e),
											e.Y36(s.qu),
											e.Y36(d.F0),
											e.Y36(h._W)
										);
									}),
									(t.ɵcmp = e.Xpm({
										type: t,
										selectors: [['app-login']],
										decls: 24,
										vars: 9,
										consts: [
											[
												1,
												'd-flex',
												'flex-column',
												'justify-content-center',
												'align-items-center',
											],
											[
												'mat-icon-button',
												'',
												'aria-label',
												'Example icon-button with a heart icon',
												'routerLink',
												'/landing',
												1,
												'm-1',
												'align-self-start',
											],
											['src', '../../../../assets/logo.svg', 'alt', ''],
											[
												1,
												'd-flex',
												'flex-column',
												'align-items-center',
												'justify-content-center',
												'gap-2',
												3,
												'formGroup',
												'ngSubmit',
											],
											['appearance', 'outline'],
											[
												'type',
												'email',
												'formControlName',
												'email',
												'matInput',
												'',
												'placeholder',
												'pat@example.com',
											],
											[4, 'ngIf'],
											[
												'formControlName',
												'password',
												'matInput',
												'',
												3,
												'type',
											],
											[
												'type',
												'button',
												'mat-icon-button',
												'',
												'matSuffix',
												'',
												3,
												'click',
											],
											['routerLink', '/auth/forgot-pass'],
											[
												'type',
												'submit',
												'color',
												'accent',
												'mat-flat-button',
												'',
												1,
												'mt-3',
												3,
												'disabled',
											],
										],
										template: function (r, o) {
											if (
												(1 & r &&
													(e.TgZ(0, 'div', 0)(1, 'button', 1)(2, 'mat-icon'),
													e._uU(3, 'chevron_left'),
													e.qZA()(),
													e._UZ(4, 'img', 2),
													e.TgZ(5, 'form', 3),
													e.NdJ('ngSubmit', function () {
														return o.login();
													}),
													e.TgZ(6, 'mat-form-field', 4)(7, 'mat-label'),
													e._uU(8, 'Email'),
													e.qZA(),
													e._UZ(9, 'input', 5),
													e.YNc(10, Z, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(11, 'mat-form-field', 4)(12, 'mat-label'),
													e._uU(13, 'Password'),
													e.qZA(),
													e._UZ(14, 'input', 7),
													e.TgZ(15, 'button', 8),
													e.NdJ('click', function () {
														return (o.hidePassword = !o.hidePassword);
													}),
													e.TgZ(16, 'mat-icon'),
													e._uU(17),
													e.qZA()(),
													e.YNc(18, P, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(19, 'mat-hint')(20, 'a', 9),
													e._uU(21, 'Forgot password?'),
													e.qZA()(),
													e.TgZ(22, 'button', 10),
													e._uU(23),
													e.qZA()()()),
												2 & r)
											) {
												let i, l;
												e.xp6(5),
													e.Q6J('formGroup', o.loginForm),
													e.xp6(5),
													e.Q6J(
														'ngIf',
														null == (i = o.loginForm.get('email'))
															? null
															: i.invalid
													),
													e.xp6(4),
													e.Q6J('type', o.hidePassword ? 'password' : 'text'),
													e.xp6(1),
													e.uIk('aria-label', 'Hide password')(
														'aria-pressed',
														o.hidePassword
													),
													e.xp6(2),
													e.Oqu(
														o.hidePassword ? 'visibility_off' : 'visibility'
													),
													e.xp6(1),
													e.Q6J(
														'ngIf',
														null == (l = o.loginForm.get('password'))
															? null
															: l.invalid
													),
													e.xp6(4),
													e.Q6J('disabled', o.loginForm.invalid || o.isLoading),
													e.xp6(1),
													e.hij(' ', o.isLoading ? 'Loading...' : 'Login', ' ');
											}
										},
										dependencies: [
											g.O5,
											d.rH,
											s._Y,
											s.Fj,
											s.JJ,
											s.JL,
											s.sg,
											s.u,
											p.lW,
											p.RK,
											w.Hw,
											u.KE,
											u.hX,
											u.bx,
											u.TO,
											u.R9,
											_.Nt,
										],
										styles: [
											'mat-form-field[_ngcontent-%COMP%]{width:15em}img[_ngcontent-%COMP%]{width:20em;height:20em}button[type=submit][_ngcontent-%COMP%]{width:10em}',
										],
									})),
									t
								);
							})(),
						},
						{
							path: 'register',
							component: (() => {
								class t {
									constructor(r, o, i, l) {
										(this.authService = r),
											(this.fb = o),
											(this.router = i),
											(this.toastr = l),
											(this.hidePassword = !0),
											(this.hideRepeatPassword = !0),
											(this.isLoading = !1),
											(this.registerForm = this.fb.group({
												username: ['', [s.kI.required]],
												email: ['', [s.kI.required, s.kI.email]],
												password: ['', [s.kI.required]],
												repeatPassword: ['', [s.kI.required]],
											}));
									}
									register() {
										const {
											username: r,
											email: o,
											password: i,
											repeatPassword: l,
										} = this.registerForm.value;
										i === l
											? ((this.isLoading = !0),
											  this.authService.register(r, o, i).subscribe({
													next: m => {
														m.id &&
															(this.toastr.success(
																"You've been registered successfully"
															),
															this.router.navigateByUrl('/auth/login'));
													},
													error: m => {
														console.error(m),
															(this.isLoading = !1),
															this.toastr.error(m.error.errors[0].msg);
													},
											  }))
											: this.toastr.error('Passwords do not match');
									}
									getErrorMessage(r) {
										switch (r) {
											case 'username':
												return this.registerForm
													.get('username')
													?.hasError('required')
													? 'Username is required'
													: '';
											case 'email':
												return this.registerForm
													.get('email')
													?.hasError('required')
													? 'Email is required'
													: this.registerForm.get('email')?.hasError('email')
													? 'Email not valid'
													: '';
											case 'password':
												return this.registerForm
													.get('password')
													?.hasError('required')
													? 'Password is required'
													: '';
											case 'repeatPassword':
												return this.registerForm
													.get('repeatPassword')
													?.hasError('required')
													? 'Password is required'
													: this.registerForm
															.get('repeatPassword')
															?.hasError('password')
													? 'Password does not match'
													: '';
											default:
												return '';
										}
									}
								}
								return (
									(t.ɵfac = function (r) {
										return new (r || t)(
											e.Y36(f.e),
											e.Y36(s.qu),
											e.Y36(d.F0),
											e.Y36(h._W)
										);
									}),
									(t.ɵcmp = e.Xpm({
										type: t,
										selectors: [['app-register']],
										decls: 34,
										vars: 15,
										consts: [
											[
												1,
												'd-flex',
												'flex-column',
												'justify-content-center',
												'align-items-center',
											],
											[
												'mat-icon-button',
												'',
												'aria-label',
												'Example icon-button with a heart icon',
												'routerLink',
												'/landing',
												1,
												'm-1',
												'align-self-start',
											],
											['src', '../../../../assets/logo.svg', 'alt', ''],
											[
												1,
												'd-flex',
												'flex-column',
												'align-items-center',
												'justify-content-center',
												'gap-2',
												3,
												'formGroup',
												'ngSubmit',
											],
											['appearance', 'outline'],
											[
												'type',
												'text',
												'formControlName',
												'username',
												'matInput',
												'',
												'placeholder',
												'Enter your username',
											],
											[4, 'ngIf'],
											[
												'type',
												'email',
												'formControlName',
												'email',
												'matInput',
												'',
												'placeholder',
												'Enter your email',
											],
											[
												'formControlName',
												'password',
												'matInput',
												'',
												'placeholder',
												'Enter your password',
												3,
												'type',
											],
											[
												'type',
												'button',
												'mat-icon-button',
												'',
												'matSuffix',
												'',
												3,
												'click',
											],
											[
												'formControlName',
												'repeatPassword',
												'matInput',
												'',
												'placeholder',
												'Repeat your password',
												3,
												'type',
											],
											[
												'type',
												'submit',
												'color',
												'primary',
												'mat-flat-button',
												'',
												1,
												'mt-3',
												3,
												'disabled',
											],
										],
										template: function (r, o) {
											if (
												(1 & r &&
													(e.TgZ(0, 'div', 0)(1, 'button', 1)(2, 'mat-icon'),
													e._uU(3, 'chevron_left'),
													e.qZA()(),
													e._UZ(4, 'img', 2),
													e.TgZ(5, 'form', 3),
													e.NdJ('ngSubmit', function () {
														return o.register();
													}),
													e.TgZ(6, 'mat-form-field', 4)(7, 'mat-label'),
													e._uU(8, 'Username'),
													e.qZA(),
													e._UZ(9, 'input', 5),
													e.YNc(10, x, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(11, 'mat-form-field', 4)(12, 'mat-label'),
													e._uU(13, 'Email'),
													e.qZA(),
													e._UZ(14, 'input', 7),
													e.YNc(15, q, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(16, 'mat-form-field', 4)(17, 'mat-label'),
													e._uU(18, 'Password'),
													e.qZA(),
													e._UZ(19, 'input', 8),
													e.TgZ(20, 'button', 9),
													e.NdJ('click', function () {
														return (o.hidePassword = !o.hidePassword);
													}),
													e.TgZ(21, 'mat-icon'),
													e._uU(22),
													e.qZA()(),
													e.YNc(23, v, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(24, 'mat-form-field', 4)(25, 'mat-label'),
													e._uU(26, 'Repeat Password'),
													e.qZA(),
													e._UZ(27, 'input', 10),
													e.TgZ(28, 'button', 9),
													e.NdJ('click', function () {
														return (o.hideRepeatPassword =
															!o.hideRepeatPassword);
													}),
													e.TgZ(29, 'mat-icon'),
													e._uU(30),
													e.qZA()(),
													e.YNc(31, C, 2, 1, 'mat-error', 6),
													e.qZA(),
													e.TgZ(32, 'button', 11),
													e._uU(33),
													e.qZA()()()),
												2 & r)
											) {
												let i, l, m, b;
												e.xp6(5),
													e.Q6J('formGroup', o.registerForm),
													e.xp6(5),
													e.Q6J(
														'ngIf',
														null == (i = o.registerForm.get('username'))
															? null
															: i.invalid
													),
													e.xp6(5),
													e.Q6J(
														'ngIf',
														null == (l = o.registerForm.get('email'))
															? null
															: l.invalid
													),
													e.xp6(4),
													e.Q6J('type', o.hidePassword ? 'password' : 'text'),
													e.xp6(1),
													e.uIk('aria-label', 'Hide password')(
														'aria-pressed',
														o.hidePassword
													),
													e.xp6(2),
													e.Oqu(
														o.hidePassword ? 'visibility_off' : 'visibility'
													),
													e.xp6(1),
													e.Q6J(
														'ngIf',
														null == (m = o.registerForm.get('password'))
															? null
															: m.invalid
													),
													e.xp6(4),
													e.Q6J(
														'type',
														o.hideRepeatPassword ? 'password' : 'text'
													),
													e.xp6(1),
													e.uIk('aria-label', 'Hide repeat password')(
														'aria-pressed',
														o.hideRepeatPassword
													),
													e.xp6(2),
													e.Oqu(
														o.hideRepeatPassword
															? 'visibility_off'
															: 'visibility'
													),
													e.xp6(1),
													e.Q6J(
														'ngIf',
														null == (b = o.registerForm.get('repeatPassword'))
															? null
															: b.invalid
													),
													e.xp6(1),
													e.Q6J(
														'disabled',
														o.registerForm.invalid || o.isLoading
													),
													e.xp6(1),
													e.hij(
														' ',
														o.isLoading ? 'Loading...' : 'Register',
														' '
													);
											}
										},
										dependencies: [
											g.O5,
											d.rH,
											s._Y,
											s.Fj,
											s.JJ,
											s.JL,
											s.sg,
											s.u,
											p.lW,
											p.RK,
											w.Hw,
											u.KE,
											u.hX,
											u.TO,
											u.R9,
											_.Nt,
										],
										styles: [
											'mat-form-field[_ngcontent-%COMP%]{width:15em}img[_ngcontent-%COMP%]{width:20em;height:20em}button[type=submit][_ngcontent-%COMP%]{width:10em}',
										],
									})),
									t
								);
							})(),
						},
						{
							path: 'forgot-pass',
							component: (() => {
								class t {}
								return (
									(t.ɵfac = function (r) {
										return new (r || t)();
									}),
									(t.ɵcmp = e.Xpm({
										type: t,
										selectors: [['app-forgot-pass']],
										decls: 13,
										vars: 0,
										consts: [
											[1, 'forgot-pass-menu'],
											['action', 'forgot-pass.php', 'method', 'post'],
											['for', 'password'],
											[
												'type',
												'text',
												'id',
												'password',
												'name',
												'password',
												'placeholder',
												'Enter your password',
												'required',
												'',
											],
											['for', 'repeat-password'],
											[
												'type',
												'repeat-password',
												'id',
												'repeat-password',
												'name',
												'repeat-password',
												'placeholder',
												'Repeat the password',
												'required',
												'',
											],
											['id', 'back-to-login', 'href', './auth/login'],
											['type', 'submit', 'value', 'Reset Password'],
										],
										template: function (r, o) {
											1 & r &&
												(e.TgZ(0, 'h2'),
												e._uU(1, 'Reset Password'),
												e.qZA(),
												e.TgZ(2, 'div', 0)(3, 'form', 1)(4, 'label', 2),
												e._uU(5, 'Password: '),
												e.qZA(),
												e._UZ(6, 'input', 3),
												e.TgZ(7, 'label', 4),
												e._uU(8, 'Repeat Password: '),
												e.qZA(),
												e._UZ(9, 'input', 5),
												e.TgZ(10, 'a', 6),
												e._uU(11, 'Back to Login'),
												e.qZA(),
												e._UZ(12, 'input', 7),
												e.qZA()());
										},
										styles: [
											'body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f4}.forgot-pass-menu[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:60px;background-color:#bdbcbc;color:#cd0303;border-radius:5px;box-shadow:0 2px 5px #0000001a}h2[_ngcontent-%COMP%]{text-align:center;background-color:#000;color:#cd0303}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:15px;border:1px solid #ccc;border-radius:3px}input[type=submit][_ngcontent-%COMP%]{width:100%;background-color:#cd0303;color:#fff;padding:10px;border:none;border-radius:3px;cursor:pointer}input[type=submit][_ngcontent-%COMP%]:hover{background-color:red}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{color:#cd0303}',
										],
									})),
									t
								);
							})(),
						},
						{ path: '**', redirectTo: 'login' },
					],
				},
			];
			let A = (() => {
				class t {}
				return (
					(t.ɵfac = function (r) {
						return new (r || t)();
					}),
					(t.ɵmod = e.oAB({ type: t })),
					(t.ɵinj = e.cJS({ imports: [d.Bz.forChild(T), d.Bz] })),
					t
				);
			})();
			var U = a(1603);
			let F = (() => {
				class t {}
				return (
					(t.ɵfac = function (r) {
						return new (r || t)();
					}),
					(t.ɵmod = e.oAB({ type: t })),
					(t.ɵinj = e.cJS({ imports: [g.ez, A, s.UX, U.q] })),
					t
				);
			})();
		},
	},
]);
