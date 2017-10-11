// All code and conventions are protected by copyright
!function(window, document, undefined) {
    function assert(e, t) {
        if (!e)
            throw new Error(t || "Assertion Failure")
    }
    function OrientationChangeEventEmitter() {
        SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
    }
    function FacebookEventEmitter(e) {
        this.delay = 250,
        this.FB = e,
        SL.domReady(SL.bind(function() {
            SL.poll(SL.bind(this.initialize, this), this.delay, 8)
        }, this))
    }
    function VideoPlayedEventEmitter() {
        this.rules = SL.filter(SL.rules, function(e) {
            return "videoplayed" === e.event.substring(0, 11)
        }),
        this.eventHandler = SL.bind(this.onUpdateTime, this)
    }
    function ElementExistsEventEmitter() {
        this.rules = SL.filter(SL.rules, function(e) {
            return "elementexists" === e.event
        })
    }
    function LeaveEventEmitter() {
        SL.getToolsByType("nielsen").length > 0 && SL.domReady(SL.bind(this.initialize, this))
    }
    function LocationChangeEventEmitter() {
        this.lastURL = SL.URL(),
        this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this),
        this._onPopState = SL.bind(this.onPopState, this),
        this._onHashChange = SL.bind(this.onHashChange, this),
        this._pushState = SL.bind(this.pushState, this),
        this._replaceState = SL.bind(this.replaceState, this),
        this.initialize()
    }
    function DataElementChangeEmitter() {
        var e = SL.filter(SL.rules, function(e) {
            return 0 === e.event.indexOf("dataelementchange")
        });
        this.dataElementsNames = SL.map(e, function(e) {
            var t = e.event.match(/dataelementchange\((.*)\)/i);
            return t[1]
        }, this),
        this.initPolling()
    }
    function HoverEventEmitter() {
        var e = this.eventRegex = /^hover\(([0-9]+)\)$/
          , t = this.rules = [];
        SL.each(SL.rules, function(n) {
            var a = n.event.match(e);
            a && t.push([Number(n.event.match(e)[1]), n.selector])
        })
    }
    function VisibilityEventEmitter() {
        this.defineEvents(),
        this.visibilityApiHasPriority = !0,
        document.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, document, "focusout");
        SL.bindEvent("aftertoolinit", function() {
            SL.fireEvent(SL.visibility.isHidden() ? "tabblur" : "tabfocus")
        })
    }
    function TwitterEventEmitter(e) {
        SL.domReady(SL.bind(function() {
            this.twttr = e || window.twttr,
            this.initialize()
        }, this))
    }
    function InViewEventEmitter(e) {
        e = e || SL.rules,
        this.rules = SL.filter(e, function(e) {
            return "inview" === e.event
        }),
        this.elements = [],
        this.eventHandler = SL.bind(this.track, this),
        SL.addEventHandler(window, "scroll", this.eventHandler),
        SL.addEventHandler(window, "load", this.eventHandler)
    }
    function BasicTool(e) {
        SL.BaseTool.call(this, e),
        this.name = e.name || "Basic"
    }
    function VisitorIdTool(e) {
        SL.BaseTool.call(this, e),
        this.name = e.name || "VisitorID",
        this.initialize()
    }
    function DefaultTool() {
        SL.BaseTool.call(this),
        this.asyncScriptCallbackQueue = [],
        this.argsForBlockingScripts = []
    }
    function NielsenTool(e) {
        SL.BaseTool.call(this, e),
        this.defineListeners(),
        this.beaconMethod = "plainBeacon",
        this.adapt = new NielsenTool.DataAdapters,
        this.dataProvider = new NielsenTool.DataProvider.Aggregate
    }
    function Tnt(e) {
        SL.BaseTool.call(this, e),
        this.styleElements = {},
        this.targetPageParamsStore = {}
    }
    function SiteCatalystTool(e) {
        SL.BaseTool.call(this, e),
        this.varBindings = {},
        this.events = [],
        this.products = [],
        this.customSetupFuns = []
    }
    function GATool(e) {
        SL.BaseTool.call(this, e)
    }
    function GAUniversalTool(e) {
        SL.BaseTool.call(this, e)
    }
    var ToString = Object.prototype.toString
      , Overrides = window._satellite && window._satellite.override
      , SL = {
        initialized: !1,
        $data: function(e, t, n) {
            if (e) {
                var a = "__satellite__"
                  , r = SL.dataCache
                  , i = e[a];
                i || (i = e[a] = SL.uuid++);
                var o = r[i];
                return o || (o = r[i] = {}),
                n === undefined ? o[t] : void (o[t] = n)
            }
        },
        uuid: 1,
        dataCache: {},
        keys: function(e) {
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(n);
            return t
        },
        values: function(e) {
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(e[n]);
            return t
        },
        isArray: Array.isArray || function(e) {
            return "[object Array]" === ToString.apply(e)
        }
        ,
        isObject: function(e) {
            return null != e && !SL.isArray(e) && "object" == typeof e
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "[object Number]" === ToString.apply(e) && !SL.isNaN(e)
        },
        isNaN: function(e) {
            return e !== e
        },
        isRegex: function(e) {
            return e instanceof RegExp
        },
        isLinkTag: function(e) {
            return !(!e || !e.nodeName || "a" !== e.nodeName.toLowerCase())
        },
        each: function(e, t, n) {
            for (var a = 0, r = e.length; r > a; a++)
                t.call(n, e[a], a, e)
        },
        map: function(e, t, n) {
            for (var a = [], r = 0, i = e.length; i > r; r++)
                a.push(t.call(n, e[r], r, e));
            return a
        },
        filter: function(e, t, n) {
            for (var a = [], r = 0, i = e.length; i > r; r++) {
                var o = e[r];
                t.call(n, o, r, e) && a.push(o)
            }
            return a
        },
        any: function(e, t, n) {
            for (var a = 0, r = e.length; r > a; a++) {
                var i = e[a];
                if (t.call(n, i, a, e))
                    return !0
            }
            return !1
        },
        every: function(e, t, n) {
            for (var a = !0, r = 0, i = e.length; i > r; r++) {
                var o = e[r];
                a = a && t.call(n, o, r, e)
            }
            return a
        },
        contains: function(e, t) {
            return -1 !== SL.indexOf(e, t)
        },
        indexOf: function(e, t) {
            if (e.indexOf)
                return e.indexOf(t);
            for (var n = e.length; n--; )
                if (t === e[n])
                    return n;
            return -1
        },
        find: function(e, t, n) {
            if (!e)
                return null;
            for (var a = 0, r = e.length; r > a; a++) {
                var i = e[a];
                if (t.call(n, i, a, e))
                    return i
            }
            return null
        },
        textMatch: function(e, t) {
            if (null == t)
                throw new Error("Illegal Argument: Pattern is not present");
            return null == e ? !1 : "string" == typeof t ? e === t : t instanceof RegExp ? t.test(e) : !1
        },
        stringify: function(e, t) {
            if (t = t || [],
            SL.isObject(e)) {
                if (SL.contains(t, e))
                    return "<Cycle>";
                t.push(e)
            }
            if (SL.isArray(e))
                return "[" + SL.map(e, function(e) {
                    return SL.stringify(e, t)
                }).join(",") + "]";
            if (SL.isString(e))
                return '"' + String(e) + '"';
            if (SL.isObject(e)) {
                var n = [];
                for (var a in e)
                    e.hasOwnProperty(a) && n.push(a + ": " + SL.stringify(e[a], t));
                return "{" + n.join(", ") + "}"
            }
            return String(e)
        },
        trim: function(e) {
            return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, "").replace(/ *$/, "")
        },
        bind: function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        throttle: function(e, t) {
            var n = null;
            return function() {
                var a = this
                  , r = arguments;
                clearTimeout(n),
                n = setTimeout(function() {
                    e.apply(a, r)
                }, t)
            }
        },
        domReady: function(e) {
            function t(e) {
                for (u = 1; e = a.shift(); )
                    e()
            }
            var n, a = [], r = !1, i = document, o = i.documentElement, s = o.doScroll, c = "DOMContentLoaded", l = "addEventListener", g = "onreadystatechange", u = /^loade|^c/.test(i.readyState);
            return i[l] && i[l](c, n = function() {
                i.removeEventListener(c, n, r),
                t()
            }
            , r),
            s && i.attachEvent(g, n = function() {
                /^c/.test(i.readyState) && (i.detachEvent(g, n),
                t())
            }
            ),
            e = s ? function(t) {
                self != top ? u ? t() : a.push(t) : function() {
                    try {
                        o.doScroll("left")
                    } catch (n) {
                        return setTimeout(function() {
                            e(t)
                        }, 50)
                    }
                    t()
                }()
            }
            : function(e) {
                u ? e() : a.push(e)
            }
        }(),
        loadScript: function(e, t) {
            var n = document.createElement("script");
            SL.scriptOnLoad(e, n, t),
            n.src = e,
            document.getElementsByTagName("head")[0].appendChild(n)
        },
        scriptOnLoad: function(e, t, n) {
            function a(e) {
                e && SL.logError(e),
                n && n(e)
            }
            "onload"in t ? (t.onload = function() {
                a()
            }
            ,
            t.onerror = function() {
                a(new Error("Failed to load script " + e))
            }
            ) : "readyState"in t && (t.onreadystatechange = function() {
                var e = t.readyState;
                ("loaded" === e || "complete" === e) && (t.onreadystatechange = null,
                a())
            }
            )
        },
        loadScriptOnce: function(e, t) {
            SL.loadedScriptRegistry[e] || SL.loadScript(e, function(n) {
                n || (SL.loadedScriptRegistry[e] = !0),
                t && t(n)
            })
        },
        loadedScriptRegistry: {},
        loadScriptSync: function(e) {
            return document.write ? SL.domReadyFired ? void SL.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)),
            void document.write('<script src="' + e + '"></script>')) : void SL.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
        },
        pushAsyncScript: function(e) {
            SL.tools["default"].pushAsyncScript(e)
        },
        pushBlockingScript: function(e) {
            SL.tools["default"].pushBlockingScript(e)
        },
        addEventHandler: window.addEventListener ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        }
        : function(e, t, n) {
            e.attachEvent("on" + t, n)
        }
        ,
        removeEventHandler: window.removeEventListener ? function(e, t, n) {
            e.removeEventListener(t, n, !1)
        }
        : function(e, t, n) {
            e.detachEvent("on" + t, n)
        }
        ,
        preventDefault: window.addEventListener ? function(e) {
            e.preventDefault()
        }
        : function(e) {
            e.returnValue = !1
        }
        ,
        stopPropagation: function(e) {
            e.cancelBubble = !0,
            e.stopPropagation && e.stopPropagation()
        },
        containsElement: function(e, t) {
            return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t))
        },
        matchesCss: function(e) {
            function t(e, t) {
                var n = t.tagName;
                return n ? e.toLowerCase() === n.toLowerCase() : !1
            }
            var n = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || e.msMatchesSelector;
            return n ? function(e, t) {
                if (t === document || t === window)
                    return !1;
                try {
                    return n.call(t, e)
                } catch (a) {
                    return !1
                }
            }
            : e.querySelectorAll ? function(e, n) {
                var a = n.parentNode;
                if (!a)
                    return !1;
                if (e.match(/^[a-z]+$/i))
                    return t(e, n);
                try {
                    for (var r = n.parentNode.querySelectorAll(e), i = r.length; i--; )
                        if (r[i] === n)
                            return !0
                } catch (o) {}
                return !1
            }
            : function(e, n) {
                if (e.match(/^[a-z]+$/i))
                    return t(e, n);
                try {
                    return SL.Sizzle.matches(e, [n]).length > 0
                } catch (a) {
                    return !1
                }
            }
        }(document.documentElement),
        cssQuery: function(e) {
            return e.querySelectorAll ? function(t, n) {
                var a;
                try {
                    a = e.querySelectorAll(t)
                } catch (r) {
                    a = []
                }
                n(a)
            }
            : function(e, t) {
                if (SL.Sizzle) {
                    var n;
                    try {
                        n = SL.Sizzle(e)
                    } catch (a) {
                        n = []
                    }
                    t(n)
                } else
                    SL.sizzleQueue.push([e, t])
            }
        }(document),
        hasAttr: function(e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : e[t] !== undefined
        },
        inherit: function(e, t) {
            var n = function() {};
            n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e
        },
        extend: function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        },
        toArray: function() {
            try {
                var e = Array.prototype.slice;
                return e.call(document.documentElement.childNodes, 0)[0].nodeType,
                function(t) {
                    return e.call(t, 0)
                }
            } catch (t) {
                return function(e) {
                    for (var t = [], n = 0, a = e.length; a > n; n++)
                        t.push(e[n]);
                    return t
                }
            }
        }(),
        equalsIgnoreCase: function(e, t) {
            return null == e ? null == t : null == t ? !1 : String(e).toLowerCase() === String(t).toLowerCase()
        },
        poll: function(e, t, n) {
            function a() {
                SL.isNumber(n) && r++ >= n || e() || setTimeout(a, t)
            }
            var r = 0;
            t = t || 1e3,
            a()
        },
        escapeForHtml: function(e) {
            return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
        }
    };
    SL.availableTools = {},
    SL.availableEventEmitters = [],
    SL.fireOnceEvents = ["condition", "elementexists"],
    SL.initEventEmitters = function() {
        SL.eventEmitters = SL.map(SL.availableEventEmitters, function(e) {
            return new e
        })
    }
    ,
    SL.eventEmitterBackgroundTasks = function() {
        SL.each(SL.eventEmitters, function(e) {
            "backgroundTasks"in e && e.backgroundTasks()
        })
    }
    ,
    SL.initTools = function(e) {
        var t = {
            "default": new DefaultTool
        }
          , n = SL.settings.euCookieName || "sat_track";
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var r, i, o;
                if (r = e[a],
                r.euCookie) {
                    var s = "true" !== SL.readCookie(n);
                    if (s)
                        continue
                }
                if (i = SL.availableTools[r.engine],
                !i) {
                    var c = [];
                    for (var l in SL.availableTools)
                        SL.availableTools.hasOwnProperty(l) && c.push(l);
                    throw new Error("No tool engine named " + r.engine + ", available: " + c.join(",") + ".")
                }
                o = new i(r),
                o.id = a,
                t[a] = o
            }
        return t
    }
    ,
    SL.preprocessArguments = function(e, t, n, a, r) {
        function i(e) {
            return a && SL.isString(e) ? e.toLowerCase() : e
        }
        function o(e) {
            var c = {};
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var g = e[l];
                    SL.isObject(g) ? c[l] = o(g) : SL.isArray(g) ? c[l] = s(g, a) : c[l] = i(SL.replace(g, t, n, r))
                }
            return c
        }
        function s(e, a) {
            for (var r = [], s = 0, c = e.length; c > s; s++) {
                var l = e[s];
                SL.isString(l) ? l = i(SL.replace(l, t, n)) : l && l.constructor === Object && (l = o(l)),
                r.push(l)
            }
            return r
        }
        return e ? s(e, a) : e
    }
    ,
    SL.execute = function(e, t, n, a) {
        function r(r) {
            var i = a[r || "default"];
            if (i)
                try {
                    i.triggerCommand(e, t, n)
                } catch (o) {
                    SL.logError(o)
                }
        }
        if (!_satellite.settings.hideActivity)
            if (a = a || SL.tools,
            e.engine) {
                var i = e.engine;
                for (var o in a)
                    if (a.hasOwnProperty(o)) {
                        var s = a[o];
                        s.settings && s.settings.engine === i && r(o)
                    }
            } else
                e.tool instanceof Array ? SL.each(e.tool, function(e) {
                    r(e)
                }) : r(e.tool)
    }
    ,
    SL.Logger = {
        outputEnabled: !1,
        messages: [],
        keepLimit: 100,
        flushed: !1,
        LEVELS: [null, null, "log", "info", "warn", "error"],
        message: function(e, t) {
            var n = this.LEVELS[t] || "log";
            this.messages.push([n, e]),
            this.messages.length > this.keepLimit && this.messages.shift(),
            this.outputEnabled && this.echo(n, e)
        },
        getHistory: function() {
            return this.messages
        },
        clearHistory: function() {
            this.messages = []
        },
        setOutputState: function(e) {
            this.outputEnabled != e && (this.outputEnabled = e,
            e ? this.flush() : this.flushed = !1)
        },
        echo: function(e, t) {
            window.console && window.console[e]("SATELLITE: " + t)
        },
        flush: function() {
            this.flushed || (SL.each(this.messages, function(e) {
                e[2] !== !0 && (this.echo(e[0], e[1]),
                e[2] = !0)
            }, this),
            this.flushed = !0)
        }
    },
    SL.notify = SL.bind(SL.Logger.message, SL.Logger),
    SL.cleanText = function(e) {
        return null == e ? null : SL.trim(e).replace(/\s+/g, " ")
    }
    ,
    SL.cleanText.legacy = function(e) {
        return null == e ? null : SL.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
    }
    ,
    SL.text = function(e) {
        return e.textContent || e.innerText
    }
    ,
    SL.specialProperties = {
        text: SL.text,
        cleanText: function(e) {
            return SL.cleanText(SL.text(e))
        }
    },
    SL.getObjectProperty = function(e, t, n) {
        for (var a, r = t.split("."), i = e, o = SL.specialProperties, s = 0, c = r.length; c > s; s++) {
            if (null == i)
                return undefined;
            var l = r[s];
            if (n && "@" === l.charAt(0)) {
                var g = l.slice(1);
                i = o[g](i)
            } else if (i.getAttribute && (a = l.match(/^getAttribute\((.+)\)$/))) {
                var u = a[1];
                i = i.getAttribute(u)
            } else
                i = i[l]
        }
        return i
    }
    ,
    SL.getToolsByType = function(e) {
        if (!e)
            throw new Error("Tool type is missing");
        var t = [];
        for (var n in SL.tools)
            if (SL.tools.hasOwnProperty(n)) {
                var a = SL.tools[n];
                a.settings && a.settings.engine === e && t.push(a)
            }
        return t
    }
    ,
    SL.setVar = function() {
        var e = SL.data.customVars;
        if (null == e && (SL.data.customVars = {},
        e = SL.data.customVars),
        "string" == typeof arguments[0]) {
            var t = arguments[0];
            e[t] = arguments[1]
        } else if (arguments[0]) {
            var n = arguments[0];
            for (var a in n)
                n.hasOwnProperty(a) && (e[a] = n[a])
        }
    }
    ,
    SL.dataElementSafe = function(e, t) {
        if (arguments.length > 2) {
            var n = arguments[2];
            "pageview" === t ? SL.dataElementSafe.pageviewCache[e] = n : "session" === t ? SL.setCookie("_sdsat_" + e, n) : "visitor" === t && SL.setCookie("_sdsat_" + e, n, 730)
        } else {
            if ("pageview" === t)
                return SL.dataElementSafe.pageviewCache[e];
            if ("session" === t || "visitor" === t)
                return SL.readCookie("_sdsat_" + e)
        }
    }
    ,
    SL.dataElementSafe.pageviewCache = {},
    SL.realGetDataElement = function(e) {
        var t;
        return e.selector ? SL.hasSelector && SL.cssQuery(e.selector, function(n) {
            if (n.length > 0) {
                var a = n[0];
                "text" === e.property ? t = a.innerText || a.textContent : e.property in a ? t = a[e.property] : SL.hasAttr(a, e.property) && (t = a.getAttribute(e.property))
            }
        }) : e.queryParam ? t = e.ignoreCase ? SL.getQueryParamCaseInsensitive(e.queryParam) : SL.getQueryParam(e.queryParam) : e.cookie ? t = SL.readCookie(e.cookie) : e.jsVariable ? t = SL.getObjectProperty(window, e.jsVariable) : e.customJS ? t = e.customJS() : e.contextHub && (t = e.contextHub()),
        SL.isString(t) && e.cleanText && (t = SL.cleanText(t)),
        t
    }
    ,
    SL.getDataElement = function(e, t, n) {
        if (n = n || SL.dataElements[e],
        null == n)
            return SL.settings.undefinedVarsReturnEmpty ? "" : null;
        var a = SL.realGetDataElement(n);
        return a === undefined && n.storeLength ? a = SL.dataElementSafe(e, n.storeLength) : a !== undefined && n.storeLength && SL.dataElementSafe(e, n.storeLength, a),
        a || t || (a = n["default"] || ""),
        SL.isString(a) && n.forceLowerCase && (a = a.toLowerCase()),
        a
    }
    ,
    SL.getVar = function(e, t, n) {
        var a, r, i = SL.data.customVars, o = n ? n.target || n.srcElement : null, s = {
            uri: SL.URI(),
            protocol: document.location.protocol,
            hostname: document.location.hostname
        };
        if (SL.dataElements && e in SL.dataElements)
            return SL.getDataElement(e);
        if (r = s[e.toLowerCase()],
        r === undefined)
            if ("this." === e.substring(0, 5))
                e = e.slice(5),
                r = SL.getObjectProperty(t, e, !0);
            else if ("event." === e.substring(0, 6))
                e = e.slice(6),
                r = SL.getObjectProperty(n, e);
            else if ("target." === e.substring(0, 7))
                e = e.slice(7),
                r = SL.getObjectProperty(o, e);
            else if ("window." === e.substring(0, 7))
                e = e.slice(7),
                r = SL.getObjectProperty(window, e);
            else if ("param." === e.substring(0, 6))
                e = e.slice(6),
                r = SL.getQueryParam(e);
            else if (a = e.match(/^rand([0-9]+)$/)) {
                var c = Number(a[1])
                  , l = (Math.random() * (Math.pow(10, c) - 1)).toFixed(0);
                r = Array(c - l.length + 1).join("0") + l
            } else
                r = SL.getObjectProperty(i, e);
        return r
    }
    ,
    SL.getVars = function(e, t, n) {
        var a = {};
        return SL.each(e, function(e) {
            a[e] = SL.getVar(e, t, n)
        }),
        a
    }
    ,
    SL.replace = function(e, t, n, a) {
        return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, r) {
            var i = SL.getVar(r, t, n);
            return null == i ? SL.settings.undefinedVarsReturnEmpty ? "" : e : a ? SL.escapeForHtml(i) : i
        })
    }
    ,
    SL.escapeHtmlParams = function(e) {
        return e.escapeHtml = !0,
        e
    }
    ,
    SL.searchVariables = function(e, t, n) {
        if (!e || 0 === e.length)
            return "";
        for (var a = [], r = 0, i = e.length; i > r; r++) {
            var o = e[r]
              , s = SL.getVar(o, t, n);
            a.push(o + "=" + escape(s))
        }
        return "?" + a.join("&")
    }
    ,
    SL.fireRule = function(e, t, n) {
        var a = e.trigger;
        if (a) {
            for (var r = 0, i = a.length; i > r; r++) {
                var o = a[r];
                SL.execute(o, t, n)
            }
            SL.contains(SL.fireOnceEvents, e.event) && (e.expired = !0)
        }
    }
    ,
    SL.isLinked = function(e) {
        for (var t = e; t; t = t.parentNode)
            if (SL.isLinkTag(t))
                return !0;
        return !1
    }
    ,
    SL.firePageLoadEvent = function(e) {
        for (var t = document.location, n = {
            type: e,
            target: t
        }, a = SL.pageLoadRules, r = SL.evtHandlers[n.type], i = a.length; i--; ) {
            var o = a[i];
            SL.ruleMatches(o, n, t) && (SL.notify('Rule "' + o.name + '" fired.', 1),
            SL.fireRule(o, t, n))
        }
        for (var s in SL.tools)
            if (SL.tools.hasOwnProperty(s)) {
                var c = SL.tools[s];
                c.endPLPhase && c.endPLPhase(e)
            }
        r && SL.each(r, function(e) {
            e(n)
        })
    }
    ,
    SL.track = function(e) {
        e = e.replace(/^\s*/, "").replace(/\s*$/, "");
        for (var t = 0; t < SL.directCallRules.length; t++) {
            var n = SL.directCallRules[t];
            if (n.name === e)
                return SL.notify('Direct call Rule "' + e + '" fired.', 1),
                void SL.fireRule(n, location, {
                    type: e
                })
        }
        SL.notify('Direct call Rule "' + e + '" not found.', 1)
    }
    ,
    SL.basePath = function() {
        return SL.data.host ? ("https:" === document.location.protocol ? "https://" + SL.data.host.https : "http://" + SL.data.host.http) + "/" : this.settings.basePath
    }
    ,
    SL.setLocation = function(e) {
        window.location = e
    }
    ,
    SL.parseQueryParams = function(e) {
        var t = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (n) {}
            return t
        };
        if ("" === e || SL.isString(e) === !1)
            return {};
        0 === e.indexOf("?") && (e = e.substring(1));
        var n = {}
          , a = e.split("&");
        return SL.each(a, function(e) {
            e = e.split("="),
            e[1] && (n[t(e[0])] = t(e[1]))
        }),
        n
    }
    ,
    SL.getCaseSensitivityQueryParamsMap = function(e) {
        var t = SL.parseQueryParams(e)
          , n = {};
        for (var a in t)
            t.hasOwnProperty(a) && (n[a.toLowerCase()] = t[a]);
        return {
            normal: t,
            caseInsensitive: n
        }
    }
    ,
    SL.updateQueryParams = function() {
        SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
    }
    ,
    SL.updateQueryParams(),
    SL.getQueryParam = function(e) {
        return SL.QueryParams.normal[e]
    }
    ,
    SL.getQueryParamCaseInsensitive = function(e) {
        return SL.QueryParams.caseInsensitive[e.toLowerCase()]
    }
    ,
    SL.encodeObjectToURI = function(e) {
        if (SL.isObject(e) === !1)
            return "";
        var t = [];
        for (var n in e)
            e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    ,
    SL.readCookie = function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
            for (var r = n[a]; " " == r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 === r.indexOf(t))
                return r.substring(t.length, r.length)
        }
        return undefined
    }
    ,
    SL.setCookie = function(e, t, n) {
        var a;
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3),
            a = "; expires=" + r.toGMTString()
        } else
            a = "";
        document.cookie = e + "=" + t + a + "; path=/"
    }
    ,
    SL.removeCookie = function(e) {
        SL.setCookie(e, "", -1)
    }
    ,
    SL.getElementProperty = function(e, t) {
        if ("@" === t.charAt(0)) {
            var n = SL.specialProperties[t.substring(1)];
            if (n)
                return n(e)
        }
        return "innerText" === t ? SL.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : undefined
    }
    ,
    SL.propertiesMatch = function(e, t) {
        if (e)
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var a = e[n]
                      , r = SL.getElementProperty(t, n);
                    if ("string" == typeof a && a !== r)
                        return !1;
                    if (a instanceof RegExp && !a.test(r))
                        return !1
                }
        return !0
    }
    ,
    SL.isRightClick = function(e) {
        var t;
        return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button),
        t
    }
    ,
    SL.ruleMatches = function(e, t, n, a) {
        var r = e.condition
          , i = e.conditions
          , o = e.property
          , s = t.type
          , c = e.value
          , l = t.target || t.srcElement
          , g = n === l;
        if (e.event !== s && ("custom" !== e.event || e.customEvent !== s))
            return !1;
        if (!SL.ruleInScope(e))
            return !1;
        if ("click" === e.event && SL.isRightClick(t))
            return !1;
        if (e.isDefault && a > 0)
            return !1;
        if (e.expired)
            return !1;
        if ("inview" === s && t.inviewDelay !== e.inviewDelay)
            return !1;
        if (!g && (e.bubbleFireIfParent === !1 || 0 !== a && e.bubbleFireIfChildFired === !1))
            return !1;
        if (e.selector && !SL.matchesCss(e.selector, n))
            return !1;
        if (!SL.propertiesMatch(o, n))
            return !1;
        if (null != c)
            if ("string" == typeof c) {
                if (c !== n.value)
                    return !1
            } else if (!c.test(n.value))
                return !1;
        if (r)
            try {
                if (!r.call(n, t, l))
                    return SL.notify('Condition for rule "' + e.name + '" not met.', 1),
                    !1
            } catch (u) {
                return SL.notify('Condition for rule "' + e.name + '" not met. Error: ' + u.message, 1),
                !1
            }
        if (i) {
            var d = SL.find(i, function(a) {
                try {
                    return !a.call(n, t, l)
                } catch (r) {
                    return SL.notify('Condition for rule "' + e.name + '" not met. Error: ' + r.message, 1),
                    !0
                }
            });
            if (d)
                return SL.notify("Condition " + d.toString() + ' for rule "' + e.name + '" not met.', 1),
                !1
        }
        return !0
    }
    ,
    SL.evtHandlers = {},
    SL.bindEvent = function(e, t) {
        var n = SL.evtHandlers;
        n[e] || (n[e] = []),
        n[e].push(t)
    }
    ,
    SL.whenEvent = SL.bindEvent,
    SL.unbindEvent = function(e, t) {
        var n = SL.evtHandlers;
        if (n[e]) {
            var a = SL.indexOf(n[e], t);
            n[e].splice(a, 1)
        }
    }
    ,
    SL.bindEventOnce = function(e, t) {
        var n = function() {
            SL.unbindEvent(e, n),
            t.apply(null, arguments)
        };
        SL.bindEvent(e, n)
    }
    ,
    SL.isVMLPoisoned = function(e) {
        if (!e)
            return !1;
        try {
            e.nodeName
        } catch (t) {
            if ("Attribute only valid on v:image" === t.message)
                return !0
        }
        return !1
    }
    ,
    SL.handleEvent = function(e) {
        if (!SL.$data(e, "eventProcessed")) {
            var t = e.type.toLowerCase()
              , n = e.target || e.srcElement
              , a = 0
              , r = SL.rules
              , i = (SL.tools,
            SL.evtHandlers[e.type]);
            if (SL.isVMLPoisoned(n))
                return void SL.notify("detected " + t + " on poisoned VML element, skipping.", 1);
            i && SL.each(i, function(t) {
                t(e)
            });
            var o = n && n.nodeName;
            o ? SL.notify("detected " + t + " on " + n.nodeName, 1) : SL.notify("detected " + t, 1);
            for (var s = n; s; s = s.parentNode) {
                var c = !1;
                if (SL.each(r, function(t) {
                    SL.ruleMatches(t, e, s, a) && (SL.notify('Rule "' + t.name + '" fired.', 1),
                    SL.fireRule(t, s, e),
                    a++,
                    t.bubbleStop && (c = !0))
                }),
                c)
                    break
            }
            SL.$data(e, "eventProcessed", !0)
        }
    }
    ,
    SL.onEvent = document.querySelectorAll ? function(e) {
        SL.handleEvent(e)
    }
    : function() {
        var e = []
          , t = function(t) {
            t.selector ? e.push(t) : SL.handleEvent(t)
        };
        return t.pendingEvents = e,
        t
    }(),
    SL.fireEvent = function(e, t) {
        SL.onEvent({
            type: e,
            target: t
        })
    }
    ,
    SL.registerEvents = function(e, t) {
        for (var n = t.length - 1; n >= 0; n--) {
            var a = t[n];
            SL.$data(e, a + ".tracked") || (SL.addEventHandler(e, a, SL.onEvent),
            SL.$data(e, a + ".tracked", !0))
        }
    }
    ,
    SL.registerEventsForTags = function(e, t) {
        for (var n = e.length - 1; n >= 0; n--)
            for (var a = e[n], r = document.getElementsByTagName(a), i = r.length - 1; i >= 0; i--)
                SL.registerEvents(r[i], t)
    }
    ,
    SL.setListeners = function() {
        var e = ["click", "submit"];
        SL.each(SL.rules, function(t) {
            "custom" === t.event && t.hasOwnProperty("customEvent") && !SL.contains(e, t.customEvent) && e.push(t.customEvent)
        }),
        SL.registerEvents(document, e)
    }
    ,
    SL.getUniqueRuleEvents = function() {
        return SL._uniqueRuleEvents || (SL._uniqueRuleEvents = [],
        SL.each(SL.rules, function(e) {
            -1 === SL.indexOf(SL._uniqueRuleEvents, e.event) && SL._uniqueRuleEvents.push(e.event)
        })),
        SL._uniqueRuleEvents
    }
    ,
    SL.setFormListeners = function() {
        if (!SL._relevantFormEvents) {
            var e = ["change", "focus", "blur", "keypress"];
            SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(t) {
                return -1 !== SL.indexOf(e, t)
            })
        }
        SL._relevantFormEvents.length && SL.registerEventsForTags(["input", "select", "textarea", "button"], SL._relevantFormEvents)
    }
    ,
    SL.setVideoListeners = function() {
        if (!SL._relevantVideoEvents) {
            var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
            SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(t) {
                return -1 !== SL.indexOf(e, t)
            })
        }
        SL._relevantVideoEvents.length && SL.registerEventsForTags(["video"], SL._relevantVideoEvents)
    }
    ,
    SL.readStoredSetting = function(e) {
        try {
            return e = "sdsat_" + e,
            window.localStorage.getItem(e)
        } catch (t) {
            return SL.notify("Cannot read stored setting from localStorage: " + t.message, 2),
            null
        }
    }
    ,
    SL.loadStoredSettings = function() {
        var e = SL.readStoredSetting("debug")
          , t = SL.readStoredSetting("hide_activity");
        e && (SL.settings.notifications = "true" === e),
        t && (SL.settings.hideActivity = "true" === t)
    }
    ,
    SL.isRuleActive = function(e, t) {
        function n(e, t) {
            return t = r(t, {
                hour: e[p](),
                minute: e[m]()
            }),
            Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
        }
        function a(e, t) {
            function n(e) {
                return 12 * e[u]() + e[d]()
            }
            return Math.abs(n(e) - n(t))
        }
        function r(e, t) {
            var n = new Date(e.getTime());
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var r = t[a];
                    switch (a) {
                    case "hour":
                        n[_](r);
                        break;
                    case "minute":
                        n[h](r);
                        break;
                    case "date":
                        n[f](r)
                    }
                }
            return n
        }
        function i(e, t) {
            var n = e[p]()
              , a = e[m]()
              , r = t[p]()
              , i = t[m]();
            return 60 * n + a > 60 * r + i
        }
        function o(e, t) {
            var n = e[p]()
              , a = e[m]()
              , r = t[p]()
              , i = t[m]();
            return 60 * r + i > 60 * n + a
        }
        var s = e.schedule;
        if (!s)
            return !0;
        var c = s.utc
          , l = c ? "getUTCDate" : "getDate"
          , g = c ? "getUTCDay" : "getDay"
          , u = c ? "getUTCFullYear" : "getFullYear"
          , d = c ? "getUTCMonth" : "getMonth"
          , p = c ? "getUTCHours" : "getHours"
          , m = c ? "getUTCMinutes" : "getMinutes"
          , _ = c ? "setUTCHours" : "setHours"
          , h = c ? "setUTCMinutes" : "setMinutes"
          , f = c ? "setUTCDate" : "setDate";
        if (t = t || new Date,
        s.repeat) {
            if (i(s.start, t))
                return !1;
            if (o(s.end, t))
                return !1;
            if (t < s.start)
                return !1;
            if (s.endRepeat && t >= s.endRepeat)
                return !1;
            if ("daily" === s.repeat) {
                if (s.repeatEvery) {
                    var C = n(s.start, t);
                    if (C % s.repeatEvery !== 0)
                        return !1
                }
            } else if ("weekly" === s.repeat) {
                if (s.days) {
                    if (!SL.contains(s.days, t[g]()))
                        return !1
                } else if (s.start[g]() !== t[g]())
                    return !1;
                if (s.repeatEvery) {
                    var b = n(s.start, t);
                    if (b % (7 * s.repeatEvery) !== 0)
                        return !1
                }
            } else if ("monthly" === s.repeat) {
                if (s.repeatEvery) {
                    var v = a(s.start, t);
                    if (v % s.repeatEvery !== 0)
                        return !1
                }
                if (s.nthWeek && s.mthDay) {
                    if (s.mthDay !== t[g]())
                        return !1;
                    var T = Math.floor((t[l]() - t[g]() + 1) / 7);
                    if (s.nthWeek !== T)
                        return !1
                } else if (s.start[l]() !== t[l]())
                    return !1
            } else if ("yearly" === s.repeat) {
                if (s.start[d]() !== t[d]())
                    return !1;
                if (s.start[l]() !== t[l]())
                    return !1;
                if (s.repeatEvery) {
                    var b = Math.abs(s.start[u]() - t[u]());
                    if (b % s.repeatEvery !== 0)
                        return !1
                }
            }
        } else {
            if (s.start > t)
                return !1;
            if (s.end < t)
                return !1
        }
        return !0
    }
    ,
    SL.isOutboundLink = function(e) {
        if (!e.getAttribute("href"))
            return !1;
        var t = e.hostname
          , n = (e.href,
        e.protocol);
        if ("http:" !== n && "https:" !== n)
            return !1;
        var a = SL.any(SL.settings.domainList, function(e) {
            return SL.isSubdomainOf(t, e)
        });
        return a ? !1 : t !== location.hostname
    }
    ,
    SL.isLinkerLink = function(e) {
        return e.getAttribute && e.getAttribute("href") ? SL.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !SL.isOutboundLink(e) : !1
    }
    ,
    SL.isSubdomainOf = function(e, t) {
        if (e === t)
            return !0;
        var n = e.length - t.length;
        return n > 0 ? SL.equalsIgnoreCase(e.substring(n), t) : !1
    }
    ,
    SL.getVisitorId = function() {
        var e = SL.getToolsByType("visitor_id");
        return 0 === e.length ? null : e[0].getInstance()
    }
    ,
    SL.URI = function() {
        var e = document.location.pathname + document.location.search;
        return SL.settings.forceLowerCase && (e = e.toLowerCase()),
        e
    }
    ,
    SL.URL = function() {
        var e = document.location.href;
        return SL.settings.forceLowerCase && (e = e.toLowerCase()),
        e
    }
    ,
    SL.filterRules = function() {
        function e(e) {
            return SL.isRuleActive(e) ? !0 : !1
        }
        SL.rules = SL.filter(SL.rules, e),
        SL.pageLoadRules = SL.filter(SL.pageLoadRules, e)
    }
    ,
    SL.ruleInScope = function(e, t) {
        function n(e, t) {
            function n(e) {
                return t.match(e)
            }
            var r = e.include
              , i = e.exclude;
            if (r && a(r, t))
                return !0;
            if (i) {
                if (SL.isString(i) && i === t)
                    return !0;
                if (SL.isArray(i) && SL.any(i, n))
                    return !0;
                if (SL.isRegex(i) && n(i))
                    return !0
            }
            return !1
        }
        function a(e, t) {
            function n(e) {
                return t.match(e)
            }
            return SL.isString(e) && e !== t ? !0 : SL.isArray(e) && !SL.any(e, n) ? !0 : SL.isRegex(e) && !n(e) ? !0 : !1
        }
        t = t || document.location;
        var r = e.scope;
        if (!r)
            return !0;
        var i = r.URI
          , o = r.subdomains
          , s = r.domains
          , c = r.protocols
          , l = r.hashes;
        return i && n(i, t.pathname + t.search) ? !1 : o && n(o, t.hostname) ? !1 : s && a(s, t.hostname) ? !1 : c && a(c, t.protocol) ? !1 : l && n(l, t.hash) ? !1 : !0
    }
    ,
    SL.backgroundTasks = function() {
        +new Date;
        SL.setFormListeners(),
        SL.setVideoListeners(),
        SL.loadStoredSettings(),
        SL.registerNewElementsForDynamicRules(),
        SL.eventEmitterBackgroundTasks();
        +new Date
    }
    ,
    SL.registerNewElementsForDynamicRules = function() {
        function e(t, n) {
            var a = e.cache[t];
            return a ? n(a) : void SL.cssQuery(t, function(a) {
                e.cache[t] = a,
                n(a)
            })
        }
        e.cache = {},
        SL.each(SL.dynamicRules, function(t) {
            e(t.selector, function(e) {
                SL.each(e, function(e) {
                    var n = "custom" === t.event ? t.customEvent : t.event;
                    SL.$data(e, "dynamicRules.seen." + n) || (SL.$data(e, "dynamicRules.seen." + n, !0),
                    SL.propertiesMatch(t.property, e) && SL.registerEvents(e, [n]))
                })
            })
        })
    }
    ,
    SL.ensureCSSSelector = function() {
        return document.querySelectorAll ? void (SL.hasSelector = !0) : (SL.loadingSizzle = !0,
        SL.sizzleQueue = [],
        void SL.loadScript(SL.basePath() + "selector.js", function() {
            if (!SL.Sizzle)
                return void SL.logError(new Error("Failed to load selector.js"));
            var e = SL.onEvent.pendingEvents;
            SL.each(e, function(e) {
                SL.handleEvent(e)
            }, this),
            SL.onEvent = SL.handleEvent,
            SL.hasSelector = !0,
            delete SL.loadingSizzle,
            SL.each(SL.sizzleQueue, function(e) {
                SL.cssQuery(e[0], e[1])
            }),
            delete SL.sizzleQueue
        }))
    }
    ,
    SL.errors = [],
    SL.logError = function(e) {
        SL.errors.push(e),
        SL.notify(e.name + " - " + e.message, 5)
    }
    ,
    SL.pageBottom = function() {
        SL.initialized && (SL.pageBottomFired = !0,
        SL.firePageLoadEvent("pagebottom"))
    }
    ,
    SL.stagingLibraryOverride = function() {
        var e = "true" === SL.readStoredSetting("stagingLibrary");
        if (e) {
            for (var t, n, a, r = document.getElementsByTagName("script"), i = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, o = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, s = 0, c = r.length; c > s && (a = r[s].getAttribute("src"),
            !a || (t || (t = a.match(i)),
            n || (n = a.match(o)),
            !n)); s++)
                ;
            if (t && !n) {
                var l = t[1] + "satelliteLib-" + t[2] + "-staging.js";
                if (document.write)
                    document.write('<script src="' + l + '"></script>');
                else {
                    var g = document.createElement("script");
                    g.src = l,
                    document.head.appendChild(g)
                }
                return !0
            }
        }
        return !1
    }
    ,
    SL.checkAsyncInclude = function() {
        window.satellite_asyncLoad && SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
    }
    ,
    SL.hasMultipleDomains = function() {
        return !!SL.settings.domainList && SL.settings.domainList.length > 1
    }
    ,
    SL.handleOverrides = function() {
        if (Overrides)
            for (var e in Overrides)
                Overrides.hasOwnProperty(e) && (SL.data[e] = Overrides[e])
    }
    ,
    SL.privacyManagerParams = function() {
        var e = {};
        SL.extend(e, SL.settings.privacyManagement);
        var t = [];
        for (var n in SL.tools)
            if (SL.tools.hasOwnProperty(n)) {
                var a = SL.tools[n]
                  , r = a.settings;
                if (!r)
                    continue;
                "sc" === r.engine && t.push(a)
            }
        var i = SL.filter(SL.map(t, function(e) {
            return e.getTrackingServer()
        }), function(e) {
            return null != e
        });
        e.adobeAnalyticsTrackingServers = i;
        for (var o = ["bannerText", "headline", "introductoryText", "customCSS"], s = 0; s < o.length; s++) {
            var c = o[s]
              , l = e[c];
            if (l)
                if ("text" === l.type)
                    e[c] = l.value;
                else {
                    if ("data" !== l.type)
                        throw new Error("Invalid type: " + l.type);
                    e[c] = SL.getVar(l.value)
                }
        }
        return e
    }
    ,
    SL.prepareLoadPrivacyManager = function() {
        function e(e) {
            function t() {
                i++,
                i === r.length && (n(),
                clearTimeout(o),
                e())
            }
            function n() {
                SL.each(r, function(e) {
                    SL.unbindEvent(e.id + ".load", t)
                })
            }
            function a() {
                n(),
                e()
            }
            var r = SL.filter(SL.values(SL.tools), function(e) {
                return e.settings && "sc" === e.settings.engine
            });
            if (0 === r.length)
                return e();
            var i = 0;
            SL.each(r, function(e) {
                SL.bindEvent(e.id + ".load", t)
            });
            var o = setTimeout(a, 5e3)
        }
        SL.addEventHandler(window, "load", function() {
            e(SL.loadPrivacyManager)
        })
    }
    ,
    SL.loadPrivacyManager = function() {
        var e = SL.basePath() + "privacy_manager.js";
        SL.loadScript(e, function() {
            var e = SL.privacyManager;
            e.configure(SL.privacyManagerParams()),
            e.openIfRequired()
        })
    }
    ,
    SL.init = function(e) {
        if (!SL.stagingLibraryOverride()) {
            SL.configurationSettings = e;
            var t = e.tools;
            delete e.tools;
            for (var n in e)
                e.hasOwnProperty(n) && (SL[n] = e[n]);
            SL.data.customVars === undefined && (SL.data.customVars = {}),
            SL.data.queryParams = SL.QueryParams.normal,
            SL.handleOverrides(),
            SL.detectBrowserInfo(),
            SL.trackVisitorInfo && SL.trackVisitorInfo(),
            SL.loadStoredSettings(),
            SL.Logger.setOutputState(SL.settings.notifications),
            SL.checkAsyncInclude(),
            SL.ensureCSSSelector(),
            SL.filterRules(),
            SL.dynamicRules = SL.filter(SL.rules, function(e) {
                return e.eventHandlerOnElement
            }),
            SL.tools = SL.initTools(t),
            SL.initEventEmitters(),
            SL.firePageLoadEvent("aftertoolinit"),
            SL.settings.privacyManagement && SL.prepareLoadPrivacyManager(),
            SL.hasSelector && SL.domReady(SL.eventEmitterBackgroundTasks),
            SL.setListeners(),
            SL.domReady(function() {
                SL.poll(function() {
                    SL.backgroundTasks()
                }, SL.settings.recheckEvery || 3e3)
            }),
            SL.domReady(function() {
                SL.domReadyFired = !0,
                SL.pageBottomFired || SL.pageBottom(),
                SL.firePageLoadEvent("domready")
            }),
            SL.addEventHandler(window, "load", function() {
                SL.firePageLoadEvent("windowload")
            }),
            SL.firePageLoadEvent("pagetop"),
            SL.initialized = !0
        }
    }
    ,
    SL.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"],
    SL.loadEventBefore = function(e, t) {
        return SL.indexOf(SL.pageLoadPhases, e) <= SL.indexOf(SL.pageLoadPhases, t)
    }
    ,
    SL.flushPendingCalls = function(e) {
        e.pending && (SL.each(e.pending, function(t) {
            var n = t[0]
              , a = t[1]
              , r = t[2]
              , i = t[3];
            n in e ? e[n].apply(e, [a, r].concat(i)) : e.emit ? e.emit(n, a, r, i) : SL.notify("Failed to trigger " + n + " for tool " + e.id, 1)
        }),
        delete e.pending)
    }
    ,
    SL.setDebug = function(e) {
        try {
            window.localStorage.setItem("sdsat_debug", e)
        } catch (t) {
            SL.notify("Cannot set debug mode: " + t.message, 2)
        }
    }
    ,
    SL.getUserAgent = function() {
        return navigator.userAgent
    }
    ,
    SL.detectBrowserInfo = function() {
        function e(e) {
            return function(t) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var a = e[n]
                          , r = a.test(t);
                        if (r)
                            return n
                    }
                return "Unknown"
            }
        }
        var t = e({
            "IE Edge Mobile": /Windows Phone.*Edge/,
            "IE Edge": /Edge/,
            OmniWeb: /OmniWeb/,
            "Opera Mini": /Opera Mini/,
            "Opera Mobile": /Opera Mobi/,
            Opera: /Opera/,
            Chrome: /Chrome|CriOS|CrMo/,
            Firefox: /Firefox|FxiOS/,
            "IE Mobile": /IEMobile/,
            IE: /MSIE|Trident/,
            "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
            Safari: /Safari/
        })
          , n = e({
            Blackberry: /BlackBerry|BB10/,
            "Symbian OS": /Symbian|SymbOS/,
            Maemo: /Maemo/,
            Android: /Android/,
            Linux: / Linux /,
            Unix: /FreeBSD|OpenBSD|CrOS/,
            Windows: /[\( ]Windows /,
            iOS: /iPhone|iPad|iPod/,
            MacOS: /Macintosh;/
        })
          , a = e({
            Nokia: /Symbian|SymbOS|Maemo/,
            "Windows Phone": /Windows Phone/,
            Blackberry: /BlackBerry|BB10/,
            Android: /Android/,
            iPad: /iPad/,
            iPod: /iPod/,
            iPhone: /iPhone/,
            Desktop: /.*/
        })
          , r = SL.getUserAgent();
        SL.browserInfo = {
            browser: t(r),
            os: n(r),
            deviceType: a(r)
        }
    }
    ,
    SL.isHttps = function() {
        return "https:" == document.location.protocol;
    }
    ,
    SL.BaseTool = function(e) {
        this.settings = e || {},
        this.forceLowerCase = SL.settings.forceLowerCase,
        "forceLowerCase"in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
    }
    ,
    SL.BaseTool.prototype = {
        triggerCommand: function(e, t, n) {
            var a = this.settings || {};
            if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && n && SL.loadEventBefore(n.type, a.loadOn))
                return void this.queueCommand(e, t, n);
            var r = e.command
              , i = this["$" + r]
              , o = i ? i.escapeHtml : !1
              , s = SL.preprocessArguments(e.arguments, t, n, this.forceLowerCase, o);
            i ? i.apply(this, [t, n].concat(s)) : this.$missing$ ? this.$missing$(r, t, n, s) : SL.notify("Failed to trigger " + r + " for tool " + this.id, 1)
        },
        endPLPhase: function(e) {},
        isQueueable: function(e) {
            return "cancelToolInit" !== e.command
        },
        isQueueAvailable: function() {
            return !this.initialized && !this.initializing
        },
        flushQueue: function() {
            this.pending && (SL.each(this.pending, function(e) {
                this.triggerCommand.apply(this, e)
            }, this),
            this.pending = [])
        },
        queueCommand: function(e, t, n) {
            this.pending || (this.pending = []),
            this.pending.push([e, t, n])
        },
        $cancelToolInit: function() {
            this._cancelToolInit = !0
        }
    },
    window._satellite = SL,
    OrientationChangeEventEmitter.orientationChange = function(e) {
        var t = 0 === window.orientation ? "portrait" : "landscape";
        e.orientation = t,
        SL.onEvent(e)
    }
    ,
    SL.availableEventEmitters.push(OrientationChangeEventEmitter),
    FacebookEventEmitter.prototype = {
        initialize: function() {
            return this.FB = this.FB || window.FB,
            this.FB && this.FB.Event && this.FB.Event.subscribe ? (this.bind(),
            !0) : void 0
        },
        bind: function() {
            this.FB.Event.subscribe("edge.create", function() {
                SL.notify("tracking a facebook like", 1),
                SL.onEvent({
                    type: "facebook.like",
                    target: document
                })
            }),
            this.FB.Event.subscribe("edge.remove", function() {
                SL.notify("tracking a facebook unlike", 1),
                SL.onEvent({
                    type: "facebook.unlike",
                    target: document
                })
            }),
            this.FB.Event.subscribe("message.send", function() {
                SL.notify("tracking a facebook share", 1),
                SL.onEvent({
                    type: "facebook.send",
                    target: document
                })
            })
        }
    },
    SL.availableEventEmitters.push(FacebookEventEmitter),
    VideoPlayedEventEmitter.prototype = {
        backgroundTasks: function() {
            var e = this.eventHandler;
            SL.each(this.rules, function(t) {
                SL.cssQuery(t.selector || "video", function(t) {
                    SL.each(t, function(t) {
                        SL.$data(t, "videoplayed.tracked") || (SL.addEventHandler(t, "timeupdate", SL.throttle(e, 100)),
                        SL.$data(t, "videoplayed.tracked", !0))
                    })
                })
            })
        },
        evalRule: function(e, t) {
            var n = t.event
              , a = e.seekable
              , r = a.start(0)
              , i = a.end(0)
              , o = e.currentTime
              , s = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
            if (s) {
                var c = s[2]
                  , l = Number(s[1])
                  , g = "%" === c ? function() {
                    return 100 * (o - r) / (i - r) >= l
                }
                : function() {
                    return o - r >= l
                }
                ;
                !SL.$data(e, n) && g() && (SL.$data(e, n, !0),
                SL.onEvent({
                    type: n,
                    target: e
                }))
            }
        },
        onUpdateTime: function(e) {
            var t = this.rules
              , n = e.target;
            if (n.seekable && 0 !== n.seekable.length)
                for (var a = 0, r = t.length; r > a; a++)
                    this.evalRule(n, t[a])
        }
    },
    SL.availableEventEmitters.push(VideoPlayedEventEmitter),
    ElementExistsEventEmitter.prototype.backgroundTasks = function() {
        SL.each(this.rules, function(e) {
            SL.cssQuery(e.selector, function(e) {
                if (e.length > 0) {
                    var t = e[0];
                    if (SL.$data(t, "elementexists.seen"))
                        return;
                    SL.$data(t, "elementexists.seen", !0),
                    SL.onEvent({
                        type: "elementexists",
                        target: t
                    })
                }
            })
        })
    }
    ,
    SL.availableEventEmitters.push(ElementExistsEventEmitter),
    LeaveEventEmitter.prototype = {
        obue: !1,
        initialize: function() {
            this.attachCloseListeners()
        },
        obuePrevUnload: function() {},
        obuePrevBeforeUnload: function() {},
        newObueListener: function() {
            this.obue || (this.obue = !0,
            this.triggerBeacons())
        },
        attachCloseListeners: function() {
            this.prevUnload = window.onunload,
            this.prevBeforeUnload = window.onbeforeunload,
            window.onunload = SL.bind(function(e) {
                this.prevUnload && setTimeout(SL.bind(function() {
                    this.prevUnload.call(window, e)
                }, this), 1),
                this.newObueListener()
            }, this),
            window.onbeforeunload = SL.bind(function(e) {
                this.prevBeforeUnload && setTimeout(SL.bind(function() {
                    this.prevBeforeUnload.call(window, e)
                }, this), 1),
                this.newObueListener()
            }, this)
        },
        triggerBeacons: function() {
            SL.fireEvent("leave", document)
        }
    },
    SL.availableEventEmitters.push(LeaveEventEmitter),
    LocationChangeEventEmitter.prototype = {
        initialize: function() {
            this.setupHistoryAPI(),
            this.setupHashChange()
        },
        fireIfURIChanged: function() {
            var e = SL.URL();
            this.lastURL !== e && (this.fireEvent(),
            this.lastURL = e)
        },
        fireEvent: function() {
            SL.updateQueryParams(),
            SL.onEvent({
                type: "locationchange",
                target: document
            })
        },
        setupSPASupport: function() {
            this.setupHistoryAPI(),
            this.setupHashChange()
        },
        setupHistoryAPI: function() {
            var e = window.history;
            e && (e.pushState && (this.originalPushState = e.pushState,
            e.pushState = this._pushState),
            e.replaceState && (this.originalReplaceState = e.replaceState,
            e.replaceState = this._replaceState)),
            SL.addEventHandler(window, "popstate", this._onPopState)
        },
        pushState: function() {
            var e = this.originalPushState.apply(history, arguments);
            return this.onPushState(),
            e
        },
        replaceState: function() {
            var e = this.originalReplaceState.apply(history, arguments);
            return this.onReplaceState(),
            e
        },
        setupHashChange: function() {
            SL.addEventHandler(window, "hashchange", this._onHashChange)
        },
        onReplaceState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPushState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPopState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onHashChange: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        uninitialize: function() {
            this.cleanUpHistoryAPI(),
            this.cleanUpHashChange()
        },
        cleanUpHistoryAPI: function() {
            history.pushState === this._pushState && (history.pushState = this.originalPushState),
            history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState),
            SL.removeEventHandler(window, "popstate", this._onPopState)
        },
        cleanUpHashChange: function() {
            SL.removeEventHandler(window, "hashchange", this._onHashChange)
        }
    },
    SL.availableEventEmitters.push(LocationChangeEventEmitter),
    DataElementChangeEmitter.prototype.getStringifiedValue = window.JSON && window.JSON.stringify || SL.stringify,
    DataElementChangeEmitter.prototype.initPolling = function() {
        0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(),
        SL.poll(SL.bind(this.checkDataElementValues, this), 1e3))
    }
    ,
    DataElementChangeEmitter.prototype.getDataElementsValues = function() {
        var e = {};
        return SL.each(this.dataElementsNames, function(t) {
            var n = SL.getVar(t);
            e[t] = this.getStringifiedValue(n)
        }, this),
        e
    }
    ,
    DataElementChangeEmitter.prototype.checkDataElementValues = function() {
        SL.each(this.dataElementsNames, SL.bind(function(e) {
            var t = this.getStringifiedValue(SL.getVar(e))
              , n = this.dataElementsStore[e];
            t !== n && (this.dataElementsStore[e] = t,
            SL.onEvent({
                type: "dataelementchange(" + e + ")",
                target: document
            }))
        }, this))
    }
    ,
    SL.availableEventEmitters.push(DataElementChangeEmitter),
    HoverEventEmitter.prototype = {
        backgroundTasks: function() {
            var e = this;
            SL.each(this.rules, function(t) {
                var n = t[1]
                  , a = t[0];
                SL.cssQuery(n, function(t) {
                    SL.each(t, function(t) {
                        e.trackElement(t, a)
                    })
                })
            }, this)
        },
        trackElement: function(e, t) {
            var n = this
              , a = SL.$data(e, "hover.delays");
            a ? SL.contains(a, t) || a.push(t) : (SL.addEventHandler(e, "mouseover", function(t) {
                n.onMouseOver(t, e)
            }),
            SL.addEventHandler(e, "mouseout", function(t) {
                n.onMouseOut(t, e)
            }),
            SL.$data(e, "hover.delays", [t]))
        },
        onMouseOver: function(e, t) {
            var n = e.target || e.srcElement
              , a = e.relatedTarget || e.fromElement
              , r = (t === n || SL.containsElement(t, n)) && !SL.containsElement(t, a);
            r && this.onMouseEnter(t)
        },
        onMouseEnter: function(e) {
            var t = SL.$data(e, "hover.delays")
              , n = SL.map(t, function(t) {
                return setTimeout(function() {
                    SL.onEvent({
                        type: "hover(" + t + ")",
                        target: e
                    })
                }, t)
            });
            SL.$data(e, "hover.delayTimers", n)
        },
        onMouseOut: function(e, t) {
            var n = e.target || e.srcElement
              , a = e.relatedTarget || e.toElement
              , r = (t === n || SL.containsElement(t, n)) && !SL.containsElement(t, a);
            r && this.onMouseLeave(t)
        },
        onMouseLeave: function(e) {
            var t = SL.$data(e, "hover.delayTimers");
            t && SL.each(t, function(e) {
                clearTimeout(e)
            })
        }
    },
    SL.availableEventEmitters.push(HoverEventEmitter),
    VisibilityEventEmitter.prototype = {
        defineEvents: function() {
            this.oldBlurClosure = function() {
                SL.fireEvent("tabblur", document)
            }
            ,
            this.oldFocusClosure = SL.bind(function() {
                this.visibilityApiHasPriority ? SL.fireEvent("tabfocus", document) : null != SL.visibility.getHiddenProperty() ? SL.visibility.isHidden() || SL.fireEvent("tabfocus", document) : SL.fireEvent("tabfocus", document)
            }, this)
        },
        attachDetachModernEventListeners: function(e) {
            var t = 0 == e ? "removeEventHandler" : "addEventHandler";
            SL[t](document, SL.visibility.getVisibilityEvent(), this.handleVisibilityChange)
        },
        attachDetachOlderEventListeners: function(e, t, n) {
            var a = 0 == e ? "removeEventHandler" : "addEventHandler";
            SL[a](t, n, this.oldBlurClosure),
            SL[a](window, "focus", this.oldFocusClosure)
        },
        handleVisibilityChange: function() {
            SL.visibility.isHidden() ? SL.fireEvent("tabblur", document) : SL.fireEvent("tabfocus", document)
        },
        setVisibilityApiPriority: function(e) {
            this.visibilityApiHasPriority = e,
            this.attachDetachOlderEventListeners(!1, window, "blur"),
            this.attachDetachModernEventListeners(!1),
            e ? null != SL.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, window, "blur") : (this.attachDetachOlderEventListeners(!0, window, "blur"),
            null != SL.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: !0
    },
    SL.availableEventEmitters.push(VisibilityEventEmitter),
    TwitterEventEmitter.prototype = {
        initialize: function() {
            var e = this.twttr;
            e && "function" == typeof e.ready && e.ready(SL.bind(this.bind, this))
        },
        bind: function() {
            this.twttr.events.bind("tweet", function(e) {
                e && (SL.notify("tracking a tweet button", 1),
                SL.onEvent({
                    type: "twitter.tweet",
                    target: document
                }))
            })
        }
    },
    SL.availableEventEmitters.push(TwitterEventEmitter),
    InViewEventEmitter.offset = function(e) {
        var t = null
          , n = null;
        try {
            var a = e.getBoundingClientRect()
              , r = document
              , i = r.documentElement
              , o = r.body
              , s = window
              , c = i.clientTop || o.clientTop || 0
              , l = i.clientLeft || o.clientLeft || 0
              , g = s.pageYOffset || i.scrollTop || o.scrollTop
              , u = s.pageXOffset || i.scrollLeft || o.scrollLeft;
            t = a.top + g - c,
            n = a.left + u - l
        } catch (d) {}
        return {
            top: t,
            left: n
        }
    }
    ,
    InViewEventEmitter.getViewportHeight = function() {
        var e = window.innerHeight
          , t = document.compatMode;
        return t && (e = "CSS1Compat" == t ? document.documentElement.clientHeight : document.body.clientHeight),
        e
    }
    ,
    InViewEventEmitter.getScrollTop = function() {
        return document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
    }
    ,
    InViewEventEmitter.isElementInDocument = function(e) {
        return document.body.contains(e)
    }
    ,
    InViewEventEmitter.isElementInView = function(e) {
        if (!InViewEventEmitter.isElementInDocument(e))
            return !1;
        var t = InViewEventEmitter.getViewportHeight()
          , n = InViewEventEmitter.getScrollTop()
          , a = InViewEventEmitter.offset(e).top
          , r = e.offsetHeight;
        return null !== a ? !(n > a + r || a > n + t) : !1
    }
    ,
    InViewEventEmitter.prototype = {
        backgroundTasks: function() {
            var e = this.elements;
            SL.each(this.rules, function(t) {
                SL.cssQuery(t.selector, function(n) {
                    var a = 0;
                    SL.each(n, function(t) {
                        SL.contains(e, t) || (e.push(t),
                        a++)
                    }),
                    a && SL.notify(t.selector + " added " + a + " elements.", 1)
                })
            }),
            this.track()
        },
        checkInView: function(e, t, n) {
            var a = SL.$data(e, "inview");
            if (InViewEventEmitter.isElementInView(e)) {
                a || SL.$data(e, "inview", !0);
                var r = this;
                this.processRules(e, function(n, a, i) {
                    if (t || !n.inviewDelay)
                        SL.$data(e, a, !0),
                        SL.onEvent({
                            type: "inview",
                            target: e,
                            inviewDelay: n.inviewDelay
                        });
                    else if (n.inviewDelay) {
                        var o = SL.$data(e, i);
                        o || (o = setTimeout(function() {
                            r.checkInView(e, !0, n.inviewDelay)
                        }, n.inviewDelay),
                        SL.$data(e, i, o))
                    }
                }, n)
            } else {
                if (!InViewEventEmitter.isElementInDocument(e)) {
                    var i = SL.indexOf(this.elements, e);
                    this.elements.splice(i, 1)
                }
                a && SL.$data(e, "inview", !1),
                this.processRules(e, function(t, n, a) {
                    var r = SL.$data(e, a);
                    r && clearTimeout(r)
                }, n)
            }
        },
        track: function() {
            for (var e = this.elements.length - 1; e >= 0; e--)
                this.checkInView(this.elements[e])
        },
        processRules: function(e, t, n) {
            var a = this.rules;
            n && (a = SL.filter(this.rules, function(e) {
                return e.inviewDelay == n
            })),
            SL.each(a, function(n, a) {
                var r = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed"
                  , i = "inview_timeout_id_" + a;
                SL.$data(e, r) || SL.matchesCss(n.selector, e) && t(n, r, i)
            })
        }
    },
    SL.availableEventEmitters.push(InViewEventEmitter),
    SL.inherit(BasicTool, SL.BaseTool),
    SL.extend(BasicTool.prototype, {
        initialize: function() {
            var e = this.settings;
            if (this.settings.initTool !== !1) {
                var t = e.url;
                t = "string" == typeof t ? SL.basePath() + t : SL.isHttps() ? t.https : t.http,
                SL.loadScript(t, SL.bind(this.onLoad, this)),
                this.initializing = !0
            } else
                this.initialized = !0
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        onLoad: function() {
            this.initialized = !0,
            this.initializing = !1,
            this.settings.initialBeacon && this.settings.initialBeacon(),
            this.flushQueue()
        },
        endPLPhase: function(e) {
            var t = this.settings.loadOn;
            e === t && (SL.notify(this.name + ": Initializing at " + e, 1),
            this.initialize())
        },
        $fire: function(e, t, n) {
            return this.initializing ? void this.queueCommand({
                command: "fire",
                arguments: [n]
            }, e, t) : void n.call(this.settings, e, t)
        }
    }),
    SL.availableTools.am = BasicTool,
    SL.availableTools.adlens = BasicTool,
    SL.availableTools.aem = BasicTool,
    SL.availableTools.__basic = BasicTool,
    SL.extend(VisitorIdTool.prototype, {
        getInstance: function() {
            return this.instance
        },
        initialize: function() {
            var e, t = this.settings;
            SL.notify("Visitor ID: Initializing tool", 1),
            e = this.createInstance(t.mcOrgId, t.initVars),
            null !== e && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs),
            t.autoRequest && e.getMarketingCloudVisitorID(),
            this.instance = e)
        },
        createInstance: function(e, t) {
            if (!SL.isString(e))
                return SL.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4),
                null;
            e = SL.replace(e),
            SL.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1),
            t = this.parseValues(t);
            var n = Visitor.getInstance(e, t);
            return SL.notify("Visitor ID: Set variables: " + SL.stringify(t), 1),
            n
        },
        applyCustomerIDs: function(e, t) {
            var n = this.parseIds(t);
            e.setCustomerIDs(n),
            SL.notify("Visitor ID: Set Customer IDs: " + SL.stringify(n), 1)
        },
        parseValues: function(e) {
            if (SL.isObject(e) === !1)
                return {};
            var t = {};
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = SL.replace(e[n]));
            return t
        },
        parseIds: function(e) {
            var t = {};
            if (SL.isObject(e) === !1)
                return {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var a = SL.replace(e[n].id);
                    a !== e[n].id && a && (t[n] = {},
                    t[n].id = a,
                    t[n].authState = Visitor.AuthState[e[n].authState])
                }
            return t
        }
    }),
    SL.availableTools.visitor_id = VisitorIdTool,
    SL.inherit(DefaultTool, SL.BaseTool),
    SL.extend(DefaultTool.prototype, {
        name: "Default",
        $loadIframe: function(e, t, n) {
            var a = n.pages
              , r = n.loadOn
              , i = SL.bind(function() {
                SL.each(a, function(n) {
                    this.loadIframe(e, t, n)
                }, this)
            }, this);
            r || i(),
            "domready" === r && SL.domReady(i),
            "load" === r && SL.addEventHandler(window, "load", i)
        },
        loadIframe: function(e, t, n) {
            var a = document.createElement("iframe");
            a.style.display = "none";
            var r = SL.data.host
              , i = n.data
              , o = this.scriptURL(n.src)
              , s = SL.searchVariables(i, e, t);
            r && (o = SL.basePath() + o),
            o += s,
            a.src = o;
            var c = document.getElementsByTagName("body")[0];
            c ? c.appendChild(a) : SL.domReady(function() {
                document.getElementsByTagName("body")[0].appendChild(a)
            })
        },
        scriptURL: function(e) {
            var t = SL.settings.scriptDir || "";
            return t + e
        },
        $loadScript: function(e, t, n) {
            var a = n.scripts
              , r = n.sequential
              , i = n.loadOn
              , o = SL.bind(function() {
                r ? this.loadScripts(e, t, a) : SL.each(a, function(n) {
                    this.loadScripts(e, t, [n])
                }, this)
            }, this);
            i ? "domready" === i ? SL.domReady(o) : "load" === i && SL.addEventHandler(window, "load", o) : o()
        },
        loadScripts: function(e, t, n) {
            function a() {
                if (i.length > 0 && r) {
                    var c = i.shift();
                    c.call(e, t, o)
                }
                var l = n.shift();
                if (l) {
                    var g = SL.data.host
                      , u = s.scriptURL(l.src);
                    g && (u = SL.basePath() + u),
                    r = l,
                    SL.loadScript(u, a)
                }
            }
            try {
                var r, n = n.slice(0), i = this.asyncScriptCallbackQueue, o = t.target || t.srcElement, s = this
            } catch (c) {
                console.error("scripts is", SL.stringify(n))
            }
            a()
        },
        $loadBlockingScript: function(e, t, n) {
            var a = n.scripts
              , r = (n.loadOn,
            SL.bind(function() {
                SL.each(a, function(n) {
                    this.loadBlockingScript(e, t, n)
                }, this)
            }, this));
            r()
        },
        loadBlockingScript: function(e, t, n) {
            var a = this.scriptURL(n.src)
              , r = SL.data.host
              , i = t.target || t.srcElement;
            r && (a = SL.basePath() + a),
            this.argsForBlockingScripts.push([e, t, i]),
            SL.loadScriptSync(a)
        },
        pushAsyncScript: function(e) {
            this.asyncScriptCallbackQueue.push(e)
        },
        pushBlockingScript: function(e) {
            var t = this.argsForBlockingScripts.shift()
              , n = t[0];
            e.apply(n, t.slice(1))
        },
        $writeHTML: SL.escapeHtmlParams(function(e, t) {
            if (SL.domReadyFired || !document.write)
                return void SL.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1);
            if ("pagebottom" !== t.type && "pagetop" !== t.type)
                return void SL.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
            for (var n = 2, a = arguments.length; a > n; n++) {
                var r = arguments[n].html;
                r = SL.replace(r, e, t),
                document.write(r)
            }
        }),
        linkNeedsDelayActivate: function(e, t) {
            t = t || window;
            var n = e.tagName
              , a = e.getAttribute("target")
              , r = e.getAttribute("href");
            return n && "a" !== n.toLowerCase() ? !1 : r ? a ? "_blank" === a ? !1 : "_top" === a ? t.top === t : "_parent" === a ? !1 : "_self" === a ? !0 : t.name ? a === t.name : !0 : !0 : !1
        },
        $delayActivateLink: function(e, t) {
            if (this.linkNeedsDelayActivate(e)) {
                SL.preventDefault(t);
                var n = SL.settings.linkDelay || 100;
                setTimeout(function() {
                    SL.setLocation(e.href)
                }, n)
            }
        },
        isQueueable: function(e) {
            return "writeHTML" !== e.command
        }
    }),
    SL.availableTools["default"] = DefaultTool,
    SL.inherit(NielsenTool, SL.BaseTool),
    SL.extend(NielsenTool.prototype, {
        name: "Nielsen",
        endPLPhase: function(e) {
            switch (e) {
            case "pagetop":
                this.initialize();
                break;
            case "pagebottom":
                this.enableTracking && (this.queueCommand({
                    command: "sendFirstBeacon",
                    arguments: []
                }),
                this.flushQueueWhenReady())
            }
        },
        defineListeners: function() {
            this.onTabFocus = SL.bind(function() {
                this.notify("Tab visible, sending view beacon when ready", 1),
                this.tabEverVisible = !0,
                this.flushQueueWhenReady()
            }, this),
            this.onPageLeave = SL.bind(function() {
                this.notify("isHuman? : " + this.isHuman(), 1),
                this.isHuman() && this.sendDurationBeacon()
            }, this),
            this.onHumanDetectionChange = SL.bind(function(e) {
                this == e.target.target && (this.human = e.target.isHuman)
            }, this)
        },
        initialize: function() {
            this.initializeTracking(),
            this.initializeDataProviders(),
            this.initializeNonHumanDetection(),
            this.tabEverVisible = SL.visibility.isVisible(),
            this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : SL.bindEventOnce("tabfocus", this.onTabFocus),
            this.initialized = !0
        },
        initializeTracking: function() {
            this.initialized || (this.notify("Initializing tracking", 1),
            this.addRemovePageLeaveEvent(this.enableTracking),
            this.addRemoveHumanDetectionChangeEvent(this.enableTracking),
            this.initialized = !0)
        },
        initializeDataProviders: function() {
            var e, t = this.getAnalyticsTool();
            this.dataProvider.register(new NielsenTool.DataProvider.VisitorID(SL.getVisitorId())),
            t ? (e = new NielsenTool.DataProvider.Generic("rsid",function() {
                return t.settings.account
            }
            ),
            this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
        },
        initializeNonHumanDetection: function() {
            SL.nonhumandetection ? (SL.nonhumandetection.init(),
            this.setEnableNonHumanDetection(0 == this.settings.enableNonHumanDetection ? !1 : !0),
            this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
        },
        getAnalyticsTool: function() {
            return this.settings.integratesWith ? SL.tools[this.settings.integratesWith] : void 0
        },
        flushQueueWhenReady: function() {
            this.enableTracking && this.tabEverVisible && SL.poll(SL.bind(function() {
                return this.isReadyToTrack() ? (this.flushQueue(),
                !0) : void 0
            }, this), 100, 20)
        },
        isReadyToTrack: function() {
            return this.tabEverVisible && this.dataProvider.isReady()
        },
        $setVars: function(e, t, n) {
            for (var a in n) {
                var r = n[a];
                "function" == typeof r && (r = r()),
                this.settings[a] = r
            }
            this.notify("Set variables done", 2),
            this.prepareContextData()
        },
        $setEnableTracking: function(e, t, n) {
            this.notify("Will" + (n ? "" : " not") + " track time on page", 1),
            this.enableTracking != n && (this.addRemovePageLeaveEvent(n),
            this.addRemoveHumanDetectionChangeEvent(n),
            this.enableTracking = n)
        },
        $sendFirstBeacon: function(e, t, n) {
            this.sendViewBeacon()
        },
        setEnableNonHumanDetection: function(e) {
            e ? SL.nonhumandetection.register(this) : SL.nonhumandetection.unregister(this)
        },
        setNonHumanDetectionDelay: function(e) {
            SL.nonhumandetection.register(this, e)
        },
        addRemovePageLeaveEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1);
            var t = 0 == e ? "unbindEvent" : "bindEvent";
            SL[t]("leave", this.onPageLeave)
        },
        addRemoveHumanDetectionChangeEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1);
            var t = 0 == e ? "unbindEvent" : "bindEvent";
            SL[t]("humandetection.change", this.onHumanDetectionChange)
        },
        sendViewBeacon: function() {
            this.notify("Tracked page view.", 1),
            this.sendBeaconWith()
        },
        sendDurationBeacon: function() {
            if (!SL.timetracking || "function" != typeof SL.timetracking.timeOnPage || null == SL.timetracking.timeOnPage())
                return void this.notify("Could not track close due missing time on page", 5);
            this.notify("Tracked close", 1),
            this.sendBeaconWith({
                timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1e3),
                duration: "D",
                timer: "timer"
            });
            var e, t = "";
            for (e = 0; e < this.magicConst; e++)
                t += "0"
        },
        sendBeaconWith: function(e) {
            this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e))
        },
        plainBeacon: function(e) {
            var t = new Image;
            t.src = e,
            t.width = 1,
            t.height = 1,
            t.alt = ""
        },
        navigatorSendBeacon: function(e) {
            navigator.sendBeacon(e)
        },
        prepareUrl: function(e) {
            var t = this.settings;
            return SL.extend(t, this.dataProvider.provide()),
            SL.extend(t, e),
            this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
        },
        preparePrefix: function(e) {
            return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
        },
        substituteVariables: function(e) {
            var t = {};
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = SL.replace(e[n]));
            return t
        },
        prepareContextData: function() {
            if (!this.getAnalyticsTool())
                return void this.notify("Adobe Analytics missing.");
            var e = this.settings;
            e.sdkVersion = _satellite.publishDate,
            this.getAnalyticsTool().$setVars(null, null, {
                contextData: this.adapt.toAnalytics(this.substituteVariables(e))
            })
        },
        isHuman: function() {
            return this.human
        },
        onTabFocus: function() {},
        onPageLeave: function() {},
        onHumanDetectionChange: function() {},
        notify: function(e, t) {
            SL.notify(this.logPrefix + e, t)
        },
        beaconMethod: "plainBeacon",
        adapt: null,
        enableTracking: !1,
        logPrefix: "Nielsen: ",
        tabEverVisible: !1,
        human: !0,
        magicConst: 2e6
    }),
    NielsenTool.DataProvider = {},
    NielsenTool.DataProvider.Generic = function(e, t) {
        this.key = e,
        this.valueFn = t
    }
    ,
    SL.extend(NielsenTool.DataProvider.Generic.prototype, {
        isReady: function() {
            return !0
        },
        getValue: function() {
            return this.valueFn()
        },
        provide: function() {
            this.isReady() || NielsenTool.prototype.notify("Not yet ready to provide value for: " + this.key, 5);
            var e = {};
            return e[this.key] = this.getValue(),
            e
        }
    }),
    NielsenTool.DataProvider.VisitorID = function(e, t, n) {
        this.key = t || "uuid",
        this.visitorInstance = e,
        this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])),
        this.fallbackProvider = n || new NielsenTool.UUID
    }
    ,
    SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic),
    SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
        isReady: function() {
            return null === this.visitorInstance ? !0 : !!this.visitorId
        },
        getValue: function() {
            return this.visitorId || this.fallbackProvider.get()
        },
        _visitorIdCallback: function(e) {
            this.visitorId = e
        }
    }),
    NielsenTool.DataProvider.Aggregate = function() {
        this.providers = [];
        for (var e = 0; e < arguments.length; e++)
            this.register(arguments[e])
    }
    ,
    SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
        register: function(e) {
            this.providers.push(e)
        },
        isReady: function() {
            return SL.every(this.providers, function(e) {
                return e.isReady()
            })
        },
        provide: function() {
            var e = {};
            return SL.each(this.providers, function(t) {
                SL.extend(e, t.provide())
            }),
            e
        }
    }),
    NielsenTool.UUID = function() {}
    ,
    SL.extend(NielsenTool.UUID.prototype, {
        generate: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                  , n = "x" == e ? t : 3 & t | 8;
                return n.toString(16)
            })
        },
        get: function() {
            var e = SL.readCookie(this.key("uuid"));
            return e ? e : (e = this.generate(),
            SL.setCookie(this.key("uuid"), e),
            e)
        },
        key: function(e) {
            return "_dtm_nielsen_" + e
        }
    }),
    NielsenTool.DataAdapters = function() {}
    ,
    SL.extend(NielsenTool.DataAdapters.prototype, {
        toNielsen: function(e) {
            var t = (new Date).getTime()
              , n = {
                c6: "vc,",
                c13: "asid,",
                c15: "apn,",
                c27: "cln,",
                c32: "segA,",
                c33: "segB,",
                c34: "segC,",
                c35: "adrsid,",
                c29: "plid,",
                c30: "bldv,",
                c40: "adbid,"
            }
              , a = {
                ci: e.clientId,
                c6: e.vcid,
                c13: e.appId,
                c15: e.appName,
                prv: 1,
                forward: 0,
                ad: 0,
                cr: e.duration || "V",
                rt: "text",
                st: "dcr",
                prd: "dcr",
                r: t,
                at: e.timer || "view",
                c16: e.sdkVersion,
                c27: e.timeOnPage || 0,
                c40: e.uuid,
                c35: e.rsid,
                ti: t,
                sup: 0,
                c32: e.segmentA,
                c33: e.segmentB,
                c34: e.segmentC,
                asn: e.assetName,
                c29: e.playerID,
                c30: e.buildVersion
            };
            for (key in a)
                if (a[key] !== undefined && null != a[key] && a[key] !== undefined && null != a && "" != a) {
                    var r = encodeURIComponent(a[key]);
                    n.hasOwnProperty(key) && r && (r = n[key] + r),
                    a[key] = r
                }
            return this.filterObject(a)
        },
        toAnalytics: function(e) {
            return this.filterObject({
                "a.nielsen.clientid": e.clientId,
                "a.nielsen.vcid": e.vcid,
                "a.nielsen.appid": e.appId,
                "a.nielsen.appname": e.appName,
                "a.nielsen.accmethod": "0",
                "a.nielsen.ctype": "text",
                "a.nielsen.sega": e.segmentA,
                "a.nielsen.segb": e.segmentB,
                "a.nielsen.segc": e.segmentC,
                "a.nielsen.asset": e.assetName
            })
        },
        convertToURI: function(e) {
            if (SL.isObject(e) === !1)
                return "";
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return t.join("&")
        },
        filterObject: function(e) {
            for (var t in e)
                !e.hasOwnProperty(t) || null != e[t] && e[t] !== undefined || delete e[t];
            return e
        }
    }),
    SL.availableTools.nielsen = NielsenTool,
    SL.inherit(Tnt, SL.BaseTool),
    SL.extend(Tnt.prototype, {
        name: "tnt",
        endPLPhase: function(e) {
            "aftertoolinit" === e && this.initialize()
        },
        initialize: function() {
            SL.notify("Test & Target: Initializing", 1),
            this.initializeTargetPageParams(),
            this.load()
        },
        initializeTargetPageParams: function() {
            window.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(window.targetPageParams())),
            this.updateTargetPageParams(this.settings.pageParams),
            this.setTargetPageParamsFunction()
        },
        load: function() {
            var e = this.getMboxURL(this.settings.mboxURL);
            this.settings.initTool !== !1 ? this.settings.loadSync ? (SL.loadScriptSync(e),
            this.onScriptLoaded()) : (SL.loadScript(e, SL.bind(this.onScriptLoaded, this)),
            this.initializing = !0) : this.initialized = !0
        },
        getMboxURL: function(e) {
            var t = e;
            return SL.isObject(e) && (t = "https:" === window.location.protocol ? e.https : e.http),
            t.match(/^https?:/) ? t : SL.basePath() + t
        },
        onScriptLoaded: function() {
            SL.notify("Test & Target: loaded.", 1),
            this.flushQueue(),
            this.initialized = !0,
            this.initializing = !1
        },
        $addMbox: function(e, t, n) {
            var a = n.mboxGoesAround
              , r = a + "{visibility: hidden;}"
              , i = this.appendStyle(r);
            a in this.styleElements || (this.styleElements[a] = i),
            this.initialized ? this.$addMBoxStep2(null, null, n) : this.initializing && this.queueCommand({
                command: "addMBoxStep2",
                arguments: [n]
            }, e, t)
        },
        $addMBoxStep2: function(e, t, n) {
            var a = this.generateID()
              , r = this;
            SL.addEventHandler(window, "load", SL.bind(function() {
                SL.cssQuery(n.mboxGoesAround, function(e) {
                    var t = e[0];
                    if (t) {
                        var i = document.createElement("div");
                        i.id = a,
                        t.parentNode.replaceChild(i, t),
                        i.appendChild(t),
                        window.mboxDefine(a, n.mboxName);
                        var o = [n.mboxName];
                        n.arguments && (o = o.concat(n.arguments)),
                        window.mboxUpdate.apply(null, o),
                        r.reappearWhenCallComesBack(t, a, n.timeout, n)
                    }
                })
            }, this)),
            this.lastMboxID = a
        },
        $addTargetPageParams: function(e, t, n) {
            this.updateTargetPageParams(n)
        },
        generateID: function() {
            var e = "_sdsat_mbox_" + String(Math.random()).substring(2) + "_";
            return e
        },
        appendStyle: function(e) {
            var t = document.getElementsByTagName("head")[0]
              , n = document.createElement("style");
            return n.type = "text/css",
            n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
            t.appendChild(n),
            n
        },
        reappearWhenCallComesBack: function(e, t, n, a) {
            function r() {
                var e = i.styleElements[a.mboxGoesAround];
                e && (e.parentNode.removeChild(e),
                delete i.styleElements[a.mboxGoesAround])
            }
            var i = this;
            SL.cssQuery('script[src*="omtrdc.net"]', function(e) {
                var t = e[0];
                if (t) {
                    SL.scriptOnLoad(t.src, t, function() {
                        SL.notify("Test & Target: request complete", 1),
                        r(),
                        clearTimeout(a)
                    });
                    var a = setTimeout(function() {
                        SL.notify("Test & Target: bailing after " + n + "ms", 1),
                        r()
                    }, n)
                } else
                    SL.notify("Test & Target: failed to find T&T ajax call, bailing", 1),
                    r()
            })
        },
        updateTargetPageParams: function(e) {
            var t = {};
            for (var n in e)
                e.hasOwnProperty(n) && (t[SL.replace(n)] = SL.replace(e[n]));
            SL.extend(this.targetPageParamsStore, t)
        },
        getTargetPageParams: function() {
            return this.targetPageParamsStore
        },
        setTargetPageParamsFunction: function() {
            window.targetPageParams = SL.bind(this.getTargetPageParams, this)
        },
        parseTargetPageParamsResult: function(e) {
            var t = e;
            return SL.isArray(e) && (e = e.join("&")),
            SL.isString(e) && (t = SL.parseQueryParams(e)),
            t
        }
    }),
    SL.availableTools.tnt = Tnt,
    SL.inherit(SiteCatalystTool, SL.BaseTool),
    SL.extend(SiteCatalystTool.prototype, {
        name: "SC",
        endPLPhase: function(e) {
            var t = this.settings.loadOn;
            e === t && this.initialize(e)
        },
        initialize: function(e) {
            if (!this._cancelToolInit)
                if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                    type: e
                }),
                this.settings.initTool !== !1) {
                    var t = this.settings.sCodeURL || SL.basePath() + "s_code.js";
                    "object" == typeof t && (t = "https:" === window.location.protocol ? t.https : t.http),
                    t.match(/^https?:/) || (t = SL.basePath() + t),
                    this.settings.initVars && this.$setVars(null, null, this.settings.initVars),
                    SL.loadScript(t, SL.bind(this.onSCodeLoaded, this)),
                    this.initializing = !0
                } else
                    this.initializing = !0,
                    this.pollForSC()
        },
        getS: function(e, t) {
            var n = t && t.hostname || window.location.hostname
              , a = this.concatWithToolVarBindings(t && t.setVars || this.varBindings)
              , r = t && t.addEvent || this.events
              , i = this.getAccount(n)
              , o = window.s_gi;
            if (!o)
                return null;
            if (this.isValidSCInstance(e) || (e = null),
            !i && !e)
                return SL.notify("Adobe Analytics: tracker not initialized because account was not found", 1),
                null;
            var e = e || o(i)
              , s = "D" + SL.appVersion;
            "undefined" != typeof e.tagContainerMarker ? e.tagContainerMarker = s : "string" == typeof e.version && e.version.substring(e.version.length - 5) !== "-" + s && (e.version += "-" + s),
            e.sa && this.settings.skipSetAccount !== !0 && this.settings.initTool !== !1 && e.sa(this.settings.account),
            this.applyVarBindingsOnTracker(e, a),
            r.length > 0 && (e.events = r.join(","));
            var c = SL.getVisitorId();
            return c && (e.visitor = SL.getVisitorId()),
            e
        },
        onSCodeLoaded: function(e) {
            this.initialized = !0,
            this.initializing = !1;
            var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
            SL.notify(t.join(""), 1),
            SL.fireEvent(this.id + ".load", this.getS()),
            e || (this.flushQueueExceptTrackLink(),
            this.sendBeacon()),
            this.flushQueue()
        },
        getAccount: function(e) {
            return window.s_account ? window.s_account : e && this.settings.accountByHost ? this.settings.accountByHost[e] || this.settings.account : this.settings.account
        },
        getTrackingServer: function() {
            var e = this
              , t = e.getS();
            if (t) {
                if (t.ssl && t.trackingServerSecure)
                    return t.trackingServerSecure;
                if (t.trackingServer)
                    return t.trackingServer
            }
            var n = e.getAccount(window.location.hostname);
            if (!n)
                return null;
            var a, r, i, o = "", s = t && t.dc;
            return a = n,
            r = a.indexOf(","),
            r >= 0 && (a = a.gb(0, r)),
            a = a.replace(/[^A-Za-z0-9]/g, ""),
            o || (o = "2o7.net"),
            s = s ? ("" + s).toLowerCase() : "d1",
            "2o7.net" == o && ("d1" == s ? s = "112" : "d2" == s && (s = "122"),
            i = ""),
            r = a + "." + s + "." + i + o
        },
        sendBeacon: function() {
            var e = this.getS(window[this.settings.renameS || "s"]);
            return e ? this.settings.customInit && this.settings.customInit(e) === !1 ? void SL.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(e, this.varBindings),
            this.executeCustomSetupFuns(e),
            e.t(),
            this.clearVarBindings(),
            this.clearCustomSetup(),
            void SL.notify("Adobe Analytics: tracked page view", 1)) : void SL.notify("Adobe Analytics: page code not loaded", 1)
        },
        pollForSC: function() {
            SL.poll(SL.bind(function() {
                return "function" == typeof window.s_gi ? (this.onSCodeLoaded(!0),
                !0) : void 0
            }, this))
        },
        flushQueueExceptTrackLink: function() {
            if (this.pending) {
                for (var e = [], t = 0; t < this.pending.length; t++) {
                    var n = this.pending[t]
                      , a = n[0];
                    "trackLink" === a.command ? e.push(n) : this.triggerCommand.apply(this, n)
                }
                this.pending = e
            }
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        substituteVariables: function(e, t) {
            var n = {};
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a];
                    n[a] = SL.replace(r, location, t)
                }
            return n
        },
        $setVars: function(e, t, n) {
            for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var r = n[a];
                    "function" == typeof r && (r = r()),
                    this.varBindings[a] = r
                }
            SL.notify("Adobe Analytics: set variables.", 2)
        },
        $customSetup: function(e, t, n) {
            this.customSetupFuns.push(function(a) {
                n.call(e, t, a)
            })
        },
        isValidSCInstance: function(e) {
            return !!e && "function" == typeof e.t && "function" == typeof e.tl
        },
        concatWithToolVarBindings: function(e) {
            var t = this.settings.initVars || {};
            return SL.map(["trackingServer", "trackingServerSecure"], function(n) {
                t[n] && !e[n] && (e[n] = t[n])
            }),
            e
        },
        applyVarBindingsOnTracker: function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        },
        clearVarBindings: function() {
            this.varBindings = {}
        },
        clearCustomSetup: function() {
            this.customSetupFuns = []
        },
        executeCustomSetupFuns: function(e) {
            SL.each(this.customSetupFuns, function(t) {
                t.call(window, e)
            })
        },
        $trackLink: function(e, t, n) {
            n = n || {};
            var a = n.type
              , r = n.linkName;
            !r && e && e.nodeName && "a" === e.nodeName.toLowerCase() && (r = e.innerHTML),
            r || (r = "link clicked");
            var i = n && n.setVars
              , o = n && n.addEvent || []
              , s = this.getS(null, {
                setVars: i,
                addEvent: o
            });
            if (!s)
                return void SL.notify("Adobe Analytics: page code not loaded", 1);
            var c = s.linkTrackVars
              , l = s.linkTrackEvents
              , g = this.definedVarNames(i);
            n && n.customSetup && n.customSetup.call(e, t, s),
            o.length > 0 && g.push("events"),
            s.products && g.push("products"),
            g = this.mergeTrackLinkVars(s.linkTrackVars, g),
            o = this.mergeTrackLinkVars(s.linkTrackEvents, o),
            s.linkTrackVars = this.getCustomLinkVarsList(g);
            var u = SL.map(o, function(e) {
                return e.split(":")[0]
            });
            s.linkTrackEvents = this.getCustomLinkVarsList(u),
            s.tl(!0, a || "o", r),
            SL.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", SL.stringify(s.linkTrackVars), "; linkTrackEvents=", SL.stringify(s.linkTrackEvents)].join(""), 1),
            s.linkTrackVars = c,
            s.linkTrackEvents = l
        },
        mergeTrackLinkVars: function(e, t) {
            return e && (t = e.split(",").concat(t)),
            t
        },
        getCustomLinkVarsList: function(e) {
            var t = SL.indexOf(e, "None");
            return t > -1 && e.length > 1 && e.splice(t, 1),
            e.join(",")
        },
        definedVarNames: function(e) {
            e = e || this.varBindings;
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(n) && t.push(n);
            return t
        },
        $trackPageView: function(e, t, n) {
            var a = n && n.setVars
              , r = n && n.addEvent || []
              , i = this.getS(null, {
                setVars: a,
                addEvent: r
            });
            return i ? (i.linkTrackVars = "",
            i.linkTrackEvents = "",
            this.executeCustomSetupFuns(i),
            n && n.customSetup && n.customSetup.call(e, t, i),
            i.t(),
            this.clearVarBindings(),
            this.clearCustomSetup(),
            void SL.notify("Adobe Analytics: tracked page view", 1)) : void SL.notify("Adobe Analytics: page code not loaded", 1)
        },
        $postTransaction: function(e, t, n) {
            var a = SL.data.transaction = window[n]
              , r = this.varBindings
              , i = this.settings.fieldVarMapping;
            if (SL.each(a.items, function(e) {
                this.products.push(e)
            }, this),
            r.products = SL.map(this.products, function(e) {
                var t = [];
                if (i && i.item)
                    for (var n in i.item)
                        if (i.item.hasOwnProperty(n)) {
                            var a = i.item[n];
                            t.push(a + "=" + e[n]),
                            "event" === a.substring(0, 5) && this.events.push(a)
                        }
                var r = ["", e.product, e.quantity, e.unitPrice * e.quantity];
                return t.length > 0 && r.push(t.join("|")),
                r.join(";")
            }, this).join(","),
            i && i.transaction) {
                var o = [];
                for (var s in i.transaction)
                    if (i.transaction.hasOwnProperty(s)) {
                        var n = i.transaction[s];
                        o.push(n + "=" + a[s]),
                        "event" === n.substring(0, 5) && this.events.push(n)
                    }
                r.products.length > 0 && (r.products += ","),
                r.products += ";;;;" + o.join("|")
            }
        },
        $addEvent: function(e, t) {
            for (var n = 2, a = arguments.length; a > n; n++)
                this.events.push(arguments[n])
        },
        $addProduct: function(e, t) {
            for (var n = 2, a = arguments.length; a > n; n++)
                this.products.push(arguments[n])
        }
    }),
    SL.availableTools.sc = SiteCatalystTool,
    SL.inherit(GATool, SL.BaseTool),
    SL.extend(GATool.prototype, {
        name: "GA",
        initialize: function() {
            var e = this.settings
              , t = window._gaq
              , n = e.initCommands || []
              , a = e.customInit;
            if (t || (_gaq = []),
            this.isSuppressed())
                SL.notify("GA: page code not loaded(suppressed).", 1);
            else {
                if (!t && !GATool.scriptLoaded) {
                    var r = SL.isHttps()
                      , i = (r ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    e.url && (i = r ? e.url.https : e.url.http),
                    SL.loadScript(i),
                    GATool.scriptLoaded = !0,
                    SL.notify("GA: page code loaded.", 1)
                }
                var o = (e.domain,
                e.trackerName)
                  , s = GAUtils.allowLinker()
                  , c = SL.replace(e.account, location);
                SL.settings.domainList || [];
                _gaq.push([this.cmd("setAccount"), c]),
                s && _gaq.push([this.cmd("setAllowLinker"), s]),
                _gaq.push([this.cmd("setDomainName"), GAUtils.cookieDomain()]),
                SL.each(n, function(e) {
                    var t = [this.cmd(e[0])].concat(SL.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                    _gaq.push(t)
                }, this),
                a && (this.suppressInitialPageView = !1 === a(_gaq, o)),
                e.pageName && this.$overrideInitialPageView(null, null, e.pageName)
            }
            this.initialized = !0,
            SL.fireEvent(this.id + ".configure", _gaq, o)
        },
        isSuppressed: function() {
            return this._cancelToolInit || this.settings.initTool === !1
        },
        tracker: function() {
            return this.settings.trackerName
        },
        cmd: function(e) {
            var t = this.tracker();
            return t ? t + "._" + e : "_" + e
        },
        $overrideInitialPageView: function(e, t, n) {
            this.urlOverride = n
        },
        trackInitialPageView: function() {
            if (!this.isSuppressed() && !this.suppressInitialPageView)
                if (this.urlOverride) {
                    var e = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                    this.$missing$("trackPageview", null, null, e)
                } else
                    this.$missing$("trackPageview")
        },
        endPLPhase: function(e) {
            var t = this.settings.loadOn;
            e === t && (SL.notify("GA: Initializing at " + e, 1),
            this.initialize(),
            this.flushQueue(),
            this.trackInitialPageView())
        },
        call: function(e, t, n, a) {
            if (!this._cancelToolInit) {
                var r = (this.settings,
                this.tracker())
                  , i = this.cmd(e)
                  , a = a ? [i].concat(a) : [i];
                _gaq.push(a),
                r ? SL.notify("GA: sent command " + e + " to tracker " + r + (a.length > 1 ? " with parameters [" + a.slice(1).join(", ") + "]" : "") + ".", 1) : SL.notify("GA: sent command " + e + (a.length > 1 ? " with parameters [" + a.slice(1).join(", ") + "]" : "") + ".", 1)
            }
        },
        $missing$: function(e, t, n, a) {
            this.call(e, t, n, a)
        },
        $postTransaction: function(e, t, n) {
            var a = SL.data.customVars.transaction = window[n];
            this.call("addTrans", e, t, [a.orderID, a.affiliation, a.total, a.tax, a.shipping, a.city, a.state, a.country]),
            SL.each(a.items, function(n) {
                this.call("addItem", e, t, [n.orderID, n.sku, n.product, n.category, n.unitPrice, n.quantity])
            }, this),
            this.call("trackTrans", e, t)
        },
        delayLink: function(e, t) {
            var n = this;
            if (GAUtils.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !SL.isSubdomainOf(e.hostname, location.hostname)) {
                SL.preventDefault(t);
                var a = SL.settings.linkDelay || 100;
                setTimeout(function() {
                    n.call("link", e, t, [e.href])
                }, a)
            }
        },
        popupLink: function(e, t) {
            if (window._gat) {
                SL.preventDefault(t);
                var n = this.settings.account
                  , a = window._gat._createTracker(n)
                  , r = a._getLinkerUrl(e.href);
                window.open(r)
            }
        },
        $link: function(e, t) {
            "_blank" === e.getAttribute("target") ? this.popupLink(e, t) : this.delayLink(e, t)
        },
        $trackEvent: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            if (n.length >= 4 && null != n[3]) {
                var a = parseInt(n[3], 10);
                SL.isNaN(a) && (a = 1),
                n[3] = a
            }
            this.call("trackEvent", e, t, n)
        }
    }),
    SL.availableTools.ga = GATool,
    SL.inherit(GAUniversalTool, SL.BaseTool),
    SL.extend(GAUniversalTool.prototype, {
        name: "GAUniversal",
        endPLPhase: function(e) {
            var t = this.settings
              , n = t.loadOn;
            e === n && (SL.notify("GAU: Initializing at " + e, 1),
            this.initialize(),
            this.flushQueue(),
            this.trackInitialPageView())
        },
        getTrackerName: function() {
            return this.settings.trackerSettings.name || ""
        },
        isPageCodeLoadSuppressed: function() {
            return this.settings.initTool === !1 || this._cancelToolInit === !0
        },
        initialize: function() {
            if (this.isPageCodeLoadSuppressed())
                return this.initialized = !0,
                void SL.notify("GAU: Page code not loaded (suppressed).", 1);
            var e = "ga";
            window[e] = window[e] || this.createGAObject(),
            window.GoogleAnalyticsObject = e,
            SL.notify("GAU: Page code loaded.", 1),
            SL.loadScriptOnce(this.getToolUrl());
            var t = this.settings;
            if (GAUtils.allowLinker() && t.allowLinker !== !1 ? this.createAccountForLinker() : this.createAccount(),
            this.executeInitCommands(),
            t.customInit) {
                var n = t.customInit
                  , a = n(window[e], this.getTrackerName());
                a === !1 && (this.suppressInitialPageView = !0)
            }
            this.initialized = !0
        },
        createGAObject: function() {
            var e = function() {
                e.q.push(arguments)
            };
            return e.q = [],
            e.l = 1 * new Date,
            e
        },
        createAccount: function() {
            this.create()
        },
        createAccountForLinker: function() {
            var e = {};
            GAUtils.allowLinker() && (e.allowLinker = !0),
            this.create(e),
            this.call("require", "linker"),
            this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
        },
        create: function(e) {
            var t = this.settings.trackerSettings;
            t = SL.preprocessArguments([t], location, null, this.forceLowerCase)[0],
            t.trackingId = SL.replace(this.settings.trackerSettings.trackingId, location),
            t.cookieDomain || (t.cookieDomain = GAUtils.cookieDomain()),
            SL.extend(t, e || {}),
            this.call("create", t)
        },
        autoLinkDomains: function() {
            var e = location.hostname;
            return SL.filter(SL.settings.domainList, function(t) {
                return t !== e
            })
        },
        executeInitCommands: function() {
            var e = this.settings;
            e.initCommands && SL.each(e.initCommands, function(e) {
                var t = e.splice(2, e.length - 2);
                e = e.concat(SL.preprocessArguments(t, location, null, this.forceLowerCase)),
                this.call.apply(this, e)
            }, this)
        },
        trackInitialPageView: function() {
            this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
        },
        call: function() {
            return "function" != typeof ga ? void SL.notify("GA Universal function not found!", 4) : void (this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]),
            this.log(SL.toArray(arguments)),
            ga.apply(window, arguments)))
        },
        isCallSuppressed: function() {
            return this._cancelToolInit === !0
        },
        $missing$: function(e, t, n, a) {
            a = a || [],
            a = [e].concat(a),
            this.call.apply(this, a)
        },
        getToolUrl: function() {
            var e = this.settings
              , t = SL.isHttps();
            return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
        },
        cmd: function(e) {
            var t = ["send", "set", "get"]
              , n = this.getTrackerName();
            return n && -1 !== SL.indexOf(t, e) ? n + "." + e : e
        },
        log: function(e) {
            var t = e[0]
              , n = this.getTrackerName() || "default"
              , a = "GA Universal: sent command " + t + " to tracker " + n;
            if (e.length > 1) {
                SL.stringify(e.slice(1));
                a += " with parameters " + SL.stringify(e.slice(1))
            }
            a += ".",
            SL.notify(a, 1)
        }
    }),
    SL.availableTools.ga_universal = GAUniversalTool;
    var GAUtils = {
        allowLinker: function() {
            return SL.hasMultipleDomains()
        },
        cookieDomain: function() {
            var e = SL.settings.domainList
              , t = SL.find(e, function(e) {
                var t = window.location.hostname;
                return SL.equalsIgnoreCase(t.slice(t.length - e.length), e)
            })
              , n = t ? "." + t : "auto";
            return n
        }
    };
    SL.ecommerce = {
        addItem: function() {
            var e = [].slice.call(arguments);
            SL.onEvent({
                type: "ecommerce.additem",
                target: e
            })
        },
        addTrans: function() {
            var e = [].slice.call(arguments);
            SL.data.saleData.sale = {
                orderId: e[0],
                revenue: e[2]
            },
            SL.onEvent({
                type: "ecommerce.addtrans",
                target: e
            })
        },
        trackTrans: function() {
            SL.onEvent({
                type: "ecommerce.tracktrans",
                target: []
            })
        }
    },
    SL.visibility = {
        isHidden: function() {
            var e = this.getHiddenProperty();
            return e ? document[e] : !1
        },
        isVisible: function() {
            return !this.isHidden()
        },
        getHiddenProperty: function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden"in document)
                return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden"in document)
                    return e[t] + "Hidden";
            return null
        },
        getVisibilityEvent: function() {
            var e = this.getHiddenProperty();
            return e ? e.replace(/[H|h]idden/, "") + "visibilitychange" : null
        }
    },
    _satellite.init({
        tools: {
            "1246ba36d98f5d30df52ca14f3b38a0e": {
                engine: "ga",
                pageName: "%URI%",
                forceLowerCase: !1,
                euCookie: !1,
                loadOn: "pagebottom",
                initCommands: [["setDomainName", "gittigidiyor.com"], ["setCampContentKey", "ggap_c"], ["setCampMediumKey", "ggap_m"], ["setCampNameKey", "ggap_n"], ["setCampSourceKey", "ggap_s"], ["setCampTermKey", "ggap_t"]],
                account: "UA-313101-1"
            },
            "546d868fa00290cd686fa480136f86fe": {
                engine: "sc",
                loadOn: "pagebottom",
                account: "ebaytkprod",
                euCookie: !1,
                sCodeURL: "f44cace702bfaa11f3b3355214b590f45d41db61/s-code-contents-ea9d4d24764c440a9354755ade5aa1137d0ca292.js",
                renameS: "s",
                initVars: {
                    charSet: "UTF-8",
                    server: "www.gittigidiyor.com",
                    currencyCode: "TRL",
                    pageName: "%TRACKINGPAGENAME%",
                    channel: "%TRACKINGCONTENTNAME%",
                    trackInlineStats: !0,
                    trackDownloadLinks: !0,
                    linkDownloadFileTypes: "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
                    trackExternalLinks: !0,
                    linkLeaveQueryString: !1,
                    dynamicVariablePrefix: "D=",
                    eVar3: "%sc_eVar3%",
                    eVar4: "%sc_eVar4%",
                    eVar5: "%sc_eVar5%",
                    eVar20: "%sc_eVar20%",
                    eVar27: "%sc_eVar27%",
                    eVar11: "%sc_eVar11%",
                    eVar18: "%sc_eVar18%",
                    eVar19: "%sc_eVar19%",
                    eVar7: "%sc_eVar7%",
                    eVar63: "%TRACKING_SUID%",
                    eVar70: "%sc_eVar70%",
                    eVar67: "%sc_eVar67%",
                    eVar68: "%sc_eVar68%",
                    eVar73: "%sc_prop34%",
                    eVar74: "%sc_prop35%",
                    eVar46: "%sc_eVar46%",
                    eVar12: "%sc_eVar12%",
                    eVar72: "%OMCP_Cookie%",
                    eVar76: "%sc_chtbx%",
                    eVar29: "%sc_chtbx%",
                    eVar77: "%sc_extrf%",
                    eVar38: "%sc_evar38%",
                    prop3: "%sc_prop3%",
                    prop4: "%sc_prop4%",
                    prop5: "%sc_prop5%",
                    prop6: "%sc_prop6%",
                    prop7: "%sc_prop7%",
                    prop9: "%sc_prop9%",
                    prop1: "%sc_prop1%",
                    prop2: "%sc_prop2%",
                    prop10: "%sc_prop10%",
                    prop11: "%sc_prop11%",
                    prop34: "%sc_prop34%",
                    prop35: "%sc_prop35%",
                    prop49: "%sc_prop49%",
                    prop59: "%TRACKINGCONTENTNAME%:%TRACKING_SUID_LOGIN%",
                    prop71: "%sc_prop71%",
                    prop72: "%sc_prop72%",
                    prop29: "%TRACKING_PRODUCT_TYPE%"
                },
                customInit: function(e) {
                    e = window.s,
                    e.products = _satellite.getVar("sc_products"),
                    e.list1 = _satellite.getVar("sc_list1"),
                    e.purchaseID = _satellite.getVar("sc_purchaseID"),
                    e.pageType = _satellite.getVar("sc_pageType"),
                    e.prop44 = _satellite.getQueryParam("satici"),
                    "true" == _satellite.getQueryParam("catalogs") && _satellite.getVar("sc_prop71") ? e.prop8 = sc_prop7 + ":Catalog Search" : _satellite.getVar("sc_prop4") ? e.prop8 = e.prop4 : e.prop8 = _satellite.getVar("sc_channel"),
                    _satellite.getQueryParam("satici") ? e.prop45 = "Var" : e.prop45 = "Yok",
                    _satellite.getVar("sc_events") && (e.events = _satellite.getVar("sc_events"))
                }
            }
        },
        pageLoadRules: [{
            name: "All Pages",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    hier1: ""
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n	var mediaPlexHost = (("https:" == document.location.protocol) ? "https://secure." : "http://");\n	document.write(unescape("%3Cscript src=\'" + mediaPlexHost + "img-cdn.mediaplex.com/0/14489/141947/mp_landing_ns_2017-05-12.js\' type=\'text/javascript\'%3E%3C/script%3E"));\n</script>'
                }]
            }],
            event: "pagebottom"
        }, {
            name: "Browse Pages - WEB",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Category Page", "%TRACKING_DEVICE_TYPE%", "", null, !0]
            }, {
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar3: "%sc_channel%",
                    eVar4: "%sc_prop3%",
                    eVar5: "%sc_prop4%",
                    pageName: "%sc_pageName%",
                    channel: "%sc_channel%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("sc_channel"), "SRP:Browse")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Cadde",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    hier1: ""
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t = window.s,
                    "Cadde:ErrorPage" == _satellite.getVar("TRACKINGPAGENAME") ? (t.pageName = "",
                    t.pageType = "errorPage") : _satellite.getVar("TRACKINGPAGENAME"),
                    "arama" == window.location.pathname.split("/")[2] ? (t.pageName = "Cadde:Search",
                    t.channel = "Cadde:Search",
                    t.prop3 = "Cadde:Search",
                    t.prop31 = window.location.pathname.split("/")[3],
                    t.eVar56 = t.prop31,
                    null != document.getElementById("searchInfo") ? (t.events = "event22",
                    t.prop32 = "zero") : t.events = "event20",
                    t.eVar3 = t.prop3,
                    t.eVar4 = t.prop4,
                    t.eVar5 = t.prop5,
                    t.prop6 = t.pageName,
                    t.prop7 = t.prop6,
                    t.prop9 = t.prop3) : "Cadde:Browse" == _satellite.getVar("TRACKINGCONTENTNAME") ? (t.pageName = "Cadde:Browse" + window.location.pathname,
                    t.channel = "Cadde:Browse",
                    t.prop3 = "Cadde:Browse",
                    t.prop4 = "Cadde:Browse:" + window.location.pathname.split("/")[3],
                    t.prop5 = "Cadde:Browse:" + window.location.pathname.split("/")[3] + ":" + window.location.pathname.split("/")[4],
                    t.eVar3 = t.prop3,
                    t.eVar4 = t.prop4,
                    t.eVar5 = t.prop5,
                    t.prop7 = t.prop6,
                    t.prop9 = t.prop3) : "Cadde:Brand" == _satellite.getVar("TRACKINGCONTENTNAME") ? (t.channel = "Cadde:Brand",
                    t.prop3 = "Cadde:Brand",
                    t.prop4 = "Cadde:Brand:" + _satellite.getVar("TRACKING_BRAND"),
                    t.prop5 = "Cadde:Brand:" + _satellite.getVar("TRACKING_BRAND") + ":" + _satellite.getVar("TRACKING_PAGETYPE"),
                    t.prop6 = _satellite.getVar("TRACKINGPAGENAME"),
                    t.prop7 = t.prop6,
                    t.prop9 = t.prop3,
                    t.eVar3 = t.prop3,
                    t.eVar4 = t.prop4,
                    t.eVar5 = t.prop5,
                    t.prop33 = _satellite.getVar("TRACKING_SEARCH_TERM"),
                    t.eVar58 = t.prop33) : "Cadde:Main Page" == _satellite.getVar("TRACKINGPAGENAME") ? (t.channel = "Cadde:Main Page",
                    t.prop3 = _satellite.getVar("TRACKINGPAGENAME"),
                    t.prop4 = t.prop3,
                    t.prop5 = t.prop3,
                    t.prop6 = t.prop3,
                    t.prop7 = t.prop6,
                    t.prop9 = t.prop3) : (t.channel = "Cadde",
                    t.prop3 = _satellite.getVar("TRACKINGCONTENTNAME"),
                    t.prop4 = t.prop3,
                    t.prop5 = t.prop3,
                    t.prop6 = t.prop3,
                    t.prop7 = t.prop6,
                    t.prop9 = t.prop3)
                }
                ]
            }],
            scope: {
                URI: {
                    include: ["/cadde"]
                },
                subdomains: {
                    include: ["www.gittigidiyor.com"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Cadde Portre",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    pageName: "Cadde Portre:%window.location.pathname%",
                    channel: "Cadde Portre",
                    hier1: ""
                }]
            }],
            scope: {
                subdomains: {
                    include: ["portre.gittigidiyor.com", "portretest.gittigidiyor.com"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Catalog Browse and Listing",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar3: "%TRACKINGCONTENTNAME%",
                    eVar4: "%sc_prop3%",
                    eVar5: "%sc_prop4%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /Catalog Browse|Catalog Listing/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Catalog Page",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar3: "%TRACKINGCONTENTNAME%",
                    eVar4: "%sc_prop3%",
                    eVar5: "%sc_prop4%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    document.getElementById("catalogGroupID") && (t = window.s,
                    t.prop19 = JSON.parse(document.getElementById("catalogGroupID").getAttribute("value")))
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^Catalog Page/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Payment",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar21: "%sc_eVar21%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    1 == _satellite.getVar("checkout_3d_button") ? (t.prop69 = "3D",
                    t.eVar39 = "3D") : (t.prop69 = "Other",
                    t.eVar39 = "Other"),
                    t = window.s
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Result - Gelirortaklari",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    var n = AFFILIATE_PRODUCTS.indexOf("cadde");
                    t = window.s,
                    n > 0 ? t.eVar45 = "Cadde" : t.eVar45 = "GG"
                }
                ]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n	var gg = gg || {};\n			eval(AFFILIATE_PRODUCTS.replace(/&/g, ";").replace(/\\[/g, "[\'").replace(/\\]/g, "\']"));\n	var tech = "b,g,n,v,x".split(","), ceptel = "t".split(","), subaltin="ma".split(",");\n	var pGNonT = pGT = pCep = pAlt = pCNonT = pCT = +0;\n	var isGG, cat, sku, al, go_name;\n		for (var i in gg) {\n	var arr = i.split("_"), pr = +gg[i];\n	sku = arr[0], cat = arr[1][0], isGG = arr[2] == "gg", al=arr[1];\nif (tech.indexOf(cat) >= 0) if (isGG) {pGT = pr;  var skutechgg=sku; new Image().src = "//tr.rdrtr.com/GL7Vm?adv_sub=" + skutechgg + "_t_gg&amount=" + pGT+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";}  else {pCT = pr; var skutechcadde=sku; new Image().src = "//tr.rdrtr.com/GL82m?adv_sub=" + skutechcadde + "_t_cadde&amount=" + pCT+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";} \nelse if (ceptel.indexOf(cat) >= 0) {pCep = pr; var skucpgg=sku; new Image().src = "//tr.rdrtr.com/GL7Vy?adv_sub=" + skucpgg + "_c_gg&amount=" + pCep+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";} \nelse if (subaltin.indexOf(al) >= 0) {pAlt = pr; var skualtgg=sku; new Image().src = "//tr.rdrtr.com/GL7Vs?adv_sub=" + skualtgg + "_g_gg&amount=" + pAlt+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";}\nelse \n if (isGG) {pGNonT = pr; var skuntgg=sku; new Image().src = "//tr.rdrtr.com/GL7Vg?adv_sub=" + skuntgg + "_nt_gg&amount=" + pGNonT+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";} else {pCNonT = pr; var skuntcadde=sku; new Image().src = "//tr.rdrtr.com/GL82s?adv_sub=" + skuntcadde + "_nt_cadde&amount=" + pCNonT+"&adv_sub3="+al+"&adv_sub5="+TRACKING_TRANSACTION_ID+"";}\n }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("go_sess_c"), "14489-197538-2357-0")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Result - Google Conversion",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<!-- Google Code for Web Sales Conversion Page -->\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 854267165;\nvar google_conversion_language = "en";\nvar google_conversion_format = "3";\nvar google_conversion_color = "ffffff";\nvar google_conversion_label = "lDTMCNa833AQnaqslwM";\nvar google_conversion_value = %TRACKING_PAID_PRICE%;\nvar google_conversion_currency = "TRY";\nvar google_remarketing_only = false;\n/* ]]> */\n</script>\n<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img height="1" width="1" style="border-style:none;" alt="" src="http://www.googleadservices.com/pagead/conversion/854267165/?value=%TRACKING_PAID_PRICE%&&amp;currency_code=TRY&amp;label=lDTMCNa833AQnaqslwM&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function(e, t) {
                return _satellite.readCookie("sc_gcsp") == sc_products.split(";")[5].split("|")[0].split("=")[1] || "gg" == _satellite.readCookie("sc_gcsp") ? !0 : !1
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Result - Google Remarketing",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\nvar google_tag_params = {\n_google_crm_id:'%TRACKING_SUID%',\necomm_prodid: _satellite.getVar('tracking_google_prodid') ,\n  pname: _satellite.getVar('tracking_google_pname'),\n  ecomm_pagetype: 'purchase',\n  ecomm_totalvalue: _satellite.getVar('tracking_google_totalvalue'),\n  pprice: _satellite.getVar('tracking_google_price'),\n  pcat: _satellite.getVar('tracking_google_cat'),\npbrand: '',\npdailydeal:'',\npccinfo: ['%TRACKING_CCINFO%']\n};\n</script>\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 854267165;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/854267165/?value=0&amp;guid=ON&amp;script=0\"/>\n</div>\n</noscript>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function(event, target) {
                var facebook_products = eval("({" + TRACKING_CHECKOUT_PRODUCTS_GOOGLE + "})")
                  , tracking_google_prodid = facebook_products.ecomm_prodid
                  , tracking_google_pname = facebook_products.pname
                  , tracking_google_totalvalue = facebook_products.ecomm_totalvalue
                  , tracking_google_price = facebook_products.pprice
                  , tracking_google_cat = facebook_products.pcat;
                return _satellite.setVar("tracking_google_prodid", tracking_google_prodid),
                _satellite.setVar("tracking_google_pname", tracking_google_pname),
                _satellite.setVar("tracking_google_totalvalue", tracking_google_totalvalue),
                _satellite.setVar("tracking_google_price", tracking_google_price),
                _satellite.setVar("tracking_google_cat", tracking_google_cat),
                !0
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Result - WEB",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar21: "%sc_eVar21%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.products = _satellite.getVar("sc_products");
                    var n = AFFILIATE_PRODUCTS.indexOf("cadde");
                    t = window.s,
                    n > 0 ? t.eVar45 = "Cadde" : t.eVar45 = "GG"
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Checkout - Result -Criteo",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript" src="http://static.criteo.net/js/ld/ld.js" async="true"></script>\n<script type="text/javascript">\n    try {\nvar criteo_productsList = JSON.parse(JSON.stringify( _satellite.getVar(\'TRACKING_CART_PRODUCTS_SOCIO\').replace(/currency: \'TRY\',/g,\'\').replace(/amount/g,\'price\').replace(/identifier/g,\'id\').replace(/\'/g,\'"\')));\nvar criteo_productsListArr= eval(\'[\' + criteo_productsList + \']\')\n\nwindow.criteo_q = window.criteo_q || [];\nwindow.criteo_q.push(\n{ event: "setAccount", account: 4305 },\n{ event: "setCustomerId", id: "%TRACKING_SUID%" }, { event: "manualDising" },\n{ event: "setSiteType", type: "d" },\n{ event: "trackTransaction" , id: "%TRACKING_TRANSACTION_ID%",item: \ncriteo_productsListArr\n}\n);\n  }\n  catch(e){\n  }\n</script>\n'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function(e, t) {
                var n = TRACKING_CART_PRODUCTS_SOCIO.replace(/currency: 'TRY',/g, "").replace(/amount/g, "price").replace(/identifier/g, "id");
                return _satellite.setVar("tracking_criteo", n),
                !0
            }
            ],
            event: "pagebottom"
        }, {
            name: "DCP Blog Pages",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    var n = _satellite.URI().split("/")
                      , a = "DCP Blog:" + n[2]
                      , r = "DCP Blog:" + n[1];
                    "" == n[1] ? t.prop4 = "DCP Blog" : "kategori" == n[1] ? t.prop4 = a : t.prop4 = r,
                    "1" == _satellite.getVar("sc_dcp_blog") && (t.prop56 = "DCP MobileApp Banner")
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "DCP Blog")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Facebook and Google Double Click - ProductPage",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '778920598804974');\nfbq('track', 'PageView', {\ngg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});\nfbq('track', 'ViewContent', {\n	content_ids: '%TRACKING_PRODUCT_ID%',\n	content_type: 'product',\n	content_name: '%TRACKING_PRODUCT_TITLE%',\n	value: %TRACKING_PRODUCT_PRICE%,\n  currency: 'TRY',\n	gg_content: 'product',\n	gg_seller: '%TRACKING_SELLER_NICK%',\n	gg_brand: '%TRACKING_PRODUCT_BRAND%',\n	gg_cat_code: ['%TRACKING_PRODUCT_CAT1%', '%TRACKING_PRODUCT_CAT2%', '%TRACKING_PRODUCT_CAT3%', '%TRACKING_PRODUCT_CAT4%'],\n	gg_cat: '%TRACKING_CAT_BREADCRUMB%',\n	gg_cat_id: ['%TRACKING_PRODUCT_CATALOG_ID%'],							\n	gg_type: ['%TRACKING_PRODUCT_TYPE%'],\n	gg_shipping_free: '',\n	gg_discount: '%TRACKING_GOOGLE_DISC_VAL%',\n  gg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});  \n  \n</script>\n"
                }, {
                    html: '<iframe src="https://8101375.fls.doubleclick.net/activityi;src=8101375;type=upper0;cat=produ0;u1=%TRACKING_PRODUCT_TITLE%;u2=%TRACKING_PRODUCT_ID%;u3=%TRACKING_PRODUCT_CAT1%;u4=%TRACKING_PRODUCT_CAT2%;u5=%TRACKING_PRODUCT_CAT3%;u6=%TRACKING_PRODUCT_PRICE%;u8=%TRACKING_PRODUCT_TYPE%;u9=%TRACKING_PRODUCT_BRAND%;u10=%TRACKING_SELLER_NICK%;u11=;u12=%TRACKING_LYLTYSGMNT%;u13=;u14=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=%tracking_gdb_randnum%?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function(e, t) {
                var n = TRACKINGPAGENAME.replace("Product Page:", "");
                _satellite.setVar("TRACKING_CAT_BREADCRUMB", n);
                var a = TRACKING_CATEGORY_CODE.substr(0, 1);
                _satellite.setVar("TRACKING_PRODUCT_CAT1", a);
                var r = TRACKING_CATEGORY_CODE.substr(0, 2);
                _satellite.setVar("TRACKING_PRODUCT_CAT2", r);
                var i = TRACKING_CATEGORY_CODE.substr(0, 3);
                _satellite.setVar("TRACKING_PRODUCT_CAT3", i);
                var o = TRACKING_CATEGORY_CODE.substr(0, 4);
                if (_satellite.setVar("TRACKING_PRODUCT_CAT4", o),
                "string" == typeof localStorage.bcrmsgmnt && "" != localStorage.bcrmsgmnt)
                    var s = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[29]
                      , c = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[3]
                      , l = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[17]
                      , g = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[13];
                else
                    var s = ""
                      , c = ""
                      , l = ""
                      , g = "";
                if (_satellite.setVar("TRACKING_LYLTYSGMNT", s),
                _satellite.setVar("TRACKING_RFM_PAY_SGMT", c),
                _satellite.setVar("TRACKING_FM_PUR_SGMT", l),
                _satellite.setVar("TRACKING_FIN_VAL_SGMT", g),
                TRACKING_STRIKE_PRICE < TRACKING_PRODUCT_PRICE)
                    var u = !0;
                else
                    var u = !1;
                if (_satellite.setVar("TRACKING_GOOGLE_DISC_VAL", u),
                document.getElementById("productCatalogId"))
                    var d = JSON.parse(document.getElementById("productCatalogId").getAttribute("value")).catalogID;
                else
                    var d = "";
                _satellite.setVar("TRACKING_PRODUCT_CATALOG_ID", d);
                var p = Math.random() + ""
                  , m = 1e18 * p;
                return _satellite.setVar("tracking_gdb_randnum", m),
                !0
            }
            ],
            event: "pagebottom"
        }, {
            name: "Facebook and Google DoubleClick - Checkout - Result",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<iframe src="https://8101375.fls.doubleclick.net/activityi;src=8101375;type=lower0;cat=purch0;qty=1;cost=%tracking_google_totalvalue%;u1=%tracking_gdb_pname%;u2=%tracking_gdb_prodid%;u5=%tracking_gdb_cat%;u6=%tracking_gdb_price%;u8=;u12=%TRACKING_LYLTYSGMNT%;u13=;u14=;u15=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=%TRACKING_TRANSACTION_ID%?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n<!-- End of DoubleClick Floodlight Tag: Please do not remove -->'
                }, {
                    html: "<script>\nvar  facebook_product_titles = eval(\"({\" + TRACKING_CHECKOUT_PRODUCTS_GOOGLE + '})').pname;  \nvar  facebook_productsList = _satellite.getVar('TRACKING_CART_PRODUCTS_SOCIO').replace(/currency: 'TRY',/g,'').replace(/amount/g,\"'item_price'\").replace(/identifier/g,\"'id'\").replace(/quantity/g,\"'quantity'\");\nvar  facebook_product_list =  eval('[' + facebook_productsList + ']');\nvar  facebook_product_cat_code = eval(\"({\" + TRACKING_CHECKOUT_PRODUCTS_GOOGLE + '})').pcat;\n  \n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '778920598804974');\nfbq('track', 'PageView', {\ngg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});\n  fbq('track','Purchase', {\n    contents: facebook_product_list,\n    content_type:'product',\n    content_name: facebook_product_titles,\n    value: %tracking_google_totalvalue%,\n    currency: 'TRY',\n    gg_cat_code: facebook_product_cat_code,\n    gg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function(event, target) {
                var facebook_products = eval("({" + TRACKING_CHECKOUT_PRODUCTS_GOOGLE + "})")
                  , tracking_google_prodid = facebook_products.ecomm_prodid
                  , tracking_gdb_prodid = facebook_products.ecomm_prodid.join("|")
                  , tracking_gdb_pname = facebook_products.pname.join("|")
                  , tracking_google_totalvalue = facebook_products.ecomm_totalvalue
                  , tracking_gdb_price = facebook_products.pprice.join("|")
                  , tracking_gdb_cat = facebook_products.pcat.join("|");
                if (_satellite.setVar("tracking_google_prodid", tracking_google_prodid),
                _satellite.setVar("tracking_gdb_prodid", tracking_gdb_prodid),
                _satellite.setVar("tracking_gdb_pname", tracking_gdb_pname),
                _satellite.setVar("tracking_google_totalvalue", tracking_google_totalvalue),
                _satellite.setVar("tracking_gdb_price", tracking_gdb_price),
                _satellite.setVar("tracking_gdb_cat", tracking_gdb_cat),
                "string" == typeof localStorage.bcrmsgmnt && "" != localStorage.bcrmsgmnt)
                    var TRACKING_LYLTYSGMNT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[29]
                      , TRACKING_RFM_PAY_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[3]
                      , TRACKING_FM_PUR_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[17]
                      , TRACKING_FIN_VAL_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[13];
                else
                    var TRACKING_LYLTYSGMNT = ""
                      , TRACKING_RFM_PAY_SGMT = ""
                      , TRACKING_FM_PUR_SGMT = ""
                      , TRACKING_FIN_VAL_SGMT = "";
                return _satellite.setVar("TRACKING_LYLTYSGMNT", TRACKING_LYLTYSGMNT),
                _satellite.setVar("TRACKING_RFM_PAY_SGMT", TRACKING_RFM_PAY_SGMT),
                _satellite.setVar("TRACKING_FM_PUR_SGMT", TRACKING_FM_PUR_SGMT),
                _satellite.setVar("TRACKING_FIN_VAL_SGMT", TRACKING_FIN_VAL_SGMT),
                !0
            }
            ],
            event: "pagebottom"
        }, {
            name: "Facebook and Google DoubleClick - ShoppingCart - Main",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\nvar  facebook_product_titles = eval(\"({\" + TRACKING_CART_PRODUCTS_GOOGLE + '})').pname;  \nvar  facebook_productsList = _satellite.getVar('TRACKING_CART_PRODUCTS_SOCIO').replace(/currency: 'TRY',/g,'').replace(/amount/g,\"'item_price'\").replace(/identifier/g,\"'id'\").replace(/quantity/g,\"'quantity'\");\nvar  facebook_product_list =  eval('[' + facebook_productsList + ']');\nvar  facebook_product_cat_code = eval(\"({\" + TRACKING_CART_PRODUCTS_GOOGLE + '})').pcat;\n  \n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '778920598804974');\nfbq('track', 'PageView', {\ngg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});\n  fbq('track','AddToCart', {\n    contents: facebook_product_list ,\n    content_type:'product',\n    content_name: facebook_product_titles,\n    value: %tracking_google_totalvalue%,\n    currency: 'TRY',\n    gg_cat_code: facebook_product_cat_code,\n    gg_crm: ['rfm_pay : %TRACKING_RFM_PAY_SGMT%', 'kk: %TRACKING_LYLTYSGMNT%', 'pur_fm: %TRACKING_FM_PUR_SGMT%', 'fin_val : %TRACKING_FIN_VAL_SGMT%']\n});\n</script>"
                }, {
                    html: '<iframe src="https://8101375.fls.doubleclick.net/activityi;src=8101375;type=midfu0;cat=shopp0;u1=%tracking_gdb_title%;u2=%tracking_gdb_prodid%;u5=%tracking_gdb_cat%;u6=%tracking_gdb_pprice%;u12=%TRACKING_LYLTYSGMNT%;u13=;u14=;u15=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=%tracking_gdb_randnum%?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function(event, target) {
                var tracking_google_prods = eval("({" + TRACKING_CART_PRODUCTS_GOOGLE + "})")
                  , tracking_facebook_prodid = tracking_google_prods.ecomm_prodid.join(",")
                  , tracking_facebook_title = tracking_google_prods.pname.join("','")
                  , tracking_google_totalvalue = tracking_google_prods.ecomm_totalvalue
                  , tracking_facebook_price = tracking_google_prods.pprice.join(",")
                  , tracking_facebook_cat = tracking_google_prods.pcat.join(",")
                  , tracking_gdb_prodid = tracking_google_prods.ecomm_prodid.join("|")
                  , tracking_gdb_pprice = tracking_google_prods.pprice.join("|")
                  , tracking_gdb_title = tracking_google_prods.pname.join("|")
                  , tracking_gdb_cat = tracking_google_prods.pcat.join("|");
                if (_satellite.setVar("tracking_facebook_prodid", tracking_facebook_prodid),
                _satellite.setVar("tracking_facebook_price", tracking_facebook_price),
                _satellite.setVar("tracking_facebook_cat", tracking_facebook_cat),
                _satellite.setVar("tracking_facebook_title", tracking_facebook_title),
                _satellite.setVar("tracking_gdb_prodid", tracking_gdb_prodid),
                _satellite.setVar("tracking_gdb_pprice", tracking_gdb_pprice),
                _satellite.setVar("tracking_gdb_title", tracking_gdb_title),
                _satellite.setVar("tracking_gdb_cat", tracking_gdb_cat),
                _satellite.setVar("tracking_google_totalvalue", tracking_google_totalvalue),
                "string" == typeof localStorage.bcrmsgmnt && "" != localStorage.bcrmsgmnt)
                    var TRACKING_LYLTYSGMNT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[29]
                      , TRACKING_RFM_PAY_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[3]
                      , TRACKING_FM_PUR_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[17]
                      , TRACKING_FIN_VAL_SGMT = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[13];
                else
                    var TRACKING_LYLTYSGMNT = ""
                      , TRACKING_RFM_PAY_SGMT = ""
                      , TRACKING_FM_PUR_SGMT = ""
                      , TRACKING_FIN_VAL_SGMT = "";
                _satellite.setVar("TRACKING_LYLTYSGMNT", TRACKING_LYLTYSGMNT),
                _satellite.setVar("TRACKING_RFM_PAY_SGMT", TRACKING_RFM_PAY_SGMT),
                _satellite.setVar("TRACKING_FM_PUR_SGMT", TRACKING_FM_PUR_SGMT),
                _satellite.setVar("TRACKING_FIN_VAL_SGMT", TRACKING_FIN_VAL_SGMT);
                var gdb_randnum_gen = Math.random() + ""
                  , gdb_randnum = 1e18 * gdb_randnum_gen;
                return _satellite.setVar("tracking_gdb_randnum", gdb_randnum),
                !0
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_CART_PRODUCTS_SOCIO"), /^(?=\s*\S).*$/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "GO - Cookie",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nvar cookieName = \'go_sess\';\nvar cookieValue = \'14489-197538-2357-0\';\nvar myDate = new Date();\nmyDate.setTime(myDate.getTime()+(24*60*60*1000));\nexpires = "; expires="+myDate.toGMTString();\ndocument.cookie = cookieName +"=" + cookieValue + ";expires=" + expires + "; path=/; domain=.gittigidiyor.com";\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("scxid"), "14489-197538-2357-0")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Google sc_gcsp Cookie",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nvar cookieName = \'sc_gcsp\';\nvar cookieValue = \'%sc_gcsp%\';\nvar myDate = new Date();\nmyDate.setTime(myDate.getTime()+(24*60*60*1000));\nexpires = "; expires="+myDate.toGMTString();\ndocument.cookie = cookieName +"=" + cookieValue + ";expires=" + expires + "; path=/; domain=.gittigidiyor.com";\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("scxid"), "14489-145818-2357-0")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\n        (function(){\n            var gr = document.createElement('script');\n            gr.type = 'text/javascript';\n            gr.async = !0;\n            gr.src = 'http://gg-ams.gravityrd-services.com/js/gg/gr_reco4-min.js';\n            var s = document.getElementsByTagName('script')[0];\n            s.parentNode.insertBefore(gr, s);\n        })();\n    </script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^(?!MyGG).*/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Category Page",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Category Page:Gravity",
                    prop55: "Category Page:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n\ntry{\nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'CATEGORY_PAGE\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\nvar sc_categoryList = JSON.parse(JSON.stringify(TRACKING_CATEGORY_CODE));\nvar sc_categoryListArr = eval("["+sc_categoryList+"]") ;\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n            scenarioId: \'CATEGORY_PAGE\',\n            numberLimit: 12,\n            categoryIds: sc_categoryListArr,\n            resultNames: ["price", \'url\', "imageUrl","title","specs","energy","shippingFee"],\n      			currentItemId: \'\',\n  					callback: function(result){\n                 recomGrCtrl.init(result);\n            }\n        });\n    }catch(e){\n        console.log(e);\n    }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Confirmation Page",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Confirmation Page:Gravity",
                    prop55: "Confirmation Page:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n\nvar sc_productsList=eval("({" + TRACKING_CHECKOUT_PRODUCTS_GOOGLE + \'})\');\nvar sc_productsList_prodid= sc_productsList.ecomm_prodid;  \n  \ntry{\nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'ORDER_SUCCESS\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\n\n\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n            scenarioId: \'CHECKOUT_PAGE\',\n            numberLimit: 12,\n            resultNames: ["price", \'url\', "imageUrl","title","specs","energy","shippingFee"],\n      			cartItemId: sc_productsList_prodid,\n            callback: function(result){\n                 recomGrCtrl.init(result);\n            }\n        });\n    }catch(e){\n        console.log(e);\n    }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Home Page",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Home Page:Gravity",
                    prop55: "Home Page:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n\ntry{\nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'HOME_PAGE\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\n\n\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n            scenarioId: \'MAIN_PAGE\',\n            numberLimit: 21,\n            resultNames: ["price", \'url\', "imageUrl","title","specs","energy","shippingFee"],\n      			currentItemId: \'\',\n            callback: function(result){\n                 recomGrCtrl.init(result);\n            }\n        });\n    }catch(e){\n        console.log(e);\n    }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Product Page",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Product Page:Gravity",
                    prop55: "Product Page:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\ntry{\nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'ITEM_PAGE\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n    scenarioId: \'ITEM_PAGE\',\n    numberLimit: 12,\n    resultNames: ["price", \'url\', "imageUrl","title","specs","energy","shippingFee"],\n    currentItemId:\'%TRACKING_PRODUCT_ID%\',\n    callback: function(result){\n        recomGrCtrl.init(result);\n    }\n});\n}catch(e){\n    console.log(e);\n}\n\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop11"), "Live")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPLATFORM"), "GG")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Product Page - Not Live",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Expired Product Page:Gravity",
                    prop55: "Expired Product Page:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry{\nvar recomGrConf = {\n    recomType : 'gr',\n    pageType : 'PASSIVE_ITEM_PAGE'\n};\n\nrecomGrCtrl = new ggRecommendationController(recomGrConf);\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: 'recommendation',\n    scenarioId: 'EXPIRED_PAGE',\n    numberLimit: 21,\n    resultNames: [\"price\", 'url', \"imageUrl\",\"title\",\"specs\",\"energy\",\"shippingFee\"],\n    currentItemId:'%TRACKING_PRODUCT_ID%',\n    title: '%TRACKING_PRODUCT_TITLE%',\n  	category: '%TRACKING_CATEGORY_CODE%',\n    callback: function(result){\n        recomGrCtrl.init(result);\n    }\n});\n}catch(e){\n    console.log(e);\n}\n\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop11"), "Not Live")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPLATFORM"), "GG")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - SC - View",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Shopping Cart:Gravity",
                    prop55: "Shopping Cart:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n\nvar sc_productsList=eval("({" + TRACKING_CART_PRODUCTS_GOOGLE + \'})\');\nvar sc_productsList_prodid= sc_productsList.ecomm_prodid;  \n  \ntry{\nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'BASKET\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\n\n\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n            scenarioId: \'CART_PAGE\',\n            numberLimit: 12,\n            resultNames: ["price", \'url\', "imageUrl", "title", "specs", "member", "shippingFee", "shippingDate", "shippingTime"],\n      			cartItemId: sc_productsList_prodid,\n            callback: function(result){\n                 recomGrCtrl.init(result);\n            }\n        });\n    }catch(e){\n        console.log(e);\n    }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("empty_basket"), "full")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Gravity - Search Not Found",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar68: "Search Not Found:Gravity",
                    prop55: "Search Not Found:Gravity"
                }]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script charset="utf-8" type="text/javascript">\nvar sc_eVar70 = "Gravity";\n  try{  \nvar recomGrConf = {\n    recomType : \'gr\',\n    pageType : \'SEARCH_RESULT_NOT_FOUND\'\n};\n\nvar recomGrCtrl = new ggRecommendationController(recomGrConf);\n\nvar _gravity = _gravity || []; _gravity.push({\n    type: \'recommendation\',\n    scenarioId: \'ZERO_RESULT_PAGE\',\n    numberLimit: 21,\n    searchString: \'%TRACKING_SEARCH_TERM%\',\n    resultNames: ["price", \'url\', "imageUrl","title","specs","energy","shippingFee"],\n    currentItemId: \'\',\n    callback: function(result){\n        recomGrCtrl.init(result);\n    }\n});\n}catch(e){\n    console.log(e);\n}\n\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^SRP/i)
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop2"), "no result")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Home Page",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar49: "%TRACKING_HOMEPAGE%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event28:1"]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\n\n    var _gaq = _gaq || [];\n    _gaq.push(['_setAccount', 'UA-313101-1']);\n    _gaq.push(['_setCampContentKey', 'ggap_c']);\n    _gaq.push(['_setCampMediumKey', 'ggap_m']);\n    _gaq.push(['_setCampNameKey', 'ggap_n']);\n    _gaq.push(['_setCampSourceKey', 'ggap_s']);\n    _gaq.push(['_setCampTermKey', 'ggap_t']);\n    _gaq.push(['_setDomainName', 'gittigidiyor.com']);\n    _gaq.push(['_trackPageview', '%TRACKINGPAGENAME%']);\n\n    (function() {\n        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Hotjar",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\n(function(h,o,t,j,a,r){\nh.hj=h.hj||function()\n{(h.hj.q=h.hj.q||[]).push(arguments)}\n;\nh._hjSettings=\n{hjid:240092,hjsv:5}\n;\na=o.getElementsByTagName('head')[0];\nr=o.createElement('script');r.async=1;\nr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\na.appendChild(r);\n})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_PRODUCT_ID"), /283393568/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Load GA",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }],
            conditions: [function(e, t) {
                if (gaJsHost)
                    var n = !0;
                else
                    var n = !1;
                return n
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Cadde:All Brands",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-cadde-all-brands-ajax',\n        params: {\n            'module': 'cddbrands',\n            'contentName': TRACKINGCONTENTNAME,\n        }\n    };\n\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:All Brands")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Cadde:Brand",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-cadde-brand-ajax',\n        params: {\n            'module': 'cddbrand',\n            'storeSlug' : TRACKING_BRAND,\n            'contentName': TRACKINGCONTENTNAME,\n        }\n    };\n\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Cadde:Brand")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_PAGETYPE"), "home")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Cadde:Brand:Search",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry { var lj_tracking_category_code = typeof(TRACKING_CATEGORY_CODE) != 'undefined' ? TRACKING_CATEGORY_CODE : ''; \n     var lj_tracking_result_num = typeof(TRACKING_SEARCH_RESULT_NUM) != 'undefined' ? TRACKING_SEARCH_RESULT_NUM : ''; \n     var lj_tracking_search_term_list = typeof(TRACKING_SEARCHITEM_LIST) != 'undefined' ? TRACKING_SEARCHITEM_LIST : ''; \n     var lj_product_ids = $GG('.productArea').map(function() { return $GG(this).find('a').eq(0).attr('href').split('-').pop(-1) }).get(); \n     var lumberjackConfig = { url: '/xhr/run-lumberjack-for-cadde-search-b-ajax', \n                             params: { 'contentName': TRACKINGCONTENTNAME, \n                                      'module': 'cddsearchb', \n                                      'catCode': lj_tracking_category_code, \n                                      'totFound': lj_tracking_result_num, \n                                      'ids': lj_tracking_search_term_list, \n                                      'ids': lj_product_ids, \n                                      'referer': document.referrer } }; \n     if (location.search) \n     { var parts = location.search.substring(1).split('&'); \n      for (var i = 0; i < parts.length; i++) \n      { var nv = parts[i].split('='); \n       if (!nv[0]) continue; lumberjackConfig.params[nv[0]] = nv[1] || true; } } \n     var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig); lumberjackCtrl.send(); } \n  catch (e) { console.info('lj error =' + e) }\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Cadde:Brand")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_PAGETYPE"), "search")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Cadde:Main Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-cadde-main-ajax',\n        params: {\n            'module': 'cddmain',\n            'contentName': TRACKINGCONTENTNAME,\n        }\n    };\n\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Cadde:Search",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry { var lj_tracking_category_code = typeof(TRACKING_CATEGORY_CODE) != 'undefined' ? TRACKING_CATEGORY_CODE : ''; \n     var lj_tracking_result_num = typeof(TRACKING_SEARCH_RESULT_NUM) != 'undefined' ? TRACKING_SEARCH_RESULT_NUM : ''; \n     var lj_tracking_search_term_list = typeof(TRACKING_SEARCHITEM_LIST) != 'undefined' ? TRACKING_SEARCHITEM_LIST : ''; \n     var lj_product_ids = $GG('.productArea').map(function() { return $GG(this).find('a').eq(0).attr('href').split('-').pop(-1) }).get(); \n     var lumberjackConfig = { url: '/xhr/run-lumberjack-for-cadde-search-ajax', \n                             params: { 'contentName': TRACKINGCONTENTNAME, \n                                      'module': 'cddsearch', \n                                      'catCode': lj_tracking_category_code, \n                                      'totFound': lj_tracking_result_num, \n                                      'ids': lj_tracking_search_term_list, \n                                      'ids': lj_product_ids, \n                                      'referer': document.referrer } }; \n     if (location.search) \n     { var parts = location.search.substring(1).split('&'); \n      for (var i = 0; i < parts.length; i++) \n      { var nv = parts[i].split('='); \n       if (!nv[0]) continue; lumberjackConfig.params[nv[0]] = nv[1] || true; } } \n     var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig); lumberjackCtrl.send(); } \n  catch (e) { console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            scope: {
                URI: {
                    include: ["cadde/arama/"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Lumberjack - Catalog Browse",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n  \n  	var _lj_categoryCode = TRACKING_CATEGORY_CODE; \n  	var _lj_catalog_group_ids = '';\n		var _lj_specs = TRACKING_SPEC_VALUE;\n	\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-catalog-browse-ajax',\n        params: {\n            'contentName': TRACKINGCONTENTNAME,\n            'categoryCode' : _lj_categoryCode,\n						'Spec' : _lj_specs,\n            'referer': document.referrer\n        }\n    };\n  \n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /SRP:Catalog Browse/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Catalog Listing",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var _lj_categoryCode = TRACKING_CATEGORY_CODE; \n    var _lj_catalog_group_id = '';\n	var _lj_catalog_group_slug = '';\n\n	if(document.getElementById('cgid')){\n        _lj_catalog_group_id = document.getElementById('cgid').value;\n    }\n\n	if(document.getElementById('cgslug')){\n        _lj_catalog_group_slug = document.getElementById('cgslug').value;\n    }\n\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-catalog-listing-ajax',\n        params: {\n            'catalogGroupId': _lj_catalog_group_id,\n			'catalogGroupSlug' : _lj_catalog_group_slug,\n            'contentName': TRACKINGCONTENTNAME,\n            'categoryCode' : _lj_categoryCode,\n            'referer': document.referrer\n        }\n    };\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /SRP:Catalog Listing/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Home Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: ""
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Product Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var _lj_product_catalog_id = '';\n    var _lj_product_catalog_group_id = '';\n\n    if(document.getElementById('product-catalog-id')){\n        _lj_product_catalog_id = document.getElementById('product-catalog-id').value;\n    }\n    if(document.getElementById('catalog-group-id')){\n        _lj_product_catalog_group_id = document.getElementById('catalog-group-id').value;\n    }\n\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-product-ajax',\n        params: {\n            'module': 'item',\n            'title': TRACKING_PRODUCT_TITLE,\n            'type': TRACKING_PRODUCT_TYPE.toLowerCase(),\n            'cat': TRACKING_CATEGORY_CODE,\n            'id': TRACKING_PRODUCT_ID,\n            'contentName': TRACKINGCONTENTNAME,\n            'catalogId': _lj_product_catalog_id,\n            'catalogGroupId': _lj_product_catalog_group_id,\n            'referer': document.referrer,\n            'sellerId': TRACKING_SELLER_ID,\n            'brandName': TRACKING_PRODUCT_BRAND,\n            'price': TRACKING_PRODUCT_PRICE,\n            'strikePrice': TRACKING_STRIKE_PRICE\n        }\n    };\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Lumberjack - Search",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\ntry {\n    var lj_tracking_category_code = typeof(TRACKING_CATEGORY_CODE) != 'undefined' ? TRACKING_CATEGORY_CODE : '';\n    var lj_tracking_result_num = typeof(TRACKING_SEARCH_RESULT_NUM) != 'undefined' ? TRACKING_SEARCH_RESULT_NUM : '';\n    var lj_tracking_search_term_list = typeof(TRACKING_SEARCHITEM_LIST) != 'undefined' ? TRACKING_SEARCHITEM_LIST : '';\n    var lj_fuzzy_search = document.getElementById('lj-fuzzy-search').value;\n    var lj_product_ids = $GG('.cell-border-css').map(function() { return this.id.split('-')[3]; }).get();\n\n\n	if(document.getElementById('lj-fuzzy-search')){\n		lj_fuzzy_search = document.getElementById('lj-fuzzy-search').value;\n	}\n\n    var lumberjackConfig = {\n        url: '/xhr/run-lumberjack-for-search-ajax',\n        params: {\n            'module': 'search',\n            'ktgr': lj_tracking_category_code,\n            'totFound': lj_tracking_result_num,\n            'ids': lj_tracking_search_term_list,\n            'fuzzy': lj_fuzzy_search,\n            'contentName': TRACKINGCONTENTNAME,\n            'ids': lj_product_ids,\n            'referer': document.referrer\n\n        }\n    };\n\n    if (location.search) {\n   		var parts = location.search.substring(1).split('&');\n    	for (var i = 0; i < parts.length; i++) {\n     	  var nv = parts[i].split('=');\n      	 if (!nv[0]) continue;\n      	 lumberjackConfig.params[nv[0]] = nv[1] || true;\n    	}\n	}\n\n\n    var lumberjackCtrl = new _ggLumberjackController(lumberjackConfig);\n    lumberjackCtrl.send();\n\n} catch (e) {\n    console.info('lj error =' + e)\n}\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /SRP:Search|SRP:Browse/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Main Categories",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar3: "Main Categories",
                    eVar4: "D=c3",
                    eVar5: "D=c4"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Mobile - All Pages",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar74: "320px",
                    prop35: "320px",
                    pageName: "%sc_pageName%",
                    channel: "%sc_channel%"
                }]
            }],
            scope: {
                subdomains: {
                    include: [/^m.gittigidiyor.com/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "ProductPage - Criteo",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript" src="http://static.criteo.net/js/ld/ld.js" async="true"></script>\n<script type="text/javascript">\nwindow.criteo_q = window.criteo_q || [];\nwindow.criteo_q.push(\n{ event: "setAccount", account: 4305 },\n{ event: "setCustomerId", id: "%TRACKING_SUID%" },\n{ event: "setSiteType", type: "d" },\n{ event: "viewItem", item: "%TRACKING_PRODUCT_ID%" }\n);\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "ProductPage - Google Remarketing",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nvar google_tag_params = {\n_google_crm_id:\'%TRACKING_SUID%\',\necomm_prodid: \'%TRACKING_PRODUCT_ID%\',\npname:\'%TRACKING_PRODUCT_TITLE%\',\necomm_pagetype: \'product\',\necomm_totalvalue: %TRACKING_PRODUCT_PRICE%,\npprice: %TRACKING_PRODUCT_PRICE%,\npcat:\'%TRACKING_CATEGORY_CODE%\',\npbrand: \'%TRACKING_PRODUCT_BRAND%\',\npdailydeal:\'%TRACKING_PRODUCT_TYPE%\',\npccinfo: [\' \'],\nkk: \'%TRACKING_LYLTYSGMNT%\'  \n};\n</script>\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 1052107253;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/1052107253/?value=0&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>'
                }, {
                    html: '<script type="text/javascript">\nvar google_tag_params = {\n_google_crm_id:\'%TRACKING_SUID%\',\necomm_prodid: \'%TRACKING_PRODUCT_ID%\',\npname:\'%TRACKING_PRODUCT_TITLE%\',\necomm_pagetype: \'product\',\necomm_totalvalue: %TRACKING_PRODUCT_PRICE%,\npprice: %TRACKING_PRODUCT_PRICE%,\npcat:\'%TRACKING_CATEGORY_CODE%\',\npbrand: \'%TRACKING_PRODUCT_BRAND%\',\npdailydeal:\'%TRACKING_PRODUCT_TYPE%\',\npccinfo: [\' \'],\nkk: \'%TRACKING_LYLTYSGMNT%\'  \n};\n</script>\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 854267165;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/854267165/?value=0&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function(e, t) {
                if ("string" == typeof localStorage.bcrmsgmnt && "" != localStorage.bcrmsgmnt)
                    var n = JSON.parse(localStorage.getItem("bcrmsgmnt")).data[29];
                else
                    var n = "";
                return _satellite.setVar("TRACKING_LYLTYSGMNT", n),
                !0
            }
            ],
            event: "pagebottom"
        }, {
            name: "ProductPage - WEB",
            trigger: [{
                engine: "ga",
                command: "cancelToolInit"
            }, {
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar76: "%sc_chtbx%",
                    prop64: "%TRACKING_SELLER_NICK%"
                }]
            }, {
                engine: "sc",
                command: "addEvent",
                arguments: ["event3:1"]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    document.getElementById("productCatalogId") && (t = window.s,
                    t.prop20 = JSON.parse(document.getElementById("productCatalogId").getAttribute("value")).catalogID)
                }
                ]
            }, {
                command: "writeHTML",
                arguments: [{
                    html: "<script type=\"text/javascript\">\n\n    var _gaq = _gaq || [];\n    _gaq.push(['_setAccount', 'UA-313101-1']);\n    _gaq.push(['_setCampContentKey', 'ggap_c']);\n    _gaq.push(['_setCampMediumKey', 'ggap_m']);\n    _gaq.push(['_setCampNameKey', 'ggap_n']);\n    _gaq.push(['_setCampSourceKey', 'ggap_s']);\n    _gaq.push(['_setCampTermKey', 'ggap_t']);\n    _gaq.push(['_setDomainName', 'gittigidiyor.com']);\n    _gaq.push(['_trackPageview', '%sc_pageName%']);\n    _gaq.push(['_trackEvent', 'Product Page', '%TRACKING_DEVICE_TYPE%', '', , true]);\n     (function() {\n        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop9"), "Product Page")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Recommendation Not Live Product Page Track",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop60: "Gravity:%rcp_action%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getQueryParam("rcp_action"), /^rc/i)
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop11"), "Not Live")
            }
            ],
            event: "pagebottom"
        }, {
            name: "SRP Search - Sol Kule Banner",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop17: "SRP:Search:Left Banner:%search_keyword%:%TRACKING_PRODUCT_ID%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getQueryParam("sc_srplftbnnr"), /^1/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Search Pages - Web",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar3: "SRP:Search",
                    eVar4: "D=c3",
                    eVar5: "D=c4",
                    eVar78: "%Dominant_Main_Cat%:%Dominant_Category%",
                    eVar79: "%Dominant_Main_Cat%:%Dominant_Category%:%TRACKING_SEARCH_TERM%",
                    prop74: "%Dominant_Main_Cat%:%Dominant_Category%",
                    prop75: "%Dominant_Main_Cat%:%Dominant_Category%:%TRACKING_SEARCH_TERM%",
                    pageName: "%sc_pageName%",
                    channel: "%sc_channel%"
                }]
            }, {
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t = window.s,
                    "yok" == _satellite.getVar("Fuzzy_Search") ? t.prop47 = "Fuzzy Yok" : t.prop47 = "Fuzzy Var",
                    (t.prop51 = "" != _satellite.getVar("dym_term")) && (t.prop51 = _satellite.getVar("dym_term") + "|" + _satellite.getVar("TRACKING_SEARCH_TERM"))
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("sc_channel"), "SRP:Search")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Search-Listing Pages-WEB",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop61: "%TRACKINGCONTENTNAME%:%search_page_num%",
                    prop66: "%TRACKING_KRG_PARAM%",
                    prop67: "%TRACKING_UC_PARAM%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^SRP:/i);
            }
            ],
            event: "pagebottom"
        }, {
            name: "Shopping Cart Address",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar21: "%sc_eVar21%",
                    prop3: "Shopping Cart",
                    prop4: "Shopping Cart:Address",
                    prop5: "D=c4",
                    prop6: "D=c4",
                    prop7: "D=c4",
                    prop8: "D=c4",
                    prop9: "D=c3"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Address")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Shopping Cart Main",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop3: "Shopping Cart",
                    prop4: "Shopping Cart:Main",
                    prop5: "D=c4",
                    prop57: "%empty_basket%",
                    prop6: "D=c4",
                    prop7: "D=c4",
                    prop8: "D=c4",
                    prop9: "D=c3"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            ],
            event: "pagebottom"
        }, {
            name: "ShoppingCart - Google Remarketing",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nvar google_tag_params = {\n_google_crm_id:\'%TRACKING_SUID%\',\necomm_prodid : _satellite.getVar(\'tracking_google_prodid\'),\npname : _satellite.getVar(\'tracking_google_pname\'),\necomm_pagetype : \'cart\',\necomm_totalvalue : _satellite.getVar(\'tracking_google_totalvalue\'),\npprice : _satellite.getVar(\'tracking_google_price\'),\npcat : _satellite.getVar(\'tracking_google_cat\'),\npbrand: \'\',\npdailydeal:\'\',\npccinfo: [\' \']\n};\n</script>\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 1052107253;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img class="hidden" height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/1052107253/?value=0&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>'
                }, {
                    html: '<script type="text/javascript">\nvar google_tag_params = {\n_google_crm_id:\'%TRACKING_SUID%\',\necomm_prodid : _satellite.getVar(\'tracking_google_prodid\'),\npname : _satellite.getVar(\'tracking_google_pname\'),\necomm_pagetype : \'cart\',\necomm_totalvalue : _satellite.getVar(\'tracking_google_totalvalue\'),\npprice : _satellite.getVar(\'tracking_google_price\'),\npcat : _satellite.getVar(\'tracking_google_cat\'),\npbrand: \'\',\npdailydeal:\'\',\npccinfo: [\' \']\n};\n</script>\n<script type="text/javascript">\n/* <![CDATA[ */\nvar google_conversion_id = 854267165;\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">\n</script>\n<noscript>\n<div style="display:inline;">\n<img class="hidden" height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/854267165/?value=0&amp;guid=ON&amp;script=0"/>\n</div>\n</noscript>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function(event, target) {
                var tracking_google_prods = eval("({" + TRACKING_CART_PRODUCTS_GOOGLE + "})")
                  , tracking_google_prodid = tracking_google_prods.ecomm_prodid
                  , tracking_facebook_prodid = tracking_google_prods.ecomm_prodid[0]
                  , tracking_google_pname = tracking_google_prods.pname
                  , tracking_google_totalvalue = tracking_google_prods.ecomm_totalvalue
                  , tracking_google_price = tracking_google_prods.pprice
                  , tracking_facebook_price = tracking_google_prods.pprice[0]
                  , tracking_google_cat = tracking_google_prods.pcat
                  , tracking_facebook_cat = tracking_google_prods.pcat[0];
                return _satellite.setVar("tracking_google_prodid", tracking_google_prodid),
                _satellite.setVar("tracking_google_pname", tracking_google_pname),
                _satellite.setVar("tracking_google_totalvalue", tracking_google_totalvalue),
                _satellite.setVar("tracking_google_price", tracking_google_price),
                _satellite.setVar("tracking_google_cat", tracking_google_cat),
                !0
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_CART_PRODUCTS_SOCIO"), /^(?=\s*\S).*$/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "ShoppingCart - Main - Criteo",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript" src="http://static.criteo.net/js/ld/ld.js" async="true"></script>\n<script type="text/javascript">\n  try {\nvar criteo_productsList = JSON.parse(JSON.stringify( _satellite.getVar(\'TRACKING_CART_PRODUCTS_SOCIO\').replace(/currency: \'TRY\',/g,\'\').replace(/amount/g,\'price\').replace(/identifier/g,\'id\').replace(/\'/g,\'"\')));\nvar criteo_productsListArr= eval(\'[\' + criteo_productsList + \']\')\n\nwindow.criteo_q = window.criteo_q || [];\nwindow.criteo_q.push(\n{ event: "setAccount", account: 4305 },\n{ event: "setCustomerId", id: "%TRACKING_SUID%" }, { event: "manualDising" },\n{ event: "setSiteType", type: "d" },\n{ event: "viewBasket", item: \n  	criteo_productsListArr\n}\n);\n  }\n  catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function(e, t) {
                var n = TRACKING_CART_PRODUCTS_SOCIO.replace(/currency: 'TRY',/g, "").replace(/amount/g, "price").replace(/identifier/g, "id").replace(/'/g, '"');
                return _satellite.setVar("tracking_criteo", n),
                !0
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_CART_PRODUCTS_SOCIO"), /^(?=\s*\S).*$/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Category Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {\nfunction OnVisilabsLoaded(){\n    		var VL = new Visilabs();\n    		VL.AddParameter("OM.clist",TRACKING_CATEGORY_CODE);\n  			if(sc_prop35=="320px" || sc_prop35=="768px"){\n        VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n    		VL.Collect();\n    		VL.SuggestActions();\n   		}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "SRP:Browse")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Confirmation Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {\n    function OnVisilabsLoaded(){\n var VL = new Visilabs();             \n VL.AddParameter("OM.pp",TRACKING_CART_ITEM_ID);\n VL.AddParameter("OM.ppr",TRACKING_CART_ITEM_PRICE);\n VL.AddParameter("OM.pu" ,TRACKING_CART_ITEM_QUANTITY);\n VL.AddParameter("OMGG.vid",TRACKING_RETAIL_VARIANTID);\n VL.AddParameter("OMGG.sn",TRACKING_SELLER_NICK);\n VL.AddParameter("OM.exVisitorID",TRACKING_SUID);\n VL.AddParameter("OM.tid",TRACKING_TRANSACTION_ID);\n if(sc_prop35=="320px" || sc_prop35=="768px"){\n VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n VL.Collect();\n VL.SuggestActions();\n}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Login Success",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {	\n  function OnVisilabsLoaded(){\n  		var VL = new Visilabs();  \n  		VL.AddParameter("OM.exVisitorID",TRACKING_SUID);\n  		VL.AddParameter("Login",TRACKING_SUID);\n    	if(sc_prop35=="320px" || sc_prop35=="768px"){\n      VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n  		VL.AddParameter("EventType","Login");\n  		VL.Collect();\n  		VL.SuggestActions();\n 		}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Login:Login Success")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Other Pages",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try{\n 		function OnVisilabsLoaded(){\n    		var VL = new Visilabs();\n      if(sc_prop35=="320px" || sc_prop35=="768px"){\n        VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n    		VL.Collect();\n    		VL.SuggestActions();\n   		}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), /^(?!.*(Shopping Cart:Main|Product Page|SRP|Login:Login Success|Checkout:Result|Register:Success)).*$/i)
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Register Success",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {	\n  function OnVisilabsLoaded(){\n  		var VL = new Visilabs();  \n  		VL.AddParameter("OM.exVisitorID",TRACKING_SUID);\n  		VL.AddParameter("Signup",TRACKING_SUID);\n    	if(sc_prop35=="320px" || sc_prop35=="768px"){\n      VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n  		VL.AddParameter("EventType","Signup");\n  		VL.Collect();\n  		VL.SuggestActions();\n 		}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Register:Success")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - EuroMessage - Search Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {\n  function OnVisilabsLoaded(){\nvar VL = new Visilabs();\nVL.AddParameter("OM.OSS",TRACKING_SEARCH_TERM);\nif(sc_prop35=="320px" || sc_prop35=="768px"){\nVL.AddParameter("OM.vchannel", "Mobile Site");}else{}\nVL.Collect();\nVL.SuggestActions();\n}\n  }catch(e){\n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "SRP:Search")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - Euromessage - All Pages",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\nvar l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs.js?sid=6569354F446943666547593D&oid=594B6E3073453333586C593D";\nvar s = document.createElement("script");\nif(location.href.toString().indexOf("vldebug=true") > 0){l = (location.protocol.indexOf("https")==0?"https":"http") + "://vsh.visilabs.net/Visilabs_Debug.js?sid=6569354F446943666547593D&oid=594B6E3073453333586C593D";}\ns.onload = function(){try{OnVisilabsLoaded();}catch(Ex){}};\ns.type = "text/javascript";\ns.src = l;\ndocument.getElementsByTagName("head")[0].appendChild(s);\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Visilabs - Euromessage - Product Page",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: '<script type="text/javascript">\n  try {\n    if(sc_prop11=="Live") {om_stock_status="1";} else {om_stock_status="0";}\n  function OnVisilabsLoaded(){\nvar VL = new Visilabs();             \n 	VL.AddParameter("OM.pv",TRACKING_PRODUCT_ID);\n 	VL.AddParameter("OM.pn",TRACKING_PRODUCT_TITLE);\n  VL.AddParameter("OM.cat",TRACKING_CATEGORY_CODE);\n  VL.AddParameter("OM.catn",TRACKINGPAGENAME.replace(\'Product Page:\',\'\').replace(\':\',\'|\'));\n  VL.AddParameter("OM.ppr", TRACKING_PRODUCT_PRICE);\n  VL.AddParameter("OM.pv.1", TRACKING_PRODUCT_BRAND);\n  VL.AddParameter("OM.inv",om_stock_status);\n  if(sc_prop35=="320px" || sc_prop35=="768px"){\n  VL.AddParameter("OM.vchannel", "Mobile Site");}else{}\n  VL.Collect();\n  VL.SuggestActions();\n}\n  }catch(e) { \n  }\n</script>'
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            event: "pagebottom"
        }, {
            name: "Webinstats - Page Based",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\n window.execute_wiso = function(buyerCRMSegment) {\n	window.wiso = window.wiso || [];\n	window.wiso.push(\n		{s:'45c4-9'},\n        {_cburl:'//gittigidiyor.webinstats.com/'},\n		{ps:':'},\n		{p:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n        {_pushu:'https://www.gittigidiyor.com/notifier-update.html'},\n		{p2:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n		{ggcn:(typeof TRACKINGCONTENTNAME === 'string')?TRACKINGCONTENTNAME:'Other'},\n		{ggplt:(typeof TRACKINGPLATFORM === 'string')?TRACKINGPLATFORM:'GG'},\n		{ggcatc:(typeof TRACKING_CATEGORY_CODE === 'string')?TRACKING_CATEGORY_CODE:''},\n		{pid:(typeof TRACKING_PRODUCT_ID === 'string')?TRACKING_PRODUCT_ID:''},\n		{trid:(typeof TRACKING_TRANSACTION_ID === 'string')?TRACKING_TRANSACTION_ID:''},\n		{purl:(typeof TRACKING_PRODUCT_URL === 'string')?TRACKING_PRODUCT_URL:''},\n		{pimg:(typeof TRACKING_PRODUCT_IMG_URL === 'string')?TRACKING_PRODUCT_IMG_URL:''},\n		{pprc:(typeof TRACKING_PRODUCT_PRICE === 'string')?TRACKING_PRODUCT_PRICE:''},\n		{poprc:(typeof TRACKING_STRIKE_PRICE === 'string')?TRACKING_STRIKE_PRICE:''},\n		{pttl:(typeof TRACKING_PRODUCT_TITLE === 'string')?TRACKING_PRODUCT_TITLE:''},\n		{pbrn:(typeof TRACKING_PRODUCT_BRAND === 'string')?TRACKING_PRODUCT_BRAND:''},\n		{ptyp:(typeof TRACKING_PRODUCT_TYPE === 'string')?TRACKING_PRODUCT_TYPE:''},\n		{ggkw:(typeof TRACKING_CATEGORY_SOCIO === 'string')?TRACKING_CATEGORY_SOCIO:''},\n		{ggresn:(typeof TRACKING_SEARCH_RESULT_NUM === 'string')?TRACKING_SEARCH_RESULT_NUM:''},	\n		{ggswrd:(typeof TRACKING_SEARCH_TERM === 'string')?TRACKING_SEARCH_TERM:''},\n		{cucode:(typeof _currentUsername === 'string')?_currentUsername:''},\n		{ggscp:(typeof TRACKING_CART_PRODUCTS_ZNX === 'string')?TRACKING_CART_PRODUCTS_ZNX:''},\n		{am:(typeof TRACKING_PAID_PRICE === 'string')?TRACKING_PAID_PRICE:'0'},\n		{_runc:function(o){ var s=s_gi('ebaytkprod'),c=o.cn+':'+o.n;s.linkTrackVars='prop65,eVar64,events';s.linkTrackEvents='event30';s.prop65=c;s.eVar64=c;s.events='event30';s.tl(this,'o',c);}},\n		{cuid:(typeof TRACKING_SUID === 'string' && !isNaN(TRACKING_SUID))?TRACKING_SUID:''},\n		{ggnl:(typeof TRACKING_SUID_RECOG === 'string' && TRACKING_SUID_RECOG=='TRUE')?'1':'0'},\n{_bexecute:function() {wiso.gmvh.push('www.gittigidiyor.com','gittigidiyor.com','urun.gittigidiyor.com');wiso.ba='';wiso.ps=':';if(wiso.p2.indexOf('Product Page') == 0){wiso.p='Product Page';}else if(wiso.p2.indexOf('SRP:Search') == 0){wiso.p='SRP:Search';} else if(wiso.p2.indexOf('SRP:Browse') == 0){wiso.p='SRP:Browse';} else {wiso.p=wiso.p2;} if (typeof buyerCRMSegment == 'object'){for (var k in buyerCRMSegment) {if (k=='TRACKING_SUID'){if(buyerCRMSegment[k] != '' && !isNaN(buyerCRMSegment[k])){wiso.cuid=buyerCRMSegment[k];}} else if (k=='TRACKING_USERNAME'){ wiso.cucode=buyerCRMSegment[k];} else if (k=='TRACKING_SUID_RECOG'){if(buyerCRMSegment[k]=='TRUE'){wiso.ggnl=1;}else{wiso.ggnl=0;}} else {wiso['ggseg'+k] = buyerCRMSegment[k];}}}  if (typeof wiso.ggscxid != 'undefined' && wiso.ggscxid != ''){wiso._sc('ggscxid',wiso.ggscxid,1440);} else {wiso.ggscxid=wiso._gc('ggscxid');}}},\n		{_apv:{scxid:'ggscxid',mpch:'ggmpch'}}\n	);\n	(function() { \n	var _wis = document.createElement('script');_wis.type = 'text/javascript';_wis.async = true; _wis.src='http://dbfukofby5ycr.cloudfront.net/a9/js/dlc1.43.js';\n	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(_wis, s);\n	})();\n};\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), /Register:Success|Login:Login Success|MyGG:Info&Settings/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Webinstats - Section Based",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\n window.execute_wiso = function(buyerCRMSegment) {\n	window.wiso = window.wiso || [];\n	window.wiso.push(\n		{s:'45c4-9'},\n        {_cburl:'//gittigidiyor.webinstats.com/'},\n		{ps:':'},\n		{p:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n        {_pushu:'https://www.gittigidiyor.com/notifier-update.html'},\n		{p2:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n		{ggcn:(typeof TRACKINGCONTENTNAME === 'string')?TRACKINGCONTENTNAME:'Other'},\n		{ggplt:(typeof TRACKINGPLATFORM === 'string')?TRACKINGPLATFORM:'GG'},\n		{ggcatc:(typeof TRACKING_CATEGORY_CODE === 'string')?TRACKING_CATEGORY_CODE:''},\n		{pid:(typeof TRACKING_PRODUCT_ID === 'string')?TRACKING_PRODUCT_ID:''},\n		{trid:(typeof TRACKING_TRANSACTION_ID === 'string')?TRACKING_TRANSACTION_ID:''},\n		{purl:(typeof TRACKING_PRODUCT_URL === 'string')?TRACKING_PRODUCT_URL:''},\n		{pimg:(typeof TRACKING_PRODUCT_IMG_URL === 'string')?TRACKING_PRODUCT_IMG_URL:''},\n		{pprc:(typeof TRACKING_PRODUCT_PRICE === 'string')?TRACKING_PRODUCT_PRICE:''},\n		{poprc:(typeof TRACKING_STRIKE_PRICE === 'string')?TRACKING_STRIKE_PRICE:''},\n		{pttl:(typeof TRACKING_PRODUCT_TITLE === 'string')?TRACKING_PRODUCT_TITLE:''},\n		{pbrn:(typeof TRACKING_PRODUCT_BRAND === 'string')?TRACKING_PRODUCT_BRAND:''},\n		{ptyp:(typeof TRACKING_PRODUCT_TYPE === 'string')?TRACKING_PRODUCT_TYPE:''},\n		{ggkw:(typeof TRACKING_CATEGORY_SOCIO === 'string')?TRACKING_CATEGORY_SOCIO:''},\n		{ggresn:(typeof TRACKING_SEARCH_RESULT_NUM === 'string')?TRACKING_SEARCH_RESULT_NUM:''},	\n		{ggswrd:(typeof TRACKING_SEARCH_TERM === 'string')?TRACKING_SEARCH_TERM:''},\n		{cucode:(typeof _currentUsername === 'string')?_currentUsername:''},\n		{ggscp:(typeof TRACKING_CART_PRODUCTS_ZNX === 'string')?TRACKING_CART_PRODUCTS_ZNX:''},\n		{am:(typeof TRACKING_PAID_PRICE === 'string')?TRACKING_PAID_PRICE:'0'},\n		{_runc:function(o){ var s=s_gi('ebaytkprod'),c=o.cn+':'+o.n;s.linkTrackVars='prop65,eVar64,events';s.linkTrackEvents='event30';s.prop65=c;s.eVar64=c;s.events='event30';s.tl(this,'o',c);}},\n		{cuid:(typeof TRACKING_SUID === 'string' && !isNaN(TRACKING_SUID))?TRACKING_SUID:''},\n		{ggnl:(typeof TRACKING_SUID_RECOG === 'string' && TRACKING_SUID_RECOG=='TRUE')?'1':'0'},\n{_bexecute:function() {wiso.gmvh.push('www.gittigidiyor.com','gittigidiyor.com','urun.gittigidiyor.com');wiso.ba='';wiso.ps=':';if(wiso.p2.indexOf('Product Page') == 0){wiso.p='Product Page';}else if(wiso.p2.indexOf('SRP:Search') == 0){wiso.p='SRP:Search';} else if(wiso.p2.indexOf('SRP:Browse') == 0){wiso.p='SRP:Browse';} else {wiso.p=wiso.p2;} if (typeof buyerCRMSegment == 'object'){for (var k in buyerCRMSegment) {if (k=='TRACKING_SUID'){if(buyerCRMSegment[k] != '' && !isNaN(buyerCRMSegment[k])){wiso.cuid=buyerCRMSegment[k];}} else if (k=='TRACKING_USERNAME'){ wiso.cucode=buyerCRMSegment[k];} else if (k=='TRACKING_SUID_RECOG'){if(buyerCRMSegment[k]=='TRUE'){wiso.ggnl=1;}else{wiso.ggnl=0;}} else {wiso['ggseg'+k] = buyerCRMSegment[k];}}}  if (typeof wiso.ggscxid != 'undefined' && wiso.ggscxid != ''){wiso._sc('ggscxid',wiso.ggscxid,1440);} else {wiso.ggscxid=wiso._gc('ggscxid');}}},\n		{_apv:{scxid:'ggscxid',mpch:'ggmpch'}}\n	);\n	(function() { \n	var _wis = document.createElement('script');_wis.type = 'text/javascript';_wis.async = true; _wis.src='http://dbfukofby5ycr.cloudfront.net/a9/js/dlc1.43.js';\n	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(_wis, s);\n	})();\n};\n</script>"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /Home Page|Product Page|SRP:Search|SRP:Browse|Main Categories|Daily Deals|SRP:Catalog Browse|SRP:Catalog Listing/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "Webinstats - URL",
            trigger: [{
                command: "writeHTML",
                arguments: [{
                    html: "<script>\n window.execute_wiso = function(buyerCRMSegment) {\n	window.wiso = window.wiso || [];\n	window.wiso.push(\n		{s:'45c4-9'},\n        {_cburl:'//gittigidiyor.webinstats.com/'},\n		{ps:':'},\n		{p:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n        {_pushu:'https://www.gittigidiyor.com/notifier-update.html'},\n		{p2:(typeof TRACKINGPAGENAME === 'string')?TRACKINGPAGENAME:'Other'},\n		{ggcn:(typeof TRACKINGCONTENTNAME === 'string')?TRACKINGCONTENTNAME:'Other'},\n		{ggplt:(typeof TRACKINGPLATFORM === 'string')?TRACKINGPLATFORM:'GG'},\n		{ggcatc:(typeof TRACKING_CATEGORY_CODE === 'string')?TRACKING_CATEGORY_CODE:''},\n		{pid:(typeof TRACKING_PRODUCT_ID === 'string')?TRACKING_PRODUCT_ID:''},\n		{trid:(typeof TRACKING_TRANSACTION_ID === 'string')?TRACKING_TRANSACTION_ID:''},\n		{purl:(typeof TRACKING_PRODUCT_URL === 'string')?TRACKING_PRODUCT_URL:''},\n		{pimg:(typeof TRACKING_PRODUCT_IMG_URL === 'string')?TRACKING_PRODUCT_IMG_URL:''},\n		{pprc:(typeof TRACKING_PRODUCT_PRICE === 'string')?TRACKING_PRODUCT_PRICE:''},\n		{poprc:(typeof TRACKING_STRIKE_PRICE === 'string')?TRACKING_STRIKE_PRICE:''},\n		{pttl:(typeof TRACKING_PRODUCT_TITLE === 'string')?TRACKING_PRODUCT_TITLE:''},\n		{pbrn:(typeof TRACKING_PRODUCT_BRAND === 'string')?TRACKING_PRODUCT_BRAND:''},\n		{ptyp:(typeof TRACKING_PRODUCT_TYPE === 'string')?TRACKING_PRODUCT_TYPE:''},\n		{ggkw:(typeof TRACKING_CATEGORY_SOCIO === 'string')?TRACKING_CATEGORY_SOCIO:''},\n		{ggresn:(typeof TRACKING_SEARCH_RESULT_NUM === 'string')?TRACKING_SEARCH_RESULT_NUM:''},	\n		{ggswrd:(typeof TRACKING_SEARCH_TERM === 'string')?TRACKING_SEARCH_TERM:''},\n		{cucode:(typeof _currentUsername === 'string')?_currentUsername:''},\n		{ggscp:(typeof TRACKING_CART_PRODUCTS_ZNX === 'string')?TRACKING_CART_PRODUCTS_ZNX:''},\n		{am:(typeof TRACKING_PAID_PRICE === 'string')?TRACKING_PAID_PRICE:'0'},\n		{_runc:function(o){ var s=s_gi('ebaytkprod'),c=o.cn+':'+o.n;s.linkTrackVars='prop65,eVar64,events';s.linkTrackEvents='event30';s.prop65=c;s.eVar64=c;s.events='event30';s.tl(this,'o',c);}},\n		{cuid:(typeof TRACKING_SUID === 'string' && !isNaN(TRACKING_SUID))?TRACKING_SUID:''},\n		{ggnl:(typeof TRACKING_SUID_RECOG === 'string' && TRACKING_SUID_RECOG=='TRUE')?'1':'0'},\n{_bexecute:function() {wiso.gmvh.push('www.gittigidiyor.com','gittigidiyor.com','urun.gittigidiyor.com');wiso.ba='';wiso.ps=':';if(wiso.p2.indexOf('Product Page') == 0){wiso.p='Product Page';}else if(wiso.p2.indexOf('SRP:Search') == 0){wiso.p='SRP:Search';} else if(wiso.p2.indexOf('SRP:Browse') == 0){wiso.p='SRP:Browse';} else {wiso.p=wiso.p2;} if (typeof buyerCRMSegment == 'object'){for (var k in buyerCRMSegment) {if (k=='TRACKING_SUID'){if(buyerCRMSegment[k] != '' && !isNaN(buyerCRMSegment[k])){wiso.cuid=buyerCRMSegment[k];}} else if (k=='TRACKING_USERNAME'){ wiso.cucode=buyerCRMSegment[k];} else if (k=='TRACKING_SUID_RECOG'){if(buyerCRMSegment[k]=='TRUE'){wiso.ggnl=1;}else{wiso.ggnl=0;}} else {wiso['ggseg'+k] = buyerCRMSegment[k];}}}  if (typeof wiso.ggscxid != 'undefined' && wiso.ggscxid != ''){wiso._sc('ggscxid',wiso.ggscxid,1440);} else {wiso.ggscxid=wiso._gc('ggscxid');}}},\n		{_apv:{scxid:'ggscxid',mpch:'ggmpch'}}\n	);\n	(function() { \n	var _wis = document.createElement('script');_wis.type = 'text/javascript';_wis.async = true; _wis.src='http://dbfukofby5ycr.cloudfront.net/a9/js/dlc1.43.js';\n	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(_wis, s);\n	})();\n};\n</script>"
                }]
            }],
            scope: {
                URI: {
                    include: [/kampanya/i]
                }
            },
            event: "pagebottom"
        }, {
            name: "errorPage",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, t) {
                    t.pageType = "errorPage"
                }
                ]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("errorPageParam"), "404")
            }
            ],
            event: "pagebottom"
        }, {
            name: "prop59 checkout rule",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop59: "%TRACKINGPAGENAME%:Loginli"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), /Shopping Cart:Address|^Checkout/i)
            }
            ],
            event: "pagebottom"
        }, {
            name: "prop59 shopping cart rule",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    prop59: "%TRACKINGPAGENAME%:%TRACKING_SUID_LOGIN%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), /Shopping Cart:Main|Shopping Cart:Buy Now:Login/i)
            }
            ],
            event: "pagebottom"
        }],
        rules: [{
            name: "Cadde:Ana Sayfa:Markalar",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:Markalar",
                    setVars: {
                        eVar60: "Cadde:Ana Sayfa:Markalar"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "DIV",
            property: {
                className: /^item mr1*/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Cadde:Ana Sayfa:One Cikanlar",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:One Cikanlar",
                    setVars: {
                        eVar3: "Cadde:Main Page",
                        eVar4: "D=v3",
                        eVar5: "Cadde:Main Page:One Cikanlar",
                        eVar60: "Cadde:Ana Sayfa:One Cikanlar"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "DIV",
            property: {
                className: "enCokSatanlarGallery"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Cadde:Ana Sayfa:Orta Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:Orta Banner",
                    setVars: {
                        eVar60: "Cadde:Ana Sayfa:Orta Banner"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "UL",
            property: {
                className: "Banners"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Cadde:Ana Sayfa:Portre",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:Portre",
                    setVars: {
                        eVar60: "Cadde:Ana Sayfa:Portre"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "DIV",
            property: {
                className: /^caddeportre mb20*/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Cadde:Ana Sayfa:Sizin icin sectiklerimiz",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:Sizin icin sectiklerimiz",
                    setVars: {
                        eVar60: "Cadde:Ana Sayfa:Sizin icin sectiklerimiz"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "DIV, IMG, A",
            property: {
                className: "col hero mb20"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Cadde:Ana Sayfa:Ust Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Cadde:Ana Sayfa:Ust Banner",
                    setVars: {
                        eVar60: "Cadde:Ana Sayfa:Ust Banner",
                        pageName: "Test Page"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Cadde:Main Page")
            }
            ],
            selector: "DIV",
            property: {
                className: /^advertBanner*/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - Compatible Products",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Compatible Products",
                    setVars: {
                        prop17: "Catalog Page:Compatible Products"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Catalog Page")
            }
            ],
            selector: "DIV",
            property: {
                className: "compatibleProductsItem"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - Likes",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Likes:%this.title%",
                    setVars: {
                        prop17: "Catalog Page:Likes:%this.title%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Catalog Page")
            }
            ],
            selector: "A",
            property: {
                className: /positive-point point-container|negative-point point-container/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - Product Compare",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Product Comparison",
                    setVars: {
                        prop17: "Catalog Page:Product Comparison"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Catalog Page")
            }
            ],
            selector: "DIV",
            property: {
                className: "ui-menu-item"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - See All Likes",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Likes:Other Likes",
                    setVars: {
                        prop17: "Catalog Page:Likes:Other Likes"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Catalog Page")
            }
            ],
            selector: "A",
            property: {
                className: "see-all-catalog-review"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - Spec Filters",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Spec Filter",
                    setVars: {
                        prop17: "Catalog Page:Spec Filter"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Catalog Page")
            }
            ],
            selector: "DIV",
            property: {
                className: "selectModel"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Catalog Page - T\xfcm\xfcn\xfc G\xf6r",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Catalog Page:Tumunu Gor",
                    setVars: {
                        prop17: "Catalog Page:Tumunu Gor"
                    }
                }]
            }],
            selector: "DIV",
            property: {
                id: "seeAllSeller"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Category Page - Recomm Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Category Page:Recommendation:Clicked:%sc_eVar70%",
                    setVars: {
                        eVar48: "Category Page Clicked:%sc_eVar70%",
                        prop54: "Category Page Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            ],
            selector: "ul",
            property: {
                id: "recommendation-products"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout - Installment Options",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:Installment:%this.className%",
                    setVars: {
                        prop17: "Checkout:Payment:Installment:%this.className%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "li",
            property: {
                className: /first gg-w-6 gg-d-7 gg-t-6|worldC|bonusC |maximumC |finansC |hsbcC |axessC/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout - Payment - 3D Button",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:3D Button",
                    setVars: {
                        eVar39: "Custom_3D",
                        prop69: "Custom_3D"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "#CreditCard > div.CardInfo.clearfix > div.gg-w-9.gg-d-10.gg-m-24 > table > tbody > tr > td:nth-child(1) > label",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout - Payment - Change Card Button",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:ChangeCard"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "a",
            property: {
                id: "changeCard",
                text: /^Kay/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout - Payment - Payment Button",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:Payment Button",
                    setVars: {
                        prop69: "Payment_Button"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "#BuyProduct",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout - Payment Mehtod Tabs",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:%this.id%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "li,a",
            property: {
                id: /P-PayViaPayPal|P-PayViaCC|P-PayViaGarantiPay|P-PayViaBKM/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout Result - Popup Close Buttons",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:On Bilgilendirme Formu:Kapat",
                    setVars: {
                        prop17: "Checkout:Payment:On Bilgilendirme Formu:Kapat"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "a",
            property: {
                className: "button_gray1 button_size2 simplemodal-close ggDialogOptionalCloser gg-btn"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Checkout:Payment - Sozlesmeler",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Checkout:Payment:%this.id%",
                    setVars: {
                        prop17: "Checkout:Payment:%this.id%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Payment")
            }
            ],
            selector: "input",
            property: {
                id: /^soz/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Confirmation Page - Recomm Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Confirmation Page:Recommendation:Clicked:%sc_eVar70%",
                    setVars: {
                        eVar48: "Confirmation Page Clicked:%sc_eVar70%",
                        prop54: "Confirmation Page Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Checkout:Result")
            }
            ],
            selector: "ul",
            property: {
                id: "recommendation-products"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne - AnneBabalar Icin",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:%this.id%",
                    setVars: {
                        prop17: "dcp:bebek-anne:%this.id%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "a",
            property: {
                id: /dcp-formothers-blog|dcp-forfathers-blog/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne - Markalar",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:markalar",
                    setVars: {
                        prop17: "dcp:bebek-anne:markalar"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-brands-product"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Age-Filter",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:age-filter:%target.innerHTML%",
                    setVars: {
                        prop17: "dcp:bebek-anne:age-filter:%target.innerHTML%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-agefilter"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Blog",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:blog",
                    setVars: {
                        prop17: "dcp:bebek-anne:blog"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-blog"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Editorun Sectikleri",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:editorsChoices",
                    setVars: {
                        prop17: "dcp:bebek-anne:editorsChoices"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-editorsChoices-product"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Featured Categories",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:featured-categories",
                    setVars: {
                        prop17: "dcp:bebek-anne:featured-categories"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "div",
            property: {
                className: /^featured-categories-list/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !1,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne GF Product",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:gf-product",
                    setVars: {
                        prop17: "dcp:bebek-anne:gf-product"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-gf-product"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Suggested Category Links",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:suggested-category-links",
                    setVars: {
                        prop17: "dcp:bebek-anne:suggested-category-links"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "dcp-suggested-category-links"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Suggestion",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:suggestion:%target.innerHTML%",
                    setVars: {
                        prop17: "dcp:bebek-anne:suggestion:%target.innerHTML%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "div",
            property: {
                id: "dcp-suggestion"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Bebek-Anne Trend Radari",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "dcp:bebek-anne:trend-radari",
                    setVars: {
                        prop17: "dcp:bebek-anne:trend-radari"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Main Categories")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Main Categories:bebek-anne")
            }
            ],
            selector: "ul",
            property: {
                id: "concept-row1"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Blog Banners",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        prop56: "DCP Banner:%TRACKINGPAGENAME%"
                    }
                }]
            }],
            selector: "img",
            property: {
                alt: "GittiGidiyor Blog"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "DCP Blog Carousel Items",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar40: "DCP Blog:Carousel:%URI%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "DCP Blog")
            }
            ],
            selector: "DIV",
            property: {
                id: "ggProductCarousel"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Guided Filter Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%TRACKINGCONTENTNAME%:Guided Filters",
                    setVars: {
                        prop17: "Guided Filters:%TRACKINGPAGENAME%"
                    }
                }]
            }, {
                command: "delayActivateLink"
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /SRP:Catalog Browse|SRP:Search/i)
            }
            ],
            selector: "li",
            property: {
                className: "guided-filter-item"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "HP - Recom - Interested Products",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Ilginizi cekebilecek urunler:Urun",
                    setVars: {
                        eVar48: "Home Page Clicked:%sc_eVar70%",
                        prop17: "Ilginizi cekebilecek urunler:Urun",
                        prop54: "Home Page Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "div",
            property: {
                className: "recom-cover-container clearfix"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Header - Tabs",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Header:%this.className%"
                }]
            }],
            selector: "li",
            property: {
                className: /ggCadde|ggKlasik|doodleArea|ggAtolye|ggBlog|ggLidyana/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - App Links",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Anasayfa - Top Banner", "%this.id%", "%this.title%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:App Links:%this.className%",
                    setVars: {
                        prop17: "homepage-app-links:%this.className%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "DIV",
            property: {
                className: /ios|android/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Atolye",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Atolye:Anasayfa:%this.id%",
                    setVars: {
                        eVar55: "Atolye:Anasayfa",
                        prop17: "D=v55"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul, div",
            property: {
                id: /^homepage-atolye/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Best Sellers",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Haftanin Cok Satanlari:%this.id%",
                    setVars: {
                        eVar55: "D=c17",
                        prop17: "Haftanin Cok Satanlari"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul, div",
            property: {
                id: /^homepage-mostSold/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Brand Gallery",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Anasayfa - Top Banner", "%this.id%", "%this.title%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Brand Gallery:%this.title%",
                    setVars: {
                        eVar55: "Brand Gallery",
                        prop17: "homepage-brand-gallery:%this.title%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "li,a",
            property: {
                className: "brand-logo-container"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Cadde Favorites",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Cadde Favorileri:%this.id%",
                    setVars: {
                        eVar55: "Cadde Favorileri",
                        prop17: "D=v55"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul, div",
            property: {
                id: /^homepage-cadde/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Header Top Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Header Top Banner:%TRACKINGCONTENTNAME%",
                    setVars: {
                        eVar44: "Header Top Banner:%TRACKINGCONTENTNAME%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "DIV",
            property: {
                id: "HeadIndirim"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - HeaderDoodle",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "HeaderDoodle:Sevgililer Gunu",
                    setVars: {
                        eVar69: "HeaderDoodle:Sevgililer Gunu",
                        prop17: "HeaderDoodle:Sevgililer Gunu"
                    }
                }]
            }],
            selector: "DIV",
            property: {
                id: "HeaderDoodle"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Last Visited Products",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Son Gezdikleriniz:%this.id%",
                    setVars: {
                        eVar55: "Son Gezdikleriniz",
                        prop17: "D=v55"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul",
            property: {
                id: "homepage-lastVisited-product"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Left Category Links",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Home Page", "%this.id%", "%target.innerText%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Left Category:%target.innerText%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_HOMEPAGE"), "RESPONSIVE")
            }
            ],
            selector: "li",
            property: {
                id: /^homepage-left-category-menu/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Popular Campaigns - Responsive",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Home Page", "Popular Campaigns"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_HOMEPAGE"), "RESPONSIVE")
            }
            ],
            selector: "ul",
            property: {
                id: "homepage-populer-campaigns-products"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Supermarket",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Supermarket:Anasayfa:%this.id%",
                    setVars: {
                        eVar55: "Supermarket:Anasayfa",
                        prop17: "D=v55"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul, div",
            property: {
                id: /^homepage-supermarket/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Top Banner",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Anasayfa - Top Banner", "%this.id%", "%this.title%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Top Banner:%this.id%",
                    setVars: {
                        eVar35: "%this.id%:%this.title%",
                        eVar55: "Banner Gobek",
                        prop17: "%this.id%",
                        prop18: "%this.id%:%this.title%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "li,a",
            property: {
                id: /^homepage-top-banner/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Home Page - Top Banner - Slider Buttons",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Anasayfa", "Top Banner", "%this.id%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:Top Banner:%this.id%",
                    setVars: {
                        prop17: "%this.id%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_HOMEPAGE"), "RESPONSIVE")
            }
            ],
            selector: "li,a",
            property: {
                id: /^homepage-topbanner-slider-button/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Homepage - GF All Deals",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Home Page", "Gunun Firsati", "%this.id%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:GF:homepage-gf-all-products",
                    setVars: {
                        eVar55: "Gunun-Firsati",
                        prop17: "homepage-gf-all-deals"
                    },
                    addEvent: ["event29:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "DIV",
            property: {
                id: "homepage-gf-all-deals"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Homepage - GF All Products",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Home Page", "Gunun Firsati", "%this.id%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:GF:homepage-gf-all-deals",
                    setVars: {
                        eVar55: "Gunun-Firsati",
                        prop17: "homepage-gf-all-products"
                    },
                    addEvent: ["event29:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "DIV, ul",
            property: {
                id: "homepage-gf-count-area"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Homepage - GF Products",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Home Page", "Gunun Firsati", "%this.id%"]
            }, {
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Home Page:GF:homepage-gf-product",
                    setVars: {
                        eVar55: "Gunun-Firsati",
                        prop17: "homepage-gf-product"
                    },
                    addEvent: ["event29:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Home Page")
            }
            ],
            selector: "ul",
            property: {
                id: "homepage-gf-product"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Mega Menu",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Mega:%TRACKINGCONTENTNAME%",
                    setVars: {
                        prop70: "Mega:%TRACKINGCONTENTNAME%"
                    }
                }]
            }],
            selector: "li,ul",
            property: {
                className: /mega megaTitle|megaSublink/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !1,
            bubbleStop: !0
        }, {
            name: "Mobile - SmartApp Banner Close",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "MOBILE:Home Page:SmartBanner:Close"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "MOBILE:Home Page")
            }
            ],
            selector: "A",
            property: {
                className: "sb-close"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Mobile - SmartApp Banner View",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "MOBILE:Home Page:SmartBanner:View"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "MOBILE:Home Page")
            }
            ],
            selector: "A",
            property: {
                className: "sb-button"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "PP - Live - Recom Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Clicked:%sc_eVar70%",
                    setVars: {
                        eVar48: "Product Page Clicked:%sc_eVar70%",
                        prop17: "Product Page:Recommendation",
                        prop54: "Product Page Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop9"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop11"), "Live")
            }
            ],
            selector: "ul",
            property: {
                className: "horizontal-slider"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "PP - Not Live - Recom Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Expired Product Page:Clicked:%sc_eVar70%",
                    setVars: {
                        eVar48: "Expired Product Page Clicked:%sc_eVar70%",
                        prop17: "Expired Product Page:Recommendation",
                        prop54: "Expired Product Page Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop9"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop11"), "Not Live")
            }
            ],
            selector: "ul",
            property: {
                id: "recommendation-content"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Catalog Box",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Catalog Box:Seller List",
                    setVars: {
                        prop17: "Product Page:Catalog Box:Seller List"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "DIV",
            property: {
                id: "sellerList"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Hemen Al - Acik Artirma",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Hemen Al:Acik Artirma",
                    setVars: {
                        eVar65: "HemenAl",
                        prop17: "Product Page:Hemen Al:Acik Artirma"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "input",
            property: {
                id: "buyit-now",
                className: "control-button button_blue1 showModal"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Hemen Al - Sabit Fiyat",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Hemen Al:Sabit Fiyat",
                    setVars: {
                        eVar65: "HemenAl",
                        prop17: "Product Page:Hemen Al"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-575ff0d064746d6b8a011729.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "input",
            property: {
                id: "buy-now"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Hemen Al - Visilabs",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-59534a6c64746d0a58016b77.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            selector: "input",
            property: {
                id: "buy-now"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Hemen Al-Sticky",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Hemen Al:Sticky",
                    setVars: {
                        eVar65: "HemenAl",
                        prop17: "Product Page:Hemen Al:Sticky"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "a",
            property: {
                className: "button_blue1 button_size3 right trigger-buy"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Right Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:RightSide Banner:En Para"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "DIV",
            property: {
                id: "fakeAdvert"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Sepete Ekle",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Sepete Ekle",
                    setVars: {
                        eVar65: "Sepete Ekle",
                        prop17: "Product Page:Sepete Ekle"
                    }
                }]
            }, {
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-575ff98164746d2e02011d23.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            ],
            selector: "input",
            property: {
                id: "add-to-basket"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Sepete Ekle - Visilabs",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-5949305464746d68b800b9ef.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            selector: "input",
            property: {
                id: "add-to-basket"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product Page - Video Link Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product Page:Video Link:208671031"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "Product Page")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("TRACKING_PRODUCT_ID"), "208671031")
            }
            ],
            selector: "li",
            property: {
                "data-content": "video"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Product-Subsciription-LP",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Product-Subscription-LP",
                    setVars: {
                        prop17: "Product-Subscription-LP"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Landings:ProductSubscription")
            }
            ],
            selector: "a",
            property: {
                className: /gg-d-24 gg-ui-btn gg-ui-btn-blue btn-subscription/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "SRP Search-Browse AZ button click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SRP:Left Menu:Filter:A-Z"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^SRP/i)
            }
            ],
            selector: ".btn-filter-link",
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "SRP-Related Searches",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SRP Search:Related Searches",
                    setVars: {
                        prop73: "Related Searches"
                    }
                }]
            }],
            selector: "ul",
            property: {
                className: "related-searches"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "SRP:Catalog Browse - Left Filters",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SRP:Catalog Browse:Left Filters",
                    setVars: {
                        prop17: "%TRACKINGPAGENAME%:%this.getAttribute(data-trigger)%"
                    }
                }]
            }, {
                command: "delayActivateLink"
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "SRP:Catalog Browse")
            }
            ],
            selector: "DIV",
            property: {
                className: "gg-sr-spec-navigation"
            },
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "SRPTextAd",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SRPTextAd:%TRACKINGCONTENTNAME%",
                    setVars: {
                        eVar72: "SRPTextAd:%TRACKINGCONTENTNAME%"
                    }
                }]
            }],
            selector: "DIV",
            property: {
                id: "SRPTextAd"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Sale Form - Message Track",
            trigger: [{
                engine: "ga",
                command: "trackEvent",
                arguments: ["Sale Form", "Title Box - Warning", "%URI%"]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Sell:Selling Form:Product Detail:Description")
            }
            ],
            selector: "DIV",
            property: {
                id: "TitleInfoBoxContent"
            },
            eventHandlerOnElement: !0,
            event: "hover(0)",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !1,
            bubbleStop: !0
        }, {
            name: "Search - AutoComplete",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Search Box:AutoComplete",
                    setVars: {
                        prop17: "Search Box:AutoComplete:%target.innerText%",
                        prop41: "%this.getAttribute(class)%:%this.getAttribute(targetid)%"
                    }
                }]
            }],
            selector: "div",
            property: {
                className: /^inputController mainPanel mainContent/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Search Box - Cadde Store Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SearchBox-Cadde-Banner|%TRACKINGCONTENTNAME%|%this.@text%"
                }]
            }],
            selector: "DIV",
            property: {
                className: "clearfix private-store-sug"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Search Not Found - Recomm Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Search Not Found:Recommendation:Clicked:%sc_eVar70%",
                    setVars: {
                        eVar48: "Search Not Found Clicked:%sc_eVar70%",
                        prop54: "Search Not Found Clicked:%sc_eVar70%"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), /^SRP/i)
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("sc_prop2"), "no result")
            }
            ],
            selector: "ul",
            property: {
                id: "recommendation-products"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Search Page - Sponsorlu Icerik",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Sponsored Content:%TRACKING_SEARCH_TERM%",
                    setVars: {
                        eVar81: "%TRACKING_SEARCH_TERM%",
                        prop17: "Sponsored Content:%TRACKING_SEARCH_TERM%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "SRP:Search")
            }
            ],
            selector: "DIV",
            property: {
                className: "ads-cover clearfix"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Search Page Tabs",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%this.id%",
                    setVars: {
                        eVar52: "D=c58",
                        prop58: "%this.id%"
                    }
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("sc_channel"), /^SRP:/i)
            }
            ],
            selector: "li",
            property: {
                id: /^search-page-tab-/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Search Result - Cadde Banner",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SRP-Cadde-Banner|%target.getAttribute(alt)%"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGCONTENTNAME"), "SRP:Search")
            }
            ],
            selector: "DIV",
            property: {
                id: "caddeBanner"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "SearchBox - Free Shipping",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "SearchBox:Free Shipping"
                }]
            }],
            selector: "DIV",
            property: {
                className: "fs-container"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Shopping Cart - Address",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Shopping Cart:Address:Add New Address"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Address")
            }
            ],
            selector: "a",
            property: {
                id: "AddNew"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Shopping Cart - Edit Address",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Shopping Cart:Address:Edit Address"
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Address")
            }
            ],
            selector: "span",
            property: {
                className: "EditAddress"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Shopping Cart Recommendation SC1",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Shopping Cart:Recommendation:Clicked:%sc_eVar70%-sc1",
                    setVars: {
                        eVar48: "Shopping Cart Clicked:%sc_eVar70%-sc1",
                        prop54: "Shopping Cart Clicked:%sc_eVar70%-sc1"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            ],
            selector: "a",
            property: {
                className: /^button_gray1 AddToBasket/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Shopping Cart Recommendation SC2",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Shopping Cart:Recommendation:Clicked:%sc_eVar70%-sc2",
                    setVars: {
                        eVar48: "Shopping Cart Clicked:%sc_eVar70%-sc2",
                        prop54: "Shopping Cart Clicked:%sc_eVar70%-sc2"
                    },
                    addEvent: ["event26:1"]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            ],
            selector: "a",
            property: {
                className: /^gg-btn button_blue1 AddToBasket/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Smart Banner Link Tracking",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "%this.id%"
                }]
            }],
            conditions: [function() {
                return -1 !== ["Android"].indexOf(_satellite.browserInfo.deviceType)
            }
            ],
            selector: "a",
            property: {
                id: /^smartBanner_Android/i
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Visilabs - SC Remove Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-593f860264746d68b800822f.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            selector: "A",
            property: {
                title: "Sil"
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Visilabs - SC Remove Selected Button",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !0,
                    scripts: [{
                        src: "satellite-59539ba064746d329200fbc3.js"
                    }]
                }]
            }],
            conditions: [function() {
                return _satellite.textMatch(_satellite.getVar("TRACKINGPAGENAME"), "Shopping Cart:Main")
            }
            , function() {
                return _satellite.textMatch(_satellite.getVar("tracking_logged_in"), "logged in")
            }
            ],
            selector: "DIV",
            property: {
                className: "btn-remove-item "
            },
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }],
        directCallRules: [],
        settings: {
            trackInternalLinks: !0,
            libraryName: "satelliteLib-9bef5bd9489d47a4a54290baa042c4897546e195",
            isStaging: !1,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ["gittigidiyor.com"],
            scriptDir: "f44cace702bfaa11f3b3355214b590f45d41db61/scripts/",
            tagTimeout: 3e3
        },
        data: {
            URI: document.location.pathname + document.location.search,
            browser: {},
            cartItems: [],
            revenue: "",
            host: {
                http: "assets.adobedtm.com",
                https: "assets.adobedtm.com"
            }
        },
        dataElements: {
            AFFILIATE_PRODUCTS: {
                jsVariable: "AFFILIATE_PRODUCTS",
                storeLength: "pageview"
            },
            checkout_3d_button: {
                selector: "#secure3D",
                property: "checked",
                "default": "unchecked",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            Dominant_Category: {
                selector: "#best-match-left > div.filter_search_narrow.mCategories > div.content > ul > li:nth-child(1) > ul > li:nth-child(1) > a",
                property: "title",
                "default": "Yok",
                storeLength: "pageview"
            },
            Dominant_Main_Cat: {
                selector: "#best-match-left > div.filter_search_narrow.mCategories > div.content > ul > li:nth-child(1) > a",
                property: "title",
                "default": "NotAvailable",
                storeLength: "pageview"
            },
            dym_term: {
                queryParam: "dym",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0,
                ignoreCase: 1
            },
            empty_basket: {
                selector: "#gg-cart > div > div > div.ContentLeft.gg-w-17.gg-d-15.gg-t-14.gg-m-24 > div.EmptyB.clearfix",
                property: "className",
                "default": "full",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0
            },
            errorPageParam: {
                jsVariable: "sc_httpStatusCode",
                "default": "200",
                storeLength: "pageview"
            },
            Fuzzy_Search: {
                selector: "#best-match-right > div.blueWrapper.clearfix > h2",
                property: "text",
                "default": "yok",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0
            },
            GG_RECOM_CATEGORY_CODE: {
                jsVariable: "GG_RECOM_CATEGORY_CODE",
                storeLength: "pageview"
            },
            go_sess_c: {
                cookie: "go_sess",
                "default": "0",
                storeLength: "pageview"
            },
            OMCP_Cookie: {
                cookie: "OMCP",
                storeLength: "pageview"
            },
            rcm_control_var: {
                selector: "#rcm_control_var",
                property: "value",
                "default": "not available",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            rcp_action: {
                queryParam: "rcp_action",
                storeLength: "pageview",
                ignoreCase: 1
            },
            RECOMMENDATION_KEY: {
                jsVariable: "RECOMMENDATION_KEY",
                storeLength: "pageview"
            },
            RR_MVTF: {
                customJS: function() {
                    return "RR" == sc_eVar70 ? RR_MVTF = 16835 : "Gravity" == sc_eVar70 ? RR_MVTF = 16836 : RR_MVTF = 16835,
                    RR_MVTF
                },
                "default": "16835",
                storeLength: "pageview"
            },
            RTGS: {
                cookie: "RTGS",
                storeLength: "visitor"
            },
            sc_channel: {
                jsVariable: "sc_channel",
                storeLength: "pageview"
            },
            sc_chtbx: {
                queryParam: "sc_chtbx",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0,
                ignoreCase: 1
            },
            sc_dcp_blog: {
                queryParam: "fa",
                storeLength: "pageview",
                ignoreCase: 1
            },
            sc_eVar11: {
                jsVariable: "sc_eVar11",
                storeLength: "pageview"
            },
            sc_eVar12: {
                jsVariable: "sc_eVar12",
                storeLength: "pageview"
            },
            sc_eVar18: {
                jsVariable: "sc_eVar18",
                storeLength: "pageview"
            },
            sc_eVar19: {
                jsVariable: "sc_eVar19",
                storeLength: "pageview"
            },
            sc_eVar20: {
                jsVariable: "sc_eVar20",
                storeLength: "pageview"
            },
            sc_eVar21: {
                jsVariable: "sc_eVar21",
                storeLength: "pageview"
            },
            sc_eVar27: {
                jsVariable: "sc_eVar27",
                storeLength: "pageview"
            },
            sc_eVar3: {
                jsVariable: "sc_eVar3",
                storeLength: "pageview"
            },
            sc_evar38: {
                jsVariable: "sc_eVar38",
                storeLength: "pageview"
            },
            sc_eVar4: {
                jsVariable: "sc_eVar4",
                storeLength: "pageview"
            },
            sc_eVar46: {
                jsVariable: "sc_eVar46",
                storeLength: "pageview"
            },
            sc_eVar5: {
                jsVariable: "sc_eVar5",
                storeLength: "pageview"
            },
            sc_eVar67: {
                jsVariable: "sc_eVar67",
                storeLength: "pageview"
            },
            sc_eVar68: {
                jsVariable: "sc_eVar68",
                storeLength: "pageview"
            },
            sc_eVar7: {
                jsVariable: "sc_eVar7",
                storeLength: "pageview"
            },
            sc_eVar70: {
                jsVariable: "sc_eVar70",
                storeLength: "pageview"
            },
            sc_events: {
                jsVariable: "sc_events",
                storeLength: "pageview"
            },
            sc_extrf: {
                queryParam: "sc_extrf",
                storeLength: "pageview",
                ignoreCase: 1
            },
            sc_gcsp: {
                queryParam: "sc_gcsp",
                "default": "0",
                storeLength: "pageview",
                forceLowerCase: !0,
                ignoreCase: 1
            },
            sc_list1: {
                jsVariable: "sc_list1",
                storeLength: "pageview"
            },
            sc_pageName: {
                jsVariable: "sc_pageName",
                storeLength: "pageview"
            },
            sc_pageType: {
                jsVariable: "sc_pageType",
                storeLength: "pageview"
            },
            sc_products: {
                jsVariable: "sc_products",
                storeLength: "pageview"
            },
            sc_prop1: {
                jsVariable: "sc_prop1",
                storeLength: "pageview"
            },
            sc_prop10: {
                jsVariable: "sc_prop10",
                storeLength: "pageview"
            },
            sc_prop11: {
                jsVariable: "sc_prop11",
                storeLength: "pageview"
            },
            sc_prop2: {
                jsVariable: "sc_prop2",
                storeLength: "pageview"
            },
            sc_prop3: {
                jsVariable: "sc_prop3",
                storeLength: "pageview"
            },
            sc_prop34: {
                jsVariable: "sc_prop34",
                storeLength: "pageview"
            },
            sc_prop35: {
                jsVariable: "sc_prop35",
                "default": "980px",
                storeLength: "pageview"
            },
            sc_prop4: {
                jsVariable: "sc_prop4",
                storeLength: "pageview"
            },
            sc_prop49: {
                jsVariable: "sc_prop49",
                storeLength: "pageview"
            },
            sc_prop5: {
                jsVariable: "sc_prop5",
                storeLength: "pageview"
            },
            sc_prop6: {
                jsVariable: "sc_prop6",
                storeLength: "pageview"
            },
            sc_prop7: {
                jsVariable: "sc_prop7",
                storeLength: "pageview"
            },
            sc_prop71: {
                jsVariable: "sc_prop71",
                storeLength: "pageview"
            },
            sc_prop72: {
                jsVariable: "sc_prop72",
                storeLength: "pageview"
            },
            sc_prop8: {
                jsVariable: "sc_prop8",
                storeLength: "pageview"
            },
            sc_prop9: {
                jsVariable: "sc_prop9",
                storeLength: "pageview"
            },
            sc_purchaseID: {
                jsVariable: "sc_purchaseID",
                storeLength: "pageview"
            },
            search_keyword: {
                queryParam: "k",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0,
                ignoreCase: 1
            },
            search_page_num: {
                queryParam: "sf",
                "default": "1",
                storeLength: "pageview",
                ignoreCase: 1
            },
            sociaplus_code: {
                queryParam: "sociaplus_code",
                "default": "gittigidiyor",
                storeLength: "session",
                ignoreCase: 1
            },
            TRACKING_ADBLOCKER: {
                jsVariable: "TRACKING_ADBLOCKER",
                storeLength: "pageview"
            },
            TRACKING_BRAND: {
                jsVariable: "TRACKING_BRAND",
                storeLength: "pageview"
            },
            TRACKING_CART_PRODUCTS: {
                jsVariable: "TRACKING_CART_PRODUCTS",
                storeLength: "pageview"
            },
            TRACKING_CART_PRODUCTS_GOOGLE: {
                jsVariable: "TRACKING_CART_PRODUCTS_GOOGLE",
                storeLength: "pageview",
                forceLowerCase: !0,
                cleanText: !0
            },
            TRACKING_CART_PRODUCTS_SOCIO: {
                jsVariable: "TRACKING_CART_PRODUCTS_SOCIO",
                storeLength: "pageview"
            },
            TRACKING_CAT1: {
                jsVariable: "TRACKING_CAT1",
                storeLength: "pageview"
            },
            TRACKING_CAT2: {
                jsVariable: "TRACKING_CAT2",
                storeLength: "pageview"
            },
            TRACKING_CAT3: {
                jsVariable: "TRACKING_CAT3",
                storeLength: "pageview"
            },
            TRACKING_CATEGORY_CODE: {
                jsVariable: "TRACKING_CATEGORY_CODE",
                storeLength: "pageview"
            },
            TRACKING_CATEGORY_SOCIO: {
                jsVariable: "TRACKING_CATEGORY_SOCIO",
                storeLength: "pageview"
            },
            TRACKING_CCINFO: {
                jsVariable: "TRACKING_CCINFO",
                storeLength: "pageview"
            },
            TRACKING_CHECKOUT_PRODUCTS_GOOGLE: {
                jsVariable: "TRACKING_CHECKOUT_PRODUCTS_GOOGLE",
                storeLength: "pageview"
            },
            TRACKING_CID1_AMOUNT: {
                jsVariable: "TRACKING_CID1_AMOUNT",
                "default": "0",
                storeLength: "pageview"
            },
            TRACKING_CID2_AMOUNT: {
                jsVariable: "TRACKING_CID2_AMOUNT",
                "default": "0",
                storeLength: "pageview"
            },
            TRACKING_CID3_AMOUNT: {
                jsVariable: "TRACKING_CID3_AMOUNT",
                "default": "0",
                storeLength: "pageview"
            },
            TRACKING_CID4_AMOUNT: {
                jsVariable: "TRACKING_CID4_AMOUNT",
                "default": "0",
                storeLength: "pageview"
            },
            TRACKING_CMID: {
                jsVariable: "TRACKING_CMID",
                storeLength: "pageview"
            },
            TRACKINGCONTENTNAME: {
                jsVariable: "TRACKINGCONTENTNAME",
                storeLength: "pageview"
            },
            TRACKING_DEVICE_TYPE: {
                customJS: function() {
                    try {
                        if ("320px" == sc_prop35 || "768px" == sc_prop35)
                            var e = "Mobile";
                        else
                            var e = "Desktop";
                        return e
                    } catch (t) {}
                },
                "default": "Desktop",
                storeLength: "pageview"
            },
            TRACKING_FTB: {
                jsVariable: "TRACKING_FTB",
                storeLength: "pageview"
            },
            TRACKING_HOMEPAGE: {
                jsVariable: "TRACKING_HOMEPAGE",
                storeLength: "pageview"
            },
            TRACKING_ID: {
                jsVariable: "TRACKING_ID",
                storeLength: "pageview"
            },
            TRACKING_KRG_PARAM: {
                queryParam: "krg",
                storeLength: "pageview",
                ignoreCase: 1
            },
            TRACKING_LASTCATEG_NAME: {
                jsVariable: "TRACKING_LASTCATEG_NAME",
                storeLength: "pageview"
            },
            tracking_logged_in: {
                customJS: function() {
                    try {
                        return "" == JSON.parse(localStorage.getItem("bcrmsgmnt")).username ? tracking_login = "not logged in" : tracking_login = "logged in",
                        tracking_login
                    } catch (e) {}
                },
                "default": "not logged in",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            TRACKINGPAGENAME: {
                jsVariable: "TRACKINGPAGENAME",
                storeLength: "pageview"
            },
            TRACKING_PAGETYPE: {
                jsVariable: "TRACKING_PAGETYPE",
                storeLength: "pageview"
            },
            TRACKING_PAID_PRICE: {
                jsVariable: "TRACKING_PAID_PRICE",
                storeLength: "pageview"
            },
            TRACKINGPLATFORM: {
                jsVariable: "TRACKINGPLATFORM",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_BRAND: {
                jsVariable: "TRACKING_PRODUCT_BRAND",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_EXPIRE_DATE: {
                jsVariable: "TRACKING_EXPIRE_DATE",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_ID: {
                jsVariable: "TRACKING_PRODUCT_ID",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_IMG_URL: {
                jsVariable: "TRACKING_PRODUCT_IMG_URL",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_LIST: {
                jsVariable: "TRACKING_PRODUCT_LIST",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_PRICE: {
                jsVariable: "TRACKING_PRODUCT_PRICE",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_TITLE: {
                jsVariable: "TRACKING_PRODUCT_TITLE",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_TYPE: {
                jsVariable: "TRACKING_PRODUCT_TYPE",
                storeLength: "pageview"
            },
            TRACKING_PRODUCT_URL: {
                jsVariable: "TRACKING_PRODUCT_URL",
                storeLength: "pageview"
            },
            TRACKING_SEARCH_RESULT_NUM: {
                jsVariable: "TRACKING_SEARCH_RESULT_NUM",
                storeLength: "pageview"
            },
            TRACKING_SEARCH_TERM: {
                jsVariable: "TRACKING_SEARCH_TERM",
                storeLength: "pageview"
            },
            TRACKING_SELLER_NICK: {
                jsVariable: "TRACKING_SELLER_NICK",
                storeLength: "pageview"
            },
            TRACKING_STRIKE_PRICE: {
                jsVariable: "TRACKING_STRIKE_PRICE",
                storeLength: "pageview"
            },
            TRACKING_SUID: {
                customJS: function() {
                    try {
                        return "0" == TRACKING_SUID ? TRACKING_SUID = "" : TRACKING_SUID = TRACKING_SUID,
                        TRACKING_SUID
                    } catch (e) {}
                },
                storeLength: "pageview"
            },
            TRACKING_SUID_LOGIN: {
                customJS: function() {
                    try {
                        return TRACKING_SUID > 0 ? TRACKING_SUID_LOGIN = "Loginli" : TRACKING_SUID_LOGIN = "Loginsiz",
                        TRACKING_SUID_LOGIN
                    } catch (e) {}
                },
                storeLength: "pageview"
            },
            TRACKING_SUID_RECOG: {
                jsVariable: "TRACKING_SUID_RECOG",
                "default": "FALSE",
                storeLength: "pageview"
            },
            tracking_total_transactions: {
                customJS: function() {
                    try {
                        return "0" == JSON.parse(localStorage.getItem("bcrmsgmnt")).data.totalTransaction ? tracking_total_transactions = "0" : tracking_total_transactions = JSON.parse(localStorage.getItem("bcrmsgmnt")).data.totalTransaction,
                        tracking_total_transactions
                    } catch (e) {}
                },
                "default": "999999",
                storeLength: "pageview"
            },
            TRACKING_TRANSACTION_ID: {
                jsVariable: "TRACKING_TRANSACTION_ID",
                storeLength: "pageview"
            },
            TRACKING_UC_PARAM: {
                queryParam: "uc",
                storeLength: "pageview",
                ignoreCase: 1
            },
            TRACKING_UDT_COOKIE: {
                cookie: "udt",
                storeLength: "pageview"
            }
        },
        appVersion: "7QN",
        buildDate: "2017-10-04 07:19:49 UTC",
        publishDate: "2017-10-04 07:19:48 UTC"
    })
}(window, document);
