/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery)
}(this, function(t, p) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), e.forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var e = "transitionend";

    function n(t) {
        var e = this,
            n = !1;
        return p(this).one(m.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || m.triggerTransitionEnd(e)
        }, t), this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = p(t).css("transition-duration"),
                n = p(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            p(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (p(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = p.fn[o],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        u = "alert",
        f = "fade",
        d = "show",
        g = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                p.removeData(this._element, r), this._element = null
            }, t._getRootElement = function(t) {
                var e = m.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = p(t).closest("." + u)[0]), n
            }, t._triggerCloseEvent = function(t) {
                var e = p.Event(h.CLOSE);
                return p(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (p(e).removeClass(d), p(e).hasClass(f)) {
                    var t = m.getTransitionDurationFromElement(e);
                    p(e).one(m.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                p(t).detach().trigger(h.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(r);
                    e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function() {
        return p.fn[o] = c, g._jQueryInterface
    };
    var _ = "button",
        v = "bs.button",
        y = "." + v,
        E = ".data-api",
        b = p.fn[_],
        w = "active",
        C = "btn",
        T = "focus",
        S = '[data-toggle^="button"]',
        D = '[data-toggle="buttons"]',
        I = 'input:not([type="hidden"])',
        A = ".active",
        O = ".btn",
        N = {
            CLICK_DATA_API: "click" + y + E,
            FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E
        },
        k = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = p(this._element).closest(D)[0];
                if (n) {
                    var i = this._element.querySelector(I);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(w)) t = !1;
                            else {
                                var o = n.querySelector(A);
                                o && p(o).removeClass(w)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(w), p(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && p(this._element).toggleClass(w)
            }, t.dispose = function() {
                p.removeData(this._element, v), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = p(this).data(v);
                    t || (t = new n(this), p(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), n
        }();
    p(document).on(N.CLICK_DATA_API, S, function(t) {
        t.preventDefault();
        var e = t.target;
        p(e).hasClass(C) || (e = p(e).closest(O)), k._jQueryInterface.call(p(e), "toggle")
    }).on(N.FOCUS_BLUR_DATA_API, S, function(t) {
        var e = p(t.target).closest(O)[0];
        p(e).toggleClass(T, /^focus(in)?$/.test(t.type))
    }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function() {
        return p.fn[_] = b, k._jQueryInterface
    };
    var L = "carousel",
        x = "bs.carousel",
        P = "." + x,
        H = ".data-api",
        j = p.fn[L],
        R = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        F = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        M = "next",
        W = "prev",
        U = "left",
        B = "right",
        q = {
            SLIDE: "slide" + P,
            SLID: "slid" + P,
            KEYDOWN: "keydown" + P,
            MOUSEENTER: "mouseenter" + P,
            MOUSELEAVE: "mouseleave" + P,
            TOUCHSTART: "touchstart" + P,
            TOUCHMOVE: "touchmove" + P,
            TOUCHEND: "touchend" + P,
            POINTERDOWN: "pointerdown" + P,
            POINTERUP: "pointerup" + P,
            DRAG_START: "dragstart" + P,
            LOAD_DATA_API: "load" + P + H,
            CLICK_DATA_API: "click" + P + H
        },
        K = "carousel",
        Q = "active",
        V = "slide",
        Y = "carousel-item-right",
        z = "carousel-item-left",
        X = "carousel-item-next",
        G = "carousel-item-prev",
        $ = "pointer-event",
        J = ".active",
        Z = ".active.carousel-item",
        tt = ".carousel-item",
        et = ".carousel-item img",
        nt = ".carousel-item-next, .carousel-item-prev",
        it = ".carousel-indicators",
        ot = "[data-slide], [data-slide-to]",
        rt = '[data-ride="carousel"]',
        st = {
            TOUCH: "touch",
            PEN: "pen"
        },
        at = function() {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(M)
            }, t.nextWhenVisible = function() {
                !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(W)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(Z);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) p(this._element).one(q.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? M : W;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                p(this._element).off(P), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, R, t), m.typeCheckConfig(L, t, F), t
            }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var e = function(t) {
                            n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                                return n.cycle(t)
                            }, 500 + n._config.interval))
                        };
                    p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t) {
                        return e(t)
                    }), p(this._element).on(q.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add($)) : (p(this._element).on(q.TOUCHSTART, function(t) {
                        return e(t)
                    }), p(this._element).on(q.TOUCHMOVE, function(t) {
                        var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                    }), p(this._element).on(q.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === M,
                    i = t === W,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === W ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(Z)),
                    o = p.Event(q.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return p(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
                    p(e).removeClass(Q);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && p(n).addClass(Q)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(Z),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = t === M ? (n = z, i = X, U) : (n = Y, i = G, B), l && p(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = p.Event(q.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (p(this._element).hasClass(V)) {
                        p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;
                        var d = m.getTransitionDurationFromElement(s);
                        p(s).one(m.TRANSITION_END, function() {
                            p(l).removeClass(n + " " + i).addClass(Q), p(s).removeClass(Q + " " + i + " " + n), r._isSliding = !1, setTimeout(function() {
                                return p(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else p(s).removeClass(Q), p(l).addClass(Q), this._isSliding = !1, p(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = p(this).data(x),
                        e = l({}, R, p(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), p(this).data(x, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = m.getSelectorFromElement(this);
                if (e) {
                    var n = p(e)[0];
                    if (n && p(n).hasClass(K)) {
                        var i = l({}, p(n).data(), p(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(x).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return R
                }
            }]), r
        }();
    p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
            var i = p(t[e]);
            at._jQueryInterface.call(i, i.data())
        }
    }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function() {
        return p.fn[L] = j, at._jQueryInterface
    };
    var lt = "collapse",
        ct = "bs.collapse",
        ht = "." + ct,
        ut = p.fn[lt],
        ft = {
            toggle: !0,
            parent: ""
        },
        dt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        pt = {
            SHOW: "show" + ht,
            SHOWN: "shown" + ht,
            HIDE: "hide" + ht,
            HIDDEN: "hidden" + ht,
            CLICK_DATA_API: "click" + ht + ".data-api"
        },
        mt = "show",
        gt = "collapse",
        _t = "collapsing",
        vt = "collapsed",
        yt = "width",
        Et = "height",
        bt = ".show, .collapsing",
        wt = '[data-toggle="collapse"]',
        Ct = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                p(this._element).hasClass(mt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t) {
                        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt)
                    })).length && (t = null), !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) {
                    var i = p.Event(pt.SHOW);
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"), e || p(t).data(ct, null));
                        var o = this._getDimension();
                        p(this._element).removeClass(gt).addClass(_t), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() {
                            p(n._element).removeClass(_t).addClass(gt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(pt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && p(this._element).hasClass(mt)) {
                    var e = p.Event(pt.HIDE);
                    if (p(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = m.getSelectorFromElement(r);
                                if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() {
                            t.setTransitioning(!1), p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, ft, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, dt), t
            }, t._getDimension = function() {
                return p(this._element).hasClass(yt) ? yt : Et
            }, t._getParent = function() {
                var t, n = this;
                m.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return p(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = p(t).hasClass(mt);
                e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) {
                var e = m.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(ct),
                        n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ct, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }]), a
        }();
    p(document).on(pt.CLICK_DATA_API, wt, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = p(this),
            e = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        p(i).each(function() {
            var t = p(this),
                e = t.data(ct) ? "toggle" : n.data();
            Ct._jQueryInterface.call(t, e)
        })
    }), p.fn[lt] = Ct._jQueryInterface, p.fn[lt].Constructor = Ct, p.fn[lt].noConflict = function() {
        return p.fn[lt] = ut, Ct._jQueryInterface
    };
    for (var Tt = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
        if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
            Dt = 1;
            break
        }
    var At = Tt && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then(function() {
                e = !1, t()
            }))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout(function() {
                e = !1, t()
            }, Dt))
        }
    };

    function Ot(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function Nt(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function kt(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function Lt(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Nt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t))
    }
    var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
        Pt = Tt && /MSIE 10/.test(navigator.userAgent);

    function Ht(t) {
        return 11 === t ? xt : 10 === t ? Pt : xt || Pt
    }

    function jt(t) {
        if (!t) return document.documentElement;
        for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Rt(t) {
        return null !== t.parentNode ? Rt(t.parentNode) : t
    }

    function Ft(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && jt(s.firstElementChild) !== s ? jt(l) : l;
        var c = Rt(t);
        return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host)
    }

    function Mt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" !== n && "HTML" !== n) return t[e];
        var i = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || i)[e]
    }

    function Wt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function Ut(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function Bt(t) {
        var e = t.body,
            n = t.documentElement,
            i = Ht(10) && getComputedStyle(n);
        return {
            height: Ut("Height", e, n, i),
            width: Ut("Width", e, n, i)
        }
    }
    var qt = function() {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t
            }
        }(),
        Kt = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        Qt = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function Vt(t) {
        return Qt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Yt(t) {
        var e = {};
        try {
            if (Ht(10)) {
                e = t.getBoundingClientRect();
                var n = Mt(t, "top"),
                    i = Mt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.right - o.left,
            a = r.height || t.clientHeight || o.bottom - o.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var h = Nt(t);
            l -= Wt(h, "x"), c -= Wt(h, "y"), o.width -= l, o.height -= c
        }
        return Vt(o)
    }

    function zt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Ht(10),
            o = "HTML" === e.nodeName,
            r = Yt(t),
            s = Yt(e),
            a = Lt(t),
            l = Nt(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var u = Vt({
            top: r.top - s.top - c,
            left: r.left - s.left - h,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0, u.marginLeft = 0, !i && o) {
            var f = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            u.top -= c - f, u.bottom -= c - f, u.left -= h - d, u.right -= h - d, u.marginTop = f, u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Mt(e, "top"),
                o = Mt(e, "left"),
                r = n ? -1 : 1;
            return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
        }(u, e)), u
    }

    function Xt(t) {
        if (!t || !t.parentElement || Ht()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === Nt(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function Gt(t, e, n, i) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            s = o ? Xt(t) : Ft(t, e);
        if ("viewport" === i) r = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = zt(t, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : Mt(n),
                a = e ? 0 : Mt(n, "left");
            return Vt({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: o,
                height: r
            })
        }(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = zt(a, s, o);
            if ("HTML" !== a.nodeName || function t(e) {
                    var n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === Nt(e, "position")) return !0;
                    var i = kt(e);
                    return !!i && t(i)
                }(s)) r = l;
            else {
                var c = Bt(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                r.top += l.top - l.marginTop, r.bottom = h + l.top, r.left += l.left - l.marginLeft, r.right = u + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r
    }

    function $t(t, e, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = Gt(i, n, r, o),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return Qt({
                    key: t
                }, a[t], {
                    area: (e = a[t], e.width * e.height)
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            h = 0 < c.length ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }

    function Jt(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return zt(n, i ? Xt(e) : Ft(e, n), i)
    }

    function Zt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function te(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function ee(t, e, n) {
        n = n.split("-")[0];
        var i = Zt(t),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[te(a)], o
    }

    function ne(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function ie(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function(t) {
                return t[e] === n
            });
            var i = ne(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", e))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && Ot(e) && (n.offsets.popper = Vt(n.offsets.popper), n.offsets.reference = Vt(n.offsets.reference), n = e(n, t))
        }), n
    }

    function oe(t, n) {
        return t.some(function(t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }

    function re(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r
        }
        return null
    }

    function se(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function ae(t, e, n, i) {
        n.updateBound = i, se(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = Lt(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName,
                s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }), r || t(Lt(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function le() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, se(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function ce(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function he(n, i) {
        Object.keys(i).forEach(function(t) {
            var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"), n.style[t] = i[t] + e
        })
    }
    var ue = Tt && /Firefox/i.test(navigator.userAgent);

    function fe(t, e, n) {
        var i = ne(t, function(t) {
                return t.name === e
            }),
            o = !!i && t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pe = de.slice(3);

    function me(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = pe.indexOf(t),
            i = pe.slice(n + 1).concat(pe.slice(0, n));
        return e ? i.reverse() : i
    }
    var ge = "flip",
        _e = "clockwise",
        ve = "counterclockwise";

    function ye(t, o, r, e) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            i = n.indexOf(ne(n, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width",
                i = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return t;
                    if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    var a = void 0;
                    switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                    }
                    return Vt(a)[e] / 100 * r
                }(t, n, o, r)
            })
        })).forEach(function(n, i) {
            n.forEach(function(t, e) {
                ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1))
            })
        }), s
    }
    var Ee = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = {
                                    start: Kt({}, l, r[l]),
                                    end: Kt({}, l, r[l] + r[c] - s[c])
                                };
                            t.offsets.popper = Qt({}, s, h[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ce(+n) ? [+n, 0] : ye(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, i) {
                        var e = i.boundariesElement || jt(t.instance.popper);
                        t.instance.reference === e && (e = jt(e));
                        var n = re("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = "";
                        var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                        var c = i.priority,
                            h = t.offsets.popper,
                            u = {
                                primary: function(t) {
                                    var e = h[t];
                                    return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])), Kt({}, t, e)
                                },
                                secondary: function(t) {
                                    var e = "right" === t ? "left" : "top",
                                        n = h[e];
                                    return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), Kt({}, e, n)
                                }
                            };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            h = Qt({}, h, u[e](t))
                        }), t.offsets.popper = h, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Zt(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]), t.offsets.popper = Vt(t.offsets.popper);
                        var m = a[u] + a[c] / 2 - p / 2,
                            g = Nt(t.instance.popper),
                            _ = parseFloat(g["margin" + h], 10),
                            v = parseFloat(g["border" + h + "Width"], 10),
                            y = m - t.offsets.popper[u] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (Kt(n = {}, u, Math.round(y)), Kt(n, f, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(p, m) {
                        if (oe(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var g = Gt(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = te(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (m.behavior) {
                            case ge:
                                E = [_, v];
                                break;
                            case _e:
                                E = me(_);
                                break;
                            case ve:
                                E = me(_, !0);
                                break;
                            default:
                                E = m.behavior
                        }
                        return E.forEach(function(t, e) {
                            if (_ !== t || E.length === e + 1) return p;
                            _ = p.placement.split("-")[0], v = te(_);
                            var n, i = p.offsets.popper,
                                o = p.offsets.reference,
                                r = Math.floor,
                                s = "left" === _ && r(i.right) > r(o.left) || "right" === _ && r(i.left) < r(o.right) || "top" === _ && r(i.bottom) > r(o.top) || "bottom" === _ && r(i.top) < r(o.bottom),
                                a = r(i.left) < r(g.left),
                                l = r(i.right) > r(g.right),
                                c = r(i.top) < r(g.top),
                                h = r(i.bottom) > r(g.bottom),
                                u = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h,
                                f = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (f && "start" === y && a || f && "end" === y && l || !f && "start" === y && c || !f && "end" === y && h);
                            (s || u || d) && (p.flipped = !0, (s || u) && (_ = E[e + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = Qt({}, p.offsets.popper, ee(p.instance.popper, p.offsets.reference, p.placement)), p = ie(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = te(e), t.offsets.popper = Vt(o), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = ne(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = ne(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, c, h, u, f, d, p, m, g, _, v, y, E = void 0 !== r ? r : e.gpuAcceleration,
                            b = jt(t.instance.popper),
                            w = Yt(b),
                            C = {
                                position: o.position
                            },
                            T = (s = t, a = window.devicePixelRatio < 2 || !ue, l = s.offsets, c = l.popper, h = l.reference, u = Math.round, f = Math.floor, d = function(t) {
                                return t
                            }, p = u(h.width), m = u(c.width), g = -1 !== ["left", "right"].indexOf(s.placement), _ = -1 !== s.placement.indexOf("-"), y = a ? u : d, {
                                left: (v = a ? g || _ || p % 2 == m % 2 ? u : f : d)(p % 2 == 1 && m % 2 == 1 && !_ && a ? c.left - 1 : c.left),
                                top: y(c.top),
                                bottom: y(c.bottom),
                                right: v(c.right)
                            }),
                            S = "bottom" === n ? "top" : "bottom",
                            D = "right" === i ? "left" : "right",
                            I = re("transform"),
                            A = void 0,
                            O = void 0;
                        if (O = "bottom" === S ? "HTML" === b.nodeName ? -b.clientHeight + T.bottom : -w.height + T.bottom : T.top, A = "right" === D ? "HTML" === b.nodeName ? -b.clientWidth + T.right : -w.width + T.right : T.left, E && I) C[I] = "translate3d(" + A + "px, " + O + "px, 0)", C[S] = 0, C[D] = 0, C.willChange = "transform";
                        else {
                            var N = "bottom" === S ? -1 : 1,
                                k = "right" === D ? -1 : 1;
                            C[S] = O * N, C[D] = A * k, C.willChange = S + ", " + D
                        }
                        var L = {
                            "x-placement": t.placement
                        };
                        return t.attributes = Qt({}, L, t.attributes), t.styles = Qt({}, C, t.styles), t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return he(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, o) {
                        var r = Jt(o, e, t, n.positionFixed),
                            s = $t(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), he(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        be = function() {
            function r(t, e) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, r), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = At(this.update.bind(this)), this.options = Qt({}, r.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                    n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return Qt({
                        name: t
                    }, n.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return qt(r, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = Jt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = $t(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return le.call(this)
                }
            }]), r
        }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee;
    var we = "dropdown",
        Ce = "bs.dropdown",
        Te = "." + Ce,
        Se = ".data-api",
        De = p.fn[we],
        Ie = new RegExp("38|40|27"),
        Ae = {
            HIDE: "hide" + Te,
            HIDDEN: "hidden" + Te,
            SHOW: "show" + Te,
            SHOWN: "shown" + Te,
            CLICK: "click" + Te,
            CLICK_DATA_API: "click" + Te + Se,
            KEYDOWN_DATA_API: "keydown" + Te + Se,
            KEYUP_DATA_API: "keyup" + Te + Se
        },
        Oe = "disabled",
        Ne = "show",
        ke = "dropup",
        Le = "dropright",
        xe = "dropleft",
        Pe = "dropdown-menu-right",
        He = "position-static",
        je = '[data-toggle="dropdown"]',
        Re = ".dropdown form",
        Fe = ".dropdown-menu",
        Me = ".navbar-nav",
        We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ue = "top-start",
        Be = "top-end",
        qe = "bottom-start",
        Ke = "bottom-end",
        Qe = "right-start",
        Ve = "left-start",
        Ye = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        ze = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Xe = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
                    var t = c._getParentFromElement(this._element),
                        e = p(this._menu).hasClass(Ne);
                    if (c._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = p.Event(Ae.SHOW, n);
                        if (p(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t).addClass(He), this._popper = new be(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ne), p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n))
                        }
                    }
                }
            }, t.show = function() {
                if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = p.Event(Ae.SHOW, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t)))
                }
            }, t.hide = function() {
                if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = p.Event(Ae.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t)))
                }
            }, t.dispose = function() {
                p.removeData(this._element, Ce), p(this._element).off(Te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                p(this._element).on(Ae.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, p(this._element).data(), t), m.typeCheckConfig(we, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Fe))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = p(this._element.parentNode),
                    e = qe;
                return t.hasClass(ke) ? (e = Ue, p(this._menu).hasClass(Pe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(xe) ? e = Ve : p(this._menu).hasClass(Pe) && (e = Ke), e
            }, t._detectNavbar = function() {
                return 0 < p(this._element).closest(".navbar").length
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = p(this).data(Ce);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), p(this).data(Ce, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = p(e[n]).data(Ce),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) {
                                var l = p.Event(Ae.HIDE, s);
                                p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ne), p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = m.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
                    var e = c._getParentFromElement(this),
                        n = p(e).hasClass(Ne);
                    if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(We));
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(je);
                            p(r).trigger("focus")
                        }
                        p(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ye
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ze
                }
            }]), c
        }();
    p(document).on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus).on(Ae.CLICK_DATA_API, je, function(t) {
        t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle")
    }).on(Ae.CLICK_DATA_API, Re, function(t) {
        t.stopPropagation()
    }), p.fn[we] = Xe._jQueryInterface, p.fn[we].Constructor = Xe, p.fn[we].noConflict = function() {
        return p.fn[we] = De, Xe._jQueryInterface
    };
    var Ge = "modal",
        $e = "bs.modal",
        Je = "." + $e,
        Ze = p.fn[Ge],
        tn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        en = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        nn = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            FOCUSIN: "focusin" + Je,
            RESIZE: "resize" + Je,
            CLICK_DISMISS: "click.dismiss" + Je,
            KEYDOWN_DISMISS: "keydown.dismiss" + Je,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Je,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je,
            CLICK_DATA_API: "click" + Je + ".data-api"
        },
        on = "modal-dialog-scrollable",
        rn = "modal-scrollbar-measure",
        sn = "modal-backdrop",
        an = "modal-open",
        ln = "fade",
        cn = "show",
        hn = ".modal-dialog",
        un = ".modal-body",
        fn = '[data-toggle="modal"]',
        dn = '[data-dismiss="modal"]',
        pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mn = ".sticky-top",
        gn = function() {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(hn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass(ln) && (this._isTransitioning = !0);
                    var n = p.Event(nn.SHOW, {
                        relatedTarget: t
                    });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, dn, function(t) {
                        return e.hide(t)
                    }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
                        p(e._element).one(nn.MOUSEUP_DISMISS, function(t) {
                            p(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event(nn.HIDE);
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass(ln);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(cn), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i) {
                            var o = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return p(t).off(Je)
                }), p(document).off(nn.FOCUSIN), p.removeData(this._element, $e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, tn, t), m.typeCheckConfig(Ge, t, en), t
            }, t._showElement = function(t) {
                var e = this,
                    n = p(this._element).hasClass(ln);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(on) ? this._dialog.querySelector(un).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(cn), this._config.focus && this._enforceFocus();
                var i = p.Event(nn.SHOWN, {
                        relatedTarget: t
                    }),
                    o = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, p(e._element).trigger(i)
                    };
                if (n) {
                    var r = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? p(window).on(nn.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : p(window).off(nn.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    p(document.body).removeClass(an), t._resetAdjustments(), t._resetScrollbar(), p(t._element).trigger(nn.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = p(this._element).hasClass(ln) ? ln : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = sn, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(cn), !t) return;
                    if (!n) return void t();
                    var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass(cn);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (p(this._element).hasClass(ln)) {
                        var r = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(pn)),
                        e = [].slice.call(document.querySelectorAll(mn));
                    p(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = p(e).css("padding-right");
                        p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), p(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = p(e).css("margin-right");
                        p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass(an)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(pn));
                p(t).each(function(t, e) {
                    var n = p(e).data("padding-right");
                    p(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + mn));
                p(e).each(function(t, e) {
                    var n = p(e).data("margin-right");
                    "undefined" != typeof n && p(e).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = rn, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = p(this).data($e),
                        e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this, e), p(this).data($e, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return tn
                }
            }]), o
        }();
    p(document).on(nn.CLICK_DATA_API, fn, function(t) {
        var e, n = this,
            i = m.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = p(e).one(nn.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(nn.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        gn._jQueryInterface.call(p(e), o, this)
    }), p.fn[Ge] = gn._jQueryInterface, p.fn[Ge].Constructor = gn, p.fn[Ge].noConflict = function() {
        return p.fn[Ge] = Ze, gn._jQueryInterface
    };
    var _n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        vn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
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
            img: ["src", "alt", "title", "width", "height"],
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
            ul: []
        },
        yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        En = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function bn(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
                var n = l[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === _n.indexOf(n) || Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En));
                        for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, r) || n.removeAttribute(t.nodeName)
                })
            }, o = 0, r = l.length; o < r; o++) i(o);
        return n.body.innerHTML
    }
    var wn = "tooltip",
        Cn = "bs.tooltip",
        Tn = "." + Cn,
        Sn = p.fn[wn],
        Dn = "bs-tooltip",
        In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
        An = ["sanitize", "whiteList", "sanitizeFn"],
        On = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Nn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        kn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: vn
        },
        Ln = "show",
        xn = "out",
        Pn = {
            HIDE: "hide" + Tn,
            HIDDEN: "hidden" + Tn,
            SHOW: "show" + Tn,
            SHOWN: "shown" + Tn,
            INSERTED: "inserted" + Tn,
            CLICK: "click" + Tn,
            FOCUSIN: "focusin" + Tn,
            FOCUSOUT: "focusout" + Tn,
            MOUSEENTER: "mouseenter" + Tn,
            MOUSELEAVE: "mouseleave" + Tn
        },
        Hn = "fade",
        jn = "show",
        Rn = ".tooltip-inner",
        Fn = ".arrow",
        Mn = "hover",
        Wn = "focus",
        Un = "click",
        Bn = "manual",
        qn = function() {
            function i(t, e) {
                if ("undefined" == typeof be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = p(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(t);
                    var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = m.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Hn);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Fn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), p(o).addClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, p(e.element).trigger(e.constructor.Event.SHOWN), t === xn && e._leave(null, e)
                    };
                    if (p(this.tip).hasClass(Hn)) {
                        var h = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = p.Event(this.constructor.Event.HIDE),
                    o = function() {
                        e._hoverState !== Ln && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), p(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (p(n).removeClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Un] = !1, this._activeTrigger[Wn] = !1, this._activeTrigger[Mn] = !1, p(this.tip).hasClass(Hn)) {
                        var r = m.getTransitionDurationFromElement(n);
                        p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                p(this.getTipElement()).addClass(Dn + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()), p(t).removeClass(Hn + " " + jn)
            }, t.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = bn(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text())
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
            }, t._getAttachment = function(t) {
                return Nn[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== Bn) {
                        var e = t === Mn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Mn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                    i.element && i.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0), p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln ? e._hoverState = Ln : (clearTimeout(e._timeout), e._hoverState = Ln, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === Ln && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = xn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === xn && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                var e = p(this.element).data();
                return Object.keys(e).forEach(function(t) {
                    -1 !== An.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(wn, t, this.constructor.DefaultType), t.sanitize && (t.template = bn(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = p(this.getTipElement()),
                    e = t.attr("class").match(In);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (p(t).removeClass(Hn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(Cn),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Cn, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return kn
                }
            }, {
                key: "NAME",
                get: function() {
                    return wn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Cn
                }
            }, {
                key: "Event",
                get: function() {
                    return Pn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Tn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return On
                }
            }]), i
        }();
    p.fn[wn] = qn._jQueryInterface, p.fn[wn].Constructor = qn, p.fn[wn].noConflict = function() {
        return p.fn[wn] = Sn, qn._jQueryInterface
    };
    var Kn = "popover",
        Qn = "bs.popover",
        Vn = "." + Qn,
        Yn = p.fn[Kn],
        zn = "bs-popover",
        Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
        Gn = l({}, qn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        $n = l({}, qn.DefaultType, {
            content: "(string|element|function)"
        }),
        Jn = "fade",
        Zn = "show",
        ti = ".popover-header",
        ei = ".popover-body",
        ni = {
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn,
            INSERTED: "inserted" + Vn,
            CLICK: "click" + Vn,
            FOCUSIN: "focusin" + Vn,
            FOCUSOUT: "focusout" + Vn,
            MOUSEENTER: "mouseenter" + Vn,
            MOUSELEAVE: "mouseleave" + Vn
        },
        ii = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, o.addAttachmentClass = function(t) {
                p(this.getTipElement()).addClass(zn + "-" + t)
            }, o.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, o.setContent = function() {
                var t = p(this.getTipElement());
                this.setElementContent(t.find(ti), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ei), e), t.removeClass(Jn + " " + Zn)
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function() {
                var t = p(this.getTipElement()),
                    e = t.attr("class").match(Xn);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this).data(Qn),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Qn, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Gn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Kn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Qn
                }
            }, {
                key: "Event",
                get: function() {
                    return ni
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Vn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return $n
                }
            }]), i
        }(qn);
    p.fn[Kn] = ii._jQueryInterface, p.fn[Kn].Constructor = ii, p.fn[Kn].noConflict = function() {
        return p.fn[Kn] = Yn, ii._jQueryInterface
    };
    var oi = "scrollspy",
        ri = "bs.scrollspy",
        si = "." + ri,
        ai = p.fn[oi],
        li = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ci = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        hi = {
            ACTIVATE: "activate" + si,
            SCROLL: "scroll" + si,
            LOAD_DATA_API: "load" + si + ".data-api"
        },
        ui = "dropdown-item",
        fi = "active",
        di = '[data-spy="scroll"]',
        pi = ".nav, .list-group",
        mi = ".nav-link",
        gi = ".nav-item",
        _i = ".list-group-item",
        vi = ".dropdown",
        yi = ".dropdown-item",
        Ei = ".dropdown-toggle",
        bi = "offset",
        wi = "position",
        Ci = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(hi.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? bi : wi,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = m.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [p(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                p.removeData(this._element, ri), p(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, li, "object" == typeof t && t ? t : {})).target) {
                    var e = p(t.target).attr("id");
                    e || (e = m.getUID(oi), p(t.target).attr("id", e)), t.target = "#" + e
                }
                return m.typeCheckConfig(oi, t, ci), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    n = p([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), p(this._scrollElement).trigger(hi.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                    return t.classList.contains(fi)
                }).forEach(function(t) {
                    return t.classList.remove(fi)
                })
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = p(this).data(ri);
                    if (t || (t = new n(this, "object" == typeof e && e), p(this).data(ri, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return li
                }
            }]), n
        }();
    p(window).on(hi.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(di)), e = t.length; e--;) {
            var n = p(t[e]);
            Ci._jQueryInterface.call(n, n.data())
        }
    }), p.fn[oi] = Ci._jQueryInterface, p.fn[oi].Constructor = Ci, p.fn[oi].noConflict = function() {
        return p.fn[oi] = ai, Ci._jQueryInterface
    };
    var Ti = "bs.tab",
        Si = "." + Ti,
        Di = p.fn.tab,
        Ii = {
            HIDE: "hide" + Si,
            HIDDEN: "hidden" + Si,
            SHOW: "show" + Si,
            SHOWN: "shown" + Si,
            CLICK_DATA_API: "click" + Si + ".data-api"
        },
        Ai = "dropdown-menu",
        Oi = "active",
        Ni = "disabled",
        ki = "fade",
        Li = "show",
        xi = ".dropdown",
        Pi = ".nav, .list-group",
        Hi = ".active",
        ji = "> li > .active",
        Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Fi = ".dropdown-toggle",
        Mi = "> .dropdown-menu .active",
        Wi = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Ni))) {
                    var t, i, e = p(this._element).closest(Pi)[0],
                        o = m.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
                        i = (i = p.makeArray(p(e).find(r)))[i.length - 1]
                    }
                    var s = p.Event(Ii.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = p.Event(Ii.SHOW, {
                            relatedTarget: i
                        });
                    if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function() {
                            var t = p.Event(Ii.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = p.Event(Ii.SHOWN, {
                                    relatedTarget: i
                                });
                            p(i).trigger(t), p(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                p.removeData(this._element, Ti), this._element = null
            }, t._activate = function(t, e, n) {
                var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Hi) : p(e).find(ji))[0],
                    r = n && o && p(o).hasClass(ki),
                    s = function() {
                        return i._transitionComplete(t, o, n)
                    };
                if (o && r) {
                    var a = m.getTransitionDurationFromElement(o);
                    p(o).removeClass(Li).one(m.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    p(e).removeClass(Oi);
                    var i = p(e.parentNode).find(Mi)[0];
                    i && p(i).removeClass(Oi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (p(t).addClass(Oi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(ki) && t.classList.add(Li), t.parentNode && p(t.parentNode).hasClass(Ai)) {
                    var o = p(t).closest(xi)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Fi));
                        p(r).addClass(Oi)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(Ti);
                    if (e || (e = new i(this), t.data(Ti, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), i
        }();
    p(document).on(Ii.CLICK_DATA_API, Ri, function(t) {
        t.preventDefault(), Wi._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Wi._jQueryInterface, p.fn.tab.Constructor = Wi, p.fn.tab.noConflict = function() {
        return p.fn.tab = Di, Wi._jQueryInterface
    };
    var Ui = "toast",
        Bi = "bs.toast",
        qi = "." + Bi,
        Ki = p.fn[Ui],
        Qi = {
            CLICK_DISMISS: "click.dismiss" + qi,
            HIDE: "hide" + qi,
            HIDDEN: "hidden" + qi,
            SHOW: "show" + qi,
            SHOWN: "shown" + qi
        },
        Vi = "fade",
        Yi = "hide",
        zi = "show",
        Xi = "showing",
        Gi = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        $i = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Ji = '[data-dismiss="toast"]',
        Zi = function() {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this;
                p(this._element).trigger(Qi.SHOW), this._config.animation && this._element.classList.add(Vi);
                var e = function() {
                    t._element.classList.remove(Xi), t._element.classList.add(zi), p(t._element).trigger(Qi.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove(Yi), this._element.classList.add(Xi), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, t.hide = function(t) {
                var e = this;
                this._element.classList.contains(zi) && (p(this._element).trigger(Qi.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                    e._close()
                }, this._config.delay))
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zi) && this._element.classList.remove(zi), p(this._element).off(Qi.CLICK_DISMISS), p.removeData(this._element, Bi), this._element = null, this._config = null
            }, t._getConfig = function(t) {
                return t = l({}, $i, p(this._element).data(), "object" == typeof t && t ? t : {}), m.typeCheckConfig(Ui, t, this.constructor.DefaultType), t
            }, t._setListeners = function() {
                var t = this;
                p(this._element).on(Qi.CLICK_DISMISS, Ji, function() {
                    return t.hide(!0)
                })
            }, t._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN)
                    };
                if (this._element.classList.remove(zi), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = p(this),
                        e = t.data(Bi);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(Bi, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Gi
                }
            }, {
                key: "Default",
                get: function() {
                    return $i
                }
            }]), i
        }();
    p.fn[Ui] = Zi._jQueryInterface, p.fn[Ui].Constructor = Zi, p.fn[Ui].noConflict = function() {
            return p.fn[Ui] = Ki, Zi._jQueryInterface
        },
        function() {
            if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = p.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Ct, t.Dropdown = Xe, t.Modal = gn, t.Popover = ii, t.Scrollspy = Ci, t.Tab = Wi, t.Toast = Zi, t.Tooltip = qn, Object.defineProperty(t, "__esModule", {
            value: !0
        })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);

/* ============================================================
 * retina-replace.min.js v1.0
 * http://github.com/leonsmith/retina-replace-js
 * ============================================================
 * Author: Leon Smith
 * Twitter: @nullUK
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
(function(a) {
    var e = function(d, c) {
        this.options = c;
        var b = a(d),
            g = b.is("img"),
            f = g ? b.attr("src") : b.backgroundImageUrl(),
            f = this.options.generateUrl(b, f);
        a("<img/>").attr("src", f).load(function() {
            g ? b.attr("src", a(this).attr("src")) : (b.backgroundImageUrl(a(this).attr("src")), b.backgroundSize(a(this)[0].width, a(this)[0].height));
            b.attr("data-retina", "complete")
        })
    };
    e.prototype = {
        constructor: e
    };
    a.fn.retinaReplace = function(d) {
        var c;
        c = void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio;
        return 1 >= c ? this : this.each(function() {
            var b =
                a(this),
                c = b.data("retinaReplace"),
                f = a.extend({}, a.fn.retinaReplace.defaults, b.data(), "object" == typeof d && d);
            c || b.data("retinaReplace", c = new e(this, f));
            if ("string" == typeof d) c[d]()
        })
    };
    a.fn.retinaReplace.defaults = {
        suffix: "_2x",
        generateUrl: function(a, c) {
            var b = c.lastIndexOf("."),
                e = c.substr(b + 1);
            return c.substr(0, b) + this.suffix + "." + e
        }
    };
    a.fn.retinaReplace.Constructor = e;
    a.fn.backgroundImageUrl = function(d) {
        return d ? this.each(function() {
            a(this).css("background-image", 'url("' + d + '")')
        }) : a(this).css("background-image").replace(/url\(|\)|"|'/g,
            "")
    };
    a.fn.backgroundSize = function(d, c) {
        var b = Math.floor(d / 2) + "px " + Math.floor(c / 2) + "px";
        a(this).css("background-size", b);
        a(this).css("-webkit-background-size", b)
    };
    a(function() {
        a("[data-retina='true']").retinaReplace()
    })
})(window.jQuery);

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

/**
RESIZESENSOR.JS
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
! function() {
    var e = function(t, i) {
        function s() {
            this.q = [], this.add = function(e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function() {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
            }
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new s, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d, r, l = e.resizeSensor.childNodes[0],
                c = l.childNodes[0],
                h = e.resizeSensor.childNodes[1],
                a = (h.childNodes[0], function() {
                    c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, d = e.offsetWidth, r = e.offsetHeight
                });
            a();
            var f = function() {
                    e.resizedAttached && e.resizedAttached.call()
                },
                u = function(e, t, i) {
                    e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
                },
                p = function() {
                    e.offsetWidth == d && e.offsetHeight == r || f(), a()
                };
            u(l, "scroll", p), u(h, "scroll", p)
        }
        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (r)
            for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
        else n(t, i);
        this.detach = function() {
            if (r)
                for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
            else e.detach(t)
        }
    };
    e.detach = function(e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}();
//# sourceMappingURL=maps/ResizeSensor.min.js.map

/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

! function(i) {
    i.fn.theiaStickySidebar = function(t) {
        function e(t, e) {
            return !0 === t.initialized || !(i("body").width() < t.minWidth) && (o(t, e), !0)
        }

        function o(t, e) {
            t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function() {
                function e() {
                    n.fixedScrollTop = 0, n.sidebar.css({
                        "min-height": "1px"
                    }), n.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function() {
                        e = Math.max(e, i(this).height())
                    }), e
                }
                var n = {};
                if (n.sidebar = i(this), n.options = t || {}, n.container = i(n.options.containerSelector), 0 == n.container.length && (n.container = n.sidebar.parent()), n.sidebar.parents(":not(.theia-exception)").css("-webkit-transform", "none"), n.sidebar.css({
                        position: n.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), n.stickySidebar = n.sidebar.find(".theiaStickySidebar"), 0 == n.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    n.sidebar.find("script").filter(function(i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), n.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(n.sidebar.children()), n.sidebar.append(n.stickySidebar)
                }
                n.marginBottom = parseInt(n.sidebar.css("margin-bottom")), n.paddingTop = parseInt(n.sidebar.css("padding-top")), n.paddingBottom = parseInt(n.sidebar.css("padding-bottom"));
                var d = n.stickySidebar.offset().top,
                    r = n.stickySidebar.outerHeight();
                n.stickySidebar.css("padding-top", 1), n.stickySidebar.css("padding-bottom", 1), d -= n.stickySidebar.offset().top, r = n.stickySidebar.outerHeight() - r - d, 0 == d ? (n.stickySidebar.css("padding-top", 0), n.stickySidebarPaddingTop = 0) : n.stickySidebarPaddingTop = 1, 0 == r ? (n.stickySidebar.css("padding-bottom", 0), n.stickySidebarPaddingBottom = 0) : n.stickySidebarPaddingBottom = 1, n.previousScrollTop = null, n.fixedScrollTop = 0, e(), n.onScroll = function(n) {
                    if (n.stickySidebar.is(":visible"))
                        if (i("body").width() < n.options.minWidth) e();
                        else if (n.options.disableOnResponsiveLayouts && n.sidebar.outerWidth("none" == n.sidebar.css("float")) + 50 > n.container.width()) e();
                    else {
                        var s = i(document).scrollTop(),
                            d = "static";
                        if (s >= n.sidebar.offset().top + (n.paddingTop - n.options.additionalMarginTop)) {
                            var r, c = n.paddingTop + t.additionalMarginTop,
                                p = n.paddingBottom + n.marginBottom + t.additionalMarginBottom,
                                b = n.sidebar.offset().top,
                                l = n.sidebar.offset().top + o(n.container),
                                f = 0 + t.additionalMarginTop;
                            r = n.stickySidebar.outerHeight() + c + p < i(window).height() ? f + n.stickySidebar.outerHeight() : i(window).height() - n.marginBottom - n.paddingBottom - t.additionalMarginBottom;
                            var h = b - s + n.paddingTop,
                                g = l - s - n.paddingBottom - n.marginBottom,
                                u = n.stickySidebar.offset().top - s,
                                S = n.previousScrollTop - s;
                            "fixed" == n.stickySidebar.css("position") && "modern" == n.options.sidebarBehavior && (u += S), "stick-to-top" == n.options.sidebarBehavior && (u = t.additionalMarginTop), "stick-to-bottom" == n.options.sidebarBehavior && (u = r - n.stickySidebar.outerHeight()), u = S > 0 ? Math.min(u, f) : Math.max(u, r - n.stickySidebar.outerHeight()), u = Math.max(u, h), u = Math.min(u, g - n.stickySidebar.outerHeight());
                            var m = n.container.height() == n.stickySidebar.outerHeight();
                            d = (m || u != f) && (m || u != r - n.stickySidebar.outerHeight()) ? s + u - n.sidebar.offset().top - n.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var y = i(document).scrollLeft();
                            n.stickySidebar.css({
                                position: "fixed",
                                width: a(n.stickySidebar) + "px",
                                transform: "translateY(" + u + "px)",
                                left: n.sidebar.offset().left + parseInt(n.sidebar.css("padding-left")) - y + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var k = {};
                            "absolute" != n.stickySidebar.css("position") && (k.position = "absolute", k.transform = "translateY(" + (s + u - n.sidebar.offset().top - n.stickySidebarPaddingTop - n.stickySidebarPaddingBottom) + "px)", k.top = "0px"), k.width = a(n.stickySidebar) + "px", k.left = "", n.stickySidebar.css(k)
                        } else "static" == d && e();
                        "static" != d && 1 == n.options.updateSidebarHeight && n.sidebar.css({
                            "min-height": n.stickySidebar.outerHeight() + n.stickySidebar.offset().top - n.sidebar.offset().top + n.paddingBottom
                        }), n.previousScrollTop = s
                    }
                }, n.onScroll(n), i(document).on("scroll." + n.options.namespace, function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(n)), i(window).on("resize." + n.options.namespace, function(i) {
                    return function() {
                        i.stickySidebar.css({
                            position: "static"
                        }), i.onScroll(i)
                    }
                }(n)), "undefined" != typeof ResizeSensor && new ResizeSensor(n.stickySidebar[0], function(i) {
                    return function() {
                        i.onScroll(i)
                    }
                }(n))
            })
        }

        function a(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {}
            return void 0 === t && (t = i.width()), t
        }
        var n = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(n, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0,
            function(t, o) {
                e(t, o) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function(t, o) {
                    return function(a) {
                        e(t, o) && i(this).unbind(a)
                    }
                }(t, o)), i(window).on("resize." + t.namespace, function(t, o) {
                    return function(a) {
                        e(t, o) && i(this).unbind(a)
                    }
                }(t, o)))
            }(t, this), this
    }
}(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map
// Generated by CoffeeScript 1.12.3

/**
@license Sticky-kit v1.1.4 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */
(function() {
    var S, T, W;
    S = window.jQuery, W = S(window), T = S(document), S.fn.stick_in_parent = function(t) {
        var _, i, x, o, e, P, s, V, F, C, z, I, A, M;
        for (null == t && (t = {}), A = t.sticky_class, P = t.inner_scrolling, I = t.recalc_every, z = t.parent, F = t.offset_top, V = t.spacer, x = t.bottoming, M = W.height(), _ = T.height(), null == F && (F = 0), null == z && (z = void 0), null == P && (P = !0), null == A && (A = "is_stuck"), null == x && (x = !0), C = function(t) {
                var i, o;
                return window.getComputedStyle ? (t[0], i = window.getComputedStyle(t[0]), o = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (o += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), o) : t.outerWidth(!0)
            }, o = function(r, n, l, a, c, p, d, u) {
                var f, t, g, h, k, y, m, v, i, b, w, e;
                if (!r.data("sticky_kit")) {
                    if (r.data("sticky_kit", !0), k = _, m = r.parent(), null != z && (m = m.closest(z)), !m.length) throw "failed to find stick parent";
                    if (f = g = !1, (w = null != V ? V && r.closest(V) : S("<div />")) && w.css("position", r.css("position")), (v = function() {
                            var t, i, o;
                            if (!u) return M = W.height(), _ = T.height(), k = _, t = parseInt(m.css("border-top-width"), 10), i = parseInt(m.css("padding-top"), 10), n = parseInt(m.css("padding-bottom"), 10), l = m.offset().top + t + i, a = m.height(), g && (f = g = !1, null == V && (r.insertAfter(w), w.detach()), r.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(A), o = !0), c = r.offset().top - (parseInt(r.css("margin-top"), 10) || 0) - F, p = r.outerHeight(!0), d = r.css("float"), w && w.css({
                                width: C(r),
                                height: p,
                                display: r.css("display"),
                                "vertical-align": r.css("vertical-align"),
                                float: d
                            }), o ? e() : void 0
                        })(), p !== a) return h = void 0, y = F, b = I, e = function() {
                        var t, i, o, e, s;
                        if (!u) return o = !1, null != b && (b -= 1) <= 0 && (b = I, v(), o = !0), o || _ === k || (v(), o = !0), e = W.scrollTop(), null != h && (i = e - h), h = e, g ? (x && (s = a + l < e + p + y, f && !s && (f = !1, r.css({
                            position: "fixed",
                            bottom: "",
                            top: y
                        }).trigger("sticky_kit:unbottom"))), e < c && (g = !1, y = F, null == V && ("left" !== d && "right" !== d || r.insertAfter(w), w.detach()), t = {
                            position: "",
                            width: "",
                            top: ""
                        }, r.css(t).removeClass(A).trigger("sticky_kit:unstick")), P && M < p + F && (f || (y -= i, y = Math.max(M - p, y), y = Math.min(F, y), g && r.css({
                            top: y + "px"
                        })))) : c < e && (g = !0, (t = {
                            position: "fixed",
                            top: y
                        }).width = "border-box" === r.css("box-sizing") ? r.outerWidth() + "px" : r.width() + "px", r.css(t).addClass(A), null == V && (r.after(w), "left" !== d && "right" !== d || w.append(r)), r.trigger("sticky_kit:stick")), g && x && (null == s && (s = a + l < e + p + y), !f && s) ? (f = !0, "static" === m.css("position") && m.css({
                            position: "relative"
                        }), r.css({
                            position: "absolute",
                            bottom: n,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")) : void 0
                    }, i = function() {
                        return v(), e()
                    }, t = function() {
                        if (u = !0, W.off("touchmove", e), W.off("scroll", e), W.off("resize", i), S(document.body).off("sticky_kit:recalc", i), r.off("sticky_kit:detach", t), r.removeData("sticky_kit"), r.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), m.position("position", ""), g) return null == V && ("left" !== d && "right" !== d || r.insertAfter(w), w.remove()), r.removeClass(A)
                    }, W.on("touchmove", e), W.on("scroll", e), W.on("resize", i), S(document.body).on("sticky_kit:recalc", i), r.on("sticky_kit:detach", t), setTimeout(e, 0)
                }
            }, e = 0, s = this.length; e < s; e++) i = this[e], o(S(i));
        return this
    }
}).call(this);


/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f) {
    function A(a, b, d) {
        var c = a[0],
            g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
            e = d == _update ? {
                checked: c[k],
                disabled: c[n],
                indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
            } : c[g];
        if (/^(ch|di|in)/.test(d) && !e) x(a, g);
        else if (/^(un|en|de)/.test(d) && e) q(a, g);
        else if (d == _update)
            for (var f in e) e[f] ? x(a, f, !0) : q(a, f, !0);
        else if (!b || "toggle" == d) {
            if (!b) a[_callback]("ifClicked");
            e ? c[_type] !== r && q(a, g) : x(a, g)
        }
    }

    function x(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            u = b == _indeterminate,
            v = b == n,
            s = u ? _determinate : e ? y : "enabled",
            F = l(a, s + t(c[_type])),
            B = l(a, b + t(c[_type]));
        if (!0 !== c[b]) {
            if (!d && b == k && c[_type] == r && c.name) {
                var w = a.closest("form"),
                    p = 'input[name="' + c.name + '"]',
                    p = w.length ? w.find(p) : f(p);
                p.each(function() {
                    this !== c && f(this).data(m) && q(f(this), b)
                })
            }
            u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));
            D(a, e, b, d)
        }
        c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");
        g[_add](B || l(a, b) || "");
        g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
        g[_remove](F || l(a, s) || "")
    }

    function q(a, b, d) {
        var c = a[0],
            g = a.parent(),
            e = b == k,
            f = b == _indeterminate,
            m = b == n,
            s = f ? _determinate : e ? y : "enabled",
            q = l(a, s + t(c[_type])),
            r = l(a, b + t(c[_type]));
        if (!1 !== c[b]) {
            if (f || !d || "force" == d) c[b] = !1;
            D(a, e, s, d)
        }!c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");
        g[_remove](r || l(a, b) || "");
        g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");
        g[_add](q || l(a, s) || "")
    }

    function E(a, b) {
        if (a.data(m)) {
            a.parent().html(a.attr("style", a.data(m).s || ""));
            if (b) a[_callback](b);
            a.off(".i").unwrap();
            f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i")
        }
    }

    function l(a, b, f) {
        if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")]
    }

    function t(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function D(a, b, f, c) {
        if (!c) {
            if (b) a[_callback]("ifToggled");
            a[_callback]("ifChanged")[_callback]("if" + t(f))
        }
    }
    var m = "iCheck",
        C = m + "-helper",
        r = "radio",
        k = "checked",
        y = "un" + k,
        n = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    f.fn[m] = function(a, b) {
        var d = 'input[type="checkbox"], input[type="' + r + '"]',
            c = f(),
            g = function(a) {
                a.each(function() {
                    var a = f(this);
                    c = a.is(d) ? c.add(a) : c.add(a.find(d))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function() {
            var c =
                f(this);
            "destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);
            f.isFunction(b) && b()
        });
        if ("object" != typeof a && a) return this;
        var e = f.extend({
                checkedClass: k,
                disabledClass: n,
                indeterminateClass: _indeterminate,
                labelHover: !0
            }, a),
            l = e.handle,
            v = e.hoverClass || "hover",
            s = e.focusClass || "focus",
            t = e.activeClass || "active",
            B = !!e.labelHover,
            w = e.labelHoverClass || "hover",
            p = ("" + e.increaseArea).replace("%", "") | 0;
        if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]'; - 50 > p && (p = -50);
        g(this);
        return c.each(function() {
            var a = f(this);
            E(a);
            var c = this,
                b = c.id,
                g = -p + "%",
                d = 100 + 2 * p + "%",
                d = {
                    position: "absolute",
                    top: g,
                    left: g,
                    display: "block",
                    width: d,
                    height: d,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                },
                g = _mobile ? {
                    position: "absolute",
                    visibility: "hidden"
                } : p ? d : {
                    position: "absolute",
                    opacity: 0
                },
                l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
                z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
                u = !!e.aria,
                y = m + "-" + Math.random().toString(36).substr(2, 6),
                h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");
            u && z.each(function() {
                h +=
                    'aria-labelledby="';
                this.id ? h += this.id : (this.id = y, h += y);
                h += '"'
            });
            h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);
            d = f('<ins class="' + C + '"/>').css(d).appendTo(h);
            a.data(m, {
                o: e,
                s: a.attr("style")
            }).css(g);
            e.inheritClass && h[_add](c.className || "");
            e.inheritID && b && h.attr("id", m + "-" + b);
            "static" == h.css("position") && h.css("position", "relative");
            A(a, !0, _update);
            if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch, function(b) {
                var d = b[_type],
                    e = f(this);
                if (!c[n]) {
                    if (d == _click) {
                        if (f(b.target).is("a")) return;
                        A(a, !1, !0)
                    } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));
                    if (_mobile) b.stopPropagation();
                    else return !1
                }
            });
            a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(b) {
                var d = b[_type];
                b = b.keyCode;
                if (d == _click) return !1;
                if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1;
                if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);
                else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s)
            });
            d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(b) {
                var d =
                    b[_type],
                    e = /wn|up/.test(d) ? t : v;
                if (!c[n]) {
                    if (d == _click) A(a, !1, !0);
                    else {
                        if (/wn|er|in/.test(d)) h[_add](e);
                        else h[_remove](e + " " + t);
                        if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w)
                    }
                    if (_mobile) b.stopPropagation();
                    else return !1
                }
            })
        })
    }
})(window.jQuery || window.Zepto);
/*
 * jQuery mmenu v6.1.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.jquery_mmenu_all_js = factory(root.jQuery);
    }
}(this, function(jQuery) {

    ! function(e) {
        function t() {
            e[n].glbl || (r = {
                $wndw: e(window),
                $docu: e(document),
                $html: e("html"),
                $body: e("body")
            }, s = {}, a = {}, o = {}, e.each([s, a, o], function(e, t) {
                t.add = function(e) {
                    e = e.split(" ");
                    for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n])
                }
            }), s.mm = function(e) {
                return "mm-" + e
            }, s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), s.umm = function(e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, a.mm = function(e) {
                return "mm-" + e
            }, a.add("parent child"), o.mm = function(e) {
                return e + ".mm"
            }, o.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), e[n]._c = s, e[n]._d = a, e[n]._e = o, e[n].glbl = r)
        }
        var n = "mmenu",
            i = "6.1.8";
        if (!(e[n] && e[n].version > i)) {
            e[n] = function(e, t, n) {
                return this.$menu = e, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this
            }, e[n].version = i, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
                extensions: [],
                initMenu: function() {},
                initPanels: function() {},
                navbar: {
                    add: !0,
                    title: "Menu",
                    titleLink: "parent"
                },
                onClick: {
                    setSelected: !0
                },
                slidingSubmenus: !0
            }, e[n].configuration = {
                classNames: {
                    divider: "Divider",
                    inset: "Inset",
                    nolistview: "NoListview",
                    nopanel: "NoPanel",
                    panel: "Panel",
                    selected: "Selected",
                    spacer: "Spacer",
                    vertical: "Vertical"
                },
                clone: !1,
                openingInterval: 25,
                panelNodetype: "ul, ol, div",
                transitionDuration: 400
            }, e[n].prototype = {
                getInstance: function() {
                    return this
                },
                initPanels: function(e) {
                    this._initPanels(e)
                },
                openPanel: function(t, i) {
                    if (this.trigger("openPanel:before", t), t && t.length && (t.is("." + s.panel) || (t = t.closest("." + s.panel)), t.is("." + s.panel))) {
                        var o = this;
                        if ("boolean" != typeof i && (i = !0), t.hasClass(s.vertical)) t.add(t.parents("." + s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened), this.openPanel(t.parents("." + s.panel).not("." + s.vertical).first()), this.trigger("openPanel:start", t), this.trigger("openPanel:finish", t);
                        else {
                            if (t.hasClass(s.opened)) return;
                            var r = this.$pnls.children("." + s.panel),
                                l = r.filter("." + s.opened);
                            if (!e[n].support.csstransitions) return l.addClass(s.hidden).removeClass(s.opened), t.removeClass(s.hidden).addClass(s.opened), this.trigger("openPanel:start", t), void this.trigger("openPanel:finish", t);
                            r.not(t).removeClass(s.subopened);
                            for (var d = t.data(a.parent); d;) d = d.closest("." + s.panel), d.is("." + s.vertical) || d.addClass(s.subopened), d = d.data(a.parent);
                            r.removeClass(s.highest).not(l).not(t).addClass(s.hidden), t.removeClass(s.hidden), this.openPanelStart = function() {
                                l.removeClass(s.opened), t.addClass(s.opened), t.hasClass(s.subopened) ? (l.addClass(s.highest), t.removeClass(s.subopened)) : (l.addClass(s.subopened), t.addClass(s.highest)), this.trigger("openPanel:start", t)
                            }, this.openPanelFinish = function() {
                                l.removeClass(s.highest).addClass(s.hidden), t.removeClass(s.highest), this.trigger("openPanel:finish", t)
                            }, i && !t.hasClass(s.noanimation) ? setTimeout(function() {
                                o.__transitionend(t, function() {
                                    o.openPanelFinish.call(o)
                                }, o.conf.transitionDuration), o.openPanelStart.call(o)
                            }, o.conf.openingInterval) : (this.openPanelStart.call(this), this.openPanelFinish.call(this))
                        }
                        this.trigger("openPanel:after", t)
                    }
                },
                closePanel: function(e) {
                    this.trigger("closePanel:before", e);
                    var t = e.parent();
                    t.hasClass(s.vertical) && (t.removeClass(s.opened), this.trigger("closePanel", e)), this.trigger("closePanel:after", e)
                },
                closeAllPanels: function(e) {
                    this.trigger("closeAllPanels:before"), this.$pnls.find("." + s.listview).children().removeClass(s.selected).filter("." + s.vertical).removeClass(s.opened);
                    var t = this.$pnls.children("." + s.panel),
                        n = e && e.length ? e : t.first();
                    this.$pnls.children("." + s.panel).not(n).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden), this.openPanel(n, !1), this.trigger("closeAllPanels:after")
                },
                togglePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(s.vertical) && this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e)
                },
                setSelected: function(e) {
                    this.trigger("setSelected:before", e), this.$menu.find("." + s.listview).children("." + s.selected).removeClass(s.selected), e.addClass(s.selected), this.trigger("setSelected:after", e)
                },
                bind: function(e, t) {
                    this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
                },
                trigger: function() {
                    var e = this,
                        t = Array.prototype.slice.call(arguments),
                        n = t.shift();
                    if (this.cbck[n])
                        for (var i = 0, s = this.cbck[n].length; i < s; i++) this.cbck[n][i].apply(e, t)
                },
                matchMedia: function(e, t, n) {
                    var i = {
                        yes: t,
                        no: n
                    };
                    this.mtch[e] = this.mtch[e] || [], this.mtch[e].push(i)
                },
                _initAddons: function() {
                    this.trigger("initAddons:before");
                    var t;
                    for (t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function() {};
                    for (t in e[n].addons) e[n].addons[t].setup.call(this);
                    this.trigger("initAddons:after")
                },
                _initExtensions: function() {
                    this.trigger("initExtensions:before");
                    var e = this;
                    this.opts.extensions.constructor === Array && (this.opts.extensions = {
                        all: this.opts.extensions
                    });
                    for (var t in this.opts.extensions) this.opts.extensions[t] = this.opts.extensions[t].length ? "mm-" + this.opts.extensions[t].join(" mm-") : "", this.opts.extensions[t] && ! function(t) {
                        e.matchMedia(t, function() {
                            this.$menu.addClass(this.opts.extensions[t])
                        }, function() {
                            this.$menu.removeClass(this.opts.extensions[t])
                        })
                    }(t);
                    this.trigger("initExtensions:after")
                },
                _initMenu: function() {
                    this.trigger("initMenu:before");
                    this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                        e(this).attr("id", s.mm(e(this).attr("id")))
                    })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = e('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
                    var t = [s.menu];
                    this.opts.slidingSubmenus || t.push(s.vertical), this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper), this.trigger("initMenu:after")
                },
                _initPanels: function(t) {
                    this.trigger("initPanels:before", t), t = t || this.$pnls.children(this.conf.panelNodetype);
                    var n = e(),
                        i = this,
                        a = function(t) {
                            t.filter(this.conf.panelNodetype).each(function() {
                                var t = i._initPanel(e(this));
                                if (t) {
                                    i._initNavbar(t), i._initListview(t), n = n.add(t);
                                    var o = t.children("." + s.listview).children("li").children(i.conf.panelNodeType).add(t.children("." + i.conf.classNames.panel));
                                    o.length && a.call(i, o)
                                }
                            })
                        };
                    a.call(this, t), this.opts.initPanels.call(this, n), this.trigger("initPanels:after", n)
                },
                _initPanel: function(e) {
                    this.trigger("initPanel:before", e);
                    if (e.hasClass(s.panel)) return e;
                    if (this.__refactorClass(e, this.conf.classNames.panel, "panel"), this.__refactorClass(e, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(e, this.conf.classNames.vertical, "vertical"), this.__refactorClass(e, this.conf.classNames.inset, "inset"), e.filter("." + s.inset).addClass(s.nopanel), e.hasClass(s.nopanel)) return !1;
                    var t = e.hasClass(s.vertical) || !this.opts.slidingSubmenus;
                    e.removeClass(s.vertical);
                    var n = e.attr("id") || this.__getUniqueId();
                    e.removeAttr("id"), e.is("ul, ol") && (e.wrap("<div />"), e = e.parent()), e.addClass(s.panel + " " + s.hidden).attr("id", n);
                    var i = e.parent("li");
                    return t ? e.add(i).addClass(s.vertical) : e.appendTo(this.$pnls), i.length && (i.data(a.child, e), e.data(a.parent, i)), this.trigger("initPanel:after", e), e
                },
                _initNavbar: function(t) {
                    if (this.trigger("initNavbar:before", t), !t.children("." + s.navbar).length) {
                        var i = t.data(a.parent),
                            o = e('<div class="' + s.navbar + '" />'),
                            r = e[n].i18n(this.opts.navbar.title),
                            l = "";
                        if (i && i.length) {
                            if (i.hasClass(s.vertical)) return;
                            if (i.parent().is("." + s.listview)) var d = i.children("a, span").not("." + s.next);
                            else var d = i.closest("." + s.panel).find('a[href="#' + t.attr("id") + '"]');
                            d = d.first(), i = d.closest("." + s.panel);
                            var c = i.attr("id");
                            switch (r = d.text(), this.opts.navbar.titleLink) {
                                case "anchor":
                                    l = d.attr("href");
                                    break;
                                case "parent":
                                    l = "#" + c
                            }
                            o.append('<a class="' + s.btn + " " + s.prev + '" href="#' + c + '" />')
                        } else if (!this.opts.navbar.title) return;
                        this.opts.navbar.add && t.addClass(s.hasnavbar), o.append('<a class="' + s.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + r + "</a>").prependTo(t), this.trigger("initNavbar:after", t)
                    }
                },
                _initListview: function(t) {
                    this.trigger("initListview:before", t);
                    var n = this.__childAddBack(t, "ul, ol");
                    this.__refactorClass(n, this.conf.classNames.nolistview, "nolistview"), n.filter("." + this.conf.classNames.inset).addClass(s.nolistview);
                    var i = n.not("." + s.nolistview).addClass(s.listview).children();
                    this.__refactorClass(i, this.conf.classNames.selected, "selected"), this.__refactorClass(i, this.conf.classNames.divider, "divider"), this.__refactorClass(i, this.conf.classNames.spacer, "spacer");
                    var o = t.data(a.parent);
                    if (o && o.parent().is("." + s.listview) && !o.children("." + s.next).length) {
                        var r = o.children("a, span").first(),
                            l = e('<a class="' + s.next + '" href="#' + t.attr("id") + '" />').insertBefore(r);
                        r.is("span") && l.addClass(s.fullsubopen)
                    }
                    this.trigger("initListview:after", t)
                },
                _initOpened: function() {
                    this.trigger("initOpened:before");
                    var e = this.$pnls.find("." + s.listview).children("." + s.selected).removeClass(s.selected).last().addClass(s.selected),
                        t = e.length ? e.closest("." + s.panel) : this.$pnls.children("." + s.panel).first();
                    this.openPanel(t, !1), this.trigger("initOpened:after")
                },
                _initAnchors: function() {
                    var t = this;
                    r.$body.on(o.click + "-oncanvas", "a[href]", function(i) {
                        var a = e(this),
                            o = !1,
                            r = t.$menu.find(a).length;
                        for (var l in e[n].addons)
                            if (e[n].addons[l].clickAnchor.call(t, a, r)) {
                                o = !0;
                                break
                            }
                        var d = a.attr("href");
                        if (!o && r && d.length > 1 && "#" == d.slice(0, 1)) try {
                            var c = e(d, t.$menu);
                            c.is("." + s.panel) && (o = !0, t[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](c))
                        } catch (h) {}
                        if (o && i.preventDefault(), !o && r && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                            t.__valueOrFn(t.opts.onClick.setSelected, a) && t.setSelected(e(i.target).parent());
                            var f = t.__valueOrFn(t.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
                            f && i.preventDefault(), t.__valueOrFn(t.opts.onClick.close, a, f) && t.opts.offCanvas && "function" == typeof t.close && t.close()
                        }
                    })
                },
                _initMatchMedia: function() {
                    var e = this;
                    this._fireMatchMedia(), r.$wndw.on(o.resize, function(t) {
                        e._fireMatchMedia()
                    })
                },
                _fireMatchMedia: function() {
                    for (var e in this.mtch)
                        for (var t = window.matchMedia && window.matchMedia(e).matches ? "yes" : "no", n = 0; n < this.mtch[e].length; n++) this.mtch[e][n][t].call(this)
                },
                _getOriginalMenuId: function() {
                    var e = this.$menu.attr("id");
                    return this.conf.clone && e && e.length && (e = s.umm(e)), e
                },
                __api: function() {
                    var t = this,
                        n = {};
                    return e.each(this._api, function(e) {
                        var i = this;
                        n[i] = function() {
                            var e = t[i].apply(t, arguments);
                            return "undefined" == typeof e ? n : e
                        }
                    }), n
                },
                __valueOrFn: function(e, t, n) {
                    return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
                },
                __refactorClass: function(e, t, n) {
                    return e.filter("." + t).removeClass(t).addClass(s[n])
                },
                __findAddBack: function(e, t) {
                    return e.find(t).add(e.filter(t))
                },
                __childAddBack: function(e, t) {
                    return e.children(t).add(e.filter(t))
                },
                __filterListItems: function(e) {
                    return e.not("." + s.divider).not("." + s.hidden)
                },
                __filterListItemAnchors: function(e) {
                    return this.__filterListItems(e).children("a").not("." + s.next)
                },
                __transitionend: function(e, t, n) {
                    var i = !1,
                        s = function(n) {
                            "undefined" != typeof n && n.target != e[0] || (i || (e.off(o.transitionend), e.off(o.webkitTransitionEnd), t.call(e[0])), i = !0)
                        };
                    e.on(o.transitionend, s), e.on(o.webkitTransitionEnd, s), setTimeout(s, 1.1 * n)
                },
                __getUniqueId: function() {
                    return s.mm(e[n].uniqueId++)
                }
            }, e.fn[n] = function(i, s) {
                t(), i = e.extend(!0, {}, e[n].defaults, i), s = e.extend(!0, {}, e[n].configuration, s);
                var a = e();
                return this.each(function() {
                    var t = e(this);
                    if (!t.data(n)) {
                        var o = new e[n](t, i, s);
                        o.$menu.data(n, o.__api()), a = a.add(o.$menu)
                    }
                }), a
            }, e[n].i18n = function() {
                var t = {};
                return function(n) {
                    switch (typeof n) {
                        case "object":
                            return e.extend(t, n), t;
                        case "string":
                            return t[n] || n;
                        case "undefined":
                        default:
                            return t
                    }
                }
            }(), e[n].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
                csstransitions: function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions
                }(),
                csstransforms: function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms
                }(),
                csstransforms3d: function() {
                    return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d
                }()
            };
            var s, a, o, r
        }
    }(jQuery),
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "offCanvas";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts[n]) {
                    var s = this,
                        a = this.opts[n],
                        r = this.conf[n];
                    o = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), "object" != typeof a && (a = {}), "top" != a.position && "bottom" != a.position || (a.zposition = "front"), a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a), "string" != typeof r.pageSelector && (r.pageSelector = "> " + r.pageNodetype), this.vars.opened = !1;
                    var l = [i.offcanvas];
                    "left" != a.position && l.push(i.mm(a.position)), "back" != a.zposition && l.push(i.mm(a.zposition)), e[t].support.csstransforms || l.push(i["no-csstransforms"]), e[t].support.csstransforms3d || l.push(i["no-csstransforms3d"]), this.bind("initMenu:after", function() {
                        var e = this;
                        this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu.addClass(l.join(" ")).parent("." + i.wrapper).removeClass(i.wrapper), this.$menu[r.menuInsertMethod](r.menuInsertSelector);
                        var t = window.location.hash;
                        if (t) {
                            var s = this._getOriginalMenuId();
                            s && s == t.slice(1) && setTimeout(function() {
                                e.open()
                            }, 1e3)
                        }
                    }), this.bind("initExtensions:after", function() {
                        for (var e = [i.mm("widescreen"), i.mm("iconbar")], t = 0; t < e.length; t++)
                            for (var n in this.opts.extensions)
                                if (this.opts.extensions[n].indexOf(e[t]) > -1) {
                                    ! function(t, n) {
                                        s.matchMedia(t, function() {
                                            o.$html.addClass(e[n])
                                        }, function() {
                                            o.$html.removeClass(e[n])
                                        })
                                    }(n, t);
                                    break
                                }
                    }), this.bind("open:start:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !1)
                    }), this.bind("close:finish:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    }), this.bind("initMenu:after:sr-aria", function() {
                        this.__sr_aria(this.$menu, "hidden", !0)
                    })
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), s.add("style")
            },
            clickAnchor: function(e, t) {
                var s = this;
                if (this.opts[n]) {
                    var a = this._getOriginalMenuId();
                    if (a && e.is('[href="#' + a + '"]')) {
                        if (t) return !0;
                        var r = e.closest("." + i.menu);
                        if (r.length) {
                            var l = r.data("mmenu");
                            if (l && l.close) return l.close(), s.__transitionend(r, function() {
                                s.open()
                            }, s.conf.transitionDuration), !0
                        }
                        return this.open(), !0
                    }
                    if (o.$page) return a = o.$page.first().attr("id"), a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0
                }
            }
        }, e[t].defaults[n] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }, e[t].configuration[n] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuInsertMethod: "prependTo",
            menuInsertSelector: "body"
        }, e[t].prototype.open = function() {
            if (this.trigger("open:before"), !this.vars.opened) {
                var e = this;
                this._openSetup(), setTimeout(function() {
                    e._openFinish()
                }, this.conf.openingInterval), this.trigger("open:after")
            }
        }, e[t].prototype._openSetup = function() {
            var t = this,
                r = this.opts[n];
            this.closeAllOthers(), o.$page.each(function() {
                e(this).data(s.style, e(this).attr("style") || "")
            }), o.$wndw.trigger(a.resize + "-" + n, [!0]);
            var l = [i.opened];
            r.blockUI && l.push(i.blocking), "modal" == r.blockUI && l.push(i.modal), r.moveBackground && l.push(i.background), "left" != r.position && l.push(i.mm(this.opts[n].position)), "back" != r.zposition && l.push(i.mm(this.opts[n].zposition)), o.$html.addClass(l.join(" ")), setTimeout(function() {
                t.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(i.opened)
        }, e[t].prototype._openFinish = function() {
            var e = this;
            this.__transitionend(o.$page.first(), function() {
                e.trigger("open:finish")
            }, this.conf.transitionDuration), this.trigger("open:start"), o.$html.addClass(i.opening)
        }, e[t].prototype.close = function() {
            if (this.trigger("close:before"), this.vars.opened) {
                var t = this;
                this.__transitionend(o.$page.first(), function() {
                    t.$menu.removeClass(i.opened);
                    var a = [i.opened, i.blocking, i.modal, i.background, i.mm(t.opts[n].position), i.mm(t.opts[n].zposition)];
                    o.$html.removeClass(a.join(" ")), o.$page.each(function() {
                        e(this).attr("style", e(this).data(s.style))
                    }), t.vars.opened = !1, t.trigger("close:finish")
                }, this.conf.transitionDuration), this.trigger("close:start"), o.$html.removeClass(i.opening), this.trigger("close:after")
            }
        }, e[t].prototype.closeAllOthers = function() {
            o.$body.find("." + i.menu + "." + i.offcanvas).not(this.$menu).each(function() {
                var n = e(this).data(t);
                n && n.close && n.close()
            })
        }, e[t].prototype.setPage = function(t) {
            this.trigger("setPage:before", t);
            var s = this,
                a = this.conf[n];
            t && t.length || (t = o.$body.find(a.pageSelector), a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))), t.length > 1 && a.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function() {
                e(this).attr("id", e(this).attr("id") || s.__getUniqueId())
            }), t.addClass(i.page + " " + i.slideout), o.$page = t, this.trigger("setPage:after", t)
        }, e[t].prototype["_initWindow_" + n] = function() {
            o.$wndw.off(a.keydown + "-" + n).on(a.keydown + "-" + n, function(e) {
                if (o.$html.hasClass(i.opened) && 9 == e.keyCode) return e.preventDefault(), !1
            });
            var e = 0;
            o.$wndw.off(a.resize + "-" + n).on(a.resize + "-" + n, function(t, n) {
                if (1 == o.$page.length && (n || o.$html.hasClass(i.opened))) {
                    var s = o.$wndw.height();
                    (n || s != e) && (e = s, o.$page.css("minHeight", s))
                }
            })
        }, e[t].prototype._initBlocker = function() {
            var t = this;
            this.opts[n].blockUI && (o.$blck || (o.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n).on(a.touchstart + "-" + n + " " + a.touchmove + "-" + n, function(e) {
                e.preventDefault(), e.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + n)
            }).off(a.mousedown + "-" + n).on(a.mousedown + "-" + n, function(e) {
                e.preventDefault(), o.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close())
            }))
        };
        var i, s, a, o
    }(jQuery),
    /*
     * jQuery mmenu scrollBugFix add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "scrollBugFix";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                o = e[t].glbl, e[t].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof s && (s = {
                    fix: s
                }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), s.fix && (this.bind("open:start", function() {
                    this.$pnls.children("." + i.opened).scrollTop(0)
                }), this.bind("initMenu:after", function() {
                    this["_initWindow_" + n]()
                })))
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            fix: !0
        }, e[t].prototype["_initWindow_" + n] = function() {
            var t = this;
            o.$docu.off(a.touchmove + "-" + n).on(a.touchmove + "-" + n, function(e) {
                o.$html.hasClass(i.opened) && e.preventDefault()
            });
            var s = !1;
            o.$body.off(a.touchstart + "-" + n).on(a.touchstart + "-" + n, "." + i.panels + "> ." + i.panel, function(e) {
                o.$html.hasClass(i.opened) && (s || (s = !0, 0 === e.currentTarget.scrollTop ? e.currentTarget.scrollTop = 1 : e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight && (e.currentTarget.scrollTop -= 1), s = !1))
            }).off(a.touchmove + "-" + n).on(a.touchmove + "-" + n, "." + i.panels + "> ." + i.panel, function(t) {
                o.$html.hasClass(i.opened) && e(this)[0].scrollHeight > e(this).innerHeight() && t.stopPropagation()
            }), o.$wndw.off(a.orientationchange + "-" + n).on(a.orientationchange + "-" + n, function() {
                t.$pnls.children("." + i.opened).scrollTop(0).css({
                    "-webkit-overflow-scrolling": "auto"
                }).css({
                    "-webkit-overflow-scrolling": "touch"
                })
            })
        };
        var i, s, a, o
    }(jQuery),
    /*
     * jQuery mmenu screenReader add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "screenReader";
        e[t].addons[n] = {
            setup: function() {
                var a = this,
                    r = this.opts[n],
                    l = this.conf[n];
                o = e[t].glbl, "boolean" == typeof r && (r = {
                    aria: r,
                    text: r
                }), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), r.aria && (this.bind("initAddons:after", function() {
                    this.bind("initMenu:after", function() {
                        this.trigger("initMenu:after:sr-aria")
                    }), this.bind("initNavbar:after", function() {
                        this.trigger("initNavbar:after:sr-aria", arguments[0])
                    }), this.bind("openPanel:start", function() {
                        this.trigger("openPanel:start:sr-aria", arguments[0])
                    }), this.bind("close:start", function() {
                        this.trigger("close:start:sr-aria")
                    }), this.bind("close:finish", function() {
                        this.trigger("close:finish:sr-aria")
                    }), this.bind("open:start", function() {
                        this.trigger("open:start:sr-aria")
                    }), this.bind("open:finish", function() {
                        this.trigger("open:finish:sr-aria")
                    })
                }), this.bind("updateListview", function() {
                    this.$pnls.find("." + i.listview).children().each(function() {
                        a.__sr_aria(e(this), "hidden", e(this).is("." + i.hidden))
                    })
                }), this.bind("openPanel:start", function(e) {
                    var t = this.$menu.find("." + i.panel).not(e).not(e.parents("." + i.panel)),
                        n = e.add(e.find("." + i.vertical + "." + i.opened).children("." + i.panel));
                    this.__sr_aria(t, "hidden", !0), this.__sr_aria(n, "hidden", !1)
                }), this.bind("closePanel", function(e) {
                    this.__sr_aria(e, "hidden", !0)
                }), this.bind("initPanels:after", function(t) {
                    var n = t.find("." + i.prev + ", ." + i.next).each(function() {
                        a.__sr_aria(e(this), "owns", e(this).attr("href").replace("#", ""))
                    });
                    this.__sr_aria(n, "haspopup", !0)
                }), this.bind("initNavbar:after", function(e) {
                    var t = e.children("." + i.navbar);
                    this.__sr_aria(t, "hidden", !e.hasClass(i.hasnavbar))
                }), r.text && (this.bind("initlistview:after", function(e) {
                    var t = e.find("." + i.listview).find("." + i.fullsubopen).parent().children("span");
                    this.__sr_aria(t, "hidden", !0)
                }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(e) {
                    var t = e.children("." + i.navbar),
                        n = !!t.children("." + i.prev).length;
                    this.__sr_aria(t.children("." + i.title), "hidden", n)
                }))), r.text && (this.bind("initAddons:after", function() {
                    this.bind("setPage:after", function() {
                        this.trigger("setPage:after:sr-text", arguments[0])
                    })
                }), this.bind("initNavbar:after", function(n) {
                    var s = n.children("." + i.navbar),
                        a = s.children("." + i.title).text(),
                        o = e[t].i18n(l.text.closeSubmenu);
                    a && (o += " (" + a + ")"), s.children("." + i.prev).html(this.__sr_text(o))
                }), this.bind("initListview:after", function(n) {
                    var o = n.data(s.parent);
                    if (o && o.length) {
                        var r = o.children("." + i.next),
                            d = r.nextAll("span, a").first().text(),
                            c = e[t].i18n(l.text[r.parent().is("." + i.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                        d && (c += " (" + d + ")"), r.html(a.__sr_text(c))
                    }
                }))
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("sronly")
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            aria: !0,
            text: !0
        }, e[t].configuration[n] = {
            text: {
                closeMenu: "Close menu",
                closeSubmenu: "Close submenu",
                openSubmenu: "Open submenu",
                toggleSubmenu: "Toggle submenu"
            }
        }, e[t].prototype.__sr_aria = function(e, t, n) {
            e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n)
        }, e[t].prototype.__sr_text = function(e) {
            return '<span class="' + i.sronly + '">' + e + "</span>"
        };
        var i, s, a, o
    }(jQuery),
    /*
     * jQuery mmenu autoHeight add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "autoHeight";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                if (o = e[t].glbl, "boolean" == typeof s && s && (s = {
                        height: "auto"
                    }), "string" == typeof s && (s = {
                        height: s
                    }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), "auto" == s.height || "highest" == s.height) {
                    this.bind("initMenu:after", function() {
                        this.$menu.addClass(i.autoheight)
                    });
                    var a = function(t) {
                        if (!this.opts.offCanvas || this.vars.opened) {
                            var n = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                                a = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                                o = 0;
                            this.$menu.addClass(i.measureheight), "auto" == s.height ? (t = t || this.$pnls.children("." + i.opened), t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical)), t.length || (t = this.$pnls.children("." + i.panel)), o = t.first().outerHeight()) : "highest" == s.height && this.$pnls.children().each(function() {
                                var t = e(this);
                                t.is("." + i.vertical) && (t = t.parents("." + i.panel).not("." + i.vertical).first()), o = Math.max(o, t.outerHeight())
                            }), this.$menu.height(o + n + a).removeClass(i.measureheight)
                        }
                    };
                    this.opts.offCanvas && this.bind("open:start", a), "highest" == s.height && this.bind("initPanels:after", a), "auto" == s.height && (this.bind("updateListview", a), this.bind("openPanel:start", a), this.bind("closePanel", a))
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("autoheight measureheight"), a.add("resize")
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            height: "default"
        };
        var i, s, a, o
    }(jQuery),
    /*
     * jQuery mmenu counters add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "counters";
        e[t].addons[n] = {
            setup: function() {
                var a = this,
                    r = this.opts[n];
                this.conf[n];
                if (o = e[t].glbl, "boolean" == typeof r && (r = {
                        add: r,
                        update: r
                    }), "object" != typeof r && (r = {}), r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r), this.bind("initListview:after", function(t) {
                        this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
                    }), r.add && this.bind("initListview:after", function(t) {
                        var n;
                        switch (r.addTo) {
                            case "panels":
                                n = t;
                                break;
                            default:
                                n = t.filter(r.addTo)
                        }
                        n.each(function() {
                            var t = e(this).data(s.parent);
                            t && (t.children("em." + i.counter).length || t.prepend(e('<em class="' + i.counter + '" />')))
                        })
                    }), r.update) {
                    var l = function(t) {
                        t = t || this.$pnls.children("." + i.panel), t.each(function() {
                            var t = e(this),
                                n = t.data(s.parent);
                            if (n) {
                                var o = n.children("em." + i.counter);
                                o.length && (t = t.children("." + i.listview), t.length && o.html(a.__filterListItems(t.children()).length))
                            }
                        })
                    };
                    this.bind("initListview:after", l), this.bind("updateListview", l)
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("counter search noresultsmsg")
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels",
            count: !1
        }, e[t].configuration.classNames[n] = {
            counter: "Counter"
        };
        var i, s, a, o
    }(jQuery),
    /*

     * jQuery mmenu fixedElements add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "fixedElements";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var s = (this.opts[n], this.conf[n]);
                    o = e[t].glbl;
                    var a = function(t) {
                        var a = this.conf.classNames[n].fixed,
                            r = t.find("." + a);
                        this.__refactorClass(r, a, "slideout"), r[s.elemInsertMethod](s.elemInsertSelector);
                        var l = this.conf.classNames[n].sticky,
                            d = t.find("." + l);
                        this.__refactorClass(d, l, "sticky"), d = t.find("." + i.sticky), d.length && (this.bind("open:before", function() {
                            var t = o.$wndw.scrollTop() + s.sticky.offset;
                            d.each(function() {
                                e(this).css("top", parseInt(e(this).css("top"), 10) + t)
                            })
                        }), this.bind("close:finish", function() {
                            d.css("top", "")
                        }))
                    };
                    this.bind("setPage:after", a)
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("sticky")
            },
            clickAnchor: function(e, t) {}
        }, e[t].configuration[n] = {
            sticky: {
                offset: 0
            },
            elemInsertMethod: "appendTo",
            elemInsertSelector: "body"
        }, e[t].configuration.classNames[n] = {
            fixed: "Fixed",
            sticky: "Sticky"
        };
        var i, s, a, o
    }(jQuery),
    /*
     
     * jQuery mmenu lazySubmenus add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "lazySubmenus";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                o = e[t].glbl, "boolean" == typeof s && (s = {
                    load: s
                }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), s.load && (this.bind("initMenu:after", function() {
                    this.$pnls.find("li").children(this.conf.panelNodetype).not("." + i.inset).not("." + i.nolistview).not("." + i.nopanel).addClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel)
                }), this.bind("initPanels:before", function(e) {
                    e = e || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(e, "." + i.lazysubmenu).not("." + i.lazysubmenu + " ." + i.lazysubmenu).removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel)
                }), this.bind("initOpened:before", function() {
                    var e = this.$pnls.find("." + this.conf.classNames.selected).parents("." + i.lazysubmenu);
                    e.length && (e.removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel), this.initPanels(e.last()))
                }), this.bind("openPanel:before", function(e) {
                    var t = this.__findAddBack(e, "." + i.lazysubmenu).not("." + i.lazysubmenu + " ." + i.lazysubmenu);
                    t.length && this.initPanels(t)
                }))
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("lazysubmenu"), s.add("lazysubmenu")
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            load: !1
        }, e[t].configuration[n] = {};
        var i, s, a, o
    }(jQuery),
    /*
     * jQuery mmenu navbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "navbars";
        e[t].addons[n] = {
            setup: function() {
                var s = this,
                    a = this.opts[n],
                    r = this.conf[n];
                if (o = e[t].glbl, "undefined" != typeof a) {
                    a instanceof Array || (a = [a]);
                    var l = {},
                        d = {};
                    a.length && (e.each(a, function(o) {
                        var c = a[o];
                        "boolean" == typeof c && c && (c = {}), "object" != typeof c && (c = {}), "undefined" == typeof c.content && (c.content = ["prev", "title"]), c.content instanceof Array || (c.content = [c.content]), c = e.extend(!0, {}, s.opts.navbar, c);
                        var h = e('<div class="' + i.navbar + '" />'),
                            f = c.height;
                        "number" != typeof f && (f = 1), f = Math.min(4, Math.max(1, f)), h.addClass(i.navbar + "-size-" + f);
                        var u = c.position;
                        "bottom" != u && (u = "top"), l[u] || (l[u] = 0), l[u] += f, d[u] || (d[u] = e('<div class="' + i.navbars + "-" + u + '" />')), d[u].append(h);
                        for (var p = 0, v = 0, m = c.content.length; v < m; v++) {
                            var b = e[t].addons[n][c.content[v]] || !1;
                            b ? p += b.call(s, h, c, r) : (b = c.content[v], b instanceof e || (b = e(c.content[v])), h.append(b))
                        }
                        p += Math.ceil(h.children().not("." + i.btn).length / f), p > 1 && h.addClass(i.navbar + "-content-" + p), h.children("." + i.btn).length && h.addClass(i.hasbtns)
                    }), this.bind("initMenu:after", function() {
                        for (var e in l) this.$menu.addClass(i.hasnavbar + "-" + e + "-" + l[e]), this.$menu["bottom" == e ? "append" : "prepend"](d[e])
                    }))
                }
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("navbars close hasbtns")
            },
            clickAnchor: function(e, t) {}
        }, e[t].configuration[n] = {
            breadcrumbSeparator: "/"
        }, e[t].configuration.classNames[n] = {};
        var i, s, a, o
    }(jQuery),
    /*

     * jQuery mmenu RTL add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "rtl";
        e[t].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                o = e[t].glbl, "object" != typeof s && (s = {
                    use: s
                }), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), "boolean" != typeof s.use && (s.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()), s.use && this.bind("initMenu:after", function() {
                    this.$menu.addClass(i.rtl)
                })
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("rtl")
            },
            clickAnchor: function(e, t) {}
        }, e[t].defaults[n] = {
            use: "detect"
        };
        var i, s, a, o
    }(jQuery),
    /*

     * jQuery mmenu toggles add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    function(e) {
        var t = "mmenu",
            n = "toggles";
        e[t].addons[n] = {
            setup: function() {
                var s = this;
                this.opts[n], this.conf[n];
                o = e[t].glbl, this.bind("initListview:after", function(t) {
                    this.__refactorClass(t.find("input"), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(t.find("input"), this.conf.classNames[n].check, "check"), t.find("input." + i.toggle + ", input." + i.check).each(function() {
                        var t = e(this),
                            n = t.closest("li"),
                            a = t.hasClass(i.toggle) ? "toggle" : "check",
                            o = t.attr("id") || s.__getUniqueId();
                        n.children('label[for="' + o + '"]').length || (t.attr("id", o), n.prepend(t), e('<label for="' + o + '" class="' + i[a] + '"></label>').insertBefore(n.children("a, span").last()))
                    })
                })
            },
            add: function() {
                i = e[t]._c, s = e[t]._d, a = e[t]._e, i.add("toggle check")
            },
            clickAnchor: function(e, t) {}
        }, e[t].configuration.classNames[n] = {
            toggle: "Toggle",
            check: "Check"
        };
        var i, s, a, o
    }(jQuery);
    return true;
}));

/*
 * jQuery Show hide passoword
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else if (typeof exports === "object") {
        factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function($, undef) {
    var dataKey = "plugin_hideShowPassword",
        shorthandArgs = ["show", "innerToggle"],
        SPACE = 32,
        ENTER = 13;
    var canSetInputAttribute = function() {
        var body = document.body,
            input = document.createElement("input"),
            result = true;
        if (!body) {
            body = document.createElement("body")
        }
        input = body.appendChild(input);
        try {
            input.setAttribute("type", "text")
        } catch (e) {
            result = false
        }
        body.removeChild(input);
        return result
    }();
    var defaults = {
        show: "infer",
        innerToggle: false,
        enable: canSetInputAttribute,
        triggerOnToggle: false,
        className: "hideShowPassword-field",
        initEvent: "hideShowPasswordInit",
        changeEvent: "passwordVisibilityChange",
        props: {
            autocapitalize: "off",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: "false"
        },
        toggle: {
            element: '<button type="button">',
            className: "hideShowPassword-toggle",
            touchSupport: typeof Modernizr === "undefined" ? false : Modernizr.touchevents,
            attachToEvent: "click.hideShowPassword",
            attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
            attachToKeyEvent: "keyup",
            attachToKeyCodes: true,
            styles: {
                position: "absolute"
            },
            touchStyles: {
                pointerEvents: "none"
            },
            position: "infer",
            verticalAlign: "middle",
            offset: 0,
            attr: {
                role: "button",
                "aria-label": "Show Password",
                title: "Show Password",
                tabIndex: 0
            }
        },
        wrapper: {
            element: "<div>",
            className: "hideShowPassword-wrapper",
            enforceWidth: true,
            styles: {
                position: "relative"
            },
            inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
            innerElementStyles: {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }
        },
        states: {
            shown: {
                className: "hideShowPassword-shown",
                changeEvent: "passwordShown",
                props: {
                    type: "text"
                },
                toggle: {
                    className: "hideShowPassword-toggle-hide",
                    content: "Hide",
                    attr: {
                        "aria-pressed": "true",
                        title: "Hide Password"
                    }
                }
            },
            hidden: {
                className: "hideShowPassword-hidden",
                changeEvent: "passwordHidden",
                props: {
                    type: "password"
                },
                toggle: {
                    className: "hideShowPassword-toggle-show",
                    content: "Show",
                    attr: {
                        "aria-pressed": "false",
                        title: "Show Password"
                    }
                }
            }
        }
    };

    function HideShowPassword(element, options) {
        this.element = $(element);
        this.wrapperElement = $();
        this.toggleElement = $();
        this.init(options)
    }
    HideShowPassword.prototype = {
        init: function(options) {
            if (this.update(options, defaults)) {
                this.element.addClass(this.options.className);
                if (this.options.innerToggle) {
                    this.wrapElement(this.options.wrapper);
                    this.initToggle(this.options.toggle);
                    if (typeof this.options.innerToggle === "string") {
                        this.toggleElement.hide();
                        this.element.one(this.options.innerToggle, $.proxy(function() {
                            this.toggleElement.show()
                        }, this))
                    }
                }
                this.element.trigger(this.options.initEvent, [this])
            }
        },
        update: function(options, base) {
            this.options = this.prepareOptions(options, base);
            if (this.updateElement()) {
                this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this])
            }
            return this.options.enable
        },
        toggle: function(showVal) {
            showVal = showVal || "toggle";
            return this.update({
                show: showVal
            })
        },
        prepareOptions: function(options, base) {
            var original = options || {},
                keyCodes = [],
                testElement;
            base = base || this.options;
            options = $.extend(true, {}, base, options);
            if (original.hasOwnProperty("wrapper") && original.wrapper.hasOwnProperty("inheritStyles")) {
                options.wrapper.inheritStyles = original.wrapper.inheritStyles
            }
            if (options.enable) {
                if (options.show === "toggle") {
                    options.show = this.isType("hidden", options.states)
                } else if (options.show === "infer") {
                    options.show = this.isType("shown", options.states)
                }
                if (options.toggle.position === "infer") {
                    options.toggle.position = this.element.css("text-direction") === "rtl" ? "left" : "right"
                }
                if (!$.isArray(options.toggle.attachToKeyCodes)) {
                    if (options.toggle.attachToKeyCodes === true) {
                        testElement = $(options.toggle.element);
                        switch (testElement.prop("tagName").toLowerCase()) {
                            case "button":
                            case "input":
                                break;
                            case "a":
                                if (testElement.filter("[href]").length) {
                                    keyCodes.push(SPACE);
                                    break
                                }
                            default:
                                keyCodes.push(SPACE, ENTER);
                                break
                        }
                    }
                    options.toggle.attachToKeyCodes = keyCodes
                }
            }
            return options
        },
        updateElement: function() {
            if (!this.options.enable || this.isType()) return false;
            this.element.prop($.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className);
            if (this.options.triggerOnToggle) {
                this.element.trigger(this.options.triggerOnToggle, [this])
            }
            this.updateToggle();
            return true
        },
        isType: function(comparison, states) {
            states = states || this.options.states;
            comparison = comparison || this.state(undef, undef, states).props.type;
            if (states[comparison]) {
                comparison = states[comparison].props.type
            }
            return this.element.prop("type") === comparison
        },
        state: function(key, invert, states) {
            states = states || this.options.states;
            if (key === undef) {
                key = this.options.show
            }
            if (typeof key === "boolean") {
                key = key ? "shown" : "hidden"
            }
            if (invert) {
                key = key === "shown" ? "hidden" : "shown"
            }
            return states[key]
        },
        otherState: function(key) {
            return this.state(key, true)
        },
        wrapElement: function(options) {
            var enforceWidth = options.enforceWidth,
                targetWidth;
            if (!this.wrapperElement.length) {
                targetWidth = this.element.outerWidth();
                $.each(options.inheritStyles, $.proxy(function(index, prop) {
                    options.styles[prop] = this.element.css(prop)
                }, this));
                this.element.css(options.innerElementStyles).wrap($(options.element).addClass(options.className).css(options.styles));
                this.wrapperElement = this.element.parent();
                if (enforceWidth === true) {
                    enforceWidth = this.wrapperElement.outerWidth() === targetWidth ? false : targetWidth
                }
                if (enforceWidth !== false) {
                    this.wrapperElement.css("width", enforceWidth)
                }
            }
            return this.wrapperElement
        },
        initToggle: function(options) {
            if (!this.toggleElement.length) {
                this.toggleElement = $(options.element).attr(options.attr).addClass(options.className).css(options.styles).appendTo(this.wrapperElement);
                this.updateToggle();
                this.positionToggle(options.position, options.verticalAlign, options.offset);
                if (options.touchSupport) {
                    this.toggleElement.css(options.touchStyles);
                    this.element.on(options.attachToTouchEvent, $.proxy(this.toggleTouchEvent, this))
                } else {
                    this.toggleElement.on(options.attachToEvent, $.proxy(this.toggleEvent, this))
                }
                if (options.attachToKeyCodes.length) {
                    this.toggleElement.on(options.attachToKeyEvent, $.proxy(this.toggleKeyEvent, this))
                }
            }
            return this.toggleElement
        },
        positionToggle: function(position, verticalAlign, offset) {
            var styles = {};
            styles[position] = offset;
            switch (verticalAlign) {
                case "top":
                case "bottom":
                    styles[verticalAlign] = offset;
                    break;
                case "middle":
                    styles.top = "50%";
                    styles.marginTop = this.toggleElement.outerHeight() / -2;
                    break
            }
            return this.toggleElement.css(styles)
        },
        updateToggle: function(state, otherState) {
            var paddingProp, targetPadding;
            if (this.toggleElement.length) {
                paddingProp = "padding-" + this.options.toggle.position;
                state = state || this.state().toggle;
                otherState = otherState || this.otherState().toggle;
                this.toggleElement.attr(state.attr).addClass(state.className).removeClass(otherState.className).html(state.content);
                targetPadding = this.toggleElement.outerWidth() + this.options.toggle.offset * 2;
                if (this.element.css(paddingProp) !== targetPadding) {
                    this.element.css(paddingProp, targetPadding)
                }
            }
            return this.toggleElement
        },
        toggleEvent: function(event) {
            event.preventDefault();
            this.toggle()
        },
        toggleKeyEvent: function(event) {
            $.each(this.options.toggle.attachToKeyCodes, $.proxy(function(index, keyCode) {
                if (event.which === keyCode) {
                    this.toggleEvent(event);
                    return false
                }
            }, this))
        },
        toggleTouchEvent: function(event) {
            var toggleX = this.toggleElement.offset().left,
                eventX, lesser, greater;
            if (toggleX) {
                eventX = event.pageX || event.originalEvent.pageX;
                if (this.options.toggle.position === "left") {
                    toggleX += this.toggleElement.outerWidth();
                    lesser = eventX;
                    greater = toggleX
                } else {
                    lesser = toggleX;
                    greater = eventX
                }
                if (greater >= lesser) {
                    this.toggleEvent(event)
                }
            }
        }
    };
    $.fn.hideShowPassword = function() {
        var options = {};
        $.each(arguments, function(index, value) {
            var newOptions = {};
            if (typeof value === "object") {
                newOptions = value
            } else if (shorthandArgs[index]) {
                newOptions[shorthandArgs[index]] = value
            } else {
                return false
            }
            $.extend(true, options, newOptions)
        });
        return this.each(function() {
            var $this = $(this),
                data = $this.data(dataKey);
            if (data) {
                data.update(options)
            } else {
                $this.data(dataKey, new HideShowPassword(this, options))
            }
        })
    };
    $.each({
        show: true,
        hide: false,
        toggle: "toggle"
    }, function(verb, showVal) {
        $.fn[verb + "Password"] = function(innerToggle, options) {
            return this.hideShowPassword(showVal, innerToggle, options)
        }
    })
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
    "use strict";

    function a() {
        return sd.apply(null, arguments)
    }

    function b(a) {
        sd = a
    }

    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a)
    }

    function e(a) {
        var b;
        for (b in a) return !1;
        return !0
    }

    function f(a) {
        return void 0 === a
    }

    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
    }

    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc()
    }

    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf
    }

    function o(a) {
        if (null == a._isValid) {
            var b = n(a),
                c = ud.call(b.parsedDateParts, function(a) {
                    return null != a
                }),
                d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d
        }
        return a._isValid
    }

    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
    }

    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0)
            for (c = 0; c < vd.length; c++) d = vd[c], e = b[d], f(e) || (a[d] = e);
        return a
    }

    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1)
    }

    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject
    }

    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
    }

    function u(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c
    }

    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }

    function w(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function x(b, c) {
        var d = !0;
        return k(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[g];
                    f.push(e)
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
            }
            return c.apply(this, arguments)
        }, c)
    }

    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0)
    }

    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e
    }

    function C(a) {
        null != a && this.set(a)
    }

    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d
    }

    function E(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function F() {
        return this._invalidDate
    }

    function G(a) {
        return this._ordinal.replace("%d", a)
    }

    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b)
    }

    function J(a, b) {
        var c = a.toLowerCase();
        Hd[c] = Hd[c + "s"] = Hd[b] = a
    }

    function K(a) {
        return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0
    }

    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
        return d
    }

    function M(a, b) {
        Id[a] = b
    }

    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: Id[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority
        }), b
    }

    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
        }
    }

    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this
    }

    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this
    }

    function T(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]()
        }), a && (Md[a] = e), b && (Md[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2])
        }), c && (Md[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function W(a) {
        var b, c, d = a.match(Jd);
        for (b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f
        }
    }

    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate()
    }

    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
        return a
    }

    function Z(a, b, c) {
        ce[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b
        }
    }

    function $(a, b) {
        return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
    }

    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), g(b) && (d = function(a, c) {
                c[b] = u(a)
            }), c = 0; c < a.length; c++) de[a[c]] = d
    }

    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function da(a, b, c) {
        null != b && j(de, a) && de[a](b, c._a, c, a)
    }

    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
    }

    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null))
    }

    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
            if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b)
            if (/^\d+$/.test(b)) b = u(b);
            else if (b = a.localeData().monthsParse(b), !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
    }

    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
    }

    function la() {
        return ea(this.year(), this.month())
    }

    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    }

    function oa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
    }

    function pa(a) {
        return qa(a) ? 366 : 365
    }

    function qa(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ra() {
        return qa(this.year())
    }

    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function ua(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = ua(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function xa(a, b, c) {
        var d = ua(a, b, c),
            e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7
    }

    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week
    }

    function za() {
        return this._week.dow
    }

    function Aa() {
        return this._week.doy
    }

    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
    }

    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    }

    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
    }

    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
    }

    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7)
        }
        return this.day() || 7
    }

    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Qa() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d, e, f, g = [],
            h = [],
            i = [],
            j = [];
        for (b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
    }

    function Ra() {
        return this.hours() % 12 || 12
    }

    function Sa() {
        return this.hours() || 24
    }

    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Ua(a, b) {
        return b._meridiemParse
    }

    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function Za(a) {
        var b = null;
        if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
            b = Be._abbr, require("./locale/" + a), $a(b)
        } catch (a) {}
        return Fe[a]
    }

    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr
    }

    function _a(a, b) {
        if (null !== b) {
            var c = Ee;
            if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;
            else if (null != b.parentLocale) {
                if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Fe[b.parentLocale]._config
            }
            return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) {
                _a(a.name, a.config)
            }), $a(a), Fe[a]
        }
        return delete Fe[a], null
    }

    function ab(a, b) {
        if (null != b) {
            var c, d = Ee;
            null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a)
        } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
        return Fe[a]
    }

    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [a]
        }
        return Ya(a)
    }

    function cb() {
        return Ad(Fe)
    }

    function db(a) {
        var b, c = a._a;
        return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a
    }

    function eb(a) {
        var b, c, d, e, f, g, h = a._i,
            i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
                if (Ke[b][1].exec(i[1])) {
                    e = Ke[b][0], d = Ke[b][2] !== !1;
                    break
                }
            if (null == e) return void(a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; b < c; b++)
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];
                        break
                    }
                if (null == f) return void(a._isValid = !1)
            }
            if (!d && null != f) return void(a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void(a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), lb(a)
        } else a._isValid = !1
    }

    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            },
            k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]),
                    m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
            }
            switch (c[5].length) {
                case 2:
                    0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                    break;
                case 4:
                    h = j[c[5]];
                    break;
                default:
                    h = j[" GMT"]
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
        } else a._isValid = !1
    }

    function gb(b) {
        var c = Me.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
    }

    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
        }
    }

    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
        else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b)
    }

    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b)
    }

    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
                return a && parseInt(a, 10)
            }), jb(a)
        }
    }

    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function qb(a) {
        var b = a._i,
            d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
    }

    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
            return parseInt(a, 10)
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
    }

    function sb(a, b, f, g, h) {
        var i = {};
        return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
    }

    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1)
    }

    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d
    }

    function vb() {
        var a = [].slice.call(arguments, 0);
        return ub("isBefore", a)
    }

    function wb() {
        var a = [].slice.call(arguments, 0);
        return ub("isAfter", a)
    }

    function xb(a) {
        for (var b in a)
            if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Re.length; ++d)
            if (a[Re[d]]) {
                if (c) return !1;
                parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
            }
        return !0
    }

    function yb() {
        return this._isValid
    }

    function zb() {
        return Sb(NaN)
    }

    function Ab(a) {
        var b = L(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
    }

    function Bb(a) {
        return a instanceof Ab
    }

    function Cb(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
    }

    function Db(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset(),
                c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
        })
    }

    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [],
            e = (d + "").match(Se) || ["-", 0, 0],
            f = +(60 * e[1]) + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f
    }

    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
    }

    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (b = Eb(_d, b), null === b) return this
            } else Math.abs(b) < 16 && !d && (b = 60 * b);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? f : Gb(this)
    }

    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Jb(a) {
        return this.utcOffset(0, a)
    }

    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
    }

    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = Eb($d, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    }

    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
    }

    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Pb() {
        return !!this.isValid() && !this._isUTC
    }

    function Qb() {
        return !!this.isValid() && this._isUTC
    }

    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    function Sb(a, b) {
        var c, d, e, f = a,
            h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c
        }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
    }

    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Wb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
        }
    }

    function Xb(b, c, d, e) {
        var f = c._milliseconds,
            g = Cb(c._days),
            h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
    }

    function Zb(b, c) {
        var d = b || tb(),
            e = Fb(d, this).startOf("day"),
            f = a.calendarFormat(this, e) || "sameElse",
            g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)))
    }

    function $b() {
        return new r(this)
    }

    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
    }

    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
    }

    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    }

    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
    }

    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
    }

    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
    }

    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
        var c = "[" + a + '("]',
            d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            e = "-MM-DD[T]HH:mm:ss.SSS",
            f = b + '[")]';
        return this.format(c + d + e + f)
    }

    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c)
    }

    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function mc(a) {
        return this.from(tb(), a)
    }

    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function oc(a) {
        return this.to(tb(), a)
    }

    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
    }

    function qc() {
        return this._locale
    }

    function rc(a) {
        switch (a = K(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function sc(a) {
        return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
    }

    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function uc() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function vc() {
        return new Date(this.valueOf())
    }

    function wc() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function yc() {
        return this.isValid() ? this.toISOString() : null
    }

    function zc() {
        return o(this)
    }

    function Ac() {
        return k({}, n(this))
    }

    function Bc() {
        return n(this).overflow
    }

    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Dc(a, b) {
        U(0, [a, a.length], 0, b)
    }

    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Gc() {
        return xa(this.year(), 1, 4)
    }

    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy)
    }

    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
    }

    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e),
            g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function Mc(a, b) {
        b[ke] = u(1e3 * ("0." + a))
    }

    function Nc() {
        return this._isUTC ? "UTC" : ""
    }

    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Pc(a) {
        return tb(1e3 * a)
    }

    function Qc() {
        return tb.apply(null, arguments).parseZone()
    }

    function Rc(a) {
        return a
    }

    function Sc(a, b, c, d) {
        var e = bb(),
            f = l().set(d, b);
        return e[c](f, a)
    }

    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e
    }

    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(),
            f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i
    }

    function Vc(a, b) {
        return Tc(a, b, "months")
    }

    function Wc(a, b) {
        return Tc(a, b, "monthsShort")
    }

    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays")
    }

    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort")
    }

    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin")
    }

    function $c() {
        var a = this._data;
        return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this
    }

    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function ad(a, b) {
        return _c(this, a, b, 1)
    }

    function bd(a, b) {
        return _c(this, a, b, -1)
    }

    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a)
    }

    function dd() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function ed(a) {
        return 4800 * a / 146097
    }

    function fd(a) {
        return 146097 * a / 4800
    }

    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
    }

    function id(a) {
        return function() {
            return this.as(a)
        }
    }

    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN
    }

    function kd(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN
        }
    }

    function ld() {
        return t(this.days() / 7)
    }

    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function nd(a, b, c) {
        var d = Sb(a).abs(),
            e = uf(d.as("s")),
            f = uf(d.as("m")),
            g = uf(d.as("h")),
            h = uf(d.as("d")),
            i = uf(d.as("M")),
            j = uf(d.as("y")),
            k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
    }

    function od(a) {
        return void 0 === a ? uf : "function" == typeof a && (uf = a, !0)
    }

    function pd(a, b) {
        return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0))
    }

    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(),
            c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = wf(this._milliseconds) / 1e3,
            e = wf(this._days),
            f = wf(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    var sd, td;
    td = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
            if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1
    };
    var ud = td,
        vd = a.momentProperties = [],
        wd = !1,
        xd = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var yd;
    yd = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c
    };
    var zd, Ad = yd,
        Bd = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Cd = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Dd = "Invalid date",
        Ed = "%d",
        Fd = /\d{1,2}/,
        Gd = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Hd = {},
        Id = {},
        Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Ld = {},
        Md = {},
        Nd = /\d/,
        Od = /\d\d/,
        Pd = /\d{3}/,
        Qd = /\d{4}/,
        Rd = /[+-]?\d{6}/,
        Sd = /\d\d?/,
        Td = /\d\d\d\d?/,
        Ud = /\d\d\d\d\d\d?/,
        Vd = /\d{1,3}/,
        Wd = /\d{1,4}/,
        Xd = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        Zd = /[+-]?\d+/,
        $d = /Z|[+-]\d\d:?\d\d/gi,
        _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[+-]?\d+(\.\d{1,3})?/,
        be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ce = {},
        de = {},
        ee = 0,
        fe = 1,
        ge = 2,
        he = 3,
        ie = 4,
        je = 5,
        ke = 6,
        le = 7,
        me = 8;
    zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var b;
        for (b = 0; b < this.length; ++b)
            if (this[b] === a) return b;
        return -1
    };
    var ne = zd;
    U("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    }), U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    }), Z("MMMM", function(a, b) {
        return b.monthsRegex(a)
    }), ba(["M", "MM"], function(a, b) {
        b[fe] = u(a) - 1
    }), ba(["MMM", "MMMM"], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[fe] = e : n(c).invalidMonth = a
    });
    var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        re = be,
        se = be;
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a
    }), U(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function(b, c) {
        c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
    }), ba("YY", function(b, c) {
        c[ee] = a.parseTwoDigitYear(b)
    }), ba("Y", function(a, b) {
        b[ee] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    };
    var te = O("FullYear", !0);
    U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a)
    });
    var ue = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a)
    }), U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    }), U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a)
    }), Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a)
    }), Z("dddd", function(a, b) {
        return b.weekdaysRegex(a)
    }), ca(["dd", "ddd", "dddd"], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a
    }), ca(["d", "e", "E"], function(a, b, c, d) {
        b[d] = u(a)
    });
    var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ye = be,
        ze = be,
        Ae = be;
    U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2)
    }), U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function(a, b, c) {
        var d = u(a);
        b[he] = 24 === d ? 0 : d
    }), ba(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), ba(["h", "hh"], function(a, b, c) {
        b[he] = u(a), n(c).bigHour = !0
    }), ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0
    }), ba("hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0
    }), ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d))
    }), ba("Hmmss", function(a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e))
    });
    var Be, Ce = /[ap]\.?m?\.?/i,
        De = O("Hours", !0),
        Ee = {
            calendar: Bd,
            longDateFormat: Cd,
            invalidDate: Dd,
            ordinal: Ed,
            dayOfMonthOrdinalParse: Fd,
            relativeTime: Gd,
            months: pe,
            monthsShort: qe,
            week: ue,
            weekdays: ve,
            weekdaysMin: xe,
            weekdaysShort: we,
            meridiemParse: Ce
        },
        Fe = {},
        Ge = {},
        He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Le = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Me = /^\/?Date\((\-?\d+)/i,
        Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
    var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a < this ? this : a : p()
        }),
        Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = tb.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : p()
        }),
        Qe = function() {
            return Date.now ? Date.now() : +new Date
        },
        Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0, c._tzm = Eb(_d, a)
    });
    var Se = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Ve = Wb(1, "add"),
        We = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    U(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a)
    }), ca(["gg", "GG"], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function(a, b) {
        b[fe] = 3 * (u(a) - 1)
    }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
    }), ba(["D", "DD"], ge), ba("Do", function(a, b) {
        b[ge] = u(a.match(Sd)[0], 10)
    });
    var Ye = O("Date", !0);
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = u(a)
    }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);
    var Ze = O("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);
    var $e = O("Seconds", !1);
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), U(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), U(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), U(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), U(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), U(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), U(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);
    var _e;
    for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
    for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
    var af = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bf = r.prototype;
    bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cf = C.prototype;
    cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var df = Math.abs,
        ef = id("ms"),
        ff = id("s"),
        gf = id("m"),
        hf = id("h"),
        jf = id("d"),
        kf = id("w"),
        lf = id("M"),
        mf = id("y"),
        nf = kd("milliseconds"),
        of = kd("seconds"),
        pf = kd("minutes"),
        qf = kd("hours"),
        rf = kd("days"),
        sf = kd("months"),
        tf = kd("years"),
        uf = Math.round,
        vf = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        wf = Math.abs,
        xf = Ab.prototype;
    return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of , xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), ba("x", function(a, b, c) {
        c._d = new Date(u(a))
    }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a
});

/**
 * @version: 3.0.1
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: http://www.daterangepicker.com/
 */
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
! function(t, a) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery"], function(t, e) {
        return e.fn || (e.fn = {}), a(t, e)
    });
    else if ("object" == typeof module && module.exports) {
        var e = "undefined" != typeof window ? window.jQuery : void 0;
        e || (e = require("jquery")).fn || (e.fn = {});
        var i = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment");
        module.exports = a(i, e)
    } else t.daterangepicker = a(t.moment, t.jQuery)
}(this, function(H, R) {
    var i = function(t, e, a) {
        if (this.parentEl = "body", this.element = R(t), this.startDate = H().startOf("day"), this.endDate = H().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = H().subtract(100, "year").format("YYYY"), this.maxYear = H().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
                direction: "ltr",
                format: H.localeData().longDateFormat("L"),
                separator: " - ",
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: H.weekdaysMin(),
                monthNames: H.monthsShort(),
                firstDay: H.localeData().firstDayOfWeek()
            }, this.callback = function() {}, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" == typeof(e = R.extend(this.element.data(), e)).template || e.template instanceof R || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl), this.container = R(e.template).appendTo(this.parentEl), "object" == typeof e.locale && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel)) {
            (d = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel;
            var i = d.value;
            this.locale.customRangeLabel = i
        }
        if (this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = H(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = H(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = H(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = H(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = H(e.startDate)), "object" == typeof e.endDate && (this.endDate = H(e.endDate)), "object" == typeof e.minDate && (this.minDate = H(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = H(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan), "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay)
            for (var s = this.locale.firstDay; 0 < s;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), s--;
        var n, r, o;
        if (void 0 === e.startDate && void 0 === e.endDate && R(this.element).is("input[type=text]")) {
            var h = R(this.element).val(),
                l = h.split(this.locale.separator);
            n = r = null, 2 == l.length ? (n = H(l[0], this.locale.format), r = H(l[1], this.locale.format)) : this.singleDatePicker && "" !== h && (n = H(h, this.locale.format), r = H(h, this.locale.format)), null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                n = "string" == typeof e.ranges[o][0] ? H(e.ranges[o][0], this.locale.format) : H(e.ranges[o][0]), r = "string" == typeof e.ranges[o][1] ? H(e.ranges[o][1], this.locale.format) : H(e.ranges[o][1]), this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var c = this.maxDate;
                if (this.maxSpan && c && n.clone().add(this.maxSpan).isAfter(c) && (c = n.clone().add(this.maxSpan)), c && r.isAfter(c) && (r = c.clone()), !(this.minDate && r.isBefore(this.minDate, this.timepicker ? "minute" : "day") || c && n.isAfter(c, this.timepicker ? "minute" : "day"))) {
                    var d;
                    (d = document.createElement("textarea")).innerHTML = o;
                    i = d.value;
                    this.ranges[i] = [n, r]
                }
            }
            var m = "<ul>";
            for (o in this.ranges) m += '<li data-range-key="' + o + '">' + o + "</li>";
            this.showCustomRangeLabel && (m += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), m += "</ul>", this.container.find(".ranges").prepend(m)
        }
        "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" == typeof e.ranges && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.timePicker || this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", R.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", R.proxy(this.clickDate, this)).on("change.daterangepicker", "select.yearselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", R.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", R.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", R.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", R.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", R.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", R.proxy(this.toggle, this))), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
    };
    return i.prototype = {
        constructor: i,
        setStartDate: function(t) {
            "string" == typeof t && (this.startDate = H(t, this.locale.format)), "object" == typeof t && (this.startDate = H(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        setEndDate: function(t) {
            "string" == typeof t && (this.endDate = H(t, this.locale.format)), "object" == typeof t && (this.endDate = H(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        },
        isInvalidDate: function() {
            return !1
        },
        isCustomDate: function() {
            return !1
        },
        updateView: function() {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var t, e, a, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        },
        renderCalendar: function(t) {
            var e, a = (e = "left" == t ? this.leftCalendar : this.rightCalendar).month.month(),
                i = e.month.year(),
                s = e.month.hour(),
                n = e.month.minute(),
                r = e.month.second(),
                o = H([i, a]).daysInMonth(),
                h = H([i, a, 1]),
                l = H([i, a, o]),
                c = H(h).subtract(1, "month").month(),
                d = H(h).subtract(1, "month").year(),
                m = H([d, c]).daysInMonth(),
                f = h.day();
            (e = []).firstDay = h, e.lastDay = l;
            for (var p = 0; p < 6; p++) e[p] = [];
            var u = m - f + this.locale.firstDay + 1;
            m < u && (u -= 7), f == this.locale.firstDay && (u = m - 6);
            for (var D = H([d, c, u, 12, n, r]), g = (p = 0, 0), y = 0; p < 42; p++, g++, D = H(D).add(24, "hour")) 0 < p && g % 7 == 0 && (g = 0, y++), e[y][g] = D.clone().hour(s).minute(n).second(r), D.hour(12), this.minDate && e[y][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[y][g].isBefore(this.minDate) && "left" == t && (e[y][g] = this.minDate.clone()), this.maxDate && e[y][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[y][g].isAfter(this.maxDate) && "right" == t && (e[y][g] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var k = "left" == t ? this.minDate : this.startDate,
                b = this.maxDate,
                C = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            C += "<thead>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += "<th></th>"), k && !k.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? C += "<th></th>" : C += '<th class="prev available"><span></span></th>';
            var v = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var Y = e[1][1].month(), w = e[1][1].year(), P = b && b.year() || this.maxYear, x = k && k.year() || this.minYear, M = w == x, S = w == P, I = '<select class="monthselect">', B = 0; B < 12; B++)(!M || B >= k.month()) && (!S || B <= b.month()) ? I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + ">" + this.locale.monthNames[B] + "</option>" : I += "<option value='" + B + "'" + (B === Y ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[B] + "</option>";
                I += "</select>";
                for (var A = '<select class="yearselect">', L = x; L <= P; L++) A += '<option value="' + L + '"' + (L === w ? ' selected="selected"' : "") + ">" + L + "</option>";
                v = I + (A += "</select>")
            }
            if (C += '<th colspan="5" class="month">' + v + "</th>", b && !b.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? C += "<th></th>" : C += '<th class="next available"><span></span></th>', C += "</tr>", C += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (C += '<th class="week">' + this.locale.weekLabel + "</th>"), R.each(this.locale.daysOfWeek, function(t, e) {
                    C += "<th>" + e + "</th>"
                }), C += "</tr>", C += "</thead>", C += "<tbody>", null == this.endDate && this.maxSpan) {
                var E = this.startDate.clone().add(this.maxSpan).endOf("day");
                b && !E.isBefore(b) || (b = E)
            }
            for (y = 0; y < 6; y++) {
                C += "<tr>", this.showWeekNumbers ? C += '<td class="week">' + e[y][0].week() + "</td>" : this.showISOWeekNumbers && (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
                for (g = 0; g < 7; g++) {
                    var W = [];
                    e[y][g].isSame(new Date, "day") && W.push("today"), 5 < e[y][g].isoWeekday() && W.push("weekend"), e[y][g].month() != e[1][1].month() && W.push("off"), this.minDate && e[y][g].isBefore(this.minDate, "day") && W.push("off", "disabled"), b && e[y][g].isAfter(b, "day") && W.push("off", "disabled"), this.isInvalidDate(e[y][g]) && W.push("off", "disabled"), e[y][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && W.push("active", "start-date"), null != this.endDate && e[y][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && W.push("active", "end-date"), null != this.endDate && e[y][g] > this.startDate && e[y][g] < this.endDate && W.push("in-range");
                    var O = this.isCustomDate(e[y][g]);
                    !1 !== O && ("string" == typeof O ? W.push(O) : Array.prototype.push.apply(W, O));
                    var N = "",
                        j = !1;
                    for (p = 0; p < W.length; p++) N += W[p] + " ", "disabled" == W[p] && (j = !0);
                    j || (N += "available"), C += '<td class="' + N.replace(/^\s+|\s+$/g, "") + '" data-title="r' + y + "c" + g + '">' + e[y][g].date() + "</td>"
                }
                C += "</tr>"
            }
            C += "</tbody>", C += "</table>", this.container.find(".calendar." + t + " .calendar-table").html(C)
        },
        renderTimePicker: function(t) {
            if ("right" != t || this.endDate) {
                var e, a, i, s = this.maxDate;
                if (!this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.maxSpan)), "left" == t) a = this.startDate.clone(), i = this.minDate;
                else if ("right" == t) {
                    a = this.endDate.clone(), i = this.startDate;
                    var n = this.container.find(".calendar.right .calendar-time");
                    if ("" != n.html() && (a.hour(a.hour() || n.find(".hourselect option:selected").val()), a.minute(a.minute() || n.find(".minuteselect option:selected").val()), a.second(a.second() || n.find(".secondselect option:selected").val()), !this.timePicker24Hour)) {
                        var r = n.find(".ampmselect option:selected").val();
                        "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), s && a.isAfter(s) && (a = s.clone())
                }
                e = '<select class="hourselect">';
                for (var o = this.timePicker24Hour ? 0 : 1, h = this.timePicker24Hour ? 23 : 12, l = o; l <= h; l++) {
                    var c = l;
                    this.timePicker24Hour || (c = 12 <= a.hour() ? 12 == l ? 12 : l + 12 : 12 == l ? 0 : l);
                    var d = a.clone().hour(c),
                        m = !1;
                    i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), c != a.hour() || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + l + "</option>" : '<option value="' + l + '">' + l + "</option>" : e += '<option value="' + l + '" selected="selected">' + l + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (l = 0; l < 60; l += this.timePickerIncrement) {
                    var f = l < 10 ? "0" + l : l;
                    d = a.clone().minute(l), m = !1;
                    i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), a.minute() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (l = 0; l < 60; l++) {
                        f = l < 10 ? "0" + l : l, d = a.clone().second(l), m = !1;
                        i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), a.second() != l || m ? e += m ? '<option value="' + l + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + l + '">' + f + "</option>" : e += '<option value="' + l + '" selected="selected">' + f + "</option>"
                    }
                    e += "</select> "
                }
                if (!this.timePicker24Hour) {
                    e += '<select class="ampmselect">';
                    var p = "",
                        u = "";
                    i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), 12 <= a.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
                }
                this.container.find(".calendar." + t + " .calendar-time").html(e)
            }
        },
        updateFormInputs: function() {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled")
        },
        move: function() {
            var t, e = {
                    top: 0,
                    left: 0
                },
                a = R(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("drop-up"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > R(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        },
        show: function(t) {
            this.isShowing || (this._outsideClickProxy = R.proxy(function(t) {
                this.outsideClick(t)
            }, this), R(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), R(window).on("resize.daterangepicker", R.proxy(function(t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        },
        hide: function(t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), R(document).off(".daterangepicker"), R(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        },
        toggle: function(t) {
            this.isShowing ? this.hide() : this.show()
        },
        outsideClick: function(t) {
            var e = R(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        },
        clickRange: function(t) {
            var e = t.target.getAttribute("data-range-key");
            if ((this.chosenLabel = e) == this.locale.customRangeLabel) this.showCalendars();
            else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
            }
        },
        clickPrev: function(t) {
            R(t.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        },
        clickNext: function(t) {
            R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        },
        hoverDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    r = R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i],
                    o = this.leftCalendar,
                    h = this.rightCalendar,
                    l = this.startDate;
                this.endDate || this.container.find(".calendar tbody td").each(function(t, e) {
                    if (!R(e).hasClass("week")) {
                        var a = R(e).attr("data-title"),
                            i = a.substr(1, 1),
                            s = a.substr(3, 1),
                            n = R(e).parents(".calendar").hasClass("left") ? o.calendar[i][s] : h.calendar[i][s];
                        n.isAfter(l) && n.isBefore(r) || n.isSame(r, "day") ? R(e).addClass("in-range") : R(e).removeClass("in-range")
                    }
                })
            }
        },
        clickDate: function(t) {
            if (R(t.target).hasClass("available")) {
                var e = R(t.target).attr("data-title"),
                    a = e.substr(1, 1),
                    i = e.substr(3, 1),
                    s = R(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][i] : this.rightCalendar.calendar[a][i];
                if (this.endDate || s.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var n = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        var r = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            o = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.endDate = null, this.setStartDate(s.clone())
                } else if (!this.endDate && s.isBefore(this.startDate)) this.setEndDate(this.startDate.clone());
                else {
                    if (this.timePicker) {
                        var h;
                        n = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === h && 12 === n && (n = 0);
                        r = parseInt(this.container.find(".right .minuteselect").val(), 10), o = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        s = s.clone().hour(n).minute(r).second(o)
                    }
                    this.setEndDate(s.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), t.stopPropagation()
            }
        },
        calculateChosenLabel: function() {
            var t = !0,
                e = 0;
            for (var a in this.ranges) {
                if (this.timePicker) {
                    var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                    if (this.startDate.format(i) == this.ranges[a][0].format(i) && this.endDate.format(i) == this.ranges[a][1].format(i)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[a][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[a][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        },
        clickApply: function(t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        },
        monthOrYearChanged: function(t) {
            var e = R(t.target).closest(".calendar").hasClass("left"),
                a = e ? "left" : "right",
                i = this.container.find(".calendar." + a),
                s = parseInt(i.find(".monthselect").val(), 10),
                n = i.find(".yearselect").val();
            e || (n < this.startDate.year() || n == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), n = this.startDate.year()), this.minDate && (n < this.minDate.year() || n == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), n = this.minDate.year()), this.maxDate && (n > this.maxDate.year() || n == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), n = this.maxDate.year()), e ? (this.leftCalendar.month.month(s).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        },
        timeChanged: function(t) {
            var e = R(t.target).closest(".calendar"),
                a = e.hasClass("left"),
                i = parseInt(e.find(".hourselect").val(), 10),
                s = parseInt(e.find(".minuteselect").val(), 10),
                n = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var r = e.find(".ampmselect").val();
                "PM" === r && i < 12 && (i += 12), "AM" === r && 12 === i && (i = 0)
            }
            if (a) {
                var o = this.startDate.clone();
                o.hour(i), o.minute(s), o.second(n), this.setStartDate(o), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())
            } else if (this.endDate) {
                var h = this.endDate.clone();
                h.hour(i), h.minute(s), h.second(n), this.setEndDate(h)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        },
        elementChanged: function() {
            if (this.element.is("input") && this.element.val().length) {
                var t = this.element.val().split(this.locale.separator),
                    e = null,
                    a = null;
                2 === t.length && (e = H(t[0], this.locale.format), a = H(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === a) && (a = e = H(this.element.val(), this.locale.format)), e.isValid() && a.isValid() && (this.setStartDate(e), this.setEndDate(a), this.updateView())
            }
        },
        keydown: function(t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        },
        updateElement: function() {
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, R.fn.daterangepicker = function(t, e) {
        var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
        return this.each(function() {
            var t = R(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new i(t, a, e))
        }), this
    }, i
});

// Ion.RangeSlider | version 2.1.2 | https://github.com/IonDen/ion.rangeSlider
;
(function(f, r, h, t, v) {
    var u = 0,
        p = function() {
            var a = t.userAgent,
                b = /msie\s\d+/i;
            return 0 < a.search(b) && (a = b.exec(a).toString(), a = a.split(" ")[1], 9 > a) ? (f("html").addClass("lt-ie9"), !0) : !1
        }();
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this,
            d = [].slice;
        if ("function" != typeof b) throw new TypeError;
        var c = d.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var g = function() {};
                    g.prototype = b.prototype;
                    var g = new g,
                        l = b.apply(g, c.concat(d.call(arguments)));
                    return Object(l) === l ? l : g
                }
                return b.apply(a,
                    c.concat(d.call(arguments)))
            };
        return e
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        var d;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var c = Object(this),
            e = c.length >>> 0;
        if (0 === e) return -1;
        d = +b || 0;
        Infinity === Math.abs(d) && (d = 0);
        if (d >= e) return -1;
        for (d = Math.max(0 <= d ? d : e - Math.abs(d), 0); d < e;) {
            if (d in c && c[d] === a) return d;
            d++
        }
        return -1
    });
    var q = function(a, b, d) {
        this.VERSION = "2.1.2";
        this.input = a;
        this.plugin_count = d;
        this.old_to = this.old_from = this.update_tm = this.calc_count =
            this.current_plugin = 0;
        this.raf_id = this.old_min_interval = null;
        this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1;
        this.is_start = !0;
        this.is_click = this.is_resize = this.is_active = this.is_finish = !1;
        this.$cache = {
            win: f(h),
            body: f(r.body),
            input: f(a),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        };
        this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };
        this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var c = this.$cache.input;
        a = c.prop("value");
        var e;
        d = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !1,
            keyboard_step: 5,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " \u2014 ",
            input_values_separator: ";",
            disable: !1,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        };
        c = {
            type: c.data("type"),
            min: c.data("min"),
            max: c.data("max"),
            from: c.data("from"),
            to: c.data("to"),
            step: c.data("step"),
            min_interval: c.data("minInterval"),
            max_interval: c.data("maxInterval"),
            drag_interval: c.data("dragInterval"),
            values: c.data("values"),
            from_fixed: c.data("fromFixed"),
            from_min: c.data("fromMin"),
            from_max: c.data("fromMax"),
            from_shadow: c.data("fromShadow"),
            to_fixed: c.data("toFixed"),
            to_min: c.data("toMin"),
            to_max: c.data("toMax"),
            to_shadow: c.data("toShadow"),
            prettify_enabled: c.data("prettifyEnabled"),
            prettify_separator: c.data("prettifySeparator"),
            force_edges: c.data("forceEdges"),
            keyboard: c.data("keyboard"),
            keyboard_step: c.data("keyboardStep"),
            grid: c.data("grid"),
            grid_margin: c.data("gridMargin"),
            grid_num: c.data("gridNum"),
            grid_snap: c.data("gridSnap"),
            hide_min_max: c.data("hideMinMax"),
            hide_from_to: c.data("hideFromTo"),
            prefix: c.data("prefix"),
            postfix: c.data("postfix"),
            max_postfix: c.data("maxPostfix"),
            decorate_both: c.data("decorateBoth"),
            values_separator: c.data("valuesSeparator"),
            input_values_separator: c.data("inputValuesSeparator"),
            disable: c.data("disable")
        };
        c.values = c.values && c.values.split(",");
        for (e in c) c.hasOwnProperty(e) && (c[e] || 0 === c[e] || delete c[e]);
        a && (a = a.split(c.input_values_separator || b.input_values_separator || ";"), a[0] && a[0] == +a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), b && b.values && b.values.length ? (d.from = a[0] && b.values.indexOf(a[0]), d.to = a[1] && b.values.indexOf(a[1])) : (d.from = a[0] && +a[0], d.to = a[1] && +a[1]));
        f.extend(d, b);
        f.extend(d, c);
        this.options = d;
        this.validate();
        this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        };
        this.init()
    };
    q.prototype = {
        init: function(a) {
            this.no_diapason = !1;
            this.coords.p_step = this.convertToPercent(this.options.step, !0);
            this.target = "base";
            this.toggleInput();
            this.append();
            this.setMinMax();
            a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart());
            this.updateScene()
        },
        append: function() {
            this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>');
            this.$cache.input.prop("readonly", !0);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;
            this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");
            "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"),
                this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler());
            this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none");
            this.appendGrid();
            this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents());
            this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        },
        setTopHandler: function() {
            var a = this.options.max,
                b = this.options.to;
            this.options.from > this.options.min && b === a ? this.$cache.s_from.addClass("type_last") : b < a && this.$cache.s_to.addClass("type_last")
        },
        changeLevel: function(a) {
            switch (a) {
                case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                    break;
                case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                    this.$cache.s_from.addClass("state_hover");
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
                    this.$cache.s_to.addClass("state_hover");
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
                case "both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake -
                        this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        },
        appendDisableMask: function() {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>');
            this.$cache.cont.addClass("irs-disabled")
        },
        remove: function() {
            this.$cache.cont.remove();
            this.$cache.cont = null;
            this.$cache.line.off("keydown.irs_" + this.plugin_count);
            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
            this.$cache.body.off("mousemove.irs_" + this.plugin_count);
            this.$cache.win.off("touchend.irs_" +
                this.plugin_count);
            this.$cache.win.off("mouseup.irs_" + this.plugin_count);
            p && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count));
            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];
            cancelAnimationFrame(this.raf_id)
        },
        bindEvents: function() {
            if (!this.no_diapason) {
                this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                this.$cache.body.on("mousemove.irs_" + this.plugin_count,
                    this.pointerMove.bind(this));
                this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this,
                    "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));
                "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")),
                    this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" +
                        this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")),
                    this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" +
                        this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")));
                if (this.options.keyboard) this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
                p && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))
            }
        },
        pointerMove: function(a) {
            this.dragging && (this.coords.x_pointer = (a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
        },
        pointerUp: function(a) {
            if (this.current_plugin === this.plugin_count && this.is_active) {
                this.is_active = !1;
                this.$cache.cont.find(".state_hover").removeClass("state_hover");
                this.force_redraw = !0;
                p && f("*").prop("unselectable", !1);
                this.updateScene();
                this.restoreOriginalMinInterval();
                if (f.contains(this.$cache.cont[0], a.target) || this.dragging) this.is_finish = !0, this.callOnFinish();
                this.dragging = !1
            }
        },
        pointerDown: function(a, b) {
            b.preventDefault();
            var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
            2 !== b.button && ("both" === a && this.setTempMinInterval(), a || (a = this.target), this.current_plugin = this.plugin_count, this.target = a, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(a), p && f("*").prop("unselectable", !0), this.$cache.line.trigger("focus"),
                this.updateScene())
        },
        pointerClick: function(a, b) {
            b.preventDefault();
            var d = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
            2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(d - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        },
        key: function(a, b) {
            if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
                switch (b.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        b.preventDefault();
                        this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        b.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        },
        moveByKey: function(a) {
            var b = this.coords.p_pointer,
                b = a ? b + this.options.keyboard_step : b - this.options.keyboard_step;
            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * b);
            this.is_key = !0;
            this.calc()
        },
        setMinMax: function() {
            this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
        },
        setTempMinInterval: function() {
            var a = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval);
            this.options.min_interval = a
        },
        restoreOriginalMinInterval: function() {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        },
        calc: function(a) {
            if (this.options) {
                this.calc_count++;
                if (10 === this.calc_count || a) this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent();
                if (this.coords.w_rs) {
                    this.calcPointerPercent();
                    a = this.getHandleX();
                    "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, a = this.getHandleX(), this.target =
                        this.options.drag_interval ? "both_one" : this.chooseHandle(a));
                    switch (this.target) {
                        case "base":
                            var b = (this.options.max - this.options.min) / 100;
                            a = (this.result.from - this.options.min) / b;
                            b = (this.result.to - this.options.min) / b;
                            this.coords.p_single_real = this.toFixed(a);
                            this.coords.p_from_real = this.toFixed(a);
                            this.coords.p_to_real = this.toFixed(b);
                            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real,
                                this.options.from_min, this.options.from_max);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(a);
                            this.coords.p_single_real =
                                this.calcWithStep(this.coords.p_single_real);
                            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(a);
                            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                            this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(a);
                            this.coords.p_to_real =
                                this.calcWithStep(this.coords.p_to_real);
                            this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            a = this.toFixed(a + .1 * this.coords.p_handle);
                            this.coords.p_from_real = this.convertToRealPercent(a) - this.coords.p_gap_left;
                            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_real = this.convertToRealPercent(a) + this.coords.p_gap_right;
                            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var d = this.convertToRealPercent(a);
                            a = this.result.to_percent - this.result.from_percent;
                            var c = a / 2,
                                b = d - c,
                                d = d + c;
                            0 > b && (b = 0, d = b + a);
                            100 < d && (d = 100, b = d - a);
                            this.coords.p_from_real = this.calcWithStep(b);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_real = this.calcWithStep(d);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_fake =
                                this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake -
                        this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to]));
                    this.calcMinMax();
                    this.calcLabels()
                }
            }
        },
        calcPointerPercent: function() {
            this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ?
                this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        },
        convertToRealPercent: function(a) {
            return a / (100 - this.coords.p_handle) * 100
        },
        convertToFakePercent: function(a) {
            return a / 100 * (100 - this.coords.p_handle)
        },
        getHandleX: function() {
            var a = 100 - this.coords.p_handle,
                b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            0 > b ? b = 0 : b > a && (b = a);
            return b
        },
        calcHandlePercent: function() {
            this.coords.w_handle =
                "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);
            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        },
        chooseHandle: function(a) {
            return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        },
        calcMinMax: function() {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max =
                this.labels.w_max / this.coords.w_rs * 100)
        },
        calcLabels: function() {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left =
                this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left =
                this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        },
        updateScene: function() {
            this.raf_id &&
                (cancelAnimationFrame(this.raf_id), this.raf_id = null);
            clearTimeout(this.update_tm);
            this.update_tm = null;
            this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        },
        drawHandles: function() {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1);
            if (this.coords.w_rs) {
                this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0);
                if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) this.setMinMax(),
                    this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow();
                if (this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key)) {
                    if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
                        this.drawLabels();
                        this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                        this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
                        if ("single" === this.options.type) this.$cache.s_single[0].style.left =
                            this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from);
                        else {
                            this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
                            this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";
                            if (this.old_from !== this.result.from || this.force_redraw) this.$cache.from[0].style.left = this.labels.p_from_left +
                                "%";
                            if (this.old_to !== this.result.to || this.force_redraw) this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                            this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                            this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
                            this.$cache.input.data("from", this.result.from);
                            this.$cache.input.data("to", this.result.to)
                        }
                        this.old_from ===
                            this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change");
                        this.old_from = this.result.from;
                        this.old_to = this.result.to;
                        this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange();
                        if (this.is_key || this.is_click) this.is_click = this.is_key = !1, this.callOnFinish();
                        this.is_finish = this.is_resize = this.is_update = !1
                    }
                    this.force_redraw = this.is_click = this.is_key = this.is_start = !1
                }
            }
        },
        drawLabels: function() {
            if (this.options) {
                var a = this.options.values.length,
                    b = this.options.p_values,
                    d;
                if (!this.options.hide_from_to)
                    if ("single" === this.options.type) a = a ? this.decorate(b[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(a), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                    else {
                        a ? (this.options.decorate_both ?
                            (a = this.decorate(b[this.result.from]), a += this.options.values_separator, a += this.decorate(b[this.result.to])) : a = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to]), d = this.decorate(b[this.result.from]), b = this.decorate(b[this.result.to])) : (this.options.decorate_both ? (a = this.decorate(this._prettify(this.result.from), this.result.from), a += this.options.values_separator, a += this.decorate(this._prettify(this.result.to), this.result.to)) : a = this.decorate(this._prettify(this.result.from) +
                            this.options.values_separator + this._prettify(this.result.to), this.result.to), d = this.decorate(this._prettify(this.result.from), this.result.from), b = this.decorate(this._prettify(this.result.to), this.result.to));
                        this.$cache.single.html(a);
                        this.$cache.from.html(d);
                        this.$cache.to.html(b);
                        this.calcLabels();
                        b = Math.min(this.labels.p_single_left, this.labels.p_from_left);
                        a = this.labels.p_single_left + this.labels.p_single_fake;
                        d = this.labels.p_to_left + this.labels.p_to_fake;
                        var c = Math.max(a, d);
                        this.labels.p_from_left +
                            this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target && (this.$cache.to[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c = d) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden",
                                this.$cache.single[0].style.visibility = "visible", c = Math.max(a, d))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden");
                        this.$cache.min[0].style.visibility = b < this.labels.p_min + 1 ? "hidden" : "visible";
                        this.$cache.max[0].style.visibility = c > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                    }
            }
        },
        drawShadow: function() {
            var a = this.options,
                b = this.$cache,
                d = "number" === typeof a.from_min && !isNaN(a.from_min),
                c = "number" === typeof a.from_max &&
                !isNaN(a.from_max),
                e = "number" === typeof a.to_min && !isNaN(a.to_min),
                g = "number" === typeof a.to_max && !isNaN(a.to_max);
            "single" === a.type ? a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_single[0].style.display = "block", b.shad_single[0].style.left = d + "%", b.shad_single[0].style.width = c + "%") : b.shad_single[0].style.display = "none" :
                (a.from_shadow && (d || c) ? (d = this.convertToPercent(d ? a.from_min : a.min), c = this.convertToPercent(c ? a.from_max : a.max) - d, d = this.toFixed(d - this.coords.p_handle / 100 * d), c = this.toFixed(c - this.coords.p_handle / 100 * c), d += this.coords.p_handle / 2, b.shad_from[0].style.display = "block", b.shad_from[0].style.left = d + "%", b.shad_from[0].style.width = c + "%") : b.shad_from[0].style.display = "none", a.to_shadow && (e || g) ? (e = this.convertToPercent(e ? a.to_min : a.min), a = this.convertToPercent(g ? a.to_max : a.max) - e, e = this.toFixed(e - this.coords.p_handle /
                    100 * e), a = this.toFixed(a - this.coords.p_handle / 100 * a), e += this.coords.p_handle / 2, b.shad_to[0].style.display = "block", b.shad_to[0].style.left = e + "%", b.shad_to[0].style.width = a + "%") : b.shad_to[0].style.display = "none")
        },
        callOnStart: function() {
            if (this.options.onStart && "function" === typeof this.options.onStart) this.options.onStart(this.result)
        },
        callOnChange: function() {
            if (this.options.onChange && "function" === typeof this.options.onChange) this.options.onChange(this.result)
        },
        callOnFinish: function() {
            if (this.options.onFinish &&
                "function" === typeof this.options.onFinish) this.options.onFinish(this.result)
        },
        callOnUpdate: function() {
            if (this.options.onUpdate && "function" === typeof this.options.onUpdate) this.options.onUpdate(this.result)
        },
        toggleInput: function() {
            this.$cache.input.toggleClass("irs-hidden-input")
        },
        convertToPercent: function(a, b) {
            var d = this.options.max - this.options.min;
            return d ? this.toFixed((b ? a : a - this.options.min) / (d / 100)) : (this.no_diapason = !0, 0)
        },
        convertToValue: function(a) {
            var b = this.options.min,
                d = this.options.max,
                c = b.toString().split(".")[1],
                e = d.toString().split(".")[1],
                g, l, k = 0,
                f = 0;
            if (0 === a) return this.options.min;
            if (100 === a) return this.options.max;
            c && (k = g = c.length);
            e && (k = l = e.length);
            g && l && (k = g >= l ? g : l);
            0 > b && (f = Math.abs(b), b = +(b + f).toFixed(k), d = +(d + f).toFixed(k));
            a = (d - b) / 100 * a + b;
            (b = this.options.step.toString().split(".")[1]) ? a = +a.toFixed(b.length): (a /= this.options.step, a *= this.options.step, a = +a.toFixed(0));
            f && (a -= f);
            f = b ? +a.toFixed(b.length) : this.toFixed(a);
            f < this.options.min ? f = this.options.min : f > this.options.max &&
                (f = this.options.max);
            return f
        },
        calcWithStep: function(a) {
            var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
            100 < b && (b = 100);
            100 === a && (b = 100);
            return this.toFixed(b)
        },
        checkMinInterval: function(a, b, d) {
            var c = this.options;
            if (!c.min_interval) return a;
            a = this.convertToValue(a);
            b = this.convertToValue(b);
            "from" === d ? b - a < c.min_interval && (a = b - c.min_interval) : a - b < c.min_interval && (a = b + c.min_interval);
            return this.convertToPercent(a)
        },
        checkMaxInterval: function(a, b, d) {
            var c = this.options;
            if (!c.max_interval) return a;
            a = this.convertToValue(a);
            b = this.convertToValue(b);
            "from" === d ? b - a > c.max_interval && (a = b - c.max_interval) : a - b > c.max_interval && (a = b + c.max_interval);
            return this.convertToPercent(a)
        },
        checkDiapason: function(a, b, d) {
            a = this.convertToValue(a);
            var c = this.options;
            "number" !== typeof b && (b = c.min);
            "number" !== typeof d && (d = c.max);
            a < b && (a = b);
            a > d && (a = d);
            return this.convertToPercent(a)
        },
        toFixed: function(a) {
            a = a.toFixed(9);
            return +a
        },
        _prettify: function(a) {
            return this.options.prettify_enabled ? this.options.prettify && "function" ===
                typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a) : a
        },
        prettify: function(a) {
            return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        },
        checkEdges: function(a, b) {
            if (!this.options.force_edges) return this.toFixed(a);
            0 > a ? a = 0 : a > 100 - b && (a = 100 - b);
            return this.toFixed(a)
        },
        validate: function() {
            var a = this.options,
                b = this.result,
                d = a.values,
                c = d.length,
                e, g;
            "string" === typeof a.min && (a.min = +a.min);
            "string" === typeof a.max && (a.max = +a.max);
            "string" === typeof a.from &&
                (a.from = +a.from);
            "string" === typeof a.to && (a.to = +a.to);
            "string" === typeof a.step && (a.step = +a.step);
            "string" === typeof a.from_min && (a.from_min = +a.from_min);
            "string" === typeof a.from_max && (a.from_max = +a.from_max);
            "string" === typeof a.to_min && (a.to_min = +a.to_min);
            "string" === typeof a.to_max && (a.to_max = +a.to_max);
            "string" === typeof a.keyboard_step && (a.keyboard_step = +a.keyboard_step);
            "string" === typeof a.grid_num && (a.grid_num = +a.grid_num);
            a.max < a.min && (a.max = a.min);
            if (c)
                for (a.p_values = [], a.min = 0, a.max = c - 1, a.step =
                    1, a.grid_num = a.max, a.grid_snap = !0, g = 0; g < c; g++) e = +d[g], isNaN(e) ? e = d[g] : (d[g] = e, e = this._prettify(e)), a.p_values.push(e);
            if ("number" !== typeof a.from || isNaN(a.from)) a.from = a.min;
            if ("number" !== typeof a.to || isNaN(a.from)) a.to = a.max;
            if ("single" === a.type) a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max);
            else {
                if (a.from < a.min || a.from > a.max) a.from = a.min;
                if (a.to > a.max || a.to < a.min) a.to = a.max;
                a.from > a.to && (a.from = a.to)
            }
            if ("number" !== typeof a.step || isNaN(a.step) || !a.step || 0 > a.step) a.step = 1;
            if ("number" !==
                typeof a.keyboard_step || isNaN(a.keyboard_step) || !a.keyboard_step || 0 > a.keyboard_step) a.keyboard_step = 5;
            "number" === typeof a.from_min && a.from < a.from_min && (a.from = a.from_min);
            "number" === typeof a.from_max && a.from > a.from_max && (a.from = a.from_max);
            "number" === typeof a.to_min && a.to < a.to_min && (a.to = a.to_min);
            "number" === typeof a.to_max && a.from > a.to_max && (a.to = a.to_max);
            if (b) {
                b.min !== a.min && (b.min = a.min);
                b.max !== a.max && (b.max = a.max);
                if (b.from < b.min || b.from > b.max) b.from = a.from;
                if (b.to < b.min || b.to > b.max) b.to = a.to
            }
            if ("number" !==
                typeof a.min_interval || isNaN(a.min_interval) || !a.min_interval || 0 > a.min_interval) a.min_interval = 0;
            if ("number" !== typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || 0 > a.max_interval) a.max_interval = 0;
            a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min);
            a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min)
        },
        decorate: function(a, b) {
            var d = "",
                c = this.options;
            c.prefix && (d += c.prefix);
            d += a;
            c.max_postfix && (c.values.length && a === c.p_values[c.max] ? (d += c.max_postfix,
                c.postfix && (d += " ")) : b === c.max && (d += c.max_postfix, c.postfix && (d += " ")));
            c.postfix && (d += c.postfix);
            return d
        },
        updateFrom: function() {
            this.result.from = this.options.from;
            this.result.from_percent = this.convertToPercent(this.result.from);
            this.options.values && (this.result.from_value = this.options.values[this.result.from])
        },
        updateTo: function() {
            this.result.to = this.options.to;
            this.result.to_percent = this.convertToPercent(this.result.to);
            this.options.values && (this.result.to_value = this.options.values[this.result.to])
        },
        updateResult: function() {
            this.result.min = this.options.min;
            this.result.max = this.options.max;
            this.updateFrom();
            this.updateTo()
        },
        appendGrid: function() {
            if (this.options.grid) {
                var a = this.options,
                    b, d;
                b = a.max - a.min;
                var c = a.grid_num,
                    e = 0,
                    g = 0,
                    f = 4,
                    k, h, m = 0,
                    n = "";
                this.calcGridMargin();
                a.grid_snap ? (c = b / a.step, e = this.toFixed(a.step / (b / 100))) : e = this.toFixed(100 / c);
                4 < c && (f = 3);
                7 < c && (f = 2);
                14 < c && (f = 1);
                28 < c && (f = 0);
                for (b = 0; b < c + 1; b++) {
                    k = f;
                    g = this.toFixed(e * b);
                    100 < g && (g = 100, k -= 2, 0 > k && (k = 0));
                    this.coords.big[b] = g;
                    h = (g - e * (b - 1)) /
                        (k + 1);
                    for (d = 1; d <= k && 0 !== g; d++) m = this.toFixed(g - h * d), n += '<span class="irs-grid-pol small" style="left: ' + m + '%"></span>';
                    n += '<span class="irs-grid-pol" style="left: ' + g + '%"></span>';
                    m = this.convertToValue(g);
                    m = a.values.length ? a.p_values[m] : this._prettify(m);
                    n += '<span class="irs-grid-text js-grid-text-' + b + '" style="left: ' + g + '%">' + m + "</span>"
                }
                this.coords.big_num = Math.ceil(c + 1);
                this.$cache.cont.addClass("irs-with-grid");
                this.$cache.grid.html(n);
                this.cacheGridLabels()
            }
        },
        cacheGridLabels: function() {
            var a,
                b, d = this.coords.big_num;
            for (b = 0; b < d; b++) a = this.$cache.grid.find(".js-grid-text-" + b), this.$cache.grid_labels.push(a);
            this.calcGridLabels()
        },
        calcGridLabels: function() {
            var a, b;
            b = [];
            var d = [],
                c = this.coords.big_num;
            for (a = 0; a < c; a++) this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] = this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2), b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), d[a] = this.toFixed(b[a] +
                this.coords.big_p[a]);
            this.options.force_edges && (b[0] < -this.coords.grid_gap && (b[0] = -this.coords.grid_gap, d[0] = this.toFixed(b[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), d[c - 1] > 100 + this.coords.grid_gap && (d[c - 1] = 100 + this.coords.grid_gap, b[c - 1] = this.toFixed(d[c - 1] - this.coords.big_p[c - 1]), this.coords.big_x[c - 1] = this.toFixed(this.coords.big_p[c - 1] - this.coords.grid_gap)));
            this.calcGridCollision(2, b, d);
            this.calcGridCollision(4, b, d);
            for (a = 0; a < c; a++) b = this.$cache.grid_labels[a][0],
                b.style.marginLeft = -this.coords.big_x[a] + "%"
        },
        calcGridCollision: function(a, b, d) {
            var c, e, g, f = this.coords.big_num;
            for (c = 0; c < f; c += a) {
                e = c + a / 2;
                if (e >= f) break;
                g = this.$cache.grid_labels[e][0];
                g.style.visibility = d[c] <= b[e] ? "visible" : "hidden"
            }
        },
        calcGridMargin: function() {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle /
                this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        },
        update: function(a) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = f.extend(this.options, a), this.validate(), this.updateResult(a), this.toggleInput(), this.remove(), this.init(!0))
        },
        reset: function() {
            this.input && (this.updateResult(),
                this.update())
        },
        destroy: function() {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), f.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
        }
    };
    f.fn.ionRangeSlider = function(a) {
        return this.each(function() {
            f.data(this, "ionRangeSlider") || f.data(this, "ionRangeSlider", new q(this, a, u++))
        })
    };
    (function() {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !h.requestAnimationFrame; ++d) h.requestAnimationFrame = h[b[d] + "RequestAnimationFrame"], h.cancelAnimationFrame =
            h[b[d] + "CancelAnimationFrame"] || h[b[d] + "CancelRequestAnimationFrame"];
        h.requestAnimationFrame || (h.requestAnimationFrame = function(b, d) {
            var g = (new Date).getTime(),
                f = Math.max(0, 16 - (g - a)),
                k = h.setTimeout(function() {
                    b(g + f)
                }, f);
            a = g + f;
            return k
        });
        h.cancelAnimationFrame || (h.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    })()
})(jQuery, document, window, navigator);

/**
 * Check Switchery.js
 */
! function() {
    function t(e) {
        var n = t.modules[e];
        if (!n) throw new Error('failed to require "' + e + '"');
        return "exports" in n || "function" != typeof n.definition || (n.client = n.component = !0, n.definition.call(this, n.exports = {}, n), delete n.definition), n.exports
    }
    t.loader = "component", t.helper = {}, t.helper.semVerSort = function(t, e) {
        for (var n = t.version.split("."), i = e.version.split("."), o = 0; o < n.length; ++o) {
            var s = parseInt(n[o], 10),
                r = parseInt(i[o], 10);
            if (s !== r) return s > r ? 1 : -1;
            var c = n[o].substr(("" + s).length),
                a = i[o].substr(("" + r).length);
            if ("" === c && "" !== a) return 1;
            if ("" !== c && "" === a) return -1;
            if ("" !== c && "" !== a) return c > a ? 1 : -1
        }
        return 0
    }, t.latest = function(e, n) {
        function i(t) {
            throw new Error('failed to find latest module of "' + t + '"')
        }
        var o = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,
            s = /(.*)~(.*)/;
        s.test(e) || i(e);
        for (var r = Object.keys(t.modules), c = [], a = [], l = 0; l < r.length; l++) {
            var h = r[l];
            if (new RegExp(e + "@").test(h)) {
                var u = h.substr(e.length + 1),
                    d = o.exec(h);
                null != d ? c.push({
                    version: u,
                    name: h
                }) : a.push({
                    version: u,
                    name: h
                })
            }
        }
        if (0 === c.concat(a).length && i(e), c.length > 0) {
            var p = c.sort(t.helper.semVerSort).pop().name;
            return n === !0 ? p : t(p)
        }
        var p = a.sort(function(t, e) {
            return t.name > e.name
        })[0].name;
        return n === !0 ? p : t(p)
    }, t.modules = {}, t.register = function(e, n) {
        t.modules[e] = {
            definition: n
        }
    }, t.define = function(e, n) {
        t.modules[e] = {
            exports: n
        }
    }, t.register("abpetkov~transitionize@0.0.3", function(t, e) {
        function n(t, e) {
            return this instanceof n ? (this.element = t, this.props = e || {}, void this.init()) : new n(t, e)
        }
        e.exports = n, n.prototype.isSafari = function() {
            return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        }, n.prototype.init = function() {
            var t = [];
            for (var e in this.props) t.push(e + " " + this.props[e]);
            this.element.style.transition = t.join(", "), this.isSafari() && (this.element.style.webkitTransition = t.join(", "))
        }
    }), t.register("ftlabs~fastclick@v0.6.11", function(t, e) {
        function n(t) {
            "use strict";
            var e, i = this;
            if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = t, !t || !t.nodeType) throw new TypeError("Layer must be a document node");
            this.onClick = function() {
                return n.prototype.onClick.apply(i, arguments)
            }, this.onMouse = function() {
                return n.prototype.onMouse.apply(i, arguments)
            }, this.onTouchStart = function() {
                return n.prototype.onTouchStart.apply(i, arguments)
            }, this.onTouchMove = function() {
                return n.prototype.onTouchMove.apply(i, arguments)
            }, this.onTouchEnd = function() {
                return n.prototype.onTouchEnd.apply(i, arguments)
            }, this.onTouchCancel = function() {
                return n.prototype.onTouchCancel.apply(i, arguments)
            }, n.notNeeded(t) || (this.deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
            }, t.addEventListener = function(e, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(t) {
                    t.propagationStopped || n(t)
                }), i) : o.call(t, e, n, i)
            }), "function" == typeof t.onclick && (e = t.onclick, t.addEventListener("click", function(t) {
                e(t)
            }, !1), t.onclick = null))
        }
        n.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, n.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), n.prototype.deviceIsIOS4 = n.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), n.prototype.deviceIsIOSWithBadTarget = n.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), n.prototype.needsClick = function(t) {
            "use strict";
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (this.deviceIsIOS && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, n.prototype.needsFocus = function(t) {
            "use strict";
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !this.deviceIsAndroid;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, n.prototype.sendClick = function(t, e) {
            "use strict";
            var n, i;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
        }, n.prototype.determineEventType = function(t) {
            "use strict";
            return this.deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, n.prototype.focus = function(t) {
            "use strict";
            var e;
            this.deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, n.prototype.updateScrollParent = function(t) {
            "use strict";
            var e, n;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n, t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, n.prototype.getTargetElementFromEventTarget = function(t) {
            "use strict";
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, n.prototype.onTouchStart = function(t) {
            "use strict";
            var e, n, i;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], this.deviceIsIOS) {
                if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
                if (!this.deviceIsIOS4) {
                    if (n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < 200 && t.preventDefault(), !0
        }, n.prototype.touchHasMoved = function(t) {
            "use strict";
            var e = t.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
        }, n.prototype.onTouchMove = function(t) {
            "use strict";
            return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
        }, n.prototype.findControl = function(t) {
            "use strict";
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, n.prototype.onTouchEnd = function(t) {
            "use strict";
            var e, n, i, o, s, r = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (s = t.changedTouches[0], r = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || r, r.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = r.tagName.toLowerCase(), "label" === i) {
                if (e = this.findControl(r)) {
                    if (this.focus(r), this.deviceIsAndroid) return !1;
                    r = e
                }
            } else if (this.needsFocus(r)) return t.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(r), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
            return this.deviceIsIOS && !this.deviceIsIOS4 && (o = r.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(r) || (t.preventDefault(), this.sendClick(r, t)), !1)
        }, n.prototype.onTouchCancel = function() {
            "use strict";
            this.trackingClick = !1, this.targetElement = null
        }, n.prototype.onMouse = function(t) {
            "use strict";
            return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
        }, n.prototype.onClick = function(t) {
            "use strict";
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, n.prototype.destroy = function() {
            "use strict";
            var t = this.layer;
            this.deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, n.notNeeded = function(t) {
            "use strict";
            var e, i;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!n.prototype.deviceIsAndroid) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (i > 31 && window.innerWidth <= window.screen.width) return !0
                }
            }
            return "none" === t.style.msTouchAction ? !0 : !1
        }, n.attach = function(t) {
            "use strict";
            return new n(t)
        }, "undefined" != typeof define && define.amd ? define(function() {
            "use strict";
            return n
        }) : "undefined" != typeof e && e.exports ? (e.exports = n.attach, e.exports.FastClick = n) : window.FastClick = n
    }), t.register("component~indexof@0.0.3", function(t, e) {
        e.exports = function(t, e) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0; n < t.length; ++n)
                if (t[n] === e) return n;
            return -1
        }
    }), t.register("component~classes@1.2.1", function(e, n) {
        function i(t) {
            if (!t) throw new Error("A DOM element reference is required");
            this.el = t, this.list = t.classList
        }
        var o = t("component~indexof@0.0.3"),
            s = /\s+/,
            r = Object.prototype.toString;
        n.exports = function(t) {
            return new i(t)
        }, i.prototype.add = function(t) {
            if (this.list) return this.list.add(t), this;
            var e = this.array(),
                n = o(e, t);
            return ~n || e.push(t), this.el.className = e.join(" "), this
        }, i.prototype.remove = function(t) {
            if ("[object RegExp]" == r.call(t)) return this.removeMatching(t);
            if (this.list) return this.list.remove(t), this;
            var e = this.array(),
                n = o(e, t);
            return ~n && e.splice(n, 1), this.el.className = e.join(" "), this
        }, i.prototype.removeMatching = function(t) {
            for (var e = this.array(), n = 0; n < e.length; n++) t.test(e[n]) && this.remove(e[n]);
            return this
        }, i.prototype.toggle = function(t, e) {
            return this.list ? ("undefined" != typeof e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this) : ("undefined" != typeof e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), this)
        }, i.prototype.array = function() {
            var t = this.el.className.replace(/^\s+|\s+$/g, ""),
                e = t.split(s);
            return "" === e[0] && e.shift(), e
        }, i.prototype.has = i.prototype.contains = function(t) {
            return this.list ? this.list.contains(t) : !!~o(this.array(), t)
        }
    }), t.register("component~event@0.1.4", function(t, e) {
        var n = window.addEventListener ? "addEventListener" : "attachEvent",
            i = window.removeEventListener ? "removeEventListener" : "detachEvent",
            o = "addEventListener" !== n ? "on" : "";
        t.bind = function(t, e, i, s) {
            return t[n](o + e, i, s || !1), i
        }, t.unbind = function(t, e, n, s) {
            return t[i](o + e, n, s || !1), n
        }
    }), t.register("component~query@0.0.3", function(t, e) {
        function n(t, e) {
            return e.querySelector(t)
        }
        t = e.exports = function(t, e) {
            return e = e || document, n(t, e)
        }, t.all = function(t, e) {
            return e = e || document, e.querySelectorAll(t)
        }, t.engine = function(e) {
            if (!e.one) throw new Error(".one callback required");
            if (!e.all) throw new Error(".all callback required");
            return n = e.one, t.all = e.all, t
        }
    }), t.register("component~matches-selector@0.1.5", function(e, n) {
        function i(t, e) {
            if (!t || 1 !== t.nodeType) return !1;
            if (r) return r.call(t, e);
            for (var n = o.all(e, t.parentNode), i = 0; i < n.length; ++i)
                if (n[i] == t) return !0;
            return !1
        }
        var o = t("component~query@0.0.3"),
            s = Element.prototype,
            r = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector || s.oMatchesSelector;
        n.exports = i
    }), t.register("component~closest@0.1.4", function(e, n) {
        var i = t("component~matches-selector@0.1.5");
        n.exports = function(t, e, n, o) {
            for (t = n ? {
                    parentNode: t
                } : t, o = o || document;
                (t = t.parentNode) && t !== document;) {
                if (i(t, e)) return t;
                if (t === o) return
            }
        }
    }), t.register("component~delegate@0.2.3", function(e, n) {
        var i = t("component~closest@0.1.4"),
            o = t("component~event@0.1.4");
        e.bind = function(t, e, n, s, r) {
            return o.bind(t, n, function(n) {
                var o = n.target || n.srcElement;
                n.delegateTarget = i(o, e, !0, t), n.delegateTarget && s.call(t, n)
            }, r)
        }, e.unbind = function(t, e, n, i) {
            o.unbind(t, e, n, i)
        }
    }), t.register("component~events@1.0.9", function(e, n) {
        function i(t, e) {
            if (!(this instanceof i)) return new i(t, e);
            if (!t) throw new Error("element required");
            if (!e) throw new Error("object required");
            this.el = t, this.obj = e, this._events = {}
        }

        function o(t) {
            var e = t.split(/ +/);
            return {
                name: e.shift(),
                selector: e.join(" ")
            }
        }
        var s = t("component~event@0.1.4"),
            r = t("component~delegate@0.2.3");
        n.exports = i, i.prototype.sub = function(t, e, n) {
            this._events[t] = this._events[t] || {}, this._events[t][e] = n
        }, i.prototype.bind = function(t, e) {
            function n() {
                var t = [].slice.call(arguments).concat(h);
                a[e].apply(a, t)
            }
            var i = o(t),
                c = this.el,
                a = this.obj,
                l = i.name,
                e = e || "on" + l,
                h = [].slice.call(arguments, 2);
            return i.selector ? n = r.bind(c, i.selector, l, n) : s.bind(c, l, n), this.sub(l, e, n), n
        }, i.prototype.unbind = function(t, e) {
            if (0 == arguments.length) return this.unbindAll();
            if (1 == arguments.length) return this.unbindAllOf(t);
            var n = this._events[t];
            if (n) {
                var i = n[e];
                i && s.unbind(this.el, t, i)
            }
        }, i.prototype.unbindAll = function() {
            for (var t in this._events) this.unbindAllOf(t)
        }, i.prototype.unbindAllOf = function(t) {
            var e = this._events[t];
            if (e)
                for (var n in e) this.unbind(t, n)
        }
    }), t.register("switchery", function(e, n) {
        function i(t, e) {
            if (!(this instanceof i)) return new i(t, e);
            this.element = t, this.options = e || {};
            for (var n in a) null == this.options[n] && (this.options[n] = a[n]);
            null != this.element && "checkbox" == this.element.type && this.init(), this.isDisabled() === !0 && this.disable()
        }
        var o = t("abpetkov~transitionize@0.0.3"),
            s = t("ftlabs~fastclick@v0.6.11"),
            r = t("component~classes@1.2.1"),
            c = t("component~events@1.0.9");
        n.exports = i;
        var a = {
            color: "#acd373",
            secondaryColor: "#dfdfdf",
            jackColor: "#fff",
            jackSecondaryColor: null,
            className: "switchery",
            disabled: !1,
            disabledOpacity: .5,
            speed: "0.4s",
            size: "default"
        };
        i.prototype.hide = function() {
            this.element.style.display = "none"
        }, i.prototype.show = function() {
            var t = this.create();
            this.insertAfter(this.element, t)
        }, i.prototype.create = function() {
            return this.switcher = document.createElement("span"), this.jack = document.createElement("small"), this.switcher.appendChild(this.jack), this.switcher.className = this.options.className, this.events = c(this.switcher, this), this.switcher
        }, i.prototype.insertAfter = function(t, e) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }, i.prototype.setPosition = function(t) {
            var e = this.isChecked(),
                n = this.switcher,
                i = this.jack;
            t && e ? e = !1 : t && !e && (e = !0), e === !0 ? (this.element.checked = !0, window.getComputedStyle ? i.style.left = parseInt(window.getComputedStyle(n).width) - parseInt(window.getComputedStyle(i).width) + "px" : i.style.left = parseInt(n.currentStyle.width) - parseInt(i.currentStyle.width) + "px", this.options.color && this.colorize(), this.setSpeed()) : (i.style.left = 0, this.element.checked = !1, this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor, this.switcher.style.borderColor = this.options.secondaryColor, this.switcher.style.backgroundColor = this.options.secondaryColor !== a.secondaryColor ? this.options.secondaryColor : "#fff", this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor, this.setSpeed())
        }, i.prototype.setSpeed = function() {
            var t = {},
                e = {
                    "background-color": this.options.speed,
                    left: this.options.speed.replace(/[a-z]/, "") / 2 + "s"
                };
            t = this.isChecked() ? {
                border: this.options.speed,
                "box-shadow": this.options.speed,
                "background-color": 3 * this.options.speed.replace(/[a-z]/, "") + "s"
            } : {
                border: this.options.speed,
                "box-shadow": this.options.speed
            }, o(this.switcher, t), o(this.jack, e)
        }, i.prototype.setSize = function() {
            var t = "switchery-small",
                e = "switchery-default",
                n = "switchery-large";
            switch (this.options.size) {
                case "small":
                    r(this.switcher).add(t);
                    break;
                case "large":
                    r(this.switcher).add(n);
                    break;
                default:
                    r(this.switcher).add(e)
            }
        }, i.prototype.colorize = function() {
            var t = this.switcher.offsetHeight / 2;
            this.switcher.style.backgroundColor = this.options.color, this.switcher.style.borderColor = this.options.color, this.switcher.style.boxShadow = "inset 0 0 0 " + t + "px " + this.options.color, this.jack.style.backgroundColor = this.options.jackColor
        }, i.prototype.handleOnchange = function(t) {
            if (document.dispatchEvent) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("change", !0, !0), this.element.dispatchEvent(e)
            } else this.element.fireEvent("onchange")
        }, i.prototype.handleChange = function() {
            var t = this,
                e = this.element;
            e.addEventListener ? e.addEventListener("change", function() {
                t.setPosition()
            }) : e.attachEvent("onchange", function() {
                t.setPosition()
            })
        }, i.prototype.handleClick = function() {
            var t = this.switcher;
            s(t), this.events.bind("click", "bindClick")
        }, i.prototype.bindClick = function() {
            var t = this.element.parentNode.tagName.toLowerCase(),
                e = "label" === t ? !1 : !0;
            this.setPosition(e), this.handleOnchange(this.element.checked)
        }, i.prototype.markAsSwitched = function() {
            this.element.setAttribute("data-switchery", !0)
        }, i.prototype.markedAsSwitched = function() {
            return this.element.getAttribute("data-switchery")
        }, i.prototype.init = function() {
            this.hide(), this.show(), this.setSize(), this.setPosition(), this.markAsSwitched(), this.handleChange(), this.handleClick()
        }, i.prototype.isChecked = function() {
            return this.element.checked
        }, i.prototype.isDisabled = function() {
            return this.options.disabled || this.element.disabled || this.element.readOnly
        }, i.prototype.destroy = function() {
            this.events.unbind()
        }, i.prototype.enable = function() {
            this.options.disabled && (this.options.disabled = !1), this.element.disabled && (this.element.disabled = !1), this.element.readOnly && (this.element.readOnly = !1), this.switcher.style.opacity = 1, this.events.bind("click", "bindClick")
        }, i.prototype.disable = function() {
            this.options.disabled || (this.options.disabled = !0), this.element.disabled || (this.element.disabled = !0), this.element.readOnly || (this.element.readOnly = !0), this.switcher.style.opacity = this.options.disabledOpacity, this.destroy()
        }
    }), "object" == typeof exports ? module.exports = t("switchery") : "function" == typeof define && define.amd ? define("Switchery", [], function() {
        return t("switchery")
    }) : (this || window).Switchery = t("switchery")
}();

/*!
 * jquery.instagramFeed
 *
 * @version 1.0
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 *
 * https://github.com/BanNsS1/jquery.instagramFeed
 *
 */
(function(e) {
    var l = {
        username: "",
        container: "",
        display_profile: !0,
        display_biography: !0,
        display_gallery: !0,
        get_raw_json: !1,
        callback: null,
        styling: !0,
        items: 8,
        items_per_row: 4,
        margin: .5
    };
    e.instagramFeed = function(b) {
        b = e.fn.extend({}, l, b);
        "" == b.username && "" == b.tag ? console.log("Instagram Feed: Error, no username or tag found.") : b.get_raw_json || "" != b.container ? b.get_raw_json && null == b.callback ? console.log("Instagram Feed: Error, no callback defined to get the raw json") : e.get("https://www.instagram.com/" + b.username,
            function(a) {
                a = a.split("window._sharedData = ");
                a = a[1].split("\x3c/script>");
                a = a[0];
                a = a.substr(0, a.length - 1);
                a = JSON.parse(a);
                a = a.entry_data.ProfilePage[0].graphql.user;
                if (b.get_raw_json) b.callback(JSON.stringify({
                    id: a.id,
                    username: a.username,
                    full_name: a.full_name,
                    is_private: a.is_private,
                    is_verified: a.is_verified,
                    biography: a.biography,
                    followed_by: a.edge_followed_by.count,
                    following: a.edge_follow.count,
                    images: a.edge_owner_to_timeline_media.edges
                }));
                else {
                    var d = "",
                        f = "",
                        g = "",
                        h = "",
                        k = "";
                    b.styling && (d = " style='text-align:center;'",
                        f = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", g = " style='font-size:1.2em;'", h = " style='font-size:1em;'", k = " style='margin:" + b.margin + "% " + b.margin + "%;width:" + (100 - 2 * b.margin * b.items_per_row) / b.items_per_row + "%;float:left;'");
                    var c = "";
                    b.display_profile && (c = c + ("<div class='instagram_profile'" + d + ">") + ("\t<img class='instagram_profile_image' src='" + a.profile_pic_url + "' alt='" + b.username + " profile pic'" + f + " />"), c += "\t<p class='instagram_username'" + g + ">@" + a.full_name + " (<a href='https://www.instagram.com/" +
                        b.username + "'>@" + b.username + "</a>)</p>");
                    b.display_biography && (c += "\t<p class='instagram_biography'" + h + ">" + a.biography + "</p>");
                    b.display_profile && (c += "</div>");
                    if (b.display_gallery)
                        if (a.is_private) c += "<p class='instagram_private'><strong>This profile is private</strong></p>";
                        else {
                            a = a.edge_owner_to_timeline_media.edges;
                            max = a.length > b.items ? b.items : a.length;
                            c += "<div class='instagram_gallery'>";
                            for (d = 0; d < max; d++) c += "<a href='https://www.instagram.com/p/" + a[d].node.shortcode + "' target='_blank'>", c += "\t<img src='" +
                                a[d].node.thumbnail_src + "' alt='" + b.username + " instagram image " + d + "'" + k + " />", c += "</a>";
                            c += "</div>"
                        }
                    e(b.container).html(c)
                }
            }) : console.log("Instagram Feed: Error, no container found.")
    }
})(jQuery);