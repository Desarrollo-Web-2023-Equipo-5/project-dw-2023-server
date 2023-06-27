'use strict';
(self.webpackChunkproject_dw_2023_client =
	self.webpackChunkproject_dw_2023_client || []).push([
	[220],
	{
		9220: (mt, x, s) => {
			s.r(x), s.d(x, { ProtectedModule: () => rt });
			var u = s(4755),
				p = s(4660),
				F = s(5577),
				c = s(5580),
				t = s(2223),
				T = s(2340),
				S = s(4004),
				U = s(3144);
			let N = (() => {
				class o {
					constructor(e) {
						(this.http = e),
							(this.baseUrl = T.N.apiUrl || 'http://localhost:3000/api');
					}
					updateImage(e, n, a) {
						const r = new FormData();
						return (
							r.append('file', e),
							this.http
								.put(`${this.baseUrl}/uploads/${n}/${a}`, r)
								.pipe((0, S.U)(h => h.img))
						);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.LFG(U.eN));
					}),
					(o.ɵprov = t.Yz7({ token: o, factory: o.ɵfac, providedIn: 'root' })),
					o
				);
			})();
			var _ = s(2018),
				l = s(1728),
				I = s(7081);
			function Y(o, i) {
				1 & o && t._UZ(0, 'mat-progress-bar', 7);
			}
			let q = (() => {
					class o {
						constructor(e, n, a, r) {
							(this.dialogRef = e),
								(this.data = n),
								(this.fileUploadService = a),
								(this.toastr = r),
								(this.isUploading = !1);
						}
						changeImage(e) {
							this.uploadImg = e.target.files[0];
						}
						uploadImage() {
							(this.isUploading = !0),
								this.fileUploadService
									.updateImage(this.uploadImg, 'users', this.data.user.id)
									.subscribe({
										next: e => {
											this.dialogRef.close(e),
												this.toastr.success('Image changed successfully');
										},
										error: e => {
											this.toastr.error(e.error.errors[0].msg),
												(this.isUploading = !1);
										},
									});
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(
								t.Y36(c.so),
								t.Y36(c.WI),
								t.Y36(N),
								t.Y36(_._W)
							);
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-upload-file-dialog']],
							decls: 10,
							vars: 5,
							consts: [
								['mat-dialog-title', ''],
								[
									'mat-dialog-content',
									'',
									1,
									'd-flex',
									'flex-column',
									'justify-content-center',
									'aling-items-center',
									'gap-3',
								],
								[
									'type',
									'file',
									'id',
									'formFile',
									1,
									'form-control',
									3,
									'disabled',
									'change',
								],
								[
									'color',
									'primary',
									'mat-flat-button',
									'',
									3,
									'disabled',
									'click',
								],
								['mode', 'indeterminate', 4, 'ngIf'],
								['mat-dialog-actions', ''],
								[
									'mat-button',
									'',
									'mat-dialog-close',
									'',
									'cdkFocusInitial',
									'',
									3,
									'mat-dialog-close',
								],
								['mode', 'indeterminate'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'h1', 0),
									t._uU(1, 'Upload New Image'),
									t.qZA(),
									t.TgZ(2, 'div', 1)(3, 'input', 2),
									t.NdJ('change', function (r) {
										return n.changeImage(r);
									}),
									t.qZA(),
									t.TgZ(4, 'button', 3),
									t.NdJ('click', function () {
										return n.uploadImage();
									}),
									t._uU(5),
									t.qZA(),
									t.YNc(6, Y, 1, 0, 'mat-progress-bar', 4),
									t.qZA(),
									t.TgZ(7, 'div', 5)(8, 'button', 6),
									t._uU(9, ' Close '),
									t.qZA()()),
									2 & e &&
										(t.xp6(3),
										t.Q6J('disabled', n.isUploading),
										t.xp6(1),
										t.Q6J('disabled', !n.uploadImg || n.isUploading),
										t.xp6(1),
										t.hij(
											' ',
											n.isUploading ? 'Uploading...' : 'Update Image',
											' '
										),
										t.xp6(1),
										t.Q6J('ngIf', n.isUploading),
										t.xp6(2),
										t.Q6J('mat-dialog-close', !1));
							},
							dependencies: [u.O5, l.lW, c.ZT, c.uh, c.xY, c.H8, I.pW],
						})),
						o
					);
				})(),
				C = (() => {
					class o {
						constructor(e) {
							(this.http = e),
								(this.baseUrl = T.N.apiUrl || 'http://localhost:3000/api');
						}
						getUserById(e) {
							return this.http.get(`${this.baseUrl}/users/${e}`);
						}
						createComment(e) {
							return this.http.post(`${this.baseUrl}/comments`, e);
						}
						getComments(e) {
							return this.http.get(`${this.baseUrl}/comments${e}`);
						}
						deleteComment(e) {
							return this.http.delete(`${this.baseUrl}/comments/${e}`);
						}
						createCampaign(e) {
							return this.http.post(`${this.baseUrl}/campaigns`, e);
						}
						getCampaigns() {
							return this.http.get(`${this.baseUrl}/campaigns`);
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(t.LFG(U.eN));
						}),
						(o.ɵprov = t.Yz7({
							token: o,
							factory: o.ɵfac,
							providedIn: 'root',
						})),
						o
					);
				})();
			var f = s(7556),
				v = s(3617),
				d = s(6012),
				m = s(9401),
				g = s(430),
				b = s(9114),
				y = s(8097),
				J = s(8467);
			let w = (() => {
				class o {
					constructor(e, n) {
						(this.dialogRef = e), (this.data = n);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(c.so), t.Y36(c.WI));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-confirm-dialog']],
						decls: 9,
						vars: 4,
						consts: [
							['mat-dialog-title', ''],
							['mat-dialog-content', ''],
							['mat-dialog-actions', ''],
							['mat-button', '', 'mat-dialog-close', '', 3, 'mat-dialog-close'],
							[
								'mat-button',
								'',
								'mat-dialog-close',
								'',
								'cdkFocusInitial',
								'',
								3,
								'mat-dialog-close',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'h1', 0),
								t._uU(1),
								t.qZA(),
								t.TgZ(2, 'div', 1),
								t._uU(3),
								t.qZA(),
								t.TgZ(4, 'div', 2)(5, 'button', 3),
								t._uU(6, 'No'),
								t.qZA(),
								t.TgZ(7, 'button', 4),
								t._uU(8, ' Yes '),
								t.qZA()()),
								2 & e &&
									(t.xp6(1),
									t.Oqu(n.data.title),
									t.xp6(2),
									t.Oqu(n.data.message),
									t.xp6(2),
									t.Q6J('mat-dialog-close', !1),
									t.xp6(2),
									t.Q6J('mat-dialog-close', !0));
						},
						dependencies: [l.lW, c.ZT, c.uh, c.xY, c.H8],
					})),
					o
				);
			})();
			function R(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div', 5)(1, 'button', 6),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.updateComment());
						}),
						t.TgZ(2, 'mat-icon'),
						t._uU(3, 'edit'),
						t.qZA()(),
						t.TgZ(4, 'button', 7),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.deleteComment());
						}),
						t.TgZ(5, 'mat-icon'),
						t._uU(6, 'delete'),
						t.qZA()()();
				}
			}
			let M = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.authService = e),
							(this.apiService = n),
							(this.toastr = a),
							(this.dialog = r),
							(this.editMode = !1),
							(this.deleteCommentEvent = new t.vpe());
					}
					deleteComment() {
						this.dialog
							.open(w, {
								width: '250px',
								data: {
									title: 'Delete Comment',
									message: 'Are you sure you want to delete this comment?',
								},
							})
							.afterClosed()
							.subscribe({
								next: n => {
									n &&
										this.comment.id &&
										this.apiService.deleteComment(this.comment.id).subscribe({
											next: () => {
												this.deleteCommentEvent.emit(this.comment),
													this.toastr.success('Comment deleted successfully');
											},
											error: () => {
												this.toastr.error('Error deleting comment');
											},
										});
								},
							});
					}
					updateComment() {
						this.editMode = !0;
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(f.e), t.Y36(C), t.Y36(_._W), t.Y36(c.uw));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-comment']],
						inputs: { comment: 'comment' },
						outputs: { deleteCommentEvent: 'deleteCommentEvent' },
						decls: 9,
						vars: 5,
						consts: [
							[
								1,
								'comment',
								'gap-2',
								'p-2',
								'd-flex',
								'justify-content-between',
								'border',
							],
							[
								1,
								'd-flex',
								'flex-column',
								'justify-content-center',
								'align-items-center',
								3,
								'routerLink',
							],
							['mat-card-avatar', '', 'alt', '', 3, 'src'],
							[1, 'text-center'],
							[
								'class',
								'gap-2 d-flex flex-column justify-content-center align-items-center',
								4,
								'ngIf',
							],
							[
								1,
								'gap-2',
								'd-flex',
								'flex-column',
								'justify-content-center',
								'align-items-center',
							],
							[
								'disabled',
								'',
								'mat-mini-fab',
								'',
								'color',
								'primary',
								'aria-label',
								'Example icon button with a menu icon',
								3,
								'click',
							],
							[
								'mat-mini-fab',
								'',
								'color',
								'secondary',
								'aria-label',
								'Example icon button with a menu icon',
								3,
								'click',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'div', 0)(1, 'div', 1),
								t._UZ(2, 'img', 2),
								t.TgZ(3, 'p', 3),
								t._uU(4),
								t.qZA()(),
								t.TgZ(5, 'div')(6, 'p'),
								t._uU(7),
								t.qZA()(),
								t.YNc(8, R, 7, 0, 'div', 4),
								t.qZA()),
								2 & e &&
									(t.xp6(1),
									t.MGl(
										'routerLink',
										'/dashboard/profile/',
										n.comment.creator.id,
										''
									),
									t.xp6(1),
									t.Q6J('src', n.comment.creator.img, t.LSH),
									t.xp6(2),
									t.Oqu(n.comment.creator.username),
									t.xp6(3),
									t.hij(' ', n.comment.content, ' '),
									t.xp6(1),
									t.Q6J(
										'ngIf',
										n.comment.creator.id ===
											(null == n.activeUser ? null : n.activeUser.id)
									));
						},
						dependencies: [u.O5, p.rH, l.nh, g.Hw, d.kc],
						styles: ['.comment[_ngcontent-%COMP%]{width:20em}'],
					})),
					o
				);
			})();
			function O(o, i) {
				1 & o &&
					(t.TgZ(0, 'button', 9)(1, 'mat-icon'), t._uU(2, 'send'), t.qZA()());
			}
			function E(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div')(1, 'app-comment', 12),
						t.NdJ('deleteCommentEvent', function (a) {
							t.CHM(e);
							const r = t.oxw(3);
							return t.KtG(r.deleteComment(a));
						}),
						t.qZA()();
				}
				if (2 & o) {
					const e = i.$implicit;
					t.xp6(1), t.Q6J('comment', e);
				}
			}
			function L(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'div', 10), t.YNc(1, E, 2, 1, 'div', 11), t.qZA()),
					2 & o)
				) {
					const e = t.oxw(2);
					t.xp6(1), t.Q6J('ngForOf', e.comments);
				}
			}
			function Q(o, i) {
				1 & o &&
					(t.TgZ(0, 'p', 13), t._uU(1, 'No comments to display'), t.qZA());
			}
			function j(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div', 2)(1, 'form', 3),
						t.NdJ('ngSubmit', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.sendComment());
						}),
						t.TgZ(2, 'mat-form-field', 4)(3, 'mat-label'),
						t._uU(4, 'Leave a comment'),
						t.qZA(),
						t._UZ(5, 'textarea', 5),
						t.YNc(6, O, 3, 0, 'button', 6),
						t.qZA()(),
						t.YNc(7, L, 2, 1, 'div', 7),
						t.YNc(8, Q, 2, 0, 'ng-template', null, 8, t.W1O),
						t.qZA();
				}
				if (2 & o) {
					const e = t.MAs(9),
						n = t.oxw();
					let a;
					t.xp6(1),
						t.Q6J('formGroup', n.commentForm),
						t.xp6(5),
						t.Q6J(
							'ngIf',
							null == (a = n.commentForm.get('comment')) ? null : a.value
						),
						t.xp6(1),
						t.Q6J('ngIf', n.comments.length)('ngIfElse', e);
				}
			}
			function k(o, i) {
				1 & o && (t.TgZ(0, 'div', 14), t._UZ(1, 'mat-spinner'), t.qZA());
			}
			let $ = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.fb = e),
							(this.authService = n),
							(this.apiService = a),
							(this.toastr = r),
							(this.userRef = null),
							(this.postRef = null),
							(this.comments = []),
							(this.isLoadingComments = !1),
							(this.commentForm = this.fb.group({ comment: [''] }));
					}
					ngOnInit() {
						(this.isLoadingComments = !0),
							this.apiService
								.getComments(
									this.postRef
										? `?postRef=${this.postRef}`
										: `?userRef=${this.userRef}`
								)
								.subscribe({
									next: n => {
										(this.comments = n.comments), (this.isLoadingComments = !1);
									},
									error: n => {
										this.toastr.error(n.error.errors[0].msg),
											(this.isLoadingComments = !1);
									},
								});
					}
					ngOnChanges() {
						this.apiService
							.getComments(
								this.postRef
									? `?postRef=${this.postRef}`
									: `?userRef=${this.userRef}`
							)
							.subscribe({
								next: n => {
									this.comments = n.comments;
								},
							});
					}
					sendComment() {
						if (!this.commentForm.value.comment) return;
						const e = {
							userRef: this.userRef,
							postRef: this.postRef,
							creator: this.authService.activeUser,
							content: this.commentForm.value.comment,
						};
						this.apiService.createComment(e).subscribe({
							next: n => {
								(e.id = n.id), this.comments.push(e), this.commentForm.reset();
							},
							error: n => {
								console.error(n), this.toastr.error(n.error.errors[0].msg);
							},
						});
					}
					deleteComment(e) {
						const n = this.comments.findIndex(a => a.id === e.id);
						-1 !== n && this.comments.splice(n, 1);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(m.qu), t.Y36(f.e), t.Y36(C), t.Y36(_._W));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-comments-section']],
						inputs: { userRef: 'userRef', postRef: 'postRef' },
						features: [t.TTD],
						decls: 3,
						vars: 2,
						consts: [
							[
								'class',
								'd-flex justify-content-around align-items-center flex-column',
								4,
								'ngIf',
								'ngIfElse',
							],
							['loadingComments', ''],
							[
								1,
								'd-flex',
								'justify-content-around',
								'align-items-center',
								'flex-column',
							],
							['action', '', 3, 'formGroup', 'ngSubmit'],
							[1, 'm-3'],
							[
								'formControlName',
								'comment',
								'matInput',
								'',
								'placeholder',
								'Ex. Wow! Such Cool!...',
							],
							[
								'matSuffix',
								'',
								'mat-icon-button',
								'',
								'aria-label',
								'Send',
								4,
								'ngIf',
							],
							['class', 'd-flex flex-column gap-2', 4, 'ngIf', 'ngIfElse'],
							['noComments', ''],
							['matSuffix', '', 'mat-icon-button', '', 'aria-label', 'Send'],
							[1, 'd-flex', 'flex-column', 'gap-2'],
							[4, 'ngFor', 'ngForOf'],
							[3, 'comment', 'deleteCommentEvent'],
							[1, 'text-center'],
							[
								1,
								'p-5',
								'd-flex',
								'justify-content-center',
								'align-items-center',
								'flex-column',
							],
						],
						template: function (e, n) {
							if (
								(1 & e &&
									(t.YNc(0, j, 10, 4, 'div', 0),
									t.YNc(1, k, 2, 0, 'ng-template', null, 1, t.W1O)),
								2 & e)
							) {
								const a = t.MAs(2);
								t.Q6J('ngIf', !n.isLoadingComments)('ngIfElse', a);
							}
						},
						dependencies: [
							u.sg,
							u.O5,
							l.RK,
							g.Hw,
							b.KE,
							b.hX,
							b.R9,
							y.Nt,
							J.Ou,
							m._Y,
							m.Fj,
							m.JJ,
							m.JL,
							m.sg,
							m.u,
							M,
						],
					})),
					o
				);
			})();
			function D(o, i) {
				1 & o &&
					(t.TgZ(0, 'mat-card-actions')(1, 'button', 6),
					t._uU(2, 'INVITE TO GAME'),
					t.qZA()());
			}
			function H(o, i) {
				if ((1 & o && t._UZ(0, 'app-comments-section', 7), 2 & o)) {
					const e = t.oxw(2);
					t.Q6J('userRef', e.user.id);
				}
			}
			function X(o, i) {
				1 & o && t._uU(0, ' Content 2 ');
			}
			function B(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div')(1, 'mat-card')(2, 'mat-card-header')(3, 'img', 1),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.openImageDialog());
						}),
						t.qZA(),
						t.TgZ(4, 'mat-card-title'),
						t._uU(5),
						t.qZA(),
						t.TgZ(6, 'mat-card-subtitle'),
						t._uU(7),
						t.qZA()(),
						t.YNc(8, D, 3, 0, 'mat-card-actions', 0),
						t.qZA(),
						t.TgZ(9, 'mat-tab-group', 2)(10, 'mat-tab', 3),
						t.YNc(11, H, 1, 1, 'ng-template', 4),
						t.qZA(),
						t.TgZ(12, 'mat-tab', 5),
						t.YNc(13, X, 1, 0, 'ng-template', 4),
						t.qZA()()();
				}
				if (2 & o) {
					const e = t.oxw();
					t.xp6(3),
						t.Akn(
							(null == e.activeUser ? null : e.activeUser.id) === e.user.id
								? 'cursor: pointer'
								: ''
						),
						t.Q6J('src', e.user.img, t.LSH),
						t.xp6(2),
						t.Oqu(e.user.username),
						t.xp6(2),
						t.hij('@', e.user.username, ''),
						t.xp6(1),
						t.Q6J(
							'ngIf',
							(null == e.activeUser ? null : e.activeUser.id) !== e.user.id
						);
				}
			}
			let G = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.activatedRoute = e),
							(this.apiService = n),
							(this.authService = a),
							(this.dialog = r);
					}
					ngOnInit() {
						this.activatedRoute.params
							.pipe((0, F.z)(e => this.apiService.getUserById(e.id)))
							.subscribe({
								next: e => {
									this.user = e.user;
								},
							});
					}
					openImageDialog() {
						this.activeUser &&
							this.activeUser.id === this.user.id &&
							this.dialog
								.open(q, { width: '30em', data: { user: this.user } })
								.afterClosed()
								.subscribe(n => {
									n && (this.user.img = n);
								});
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(p.gz), t.Y36(C), t.Y36(f.e), t.Y36(c.uw));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-profile']],
						decls: 1,
						vars: 1,
						consts: [
							[4, 'ngIf'],
							[
								'mat-card-avatar',
								'',
								'alt',
								'A user avatar',
								1,
								'profile-avatar',
								3,
								'src',
								'click',
							],
							['mat-align-tabs', 'center'],
							['label', 'Comments'],
							['matTabContent', ''],
							['label', 'Character Sheet'],
							['color', 'accent', 'mat-flat-button', ''],
							[3, 'userRef'],
						],
						template: function (e, n) {
							1 & e && t.YNc(0, B, 14, 6, 'div', 0),
								2 & e && t.Q6J('ngIf', n.user);
						},
						dependencies: [
							u.O5,
							l.lW,
							v.Vc,
							v.uX,
							v.SP,
							d.a8,
							d.hq,
							d.kc,
							d.dk,
							d.$j,
							d.n5,
							$,
						],
						styles: [
							'.profile-avatar[_ngcontent-%COMP%]{width:5em;height:5em}',
						],
					})),
					o
				);
			})();
			var A = s(5085);
			function W(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'div', 1)(1, 'div')(2, 'p'),
						t._uU(3),
						t.qZA()(),
						t.TgZ(4, 'div', 2)(5, 'p'),
						t._uU(6),
						t.qZA(),
						t.TgZ(7, 'button', 3)(8, 'mat-icon'),
						t._uU(9, 'play_circle'),
						t.qZA()()()()),
					2 & o)
				) {
					const e = t.oxw();
					t.xp6(3),
						t.Oqu(e.post.title),
						t.xp6(3),
						t.AsE(
							'',
							e.post.currentPlayers.length,
							'/',
							e.post.playersNeeded,
							''
						);
				}
			}
			let K = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-post']],
						inputs: { post: 'post' },
						decls: 1,
						vars: 1,
						consts: [
							[
								'class',
								'd-flex align-items-center justify-content-between border post-container ps-2 mx-1',
								'style',
								'background-color: rgb(235, 208, 173)',
								4,
								'ngIf',
							],
							[
								1,
								'd-flex',
								'align-items-center',
								'justify-content-between',
								'border',
								'post-container',
								'ps-2',
								'mx-1',
								2,
								'background-color',
								'rgb(235, 208, 173)',
							],
							[1, 'd-flex', 'align-items-center'],
							[
								'mat-icon-button',
								'',
								'color',
								'primary',
								'aria-label',
								'Example icon button with a vertical three dot icon',
							],
						],
						template: function (e, n) {
							1 & e && t.YNc(0, W, 10, 3, 'div', 0),
								2 & e && t.Q6J('ngIf', n.post);
						},
						dependencies: [u.O5, l.RK, g.Hw],
						styles: [
							'p[_ngcontent-%COMP%]{margin:0;padding:0}.post-container[_ngcontent-%COMP%]{height:4em}',
						],
					})),
					o
				);
			})();
			function z(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'mat-list-item'), t._UZ(1, 'app-post', 1), t.qZA()),
					2 & o)
				) {
					const e = i.$implicit;
					t.xp6(1), t.Q6J('post', e);
				}
			}
			let V = (() => {
					class o {
						constructor() {
							this.filteredPosts = [];
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)();
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-post-list']],
							inputs: { filteredPosts: 'filteredPosts' },
							decls: 2,
							vars: 1,
							consts: [
								[4, 'ngFor', 'ngForOf'],
								[3, 'post'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'mat-list'),
									t.YNc(1, z, 2, 1, 'mat-list-item', 0),
									t.qZA()),
									2 & e && (t.xp6(1), t.Q6J('ngForOf', n.filteredPosts));
							},
							dependencies: [u.sg, A.i$, A.Tg, K],
							styles: [
								'.mdc-list-item[_ngcontent-%COMP%]{display:contents;margin-left:1em;margin-right:1em}mat-list-item[_ngcontent-%COMP%]{margin-bottom:10px}',
							],
						})),
						o
					);
				})(),
				tt = (() => {
					class o {
						constructor(e) {
							(this.api = e), (this.campaignPosts = []), (this.lfgPosts = []);
						}
						ngOnInit() {
							this.getCampaigns();
						}
						getCampaigns() {
							this.api.getCampaigns().subscribe({
								next: e => {
									this.campaignPosts = e.campaigns;
								},
							});
						}
						getLfgPosts() {
							console.log('getLfgPosts');
						}
						onTabClick(e) {
							console.log(e.tab.textLabel),
								'Campaigns' === e.tab.textLabel
									? this.getCampaigns()
									: 'Looking for group' === e.tab.textLabel &&
									  this.getLfgPosts(),
								console.log('Tab clicked', e);
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(t.Y36(C));
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-feed']],
							decls: 7,
							vars: 2,
							consts: [
								['mat-align-tabs', 'center', 3, 'selectedTabChange'],
								['label', 'Campaigns'],
								[1, 'content'],
								[3, 'filteredPosts'],
								['label', 'Looking for group'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'mat-tab-group', 0),
									t.NdJ('selectedTabChange', function (r) {
										return n.onTabClick(r);
									}),
									t.TgZ(1, 'mat-tab', 1)(2, 'div', 2),
									t._UZ(3, 'app-post-list', 3),
									t.qZA()(),
									t.TgZ(4, 'mat-tab', 4)(5, 'div', 2),
									t._UZ(6, 'app-post-list', 3),
									t.qZA()()()),
									2 & e &&
										(t.xp6(3),
										t.Q6J('filteredPosts', n.campaignPosts),
										t.xp6(3),
										t.Q6J('filteredPosts', n.lfgPosts));
							},
							dependencies: [v.uX, v.SP, V],
						})),
						o
					);
				})();
			var P = s(9383);
			let et = (() => {
				class o {
					constructor(e, n) {
						(this.authService = e), (this.router = n);
					}
					openProfile() {
						this.router.navigateByUrl(
							`dashboard/profile/${this.authService.activeUser.id}`
						);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(f.e), t.Y36(p.F0));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-bottom-nav']],
						decls: 11,
						vars: 0,
						consts: [
							[
								'color',
								'primary',
								1,
								'z-3',
								'position-fixed',
								'bottom-0',
								'start-50',
								'translate-middle-x',
							],
							[
								'mat-icon-button',
								'',
								'routerLink',
								'/dashboard/feed',
								'aria-label',
								'Example icon button with a vertical three dot icon',
							],
							[1, 'w-100', 'position-relative'],
							[
								'mat-fab',
								'',
								'matTooltip',
								'Primary',
								'color',
								'accent',
								'aria-label',
								'Example fab with a heart icon',
								'routerLink',
								'/dashboard/create-post',
								1,
								'position-absolute',
								'bottom-0',
								'start-50',
								'translate-middle-x',
							],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon button with a vertical three dot icon',
								3,
								'click',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'mat-toolbar', 0)(1, 'button', 1)(2, 'mat-icon'),
								t._uU(3, 'forum'),
								t.qZA()(),
								t.TgZ(4, 'div', 2)(5, 'button', 3)(6, 'mat-icon'),
								t._uU(7, 'add'),
								t.qZA()()(),
								t.TgZ(8, 'button', 4),
								t.NdJ('click', function () {
									return n.openProfile();
								}),
								t.TgZ(9, 'mat-icon'),
								t._uU(10, 'account_circle'),
								t.qZA()()());
						},
						dependencies: [p.rH, P.Ye, l.RK, l.cs, g.Hw],
					})),
					o
				);
			})();
			var Z = s(2659),
				ot = s(5308);
			let nt = (() => {
				class o {
					constructor(e, n) {
						(this.authService = e), (this.router = n);
					}
					logout() {
						this.router.navigateByUrl('/auth/login'),
							this.authService.logout().subscribe();
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(f.e), t.Y36(p.F0));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-top-nav']],
						decls: 23,
						vars: 1,
						consts: [
							['color', 'primary', 1, 'd-flex', 'justify-content-between'],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon-button with heart icon',
								1,
								'example-icon',
								'favorite-icon',
							],
							['matBadge', '15', 'matBadgeColor', 'warn'],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon-button with share icon',
								1,
								'example-icon',
								3,
								'matMenuTriggerFor',
							],
							['menu', 'matMenu'],
							['mat-menu-item', '', 3, 'click'],
						],
						template: function (e, n) {
							if (
								(1 & e &&
									(t.TgZ(0, 'mat-toolbar', 0)(1, 'span'),
									t._uU(2, 'DnT'),
									t.qZA(),
									t.TgZ(3, 'div')(4, 'button', 1)(5, 'mat-icon', 2),
									t._uU(6, 'notifications'),
									t.qZA()(),
									t.TgZ(7, 'button', 1)(8, 'mat-icon'),
									t._uU(9, 'chat_bubble'),
									t.qZA()(),
									t.TgZ(10, 'button', 1)(11, 'mat-icon'),
									t._uU(12, 'description'),
									t.qZA()(),
									t.TgZ(13, 'button', 3)(14, 'mat-icon'),
									t._uU(15, 'more_vert'),
									t.qZA()(),
									t.TgZ(16, 'mat-menu', null, 4)(18, 'button', 5),
									t.NdJ('click', function () {
										return n.logout();
									}),
									t.TgZ(19, 'mat-icon'),
									t._uU(20, 'logout'),
									t.qZA(),
									t.TgZ(21, 'span'),
									t._uU(22, 'Logout'),
									t.qZA()()()()()),
								2 & e)
							) {
								const a = t.MAs(17);
								t.xp6(13), t.Q6J('matMenuTriggerFor', a);
							}
						},
						dependencies: [P.Ye, l.RK, g.Hw, Z.VK, Z.OP, Z.p6, ot.k],
					})),
					o
				);
			})();
			const it = [
				{
					path: '',
					component: (() => {
						class o {}
						return (
							(o.ɵfac = function (e) {
								return new (e || o)();
							}),
							(o.ɵcmp = t.Xpm({
								type: o,
								selectors: [['app-main']],
								decls: 4,
								vars: 0,
								consts: [[1, 'main-container']],
								template: function (e, n) {
									1 & e &&
										(t._UZ(0, 'app-top-nav'),
										t.TgZ(1, 'div', 0),
										t._UZ(2, 'router-outlet'),
										t.qZA(),
										t._UZ(3, 'app-bottom-nav'));
								},
								dependencies: [p.lC, et, nt],
								styles: [
									'.main-container[_ngcontent-%COMP%]{overflow:auto;max-height:87vh}',
								],
							})),
							o
						);
					})(),
					children: [
						{ path: 'profile/:id', component: G },
						{ path: 'feed', component: tt },
						{
							path: 'create-post',
							component: (() => {
								class o {}
								return (
									(o.ɵfac = function (e) {
										return new (e || o)();
									}),
									(o.ɵcmp = t.Xpm({
										type: o,
										selectors: [['app-create-post']],
										decls: 11,
										vars: 0,
										consts: [
											[
												1,
												'd-flex',
												'gap-5',
												'flex-column',
												'justify-content-center',
												'align-items-center',
												'h100',
											],
											[
												'mat-fab',
												'',
												'extended',
												'',
												'color',
												'accent',
												'routerLink',
												'/dashboard/create-campaign',
											],
											['mat-fab', '', 'extended', '', 'color', 'accent'],
										],
										template: function (e, n) {
											1 & e &&
												(t.TgZ(0, 'div', 0)(1, 'button', 1)(2, 'mat-icon'),
												t._uU(3, 'add'),
												t.qZA(),
												t._uU(4, ' Create Campaign '),
												t.qZA(),
												t.TgZ(5, 'p'),
												t._uU(6, 'OR'),
												t.qZA(),
												t.TgZ(7, 'button', 2)(8, 'mat-icon'),
												t._uU(9, 'add'),
												t.qZA(),
												t._uU(10, ' Look for a Group '),
												t.qZA()());
										},
										dependencies: [p.rH, l.cs, g.Hw],
										styles: [
											'.h100[_ngcontent-%COMP%]{height:87vh}p[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:bolder;font-size:large}',
										],
									})),
									o
								);
							})(),
						},
						{
							path: 'create-campaign',
							component: (() => {
								class o {
									get user() {
										return this.auth.activeUser;
									}
									constructor(e, n, a, r) {
										(this.fb = e),
											(this.api = n),
											(this.auth = a),
											(this.toastr = r),
											(this.campaignForm = this.fb.group({
												title: ['', [m.kI.required]],
												description: ['', [m.kI.required]],
												playersNeeded: ['', [m.kI.required]],
											}));
									}
									createPost() {
										const {
											title: e,
											description: n,
											playersNeeded: a,
										} = this.campaignForm.value;
										return (
											this.api
												.createCampaign({
													title: e,
													description: n,
													playersNeeded: a,
													creator: this.user.id,
												})
												.subscribe({
													next: h => {
														h.id &&
															(this.toastr.success(
																'Campaign created successfully!'
															),
															this.campaignForm.reset());
													},
													error: h => {
														console.error(h),
															this.toastr.error(h.error.errors[0].msg);
													},
												}),
											this.campaignForm.value
										);
									}
								}
								return (
									(o.ɵfac = function (e) {
										return new (e || o)(
											t.Y36(m.qu),
											t.Y36(C),
											t.Y36(f.e),
											t.Y36(_._W)
										);
									}),
									(o.ɵcmp = t.Xpm({
										type: o,
										selectors: [['app-create-campaign']],
										decls: 20,
										vars: 1,
										consts: [
											[
												1,
												'd-flex',
												'gap-3',
												'flex-column',
												'justify-content-center',
												'align-items-center',
												'p-3',
												3,
												'formGroup',
												'ngSubmit',
											],
											[1, 'example-full-width'],
											[
												'matInput',
												'',
												'placeholder',
												'Ex. Curse of Strahd',
												'formControlName',
												'title',
											],
											[
												'matInput',
												'',
												'type',
												'number',
												'placeholder',
												'Ex. 4',
												'formControlName',
												'playersNeeded',
											],
											[
												'matInput',
												'',
												'placeholder',
												'Ex. You are trapped in the lands of Barovia...',
												'formControlName',
												'description',
											],
											[
												'mat-fab',
												'',
												'extended',
												'',
												'color',
												'accent',
												'disabled',
												'',
												'type',
												'button',
											],
											[
												'mat-raised-button',
												'',
												'color',
												'primary',
												'type',
												'submit',
											],
										],
										template: function (e, n) {
											1 & e &&
												(t.TgZ(0, 'div')(1, 'form', 0),
												t.NdJ('ngSubmit', function () {
													return n.createPost();
												}),
												t.TgZ(2, 'mat-form-field', 1)(3, 'mat-label'),
												t._uU(4, 'Campaign Name'),
												t.qZA(),
												t._UZ(5, 'input', 2),
												t.qZA(),
												t.TgZ(6, 'mat-form-field', 1)(7, 'mat-label'),
												t._uU(8, 'Number of Players'),
												t.qZA(),
												t._UZ(9, 'input', 3),
												t.qZA(),
												t.TgZ(10, 'mat-form-field', 1)(11, 'mat-label'),
												t._uU(12, 'Description'),
												t.qZA(),
												t._UZ(13, 'textarea', 4),
												t.qZA(),
												t.TgZ(14, 'button', 5)(15, 'mat-icon'),
												t._uU(16, 'add'),
												t.qZA(),
												t._uU(17, ' Upload Image '),
												t.qZA(),
												t.TgZ(18, 'button', 6),
												t._uU(19, 'Post'),
												t.qZA()()()),
												2 & e && (t.xp6(1), t.Q6J('formGroup', n.campaignForm));
										},
										dependencies: [
											l.lW,
											l.cs,
											g.Hw,
											b.KE,
											b.hX,
											y.Nt,
											m._Y,
											m.Fj,
											m.wV,
											m.JJ,
											m.JL,
											m.sg,
											m.u,
										],
										styles: ['mat-form-field[_ngcontent-%COMP%]{width:87%}'],
									})),
									o
								);
							})(),
						},
						{ path: '**', redirectTo: 'feed' },
					],
				},
			];
			let at = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵmod = t.oAB({ type: o })),
					(o.ɵinj = t.cJS({ imports: [p.Bz.forChild(it), p.Bz] })),
					o
				);
			})();
			var st = s(3766);
			let rt = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵmod = t.oAB({ type: o })),
					(o.ɵinj = t.cJS({ imports: [u.ez, at, st.q, m.UX] })),
					o
				);
			})();
		},
	},
]);
