function getActualWidth() {
    try {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || document.body.offsetWidth
    } catch (a) {
        return 0
    }
}
function checkRangeController(a) {
    var b, c = 0, d = {
        mobile: 0,
        tablet: 768,
        desktop: 980,
        large_desktop: 1200
    };
    for (var e in d) {
        var f = d[e];
        a > c && (a >= f ? b = e : c = f)
    }
    return d[b] < 320 ? 320 : d[b]
}
function getAndroidVersion(a) {
    a = (a || navigator.userAgent).toLowerCase();
    var b = a.match(/android\s([0-9\.]*)/);
    return !!b && b[1]
}
function slotRenderCompleted(a) {
    if (a == GG.Static.advConfig.common[0].containerId) {
        var b, c = $GG("#MastheadBannerController iframe").contents().find("#image90"), d = $GG("#MastheadBannerController iframe").contents().find("#image270");
        0 == $GG("#MastheadBannerController.homepageMasthead").length ? 0 != d.length && (c.css("display", "block"),
        d.css("display", "none"),
        $GG("#MastheadBannerController").mouseover(function() {
            b = setTimeout(function() {
                $GG("#MastheadBannerController").animate({
                    height: "270px"
                }, 500),
                c.fadeOut(500),
                d.fadeIn(500)
            }, 300)
        }),
        $GG("#MastheadBannerController").mouseleave(function() {
            clearTimeout(b),
            $GG("#MastheadBannerController").animate({
                height: "90px"
            }, 500),
            c.fadeIn(500),
            d.fadeOut(500)
        })) : 0 != d.length && ($GG(window).resize(function() {
            $GG("#MastheadBannerShowHide").css("left", $GG("#SearchDetailCon").offset().left + 10 + "px"),
            $GG("#MastheadBannerShowHide").css("top", "20px"),
            $GG("#MastheadBannerShowHide").removeClass("hidden")
        }),
        $GG(window).trigger("resize"),
        "close" != mastheadShowType.getCookie() ? (c.css("display", "none"),
        d.css("display", "block"),
        $GG("#MastheadBannerController").animate({
            height: "270px"
        }, 500)) : (c.css("display", "block"),
        d.css("display", "none"),
        $GG("#MastheadBannerShowHide").find(".content").html("Göster")),
        $GG(".rightEarBanner.pageSkin").length > 0 && $GG(".rightEarBanner.pageSkin, .leftEarBanner.pageSkin").animate({
            top: $GG(".leftEarBanner.pageSkin").offset().top + 180 + "px"
        }, 300),
        $GG("#MastheadBannerShowHide").click(function() {
            270 == Math.floor($GG("#MastheadBannerController").height()) ? ($GG(this).find(".content").html("Göster"),
            $GG("#MastheadBannerController").animate({
                height: "90px"
            }, 300),
            $GG(".rightEarBanner.pageSkin").length > 0 && $GG(".rightEarBanner.pageSkin, .leftEarBanner.pageSkin").animate({
                top: $GG(".leftEarBanner.pageSkin").offset().top - 180 + "px"
            }, 300),
            c.fadeToggle("slow", "linear"),
            d.fadeToggle("slow", "linear")) : 90 == Math.floor($GG("#MastheadBannerController").height()) && ($GG("#MastheadBannerController").animate({
                height: "270px"
            }, 300),
            $GG(".rightEarBanner.pageSkin").length > 0 && $GG(".rightEarBanner.pageSkin, .leftEarBanner.pageSkin").animate({
                top: $GG(".leftEarBanner.pageSkin").offset().top + 180 + "px"
            }, 300),
            c.fadeToggle("slow", "linear"),
            d.fadeToggle("slow", "linear"),
            $GG(this).find(".content").html("Gizle"))
        })),
        mastheadShowType.setCookie("close")
    }
}
function autoCompleteController() {
    var a = !1;
    try {
        a = "" != jQuery("#selectedCatTxt").html().trim()
    } catch (a) {}
    "" != _ggAutoComplete && (a ? _ggAutoComplete.disable() : _ggAutoComplete.enable())
}
function getQueryParamValue(a, b) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var c = new RegExp("[\\?&]" + a + "=([^&#]*)")
      , d = c.exec(b);
    return null == d ? "" : d[1]
}
function createCookie(a, b, c, d, e) {
    var f = a + "=" + escape(b) + ";";
    c && (c instanceof Date ? isNaN(c.getTime()) && (c = new Date) : c = new Date((new Date).getTime() + 1e3 * parseInt(c) * 60 * 60 * 24),
    f += "expires=" + c.toGMTString() + ";"),
    d && (f += "path=" + d + ";"),
    e && (f += "domain=" + e + ";"),
    document.cookie = f
}
function setCookie(a, b, c) {
    createCookie(a, b, c, "/", getHostForCookie())
}
function getCookie(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d]; " " == e.charAt(0); )
            e = e.substring(1, e.length);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return null
}
function deleteCookie(a) {
    setCookie(a, "", -1)
}
function getHostForCookie() {
    var a = []
      , b = document.location.host;
    try {
        a = b.split(".");
        var c = a.length;
        return "." + a[c - 2] + "." + a[c - 1]
    } catch (a) {
        return b
    }
}
function GetTrackCode(a, b) {
    var c = $GG("#TRACKINGCONTENTNAME").val();
    return "mega" == a ? "'Header - GG Mega Menu', '" + c + " - H - Gunun Firsati', 'H - " + b + "'" : "'Anasayfa - ilginizi cekebilecek urunler', 'ilginizi cekebilecek urunler - AS - Urun', 'AS - " + b + "'"
}
function TooltipWH() {
    $GG(".btc, .bbc").each(function() {
        var a = Number($GG(this).parent().width())
          , b = Number($GG(this).width())
          , c = (b - a) / 2;
        $GG(this).css("left", -1 * c)
    }),
    $GG(".brm").each(function() {
        var a = Number($GG(this).parent().outerWidth());
        $GG(this).css("right", a + 20)
    }),
    $GG(".blm").each(function() {
        var a = Number($GG(this).parent().outerWidth());
        $GG(this).css("left", a + 20)
    })
}
function submitSearch() {
    var a = document.getElementById("MobileSInput").value;
    "Ne aramıştınız?" == a && (a = "");
    var b = $GG("#main-route").val() + "/" || "http://www.gittigidiyor.com/";
    document.location = a ? b + "arama/?k=" + a : b + "arama"
}
function submitCategory() {
    var a = $GG("#selectedCatTxt").attr("rel")
      , b = document.getElementById("search_word").value
      , c = []
      , d = "arama/";
    1 == jQuery(".inputController.mainPanel.selected").hasClass("category") && (d = jQuery(".inputController.mainPanel.selected").find("a").attr("data-href"));
    try {
        _gaq.push(["_trackEvent", "Header - GG HOMEPAGE", "Arama - Bul", b])
    } catch (a) {}
    c.dvd = "dvd-blu-ray",
    c.kitap = "kitap-dergi",
    c["yiyecek-icecek"] = "supermarket",
    c["diger-hersey"] = "diger-her-sey",
    c.koleksiyon = "koleksiyon",
    c.garaj = "otomobil-motor-aksesuar",
    c.elektronik = "elektronik",
    c.antika = "antika-sanat",
    c.muzik = "muzik-plak-enstruman",
    c.oyuncak = "oyuncak",
    c.bebek = "bebek-anne",
    c["video-oyun"] = "video-oyun-konsol",
    c.spor = "spor-outdoor",
    c["cep-telefonu"] = "cep-telefonu-ve-aksesuar",
    c["mucevher-saat"] = "taki-saat",
    c["fotograf-kamera"] = "fotograf-kamera",
    c.saglik = "saglik",
    c.kozmetik = "kozmetik-kisisel-bakim",
    c.bilgisayar = "bilgisayar-tablet",
    c["ev-elektronigi"] = "ev-elektronigi",
    c.dekorasyon = "ev-bahce",
    c.giyim = "giyim-aksesuar",
    c.emlak = "emlak",
    c["evcil-hayvan"] = "evcil-hayvan",
    c["ofis-kirtasiye"] = "ofis-kirtasiye",
    c["yapi-tamirat"] = "yapi-market-tamirat",
    c["ses-goruntu"] = "ses-goruntu";
    var e;
    b = b.replace(/%/gi, "%25"),
    b = b.replace(/&/gi, "%26");
    for (i in c)
        if (i == a) {
            e = c[i];
            break
        }
    var f = !1;
    $GG(".tabContent .ggCadde").length > 0 && (f = !0);
    var g = $GG("#main-route").val() + "/" || "http://www.gittigidiyor.com/"
      , h = g;
    if ("Cadde" != a)
        if (f)
            if ($GG(".tabContent .ggCadde").hasClass("selected") && "" == a)
                h = "Ne+aramıştınız?" != b && "" != b ? d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b : g + "cadde";
            else {
                if ("Ne+aramıştınız?" == (b = b.replace(/ /g, "+")))
                    return a.length > 1 ? (a && b ? h = g + e : a && (h = g + e),
                    !1) : (h = g,
                    !1);
                a.length > 1 ? a && b ? h = g + e + "?k=" + b : a ? h = g + e : b && (h = d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b) : 1 == a.length ? a && b ? h = g + e + "?k=" + b : a ? h = g + e : b && (h = d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b) : h = b ? d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b : g + d
            }
        else
            b = b.replace(/ /g, "+"),
            "Ne+aramıştınız?" == b && (a.length > 1 ? a && b ? h = g + e : a && (h = g + e) : h = g),
            a.length > 1 ? a && b ? h = g + e + "?k=" + b : a ? h = g + e : b && (h = g + d + e + "?k=" + b) : 1 == a.length ? a && b ? h = g + e + "?k=" + b : a ? h = g + e : b && (h = d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b) : h = b ? d.indexOf("?k") > -1 ? g + d : g + d + "?k=" + b : g + d + "/";
    else
        h = "Ne+aramıştınız?" != b && "" != b ? g + "cadde/arama/" + b : g + "cadde";
    executeSearchProp(b),
    window.location.assign(h)
}
function executeSearchProp(a) {
    try {
        var b = s_gi("ebaytkprod");
        document.location.href.indexOf("atolye") > 0 ? (b.linkTrackVars = "prop62,prop63",
        b.prop62 = a,
        b.prop63 = a) : (b.linkTrackVars = "prop62",
        b.prop62 = a),
        b.tl(this, "o", "Search Box:Internal Search")
    } catch (a) {}
}
function openCategory(a, b) {
    document.getElementById(a).style.display = 0 == b ? "block" : "none"
}
function getKeyNum(a) {
    var b;
    return null != a.charCode && 0 != a.charCode ? b = a.charCode : null != a.keyCode && 0 != a.keyCode ? b = a.keyCode : null != a.which && 0 != a.which && (b = a.which),
    b
}
function catSearch() {
    try {
        _ggAutoComplete = $GG("#search_word").ggAutoComplete({
            source: "/arama/auto-complete?k",
            width: "",
            deferRequest: 250,
            selectedCssClass: "selectedText",
            mainCssClass: "mainContent",
            isAutoComplete: !1,
            maxRow: 10,
            content: '<div class="ui-menu-item" role="menuitem"><a class="ui-corner-all" targetData="label" ></a></div>',
            caddeContent: '<div class="store-header">Cadde:</div><div class="private-store-list ui-menu-item" role="menuitem"><a class="cadde-perma-link"><div class="clearfix private-store-slug"><div class="gg-w-6 gg-d-9 gg-t-24 gg-m-24 store-img"><img /></div><div class="gg-w-18 gg-d-15 gg-t-24 pr0 store-txt"><h4 class="mt15"><strong targetData="label" class="cadda-name"></strong></h4><span>Cadde Resmi Mağazası</span><strong class="store-prducts-link">Mağazaya Git</strong></div></div></a></div>',
            emptyDataContent: "",
            fullContextSearch: !0,
            isCaseSensitive: !0,
            disableRemove: !1,
            characterReq: 2,
            mainTargetData: "label",
            targetButtonId: "header_find_button"
        })
    } catch (a) {}
    try {
        _ggAutoCompleteMobile = $GG(".mobileSearchInpt").ggAutoComplete({
            source: "/arama/auto-complete?k",
            width: "",
            deferRequest: 250,
            selectedCssClass: "selectedText",
            mainCssClass: "mainContent",
            isAutoComplete: !1,
            maxRow: 10,
            content: '<div class="ui-menu-item" role="menuitem"><a class="ui-corner-all" targetData="label" ></a></div>',
            caddeContent: '<div class="store-header">Cadde:</div><div class="private-store-list ui-menu-item" role="menuitem"><a class="cadde-perma-link"><div class="clearfix private-store-slug"><div class="gg-w-6 gg-d-9 gg-t-24 gg-m-24 store-img"><img /></div><div class="gg-w-18 gg-d-15 gg-t-24 pr0 store-txt"><h4 class="mt15"><strong targetData="label" class="cadda-name"></strong></h4><span>Cadde Resmi Mağazası</span><strong class="store-prducts-link">Mağazaya Git</strong></div></div></a></div>',
            emptyDataContent: "",
            fullContextSearch: !0,
            isCaseSensitive: !0,
            disableRemove: !1,
            characterReq: 2,
            mainTargetData: "label",
            targetButtonId: "header-mobile-search-find"
        })
    } catch (a) {}
}
function trackScode(a, b, c) {
    var d = s_gi("ebaytkprod");
    d.linkTrackVars = "prop17,eVar24",
    "" == c ? (d.prop17 = a + ":" + b,
    d.eVar24 = a + ":" + b) : (d.prop17 = a + ":" + b + ":" + c,
    d.eVar24 = a + ":" + b + ":" + c),
    d.tl(this, "o", a)
}
function setImgOnErr(a) {
    $GG("img").on("error", function(b, c) {
        var d = jQuery(this);
        replaceImgUrls(a, d)
    }),
    $GG("img").one("load", function() {
        var b = jQuery(this);
        this.naturalWidth = this.naturalWidth || -1,
        -1 !== this.naturalWidth && (this.complete && void 0 !== this.naturalWidth && 0 != this.naturalWidth || b[0].src.indexOf(".svg") < 0 && replaceImgUrls(a, b))
    }).each(function() {
        this.complete && $GG(this).load()
    })
}
function replaceImgUrls(a, b) {
    try {
        var c = b.attr("src").indexOf("_tn7_")
          , d = b.attr("src").indexOf("_tn9_")
          , e = b.attr("src").indexOf("_tn24_")
          , f = b.attr("src").indexOf("_tn30_")
          , g = b.attr("src").indexOf("_tn50_");
        if (b.attr("data-error"))
            return void b.attr("src", b.attr("data-error"));
        a.indexOf("spacer") > 0 ? b.attr("src", a) : e > -1 ? b.attr("src", a + "default_tn_24.jpg") : g > -1 ? b.attr("src", a + "default_tn_50.jpg") : d > -1 ? b.attr("src", a + "default_tn_9.jpg") : c > -1 ? b.attr("src", a + "default_tn_7.jpg") : f > -1 ? b.attr("src", a + "default_tn_30.jpg") : b.attr("src", a + "default_tn_7.jpg")
    } catch (a) {}
}
var GG = function() {
    return this.setInstances = function() {
        this.controller = new GG.LayoutController,
        this.pageType = this.controller.PageTypeController(),
        this.browserType = this.controller.BrowserTypeController(),
        this.controller.events = new this.controller.EventController,
        this.communication = new GG.Communication,
        this.components = new GG.Components,
        this.widgets = new GG.Widgets,
        this.utilities = GG.Utilities,
        this.static = GG.Static,
        this.externalController = GG.ExternalController
    }
    ,
    this.init = function() {
        this.EnvironmentCheckState(),
        this.utilities.hasMediaQuerySupport && this.controller.ResponsiveController()
    }
    ,
    this
};
!function(a, b) {
    function c(a) {
        var b = oa[a] = {};
        return $.each(a.split(ba), function(a, c) {
            b[c] = !0
        }),
        b
    }
    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qa, "-$1").toLowerCase();
            if ("string" == typeof (d = a.getAttribute(e))) {
                try {
                    d = "true" === d || "false" !== d && ("null" === d ? null : +d + "" === d ? +d : pa.test(d) ? $.parseJSON(d) : d)
                } catch (a) {}
                $.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function e(a) {
        var b;
        for (b in a)
            if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function f() {
        return !1
    }
    function g() {
        return !0
    }
    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function i(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);return a
    }
    function j(a, b, c) {
        if (b = b || 0,
        $.isFunction(b))
            return $.grep(a, function(a, d) {
                return !!b.call(a, d, a) === c
            });
        if (b.nodeType)
            return $.grep(a, function(a, d) {
                return a === b === c
            });
        if ("string" == typeof b) {
            var d = $.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Ka.test(b))
                return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function(a, d) {
            return $.inArray(a, b) >= 0 === c
        })
    }
    function k(a) {
        var b = Na.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length; )
                c.createElement(b.pop());
        return c
    }
    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a), g = $._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; d < e; d++)
                        $.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }
    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        c = b.nodeName.toLowerCase(),
        "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
        $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
        b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text),
        b.removeAttribute($.expando))
    }
    function o(a) {
        return void 0 !== a.getElementsByTagName ? a.getElementsByTagName("*") : void 0 !== a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function p(a) {
        Xa.test(a.type) && (a.defaultChecked = a.checked)
    }
    function q(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--; )
            if ((b = rb[e] + c)in a)
                return b;
        return d
    }
    function r(a, b) {
        return a = b || a,
        "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }
    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            c = a[f],
            c.style && (e[f] = $._data(c, "olddisplay"),
            b ? (!e[f] && "none" === c.style.display && (c.style.display = ""),
            "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"),
            !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
        for (f = 0; f < g; f++)
            c = a[f],
            c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }
    function t(a, b, c) {
        var d = kb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; e < 4; e += 2)
            "margin" === c && (f += $.css(a, c + qb[e], !0)),
            d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0),
            "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0,
            "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
        return f
    }
    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight
          , e = !0
          , f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (d <= 0 || null == d) {
            if (d = cb(a, b),
            (d < 0 || null == d) && (d = a.style[b]),
            lb.test(d))
                return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function w(a) {
        if (nb[a])
            return nb[a];
        var b = $("<" + a + ">").appendTo(P.body)
          , c = b.css("display");
        return b.remove(),
        "none" !== c && "" !== c || (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document,
        eb.write("<!doctype html><html><body>"),
        eb.close()),
        b = eb.body.appendChild(eb.createElement(a)),
        c = cb(b, "display"),
        P.body.removeChild(db)),
        nb[a] = c,
        c
    }
    function x(a, b, c, d) {
        var e;
        if ($.isArray(b))
            $.each(b, function(b, e) {
                c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== $.type(b))
            d(a, b);
        else
            for (e in b)
                x(a + "[" + e + "]", b[e], c, d)
    }
    function y(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e, f, g = b.toLowerCase().split(ba), h = 0, i = g.length;
            if ($.isFunction(c))
                for (; h < i; h++)
                    d = g[h],
                    f = /^\+/.test(d),
                    f && (d = d.substr(1) || "*"),
                    e = a[d] = a[d] || [],
                    e[f ? "unshift" : "push"](c)
        }
    }
    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kb; j < k && (l || !h); j++)
            "string" == typeof (h = i[j](c, d, e)) && (!l || g[h] ? h = b : (c.dataTypes.unshift(h),
            h = z(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)),
        h
    }
    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }
    function B(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)
            f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0]; )
            j.shift(),
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0]in d)
            g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g)
            return g !== j[0] && j.unshift(g),
            d[g]
    }
    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        g[1])
            for (c in a.converters)
                i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j]; )
            if ("*" !== e) {
                if ("*" !== h && h !== e) {
                    if (!(c = i[h + " " + e] || i["* " + e]))
                        for (d in i)
                            if (f = d.split(" "),
                            f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                                !0 === c ? c = i[d] : !0 !== i[d] && (e = f[0],
                                g.splice(j--, 0, e));
                                break
                            }
                    if (!0 !== c)
                        if (c && a.throws)
                            b = c(b);
                        else
                            try {
                                b = c(b)
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: c ? a : "No conversion from " + h + " to " + e
                                }
                            }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }
    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }
    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }
    function F() {
        return setTimeout(function() {
            Ub = b
        }, 0),
        Ub = $.now()
    }
    function G(a, b) {
        $.each(b, function(b, c) {
            for (var d = ($b[b] || []).concat($b["*"]), e = 0, f = d.length; e < f; e++)
                if (d[e].call(a, b, c))
                    return
        })
    }
    function H(a, b, c) {
        var d, e = 0, f = Zb.length, g = $.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            for (var b = Ub || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; f < h; f++)
                i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]),
            e < 1 && h ? c : (g.resolveWith(a, [i]),
            !1)
        }, i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ub || F(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c, d) {
                var e = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(e),
                e
            },
            stop: function(b) {
                for (var c = 0, d = b ? i.tweens.length : 0; c < d; c++)
                    i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]),
                this
            }
        }), j = i.props;
        for (I(j, i.opts.specialEasing); e < f; e++)
            if (d = Zb[e].call(i, a, j, i.opts))
                return d;
        return G(i, j),
        $.isFunction(i.opts.start) && i.opts.start.call(a, i),
        $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })),
        i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }
    function I(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = $.camelCase(c),
            e = b[d],
            f = a[c],
            $.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = $.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && r(a);
        c.queue || (k = $._queueHooks(a, "fx"),
        null == k.unqueued && (k.unqueued = 0,
        l = k.empty.fire,
        k.empty.fire = function() {
            k.unqueued || l()
        }
        ),
        k.unqueued++,
        m.always(function() {
            m.always(function() {
                k.unqueued--,
                $.queue(a, "fx").length || k.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY],
        "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden",
        $.support.shrinkWrapBlocks || m.done(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (f = b[d],
            Wb.exec(f)) {
                if (delete b[d],
                i = i || "toggle" === f,
                f === (q ? "hide" : "show"))
                    continue;
                p.push(d)
            }
        if (g = p.length) {
            h = $._data(a, "fxshow") || $._data(a, "fxshow", {}),
            "hidden"in h && (q = h.hidden),
            i && (h.hidden = !q),
            q ? $(a).show() : m.done(function() {
                $(a).hide()
            }),
            m.done(function() {
                var b;
                $.removeData(a, "fxshow", !0);
                for (b in o)
                    $.style(a, b, o[b])
            });
            for (d = 0; d < g; d++)
                e = p[d],
                j = m.createTween(e, q ? h[e] : 0),
                o[e] = h[e] || $.style(a, e),
                e in h || (h[e] = j.start,
                q && (j.end = j.start,
                j.start = "width" === e || "height" === e ? 1 : 0))
        }
    }
    function K(a, b, c, d, e) {
        return new K.prototype.init(a,b,c,d,e)
    }
    function L(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b)
            c = qb[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var N, O, P = a.document, Q = a.location, R = a.navigator, S = a.jQuery, T = a.$, U = Array.prototype.push, V = Array.prototype.slice, W = Array.prototype.indexOf, X = Object.prototype.toString, Y = Object.prototype.hasOwnProperty, Z = String.prototype.trim, $ = function(a, b) {
        return new $.fn.init(a,b,N)
    }, _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, aa = /\S/, ba = /\s+/, ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fa = /^[\],:{}\s]*$/, ga = /(?:^|:|,)(?:\s*\[)+/g, ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ja = /^-ms-/, ka = /-([\da-z])/gi, la = function(a, b) {
        return (b + "").toUpperCase()
    }, ma = function() {
        P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1),
        $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma),
        $.ready())
    }, na = {};
    $.fn = $.prototype = {
        constructor: $,
        init: function(a, c, d) {
            var e, f, g;
            if (!a)
                return this;
            if (a.nodeType)
                return this.context = this[0] = a,
                this.length = 1,
                this;
            if ("string" == typeof a) {
                if ((e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a)) && (e[1] || !c)) {
                    if (e[1])
                        return c = c instanceof $ ? c[0] : c,
                        g = c && c.nodeType ? c.ownerDocument || c : P,
                        a = $.parseHTML(e[1], g, !0),
                        ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0),
                        $.merge(this, a);
                    if ((f = P.getElementById(e[2])) && f.parentNode) {
                        if (f.id !== e[2])
                            return d.find(a);
                        this.length = 1,
                        this[0] = f
                    }
                    return this.context = P,
                    this.selector = a,
                    this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector,
            this.context = a.context),
            $.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return V.call(this)
        },
        get: function(a) {
            return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this,
            d.context = this.context,
            "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
            d
        },
        each: function(a, b) {
            return $.each(this, a, b)
        },
        ready: function(a) {
            return $.ready.promise().done(a),
            this
        },
        eq: function(a) {
            return a = +a,
            -1 === a ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack($.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    },
    $.fn.init.prototype = $.fn,
    $.extend = $.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h,
        h = arguments[1] || {},
        i = 2),
        "object" != typeof h && !$.isFunction(h) && (h = {}),
        j === i && (h = this,
        --i); i < j; i++)
            if (null != (a = arguments[i]))
                for (c in a)
                    d = h[c],
                    e = a[c],
                    h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1,
                    g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {},
                    h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }
    ,
    $.extend({
        noConflict: function(b) {
            return a.$ === $ && (a.$ = T),
            b && a.jQuery === $ && (a.jQuery = S),
            $
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? $.readyWait++ : $.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--$.readyWait : !$.isReady) {
                if (!P.body)
                    return setTimeout($.ready, 1);
                $.isReady = !0,
                !0 !== a && --$.readyWait > 0 || (O.resolveWith(P, [$]),
                $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        },
        isFunction: function(a) {
            return "function" === $.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === $.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return null == a ? String(a) : na[X.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))
                return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (a) {
                return !1
            }
            var c;
            for (c in a)
                ;
            return c === b || Y.call(a, c)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b,
            b = 0),
            b = b || P,
            (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []),
            $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
        },
        parseJSON: function(b) {
            return b && "string" == typeof b ? (b = $.trim(b),
            a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c)
                return null;
            try {
                a.DOMParser ? (e = new DOMParser,
                d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                d.async = "false",
                d.loadXML(c))
            } catch (a) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && aa.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(ja, "ms-").replace(ka, la)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0, g = a.length, h = g === b || $.isFunction(a);
            if (d)
                if (h) {
                    for (e in a)
                        if (!1 === c.apply(a[e], d))
                            break
                } else
                    for (; f < g && !1 !== c.apply(a[f++], d); )
                        ;
            else if (h) {
                for (e in a)
                    if (!1 === c.call(a[e], e, a[e]))
                        break
            } else
                for (; f < g && !1 !== c.call(a[f], f, a[f++]); )
                    ;
            return a
        },
        trim: Z && !Z.call("\ufeff ") ? function(a) {
            return null == a ? "" : Z.call(a)
        }
        : function(a) {
            return null == a ? "" : (a + "").replace(ca, "")
        }
        ,
        makeArray: function(a, b) {
            var c, d = b || [];
            return null != a && (c = $.type(a),
            null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (W)
                    return W.call(b, a, c);
                for (d = b.length,
                c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length
              , e = a.length
              , f = 0;
            if ("number" == typeof d)
                for (; f < d; f++)
                    a[e++] = c[f];
            else
                for (; c[f] !== b; )
                    a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; f < g; f++)
                d = !!b(a[f], f),
                c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [], h = 0, i = a.length;
            if (a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a)))
                for (; h < i; h++)
                    null != (e = c(a[h], h, d)) && (g[g.length] = e);
            else
                for (f in a)
                    null != (e = c(a[f], f, d)) && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c],
            c = a,
            a = d),
            $.isFunction(a) ? (e = V.call(arguments, 2),
            f = function() {
                return a.apply(c, e.concat(V.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || $.guid++,
            f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = null == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)
                    $.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && $.isFunction(e),
                j && (i ? (i = c,
                c = function(a, b, c) {
                    return i.call($(a), c)
                }
                ) : (c.call(a, e),
                c = null)),
                c)
                    for (; k < l; k++)
                        c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    $.ready.promise = function(b) {
        if (!O)
            if (O = $.Deferred(),
            "complete" === P.readyState)
                setTimeout($.ready, 1);
            else if (P.addEventListener)
                P.addEventListener("DOMContentLoaded", ma, !1),
                a.addEventListener("load", $.ready, !1);
            else {
                P.attachEvent("onreadystatechange", ma),
                a.attachEvent("onload", $.ready);
                var c = !1;
                try {
                    c = null == a.frameElement && P.documentElement
                } catch (a) {}
                c && c.doScroll && function a() {
                    if (!$.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return setTimeout(a, 50)
                        }
                        $.ready()
                    }
                }()
            }
        return O.promise(b)
    }
    ,
    $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        na["[object " + b + "]"] = b.toLowerCase()
    }),
    N = $(P);
    var oa = {};
    $.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (d = a.memory && b,
            e = !0,
            i = g || 0,
            g = 0,
            h = j.length,
            f = !0; j && i < h; i++)
                if (!1 === j[i].apply(b[0], b[1]) && a.stopOnFalse) {
                    d = !1;
                    break
                }
            f = !1,
            j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    (function b(c) {
                        $.each(c, function(c, d) {
                            var e = $.type(d);
                            "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && b(d)
                        })
                    }
                    )(arguments),
                    f ? h = j.length : d && (g = b,
                    l(d))
                }
                return this
            },
            remove: function() {
                return j && $.each(arguments, function(a, b) {
                    for (var c; (c = $.inArray(b, j, c)) > -1; )
                        j.splice(c, 1),
                        f && (c <= h && h--,
                        c <= i && i--)
                }),
                this
            },
            has: function(a) {
                return $.inArray(a, j) > -1
            },
            empty: function() {
                return j = [],
                this
            },
            disable: function() {
                return j = k = d = b,
                this
            },
            disabled: function() {
                return !j
            },
            lock: function() {
                return k = b,
                d || m.disable(),
                this
            },
            locked: function() {
                return !k
            },
            fireWith: function(a, b) {
                return b = b || [],
                b = [a, b.slice ? b.slice() : b],
                j && (!e || k) && (f ? k.push(b) : l(b)),
                this
            },
            fire: function() {
                return m.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!e
            }
        };
        return m
    }
    ,
    $.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return $.Deferred(function(c) {
                        $.each(b, function(b, d) {
                            var f = d[0]
                              , g = a[b];
                            e[d[1]]($.isFunction(g) ? function() {
                                var a = g.apply(this, arguments);
                                a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            }
                            : c[f])
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? $.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            $.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = g.fire,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0, f = V.call(arguments), g = f.length, h = 1 !== g || a && $.isFunction(a.promise) ? g : 0, i = 1 === h ? a : $.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? V.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = new Array(g),
                c = new Array(g),
                d = new Array(g); e < g; e++)
                    f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    }),
    $.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        if (m.setAttribute("className", "t"),
        m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        c = m.getElementsByTagName("*"),
        d = m.getElementsByTagName("a")[0],
        !c || !d || !c.length)
            return {};
        e = P.createElement("select"),
        f = e.appendChild(P.createElement("option")),
        g = m.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5",
        b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        g.checked = !0,
        b.noCloneChecked = g.cloneNode(!0).checked,
        e.disabled = !0,
        b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (a) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
            b.noCloneEvent = !1
        }
        ),
        m.cloneNode(!0).fireEvent("onclick"),
        m.detachEvent("onclick", l)),
        g = P.createElement("input"),
        g.value = "t",
        g.setAttribute("type", "radio"),
        b.radioValue = "t" === g.value,
        g.setAttribute("checked", "checked"),
        g.setAttribute("name", "t"),
        m.appendChild(g),
        h = P.createDocumentFragment(),
        h.appendChild(m.lastChild),
        b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = g.checked,
        h.removeChild(g),
        h.appendChild(m),
        m.attachEvent)
            for (j in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                i = "on" + j,
                k = i in m,
                k || (m.setAttribute(i, "return;"),
                k = "function" == typeof m[i]),
                b[j + "Bubbles"] = k;
        return $(function() {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;", h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"),
            c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            h.insertBefore(c, h.firstChild),
            d = P.createElement("div"),
            c.appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            e = d.getElementsByTagName("td"),
            e[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            k = 0 === e[0].offsetHeight,
            e[0].style.display = "",
            e[1].style.display = "none",
            b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            b.boxSizing = 4 === d.offsetWidth,
            b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop,
            a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top,
            b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {
                width: "4px"
            }).width,
            f = P.createElement("div"),
            f.style.cssText = d.style.cssText = g,
            f.style.marginRight = f.style.width = "0",
            d.style.width = "1px",
            d.appendChild(f),
            b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)),
            void 0 !== d.style.zoom && (d.innerHTML = "",
            d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1",
            b.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.style.overflow = "visible",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            b.shrinkWrapBlocks = 3 !== d.offsetWidth,
            c.style.zoom = 1),
            h.removeChild(c),
            c = d = e = f = null)
        }),
        h.removeChild(m),
        c = d = e = f = g = h = m = null,
        b
    }();
    var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , qa = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return !!(a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando]) && !e(a)
        },
        data: function(a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando, i = "string" == typeof c, j = a.nodeType, k = j ? $.cache : a, l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b)
                    return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h),
                    k[l] || (k[l] = {},
                    j || (k[l].toJSON = $.noop)),
                    "object" != typeof c && "function" != typeof c || (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)),
                    f = k[l],
                    e || (f.data || (f.data = {}),
                    f = f.data),
                    d !== b && (f[$.camelCase(c)] = d),
                    i ? null == (g = f[c]) && (g = f[$.camelCase(c)]) : g = f,
                    g
            }
        },
        removeData: function(a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? $.cache : a, j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b),
                        b = b in d ? [b] : b.split(" ")));
                        for (f = 0,
                        g = b.length; f < g; f++)
                            delete d[b[f]];
                        if (!(c ? e : $.isEmptyObject)(d))
                            return
                    }
                    (c || (delete i[j].data,
                    e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function(a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || !0 !== b && a.getAttribute("classid") === b
        }
    }),
    $.fn.extend({
        data: function(a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length && (l = $.data(j),
                1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                    for (g = j.attributes,
                    i = g.length; k < i; k++)
                        h = g[k].name,
                        h.indexOf("data-") || (h = $.camelCase(h.substring(5)),
                        d(j, h, l[h]));
                    $._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() {
                $.data(this, a)
            }) : (e = a.split(".", 2),
            e[1] = e[1] ? "." + e[1] : "",
            f = e[1] + "!",
            $.access(this, function(c) {
                if (c === b)
                    return l = this.triggerHandler("getData" + f, [e[0]]),
                    l === b && j && (l = $.data(j, a),
                    l = d(j, a, l)),
                    l === b && e[1] ? this.data(e[0]) : l;
                e[1] = c,
                this.each(function() {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e),
                    $.data(this, a, c),
                    b.triggerHandler("changeData" + f, e)
                })
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                $.removeData(this, a)
            })
        }
    }),
    $.extend({
        queue: function(a, b, c) {
            var d;
            if (a)
                return b = (b || "fx") + "queue",
                d = $._data(a, b),
                c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)),
                d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = $.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = $._queueHooks(a, b)
              , g = function() {
                $.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                empty: $.Callbacks("once memory").add(function() {
                    $.removeData(a, b + "queue", !0),
                    $.removeData(a, c, !0)
                })
            })
        }
    }),
    $.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a,
            a = "fx",
            d--),
            arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                $.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1, f = $.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a,
            a = b),
            a = a || "fx"; h--; )
                (d = $._data(g[h], a + "queueHooks")) && d.empty && (e++,
                d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var ra, sa, ta, ua = /[\t\r\n]/g, va = /\r/g, wa = /^(?:button|input)$/i, xa = /^(?:button|input|object|select|textarea)$/i, ya = /^a(?:rea|)$/i, za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Aa = $.support.getSetAttribute;
    $.fn.extend({
        attr: function(a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                $.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = $.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (a) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).addClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a)
                for (b = a.split(ba),
                c = 0,
                d = this.length; c < d; c++)
                    if (e = this[c],
                    1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ",
                            g = 0,
                            h = b.length; g < h; g++)
                                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = $.trim(f)
                        } else
                            e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).removeClass(a.call(this, b, this.className))
                });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(ba),
                h = 0,
                i = this.length; h < i; h++)
                    if (e = this[h],
                    1 === e.nodeType && e.className) {
                        for (d = (" " + e.className + " ").replace(ua, " "),
                        f = 0,
                        g = c.length; f < g; f++)
                            for (; d.indexOf(" " + c[f] + " ") >= 0; )
                                d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? $.trim(d) : ""
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a
              , d = "boolean" == typeof b;
            return $.isFunction(a) ? this.each(function(c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = $(this), h = b, i = a.split(ba); e = i[f++]; )
                        h = d ? h : !g.hasClass(e),
                        g[h ? "addClass" : "removeClass"](e);
                else
                    "undefined" !== c && "boolean" !== c || (this.className && $._data(this, "__className__", this.className),
                    this.className = this.className || !1 === a ? "" : $._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)
                    return e = $.isFunction(a),
                    this.each(function(d) {
                        var f, g = $(this);
                        1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a,
                        null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()],
                        c && "set"in c && c.set(this, f, "value") !== b || (this.value = f))
                    });
                if (f)
                    return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()],
                    c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value,
                    "string" == typeof d ? d.replace(va, "") : null == d ? "" : d)
            }
        }
    }),
    $.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i],
                        (c.selected || i === e) && ($.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
                            if (b = $(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function() {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i)
                return e && $.isFunction($.fn[c]) ? $(a)[c](d) : void 0 === a.getAttribute ? $.prop(a, c, d) : ((h = 1 !== i || !$.isXMLDoc(a)) && (c = c.toLowerCase(),
                g = $.attrHooks[c] || (za.test(c) ? sa : ra)),
                d !== b ? null === d ? void $.removeAttr(a, c) : g && "set"in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""),
                d) : g && "get"in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c),
                null === f ? b : f))
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.split(ba); g < d.length; g++)
                    (e = d[g]) && (c = $.propFix[e] || e,
                    f = za.test(e),
                    f || $.attr(a, e, ""),
                    a.removeAttribute(Aa ? e : c),
                    f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (wa.test(a.nodeName) && a.parentNode)
                        $.error("type property can't be changed");
                    else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (ra && $.nodeName(a, "button"))
                        return ra.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)
                return g = 1 !== h || !$.isXMLDoc(a),
                g && (c = $.propFix[c] || c,
                f = $.propHooks[c]),
                d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    sa = {
        get: function(a, c) {
            var d, e = $.prop(a, c);
            return !0 === e || "boolean" != typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return !1 === b ? $.removeAttr(a, c) : (d = $.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    Aa || (ta = {
        name: !0,
        id: !0,
        coords: !0
    },
    ra = $.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c),
            a.setAttributeNode(d)),
            d.value = b + ""
        }
    },
    $.each(["width", "height"], function(a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function(a, c) {
                if ("" === c)
                    return a.setAttribute(b, "auto"),
                    c
            }
        })
    }),
    $.attrHooks.contenteditable = {
        get: ra.get,
        set: function(a, b, c) {
            "" === b && (b = "false"),
            ra.set(a, b, c)
        }
    }),
    $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }),
    $.support.style || ($.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    })),
    $.support.enctype || ($.propFix.enctype = "encoding"),
    $.support.checkOn || $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }),
    $.each(["radio", "checkbox"], function() {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function(a, b) {
                if ($.isArray(b))
                    return a.checked = $.inArray($(a).val(), b) >= 0
            }
        })
    });
    var Ba = /^(?:textarea|input|select)$/i
      , Ca = /^([^\.]*|)(?:\.(.+)|)$/
      , Da = /(?:^|\s)hover(\.\S+|)\b/
      , Ea = /^key/
      , Fa = /^(?:mouse|contextmenu)|click/
      , Ga = /^(?:focusinfocus|focusoutblur)$/
      , Ha = function(a) {
        return $.event.special.hover ? a : a.replace(Da, "mouseenter$1 mouseleave$1")
    };
    $.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                for (d.handler && (o = d,
                d = o.handler,
                f = o.selector),
                d.guid || (d.guid = $.guid++),
                i = g.events,
                i || (g.events = i = {}),
                h = g.handle,
                h || (g.handle = h = function(a) {
                    return void 0 === $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                }
                ,
                h.elem = a),
                c = $.trim(Ha(c)).split(" "),
                j = 0; j < c.length; j++)
                    k = Ca.exec(c[j]) || [],
                    l = k[1],
                    m = (k[2] || "").split(".").sort(),
                    q = $.event.special[l] || {},
                    l = (f ? q.delegateType : q.bindType) || l,
                    q = $.event.special[l] || {},
                    n = $.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && $.expr.match.needsContext.test(f),
                        namespace: m.join(".")
                    }, o),
                    p = i[l],
                    p || (p = i[l] = [],
                    p.delegateCount = 0,
                    q.setup && !1 !== q.setup.call(a, e, m, h) || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                    q.add && (q.add.call(a, n),
                    n.handler.guid || (n.handler.guid = d.guid)),
                    f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                    $.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
            if (q && (m = q.events)) {
                for (b = $.trim(Ha(b || "")).split(" "),
                f = 0; f < b.length; f++)
                    if (g = Ca.exec(b[f]) || [],
                    h = i = g[1],
                    j = g[2],
                    h) {
                        for (n = $.event.special[h] || {},
                        h = (d ? n.delegateType : n.bindType) || h,
                        o = m[h] || [],
                        k = o.length,
                        j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        l = 0; l < o.length; l++)
                            p = o[l],
                            (e || i === p.origType) && (!c || c.guid === p.guid) && (!j || j.test(p.namespace)) && (!d || d === p.selector || "**" === d && p.selector) && (o.splice(l--, 1),
                            p.selector && o.delegateCount--,
                            n.remove && n.remove.call(a, p));
                        0 === o.length && k !== o.length && ((!n.teardown || !1 === n.teardown.call(a, j, q.handle)) && $.removeEvent(a, h, q.handle),
                        delete m[h])
                    } else
                        for (h in m)
                            $.event.remove(a, h + b[f], c, d, !0);
                $.isEmptyObject(m) && (delete q.handle,
                $.removeData(a, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (Ga.test(q + $.event.triggered))
                    return;
                if (q.indexOf("!") >= 0 && (q = q.slice(0, -1),
                h = !0),
                q.indexOf(".") >= 0 && (r = q.split("."),
                q = r.shift(),
                r.sort()),
                (!e || $.event.customEvent[q]) && !$.event.global[q])
                    return;
                if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q,c) : new $.Event(q),
                c.type = q,
                c.isTrigger = !0,
                c.exclusive = h,
                c.namespace = r.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                l = q.indexOf(":") < 0 ? "on" + q : "",
                !e) {
                    g = $.cache;
                    for (i in g)
                        g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                if (c.result = b,
                c.target || (c.target = e),
                d = null != d ? $.makeArray(d) : [],
                d.unshift(c),
                m = $.event.special[q] || {},
                m.trigger && !1 === m.trigger.apply(e, d))
                    return;
                if (o = [[e, m.bindType || q]],
                !f && !m.noBubble && !$.isWindow(e)) {
                    for (p = m.delegateType || q,
                    j = Ga.test(p + q) ? e : e.parentNode,
                    k = e; j; j = j.parentNode)
                        o.push([j, p]),
                        k = j;
                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && !c.isPropagationStopped(); i++)
                    j = o[i][0],
                    c.type = o[i][1],
                    n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"),
                    n && n.apply(j, d),
                    (n = l && j[l]) && $.acceptData(j) && n.apply && !1 === n.apply(j, d) && c.preventDefault();
                return c.type = q,
                !f && !c.isDefaultPrevented() && (!m._default || !1 === m._default.apply(e.ownerDocument, d)) && ("click" !== q || !$.nodeName(e, "a")) && $.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !$.isWindow(e) && (k = e[l],
                k && (e[l] = null),
                $.event.triggered = q,
                e[q](),
                $.event.triggered = b,
                k && (e[l] = k)),
                c.result
            }
        },
        dispatch: function(c) {
            c = $.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [], n = m.delegateCount, o = V.call(arguments), p = !c.exclusive && !c.namespace, q = $.event.special[c.type] || {}, r = [];
            if (o[0] = c,
            c.delegateTarget = this,
            !q.preDispatch || !1 !== q.preDispatch.call(this, c)) {
                if (n && (!c.button || "click" !== c.type))
                    for (f = c.target; f != this; f = f.parentNode || this)
                        if (!0 !== f.disabled || "click" !== c.type) {
                            for (h = {},
                            j = [],
                            d = 0; d < n; d++)
                                k = m[d],
                                l = k.selector,
                                h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length),
                                h[l] && j.push(k);
                            j.length && r.push({
                                elem: f,
                                matches: j
                            })
                        }
                for (m.length > n && r.push({
                    elem: this,
                    matches: m.slice(n)
                }),
                d = 0; d < r.length && !c.isPropagationStopped(); d++)
                    for (i = r[d],
                    c.currentTarget = i.elem,
                    e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)
                        k = i.matches[e],
                        (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data,
                        c.handleObj = k,
                        (g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o)) !== b && (c.result = g,
                        !1 === g && (c.preventDefault(),
                        c.stopPropagation())));
                return q.postDispatch && q.postDispatch.call(this, c),
                c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P,
                e = d.documentElement,
                f = d.body,
                a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
                !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[$.expando])
                return a;
            var b, c, d = a, e = $.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            for (a = $.Event(d),
            b = f.length; b; )
                c = f[--b],
                a[c] = d[c];
            return a.target || (a.target = d.srcElement || P),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    $.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = $.extend(new $.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    $.event.handle = $.event.dispatch,
    $.removeEvent = P.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (void 0 === a[d] && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    $.Event = function(a, b) {
        if (!(this instanceof $.Event))
            return new $.Event(a,b);
        a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a,
        b && $.extend(this, b),
        this.timeStamp = a && a.timeStamp || $.now(),
        this[$.expando] = !0
    }
    ,
    $.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g,
            this.stopPropagation()
        },
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f
    },
    $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        $.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                f.selector;
                return e && (e === d || $.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    $.support.submitBubbles || ($.event.special.submit = {
        setup: function() {
            if ($.nodeName(this, "form"))
                return !1;
            $.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target
                  , d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                $._data(d, "_submit_attached", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if ($.nodeName(this, "form"))
                return !1;
            $.event.remove(this, "._submit")
        }
    }),
    $.support.changeBubbles || ($.event.special.change = {
        setup: function() {
            if (Ba.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || ($.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }),
                $.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1),
                    $.event.simulate("change", this, a, !0)
                })),
                !1;
            $.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                }),
                $._data(b, "_change_attached", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return $.event.remove(this, "._change"),
            !Ba.test(this.nodeName)
        }
    }),
    $.support.focusinBubbles || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0
          , d = function(a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        };
        $.event.special[b] = {
            setup: function() {
                0 == c++ && P.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 == --c && P.removeEventListener(a, d, !0)
            }
        }
    }),
    $.fn.extend({
        on: function(a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c,
                c = b);
                for (i in a)
                    this.on(i, c, d, a[i], g);
                return this
            }
            if (null == d && null == e ? (e = c,
            d = c = b) : null == e && ("string" == typeof c ? (e = d,
            d = b) : (e = d,
            d = c,
            c = b)),
            !1 === e)
                e = f;
            else if (!e)
                return this;
            return 1 === g && (h = e,
            e = function(a) {
                return $().off(a),
                h.apply(this, arguments)
            }
            ,
            e.guid = h.guid || (h.guid = $.guid++)),
            this.each(function() {
                $.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)
                return e = a.handleObj,
                $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                this;
            if ("object" == typeof a) {
                for (g in a)
                    this.off(g, c, a[g]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c,
            c = b),
            !1 === d && (d = f),
            this.each(function() {
                $.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            return $(this.context).on(a, this.selector, b, c),
            this
        },
        die: function(a, b) {
            return $(this.context).off(a, this.selector || "**", b),
            this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                $.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0])
                return $.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments
              , c = a.guid || $.guid++
              , d = 0
              , e = function(c) {
                var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                return $._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length; )
                b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        $.fn[b] = function(a, c) {
            return null == c && (c = a,
            a = null),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
        ,
        Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks),
        Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
    }),
    function(a, b) {
        function c(a, b, c, d) {
            c = c || [],
            b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)
                return c;
            if (1 !== i && 9 !== i)
                return [];
            if (!(g = v(b)) && !d && (e = ca.exec(a)))
                if (h = e[1]) {
                    if (9 === i) {
                        if (!(f = b.getElementById(h)) || !f.parentNode)
                            return c;
                        if (f.id === h)
                            return c.push(f),
                            c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)
                        return c.push(f),
                        c
                } else {
                    if (e[2])
                        return K.apply(c, L.call(b.getElementsByTagName(a), 0)),
                        c;
                    if ((h = e[3]) && ma && b.getElementsByClassName)
                        return K.apply(c, L.call(b.getElementsByClassName(h), 0)),
                        c
                }
            return p(a.replace(Z, "$1"), b, c, d, g)
        }
        function d(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }
        function e(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function f(a) {
            return N(function(b) {
                return b = +b,
                N(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function g(a, b, c) {
            if (a === b)
                return c;
            for (var d = a.nextSibling; d; ) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            for (h = a,
            i = [],
            j = t.preFilter; h; ) {
                d && !(e = _.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                d = !1,
                (e = aa.exec(h)) && (f.push(d = new E(e.shift())),
                h = h.slice(d.length),
                d.type = e[0].replace(Z, " "));
                for (g in t.filter)
                    (e = ha[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())),
                    h = h.slice(d.length),
                    d.type = g,
                    d.matches = e);
                if (!d)
                    break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }
        function i(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === b.dir
              , f = I++;
            return b.first ? function(b, c, f) {
                for (; b = b[d]; )
                    if (e || 1 === b.nodeType)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                if (g) {
                    for (; b = b[d]; )
                        if ((e || 1 === b.nodeType) && a(b, c, g))
                            return b
                } else
                    for (var h, i = H + " " + f + " ", j = i + r; b = b[d]; )
                        if (e || 1 === b.nodeType) {
                            if ((h = b[D]) === j)
                                return b.sizset;
                            if ("string" == typeof h && 0 === h.indexOf(i)) {
                                if (b.sizset)
                                    return b
                            } else {
                                if (b[D] = j,
                                a(b, c, g))
                                    return b.sizset = !0,
                                    b;
                                b.sizset = !1
                            }
                        }
            }
        }
        function j(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)),
            e && !e[D] && (e = l(e, f)),
            N(function(f, g, h, i) {
                var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, []), s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                if (c && c(s, t, h, i),
                d)
                    for (j = k(t, p),
                    d(j, [], h, i),
                    l = j.length; l--; )
                        (m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [],
                            l = t.length; l--; )
                                (m = t[l]) && j.push(s[l] = m);
                            e(null, t = [], j, i)
                        }
                        for (l = t.length; l--; )
                            (m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                    }
                } else
                    t = k(t === g ? t.splice(q, t.length) : t),
                    e ? e(null, g, t, i) : K.apply(g, t)
            })
        }
        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function(a) {
                return a === b
            }, g, !0), n = i(function(a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function(a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }
            ]; h < e; h++)
                if (c = t.relative[a[h].type])
                    o = [i(j(o), c)];
                else {
                    if (c = t.filter[a[h].type].apply(null, a[h].matches),
                    c[D]) {
                        for (d = ++h; d < e && !t.relative[a[d].type]; d++)
                            ;
                        return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, h < d && m(a.slice(h, d)), d < e && m(a = a.slice(d)), d < e && a.join(""))
                    }
                    o.push(c)
                }
            return j(o)
        }
        function n(a, b) {
            var d = b.length > 0
              , e = a.length > 0
              , f = function(g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A, x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
                for (v && (A = h !== F && h,
                r = f.el); null != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)
                            if (o(m, h, i)) {
                                j.push(m);
                                break
                            }
                        v && (H = y,
                        r = ++f.el)
                    }
                    d && ((m = !o && m) && q--,
                    g && u.push(m))
                }
                if (q += s,
                d && s !== q) {
                    for (n = 0; o = b[n]; n++)
                        o(u, p, h, i);
                    if (g) {
                        if (q > 0)
                            for (; s--; )
                                !u[s] && !p[s] && (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p),
                    v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y,
                A = w),
                u
            };
            return f.el = 0,
            d ? N(f) : f
        }
        function o(a, b, d) {
            for (var e = 0, f = b.length; e < f; e++)
                c(a, b[e], d);
            return d
        }
        function p(a, b, c, d, e) {
            var f, g, i, j, k, l = h(a);
            l.length;
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0),
                g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    if (!(b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0]))
                        return c;
                    a = a.slice(g.shift().length)
                }
                for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f],
                !t.relative[j = i.type]); f--)
                    if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                        if (g.splice(f, 1),
                        !(a = d.length && g.join("")))
                            return K.apply(c, L.call(d, 0)),
                            c;
                        break
                    }
            }
            return x(a, l)(d, b, e, c, da.test(a)),
            c
        }
        function q() {}
        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""), E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice, M = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , N = function(a, b) {
            return a[D] = null == b || b,
            a
        }, O = function() {
            var a = {}
              , b = [];
            return N(function(c, d) {
                return b.push(c) > t.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }, a)
        }, P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]", T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = T.replace("w", "w#"), V = "([*^$|!~]?=)", W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]", X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)", Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$","g"), _ = new RegExp("^" + S + "*," + S + "*"), aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"), ba = new RegExp(X), ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i, fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
            ID: new RegExp("^#(" + T + ")"),
            CLASS: new RegExp("^\\.(" + T + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
            TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + X),
            POS: new RegExp(Y,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)","i"),
            needsContext: new RegExp("^" + S + "*[>+~]|" + Y,"i")
        }, ia = function(a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (a) {
                return !1
            } finally {
                b = null
            }
        }, ja = ia(function(a) {
            return a.appendChild(F.createComment("")),
            !a.getElementsByTagName("*").length
        }), ka = ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
        }), la = ia(function(a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), ma = ia(function(a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !(!a.getElementsByClassName || !a.getElementsByClassName("e").length) && (a.lastChild.className = "e",
            2 === a.getElementsByClassName("e").length)
        }), na = ia(function(a) {
            a.id = D + 0,
            a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>",
            G.insertBefore(a, G.firstChild);
            var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
            return s = !F.getElementById(D),
            G.removeChild(a),
            b
        });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (a) {
            L = function(a) {
                for (var b, c = []; b = this[a]; a++)
                    c.push(b);
                return c
            }
        }
        c.matches = function(a, b) {
            return c(a, null, null, b)
        }
        ,
        c.matchesSelector = function(a, b) {
            return c(b, null, null, [a]).length > 0
        }
        ,
        u = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += u(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d]; d++)
                    c += u(b);
            return c
        }
        ,
        v = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }
        ,
        w = c.contains = G.contains ? function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a
              , d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        }
        : G.compareDocumentPosition ? function(a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        }
        : function(a, b) {
            for (; b = b.parentNode; )
                if (b === a)
                    return !0;
            return !1
        }
        ,
        c.attr = function(a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()),
            (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b),
            c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
        }
        ,
        t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: ha,
            attrHandle: ka ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function(a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                }
                : function(a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }
                ,
                TAG: ja ? function(a, b) {
                    if (typeof b.getElementsByTagName !== C)
                        return b.getElementsByTagName(a)
                }
                : function(a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)
                            1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }
                ,
                NAME: na && function(a, b) {
                    if (typeof b.getElementsByName !== C)
                        return b.getElementsByName(name)
                }
                ,
                CLASS: ma && function(a, b, c) {
                    if (typeof b.getElementsByClassName !== C && !c)
                        return b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ga, ""),
                    a[3] = (a[4] || a[5] || "").replace(ga, ""),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1] ? (a[2] || c.error(a[0]),
                    a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])),
                    a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c;
                    return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c),
                    a[0] = a[0].slice(0, c)),
                    a[2] = b),
                    a.slice(0, 3))
                }
            },
            filter: {
                ID: s ? function(a) {
                    return a = a.replace(ga, ""),
                    function(b) {
                        return b.getAttribute("id") === a
                    }
                }
                : function(a) {
                    return a = a.replace(ga, ""),
                    function(b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }
                ,
                TAG: function(a) {
                    return "*" === a ? function() {
                        return !0
                    }
                    : (a = a.replace(ga, "").toLowerCase(),
                    function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                    )
                },
                CLASS: function(a) {
                    var b = P[D][a + " "];
                    return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function(a) {
                        return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, d) {
                    return function(e, f) {
                        var g = c.attr(e, a);
                        return null == g ? "!=" === b : !b || (g += "",
                        "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b && (g === d || g.substr(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d) {
                    return "nth" === a ? function(a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)
                            return !0;
                        if (f)
                            for (e = 0,
                            b = f.firstChild; b && (1 !== b.nodeType || (e++,
                            a !== b)); b = b.nextSibling)
                                ;
                        return (e -= d) === c || e % c == 0 && e / c >= 0
                    }
                    : function(b) {
                        var c = b;
                        switch (a) {
                        case "only":
                        case "first":
                            for (; c = c.previousSibling; )
                                if (1 === c.nodeType)
                                    return !1;
                            if ("first" === a)
                                return !0;
                            c = b;
                        case "last":
                            for (; c = c.nextSibling; )
                                if (1 === c.nodeType)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b],
                    t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; )
                            d = M.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, d)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: N(function(a) {
                    var b = []
                      , c = []
                      , d = x(a.replace(Z, "$1"));
                    return d[D] ? N(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: N(function(a) {
                    return function(b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    !0 === a.selected
                },
                parent: function(a) {
                    return !t.pseudos.empty(a)
                },
                empty: function(a) {
                    var b;
                    for (a = a.firstChild; a; ) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)
                            return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function(a) {
                    return ea.test(a.nodeName)
                },
                text: function(a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function(a) {
                    return fa.test(a.nodeName)
                },
                focus: function(a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                active: function(a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function() {
                    return [0]
                }),
                last: f(function(a, b) {
                    return [b - 1]
                }),
                eq: f(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: f(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: f(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: f(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: f(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        y = G.compareDocumentPosition ? function(a, b) {
            return a === b ? (z = !0,
            0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        }
        : function(a, b) {
            if (a === b)
                return z = !0,
                0;
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)
                return g(a, b);
            if (!h)
                return -1;
            if (!i)
                return 1;
            for (; j; )
                e.unshift(j),
                j = j.parentNode;
            for (j = i; j; )
                f.unshift(j),
                j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k])
                    return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }
        ,
        [0, 0].sort(y),
        B = !z,
        c.uniqueSort = function(a) {
            var b, c = [], d = 1, e = 0;
            if (z = B,
            a.sort(y),
            z) {
                for (; b = a[d]; d++)
                    b === a[d - 1] && (e = c.push(d));
                for (; e--; )
                    a.splice(c[e], 1)
            }
            return a
        }
        ,
        c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        x = c.compile = function(a, b) {
            var c, d = [], e = [], f = R[D][a + " "];
            if (!f) {
                for (b || (b = h(a)),
                c = b.length; c--; )
                    f = m(b[c]),
                    f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }
        ,
        F.querySelectorAll && function() {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"], g = [":active"], i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ia(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                a.querySelectorAll(":checked").length || f.push(":checked")
            }),
            ia(function(a) {
                a.innerHTML = "<p test=''></p>",
                a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"),
                a.innerHTML = "<input type='hidden'/>",
                a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }),
            f = new RegExp(f.join("|")),
            p = function(a, c, e, g, i) {
                if (!g && !i && !f.test(a)) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        for (j = h(a),
                        (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        k = j.length; k--; )
                            j[k] = m + j[k].join("");
                        n = da.test(a) && c.parentNode || c,
                        o = j.join(",")
                    }
                    if (o)
                        try {
                            return K.apply(e, L.call(n.querySelectorAll(o), 0)),
                            e
                        } catch (a) {} finally {
                            l || c.removeAttribute("id")
                        }
                }
                return b(a, c, e, g, i)
            }
            ,
            i && (ia(function(b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[test!='']:sizzle"),
                    g.push("!=", X)
                } catch (a) {}
            }),
            g = new RegExp(g.join("|")),
            c.matchesSelector = function(b, d) {
                if (d = d.replace(e, "='$1']"),
                !v(b) && !g.test(d) && !f.test(d))
                    try {
                        var h = i.call(b, d);
                        if (h || a || b.document && 11 !== b.document.nodeType)
                            return h
                    } catch (a) {}
                return c(d, null, null, [b]).length > 0
            }
            )
        }(),
        t.pseudos.nth = t.pseudos.eq,
        t.filters = q.prototype = t.pseudos,
        t.setFilters = new q,
        c.attr = $.attr,
        $.find = c,
        $.expr = c.selectors,
        $.expr[":"] = $.expr.pseudos,
        $.unique = c.uniqueSort,
        $.text = c.getText,
        $.isXMLDoc = c.isXML,
        $.contains = c.contains
    }(a);
    var Ia = /Until$/
      , Ja = /^(?:parents|prev(?:Until|All))/
      , Ka = /^.[^:#\[\.,]*$/
      , La = $.expr.match.needsContext
      , Ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    $.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)
                return $(a).filter(function() {
                    for (b = 0,
                    c = h.length; b < c; b++)
                        if ($.contains(h[b], this))
                            return !0
                });
            for (g = this.pushStack("", "find", a),
            b = 0,
            c = this.length; b < c; b++)
                if (d = g.length,
                $.find(a, this[b], g),
                b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            return g
        },
        has: function(a) {
            var b, c = $(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if ($.contains(this, c[b]))
                        return !0
            })
        },
        not: function(a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType; ) {
                    if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            return f = f.length > 1 ? $.unique(f) : f,
            this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a)
              , d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    $.fn.andSelf = $.fn.addBack,
    $.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return $.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return $.dir(a, "parentNode", c)
        },
        next: function(a) {
            return i(a, "nextSibling")
        },
        prev: function(a) {
            return i(a, "previousSibling")
        },
        nextAll: function(a) {
            return $.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return $.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return $.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return $.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return $.sibling(a.firstChild)
        },
        contents: function(a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function(a, b) {
        $.fn[a] = function(c, d) {
            var e = $.map(this, b, c);
            return Ia.test(a) || (d = c),
            d && "string" == typeof d && (e = $.filter(d, e)),
            e = this.length > 1 && !Ma[a] ? $.unique(e) : e,
            this.length > 1 && Ja.test(a) && (e = e.reverse()),
            this.pushStack(e, a, V.call(arguments).join(","))
        }
    }),
    $.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d)); )
                1 === f.nodeType && e.push(f),
                f = f[c];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Oa = / jQuery\d+="(?:null|\d+)"/g
      , Pa = /^\s+/
      , Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Ra = /<([\w:]+)/
      , Sa = /<tbody/i
      , Ta = /<|&#?\w+;/
      , Ua = /<(?:script|style|link)/i
      , Va = /<(?:script|object|embed|option|style)/i
      , Wa = new RegExp("<(?:" + Na + ")[\\s/>]","i")
      , Xa = /^(?:checkbox|radio)$/
      , Ya = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Za = /\/(java|ecma)script/i
      , $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , _a = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , ab = k(P)
      , bb = ab.appendChild(P.createElement("div"));
    _a.optgroup = _a.option,
    _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead,
    _a.th = _a.td,
    $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]),
    $.fn.extend({
        text: function(a) {
            return $.access(this, function(a) {
                return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if ($.isFunction(a))
                return this.each(function(b) {
                    $(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return $.isFunction(a) ? this.each(function(b) {
                $(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = $(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = $.isFunction(a);
            return this.each(function(c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (!h(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!h(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)
                a && !$.filter(a, [c]).length || (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")),
                $.cleanData([c])),
                c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild; )
                    a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a : b,
            this.map(function() {
                return $.clone(this, a, b)
            })
        },
        html: function(a) {
            return $.access(this, function(a) {
                var c = this[0] || {}
                  , d = 0
                  , e = this.length;
                if (a === b)
                    return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                if ("string" == typeof a && !Ua.test(a) && ($.support.htmlSerialize || !Wa.test(a)) && ($.support.leadingWhitespace || !Pa.test(a)) && !_a[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Qa, "<$1></$2>");
                    try {
                        for (; d < e; d++)
                            c = this[d] || {},
                            1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")),
                            c.innerHTML = a);
                        c = 0
                    } catch (a) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
                var c = $(this)
                  , d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = $(a).detach()),
            this.each(function() {
                var b = this.nextSibling
                  , c = this.parentNode;
                $(this).remove(),
                b ? $(b).before(a) : $(c).append(a)
            }))
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j))
                return this.each(function() {
                    $(this).domManip(a, c, d)
                });
            if ($.isFunction(j))
                return this.each(function(e) {
                    var f = $(this);
                    a[0] = j.call(this, e, c ? f.html() : b),
                    f.domManip(a, c, d)
                });
            if (this[0]) {
                if (e = $.buildFragment(a, this, k),
                g = e.fragment,
                f = g.firstChild,
                1 === g.childNodes.length && (g = f),
                f)
                    for (c = c && $.nodeName(f, "tr"),
                    h = e.cacheable || m - 1; i < m; i++)
                        d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
                g = f = null,
                k.length && $.each(k, function(a, b) {
                    b.src ? $.ajax ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")),
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }),
    $.buildFragment = function(a, c, d) {
        var e, f, g, h = a[0];
        return c = c || P,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Va.test(h) && ($.support.checkClone || !Ya.test(h)) && ($.support.html5Clone || !Wa.test(h)) && (f = !0,
        e = $.fragments[h],
        g = e !== b),
        e || (e = c.createDocumentFragment(),
        $.clean(a, c, e, d),
        f && ($.fragments[h] = g && e)),
        {
            fragment: e,
            cacheable: f
        }
    }
    ,
    $.fragments = {},
    $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        $.fn[a] = function(c) {
            var d, e = 0, f = [], g = $(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)
                return g[b](this[0]),
                this;
            for (; e < h; e++)
                d = (e > 0 ? this.clone(!0) : this).get(),
                $(g[e])[b](d),
                f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }),
    $.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML,
            bb.removeChild(g = bb.firstChild)),
            !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
                for (n(a, g),
                d = o(a),
                e = o(g),
                f = 0; d[f]; ++f)
                    e[f] && n(d[f], e[f]);
            if (b && (m(a, g),
            c))
                for (d = o(a),
                e = o(g),
                f = 0; d[f]; ++f)
                    m(d[f], e[f]);
            return d = e = null,
            g
        },
        clean: function(a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab, s = [];
            for (b && void 0 !== b.createDocumentFragment || (b = P),
            e = 0; null != (g = a[e]); e++)
                if ("number" == typeof g && (g += ""),
                g) {
                    if ("string" == typeof g)
                        if (Ta.test(g)) {
                            for (r = r || k(b),
                            l = b.createElement("div"),
                            r.appendChild(l),
                            g = g.replace(Qa, "<$1></$2>"),
                            h = (Ra.exec(g) || ["", ""])[1].toLowerCase(),
                            i = _a[h] || _a._default,
                            j = i[0],
                            l.innerHTML = i[1] + g + i[2]; j--; )
                                l = l.lastChild;
                            if (!$.support.tbody)
                                for (m = Sa.test(g),
                                n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes,
                                f = n.length - 1; f >= 0; --f)
                                    $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                            !$.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild),
                            g = l.childNodes,
                            l.parentNode.removeChild(l)
                        } else
                            g = b.createTextNode(g);
                    g.nodeType ? s.push(g) : $.merge(s, g)
                }
            if (l && (g = l = r = null),
            !$.support.appendChecked)
                for (e = 0; null != (g = s[e]); e++)
                    $.nodeName(g, "input") ? p(g) : void 0 !== g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
            if (c)
                for (o = function(a) {
                    if (!a.type || Za.test(a.type))
                        return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                }
                ,
                e = 0; null != (g = s[e]); e++)
                    $.nodeName(g, "script") && o(g) || (c.appendChild(g),
                    void 0 !== g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o),
                    s.splice.apply(s, [e + 1, 0].concat(q)),
                    e += q.length));
            return s
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)
                if ((b || $.acceptData(e)) && (d = e[h],
                c = d && i[d])) {
                    if (c.events)
                        for (f in c.events)
                            k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                    i[d] && (delete i[d],
                    j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null,
                    $.deletedIds.push(d))
                }
        }
    }),
    function() {
        var a, b;
        $.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }
        ,
        a = $.uaMatch(R.userAgent),
        b = {},
        a.browser && (b[a.browser] = !0,
        b.version = a.version),
        b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
        $.browser = b,
        $.sub = function() {
            function a(b, c) {
                return new a.fn.init(b,c)
            }
            $.extend(!0, a, this),
            a.superclass = this,
            a.fn = a.prototype = this(),
            a.fn.constructor = a,
            a.sub = this.sub,
            a.fn.init = function(c, d) {
                return d && d instanceof $ && !(d instanceof a) && (d = a(d)),
                $.fn.init.call(this, c, d, b)
            }
            ,
            a.fn.init.prototype = a.fn;
            var b = a(P);
            return a
        }
    }();
    var cb, db, eb, fb = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /^(top|right|bottom|left)$/, ib = /^(none|table(?!-c[ea]).+)/, jb = /^margin/, kb = new RegExp("^(" + _ + ")(.*)$","i"), lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$","i"), mb = new RegExp("^([-+])=(" + _ + ")","i"), nb = {
        BODY: "block"
    }, ob = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pb = {
        letterSpacing: 0,
        fontWeight: 400
    }, qb = ["Top", "Right", "Bottom", "Left"], rb = ["Webkit", "O", "Moz", "ms"], sb = $.fn.toggle;
    $.fn.extend({
        css: function(a, c) {
            return $.access(this, function(a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return s(this, !0)
        },
        hide: function() {
            return s(this)
        },
        toggle: function(a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function() {
                (c ? a : r(this)) ? $(this).show() : $(this).hide()
            })
        }
    }),
    $.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: $.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c), j = a.style;
                if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)),
                h = $.cssHooks[c] || $.cssHooks[i],
                d === b)
                    return h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if ("string" === (g = typeof d) && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)),
                g = "number"),
                !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"),
                h && "set"in h && (d = h.set(a, d, e)) === b)))
                    try {
                        j[c] = d
                    } catch (a) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)),
            h = $.cssHooks[c] || $.cssHooks[i],
            h && "get"in h && (f = h.get(a, !0, e)),
            f === b && (f = cb(a, c)),
            "normal" === f && c in pb && (f = pb[c]),
            d || e !== b ? (g = parseFloat(f),
            d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b)
                f[e] = a.style[e],
                a.style[e] = b[e];
            d = c.call(a);
            for (e in b)
                a.style[e] = f[e];
            return d
        }
    }),
    a.getComputedStyle ? cb = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h.getPropertyValue(c) || h[c],
        "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)),
        lb.test(d) && jb.test(c) && (e = i.width,
        f = i.minWidth,
        g = i.maxWidth,
        i.minWidth = i.maxWidth = i.width = d,
        d = h.width,
        i.width = e,
        i.minWidth = f,
        i.maxWidth = g)),
        d
    }
    : P.documentElement.currentStyle && (cb = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return null == e && f && f[b] && (e = f[b]),
        lb.test(e) && !hb.test(b) && (c = f.left,
        d = a.runtimeStyle && a.runtimeStyle.left,
        d && (a.runtimeStyle.left = a.currentStyle.left),
        f.left = "fontSize" === b ? "1em" : e,
        e = f.pixelLeft + "px",
        f.left = c,
        d && (a.runtimeStyle.left = d)),
        "" === e ? "auto" : e
    }
    ),
    $.each(["height", "width"], function(a, b) {
        $.cssHooks[b] = {
            get: function(a, c, d) {
                if (c)
                    return 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob, function() {
                        return v(a, b, d)
                    }) : v(a, b, d)
            },
            set: function(a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }),
    $.support.opacity || ($.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }),
    $(function() {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function(a, b) {
                return $.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b)
                        return cb(a, "marginRight")
                })
            }
        }),
        !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
            $.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = cb(a, b);
                        return lb.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }),
    $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
    }
    ,
    $.expr.filters.visible = function(a) {
        return !$.expr.filters.hidden(a)
    }
    ),
    $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        $.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++)
                    f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        },
        jb.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tb = /%20/g
      , ub = /\[\]$/
      , vb = /\r?\n/g
      , wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , xb = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function() {
            return $.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function(a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(vb, "\r\n")
                }
            }).get()
        }
    }),
    $.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = $.isFunction(b) ? b() : null == b ? "" : b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional),
        $.isArray(a) || a.jquery && !$.isPlainObject(a))
            $.each(a, function() {
                f(this.name, this.value)
            });
        else
            for (d in a)
                x(d, a[d], c, f);
        return e.join("&").replace(tb, "+")
    }
    ;
    var yb, zb, Ab = /#.*$/, Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = /\?/, Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Hb = /([?&])_=[^&]*/, Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Jb = $.fn.load, Kb = {}, Lb = {}, Mb = ["*/"] + ["*"];
    try {
        zb = Q.href
    } catch (a) {
        zb = P.createElement("a"),
        zb.href = "",
        zb = zb.href
    }
    yb = Ib.exec(zb.toLowerCase()) || [],
    $.fn.load = function(a, c, d) {
        if ("string" != typeof a && Jb)
            return Jb.apply(this, arguments);
        if (!this.length)
            return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length),
        a = a.slice(0, i)),
        $.isFunction(c) ? (d = c,
        c = b) : c && "object" == typeof c && (f = "POST"),
        $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments,
            h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
        }),
        this
    }
    ,
    $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        $.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    $.each(["get", "post"], function(a, c) {
        $[c] = function(a, d, e, f) {
            return $.isFunction(d) && (f = f || e,
            e = d,
            d = b),
            $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }),
    $.extend({
        getScript: function(a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a,
            a = $.ajaxSettings),
            A(a, b),
            a
        },
        ajaxSettings: {
            url: zb,
            isLocal: Cb.test(yb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: y(Kb),
        ajaxTransport: y(Lb),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2,
                i && clearTimeout(i),
                h = b,
                f = g || "",
                w.readyState = a > 0 ? 4 : 0,
                d && (t = B(m, w, d)),
                a >= 200 && a < 300 || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"),
                v && ($.lastModified[e] = v),
                (v = w.getResponseHeader("Etag")) && ($.etag[e] = v)),
                304 === a ? (x = "notmodified",
                j = !0) : (j = C(m, t),
                x = j.state,
                l = j.data,
                s = j.error,
                j = !s)) : (s = x,
                x && !a || (x = "error",
                a < 0 && (a = 0))),
                w.status = a,
                w.statusText = (c || x) + "",
                j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                w.statusCode(r),
                r = b,
                k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]),
                q.fireWith(n, [w, x]),
                k && (o.trigger("ajaxComplete", [w, m]),
                --$.active || $.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a,
            a = b),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event, p = $.Deferred(), q = $.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!u) {
                        var c = a.toLowerCase();
                        a = t[c] = t[c] || a,
                        s[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? f : null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (2 === u) {
                        if (!g)
                            for (g = {}; c = Bb.exec(f); )
                                g[c[1].toLowerCase()] = c[2];
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a),
                    this
                },
                abort: function(a) {
                    return a = a || v,
                    h && h.abort(a),
                    d(0, a),
                    this
                }
            };
            if (p.promise(w),
            w.success = w.done,
            w.error = w.fail,
            w.complete = q.add,
            w.statusCode = function(a) {
                if (a) {
                    var b;
                    if (u < 2)
                        for (b in a)
                            r[b] = [r[b], a[b]];
                    else
                        b = a[w.status],
                        w.always(b)
                }
                return this
            }
            ,
            m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "http://"),
            m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba),
            null == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()),
            m.crossDomain = !(!j || j[1] === yb[1] && j[2] === yb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yb[3] || ("http:" === yb[1] ? 80 : 443)))),
            m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)),
            z(Kb, m, c, w),
            2 === u)
                return w;
            if (k = m.global,
            m.type = m.type.toUpperCase(),
            m.hasContent = !Db.test(m.type),
            k && 0 == $.active++ && $.event.trigger("ajaxStart"),
            !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&" : "?") + m.data,
            delete m.data),
            e = m.url,
            !1 === m.cache)) {
                var x = $.now()
                  , y = m.url.replace(Hb, "$1_=" + x);
                m.url = y + (y === m.url ? (Fb.test(m.url) ? "&" : "?") + "_=" + x : "")
            }
            (m.data && m.hasContent && !1 !== m.contentType || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            m.ifModified && (e = e || m.url,
            $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]),
            $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || !1 !== m.beforeSend.call(n, w, m) && 2 !== u) {
                v = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[l](m[l]);
                if (h = z(Lb, m, c, w)) {
                    w.readyState = 1,
                    k && o.trigger("ajaxSend", [w, m]),
                    m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1,
                        h.send(s, d)
                    } catch (a) {
                        if (!(u < 2))
                            throw a;
                        d(-1, a)
                    }
                } else
                    d(-1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Nb = []
      , Ob = /\?/
      , Pb = /(=)\?(?=&|$)|\?\?/
      , Qb = $.now();
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Nb.pop() || $.expando + "_" + Qb++;
            return this[a] = !0,
            a
        }
    }),
    $.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = !1 !== c.jsonp, l = k && Pb.test(j), m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Pb.test(i);
        if ("jsonp" === c.dataTypes[0] || l || m)
            return f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
            g = a[f],
            l ? c.url = j.replace(Pb, "$1" + f) : m ? c.data = i.replace(Pb, "$1" + f) : k && (c.url += (Ob.test(j) ? "&" : "?") + c.jsonp + "=" + f),
            c.converters["script json"] = function() {
                return h || $.error(f + " was not called"),
                h[0]
            }
            ,
            c.dataTypes[0] = "json",
            a[f] = function() {
                h = arguments
            }
            ,
            e.always(function() {
                a[f] = g,
                c[f] && (c.jsonpCallback = d.jsonpCallback,
                Nb.push(f)),
                h && $.isFunction(g) && g(h[0]),
                h = g = b
            }),
            "script"
    }),
    $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return $.globalEval(a),
                a
            }
        }
    }),
    $.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    $.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function(e, f) {
                    c = P.createElement("script"),
                    c.async = "async",
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null,
                        d && c.parentNode && d.removeChild(c),
                        c = b,
                        e || f(200, "success"))
                    }
                    ,
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Rb, Sb = !!a.ActiveXObject && function() {
        for (var a in Rb)
            Rb[a](0, 1)
    }
    , Tb = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && D() || E()
    }
    : D,
    function(a) {
        $.extend($.support, {
            ajax: !!a,
            cors: !!a && "withCredentials"in a
        })
    }($.ajaxSettings.xhr()),
    $.support.ajax && $.ajaxTransport(function(c) {
        if (!c.crossDomain || $.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async),
                    c.xhrFields)
                        for (h in c.xhrFields)
                            i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)
                            i.setRequestHeader(h, e[h])
                    } catch (a) {}
                    i.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b,
                                g && (i.onreadystatechange = $.noop,
                                Sb && delete Rb[g]),
                                e)
                                    4 !== i.readyState && i.abort();
                                else {
                                    h = i.status,
                                    k = i.getAllResponseHeaders(),
                                    l = {},
                                    (m = i.responseXML) && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {}
                                    try {
                                        j = i.statusText
                                    } catch (a) {
                                        j = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (a) {
                            e || f(-1, a)
                        }
                        l && f(h, j, l, k)
                    }
                    ,
                    c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Tb,
                    Sb && (Rb || (Rb = {},
                    $(a).unload(Sb)),
                    Rb[g] = d),
                    i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var Ub, Vb, Wb = /^(?:toggle|show|hide)$/, Xb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$","i"), Yb = /queueHooks$/, Zb = [J], $b = {
        "*": [function(a, b) {
            var c, d, e = this.createTween(a, b), f = Xb.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                if (c = +f[2],
                "px" !== (d = f[3] || ($.cssNumber[a] ? "" : "px")) && h) {
                    h = $.css(e.elem, a, !0) || c || 1;
                    do {
                        i = i || ".5",
                        h /= i,
                        $.style(e.elem, a, h + d)
                    } while (i !== (i = e.cur() / g) && 1 !== i && --j)
                }
                e.unit = d,
                e.start = h,
                e.end = f[1] ? h + (f[1] + 1) * c : c
            }
            return e
        }
        ]
    };
    $.Animation = $.extend(H, {
        tweener: function(a, b) {
            $.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++)
                c = a[d],
                $b[c] = $b[c] || [],
                $b[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Zb.unshift(a) : Zb.push(a)
        }
    }),
    $.Tween = K,
    K.prototype = {
        constructor: K,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || ($.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = K.propHooks[this.prop];
            return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : K.propHooks._default.set(this),
            this
        }
    },
    K.prototype.init.prototype = K.prototype,
    K.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    $.each(["toggle", "show", "hide"], function(a, b) {
        var c = $.fn[b];
        $.fn[b] = function(d, e, f) {
            return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }),
    $.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = $.isEmptyObject(a)
              , f = $.speed(b, c, d)
              , g = function() {
                var b = H(this, $.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c,
            c = a,
            a = b),
            c && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , c = null != a && a + "queueHooks"
                  , f = $.timers
                  , g = $._data(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g)
                        g[c] && g[c].stop && Yb.test(c) && e(g[c]);
                for (c = f.length; c--; )
                    f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d),
                    b = !1,
                    f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }),
    $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        $.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    $.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default,
        null != d.queue && !0 !== d.queue || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            $.isFunction(d.old) && d.old.call(this),
            d.queue && $.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    $.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    $.timers = [],
    $.fx = K.prototype.init,
    $.fx.tick = function() {
        var a, c = $.timers, d = 0;
        for (Ub = $.now(); d < c.length; d++)
            !(a = c[d])() && c[d] === a && c.splice(d--, 1);
        c.length || $.fx.stop(),
        Ub = b
    }
    ,
    $.fx.timer = function(a) {
        a() && $.timers.push(a) && !Vb && (Vb = setInterval($.fx.tick, $.fx.interval))
    }
    ,
    $.fx.interval = 13,
    $.fx.stop = function() {
        clearInterval(Vb),
        Vb = null
    }
    ,
    $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    $.fx.step = {},
    $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
        return $.grep($.timers, function(b) {
            return a === b.elem
        }).length
    }
    );
    var _b = /^(?:body|html)$/i;
    $.fn.offset = function(a) {
        if (arguments.length)
            return a === b ? this : this.each(function(b) {
                $.offset.setOffset(this, a, b)
            });
        var c, d, e, f, g, h, i, j = {
            top: 0,
            left: 0
        }, k = this[0], l = k && k.ownerDocument;
        if (l)
            return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement,
            $.contains(c, k) ? (void 0 !== k.getBoundingClientRect && (j = k.getBoundingClientRect()),
            e = M(l),
            f = c.clientTop || d.clientTop || 0,
            g = c.clientLeft || d.clientLeft || 0,
            h = e.pageYOffset || c.scrollTop,
            i = e.pageXOffset || c.scrollLeft,
            {
                top: j.top + h - f,
                left: j.left + i - g
            }) : j)
    }
    ,
    $.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop
              , c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0,
            c += parseFloat($.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a), h = g.offset(), i = $.css(a, "top"), j = $.css(a, "left"), k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(),
            e = m.top,
            f = m.left) : (e = parseFloat(i) || 0,
            f = parseFloat(j) || 0),
            $.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (l.top = b.top - h.top + e),
            null != b.left && (l.left = b.left - h.left + f),
            "using"in b ? b.using.call(a, l) : g.css(l)
        }
    },
    $.fn.extend({
        position: function() {
            if (this[0]) {
                var a = this[0]
                  , b = this.offsetParent()
                  , c = this.offset()
                  , d = _b.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0,
                c.left -= parseFloat($.css(a, "marginLeft")) || 0,
                d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0,
                d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || P.body; a && !_b.test(a.nodeName) && "static" === $.css(a, "position"); )
                    a = a.offsetParent;
                return a || P.body
            })
        }
    }),
    $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function(e) {
            return $.access(this, function(a, e, f) {
                var g = M(a);
                if (f === b)
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }),
    $.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        $.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            $.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e)
                  , h = d || (!0 === e || !0 === f ? "margin" : "border");
                return $.access(this, function(c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement,
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }),
    a.jQuery = a.$ = $,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return $
    })
}(window);
var $GG = $.noConflict()
  , $ = $GG
  , loginDynamicController = function() {
    this.controller = {},
    this.controller.jquery = $GG,
    this.data = {},
    this.data.memberId = "",
    this.data.memberNick = "",
    this.data.basketItemCount = "",
    this.data.messageCount = "",
    this.data.retry = "",
    this.retryCount = 0,
    this.subscribers = [],
    this.completeData = {},
    this.tryOnce = !1,
    this.guestCallback = function() {}
    ,
    this.loginCallback = function() {}
    ,
    this.source = "https://www.gittigidiyor.com/login-info"
};
loginDynamicController.prototype.objectIsEmpty = function(a) {
    var b = !0;
    try {
        var c = 0;
        for (var d in a)
            c++;
        if (c > 1)
            return b = !1
    } catch (a) {}
    return b
}
,
loginDynamicController.prototype.init = function() {
    //this.getData()
}
,
loginDynamicController.prototype.getData = function() {
    var a = this
      , b = !1
      , c = !1
      , d = this.controller.jquery;
    d.ajax({
        url: this.source,
        cache: !1,
        dataType: "json",
        beforeSend: function() {},
        success: function(d) {
            a.tryOnce = d.retry,
            d.retry && a.retryCount < 3 ? (a.retryCount++,
            a.getData()) : (a.objectIsEmpty(d) ? c = !0 : (c = !1,
            a.data.guest = d.guest,
            a.data.memberId = d.memberId,
            a.data.memberNick = d.memberNick,
            a.data.basketItemCount = Number(d.basketItemCount),
            a.data.messageCount = Number(d.messageCount),
            a.data.username = d.username,
            a.data.currentTime = d.currentTime,
            a.data.cookieMemberId = d.cookieMemberId,
            a.data.registeredMemberId = d.registeredMemberId,
            a.data.retry = d.retry),
            b = !0)
        },
        complete: function(c, d) {
            0 == b ? a.tryOnce ? a.tryOnce = !0 : (a.renderDomItem(!1),
            a.guestCallback()) : a.data.guest ? (a.renderDomItem(!1),
            a.guestCallback()) : (a.renderDomItem(!0),
            a.loginCallback()),
            a.completeData = a.data,
            a.completeCallback(a.data)
        },
        error: function() {
            b = !1
        }
    })
}
,
loginDynamicController.prototype.renderDomItem = function(a) {
    var b, c, d = this.controller.jquery, e = this;
    d(document).ready(function() {
        if (a && !e.data.guest) {
            $GG("body").append($GG('<input type="hidden" id="loggedInMemberId" name="loggedInMemberId" value="1" />')),
            d("#member-nick-container").html(e.data.memberNick);
            try {
                d(".seller-nick").html(e.data.memberNick)
            } catch (a) {}
            if (e.data.messageCount > 0) {
                var f = e.data.messageCount
                  , g = "";
                e.data.messageCount > 99 && (f = "99+",
                c = "ninetynine"),
                d("#msgcnt").removeClass("hidden").addClass(g).html(f);
                try {
                    d("#msg-mobile").removeClass("hidden").addClass(g).html(f)
                } catch (a) {}
            }
            if (d("#msgCounters").attr("value", e.data.messageCount),
            e.data.basketItemCount > 0) {
                b = e.data.basketItemCount,
                c = "",
                e.data.basketItemCount > 99 && (b = "99+",
                c = "ninetynine"),
                d("#basket-item-count-container").removeClass("hidden").addClass(c).html(b);
                try {
                    d("#basket-item-count-container-mobile").removeClass("hidden").addClass(c).html(b)
                } catch (a) {}
            }
            d(".login-panel-content").removeClass("hidden"),
            d(".login-standart-content").removeClass("hidden"),
            d(".guest-panel-content").remove()
        } else {
            if (d(".guest-panel-content").removeClass("hidden"),
            d(".login-standart-content").removeClass("hidden"),
            e.data.basketItemCount > 0) {
                b = e.data.basketItemCount,
                c = "",
                e.data.basketItemCount > 99 && (b = "99+",
                c = "ninetynine"),
                d("#basket-item-count-container").removeClass("hidden").addClass(c).html(b);
                try {
                    d("#basket-item-count-container-mobile").removeClass("hidden").addClass(c).html(b)
                } catch (a) {}
            }
            d(".login-panel-content").remove()
        }
    })
}
,
loginDynamicController.prototype.push = function(a) {
    this.subscribers.push(a),
    this.sendData()
}
,
loginDynamicController.prototype.sendData = function() {
    if (!objectIsEmpty(this.completeData)) {
        for (var a in this.subscribers)
            this.subscribers[a](this.completeData);
        this.subscribers = []
    }
}
;
var setLoginAction = new loginDynamicController;
setLoginAction.completeCallback = function() {
    setLoginAction.sendData()
}
,
setLoginAction.init();
var objectIsEmpty = function(a) {
    var b = !0;
    for (var c in a)
        return b = !1;
    return b
};
!function(a) {
    jQuery.fn.ggAutoComplete = function(b) {
        var c = {
            source: "",
            deferRequest: 250,
            width: "",
            selectedCssClass: "",
            mainCssClass: "",
            isAutoComplete: !1,
            maxRow: 5,
            content: "",
            caddeContent: "",
            catalogCompareContent: {
                isActive: !1,
                maxLength: 100,
                autocompleteCallback: function() {},
                htmlElementCallback: function() {}
            },
            emptyDataContent: "",
            fullContextSearch: !1,
            isCaseSensitive: !1,
            disableRemove: !1,
            characterReq: 2,
            mainTargetData: "",
            targetButtonId: ""
        }
          , b = jQuery.extend(c, b)
          , d = function(c) {
            var d = this;
            d.target = jQuery(c)[0],
            d.id = d.target.id,
            d.coverDiv = "",
            jQuery(d.target).attr("autocomplete", "off"),
            jQuery(d.target).wrap('<div class="inputController wrapper" id="' + d.target.id + '-wrapper"></div>');
            var e = jQuery(document).scrollLeft()
              , f = jQuery(document).scrollTop();
            jQuery(d.target).focus(),
            window.scrollTo(e, f),
            d.mainCoverContent = jQuery("#" + d.target.id + "-wrapper"),
            d.targetValue = "",
            d.queryValue = "",
            d.stepValue = 0,
            d.rowValue = 0,
            d.pendingRequest = !1,
            d.disableAction = !1,
            d.bindEvents = function() {
                jQuery(d.target).bind("keypress", function(c) {
                    var d = a(this)[0]
                      , e = c.keyCode || c.charCode;
                    b.catalogCompareContent.isActive && (d.value.length == b.catalogCompareContent.maxLength ? 8 != e && c.preventDefault() : d.value.length > b.catalogCompareContent.maxLength && (d.value = d.value.substring(0, b.catalogCompareContent.maxLength)))
                }),
                jQuery(d.target).bind("keydown", function(a) {
                    if (13 == a.keyCode)
                        return d.panelRemove(),
                        jQuery(".inputController.mainPanel.selected").find("a").hasClass("cadde-perma-link") ? window.location.assign(jQuery(".inputController.mainPanel.selected").find("a").attr("href")) : b.catalogCompareContent.isActive ? b.catalogCompareContent.autocompleteCallback(d.mainCoverContent, "clicked") : jQuery("#" + b.targetButtonId).trigger("click"),
                        !1;
                    jQuery(d.target).parent().siblings(".inputTxt").hide()
                }),
                jQuery(d.target).bind("keyup", function(a) {
                    var c = d.keyCodeController(a.keyCode)
                      , e = d.contentController();
                    if ("" == jQuery(d.target).val || c)
                        c && !e && (jQuery(d.mainCoverContent).find(d.coverDiv).find(".inputController.mainPanel").removeClass("selected"),
                        d.domSelector(a.keyCode));
                    else {
                        var f = jQuery(d.target)[0].value;
                        b.catalogCompareContent.isActive && b.catalogCompareContent.maxLength < f.length && (f = f.substring(0, b.catalogCompareContent.maxLength),
                        jQuery(d.target)[0].value = f),
                        jQuery.trim(f).length > b.characterReq - 1 ? (jQuery.trim(f) != d.targetValue && (d.queryValue = jQuery.trim(f),
                        0 == d.pendingRequest && (clearTimeout(d.typingTimer),
                        d.typingTimer = setTimeout(d.doneTyping, b.deferRequest))),
                        d.targetValue = jQuery.trim(f)) : d.panelRemove()
                    }
                }),
                d.controlTaget = b.mainTargetData,
                jQuery(d.target).bind("blur", d.panelRemove)
            }
            ,
            d.domSelector = function(a) {
                switch (a) {
                case 38:
                    d.stepValue = d.stepValue - 1 < 1 ? d.rowValue : d.stepValue - 1,
                    d.StepAction(d.stepValue);
                    break;
                case 40:
                    d.stepValue = d.stepValue + 1 > d.rowValue ? 1 : d.stepValue + 1,
                    d.StepAction(d.stepValue);
                    break;
                case 27:
                    d.panelRemove();
                    break;
                case 39:
                case 37:
                    d.stepValue = 0
                }
            }
            ,
            d.StepAction = function(a) {
                jQuery(d.mainCoverContent).find(d.coverDiv).find(".inputController.mainPanel:eq(" + (a - 1) + ")").addClass("selected");
                var b = jQuery(d.mainCoverContent).find(d.coverDiv).find(".inputController.mainPanel:eq(" + (a - 1) + ")").find('[targetData="' + d.controlTaget + '"]').text();
                d.dataSender(b, !0);
                var c = jQuery(d.mainCoverContent).find(d.coverDiv).find(".inputController.mainPanel:eq(" + (a - 1) + ")").outerHeight() * (a - 1);
                jQuery(d.mainCoverContent).find(d.coverDiv).scrollTop(c)
            }
            ,
            d.keyCodeController = function(a) {
                var b = !1
                  , c = [37, 38, 39, 40, 33, 34, 35, 36, 93, 20, 27, 16, 17, 13];
                return jQuery(c).each(function(c, d) {
                    a == d && (b = !0)
                }),
                b
            }
            ,
            d.contentController = function() {
                var a = !1;
                return jQuery(d.mainCoverContent).find(".inputController.mainPanel").length <= 0 && (a = !0),
                a
            }
            ,
            d.doneTyping = function() {
                d.disableAction || (d.width = "100%",
                "object" != typeof b.source ? d.ajaxAction() : d.arrayAction())
            }
            ,
            d.ajaxAction = function() {
                var a = ""
                  , c = !1
                  , e = encodeURIComponent(d.queryValue);
                jQuery.ajax({
                    url: b.source + "=" + e,
                    cache: !1,
                    dataType: "json",
                    beforeSend: function() {
                        d.pendingRequest = !0,
                        b.catalogCompareContent.isActive && b.catalogCompareContent.autocompleteCallback(d.mainCoverContent, "addLoading")
                    },
                    success: function(b) {
                        a = b,
                        c = !0
                    },
                    complete: function(b, f) {
                        0 == c && (a = ""),
                        d.pendingRequest = !1,
                        d.endAction(a, decodeURIComponent(e)),
                        e != encodeURIComponent(d.queryValue) && (d.targetValue = "",
                        jQuery(d.target).trigger("keyup"))
                    },
                    error: function() {}
                })
            }
            ,
            d.arrayAction = function() {
                var a = h(b.source, d.queryValue);
                d.endAction(a)
            }
            ,
            d.endAction = function(a, c) {
                if ("" != d.targetValue) {
                    var e = a;
                    if (e.length <= 0) {
                        if (b.disableRemove || (jQuery(d.mainCoverContent).find(d.coverDiv).find(".inputController.infoPanel").remove(),
                        jQuery(d.mainCoverContent).find(d.coverDiv).remove()),
                        b.catalogCompareContent.isActive && b.catalogCompareContent.autocompleteCallback(d.mainCoverContent, "error"),
                        "" != b.emptyDataContent) {
                            d.coverDiv = d.makeCoverDom();
                            var f = document.createElement("div");
                            jQuery(f).addClass("inputController infoPanel"),
                            jQuery(f).append(b.emptyDataContent),
                            jQuery(d.mainCoverContent).find(d.coverDiv).append(f)
                        }
                        d.stepValue = 0
                    } else if (d.coverDiv = d.makeCoverDom(),
                    b.disableRemove || jQuery(d.mainCoverContent).find(".inputController.infoPanel").remove(),
                    b.catalogCompareContent.isActive && b.catalogCompareContent.autocompleteCallback(d.mainCoverContent, "remove-error-loading"),
                    d.rowValue = e.length > b.maxRow ? b.maxRow : e.length,
                    "" != d.queryValue) {
                        var h = c || d.queryValue;
                        new g(e,d.rowValue,h);
                        jQuery(".inputController.mainPanel.search").first().addClass("itemFirst"),
                        jQuery(".inputController.mainPanel.search").last().addClass("itemLast"),
                        jQuery(".inputController.mainPanel.category").first().addClass("itemFirst"),
                        jQuery(".inputController.mainPanel.category").last().addClass("itemLast")
                    }
                } else
                    b.disableRemove || jQuery(d.mainCoverContent).find(d.coverDiv).remove()
            }
            ;
            var g = function(c, e, f) {
                b.disableRemove || jQuery(".inputController.mainPanel").remove();
                for (var g = 0; g < e; g++) {
                    var h, i = a("#main-route").val() + "/";
                    h = document.createElement("div"),
                    jQuery(h).addClass("inputController mainPanel"),
                    jQuery(h).addClass(b.mainCssClass),
                    jQuery(h).attr("targetId", c[g].id),
                    jQuery(h).hover(function() {
                        d.stepValue = jQuery(".inputController.mainPanel").index(this),
                        jQuery(".inputController.mainPanel").removeClass("selected"),
                        jQuery(this).addClass("selected")
                    }, function() {
                        jQuery(this).removeClass("selected")
                    });
                    var j;
                    j = document.createElement("div"),
                    "cadde" == c[g].type ? (jQuery(h).addClass("cadde"),
                    jQuery(j).addClass("inputController innerPanel store-inner")) : "category" == c[g].type ? (jQuery(h).addClass("category"),
                    jQuery(j).addClass("inputController innerPanel")) : (jQuery(h).addClass("search"),
                    jQuery(j).addClass("inputController innerPanel")),
                    "cadde" == c[g].type ? (jQuery(j).append(b.caddeContent),
                    jQuery(j).find("a").attr("href", i + "cadde/" + c[g].perma),
                    jQuery(j).find("img").attr("src", c[g].img),
                    jQuery(j).find(".cadda-name").append(c[g].label)) : b.catalogCompareContent.isActive ? b.catalogCompareContent.htmlElementCallback(j, c[g].title, c[g].slug) : (jQuery(j).append(b.content),
                    jQuery(j).find("*").each(function(a, d) {
                        var e = jQuery(d).attr("targetData") || "";
                        if ("" != e) {
                            var h = c[g][e];
                            if (jQuery(d).is("img"))
                                jQuery(d).attr("src", h);
                            else if (jQuery(d).attr("targetData") == b.mainTargetData) {
                                var i = h;
                                if ("category" == c[g].type) {
                                    jQuery(j).find("a").attr("data-href", c[g].perma);
                                    var k = document.createElement("p")
                                      , l = document.createElement("span")
                                      , m = document.createElement("span");
                                    jQuery(m).addClass("categorySelect"),
                                    jQuery(m).append(i.split("/")[1] + " kategorisi"),
                                    jQuery(l).append(c[g].perma.split("=")[1]),
                                    jQuery(k).append(l, m);
                                    var n = document.createElement("p");
                                    jQuery(n).addClass("last"),
                                    jQuery(n).append(i),
                                    jQuery(d).append(k),
                                    jQuery(d).append(n)
                                } else if ("search" == c[g].type)
                                    for (var o = 0; -1 != o; ) {
                                        var p = document.createElement("span");
                                        jQuery(p).addClass(b.selectedCssClass);
                                        var q = "";
                                        if (b.isCaseSensitive) {
                                            var r = i.toLowerCase();
                                            f = f.toLowerCase(),
                                            q = r.indexOf(f)
                                        } else
                                            q = i.indexOf(f);
                                        q = -1 == q ? i.length : q;
                                        var s = q + f.length
                                          , t = i.substring(0, q)
                                          , u = i.substring(q, s)
                                          , v = i.substring(q + f.length);
                                        jQuery(d).append(t),
                                        jQuery(p).append(u),
                                        jQuery(d).append(p),
                                        1 == b.fullContextSearch ? (-1 == v.indexOf(f) && (jQuery(d).append(v),
                                        o = -1),
                                        i = v) : (jQuery(d).append(v),
                                        o = -1)
                                    }
                            } else
                                jQuery(d).append(h)
                        }
                    })),
                    jQuery(h).append(j),
                    jQuery.browser.msie && parseFloat(jQuery.browser.version) < 8 && jQuery(j).css("overflow", "hidden"),
                    jQuery(d.coverDiv).append(h)
                }
                jQuery(".inputController.innerPanel").bind("click", d.dataSender)
            };
            d.panelRemove = function() {
                "" != d.coverDiv && (b.disableRemove || jQuery(d.mainCoverContent).find(d.coverDiv).fadeOut(250, function() {
                    jQuery(d.mainCoverContent).find(d.coverDiv).remove()
                }),
                d.stepValue = 0,
                0 == b.catalogCompareContent.isActive && 0 == jQuery(d.mainCoverContent).find(".inputController.mainPanel.selected").hasClass("category") && (d.targetValue = "")),
                jQuery(d.target).val()
            }
            ,
            d.dataSender = function(a, c) {
                if (jQuery(this).find("a").hasClass("cadde-perma-link"))
                    window.location.assign(jQuery(this).find("a").attr("href"));
                else if (jQuery(this).find("a").hasClass("catalog-compare")) {
                    jQuery(d.mainCoverContent).find(".inputController.mainPanel.selected").find('[targetData="' + b.mainTargetData + '"]');
                    b.catalogCompareContent.isActive && b.catalogCompareContent.autocompleteCallback(d.mainCoverContent, "clicked")
                } else {
                    var e = c || !1
                      , f = jQuery(d.mainCoverContent).find(".inputController.mainPanel.selected").find('[targetData="' + b.mainTargetData + '"]').text() || a;
                    1 == jQuery(d.mainCoverContent).find(".inputController.mainPanel.selected").hasClass("category") && (f = d.targetValue),
                    jQuery(d.target).val(""),
                    jQuery(d.target).val(f),
                    jQuery(d.target).focus(),
                    e || jQuery("#" + b.targetButtonId).trigger("click")
                }
            }
            ;
            var h = function(a, c) {
                var e = []
                  , f = d.controlTaget;
                return jQuery(a).each(function(d, g) {
                    var h = g[f]
                      , i = h
                      , j = i.indexOf(c);
                    if (b.isCaseSensitive) {
                        var k = i.toLowerCase();
                        c = c.toLowerCase(),
                        j = k.indexOf(c)
                    }
                    1 == b.fullContextSearch ? -1 != j && e.push(a[d]) : 0 == j && e.push(a[d])
                }),
                e.sort(function(a, b) {
                    var c = a[f].toLowerCase()
                      , d = b[f].toLowerCase()
                      , e = c
                      , g = d;
                    return e < g ? -1 : e > g ? 1 : 0
                }),
                e
            };
            d.makeCoverDom = function() {
                var a;
                return jQuery(d.mainCoverContent).find('.inputController.coverPanel[targetid="' + d.id + '"]').length > 0 ? a = jQuery(d.mainCoverContent).find('.inputController.coverPanel[targetid="' + d.id + '"]') : (a = document.createElement("div"),
                jQuery(a).addClass("inputController coverPanel").attr("targetid", d.id),
                jQuery(a).width(d.width),
                jQuery(a).css("left", d.left + "px"),
                jQuery(a).css("top", d.top + "px"),
                jQuery(a).css("margin-top", "2px"),
                jQuery(a).css("margin-left", "2px"),
                jQuery(d.mainCoverContent).append(a)),
                a
            }
        }
          , e = new d(this);
        return e.bindEvents(),
        {
            disable: function() {
                e.disableAction = !0
            },
            enable: function() {
                e.disableAction = !1
            }
        }
    }
}($GG);
var uaName = navigator.userAgent, cookieDay = 7, _gaq, _ggAutoComplete = "", _ggAutoCompleteMobile = "", sc_prop34 = getActualWidth(), sc_prop35 = checkRangeController(sc_prop34);
sc_prop34 += "px",
sc_prop35 += "px";
var GGMobileMenu = 0, mastheadShowType, isAndoridOldVersion = !1;
window.environmentState = window.environmentState || "",
parseFloat(getAndroidVersion()) <= 4.2 && (isAndoridOldVersion = !0),
$GG(document).ready(function() {
    function a() {
        document.write = "",
        setTimeout(function() {
            document.body.innerHTML = ""
        }, 0),
        window.self.onload = function(a) {
            document.body.innerHTML = ""
        }
    }
    if ($GG("#header_find_button").attr("onclick", "javascript:submitCategory()"),
    $GG(".MegaCMS").css("height", $GG("#MegaMenuList").height() - 50 + "px"),
    window.top != window.self && -1 == document.referrer.indexOf("visualwebsiteoptimizer") && -1 == document.referrer.indexOf("vwo"))
        try {
            window.top.location.host || a()
        } catch (b) {
            a()
        }
    if (isAndoridOldVersion ? window.onscroll = function() {}
    : 0 == $GG("div.mastheadBanner.visible-m").length ? _gg.pageType == GG.Static.Enums.pageTypes.IOS && ($GG("#topContainer.mobile-fixed").addClass("absolute-fixed"),
    $GG("#topContainer.mobile-fixed").addClass("top0"),
    $GG(".topHiddenContainer.opened").addClass("masterHeadNone")) : $GG(".topHiddenContainer.opened").addClass("masterHead"),
    "dev" == window.environmentState || "test" == window.environmentState) {
        var b = document.createElement("div");
        b.innerHTML = window.environmentState,
        b.className = "environment-control-dom",
        document.body.appendChild(b),
        $(b).live("click", function() {
            $(this).remove()
        })
    }
    var c = !0;
    $GG("html").addClass("js-ready csstransforms3d csstransitions"),
    $GG(".CatBtn").click(function() {
        $GG(this).parent().hasClass("selected") ? ($GG("html").removeClass("js-nav"),
        $GG(".CatBtnOverlay").parent().removeClass("selected"),
        $GG(".OverlayCon").removeClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "0px"
        }, 500)) : ($GG("html").addClass("js-ready csstransforms3d"),
        $GG("html").addClass("js-nav"),
        $GG(this).parent().addClass("selected"),
        $GG(".OverlayCon").addClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "0px"
        }, 500))
    }),
    $GG(".CatBtnOverlay,.OverlayCon").click(function() {
        $GG("html").removeClass("js-nav"),
        $GG(".CatBtnOverlay").parent().removeClass("selected"),
        $GG(".OverlayCon").removeClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "0px"
        }, 500)
    }),
    $GG(".SearchBtn").click(function() {
        $GG(this).hasClass("selected") ? ($GG(".OverlayCon").removeClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "0px"
        }, 500)) : ($GG(".OverlayCon").addClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "-49px"
        }, 500)),
        $GG(this).toggleClass("selected")
    }),
    $GG(".MobileSBtn").click(function() {
        $GG(".SearchBtn").removeClass("selected"),
        $GG(".OverlayCon").removeClass("Show"),
        $GG("#MobileSearch").animate({
            bottom: "0px"
        }, 500)
    }),
    $GG("#Menu-Banner").length > 0 && $GG("#search_word").focus(),
    $GG(document).bind("click", function(a) {
        var b = $GG(a.target);
        b.hasClass("search-cat-icon") || b.parent().hasClass("search-cat-icon") || b.parent().hasClass("searchCatList") || b.parent().parent().hasClass("searchCatList") || $GG("#searchCatMenu").fadeOut(200)
    }),
    $GG(".mega_menu, .megalist-arrow").click(function() {
        if (0 == $GG(".MegaMenuCon .mega_menu.on").length)
            return $GG(".mega_menu").addClass("on"),
            $GG("#MegaMenuList").show().stop().animate({
                top: "50px"
            }, 600),
            c = !1,
            $GG("#searchCatMenu").fadeOut(200),
            !1;
        $GG("#MegaMenuList .MenuListCon").trigger("mouseleave")
    }),
    $GG("#MegaMenuList .MegaMenu-t").mouseleave(function() {
        $GG(".mega_menu").removeClass("on"),
        $GG("#MegaMenuList").stop().animate({
            top: "100px"
        }, 400, function() {
            $GG(this).hide()
        })
    }),
    $GG("#topContainer").hover(function() {
        $GG(this).addClass("max-top")
    }, function() {
        $GG(this).removeClass("max-top")
    }),
    $GG(".return-top").click(function() {
        return $GG("body,html").animate({
            scrollTop: 0
        }, 800),
        !1
    }),
    $GG(window).scroll(function() {
        GGMobileMenu = $GG("#smartbanner").height() + $GG("#MastheadBannerController").height(),
        isAndoridOldVersion || $GG(this).scrollTop() > GGMobileMenu || $GG(this).scrollTop()
    }),
    navigator.userAgent.indexOf("MSIE") > -1 && $GG("#BannerArea").length < 1 && $GG(".NYTop,.NYTopLink").show(),
    TooltipWH();
    var d = navigator.userAgent;
    if (d.indexOf("MSIE") > 0 && ($GG("td").each(function() {
        "#ffcf00" == $GG(this).attr("bgcolor") && $GG(this).css({
            "line-height": "0",
            "font-size": "0"
        })
    }),
    d.indexOf("MSIE 9") > 0 && $GG(".inputF").addClass("inputold"),
    d.indexOf("MSIE 6") > 0 && $GG(".uyelik_detay_pos").width($GG("#sample .left").width() + 30)),
    $GG("#profile_icon,.profileName").click(function() {
        return "none" != $GG("#profileMenu").css("display") ? $GG("#HeadUserNav").trigger("mouseleave") : ($GG("#HeadMenuBar").addClass("posTop"),
        $GG(".profile_icon").addClass("on"),
        $GG("#profileMenu").fadeIn(200),
        $GG("#yardimMenu").fadeOut(200),
        $GG("#searchCatMenu").fadeOut(200)),
        !1
    }),
    $GG("#HeadUserNav").mouseleave(function() {
        $GG(".profileMenu").parent().hasClass("quickTour") || ($GG(".profile_icon").removeClass("on"),
        $GG("#profileMenu").fadeOut(200),
        $GG("#HeadMenuBar").removeClass("posTop"))
    }),
    $GG("#yardim_icon").click(function() {
        return "none" != $GG("#yardimMenu").css("display") ? $GG("#yardimMenu_container").trigger("mouseleave") : ($GG("#HeadMenuBar").addClass("posTop"),
        $GG("#yardimMenu").fadeIn(200),
        $GG("#profileMenu").fadeOut(200),
        $GG("#searchCatMenu").fadeOut(200)),
        !1
    }),
    $GG("#yardimMenu_container").mouseleave(function() {
        $GG("#yardimMenu").fadeOut(200),
        $GG("#HeadMenuBar").removeClass("posTop")
    }),
    $GG("#selectedCatTxt").click(function() {
        return $GG("#searchCatMenu").fadeIn(200),
        !1
    }),
    $GG("#searchCatMenu ul li a").click(function() {
        var a = $GG(this).attr("rel")
          , b = $GG(this).html();
        return $GG("#selectedCatTxt").attr("rel", a),
        "" != a ? ($GG("#selectedCatTxt").addClass("selected"),
        $GG("#selectedCatTxt").html(b)) : ($GG("#selectedCatTxt").removeClass("selected"),
        $GG("#selectedCatTxt").html("")),
        $GG("#searchCatMenu").fadeOut(200),
        autoCompleteController(),
        !1
    }),
    catSearch(),
    autoCompleteController(),
    $GG("a.info").hover(function() {
        $GG("#HeadRightTop").removeClass("posr").addClass("posr2"),
        $GG(".nav_bg").removeClass("posr2").addClass("posr")
    }, function() {
        $GG("#HeadRightTop").addClass("posr").removeClass("posr2"),
        $GG(".nav_bg").addClass("posr2").removeClass("posr")
    }),
    $GG(window).resize(function() {
        $GG("#search_word").length > 0 && $GG(".ui-menu").css("left", Math.round($GG("#search_word").offset().left) + "px")
    }),
    $GG("#breadcrumb").length > 0) {
        !!window.chrome && $GG("#breadcrumb").addClass("chrome")
    }
    if ($GG(".info-bar").length > 0) {
        var e = $GG(".close-info-btn").attr("rev")
          , f = getCookie(e);
        "close" == f && $GG(".info-bar").remove(),
        $GG(".close-info-btn").click(function() {
            $GG(this).parent(".info-bar").fadeOut(),
            null == f && setCookie(e, "close", 500)
        })
    }
    mastheadShowType = new _gg.communication.cookieCommunication,
    mastheadShowType.referenceName = "mastheadShowType"
}),
$("#search_word").on("keydown", function(a) {
    13 == a.keyCode && submitCategory()
}),
jQuery("#search_word").live("focus", function() {
    "" == jQuery(this).val() && jQuery(this).parent().next().show()
}),
jQuery("#search_word").live("paste", function() {
    "" == jQuery(this).val() && jQuery(this).parent().next().hide()
}),
jQuery("#search_word").live("blur", function() {
    "" == jQuery(this).val() && jQuery(this).parent().next().show()
}),
jQuery("#search_word").live("keyup", function(a) {
    8 == a.keyCode && "" == jQuery(this).val() && jQuery(this).parent().next().show()
}),
GG.Static = {},
GG.Static.Enums = {
    pageTypes: {
        IE10: "IE10",
        IOS: "IOS",
        ANDROID: "ANDROID",
        BROWSER: "BROWSER"
    },
    browserTypes: {
        SUPPORTED_BROWSER: "SUPPORTED_BROWSER",
        UNSUPPORTED_BROWSER: "UNSUPPORTED_BROWSER"
    },
    lang: {
        TR: "Turkish",
        ENG: "English"
    },
    currency: {
        TRL: "TL",
        EUR: "E",
        USD: "$"
    },
    environment: {
        DEV: "development",
        PROD: "production"
    },
    responsiveParameters: {
        mobile: 0,
        mobileWide: 480,
        tablet: 768,
        desktop: 980,
        large_desktop: 1200
    },
    responsiveParameterNames: {
        mobile: "mobile",
        tablet: "tablet",
        desktop: "desktop",
        large_desktop: "large_desktop"
    },
    activeMobileParams: {
        isDesktop: !0,
        isMobileDevice: !1,
        isIOS: !1,
        isANDROID: !1
    },
    FireEvents: {
        RESPONSIVE_CHANGE: "RESPONSIVE_CHANGE"
    },
    classNames: {
        PRE_LOADER: "gg-pre-loader",
        HIDDEN: "hidden"
    },
    iconClassNames: {
        shopping_cart: "icon-shopping-cart",
        chevron_right: "icon-chevron-right",
        chevron_left: "icon-chevron-left",
        chevron_down: "icon-chevron-down",
        chevron_up: "icon-chevron-up",
        remove_circle: "icon-remove-sign",
        plus: "icon-plus",
        minus: "icon-minus"
    },
    directions: {
        horizontal: "horizontal",
        vertical: "vertical"
    },
    transitions: {
        slide: "slide",
        fade: "fade"
    },
    positions: {
        top: "top",
        topLeft: "topLeft",
        topRight: "topRight",
        bottom: "bottom",
        bottomLeft: "bottomLeft",
        bottomRight: "bottomRight",
        center: "center",
        centerTop: "centerTop",
        centerBottom: "centerBottom",
        centerRight: "centerRight",
        centerLeft: "centerLeft",
        right: "right",
        left: "left"
    },
    inputValidationParams: {
        number: "keyBlocker-input-number",
        text: "keyBlocker-input-text"
    }
},
GG.Static.globalParameters = {
    environment: GG.Static.Enums.environment.DEV,
    frameworkVersion: "0.1",
    lang: GG.Static.Enums.lang.TR,
    currency: GG.Static.Enums.currency.TR,
    responsiveState: GG.Static.Enums.responsiveParameterNames.desktop
},
GG.ExternalController = {
    jquery: $GG
},
GG.LayoutController = function() {}
,
GG.LayoutController.prototype.EventController = function() {
    return this.touchMode = !1,
    this.Actions = {
        DOWN: "mousedown",
        FOCUS: "focus",
        BLUR: "blur",
        CHANGE: "change",
        UP: "mouseup",
        OVER: "mouseover",
        MOVE: "mousemove",
        CLICK: "click",
        CANCEL: "mouseleave",
        LEAVE: "mouseleave",
        KEYUP: "keyup",
        KEYDOWN: "keydown",
        KEYPRESS: "keypress",
        ONINPUT: "input",
        COPY_PASTE: "copy paste",
        SCROLL_HORIZONTAL: "scroll",
        RESIZE: "resize"
    },
    _gg.pageType === GG.Static.Enums.pageTypes.IOS || _gg.pageType === GG.Static.Enums.pageTypes.ANDROID ? (this.touchMode = !0,
    this.Actions = {
        CHANGE: "change",
        FOCUS: "focus",
        BLUR: "blur",
        DOWN: "touchstart",
        UP: "touchend",
        OVER: "touchstart",
        MOVE: "touchmove",
        CLICK: "click",
        CANCEL: "touchcancel",
        LEAVE: "touchcancel",
        KEYUP: "keyup",
        KEYDOWN: "keydown",
        KEYPRESS: "keypress",
        ONINPUT: "input",
        COPY_PASTE: "copy paste",
        SCROLL_HORIZONTAL: "touchmove",
        RESIZE: "touchend"
    }) : _gg.pageType === GG.Static.Enums.pageTypes.W8 && (this.touchMode = !0,
    this.Actions = {
        CHANGE: "change",
        FOCUS: "focus",
        BLUR: "blur",
        DOWN: "MSPointerDown",
        UP: "MSPointerUp",
        OVER: "mouseover",
        MOVE: "MSPointerMove",
        CLICK: "click",
        CANCEL: "MSPointerCancel",
        LEAVE: "MSPointerUp",
        KEYUP: "keyup",
        KEYDOWN: "keydown",
        KEYPRESS: "keypress",
        ONINPUT: "input",
        COPY_PASTE: "copy paste",
        SCROLL_HORIZONTAL: "MSPointerMove",
        RESIZE: "MSPointerUp"
    }),
    this
}
,
GG.LayoutController.prototype.BrowserTypeController = function() {
    var a = GG.Static.Enums.browserTypes.SUPPORTED_BROWSER;
    return navigator.userAgent.indexOf("MSIE") > -1 && navigator.userAgent.indexOf("Trident") > -1 && navigator.userAgent.indexOf("8.0") > -1 && (a = GG.Static.Enums.browserTypes.UNSUPPORTED_BROWSER),
    navigator.userAgent.indexOf("MSIE 7.0") > -1 && (a = GG.Static.Enums.browserTypes.UNSUPPORTED_BROWSER),
    a
}
,
GG.LayoutController.prototype.PageTypeController = function() {
    var a = GG.Static.Enums.pageTypes.BROWSER
      , b = navigator.userAgent;
    return "ontouchstart"in window && (GG.Static.Enums.activeMobileParams.isMobileDevice = !0,
    GG.Static.Enums.activeMobileParams.isDesktop = !1,
    b.match(/iPad/i) || b.match(/iPhone/i) || b.match(/iPod/i) ? (a = GG.Static.Enums.pageTypes.IOS,
    GG.Static.Enums.activeMobileParams.isIOS = !0) : b.match(/Android/i) && (a = GG.Static.Enums.pageTypes.ANDROID,
    GG.Static.Enums.activeMobileParams.isANDROID = !0),
    a != GG.Static.Enums.pageTypes.BROWSER || navigator.userAgent.match(/Mobile/i) || (GG.Static.Enums.activeMobileParams.isMobileDevice = !1,
    GG.Static.Enums.activeMobileParams.isDesktop = !0)),
    navigator.msMaxTouchPoints > 0 && (a = GG.Static.Enums.pageTypes.IE10),
    a
}
,
GG.LayoutController.prototype.ResponsiveController = function() {
    var a = _gg.externalController.jquery;
    this.parameters = _gg.static.Enums.responsiveParameters;
    var b = this;
    this.checkRangeController = function(a, b) {
        var c, d = 0, e = b || !1;
        for (var f in this.parameters) {
            var g = this.parameters[f];
            a > d && (a >= g ? c = f : d = g)
        }
        return e || "mobileWide" == c && (c = "mobile"),
        c
    }
    ,
    _gg.static.globalParameters.responsiveState = this.checkRangeController(a(window).width()),
    $GG(document).on("ready", function() {
        _gg.static.globalParameters.responsiveState = b.checkRangeController(a(document).width())
    }),
    $GG(window).resize(function() {
        var c = a(document).width();
        b.checkRangeController(c, !0) != _gg.static.globalParameters.responsiveState && (_gg.static.globalParameters.responsiveState = b.checkRangeController(c),
        a(document).trigger(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE))
    }),
    $GG(window).on("orientationchange", function() {
        var c = a(this).width();
        _gg.static.globalParameters.responsiveState = b.checkRangeController(c),
        a(document).trigger(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE)
    })
}
,
GG.Utilities = {},
GG.Utilities.hasMediaQuerySupport = function() {
    var a = document.createElement("div");
    return a.className = "mediatest",
    document.body.appendChild(a),
    !(!window.getComputedStyle || "absolute" != window.getComputedStyle(a).position) || (document.body.removeChild(a),
    !1)
}
,
GG.Utilities.initResp = function(a, b) {
    for (var c in _gg.static.Enums.responsiveParameterNames)
        a[_gg.static.Enums.responsiveParameterNames[c]] = b
}
,
GG.Utilities.guidGenerator = function() {
    function a() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }
}(),
GG.prototype.EnvironmentCheckState = function() {
    var a = !1;
    GG.Static.globalParameters.environment == GG.Static.Enums.environment.DEV && (a = !0),
    window.console || (window.console = {}),
    a || (window.console.log = function() {}
    ,
    window.console.warn = function() {}
    ,
    window.console.info = function() {}
    ,
    window.console.error = function() {}
    ,
    window.console.trace = function() {}
    ,
    window.alert = function() {}
    )
}
,
GG.Components = function() {
    return this.appType = "component",
    this
}
,
GG.Communication = function() {}
,
GG.Widgets = function() {}
;
var _gg;
_gg = new GG,
_gg.setInstances(),
_gg.init(),
$GG(function() {
    var a = "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/default/";
    setImgOnErr(a),
    $GG(document).ajaxComplete(function() {
        setImgOnErr(a)
    })
}),
GG.LayoutController.prototype.ImgDimensionController = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        targetContainerSelector: "body",
        targetImgSelector: "img"
    };
    this.config = b.extend(c, a),
    this.mainContainer = b(this.config.targetContainerSelector)
}
,
GG.LayoutController.prototype.ImgDimensionController.prototype.init = function() {
    var a = GG.ExternalController.jquery
      , b = this;
    this.resizeAction(),
    a(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
        b.resizeAction()
    })
}
,
GG.LayoutController.prototype.ImgDimensionController.prototype.resizeAction = function() {
    var a = GG.ExternalController.jquery;
    this.targetImagesObject = this.mainContainer.find(this.config.targetImgSelector),
    this.targetImagesObject.each(function(b, c) {
        var d = a(c)
          , e = d.width()
          , f = d.height();
        0 != f && 0 != e && d.attr({
            width: e,
            height: f
        })
    })
}
;
var _ggLumberjackController = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        url: "",
        params: "",
        type: "POST",
        defaults: "1"
    };
    this.config = b.extend(c, a),
    this.send = function() {
        var a = this
          , b = {
            type: a.config.type,
            dataType: "json",
            data: a.config.params,
            url: a.config.url,
            communicationType: "application/x-www-form-urlencoded; charset=UTF-8"
        };
        this.ajaxLumberjack = new _gg.communication.ajaxController(b),
        this.ajaxLumberjack.tryOnce = !1,
        this.ajaxLumberjack.ajaxAction(),
        this.ajaxLumberjack.completeReq = function(a) {}
    }
}
  , ggRecommendationController = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        recomType: "",
        pageType: ""
    };
    this.config = b.extend(c, a),
    this.productsArray = [],
    this.resultData = {},
    this.errorStatus = !1,
    this.modalData = [],
    this.pending = !0,
    this.timeOutSecond = 1e4,
    this.timeOutController()
};
ggRecommendationController.prototype.timeOutController = function() {
    var a = this;
    window.setTimeout(function() {
        a.pending && !a.errorStatus && a.errorOrNullDataController()
    }, a.timeOutSecond)
}
,
ggRecommendationController.prototype.init = function(a) {
    if (this.resultData = a,
    0 == this.resultData.length)
        return void this.errorOrNullDataController();
    this.createModal(),
    this.errorStatus || this.pageObserver()
}
,
ggRecommendationController.prototype.objectController = function(a) {
    for (var b = !0, c = 0; c < a.length; c++)
        if (!a[c])
            return this.errorStatus = !0,
            void (b = !1);
    return b
}
,
ggRecommendationController.prototype.errorOrNullDataController = function() {
    switch (this.config.pageType) {
    case "HOME_PAGE":
        homePageScriptController.functions.recomServicesEmptyOrNullController();
        break;
    case "ITEM_PAGE":
        break;
    case "SEARCH_RESULT_NOT_FOUND":
        findoSearchResultController.functions.recomServicesEmptyOrNullController();
        break;
    case "CATEGORY_PAGE":
        mainCategoryScriptController.functions.recomServicesEmptyOrNullController()
    }
}
,
ggRecommendationController.prototype.createModal = function() {
    function a(a) {
        var b = /\\u([\d\w]{4})/gi;
        return a = a.replace(b, function(a, b) {
            return String.fromCharCode(parseInt(b, 16))
        }),
        unescape(a)
    }
    var b = this;
    switch (this.config.recomType) {
    case "gg":
        var c = this.resultData;
        if (0 == c.length)
            return;
        for (var d = 0; d < c.length; d++) {
            var e = {};
            switch (e.recType = "gg",
            this.config.pageType) {
            case "CATEGORY_PAGE":
            case "SEARCH_RESULT_NOT_FOUND":
            case "BASKET":
                if (!b.objectController([c[d].url, c[d].image, c[d].price, c[d].title]))
                    return void b.errorOrNullDataController();
                e.id = c[d].productId,
                e.link = c[d].url + "?rcp_action=" + b.getParameter(),
                e.imageUrl = c[d].image.replace(/tn14/g, "tn24"),
                e.price = c[d].price,
                e.title = c[d].title,
                e.subTitle = c[d].subtitle,
                e.freeCargo = c[d].freeShipping;
                try {
                    e.imageUrl = e.imageUrl.replace("http:", "https:")
                } catch (a) {}
                this.modalData.push(e);
                break;
            case "HOME_PAGE":
                if (!b.objectController([c[d].url, c[d].image, c[d].price, c[d].title]))
                    return void b.errorOrNullDataController();
                e.id = c[d].productId,
                e.link = c[d].url + "?rcp_action=" + b.getParameter(),
                e.imageUrl = c[d].image.replace(/tn14/g, "tn24").replace(/http:/g, "https:"),
                e.price = c[d].price,
                e.title = c[d].title,
                e.subTitle = c[d].subtitle,
                e.freeCargo = c[d].freeShipping,
                this.modalData.push(e);
                break;
            case "ITEM_PAGE":
                if (!b.objectController([c[d].productUrl, c[d].imageUrl, c[d].price, c[d].title]))
                    return void b.errorOrNullDataController();
                e.id = c[d].id,
                e.link = c[d].productUrl + "?rcp_action=" + b.getParameter(),
                e.imageUrl = c[d].imageUrl.replace(/tn14/g, "tn24").replace(/http:/g, "https:"),
                e.price = c[d].price,
                e.title = c[d].title,
                e.energyEfficiency = c[d].energyEfficiency,
                e.subTitle = "",
                e.freeCargo = !1,
                this.modalData.push(e);
                break;
            case "PASSIVE_ITEM_PAGE":
                if (!b.objectController([c[d].url, c[d].photos, c[d].buyPrice, c[d].title]))
                    return void b.errorOrNullDataController();
                e.id = c[d].id,
                e.link = c[d].url + "?rcp_action=" + b.getParameter(),
                e.imageUrl = c[d].photos,
                e.price = c[d].buyPrice,
                e.title = c[d].title,
                e.energyEfficiency = c[d].energyEfficiency,
                e.subTitle = "",
                e.freeCargo = !1,
                this.modalData.push(e)
            }
        }
        break;
    case "gr":
        var f = this.resultData.items;
        if (0 == f.length)
            return;
        for (var d = 0; d < f.length; d++) {
            var e = {};
            e.recType = "gr";
            var g = f[d].url || "";
            e.link = g + "?rcp_action=" + b.getParameter(),
            e.imageUrl = f[d].imageUrl.replace(/http:/g, "https:"),
            e.price = f[d].price || "",
            e.title = f[d].title || "",
            e.subTitle = "",
            e.member = f[d].member || "",
            e.shippingFee = f[d].shippingFee || "",
            e.shippingDate = f[d].shippingDate || "",
            e.freeCargo = !1;
            var h = f[d].url.split("-");
            e.id = h[h.length - 1],
            "FREE" == f[d].shippingFee && (e.freeCargo = !0),
            this.modalData.push(e)
        }
        break;
    case "rr":
        var i = this.resultData[0].items;
        if (0 == i.length)
            return;
        for (var j = 0; j < i.length; j++) {
            if (!b.objectController([i[j].link_url, i[j].image_url, i[j].price, i[j].name]))
                return void b.errorOrNullDataController();
            var e = {};
            e.recType = "rr",
            e.link = a(i[j].link_url.split("&ct=")[1]) + "?rcp_action=" + b.getParameter(),
            e.imageUrl = i[j].image_url,
            e.price = i[j].price,
            e.recomLink = a(i[j].link_url.split("&ct=")[0]),
            e.title = i[j].name;
            try {
                e.title = a(e.title)
            } catch (a) {}
            e.subTitle = "",
            e.freeCargo = 0,
            this.modalData.push(e)
        }
    }
}
,
ggRecommendationController.prototype.getParameter = function() {
    var a = "";
    switch (this.config.pageType) {
    case "HOME_PAGE":
        a = "rcmProductClicked";
        break;
    case "ITEM_PAGE":
        a = "rcpProductClicked";
        break;
    case "PASSIVE_ITEM_PAGE":
        a = "rceProductClicked";
        break;
    case "SEARCH_RESULT_NOT_FOUND":
        a = "rcsProductClicked";
        break;
    case "CATEGORY_PAGE":
        a = "rckProductClicked";
        break;
    case "BASKET":
        a = "rccProductClicked2";
        break;
    case "ORDER_SUCCESS":
        a = "rcoProductClicked"
    }
    return a
}
,
ggRecommendationController.prototype.pageObserver = function() {
    if (this.pending = !1,
    0 != this.modalData.length)
        switch (this.config.pageType) {
        case "HOME_PAGE":
            try {
                homePageScriptController.functions.recomServicesController(this.modalData)
            } catch (a) {
                this.errorOrNullDataController()
            }
            break;
        case "ITEM_PAGE":
            productPageScriptController.functions.recommendationServicesController(this.modalData);
            break;
        case "PASSIVE_ITEM_PAGE":
            productPageScriptController.functions.recommendationPassiveItemServicesController(this.modalData);
            break;
        case "SEARCH_RESULT_NOT_FOUND":
            findoSearchResultController.functions.recommendationEngineController(this.modalData);
            break;
        case "CATEGORY_PAGE":
            mainCategoryScriptController.functions.recommendationServicesController(this.modalData);
            break;
        case "BASKET":
            try {
                recommendationPageController(this.modalData, !0)
            } catch (a) {}
            break;
        case "ORDER_SUCCESS":
            try {
                recommendationPageController(this.modalData, !1)
            } catch (a) {}
        }
}
,
ggRecommendationController.prototype.getAjaxConfig = function() {
    var a = {};
    switch (a.params = {},
    this.config.pageType) {
    case "CATEGORY_PAGE":
        a.url = $GG("#main-route").val() + "/user-feeds?responsive=true",
        a.params.urlParameter = "&page=",
        a.params.urlKey = this.config.urlKey,
        a.params.categories = this.config.categories;
        break;
    case "SEARCH_RESULT_NOT_FOUND":
    case "HOME_PAGE":
        a.url = $GG("#main-route").val() + "/user-feeds?responsive=true",
        a.params.urlParameter = "&page=",
        a.params.urlKey = this.config.urlKey;
        break;
    case "ITEM_PAGE":
        break;
    case "PASSIVE_ITEM_PAGE":
        a.url = productPageScriptController.ajaxHost + "/similar-products",
        a.params.categoryCode = this.config.category,
        a.params.productId = this.config.productId,
        a.params.listCount = this.config.count,
        a.params.productTitle = this.config.title;
        break;
    case "BASKET":
        a.url = ggCart.functions.getServerName + "/recom-product-service?",
        a.url += "categoryId=" + this.config.categoryId,
        a.url += "&start=" + this.config.start,
        a.url += "&row=" + this.config.row,
        a.url += "&autoFill=" + this.config.autofill,
        this.config.hasOwnProperty("hasVariant") && (a.url += "&hasVariant=" + this.config.hasVariant);
        break;
    case "ORDER_SUCCESS":
        a.url = "http://www.gittigidiyor.com/recom-product-service?",
        a.url += "categoryId=" + this.config.categoryId,
        a.url += "&start=" + this.config.start,
        a.url += "&row=" + this.config.row,
        a.url += "&autoFill=" + this.config.autofill,
        this.config.hasOwnProperty("hasVariant") && (a.url += "&hasVariant=" + this.config.hasVariant);
        break;
    default:
        a.url = "",
        a.params = {}
    }
    return a
}
,
ggRecommendationController.prototype.preRenderAction = function(a) {
    var b = this;
    switch (this.config.pageType) {
    case "CATEGORY_PAGE":
    case "SEARCH_RESULT_NOT_FOUND":
    case "HOME_PAGE":
        null != a && b.init(a);
        break;
    case "ITEM_PAGE":
        null != a.result && b.init(a.result.viewedProductTypeList);
        break;
    case "PASSIVE_ITEM_PAGE":
        null != a.similarProducts && b.init(a.similarProducts)
    }
}
,
ggRecommendationController.prototype.call = function() {
    var a = this
      , b = !1;
    a.ajaxConfig = a.getAjaxConfig();
    var c = {};
    $GG.ajax({
        type: "POST",
        url: a.ajaxConfig.url,
        data: a.ajaxConfig.params,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        beforeSend: function() {
            a.pendingRequest = !0
        },
        success: function(a) {
            c = a,
            b = !0
        },
        complete: function(d, e) {
            0 == b ? (c = {},
            a.errorOrNullDataController()) : a.preRenderAction(c)
        },
        error: function() {
            b = !1
        }
    })
}
,
$GG(".recommendation-navigation-controller").live("click", function(a) {
    a.preventDefault(),
    a.stopPropagation(),
    a.stopImmediatePropagation();
    var b = $GG(this).attr("data-recom")
      , c = $GG(this).attr("href");
    $GG.post(b, function() {}),
    window.location = c
}),
$GG(".recommendation-navigation-controller").live("click", function(a) {
    a.preventDefault(),
    a.stopPropagation();
    var b = $GG(this).attr("data-recom")
      , c = $GG(this).attr("href");
    $GG.post(b, function() {}),
    window.location = c
}),
$GG(".recommendation-gravity-target").live("click", function(a) {
    var b = $GG(this).attr("data-id");
    try {
        _gravity.push({
            type: "event",
            eventType: "REC_CLICK",
            itemId: b
        })
    } catch (a) {}
});
var _segmentationController = {
    segmentationCallback: function() {},
    completeRequest: !1,
    isLoyal: !1,
    init: function(a) {
        this.functions.constructor = this,
        this.username = !1,
        this.memberId = !1,
        this.currentTime = !1,
        this.functions.constructor = this,
        this.mSegments = {},
        this.config = a,
        this.functions.setVariable(),
        this.functions.getCallAction()
    },
    functions: {
        addLoyalityBadge: function(a, b) {
            var c = b;
            $GG(a).append($GG('<div id="loyalTooltip" class="srp-loyalTooltip srp-loyalTooltip-list InfoBox hidden-m" />').append($GG('<div class="InfoBubble"/>').append($GG('<div class="Arroww srp-arrow"/>')).append($GG("<p/>").html(c)).append($GG('<a href="http://www.gittigidiyor.com/gittigidiyor-kazananlar-kulubu"/>').html("Detaylı bilgi"))))
        },
        changeAction: function(a) {
            try {
                var b = this.constructor;
                null == a && this.callback({}),
                0 == b.memberId ? ($GG(".srp-loyalty-area").live(_gg.controller.events.Actions.OVER, function(a) {
                    $GG("#UserBandInfo").hide(),
                    $GG("#loyalTooltip").hide(),
                    0 == $GG(this).children("#loyalTooltip").length && b.functions.addLoyalityBadge(this, "Bu ürün, GittiGidiyor Kazananlar Kulübü üyelerine indirimli"),
                    $GG("#loyalTooltip").show()
                }),
                $GG(".srp-loyalty-area").live(_gg.controller.events.Actions.LEAVE, function(a) {
                    $GG("#loyalTooltip").remove()
                })) : null != a[29] ? (_segmentationController.isLoyal = !0,
                $GG("#loyalty-icon").live(_gg.controller.events.Actions.OVER, function(a) {
                    $GG("#UserBandInfo").hide(),
                    0 == $GG(this).children("#loyalTooltip").length && b.functions.addLoyalityBadge(this, "Tebrikler, GittiGidiyor Kazananlar Kulübü’ndesiniz."),
                    $GG("#loyalTooltip").show()
                }),
                $GG("#loyalTooltip").live(_gg.controller.events.Actions.LEAVE, function(a) {
                    $GG("#loyalTooltip").remove()
                }),
                $GG("#loyalty-icon").removeClass("hidden"),
                $GG(".GGMobileIcons_loyalty").removeClass("hidden"),
                $GG(".srp-loyalty-area").live(_gg.controller.events.Actions.OVER, function(a) {
                    $GG("#UserBandInfo").hide(),
                    0 == $GG(this).children("#loyalTooltip").length && b.functions.addLoyalityBadge(this, "GittiGidiyor Kazananlar Kulübü üyelerine özel indirimli ürün"),
                    $GG("#loyalTooltip").show()
                }),
                $GG(".srp-loyalty-area").live(_gg.controller.events.Actions.LEAVE, function(a) {
                    $GG("#loyalTooltip").remove()
                })) : ($GG("#loyalTooltip").live(_gg.controller.events.Actions.LEAVE, function(a) {
                    $GG("#loyalTooltip").remove()
                }),
                $GG(".srp-loyalty-area").live(_gg.controller.events.Actions.OVER, function(a) {
                    $GG("#UserBandInfo").hide(),
                    0 == $GG(this).children("#loyalTooltip").length && b.functions.addLoyalityBadge(this, "Bu ürün, GittiGidiyor Kazananlar Kulübü üyelerine indirimli"),
                    $GG("#loyalTooltip").show()
                }),
                $GG(".srp-loyalty-area").live(_gg.controller.events.Actions.LEAVE, function(a) {
                    $GG("#loyalTooltip").remove()
                })),
                _segmentationController.completeRequest = !0,
                _segmentationController.segmentationCallback()
            } catch (a) {
                console.log(a)
            }
        },
        setVariable: function() {
            var a = this.constructor;
            try {
                a.username = a.config.username,
                a.currentTime = a.config.currentTime,
                a.memberId = a.config.memberId
            } catch (a) {}
        },
        getCallAction: function() {
            var a = this.constructor;
            if (0 == a.username || null == a.username)
                return void this.callback({});
            var b = this.getUserSegmentData();
            try {
                b && 0 != Object.keys(b).length && 0 != (b.data && b.expireDate > a.currentTime && b.username == a.username) ? (this.callback(b.data),
                a.functions.changeAction(b.data)) : this.localUserSegmentAjaxCall(a)
            } catch (a) {
                this.callback({})
            }
        },
        callback: function(a) {
            this.constructor.config.callback(a),
            a.memberId = this.constructor.memberId,
            this.constructor.config.ggCallback(a)
        },
        localUserSegmentAjaxCall: function(a) {
            a.pendingRequest = !1;
            var b = !1
              , c = {};
            $GG.ajax({
                type: "GET",
                url: "/xhr/member/crm-segments-ajax",
                data: "",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function() {
                    a.pendingRequest = !0
                },
                success: function(c) {
                    var d = JSON.stringify(c);
                    a.functions.setUserSegmentData(d),
                    b = !0,
                    a.functions.callback(c.data),
                    a.functions.changeAction(c.data)
                },
                complete: function(d, e) {
                    a.pendingRequest = !1,
                    0 == b && (c = {})
                },
                error: function() {
                    b = !1
                }
            })
        },
        setUserSegmentData: function(a) {
            try {
                localStorage && localStorage.setItem("bcrmsgmnt", a)
            } catch (a) {}
        },
        getUserSegmentData: function() {
            try {
                if (localStorage)
                    return JSON.parse(localStorage.getItem("bcrmsgmnt"))
            } catch (a) {}
            return !1
        }
    }
}
  , segmentationControllerAction = function(a) {
    var b = function(b) {
        try {
            var c = b || {}
              , d = !1
              , e = "FALSE";
            void 0 != a.memberId && null != a.memberId ? e = "TRUE" : void 0 !== a.registeredMemberId && null !== a.registeredMemberId && (d = !0),
            d ? (c = {},
            c.TRACKING_SUID = a.registeredMemberId) : (c.TRACKING_SUID = a.cookieMemberId,
            c.TRACKING_USERNAME = a.username,
            c.TRACKING_SUID_RECOG = e),
            window.execute_wiso(c)
        } catch (a) {
            console.log(a)
        }
    }
      , c = {
        callback: b,
        username: a.username || "",
        currentTime: a.currentTime || "",
        memberId: a.memberId || "",
        ggCallback: _gg.segmentationCallback || function() {}
    };
    _segmentationController.init(c)
};
$GG(document).on("ready", function() {
    setLoginAction.push(segmentationControllerAction)
}),
GG.Communication.prototype.cookieCommunication = function() {
    var a = this;
    return a.referenceName = _gg.utilities.guidGenerator(),
    a.data = "",
    a.expire = 7,
    a.type = "string",
    a.raw = !1,
    a.json = !1,
    a.domain = "",
    this
}
,
GG.Communication.prototype.cookieCommunication.prototype.setCookie = function(a) {
    var b = GG.ExternalController.jquery;
    this.data = a,
    "object" == typeof a && (this.type = "object",
    this.raw = !0,
    this.json = !0),
    b.cookie.raw = this.raw,
    b.cookie.json = this.json,
    this.removeCookie(this.referenceName),
    b.cookie(this.referenceName, a, {
        path: "/",
        expires: this.expire,
        domain: this.domain
    })
}
,
GG.Communication.prototype.cookieCommunication.prototype.getCookie = function() {
    var a = GG.ExternalController.jquery;
    return "object" == this.type ? a.parseJSON(a.cookie(this.referenceName)) : a.cookie(this.referenceName)
}
,
GG.Communication.prototype.cookieCommunication.prototype.removeCookie = function() {
    GG.ExternalController.jquery.removeCookie(this.referenceName, {
        path: "/"
    })
}
,
GG.Utilities.androidSmartBannerController = function() {
    $GG("meta[name=google-play-app]").length > 0 && $GG.smartbanner()
}
;
function mobile_search_init() {
    $("#feedDataContainer") && 0 == $("#feedDataContainer").length && ($("#mobileTextSearch").css("display", "none"),
    $('div[data-role="content"]').css("margin-top", "55px"),
    $(".GGMobileIcons_search").removeClass("clicked")),
    $("#smartbanner") && (0 != $("#smartbanner").length && ($('div[data-role="page"]').css("margin-top", "80px"),
    $('div[data-role="content"]').css("margin-top", "0px")),
    0 == $("#smartbanner").length && 0 != $("#feedDataContainer").length && $('div[data-role="content"]').css("margin-top", "96px")),
    $("#GGMobileMenu") && ($('#GGMobileMenu input[name="search_word"]').focus(function(a) {
        "" != $('#GGMobileMenu input[name="search_word"]').val() && $("#GGMobileMenu #clear_input").css("display", "block")
    }),
    $('#GGMobileMenu input[name="search_word"]').keypress(function(a) {
        $("#GGMobileMenu #clear_input").css("display", "block")
    }),
    $('#GGMobileMenu input[name="search_word"]').bind("keyup", function(a) {
        8 == (a.keyCode ? a.keyCode : a.which) && 0 == $('#GGMobileMenu input[name="search_word"]').val().length && $("#GGMobileMenu #clear_input").trigger("click")
    }),
    $("#GGMobileMenu #clear_input") && $("#GGMobileMenu #clear_input").click(function() {
        $("#GGMobileMenu #clear_input").css("display", "none"),
        $('#GGMobileMenu input[name="search_word"]').attr("value", ""),
        $('#GGMobileMenu input[name="search_word"]').focus()
    })),
    $(".GGMobileIcons_search") && $(".GGMobileIcons_search").click(function() {
        1 == $(".GGMobileIcons_search").hasClass("clicked") ? ($(".topHiddenContainer").removeClass("opened"),
        $("#mobileTextSearch").css("display", "none"),
        $(".GGMobileIcons_search").removeClass("clicked"),
        $('div[data-role="content"]').length > 0 && 96 == $('div[data-role="content"]').offset().top && $('div[data-role="content"]').css("margin-top", "54px"),
        "block" == $("#searchCon_mobile_container").css("display") && $("#searchCon_mobile_container").css("top", "55px"),
        0 == $("#feedDataContainer").length && $('div[data-role="content"]').length > 0 && 96 == $('div[data-role="content"]').offset().top && $('div[data-role="content"]').css("margin-top", "55px")) : ($(".topHiddenContainer").addClass("opened"),
        $("#mobileTextSearch").css("display", "table"),
        $(".GGMobileIcons_search").addClass("clicked"),
        $('div[data-role="content"]').length > 0 && 54 == $('div[data-role="content"]').offset().top && $('div[data-role="content"]').css("margin-top", "96px"),
        "block" == $("#searchCon_mobile_container").css("display") && $("#searchCon_mobile_container").css("top", "96px"),
        0 == $("#feedDataContainer").length && $('div[data-role="content"]').length > 0 && 55 == $('div[data-role="content"]').offset().top && $('div[data-role="content"]').css("margin-top", "96px"))
    }),
    $(".searchPages") && 0 != $(".searchPages").length && ($(".GGMobileIcons_search").trigger("click"),
    $('#GGMobileMenu input[name="search_word"]').val($("#searchKeyword").val()),
    0 == $("#smartbanner").length ? $('div[data-role="content"]').css("margin-top", "96px") : $('div[data-role="content"]').css("margin-top", "0px")),
    $("#GGMobileCategoryBrowse") && $("#GGMobileCategoryBrowse").click(function() {
        1 == $(".GGMobileIcons_search").hasClass("clicked") && ($("#mobileTextSearch").css("display", "none"),
        $(".GGMobileIcons_search").removeClass("clicked"),
        $("#searchCon_mobile_container").css("top", "55px")),
        $("#searchCon_mobile_container").css("display", "block"),
        document.body.scrollTop = 0,
        $.ajax({
            url: "/ara/search-detail-box",
            type: "get",
            async: !0,
            success: function(a, b) {
                $(".mobile_search_2").html(a),
                searchCon_mobile_control()
            }
        })
    }),
    $("#mobileTextSearch .mobileSearchInpt") && $("#mobileTextSearch .mobileSearchInpt").keypress(function(a) {
        13 == a.which && (a.preventDefault(),
        gotoSearchResult())
    }),
    $(".search_mavi_buton") && $(".search_mavi_buton").click(function() {
        gotoSearchResult()
    })
}
function searchCon_mobile_control() {
    header_position_control(),
    $("#searchCon_mobile .mobileSearchInpt").focus(),
    $(".mobile_search_2 .mobileSearchCancel").click(function() {
        document.body.scrollTop = 0,
        $("#searchCon_mobile_container").css("display", "none"),
        $("#mobileTextSearch").css("display", "table"),
        $(".GGMobileIcons_search").addClass("clicked"),
        $("#CategoryMenuMobile ul li").removeClass("menuon"),
        $("#CategoryMenuMobile ul li").siblings().css("display", "block")
    }),
    $("#searchCon_mobile #CategoryMenuBack").click(function() {
        $("#searchCon_mobile #mobileTextSearch").css("display", "block"),
        $("#searchCon_mobile #mobileCategory").css("display", "block"),
        $("#searchCon_mobile .mobileVeya").css("display", "block"),
        $("#searchCon_mobile .mobileSearchCancel").css("display", "block"),
        $("#searchCon_mobile #CategoryMenuMobile").css("display", "none"),
        $("#CategoryMenuMobile ul li").removeClass("menuon"),
        $("#CategoryMenuMobile ul li").siblings().css("display", "block"),
        $("#searchCon_mobile .nav_bg_input").focus()
    }),
    jQuery("#searchCon_mobile .mobileSearchInpt").keydown(function() {
        jQuery(this).siblings(".inputTxt").hide()
    }),
    jQuery("#searchCon_mobile .mobileSearchInpt").blur(function() {
        "" == jQuery(this).val() && jQuery(this).siblings(".inputTxt").html("Kelime ile Ara").show()
    }),
    jQuery(".inputTxt").click(function() {
        jQuery("#search_word").focus()
    }),
    jQuery("#CategoryMenuMobile ul li").click(function(a) {
        a.stopPropagation(),
        document.body.scrollTop = 0,
        jQuery(this).children("div").length > 0 && (0 == jQuery(this).hasClass("menuon") ? (jQuery(this).addClass("menuon"),
        $("li.menuon").siblings().css("display", "none")) : (jQuery(this).siblings().css("display", "block"),
        jQuery(this).removeClass("menuon")))
    })
}
function header_position_control() {
    "0px" != $("#smartbanner").css("top") && $("div [data-role=header]").css("position", "fixed")
}
function gotoSearchResult() {
    var a = "";
    if (-1 != window.location.origin.indexOf(".gittigidiyor.com") && (a = "https://www.gittigidiyor.com"),
    $("#GGMobileMenu .nav_bg_input").attr("value").length > 1) {
        var b = $("#GGMobileMenu .nav_bg_input").attr("value");
        executeSearchProp(b);
        var c = "arama/"
          , d = "";
        void 0 != $("#search_word_mobile-wrapper a:hover").attr("data-href") && (c = $("#search_word_mobile-wrapper a:hover").attr("data-href")),
        d = c.indexOf("?k") > -1 ? a + "/" + c : a + "/" + c + "?k=" + b,
        window.location.href = d
    }
}
function executeSearchProp(a) {
    try {
        var b = s_gi("ebaytkprod");
        document.location.href.indexOf("atolye") > 0 ? (b.linkTrackVars = "prop62,prop63",
        b.prop62 = a,
        b.prop63 = a) : (b.linkTrackVars = "prop62",
        b.prop62 = a),
        b.tl(this, "o", "Search Box:Internal Search")
    } catch (a) {}
}
function avp_zone(a) {
    avp_single("zone?zid=" + a.zid, a)
}
function avp_campaign(a) {
    avp_single("campaign?cid=" + a.cid, a)
}
function avp_media(a) {
    avp_single("media?mid=" + a.mid, a)
}
function avp_single(a, b) {
    var c = "https:" != window.location.protocol ? "http" : "https"
      , d = c + "://" + b.base
      , e = "";
    b.refresh && (e += "&refresh=" + b.refresh),
    b.refresh_limit && (e += "&refresh_limit=" + b.refresh_limit),
    b.click && (e += "&click=" + b.click),
    b.exit && (e += "&exit=" + b.exit),
    b.include && (e += "&include=" + b.include),
    b.exclude && (e += "&exclude=" + b.exclude),
    b.timeout && (e += "&timeout=" + b.timeout),
    e = avp_opts(b, e),
    b.iframe ? document.write('<iframe src="' + d + "/servlet/view/" + b.type + "/javascript/html/" + a + "&pid=" + b.pid + e + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"><a href="' + d + "/servlet/click/" + a + "&pid=" + b.pid + "&lookup=true" + e + '" rel="nofollow" target="_blank"><img src="' + d + "/servlet/view/" + b.type + "/javascript/image/" + a + "&pid=" + b.pid + e + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" border="0" alt="Click Here!"></a></iframe>') : document.write('<script src="' + d + "/servlet/view/" + b.type + "/javascript/" + a + "&pid=" + b.pid + e + '" type="text/javascript"><\/script>')
}
function avp_multiple(a) {
    var b = "https:" != window.location.protocol ? "http" : "https"
      , c = b + "://" + a.base
      , d = "grid" != a.renderer ? "&layout=" + a.layout : "&columns=" + a.columns;
    d = avp_opts(a, d),
    document.write('<script src="' + c + "/servlet/view/" + a.type + "/unique/javascript/" + a.renderer + "?zid=" + a.zid + "&pid=" + a.pid + "&total=" + a.total + "&padding=" + parseInt(a.padding || 0) + "&margin=" + parseInt(a.margin || 0) + d + '" type="text/javascript"><\/script>')
}
function avp_escape(a) {
    return !a.indexOf || -1 == a.indexOf("+") && -1 == a.indexOf("%") ? encodeURIComponent ? encodeURIComponent(a) : escape(a) : a
}
function avp_opts(a, b) {
    a.contextual && (b += "&contextual=" + a.contextual),
    a.crawler && (b += "&crawler=" + a.crawler,
    a.align && (b += "&align=" + a.align),
    a.closeable && (b += "&closeable=" + a.closeable),
    a.spacing && (b += "&spacing=" + a.spacing),
    a.bgcolor && (b += "&bgcolor=" + avp_escape(a.bgcolor)));
    for (var c = 1; c <= 10; c++)
        a["custom" + c] && (b += "&custom" + c + "=" + avp_escape(a["custom" + c]));
    if (a.echo) {
        b += "&echo=" + a.echo;
        for (var d = a.echo.split(","), e = 0; e < d.length; e++)
            a[d[e]] && (b += "&" + d[e] + "=" + avp_escape(a[d[e]]))
    }
    return a.keywords && (b += "&keywords=" + avp_escape(a.keywords)),
    a.language && (b += "&language=" + avp_escape(a.language)),
    a.lightbox && (b += "&lightbox=" + a.lightbox,
    a.autoclose && (b += "&autoclose=" + a.autoclose)),
    a.overlay && (b += "&overlay=" + a.overlay,
    a.autoclose && (b += "&autoclose=" + a.autoclose),
    a.spacing && (b += "&spacing=" + a.spacing),
    a.bgcolor && (b += "&bgcolor=" + avp_escape(a.bgcolor))),
    "pagepeel" == a.type && (a.color1 && (b += "&color1=" + avp_escape(a.color1)),
    a.color2 && (b += "&color2=" + avp_escape(a.color2)),
    a.anchor && (b += "&anchor=" + avp_escape(a.anchor))),
    "wallpaper" == a.type && (b += "&resolution=" + screen.width + "x" + screen.height),
    b += "&random=" + Math.floor(89999999 * Math.random() + 1e7),
    b += "&millis=" + (new Date).getTime(),
    a.cturl && (b += "&encode=" + parseInt(a.encode || 0)),
    b += "&referrer=" + avp_escape(document.location),
    a.cturl && (b += "&cturl=" + avp_escape(a.cturl)),
    b
}
function AVP_ActivateApplet(a, b) {
    a.writeln(b)
}
function AVP_ActivateFlash(a, b) {
    a.writeln(b)
}
function AVP_ActivateFlashByVersion(a, b, c, d) {
    var e = -1
      , f = navigator.userAgent.toLowerCase();
    if (null != navigator.plugins && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) {
        e = navigator.plugins["Shockwave Flash"].description.split(" ")[2].split(".")[0]
    } else if (-1 != f.indexOf("msie") && -1 != f.indexOf("win") && -1 == f.indexOf("opera"))
        for (var g = 15; g >= 3; g--)
            if (-1 == e)
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + g);
                    e = g
                } catch (a) {}
    a.writeln(e >= d || !c || 0 == c.length ? b : c)
}
GG.Communication.prototype.ajaxController = function(a) {
    var b = GG.ExternalController.jquery;
    defaults = {
        communicationType: "application/json; charset=utf-8",
        type: "POST",
        dataType: "json",
        url: "/",
        urlParameter: "",
        urlKey: "",
        data: "",
        timeOut: 1e4
    },
    this.config = b.extend(defaults, a),
    this.pendingRequest = !1,
    this.completeData = "",
    this.isDataNullorEmpty = !1,
    this.operationSuccess = !1,
    this.PENDING_REQ = "GG_AJAX_PENDING",
    this.COMPLETE_REQ = "GG_AJAX_COMPLETE",
    this.ERROR_REQ = "GG_AJAX_ERROR",
    this.SUCCESS_REQ = "GG_AJAX_SUCCESS"
}
,
GG.Communication.prototype.ajaxController.prototype.ajaxAction = function() {
    this.pendingRequest || ("POST" == this.config.type ? this.postAjaxAction() : "GET" == this.config.type && this.getAjaxAction())
}
,
GG.Communication.prototype.ajaxController.prototype.getAjaxAction = function() {
    if (!this.pendingRequest) {
        var a = GG.ExternalController.jquery
          , b = this
          , c = !1
          , d = "";
        a.ajax({
            type: b.config.type,
            url: b.config.url + b.config.urlParameter + b.config.urlKey,
            contentType: b.config.communicationType,
            dataType: b.config.dataType,
            beforeSend: function() {
                $GG(b).trigger(b.PENDING_REQ, b),
                b.pendingRequest = !0
            },
            success: function(a) {
                d = a,
                c = !0,
                $GG(b).trigger(b.SUCCESS_REQ, b)
            },
            complete: function(a, e) {
                b.operationSuccess = c,
                b.completeData = d,
                b.controlDataisNullorEmpty(),
                b.pendingRequest = !1,
                $GG(b).trigger(b.COMPLETE_REQ, b, c)
            },
            error: function(a) {
                b.completeData = a,
                c = !1,
                $GG(b).trigger(b.ERROR_REQ, b)
            }
        }),
        window.setTimeout(function() {
            c || (c = !1,
            $GG(b).trigger(b.ERROR_REQ, b))
        }, b.config.timeOut)
    }
}
,
GG.Communication.prototype.ajaxController.prototype.postAjaxAction = function() {
    if (!this.pendingRequest) {
        var a = GG.ExternalController.jquery
          , b = this
          , c = !1
          , d = {};
        a.ajax({
            type: b.config.type,
            url: b.config.url,
            data: b.config.data,
            contentType: b.config.communicationType,
            dataType: b.config.dataType,
            timeout: b.config.timeOut,
            beforeSend: function() {
                $GG(b).trigger(b.PENDING_REQ, b),
                b.pendingRequest = !0
            },
            success: function(a) {
                d = a,
                c = !0,
                b.completeData = a,
                b.pendingRequest = !1,
                $GG(b).trigger(b.SUCCESS_REQ, b)
            },
            complete: function(a, e) {
                b.operationSuccess = c,
                b.completeData = d,
                b.controlDataisNullorEmpty(),
                b.pendingRequest = !1,
                $GG(b).trigger(b.COMPLETE_REQ, b, c)
            },
            error: function(a) {
                c = !1,
                b.completeData = a,
                $GG(b).trigger(b.ERROR_REQ, b)
            },
            timeout: b.config.timeOut
        })
    }
}
,
GG.Communication.prototype.ajaxController.prototype.controlDataisNullorEmpty = function() {
    void 0 !== this.completeData && null != this.completeData && this.completeData !== {} && "" !== this.completeData && 0 != this.completeData.length || (this.isDataNullorEmpty = !0)
}
,
GG.Components.prototype.drilldown = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        containerId: "drilldown-container",
        transitionDuration: 500,
        allowScroll: !1,
        scrollTolerance: 0,
        resetOnClose: !1,
        ajaxControl: !1
    };
    this.config = b.extend(c, a),
    this.staticData = _gg.static.DrilldownStaticData,
    this.left = 0,
    this.container = b("#" + this.config.containerId),
    this.containerWidth = this.container.outerWidth(),
    this.moveActionBefore = this.left,
    this.animationInProgress = !1,
    this.ddCoverContainer = this.container.find("." + this.staticData.ddCoverContainer),
    this.ddUlContainer = this.container.find("." + this.staticData.ddUlContainer),
    this.containerHeight = b("." + this.staticData.ddUlContainer).height(),
    this.target = "",
    this.defaultHeigth = this.containerHeight,
    this.moveState = 0,
    this.HOME_STEP = "HOME_STEP_READY",
    this.ACTION_STEP = "ACTION_STEP_READY",
    this.BACK_STEP = "BACK_STEP_CLICK",
    this.CLOSE_ACTION = "CLOSE_ACTION_CLICK",
    this.AJAX_ACTION_READY = "ajax_ready"
}
,
GG.Components.prototype.drilldown.prototype.init = function() {
    var a = this;
    this.ddCoverContainer.height(a.containerHeight + "px"),
    this.container.addClass("drilldown-base-container");
    var b = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: ["drilldown go-back navigation"],
        htmlContent: "Geri"
    });
    this.ddHeadContainer = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: ["drilldown head-content"],
        htmlContent: ""
    });
    var c = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: ["drilldown go-close navigation"],
        htmlContent: ""
    });
    if (this.ddHeaderContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: ["drilldown-header clearfix"],
        htmlContent: [b, this.ddHeadContainer, c]
    }),
    this.container.prepend(this.ddHeaderContainer),
    this.ddCoverContainer.find("li").each(function(a) {
        $(this).find("ul:eq(0)").length > 0 && $(this).addClass("navigation-arrow")
    }),
    _gg.utilities.hasCss3Support) {
        var d = document.createElement("div")
          , e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
        for (var f in e)
            void 0 !== d.style[e[f]] && (this.cssPrefix = e[f].replace("Perspective", "").toLowerCase(),
            this.animProp = "-" + this.cssPrefix + "-transform")
    }
    this.config.allowScroll && (this.scrollTargetY = this.container.offset().top - this.config.scrollTolerance),
    this.eventController()
}
,
GG.Components.prototype.drilldown.prototype.resetEvent = function() {
    this.moveState = 0,
    "" != this.target && this.target.removeClass(this.staticData.currentClassName),
    this.target = this.ddUlContainer,
    this.target.addClass(this.staticData.activeClassName),
    this.target.addClass(this.staticData.currentClassName),
    this.containerHeight = this.defaultHeigth
}
,
jQuery(document).ready(function() {
    mobile_search_init()
});
var aramaFilterNewParameters = new String;
!function() {
    var a = jQuery.event.special
      , b = "D" + +new Date
      , c = "D" + (+new Date + 1);
    a.scrollstart = {
        setup: function() {
            var c, d = function(b) {
                var d = this
                  , e = arguments;
                c ? clearTimeout(c) : (b.type = "scrollstart",
                jQuery.event.handle.apply(d, e)),
                c = setTimeout(function() {
                    c = null
                }, a.scrollstop.latency)
            };
            jQuery(this).bind("scroll", d).data(b, d)
        },
        teardown: function() {
            jQuery(this).unbind("scroll", jQuery(this).data(b))
        }
    },
    a.scrollstop = {
        latency: 300,
        setup: function() {
            var b, d = function(c) {
                var d = this
                  , e = arguments;
                b && clearTimeout(b),
                b = setTimeout(function() {
                    b = null,
                    c.type = "scrollstop",
                    jQuery.event.handle.apply(d, e)
                }, a.scrollstop.latency)
            };
            jQuery(this).bind("scroll", d).data(c, d)
        },
        teardown: function() {
            jQuery(this).unbind("scroll", jQuery(this).data(c))
        }
    }
}(),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = []
      , c = a(document)
      , d = a.browser.msie && 6 === parseInt(a.browser.version) && "object" != typeof window.XMLHttpRequest
      , e = a.browser.msie && 7 === parseInt(a.browser.version)
      , f = null
      , g = a(window)
      , h = [];
    a.modal = function(b, c) {
        return a.modal.impl.init(b, c)
    }
    ,
    a.modal.close = function() {
        a.modal.impl.close()
    }
    ,
    a.modal.focus = function(b) {
        a.modal.impl.focus(b)
    }
    ,
    a.modal.setContainerDimensions = function() {
        a.modal.impl.setContainerDimensions()
    }
    ,
    a.modal.setPosition = function() {
        a.modal.impl.setPosition()
    }
    ,
    a.modal.update = function(b, c) {
        a.modal.impl.update(b, c)
    }
    ,
    a.fn.modal = function(b) {
        return a.modal.impl.init(this, b)
    }
    ,
    a.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1e3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    },
    a.modal.impl = {
        d: {},
        init: function(b, c) {
            if (this.d.data)
                return !1;
            if (f = a.browser.msie && !a.support.boxModel,
            this.o = a.extend({}, a.modal.defaults, c),
            this.zIndex = this.o.zIndex,
            this.occb = !1,
            "object" == typeof b)
                b = b instanceof a ? b : a(b),
                this.d.placeholder = !1,
                0 < b.parent().parent().size() && (b.before(a("<span></span>").attr("id", "simplemodal-placeholder").css({
                    display: "none"
                })),
                this.d.placeholder = !0,
                this.display = b.css("display"),
                !this.o.persist) && (this.d.orig = b.clone(!0));
            else {
                if ("string" != typeof b && "number" != typeof b)
                    return alert("SimpleModal Error: Unsupported data type: " + typeof b),
                    this;
                b = a("<div></div>").html(b)
            }
            return this.create(b),
            this.open(),
            a.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]),
            this
        },
        create: function(c) {
            this.getDimensions(),
            this.o.modal && d && (this.d.iframe = a('<iframe src="javascript:false;"></iframe>').css(a.extend(this.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: h[0],
                width: h[1],
                zIndex: this.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(this.o.appendTo)),
            this.d.overlay = a("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(a.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? b[0] : 0,
                width: this.o.modal ? b[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo),
            this.d.container = a("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(a.extend({
                position: this.o.fixed ? "fixed" : "absolute"
            }, this.o.containerCss, {
                display: "none",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? a(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo),
            this.d.wrap = a("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container),
            this.d.data = c.attr("id", c.attr("id") || this.o.dataId).addClass("simplemodal-data").css(a.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body"),
            this.setContainerDimensions(),
            this.d.data.appendTo(this.d.wrap),
            (d || f) && this.fixIE()
        },
        bindEvents: function() {
            var e = this;
            a("." + e.o.closeClass).bind("click.simplemodal", function(a) {
                a.preventDefault(),
                e.close()
            }),
            e.o.modal && e.o.close && e.o.overlayClose && e.d.overlay.bind("click.simplemodal", function(a) {
                a.preventDefault(),
                e.close()
            }),
            c.bind("keydown.simplemodal", function(a) {
                e.o.modal && 9 === a.keyCode ? e.watchTab(a) : e.o.close && e.o.escClose && 27 === a.keyCode && (a.preventDefault(),
                e.close())
            }),
            g.bind("resize.simplemodal orientationchange.simplemodal", function() {
                e.getDimensions(),
                e.o.autoResize ? e.setContainerDimensions() : e.o.autoPosition && e.setPosition(),
                d || f ? e.fixIE() : e.o.modal && (e.d.iframe && e.d.iframe.css({
                    height: h[0],
                    width: h[1]
                }),
                e.d.overlay.css({
                    height: b[0],
                    width: b[1]
                }))
            })
        },
        unbindEvents: function() {
            a("." + this.o.closeClass).unbind("click.simplemodal"),
            c.unbind("keydown.simplemodal"),
            g.unbind(".simplemodal"),
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function() {
            var b = this.o.position;
            a.each([this.d.iframe || null, this.o.modal ? this.d.overlay : null, "fixed" === this.d.container.css("position") ? this.d.container : null], function(a, c) {
                if (c) {
                    var d = c[0].style;
                    if (d.position = "absolute",
                    2 > a)
                        d.removeExpression("height"),
                        d.removeExpression("width"),
                        d.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),
                        d.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');
                    else {
                        var e, f;
                        b && b.constructor === Array ? (e = b[0] ? "number" == typeof b[0] ? b[0].toString() : b[0].replace(/px/, "") : c.css("top").replace(/px/, ""),
                        e = -1 === e.indexOf("%") ? e + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(e.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                        b[1] && (f = "number" == typeof b[1] ? b[1].toString() : b[1].replace(/px/, ""),
                        f = -1 === f.indexOf("%") ? f + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(f.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (e = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                        f = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'),
                        d.removeExpression("top"),
                        d.removeExpression("left"),
                        d.setExpression("top", e),
                        d.setExpression("left", f)
                    }
                }
            })
        },
        focus: function(b) {
            var c = this
              , b = b && -1 !== a.inArray(b, ["first", "last"]) ? b : "first"
              , d = a(":input:enabled:visible:" + b, c.d.wrap);
            setTimeout(function() {
                0 < d.length ? d.focus() : c.d.wrap.focus()
            }, 10)
        },
        getDimensions: function() {
            var a = void 0 === window.innerHeight ? g.height() : window.innerHeight;
            b = [c.height(), c.width()],
            h = [a, g.width()]
        },
        getVal: function(a, b) {
            return a ? "number" == typeof a ? a : "auto" === a ? 0 : 0 < a.indexOf("%") ? parseInt(a.replace(/%/, "")) / 100 * ("h" === b ? h[0] : h[1]) : parseInt(a.replace(/px/, "")) : null
        },
        update: function(a, b) {
            if (!this.d.data)
                return !1;
            this.d.origHeight = this.getVal(a, "h"),
            this.d.origWidth = this.getVal(b, "w"),
            this.d.data.hide(),
            a && this.d.container.css("height", a),
            b && this.d.container.css("width", b),
            this.setContainerDimensions(),
            this.d.data.show(),
            this.o.focus && this.focus(),
            this.unbindEvents(),
            this.bindEvents()
        },
        setContainerDimensions: function() {
            var b = d || e
              , c = this.d.origHeight ? this.d.origHeight : a.browser.opera ? this.d.container.height() : this.getVal(b ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h")
              , b = this.d.origWidth ? this.d.origWidth : a.browser.opera ? this.d.container.width() : this.getVal(b ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w")
              , f = this.d.data.outerHeight(!0)
              , g = this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || c,
            this.d.origWidth = this.d.origWidth || b;
            var i = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null
              , j = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null
              , i = i && i < h[0] ? i : h[0]
              , j = j && j < h[1] ? j : h[1]
              , k = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto"
              , c = c ? this.o.autoResize && c > i ? i : c < k ? k : c : f ? f > i ? i : this.o.minHeight && "auto" !== k && f < k ? k : f : k
              , i = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto"
              , b = b ? this.o.autoResize && b > j ? j : b < i ? i : b : g ? g > j ? j : this.o.minWidth && "auto" !== i && g < i ? i : g : i;
            this.d.container.css({
                height: c,
                width: b
            }),
            this.d.wrap.css({
                overflow: f > c || g > b ? "auto" : "visible"
            }),
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function() {
            var a, b;
            a = h[0] / 2 - this.d.container.outerHeight(!0) / 2,
            b = h[1] / 2 - this.d.container.outerWidth(!0) / 2;
            var c = "fixed" !== this.d.container.css("position") ? g.scrollTop() : 0;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) ? (a = c + (this.o.position[0] || a),
            b = this.o.position[1] || b) : a = c + a,
            this.d.container.css({
                left: b,
                top: a
            })
        },
        watchTab: function(b) {
            0 < a(b.target).parents(".simplemodal-container").length ? (this.inputs = a(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]),
            (!b.shiftKey && b.target === this.inputs[this.inputs.length - 1] || b.shiftKey && b.target === this.inputs[0] || 0 === this.inputs.length) && (b.preventDefault(),
            this.focus(b.shiftKey ? "last" : "first"))) : (b.preventDefault(),
            this.focus())
        },
        open: function() {
            this.d.iframe && this.d.iframe.show(),
            a.isFunction(this.o.onOpen) ? this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(),
            this.d.container.show(),
            this.d.data.show()),
            this.o.focus && this.focus(),
            this.bindEvents()
        },
        close: function() {
            if (!this.d.data)
                return !1;
            if (this.unbindEvents(),
            a.isFunction(this.o.onClose) && !this.occb)
                this.occb = !0,
                this.o.onClose.apply(this, [this.d]);
            else {
                if (this.d.placeholder) {
                    var b = a("#simplemodal-placeholder");
                    this.o.persist ? b.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display)) : (this.d.data.hide().remove(),
                    b.replaceWith(this.d.orig))
                } else
                    this.d.data.hide().remove();
                this.d.container.hide().remove(),
                this.d.overlay.hide(),
                this.d.iframe && this.d.iframe.hide().remove(),
                this.d.overlay.remove(),
                this.d = {}
            }
        }
    }
}),
function(a) {
    function b() {
        var a = document.createElement("smartbanner")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    var c = function(b) {
        this.origHtmlMargin = parseFloat(a("html").css("margin-top")),
        this.options = a.extend({}, a.smartbanner.defaults, b);
        var c = navigator.standalone
          , d = navigator.userAgent;
        if (this.options.force ? this.type = this.options.force : null != d.match(/Windows Phone 8/i) && null !== d.match(/Touch/i) ? this.type = "windows" : null != d.match(/iPhone|iPod/i) || d.match(/iPad/) && this.options.iOSUniversalApp ? null != d.match(/Safari/i) && (null != d.match(/CriOS/i) || window.Number(d.substr(d.indexOf("OS ") + 3, 3).replace("_", ".")) < 6) && (this.type = "ios") : d.match(/\bSilk\/(.*\bMobile Safari\b)?/) || d.match(/\bKF\w/) || d.match("Kindle Fire") ? this.type = "kindle" : null != d.match(/Android/i) && (this.type = "android"),
        this.type && !c && !this.getCookie("sb-closed") && !this.getCookie("sb-installed")) {
            this.scale = "auto" == this.options.scale ? a(window).width() / window.screen.width : this.options.scale,
            this.scale < 1 && (this.scale = 1);
            var e = a("android" == this.type ? 'meta[name="google-play-app"]' : "ios" == this.type ? 'meta[name="apple-itunes-app"]' : "kindle" == this.type ? 'meta[name="kindle-fire-app"]' : 'meta[name="msApplication-ID"]');
            if (0 != e.length) {
                if ("windows" == this.type)
                    this.appId = a('meta[name="msApplication-PackageFamilyName"]').attr("content");
                else {
                    var f = /app-id=([^\s,]+)/.exec(e.attr("content"));
                    if (!f)
                        return;
                    this.appId = f[1]
                }
                this.title = "GittiGidiyor",
                this.author = "www.gittigidiyor.com",
                this.iconUrl = e.data("icon-url"),
                this.price = e.data("price"),
                "function" == typeof this.options.onInstall ? this.options.onInstall = this.options.onInstall : this.options.onInstall = function() {}
                ,
                "function" == typeof this.options.onClose ? this.options.onClose = this.options.onClose : this.options.onClose = function() {}
                ,
                this.create(),
                this.show(),
                this.listen()
            }
        }
    };
    c.prototype = {
        constructor: c,
        create: function() {
            var b, c = this.options.url ? this.options.url : ("windows" == this.type ? "ms-windows-store:navigate?appid=" : "android" == this.type ? "market://details?id=" : "kindle" == this.type ? "amzn://apps/android?asin=" : "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id") + this.appId, d = this.price || this.options.price, e = d ? d + ("android" == this.type ? this.options.inGooglePlay : "kindle" == this.type ? this.options.inAmazonAppStore : "ios" == this.type ? this.options.inAppStore : this.options.inWindowsStore) : "", f = null === this.options.iconGloss ? "ios" == this.type : this.options.iconGloss;
            "android" == this.type && this.options.GooglePlayParams && (c = c + "&referrer=" + this.options.GooglePlayParams);
            var g = '<div id="smartbanner" class="' + this.type + '"><div class="sb-container"><a href="#" class="sb-close" id="smartBanner_Android_Close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>' + this.title + "</strong><span>" + this.author + "</span><span>" + e + '</span></div><a href="' + c + '" class="sb-button" id="smartBanner_Android_View"><span>' + this.options.button + "</span></a></div></div>";
            this.options.layer ? a(this.options.appendToSelector).append(g) : a(this.options.appendToSelector).prepend(g),
            this.options.icon ? b = this.options.icon : this.iconUrl ? b = this.iconUrl : a('link[rel="apple-touch-icon-precomposed"]').length > 0 ? (b = a('link[rel="apple-touch-icon-precomposed"]').attr("href"),
            null === this.options.iconGloss && (f = !1)) : a('link[rel="apple-touch-icon"]').length > 0 ? b = a('link[rel="apple-touch-icon"]').attr("href") : a('meta[name="msApplication-TileImage"]').length > 0 ? b = a('meta[name="msApplication-TileImage"]').attr("content") : a('meta[name="msapplication-TileImage"]').length > 0 && (b = a('meta[name="msapplication-TileImage"]').attr("content")),
            $GG("#topContainer.mobile-fixed").length && $GG("#topContainer.mobile-fixed").removeClass("absolute-fixed"),
            b ? (a("#smartbanner .sb-icon").css("background-image", "url(" + b + ")"),
            f && a("#smartbanner .sb-icon").addClass("gloss")) : a("#smartbanner").addClass("no-icon"),
            this.bannerHeight = a("#smartbanner").outerHeight() + 2,
            this.scale > 1 && (a("#smartbanner").css("top", parseFloat(a("#smartbanner").css("top")) * this.scale).css("height", parseFloat(a("#smartbanner").css("height")) * this.scale).hide(),
            a("#smartbanner .sb-container").css("-webkit-transform", "scale(" + this.scale + ")").css("-msie-transform", "scale(" + this.scale + ")").css("-moz-transform", "scale(" + this.scale + ")").css("width", a(window).width() / this.scale)),
            a("#smartbanner").css("position", this.options.layer ? "absolute" : "static")
        },
        listen: function() {
            a("#smartbanner .sb-close").on("click", a.proxy(this.close, this)),
            a("#smartbanner .sb-button").on("click", a.proxy(this.install, this))
        },
        show: function(b) {
            var c = a("#smartbanner");
            if (c.stop(),
            this.options.layer)
                c.animate({
                    top: 0,
                    display: "block"
                }, this.options.speedIn).addClass("shown").show(),
                a(this.pushSelector).animate({
                    paddingTop: this.origHtmlMargin + this.bannerHeight * this.scale
                }, this.options.speedIn, "swing", b);
            else if (a.support.transition) {
                c.animate({
                    top: 0
                }, this.options.speedIn).addClass("shown");
                var d = function() {
                    a("html").removeClass("sb-animation"),
                    b && b()
                };
                a(this.pushSelector).addClass("sb-animation").one(a.support.transition.end, d).emulateTransitionEnd(this.options.speedIn).css("margin-top", this.origHtmlMargin + this.bannerHeight * this.scale)
            } else
                c.slideDown(this.options.speedIn).addClass("shown")
        },
        hide: function(b) {
            var c = a("#smartbanner");
            if (c.stop(),
            this.options.layer)
                c.animate({
                    top: -1 * this.bannerHeight * this.scale,
                    display: "block"
                }, this.options.speedIn).removeClass("shown"),
                a(this.pushSelector).animate({
                    paddingTop: this.origHtmlMargin
                }, this.options.speedIn, "swing", b);
            else if (a.support.transition) {
                "android" !== this.type ? c.css("top", -1 * this.bannerHeight * this.scale).removeClass("shown") : c.css({
                    display: "none"
                }).removeClass("shown");
                var d = function() {
                    a("html").removeClass("sb-animation"),
                    b && b()
                };
                a(this.pushSelector).addClass("sb-animation").one(a.support.transition.end, d).emulateTransitionEnd(this.options.speedOut).css("margin-top", this.origHtmlMargin)
            } else
                c.slideUp(this.options.speedOut).removeClass("shown")
        },
        close: function(a) {
            a.preventDefault(),
            this.hide(),
            this.setCookie("sb-closed", "true", this.options.daysHidden),
            this.options.onClose(a),
            $GG("#topContainer.mobile-fixed").length && $GG("#topContainer.mobile-fixed").addClass("absolute-fixed")
        },
        install: function(a) {
            this.options.hideOnInstall && this.hide(),
            this.setCookie("sb-installed", "true", this.options.daysReminder),
            this.options.onInstall(a)
        },
        setCookie: function(a, b, c) {
            var d = new Date;
            d.setDate(d.getDate() + c),
            b = encodeURI(b) + (null == c ? "" : "; expires=" + d.toUTCString()),
            document.cookie = a + "=" + b + "; path=/;"
        },
        getCookie: function(a) {
            var b, c, d, e = document.cookie.split(";");
            for (b = 0; b < e.length; b++)
                if (c = e[b].substr(0, e[b].indexOf("=")),
                d = e[b].substr(e[b].indexOf("=") + 1),
                (c = c.replace(/^\s+|\s+$/g, "")) == a)
                    return decodeURI(d);
            return null
        },
        switchType: function() {
            var b = this;
            this.hide(function() {
                b.type = "android" == b.type ? "ios" : "android";
                var c = a("android" == b.type ? 'meta[name="google-play-app"]' : 'meta[name="apple-itunes-app"]').attr("content");
                b.appId = /app-id=([^\s,]+)/.exec(c)[1],
                a("#smartbanner").detach(),
                b.create(),
                b.show()
            })
        }
    },
    a.smartbanner = function(b) {
        var d = a(window)
          , e = d.data("smartbanner")
          , f = "object" == typeof b && b;
        e || d.data("smartbanner", e = new c(f)),
        "string" == typeof b && e[b]()
    }
    ,
    a.smartbanner.defaults = {
        title: null,
        author: null,
        price: "Ücretsiz İndir",
        appStoreLanguage: "us",
        inAppStore: "On the App Store",
        inGooglePlay: "",
        inAmazonAppStore: "In the Amazon Appstore",
        inWindowsStore: "In the Windows Store",
        GooglePlayParams: null,
        icon: null,
        iconGloss: null,
        button: "GÖRÜNTÜLE",
        url: null,
        scale: "auto",
        speedIn: 300,
        speedOut: 400,
        daysHidden: 15,
        daysReminder: 90,
        force: null,
        hideOnInstall: !0,
        layer: !1,
        iOSUniversalApp: !0,
        appendToSelector: "body",
        pushSelector: "html"
    },
    a.smartbanner.Constructor = c,
    void 0 === a.support.transition && (a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b()
    }))
}(window.jQuery),
function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                j.skip_invisible && !c.is(":visible") || a.abovethetop(this, j) || a.leftofbegin(this, j) || (a.belowthefold(this, j) || a.rightoffold(this, j) ? (++b,
                j.failure_limit) : (c.trigger("appear"),
                b = 0))
            })
        }
        var h, i = this, j = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit,
        delete f.failurelimit),
        d !== f.effectspeed && (f.effect_speed = f.effectspeed,
        delete f.effectspeed),
        a.extend(j, f)),
        h = j.container === d || j.container === b ? e : a(j.container),
        0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
            return g()
        }),
        this.each(function() {
            var b = this
              , c = a(b);
            b.loaded = !1,
            c.attr("src") !== d && !1 !== c.attr("src") || c.is("img") && c.attr("src", j.placeholder),
            c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(),
                        c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"),
                        c[j.effect](j.effect_speed),
                        b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return !a.loaded
                        });
                        if (i = a(e),
                        j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute)),
                    c.attr("src", c.attr("data-" + j.data_attribute)).bind("load", function() {
                        a(this).removeClass("gg-blur-image")
                    })
                }
            }),
            0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                b.loaded || c.trigger("appear")
            })
        }),
        e.bind("resize", function() {
            g()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear")
            })
        }),
        a(c).ready(function() {
            g()
        }),
        this
    }
    ,
    a.belowthefold = function(c, f) {
        return (f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height()) <= a(c).offset().top - f.threshold
    }
    ,
    a.rightoffold = function(c, f) {
        return (f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width()) <= a(c).offset().left - f.threshold
    }
    ,
    a.abovethetop = function(c, f) {
        return (f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top) >= a(c).offset().top + f.threshold + a(c).height()
    }
    ,
    a.leftofbegin = function(c, f) {
        return (f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left) >= a(c).offset().left + f.threshold + a(c).width()
    }
    ,
    a.inviewport = function(b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }
    ,
    a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
GG.Utilities.numberWithCommas = function(a, b) {
    var c = parseInt(a) || 0
      , d = a.toString().split(".")[1] || "00";
    d = d.toString().substring(0, 2),
    d = d.length > 1 ? d : d + "0";
    var e = c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + d;
    if (b) {
        var f = [];
        f = e.split("."),
        f[1] ? f[1].length < 2 && (f[1] = f[1] + "0") : f.push("00"),
        f[0] = f[0].replace(",", "."),
        e = f[0] + "," + f[1] + " " + GG.Static.Enums.currency.TRL
    }
    return e
}
,
GG.Components.prototype.slider = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        containerId: "body",
        infinite: !1,
        bullets: !1,
        startWithRandomItem: !1,
        shuffle: !1,
        transition: _gg.static.Enums.transitions.slide,
        transitionDuration: 500,
        delay: 3e3,
        direction: {},
        itemCount: {},
        stepCount: {},
        hasThumbnail: {},
        autoStart: !1,
        autoAnimDelay: 2e3,
        NavigationActiveOnHover: !1,
        mobileScroll: !1,
        mainCoverContainer: "",
        thumbnailAttr: "data-thumbnail"
    };
    return _gg.utilities.initResp(c.direction, _gg.static.Enums.directions.horizontal),
    c.itemCount[_gg.static.Enums.responsiveParameterNames.mobile] = 1,
    c.itemCount[_gg.static.Enums.responsiveParameterNames.tablet] = 3,
    c.itemCount[_gg.static.Enums.responsiveParameterNames.desktop] = 4,
    c.itemCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = 4,
    c.stepCount[_gg.static.Enums.responsiveParameterNames.mobile] = 1,
    c.stepCount[_gg.static.Enums.responsiveParameterNames.tablet] = 3,
    c.stepCount[_gg.static.Enums.responsiveParameterNames.desktop] = 4,
    c.stepCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = 4,
    c.hasThumbnail[_gg.static.Enums.responsiveParameterNames.mobile] = !1,
    c.hasThumbnail[_gg.static.Enums.responsiveParameterNames.tablet] = !1,
    c.hasThumbnail[_gg.static.Enums.responsiveParameterNames.desktop] = !1,
    c.hasThumbnail[_gg.static.Enums.responsiveParameterNames.large_desktop] = !1,
    this.config = b.extend(c, a),
    this.currentIndis = 0,
    this.staticData = _gg.static.SliderStaticData,
    this.currentStepCount = this.config.stepCount[_gg.static.globalParameters.responsiveState],
    this.currentItemCount = this.config.itemCount[_gg.static.globalParameters.responsiveState],
    this.animationInProgress = !1,
    this.animationTimeOut = "",
    this.moveActionBefore = 0,
    this.INIT_READY = "GG_SLIDER_READY",
    this.ITEM_ADDED = "GG_ITEM_ADDED",
    this.SLIDE_START = "GG_SLIDE_START",
    this.SLIDE_END = "GG_SLIDE_END",
    this.PENULTIMATE_PAGE = "GG_SLIDE_PENULTIMATE_PAGE",
    this.NEXT_ITEM_CLICKED = "GG_NEXT_ITEM_CLICKED",
    this.PREV_ITEM_CLICKED = "GG_PREV_ITEM_CLICKED",
    this.THUMB_ITEM_CLICKED = "GG_THUMB_CLICKED",
    this.SCROLL_EVENT_CHANGE = "GG_SCROLL_EVENT_CHANGE",
    $GG.event.special[this.INIT_READY] = {
        add: function(a) {
            this.initialized && a.handler.call(this, null, this)
        }
    },
    this
}
,
GG.Components.prototype.slider.prototype.controller = function() {
    var a = !0;
    return this.mainContainer.length < 1 && (a = !1),
    this.mainContainer.find("ul").length < 1 && (a = !1),
    this.mainContainer.find("ul li").length < 1 && (a = !1),
    a
}
,
GG.Components.prototype.slider.prototype.init = function() {
    GG.ExternalController.jquery;
    if (this.mainContainer = $GG("#" + this.config.containerId),
    this.itemList = this.mainContainer.find("ul").eq(0),
    !this.controller())
        return void console.info("Please check the dom object for slider! " + this.config.containerId);
    this.checkMobileNatural() && (this.config.infinite = !1),
    this.mainContainer.addClass(this.staticData.ulClassName),
    this.sliderInnerContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.sliderinnerContainer]
    }),
    this.itemCoverContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.itemCoverClassName]
    }),
    this.itemList.wrap(this.itemCoverContainer),
    this.itemCoverContainer = this.itemList.parent(),
    this.itemCoverContainer.wrap(this.sliderInnerContainer),
    this.config.shuffle && this.shuffle(),
    this.config.startWithRandomItem && this.startWithRandomItem(),
    _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || (this.config.transition = _gg.static.Enums.transitions.slide),
    this.config.infinite && this.config.transition !== _gg.static.Enums.transitions.fade && (this.currentIndis += this.currentItemCount),
    this.navigotionDomGenerator(),
    this.renderItems(),
    this.navigationController(),
    this.eventController();
    var a = this;
    this.initialized = !0,
    $GG(a).trigger(a.INIT_READY, a),
    this.checkPenultimatePage(),
    this.createTimeOut()
}
,
GG.Components.prototype.slider.prototype.navigotionDomGenerator = function() {
    var a = this.config.direction[_gg.static.globalParameters.responsiveState]
      , b = ""
      , c = ""
      , d = ""
      , e = "";
    a === _gg.static.Enums.directions.horizontal ? (b = this.staticData.sliderHorizontal,
    c = _gg.static.Enums.iconClassNames.chevron_right,
    d = _gg.static.Enums.iconClassNames.chevron_left) : a === _gg.static.Enums.directions.vertical && (b = this.staticData.sliderVertical,
    c = _gg.static.Enums.iconClassNames.chevron_down,
    d = _gg.static.Enums.iconClassNames.chevron_up),
    this.config.NavigationActiveOnHover && (e = this.staticData.sliderButtonHoverAction),
    this.nextButton = _gg.utilities.domGenerator({
        nodeType: "i",
        classNames: [this.staticData.sliderButtonGeneralClass, this.staticData.sliderButtonNextClass, c, b, e]
    }),
    this.previousButton = _gg.utilities.domGenerator({
        nodeType: "i",
        classNames: [this.staticData.sliderButtonGeneralClass, this.staticData.sliderButtonPreviousClass, d, b, e]
    }),
    this.mainContainer.append(this.previousButton),
    this.mainContainer.append(this.nextButton),
    this.config.bullets && (this.bulletContainer = _gg.utilities.domGenerator({
        nodeType: "ul",
        classNames: [this.staticData.bulletContainer]
    }),
    this.mainContainer.append(this.bulletContainer))
}
,
GG.Components.prototype.slider.prototype.navigationController = function() {
    var a = this.config.itemCount[_gg.static.globalParameters.responsiveState];
    if (this.mainContainer.find("li:not(." + this.staticData.cloneElementsClass + ")").length <= a ? this.mainContainer.find("." + this.staticData.sliderButtonGeneralClass).addClass(this.staticData.sliderButtonHiddenClass) : this.mainContainer.find("." + this.staticData.sliderButtonGeneralClass).removeClass(this.staticData.sliderButtonHiddenClass),
    this.config.bullets) {
        var b = this.currentIndis - 1;
        this.config.transition === _gg.static.Enums.transitions.fade && (b = this.currentIndis),
        $GG(this.bulletContainer).find("li:eq(" + b + ")").addClass("selected").siblings().removeClass("selected"),
        this.config.hasThumbnail[_gg.static.globalParameters.responsiveState] && (_gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? $GG(this.bulletContainer).find("li").removeClass(this.staticData.sliderThumbNail).addClass(this.staticData.bulletInnerItem) : $GG(this.bulletContainer).find("li").removeClass(this.staticData.bulletInnerItem).addClass(this.staticData.sliderThumbNail))
    }
    if (!this.config.infinite) {
        this.mainContainer.find("." + this.staticData.sliderButtonGeneralClass).removeClass(this.staticData.sliderButtonDisableClass);
        var a = this.config.itemCount[_gg.static.globalParameters.responsiveState]
          , c = this.itemList[0].children.length;
        0 === this.currentIndis && $GG(this.previousButton).addClass(this.staticData.sliderButtonDisableClass),
        parseInt(this.currentIndis) === parseInt(c - a) && $GG(this.nextButton).addClass(this.staticData.sliderButtonDisableClass)
    }
    _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || this.mainContainer.find("." + this.staticData.sliderButtonGeneralClass).addClass(this.staticData.sliderButtonHiddenClass)
}
,
GG.Components.prototype.slider.prototype.addItem = function(a) {
    var b = _gg.utilities.domGenerator({
        nodeType: "li",
        htmlContent: a
    });
    $GG(b).insertAfter(this.itemList.find('li:not(".' + this.staticData.cloneElementsClass + '")').last()),
    this.renderItems(),
    $GG(this).trigger(this.ITEM_ADDED, this)
}
,
GG.Components.prototype.slider.prototype.removeItem = function() {
    this.config.infinite || $GG(this).trigger(this.ITEM_REMOVED)
}
,
GG.Components.prototype.slider.prototype.shuffle = function() {
    for (var a = this.itemList[0], b = a.children.length; b >= 0; b--)
        a.appendChild(a.children[Math.random() * b | 0])
}
,
GG.Components.prototype.slider.prototype.startWithRandomItem = function() {
    var a = this.itemList[0];
    a.insertBefore(a.children[Math.random() * a.children.length | 0], a.children[0])
}
,
GG.Components.prototype.slider.prototype.checkMobileNatural = function() {
    var a = !1;
    return _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || !this.config.mobileScroll || (a = !0),
    a
}
,
GG.Components.prototype.slider.prototype.renderItems = function() {
    this.checkMobileNatural() ? this.mobileReady() : this.killMobile();
    var a = this.config.direction[_gg.static.globalParameters.responsiveState]
      , b = this.config.stepCount[_gg.static.globalParameters.responsiveState]
      , c = this.config.itemCount[_gg.static.globalParameters.responsiveState]
      , d = this.itemList.find("li:not(." + this.staticData.cloneElementsClass + ")").length;
    if (d < c)
        return this.mainContainer.find("." + this.staticData.cloneElementsClass).remove(),
        this.goToIndis(0, !0),
        void this.navigationController();
    var e = GG.ExternalController.jquery
      , f = this
      , g = this.mainContainer.width()
      , h = this.mainContainer.height()
      , i = this.itemList[0].children.length;
    if (this.config.transition === _gg.static.Enums.transitions.fade && e(this.itemList).children().addClass(this.staticData.liFadeInClass),
    this.config.infinite && this.config.transition !== _gg.static.Enums.transitions.fade) {
        this.mainContainer.find("." + this.staticData.cloneElementsClass).remove(),
        i = this.itemList[0].children.length;
        for (var j = c > i ? i : c, k = [], l = [], m = 0; m < j; m++) {
            var n = this.itemList.children().eq(m).clone();
            n.data("clone", m),
            l.push(n);
            var o = this.itemList.children().eq(i - m - 1).clone();
            o.data("clone", i - m - 1),
            k.push(o)
        }
        this.itemList.children().each(function(a, b) {
            e(this).data("index", a)
        }),
        $GG.each(l, function(a, b) {
            f.itemList.append(b),
            b.addClass(f.staticData.cloneElementsClass)
        }),
        $GG.each(k, function(a, b) {
            f.itemList.prepend(b),
            b.addClass(f.staticData.cloneElementsClass)
        })
    }
    this.perItemWidth = 0,
    this.perItemHeight = 0,
    a === _gg.static.Enums.directions.horizontal ? (this.itemList.removeClass(this.staticData.sliderTypeVertical).addClass(this.staticData.sliderTypeHorizontal),
    this.perItemHeight = h,
    this.perItemWidth = g / c,
    0 != this.perItemHeight && (this.itemList.children().css({
        width: this.perItemWidth + "px",
        height: this.perItemHeight + "px"
    }),
    this.itemCoverContainer.css({
        width: this.perItemWidth * this.itemList.children().length + "px",
        height: this.perItemHeight + "px"
    }))) : a === _gg.static.Enums.directions.vertical ? (this.itemList.removeClass(this.staticData.sliderTypeHorizontal).addClass(this.staticData.sliderTypeVertical),
    this.perItemHeight = h / c,
    this.perItemWidth = g,
    0 != this.perItemHeight && (this.itemList.children().css({
        width: this.perItemWidth + "px",
        height: this.perItemHeight + "px"
    }),
    this.itemCoverContainer.css({
        width: this.perItemWidth + "px",
        height: this.perItemHeight * this.itemList.children().length + "px"
    }))) : (this.config.direction = _gg.static.Enums.directions.horizontal,
    this.renderItems());
    var p = c - this.currentItemCount;
    if (this.goToIndis(this.currentIndis + p, !0),
    this.currentStepCount = b,
    this.currentItemCount = c,
    this.config.bullets) {
        $GG(this.bulletContainer).empty();
        for (var m = 0; m < d; m++) {
            var q = this.staticData.bulletInnerItem
              , r = 13;
            $GG("." + this.staticData.itemCoverClassName + ":first").find("li").not("." + this.staticData.cloneElementsClass).eq(m).attr("data-content") == this.staticData.sliderVideoIcon && (q += " " + this.staticData.sliderVideoIcon),
            this.config.hasThumbnail[_gg.static.globalParameters.responsiveState] && (q = this.staticData.sliderThumbNail,
            r = 60);
            var s = _gg.utilities.domGenerator({
                nodeType: "li",
                classNames: [q]
            })
              , t = ($GG(this.mainContainer).width() - d * r) / 2;
            if ($GG(this.bulletContainer).append(s),
            $GG(this.bulletContainer).css("left", t),
            this.config.hasThumbnail[_gg.static.globalParameters.responsiveState]) {
                var u = m;
                !this.config.infinite || _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || (u += this.config.stepCount[_gg.static.globalParameters.responsiveState]);
                var v = $GG(this.mainContainer).find("li").eq(u).find("img").attr(this.config.thumbnailAttr)
                  , w = "";
                w = void 0 != $GG(this.mainContainer).find("li").eq(u).find("a").attr("href") ? $GG(this.mainContainer).find("li").eq(u).find("a").attr("href") : $GG(this.mainContainer).find("li").eq(u).find("img").attr("data-href"),
                $GG(s).html("<a href='http://" + w + "' ></a>"),
                void 0 != v ? $GG(s).css("background", "url(http://" + v + ")") : $GG(s).addClass("slider-thumbnail")
            }
        }
    }
    this.navigationController()
}
,
GG.Components.prototype.slider.prototype.sizeChange = function() {
    this.renderItems()
}
,
GG.Components.prototype.slider.prototype.mobileReady = function() {
    $(this.config.mainCoverContainer).addClass(this.staticData.mobileReadyClass),
    this.mainContainer.find("." + this.staticData.sliderinnerContainer).addClass(this.staticData.mobileReadyClass)
}
,
GG.Components.prototype.slider.prototype.killMobile = function() {
    this.mainContainer.find("." + this.staticData.sliderinnerContainer).removeClass(this.staticData.mobileReadyClass)
}
,
GG.Components.prototype.slider.prototype.killTimeOut = function() {
    this.config.autoStart && clearTimeout(this.animationTimeOut)
}
,
GG.Components.prototype.slider.prototype.createTimeOut = function() {
    if (this.config.autoStart) {
        this.killTimeOut();
        var a = this;
        this.animationTimeOut = setTimeout(function() {
            a.nextItem()
        }, a.config.autoAnimDelay)
    }
}
;
var keywordX = GG.LayoutController.prototype.advController = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        configKey: "",
        addCommon: !0
    };
    this.config = b.extend(c, a),
    this.loadScript(),
    0 != $GG("#MastheadBannerController").length && (this.mainContainer = $GG("#MastheadBannerController"))
}
  , googletag = googletag || {};
googletag.cmd = googletag.cmd || [],
GG.LayoutController.prototype.advController.prototype.loadScript = function() {
    !function() {
        var a = document.createElement("script");
        a.async = !0,
        a.type = "text/javascript";
        var b = "https:" == document.location.protocol;
        a.src = (b ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(a, c)
    }()
}
,
GG.LayoutController.prototype.advController.prototype.push = function() {
    this.staticData = _gg.static.advConfig;
    var a = this
      , b = [];
    googletag.cmd.push(function() {
        a.mapConfig = {
            mapping_desktop_300x250: googletag.sizeMapping().addSize([0, 0], []).addSize([767, 100], [[300, 250]]).addSize([980, 100], [[300, 250]]).build(),
            mapping_desktop_728x90: googletag.sizeMapping().addSize([0, 0], []).addSize([767, 100], [[728, 90]]).addSize([980, 100], [[728, 90]]).build(),
            mapping_desktop_160x600: googletag.sizeMapping().addSize([0, 0], []).addSize([767, 100], [[160, 600]]).addSize([980, 100], [[160, 600]]).build(),
            mapping_masthead: googletag.sizeMapping().addSize([0, 0], []).addSize([767, 100], [[980, 270]]).addSize([980, 100], [[980, 270]]).build(),
            mapping_aramasonuc_alt: googletag.sizeMapping().addSize([1392, 768], [970, 250]).addSize([980, 690], [728, 90]).addSize([640, 480], []).addSize([0, 0], []).build(),
            mapping_mobile_320x30: googletag.sizeMapping().addSize([0, 0], [[320, 30]]).addSize([767, 100], []).build(),
            mapping_mobile_300x250: googletag.sizeMapping().addSize([0, 0], [[300, 250]]).addSize([767, 100], []).build()
        };
        for (var c in a.staticData[a.config.configKey]) {
            var d = a.staticData[a.config.configKey][c]
              , e = d.containerId
              , f = d.bannerName
              , g = d.dimensions
              , h = a.mapConfig[d.mappingName];
            b.push(e),
            googletag.defineSlot(f, g, e).defineSizeMapping(h).addService(googletag.pubads()).setCollapseEmptyDiv(!0, !0)
        }
        if (a.config.addCommon)
            for (var i in a.staticData.common)
                if (0 != $GG("#" + a.staticData.common[i].containerId).length) {
                    var j = a.staticData.common[i]
                      , k = j.containerId
                      , l = j.bannerName
                      , m = j.dimensions
                      , n = a.mapConfig[j.mappingName];
                    b.push(k),
                    googletag.defineSlot(l, m, k).defineSizeMapping(n).addService(googletag.pubads()).setCollapseEmptyDiv(!0, !0)
                }
        if (void 0 != a.config.keywords) {
            var o = $GG.parseJSON(a.config.keywords);
            $GG.each(o, function(a) {
                $GG.each(o[a], function(a, b) {
                    googletag.pubads().setTargeting(a, b)
                })
            })
        }
        googletag.pubads().enableSingleRequest(),
        googletag.pubads().enableAsyncRendering(),
        googletag.pubads().addEventListener("slotRenderEnded", function(a) {
            slotRenderCompleted(a.slot.getSlotElementId())
        }),
        googletag.enableServices()
    }),
    googletag.cmd.push(function() {
        for (var a = 0; a < b.length; a++)
            googletag.display(b[a])
    })
}
,
GG.Components.prototype.webpush = function(a) {
    var b = GG.ExternalController.jquery
      , c = {
        container: "body",
        windowName: "https://www.gittigidiyor.com/notification",
        userDelayedActionCookieName: "userDelayedStatus",
        askLaterInterval: 14
    };
    this.config = b.extend(c, a)
}
,
GG.Components.prototype.webpush.prototype.getCookie = function(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d]; " " == e.charAt(0); )
            e = e.substring(1);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return ""
}
,
GG.Components.prototype.webpush.prototype.setCookie = function(a, b) {
    document.cookie = a + "=" + b + ';expires=Thu, 31 Dec 2026 23:59:59 GMT"'
}
,
GG.Components.prototype.webpush.prototype.init = function() {
    try {
        if (this.notification = new Notifyer({
            appId: "9c5fdb9a-ece8-4596-a825-bf426a84d4b8"
        }),
        !this.notification.isPushNotificationSupported())
            return;
        this.notification.getSubscriptionStatus() == Notifyer.status.DEFAULT && (this.timeDiff = this.getDateDifference(this.getCookie(this.config.userDelayedActionCookieName)),
        this.timeDiff >= this.config.askLaterInterval && ($GG(this.config.container).append(this.getHTML()),
        this.bindActions()))
    } catch (a) {}
}
,
GG.Components.prototype.webpush.prototype.getHTML = function() {
    var a = '<div class="gg-subscribe-container"><div class="container">';
    return a += '<div class="gg-subscribe-collapse clearfix">',
    a += '<div id="gg-subscribe-close-button"></div>',
    a += '<div class="gg-d-5 gg-m-24 gg-subscribe-image-container hidden-m">',
    a += '<img src="http://st2.gittigidiyor.net/fred/page-based/home-page/img/webpush-icon.png" width="90" height="90"/>',
    a += "</div>",
    a += '<div class="gg-d-18 gg-m-24">',
    a += '<div class="gg-subscribe-header">Güncel fırsatları ilk siz öğrenin</div>',
    a += '<div class="gg-subscribe-text">Kampanya ve indirimlerden haberdar olmak ister misiniz?</div>',
    a += '<div class="gg-subscribe-button">',
    a += '<input id="later-subscription-button" type="submit" onclick="javascript:void(0);" value="Daha Sonra"class="button_size1 button_gray1">',
    a += '<input id="enable-subscription-button" type="submit" onclick="javascript:void(0);" value="İzin Ver" class="button_size1 button_blue1">',
    a += "</div>",
    a += "</div>",
    a += "</div>",
    a += "</div>",
    a += "</div>"
}
,
GG.Components.prototype.webpush.prototype.getDateDifference = function(a) {
    var b = a
      , c = (new Date).getTime();
    return parseInt((c - b) / 864e5)
}
,
GG.Components.prototype.webpush.prototype.bindActions = function() {
    var a = this;
    $GG("#enable-subscription-button").bind("click", function() {
        _gg.pageType === GG.Static.Enums.pageTypes.IOS || _gg.pageType === GG.Static.Enums.pageTypes.ANDROID ? window.location.href = a.config.windowName : window.open(a.config.windowName, "NotificationWindow", "height=350,width=580"),
        $GG(".gg-subscribe-container").addClass("hidePopup")
    }),
    $GG("#later-subscription-button").bind("click", function() {
        a.setCookie(a.config.userDelayedActionCookieName, (new Date).getTime()),
        $GG(".gg-subscribe-container").addClass("hidePopup")
    }),
    $GG("#gg-subscribe-close-button").bind("click", function() {
        a.setCookie(a.config.userDelayedActionCookieName, (new Date).getTime()),
        $GG(".gg-subscribe-container").addClass("hidePopup")
    })
}
,
GG.Components.prototype.dailyDeal = function(a) {
    this.staticData = _gg.static.dailyDealStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.executeSliderEvents = !0;
    var b = {
        container: $GG("body"),
        pageName: "",
        showTitle: !0,
        showSubtitle: !0,
        mobilWide: !1,
        titleTagName: this.staticTexts.titleTagName,
        maxShownCount: 32,
        maxLazyImgCount: 4,
        showAllDealsBtn: !0,
        title: this.staticTexts.defaultTitle,
        subTitle: this.staticTexts.defaultSubTitle,
        ajaxUrl: this.staticData.ajaxUrl,
        sliderConfig: this.staticData.sliderConfig
    };
    return this.config = $GG.extend(b, a),
    this
}
,
GG.Components.prototype.dailyDeal.prototype.init = function() {
    var a = this;
    if (this.staticData = _gg.static.dailyDealStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.container = a.config.container,
    !(this.container.length > 0))
        return console.info("Please check the dom object for dailyDeal! " + this.config.pageName),
        void (this.executeSliderEvents = !1);
    this.getAjaxData()
}
,
GG.Components.prototype.dailyDeal.prototype.modalData = function(a) {
    if (a && null != a && "" != a) {
        var b = {
            container: this.config.container,
            title: this.config.title,
            subTitle: this.config.subTitle,
            showSubtitle: this.config.showSubtitle,
            showTitle: this.config.showTitle,
            pageName: this.config.pageName,
            listUrl: this.staticData.allDailyDealsUrl,
            titleTagName: this.config.titleTagName,
            ajaxData: a
        };
        if (null != a.feedList) {
            new _gg.components.listTitle(b).init(),
            this.generateContainerDom(a)
        } else
            this.config.container.remove()
    } else
        this.executeSliderEvents = !1,
        this.config.container.remove()
}
,
GG.Components.prototype.dailyDeal.prototype.generateListDom = function(a) {
    var b = this;
    if (null != a.feedList)
        return this.containers.dailyDealListContent = _gg.utilities.domGenerator({
            nodeType: "ul",
            id: this.config.pageName + this.staticData.contentIdName
        }),
        $GG.each(a.feedList, function(a, c) {
            if (a <= b.config.maxShownCount) {
                var d = [];
                c.hasOwnProperty("freeShipping") && c.freeShipping && (b.containers.freeShipping = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.freeShippingClassName]
                }),
                d.push(b.containers.freeShipping),
                c.hasOwnProperty("shippingTime") && (b.containers.sameDayFreeShipping = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.sameDayFreeShippingClassName]
                }),
                d.push(b.containers.sameDayFreeShipping)));
                var e = b.generateProductDiscount(c);
                null != e && d.push(e);
                var f = c.image
                  , g = b.staticData.lazyLoadUrl
                  , h = [];
                c.hasOwnProperty("otherImages") && c.otherImages.length > 0 && c.otherImages[0],
                a <= b.config.maxLazyImgCount && (g = f),
                b.containers.imgDomContent = _gg.utilities.domGenerator({
                    nodeType: "img",
                    classNames: [b.staticData.imgClassName],
                    attributes: {
                        src: g,
                        "data-original": f,
                        alt: c.title,
                        width: 170,
                        height: 170
                    }
                }),
                h.push(b.containers.imgDomContent),
                c.hasOwnProperty("energyEfficency") && (b.containers.energyContent = _gg.utilities.domGenerator({
                    nodeType: "span",
                    classNames: [b.staticData.energyClassName],
                    htmlContent: c.energyEfficency
                }),
                h.push(b.containers.energyContent)),
                b.containers.imgContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.imgContainerClassName],
                    htmlContent: h
                }),
                b.containers.descContentContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.descContentClassName],
                    htmlContent: b.generateProductDesc(c)
                }),
                b.containers.desktopContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.desktopContainerClassName],
                    htmlContent: [b.containers.imgContainer, b.containers.descContentContainer]
                }),
                b.containers.mobileContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.mobileContainerClassName],
                    htmlContent: b.generateProductDesc(c)
                }),
                b.containers.widgetSliderMobileContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.widgetSliderMobileClassName],
                    htmlContent: [b.containers.desktopContainer, b.containers.mobileContainer]
                }),
                d.push(b.containers.widgetSliderMobileContainer);
                var i = c.url;
                i.indexOf("?") > -1 ? i += "&" : i += "?",
                i += b.staticData.linkTag,
                b.containers.productLinkContent = _gg.utilities.domGenerator({
                    nodeType: "a",
                    attributes: {
                        href: i,
                        title: c.title + " - " + b.staticData.onlineShopping
                    },
                    htmlContent: d
                }),
                b.containers.opportunityContent = _gg.utilities.domGenerator({
                    nodeType: "li",
                    classNames: [b.staticData.opportunityListClassName],
                    htmlContent: b.containers.productLinkContent
                }),
                $GG(b.containers.dailyDealListContent).append(b.containers.opportunityContent)
            }
        }),
        $GG(b.containers.dailyDealListContent)
}
,
GG.Components.prototype.dailyDeal.prototype.showLoadingContent = function(a) {
    this.containers = {};
    var b = this.config.container.find("." + this.staticData.loadingClassName);
    b.length < 1 && (this.containers.loadingContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.loadingClassName],
        htmlContent: "&nbsp;"
    }),
    this.config.container.append(this.containers.loadingContent)),
    b = this.config.container.find("." + this.staticData.loadingClassName),
    a ? b.show() : b.hide()
}
,
GG.Components.prototype.dailyDeal.prototype.generateProductDiscount = function(a) {
    var b = this
      , c = b.staticData.discountClassicIconClassName;
    return b.containers.discountContainer = null,
    a.discount && (a.discount > 49 && (c = b.staticData.discountMoreIconClassName),
    b.containers.discountPercentageContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.discountPercentageClassName],
        htmlContent: "% "
    }),
    b.containers.discountRateContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.discountRateClassName],
        htmlContent: a.discount + " "
    }),
    b.containers.discountTextContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.discountTextClassName],
        htmlContent: b.staticTexts.discount
    }),
    b.containers.discountDetailContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.discountDetailClassName],
        htmlContent: [b.containers.discountPercentageContent, b.containers.discountRateContent, b.containers.discountTextContent]
    }),
    b.containers.discountSpriteContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.spriteClassName, c],
        htmlContent: [b.containers.discountDetailContainer]
    }),
    b.containers.discountContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.discountContainerClassName],
        htmlContent: [b.containers.discountSpriteContainer]
    })),
    b.containers.discountContainer
}
,
GG.Components.prototype.dailyDeal.prototype.generateProductDesc = function(a) {
    var b = this
      , c = []
      , d = "&nbsp;"
      , e = a.title;
    return a.hasOwnProperty("subtitle") && (d = a.subtitle),
    a.hasOwnProperty("dailyOffer") && (d = a.dailyOfferMinDescription,
    e = a.dailyOfferTitle),
    b.containers.productTitleContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.productTitleClassName],
        htmlContent: e
    }),
    c.push(b.containers.productTitleContent),
    b.containers.productDescContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.productDescClassName],
        htmlContent: d
    }),
    c.push(b.containers.productDescContent),
    a.hasOwnProperty("price") && (b.containers.productPriceContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.productPriceClassName],
        htmlContent: _gg.utilities.numberWithCommas(Number(a.price), !0)
    }),
    c.push(b.containers.productPriceContent)),
    b.containers.productOldPriceContent = "",
    a.hasOwnProperty("marketPrice") && (b.containers.productOldPriceContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.productOldPriceClassName],
        htmlContent: _gg.utilities.numberWithCommas(Number(a.marketPrice), !0)
    }),
    c.push(b.containers.productOldPriceContent)),
    b.containers.descContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.descContainerClassName],
        htmlContent: c
    }),
    b.containers.descContainer
}
,
GG.Components.prototype.dailyDeal.prototype.generateContainerDom = function(a) {
    var b = this.staticData.sliderFullGridClassName
      , c = this.staticData.dailyDealCountClassName;
    if (this.containers.dailyDealCountContent = null,
    this.config.showAllDealsBtn) {
        var d = 0;
        a.hasOwnProperty("dailyDealCount") && (d = a.dailyDealCount),
        b = this.staticData.sliderGridClassName,
        3 == this.config.sliderConfig.large_desktop[0] && (c = this.staticData.dailyDealCountClassNameV2,
        b = this.staticData.sliderGridClassNameV2),
        this.config.mobilWide && (b += this.staticData.sliderMwGridClassName),
        this.containers.seeMoreCountContent = _gg.utilities.domGenerator({
            nodeType: "span",
            classNames: [this.staticData.seeMoreCountClassName],
            htmlContent: "+" + d
        }),
        this.containers.seeMoreTextContent = _gg.utilities.domGenerator({
            nodeType: "span",
            classNames: [this.staticData.seeMoreTxtClassName],
            htmlContent: this.staticTexts.oppCountTitle
        }),
        this.containers.seeMoreLinkContent = _gg.utilities.domGenerator({
            nodeType: "span",
            classNames: [this.staticData.seeMoreLinkClassName],
            htmlContent: this.staticTexts.seeAllTitle
        }),
        this.containers.seeMoreTagContent = _gg.utilities.domGenerator({
            nodeType: "a",
            classNames: [this.staticData.seeMoreTagClassName],
            attributes: {
                href: this.staticData.allDailyDealsUrl,
                title: this.staticTexts.seeAllTitle
            },
            htmlContent: [this.containers.seeMoreCountContent, this.containers.seeMoreTextContent, this.containers.seeMoreLinkContent]
        }),
        this.containers.seeMoreContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.seeMoreClassName],
            htmlContent: [this.containers.seeMoreTagContent]
        }),
        this.containers.dailyDealCountIconContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.dailyDealCountIconClassName],
            htmlContent: [this.containers.seeMoreContent]
        }),
        this.containers.fullGridContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.fullGridClassName],
            htmlContent: [this.containers.dailyDealCountIconContent]
        }),
        this.containers.dailyDealCountContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [c],
            id: this.staticData.dailyDealCountIdName,
            htmlContent: [this.containers.fullGridContent]
        })
    }
    this.containers.dailyDealListCon = this.generateListDom(a),
    this.containers.widgetSliderContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.widgetSliderClassName],
        htmlContent: this.containers.dailyDealListCon
    }),
    this.containers.sliderGridContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b],
        htmlContent: [this.containers.widgetSliderContent]
    }),
    this.containers.widgetContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.widgetContentClassName],
        htmlContent: [this.containers.sliderGridContent, this.containers.dailyDealCountContent]
    }),
    this.containers.sliderContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.sliderContentClassName],
        htmlContent: this.containers.widgetContent
    }),
    this.container.append(this.containers.sliderContent)
}
,
GG.Components.prototype.dailyDeal.prototype.getAjaxData = function() {
    // var a = this;
    // a.ajaxProductListCtrl = new _gg.communication.ajaxController({
    //     url: a.config.ajaxUrl,
    //     timeOut: 2e4
    // }),
    // a.ajaxProductListCtrl.tryOnce = !1,
    // a.ajaxProductListCtrl.ajaxAction();
    // var b = new _gg.utilities.ajaxObserver;
    // b.init(),
    // a.ajaxProductListCtrl.successReq = function() {
    //     a.showLoadingContent(!1),
    //     a.modalData(a.ajaxProductListCtrl.completeData)
    // }
    // ,
    // a.ajaxProductListCtrl.completeReq = function() {
    //     a.executeSliderEvents && _gg.utilities.initSliderObserver(a.config.container, a.config.sliderConfig, a.config.maxLazyImgCount)
    // }
    // ,
    // a.ajaxProductListCtrl.pendingReq = function() {
    //     a.showLoadingContent(!0)
    // }
    // ,
    // a.ajaxProductListCtrl.errorReq = function() {
    //     a.showLoadingContent(!1),
    //     a.executeSliderEvents = !1,
    //     a.container.remove()
    // }
    // ,
    // b.add(a.ajaxProductListCtrl)
}
,
GG.Components.prototype.productList = function(a) {
    this.staticData = _gg.static.productListStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.executeSliderEvents = !0;
    var b = {
        container: $GG("body"),
        pageName: "",
        showTitle: !0,
        showSubtitle: !0,
        showCategoryName: !1,
        maxShownCount: 15,
        minShownCount: 4,
        maxLazyImgCount: 4,
        listUrl: null,
        title: this.staticTexts.defaultTitle,
        subTitle: this.staticTexts.defaultSubTitle,
        sliderConfig: this.staticData.sliderConfig,
        ajaxUrl: this.staticData.ajaxUrl,
        ajaxData: null
    };
    return this.config = $GG.extend(b, a),
    this
}
,
GG.Components.prototype.productList.prototype.init = function() {
    if (this.staticData = _gg.static.productListStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.container = this.config.container,
    !(this.container.length > 0))
        return this.executeSliderEvents = !1,
        void console.info("Please check the dom object for product list! " + this.config.pageName);
    null != this.config.ajaxData ? (this.modalData(this.config.ajaxData),
    this.executeSliderEvents && GG.Utilities.initSliderObserver(this.container, this.staticData.sliderConfig, this.config.maxLazyImgCount)) : this.getAjaxData()
}
,
GG.Components.prototype.productList.prototype.modalData = function(a) {
    if (a.productList && null != a.productList && "" != a.productList && a.productList.length > this.config.minShownCount && null != a) {
        var b = {
            container: this.config.container,
            title: this.config.title,
            subTitle: this.config.subTitle,
            showSubtitle: this.config.showSubtitle,
            showTitle: this.config.showTitle,
            pageName: this.config.pageName,
            listUrl: this.config.listUrl,
            ajaxData: a
        };
        new _gg.components.listTitle(b).init(),
        this.generateContainerDom(a),
        this.config.container.removeClass("hidden"),
        $GG(".lazyload-img").lazyload({})
    } else
        this.executeSliderEvents = !1,
        this.config.container.remove()
}
,
GG.Components.prototype.productList.prototype.generateListDom = function(a) {
    var b = this;
    if (null != a.productList && "" != a.productList)
        return this.containers.productListContent = _gg.utilities.domGenerator({
            nodeType: "ul",
            id: this.config.pageName + this.staticData.widgetUlIdName
        }),
        $GG.each(a.productList, function(a, c) {
            if (a <= b.config.maxShownCount) {
                var d = [];
                c.hasOwnProperty("freeShipping") && c.freeShipping && (b.containers.freeShipping = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.freeShippingClassName]
                }),
                d.push(b.containers.freeShipping)),
                c.hasOwnProperty("shippingTime") && (b.containers.sameDayFreeShipping = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.sameDayFreeShippingClassName]
                }),
                d.push(b.containers.sameDayFreeShipping));
                var e = c.imageUrl
                  , f = b.staticData.lazyLoadUrl
                  , g = [];
                c.hasOwnProperty("imageUrl") && null != c.imageUrl && (e = c.imageUrl),
                e.indexOf("http:") > -1 && (e = e.replace("http:", "https:")),
                b.config.maxLazyImgCount,
                b.containers.imgDomContent = _gg.utilities.domGenerator({
                    nodeType: "img",
                    classNames: [b.staticData.imgClassName],
                    attributes: {
                        src: f,
                        "data-original": e,
                        alt: c.title,
                        width: 170,
                        height: 170
                    }
                }),
                g.push(b.containers.imgDomContent);
                var h = b.getEnergyEfficency(c);
                null != h && g.push(h),
                b.containers.imgContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.imgContainerClassName],
                    htmlContent: g
                }),
                b.containers.descContentContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.descContentClassName],
                    htmlContent: b.generateProductDesc(c)
                }),
                b.containers.widgetSliderMobileContainer = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [b.staticData.widgetSliderMobileClassName],
                    htmlContent: [b.containers.imgContainer, b.containers.descContentContainer]
                }),
                d.push(b.containers.widgetSliderMobileContainer),
                b.containers.productLinkContent = _gg.utilities.domGenerator({
                    nodeType: "a",
                    attributes: {
                        href: c.productUrl,
                        title: c.title + " - " + b.staticData.onlineShopping
                    },
                    htmlContent: d
                }),
                b.containers.opportunityContent = _gg.utilities.domGenerator({
                    nodeType: "li",
                    classNames: [b.staticData.productListClassName],
                    htmlContent: b.containers.productLinkContent
                }),
                $GG(b.containers.productListContent).append(b.containers.opportunityContent)
            }
        }),
        $GG(b.containers.productListContent);
    this.container.remove()
}
,
GG.Components.prototype.productList.prototype.getEnergyEfficency = function(a) {
    var b = this;
    return this.containers.energyContent = null,
    a.hasOwnProperty("specList") && null != a.specList && $GG.each(a.specList, function(c, d) {
        d.mainSpecName == b.staticTexts.energyEfficiency && (a.energyEfficency = d.specDataName)
    }),
    a.hasOwnProperty("energyEfficency") && null != a.energyEfficency && (this.containers.energyContent = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [this.staticData.energyClassName],
        htmlContent: a.energyEfficency
    })),
    this.containers.energyContent
}
,
GG.Components.prototype.productList.prototype.showLoadingContent = function(a) {
    this.containers = {};
    var b = this.config.container.find("." + this.staticData.loadingClassName);
    b.length < 1 && (this.containers.loadingContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.loadingClassName],
        htmlContent: "&nbsp;"
    }),
    this.config.container.append(this.containers.loadingContent)),
    b = this.config.container.find("." + this.staticData.loadingClassName),
    a ? b.show() : b.hide()
}
,
GG.Components.prototype.productList.prototype.generateProductDesc = function(a) {
    var b = this
      , c = []
      , d = "&nbsp;"
      , e = a.title;
    if (a.hasOwnProperty("subtitle") && (d = a.subtitle),
    a.hasOwnProperty("dailyOffer") && (d = a.dailyOfferMinDescription,
    e = a.dailyOfferTitle),
    b.containers.productTitleContent = _gg.utilities.domGenerator({
        nodeType: "p",
        classNames: [b.staticData.productTitleClassName],
        htmlContent: e
    }),
    c.push(b.containers.productTitleContent),
    a.hasOwnProperty("subtitle") && (b.containers.productDescContent = _gg.utilities.domGenerator({
        nodeType: "p",
        classNames: [b.staticData.productDescClassName],
        htmlContent: d
    }),
    c.push(b.containers.productDescContent)),
    a.hasOwnProperty("price") || a.hasOwnProperty("buyPrice")) {
        var f = 0;
        a.hasOwnProperty("buyPrice") && (f = Number(a.buyPrice.price + "." + a.buyPrice.subPrice)),
        a.hasOwnProperty("price") && (f = Number(a.price)),
        b.containers.productPriceContent = _gg.utilities.domGenerator({
            nodeType: "p",
            classNames: [b.staticData.productPriceClassName],
            htmlContent: _gg.utilities.numberWithCommas(f, !0)
        }),
        c.push(b.containers.productPriceContent)
    }
    return a.hasOwnProperty("marketPrice") && (b.containers.productOldPriceContent = _gg.utilities.domGenerator({
        nodeType: "p",
        classNames: [b.staticData.productOldPriceClassName],
        htmlContent: _gg.utilities.numberWithCommas(Number(a.marketPrice), !0)
    }),
    c.push(b.containers.productOldPriceContent)),
    b.containers.descContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        htmlContent: c
    }),
    b.containers.descContainer
}
,
GG.Components.prototype.productList.prototype.generateContainerDom = function(a) {
    this.containers.productListCon = this.generateListDom(a),
    this.containers.widgetSliderContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.widgetSliderClassName],
        htmlContent: this.containers.productListCon
    }),
    this.containers.sliderGridContent = _gg.utilities.domGenerator({
        nodeType: "div",
        id: this.config.pageName + this.staticData.widgetSliderIdName,
        classNames: [this.staticData.sliderFullGridClassName],
        htmlContent: [this.containers.widgetSliderContent]
    }),
    this.containers.widgetContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.widgetContentClassName],
        htmlContent: [this.containers.sliderGridContent]
    }),
    this.containers.sliderContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.sliderContentClassName],
        htmlContent: this.containers.widgetContent
    }),
    this.container.append(this.containers.sliderContent)
}
,
GG.Components.prototype.productList.prototype.getAjaxData = function() {
    // var a = this;
    // a.ajaxProductListCtrl = new _gg.communication.ajaxController({
    //     url: a.config.ajaxUrl,
    //     timeOut: 2e4
    // }),
    // a.ajaxProductListCtrl.tryOnce = !1,
    // a.ajaxProductListCtrl.ajaxAction();
    // var b = new _gg.utilities.ajaxObserver;
    // b.init(),
    // a.ajaxProductListCtrl.successReq = function() {
    //     a.showLoadingContent(!1);
    //     var b = a.ajaxProductListCtrl.completeData;
    //     b.hasOwnProperty("error") ? this.container.remove() : a.modalData(b)
    // }
    // ,
    // a.ajaxProductListCtrl.completeReq = function() {
    //     a.showLoadingContent(!1),
    //     a.executeSliderEvents && _gg.utilities.initSliderObserver(a.container, a.staticData.sliderConfig, a.config.maxLazyImgCount)
    // }
    // ,
    // a.ajaxProductListCtrl.pendingReq = function() {
    //     a.showLoadingContent(!0)
    // }
    // ,
    // a.ajaxProductListCtrl.errorReq = function() {
    //     a.showLoadingContent(!1),
    //     a.container.remove()
    // }
    // ,
    // b.add(a.ajaxProductListCtrl)
}
,
GG.Components.prototype.brandList = function(a) {
    this.staticData = _gg.static.brandListStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.executeSliderEvents = !0;
    var b = {
        container: $GG("body"),
        pageName: "",
        showTitle: !0,
        showSubtitle: !0,
        shuffle: !1,
        maxLazyImgCount: 7,
        listUrl: null,
        brandUrl: null,
        seeAllText: this.staticTexts.seeAllText,
        title: this.staticTexts.defaultTitle,
        subTitle: this.staticTexts.defaultSubTitle,
        sliderConfig: this.staticData.sliderConfig,
        showBrandList: this.staticData.brandListArray,
        ajaxUrl: this.staticData.ajaxUrl,
        ajaxData: null
    };
    return this.config = $GG.extend(b, a),
    this
}
,
GG.Components.prototype.brandList.prototype.init = function() {
    if (this.staticData = _gg.static.brandListStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.container = this.config.container,
    !(this.container.length > 0))
        return this.executeSliderEvents = !1,
        void console.info("Please check the dom object for brand list! " + this.config.pageName);
    null != this.config.ajaxData ? (this.modalData(this.config.ajaxData),
    this.executeSliderEvents && _gg.utilities.initSliderObserver(this.container, this.staticData.sliderConfig, this.config.maxLazyImgCount)) : this.getAjaxData()
}
,
GG.Components.prototype.brandList.prototype.modalData = function(a) {
    if (a && null != a && "" != a) {
        var b = {
            container: this.config.container,
            title: this.config.title,
            subTitle: this.config.subTitle,
            showSubtitle: this.config.showSubtitle,
            showTitle: this.config.showTitle,
            pageName: this.config.pageName,
            listUrl: this.config.listUrl,
            seeAllText: this.config.seeAllText
        };
        new _gg.components.listTitle(b).init(),
        this.generateContainerDom(a),
        this.config.container.removeClass("hidden"),
        $GG(".lazyload-img").lazyload({})
    } else
        this.executeSliderEvents = !1,
        this.config.container.remove()
}
,
GG.Components.prototype.brandList.prototype.generateListDom = function(a) {
    var b = this
      , c = 1;
    try {
        if (null != a && "" != a)
            return b.containers.brandListContent = _gg.utilities.domGenerator({
                nodeType: "ul",
                id: b.staticData.widgetUlIdName
            }),
            b.config.shuffle && (a = b.shuffleArray(a)),
            $GG.each(a, function(a, d) {
                if (d.displayLogo && null != d.storeLogoURL && (null == b.config.showBrandList || b.config.showBrandList.indexOf(d.storeTitle) > -1)) {
                    var e = d.storeLogoURL
                      , f = b.staticData.lazyLoadUrl
                      , g = [];
                    d.hasOwnProperty("storeLogoURL") && null != d.storeLogoURL && (e = d.storeLogoURL),
                    e.indexOf("http:") > -1 && (e = e.replace("http:", "")),
                    e.indexOf("https:") > -1 && (e = e.replace("https:", "")),
                    b.config.maxLazyImgCount,
                    c++,
                    b.containers.brandImgContent = _gg.utilities.domGenerator({
                        nodeType: "img",
                        classNames: [b.staticData.brandImgClassName],
                        attributes: {
                            src: f,
                            "data-original": e,
                            alt: d.storeTitle,
                            width: 156,
                            height: 93
                        }
                    }),
                    g.push(b.containers.brandImgContent),
                    b.containers.helperContent = _gg.utilities.domGenerator({
                        nodeType: "span",
                        classNames: [b.staticData.brandHelperClassName]
                    }),
                    g.push(b.containers.helperContent),
                    b.containers.brandLinkContent = _gg.utilities.domGenerator({
                        nodeType: "a",
                        attributes: {
                            href: b.config.brandUrl + "/" + d.storeSlug,
                            title: d.storeTitle
                        },
                        classNames: [b.staticData.brandLogoClassName],
                        htmlContent: g
                    }),
                    b.containers.brandContainer = _gg.utilities.domGenerator({
                        nodeType: "li",
                        classNames: [b.staticData.brandContainerClassName],
                        htmlContent: b.containers.brandLinkContent
                    }),
                    $GG(b.containers.brandListContent).append(b.containers.brandContainer)
                }
            }),
            $GG(b.containers.brandListContent);
        this.container.remove()
    } catch (a) {
        console.log("Please check the generate List Dom: " + a)
    }
}
,
GG.Components.prototype.brandList.prototype.shuffleArray = function(a) {
    for (var b, c, d = a.length; 0 !== d; )
        c = Math.floor(Math.random() * d),
        d -= 1,
        b = a[d],
        a[d] = a[c],
        a[c] = b;
    return a
}
,
GG.Components.prototype.brandList.prototype.showLoadingContent = function(a) {
    this.containers = {};
    var b = this.config.container.find("." + this.staticData.loadingClassName);
    b.length < 1 && (this.containers.loadingContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.loadingClassName],
        htmlContent: "&nbsp;"
    }),
    this.config.container.append(this.containers.loadingContent)),
    b = this.config.container.find("." + this.staticData.loadingClassName),
    a ? b.show() : b.hide()
}
,
GG.Components.prototype.brandList.prototype.generateContainerDom = function(a) {
    try {
        this.containers.brandListCon = this.generateListDom(a),
        this.containers.widgetSliderContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.widgetSliderClassName],
            htmlContent: this.containers.brandListCon
        }),
        this.containers.sliderGridContent = _gg.utilities.domGenerator({
            nodeType: "div",
            id: this.config.pageName + this.staticData.widgetSliderIdName,
            classNames: [this.staticData.sliderFullGridClassName],
            htmlContent: [this.containers.widgetSliderContent]
        }),
        this.containers.widgetContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.widgetContentClassName],
            htmlContent: [this.containers.sliderGridContent]
        }),
        this.containers.sliderContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.sliderContentClassName],
            htmlContent: this.containers.widgetContent
        })
    } catch (a) {
        console.log("Please check container dom generator :" + a)
    }
    this.container.append(this.containers.sliderContent)
}
,
GG.Components.prototype.brandList.prototype.getAjaxData = function() {
    // var a = this;
    // a.ajaxProductListCtrl = new _gg.communication.ajaxController({
    //     url: a.config.ajaxUrl,
    //     timeOut: 2e4
    // }),
    // a.ajaxProductListCtrl.tryOnce = !1,
    // a.ajaxProductListCtrl.ajaxAction();
    // var b = new _gg.utilities.ajaxObserver;
    // b.init(),
    // a.ajaxProductListCtrl.successReq = function() {
    //     a.showLoadingContent(!1);
    //     var b = a.ajaxProductListCtrl.completeData;
    //     b.hasOwnProperty("error") ? this.container.remove() : a.modalData(b)
    // }
    // ,
    // a.ajaxProductListCtrl.completeReq = function() {
    //     a.showLoadingContent(!1),
    //     a.executeSliderEvents && _gg.utilities.initSliderObserver(a.container, a.staticData.sliderConfig, a.config.maxLazyImgCount)
    // }
    // ,
    // a.ajaxProductListCtrl.pendingReq = function() {
    //     a.showLoadingContent(!0)
    // }
    // ,
    // a.ajaxProductListCtrl.errorReq = function() {
    //     a.showLoadingContent(!1),
    //     a.container.remove()
    // }
    // ,
    // b.add(a.ajaxProductListCtrl)
}
,
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")),
            h.json ? JSON.parse(a) : a
        } catch (a) {}
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g
      , h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({}, h.defaults, i),
            "number" == typeof i.expires) {
                var j = i.expires
                  , k = i.expires = new Date;
                k.setTime(+k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
            var p = m[n].split("=")
              , q = c(p.shift())
              , r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    }
    ;
    h.defaults = {},
    a.removeCookie = function(b, c) {
        return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })),
        !a.cookie(b))
    }
}),
GG.Utilities.hasCss3Support = function() {
    var a = document.createElement("div")
      , b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
    for (var c in b)
        if (void 0 !== a.style[b[c]])
            return !0;
    return !1
}(),
GG.Utilities.domGenerator = function(a) {
    var b = document.createElement(a.nodeType);
    if (void 0 !== a.classNames)
        for (var c = 0; c < a.classNames.length; c++)
            b.className += a.classNames[c],
            c + 1 != a.classNames.length && (b.className += " ");
    if (void 0 !== a.id && (b.id = a.id),
    void 0 !== a.attributes)
        for (var d in a.attributes)
            b.setAttribute(d, a.attributes[d]);
    if ("function" == typeof a.htmlContent)
        b.innerHTML = a.htmlContent();
    else if ("object" == typeof a.htmlContent)
        if (a.htmlContent.length > 0)
            for (var e = 0; e < a.htmlContent.length; e++)
                b.appendChild(a.htmlContent[e]);
        else
            0 !== a.htmlContent.length && b.appendChild(a.htmlContent);
    else
        a.htmlContent && (b.innerHTML = a.htmlContent);
    return b
}
,
GG.Static.DrilldownStaticData = {
    ddUlContainer: "drilldown-menu",
    ddCoverContainer: "drilldown-wrapper",
    ddHeader: "drilldown-header",
    ddGoHome: "go-home",
    ddGoBack: "go-back",
    ddGoClose: "go-close",
    activeClassName: "active",
    currentClassName: "current",
    showClassName: "show"
},
GG.Components.prototype.drilldown.prototype.eventController = function() {
    var a = GG.ExternalController.jquery
      , b = this;
    $GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
        b.containerWidth = b.container.outerWidth(),
        _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && b.resetEvent(),
        b.left = b.containerWidth * b.moveState,
        b.animAction(!0)
    }),
    $GG(window).resize(function() {
        _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && (b.containerWidth = b.container.outerWidth(),
        b.left = b.containerWidth * b.moveState,
        b.animAction(!0))
    }),
    this.container.find("li").live(_gg.controller.events.Actions.CLICK, function(c) {
        if (c.stopPropagation(),
        b.eventTarget = a(this),
        b.config.ajaxControl)
            if (a(this).find("ul").children().length > 0)
                b.clickEventAction();
            else {
                if (a(this).find("a").length > 0)
                    return;
                a(b).trigger(b.AJAX_ACTION_READY, b)
            }
        else
            b.clickEventAction()
    }).bind(_gg.controller.events.Actions.UP, function(a) {
        clearTimeout(0)
    }),
    this.clickEventAction = function() {
        var a = b.eventTarget.find("ul").eq(0);
        b.animationInProgress || 0 == a.length || (b.target = a,
        b.ddCoverContainer.find("ul").removeClass(b.staticData.currentClassName),
        b.target.addClass(b.staticData.activeClassName),
        b.target.addClass(b.staticData.currentClassName),
        b.containerHeight = b.target.height(),
        b.moveState++,
        b.nextMove())
    }
    ,
    this.container.find("." + this.staticData.ddGoBack).bind(_gg.controller.events.Actions.CLICK, function(a) {
        $GG(b).trigger(b.BACK_STEP),
        b.animationInProgress || 0 === b.left || (b.target.removeClass(b.staticData.currentClassName),
        b.target = b.target.parents("ul").eq(0),
        b.target.addClass(b.staticData.activeClassName),
        b.target.addClass(b.staticData.currentClassName),
        b.containerHeight = b.target.height(),
        b.moveState--,
        b.backMove())
    }),
    this.container.find("." + this.staticData.ddGoHome).bind(_gg.controller.events.Actions.CLICK, function(a) {
        $GG(b).trigger(b.HOME_STEP),
        b.animationInProgress || (b.resetEvent(),
        b.moveState = 0,
        b.backHome())
    }),
    this.container.find("." + this.staticData.ddGoClose).bind(_gg.controller.events.Actions.CLICK, function(a) {
        $GG(b).trigger(b.CLOSE_ACTION),
        b.config.resetOnClose && (b.resetEvent(),
        b.backHome()),
        $GG(b.container).addClass("hidden")
    })
}
,
GG.Components.prototype.drilldown.prototype.nextMove = function() {
    this.left += this.containerWidth,
    this.animAction()
}
,
GG.Components.prototype.drilldown.prototype.backMove = function() {
    this.left -= this.containerWidth,
    this.animAction()
}
,
GG.Components.prototype.drilldown.prototype.backHome = function() {
    this.left = 0,
    this.animAction(!0)
}
,
GG.Components.prototype.drilldown.prototype.animAction = function(a) {
    var b = this
      , c = function() {
        if (b.animationInProgress = !1,
        b.ddCoverContainer.find("ul." + b.staticData.currentClassName).find("ul").removeClass(b.staticData.activeClassName),
        b.moveState > 0) {
            $GG(b).trigger(b.ACTION_STEP);
            var a = b.ddCoverContainer.find("ul." + b.staticData.currentClassName + "." + b.staticData.activeClassName).parents("li:eq(0)").find("span").html();
            $GG(b.ddHeadContainer).html(a),
            $GG(b.ddHeaderContainer).addClass(b.staticData.showClassName)
        } else
            $GG(b).trigger(b.HOME_STEP),
            $GG(b.ddHeadContainer).html(""),
            $GG(b.ddHeaderContainer).removeClass(b.staticData.showClassName);
        b.config.allowScroll && window.scrollTo(0, b.scrollTargetY)
    }
      , d = 0
      , e = ""
      , f = {};
    d = this.left,
    e = "translate3d(" + -d + "px, 0, 0)",
    f = {
        left: -d + "px",
        height: b.containerHeight + "px"
    },
    _gg.utilities.hasCss3Support ? (this.moveActionBefore !== -d && (this.animationInProgress = !0,
    $GG(this.ddCoverContainer).css("-" + this.cssPrefix + "-transition-duration", b.config.transitionDuration / 1e3 + "s"),
    $GG(this.ddCoverContainer).css("height", b.containerHeight + "px"),
    $GG(this.ddCoverContainer).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        $GG(b.ddCoverContainer).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
        c()
    })),
    this.moveActionBefore = -d,
    a && ($GG(this.ddCoverContainer).css("-" + this.cssPrefix + "-transition-duration", "0s"),
    c()),
    $GG(b.ddCoverContainer).css(b.animProp, e),
    $GG(this.ddCoverContainer).css(this.animProp, e)) : (this.animationInProgress = !0,
    $GG(this.ddCoverContainer).animate(f, {
        duration: b.config.transitionDuration,
        complete: function() {
            c()
        }
    }))
}
,
GG.Static.SliderStaticData = {
    events: {
        ready: "gg.slider.ready",
        itemAdded: "gg.slider.itemAdded",
        itemRemoved: "gg.slider.itemRemoved",
        slideStart: "gg.slider.slideStart",
        slideEnd: "gg.slider.slideEnd"
    },
    indicatorNextClassName: "gg-slider-indicator-next",
    indicatorPrevClassName: "gg-slider-indicator-prev",
    indicatorActiveClassName: "gg-slider-indicator-active",
    itemCoverClassName: "gg-slider-item-cover",
    ulClassName: "gg-slider",
    sliderButtonGeneralClass: "gg-slider-button",
    sliderButtonPreviousClass: "gg-slider-button-prev",
    sliderButtonNextClass: "gg-slider-button-next",
    sliderButtonDisableClass: "gg-slider-button-disabled",
    sliderButtonHiddenClass: "gg-slider-button-hidden",
    sliderButtonHoverAction: "gg-slider-hover-action",
    sliderHorizontal: "gg-slider-horizontal",
    sliderVertical: "gg-slider-vertical",
    sliderTypeVertical: "vertical-slider",
    sliderTypeHorizontal: "horizontal-slider",
    cloneElementsClass: "gg-slider-clone-elements",
    sliderinnerContainer: "slider-inner-container",
    bulletContainer: "slider-bullet-container",
    bulletInnerItem: "slider-bullet-item",
    sliderVideoIcon: "video",
    liFadeInClass: "slider-fade-in",
    liFadeInActiveClass: "slider-fade-in-active",
    mobileReadyClass: "mobile-ready",
    sliderThumbNail: "gg-slider-thumbnail"
},
GG.Components.prototype.slider.prototype.eventController = function() {
    var a = GG.ExternalController.jquery
      , b = this;
    if ($GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
        b.sizeChange()
    }),
    _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || !this.config.mobileScroll || (b.calledEventBefore = !1,
    a(b.config.mainCoverContainer + ", ." + this.staticData.sliderinnerContainer).bind("scroll", function() {
        b.calledEventBefore || $GG(b).trigger(b.SCROLL_EVENT_CHANGE, b),
        b.calledEventBefore = !0
    })),
    this.config.autoStart && _gg.pageType == GG.Static.Enums.pageTypes.BROWSER && (b.itemCoverContainer.bind(_gg.controller.events.Actions.OVER, function(a) {
        b.killTimeOut()
    }),
    b.itemCoverContainer.bind(_gg.controller.events.Actions.CANCEL, function(a) {
        b.createTimeOut()
    })),
    this.config.NavigationActiveOnHover && (b.mainContainer.bind(_gg.controller.events.Actions.OVER, function(a) {
        b.mainContainer.find("." + b.staticData.sliderButtonGeneralClass).removeClass(b.staticData.sliderButtonHoverAction)
    }),
    b.mainContainer.bind(_gg.controller.events.Actions.CANCEL, function(a) {
        b.mainContainer.find("." + b.staticData.sliderButtonGeneralClass).addClass(b.staticData.sliderButtonHoverAction)
    })),
    (_gg.pageType == GG.Static.Enums.pageTypes.IOS || _gg.pageType == GG.Static.Enums.pageTypes.ANDROID) && !this.config.mobileScroll) {
        var c = {};
        b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.horizontal ? c[_gg.static.Enums.directions.horizontal] = {
            prev: "left",
            next: "right"
        } : b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.vertical && (c[_gg.static.Enums.directions.vertical] = {
            prev: "top",
            next: "bottom"
        });
        var d = {};
        this.itemCoverContainer.bind(_gg.controller.events.Actions.DOWN, function(a) {
            b.scrollTop = $GG(window).scrollTop(),
            b.allowMoveAction = !1,
            b.animationInProgress || (d.initialPoint = {
                x: a.originalEvent.targetTouches[0].pageX,
                y: a.originalEvent.targetTouches[0].pageY
            },
            d.touching = !0,
            d.initialCoverPosition = 0,
            _gg.utilities.hasCss3Support && ($GG(b.itemCoverContainer).css("-" + b.cssPrefix + "-transition-duration", "0s"),
            b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.horizontal ? d.initialCoverPosition = parseInt(b.itemCoverContainer.css(b.animProp).split(",")[4]) : b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.vertical && (d.initialCoverPosition = parseInt(b.itemCoverContainer.css(b.animProp).split(",")[5]))),
            b.itemCoverContainer.bind(_gg.controller.events.Actions.MOVE, function(a) {
                var c = 0;
                if (b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.horizontal) {
                    c = d.offset = a.originalEvent.targetTouches[0].pageX - d.initialPoint.x;
                    var e = Math.abs(a.originalEvent.targetTouches[0].pageX - d.initialPoint.x);
                    Math.abs(a.originalEvent.targetTouches[0].pageY - d.initialPoint.y);
                    e > 30 && (a.preventDefault(),
                    b.allowMoveAction = !0)
                } else
                    b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.vertical && (a.preventDefault(),
                    c = d.offset = a.originalEvent.targetTouches[0].pageY - d.initialPoint.y);
                if (d.distance = Math.min(Math.abs(c), 80),
                _gg.utilities.hasCss3Support) {
                    if ($GG(window).scrollTop() != b.scrollTop)
                        return;
                    b.allowMoveAction && (0 === b.currentIndis && !b.config.infinite && c > 0 || (b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.horizontal ? b.itemCoverContainer.css(b.animProp, "translate3d(" + (d.initialCoverPosition + c) + "px, 0, 0)") : b.config.direction[_gg.static.globalParameters.responsiveState] === _gg.static.Enums.directions.vertical && b.itemCoverContainer.css(b.animProp, "translate3d(0, " + (d.initialCoverPosition + c) + "px, 0)")))
                }
            }),
            b.itemCoverContainer.bind(_gg.controller.events.Actions.UP, function(a) {
                d.touching = !1,
                $GG(window).scrollTop() == b.scrollTop && (b.itemCoverContainer.unbind([_gg.controller.events.Actions.MOVE, _gg.controller.events.Actions.UP].join(" ")),
                d.distance >= 60 ? (d.offset > 0 ? b.prevItem() : b.nextItem(),
                d.distance = 0) : b.goToIndis(b.currentIndis))
            }))
        })
    }
    a(this.nextButton).bind(_gg.controller.events.Actions.DOWN, function() {
        a(this).hasClass(b.staticData.sliderButtonDisableClass) || b.nextItem()
    }),
    a(this.previousButton).bind(_gg.controller.events.Actions.DOWN, function() {
        a(this).hasClass(b.staticData.sliderButtonDisableClass) || b.prevItem()
    }),
    $GG(this.bulletContainer).find("li").live(_gg.controller.events.Actions.CLICK, function() {
        var c = a(this).index();
        if (!b.config.infinite || _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || (b.clickedItemIndex = c),
        $GG(b).trigger(b.THUMB_ITEM_CLICKED, b),
        b.config.infinite && b.config.transition !== _gg.static.Enums.transitions.fade) {
            var d = b.config.itemCount[_gg.static.globalParameters.responsiveState];
            if (b.currentIndis === c + d)
                return;
            b.goToIndis(c + d)
        } else {
            if (b.currentIndis === c)
                return;
            b.goToIndis(c)
        }
    }),
    $GG(this.bulletContainer).find("li").live(_gg.controller.events.Actions.OVER, function() {
        var c = a(this).index();
        if (b.config.infinite && b.config.transition !== _gg.static.Enums.transitions.fade) {
            var d = b.config.itemCount[_gg.static.globalParameters.responsiveState];
            if (b.currentIndis === c + d)
                return;
            b.goToIndis(c + d)
        } else {
            if (b.currentIndis === c)
                return;
            b.goToIndis(c)
        }
        $GG(b).trigger(b.THUMB_ITEM_CLICKED, b)
    })
}
,
GG.Components.prototype.slider.prototype.nextItem = function() {
    if (!this.animationInProgress) {
        var a = this.config.stepCount[_gg.static.globalParameters.responsiveState];
        this.goToIndis(this.currentIndis + a),
        this.checkPenultimatePage(),
        !this.config.infinite || _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || (this.clickedItemIndex = this.currentIndis - this.config.stepCount[_gg.static.globalParameters.responsiveState]),
        $GG(this).trigger(this.NEXT_ITEM_CLICKED, this)
    }
}
,
GG.Components.prototype.slider.prototype.checkPenultimatePage = function() {
    var a = this.config.itemCount[_gg.static.globalParameters.responsiveState]
      , b = this.config.stepCount[_gg.static.globalParameters.responsiveState];
    this.itemList.find('li:not(".' + this.staticData.cloneElementsClass + '")').length < this.currentIndis + a + b && $GG(this).trigger(this.PENULTIMATE_PAGE, this)
}
,
GG.Components.prototype.slider.prototype.prevItem = function() {
    if (!this.animationInProgress) {
        var a = this.config.stepCount[_gg.static.globalParameters.responsiveState];
        this.goToIndis(this.currentIndis - a),
        $GG(this).trigger(this.PREV_ITEM_CLICKED, this)
    }
}
,
GG.Components.prototype.slider.prototype.goToIndis = function(a, b) {
    if (!this.checkMobileNatural()) {
        var c = this.config.stepCount[_gg.static.globalParameters.responsiveState]
          , d = this.config.itemCount[_gg.static.globalParameters.responsiveState]
          , e = this.config.direction[_gg.static.globalParameters.responsiveState]
          , f = this.itemList[0].children.length
          , g = this
          , h = function() {
            if (g.createTimeOut(),
            g.animationInProgress = !1,
            g.config.infinite && g.config.transition !== _gg.static.Enums.transitions.fade && g.itemList.find("li:eq(" + g.currentIndis + ")").data("clone") >= 0 && g.itemList.find("li:eq(" + (g.currentIndis + c - 1) + ")").data("clone") >= 0) {
                var a = g.itemList.find("li:eq(" + g.currentIndis + ")").data("clone")
                  , b = g.itemList.children().filter(function() {
                    return $GG(this).data("index") === a
                })
                  , d = b.index();
                g.goToIndis(d, !0)
            }
            g.navigationController();
            try {
                $GG(g).trigger(g.SLIDE_END)
            } catch (a) {}
        }
          , i = a + c <= f ? a : f - c;
        if (i = i < 0 ? 0 : i,
        this.config.infinite || (i = i + d > f ? f - d : i),
        this.currentIndis = i,
        this.config.transition === _gg.static.Enums.transitions.fade)
            i = a + d > f ? 0 : i,
            this.config.infinite && (i = a < 0 ? f - d : i),
            this.currentIndis = i,
            b ? (this.itemList.children().removeClass(this.staticData.liFadeInActiveClass),
            this.itemList.find("li:eq(" + this.currentIndis + ")").addClass(this.staticData.liFadeInActiveClass)) : (g.killTimeOut(),
            g.animationInProgress = !0,
            this.itemList.find("." + this.staticData.liFadeInActiveClass).fadeOut(g.config.transitionDuration, function() {
                $GG(this).removeClass(g.staticData.liFadeInActiveClass)
            }),
            this.itemList.find("li:eq(" + this.currentIndis + ")").fadeIn(g.config.transitionDuration, function() {
                $GG(this).addClass(g.staticData.liFadeInActiveClass),
                h()
            }));
        else {
            var j = 0
              , k = ""
              , l = {};
            if (e === _gg.static.Enums.directions.horizontal ? (j = this.itemList.find("li:eq(" + this.currentIndis + ")").position().left,
            k = "translate3d(" + -j + "px, 0, 0)",
            l = {
                left: -j + "px"
            }) : e === _gg.static.Enums.directions.vertical && (j = this.itemList.find("li:eq(" + this.currentIndis + ")").position().top,
            k = "translate3d(0," + -j + "px, 0)",
            l = {
                top: -j + "px"
            }),
            _gg.utilities.hasCss3Support) {
                var m = document.createElement("div")
                  , n = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                for (var o in n)
                    void 0 !== m.style[n[o]] && (g.cssPrefix = n[o].replace("Perspective", "").toLowerCase(),
                    g.animProp = "-" + g.cssPrefix + "-transform");
                b ? ($GG(this.itemCoverContainer).css("-" + g.cssPrefix + "-transition-duration", "0s"),
                this.moveActionBefore = -j) : (this.moveActionBefore !== -j && (g.killTimeOut(),
                g.animationInProgress = !0,
                $GG(this.itemCoverContainer).css("-" + g.cssPrefix + "-transition-duration", this.config.transitionDuration / 1e3 + "s"),
                $GG(this.itemCoverContainer).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    $GG(g.itemCoverContainer).unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                    h()
                })),
                this.moveActionBefore = -j),
                $GG(this.itemCoverContainer).css(g.animProp, k)
            } else
                b ? e === _gg.static.Enums.directions.horizontal ? $GG(this.itemCoverContainer).css("left", -j) : e === _gg.static.Enums.directions.vertical && $GG(this.itemCoverContainer).css("top", -j) : (g.killTimeOut(),
                g.animationInProgress = !0,
                $GG(this.itemCoverContainer).animate(l, {
                    duration: this.config.transitionDuration,
                    complete: function() {
                        h()
                    }
                }))
        }
    }
}
,
GG.Static.advConfig = {
    common: {
        0: {
            containerId: "div-gpt-ad-1455279154558-0",
            bannerName: "/134240458/HTML5",
            dimensions: [980, 270],
            mappingName: "mapping_masthead"
        },
        1: {
            containerId: "div-gpt-ad-1459260874003-0",
            bannerName: "/134240458/Responsive_Masterhead",
            dimensions: [320, 30],
            mappingName: "mapping_mobile_320x30"
        }
    },
    homePage: {
        0: {
            containerId: "div-gpt-ad-149706163682836562-1",
            bannerName: "/134240458/Wep_Anasayfa_300x250",
            dimensions: [[300, 250]],
            mappingName: "mapping_desktop_300x250"
        },
        1: {
            containerId: "div-gpt-ad-1453207160065-0",
            bannerName: "/134240458/MWep",
            dimensions: [300, 250],
            mappingName: "mapping_mobile_300x250"
        }
    },
    searchResult: {
        0: {
            containerId: "div-gpt-ad-1458023768804-0",
            bannerName: "/134240458/AramaSonuc_Ust",
            dimensions: [[728, 90]],
            mappingName: "mapping_desktop_728x90"
        },
        1: {
            containerId: "div-gpt-ad-1458023833687-0",
            bannerName: "/134240458/AramaSonuc_Alt",
            dimensions: [[970, 250], [728, 90]],
            mappingName: "mapping_aramasonuc_alt"
        },
        2: {
            containerId: "div-gpt-ad-1458025109698-0",
            bannerName: "/134240458/Listeleme_160x600_1",
            dimensions: [[160, 600]],
            mappingName: "mapping_desktop_160x600"
        },
        3: {
            containerId: "div-gpt-ad-1458025137701-0",
            bannerName: "/134240458/Listeleme_160x600_2",
            dimensions: [[160, 600]],
            mappingName: "mapping_desktop_160x600"
        },
        4: {
            containerId: "div-gpt-ad-1465906168667-0",
            bannerName: "/134240458/Responsive_Aramasonuc",
            dimensions: [[300, 250]],
            mappingName: "mapping_mobile_300x250"
        }
    },
    productPage: {
        0: {
            containerId: "div-gpt-ad-1458636652631-0",
            bannerName: "/134240458/Web_Üründetay",
            dimensions: [[300, 250]],
            mappingName: "mapping_desktop_300x250"
        },
        1: {
            containerId: "div-gpt-ad-1465202628561-0",
            bannerName: "/134240458/Responsive_Urundetay",
            dimensions: [[300, 250]],
            mappingName: "mapping_mobile_300x250"
        }
    }
},
GG.Utilities.ajaxObserver = function() {
    this.init = function() {
        this.observeObj = [],
        this.hasCheckedBefore = []
    }
    ,
    this.add = function(a) {
        this.observeObj.push(a),
        this.action()
    }
    ,
    this.action = function() {
        for (var a = 0; a < this.observeObj.length; a++)
            if (!(this.hasCheckedBefore.indexOf(b) > -1)) {
                var b = this.observeObj[a];
                try {
                    try {
                        b.pendingReq()
                    } catch (a) {}
                    $GG(b).bind(b.COMPLETE_REQ, function(a, c) {
                        if (b.operationSuccess && !b.isDataNullorEmpty) {
                            b.tryOnce = !1;
                            try {
                                b.completeReq()
                            } catch (a) {}
                        } else
                            b.tryOnce ? console.log("Something wrong on ajax!") : b.tryOnce = !0
                    }),
                    $GG(b).bind(b.PENDING_REQ, function(a) {
                        try {
                            b.pendingReq()
                        } catch (a) {}
                    }),
                    $GG(b).bind(b.ERROR_REQ, function(a) {
                        try {
                            b.errorReq()
                        } catch (a) {}
                    }),
                    $GG(b).bind(b.SUCCESS_REQ, function(a) {
                        try {
                            b.successReq()
                        } catch (a) {}
                    })
                } catch (a) {}
                this.hasCheckedBefore.push(b)
            }
    }
}
,
GG.Utilities.ServerNameGenerator = function() {
    var a = document.location.host;
    return document.location.protocol + "http://" + a
}
,
GG.Utilities.sliderImageLazyLoadController = function(a, b, c) {
    var d = $GG("#" + b + " li");
    $GG(a).bind(a.INIT_READY, function() {
        for (var a = this.currentIndis; a < this.currentIndis + c; a++)
            d.eq(a).find("img").addClass("lazyload-img");
        $GG(".free-shipping").addClass("fsBox" + $GG("#free-shipping-type").val())
    }),
    $GG(a).bind(a.NEXT_ITEM_CLICKED, function() {
        for (var a = this.currentIndis; a < this.currentIndis + c; a++)
            if (d.eq(a).find("img").length > 1)
                for (var e = 0; e < d.eq(a).find("img").length; e++) {
                    var f = d.eq(a).find("img").eq(e).attr("data-original");
                    $GG("#" + b + " li img[data-original='" + f + "']").attr("src", f)
                }
            else {
                var g = d.eq(a).find("img").attr("data-original");
                $GG("#" + b + " li img[data-original='" + g + "']").attr("src", g)
            }
    }),
    $GG(a).bind(a.PREV_ITEM_CLICKED, function() {
        for (var a = this.currentIndis; a < this.currentIndis + c; a++)
            if (d.eq(a).find("img").length > 1)
                for (var e = 0; e < d.eq(a).find("img").length; e++) {
                    var f = d.eq(a).find("img").eq(e).attr("data-original");
                    $GG("#" + b + " li img[data-original='" + f + "']").attr("src", f)
                }
            else {
                var g = d.eq(a).find("img").attr("data-original");
                $GG("#" + b + " li img[data-original='" + g + "']").attr("src", g)
            }
    }),
    $GG(a).bind(a.SCROLL_EVENT_CHANGE, function() {
        for (var a = this.currentIndis + c; a < d.length; a++)
            if (d.eq(a).find("img").length > 1)
                for (var e = 0; e < d.eq(a).find("img").length; e++) {
                    var f = d.eq(a).find("img").eq(e).attr("data-original");
                    $GG("#" + b + " li img[data-original='" + f + "']").attr("src", f)
                }
            else {
                var g = d.eq(a).find("img").attr("data-original");
                $GG("#" + b + " li img[data-original='" + g + "']").attr("src", g)
            }
    })
}
,
GG.Utilities.initSliderObserver = function(a, b, c) {
    if (a.length > 0) {
        var d = this
          , e = a.attr("id");
        d.sliderDefaults = {},
        d.sliderDefaults.containerId = e + " .widget-slider",
        d.sliderDefaults.infinite = b.infinite,
        d.sliderDefaults.bullets = b.bullets,
        d.sliderDefaults.mobileScroll = b.mobileScroll,
        d.sliderDefaults.transition = b.transition,
        d.sliderDefaults.mainCoverContainer = ".widget-border",
        d.sliderDefaults.itemCount = {},
        d.sliderDefaults.stepCount = {},
        d.sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.mobile] = b.mobile[0],
        d.sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.tablet] = b.tablet[0],
        d.sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.desktop] = b.desktop[0],
        d.sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = b.large_desktop[0],
        d.sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.mobile] = b.mobile[1],
        d.sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.tablet] = b.tablet[1],
        d.sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.desktop] = b.desktop[1],
        d.sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = b.large_desktop[1];
        try {
            var f = new _gg.components.slider(d.sliderDefaults);
            f.init(),
            _gg.utilities.sliderImageLazyLoadController(f, e, c)
        } catch (a) {
            console.log("Please check the html dom for init slider component :" + e + " Error:" + a)
        }
    } else
        console.log("There is no html dom for init slider component")
}
,
GG.Components.prototype.listTitle = function(a) {
    this.staticData = _gg.static.listTitleStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.executeSliderEvents = !0;
    var b = {
        container: $GG("body"),
        pageName: "",
        showTitle: !0,
        showSubtitle: !0,
        listUrl: null,
        seeAllText: this.staticTexts.seeAllText,
        title: "",
        subTitle: "",
        ajaxData: null,
        titleTagName: this.staticData.titleTagName
    };
    return this.config = $GG.extend(b, a),
    this
}
,
GG.Components.prototype.listTitle.prototype.init = function() {
    if (this.staticData = _gg.static.listTitleStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.container = this.config.container,
    !(this.container.length > 0))
        return void console.info("Please check the dom object for title list! " + this.config.pageName);
    this.generateTitleDom(this.config.ajaxData)
}
,
GG.Components.prototype.listTitle.prototype.generateTitleDom = function(a) {
    try {
        this.containers = {};
        var b = 0
          , c = this.config.subTitle;
        if (null != a && a.hasOwnProperty("dailyDealCount") && (b = a.dailyDealCount,
        c = c.replace("%s%", b)),
        this.config.showTitle && "" != this.config.subTitle) {
            this.container.empty();
            var d = []
              , e = [];
            if (this.containers.title = _gg.utilities.domGenerator({
                nodeType: this.config.titleTagName,
                classNames: [this.staticData.titleClassName],
                htmlContent: this.config.title
            }),
            d.push(this.containers.title),
            this.config.showSubtitle && (this.containers.subTitle = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: [this.staticData.subTitleClassName],
                htmlContent: c
            }),
            d.push(this.containers.subTitle)),
            this.containers.titleLeft = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [this.staticData.widgetTitleLeftClassName],
                htmlContent: d
            }),
            e.push(this.containers.titleLeft),
            null != this.config.listUrl) {
                var f = "";
                this.config.showSubtitle || (f = this.staticData.widgetTitlePaddingClassName),
                this.containers.allOpp = _gg.utilities.domGenerator({
                    nodeType: "a",
                    attributes: {
                        href: this.config.listUrl,
                        title: this.config.seeAllText
                    },
                    htmlContent: this.config.seeAllText
                }),
                this.containers.titleRight = _gg.utilities.domGenerator({
                    nodeType: "div",
                    classNames: [this.staticData.widgetTitleRightClassName, f],
                    htmlContent: this.containers.allOpp
                }),
                e.push(this.containers.titleRight)
            }
            this.containers.productHeader = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [this.staticData.widgetTitleClassName],
                htmlContent: e
            }),
            this.container.append(this.containers.productHeader)
        }
    } catch (a) {
        console.log("Please check title list generator: " + a)
    }
}
,
GG.Static.dailyDealStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.defaultTitle = "Günün Fırsatı",
            a.onlineShopping = "Online Alışveriş",
            a.tagTitle = a.defaultTitle + " - " + a.onlineShopping,
            a.seeAllTitle = "Tümünü Gör",
            a.discount = "İNDİRİM",
            a.oppCountTitle = "Fırsat Daha Sizi Bekliyor",
            a.allOpportunities = 'Tüm fırsatlar <span class="totalCount">(%s%)</span>',
            a.defaultSubTitle = "Fırsatlarla dolu alışveriş! Burada <a href='http://www.gittigidiyor.com/super-firsatlar/gunun-firsati/' title='" + a.tagTitle + "'>%s% üründe</a> %70'e varan indirimler var.</p>";
            break;
        case GG.Static.Enums.lang.ENG:
            a.defaultTitle = "Daily Deal",
            a.onlineShopping = "Online Shopping",
            a.tagTitle = a.defaultTitle + " - " + a.onlineShopping,
            a.seeAllTitle = "See All",
            a.discount = "DISCOUNT",
            a.oppCountTitle = "More Opportunity Awaits You",
            a.allOpportunities = 'All opportunities <span class="totalCount">(%s%)</span>',
            a.defaultSubTitle = "Full of shopping opportunities! Here <a href='http://www.gittigidiyor.com/super-firsatlar/gunun-firsati/' title='" + a.tagTitle + "'>%s% products</a> have discounts of up to 70%.</p>"
        }
        return a
    },
    sliderContentClassName: "slider-overflow-m clearfix",
    widgetContentClassName: "gg-d-24 gg-t-24 gg-m-24 padding-none widget-border mobileFullBorder",
    sliderGridClassName: "gg-w-19 gg-d-18 gg-t-24 gg-m-16 padding-none",
    sliderGridClassNameV2: "gg-w-17 gg-d-24 gg-t-24 gg-m-16 padding-none",
    sliderMwGridClassName: " gg-mw-11",
    sliderFullGridClassName: "gg-w-24 gg-d-24 gg-t-24 gg-m-16 padding-none",
    widgetSliderClassName: "widget-slider",
    dailyDealCountClassName: "gg-w-5 gg-d-6 padding-none hidden-t hidden-m",
    dailyDealCountClassNameV2: "gg-w-7 hidden-d padding-none hidden-t hidden-m",
    dailyDealCountIdName: "homepage-gf-count-area",
    fullGridClassName: "gg-d-24",
    dailyDealCountIconClassName: "opportunity gfCount",
    seeMoreClassName: "gg-klasik-homepage-sprite see-more",
    seeMoreTagClassName: "block-link",
    seeMoreCountClassName: "count",
    seeMoreTxtClassName: "more",
    seeMoreLinkClassName: "see-all",
    opportunityListClassName: "opportunity",
    sameDayFreeShippingClassName: "same-day-free-shipping",
    freeShippingClassName: "free-shipping fsBox1",
    discountContainerClassName: "discount-container",
    widgetSliderMobileClassName: "widget-slider-mobile",
    spriteClassName: "gg-klasik-homepage-sprite",
    discountClassicIconClassName: "green-v2",
    discountMoreIconClassName: "green",
    discountDetailClassName: "discount-detail",
    discountPercentageClassName: "percentage",
    discountRateClassName: "rate",
    discountTextClassName: "discount-txt",
    desktopContainerClassName: "gg-d-24 gg-t-24 gg-m-24  padding-none",
    imgContainerClassName: "product-image",
    imgClassName: "img-dimension lazyload-img hoverZoomLink",
    energyClassName: "energy-class",
    descContentClassName: "gg-d-24 gg-t-24 gg-m-24 daily-deal-container-desktop",
    descContainerClassName: "description-container",
    productTitleClassName: "product-title",
    productDescClassName: "product-description",
    productPriceClassName: "product-new-price",
    productOldPriceClassName: "product-old-price",
    mobileContainerClassName: "gg-d-24 gg-t-24 gg-m-24 daily-deal-container-mobile",
    loadingClassName: "ajax-loading",
    contentIdName: "daily-deal",
    titleTagName: "h3",
    allDailyDealsUrl: "http://www.gittigidiyor.com/super-firsatlar/gunun-firsati/",
    lazyLoadUrl: "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/lazy-load.gif",
    ajaxUrl: "http://www.gittigidiyor.com/xhr/daily-deal-info",
    linkTag: "scrf=gunun-firsati",
    sliderConfig: {
        infinite: !0,
        bullets: !1,
        mobileScroll: !0,
        transition: "slide",
        large_desktop: [4, 4],
        desktop: [3, 3],
        tablet: [3, 3],
        mobile: [1, 1]
    }
},
GG.Static.productListStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.defaultTitle = "Son Gezdiklerim",
            a.defaultSubTitle = "Bir daha göz atmak ister misiniz?",
            a.onlineShopping = "Online Alışveriş",
            a.energyEfficiency = "Enerji Sınıfı";
            break;
        case GG.Static.Enums.lang.ENG:
            a.defaultTitle = "Last Viseted",
            a.defaultSubTitle = "Do you want to see again?",
            a.onlineShopping = "Online Shopping",
            a.energyEfficiency = "Energy Efficiency"
        }
        return a
    },
    sliderContentClassName: "slider-overflow-m clearfix",
    widgetContentClassName: "gg-d-24 gg-t-24 gg-m-24 widget-border padding-none mobile-bg-transparent helper-border-right",
    sliderFullGridClassName: "gg-w-24 gg-d-24 gg-t-24 gg-m-16 gg-mw-11 padding-none",
    widgetSliderClassName: "widget-slider",
    widgetSliderIdName: "slider-content",
    widgetUlIdName: "products",
    productListClassName: "product-item",
    sameDayFreeShippingClassName: "same-day-free-shipping",
    freeShippingClassName: "free-shipping fsBox1",
    discountContainerClassName: "discount-container",
    widgetSliderMobileClassName: "widget-slider-mobile clearfix",
    desktopContainerClassName: "gg-d-24 gg-t-24 gg-m-24 padding-none",
    imgContainerClassName: "product-image",
    imgClassName: "img-dimension lazyload-img hoverZoomLink",
    energyClassName: "energy-class",
    descContentClassName: "gg-d-24 gg-t-24 gg-m-24 productInfo",
    descContainerClassName: "description-container",
    productTitleClassName: "product-title",
    productDescClassName: "product-description",
    productPriceClassName: "product-price",
    productOldPriceClassName: "product-old-price",
    loadingClassName: "ajax-loading",
    lazyLoadUrl: "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/lazy-load.gif",
    ajaxUrl: "http://www.gittigidiyor.com/xhr/last-visit-info",
    sliderConfig: {
        infinite: !0,
        bullets: !1,
        mobileScroll: !0,
        transition: "slide",
        large_desktop: [5, 5],
        desktop: [4, 4],
        tablet: [3, 3],
        mobile: [1, 1]
    }
},
GG.Static.brandListStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.defaultTitle = "En Çok Ziyaret Edilen Mağazalar",
            a.defaultSubTitle = "Sizde bakmak istermisiniz?",
            a.seeAllText = "Tümünü Gör";
            break;
        case GG.Static.Enums.lang.ENG:
            a.defaultTitle = "Most viseted brands",
            a.defaultSubTitle = "Do you want to see?",
            a.seeAllText = "See All"
        }
        return a
    },
    sliderContentClassName: "slider-overflow-m clearfix",
    widgetContentClassName: "gg-d-24 gg-t-24 gg-m-24 widget-border padding-none helper-border-right",
    sliderFullGridClassName: "gg-w-24 gg-d-24 gg-t-24 gg-m-16 padding-none",
    widgetSliderClassName: "widget-slider",
    widgetSliderIdName: "slider-content",
    loadingClassName: "ajax-loading",
    widgetUlIdName: "brand-gallery",
    brandContainerClassName: "brand-container",
    brandLogoClassName: "brand-logo-container",
    brandHelperClassName: "helper",
    brandImgClassName: "brand-img",
    lazyLoadUrl: "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/lazy-load.gif",
    ajaxUrl: "http://www.gittigidiyor.com/xhr/all-stores-ajax",
    sliderConfig: {
        infinite: !0,
        bullets: !1,
        mobileScroll: !0,
        transition: "slide",
        large_desktop: [14, 14],
        desktop: [11, 11],
        tablet: [9, 9],
        mobile: [2, 2]
    },
    brandListArray: ["Asics", "Ay-Yıldız", "Chicco", "Damat", "Desa", "Eastpak", "E reyon", "Ebebek", "Gardrops", "Gillette", "İnci", "Joker", "Kiğılı", "Lidyana", "Madame Coco", "Max Factor", "Media Markt", "Mizu", "Parfümeri", "Philips TV", "Pupa", "Puma", "Rayban", "Taç", "Tefal", "Teknosa", "Toni&Guy", "Unilever", "L'oreal Paris"]
},
GG.Static.listTitleStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.seeAllText = "Tümünü Gör";
            break;
        case GG.Static.Enums.lang.ENG:
            a.seeAllText = "See All"
        }
        return a
    },
    titleTagName: "h3",
    widgetTitleClassName: "gg-d-24 gg-t-24 gg-m-24 widget-header padding-none",
    widgetTitleLeftClassName: "left",
    widgetTitleRightClassName: "right gg-homepage-subLink",
    widgetTitlePaddingClassName: "only-title-padding",
    titleClassName: "gg-homepage-Title",
    subTitleClassName: "gg-homepage-subTitle"
},
document.avp_ready = 1;
var _avp = _avp || []
  , AVP = {
    supported: function() {
        var a = navigator.userAgent.toLowerCase();
        return a.match(/chrome\/(1|2|3|4)\./) ? 0 : a.match(/opera(\s|\/)(4|5|6|7)\./) ? 0 : -1 != a.indexOf("(khtml, like gecko) safari/") ? 0 : window.XMLHttpRequest || -1 != a.indexOf("msie 6") ? 1 : 0
    }(),
    single: function(a, b) {
        var c = this.base(b)
          , d = this.opts(b);
        if (b.iframe) {
            var e = document.getElementById(b.tagid);
            e.innerHTML = '<iframe src="' + c + "/servlet/view/" + b.type + "/javascript/html/" + a + d + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'
        } else if ("pagepeel" == b.type || "wallpaper" == b.type || "window" == b.type) {
            var f = document.createElement("script");
            f.type = "text/javascript",
            f.src = c + "/servlet/view/" + b.type + "/javascript/ajax/" + a + d;
            var g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(f, g)
        } else if (this.supported)
            this.loadAsync(b.type, b.tagid, c + "/servlet/view/" + b.type + "/javascript/ajax/html/" + a + d);
        else if ("banner" == b.type) {
            var e = document.getElementById(b.tagid);
            e.innerHTML = '<a href="' + c + "/servlet/click/" + a + "&lookup=true" + d + '" rel="nofollow" target="_blank"><img src="' + c + "/servlet/view/" + b.type + "/javascript/image/" + a + d + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" border="0" alt="Click Here!"></a>'
        }
    },
    multi: function(a) {
        if (this.supported) {
            var b = this.base(a)
              , c = this.opts(a);
            this.loadAsync(a.type, a.tagid, b + "/servlet/view/" + a.type + "/unique/javascript/ajax/html/" + a.renderer + "?zid=" + a.zid + "&total=" + a.total + ("grid" != a.renderer ? "&layout=" + a.layout : "&columns=" + a.columns) + "&padding=" + parseInt(a.padding || 0) + "&margin=" + parseInt(a.margin || 0) + c)
        }
    },
    loadAsync: function(a, b, c) {
        "banner" == a && this.loadWithIFRAME(b, c),
        "dynamic" == a && this.loadWithXHR(b, c, !0),
        "text" == a && this.loadWithXHR(b, c, !1)
    },
    loadWithIFRAME: function(a, b) {
        var c = document.getElementById(a)
          , d = document.createElement("iframe");
        d.setAttribute("id", a + "_iframe"),
        d.setAttribute("frameborder", "0"),
        d.setAttribute("marginwidth", "0"),
        d.setAttribute("maginheight", "0"),
        d.setAttribute("allowtransparency", "true"),
        d.setAttribute("hspace", "0"),
        d.setAttribute("vspace", "0"),
        d.setAttribute("scrolling", "no"),
        d.setAttribute("style", "margin:0; padding:0; width:0; height:0; border:0; overflow:hidden"),
        d.setAttribute("src", b),
        this.listen(d, "load", function() {
            AVP.resizeIFRAME(a)
        }),
        c.appendChild(d)
    },
    resizeIFRAME: function(a) {
        var b = document.getElementById(a)
          , c = document.getElementById(a + "_iframe")
          , d = navigator.userAgent.toLowerCase();
        if (b && c) {
            var e = c.contentWindow ? c.contentWindow.document : c.contentDocument || c.document;
            if (e.body.style.border = 0,
            e.body.style.margin = 0,
            e.body.style.padding = 0,
            d.match(/msie\s(6|7|8)/) && -1 == d.indexOf("opera") || !e.body.scrollWidth) {
                e.bgColor = document.bgColor;
                for (var f = e.getElementsByTagName("*"), g = ",APPLET,B,BLOCKQUOTE,CODE,DIV,EM,EMBED,FORM,H1,H2,H3,H4,H5,H6,HR,I,IFRAME,IMG,MAP,OBJECT,OL,P,PRE,SPAN,TABLE,U,UL,", h = 0, i = 0, j = 0; j < f.length; j++) {
                    var k = f[j];
                    -1 != g.indexOf("," + k.nodeName + ",") && (k.offsetWidth == k.clientWidth && k.offsetWidth > i && (i = k.offsetWidth),
                    (k.offsetHeight == k.clientHeight || k.scrollHeight && k.offsetHeight == k.scrollHeight) && k.offsetHeight > h && (h = k.offsetHeight))
                }
                c.style.width = i,
                c.style.height = h
            } else {
                for (var f = e.getElementsByTagName("IMG"), l = 0; l < f.length; l++)
                    f[l].style.display = "block";
                e.body.style.backgroundColor = "transparent",
                c.style.width = e.body.scrollWidth + "px",
                c.style.height = e.body.scrollHeight + "px"
            }
        }
    },
    loadWithXHR: function(a, b, c) {
        var d = !1
          , e = !1
          , f = "";
        $GG.ajax({
            type: "GET",
            url: b,
            beforeSend: function() {
                d = !0
            },
            success: function(a) {
                f = a,
                e = !0
            },
            complete: function(b, d) {
                0 == e ? homePageScriptController.functions.adBlockController() : AVP.inject(a, f, !1, c)
            },
            error: function() {}
        })
    },
    inject: function(tagid, code, append, evaluate) {
        var code = code.replace(/http:/g, "").replace(/href="\/\//g, 'href="http://').replace(/href='\/\//g, "href='http://")
          , div = document.getElementById(tagid);
        if (append) {
            var innerDiv = document.createElement("div");
            innerDiv.innerHTML = code,
            div.appendChild(innerDiv)
        } else
            div.innerHTML = code;
        var agent = navigator.userAgent.toLowerCase();
        if (evaluate && (!append || !agent.match(/firefox\/(1|2|3)\./)))
            for (var startTag = new RegExp("(<script[^>]+javascript[^>]+>s*(\x3c!--)?)","i"), endTag = new RegExp("((--\x3e)?s*<\/script>)","i"), st, et, block; (st = startTag.exec(code)) && (code = code.substring(code.indexOf(st[0]) + st[0].length),
            et = endTag.exec(code)); ) {
                block = code.substr(0, code.indexOf(et[0])),
                code = code.substring(block.length + et[0].length);
                try {
                    eval(block)
                } catch (a) {}
            }
        homePageScriptController.functions.rightAndLeftEarControl(),
        homePageScriptController.functions.rightAndLeftEarControlOver()
    },
    isolate: function(a) {
        var b = document.createElement("iframe");
        b.setAttribute("style", "display:none; visibility:hidden; position:absolute; left:-1000px"),
        document.body.appendChild(b);
        var c = b.contentWindow ? b.contentWindow.document : b.contentDocument || b.document;
        c.open(),
        c.write(a),
        c.close()
    },
    escape: function(a) {
        return !a.indexOf || -1 == a.indexOf("+") && -1 == a.indexOf("%") ? encodeURIComponent ? encodeURIComponent(a) : escape(a) : a
    },
    base: function(a) {
        return window.location.protocol + "http://" + (a.domain ? a.domain : document.domain) + (a.alias ? "/" != a.alias ? a.alias : "" : "/advertpro")
    },
    opts: function(a) {
        var b = "";
        a.pid && (b += "&pid=" + a.pid),
        a.uuid && (b += "&uuid=" + a.uuid),
        a.tagid && (b += "&tagid=" + a.tagid),
        a.contextual && (b += "&contextual=" + a.contextual),
        a.crawler && (b += "&crawler=" + a.crawler,
        a.align && (b += "&align=" + a.align),
        a.closeable && (b += "&closeable=" + a.closeable),
        a.spacing && (b += "&spacing=" + a.spacing),
        a.bgcolor && (b += "&bgcolor=" + this.escape(a.bgcolor)));
        for (var c = 1; c <= 10; c++)
            a["custom" + c] && (b += "&custom" + c + "=" + this.escape(a["custom" + c]));
        if (a.echo) {
            b += "&echo=" + a.echo;
            for (var d = a.echo.split(","), e = 0; e < d.length; e++)
                a[d[e]] && (b += "&" + d[e] + "=" + this.escape(a[d[e]]))
        }
        return a.keywords && (b += "&keywords=" + this.escape(a.keywords)),
        a.language && (b += "&language=" + this.escape(a.language)),
        a.lightbox && (b += "&lightbox=" + a.lightbox,
        a.autoclose && (b += "&autoclose=" + a.autoclose)),
        a.overlay && (b += "&overlay=" + a.overlay,
        a.autoclose && (b += "&autoclose=" + a.autoclose),
        a.spacing && (b += "&spacing=" + a.spacing),
        a.bgcolor && (b += "&bgcolor=" + this.escape(a.bgcolor))),
        a.refresh && (b += "&refresh=" + a.refresh),
        a.refresh_limit && (b += "&refresh_limit=" + a.refresh_limit),
        a.click && (b += "&click=" + a.click),
        a.exit && (b += "&exit=" + a.exit),
        a.include && (b += "&include=" + a.include),
        a.exclude && (b += "&exclude=" + a.exclude),
        a.timeout && (b += "&timeout=" + a.timeout),
        "pagepeel" == a.type && (a.color1 && (b += "&color1=" + this.escape(a.color1)),
        a.color2 && (b += "&color2=" + this.escape(a.color2)),
        a.anchor && (b += "&anchor=" + this.escape(a.anchor))),
        "wallpaper" == a.type && (b += "&resolution=" + screen.width + "x" + screen.height),
        b += "&random=" + Math.floor(89999999 * Math.random() + 1e7),
        b += "&millis=" + (new Date).getTime(),
        a.cturl && (b += "&encode=" + parseInt(a.encode || 0)),
        b += "&referrer=" + this.escape(document.location),
        a.cturl && (b += "&cturl=" + this.escape(a.cturl)),
        b
    },
    listen: function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    },
    polled: 0,
    poll: function(a, b) {
        _avp && _avp.length > 0 ? this.load(a) : b < 20 ? setTimeout(function() {
            AVP.poll(a, b + 1)
        }, 50 * (b + 1)) : this.polled = 1
    },
    loaded: 0,
    load: function(a) {
        if (_avp && _avp.length > 0)
            for (; _avp.length > 0; ) {
                var b = _avp.shift();
                b.uuid = a,
                b.renderer ? this.multi(b) : b.zid ? this.single("zone?zid=" + b.zid, b) : b.cid ? this.single("campaign?cid=" + b.cid, b) : b.mid && this.single("media?mid=" + b.mid, b)
            }
        this.loaded || (this.loaded = 1,
        this.listen(document, "DOMContentLoaded", function() {
            AVP.load(a)
        }),
        this.listen(window, "load", function() {
            AVP.load(a)
        })),
        this.polled || setTimeout(function() {
            AVP.poll(a, 1)
        }, 50)
    }
};
!function() {
    AVP.uuid = "",
    AVP.load(AVP.uuid)
}();
var homePageScriptController = {
    init: function() {
        if (this.mobileCategoriesObj = {},
        this.ajaxInterestingConfig = {
            type: "GET",
            dataType: "json"
        },
        this.ddConfig = {
            containerId: "drilldown-container",
            allowScroll: !0,
            scrollTolerance: 153,
            resetOnClose: !0
        },
        this.functions.constructor = this,
        this.categoriesAjaxContainer = "",
        this.lastSearchesParameter = "",
        this.advControllerConfig = {
            configKey: "homePage",
            addCommon: !0
        },
        this.whichAppStore = "",
        this.ajaxInteresting = !0,
        this.ajaxInterestingScrollLimit = "",
        this.imgDimensionConfig = {
            targetContainerSelector: ".gray-content",
            targetImgSelector: ".img-dimension"
        },
        this.advertParamsObject = [{
            id: "homepage-banner-advert-left-container",
            zid: 19
        }, {
            id: "homepage-banner-advert-right-container",
            zid: 13
        }],
        this.localStorageCaddeNotification = "cna",
        this._homepage_slider_params = {
            BannerArea: {
                large_desktop: [1, 1],
                desktop: [1, 1],
                tablet: [1, 1],
                mobile: [1, 1]
            },
            gf: {
                large_desktop: [4, 4],
                desktop: [3, 3],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            lastVisited: {
                large_desktop: [5, 5],
                desktop: [4, 4],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            mostSold: {
                large_desktop: [5, 5],
                desktop: [4, 4],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            atolye: {
                large_desktop: [4, 4],
                desktop: [3, 3],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            supermarket: {
                large_desktop: [5, 5],
                desktop: [4, 4],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            cadde: {
                large_desktop: [3, 3],
                desktop: [3, 3],
                tablet: [2, 2],
                mobile: [1, 1]
            },
            populerCategories: {
                large_desktop: [2, 2],
                desktop: [2, 2],
                tablet: [2, 2],
                mobile: [1, 1]
            },
            recommendationProducts: {
                large_desktop: [3, 3],
                desktop: [3, 3],
                tablet: [2, 2],
                mobile: [1, 1]
            }
        },
        this.functions.homepagePercent(),
        this.bannerSlider = "",
        this.gfSlider = "",
        this.lastVisitedSlider = "",
        this.supermarketSlider = "",
        this.atolyeSlider = "",
        this.caddeSlider = "",
        this.mostSoldSlider = "",
        this.popularCampaignSlider = "",
        this.recommendationProductSlider = "",
        this._feed_service = !1,
        this.imgDimensionController = "",
        this.recommendationServicesDefaultHTML = "",
        this.recommendationSliderActive = !1,
        0 == $GG("#homepage-top-banner-1 img").length ? this.functions.adBlockController() : this.functions.startAsyncSliders(),
        this.doms = {},
        this.functions.showCaddeNotification(),
        1 == $GG("#announcement-container").length) {
            var a = this;
            $GG(window).resize(function() {
                a.functions.announcementManuelSlider()
            }),
            this.functions.announcementManuelSlider()
        }
        _gg.utilities.androidSmartBannerController()
    },
    windowOnload: function() {
        _gg.static.globalParameters.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile && this.functions.addAdvertContents(this.advertParamsObject),
        this.advController = new _gg.controller.advController(this.advControllerConfig),
        this.advController.push(),
        $GG(".mobile-impression-image").length > 0 && $GG(".mobile-impression-image").find("img").attr("src", $GG(".mobile-impression-image").find("img").attr("impression-rev"))
    },
    onload: function() {
        if (this.doms = {
            lastVisitContainer: $GG("#last-visit-container"),
            brandListContainer: $GG("#brand-list-container")
        },
        _gg.browserType == _gg.static.Enums.browserTypes.UNSUPPORTED_BROWSER) {
            $GG("body").append('<div id="ie8Upadte" class="hidden"><a href="https://windows.microsoft.com/tr-tr/internet-explorer/download-ie"> <img src="http://st2.gittigidiyor.net/fred/framework/assets/img/core/ie8Update/explorer8to11.gif" alt=""/> </a></div>'),
            $GG("#ie8Upadte").modal({
                minWidth: "450",
                close: !0
            });
            try {
                $GG("#ie8Upadte").trigger("resize")
            } catch (a) {
                return !1
            }
        }
        this.tryOnce = !1,
        this.bindActions(),
        this.imgDimensionController = new _gg.controller.ImgDimensionController(this.imgDimensionConfig),
        this.imgDimensionController.init(),
        $GG(".free-shipping").addClass("fsBox" + $GG("#free-shipping-type").val()),
        $GG("#CaddeStores li").each(function() {
            $GG(this).css("background-image", "url(" + $GG(this).attr("data-src") + ")"),
            $GG(this).addClass("cadde-image")
        })
    },
    bindActions: function() {
        var a = this;
        a.functions.footerPopulerPagesControl(),
        $GG(".ggCadde, #CaddeStores").bind(_gg.controller.events.Actions.OVER, function() {
            $GG(".ggCadde").addClass("active"),
            $GG("#CaddeStores").removeClass("hidden"),
            localStorage.setItem(a.localStorageCaddeNotification, "true"),
            $GG("#gg-cadde-header-notification").fadeOut(300)
        }),
        $GG(".ggCadde, #CaddeStores").bind(_gg.controller.events.Actions.LEAVE, function() {
            $GG(".ggCadde").removeClass("active"),
            $GG("#CaddeStores").addClass("hidden")
        }),
        $GG("#CaddeStores li").bind(_gg.controller.events.Actions.OVER, function() {
            $GG(this).addClass("cadde-image-hover")
        }),
        $GG("#CaddeStores li").bind(_gg.controller.events.Actions.LEAVE, function() {
            $GG(this).removeClass("cadde-image-hover")
        }),
        $GG("#gg-cadde-text").bind(_gg.controller.events.Actions.OVER, function() {
            $GG("span#CaddeIcon").addClass("cadde-hover-gray"),
            $GG("span#CaddeIcon").removeClass("cadde-icon-white"),
            $GG("span.cadde-right-icon").addClass("cadde-rigth-icon-gray")
        }),
        $GG("#gg-cadde-text").bind(_gg.controller.events.Actions.LEAVE, function() {
            $GG("span#CaddeIcon").addClass("cadde-icon-white"),
            $GG("span#CaddeIcon").removeClass("cadde-hover-gray"),
            $GG("span.cadde-right-icon").removeClass("cadde-rigth-icon-gray")
        }),
        $GG("#delete-searches").live(_gg.controller.events.Actions.CLICK, function() {
            localStorage.removeItem(a.lastSearchesParameter),
            a.functions.emptyLastSearchesAction(!0)
        }),
        $GG(".mobile-ready").live(_gg.controller.events.Actions.SCROLL_HORIZONTAL, function() {
            $GG(this).find(".lazyload-img").each(function(a, b) {
                $GG(b).attr("src", $GG(b).attr("data-original")).removeClass("lazyload-img")
            })
        }),
        $GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
            a.functions.responsiveBreakLastSearchAction(),
            a.functions.bannerMappingChanger(),
            setTimeout(function() {
                for (var a = 0; a < $GG("#BannerArea .gg-slider-thumbnail").length; a++)
                    $GG("#BannerArea .gg-slider-thumbnail").eq(a).attr("id", "homepage-topbanner-slider-button-" + (a + 1))
            }, 500),
            a.functions.recommendationSwitchContent()
        }),
        screen.width > 480 && $GG("#ggResponsiveCntrl").addClass("dpnone"),
        $GG("#ggResponsiveCntrl").bind(_gg.controller.events.Actions.CLICK, function() {
            var b = 1
              , c = "";
            "" != a.functions.getParameterByName("d") ? (b = 1 == a.functions.getParameterByName("d") ? 0 : 1,
            window.location.href = a.functions.paramReplace("d", window.location.href, b)) : (c = window.location.search.indexOf("?") < 0 ? "?" : "&",
            window.location.href = window.location.origin + window.location.pathname + window.location.search + c + "d=" + b)
        }),
        $GG("#IntProShowMoreBtn").click(function() {}),
        $GG(window).resize(function() {
            _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && $GG(".slider-bullet-container").css("left", ($GG(".container").width() - $GG(".slider-bullet-container").width()) / 2)
        }),
        a.functions.desktopCategoriesHover(),
        a.functions.mobileCategoriesClick(),
        a.functions.startSliders(),
        a.functions.getWhichAppStore(),
        a.functions.getHomePageAjaxData()
    },
    functions: {
        announcementManuelSlider: function() {
            for (var a = 0, b = 0; b < $GG("#announcement-gallery li").length; b++)
                a += $GG("#announcement-gallery li").eq(b).width();
            $GG("#announcement-gallery").css("width", a + "px");
            var c = a / $GG("#announcement-gallery li").length + 20
              , d = 0
              , e = 0
              , f = 1;
            $GG("#announcement-container").width() > a ? (d = 0,
            $GG("#announcement-container").find(".gg-slider-button-next, .gg-slider-button-prev").addClass("hidden"),
            $GG("#announcement-container").find("ul").css("padding-left", ($GG("#announcement-container").width() - a) / 2 - 25),
            $GG("#announcement-container .widget-slider").addClass("noSlider"),
            $GG("#announcement-gallery").css("transform", "translate3d(" + (d - 1 * f) + "px, 0px, 0px)")) : ($GG("#announcement-container").find(".gg-slider-button-next, .gg-slider-button-prev").removeClass("hidden"),
            $GG("#announcement-container").find("ul").css("padding-left", 0),
            $GG("#announcement-container .widget-slider").removeClass("noSlider")),
            _gg.static.globalParameters.responsiveState != GG.Static.Enums.responsiveParameterNames.desktop && _gg.static.globalParameters.responsiveState != GG.Static.Enums.responsiveParameterNames.large_desktop || $GG("#announcement-container").find(".gg-slider-button-next, .gg-slider-button-prev").live(_gg.controller.events.Actions.CLICK, function() {
                $GG(this).attr("class").indexOf("next") > -1 ? Math.abs(d) < a - $GG("#announcement-container .widget-slider").width() && (e++,
                f = 1,
                $GG(".lazyload-img").lazyload({})) : $GG(this).attr("class").indexOf("prev") > -1 && Math.abs(d) > 50 && (e--,
                f = -1),
                d = c * e * -1,
                $GG("#announcement-gallery").css("transition-duration", "0.5s"),
                $GG("#announcement-gallery").css("transform", "translate3d(" + (d - 1 * f) + "px, 0px, 0px)")
            })
        },
        showCaddeNotification: function() {
            var a = this.constructor;
            if ("undefined" != typeof Storage) {
                0 == (localStorage.getItem(a.localStorageCaddeNotification) || !1) && $GG("#gg-cadde-header-notification").removeClass("hidden")
            }
        },
        footerPopulerPagesControl: function() {
            var a, b, c = $.browser.webkit ? "-webkit-transition" : $.browser.mozilla ? "-moz-transition" : $.browser.msie ? "-ms-transition" : $.browser.opera ? "-o-transition" : "transition";
            $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul li").length > 10 && ($GG(".footerLinks h3:contains('Popüler Sayfalar') ~ a").removeClass("hidden"),
            $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul").addClass("overFlowHidden"),
            $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul").addClass("populerPages"),
            $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ a").live(_gg.controller.events.Actions.CLICK, function() {
                $GG(this).text().indexOf("Gizle") < 0 ? (a = $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul.populerPages li").length * ($GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul.populerPages li").height() + 5),
                b = {
                    height: a + "px"
                },
                b[c] = "height 0.5s ease-in-out",
                $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul.populerPages").css(b),
                $GG(this).addClass("clicked"),
                $GG(this).text("Gizle")) : (a = 10 * ($GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul.populerPages li").height() + 5),
                b = {
                    height: a + "px"
                },
                b[c] = "height 0.1s ease-in-out",
                $GG(".footerLinks h3:contains('Popüler Sayfalar') ~ ul.populerPages").css(b),
                $GG(this).removeClass("clicked"),
                $GG(this).text("Tümünü Gör")),
                window.scrollTo(0, document.body.scrollHeight)
            }))
        },
        homepagePercent: function() {
            $(".tDiscount-black .count-label span").each(function() {
                $(this).prev().hasClass("cadde-percent") && $(this).text() > 49 ? $(this).parents(".tDiscount-black").addClass("percent") : $(this).parents(".tDiscount-black").removeClass("percent")
            })
        },
        responsiveBreakLastSearchAction: function() {
            _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? $GG("#lastVisited .slider-overflow-m").after($GG("#last-searches-container")) : $GG("#last-visited-slider-content").after($GG("#last-searches-container"))
        },
        emptyLastSearchesAction: function(a) {
            var b = a || !1;
            this.constructor._homepage_slider_params.lastVisited = {
                large_desktop: [5, 5],
                desktop: [4, 4],
                tablet: [3, 3],
                mobile: [1, 1]
            },
            $GG("#last-searches-container").remove(),
            $GG("#last-visited-slider-content").removeClass("gg-w-19 gg-d-18 gg-t-16").addClass("gg-w-24 gg-d-24 gg-t-24"),
            b && (homePageScriptController.functions.lastVisitedSlider.config.itemCount.large_desktop = 5,
            homePageScriptController.functions.lastVisitedSlider.config.itemCount.desktop = 4,
            homePageScriptController.functions.lastVisitedSlider.config.itemCount.tablet = 3,
            homePageScriptController.functions.lastVisitedSlider.config.itemCount.mobile = 1,
            homePageScriptController.functions.lastVisitedSlider.config.stepCount.large_desktop = 5,
            homePageScriptController.functions.lastVisitedSlider.config.stepCount.desktop = 4,
            homePageScriptController.functions.lastVisitedSlider.config.stepCount.tablet = 3,
            homePageScriptController.functions.lastVisitedSlider.config.stepCount.mobile = 1),
            $GG(document).trigger(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE)
        },
        lastSearchesAction: function(a) {
            this.responsiveBreakLastSearchAction();
            for (var b = a.length - 1; b >= 0; b--) {
                var c = '<div class="recent-searches-node"><span>' + a[b].key + '</span><span class="recent-category-content">' + a[b].cat + '</span><a href="' + a[b].href + '"></a></div>';
                $("#recent-searches-container").append(c)
            }
        },
        getLastSearches: function() {
            if ("undefined" == typeof Storage)
                return void this.emptyLastSearchesAction();
            try {
                var a = TRACKING_SUID || ""
                  , b = "searchOfflineHistory";
                "" != a && (b = a + "-history"),
                this.constructor.lastSearchesParameter = b;
                var c = JSON.parse(localStorage.getItem(b)) || [];
                c.length > 0 ? this.lastSearchesAction(c) : this.emptyLastSearchesAction()
            } catch (a) {
                console.info(a)
            }
        },
        bannerMappingChanger: function() {
            $GG("#BannerArea").find("map area").each(function(a, b) {
                var c = $GG(b);
                if (_gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.large_desktop) {
                    var d = c.attr("data-coord-wide");
                    c.attr("coords", d)
                } else if (_gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile) {
                    var e = c.attr("data-coord-mobile");
                    c.attr("coords", e)
                } else {
                    var f = c.attr("data-coord-default");
                    c.attr("coords", f)
                }
            })
        },
        bannerMappingController: function() {
            $GG("#BannerArea").find("map area").each(function(a, b) {
                var c = $GG(b)
                  , d = c.attr("coords");
                c.attr("data-coord-default", d);
                var e = d.split(",")
                  , f = ""
                  , g = ""
                  , h = $GG("#BannerArea").width() / 758;
                for (var i in e)
                    f += 1.22 * Number(e[i]),
                    f += ",",
                    g += Number(e[i]) * h,
                    g += ",";
                f = f.replace(/,\s*$/, ""),
                g = g.replace(/,\s*$/, ""),
                c.attr("data-coord-wide", f),
                c.attr("data-coord-mobile", g)
            }),
            this.bannerMappingChanger()
        },
        recomServicesEmptyOrNullController: function() {
            $GG("#recommendation-preloader-container").addClass("non-visible")
        },
        recomServicesController: function(a) {
            function b(a) {
                var b = 4;
                return 4 == a && (b = 3),
                b
            }
            var c = this.constructor
              , d = 3
              , e = 0
              , f = {
                3: "gg-d-8 gg-w-8 gg-t-8 gg-m-12 recom-wide-content recom-content",
                4: "gg-d-6 gg-w-6 gg-t-8 gg-m-12 recom-standart-content recom-content"
            }
              , g = a.length;
            g >= 21 ? g = 21 : g >= 17 ? g = 17 : g >= 14 ? g = 14 : g >= 10 ? g = 10 : g >= 7 ? g = 7 : g >= 3 && (g = 3);
            for (var h = '<ul id="recommendation-content" class="padding-none gg-w-24 gg-d-24 gg-m-24 gg-t-24">', i = 0; i < g; i++) {
                var j = "";
                a[i].freeCargo && (j = '<div class="free-shipping-container"></div>');
                var k = "";
                a[i].recomLink && (k = 'class="recommendation-navigation-controller" data-recom="' + a[i].recomLink + '"');
                var l = "";
                "gr" == a[i].recType && (l = "recommendation-gravity-target");
                var m = "";
                a[i].id && (m = a[i].id),
                h += '<li class="' + f[d] + '"><div class="recom-cover-container clearfix"><a href="' + a[i].link + '" ' + k + ' class="' + l + '" data-id="' + m + '"><div class="recommendation-image-cover"><img class="lazyload-img" data-original="' + a[i].imageUrl + '" src="http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/lazy-load.gif"/></div><span class="recommendation-title">' + a[i].title + '</span><span class="recommendation-price">' + _gg.utilities.numberWithCommas(Number(a[i].price), !0) + "</span>" + j + "</a></div></li>",
                e++,
                e % d == 0 && (e = 0,
                d = b(d))
            }
            h += "</ul>",
            c.recommendationServicesDefaultHTML = h,
            $GG("#recommendation-action-container").append(c.recommendationServicesDefaultHTML),
            $GG("#recommendation-preloader-container").addClass("hidden"),
            $GG("#recommendationProducts").removeClass("hidden"),
            $GG(".lazyload-img").lazyload({}),
            this.recommendationSwitchContent()
        },
        recommendationSwitchContent: function() {
            var a = this.constructor;
            if (_gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile) {
                var b = '<div class="slider-overflow-m clearfix"><div class="gg-d-24 gg-t-24 gg-m-24 widget-border padding-none mobileFullBorder"><div class="gg-w-24 gg-d-24 gg-t-24 gg-m-16 gg-mw-11 padding-none"><div class="widget-slider">' + a.recommendationServicesDefaultHTML + "</div></div></div></div>";
                $GG("#recommendation-action-container").html("").append(b),
                this.recommendationProductSlider = new _gg.components.slider(this.sliderDefaultValues("recommendationProducts", "slide")),
                this.recommendationProductSlider.init(),
                this.sliderItemBinds(this.recommendationProductSlider, "recommendationProducts"),
                a.recommendationSliderActive = !0
            } else
                a.recommendationSliderActive && ($GG("#recommendation-action-container").html("").append(a.recommendationServicesDefaultHTML),
                this.recommendationProductSlider = "",
                a.recommendationSliderActive = !1);
            $GG(".lazyload-img").lazyload({})
        },
        addAdvertContents: function(a) {
            var b = this.constructor
              , c = a;
            b.advertsArray = [];
            for (var d = 0; d < c.length; d++) {
                var e = {
                    tagid: c[d].id,
                    alias: "/",
                    type: "dynamic",
                    zid: c[d].zid,
                    pid: 0,
                    domain: "mhd.gittigidiyor.com"
                };
                b.advertsArray.push(c[d].id),
                document.cookie && -1 != document.cookie.indexOf("AVPDCAP=") || _avp.push(e)
            }
        },
        adBlockController: function() {
            function a() {
                var a = $GG(".adblocker-container").find("img");
                a.attr("src", a.attr("data-original")),
                $GG(".adblocker-container").removeClass("hidden"),
                $GG("#BannerArea").addClass("hidden")
            }
            a()
        },
        rightAndLeftEarControlOver: function() {
            void 0 != $GG(".leftEarBanner.pageSkin").attr("data-hover") && ($GG(".leftEarBanner.pageSkin").mouseover(function() {
                $GG(".leftEarBanner.pageSkin").css("background", "url('http://mhd.gittigidiyor.com/servlet/files/" + $GG(this).attr("data-hover") + "')"),
                $GG(".leftEarBanner.pageSkin")[0].style.setProperty("right", $GG("body").width() - $GG("#menu-banner-cover").offset().left - 234 + "px", "")
            }),
            $GG(".leftEarBanner.pageSkin").mouseleave(function() {
                $GG(".leftEarBanner.pageSkin").css("background", "url('http://mhd.gittigidiyor.com/servlet/files/" + $GG(this).attr("data-img") + "')"),
                $GG(".leftEarBanner.pageSkin")[0].style.setProperty("right", $GG("body").width() - $GG("#menu-banner-cover").offset().left + 10 + "px", "")
            })),
            void 0 != $GG(".rightEarBanner.pageSkin").attr("data-hover") && ($GG(".rightEarBanner.pageSkin").mouseover(function() {
                $GG(".rightEarBanner.pageSkin").css("background", "url('http://mhd.gittigidiyor.com/servlet/files/" + $GG(this).attr("data-hover") + "')"),
                $GG(".rightEarBanner.pageSkin")[0].style.setProperty("left", $GG("#menu-banner-cover").width() + $GG("#menu-banner-cover").offset().left - 232 + "px", "important")
            }),
            $GG(".rightEarBanner.pageSkin").mouseleave(function() {
                $GG(".rightEarBanner.pageSkin").css("background", "url('http://mhd.gittigidiyor.com/servlet/files/" + $GG(this).attr("data-img") + "')"),
                $GG(".rightEarBanner.pageSkin")[0].style.setProperty("left", $GG("#menu-banner-cover").width() + $GG("#menu-banner-cover").offset().left + 12 + "px", "important")
            }))
        },
        rightAndLeftEarControl: function() {
            if (0 != $GG(".rightEarBanner.pageSkin").length) {
                var a = $GG(".rightEarBanner.pageSkin");
                a[0].style.setProperty("left", $GG("#menu-banner-cover").width() + $GG("#menu-banner-cover").offset().left + 12 + "px", "important"),
                a[0].style.setProperty("top", $GG("#menu-banner-cover").offset().top + 10 + "px", "important"),
                a[0].style.setProperty("display", "block", ""),
                $GG(window).scroll(function() {
                    if (_gg.static.globalParameters.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile) {
                        var b = document.documentElement.scrollTop || document.body.scrollTop;
                        $GG("#homepage-banner-container-cover").offset().top > b ? a[0].style.setProperty("top", $GG("#menu-banner-cover").offset().top - document.body.scrollTop + 10 + "px", "important") : a[0].style.setProperty("top", "10px", "important")
                    }
                }),
                $GG(window).resize(function() {
                    a[0].style.setProperty("left", $GG("#menu-banner-cover").width() + $GG("#menu-banner-cover").offset().left + 12 + "px", "important"),
                    $GG(window).trigger("scroll")
                }),
                $GG(window).trigger("scroll")
            }
            if (0 != $GG(".leftEarBanner.pageSkin").length) {
                var b = $GG(".leftEarBanner.pageSkin");
                b[0].style.setProperty("right", $GG("body").width() - $GG("#menu-banner-cover").offset().left + 10 + "px", ""),
                b[0].style.setProperty("top", $GG("#menu-banner-cover").offset().top + 10 + "px", ""),
                b[0].style.setProperty("display", "block", ""),
                $GG(window).scroll(function() {
                    var a = document.documentElement.scrollTop || document.body.scrollTop;
                    $GG("#homepage-banner-container-cover").offset().top > a ? b[0].style.setProperty("top", $GG("#menu-banner-cover").offset().top - document.body.scrollTop + 10 + "px", "important") : b[0].style.setProperty("top", "10px", "important")
                }),
                $GG(window).resize(function() {
                    b[0].style.setProperty("right", $GG("body").width() - $GG("#menu-banner-cover").offset().left + 10 + "px", "important"),
                    $GG(window).trigger("scroll")
                }),
                $GG(window).trigger("scroll")
            }
        },
        appendCategories: function() {
            var a = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: ["drilldown-wrapper"],
                htmlContent: this.constructor.categoriesAjaxContainer
            });
            $GG("#drilldown-container").append(a),
            $GG(".drilldown-wrapper").find("ul:eq(0)").addClass("drilldown-menu"),
            this.constructor.ddController = new _gg.components.drilldown(this.constructor.ddConfig),
            this.constructor.ddController.init(),
            $GG(this.constructor.ddController).bind(this.constructor.ddController.ACTION_STEP, function() {
                $GG(".category-mobile-button").addClass("hidden")
            }),
            $GG(this.constructor.ddController).bind(this.constructor.ddController.HOME_STEP, function() {
                $GG(".category-mobile-button").removeClass("hidden")
            }),
            $GG(this.constructor.ddController).bind(this.constructor.ddController.CLOSE_ACTION, function() {
                $GG(".category-mobile-button").removeClass("hidden")
            })
        },
        renderDCPItems: function(a, b) {
            if (0 != a.length) {
                for (var c = a, d = "<ul>", e = 0; e < c.length; e++)
                    d += "<li>",
                    0 == c[e].childCategories.length ? d += '<a href="/' + c[e].permaLink + '">' + c[e].categoryName + "</a>" : d += "<span>" + c[e].categoryName + "</span>",
                    d += this.renderDCPItems(c[e].childCategories, c[e]) || "",
                    d += "</li>";
                return b && (d += "<li>",
                d += '<a href="/' + b.permaLink + '">Tüm Kategorileri Göster</a>',
                d += "</li>"),
                d += "</ul>"
            }
        },
        interesting_feed_price: function(a) {
            var b = "";
            try {
                b = a.toString()
            } catch (a) {
                return !1
            }
            return 1 == b.split(".").length ? b = b.split(".")[0] + ",00" : 2 == b.split(".").length && (b = 1 == b.split(".")[1].length ? b.split(".")[0] + "," + b.split(".")[1] + "0" : b.split(".")[0] + "," + b.split(".")[1]),
            b + " TL"
        },
        desktopCategoriesHover: function() {
            var a;
            $GG('[rel="popup"]').bind(_gg.controller.events.Actions.OVER, function(b) {
                try {
                    if (1 == $GG(this).hasClass("menuon") && _gg.pageType != GG.Static.Enums.pageTypes.BROWSER)
                        $GG(this).trigger(_gg.controller.events.Actions.LEAVE);
                    else {
                        clearTimeout(a);
                        var c = "#" + $GG(this).attr("id") + "-content"
                          , d = $GG(this);
                        a = setTimeout(function() {
                            $GG('[rel="popup"].menuon').trigger(_gg.controller.events.Actions.LEAVE),
                            $GG(c).bind(_gg.controller.events.Actions.OVER, function(b) {
                                clearTimeout(a)
                            }),
                            $GG(c).addClass("dpblockImp"),
                            $GG(c).parent().addClass("dpblockImp"),
                            d.addClass("menuon no-arrow").siblings().removeClass("menuon"),
                            $GG("#ProductsCon").css("z-index", "20"),
                            $GG(c).find(".lazy-categories").lazyload()
                        }, 200)
                    }
                } catch (b) {}
            }),
            $GG("#Menu-Banner").bind(_gg.controller.events.Actions.LEAVE, function() {
                clearTimeout(a),
                $GG("#CategoryMenu").find("li.no-arrow").removeClass("no-arrow"),
                $GG("#CategoryMenu").find("li.menuon").removeClass("menuon");
                var b = ".category-container";
                $GG(b).parent().removeClass("dpblockImp"),
                $GG(b).removeClass("dpblockImp")
            })
        },
        mobileCategoriesClick: function() {
            function a(a, b) {
                var c = {};
                return c.title = a.text(),
                0 == a.siblings(".content").find("span").length && (c.href = a.find("a").attr("href")),
                c
            }
            for (var b = this, c = 0; c < $GG(".leftCategories div.category-container").length; c++) {
                var d = {
                    id: $GG("#CategoryMenu li[rel=popup]").eq(c).attr("id").substr($GG("#CategoryMenu li[rel=popup]").eq(0).attr("id").lastIndexOf("-") + 1),
                    title: $GG("#CategoryMenu li[rel=popup]").eq(c).find("span").eq(0).text()
                };
                this.constructor.mobileCategoriesObj[d.id] = d,
                this.constructor.mobileCategoriesObj[d.id].allCategories = $GG("#homepage-left-category-menu-" + this.constructor.mobileCategoriesObj[d.id].id + "-content").find(".all-categories a").attr("href");
                var e = $GG("#homepage-left-category-menu-" + this.constructor.mobileCategoriesObj[d.id].id + "-content").find(".content-cover").find("li").find("p:not(.content)");
                if (e.length > 0) {
                    for (var f = [], g = 0; g < e.length; g++) {
                        var h = a(e.eq(g), d.id);
                        if (e.eq(g).siblings(".content").find("span").length > 0) {
                            for (var i = [], j = 0; j < e.eq(g).siblings(".content").find("span").length; j++) {
                                var k = {
                                    title: e.eq(g).siblings(".content").find("span").eq(j).text(),
                                    href: e.eq(g).siblings(".content").find("span").eq(j).find("a").attr("href")
                                };
                                i[j] = k
                            }
                            0 != e.eq(g).siblings("a").length && i.push({
                                title: e.eq(g).siblings("a").text(),
                                href: e.eq(g).siblings("a").attr("href")
                            }),
                            h.secondChild = i
                        }
                        f[g] = h
                    }
                    f.push({
                        title: "Tüm " + d.title + " Kategorileri",
                        href: $GG("#CategoryMenu li[rel=popup]").eq(c).find("a").attr("href")
                    }),
                    this.constructor.mobileCategoriesObj[d.id].firstChild = f
                }
            }
            var l, m, n, o, p = 400, q = ["#mostSold", "#supermarket", "#cadde", "#atolye", "#populerCategories", "#recommendationProducts", "#div-gpt-ad-1453207160065-0", ".wis-bottom", "#daily-deal-ajax-container", "#last-visit-container", "#brand-list-container", "#navigateToApp"], r = $.browser.webkit ? "-webkit-transition" : $.browser.mozilla ? "-moz-transition" : $.browser.msie ? "-ms-transition" : $.browser.opera ? "-o-transition" : "transition";
            $GG(".GGMobileIcons_search").click(function() {
                1 == $GG(".GGMobileIcons_search").hasClass("clicked") ? $GG("#category-mobile-container-clicked").css("top", "102px") : $GG("#category-mobile-container-clicked").css("top", "55px")
            }),
            $GG("#category-mobile-container").live(_gg.controller.events.Actions.CLICK, function() {
                var a = {
                    top: "55px",
                    visibility: "visible"
                };
                a[r] = " 0.6s ease-in-out",
                $GG("#category-mobile-container-clicked").css(a),
                $GG("#category-mobile-container-clicked").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    1 == $GG(".GGMobileIcons_search").hasClass("clicked") && $GG(".GGMobileIcons_search").trigger("click"),
                    1 == $GG("#MastheadBannerController").length ? $GG("#MastheadBannerController").addClass("hidden") : $GG("#topContainer").removeClass("mobile-fixed absolute-fixed"),
                    $GG.each(q, function(a, b) {
                        $GG(b).length > 0 && $GG(b).addClass("hidden")
                    }),
                    $GG("html, body").animate({
                        scrollTop: 0
                    }, 200),
                    n = $GG(".category-mobile-button.opened").width()
                })
            }),
            $GG("#category-mobile-container-clicked li.first:not(.clicked, .all-categories, .no-arrow)").live(_gg.controller.events.Actions.CLICK, function() {
                m = $GG(this).attr("rev");
                var a = ""
                  , c = "";
                o = $GG("#category-mobile-container-clicked li.first[rev=" + m + "]").offset().top,
                1 == $GG(".GGMobileIcons_search").hasClass("clicked") && (o -= 47),
                $GG("#all-categories li.second a").live(_gg.controller.events.Actions.CLICK, function() {
                    window.location.href = $GG(this).attr("href")
                }),
                $GG(this).addClass("clicked"),
                $GG("#category-mobile-content").addClass("heightPercent100"),
                $GG(".category-mobile-button.opened span").eq(0).html($GG(this).text()),
                $GG("#category-mobile-container-clicked li.first.all-categories").removeClass("hidden"),
                $GG.each(b.constructor.mobileCategoriesObj[m].firstChild, function(c, d) {
                    void 0 == b.constructor.mobileCategoriesObj[m].firstChild[c].secondChild ? a += "<li rev='" + c + "'><a href='" + d.href + "'><p>" + d.title + "</p></a></li>" : a += "<li rev='" + c + "'><p>" + d.title + "</p></li>"
                });
                var d = {
                    opacity: 0
                };
                d[r] = " 0.4s ease-in-out";
                var e = {
                    opacity: 1
                };
                e[r] = " 0.4s ease-in-out";
                var f = {
                    top: -1 * (o - 115) + "px"
                };
                f[r] = " 0.4s ease-in-out",
                $GG("#firstChild-categories").append(a),
                $GG("#category-mobile-container-clicked ul#all-categories").css(f),
                $GG("#category-mobile-container-clicked ul#all-categories").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(a) {
                    $GG("#firstChild-categories").css(f)
                }),
                $GG("#category-mobile-container-clicked li.first.clicked").nextAll(":not(.second)").css(d),
                $GG("#category-mobile-container-clicked li.first.clicked").nextAll(":not(.second)").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    $GG("#category-mobile-container-clicked li.first.clicked").nextAll(":not(.second)").addClass("hidden")
                }),
                $GG("#firstChild-categories li").live(_gg.controller.events.Actions.CLICK, function() {
                    if (1 == $GG(this).hasClass("clicked"))
                        return !1;
                    if (void 0 == b.constructor.mobileCategoriesObj[m].firstChild[$GG(this).attr("rev")].secondChild)
                        return window.location.href = $GG(this).find("a").attr("href"),
                        !1;
                    c = "";
                    var a = $GG(this);
                    a.addClass("clicked"),
                    $GG("#second-categories li").remove(),
                    $GG("#second-categories").removeAttr("style"),
                    $GG("#firstChild-categories li p").removeClass("clicked"),
                    $GG(this).find("p").addClass("clicked"),
                    $GG.each(b.constructor.mobileCategoriesObj[m].firstChild[$GG(this).attr("rev")].secondChild, function(a, b) {
                        c += "<li><a href='" + b.href + "'><p>" + b.title + "</p></a></li>"
                    });
                    var f = Number($GG("#all-categories").css("top").substr(0, $GG("#all-categories").css("top").indexOf("px")) - $GG(this).attr("rev") * $GG(this).height());
                    $GG("#second-categories").append(c),
                    $GG("#firstChild-categories").css("top", f + "px").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                        $GG("#second-categories").css("top", a.offset().top + "px").css(e)
                    }),
                    $GG(this).nextAll().css(d),
                    $GG(this).prevAll().css(d),
                    $GG("#category-mobile-container-clicked li.first.clicked h2 span").after('<span class="arrow"></span>'),
                    $GG("html, body").animate({
                        scrollTop: 0
                    }, 200)
                }),
                $GG("#category-mobile-content").removeClass("fixed"),
                $GG("html, body").animate({
                    scrollTop: 0
                }, 200)
            }),
            $GG("#category-mobile-container-clicked li.first.clicked").live(_gg.controller.events.Actions.CLICK, function() {
                $GG("#firstChild-categories").find("li").css("opacity", "1"),
                $GG("#firstChild-categories").find("li").find("p").removeClass("clicked"),
                $GG("#firstChild-categories li").removeClass("clicked"),
                $GG("#firstChild-categories").css("top", -1 * (o - 115) + "px"),
                $GG("#category-mobile-container-clicked li.first.clicked h2 span").remove(".arrow"),
                $GG("#second-categories li").remove(),
                $GG("#second-categories").removeAttr("style"),
                $GG("#category-mobile-container-clicked li[rev=clicked-" + l + "] p.clicked").removeClass("clicked"),
                $GG("#category-mobile-container-clicked li[rev=clicked-" + l + "] p:not(.clicked)").animate({
                    opacity: 1
                }, p, function() {}),
                $GG("#category-mobile-container-clicked li[rev=clicked-" + l + "] p.content.opened").addClass("hidden").removeClass("opened").removeAttr("style"),
                $GG("#category-mobile-container-clicked li[rev=clicked-" + l + "]").animate({
                    top: "0px"
                }, p, function() {
                    $GG("#category-mobile-container-clicked li[rev=" + l + "].clicked h2 span.arrow").remove()
                })
            }),
            $GG("#category-mobile-container-clicked li.first.all-categories").live(_gg.controller.events.Actions.CLICK, function() {
                var a = {
                    top: "0px"
                };
                a[r] = " 0.4s ease-in-out",
                $GG("#category-mobile-container-clicked ul#all-categories").css(a),
                $GG("#category-mobile-content").removeClass("heightPercent100"),
                $GG("#firstChild-categories li").remove(),
                $GG("#firstChild-categories").removeAttr("style"),
                $GG("#second-categories li").remove(),
                $GG("#category-mobile-container-clicked li.first:not(.clicked)").removeClass("hidden"),
                $GG("#category-mobile-container-clicked li.first.all-categories").addClass("hidden");
                var b = {
                    opacity: 1
                };
                b[r] = " 0.4s ease-in-out",
                $GG("#category-mobile-container-clicked li.first.clicked").nextAll(":not(.second)").css(b),
                $GG("#category-mobile-container-clicked li.first.clicked").removeClass("clicked"),
                $GG(".category-mobile-button.opened span").eq(0).html("Tüm Kategoriler"),
                $GG("html, body").animate({
                    scrollTop: 0
                }, 200)
            }),
            $GG("#category-mobile-container-clicked #category-mobile-close-container").live(_gg.controller.events.Actions.CLICK, function() {
                0 == $GG(".GGMobileIcons_search").hasClass("clicked") && $GG(".GGMobileIcons_search").trigger("click"),
                1 == $GG("#MastheadBannerController").length ? $GG("#MastheadBannerController").removeClass("hidden") : $GG("#topContainer").addClass("mobile-fixed absolute-fixed"),
                $GG("#category-mobile-container-clicked li.first.all-categories").trigger("click"),
                $GG("html, body").animate({
                    scrollTop: 0
                }, 200),
                $GG.each(q, function(a, b) {
                    $GG(b).length > 0 && $GG(b).removeClass("hidden")
                });
                var a = {
                    top: "1000px",
                    visibility: "hidden"
                };
                a[r] = " 0.6s ease-in-out",
                $GG("#category-mobile-container-clicked").css(a)
            });
            var s = $GG(window).width();
            $GG(window).resize(function() {
                $GG(window).width() != s && $GG("#category-mobile-container-clicked #category-mobile-close-container").trigger("click")
            })
        },
        sliderItemBinds: function(a, b) {
            var c = $GG("#" + b + " li");
            $GG(a).bind(a.INIT_READY, function() {
                for (var a = this.currentIndis; a < this.currentIndis + 5; a++)
                    c.eq(a).find("img").addClass("lazyload-img")
            }),
            $GG(a).bind(a.NEXT_ITEM_CLICKED, function() {
                for (var a = this.currentIndis; a < this.currentIndis + 5; a++)
                    if (c.eq(a).find("img").length > 1)
                        for (j = 0; j < c.eq(a).find("img").length; j++) {
                            var d = c.eq(a).find("img").eq(j).attr("data-original");
                            $GG("#" + b + " li img[data-original='" + d + "']").attr("src", d)
                        }
                    else {
                        var e = c.eq(a).find("img").attr("data-original");
                        $GG("#" + b + " li img[data-original='" + e + "']").attr("src", e)
                    }
            }),
            $GG(a).bind(a.PREV_ITEM_CLICKED, function() {
                for (var a = this.currentIndis; a < this.currentIndis + 4; a++)
                    if (c.eq(a).find("img").length > 1)
                        for (j = 0; j < c.eq(a).find("img").length; j++) {
                            var d = c.eq(a).find("img").eq(j).attr("data-original");
                            $GG("#" + b + " li img[data-original='" + d + "']").attr("src", d)
                        }
                    else {
                        var e = c.eq(a).find("img").attr("data-original");
                        $GG("#" + b + " li img[data-original='" + e + "']").attr("src", e)
                    }
            }),
            $GG(a).bind(a.SCROLL_EVENT_CHANGE, function() {
                for (var a = this.currentIndis + 4; a < c.length; a++)
                    if (c.eq(a).find("img").length > 1)
                        for (j = 0; j < c.eq(a).find("img").length; j++) {
                            var d = c.eq(a).find("img").eq(j).attr("data-original");
                            $GG("#" + b + " li img[data-original='" + d + "']").attr("src", d)
                        }
                    else {
                        var e = c.eq(a).find("img").attr("data-original");
                        $GG("#" + b + " li img[data-original='" + e + "']").attr("src", e)
                    }
            })
        },
        interestingProductsMobileDevice: function() {
            var a = this;
            this.interestingProductSlider = new _gg.components.slider(a.sliderDefaultValues("interestedProducts", "slide")),
            this.interestingProductSlider.init(),
            this.sliderItemBinds(this.interestingProductSlider, "interestedProducts")
        },
        startAsyncSliders: function() {
            this.bannerMappingController();
            var a = this;
            window.setTimeout(function() {
                a.bannerSliderLoadImages()
            }, 100),
            this.bannerSlider = new _gg.components.slider(a.sliderDefaultValues("BannerArea", "fade", !0)),
            this.bannerSlider.init(),
            $GG(window).resize(function() {
                var a = $("#BannerArea").parent().width()
                  , b = Math.floor(a / (760 / 300));
                _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? ($GG("#homepage-banner-container-cover").css("height", b + 30),
                $GG("#BannerArea").css("height", b),
                $GG("#BannerArea .Banners.horizontal-slider li").css("width", a)) : ($GG("#homepage-banner-container-cover").removeAttr("style"),
                $GG("#BannerArea").css("height", "initial"))
            }),
            $GG(window).trigger("resize"),
            $GG(this.bannerSlider).bind(this.bannerSlider.INIT_READY, function() {
                for (var a = 0; a < $GG("#BannerArea .gg-slider-thumbnail").length; a++)
                    $GG("#BannerArea .gg-slider-thumbnail").eq(a).attr("id", "homepage-topbanner-slider-button-" + (a + 1));
                for (var b = 0; b < $GG("#BannerArea .horizontal-slider li").length; b++) {
                    var c = "";
                    $GG("#BannerArea .horizontal-slider li").eq(b).find("a").length > 0 && void 0 != $GG("#BannerArea .horizontal-slider li").eq(b).find("a").attr("title") && (c = $GG("#BannerArea .horizontal-slider li").eq(b).find("a").attr("title")),
                    $GG("#BannerArea .horizontal-slider li").eq(b).attr("title", c),
                    $GG("#BannerArea li.gg-slider-thumbnail").eq(b).attr("title", c)
                }
                window.setTimeout(function() {
                    $GG("#mobile-impression-image").addClass("hidden"),
                    $GG("#BannerArea").removeClass("visibility-hidden")
                }, 100)
            }),
            $GG(this.bannerSlider).bind(this.bannerSlider.THUMB_ITEM_CLICKED, function() {
                a.bannerSliderLoadImages()
            }),
            $GG(this.bannerSlider).bind(this.bannerSlider.NEXT_ITEM_CLICKED, function() {
                a.bannerSliderLoadImages()
            }),
            $GG(this.bannerSlider).bind(this.bannerSlider.PREV_ITEM_CLICKED, function() {
                a.bannerSliderLoadImages()
            })
        },
        startSliders: function() {
            var a = this;
            $GG("#gf").length > 0 && (this.gfSlider = new _gg.components.slider(this.sliderDefaultValues("gf", "slide")),
            this.gfSlider.init(),
            a.sliderItemBinds(this.gfSlider, "gf")),
            $GG("#lastVisited").length > 0 && (this.lastVisitedSlider = new _gg.components.slider(this.sliderDefaultValues("lastVisited", "slide")),
            this.lastVisitedSlider.init(),
            a.sliderItemBinds(this.lastVisitedSlider, "lastVisited")),
            $GG("#supermarket").length > 0 && (this.supermarketSlider = new _gg.components.slider(this.sliderDefaultValues("supermarket", "slide")),
            this.supermarketSlider.init(),
            a.sliderItemBinds(this.supermarketSlider, "supermarket")),
            $GG("#cadde").length > 0 && (this.caddeSlider = new _gg.components.slider(this.sliderDefaultValues("cadde", "slide")),
            this.caddeSlider.init(),
            a.sliderItemBinds(this.caddeSlider, "cadde")),
            $GG("#atolye").length > 0 && (this.atolyeSlider = new _gg.components.slider(this.sliderDefaultValues("atolye", "slide")),
            this.atolyeSlider.init(),
            a.sliderItemBinds(this.atolyeSlider, "atolye")),
            $GG("#mostSold").length > 0 && (this.mostSoldSlider = new _gg.components.slider(this.sliderDefaultValues("mostSold", "slide")),
            this.mostSoldSlider.init(),
            a.sliderItemBinds(this.mostSoldSlider, "mostSold")),
            $GG("#populerCategories").length > 0 && (this.popularCampaignSlider = new _gg.components.slider(this.sliderDefaultValues("populerCategories", "slide")),
            this.popularCampaignSlider.init(),
            a.sliderItemBinds(this.popularCampaignSlider, "populerCategories")),
            $GG(".lazyload-img").lazyload({
                threshold: 0,
                event: "scroll"
            })
        },
        bannerSliderLoadImages: function(a) {
            var b = $GG("#BannerArea .Banners li");
            if (0 == b.find("img").length)
                return !1;
            if (a || !1)
                b = b.find("img").attr("rev");
            else {
                var c = this.bannerSlider.currentIndis
                  , d = this.bannerSlider.clickedItemIndex || 0;
                !this.bannerSlider.config.infinite || _gg.pageType != GG.Static.Enums.pageTypes.IOS && _gg.pageType != GG.Static.Enums.pageTypes.ANDROID || (c = d + this.bannerSlider.config.stepCount[_gg.static.globalParameters.responsiveState]);
                var e = b.eq(c).find("img");
                b = e.attr("rev"),
                _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && e.attr("mobile-rev") && (b = e.attr("mobile-rev"))
            }
            this.bannerSlider.itemState = this.bannerSlider.currentIndis,
            this.bannerSlider.config.infinite && this.bannerSlider.config.transition !== _gg.static.Enums.transitions.fade && (this.bannerSlider.itemState -= this.bannerSlider.currentItemCount);
            var f = "#BannerArea #homepage-top-banner-" + (this.bannerSlider.itemState + 1);
            $GG(f).find("input[type=hidden]").length > 0 && 0 == $GG(f + " .personalizeBanner").length && this.runPersonalizeBanner($GG(f).find("input[type=hidden]").val(), f);
            var g = $GG("#BannerArea .Banners li").find("img[rev='" + b + "']");
            _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && e.attr("mobile-rev") && (g = $GG("#BannerArea .Banners li").find("img[mobile-rev='" + b + "']"));
            var h = b.replace("https://", "http://");
            if (g.attr("src", 'http:' + h),
            _gg.pageType == GG.Static.Enums.pageTypes.IOS || _gg.pageType == GG.Static.Enums.pageTypes.ANDROID) {
                var i = g.parents("li:eq(0)").next("li").find("img");
                if (i) {
                    var j = i.attr("rev");
                    _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && i.attr("mobile-rev") && (j = i.attr("mobile-rev"));
                    var k = j.replace("https://", "http://");
                    i.attr("src", 'http:' + k)
                }
            }
        },
        sliderDefaultValues: function(a, b, c) {
            var d = c || !1
              , e = {};
            return e.containerId = a + " .widget-slider",
            e.infinite = !0,
            e.bullets = d,
            e.direction = {},
            e.itemCount = {},
            e.stepCount = {},
            e.hasThumbnail = {},
            e.transition = b,
            e.mobileScroll = !0,
            e.mainCoverContainer = ".widget-border",
            "BannerArea" == a && (e.mobileScroll = !1,
            e.autoStart = !0,
            e.autoAnimDelay = 5e3,
            _gg.pageType == GG.Static.Enums.pageTypes.IOS || _gg.pageType == GG.Static.Enums.pageTypes.ANDROID ? e.transitionDuration = 500 : e.transitionDuration = 100,
            e.NavigationActiveOnHover = !0,
            e.hasThumbnail[_gg.static.Enums.responsiveParameterNames.mobile] = !1,
            e.hasThumbnail[_gg.static.Enums.responsiveParameterNames.tablet] = !0,
            e.hasThumbnail[_gg.static.Enums.responsiveParameterNames.desktop] = !0,
            e.hasThumbnail[_gg.static.Enums.responsiveParameterNames.large_desktop] = !0,
            e.thumbnailAttr = "data-thumbnail"),
            _gg.utilities.initResp(e.direction, _gg.static.Enums.directions.horizontal),
            e.itemCount[_gg.static.Enums.responsiveParameterNames.mobile] = this.constructor._homepage_slider_params[a].mobile[0],
            e.itemCount[_gg.static.Enums.responsiveParameterNames.tablet] = this.constructor._homepage_slider_params[a].tablet[0],
            e.itemCount[_gg.static.Enums.responsiveParameterNames.desktop] = this.constructor._homepage_slider_params[a].desktop[0],
            e.itemCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = this.constructor._homepage_slider_params[a].large_desktop[0],
            e.stepCount[_gg.static.Enums.responsiveParameterNames.mobile] = this.constructor._homepage_slider_params[a].mobile[1],
            e.stepCount[_gg.static.Enums.responsiveParameterNames.tablet] = this.constructor._homepage_slider_params[a].tablet[1],
            e.stepCount[_gg.static.Enums.responsiveParameterNames.desktop] = this.constructor._homepage_slider_params[a].desktop[1],
            e.stepCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = this.constructor._homepage_slider_params[a].large_desktop[1],
            $GG("#" + a).find("script").length > 0 && "cadde" != a && $GG("#" + a).find("script").remove(),
            e
        },
        runPersonalizeBanner: function(a, b) {
            $.ajax({
                type: "POST",
                url: "https://www.gittigidiyor.com/kampanya/service/search.php",
                processData: !1,
                contentType: "application/json",
                data: JSON.stringify({
                    specIdList: [],
                    campaignIdList: [Number(a)],
                    count: 6,
                    offset: 0,
                    specCriterias: [],
                    order: "random"
                }),
                success: function(a) {
                    var c = "";
                    if (a.totalCount > 4) {
                        var d;
                        for (d = 0; d < 4; d++) {
                            var e = d;
                            c += '<div class="product-box product-box' + e + '"><a href="' + a.productList[e].url + '" title="' + a.productList[e].title + '"><div class="img-container"><div class="img-box"><img src="' + a.productList[e].imageLink + '" alt="" width="75" class="img"/></div></div><p class="title">' + a.productList[e].title + '</p><div class="price-box"><span class="buy-now-price">' + a.productList[e].formattedBuyNowPrice + ' TL </span><span class="market-price">' + a.productList[e].formattedMarketPrice + "</span></div></a></div>"
                        }
                        $GG(b).append('<div class="personalizeBanner hidden-m">' + c + "</div>")
                    }
                }
            })
        },
        sliderSuccessFunction: function(a) {},
        getParameterByName: function(a) {
            a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var b = new RegExp("[\\?&]" + a + "=([^&#]*)")
              , c = b.exec(location.search);
            return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
        },
        paramReplace: function(a, b, c) {
            var d = new RegExp("[\\?&]" + a + "=([^&#]*)")
              , e = d.exec(b)[0].charAt(0);
            return b.replace(d, e + a + "=" + c)
        },
        getLastVisit: function() {
            var a = this
              , b = a.constructor
              , c = {
                container: b.doms.lastVisitContainer,
                pageName: "last-visit-homepage-",
                maxLazyImgCount: 5
            };
            new _gg.components.productList(c).init()
        },
        getBrandList: function() {
            var a = this
              , b = a.constructor
              , c = {
                showSubtitle: !0,
                container: b.doms.brandListContainer,
                pageName: "brand-list-homepage-",
                maxLazyImgCount: 14,
                listUrl: $GG("#all-brands-sub-page-url").val(),
                brandUrl: $GG("#all-brands-url").val(),
                shuffle: !0,
                title: "Cadde Kampanyaları",
                subTitle: "Online alışveriş tutkunlarının favori markaları burada!",
                seeAllText: "Tüm Markalar"
            };
            new _gg.components.brandList(c).init()
        },
        getHomePageAjaxData: function() {
            this.getLastVisit(),
            this.getBrandList()
        },
        getWhichAppStore: function() {
            var a = this
              , b = navigator.userAgent || navigator.vendor || window.opera;
            /android/i.test(b) && (a.constructor.whichAppStore = "android"),
            /iPad|iPhone|iPod/.test(b) && !window.MSStream && (a.constructor.whichAppStore = "ios"),
            "" != a.constructor.whichAppStore ? ($GG("#navigateToApp").find("." + a.constructor.whichAppStore).removeClass("hidden"),
            $GG(".appDevice").parent().attr("href", $GG("#navigateToApp").find("." + a.constructor.whichAppStore).attr("rel"))) : $GG("#navigateToApp").addClass("hidden")
        }
    }
};
homePageScriptController.init(),
$GG(document).ready(function() {
    homePageScriptController.onload()
}),
$GG(window).load(function() {
    homePageScriptController.windowOnload();
});
var pageTracker = {};
pageTracker._trackEvent = function() {}
;
