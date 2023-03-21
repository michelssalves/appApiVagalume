(function () {
  "use strict";
  var e = {
      4468: function (e, t, n) {
        var a = n(6369),
          r = function () {
            var e = this,
              t = e._self._c;
            return t("div", { attrs: { id: "app" } }, [t("Letras")], 1);
          },
          o = [],
          i = function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                t("b-card", [
                  t(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.art,
                          expression: "art",
                        },
                      ],
                      staticClass: "menuSelect",
                      on: {
                        change: [
                          function (t) {
                            var n = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.art = t.target.multiple ? n : n[0];
                          },
                          function (t) {
                            return e.getOption(t);
                          },
                        ],
                      },
                    },
                    [
                      t("option", { attrs: { value: "" } }, [
                        e._v("Selecione"),
                      ]),
                      e._l(e.bandas, function (n) {
                        return t(
                          "option",
                          { key: n.id, domProps: { value: n.id } },
                          [e._v(e._s(n.nome))]
                        );
                      }),
                    ],
                    2
                  ),
                  t(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.mus,
                          expression: "mus",
                        },
                      ],
                      staticClass: "menuSelect",
                      on: {
                        change: function (t) {
                          var n = Array.prototype.filter
                            .call(t.target.options, function (e) {
                              return e.selected;
                            })
                            .map(function (e) {
                              var t = "_value" in e ? e._value : e.value;
                              return t;
                            });
                          e.mus = t.target.multiple ? n : n[0];
                        },
                      },
                    },
                    [
                      t("option", { attrs: { value: "" } }, [
                        e._v("Selecione"),
                      ]),
                      e._l(e.filteredItems, function (n) {
                        return t(
                          "option",
                          {
                            key: n.idBanda,
                            attrs: { selected: "" },
                            domProps: { value: n.nome },
                          },
                          [e._v(e._s(n.nome) + " ")]
                        );
                      }),
                    ],
                    2
                  ),
                ]),
                t("b-card", [
                  t("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.musica,
                        expression: "musica",
                      },
                    ],
                    staticClass: "textAreaclass",
                    attrs: { name: "observacao", cols: "40", rows: "30" },
                    domProps: { value: e.musica },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.musica = t.target.value);
                      },
                    },
                  }),
                ]),
              ],
              1
            );
          },
          s = [],
          u = {
            name: "LetrasMusicas",
            props: {},
            data() {
              return {
                key: "3e83e523ef18a449f4eed36e9291ceae",
                bandas: [
                  { id: 0, nome: "oficina-g3" },
                  { id: 1, nome: "resgate" },
                  { id: 2, nome: "aline-barros" },
                ],
                musicas: [
                  { id: 0, idBanda: 0, nome: "a ele" },
                  { id: 1, idBanda: 1, nome: "todo som" },
                  { id: 2, idBanda: 2, nome: "Ressuscita-me" },
                  { id: 3, idBanda: 2, nome: "Santidade" },
                  { id: 4, idBanda: 2, nome: "Consagração" },
                  { id: 5, idBanda: 2, nome: "corpo-e-familia" },
                  { id: 6, idBanda: 2, nome: "Casa do Pai" },
                  { id: 7, idBanda: 2, nome: "Vitória no Deserto" },
                  { id: 8, idBanda: 2, nome: "Ao único" },
                  { id: 9, idBanda: 2, nome: "Poder Pra Salvar" },
                  { id: 10, idBanda: 2, nome: "Aclame Ao Senhor" },
                  { id: 11, idBanda: 2, nome: "Águas do Trono" },
                  { id: 12, idBanda: 2, nome: "Caminho de Milagres" },
                  { id: 14, idBanda: 0, nome: "O Tempo" },
                  { id: 15, idBanda: 0, nome: "Meu Universo" },
                ],
                art: "",
                artista: "",
                mus: "",
                musica: "",
              };
            },
            computed: {
              filteredItems() {
                return this.musicas.filter((e) => e.idBanda === this.art);
              },
            },
            methods: {
              getOption(e) {
                const t = e.target.options.selectedIndex;
                this.artista = e.target.options[t].text;
              },
              getLetras() {
                this.artista &&
                  this.mus &&
                  this.$http
                    .get(
                      `apikey=${this.key}&art=${this.artista}&mus=${this.mus}`
                    )
                    .then((e) => {
                      this.musica = e.data.mus[0]["text"];
                    })
                    .catch((e) => {
                      console.log(e);
                    });
              },
            },
            watch: {
              mus() {
                this.getLetras();
              },
              art() {
                this.getLetras();
              },
            },
            mounted() {
              this.getLetras();
            },
          },
          d = u,
          c = n(1001),
          l = (0, c.Z)(d, i, s, !1, null, "17cea4c8", null),
          m = l.exports,
          f = { name: "LetrasMusicas", components: { Letras: m } },
          p = f,
          v = (0, c.Z)(p, r, o, !1, null, null, null),
          h = v.exports,
          g = n(2631);
        a["default"].use(g.ZP);
        const b = [],
          y = new g.ZP({ mode: "history", base: "/", routes: b });
        var _ = y,
          w = n(3822);
        a["default"].use(w.ZP);
        var B = new w.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          O = n(6681),
          x = n(9425),
          P = n(4161);
        a["default"].use({
          install(e) {
            (e.prototype.$http = P.Z.create({
              baseURL: "https://api.vagalume.com.br/search.php?",
            })),
              e.prototype.$http.interceptors.request.use((e) => e);
          },
        });
        n(7024);
        a["default"].use(O.XG7),
          a["default"].use(x.A7),
          (a["default"].config.productionTip = !1),
          new a["default"]({ router: _, store: B, render: (e) => e(h) }).$mount(
            "#app"
          );
      },
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var o = (t[a] = { exports: {} });
    return e[a](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, a, r, o) {
        if (!a) {
          var i = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (a = e[c][0]), (r = e[c][1]), (o = e[c][2]);
            for (var s = !0, u = 0; u < a.length; u++)
              (!1 & o || i >= o) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](a[u]);
              })
                ? a.splice(u--, 1)
                : ((s = !1), o < i && (i = o));
            if (s) {
              e.splice(c--, 1);
              var d = r();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        o = o || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
        e[c] = [a, r, o];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var e = { 143: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var r,
            o,
            i = a[0],
            s = a[1],
            u = a[2],
            d = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (r in s) n.o(s, r) && (n.m[r] = s[r]);
            if (u) var c = u(n);
          }
          for (t && t(a); d < i.length; d++)
            (o = i[d]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(c);
        },
        a = (self["webpackChunkmichel"] = self["webpackChunkmichel"] || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var a = n.O(void 0, [998], function () {
    return n(4468);
  });
  a = n.O(a);
})();
//# sourceMappingURL=app.7e805210.js.map
