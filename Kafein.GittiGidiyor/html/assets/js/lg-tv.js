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
    this.getData()
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
        // this.functions.constructor = this,
        // this.username = !1,
        // this.memberId = !1,
        // this.currentTime = !1,
        // this.functions.constructor = this,
        // this.mSegments = {},
        // this.config = a,
        // this.functions.setVariable(),
        // this.functions.getCallAction()
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
GG.Utilities.getQueryString = function(a) {
    var b = window.location.href;
    a = a.replace(/[\[\]]/g, "\\$&");
    var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)")
      , d = c.exec(b);
    return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
}
,
jQuery(document).ready(function() {
    mobile_search_init()
});
var aramaFilterNewParameters = new String;
!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self),
        b.io = a()
    }
}(function() {
    var a;
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                b[g][0].call(j.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c || a)
                }, j, j.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }({
        1: [function(a, b) {
            b.exports = a("./lib/")
        }
        , {
            "./lib/": 2
        }],
        2: [function(a, b, c) {
            function d(a, b) {
                "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
                var c, d = e(a), f = d.source, j = d.id;
                return b.forceNew || b["force new connection"] || !1 === b.multiplex ? (h("ignoring socket cache for %s", f),
                c = g(f, b)) : (i[j] || (h("new io instance for %s", f),
                i[j] = g(f, b)),
                c = i[j]),
                c.socket(d.path)
            }
            var e = a("./url")
              , f = a("socket.io-parser")
              , g = a("./manager")
              , h = a("debug")("socket.io-client");
            b.exports = c = d;
            var i = c.managers = {};
            c.protocol = f.protocol,
            c.connect = d,
            c.Manager = a("./manager"),
            c.Socket = a("./socket")
        }
        , {
            "./manager": 3,
            "./socket": 5,
            "./url": 6,
            debug: 10,
            "socket.io-parser": 46
        }],
        3: [function(a, b) {
            function c(a, b) {
                return this instanceof c ? (a && "object" == typeof a && (b = a,
                a = void 0),
                b = b || {},
                b.path = b.path || "/socket.io",
                this.nsps = {},
                this.subs = [],
                this.opts = b,
                this.reconnection(!1 !== b.reconnection),
                this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0),
                this.reconnectionDelay(b.reconnectionDelay || 1e3),
                this.reconnectionDelayMax(b.reconnectionDelayMax || 5e3),
                this.randomizationFactor(b.randomizationFactor || .5),
                this.backoff = new l({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }),
                this.timeout(null == b.timeout ? 2e4 : b.timeout),
                this.readyState = "closed",
                this.uri = a,
                this.connected = [],
                this.encoding = !1,
                this.packetBuffer = [],
                this.encoder = new g.Encoder,
                this.decoder = new g.Decoder,
                this.autoConnect = !1 !== b.autoConnect,
                void (this.autoConnect && this.open())) : new c(a,b)
            }
            var d = (a("./url"),
            a("engine.io-client"))
              , e = a("./socket")
              , f = a("component-emitter")
              , g = a("socket.io-parser")
              , h = a("./on")
              , i = a("component-bind")
              , j = (a("object-component"),
            a("debug")("socket.io-client:manager"))
              , k = a("indexof")
              , l = a("backo2");
            b.exports = c,
            c.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var a in this.nsps)
                    this.nsps[a].emit.apply(this.nsps[a], arguments)
            }
            ,
            c.prototype.updateSocketIds = function() {
                for (var a in this.nsps)
                    this.nsps[a].id = this.engine.id
            }
            ,
            f(c.prototype),
            c.prototype.reconnection = function(a) {
                return arguments.length ? (this._reconnection = !!a,
                this) : this._reconnection
            }
            ,
            c.prototype.reconnectionAttempts = function(a) {
                return arguments.length ? (this._reconnectionAttempts = a,
                this) : this._reconnectionAttempts
            }
            ,
            c.prototype.reconnectionDelay = function(a) {
                return arguments.length ? (this._reconnectionDelay = a,
                this.backoff && this.backoff.setMin(a),
                this) : this._reconnectionDelay
            }
            ,
            c.prototype.randomizationFactor = function(a) {
                return arguments.length ? (this._randomizationFactor = a,
                this.backoff && this.backoff.setJitter(a),
                this) : this._randomizationFactor
            }
            ,
            c.prototype.reconnectionDelayMax = function(a) {
                return arguments.length ? (this._reconnectionDelayMax = a,
                this.backoff && this.backoff.setMax(a),
                this) : this._reconnectionDelayMax
            }
            ,
            c.prototype.timeout = function(a) {
                return arguments.length ? (this._timeout = a,
                this) : this._timeout
            }
            ,
            c.prototype.maybeReconnectOnOpen = function() {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }
            ,
            c.prototype.open = c.prototype.connect = function(a) {
                if (j("readyState %s", this.readyState),
                ~this.readyState.indexOf("open"))
                    return this;
                j("opening %s", this.uri),
                this.engine = d(this.uri, this.opts);
                var b = this.engine
                  , c = this;
                this.readyState = "opening",
                this.skipReconnect = !1;
                var e = h(b, "open", function() {
                    c.onopen(),
                    a && a()
                })
                  , f = h(b, "error", function(b) {
                    if (j("connect_error"),
                    c.cleanup(),
                    c.readyState = "closed",
                    c.emitAll("connect_error", b),
                    a) {
                        var d = new Error("Connection error");
                        d.data = b,
                        a(d)
                    } else
                        c.maybeReconnectOnOpen()
                });
                if (!1 !== this._timeout) {
                    var g = this._timeout;
                    j("connect attempt will timeout after %d", g);
                    var i = setTimeout(function() {
                        j("connect attempt timed out after %d", g),
                        e.destroy(),
                        b.close(),
                        b.emit("error", "timeout"),
                        c.emitAll("connect_timeout", g)
                    }, g);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(i)
                        }
                    })
                }
                return this.subs.push(e),
                this.subs.push(f),
                this
            }
            ,
            c.prototype.onopen = function() {
                j("open"),
                this.cleanup(),
                this.readyState = "open",
                this.emit("open");
                var a = this.engine;
                this.subs.push(h(a, "data", i(this, "ondata"))),
                this.subs.push(h(this.decoder, "decoded", i(this, "ondecoded"))),
                this.subs.push(h(a, "error", i(this, "onerror"))),
                this.subs.push(h(a, "close", i(this, "onclose")))
            }
            ,
            c.prototype.ondata = function(a) {
                this.decoder.add(a)
            }
            ,
            c.prototype.ondecoded = function(a) {
                this.emit("packet", a)
            }
            ,
            c.prototype.onerror = function(a) {
                j("error", a),
                this.emitAll("error", a)
            }
            ,
            c.prototype.socket = function(a) {
                var b = this.nsps[a];
                if (!b) {
                    b = new e(this,a),
                    this.nsps[a] = b;
                    var c = this;
                    b.on("connect", function() {
                        b.id = c.engine.id,
                        ~k(c.connected, b) || c.connected.push(b)
                    })
                }
                return b
            }
            ,
            c.prototype.destroy = function(a) {
                var b = k(this.connected, a);
                ~b && this.connected.splice(b, 1),
                this.connected.length || this.close()
            }
            ,
            c.prototype.packet = function(a) {
                j("writing packet %j", a);
                var b = this;
                b.encoding ? b.packetBuffer.push(a) : (b.encoding = !0,
                this.encoder.encode(a, function(a) {
                    for (var c = 0; c < a.length; c++)
                        b.engine.write(a[c]);
                    b.encoding = !1,
                    b.processPacketQueue()
                }))
            }
            ,
            c.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var a = this.packetBuffer.shift();
                    this.packet(a)
                }
            }
            ,
            c.prototype.cleanup = function() {
                for (var a; a = this.subs.shift(); )
                    a.destroy();
                this.packetBuffer = [],
                this.encoding = !1,
                this.decoder.destroy()
            }
            ,
            c.prototype.close = c.prototype.disconnect = function() {
                this.skipReconnect = !0,
                this.backoff.reset(),
                this.readyState = "closed",
                this.engine && this.engine.close()
            }
            ,
            c.prototype.onclose = function(a) {
                j("close"),
                this.cleanup(),
                this.backoff.reset(),
                this.readyState = "closed",
                this.emit("close", a),
                this._reconnection && !this.skipReconnect && this.reconnect()
            }
            ,
            c.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect)
                    return this;
                var a = this;
                if (this.backoff.attempts >= this._reconnectionAttempts)
                    j("reconnect failed"),
                    this.backoff.reset(),
                    this.emitAll("reconnect_failed"),
                    this.reconnecting = !1;
                else {
                    var b = this.backoff.duration();
                    j("will wait %dms before reconnect attempt", b),
                    this.reconnecting = !0;
                    var c = setTimeout(function() {
                        a.skipReconnect || (j("attempting reconnect"),
                        a.emitAll("reconnect_attempt", a.backoff.attempts),
                        a.emitAll("reconnecting", a.backoff.attempts),
                        a.skipReconnect || a.open(function(b) {
                            b ? (j("reconnect attempt error"),
                            a.reconnecting = !1,
                            a.reconnect(),
                            a.emitAll("reconnect_error", b.data)) : (j("reconnect success"),
                            a.onreconnect())
                        }))
                    }, b);
                    this.subs.push({
                        destroy: function() {
                            clearTimeout(c)
                        }
                    })
                }
            }
            ,
            c.prototype.onreconnect = function() {
                var a = this.backoff.attempts;
                this.reconnecting = !1,
                this.backoff.reset(),
                this.updateSocketIds(),
                this.emitAll("reconnect", a)
            }
        }
        , {
            "./on": 4,
            "./socket": 5,
            "./url": 6,
            backo2: 7,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "engine.io-client": 11,
            indexof: 42,
            "object-component": 43,
            "socket.io-parser": 46
        }],
        4: [function(a, b) {
            function c(a, b, c) {
                return a.on(b, c),
                {
                    destroy: function() {
                        a.removeListener(b, c)
                    }
                }
            }
            b.exports = c
        }
        , {}],
        5: [function(a, b, c) {
            function d(a, b) {
                this.io = a,
                this.nsp = b,
                this.json = this,
                this.ids = 0,
                this.acks = {},
                this.io.autoConnect && this.open(),
                this.receiveBuffer = [],
                this.sendBuffer = [],
                this.connected = !1,
                this.disconnected = !0
            }
            var e = a("socket.io-parser")
              , f = a("component-emitter")
              , g = a("to-array")
              , h = a("./on")
              , i = a("component-bind")
              , j = a("debug")("socket.io-client:socket")
              , k = a("has-binary");
            b.exports = d;
            var l = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1
            }
              , m = f.prototype.emit;
            f(d.prototype),
            d.prototype.subEvents = function() {
                if (!this.subs) {
                    var a = this.io;
                    this.subs = [h(a, "open", i(this, "onopen")), h(a, "packet", i(this, "onpacket")), h(a, "close", i(this, "onclose"))]
                }
            }
            ,
            d.prototype.open = d.prototype.connect = function() {
                return this.connected ? this : (this.subEvents(),
                this.io.open(),
                "open" == this.io.readyState && this.onopen(),
                this)
            }
            ,
            d.prototype.send = function() {
                var a = g(arguments);
                return a.unshift("message"),
                this.emit.apply(this, a),
                this
            }
            ,
            d.prototype.emit = function(a) {
                if (l.hasOwnProperty(a))
                    return m.apply(this, arguments),
                    this;
                var b = g(arguments)
                  , c = e.EVENT;
                k(b) && (c = e.BINARY_EVENT);
                var d = {
                    type: c,
                    data: b
                };
                return "function" == typeof b[b.length - 1] && (j("emitting packet with ack id %d", this.ids),
                this.acks[this.ids] = b.pop(),
                d.id = this.ids++),
                this.connected ? this.packet(d) : this.sendBuffer.push(d),
                this
            }
            ,
            d.prototype.packet = function(a) {
                a.nsp = this.nsp,
                this.io.packet(a)
            }
            ,
            d.prototype.onopen = function() {
                j("transport is open - connecting"),
                "/" != this.nsp && this.packet({
                    type: e.CONNECT
                })
            }
            ,
            d.prototype.onclose = function(a) {
                j("close (%s)", a),
                this.connected = !1,
                this.disconnected = !0,
                delete this.id,
                this.emit("disconnect", a)
            }
            ,
            d.prototype.onpacket = function(a) {
                if (a.nsp == this.nsp)
                    switch (a.type) {
                    case e.CONNECT:
                        this.onconnect();
                        break;
                    case e.EVENT:
                    case e.BINARY_EVENT:
                        this.onevent(a);
                        break;
                    case e.ACK:
                    case e.BINARY_ACK:
                        this.onack(a);
                        break;
                    case e.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case e.ERROR:
                        this.emit("error", a.data)
                    }
            }
            ,
            d.prototype.onevent = function(a) {
                var b = a.data || [];
                j("emitting event %j", b),
                null != a.id && (j("attaching ack callback to event"),
                b.push(this.ack(a.id))),
                this.connected ? m.apply(this, b) : this.receiveBuffer.push(b)
            }
            ,
            d.prototype.ack = function(a) {
                var b = this
                  , c = !1;
                return function() {
                    if (!c) {
                        c = !0;
                        var d = g(arguments);
                        j("sending ack %j", d);
                        var f = k(d) ? e.BINARY_ACK : e.ACK;
                        b.packet({
                            type: f,
                            id: a,
                            data: d
                        })
                    }
                }
            }
            ,
            d.prototype.onack = function(a) {
                j("calling ack %s with %j", a.id, a.data),
                this.acks[a.id].apply(this, a.data),
                delete this.acks[a.id]
            }
            ,
            d.prototype.onconnect = function() {
                this.connected = !0,
                this.disconnected = !1,
                this.emit("connect"),
                this.emitBuffered()
            }
            ,
            d.prototype.emitBuffered = function() {
                var a;
                for (a = 0; a < this.receiveBuffer.length; a++)
                    m.apply(this, this.receiveBuffer[a]);
                for (this.receiveBuffer = [],
                a = 0; a < this.sendBuffer.length; a++)
                    this.packet(this.sendBuffer[a]);
                this.sendBuffer = []
            }
            ,
            d.prototype.ondisconnect = function() {
                j("server disconnect (%s)", this.nsp),
                this.destroy(),
                this.onclose("io server disconnect")
            }
            ,
            d.prototype.destroy = function() {
                if (this.subs) {
                    for (var a = 0; a < this.subs.length; a++)
                        this.subs[a].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }
            ,
            d.prototype.close = d.prototype.disconnect = function() {
                return this.connected && (j("performing disconnect (%s)", this.nsp),
                this.packet({
                    type: e.DISCONNECT
                })),
                this.destroy(),
                this.connected && this.onclose("io client disconnect"),
                this
            }
        }
        , {
            "./on": 4,
            "component-bind": 8,
            "component-emitter": 9,
            debug: 10,
            "has-binary": 38,
            "socket.io-parser": 46,
            "to-array": 50
        }],
        6: [function(a, b) {
            (function(c) {
                function d(a, b) {
                    var d = a
                      , b = b || c.location;
                    return null == a && (a = b.protocol + "http://" + b.host),
                    "string" == typeof a && ("/" == a.charAt(0) && (a = "/" == a.charAt(1) ? b.protocol + a : b.hostname + a),
                    /^(https?|wss?):\/\//.test(a) || (f("protocol-less url %s", a),
                    a = void 0 !== b ? b.protocol + "http://" + a : "https://" + a),
                    f("parse %s", a),
                    d = e(a)),
                    d.port || (/^(http|ws)$/.test(d.protocol) ? d.port = "80" : /^(http|ws)s$/.test(d.protocol) && (d.port = "443")),
                    d.path = d.path || "/",
                    d.id = d.protocol + "://" + d.host + ":" + d.port,
                    d.href = d.protocol + "://" + d.host + (b && b.port == d.port ? "" : ":" + d.port),
                    d
                }
                var e = a("parseuri")
                  , f = a("debug")("socket.io-client:url");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            debug: 10,
            parseuri: 44
        }],
        7: [function(a, b) {
            function c(a) {
                a = a || {},
                this.ms = a.min || 100,
                this.max = a.max || 1e4,
                this.factor = a.factor || 2,
                this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0,
                this.attempts = 0
            }
            b.exports = c,
            c.prototype.duration = function() {
                var a = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var b = Math.random()
                      , c = Math.floor(b * this.jitter * a);
                    a = 0 == (1 & Math.floor(10 * b)) ? a - c : a + c
                }
                return 0 | Math.min(a, this.max)
            }
            ,
            c.prototype.reset = function() {
                this.attempts = 0
            }
            ,
            c.prototype.setMin = function(a) {
                this.ms = a
            }
            ,
            c.prototype.setMax = function(a) {
                this.max = a
            }
            ,
            c.prototype.setJitter = function(a) {
                this.jitter = a
            }
        }
        , {}],
        8: [function(a, b) {
            var c = [].slice;
            b.exports = function(a, b) {
                if ("string" == typeof b && (b = a[b]),
                "function" != typeof b)
                    throw new Error("bind() requires a function");
                var d = c.call(arguments, 2);
                return function() {
                    return b.apply(a, d.concat(c.call(arguments)))
                }
            }
        }
        , {}],
        9: [function(a, b) {
            function c(a) {
                return a ? d(a) : void 0
            }
            function d(a) {
                for (var b in c.prototype)
                    a[b] = c.prototype[b];
                return a
            }
            b.exports = c,
            c.prototype.on = c.prototype.addEventListener = function(a, b) {
                return this._callbacks = this._callbacks || {},
                (this._callbacks[a] = this._callbacks[a] || []).push(b),
                this
            }
            ,
            c.prototype.once = function(a, b) {
                function c() {
                    d.off(a, c),
                    b.apply(this, arguments)
                }
                var d = this;
                return this._callbacks = this._callbacks || {},
                c.fn = b,
                this.on(a, c),
                this
            }
            ,
            c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function(a, b) {
                if (this._callbacks = this._callbacks || {},
                0 == arguments.length)
                    return this._callbacks = {},
                    this;
                var c = this._callbacks[a];
                if (!c)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks[a],
                    this;
                for (var d, e = 0; e < c.length; e++)
                    if ((d = c[e]) === b || d.fn === b) {
                        c.splice(e, 1);
                        break
                    }
                return this
            }
            ,
            c.prototype.emit = function(a) {
                this._callbacks = this._callbacks || {};
                var b = [].slice.call(arguments, 1)
                  , c = this._callbacks[a];
                if (c) {
                    c = c.slice(0);
                    for (var d = 0, e = c.length; e > d; ++d)
                        c[d].apply(this, b)
                }
                return this
            }
            ,
            c.prototype.listeners = function(a) {
                return this._callbacks = this._callbacks || {},
                this._callbacks[a] || []
            }
            ,
            c.prototype.hasListeners = function(a) {
                return !!this.listeners(a).length
            }
        }
        , {}],
        10: [function(a, b) {
            function c(a) {
                return c.enabled(a) ? function(b) {
                    b = d(b);
                    var e = new Date
                      , f = e - (c[a] || e);
                    c[a] = e,
                    b = a + " " + b + " +" + c.humanize(f),
                    window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                : function() {}
            }
            function d(a) {
                return a instanceof Error ? a.stack || a.message : a
            }
            b.exports = c,
            c.names = [],
            c.skips = [],
            c.enable = function(a) {
                try {
                    localStorage.debug = a
                } catch (a) {}
                for (var b = (a || "").split(/[\s,]+/), d = b.length, e = 0; d > e; e++)
                    a = b[e].replace("*", ".*?"),
                    "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$"))
            }
            ,
            c.disable = function() {
                c.enable("")
            }
            ,
            c.humanize = function(a) {
                var b = 1e3
                  , c = 6e4
                  , d = 60 * c;
                return a >= d ? (a / d).toFixed(1) + "h" : a >= c ? (a / c).toFixed(1) + "m" : a >= b ? (a / b | 0) + "s" : a + "ms"
            }
            ,
            c.enabled = function(a) {
                for (var b = 0, d = c.skips.length; d > b; b++)
                    if (c.skips[b].test(a))
                        return !1;
                for (var b = 0, d = c.names.length; d > b; b++)
                    if (c.names[b].test(a))
                        return !0;
                return !1
            }
            ;
            try {
                window.localStorage && c.enable(localStorage.debug)
            } catch (a) {}
        }
        , {}],
        11: [function(a, b) {
            b.exports = a("./lib/")
        }
        , {
            "./lib/": 12
        }],
        12: [function(a, b) {
            b.exports = a("./socket"),
            b.exports.parser = a("engine.io-parser")
        }
        , {
            "./socket": 13,
            "engine.io-parser": 25
        }],
        13: [function(a, b) {
            (function(c) {
                function d(a, b) {
                    if (!(this instanceof d))
                        return new d(a,b);
                    if (b = b || {},
                    a && "object" == typeof a && (b = a,
                    a = null),
                    a && (a = k(a),
                    b.host = a.host,
                    b.secure = "https" == a.protocol || "wss" == a.protocol,
                    b.port = a.port,
                    a.query && (b.query = a.query)),
                    this.secure = null != b.secure ? b.secure : c.location && "https:" == location.protocol,
                    b.host) {
                        var e = b.host.split(":");
                        b.hostname = e.shift(),
                        e.length ? b.port = e.pop() : b.port || (b.port = this.secure ? "443" : "80")
                    }
                    this.agent = b.agent || !1,
                    this.hostname = b.hostname || (c.location ? location.hostname : "localhost"),
                    this.port = b.port || (c.location && location.port ? location.port : this.secure ? 443 : 80),
                    this.query = b.query || {},
                    "string" == typeof this.query && (this.query = m.decode(this.query)),
                    this.upgrade = !1 !== b.upgrade,
                    this.path = (b.path || "/engine.io").replace(/\/$/, "") + "/",
                    this.forceJSONP = !!b.forceJSONP,
                    this.jsonp = !1 !== b.jsonp,
                    this.forceBase64 = !!b.forceBase64,
                    this.enablesXDR = !!b.enablesXDR,
                    this.timestampParam = b.timestampParam || "t",
                    this.timestampRequests = b.timestampRequests,
                    this.transports = b.transports || ["polling", "websocket"],
                    this.readyState = "",
                    this.writeBuffer = [],
                    this.callbackBuffer = [],
                    this.policyPort = b.policyPort || 843,
                    this.rememberUpgrade = b.rememberUpgrade || !1,
                    this.binaryType = null,
                    this.onlyBinaryUpgrades = b.onlyBinaryUpgrades,
                    this.pfx = b.pfx || null,
                    this.key = b.key || null,
                    this.passphrase = b.passphrase || null,
                    this.cert = b.cert || null,
                    this.ca = b.ca || null,
                    this.ciphers = b.ciphers || null,
                    this.rejectUnauthorized = b.rejectUnauthorized || null,
                    this.open()
                }
                function e(a) {
                    var b = {};
                    for (var c in a)
                        a.hasOwnProperty(c) && (b[c] = a[c]);
                    return b
                }
                var f = a("./transports")
                  , g = a("component-emitter")
                  , h = a("debug")("engine.io-client:socket")
                  , i = a("indexof")
                  , j = a("engine.io-parser")
                  , k = a("parseuri")
                  , l = a("parsejson")
                  , m = a("parseqs");
                b.exports = d,
                d.priorWebsocketSuccess = !1,
                g(d.prototype),
                d.protocol = j.protocol,
                d.Socket = d,
                d.Transport = a("./transport"),
                d.transports = a("./transports"),
                d.parser = a("engine.io-parser"),
                d.prototype.createTransport = function(a) {
                    h('creating transport "%s"', a);
                    var b = e(this.query);
                    return b.EIO = j.protocol,
                    b.transport = a,
                    this.id && (b.sid = this.id),
                    new f[a]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: b,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized
                    })
                }
                ,
                d.prototype.open = function() {
                    var a;
                    if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket"))
                        a = "websocket";
                    else {
                        if (0 == this.transports.length) {
                            var b = this;
                            return void setTimeout(function() {
                                b.emit("error", "No transports available")
                            }, 0)
                        }
                        a = this.transports[0]
                    }
                    this.readyState = "opening";
                    var a;
                    try {
                        a = this.createTransport(a)
                    } catch (a) {
                        return this.transports.shift(),
                        void this.open()
                    }
                    a.open(),
                    this.setTransport(a)
                }
                ,
                d.prototype.setTransport = function(a) {
                    h("setting transport %s", a.name);
                    var b = this;
                    this.transport && (h("clearing existing transport %s", this.transport.name),
                    this.transport.removeAllListeners()),
                    this.transport = a,
                    a.on("drain", function() {
                        b.onDrain()
                    }).on("packet", function(a) {
                        b.onPacket(a)
                    }).on("error", function(a) {
                        b.onError(a)
                    }).on("close", function() {
                        b.onClose("transport close")
                    })
                }
                ,
                d.prototype.probe = function(a) {
                    function b() {
                        if (m.onlyBinaryUpgrades) {
                            var b = !this.supportsBinary && m.transport.supportsBinary;
                            l = l || b
                        }
                        l || (h('probe transport "%s" opened', a),
                        k.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                        k.once("packet", function(b) {
                            if (!l)
                                if ("pong" == b.type && "probe" == b.data) {
                                    if (h('probe transport "%s" pong', a),
                                    m.upgrading = !0,
                                    m.emit("upgrading", k),
                                    !k)
                                        return;
                                    d.priorWebsocketSuccess = "websocket" == k.name,
                                    h('pausing current transport "%s"', m.transport.name),
                                    m.transport.pause(function() {
                                        l || "closed" != m.readyState && (h("changing transport and sending upgrade packet"),
                                        j(),
                                        m.setTransport(k),
                                        k.send([{
                                            type: "upgrade"
                                        }]),
                                        m.emit("upgrade", k),
                                        k = null,
                                        m.upgrading = !1,
                                        m.flush())
                                    })
                                } else {
                                    h('probe transport "%s" failed', a);
                                    var c = new Error("probe error");
                                    c.transport = k.name,
                                    m.emit("upgradeError", c)
                                }
                        }))
                    }
                    function c() {
                        l || (l = !0,
                        j(),
                        k.close(),
                        k = null)
                    }
                    function e(b) {
                        var d = new Error("probe error: " + b);
                        d.transport = k.name,
                        c(),
                        h('probe transport "%s" failed because of error: %s', a, b),
                        m.emit("upgradeError", d)
                    }
                    function f() {
                        e("transport closed")
                    }
                    function g() {
                        e("socket closed")
                    }
                    function i(a) {
                        k && a.name != k.name && (h('"%s" works - aborting "%s"', a.name, k.name),
                        c())
                    }
                    function j() {
                        k.removeListener("open", b),
                        k.removeListener("error", e),
                        k.removeListener("close", f),
                        m.removeListener("close", g),
                        m.removeListener("upgrading", i)
                    }
                    h('probing transport "%s"', a);
                    var k = this.createTransport(a, {
                        probe: 1
                    })
                      , l = !1
                      , m = this;
                    d.priorWebsocketSuccess = !1,
                    k.once("open", b),
                    k.once("error", e),
                    k.once("close", f),
                    this.once("close", g),
                    this.once("upgrading", i),
                    k.open()
                }
                ,
                d.prototype.onOpen = function() {
                    if (h("socket open"),
                    this.readyState = "open",
                    d.priorWebsocketSuccess = "websocket" == this.transport.name,
                    this.emit("open"),
                    this.flush(),
                    "open" == this.readyState && this.upgrade && this.transport.pause) {
                        h("starting upgrade probes");
                        for (var a = 0, b = this.upgrades.length; b > a; a++)
                            this.probe(this.upgrades[a])
                    }
                }
                ,
                d.prototype.onPacket = function(a) {
                    if ("opening" == this.readyState || "open" == this.readyState)
                        switch (h('socket receive: type "%s", data "%s"', a.type, a.data),
                        this.emit("packet", a),
                        this.emit("heartbeat"),
                        a.type) {
                        case "open":
                            this.onHandshake(l(a.data));
                            break;
                        case "pong":
                            this.setPing();
                            break;
                        case "error":
                            var b = new Error("server error");
                            b.code = a.data,
                            this.emit("error", b);
                            break;
                        case "message":
                            this.emit("data", a.data),
                            this.emit("message", a.data)
                        }
                    else
                        h('packet received with socket readyState "%s"', this.readyState)
                }
                ,
                d.prototype.onHandshake = function(a) {
                    this.emit("handshake", a),
                    this.id = a.sid,
                    this.transport.query.sid = a.sid,
                    this.upgrades = this.filterUpgrades(a.upgrades),
                    this.pingInterval = a.pingInterval,
                    this.pingTimeout = a.pingTimeout,
                    this.onOpen(),
                    "closed" != this.readyState && (this.setPing(),
                    this.removeListener("heartbeat", this.onHeartbeat),
                    this.on("heartbeat", this.onHeartbeat))
                }
                ,
                d.prototype.onHeartbeat = function(a) {
                    clearTimeout(this.pingTimeoutTimer);
                    var b = this;
                    b.pingTimeoutTimer = setTimeout(function() {
                        "closed" != b.readyState && b.onClose("ping timeout")
                    }, a || b.pingInterval + b.pingTimeout)
                }
                ,
                d.prototype.setPing = function() {
                    var a = this;
                    clearTimeout(a.pingIntervalTimer),
                    a.pingIntervalTimer = setTimeout(function() {
                        h("writing ping packet - expecting pong within %sms", a.pingTimeout),
                        a.ping(),
                        a.onHeartbeat(a.pingTimeout)
                    }, a.pingInterval)
                }
                ,
                d.prototype.ping = function() {
                    this.sendPacket("ping")
                }
                ,
                d.prototype.onDrain = function() {
                    for (var a = 0; a < this.prevBufferLen; a++)
                        this.callbackBuffer[a] && this.callbackBuffer[a]();
                    this.writeBuffer.splice(0, this.prevBufferLen),
                    this.callbackBuffer.splice(0, this.prevBufferLen),
                    this.prevBufferLen = 0,
                    0 == this.writeBuffer.length ? this.emit("drain") : this.flush()
                }
                ,
                d.prototype.flush = function() {
                    "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length),
                    this.transport.send(this.writeBuffer),
                    this.prevBufferLen = this.writeBuffer.length,
                    this.emit("flush"))
                }
                ,
                d.prototype.write = d.prototype.send = function(a, b) {
                    return this.sendPacket("message", a, b),
                    this
                }
                ,
                d.prototype.sendPacket = function(a, b, c) {
                    if ("closing" != this.readyState && "closed" != this.readyState) {
                        var d = {
                            type: a,
                            data: b
                        };
                        this.emit("packetCreate", d),
                        this.writeBuffer.push(d),
                        this.callbackBuffer.push(c),
                        this.flush()
                    }
                }
                ,
                d.prototype.close = function() {
                    function a() {
                        d.onClose("forced close"),
                        h("socket closing - telling transport to close"),
                        d.transport.close()
                    }
                    function b() {
                        d.removeListener("upgrade", b),
                        d.removeListener("upgradeError", b),
                        a()
                    }
                    function c() {
                        d.once("upgrade", b),
                        d.once("upgradeError", b)
                    }
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.readyState = "closing";
                        var d = this;
                        this.writeBuffer.length ? this.once("drain", function() {
                            this.upgrading ? c() : a()
                        }) : this.upgrading ? c() : a()
                    }
                    return this
                }
                ,
                d.prototype.onError = function(a) {
                    h("socket error %j", a),
                    d.priorWebsocketSuccess = !1,
                    this.emit("error", a),
                    this.onClose("transport error", a)
                }
                ,
                d.prototype.onClose = function(a, b) {
                    if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                        h('socket close with reason: "%s"', a);
                        var c = this;
                        clearTimeout(this.pingIntervalTimer),
                        clearTimeout(this.pingTimeoutTimer),
                        setTimeout(function() {
                            c.writeBuffer = [],
                            c.callbackBuffer = [],
                            c.prevBufferLen = 0
                        }, 0),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        this.readyState = "closed",
                        this.id = null,
                        this.emit("close", a, b)
                    }
                }
                ,
                d.prototype.filterUpgrades = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++)
                        ~i(this.transports, a[c]) && b.push(a[c]);
                    return b
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./transport": 14,
            "./transports": 15,
            "component-emitter": 9,
            debug: 22,
            "engine.io-parser": 25,
            indexof: 42,
            parsejson: 34,
            parseqs: 35,
            parseuri: 36
        }],
        14: [function(a, b) {
            function c(a) {
                this.path = a.path,
                this.hostname = a.hostname,
                this.port = a.port,
                this.secure = a.secure,
                this.query = a.query,
                this.timestampParam = a.timestampParam,
                this.timestampRequests = a.timestampRequests,
                this.readyState = "",
                this.agent = a.agent || !1,
                this.socket = a.socket,
                this.enablesXDR = a.enablesXDR,
                this.pfx = a.pfx,
                this.key = a.key,
                this.passphrase = a.passphrase,
                this.cert = a.cert,
                this.ca = a.ca,
                this.ciphers = a.ciphers,
                this.rejectUnauthorized = a.rejectUnauthorized
            }
            var d = a("engine.io-parser")
              , e = a("component-emitter");
            b.exports = c,
            e(c.prototype),
            c.timestamps = 0,
            c.prototype.onError = function(a, b) {
                var c = new Error(a);
                return c.type = "TransportError",
                c.description = b,
                this.emit("error", c),
                this
            }
            ,
            c.prototype.open = function() {
                return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening",
                this.doOpen()),
                this
            }
            ,
            c.prototype.close = function() {
                return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(),
                this.onClose()),
                this
            }
            ,
            c.prototype.send = function(a) {
                if ("open" != this.readyState)
                    throw new Error("Transport not open");
                this.write(a)
            }
            ,
            c.prototype.onOpen = function() {
                this.readyState = "open",
                this.writable = !0,
                this.emit("open")
            }
            ,
            c.prototype.onData = function(a) {
                var b = d.decodePacket(a, this.socket.binaryType);
                this.onPacket(b)
            }
            ,
            c.prototype.onPacket = function(a) {
                this.emit("packet", a)
            }
            ,
            c.prototype.onClose = function() {
                this.readyState = "closed",
                this.emit("close")
            }
        }
        , {
            "component-emitter": 9,
            "engine.io-parser": 25
        }],
        15: [function(a, b, c) {
            (function(b) {
                function d(a) {
                    var c = !1
                      , d = !1
                      , h = !1 !== a.jsonp;
                    if (b.location) {
                        var i = "https:" == location.protocol
                          , j = location.port;
                        j || (j = i ? 443 : 80),
                        c = a.hostname != location.hostname || j != a.port,
                        d = a.secure != i
                    }
                    if (a.xdomain = c,
                    a.xscheme = d,
                    "open"in new e(a) && !a.forceJSONP)
                        return new f(a);
                    if (!h)
                        throw new Error("JSONP disabled");
                    return new g(a)
                }
                var e = a("xmlhttprequest")
                  , f = a("./polling-xhr")
                  , g = a("./polling-jsonp")
                  , h = a("./websocket");
                c.polling = d,
                c.websocket = h
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling-jsonp": 16,
            "./polling-xhr": 17,
            "./websocket": 19,
            xmlhttprequest: 20
        }],
        16: [function(a, b) {
            (function(c) {
                function d() {}
                function e(a) {
                    f.call(this, a),
                    this.query = this.query || {},
                    h || (c.___eio || (c.___eio = []),
                    h = c.___eio),
                    this.index = h.length;
                    var b = this;
                    h.push(function(a) {
                        b.onData(a)
                    }),
                    this.query.j = this.index,
                    c.document && c.addEventListener && c.addEventListener("beforeunload", function() {
                        b.script && (b.script.onerror = d)
                    }, !1)
                }
                var f = a("./polling")
                  , g = a("component-inherit");
                b.exports = e;
                var h, i = /\n/g, j = /\\n/g;
                g(e, f),
                e.prototype.supportsBinary = !1,
                e.prototype.doClose = function() {
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                    this.form && (this.form.parentNode.removeChild(this.form),
                    this.form = null,
                    this.iframe = null),
                    f.prototype.doClose.call(this)
                }
                ,
                e.prototype.doPoll = function() {
                    var a = this
                      , b = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script),
                    this.script = null),
                    b.async = !0,
                    b.src = this.uri(),
                    b.onerror = function(b) {
                        a.onError("jsonp poll error", b)
                    }
                    ;
                    var c = document.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c),
                    this.script = b,
                    "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                        var a = document.createElement("iframe");
                        document.body.appendChild(a),
                        document.body.removeChild(a)
                    }, 100)
                }
                ,
                e.prototype.doWrite = function(a, b) {
                    function c() {
                        d(),
                        b()
                    }
                    function d() {
                        if (e.iframe)
                            try {
                                e.form.removeChild(e.iframe)
                            } catch (a) {
                                e.onError("jsonp polling iframe removal error", a)
                            }
                        try {
                            var a = '<iframe src="javascript:0" name="' + e.iframeId + '">';
                            f = document.createElement(a)
                        } catch (a) {
                            f = document.createElement("iframe"),
                            f.name = e.iframeId,
                            f.src = "javascript:0"
                        }
                        f.id = e.iframeId,
                        e.form.appendChild(f),
                        e.iframe = f
                    }
                    var e = this;
                    if (!this.form) {
                        var f, g = document.createElement("form"), h = document.createElement("textarea"), k = this.iframeId = "eio_iframe_" + this.index;
                        g.className = "socketio",
                        g.style.position = "absolute",
                        g.style.top = "-1000px",
                        g.style.left = "-1000px",
                        g.target = k,
                        g.method = "POST",
                        g.setAttribute("accept-charset", "utf-8"),
                        h.name = "d",
                        g.appendChild(h),
                        document.body.appendChild(g),
                        this.form = g,
                        this.area = h
                    }
                    this.form.action = this.uri(),
                    d(),
                    a = a.replace(j, "\\\n"),
                    this.area.value = a.replace(i, "\\n");
                    try {
                        this.form.submit()
                    } catch (a) {}
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                        "complete" == e.iframe.readyState && c()
                    }
                    : this.iframe.onload = c
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-inherit": 21
        }],
        17: [function(a, b) {
            (function(c) {
                function d() {}
                function e(a) {
                    if (i.call(this, a),
                    c.location) {
                        var b = "https:" == location.protocol
                          , d = location.port;
                        d || (d = b ? 443 : 80),
                        this.xd = a.hostname != c.location.hostname || d != a.port,
                        this.xs = a.secure != b
                    }
                }
                function f(a) {
                    this.method = a.method || "GET",
                    this.uri = a.uri,
                    this.xd = !!a.xd,
                    this.xs = !!a.xs,
                    this.async = !1 !== a.async,
                    this.data = void 0 != a.data ? a.data : null,
                    this.agent = a.agent,
                    this.isBinary = a.isBinary,
                    this.supportsBinary = a.supportsBinary,
                    this.enablesXDR = a.enablesXDR,
                    this.pfx = a.pfx,
                    this.key = a.key,
                    this.passphrase = a.passphrase,
                    this.cert = a.cert,
                    this.ca = a.ca,
                    this.ciphers = a.ciphers,
                    this.rejectUnauthorized = a.rejectUnauthorized,
                    this.create()
                }
                function g() {
                    for (var a in f.requests)
                        f.requests.hasOwnProperty(a) && f.requests[a].abort()
                }
                var h = a("xmlhttprequest")
                  , i = a("./polling")
                  , j = a("component-emitter")
                  , k = a("component-inherit")
                  , l = a("debug")("engine.io-client:polling-xhr");
                b.exports = e,
                b.exports.Request = f,
                k(e, i),
                e.prototype.supportsBinary = !0,
                e.prototype.request = function(a) {
                    return a = a || {},
                    a.uri = this.uri(),
                    a.xd = this.xd,
                    a.xs = this.xs,
                    a.agent = this.agent || !1,
                    a.supportsBinary = this.supportsBinary,
                    a.enablesXDR = this.enablesXDR,
                    a.pfx = this.pfx,
                    a.key = this.key,
                    a.passphrase = this.passphrase,
                    a.cert = this.cert,
                    a.ca = this.ca,
                    a.ciphers = this.ciphers,
                    a.rejectUnauthorized = this.rejectUnauthorized,
                    new f(a)
                }
                ,
                e.prototype.doWrite = function(a, b) {
                    var c = "string" != typeof a && void 0 !== a
                      , d = this.request({
                        method: "POST",
                        data: a,
                        isBinary: c
                    })
                      , e = this;
                    d.on("success", b),
                    d.on("error", function(a) {
                        e.onError("xhr post error", a)
                    }),
                    this.sendXhr = d
                }
                ,
                e.prototype.doPoll = function() {
                    l("xhr poll");
                    var a = this.request()
                      , b = this;
                    a.on("data", function(a) {
                        b.onData(a)
                    }),
                    a.on("error", function(a) {
                        b.onError("xhr poll error", a)
                    }),
                    this.pollXhr = a
                }
                ,
                j(f.prototype),
                f.prototype.create = function() {
                    var a = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    a.pfx = this.pfx,
                    a.key = this.key,
                    a.passphrase = this.passphrase,
                    a.cert = this.cert,
                    a.ca = this.ca,
                    a.ciphers = this.ciphers,
                    a.rejectUnauthorized = this.rejectUnauthorized;
                    var b = this.xhr = new h(a)
                      , d = this;
                    try {
                        if (l("xhr open %s: %s", this.method, this.uri),
                        b.open(this.method, this.uri, this.async),
                        this.supportsBinary && (b.responseType = "arraybuffer"),
                        "POST" == this.method)
                            try {
                                this.isBinary ? b.setRequestHeader("Content-type", "application/octet-stream") : b.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (a) {}
                        "withCredentials"in b && (b.withCredentials = !0),
                        this.hasXDR() ? (b.onload = function() {
                            d.onLoad()
                        }
                        ,
                        b.onerror = function() {
                            d.onError(b.responseText)
                        }
                        ) : b.onreadystatechange = function() {
                            4 == b.readyState && (200 == b.status || 1223 == b.status ? d.onLoad() : setTimeout(function() {
                                d.onError(b.status)
                            }, 0))
                        }
                        ,
                        l("xhr data %s", this.data),
                        b.send(this.data)
                    } catch (a) {
                        return void setTimeout(function() {
                            d.onError(a)
                        }, 0)
                    }
                    c.document && (this.index = f.requestsCount++,
                    f.requests[this.index] = this)
                }
                ,
                f.prototype.onSuccess = function() {
                    this.emit("success"),
                    this.cleanup()
                }
                ,
                f.prototype.onData = function(a) {
                    this.emit("data", a),
                    this.onSuccess()
                }
                ,
                f.prototype.onError = function(a) {
                    this.emit("error", a),
                    this.cleanup(!0)
                }
                ,
                f.prototype.cleanup = function(a) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = d : this.xhr.onreadystatechange = d,
                        a)
                            try {
                                this.xhr.abort()
                            } catch (a) {}
                        c.document && delete f.requests[this.index],
                        this.xhr = null
                    }
                }
                ,
                f.prototype.onLoad = function() {
                    var a;
                    try {
                        var b;
                        try {
                            b = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                        } catch (a) {}
                        a = "application/octet-stream" === b ? this.xhr.response : this.supportsBinary ? "ok" : this.xhr.responseText
                    } catch (a) {
                        this.onError(a)
                    }
                    null != a && this.onData(a)
                }
                ,
                f.prototype.hasXDR = function() {
                    return void 0 !== c.XDomainRequest && !this.xs && this.enablesXDR
                }
                ,
                f.prototype.abort = function() {
                    this.cleanup()
                }
                ,
                c.document && (f.requestsCount = 0,
                f.requests = {},
                c.attachEvent ? c.attachEvent("onunload", g) : c.addEventListener && c.addEventListener("beforeunload", g, !1))
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./polling": 18,
            "component-emitter": 9,
            "component-inherit": 21,
            debug: 22,
            xmlhttprequest: 20
        }],
        18: [function(a, b) {
            function c(a) {
                var b = a && a.forceBase64;
                (!i || b) && (this.supportsBinary = !1),
                d.call(this, a)
            }
            var d = a("../transport")
              , e = a("parseqs")
              , f = a("engine.io-parser")
              , g = a("component-inherit")
              , h = a("debug")("engine.io-client:polling");
            b.exports = c;
            var i = function() {
                return null != new (a("xmlhttprequest"))({
                    xdomain: !1
                }).responseType
            }();
            g(c, d),
            c.prototype.name = "polling",
            c.prototype.doOpen = function() {
                this.poll()
            }
            ,
            c.prototype.pause = function(a) {
                function b() {
                    h("paused"),
                    c.readyState = "paused",
                    a()
                }
                var c = this;
                if (this.readyState = "pausing",
                this.polling || !this.writable) {
                    var d = 0;
                    this.polling && (h("we are currently polling - waiting to pause"),
                    d++,
                    this.once("pollComplete", function() {
                        h("pre-pause polling complete"),
                        --d || b()
                    })),
                    this.writable || (h("we are currently writing - waiting to pause"),
                    d++,
                    this.once("drain", function() {
                        h("pre-pause writing complete"),
                        --d || b()
                    }))
                } else
                    b()
            }
            ,
            c.prototype.poll = function() {
                h("polling"),
                this.polling = !0,
                this.doPoll(),
                this.emit("poll")
            }
            ,
            c.prototype.onData = function(a) {
                var b = this;
                h("polling got data %s", a);
                var c = function(a) {
                    return "opening" == b.readyState && b.onOpen(),
                    "close" == a.type ? (b.onClose(),
                    !1) : void b.onPacket(a)
                };
                f.decodePayload(a, this.socket.binaryType, c),
                "closed" != this.readyState && (this.polling = !1,
                this.emit("pollComplete"),
                "open" == this.readyState ? this.poll() : h('ignoring poll - transport state "%s"', this.readyState))
            }
            ,
            c.prototype.doClose = function() {
                function a() {
                    h("writing close packet"),
                    b.write([{
                        type: "close"
                    }])
                }
                var b = this;
                "open" == this.readyState ? (h("transport open - closing"),
                a()) : (h("transport not open - deferring close"),
                this.once("open", a))
            }
            ,
            c.prototype.write = function(a) {
                var b = this;
                this.writable = !1;
                var c = function() {
                    b.writable = !0,
                    b.emit("drain")
                }
                  , b = this;
                f.encodePayload(a, this.supportsBinary, function(a) {
                    b.doWrite(a, c)
                })
            }
            ,
            c.prototype.uri = function() {
                var a = this.query || {}
                  , b = this.secure ? "https" : "http"
                  , c = "";
                return !1 !== this.timestampRequests && (a[this.timestampParam] = +new Date + "-" + d.timestamps++),
                this.supportsBinary || a.sid || (a.b64 = 1),
                a = e.encode(a),
                this.port && ("https" == b && 443 != this.port || "http" == b && 80 != this.port) && (c = ":" + this.port),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            xmlhttprequest: 20
        }],
        19: [function(a, b) {
            function c(a) {
                a && a.forceBase64 && (this.supportsBinary = !1),
                d.call(this, a)
            }
            var d = a("../transport")
              , e = a("engine.io-parser")
              , f = a("parseqs")
              , g = a("component-inherit")
              , h = a("debug")("engine.io-client:websocket")
              , i = a("ws");
            b.exports = c,
            g(c, d),
            c.prototype.name = "websocket",
            c.prototype.supportsBinary = !0,
            c.prototype.doOpen = function() {
                if (this.check()) {
                    var a = this.uri()
                      , b = {
                        agent: this.agent
                    };
                    b.pfx = this.pfx,
                    b.key = this.key,
                    b.passphrase = this.passphrase,
                    b.cert = this.cert,
                    b.ca = this.ca,
                    b.ciphers = this.ciphers,
                    b.rejectUnauthorized = this.rejectUnauthorized,
                    this.ws = new i(a,void 0,b),
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            c.prototype.addEventListeners = function() {
                var a = this;
                this.ws.onopen = function() {
                    a.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    a.onClose()
                }
                ,
                this.ws.onmessage = function(b) {
                    a.onData(b.data)
                }
                ,
                this.ws.onerror = function(b) {
                    a.onError("websocket error", b)
                }
            }
            ,
            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (c.prototype.onData = function(a) {
                var b = this;
                setTimeout(function() {
                    d.prototype.onData.call(b, a)
                }, 0)
            }
            ),
            c.prototype.write = function(a) {
                function b() {
                    c.writable = !0,
                    c.emit("drain")
                }
                var c = this;
                this.writable = !1;
                for (var d = 0, f = a.length; f > d; d++)
                    e.encodePacket(a[d], this.supportsBinary, function(a) {
                        try {
                            c.ws.send(a)
                        } catch (a) {
                            h("websocket closed before onclose event")
                        }
                    });
                setTimeout(b, 0)
            }
            ,
            c.prototype.onClose = function() {
                d.prototype.onClose.call(this)
            }
            ,
            c.prototype.doClose = function() {
                void 0 !== this.ws && this.ws.close()
            }
            ,
            c.prototype.uri = function() {
                var a = this.query || {}
                  , b = this.secure ? "wss" : "ws"
                  , c = "";
                return this.port && ("wss" == b && 443 != this.port || "ws" == b && 80 != this.port) && (c = ":" + this.port),
                this.timestampRequests && (a[this.timestampParam] = +new Date),
                this.supportsBinary || (a.b64 = 1),
                a = f.encode(a),
                a.length && (a = "?" + a),
                b + "://" + this.hostname + c + this.path + a
            }
            ,
            c.prototype.check = function() {
                return !(!i || "__initialize"in i && this.name === c.prototype.name)
            }
        }
        , {
            "../transport": 14,
            "component-inherit": 21,
            debug: 22,
            "engine.io-parser": 25,
            parseqs: 35,
            ws: 37
        }],
        20: [function(a, b) {
            var c = a("has-cors");
            b.exports = function(a) {
                var b = a.xdomain
                  , d = a.xscheme
                  , e = a.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!b || c))
                        return new XMLHttpRequest
                } catch (a) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !d && e)
                        return new XDomainRequest
                } catch (a) {}
                if (!b)
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (a) {}
            }
        }
        , {
            "has-cors": 40
        }],
        21: [function(a, b) {
            b.exports = function(a, b) {
                var c = function() {};
                c.prototype = b.prototype,
                a.prototype = new c,
                a.prototype.constructor = a
            }
        }
        , {}],
        22: [function(a, b, c) {
            function d() {
                return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function e() {
                var a = arguments
                  , b = this.useColors;
                if (a[0] = (b ? "%c" : "") + this.namespace + (b ? " %c" : " ") + a[0] + (b ? "%c " : " ") + "+" + c.humanize(this.diff),
                !b)
                    return a;
                var d = "color: " + this.color;
                a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
                var e = 0
                  , f = 0;
                return a[0].replace(/%[a-z%]/g, function(a) {
                    "%" !== a && (e++,
                    "%c" === a && (f = e))
                }),
                a.splice(f, 0, d),
                a
            }
            function f() {
                return "object" == typeof console && "function" == typeof console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function g(a) {
                try {
                    null == a ? localStorage.removeItem("debug") : localStorage.debug = a
                } catch (a) {}
            }
            function h() {
                var a;
                try {
                    a = localStorage.debug
                } catch (a) {}
                return a
            }
            c = b.exports = a("./debug"),
            c.log = f,
            c.formatArgs = e,
            c.save = g,
            c.load = h,
            c.useColors = d,
            c.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            c.formatters.j = function(a) {
                return JSON.stringify(a)
            }
            ,
            c.enable(h())
        }
        , {
            "./debug": 23
        }],
        23: [function(a, b, c) {
            function d() {
                return c.colors[k++ % c.colors.length]
            }
            function e(a) {
                function b() {}
                function e() {
                    var a = e
                      , b = +new Date
                      , f = b - (j || b);
                    a.diff = f,
                    a.prev = j,
                    a.curr = b,
                    j = b,
                    null == a.useColors && (a.useColors = c.useColors()),
                    null == a.color && a.useColors && (a.color = d());
                    var g = Array.prototype.slice.call(arguments);
                    g[0] = c.coerce(g[0]),
                    "string" != typeof g[0] && (g = ["%o"].concat(g));
                    var h = 0;
                    g[0] = g[0].replace(/%([a-z%])/g, function(b, d) {
                        if ("%" === b)
                            return b;
                        h++;
                        var e = c.formatters[d];
                        if ("function" == typeof e) {
                            var f = g[h];
                            b = e.call(a, f),
                            g.splice(h, 1),
                            h--
                        }
                        return b
                    }),
                    "function" == typeof c.formatArgs && (g = c.formatArgs.apply(a, g)),
                    (e.log || c.log || console.log.bind(console)).apply(a, g)
                }
                b.enabled = !1,
                e.enabled = !0;
                var f = c.enabled(a) ? e : b;
                return f.namespace = a,
                f
            }
            function f(a) {
                c.save(a);
                for (var b = (a || "").split(/[\s,]+/), d = b.length, e = 0; d > e; e++)
                    b[e] && (a = b[e].replace(/\*/g, ".*?"),
                    "-" === a[0] ? c.skips.push(new RegExp("^" + a.substr(1) + "$")) : c.names.push(new RegExp("^" + a + "$")))
            }
            function g() {
                c.enable("")
            }
            function h(a) {
                var b, d;
                for (b = 0,
                d = c.skips.length; d > b; b++)
                    if (c.skips[b].test(a))
                        return !1;
                for (b = 0,
                d = c.names.length; d > b; b++)
                    if (c.names[b].test(a))
                        return !0;
                return !1
            }
            function i(a) {
                return a instanceof Error ? a.stack || a.message : a
            }
            c = b.exports = e,
            c.coerce = i,
            c.disable = g,
            c.enable = f,
            c.enabled = h,
            c.humanize = a("ms"),
            c.names = [],
            c.skips = [],
            c.formatters = {};
            var j, k = 0
        }
        , {
            ms: 24
        }],
        24: [function(a, b) {
            function c(a) {
                var b = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(a);
                if (b) {
                    var c = parseFloat(b[1]);
                    switch ((b[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "y":
                        return c * k;
                    case "days":
                    case "day":
                    case "d":
                        return c * j;
                    case "hours":
                    case "hour":
                    case "h":
                        return c * i;
                    case "minutes":
                    case "minute":
                    case "m":
                        return c * h;
                    case "seconds":
                    case "second":
                    case "s":
                        return c * g;
                    case "ms":
                        return c
                    }
                }
            }
            function d(a) {
                return a >= j ? Math.round(a / j) + "d" : a >= i ? Math.round(a / i) + "h" : a >= h ? Math.round(a / h) + "m" : a >= g ? Math.round(a / g) + "s" : a + "ms"
            }
            function e(a) {
                return f(a, j, "day") || f(a, i, "hour") || f(a, h, "minute") || f(a, g, "second") || a + " ms"
            }
            function f(a, b, c) {
                return b > a ? void 0 : 1.5 * b > a ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
            }
            var g = 1e3
              , h = 60 * g
              , i = 60 * h
              , j = 24 * i
              , k = 365.25 * j;
            b.exports = function(a, b) {
                return b = b || {},
                "string" == typeof a ? c(a) : b.long ? e(a) : d(a)
            }
        }
        , {}],
        25: [function(a, b, c) {
            (function(b) {
                function d(a, b) {
                    return b("b" + c.packets[a.type] + a.data.data)
                }
                function e(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    var e = a.data
                      , f = new Uint8Array(e)
                      , g = new Uint8Array(1 + e.byteLength);
                    g[0] = r[a.type];
                    for (var h = 0; h < f.length; h++)
                        g[h + 1] = f[h];
                    return d(g.buffer)
                }
                function f(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    var e = new FileReader;
                    return e.onload = function() {
                        a.data = e.result,
                        c.encodePacket(a, b, !0, d)
                    }
                    ,
                    e.readAsArrayBuffer(a.data)
                }
                function g(a, b, d) {
                    if (!b)
                        return c.encodeBase64Packet(a, d);
                    if (q)
                        return f(a, b, d);
                    var e = new Uint8Array(1);
                    return e[0] = r[a.type],
                    d(new u([e.buffer, a.data]))
                }
                function h(a, b, c) {
                    for (var d = new Array(a.length), e = m(a.length, c), f = function(a, c, e) {
                        b(c, function(b, c) {
                            d[a] = c,
                            e(b, d)
                        })
                    }, g = 0; g < a.length; g++)
                        f(g, a[g], e)
                }
                var i = a("./keys")
                  , j = a("has-binary")
                  , k = a("arraybuffer.slice")
                  , l = a("base64-arraybuffer")
                  , m = a("after")
                  , n = a("utf8")
                  , o = navigator.userAgent.match(/Android/i)
                  , p = /PhantomJS/i.test(navigator.userAgent)
                  , q = o || p;
                c.protocol = 3;
                var r = c.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                }
                  , s = i(r)
                  , t = {
                    type: "error",
                    data: "parser error"
                }
                  , u = a("blob");
                c.encodePacket = function(a, c, f, h) {
                    "function" == typeof c && (h = c,
                    c = !1),
                    "function" == typeof f && (h = f,
                    f = null);
                    var i = void 0 === a.data ? void 0 : a.data.buffer || a.data;
                    if (b.ArrayBuffer && i instanceof ArrayBuffer)
                        return e(a, c, h);
                    if (u && i instanceof b.Blob)
                        return g(a, c, h);
                    if (i && i.base64)
                        return d(a, h);
                    var j = r[a.type];
                    return void 0 !== a.data && (j += f ? n.encode(String(a.data)) : String(a.data)),
                    h("" + j)
                }
                ,
                c.encodeBase64Packet = function(a, d) {
                    var e = "b" + c.packets[a.type];
                    if (u && a.data instanceof u) {
                        var f = new FileReader;
                        return f.onload = function() {
                            var a = f.result.split(",")[1];
                            d(e + a)
                        }
                        ,
                        f.readAsDataURL(a.data)
                    }
                    var g;
                    try {
                        g = String.fromCharCode.apply(null, new Uint8Array(a.data))
                    } catch (b) {
                        for (var h = new Uint8Array(a.data), i = new Array(h.length), j = 0; j < h.length; j++)
                            i[j] = h[j];
                        g = String.fromCharCode.apply(null, i)
                    }
                    return e += b.btoa(g),
                    d(e)
                }
                ,
                c.decodePacket = function(a, b, d) {
                    if ("string" == typeof a || void 0 === a) {
                        if ("b" == a.charAt(0))
                            return c.decodeBase64Packet(a.substr(1), b);
                        if (d)
                            try {
                                a = n.decode(a)
                            } catch (a) {
                                return t
                            }
                        var e = a.charAt(0);
                        return Number(e) == e && s[e] ? a.length > 1 ? {
                            type: s[e],
                            data: a.substring(1)
                        } : {
                            type: s[e]
                        } : t
                    }
                    var f = new Uint8Array(a)
                      , e = f[0]
                      , g = k(a, 1);
                    return u && "blob" === b && (g = new u([g])),
                    {
                        type: s[e],
                        data: g
                    }
                }
                ,
                c.decodeBase64Packet = function(a, c) {
                    var d = s[a.charAt(0)];
                    if (!b.ArrayBuffer)
                        return {
                            type: d,
                            data: {
                                base64: !0,
                                data: a.substr(1)
                            }
                        };
                    var e = l.decode(a.substr(1));
                    return "blob" === c && u && (e = new u([e])),
                    {
                        type: d,
                        data: e
                    }
                }
                ,
                c.encodePayload = function(a, b, d) {
                    function e(a) {
                        return a.length + ":" + a
                    }
                    function f(a, d) {
                        c.encodePacket(a, !!g && b, !0, function(a) {
                            d(null, e(a))
                        })
                    }
                    "function" == typeof b && (d = b,
                    b = null);
                    var g = j(a);
                    return b && g ? u && !q ? c.encodePayloadAsBlob(a, d) : c.encodePayloadAsArrayBuffer(a, d) : a.length ? void h(a, f, function(a, b) {
                        return d(b.join(""))
                    }) : d("0:")
                }
                ,
                c.decodePayload = function(a, b, d) {
                    if ("string" != typeof a)
                        return c.decodePayloadAsBinary(a, b, d);
                    "function" == typeof b && (d = b,
                    b = null);
                    var e;
                    if ("" == a)
                        return d(t, 0, 1);
                    for (var f, g, h = "", i = 0, j = a.length; j > i; i++) {
                        var k = a.charAt(i);
                        if (":" != k)
                            h += k;
                        else {
                            if ("" == h || h != (f = Number(h)))
                                return d(t, 0, 1);
                            if (g = a.substr(i + 1, f),
                            h != g.length)
                                return d(t, 0, 1);
                            if (g.length) {
                                if (e = c.decodePacket(g, b, !0),
                                t.type == e.type && t.data == e.data)
                                    return d(t, 0, 1);
                                if (!1 === d(e, i + f, j))
                                    return
                            }
                            i += f,
                            h = ""
                        }
                    }
                    return "" != h ? d(t, 0, 1) : void 0
                }
                ,
                c.encodePayloadAsArrayBuffer = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0, function(a) {
                            return b(null, a)
                        })
                    }
                    return a.length ? void h(a, d, function(a, c) {
                        var d = c.reduce(function(a, b) {
                            var c;
                            return c = "string" == typeof b ? b.length : b.byteLength,
                            a + c.toString().length + c + 2
                        }, 0)
                          , e = new Uint8Array(d)
                          , f = 0;
                        return c.forEach(function(a) {
                            var b = "string" == typeof a
                              , c = a;
                            if (b) {
                                for (var d = new Uint8Array(a.length), g = 0; g < a.length; g++)
                                    d[g] = a.charCodeAt(g);
                                c = d.buffer
                            }
                            e[f++] = b ? 0 : 1;
                            for (var h = c.byteLength.toString(), g = 0; g < h.length; g++)
                                e[f++] = parseInt(h[g]);
                            e[f++] = 255;
                            for (var d = new Uint8Array(c), g = 0; g < d.length; g++)
                                e[f++] = d[g]
                        }),
                        b(e.buffer)
                    }) : b(new ArrayBuffer(0))
                }
                ,
                c.encodePayloadAsBlob = function(a, b) {
                    function d(a, b) {
                        c.encodePacket(a, !0, !0, function(a) {
                            var c = new Uint8Array(1);
                            if (c[0] = 1,
                            "string" == typeof a) {
                                for (var d = new Uint8Array(a.length), e = 0; e < a.length; e++)
                                    d[e] = a.charCodeAt(e);
                                a = d.buffer,
                                c[0] = 0
                            }
                            for (var f = a instanceof ArrayBuffer ? a.byteLength : a.size, g = f.toString(), h = new Uint8Array(g.length + 1), e = 0; e < g.length; e++)
                                h[e] = parseInt(g[e]);
                            if (h[g.length] = 255,
                            u) {
                                var i = new u([c.buffer, h.buffer, a]);
                                b(null, i)
                            }
                        })
                    }
                    h(a, d, function(a, c) {
                        return b(new u(c))
                    })
                }
                ,
                c.decodePayloadAsBinary = function(a, b, d) {
                    "function" == typeof b && (d = b,
                    b = null);
                    for (var e = a, f = [], g = !1; e.byteLength > 0; ) {
                        for (var h = new Uint8Array(e), i = 0 === h[0], j = "", l = 1; 255 != h[l]; l++) {
                            if (j.length > 310) {
                                g = !0;
                                break
                            }
                            j += h[l]
                        }
                        if (g)
                            return d(t, 0, 1);
                        e = k(e, 2 + j.length),
                        j = parseInt(j);
                        var m = k(e, 0, j);
                        if (i)
                            try {
                                m = String.fromCharCode.apply(null, new Uint8Array(m))
                            } catch (a) {
                                var n = new Uint8Array(m);
                                m = "";
                                for (var l = 0; l < n.length; l++)
                                    m += String.fromCharCode(n[l])
                            }
                        f.push(m),
                        e = k(e, j)
                    }
                    var o = f.length;
                    f.forEach(function(a, e) {
                        d(c.decodePacket(a, b, !0), e, o)
                    })
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./keys": 26,
            after: 27,
            "arraybuffer.slice": 28,
            "base64-arraybuffer": 29,
            blob: 30,
            "has-binary": 31,
            utf8: 33
        }],
        26: [function(a, b) {
            b.exports = Object.keys || function(a) {
                var b = []
                  , c = Object.prototype.hasOwnProperty;
                for (var d in a)
                    c.call(a, d) && b.push(d);
                return b
            }
        }
        , {}],
        27: [function(a, b) {
            function c(a, b, c) {
                function e(a, d) {
                    if (e.count <= 0)
                        throw new Error("after called too many times");
                    --e.count,
                    a ? (f = !0,
                    b(a),
                    b = c) : 0 !== e.count || f || b(null, d)
                }
                var f = !1;
                return c = c || d,
                e.count = a,
                0 === a ? b() : e
            }
            function d() {}
            b.exports = c
        }
        , {}],
        28: [function(a, b) {
            b.exports = function(a, b, c) {
                var d = a.byteLength;
                if (b = b || 0,
                c = c || d,
                a.slice)
                    return a.slice(b, c);
                if (0 > b && (b += d),
                0 > c && (c += d),
                c > d && (c = d),
                b >= d || b >= c || 0 === d)
                    return new ArrayBuffer(0);
                for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = b, h = 0; c > g; g++,
                h++)
                    f[h] = e[g];
                return f.buffer
            }
        }
        , {}],
        29: [function(a, b, c) {
            !function(a) {
                "use strict";
                c.encode = function(b) {
                    var c, d = new Uint8Array(b), e = d.length, f = "";
                    for (c = 0; e > c; c += 3)
                        f += a[d[c] >> 2],
                        f += a[(3 & d[c]) << 4 | d[c + 1] >> 4],
                        f += a[(15 & d[c + 1]) << 2 | d[c + 2] >> 6],
                        f += a[63 & d[c + 2]];
                    return e % 3 == 2 ? f = f.substring(0, f.length - 1) + "=" : e % 3 == 1 && (f = f.substring(0, f.length - 2) + "=="),
                    f
                }
                ,
                c.decode = function(b) {
                    var c, d, e, f, g, h = .75 * b.length, i = b.length, j = 0;
                    "=" === b[b.length - 1] && (h--,
                    "=" === b[b.length - 2] && h--);
                    var k = new ArrayBuffer(h)
                      , l = new Uint8Array(k);
                    for (c = 0; i > c; c += 4)
                        d = a.indexOf(b[c]),
                        e = a.indexOf(b[c + 1]),
                        f = a.indexOf(b[c + 2]),
                        g = a.indexOf(b[c + 3]),
                        l[j++] = d << 2 | e >> 4,
                        l[j++] = (15 & e) << 4 | f >> 2,
                        l[j++] = (3 & f) << 6 | 63 & g;
                    return k
                }
            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
        }
        , {}],
        30: [function(a, b) {
            (function(a) {
                function c(a, b) {
                    b = b || {};
                    for (var c = new d, e = 0; e < a.length; e++)
                        c.append(a[e]);
                    return b.type ? c.getBlob(b.type) : c.getBlob()
                }
                var d = a.BlobBuilder || a.WebKitBlobBuilder || a.MSBlobBuilder || a.MozBlobBuilder
                  , e = function() {
                    try {
                        return 2 == new Blob(["hi"]).size
                    } catch (a) {
                        return !1
                    }
                }()
                  , f = d && d.prototype.append && d.prototype.getBlob;
                b.exports = function() {
                    return e ? a.Blob : f ? c : void 0
                }()
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        31: [function(a, b) {
            (function(c) {
                function d(a) {
                    function b(a) {
                        if (!a)
                            return !1;
                        if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                            return !0;
                        if (e(a)) {
                            for (var d = 0; d < a.length; d++)
                                if (b(a[d]))
                                    return !0
                        } else if (a && "object" == typeof a) {
                            a.toJSON && (a = a.toJSON());
                            for (var f in a)
                                if (a.hasOwnProperty(f) && b(a[f]))
                                    return !0
                        }
                        return !1
                    }
                    return b(a)
                }
                var e = a("isarray");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 32
        }],
        32: [function(a, b) {
            b.exports = Array.isArray || function(a) {
                return "[object Array]" == Object.prototype.toString.call(a)
            }
        }
        , {}],
        33: [function(b, c, d) {
            (function(b) {
                !function(e) {
                    function f(a) {
                        for (var b, c, d = [], e = 0, f = a.length; f > e; )
                            b = a.charCodeAt(e++),
                            b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++),
                            56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b),
                            e--)) : d.push(b);
                        return d
                    }
                    function g(a) {
                        for (var b, c = a.length, d = -1, e = ""; ++d < c; )
                            b = a[d],
                            b > 65535 && (b -= 65536,
                            e += t(b >>> 10 & 1023 | 55296),
                            b = 56320 | 1023 & b),
                            e += t(b);
                        return e
                    }
                    function h(a, b) {
                        return t(a >> b & 63 | 128)
                    }
                    function i(a) {
                        if (0 == (4294967168 & a))
                            return t(a);
                        var b = "";
                        return 0 == (4294965248 & a) ? b = t(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (b = t(a >> 12 & 15 | 224),
                        b += h(a, 6)) : 0 == (4292870144 & a) && (b = t(a >> 18 & 7 | 240),
                        b += h(a, 12),
                        b += h(a, 6)),
                        b += t(63 & a | 128)
                    }
                    function j(a) {
                        for (var b, c = f(a), d = c.length, e = -1, g = ""; ++e < d; )
                            b = c[e],
                            g += i(b);
                        return g
                    }
                    function k() {
                        if (s >= r)
                            throw Error("Invalid byte index");
                        var a = 255 & q[s];
                        if (s++,
                        128 == (192 & a))
                            return 63 & a;
                        throw Error("Invalid continuation byte")
                    }
                    function l() {
                        var a, b, c, d, e;
                        if (s > r)
                            throw Error("Invalid byte index");
                        if (s == r)
                            return !1;
                        if (a = 255 & q[s],
                        s++,
                        0 == (128 & a))
                            return a;
                        if (192 == (224 & a)) {
                            var b = k();
                            if ((e = (31 & a) << 6 | b) >= 128)
                                return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & a)) {
                            if (b = k(),
                            c = k(),
                            (e = (15 & a) << 12 | b << 6 | c) >= 2048)
                                return e;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & a) && (b = k(),
                        c = k(),
                        d = k(),
                        (e = (15 & a) << 18 | b << 12 | c << 6 | d) >= 65536 && 1114111 >= e))
                            return e;
                        throw Error("Invalid UTF-8 detected")
                    }
                    function m(a) {
                        q = f(a),
                        r = q.length,
                        s = 0;
                        for (var b, c = []; !1 !== (b = l()); )
                            c.push(b);
                        return g(c)
                    }
                    var n = "object" == typeof d && d
                      , o = "object" == typeof c && c && c.exports == n && c
                      , p = "object" == typeof b && b;
                    (p.global === p || p.window === p) && (e = p);
                    var q, r, s, t = String.fromCharCode, u = {
                        version: "2.0.0",
                        encode: j,
                        decode: m
                    };
                    if ("function" == typeof a && "object" == typeof a.amd && a.amd)
                        a(function() {
                            return u
                        });
                    else if (n && !n.nodeType)
                        if (o)
                            o.exports = u;
                        else {
                            var v = {}
                              , w = v.hasOwnProperty;
                            for (var x in u)
                                w.call(u, x) && (n[x] = u[x])
                        }
                    else
                        e.utf8 = u
                }(this)
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        34: [function(a, b) {
            (function(a) {
                var c = /^[\],:{}\s]*$/
                  , d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                  , e = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                  , f = /(?:^|:|,)(?:\s*\[)+/g
                  , g = /^\s+/
                  , h = /\s+$/;
                b.exports = function(b) {
                    return "string" == typeof b && b ? (b = b.replace(g, "").replace(h, ""),
                    a.JSON && JSON.parse ? JSON.parse(b) : c.test(b.replace(d, "@").replace(e, "]").replace(f, "")) ? new Function("return " + b)() : void 0) : null
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        35: [function(a, b, c) {
            c.encode = function(a) {
                var b = "";
                for (var c in a)
                    a.hasOwnProperty(c) && (b.length && (b += "&"),
                    b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                return b
            }
            ,
            c.decode = function(a) {
                for (var b = {}, c = a.split("&"), d = 0, e = c.length; e > d; d++) {
                    var f = c[d].split("=");
                    b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
                }
                return b
            }
        }
        , {}],
        36: [function(a, b) {
            var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                var b = a
                  , e = a.indexOf("[")
                  , f = a.indexOf("]");
                -1 != e && -1 != f && (a = a.substring(0, e) + a.substring(e, f).replace(/:/g, ";") + a.substring(f, a.length));
                for (var g = c.exec(a || ""), h = {}, i = 14; i--; )
                    h[d[i]] = g[i] || "";
                return -1 != e && -1 != f && (h.source = b,
                h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"),
                h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                h.ipv6uri = !0),
                h
            }
        }
        , {}],
        37: [function(a, b) {
            function c(a, b) {
                return b ? new e(a,b) : new e(a)
            }
            var d = function() {
                return this
            }()
              , e = d.WebSocket || d.MozWebSocket;
            b.exports = e ? c : null,
            e && (c.prototype = e.prototype)
        }
        , {}],
        38: [function(a, b) {
            (function(c) {
                function d(a) {
                    function b(a) {
                        if (!a)
                            return !1;
                        if (c.Buffer && c.Buffer.isBuffer(a) || c.ArrayBuffer && a instanceof ArrayBuffer || c.Blob && a instanceof Blob || c.File && a instanceof File)
                            return !0;
                        if (e(a)) {
                            for (var d = 0; d < a.length; d++)
                                if (b(a[d]))
                                    return !0
                        } else if (a && "object" == typeof a) {
                            a.toJSON && (a = a.toJSON());
                            for (var f in a)
                                if (Object.prototype.hasOwnProperty.call(a, f) && b(a[f]))
                                    return !0
                        }
                        return !1
                    }
                    return b(a)
                }
                var e = a("isarray");
                b.exports = d
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            isarray: 39
        }],
        39: [function(a, b) {
            b.exports = a(32)
        }
        , {}],
        40: [function(a, b) {
            var c = a("global");
            try {
                b.exports = "XMLHttpRequest"in c && "withCredentials"in new c.XMLHttpRequest
            } catch (a) {
                b.exports = !1
            }
        }
        , {
            global: 41
        }],
        41: [function(a, b) {
            b.exports = function() {
                return this
            }()
        }
        , {}],
        42: [function(a, b) {
            var c = [].indexOf;
            b.exports = function(a, b) {
                if (c)
                    return a.indexOf(b);
                for (var d = 0; d < a.length; ++d)
                    if (a[d] === b)
                        return d;
                return -1
            }
        }
        , {}],
        43: [function(a, b, c) {
            var d = Object.prototype.hasOwnProperty;
            c.keys = Object.keys || function(a) {
                var b = [];
                for (var c in a)
                    d.call(a, c) && b.push(c);
                return b
            }
            ,
            c.values = function(a) {
                var b = [];
                for (var c in a)
                    d.call(a, c) && b.push(a[c]);
                return b
            }
            ,
            c.merge = function(a, b) {
                for (var c in b)
                    d.call(b, c) && (a[c] = b[c]);
                return a
            }
            ,
            c.length = function(a) {
                return c.keys(a).length
            }
            ,
            c.isEmpty = function(a) {
                return 0 == c.length(a)
            }
        }
        , {}],
        44: [function(a, b) {
            var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              , d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            b.exports = function(a) {
                for (var b = c.exec(a || ""), e = {}, f = 14; f--; )
                    e[d[f]] = b[f] || "";
                return e
            }
        }
        , {}],
        45: [function(a, b, c) {
            (function(b) {
                var d = a("isarray")
                  , e = a("./is-buffer");
                c.deconstructPacket = function(a) {
                    function b(a) {
                        if (!a)
                            return a;
                        if (e(a)) {
                            var f = {
                                _placeholder: !0,
                                num: c.length
                            };
                            return c.push(a),
                            f
                        }
                        if (d(a)) {
                            for (var g = new Array(a.length), h = 0; h < a.length; h++)
                                g[h] = b(a[h]);
                            return g
                        }
                        if ("object" == typeof a && !(a instanceof Date)) {
                            var g = {};
                            for (var i in a)
                                g[i] = b(a[i]);
                            return g
                        }
                        return a
                    }
                    var c = []
                      , f = a.data
                      , g = a;
                    return g.data = b(f),
                    g.attachments = c.length,
                    {
                        packet: g,
                        buffers: c
                    }
                }
                ,
                c.reconstructPacket = function(a, b) {
                    function c(a) {
                        if (a && a._placeholder) {
                            return b[a.num]
                        }
                        if (d(a)) {
                            for (var e = 0; e < a.length; e++)
                                a[e] = c(a[e]);
                            return a
                        }
                        if (a && "object" == typeof a) {
                            for (var f in a)
                                a[f] = c(a[f]);
                            return a
                        }
                        return a
                    }
                    return a.data = c(a.data),
                    a.attachments = void 0,
                    a
                }
                ,
                c.removeBlobs = function(a, c) {
                    function f(a, i, j) {
                        if (!a)
                            return a;
                        if (b.Blob && a instanceof Blob || b.File && a instanceof File) {
                            g++;
                            var k = new FileReader;
                            k.onload = function() {
                                j ? j[i] = this.result : h = this.result,
                                --g || c(h)
                            }
                            ,
                            k.readAsArrayBuffer(a)
                        } else if (d(a))
                            for (var l = 0; l < a.length; l++)
                                f(a[l], l, a);
                        else if (a && "object" == typeof a && !e(a))
                            for (var m in a)
                                f(a[m], m, a)
                    }
                    var g = 0
                      , h = a;
                    f(h),
                    g || c(h)
                }
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {
            "./is-buffer": 47,
            isarray: 48
        }],
        46: [function(a, b, c) {
            function d() {}
            function e(a) {
                var b = ""
                  , d = !1;
                return b += a.type,
                (c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type) && (b += a.attachments,
                b += "-"),
                a.nsp && "/" != a.nsp && (d = !0,
                b += a.nsp),
                null != a.id && (d && (b += ",",
                d = !1),
                b += a.id),
                null != a.data && (d && (b += ","),
                b += l.stringify(a.data)),
                k("encoded %j as %s", a, b),
                b
            }
            function f(a, b) {
                function c(a) {
                    var c = n.deconstructPacket(a)
                      , d = e(c.packet)
                      , f = c.buffers;
                    f.unshift(d),
                    b(f)
                }
                n.removeBlobs(a, c)
            }
            function g() {
                this.reconstructor = null
            }
            function h(a) {
                var b = {}
                  , d = 0;
                if (b.type = Number(a.charAt(0)),
                null == c.types[b.type])
                    return j();
                if (c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type) {
                    for (var e = ""; "-" != a.charAt(++d) && (e += a.charAt(d),
                    d != a.length); )
                        ;
                    if (e != Number(e) || "-" != a.charAt(d))
                        throw new Error("Illegal attachments");
                    b.attachments = Number(e)
                }
                if ("/" == a.charAt(d + 1))
                    for (b.nsp = ""; ++d; ) {
                        var f = a.charAt(d);
                        if ("," == f)
                            break;
                        if (b.nsp += f,
                        d == a.length)
                            break
                    }
                else
                    b.nsp = "/";
                var g = a.charAt(d + 1);
                if ("" !== g && Number(g) == g) {
                    for (b.id = ""; ++d; ) {
                        var f = a.charAt(d);
                        if (null == f || Number(f) != f) {
                            --d;
                            break
                        }
                        if (b.id += a.charAt(d),
                        d == a.length)
                            break
                    }
                    b.id = Number(b.id)
                }
                if (a.charAt(++d))
                    try {
                        b.data = l.parse(a.substr(d))
                    } catch (a) {
                        return j()
                    }
                return k("decoded %s as %j", a, b),
                b
            }
            function i(a) {
                this.reconPack = a,
                this.buffers = []
            }
            function j() {
                return {
                    type: c.ERROR,
                    data: "parser error"
                }
            }
            var k = a("debug")("socket.io-parser")
              , l = a("json3")
              , m = (a("isarray"),
            a("component-emitter"))
              , n = a("./binary")
              , o = a("./is-buffer");
            c.protocol = 4,
            c.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"],
            c.CONNECT = 0,
            c.DISCONNECT = 1,
            c.EVENT = 2,
            c.ACK = 3,
            c.ERROR = 4,
            c.BINARY_EVENT = 5,
            c.BINARY_ACK = 6,
            c.Encoder = d,
            c.Decoder = g,
            d.prototype.encode = function(a, b) {
                if (k("encoding packet %j", a),
                c.BINARY_EVENT == a.type || c.BINARY_ACK == a.type)
                    f(a, b);
                else {
                    b([e(a)])
                }
            }
            ,
            m(g.prototype),
            g.prototype.add = function(a) {
                var b;
                if ("string" == typeof a)
                    b = h(a),
                    c.BINARY_EVENT == b.type || c.BINARY_ACK == b.type ? (this.reconstructor = new i(b),
                    0 === this.reconstructor.reconPack.attachments && this.emit("decoded", b)) : this.emit("decoded", b);
                else {
                    if (!o(a) && !a.base64)
                        throw new Error("Unknown type: " + a);
                    if (!this.reconstructor)
                        throw new Error("got binary data when not reconstructing a packet");
                    (b = this.reconstructor.takeBinaryData(a)) && (this.reconstructor = null,
                    this.emit("decoded", b))
                }
            }
            ,
            g.prototype.destroy = function() {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }
            ,
            i.prototype.takeBinaryData = function(a) {
                if (this.buffers.push(a),
                this.buffers.length == this.reconPack.attachments) {
                    var b = n.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(),
                    b
                }
                return null
            }
            ,
            i.prototype.finishedReconstruction = function() {
                this.reconPack = null,
                this.buffers = []
            }
        }
        , {
            "./binary": 45,
            "./is-buffer": 47,
            "component-emitter": 9,
            debug: 10,
            isarray: 48,
            json3: 49
        }],
        47: [function(a, b) {
            (function(a) {
                function c(b) {
                    return a.Buffer && a.Buffer.isBuffer(b) || a.ArrayBuffer && b instanceof ArrayBuffer
                }
                b.exports = c
            }
            ).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        , {}],
        48: [function(a, b) {
            b.exports = a(32)
        }
        , {}],
        49: [function(b, c, d) {
            !function(b) {
                function c(a) {
                    if (c[a] !== g)
                        return c[a];
                    var b;
                    if ("bug-string-char-index" == a)
                        b = "a" != "a"[0];
                    else if ("json" == a)
                        b = c("json-stringify") && c("json-parse");
                    else {
                        var d, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == a) {
                            var f = k.stringify
                              , i = "function" == typeof f && l;
                            if (i) {
                                (d = function() {
                                    return 1
                                }
                                ).toJSON = d;
                                try {
                                    i = "0" === f(0) && "0" === f(new Number) && '""' == f(new String) && f(h) === g && f(g) === g && f() === g && "1" === f(d) && "[1]" == f([d]) && "[null]" == f([g]) && "null" == f(null) && "[null,null,null]" == f([g, h, null]) && f({
                                        a: [d, !0, !1, null, "\0\b\n\f\r\t"]
                                    }) == e && "1" === f(null, d) && "[\n 1,\n 2\n]" == f([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == f(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == f(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == f(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == f(new Date(-1))
                                } catch (a) {
                                    i = !1
                                }
                            }
                            b = i
                        }
                        if ("json-parse" == a) {
                            var j = k.parse;
                            if ("function" == typeof j)
                                try {
                                    if (0 === j("0") && !j(!1)) {
                                        d = j(e);
                                        var m = 5 == d.a.length && 1 === d.a[0];
                                        if (m) {
                                            try {
                                                m = !j('"\t"')
                                            } catch (a) {}
                                            if (m)
                                                try {
                                                    m = 1 !== j("01")
                                                } catch (a) {}
                                            if (m)
                                                try {
                                                    m = 1 !== j("1.")
                                                } catch (a) {}
                                        }
                                    }
                                } catch (a) {
                                    m = !1
                                }
                            b = m
                        }
                    }
                    return c[a] = !!b
                }
                var e, f, g, h = {}.toString, i = "function" == typeof a && a.amd, j = "object" == typeof JSON && JSON, k = "object" == typeof d && d && !d.nodeType && d;
                k && j ? (k.stringify = j.stringify,
                k.parse = j.parse) : k = b.JSON = j || {};
                var l = new Date(-0xc782b5b800cec);
                try {
                    l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
                } catch (a) {}
                if (!c("json")) {
                    var m = "[object Function]"
                      , n = "[object Date]"
                      , o = "[object Number]"
                      , p = "[object String]"
                      , q = "[object Array]"
                      , r = "[object Boolean]"
                      , s = c("bug-string-char-index");
                    if (!l)
                        var t = Math.floor
                          , u = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                          , v = function(a, b) {
                            return u[b] + 365 * (a - 1970) + t((a - 1969 + (b = +(b > 1))) / 4) - t((a - 1901 + b) / 100) + t((a - 1601 + b) / 400)
                        };
                    (e = {}.hasOwnProperty) || (e = function(a) {
                        var b, c = {};
                        return (c.__proto__ = null,
                        c.__proto__ = {
                            toString: 1
                        },
                        c).toString != h ? e = function(a) {
                            var b = this.__proto__
                              , c = a in (this.__proto__ = null,
                            this);
                            return this.__proto__ = b,
                            c
                        }
                        : (b = c.constructor,
                        e = function(a) {
                            var c = (this.constructor || b).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        }
                        ),
                        c = null,
                        e.call(this, a)
                    }
                    );
                    var w = {
                        boolean: 1,
                        number: 1,
                        string: 1,
                        undefined: 1
                    }
                      , x = function(a, b) {
                        var c = typeof a[b];
                        return "object" == c ? !!a[b] : !w[c]
                    };
                    if (f = function(a, b) {
                        var c, d, g, i = 0;
                        (c = function() {
                            this.valueOf = 0
                        }
                        ).prototype.valueOf = 0,
                        d = new c;
                        for (g in d)
                            e.call(d, g) && i++;
                        return c = d = null,
                        i ? f = 2 == i ? function(a, b) {
                            var c, d = {}, f = h.call(a) == m;
                            for (c in a)
                                f && "prototype" == c || e.call(d, c) || !(d[c] = 1) || !e.call(a, c) || b(c)
                        }
                        : function(a, b) {
                            var c, d, f = h.call(a) == m;
                            for (c in a)
                                f && "prototype" == c || !e.call(a, c) || (d = "constructor" === c) || b(c);
                            (d || e.call(a, c = "constructor")) && b(c)
                        }
                        : (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                        f = function(a, b) {
                            var c, f, g = h.call(a) == m, i = !g && "function" != typeof a.constructor && x(a, "hasOwnProperty") ? a.hasOwnProperty : e;
                            for (c in a)
                                g && "prototype" == c || !i.call(a, c) || b(c);
                            for (f = d.length; c = d[--f]; i.call(a, c) && b(c))
                                ;
                        }
                        ),
                        f(a, b)
                    }
                    ,
                    !c("json-stringify")) {
                        var y = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }
                          , z = "000000"
                          , A = function(a, b) {
                            return (z + (b || 0)).slice(-a)
                        }
                          , B = "\\u00"
                          , C = function(a) {
                            var b, c = '"', d = 0, e = a.length, f = e > 10 && s;
                            for (f && (b = a.split("")); e > d; d++) {
                                var g = a.charCodeAt(d);
                                switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    c += y[g];
                                    break;
                                default:
                                    if (32 > g) {
                                        c += B + A(2, g.toString(16));
                                        break
                                    }
                                    c += f ? b[d] : s ? a.charAt(d) : a[d]
                                }
                            }
                            return c + '"'
                        }
                          , D = function(a, b, c, d, i, j, k) {
                            var l, m, s, u, w, x, y, z, B, E, F, G, H, I, J, K;
                            try {
                                l = b[a]
                            } catch (a) {}
                            if ("object" == typeof l && l)
                                if ((m = h.call(l)) != n || e.call(l, "toJSON"))
                                    "function" == typeof l.toJSON && (m != o && m != p && m != q || e.call(l, "toJSON")) && (l = l.toJSON(a));
                                else if (l > -1 / 0 && 1 / 0 > l) {
                                    if (v) {
                                        for (w = t(l / 864e5),
                                        s = t(w / 365.2425) + 1970 - 1; v(s + 1, 0) <= w; s++)
                                            ;
                                        for (u = t((w - v(s, 0)) / 30.42); v(s, u + 1) <= w; u++)
                                            ;
                                        w = 1 + w - v(s, u),
                                        x = (l % 864e5 + 864e5) % 864e5,
                                        y = t(x / 36e5) % 24,
                                        z = t(x / 6e4) % 60,
                                        B = t(x / 1e3) % 60,
                                        E = x % 1e3
                                    } else
                                        s = l.getUTCFullYear(),
                                        u = l.getUTCMonth(),
                                        w = l.getUTCDate(),
                                        y = l.getUTCHours(),
                                        z = l.getUTCMinutes(),
                                        B = l.getUTCSeconds(),
                                        E = l.getUTCMilliseconds();
                                    l = (0 >= s || s >= 1e4 ? (0 > s ? "-" : "+") + A(6, 0 > s ? -s : s) : A(4, s)) + "-" + A(2, u + 1) + "-" + A(2, w) + "T" + A(2, y) + ":" + A(2, z) + ":" + A(2, B) + "." + A(3, E) + "Z"
                                } else
                                    l = null;
                            if (c && (l = c.call(b, a, l)),
                            null === l)
                                return "null";
                            if ((m = h.call(l)) == r)
                                return "" + l;
                            if (m == o)
                                return l > -1 / 0 && 1 / 0 > l ? "" + l : "null";
                            if (m == p)
                                return C("" + l);
                            if ("object" == typeof l) {
                                for (I = k.length; I--; )
                                    if (k[I] === l)
                                        throw TypeError();
                                if (k.push(l),
                                F = [],
                                J = j,
                                j += i,
                                m == q) {
                                    for (H = 0,
                                    I = l.length; I > H; H++)
                                        G = D(H, l, c, d, i, j, k),
                                        F.push(G === g ? "null" : G);
                                    K = F.length ? i ? "[\n" + j + F.join(",\n" + j) + "\n" + J + "]" : "[" + F.join(",") + "]" : "[]"
                                } else
                                    f(d || l, function(a) {
                                        var b = D(a, l, c, d, i, j, k);
                                        b !== g && F.push(C(a) + ":" + (i ? " " : "") + b)
                                    }),
                                    K = F.length ? i ? "{\n" + j + F.join(",\n" + j) + "\n" + J + "}" : "{" + F.join(",") + "}" : "{}";
                                return k.pop(),
                                K
                            }
                        };
                        k.stringify = function(a, b, c) {
                            var d, e, f, g;
                            if ("function" == typeof b || "object" == typeof b && b)
                                if ((g = h.call(b)) == m)
                                    e = b;
                                else if (g == q) {
                                    f = {};
                                    for (var i, j = 0, k = b.length; k > j; i = b[j++],
                                    ((g = h.call(i)) == p || g == o) && (f[i] = 1))
                                        ;
                                }
                            if (c)
                                if ((g = h.call(c)) == o) {
                                    if ((c -= c % 1) > 0)
                                        for (d = "",
                                        c > 10 && (c = 10); d.length < c; d += " ")
                                            ;
                                } else
                                    g == p && (d = c.length <= 10 ? c : c.slice(0, 10));
                            return D("", (i = {},
                            i[""] = a,
                            i), e, f, d, "", [])
                        }
                    }
                    if (!c("json-parse")) {
                        var E, F, G = String.fromCharCode, H = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, I = function() {
                            throw E = F = null,
                            SyntaxError()
                        }, J = function() {
                            for (var a, b, c, d, e, f = F, g = f.length; g > E; )
                                switch (e = f.charCodeAt(E)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    E++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return a = s ? f.charAt(E) : f[E],
                                    E++,
                                    a;
                                case 34:
                                    for (a = "@",
                                    E++; g > E; )
                                        if (32 > (e = f.charCodeAt(E)))
                                            I();
                                        else if (92 == e)
                                            switch (e = f.charCodeAt(++E)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                a += H[e],
                                                E++;
                                                break;
                                            case 117:
                                                for (b = ++E,
                                                c = E + 4; c > E; E++)
                                                    (e = f.charCodeAt(E)) >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || I();
                                                a += G("0x" + f.slice(b, E));
                                                break;
                                            default:
                                                I()
                                            }
                                        else {
                                            if (34 == e)
                                                break;
                                            for (e = f.charCodeAt(E),
                                            b = E; e >= 32 && 92 != e && 34 != e; )
                                                e = f.charCodeAt(++E);
                                            a += f.slice(b, E)
                                        }
                                    if (34 == f.charCodeAt(E))
                                        return E++,
                                        a;
                                    I();
                                default:
                                    if (b = E,
                                    45 == e && (d = !0,
                                    e = f.charCodeAt(++E)),
                                    e >= 48 && 57 >= e) {
                                        for (48 == e && (e = f.charCodeAt(E + 1)) >= 48 && 57 >= e && I(),
                                        d = !1; g > E && (e = f.charCodeAt(E)) >= 48 && 57 >= e; E++)
                                            ;
                                        if (46 == f.charCodeAt(E)) {
                                            for (c = ++E; g > c && (e = f.charCodeAt(c)) >= 48 && 57 >= e; c++)
                                                ;
                                            c == E && I(),
                                            E = c
                                        }
                                        if (101 == (e = f.charCodeAt(E)) || 69 == e) {
                                            for (e = f.charCodeAt(++E),
                                            (43 == e || 45 == e) && E++,
                                            c = E; g > c && (e = f.charCodeAt(c)) >= 48 && 57 >= e; c++)
                                                ;
                                            c == E && I(),
                                            E = c
                                        }
                                        return +f.slice(b, E)
                                    }
                                    if (d && I(),
                                    "true" == f.slice(E, E + 4))
                                        return E += 4,
                                        !0;
                                    if ("false" == f.slice(E, E + 5))
                                        return E += 5,
                                        !1;
                                    if ("null" == f.slice(E, E + 4))
                                        return E += 4,
                                        null;
                                    I()
                                }
                            return "$"
                        }, K = function(a) {
                            var b, c;
                            if ("$" == a && I(),
                            "string" == typeof a) {
                                if ("@" == (s ? a.charAt(0) : a[0]))
                                    return a.slice(1);
                                if ("[" == a) {
                                    for (b = []; "]" != (a = J()); c || (c = !0))
                                        c && ("," == a ? "]" == (a = J()) && I() : I()),
                                        "," == a && I(),
                                        b.push(K(a));
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {}; "}" != (a = J()); c || (c = !0))
                                        c && ("," == a ? "}" == (a = J()) && I() : I()),
                                        ("," == a || "string" != typeof a || "@" != (s ? a.charAt(0) : a[0]) || ":" != J()) && I(),
                                        b[a.slice(1)] = K(J());
                                    return b
                                }
                                I()
                            }
                            return a
                        }, L = function(a, b, c) {
                            var d = M(a, b, c);
                            d === g ? delete a[b] : a[b] = d
                        }, M = function(a, b, c) {
                            var d, e = a[b];
                            if ("object" == typeof e && e)
                                if (h.call(e) == q)
                                    for (d = e.length; d--; )
                                        L(e, d, c);
                                else
                                    f(e, function(a) {
                                        L(e, a, c)
                                    });
                            return c.call(a, b, e)
                        };
                        k.parse = function(a, b) {
                            var c, d;
                            return E = 0,
                            F = "" + a,
                            c = K(J()),
                            "$" != J() && I(),
                            E = F = null,
                            b && h.call(b) == m ? M((d = {},
                            d[""] = c,
                            d), "", b) : c
                        }
                    }
                }
                i && a(function() {
                    return k
                })
            }(this)
        }
        , {}],
        50: [function(a, b) {
            function c(a, b) {
                var c = [];
                b = b || 0;
                for (var d = b || 0; d < a.length; d++)
                    c[d - b] = a[d];
                return c
            }
            b.exports = c
        }
        , {}]
    }, {}, [1])(1)
}),
GG.Utilities.ServerNameGenerator = function() {
    var a = document.location.host;
    return "http://www.gittigidiyor.com/";
}
,
GG.Utilities.getDateDiff = function(a, b) {
    var c = new Date(a)
      , d = new Date
      , e = Date.parse(d)
      , f = c - e
      , g = Math.floor(f / 1e3)
      , h = {};
    return b && (e = b,
    f = c - e,
    g = Math.floor(f / 1e3)),
    h.days = Math.floor(g / 24 / 60 / 60),
    h.hoursLeft = Math.floor(g - 86400 * h.days),
    h.hours = Math.floor(h.hoursLeft / 3600),
    h.minutesLeft = Math.floor(h.hoursLeft - 3600 * h.hours),
    h.minutes = Math.floor(h.minutesLeft / 60),
    h
}
,
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
GG.Utilities.getClientHeight = function() {
    var a = 0;
    return "number" == typeof window.innerWidth ? a = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? a = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (a = document.body.clientHeight),
    Number(a)
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
                $GG(s).html("<a href='" + w + "' ></a>"),
                void 0 != v ? $GG(s).css("background", "url(" + v + ")") : $GG(s).addClass("slider-thumbnail")
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
,
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
}(window.jQuery);
var $ = $GG;
"function" != typeof Object.create && (Object.create = function(a) {
    function b() {}
    return b.prototype = a,
    new b
}
),
function(a, b, c, d) {
    var e = {
        init: function(b, c) {
            var d = this;
            d.elem = c,
            d.$elem = a(c),
            d.imageSrc = d.$elem.data("zoom-image") ? d.$elem.data("zoom-image") : d.$elem.attr("src"),
            d.options = a.extend({}, a.fn.elevateZoom.options, b),
            d.options.tint && (d.options.lensColour = "none",
            d.options.lensOpacity = "1"),
            "inner" == d.options.zoomType && (d.options.showLens = !1),
            d.$elem.parent().removeAttr("title").removeAttr("alt"),
            d.zoomImage = d.imageSrc,
            d.refresh(1),
            a("#" + d.options.gallery + " a").click(function(b) {
                return d.options.galleryActiveClass && (a("#" + d.options.gallery + " a").removeClass(d.options.galleryActiveClass),
                a(this).addClass(d.options.galleryActiveClass)),
                b.preventDefault(),
                a(this).data("zoom-image") ? d.zoomImagePre = a(this).data("zoom-image") : d.zoomImagePre = a(this).data("image"),
                d.swaptheimage(a(this).data("image"), d.zoomImagePre),
                !1
            })
        },
        refresh: function(a) {
            var b = this;
            setTimeout(function() {
                b.fetch(b.imageSrc)
            }, a || b.options.refresh)
        },
        fetch: function(a) {
            var b = this
              , c = new Image;
            c.onload = function() {
                b.largeWidth = c.width,
                b.largeHeight = c.height,
                b.startZoom(),
                b.currentImage = b.imageSrc,
                b.options.onZoomedImageLoaded(b.$elem)
            }
            ,
            c.src = a
        },
        startZoom: function() {
            var b = this;
            if (b.nzWidth = b.$elem.width(),
            b.nzHeight = b.$elem.height(),
            b.isWindowActive = !1,
            b.isLensActive = !1,
            b.isTintActive = !1,
            b.overWindow = !1,
            b.options.imageCrossfade && (b.zoomWrap = b.$elem.wrap('<div style="height:' + b.nzHeight + "px;width:" + b.nzWidth + 'px;" class="zoomWrapper" />'),
            b.$elem.css("position", "absolute")),
            b.zoomLock = 1,
            b.scrollingLock = !1,
            b.changeBgSize = !1,
            b.currentZoomLevel = b.options.zoomLevel,
            b.nzOffset = b.$elem.offset(),
            b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth,
            b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight,
            "window" == b.options.zoomType && (b.zoomWindowStyle = "/*overflow: hidden;*/background-position: 0px 0px;text-align:center;background-color: " + String(b.options.zoomWindowBgColour) + ";width: " + String(b.options.zoomWindowWidth) + "px;margin-left: " + String(b.options.marginLeft) + "px;height: " + String(b.options.zoomWindowHeight) + "px;float: left;background-size: " + b.largeWidth / b.currentZoomLevel + "px " + b.largeHeight / b.currentZoomLevel + "px;display: none;z-index:9997;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;"),
            "inner" == b.options.zoomType) {
                var c = b.$elem.css("border-left-width");
                b.zoomWindowStyle = "/*overflow: hidden;*/margin-left: " + String(c) + ";margin-top: " + String(c) + ";background-position: 0px 0px;width: " + String(b.nzWidth) + "px;height: " + String(b.nzHeight) + "px;float: left;display: none;cursor: //st2.gittigidiyor.net/fred/framework/assets/img/core/main/loading.gif;px solid " + b.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" == b.options.zoomType && (b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? lensHeight = b.nzHeight : lensHeight = String(b.options.zoomWindowHeight / b.heightRatio),
            b.largeWidth < b.options.zoomWindowWidth ? lensWidth = b.nzWidth : lensWidth = b.options.zoomWindowWidth / b.widthRatio,
            b.lensStyle = "background-position: 0px 0px;width: " + String(b.options.zoomWindowWidth / b.widthRatio) + "px;height: " + String(b.options.zoomWindowHeight / b.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + b.options.lensOpacity + "; filter: alpha(opacity = " + 100 * b.options.lensOpacity + "); -khtml-opacity: " + b.options.lensOpacity + "; -moz-opacity:" + b.options.lensOpacity + ";  zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + b.options.lensColour + ";cursor:" + b.options.cursor + ";border: " + b.options.lensBorderSize + "px solid " + b.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"),
            b.tintStyle = "display: block;position: absolute;background-color: " + b.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + b.nzWidth + "px;height: " + b.nzHeight + "px;",
            b.lensRound = "",
            "lens" == b.options.zoomType && (b.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(b.options.borderSize) + "px solid " + b.options.borderColour + ";width:" + String(b.options.lensSize) + "px;height:" + String(b.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"),
            "round" == b.options.lensShape && (b.lensRound = "border-top-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-top-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-left-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;border-bottom-right-radius: " + String(b.options.lensSize / 2 + b.options.borderSize) + "px;"),
            b.zoomContainer = a('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute; z-index:9997; left:' + b.nzOffset.left + "px;top:" + b.nzOffset.top + "px;height:" + b.nzHeight + "px;width:" + b.nzWidth + 'px;"></div>'),
            a("body").append(b.zoomContainer),
            b.options.containLensZoom && "lens" == b.options.zoomType && b.zoomContainer.css("overflow", "hidden"),
            "inner" != b.options.zoomType && (b.zoomLens = a("<div class='zoomLens' style='" + b.lensStyle + b.lensRound + "'>&nbsp;</div>").appendTo(b.zoomContainer).click(function() {
                b.$elem.trigger("click")
            }),
            b.options.tint && (b.tintContainer = a("<div/>").addClass("tintContainer"),
            b.zoomTint = a("<div class='zoomTint' style='" + b.tintStyle + "'></div>"),
            b.zoomLens.wrap(b.tintContainer),
            b.zoomTintcss = b.zoomLens.after(b.zoomTint),
            b.zoomTintImage = a('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + b.nzWidth + "px; height: " + b.nzHeight + 'px;" src="' + b.imageSrc + '">').appendTo(b.zoomLens).click(function() {
                b.$elem.trigger("click")
            }))),
            isNaN(b.options.zoomWindowPosition) ? b.zoomWindow = a("<div style='z-index:9997;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() {
                b.$elem.trigger("click")
            }) : b.zoomWindow = a("<div style='z-index:999;left:" + b.windowOffsetLeft + "px;top:" + b.windowOffsetTop + "px;" + b.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function() {
                b.$elem.trigger("click")
            }),
            b.zoomWindowContainer = a("<div/>").addClass("zoomWindowContainer").css("width", b.options.zoomWindowWidth),
            b.zoomWindow.wrap(b.zoomWindowContainer),
            "lens" == b.options.zoomType && b.zoomLens.css({
                backgroundImage: "url('" + b.imageSrc + "')"
            }),
            "window" == b.options.zoomType && b.zoomWindow.css({
                backgroundImage: "url('" + b.imageSrc + "')"
            }),
            "inner" == b.options.zoomType && b.zoomWindow.css({
                backgroundImage: "url('" + b.imageSrc + "')"
            }),
            b.$elem.bind("touchmove", function(a) {
                a.preventDefault();
                var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                b.setPosition(c)
            }),
            b.zoomContainer.bind("touchmove", function(a) {
                "inner" == b.options.zoomType && b.showHideWindow("show"),
                a.preventDefault();
                var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                b.setPosition(c)
            }),
            b.zoomContainer.bind("touchend", function(a) {
                b.showHideWindow("hide"),
                b.options.showLens && b.showHideLens("hide"),
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            }),
            b.$elem.bind("touchend", function(a) {
                b.showHideWindow("hide"),
                b.options.showLens && b.showHideLens("hide"),
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            }),
            b.options.showLens && (b.zoomLens.bind("touchmove", function(a) {
                a.preventDefault();
                var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
                b.setPosition(c)
            }),
            b.zoomLens.bind("touchend", function(a) {
                b.showHideWindow("hide"),
                b.options.showLens && b.showHideLens("hide"),
                b.options.tint && "inner" != b.options.zoomType && b.showHideTint("hide")
            })),
            b.$elem.bind("mousemove", function(a) {
                0 == b.overWindow && b.setElements("show"),
                b.lastX === a.clientX && b.lastY === a.clientY || (b.setPosition(a),
                b.currentLoc = a),
                b.lastX = a.clientX,
                b.lastY = a.clientY
            }),
            b.zoomContainer.bind("mousemove", function(a) {
                b.zoomContainer.mouseover(function() {
                    b.zoomLens.css("cursor", "url(//st2.gittigidiyor.net/fred/framework/assets/img/core/zoomIn/zoom-cursor.png) 11 9, auto")
                }),
                0 == b.overWindow && b.setElements("show"),
                b.lastX === a.clientX && b.lastY === a.clientY || (b.setPosition(a),
                b.currentLoc = a),
                b.lastX = a.clientX,
                b.lastY = a.clientY
            }),
            "inner" != b.options.zoomType && b.zoomLens.bind("mousemove", function(a) {
                b.lastX === a.clientX && b.lastY === a.clientY || (b.setPosition(a),
                b.currentLoc = a),
                b.lastX = a.clientX,
                b.lastY = a.clientY
            }),
            b.options.tint && "inner" != b.options.zoomType && b.zoomTint.bind("mousemove", function(a) {
                b.lastX === a.clientX && b.lastY === a.clientY || (b.setPosition(a),
                b.currentLoc = a),
                b.lastX = a.clientX,
                b.lastY = a.clientY
            }),
            "inner" == b.options.zoomType && b.zoomWindow.bind("mousemove", function(a) {
                b.lastX === a.clientX && b.lastY === a.clientY || (b.setPosition(a),
                b.currentLoc = a),
                b.lastX = a.clientX,
                b.lastY = a.clientY
            }),
            b.zoomContainer.add(b.$elem).mouseenter(function() {
                0 == b.overWindow && b.setElements("show")
            }).mouseleave(function() {
                b.scrollLock || b.setElements("hide")
            }),
            "inner" != b.options.zoomType && b.zoomWindow.mouseenter(function() {
                b.overWindow = !0,
                b.setElements("hide")
            }).mouseleave(function() {
                b.overWindow = !1
            }),
            b.options.zoomLevel,
            b.options.minZoomLevel ? b.minZoomLevel = b.options.minZoomLevel : b.minZoomLevel = 2 * b.options.scrollZoomIncrement,
            b.options.scrollZoom && b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(c) {
                b.scrollLock = !0,
                clearTimeout(a.data(this, "timer")),
                a.data(this, "timer", setTimeout(function() {
                    b.scrollLock = !1
                }, 250));
                var d = c.originalEvent.wheelDelta || -1 * c.originalEvent.detail;
                return c.stopImmediatePropagation(),
                c.stopPropagation(),
                c.preventDefault(),
                d / 120 > 0 ? b.currentZoomLevel >= b.minZoomLevel && b.changeZoomLevel(b.currentZoomLevel - b.options.scrollZoomIncrement) : b.options.maxZoomLevel ? b.currentZoomLevel <= b.options.maxZoomLevel && b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement) : b.changeZoomLevel(parseFloat(b.currentZoomLevel) + b.options.scrollZoomIncrement),
                !1
            })
        },
        setElements: function(a) {
            var b = this;
            if (!b.options.zoomEnabled)
                return !1;
            "show" == a && b.isWindowSet && ("inner" == b.options.zoomType && b.showHideWindow("show"),
            "window" == b.options.zoomType && b.showHideWindow("show"),
            b.options.showLens && b.showHideLens("show"),
            b.options.tint && "inner" != b.options.zoomType && b.showHideTint("show")),
            "hide" == a && ("window" == b.options.zoomType && b.showHideWindow("hide"),
            b.options.tint || b.showHideWindow("hide"),
            b.options.showLens && b.showHideLens("hide"),
            b.options.tint && b.showHideTint("hide"))
        },
        setPosition: function(a) {
            var b = this;
            return !!b.options.zoomEnabled && (b.nzHeight = b.$elem.height(),
            b.nzWidth = b.$elem.width(),
            b.nzOffset = b.$elem.offset(),
            b.options.tint && "inner" != b.options.zoomType && (b.zoomTint.css({
                top: 0
            }),
            b.zoomTint.css({
                left: 0
            })),
            b.options.responsive && !b.options.scrollZoom && b.options.showLens && (b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? lensHeight = b.nzHeight : lensHeight = String(b.options.zoomWindowHeight / b.heightRatio),
            b.largeWidth < b.options.zoomWindowWidth ? lensWidth = b.nzWidth : lensWidth = b.options.zoomWindowWidth / b.widthRatio,
            b.widthRatio = b.largeWidth / b.nzWidth,
            b.heightRatio = b.largeHeight / b.nzHeight,
            "lens" != b.options.zoomType && (b.nzHeight < b.options.zoomWindowWidth / b.widthRatio ? lensHeight = b.nzHeight : lensHeight = String(b.options.zoomWindowHeight / b.heightRatio),
            b.options.zoomWindowWidth < b.options.zoomWindowWidth ? lensWidth = b.nzWidth : lensWidth = b.options.zoomWindowWidth / b.widthRatio,
            b.zoomLens.css("width", lensWidth),
            b.zoomLens.css("height", lensHeight),
            b.options.tint && (b.zoomTintImage.css("width", b.nzWidth),
            b.zoomTintImage.css("height", b.nzHeight))),
            "lens" == b.options.zoomType && b.zoomLens.css({
                width: String(b.options.lensSize) + "px",
                height: String(b.options.lensSize) + "px"
            })),
            b.zoomContainer.css({
                top: b.nzOffset.top
            }),
            b.zoomContainer.css({
                left: b.nzOffset.left
            }),
            b.mouseLeft = parseInt(a.pageX - b.nzOffset.left),
            b.mouseTop = parseInt(a.pageY - b.nzOffset.top),
            "window" == b.options.zoomType && (b.Etoppos = b.mouseTop < b.zoomLens.height() / 2,
            b.Eboppos = b.mouseTop > b.nzHeight - b.zoomLens.height() / 2 - 2 * b.options.lensBorderSize,
            b.Eloppos = b.mouseLeft < 0 + b.zoomLens.width() / 2,
            b.Eroppos = b.mouseLeft > b.nzWidth - b.zoomLens.width() / 2 - 2 * b.options.lensBorderSize),
            "inner" == b.options.zoomType && (b.Etoppos = b.mouseTop < b.nzHeight / 2 / b.heightRatio,
            b.Eboppos = b.mouseTop > b.nzHeight - b.nzHeight / 2 / b.heightRatio,
            b.Eloppos = b.mouseLeft < 0 + b.nzWidth / 2 / b.widthRatio,
            b.Eroppos = b.mouseLeft > b.nzWidth - b.nzWidth / 2 / b.widthRatio - 2 * b.options.lensBorderSize),
            b.mouseLeft <= 0 || b.mouseTop < 0 || b.mouseLeft > b.nzWidth || b.mouseTop > b.nzHeight ? void b.setElements("hide") : (b.options.showLens && (b.lensLeftPos = String(b.mouseLeft - b.zoomLens.width() / 2),
            b.lensTopPos = String(b.mouseTop - b.zoomLens.height() / 2)),
            b.Etoppos && (b.lensTopPos = 0),
            b.Eloppos && (b.windowLeftPos = 0,
            b.lensLeftPos = 0,
            b.tintpos = 0),
            "window" == b.options.zoomType && (b.Eboppos && (b.lensTopPos = Math.max(b.nzHeight - b.zoomLens.height() - 2 * b.options.lensBorderSize, 0)),
            b.Eroppos && (b.lensLeftPos = b.nzWidth - b.zoomLens.width() - 2 * b.options.lensBorderSize)),
            "inner" == b.options.zoomType && (b.Eboppos && (b.lensTopPos = Math.max(b.nzHeight - 2 * b.options.lensBorderSize, 0)),
            b.Eroppos && (b.lensLeftPos = b.nzWidth - b.nzWidth - 2 * b.options.lensBorderSize)),
            "lens" == b.options.zoomType && (b.windowLeftPos = String(-1 * ((a.pageX - b.nzOffset.left) * b.widthRatio - b.zoomLens.width() / 2)),
            b.windowTopPos = String(-1 * ((a.pageY - b.nzOffset.top) * b.heightRatio - b.zoomLens.height() / 2)),
            b.zoomLens.css({
                backgroundPosition: b.windowLeftPos + "px " + b.windowTopPos + "px"
            }),
            b.changeBgSize && (b.nzHeight > b.nzWidth ? ("lens" == b.options.zoomType && b.zoomLens.css({
                "background-size": b.largeWidth / b.newvalueheight + "px " + b.largeHeight / b.newvalueheight + "px"
            }),
            b.zoomWindow.css({
                "background-size": b.largeWidth / b.newvalueheight + "px " + b.largeHeight / b.newvalueheight + "px"
            })) : ("lens" == b.options.zoomType && b.zoomLens.css({
                "background-size": b.largeWidth / b.newvaluewidth + "px " + b.largeHeight / b.newvaluewidth + "px"
            }),
            b.zoomWindow.css({
                "background-size": b.largeWidth / b.newvaluewidth + "px " + b.largeHeight / b.newvaluewidth + "px"
            })),
            b.changeBgSize = !1),
            b.setWindowPostition(a)),
            b.options.tint && "inner" != b.options.zoomType && b.setTintPosition(a),
            "window" == b.options.zoomType && b.setWindowPostition(a),
            "inner" == b.options.zoomType && b.setWindowPostition(a),
            b.options.showLens && (b.fullwidth && "lens" != b.options.zoomType && (b.lensLeftPos = 0),
            b.zoomLens.css({
                left: b.lensLeftPos + "px",
                top: b.lensTopPos + "px"
            })),
            void 0))
        },
        showHideWindow: function(a) {
            var b = this;
            "show" == a && (b.isWindowActive || (b.options.zoomWindowFadeIn ? b.zoomWindow.stop(!0, !0, !1).fadeIn(b.options.zoomWindowFadeIn) : b.zoomWindow.show(),
            b.isWindowActive = !0)),
            "hide" == a && b.isWindowActive && (b.options.zoomWindowFadeOut ? b.zoomWindow.stop(!0, !0).fadeOut(b.options.zoomWindowFadeOut) : b.zoomWindow.hide(),
            b.isWindowActive = !1)
        },
        showHideLens: function(a) {
            var b = this;
            "show" == a && (b.isLensActive || (b.options.lensFadeIn ? b.zoomLens.stop(!0, !0, !1).fadeIn(b.options.lensFadeIn) : b.zoomLens.show(),
            b.isLensActive = !0)),
            "hide" == a && b.isLensActive && (b.options.lensFadeOut ? b.zoomLens.stop(!0, !0).fadeOut(b.options.lensFadeOut) : b.zoomLens.hide(),
            b.isLensActive = !1)
        },
        showHideTint: function(a) {
            var b = this;
            "show" == a && (b.isTintActive || (b.options.zoomTintFadeIn ? b.zoomTint.css({
                opacity: b.options.tintOpacity
            }).animate().stop(!0, !0).fadeIn("slow") : (b.zoomTint.css({
                opacity: b.options.tintOpacity
            }).animate(),
            b.zoomTint.show()),
            b.isTintActive = !0)),
            "hide" == a && b.isTintActive && (b.options.zoomTintFadeOut ? b.zoomTint.stop(!0, !0).fadeOut(b.options.zoomTintFadeOut) : b.zoomTint.hide(),
            b.isTintActive = !1)
        },
        setLensPostition: function(a) {},
        setWindowPostition: function(b) {
            var c = this;
            if (isNaN(c.options.zoomWindowPosition))
                c.externalContainer = a("#" + c.options.zoomWindowPosition),
                c.externalContainerWidth = c.externalContainer.width(),
                c.externalContainerHeight = c.externalContainer.height(),
                c.externalContainerOffset = c.externalContainer.offset(),
                c.windowOffsetTop = c.externalContainerOffset.top,
                c.windowOffsetLeft = c.externalContainerOffset.left;
            else
                switch (c.options.zoomWindowPosition) {
                case 1:
                    c.windowOffsetTop = c.options.zoomWindowOffety,
                    c.windowOffsetLeft = +c.nzWidth;
                    break;
                case 2:
                    c.options.zoomWindowHeight > c.nzHeight && (c.windowOffsetTop = -1 * (c.options.zoomWindowHeight / 2 - c.nzHeight / 2),
                    c.windowOffsetLeft = c.nzWidth);
                    break;
                case 3:
                    c.windowOffsetTop = c.nzHeight - c.zoomWindow.height() - 2 * c.options.borderSize,
                    c.windowOffsetLeft = c.nzWidth;
                    break;
                case 4:
                    c.windowOffsetTop = c.nzHeight,
                    c.windowOffsetLeft = c.nzWidth;
                    break;
                case 5:
                    c.windowOffsetTop = c.nzHeight,
                    c.windowOffsetLeft = c.nzWidth - c.zoomWindow.width() - 2 * c.options.borderSize;
                    break;
                case 6:
                    c.options.zoomWindowHeight > c.nzHeight && (c.windowOffsetTop = c.nzHeight,
                    c.windowOffsetLeft = -1 * (c.options.zoomWindowWidth / 2 - c.nzWidth / 2 + 2 * c.options.borderSize));
                    break;
                case 7:
                    c.windowOffsetTop = c.nzHeight,
                    c.windowOffsetLeft = 0;
                    break;
                case 8:
                    c.windowOffsetTop = c.nzHeight,
                    c.windowOffsetLeft = -1 * (c.zoomWindow.width() + 2 * c.options.borderSize);
                    break;
                case 9:
                    c.windowOffsetTop = c.nzHeight - c.zoomWindow.height() - 2 * c.options.borderSize,
                    c.windowOffsetLeft = -1 * (c.zoomWindow.width() + 2 * c.options.borderSize);
                    break;
                case 10:
                    c.options.zoomWindowHeight > c.nzHeight && (c.windowOffsetTop = -1 * (c.options.zoomWindowHeight / 2 - c.nzHeight / 2),
                    c.windowOffsetLeft = -1 * (c.zoomWindow.width() + 2 * c.options.borderSize));
                    break;
                case 11:
                    c.windowOffsetTop = c.options.zoomWindowOffety,
                    c.windowOffsetLeft = -1 * (c.zoomWindow.width() + 2 * c.options.borderSize);
                    break;
                case 12:
                    c.windowOffsetTop = -1 * (c.zoomWindow.height() + 2 * c.options.borderSize),
                    c.windowOffsetLeft = -1 * (c.zoomWindow.width() + 2 * c.options.borderSize);
                    break;
                case 13:
                    c.windowOffsetTop = -1 * (c.zoomWindow.height() + 2 * c.options.borderSize),
                    c.windowOffsetLeft = 0;
                    break;
                case 14:
                    c.options.zoomWindowHeight > c.nzHeight && (c.windowOffsetTop = -1 * (c.zoomWindow.height() + 2 * c.options.borderSize),
                    c.windowOffsetLeft = -1 * (c.options.zoomWindowWidth / 2 - c.nzWidth / 2 + 2 * c.options.borderSize));
                    break;
                case 15:
                    c.windowOffsetTop = -1 * (c.zoomWindow.height() + 2 * c.options.borderSize),
                    c.windowOffsetLeft = c.nzWidth - c.zoomWindow.width() - 2 * c.options.borderSize;
                    break;
                case 16:
                    c.windowOffsetTop = -1 * (c.zoomWindow.height() + 2 * c.options.borderSize),
                    c.windowOffsetLeft = c.nzWidth;
                    break;
                default:
                    c.windowOffsetTop = c.options.zoomWindowOffety,
                    c.windowOffsetLeft = c.nzWidth
                }
            c.isWindowSet = !0,
            c.windowOffsetTop = c.windowOffsetTop + c.options.zoomWindowOffety,
            c.windowOffsetLeft = c.windowOffsetLeft + c.options.zoomWindowOffetx,
            c.zoomWindow.css({
                top: c.windowOffsetTop
            }),
            c.zoomWindow.css({
                left: c.windowOffsetLeft
            }),
            "inner" == c.options.zoomType && (c.zoomWindow.css({
                top: 0
            }),
            c.zoomWindow.css({
                left: 0
            })),
            c.windowLeftPos = String(-1 * ((b.pageX - c.nzOffset.left) * c.widthRatio - c.zoomWindow.width() / 2)),
            c.windowTopPos = String(-1 * ((b.pageY - c.nzOffset.top) * c.heightRatio - c.zoomWindow.height() / 2)),
            c.Etoppos && (c.windowTopPos = 0),
            c.Eloppos && (c.windowLeftPos = 0),
            c.Eboppos && (c.windowTopPos = -1 * (c.largeHeight / c.currentZoomLevel - c.zoomWindow.height())),
            c.Eroppos && (c.windowLeftPos = -1 * (c.largeWidth / c.currentZoomLevel - c.zoomWindow.width())),
            c.fullheight && (c.windowTopPos = 0),
            c.fullwidth && (c.windowLeftPos = 0),
            "window" != c.options.zoomType && "inner" != c.options.zoomType || (1 == c.zoomLock && (c.widthRatio <= 1 && (c.windowLeftPos = 0),
            c.heightRatio <= 1 && (c.windowTopPos = 0)),
            c.largeHeight < c.options.zoomWindowHeight && (c.windowTopPos = 0),
            c.largeWidth < c.options.zoomWindowWidth && (c.windowLeftPos = 0),
            c.options.easing ? (c.xp || (c.xp = 0),
            c.yp || (c.yp = 0),
            c.loop || (c.loop = setInterval(function() {
                c.xp += (c.windowLeftPos - c.xp) / c.options.easingAmount,
                c.yp += (c.windowTopPos - c.yp) / c.options.easingAmount,
                c.scrollingLock ? (clearInterval(c.loop),
                c.xp = c.windowLeftPos,
                c.yp = c.windowTopPos,
                c.xp = -1 * ((b.pageX - c.nzOffset.left) * c.widthRatio - c.zoomWindow.width() / 2),
                c.yp = -1 * ((b.pageY - c.nzOffset.top) * c.heightRatio - c.zoomWindow.height() / 2),
                c.changeBgSize && (c.nzHeight > c.nzWidth ? ("lens" == c.options.zoomType && c.zoomLens.css({
                    "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
                }),
                c.zoomWindow.css({
                    "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
                })) : ("lens" != c.options.zoomType && c.zoomLens.css({
                    "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvalueheight + "px"
                }),
                c.zoomWindow.css({
                    "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvaluewidth + "px"
                })),
                c.changeBgSize = !1),
                c.zoomWindow.css({
                    backgroundPosition: c.windowLeftPos + "px " + c.windowTopPos + "px"
                }),
                c.scrollingLock = !1,
                c.loop = !1) : (c.changeBgSize && (c.nzHeight > c.nzWidth ? ("lens" == c.options.zoomType && c.zoomLens.css({
                    "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
                }),
                c.zoomWindow.css({
                    "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
                })) : ("lens" != c.options.zoomType && c.zoomLens.css({
                    "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvaluewidth + "px"
                }),
                c.zoomWindow.css({
                    "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvaluewidth + "px"
                })),
                c.changeBgSize = !1),
                c.zoomWindow.css({
                    backgroundPosition: c.xp + "px " + c.yp + "px"
                }))
            }, 16))) : (c.changeBgSize && (c.nzHeight > c.nzWidth ? ("lens" == c.options.zoomType && c.zoomLens.css({
                "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
            }),
            c.zoomWindow.css({
                "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
            })) : ("lens" == c.options.zoomType && c.zoomLens.css({
                "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvaluewidth + "px"
            }),
            c.largeHeight / c.newvaluewidth < c.options.zoomWindowHeight ? c.zoomWindow.css({
                "background-size": c.largeWidth / c.newvaluewidth + "px " + c.largeHeight / c.newvaluewidth + "px"
            }) : c.zoomWindow.css({
                "background-size": c.largeWidth / c.newvalueheight + "px " + c.largeHeight / c.newvalueheight + "px"
            })),
            c.changeBgSize = !1),
            c.zoomWindow.css({
                backgroundPosition: c.windowLeftPos + "px " + c.windowTopPos + "px"
            })))
        },
        setTintPosition: function(a) {
            var b = this;
            b.nzOffset = b.$elem.offset(),
            b.tintpos = String(-1 * (a.pageX - b.nzOffset.left - b.zoomLens.width() / 2)),
            b.tintposy = String(-1 * (a.pageY - b.nzOffset.top - b.zoomLens.height() / 2)),
            b.Etoppos && (b.tintposy = 0),
            b.Eloppos && (b.tintpos = 0),
            b.Eboppos && (b.tintposy = -1 * (b.nzHeight - b.zoomLens.height() - 2 * b.options.lensBorderSize)),
            b.Eroppos && (b.tintpos = -1 * (b.nzWidth - b.zoomLens.width() - 2 * b.options.lensBorderSize)),
            b.options.tint && (b.fullheight && (b.tintposy = 0),
            b.fullwidth && (b.tintpos = 0),
            b.zoomTintImage.css({
                left: b.tintpos + "px"
            }),
            b.zoomTintImage.css({
                top: b.tintposy + "px"
            }))
        },
        swaptheimage: function(b, c) {
            var d = this
              , e = new Image;
            d.options.loadingIcon && (d.spinner = a("<div style=\"background: url('" + d.options.loadingIcon + "') no-repeat center;height:" + d.nzHeight + "px;width:" + d.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),
            d.$elem.after(d.spinner)),
            d.options.onImageSwap(d.$elem),
            e.onload = function() {
                d.largeWidth = e.width,
                d.largeHeight = e.height,
                d.zoomImage = c,
                d.zoomWindow.css({
                    "background-size": d.largeWidth + "px " + d.largeHeight + "px"
                }),
                d.zoomWindow.css({
                    "background-size": d.largeWidth + "px " + d.largeHeight + "px"
                }),
                d.swapAction(b, c)
            }
            ,
            e.src = c
        },
        swapAction: function(b, c) {
            var d = this
              , e = new Image;
            if (e.onload = function() {
                d.nzHeight = e.height,
                d.nzWidth = e.width,
                d.options.onImageSwapComplete(d.$elem),
                d.doneCallback()
            }
            ,
            e.src = b,
            d.currentZoomLevel = d.options.zoomLevel,
            d.options.maxZoomLevel = !1,
            "lens" == d.options.zoomType && d.zoomLens.css({
                backgroundImage: "url('" + c + "')"
            }),
            "window" == d.options.zoomType && d.zoomWindow.css({
                backgroundImage: "url('" + c + "')"
            }),
            "inner" == d.options.zoomType && d.zoomWindow.css({
                backgroundImage: "url('" + c + "')"
            }),
            d.currentImage = c,
            d.options.imageCrossfade) {
                var f = d.$elem
                  , g = f.clone();
                if (d.$elem.attr("src", b),
                d.$elem.after(g),
                g.stop(!0).fadeOut(d.options.imageCrossfade, function() {
                    a(this).remove()
                }),
                d.$elem.width("auto").removeAttr("width"),
                d.$elem.height("auto").removeAttr("height"),
                f.fadeIn(d.options.imageCrossfade),
                d.options.tint && "inner" != d.options.zoomType) {
                    var h = d.zoomTintImage
                      , i = h.clone();
                    d.zoomTintImage.attr("src", c),
                    d.zoomTintImage.after(i),
                    i.stop(!0).fadeOut(d.options.imageCrossfade, function() {
                        a(this).remove()
                    }),
                    h.fadeIn(d.options.imageCrossfade),
                    d.zoomTint.css({
                        height: d.$elem.height()
                    }),
                    d.zoomTint.css({
                        width: d.$elem.width()
                    })
                }
                d.zoomContainer.css("height", d.$elem.height()),
                d.zoomContainer.css("width", d.$elem.width()),
                "inner" == d.options.zoomType && (d.options.constrainType || (d.zoomWrap.parent().css("height", d.$elem.height()),
                d.zoomWrap.parent().css("width", d.$elem.width()),
                d.zoomWindow.css("height", d.$elem.height()),
                d.zoomWindow.css("width", d.$elem.width()))),
                d.options.imageCrossfade && (d.zoomWrap.css("height", d.$elem.height()),
                d.zoomWrap.css("width", d.$elem.width()))
            } else
                d.$elem.attr("src", b),
                d.options.tint && (d.zoomTintImage.attr("src", c),
                d.zoomTintImage.attr("height", d.$elem.height()),
                d.zoomTintImage.css({
                    height: d.$elem.height()
                }),
                d.zoomTint.css({
                    height: d.$elem.height()
                })),
                d.zoomContainer.css("height", d.$elem.height()),
                d.zoomContainer.css("width", d.$elem.width()),
                d.options.imageCrossfade && (d.zoomWrap.css("height", d.$elem.height()),
                d.zoomWrap.css("width", d.$elem.width()));
            d.options.constrainType && ("height" == d.options.constrainType && (d.zoomContainer.css("height", d.options.constrainSize),
            d.zoomContainer.css("width", "auto"),
            d.options.imageCrossfade ? (d.zoomWrap.css("height", d.options.constrainSize),
            d.zoomWrap.css("width", "auto"),
            d.constwidth = d.zoomWrap.width()) : (d.$elem.css("height", d.options.constrainSize),
            d.$elem.css("width", "auto"),
            d.constwidth = d.$elem.width()),
            "inner" == d.options.zoomType && (d.zoomWrap.parent().css("height", d.options.constrainSize),
            d.zoomWrap.parent().css("width", d.constwidth),
            d.zoomWindow.css("height", d.options.constrainSize),
            d.zoomWindow.css("width", d.constwidth)),
            d.options.tint && (d.tintContainer.css("height", d.options.constrainSize),
            d.tintContainer.css("width", d.constwidth),
            d.zoomTint.css("height", d.options.constrainSize),
            d.zoomTint.css("width", d.constwidth),
            d.zoomTintImage.css("height", d.options.constrainSize),
            d.zoomTintImage.css("width", d.constwidth))),
            "width" == d.options.constrainType && (d.zoomContainer.css("height", "auto"),
            d.zoomContainer.css("width", d.options.constrainSize),
            d.options.imageCrossfade ? (d.zoomWrap.css("height", "auto"),
            d.zoomWrap.css("width", d.options.constrainSize),
            d.constheight = d.zoomWrap.height()) : (d.$elem.css("height", "auto"),
            d.$elem.css("width", d.options.constrainSize),
            d.constheight = d.$elem.height()),
            "inner" == d.options.zoomType && (d.zoomWrap.parent().css("height", d.constheight),
            d.zoomWrap.parent().css("width", d.options.constrainSize),
            d.zoomWindow.css("height", d.constheight),
            d.zoomWindow.css("width", d.options.constrainSize)),
            d.options.tint && (d.tintContainer.css("height", d.constheight),
            d.tintContainer.css("width", d.options.constrainSize),
            d.zoomTint.css("height", d.constheight),
            d.zoomTint.css("width", d.options.constrainSize),
            d.zoomTintImage.css("height", d.constheight),
            d.zoomTintImage.css("width", d.options.constrainSize))))
        },
        doneCallback: function() {
            var a = this;
            a.options.loadingIcon && a.spinner.hide(),
            a.nzOffset = a.$elem.offset(),
            a.nzWidth = a.$elem.width(),
            a.nzHeight = a.$elem.height(),
            a.currentZoomLevel = a.options.zoomLevel,
            a.widthRatio = a.largeWidth / a.nzWidth,
            a.heightRatio = a.largeHeight / a.nzHeight,
            "window" == a.options.zoomType && (a.nzHeight < a.options.zoomWindowWidth / a.widthRatio ? lensHeight = a.nzHeight : lensHeight = String(a.options.zoomWindowHeight / a.heightRatio),
            a.options.zoomWindowWidth < a.options.zoomWindowWidth ? lensWidth = a.nzWidth : lensWidth = a.options.zoomWindowWidth / a.widthRatio,
            a.zoomLens && (a.zoomLens.css("width", lensWidth),
            a.zoomLens.css("height", lensHeight)))
        },
        getCurrentImage: function() {
            return this.zoomImage
        },
        getGalleryList: function() {
            var b = this;
            return b.gallerylist = [],
            b.options.gallery ? a("#" + b.options.gallery + " a").each(function() {
                var c = "";
                a(this).data("zoom-image") ? c = a(this).data("zoom-image") : a(this).data("image") && (c = a(this).data("image")),
                c == b.zoomImage ? b.gallerylist.unshift({
                    href: "" + c,
                    title: a(this).find("img").attr("title")
                }) : b.gallerylist.push({
                    href: "" + c,
                    title: a(this).find("img").attr("title")
                })
            }) : b.gallerylist.push({
                href: "" + b.zoomImage,
                title: a(this).find("img").attr("title")
            }),
            b.gallerylist
        },
        changeZoomLevel: function(a) {
            var b = this;
            b.scrollingLock = !0,
            b.newvalue = parseFloat(a).toFixed(2),
            newvalue = parseFloat(a).toFixed(2),
            maxheightnewvalue = b.largeHeight / (b.options.zoomWindowHeight / b.nzHeight * b.nzHeight),
            maxwidthtnewvalue = b.largeWidth / (b.options.zoomWindowWidth / b.nzWidth * b.nzWidth),
            "inner" != b.options.zoomType && (maxheightnewvalue <= newvalue ? (b.heightRatio = b.largeHeight / maxheightnewvalue / b.nzHeight,
            b.newvalueheight = maxheightnewvalue,
            b.fullheight = !0) : (b.heightRatio = b.largeHeight / newvalue / b.nzHeight,
            b.newvalueheight = newvalue,
            b.fullheight = !1),
            maxwidthtnewvalue <= newvalue ? (b.widthRatio = b.largeWidth / maxwidthtnewvalue / b.nzWidth,
            b.newvaluewidth = maxwidthtnewvalue,
            b.fullwidth = !0) : (b.widthRatio = b.largeWidth / newvalue / b.nzWidth,
            b.newvaluewidth = newvalue,
            b.fullwidth = !1),
            "lens" == b.options.zoomType && (maxheightnewvalue <= newvalue ? (b.fullwidth = !0,
            b.newvaluewidth = maxheightnewvalue) : (b.widthRatio = b.largeWidth / newvalue / b.nzWidth,
            b.newvaluewidth = newvalue,
            b.fullwidth = !1))),
            "inner" == b.options.zoomType && (maxheightnewvalue = parseFloat(b.largeHeight / b.nzHeight).toFixed(2),
            maxwidthtnewvalue = parseFloat(b.largeWidth / b.nzWidth).toFixed(2),
            newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
            newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
            maxheightnewvalue <= newvalue ? (b.heightRatio = b.largeHeight / newvalue / b.nzHeight,
            newvalue > maxheightnewvalue ? b.newvalueheight = maxheightnewvalue : b.newvalueheight = newvalue,
            b.fullheight = !0) : (b.heightRatio = b.largeHeight / newvalue / b.nzHeight,
            newvalue > maxheightnewvalue ? b.newvalueheight = maxheightnewvalue : b.newvalueheight = newvalue,
            b.fullheight = !1),
            maxwidthtnewvalue <= newvalue ? (b.widthRatio = b.largeWidth / newvalue / b.nzWidth,
            newvalue > maxwidthtnewvalue ? b.newvaluewidth = maxwidthtnewvalue : b.newvaluewidth = newvalue,
            b.fullwidth = !0) : (b.widthRatio = b.largeWidth / newvalue / b.nzWidth,
            b.newvaluewidth = newvalue,
            b.fullwidth = !1)),
            scrcontinue = !1,
            "inner" == b.options.zoomType && (b.nzWidth > b.nzHeight && (b.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1,
            b.fullheight = !0,
            b.fullwidth = !0)),
            b.nzHeight > b.nzWidth && (b.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1,
            b.fullheight = !0,
            b.fullwidth = !0))),
            "inner" != b.options.zoomType && (scrcontinue = !0),
            scrcontinue && (b.zoomLock = 0,
            b.changeZoom = !0,
            b.options.zoomWindowHeight / b.heightRatio <= b.nzHeight && (b.currentZoomLevel = b.newvalueheight,
            "lens" != b.options.zoomType && "inner" != b.options.zoomType && (b.changeBgSize = !0,
            b.zoomLens.css({
                height: String(b.options.zoomWindowHeight / b.heightRatio) + "px"
            })),
            "lens" != b.options.zoomType && "inner" != b.options.zoomType || (b.changeBgSize = !0)),
            b.options.zoomWindowWidth / b.widthRatio <= b.nzWidth && ("inner" != b.options.zoomType && b.newvaluewidth > b.newvalueheight && (b.currentZoomLevel = b.newvaluewidth),
            "lens" != b.options.zoomType && "inner" != b.options.zoomType && (b.changeBgSize = !0,
            b.zoomLens.css({
                width: String(b.options.zoomWindowWidth / b.widthRatio) + "px"
            })),
            "lens" != b.options.zoomType && "inner" != b.options.zoomType || (b.changeBgSize = !0)),
            "inner" == b.options.zoomType && (b.changeBgSize = !0,
            b.nzWidth > b.nzHeight && (b.currentZoomLevel = b.newvaluewidth),
            b.nzHeight > b.nzWidth && (b.currentZoomLevel = b.newvaluewidth))),
            b.setPosition(b.currentLoc)
        },
        closeAll: function() {
            self.zoomWindow && self.zoomWindow.hide(),
            self.zoomLens && self.zoomLens.hide(),
            self.zoomTint && self.zoomTint.hide()
        },
        changeState: function(a) {
            var b = this;
            "enable" == a && (b.options.zoomEnabled = !0),
            "disable" == a && (b.options.zoomEnabled = !1)
        }
    };
    a.fn.elevateZoom = function(b) {
        return this.each(function() {
            var c = Object.create(e);
            c.init(b, this),
            a.data(this, "elevateZoom", c)
        })
    }
    ,
    a.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: .1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 500,
        zoomWindowHeight: 500,
        marginLeft: 20,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !0,
        lensFadeOut: !0,
        debug: !1,
        zoomWindowFadeIn: !0,
        zoomWindowFadeOut: !0,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !0,
        zoomTintFadeOut: !0,
        borderSize: 1,
        showLens: !0,
        borderColour: "#ddd",
        lensBorderSize: 1,
        lensBorderColour: "#dddddd",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !0,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !0,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: a.noop,
        onZoomedImageLoaded: function() {},
        onImageSwap: a.noop,
        onImageSwapComplete: a.noop
    }
}(jQuery, window, document),
function(a) {
    var b, c = a.fn.on;
    a.fn.on = function() {
        var a = Array.apply(null, arguments)
          , d = a[a.length - 1];
        if (isNaN(d) || 1 === d && a.pop())
            return c.apply(this, a);
        var e = a.pop()
          , f = a.pop();
        return a.push(function() {
            var a = this
              , c = arguments;
            clearTimeout(b),
            b = setTimeout(function() {
                f.apply(a, c)
            }, e)
        }),
        c.apply(this, a)
    }
}(this.jQuery || this.Zepto),
function(a, b, c) {
    function d(a) {
        return a = a || location.href,
        "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var e, f = "hashchange", g = document, h = a.event.special, i = g.documentMode, j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function(a) {
        return a ? this.bind(f, a) : this.trigger(f)
    }
    ,
    a.fn[f].delay = 50,
    h[f] = a.extend(h[f], {
        setup: function() {
            if (j)
                return !1;
            a(e.start)
        },
        teardown: function() {
            if (j)
                return !1;
            a(e.stop)
        }
    }),
    e = function() {
        function e() {
            var c = d()
              , g = n(k);
            c !== k ? (m(k = c, g),
            a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g),
            h = setTimeout(e, a.fn[f].delay)
        }
        var h, i = {}, k = d(), l = function(a) {
            return a
        }, m = l, n = l;
        return i.start = function() {
            h || e()
        }
        ,
        i.stop = function() {
            h && clearTimeout(h),
            h = c
        }
        ,
        a.browser.msie && !j && function() {
            var b, c;
            i.start = function() {
                b || (c = a.fn[f].src,
                c = c && c + d(),
                b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    c || m(d()),
                    e()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow,
                g.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title)
                    } catch (a) {}
                }
                )
            }
            ,
            i.stop = l,
            n = function() {
                return d(b.location.href)
            }
            ,
            m = function(c, d) {
                var e = b.document
                  , h = a.fn[f].domain;
                c !== d && (e.title = g.title,
                e.open(),
                h && e.write('<script>document.domain="' + h + '"<\/script>'),
                e.close(),
                b.location.hash = c)
            }
        }(),
        i
    }()
}(jQuery, this),
function() {
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
GG.Utilities.isElementInViewPort = function(a, b) {
    "function" == typeof jQuery && a instanceof jQuery && (a = a[0]);
    try {
        return a.getBoundingClientRect().bottom <= (window.innerHeight || document.documentElement.clientHeight) + b
    } catch (a) {
        return !1
    }
}
,
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
GG.Components.prototype.countDown = function(a) {
    var b = {
        startDay: 0,
        endDay: 0,
        zeroShow: !0,
        containers: _gg.static.CountDownStaticData.counterClassNames,
        textContainers: _gg.static.CountDownStaticData.counterTextClassNames
    };
    this.reload = !0,
    this.config = $GG.extend(b, a),
    0 != this.config.startDay && (this.config.seconds = this.calculateSeconds(),
    this.init())
}
,
GG.Components.prototype.countDown.prototype.init = function() {
    function a() {
        var a = Math.floor(b.config.seconds / 24 / 60 / 60)
          , c = Math.floor(b.config.seconds - 86400 * a)
          , d = Math.floor(c / 3600)
          , e = Math.floor(c - 3600 * d)
          , f = Math.floor(e / 60)
          , g = b.config.seconds % 60;
        b.config.zeroShow && (f < 10 && (f = "0" + f),
        g < 10 && (g = "0" + g)),
        a > 0 ? $GG("." + b.config.containers.day).html(a) : $GG("." + b.config.containers.day + ",." + b.config.textContainers.day).addClass("hidden"),
        d > 0 ? ($GG("." + b.config.containers.hour).html(d),
        $GG("." + b.config.containers.hour + ",." + b.config.textContainers.hour).removeClass("hidden")) : $GG("." + b.config.containers.hour + ",." + b.config.textContainers.hour).addClass("hidden"),
        f > 0 ? ($GG("." + b.config.containers.min).html(f),
        $GG("." + b.config.containers.min + ",." + b.config.textContainers.min).removeClass("hidden")) : $GG("." + b.config.containers.min + ",." + b.config.textContainers.min).addClass("hidden"),
        g > 0 ? ($GG("." + b.config.containers.sec).html(g),
        0 != a && 0 != d || $GG("." + b.config.containers.sec + ",." + b.config.textContainers.sec).show()) : 0 == a && 0 == d && 0 == f && $GG("#" + _gg.static.CountDownStaticData.generalContainerName).length > 0 && ($GG("#" + _gg.static.CountDownStaticData.generalContainerName).addClass("hidden"),
        b.reload && (location.reload(),
        b.reload = !1)),
        document.getElementById(b.staticData.dayInfoIdName) && (document.getElementById(b.staticData.dayInfoIdName).innerHTML = 0 != a ? a : ""),
        0 == b.config.seconds ? clearInterval(b.countdownTimer) : b.config.seconds--
    }
    var b = this;
    b.config.seconds > 0 ? (b.countdownTimer = setInterval(a, 1e3),
    b.staticData = _gg.static.CountDownStaticData) : $GG("#" + _gg.static.CountDownStaticData.generalContainerName).addClass("hidden")
}
,
GG.Components.prototype.countDown.prototype.calculateSeconds = function() {
    var a = new Date(1e3 * this.config.endDay)
      , b = new Date(1e3 * this.config.startDay)
      , c = a - b;
    return Math.floor(c / 1e3)
}
;
var stopNotification = !1;
GG.Components.prototype.notification = function(a) {
    this.staticData = _gg.static.NotificationStaticData;
    var b = GG.ExternalController.jquery
      , c = {
        containerId: "body",
        position: _gg.static.Enums.positions.topRight,
        content: "",
        title: "",
        duration: 0,
        type: this.staticData.type.warning,
        style: this.staticData.style.basic,
        effect: this.staticData.effects.scale,
        thumbPath: null,
        gridClass: this.staticData.defaultGridClass,
        prepend: !1,
        overlay: !1,
        showArrow: !1,
        max: 4,
        fadeOlder: !0,
        closeOnClick: !0,
        overlayClose: !0,
        stopNotification: !1,
        backgroundImg: !1,
        isMobile: _gg.pageType === GG.Static.Enums.pageTypes.IOS || _gg.pageType === GG.Static.Enums.pageTypes.ANDROID && _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile,
        callback: function() {},
        close: function() {},
        click: function() {},
        hover: function() {}
    };
    return a.effect == this.staticData.effects.thumbSlider && null == a.thumbPath && (a.thumbPath = this.staticData.ntfDefaultIconPath),
    a.style != this.staticData.style.slideOnTop && (a.position.indexOf(_gg.static.Enums.positions.top) > -1 && (a.prepend = !0),
    a.position.indexOf(_gg.static.Enums.positions.bottom) > -1 && (a.prepend = !1)),
    document.hidden ? (stopNotification = !0,
    $GG(this.notificationContent).remove()) : stopNotification = !1,
    this.config = b.extend(c, a),
    this.newObj = new _gg.components.notificationController(this.config),
    this.newObj.init(),
    this
}
,
GG.Components.prototype.notificationController = function(a) {
    this.config = a,
    this.animationTimeOut = ""
}
,
GG.Components.prototype.notificationController.prototype.init = function() {
    this.config.callback();
    var a = this;
    stopNotification || (a.notificationDomGenerator(),
    a.createTimeOut(),
    a.eventController())
}
,
GG.Components.prototype.notificationController.prototype.notificationDomGenerator = function() {
    if (this.staticData = _gg.static.NotificationStaticData,
    this.container = $GG(this.config.containerId),
    !(this.container.length > 0))
        return void console.info("Please check the dom object for notification! " + this.config.containerId);
    this.containerId = this.config.containerId.replace("#", "").replace(".", ""),
    this.prependClassName = "",
    this.containerBaseClass = this.config.position + this.config.style,
    this.addedContent = this.container.find("." + this.containerBaseClass),
    this.config.style == this.staticData.style.domNotification && (this.container.addClass(this.staticData.ntfPos),
    this.staticData.containerGridClassName = this.staticData.defaultGridClass),
    this.addedContent.length < 1 ? (this.config.prepend && this.config.style == this.staticData.style.slideOnTop && (this.prependClassName = this.staticData.prependClassName),
    this.notificationContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.containerBaseClass, this.staticData.containerClassName, this.config.position, this.staticData.containerGridClassName, this.prependClassName, this.config.style]
    }),
    this.config.prepend ? this.container.prepend(this.notificationContainer) : this.container.append(this.notificationContainer),
    this.addedContent = this.container.find("." + this.containerBaseClass)) : this.config.prepend || this.addedContent.removeClass(this.staticData.prependClassName),
    this.effectHide = "",
    this.effectClass = "",
    this.config.effect && (this.effectClass = this.staticData.effectClassName + this.config.effect,
    this.effectHide = this.staticData.effectHide,
    this.config.style == this.staticData.style.slideOnTop && (this.effectClass = this.staticData.effectClassName + this.config.style)),
    this.htmlContent = this.config.content,
    (this.config.effect == this.staticData.effects.thumbSlider || this.config.style == this.staticData.style.slideOnTop || "" != this.config.thumbPath && null != this.config.thumbPath) && (this.htmlContent = ""),
    this.contentGridClass = "",
    this.config.style == this.staticData.style.domNotification && (this.contentGridClass = this.config.gridClass),
    this.config.overlay && (this.overlayContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.overlayClass],
        attributes: {
            style: "height: " + $GG(this.staticData.defaultId).height() + "px"
        }
    }),
    $GG("." + this.staticData.overlayClass).length < 1 && $GG(this.staticData.defaultId).prepend(this.overlayContent),
    this.container.hasClass(this.staticData.topLayer) || this.container.addClass(this.staticData.topLayer)),
    this.arrowClass = "",
    this.config.showArrow && this.config.style == this.staticData.style.domNotification && (this.arrowClass = this.staticData.ntfArrow),
    this.paddingClass = "",
    "" != this.config.thumbPath && null != this.config.thumbPath || (this.paddingClass = this.staticData.padding15),
    this.notificationContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.contentClassName, this.staticData.contentClassName + "-" + this.config.type, this.effectClass, this.effectHide, this.contentGridClass, this.arrowClass, this.paddingClass],
        htmlContent: this.htmlContent
    }),
    this.notificationCloseBtnSpan = _gg.utilities.domGenerator({
        nodeType: "span",
        attributes: {
            ariahidden: "true"
        },
        htmlContent: "×"
    }),
    this.notificationCloseBtn = _gg.utilities.domGenerator({
        nodeType: "button",
        attributes: {
            type: "button",
            datadismiss: "alert",
            arialabel: "Close"
        },
        classNames: [this.staticData.ntfCloseClassName],
        htmlContent: this.notificationCloseBtnSpan
    }),
    this.config.title && (this.notificationTitle = _gg.utilities.domGenerator({
        nodeType: "h4",
        htmlContent: this.config.title
    })),
    this.ntfBorder = null,
    this.config.type == this.staticData.type.info && (this.ntfBgGreen = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfBorderGrid, this.staticData.ntfBgGreen]
    }),
    this.ntfBgYellow = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfBorderGrid, this.staticData.ntfBgYellow]
    }),
    this.ntfBgRed = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfBorderGrid, this.staticData.ntfBgRed]
    }),
    this.ntfBgBlue = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfBorderGrid, this.staticData.ntfBgBlue]
    }),
    this.ntfBorder = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.clearFix, this.staticData.ntfBorder],
        htmlContent: [this.ntfBgGreen, this.ntfBgYellow, this.ntfBgRed, this.ntfBgBlue]
    })),
    this.config.style == this.staticData.style.slideOnTop ? ("" != this.config.thumbPath && null != this.config.thumbPath ? (this.ntfTopContentClass = this.staticData.topNtfContentClassName,
    this.config.backgroundImg ? this.ntfThumbImg = _gg.utilities.domGenerator({
        nodeType: "span",
        attributes: {
            style: "background-image:url('" + this.config.thumbPath + "')"
        }
    }) : this.ntfThumbImg = _gg.utilities.domGenerator({
        nodeType: "img",
        attributes: {
            src: this.config.thumbPath
        }
    }),
    this.ntfIcon = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [this.staticData.ntfIcon],
        htmlContent: this.ntfThumbImg
    }),
    this.ntfThumbContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.topNtfThumbClassName],
        htmlContent: this.ntfIcon
    })) : (this.ntfTopContentClass = this.staticData.defaultGridClass,
    this.ntfThumbImg = "",
    this.ntfThumbContent = ""),
    this.ntfContent = _gg.utilities.domGenerator({
        nodeType: "p",
        htmlContent: this.config.content
    }),
    this.ntfTableCell = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfTableCellClassName],
        htmlContent: this.ntfContent
    }),
    this.ntfTopContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.ntfTopContentClass],
        htmlContent: this.ntfTableCell
    }),
    this.ntfClearfix = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.clearFix, this.staticData.padding15],
        htmlContent: this.ntfThumbContent
    }),
    $GG(this.ntfClearfix).append(this.ntfThumbContent),
    this.config.title && $GG(this.ntfTopContent).prepend(this.notificationTitle),
    $GG(this.ntfClearfix).append(this.ntfTopContent),
    $GG(this.notificationContent).append(this.ntfClearfix),
    $GG(this.notificationContent).append(this.notificationCloseBtn),
    null != this.ntfBorder && $GG(this.notificationContent).append(this.ntfBorder)) : (this.config.effect == this.staticData.effects.thumbSlider || "" != this.config.thumbPath && null != this.config.thumbPath ? (this.config.backgroundImg ? this.ntfThumbImg = _gg.utilities.domGenerator({
        nodeType: "span",
        attributes: {
            style: "background-image:url('" + this.config.thumbPath + "')"
        }
    }) : this.ntfThumbImg = _gg.utilities.domGenerator({
        nodeType: "img",
        attributes: {
            src: this.config.thumbPath
        }
    }),
    this.ntfThumb = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfThumbClassName, this.staticData.ntfThumbGrid],
        htmlContent: this.ntfThumbImg
    }),
    this.ntfContentTxt = _gg.utilities.domGenerator({
        nodeType: "p",
        htmlContent: this.config.content
    }),
    this.ntfTableCell = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfTableCellClassName],
        htmlContent: this.ntfContentTxt
    }),
    this.ntfContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.ntfContentClassName, this.staticData.ntfContentGrid],
        htmlContent: this.ntfTableCell
    }),
    this.ntfClearfix = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [this.staticData.clearFix, this.staticData.padding15],
        htmlContent: this.ntfThumb
    }),
    this.config.title && $GG(this.ntfContent).prepend(this.notificationTitle),
    $GG(this.ntfClearfix).append(this.ntfContent),
    $GG(this.notificationContent).append(this.ntfClearfix),
    null != this.ntfBorder && $GG(this.notificationContent).append(this.ntfBorder)) : this.config.title && $GG(this.notificationContent).prepend(this.notificationTitle),
    $GG(this.notificationContent).append(this.notificationCloseBtn)),
    this.config.overlay && $GG(this.notificationContent).addClass(this.staticData.topLayer),
    this.config.prepend ? this.addedContent.prepend(this.notificationContent) : this.addedContent.append(this.notificationContent),
    this.openNotification(),
    this.controlOpacity()
}
,
GG.Components.prototype.notificationController.prototype.controlOpacity = function() {
    var a = this;
    _gg.controller.events.Actions;
    a.notifications = a.addedContent.find("." + a.staticData.contentClassName),
    a.notifications.length > 1 && a.notifications.each(function(b) {
        a.config.isMobile ? a.config.max = 1 : (a.config.prepend ? 0 == b ? a.opacityClass = "" : 1 == b ? a.opacityClass = a.staticData.opacity.opacity60 : 2 == b ? a.opacityClass = a.staticData.opacity.opacity30 : b > 2 && (a.opacityClass = a.staticData.opacity.opacity10) : b == a.notifications.length - 1 ? a.opacityClass = "" : b == a.notifications.length - 2 ? a.opacityClass = a.staticData.opacity.opacity60 : b == a.notifications.length - 3 ? a.opacityClass = a.staticData.opacity.opacity30 : b < a.notifications.length - 3 && (a.opacityClass = a.staticData.opacity.opacity10),
        $GG(this).removeClass(a.staticData.opacity.opacity10).removeClass(a.staticData.opacity.opacity30).removeClass(a.staticData.opacity.opacity60).addClass(a.opacityClass)),
        a.notifications.length > a.config.max && (a.config.prepend ? a.notifications.eq(0).nextAll().remove() : a.notifications.eq(a.notifications.length - 1).prevAll().remove())
    })
}
,
GG.Components.prototype.notificationController.prototype.createTimeOut = function() {
    if (this.config.duration) {
        this.killTimeOut();
        var a = this;
        this.animationTimeOut = setTimeout(function() {
            a.closeNotification()
        }, a.config.duration)
    }
}
,
GG.Components.prototype.notificationController.prototype.killTimeOut = function() {
    this.config.duration && clearTimeout(this.animationTimeOut)
}
,
GG.Communication.prototype.formDataPoster = function(a, b, c, d) {
    d = d || "post",
    c = c || "data";
    var e = document.createElement("form");
    e.setAttribute("method", d),
    e.setAttribute("action", a),
    b = JSON.stringify(b);
    var f = document.createElement("input");
    f.className = "hidden",
    f.setAttribute("enctype", "application/json"),
    f.setAttribute("name", c),
    f.setAttribute("value", b),
    e.appendChild(f),
    document.body.appendChild(e),
    e.submit()
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
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(c) {
        return b(a, c)
    }) : "object" == typeof exports ? b(a, require("jquery")) : b(a, a.jQuery)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    function c(a, b) {
        for (var c = a.length; --c; )
            if (+a[c] != +b[c])
                return !1;
        return !0
    }
    function d(a) {
        var c = {
            range: !0,
            animate: !0
        };
        return "boolean" == typeof a ? c.animate = a : b.extend(c, a),
        c
    }
    function e(a, c, d, e, f, g, h, i, j) {
        "array" === b.type(a) ? this.elements = [+a[0], +a[2], +a[4], +a[1], +a[3], +a[5], 0, 0, 1] : this.elements = [a, c, d, e, f, g, h || 0, i || 0, j || 1]
    }
    function f(a, b, c) {
        this.elements = [a, b, c]
    }
    function g(a, c) {
        if (!(this instanceof g))
            return new g(a,c);
        1 !== a.nodeType && b.error("Panzoom called on non-Element node"),
        b.contains(l, a) || b.error("Panzoom element must be attached to the document");
        var d = b.data(a, m);
        if (d)
            return d;
        this.options = c = b.extend({}, g.defaults, c),
        this.elem = a;
        var e = this.$elem = b(a);
        this.$set = c.$set && c.$set.length ? c.$set : e,
        this.$doc = b(a.ownerDocument || l),
        this.$parent = e.parent(),
        this.isSVG = r.test(a.namespaceURI) && "svg" !== a.nodeName.toLowerCase(),
        this.panning = !1,
        this._buildTransform(),
        this._transform = !this.isSVG && b.cssProps.transform.replace(q, "-$1").toLowerCase(),
        this._buildTransition(),
        this.resetDimensions();
        var f = b()
          , h = this;
        b.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function(a, b) {
            h[b] = c[b] || f
        }),
        this.enable(),
        b.data(a, m, this)
    }
    var h = "over out down up move enter leave cancel".split(" ")
      , i = b.extend({}, b.event.mouseHooks)
      , j = {};
    if (a.PointerEvent)
        b.each(h, function(a, c) {
            b.event.fixHooks[j[c] = "pointer" + c] = i
        });
    else {
        var k = i.props;
        i.props = k.concat(["touches", "changedTouches", "targetTouches", "altKey", "ctrlKey", "metaKey", "shiftKey"]),
        i.filter = function(a, b) {
            var c, d = k.length;
            if (!b.pageX && b.touches && (c = b.touches[0]))
                for (; d--; )
                    a[k[d]] = c[k[d]];
            return a
        }
        ,
        b.each(h, function(a, c) {
            if (a < 2)
                j[c] = "mouse" + c;
            else {
                var d = "touch" + ("down" === c ? "start" : "up" === c ? "end" : c);
                b.event.fixHooks[d] = i,
                j[c] = d + " mouse" + c
            }
        })
    }
    b.pointertouch = j;
    var l = a.document
      , m = "__pz__"
      , n = Array.prototype.slice
      , o = !!a.PointerEvent
      , p = function() {
        var a = l.createElement("input");
        return a.setAttribute("oninput", "return"),
        "function" == typeof a.oninput
    }()
      , q = /([A-Z])/g
      , r = /^http:[\w\.\/]+svg$/
      , s = /^inline/
      , t = "(\\-?[\\d\\.e]+)"
      , u = "\\,?\\s*"
      , v = new RegExp("^matrix\\(" + t + u + t + u + t + u + t + u + t + u + t + "\\)$");
    return e.prototype = {
        x: function(a) {
            var b = a instanceof f
              , c = this.elements
              , d = a.elements;
            return b && 3 === d.length ? new f(c[0] * d[0] + c[1] * d[1] + c[2] * d[2],c[3] * d[0] + c[4] * d[1] + c[5] * d[2],c[6] * d[0] + c[7] * d[1] + c[8] * d[2]) : d.length === c.length && new e(c[0] * d[0] + c[1] * d[3] + c[2] * d[6],c[0] * d[1] + c[1] * d[4] + c[2] * d[7],c[0] * d[2] + c[1] * d[5] + c[2] * d[8],c[3] * d[0] + c[4] * d[3] + c[5] * d[6],c[3] * d[1] + c[4] * d[4] + c[5] * d[7],c[3] * d[2] + c[4] * d[5] + c[5] * d[8],c[6] * d[0] + c[7] * d[3] + c[8] * d[6],c[6] * d[1] + c[7] * d[4] + c[8] * d[7],c[6] * d[2] + c[7] * d[5] + c[8] * d[8])
        },
        inverse: function() {
            var a = 1 / this.determinant()
              , b = this.elements;
            return new e(a * (b[8] * b[4] - b[7] * b[5]),a * -(b[8] * b[1] - b[7] * b[2]),a * (b[5] * b[1] - b[4] * b[2]),a * -(b[8] * b[3] - b[6] * b[5]),a * (b[8] * b[0] - b[6] * b[2]),a * -(b[5] * b[0] - b[3] * b[2]),a * (b[7] * b[3] - b[6] * b[4]),a * -(b[7] * b[0] - b[6] * b[1]),a * (b[4] * b[0] - b[3] * b[1]))
        },
        determinant: function() {
            var a = this.elements;
            return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2])
        }
    },
    f.prototype.e = e.prototype.e = function(a) {
        return this.elements[a]
    }
    ,
    g.rmatrix = v,
    g.events = b.pointertouch,
    g.defaults = {
        eventNamespace: ".panzoom",
        transition: !0,
        cursor: "move",
        disablePan: !1,
        disableZoom: !1,
        increment: .3,
        minScale: .4,
        maxScale: 5,
        rangeStep: .05,
        duration: 200,
        easing: "ease-in-out",
        contain: !1
    },
    g.prototype = {
        constructor: g,
        instance: function() {
            return this
        },
        enable: function() {
            this._initStyle(),
            this._bind(),
            this.disabled = !1
        },
        disable: function() {
            this.disabled = !0,
            this._resetStyle(),
            this._unbind()
        },
        isDisabled: function() {
            return this.disabled
        },
        destroy: function() {
            this.disable(),
            b.removeData(this.elem, m)
        },
        resetDimensions: function() {
            var a = this.$parent;
            this.container = {
                width: a.innerWidth(),
                height: a.innerHeight()
            };
            var c, d = a.offset(), e = this.elem, f = this.$elem;
            this.isSVG ? (c = e.getBoundingClientRect(),
            c = {
                left: c.left - d.left,
                top: c.top - d.top,
                width: c.width,
                height: c.height,
                margin: {
                    left: 0,
                    top: 0
                }
            }) : c = {
                left: b.css(e, "left", !0) || 0,
                top: b.css(e, "top", !0) || 0,
                width: f.innerWidth(),
                height: f.innerHeight(),
                margin: {
                    top: b.css(e, "marginTop", !0) || 0,
                    left: b.css(e, "marginLeft", !0) || 0
                }
            },
            c.widthBorder = b.css(e, "borderLeftWidth", !0) + b.css(e, "borderRightWidth", !0) || 0,
            c.heightBorder = b.css(e, "borderTopWidth", !0) + b.css(e, "borderBottomWidth", !0) || 0,
            this.dimensions = c
        },
        reset: function(a) {
            a = d(a);
            var b = this.setMatrix(this._origTransform, a);
            a.silent || this._trigger("reset", b)
        },
        resetZoom: function(a) {
            a = d(a);
            var b = this.getMatrix(this._origTransform);
            a.dValue = b[3],
            this.zoom(b[0], a)
        },
        resetPan: function(a) {
            var b = this.getMatrix(this._origTransform);
            this.pan(b[4], b[5], d(a))
        },
        setTransform: function(a) {
            for (var c = this.isSVG ? "attr" : "style", d = this.$set, e = d.length; e--; )
                b[c](d[e], "transform", a)
        },
        getTransform: function(a) {
            var c = this.$set
              , d = c[0];
            return a ? this.setTransform(a) : a = b[this.isSVG ? "attr" : "style"](d, "transform"),
            "none" === a || v.test(a) || this.setTransform(a = b.css(d, "transform")),
            a || "none"
        },
        getMatrix: function(a) {
            var b = v.exec(a || this.getTransform());
            return b && b.shift(),
            b || [1, 0, 0, 1, 0, 0]
        },
        setMatrix: function(a, c) {
            if (!this.disabled) {
                c || (c = {}),
                "string" == typeof a && (a = this.getMatrix(a));
                var d, e, f, g, h, i, j, k, l, m, n = +a[0], o = this.$parent, p = void 0 !== c.contain ? c.contain : this.options.contain;
                return p && (d = this._checkDims(),
                e = this.container,
                l = d.width + d.widthBorder,
                m = d.height + d.heightBorder,
                f = l * Math.abs(n) > e.width ? (l * Math.abs(n) - e.width) / 2 : 0,
                g = m * Math.abs(n) > e.height ? (m * Math.abs(n) - e.height) / 2 : 0,
                j = d.left + d.margin.left,
                k = d.top + d.margin.top,
                "invert" === p ? (h = l > e.width ? l - e.width : 0,
                i = m > e.height ? m - e.height : 0,
                f += (e.width - l) / 2,
                g += (e.height - m) / 2,
                a[4] = Math.max(Math.min(a[4], f - j), -f - j - h),
                a[5] = Math.max(Math.min(a[5], g - k), -g - k - i + d.heightBorder)) : (g += d.heightBorder / 2,
                h = e.width > l ? e.width - l : 0,
                i = e.height > m ? e.height - m : 0,
                "center" === o.css("textAlign") && s.test(b.css(this.elem, "display")) ? h = 0 : f = g = 0,
                a[4] = Math.min(Math.max(a[4], f - j), -f - j + h),
                a[5] = Math.min(Math.max(a[5], g - k), -g - k + i))),
                "skip" !== c.animate && this.transition(!c.animate),
                c.range && this.$zoomRange.val(n),
                this.setTransform("matrix(" + a.join(",") + ")"),
                c.silent || this._trigger("change", a),
                a
            }
        },
        isPanning: function() {
            return this.panning
        },
        transition: function(a) {
            if (this._transition)
                for (var c = a || !this.options.transition ? "none" : this._transition, d = this.$set, e = d.length; e--; )
                    b.style(d[e], "transition") !== c && b.style(d[e], "transition", c)
        },
        pan: function(a, b, c) {
            if (!this.options.disablePan) {
                c || (c = {});
                var d = c.matrix;
                d || (d = this.getMatrix()),
                c.relative && (a += +d[4],
                b += +d[5]),
                d[4] = a,
                d[5] = b,
                this.setMatrix(d, c),
                c.silent || this._trigger("pan", d[4], d[5])
            }
        },
        zoom: function(a, c) {
            "object" == typeof a ? (c = a,
            a = null) : c || (c = {});
            var d = b.extend({}, this.options, c);
            if (!d.disableZoom) {
                var g = !1
                  , h = d.matrix || this.getMatrix();
                "number" != typeof a && (a = +h[0] + d.increment * (a ? -1 : 1),
                g = !0),
                a > d.maxScale ? a = d.maxScale : a < d.minScale && (a = d.minScale);
                var i = d.focal;
                if (i && !d.disablePan) {
                    var j = this._checkDims()
                      , k = i.clientX
                      , l = i.clientY;
                    this.isSVG || (k -= (j.width + j.widthBorder) / 2,
                    l -= (j.height + j.heightBorder) / 2);
                    var m = new f(k,l,1)
                      , n = new e(h)
                      , o = this.parentOffset || this.$parent.offset()
                      , p = new e(1,0,o.left - this.$doc.scrollLeft(),0,1,o.top - this.$doc.scrollTop())
                      , q = n.inverse().x(p.inverse().x(m))
                      , r = a / h[0];
                    n = n.x(new e([r, 0, 0, r, 0, 0])),
                    m = p.x(n.x(q)),
                    h[4] = +h[4] + (k - m.e(0)),
                    h[5] = +h[5] + (l - m.e(1))
                }
                h[0] = a,
                h[3] = "number" == typeof d.dValue ? d.dValue : a,
                this.setMatrix(h, {
                    animate: "boolean" == typeof d.animate ? d.animate : g,
                    range: !d.noSetRange
                }),
                d.silent || this._trigger("zoom", h[0], d)
            }
        },
        option: function(a, c) {
            var d;
            if (!a)
                return b.extend({}, this.options);
            if ("string" == typeof a) {
                if (1 === arguments.length)
                    return void 0 !== this.options[a] ? this.options[a] : null;
                d = {},
                d[a] = c
            } else
                d = a;
            this._setOptions(d)
        },
        _setOptions: function(a) {
            b.each(a, b.proxy(function(a, c) {
                switch (a) {
                case "disablePan":
                    this._resetStyle();
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                case "disableZoom":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                    this._unbind()
                }
                switch (this.options[a] = c,
                a) {
                case "disablePan":
                    this._initStyle();
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                    this[a] = c;
                case "disableZoom":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                    this._bind();
                    break;
                case "cursor":
                    b.style(this.elem, "cursor", c);
                    break;
                case "minScale":
                    this.$zoomRange.attr("min", c);
                    break;
                case "maxScale":
                    this.$zoomRange.attr("max", c);
                    break;
                case "rangeStep":
                    this.$zoomRange.attr("step", c);
                    break;
                case "startTransform":
                    this._buildTransform();
                    break;
                case "duration":
                case "easing":
                    this._buildTransition();
                case "transition":
                    this.transition();
                    break;
                case "$set":
                    c instanceof b && c.length && (this.$set = c,
                    this._initStyle(),
                    this._buildTransform())
                }
            }, this))
        },
        _initStyle: function() {
            var a = {
                "backface-visibility": "hidden",
                "transform-origin": this.isSVG ? "0 0" : "50% 50%"
            };
            this.options.disablePan || (a.cursor = this.options.cursor),
            this.$set.css(a);
            var c = this.$parent;
            c.length && !b.nodeName(c[0], "body") && (a = {
                overflow: "hidden"
            },
            "static" === c.css("position") && (a.position = "relative"),
            c.css(a))
        },
        _resetStyle: function() {
            this.$elem.css({
                cursor: "",
                transition: ""
            }),
            this.$parent.css({
                overflow: "",
                position: ""
            })
        },
        _bind: function() {
            var a = this
              , c = this.options
              , d = c.eventNamespace
              , e = o ? "pointerdown" + d : "touchstart" + d + " mousedown" + d
              , f = o ? "pointerup" + d : "touchend" + d + " click" + d
              , h = {}
              , i = this.$reset
              , j = this.$zoomRange;
            if (b.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function() {
                var a = c["on" + this];
                b.isFunction(a) && (h["panzoom" + this.toLowerCase() + d] = a)
            }),
            c.disablePan && c.disableZoom || (h[e] = function(b) {
                var d;
                ("touchstart" === b.type ? !(d = b.touches) || (1 !== d.length || c.disablePan) && 2 !== d.length : c.disablePan || 1 !== b.which) || (b.preventDefault(),
                b.stopPropagation(),
                a._startMove(b, d))
            }
            ),
            this.$elem.on(h),
            i.length && i.on(f, function(b) {
                b.preventDefault(),
                a.reset()
            }),
            j.length && j.attr({
                step: c.rangeStep === g.defaults.rangeStep && j.attr("step") || c.rangeStep,
                min: c.minScale,
                max: c.maxScale
            }).prop({
                value: this.getMatrix()[0]
            }),
            !c.disableZoom) {
                var k = this.$zoomIn
                  , l = this.$zoomOut;
                k.length && l.length && (k.on(f, function(b) {
                    b.preventDefault(),
                    a.zoom()
                }),
                l.on(f, function(b) {
                    b.preventDefault(),
                    a.zoom(!0)
                })),
                j.length && (h = {},
                h[(o ? "pointerdown" : "mousedown") + d] = function() {
                    a.transition(!0)
                }
                ,
                h[(p ? "input" : "change") + d] = function() {
                    a.zoom(+this.value, {
                        noSetRange: !0
                    })
                }
                ,
                j.on(h))
            }
        },
        _unbind: function() {
            this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
        },
        _buildTransform: function() {
            return this._origTransform = this.getTransform(this.options.startTransform)
        },
        _buildTransition: function() {
            if (this._transform) {
                var a = this.options;
                this._transition = this._transform + " " + a.duration + "ms " + a.easing
            }
        },
        _checkDims: function() {
            var a = this.dimensions;
            return a.width && a.height || this.resetDimensions(),
            this.dimensions
        },
        _getDistance: function(a) {
            var b = a[0]
              , c = a[1];
            return Math.sqrt(Math.pow(Math.abs(c.clientX - b.clientX), 2) + Math.pow(Math.abs(c.clientY - b.clientY), 2))
        },
        _getMiddle: function(a) {
            var b = a[0]
              , c = a[1];
            return {
                clientX: (c.clientX - b.clientX) / 2 + b.clientX,
                clientY: (c.clientY - b.clientY) / 2 + b.clientY
            }
        },
        _trigger: function(a) {
            "string" == typeof a && (a = "panzoom" + a),
            this.$elem.triggerHandler(a, [this].concat(n.call(arguments, 1)))
        },
        _startMove: function(a, d) {
            var e, f, g, h, i, j, k, m, n = this, p = this.options, q = p.eventNamespace, r = this.getMatrix(), s = r.slice(0), t = +s[4], u = +s[5], v = {
                matrix: r,
                animate: "skip"
            };
            o ? (f = "pointermove",
            g = "pointerup") : "touchstart" === a.type ? (f = "touchmove",
            g = "touchend") : (f = "mousemove",
            g = "mouseup"),
            f += q,
            g += q,
            this.transition(!0),
            this.panning = !0,
            this._trigger("start", a, d),
            d && 2 === d.length ? (h = this._getDistance(d),
            i = +r[0],
            j = this._getMiddle(d),
            e = function(a) {
                a.preventDefault();
                var b = n._getMiddle(d = a.touches)
                  , c = n._getDistance(d) - h;
                n.zoom(c * (p.increment / 100) + i, {
                    focal: b,
                    matrix: r,
                    animate: !1
                }),
                n.pan(+r[4] + b.clientX - j.clientX, +r[5] + b.clientY - j.clientY, v),
                j = b
            }
            ) : (k = a.pageX,
            m = a.pageY,
            e = function(a) {
                a.preventDefault(),
                n.pan(t + a.pageX - k, u + a.pageY - m, v)
            }
            ),
            b(l).off(q).on(f, e).on(g, function(a) {
                a.preventDefault(),
                b(this).off(q),
                n.panning = !1,
                a.type = "panzoomend",
                n._trigger(a, r, !c(r, s))
            })
        }
    },
    b.Panzoom = g,
    b.fn.panzoom = function(a) {
        var c, d, e, f;
        return "string" == typeof a ? (f = [],
        d = n.call(arguments, 1),
        this.each(function() {
            c = b.data(this, m),
            c ? "_" !== a.charAt(0) && "function" == typeof (e = c[a]) && void 0 !== (e = e.apply(c, d)) && f.push(e) : f.push(void 0)
        }),
        f.length ? 1 === f.length ? f[0] : f : this) : this.each(function() {
            new g(this,a)
        })
    }
    ,
    g
}),
GG.Components.prototype.productReview = function(a) {
    this.staticData = _gg.static.productReviewStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.executeSliderEvents = !0;
    var b = {
        containers: {
            generalContainer: $GG("#catalog-review-container"),
            reviewContainer: $GG("#catalog-review-detail-con"),
            reviewInfoContainer: $GG("#catalog-review-info"),
            reviewCommentsContainer: $GG("#catalog-review-comments"),
            scrollContainer: $GG("#catalog-review-container")
        },
        data: {
            reviewCommentData: null
        },
        getProductReviewInfo: !0,
        getProductReviewRatesInfo: !0,
        getProductReviewComments: !0,
        showHelpfulContainer: !0,
        scrollToContainer: !0,
        showOnlyCatalogReviewPoint: !1,
        showOnlyStars: !1,
        simpleCatalogReviewPoint: !1,
        showLoadingContent: !0,
        showOtherReviews: !0,
        isLogin: !0,
        returnData: !1,
        animateToPosition: !1,
        catalogImage: "",
        catalogTitle: "",
        catalogId: null,
        catalogIds: null,
        catalogGroupId: null,
        catalogGroupIds: null,
        catalogReviewPageLink: null,
        catalogReviewPageLinkTitle: null,
        maxReviewCount: 10,
        maxShowCount: 10,
        showOthersCount: 10,
        reviewSort: 0,
        reviewTotalCount: 0,
        rate: null,
        ajaxUrls: this.staticData.ajaxUrls
    };
    return this.config = $GG.extend(b, a),
    this.createOthersContent = !0,
    this.triggerEventController = !0,
    this.AJAX_SUCCESS = "AJAX_SUCCESS",
    this.AJAX_COMPLETE = "AJAX_COMPLETE",
    this.AJAX_ERROR = "AJAX_ERROR",
    this.AJAX_PENDING = "AJAX_PENDING",
    this
}
,
GG.Components.prototype.productReview.prototype.init = function() {
    if (this.staticData = _gg.static.productReviewStaticData,
    this.staticTexts = this.staticData.staticTexts(),
    this.containers = this.config.containers,
    this.config.returnData)
        return this.config.data.reviewCommentData;
    if (null != this.config.containers.reviewContainer && this.config.containers.reviewContainer.length > 0)
        null != this.config.data.reviewCommentData && this.config.getProductReviewComments ? this.createReviewComments(this.config.data.reviewCommentData) : (null != this.config.catalogId && (this.config.ajaxUrls.catalogReviewAjax.postParams.catalogId = this.config.catalogId),
        null != this.config.catalogGroupId && (this.config.ajaxUrls.catalogReviewAjax.postParams.groupId = this.config.catalogGroupId,
        this.config.ajaxUrls.catalogReviewAjax.url = this.config.ajaxUrls.urls.catalogReviewCatalogGroup),
        this.config.ajaxUrls.catalogReviewAjax.postParams.limit = this.config.maxShowCount,
        this.config.rate && (this.config.ajaxUrls.catalogReviewAjax.postParams.rate = this.config.rate),
        this.getAjaxData(this.config.containers.reviewContainer, this.config.ajaxUrls.catalogReviewAjax, !0));
    else {
        if (!(this.config.containers.generalContainer.length > 0))
            return void console.info("Please check the dom object for product review! " + this.config.container.attr("id"));
        if (this.config.showOnlyCatalogReviewPoint) {
            var a = !1
              , b = this.config.ajaxUrls.catalogAverageAjax;
            null != this.config.catalogId && (b.postParams.catalogId = this.config.catalogId),
            null != this.config.catalogGroupId && (b.postParams.groupId = this.config.catalogGroupId,
            b.url = this.config.ajaxUrls.urls.catalogReviewCatalogGroup,
            a = !0),
            null != this.config.catalogGroupIds && (a = !0,
            b = this.config.ajaxUrls.catalogsReviewAjax,
            b.postParams.groupIds = this.config.catalogGroupIds),
            this.getAjaxData(this.config.containers.generalContainer, b, a)
        }
    }
}
,
GG.Components.prototype.productReview.prototype.modalData = function(a) {
    var b = this;
    if (a && null != a && "" != a) {
        var c = 0;
        if (a.hasOwnProperty("reviewRate") && (c = a.reviewRate.totalCount),
        a.hasOwnProperty("reviews") && a.reviews.length > 0 && c >= this.config.maxReviewCount) {
            if (null != a.title && (this.config.catalogTitle = a.title),
            null != a.image && (this.config.catalogImage = a.image),
            a.hasOwnProperty("reviewRate") && (this.createReviewTitle(a.reviewRate),
            a.reviewRate.hasOwnProperty("rates") && this.createReviewRates(a.reviewRate.rates),
            0 == this.config.reviewTotalCount && (this.config.reviewTotalCount = a.reviewRate.totalCount)),
            this.createReviewComments(a.reviews),
            a.reviews.length < this.config.maxShowCount || $GG("." + this.staticData.classNames.reviewCommentClass).length >= this.config.reviewTotalCount ? (this.createOthersContent = !1,
            $GG("." + this.staticData.classNames.seeOthersButton).parent().remove()) : this.createOthersContent = !0,
            this.createLoadOthersContent(),
            b.config.containers.scrollContainer.length > 0 && this.config.scrollToContainer && this.config.ajaxUrls.catalogReviewAjax.postParams.hasOwnProperty("offset")) {
                var d = Number(this.config.ajaxUrls.catalogReviewAjax.postParams.offset);
                d > 0 ? $GG("body,html").stop().animate({
                    scrollTop: $GG("." + b.staticData.classNames.reviewCommentClass).eq(d).offset().top
                }, 800) : this.config.animateToPosition ? $GG("body,html").stop().animate({
                    scrollTop: b.config.containers.scrollContainer.offset().top - 10
                }, 800) : $GG("body,html").stop().animate({
                    scrollTop: b.config.containers.scrollContainer.offset().top - 96
                }, 800)
            }
        } else if (a.hasOwnProperty("averagePercentage") && a.totalCount >= this.config.maxReviewCount)
            this.config.containers.generalContainer.append(b.createAverageContent(a));
        else if ((a.hasOwnProperty("likeCount") || a.hasOwnProperty("dislikeCount")) && a.hasOwnProperty("reviewId")) {
            var e = $GG("#" + b.staticData.classNames.productReviewId + a.reviewId);
            a.hasOwnProperty("likeCount") && a.likeCount > 0 && e.find("." + b.staticData.classNames.positivePointContainer + " ." + b.staticData.classNames.pointCount).html(" (" + a.likeCount + ")"),
            a.hasOwnProperty("dislikeCount") && a.dislikeCount > 0 && e.find("." + b.staticData.classNames.negativePointContainer + " ." + b.staticData.classNames.pointCount).html(" (" + a.dislikeCount + ")")
        } else
            a.hasOwnProperty("catalogReviews") ? $GG.each(a.catalogReviews, function(a, c) {
                if (Number(c.reviewRate.totalCount) >= b.config.maxReviewCount) {
                    var d = b.createAverageContent(c.reviewRate)
                      , e = $GG("." + b.staticData.classNames.catalogGroupPointId + c.catalogGroupId);
                    null != d ? e.append(d) : (e.addClass(b.staticData.classNames.catalogGroupInfoEmpty),
                    e.siblings("." + b.staticData.classNames.catalogGroupInfoTitle).addClass(b.staticData.classNames.catalogGroupInfoTitleNormal))
                }
            }) : this.config.ajaxUrls.catalogReviewAjax.postParams.hasOwnProperty("offset") ? 0 == Number(this.config.ajaxUrls.catalogReviewAjax.postParams.offset) && this.config.containers.generalContainer.remove() : this.config.containers.generalContainer.remove()
    } else
        this.config.containers.generalContainer.remove()
}
,
GG.Components.prototype.productReview.prototype.getAjaxData = function(a, b, c) {
    var d = this
      , e = {
        type: b.type,
        dataType: "json",
        communicationType: "application/x-www-form-urlencoded; charset=UTF-8",
        timeOut: 5e4
    };
    if (c ? e.url = _gg.utilities.ServerNameGenerator() + b.url + "?" + d.objToString(b.postParams) : (e.url = _gg.utilities.ServerNameGenerator() + b.url,
    e.data = b.postParams),
    null == b.ajaxInfo[b.url + "_?" + d.objToString(b.postParams)] && null == b.request[b.url + "_?" + d.objToString(b.postParams)]) {
        d.ajaxProductReviewCtrl = new _gg.communication.ajaxController(e),
        d.ajaxProductReviewCtrl.tryOnce = !1,
        d.ajaxProductReviewCtrl.ajaxAction(),
        b.request[b.url + "_?" + d.objToString(b.postParams)] = !1,
        b.ajaxInfo[b.url + "_?" + d.objToString(b.postParams)] = !0;
        var f = new _gg.utilities.ajaxObserver;
        f.init(),
        d.ajaxProductReviewCtrl.successReq = function() {
            $GG(d).trigger(d.AJAX_SUCCESS, this),
            d.showLoadingContent(!1)
        }
        ,
        d.ajaxProductReviewCtrl.completeReq = function() {
            b.request[b.url + "_?" + d.objToString(b.postParams)] = !0,
            d.executeAjaxSuccess(d.ajaxProductReviewCtrl.completeData, b, a),
            null != d.ajaxProductReviewCtrl.completeData && $GG(d).trigger(d.AJAX_COMPLETE, this)
        }
        ,
        d.ajaxProductReviewCtrl.pendingReq = function() {
            d.showLoadingContent(d.config.showLoadingContent),
            $GG(d).trigger(d.AJAX_PENDING, d)
        }
        ,
        d.ajaxProductReviewCtrl.errorReq = function() {
            if (d.showLoadingContent(!1),
            d.ajaxProductReviewCtrl.completeData) {
                var c = d.ajaxProductReviewCtrl.completeData;
                c = JSON.parse(c.responseText),
                (b.url == d.staticData.ajaxUrls.urls.likeReviewAjax || b.url == d.staticData.ajaxUrls.urls.disLikeReviewAjax && null != c && null != c.error && c.error.hasOwnProperty("message")) && $GG("#" + d.staticData.classNames.productReviewId + b.postParams.reviewId).find(".FormTxtErr").length < 1 && $GG("#" + d.staticData.classNames.productReviewId + b.postParams.reviewId).find("." + d.staticData.classNames.helpfulContentClass).append($GG('<div class="FormTxtErr gg-d-24 pl0"/>').text(c.error.message))
            } else
                a.length > 0 && a.remove(),
                d.config.containers.generalContainer.length > 0 && d.config.containers.generalContainer.remove();
            $GG(d).trigger(d.AJAX_ERROR, d)
        }
        ,
        f.add(d.ajaxProductReviewCtrl)
    } else if (b.request[b.url + "_?" + d.objToString(b.postParams)]) {
        var g = b.ajaxInfo[b.url + "_?" + d.objToString(b.postParams)];
        d.executeAjaxSuccess(g, b, a)
    }
}
,
GG.Components.prototype.productReview.prototype.executeAjaxSuccess = function(a, b, c) {
    var d = this;
    d.showLoadingContent(!1);
    var e = a;
    b.ajaxInfo[b.url + "_?" + d.objToString(b.postParams)] = e,
    e.hasOwnProperty("error") ? (c.remove(),
    d.config.containers.generalContainer.length > 0 && d.config.containers.generalContainer.remove()) : (b.url == this.config.ajaxUrls.urls.catalogReviewCatalogGroup && b.postParams.requestFields == this.config.ajaxUrls.catalogAverageAjax.postParams.requestFields && e.reviewRate && (e = e.reviewRate),
    d.modalData(e),
    d.triggerEventController && d.reviewEventController())
}
,
GG.Components.prototype.productReview.prototype.objToString = function(a) {
    var b = "";
    for (var c in a)
        a.hasOwnProperty(c) && (b += c + "=" + a[c],
        b += "&");
    return b
}
,
GG.Components.prototype.productReview.prototype.createReviewComments = function(a) {
    var b = this;
    if (this.reviewCommentContainers = null,
    b.config.getProductReviewComments) {
        var c = [];
        b.config.containers.reviewCommentsContainer.length > 0 && a.length > 0 ? $GG.each(a, function(a, d) {
            c.push(b.createReviewContent(d, a))
        }) : a.hasOwnProperty("reviewId") && c.push(b.createReviewContent(a, 0)),
        c.length > 0 && (b.reviewCommentContainers.reviewCommentsContainer = _gg.utilities.domGenerator({
            nodeType: "div",
            htmlContent: c
        }),
        b.config.containers.reviewCommentsContainer.append(b.reviewCommentContainers.reviewCommentsContainer))
    }
}
,
GG.Components.prototype.productReview.prototype.createReviewContent = function(a, b) {
    var c = this;
    c.reviewCommentContainers = {},
    c.reviewCommentContainers.reviewUserInfo = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.reviewUserInfo],
        htmlContent: [c.createUserPicture(a, b), c.createUserDetailContainer(a)]
    }),
    null == a.title || "" == a.title ? a.title = "" : '"' != a.title.substring(0, 1) && (a.title = '"' + c.encodeHTML(a.title) + '"');
    var d = [];
    if (null != a.title && "" != a.title && (c.reviewCommentContainers.reviewHeaderTitle = _gg.utilities.domGenerator({
        nodeType: "h3",
        htmlContent: a.title
    }),
    c.reviewCommentContainers.reviewHeader = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.reviewHeader],
        htmlContent: [c.reviewCommentContainers.reviewHeaderTitle]
    }),
    d.push(c.reviewCommentContainers.reviewHeader)),
    c.reviewCommentContainers.reviewStars = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.reviewStars],
        htmlContent: c.createReviewStars(a)
    }),
    d.push(c.reviewCommentContainers.reviewStars),
    null != a.positiveComment && "" != a.positiveComment || null != a.negativeComment && "" != a.negativeComment)
        c.reviewCommentContainers.reviewCommentContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [c.staticData.classNames.reviewCommentContent],
            htmlContent: c.createReviewCommentContent(a)
        }),
        d.push(c.reviewCommentContainers.reviewCommentContent);
    else {
        c.reviewCommentContainers.noComment = _gg.utilities.domGenerator({
            nodeType: "p",
            classNames: [c.staticData.classNames.noComment],
            htmlContent: this.staticTexts.noComment
        });
        var e = c.createSellerDetailContainer(a, !0);
        c.reviewCommentContainers.reviewCommentContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [c.staticData.classNames.reviewCommentContent],
            htmlContent: [c.reviewCommentContainers.noComment, e]
        }),
        d.push(c.reviewCommentContainers.reviewCommentContent)
    }
    return c.reviewCommentContainers.commentContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.commentContainer],
        htmlContent: d
    }),
    c.reviewCommentContainers.reviewCommentContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        id: c.staticData.classNames.productReviewId + a.reviewId,
        classNames: [c.staticData.classNames.reviewCommentContainer],
        attributes: {
            rev: a.reviewId
        },
        htmlContent: [c.reviewCommentContainers.reviewUserInfo, c.reviewCommentContainers.commentContainer]
    }),
    c.reviewCommentContainers.reviewCommentContainer
}
,
GG.Components.prototype.productReview.prototype.createReviewStars = function(a) {
    var b = this
      , c = []
      , d = b.getPercentage(5, a.rate);
    return b.reviewCommentContainers.shiningStarsSmall = _gg.utilities.domGenerator({
        nodeType: "div",
        attributes: {
            style: "width:" + d + "%",
            rev: d
        },
        classNames: [b.staticData.classNames.shiningStarsSmall]
    }),
    b.reviewCommentContainers.dullStarsSmall = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.dullStarsSmall],
        htmlContent: [b.reviewCommentContainers.shiningStarsSmall]
    }),
    b.reviewCommentContainers.starsContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starsContainer],
        htmlContent: [b.reviewCommentContainers.dullStarsSmall]
    }),
    c.push(b.reviewCommentContainers.starsContainer),
    b.reviewCommentContainers.reviewPoint = _gg.utilities.domGenerator({
        nodeType: "strong",
        classNames: [b.staticData.classNames.reviewPoint],
        htmlContent: a.rate.toFixed(1)
    }),
    b.reviewCommentContainers.starsPointContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starsPointContent],
        htmlContent: [b.reviewCommentContainers.reviewPoint]
    }),
    c.push(b.reviewCommentContainers.starsPointContent),
    c
}
,
GG.Components.prototype.productReview.prototype.getPercentage = function(a, b) {
    return Math.round(100 * b / a)
}
,
GG.Components.prototype.productReview.prototype.createReviewCommentContent = function(a) {
    var b = this
      , c = [];
    if (null != a.positiveComment && "" != a.positiveComment) {
        var d = b.createUserComment(b.encodeHTML(a.positiveComment), !0);
        c.push(d)
    }
    if (null != a.negativeComment && "" != a.negativeComment) {
        var e = b.createUserComment(b.encodeHTML(a.negativeComment), !1);
        c.push(e)
    }
    var f = b.createSellerDetailContainer(a, !1);
    if (null != f && c.push(f),
    b.config.showHelpfulContainer) {
        b.reviewCommentContainers.helpfulTextContentTxt = _gg.utilities.domGenerator({
            nodeType: "p",
            htmlContent: b.staticTexts.helpfulText
        });
        var g = [];
        b.reviewCommentContainers.helpfulTextContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [b.staticData.classNames.helpfulTextContent],
            htmlContent: b.reviewCommentContainers.helpfulTextContentTxt
        }),
        g.push(b.reviewCommentContainers.helpfulTextContent),
        g.push(b.createReviewButtonsContainer(a)),
        b.reviewCommentContainers.helpfulContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [b.staticData.classNames.helpfulContent],
            htmlContent: g
        }),
        c.push(b.reviewCommentContainers.helpfulContent)
    }
    return c
}
,
GG.Components.prototype.productReview.prototype.createReviewButtonsContainer = function(a) {
    var b = this;
    return b.reviewCommentContainers.helpfulButtonsContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.helpfulButtonsContent],
        htmlContent: [b.createReviewButtons(!0, a), b.createReviewButtons(!1, a)]
    }),
    b.reviewCommentContainers.helpfulButtonsContent
}
,
GG.Components.prototype.productReview.prototype.createReviewButtons = function(a, b) {
    var c = this
      , d = {
        buttonClass: null,
        iconClass: null,
        containerClass: null,
        text: null,
        dataCount: null
    };
    a ? (d.containerClass = c.staticData.classNames.likeButtonContent,
    d.buttonClass = c.staticData.classNames.positivePointContainer,
    d.iconClass = c.staticData.classNames.thumbsUpIcon,
    d.text = c.staticTexts.likeText,
    d.dataCount = Number(b.likeCount)) : (d.containerClass = c.staticData.classNames.disLikeButtonContent,
    d.buttonClass = c.staticData.classNames.negativePointContainer,
    d.iconClass = c.staticData.classNames.thumbsDownIcon,
    d.text = c.staticTexts.disLikeText,
    d.dataCount = Number(b.dislikeCount));
    var e = [];
    return c.reviewCommentContainers.buttonText = _gg.utilities.domGenerator({
        nodeType: "span",
        htmlContent: d.text + " "
    }),
    e.push(c.reviewCommentContainers.buttonText),
    c.reviewCommentContainers.buttonIcon = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [d.iconClass]
    }),
    e.push(c.reviewCommentContainers.buttonIcon),
    d.dataCount >= 0 && (c.reviewCommentContainers.pointCount = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [c.staticData.classNames.pointCount],
        htmlContent: " (" + d.dataCount + ")"
    }),
    e.push(c.reviewCommentContainers.pointCount)),
    c.reviewCommentContainers.buttonTag = _gg.utilities.domGenerator({
        nodeType: "a",
        attributes: {
            href: "javascript:;",
            title: d.text,
            rev: b.reviewId,
            rel: b.catalogId
        },
        classNames: [d.buttonClass, c.staticData.classNames.pointContainerClass],
        htmlContent: e
    }),
    c.reviewCommentContainers.buttonContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [d.containerClass],
        htmlContent: [c.reviewCommentContainers.buttonTag]
    }),
    c.reviewCommentContainers.buttonContent
}
,
GG.Components.prototype.productReview.prototype.createUserComment = function(a, b) {
    var c = this
      , d = []
      , e = "";
    return e = b ? c.staticData.classNames.positiveComment : c.staticData.classNames.negativeComment,
    c.reviewCommentContainers.commentContentContainer = null,
    null != a && "" != a && (c.reviewCommentContainers.commentContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [e]
    }),
    c.reviewCommentContainers.catalogReviewResult = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.catalogReviewResult],
        htmlContent: [c.reviewCommentContainers.commentContainer]
    }),
    d.push(c.reviewCommentContainers.catalogReviewResult),
    c.reviewCommentContainers.catalogReviewCommentText = _gg.utilities.domGenerator({
        nodeType: "p",
        htmlContent: a
    }),
    c.reviewCommentContainers.catalogReviewComment = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.catalogReviewComment],
        htmlContent: [c.reviewCommentContainers.catalogReviewCommentText]
    }),
    d.push(c.reviewCommentContainers.catalogReviewComment),
    c.reviewCommentContainers.commentContentContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.catalogReviewClearfix],
        htmlContent: d
    })),
    c.reviewCommentContainers.commentContentContainer
}
,
GG.Components.prototype.productReview.prototype.createSellerDetailContainer = function(a, b) {
    var c = this
      , d = c.staticData.classNames.sellerInfoContainer;
    return c.reviewCommentContainers.sellerDetailInfo = null,
    null != a.sellerNick && "" != a.sellerNick && null != a.sellerTotalTransaction && "" != a.sellerTotalTransaction && (b && (d += " mt30"),
    c.reviewCommentContainers.sellerInfoLink = _gg.utilities.domGenerator({
        nodeType: "a",
        attributes: {
            href: c.staticData.profileLink + a.sellerNick,
            title: a.sellerNick,
            target: "_blank"
        },
        htmlContent: a.sellerNick + " (" + a.sellerTotalTransaction + ")"
    }),
    c.reviewCommentContainers.sellerText = _gg.utilities.domGenerator({
        nodeType: "span",
        htmlContent: c.staticTexts.seller
    }),
    c.reviewCommentContainers.sellerInfoContentTxt = _gg.utilities.domGenerator({
        nodeType: "p",
        htmlContent: [c.reviewCommentContainers.sellerText, c.reviewCommentContainers.sellerInfoLink]
    }),
    c.reviewCommentContainers.sellerDetailInfo = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [d],
        htmlContent: c.reviewCommentContainers.sellerInfoContentTxt
    })),
    c.reviewCommentContainers.sellerDetailInfo
}
,
GG.Components.prototype.productReview.prototype.createUserDetailContainer = function(a) {
    var b = this
      , c = ""
      , d = "";
    null != a.buyerNick && (d = a.buyerNick,
    c = d),
    null != a.buyerTotalTransaction && (c += " (" + a.buyerTotalTransaction + ") ");
    var e = _gg.utilities.domGenerator({
        nodeType: "a",
        attributes: {
            href: b.staticData.profileLink + d,
            title: a.buyerNick,
            target: "_blank"
        },
        classNames: [b.staticData.classNames.userNickName],
        htmlContent: c
    })
      , f = a.insertDate.split(" ")
      , g = "";
    if (f[0]) {
        var h = f[0].split("-")
          , i = "/";
        g += h[2] + i + h[1] + i + h[0]
    }
    var j = _gg.utilities.domGenerator({
        nodeType: "span",
        classNames: [b.staticData.classNames.reviewDate],
        htmlContent: g
    });
    return _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.userDetailContainer],
        htmlContent: [e, j]
    })
}
,
GG.Components.prototype.productReview.prototype.createUserPicture = function(a, b) {
    var c = "";
    null != a.buyerNick && (c = a.buyerNick);
    var d = this;
    c = c.substring(0, 1).toUpperCase();
    var e = _gg.utilities.domGenerator({
        nodeType: "span",
        htmlContent: c
    })
      , f = 0;
    d.config.reviewSort > d.config.maxShowCount ? (d.config.reviewSort = 0,
    f = d.staticData.classNames.bgColors[0]) : (f = d.staticData.classNames.bgColors[0],
    d.config.reviewSort++);
    var g = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [d.staticData.classNames.pictureContent, f],
        htmlContent: e
    });
    return _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [d.staticData.classNames.pictureContainer],
        htmlContent: g
    })
}
,
GG.Components.prototype.productReview.prototype.createReviewRates = function(a) {
    var b = this;
    if (b.reviewInfoRates = {},
    b.config.getProductReviewInfo && b.config.getProductReviewRatesInfo)
        if (b.config.containers.reviewInfoContainer.length > 0) {
            var c = []
              , d = []
              , e = {};
            a.reverse(),
            $GG.each(a, function(a, b) {
                d[b.score] = b
            });
            for (var f = 5; f >= 1; f--)
                null != d[f] ? c.push(b.createReviewStarRow(d[f])) : (e = {
                    score: f,
                    count: 0,
                    scorePercentage: 0
                },
                c.push(b.createReviewStarRow(e)));
            c.length > 0 && (b.reviewInfoRates.starInfoList = _gg.utilities.domGenerator({
                nodeType: "ul",
                classNames: [b.staticData.classNames.starInfoList],
                htmlContent: c
            }),
            b.reviewInfoRates.reviewStarsListContent = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [b.staticData.classNames.reviewStarsListContent],
                htmlContent: [b.reviewInfoRates.starInfoList]
            }),
            b.reviewInfoRates.reviewStarsInfo = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [b.staticData.classNames.reviewStarsInfo],
                htmlContent: [b.reviewInfoRates.reviewStarsListContent]
            }),
            b.config.containers.reviewInfoContainer.append(b.reviewInfoRates.reviewStarsInfo))
        } else
            console.info("Please check the dom object for product review info container! ")
}
,
GG.Components.prototype.productReview.prototype.createReviewStarRow = function(a) {
    var b = this;
    null != a.score && "" != a.score || (a.score = 0);
    var c = "";
    return null != a.count && "" != a.count && 0 != a.count || (a.count = 0,
    c = b.staticData.classNames.disabledFilterClass),
    b.reviewInfoRates.starRateDetail = _gg.utilities.domGenerator({
        nodeType: "a",
        attributes: {
            href: "javascript:;",
            rev: a.score,
            rel: a.count
        },
        classNames: [b.staticData.classNames.starRateDetail],
        htmlContent: a.score + " " + b.staticTexts.star
    }),
    b.reviewInfoRates.starText = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starText],
        htmlContent: b.reviewInfoRates.starRateDetail
    }),
    b.reviewInfoRates.starPercentArea = _gg.utilities.domGenerator({
        nodeType: "div",
        attributes: {
            style: "width: " + a.scorePercentage.toFixed(0) + "%",
            rev: a.scorePercentage.toFixed(0)
        },
        classNames: [b.staticData.classNames.starPercentArea]
    }),
    b.reviewInfoRates.starPercentBg = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starPercentBg],
        htmlContent: [b.reviewInfoRates.starPercentArea]
    }),
    b.reviewInfoRates.starPercentContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starPercentContent],
        htmlContent: [b.reviewInfoRates.starPercentBg]
    }),
    b.reviewInfoRates.starReviewCount = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.starReviewCount],
        htmlContent: "(" + a.count + ")"
    }),
    b.reviewInfoRates.starRow = _gg.utilities.domGenerator({
        nodeType: "li",
        classNames: [b.staticData.classNames.starRow, c],
        htmlContent: [b.reviewInfoRates.starText, b.reviewInfoRates.starPercentContent, b.reviewInfoRates.starReviewCount]
    }),
    b.reviewInfoRates.starRow
}
,
GG.Components.prototype.productReview.prototype.createReviewTitle = function(a) {
    var b = this;
    b.reviewInfoContainers = {},
    b.config.getProductReviewInfo && null != a && (b.config.containers.reviewInfoContainer.length > 0 ? (b.reviewInfoContainers.catalogImageDom = _gg.utilities.domGenerator({
        nodeType: "img",
        attributes: {
            src: b.config.catalogImage,
            alt: b.config.catalogTitle,
            width: 70,
            height: 70
        }
    }),
    b.reviewInfoContainers.catalogImage = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.catalogImage],
        htmlContent: [b.reviewInfoContainers.catalogImageDom]
    }),
    b.reviewInfoContainers.catalogTitle = _gg.utilities.domGenerator({
        nodeType: "h2",
        htmlContent: b.config.catalogTitle
    }),
    b.reviewInfoContainers.starsContainer = b.createStarsContainer(a.averagePercentage.toFixed(0)),
    b.reviewInfoContainers.catalogPointContainer = b.createPointContainer(a.average, a.totalCount),
    b.reviewInfoContainers.titleContent = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.titleContent],
        htmlContent: [b.reviewInfoContainers.catalogTitle, b.reviewInfoContainers.starsContainer, b.reviewInfoContainers.catalogPointContainer]
    }),
    b.reviewInfoContainers.reviewTitle = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [b.staticData.classNames.reviewTitle],
        htmlContent: [b.reviewInfoContainers.catalogImage, b.reviewInfoContainers.titleContent]
    }),
    b.config.containers.reviewInfoContainer.append(b.reviewInfoContainers.reviewTitle)) : console.info("Please check the dom object for product review info container! "))
}
,
GG.Components.prototype.productReview.prototype.createPointContainer = function(a, b) {
    var c = this
      , d = {
        reviewPoint: c.staticData.classNames.reviewPoint,
        reviewLink: c.staticData.classNames.reviewLink,
        catalogPoint: c.staticData.classNames.catalogPointContainer,
        reviewLinkHtml: "(" + b + " " + c.staticTexts.userReview + ")"
    };
    c.pointContainers = {};
    var e = [];
    this.config.showOnlyCatalogReviewPoint && (d.reviewPoint = c.staticData.classNames.reviewPointSmall,
    d.reviewLink = c.staticData.classNames.reviewLinkSmall),
    this.config.showOnlyStars && (d.reviewLink = c.staticData.classNames.reviewLinkSmall,
    d.catalogPoint = c.staticData.classNames.catalogPointContainerSearchResult,
    d.reviewLinkHtml = "(" + b + ")"),
    this.config.showOnlyStars && (d.reviewPoint = ""),
    c.pointContainers.reviewPoint = _gg.utilities.domGenerator({
        nodeType: "strong",
        classNames: [d.reviewPoint],
        htmlContent: Number(a).toFixed(1) + " "
    }),
    e.push(c.pointContainers.reviewPoint);
    var f = "a";
    return this.config.getProductReviewComments && (f = "span",
    d.reviewLink = ""),
    c.pointContainers.reviewLink = _gg.utilities.domGenerator({
        nodeType: f,
        attributes: {
            href: "javascript:;"
        },
        classNames: [d.reviewLink],
        htmlContent: d.reviewLinkHtml
    }),
    e.push(c.pointContainers.reviewLink),
    c.pointContainers.catalogPointContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [d.catalogPoint],
        htmlContent: e
    }),
    c.pointContainers.catalogPointContainer
}
,
GG.Components.prototype.productReview.prototype.createStarsContainer = function(a) {
    var b = this
      , c = {
        shiningStars: b.staticData.classNames.shiningStarsLarge,
        dullStars: b.staticData.classNames.dullStarsLarge,
        starsContainer: b.staticData.classNames.starsContainer
    };
    return a = Number(a),
    b.starsContainers = {},
    this.config.showOnlyCatalogReviewPoint && (c = {
        shiningStars: b.staticData.classNames.shiningStarsSmall,
        dullStars: b.staticData.classNames.dullStarsSmall,
        starsContainer: b.staticData.classNames.starsContainer + " " + b.staticData.classNames.smallStarsContainer
    }),
    this.config.showOnlyStars && (c.shiningStars = b.staticData.classNames.smallStarsContainerSearchResult),
    b.starsContainers.shiningStarsLarge = _gg.utilities.domGenerator({
        nodeType: "div",
        attributes: {
            style: "width:" + a + "%",
            rev: a
        },
        classNames: [c.shiningStars]
    }),
    b.starsContainers.dullStarsLarge = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.dullStars],
        htmlContent: [b.starsContainers.shiningStarsLarge]
    }),
    b.starsContainers.starsContainer = _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.starsContainer],
        htmlContent: [b.starsContainers.dullStarsLarge]
    }),
    b.starsContainers.starsContainer
}
,
GG.Components.prototype.productReview.prototype.createAverageContent = function(a) {
    var b, c = this, d = null;
    return $GG.isNumeric(a.averagePercentage) && (d = c.createStarsContainer(a.averagePercentage.toFixed(0))),
    $GG.isNumeric(a.average) && $GG.isNumeric(a.totalCount) && (b = c.createPointContainer(a.average, a.totalCount)),
    null != d && null != b ? _gg.utilities.domGenerator({
        nodeType: "div",
        classNames: [c.staticData.classNames.reviewTitle, c.staticData.classNames.reviewTitleNoMargin],
        htmlContent: [d, b]
    }) : null
}
,
GG.Components.prototype.productReview.prototype.createLoadOthersContent = function() {
    if (this.seeOthersButtonContainer = null,
    this.config.showOtherReviews && this.createOthersContent && $GG("." + this.staticData.classNames.seeOthersButton).length < 1) {
        this.createOthersContent = !1;
        var a = this.staticTexts.seeOthers
          , b = this.staticTexts.seeOthers
          , c = "javascript:;";
        null != this.config.catalogReviewPageLink && (a = this.staticTexts.seeAll,
        b = this.staticTexts.seeAll,
        c = this.config.catalogReviewPageLink),
        null != this.config.catalogReviewPageLinkTitle && (b = this.config.catalogReviewPageLinkTitle),
        this.seeOthersButton = _gg.utilities.domGenerator({
            nodeType: "a",
            attributes: {
                href: c,
                title: b
            },
            classNames: [this.staticData.classNames.seeOthersButton],
            htmlContent: a
        }),
        this.seeOthersButtonContainer = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.classNames.showOtherContentContainer],
            htmlContent: [this.seeOthersButton]
        }),
        this.config.containers.reviewContainer.append(this.seeOthersButtonContainer)
    }
}
,
GG.Components.prototype.productReview.prototype.encodeHTML = function(a) {
    var b = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    return String(a).replace(/[&<>"'\/]/g, function(a) {
        return b[a]
    })
}
,
GG.Components.prototype.productReview.prototype.showLoadingContent = function(a) {
    if (this.config.showLoadingContent) {
        this.loadingContainers = {},
        $GG("." + this.staticData.classNames.loadingClassName).remove(),
        this.config.containers.generalContainer.find("." + this.staticData.classNames.loadingClassName).length < 1 && (this.loadingContainers.loadingContent = _gg.utilities.domGenerator({
            nodeType: "div",
            classNames: [this.staticData.classNames.loadingClassName],
            htmlContent: "&nbsp;"
        }),
        this.config.containers.generalContainer.append(this.loadingContainers.loadingContent));
        var b = this.config.containers.generalContainer.find("." + this.staticData.classNames.loadingClassName);
        a ? b.show() : b.hide()
    }
}
,
GG.Components.prototype.catalogCompatible = function(a) {
    var b = {
        _container: $GG("body"),
        _selectBox: "",
        _staticURL: ""
    };
    return this.config = $GG.extend(b, a),
    this._ggAction = _gg.controller.events.Actions,
    this._loading = '<span aria-label="Button busy" class="loadingSpinner" role="img"></span>',
    this._itemSlug = "",
    this._ajaxConfigCompatible = {
        type: "GET",
        dataType: "HTML"
    },
    this._sliderDefaults = {},
    this._viewedSlider,
    this._selectCount = 0,
    this._firstRequest = !0,
    this._select = $GG(a._selectBox).find("select"),
    this
}
,
GG.Components.prototype.catalogCompatible.prototype.init = function() {
    // var a = this;
    // a._ggAction;
    // if (0 == $GG("#" + a.config._container).length)
    //     return !1;
    // a.callAjax(a.config._staticURL),
    // a._select.change(function() {
    //     $GG("#" + a.config._container).empty(),
    //     a._firstRequest = !1,
    //     a.callAjax($GG(this).val())
    // })
}
,
GG.Components.prototype.catalogCompatible.prototype.callAjax = function(a) {
    var b = this;
    b._ggAction;
    b._ajaxConfigCompatible.url = a,
    b.ajaxCatalogCompatible = new _gg.communication.ajaxController(b._ajaxConfigCompatible),
    b.ajaxCatalogCompatible.tryOnce = !0,
    b.ajaxCatalogCompatible.ajaxAction(),
    b.loadingControl(),
    $GG(b.ajaxCatalogCompatible).bind(b.ajaxCatalogCompatible.COMPLETE_REQ, function(a, c) {
        var d = JSON.parse(b.ajaxCatalogCompatible.completeData);
        if ("" == d)
            return $GG(".product-compatible-title, #product-compatible").addClass("hidden"),
            !1;
        if (document.querySelectorAll("#productId").length > 0 && ($GG(".product-compatible-title").html(d.widgetTitle + " " + GG.Static.productStaticData.staticTexts().compatibleProductsTitle),
        $GG("#product-compatible").removeClass("hidden")),
        b._firstRequest) {
            b._select.find("option").eq(0).attr("value", b.config._staticURL);
            for (prop in d.categoryList) {
                var e = {};
                e.option = _gg.utilities.domGenerator({
                    nodeType: "option",
                    attributes: {
                        value: b.config._staticURL + b.urlParametersControl(b.config._staticURL) + "cat=" + prop
                    },
                    htmlContent: d.categoryList[prop]
                }),
                b._select.append(e.option)
            }
            $GG(b.config._selectBox).removeClass("hidden")
        }
        var f = [];
        for (prop in d.compatibleProducts) {
            var g = {};
            g.img = _gg.utilities.domGenerator({
                nodeType: "img",
                attributes: {
                    src: d.compatibleProducts[prop].image,
                    width: 200,
                    height: 200
                }
            }),
            g.title = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: ["productTitle"],
                htmlContent: d.compatibleProducts[prop].title
            }),
            g.subTitle = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: ["productSubTitle"],
                htmlContent: d.compatibleProducts[prop].subTitle
            }),
            g.price = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: ["price"],
                htmlContent: d.compatibleProducts[prop].price + " TL"
            });
            var h = "";
            d.compatibleProducts[prop].freeShipping ? (h += "<span class='icon'></span> Ücretsiz",
            d.compatibleProducts[prop].sameDayShipping && (h += "-Aynı Gün"),
            h += " Kargo") : h += "<span class='shippingBuyer'></span> Alıcı Öder",
            g.shipping = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: ["shippingFree"],
                htmlContent: h
            }),
            g.url = _gg.utilities.domGenerator({
                nodeType: "a",
                attributes: {
                    href: d.compatibleProducts[prop].url
                },
                htmlContent: [g.img, g.title, g.subTitle, g.price, g.shipping]
            }),
            g.container = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: ["compatibleProductsItem"],
                htmlContent: [g.url]
            }),
            g.li = _gg.utilities.domGenerator({
                nodeType: "li",
                htmlContent: [g.container]
            }),
            f.push(g.li)
        }
        var i = {};
        i.allItemsUL = _gg.utilities.domGenerator({
            nodeType: "ul",
            classNames: ["catalogItems"],
            htmlContent: f
        }),
        $GG("#" + b.config._container).append(i.allItemsUL),
        b.sliderSet($GG("#" + b.config._container).find("li").length),
        $GG("#" + b.config._container).find(".loadingSpinner").remove()
    })
}
,
GG.Components.prototype.catalogCompatible.prototype.urlParametersControl = function(a) {
    return a = a.indexOf("?") > -1 ? "&" : "?"
}
,
GG.Components.prototype.catalogCompatible.prototype.sliderSet = function(a) {
    var b = this
      , c = (b._ggAction,
    3)
      , d = 4
      , e = 5;
    a <= 4 && (c = d = e = a),
    b._sliderDefaults.containerId = b.config._container,
    b._sliderDefaults.bullets = !1,
    b._sliderDefaults.infinite = !0,
    b._sliderDefaults.transition = "slide",
    b._sliderDefaults.mobileScroll = !0,
    b._sliderDefaults.mainCoverContainer = ".widget-border",
    b._sliderDefaults.itemCount = {},
    b._sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.mobile] = 1,
    b._sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.tablet] = c,
    b._sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.desktop] = d,
    b._sliderDefaults.itemCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = e,
    b._sliderDefaults.stepCount = {},
    b._sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.mobile] = 1,
    b._sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.tablet] = c,
    b._sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.desktop] = d,
    b._sliderDefaults.stepCount[_gg.static.Enums.responsiveParameterNames.large_desktop] = e,
    b._viewedSlider = new _gg.components.slider(b._sliderDefaults),
    b._viewedSlider.init()
}
,
GG.Components.prototype.catalogCompatible.prototype.priceSyntax = function(a) {}
,
GG.Components.prototype.catalogCompatible.prototype.loadingControl = function() {
    var a = this;
    a._ggAction;
    $GG("#" + a.config._container).append(a._loading),
    $GG("#" + a.config._container).find(".loadingSpinner").css("left", ($GG("#" + a.config._container).find(".loadingSpinner").parent().innerWidth() - $GG("#" + a.config._container).find(".loadingSpinner").innerWidth()) / 2 + "px"),
    $GG("#" + a.config._container).find(".loadingSpinner").css("top", "20px")
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
GG.Static.CountDownStaticData = {
    counterClassNames: {
        day: "day",
        hour: "hour",
        min: "min",
        sec: "sec"
    },
    counterTextClassNames: {
        day: "day-text",
        hour: "hour-text",
        min: "min-text",
        sec: "sec-text"
    },
    dayInfoIdName: "day-info-txt",
    generalContainerName: "duration-con-first"
},
GG.Components.prototype.notificationController.prototype.eventController = function() {
    var a = _gg.controller.events.Actions
      , b = this;
    $GG(this.notificationCloseBtn).live(a.CLICK, function() {
        b.closeNotification()
    }),
    $GG(this.notificationContent).live(a.CLICK, function() {
        b.clickNotification(),
        b.config.closeOnClick && b.closeNotification()
    }),
    $GG(this.notificationContent).live(a.OVER, function() {
        b.hoverNotification()
    }),
    $GG(this.notificationContent).live(a.CANCEL, function() {
        b.leaveNotification()
    })
}
,
GG.Static.NotificationStaticData = {
    type: {
        success: "success",
        warning: "warning",
        error: "error",
        info: "info"
    },
    effects: {
        scale: "scale",
        jelly: "jelly",
        slide: "slide",
        genie: "genie",
        fade: "fade",
        thumbSlider: "thumbSlider"
    },
    style: {
        basic: "basic",
        slideOnTop: "slideOnTop",
        domNotification: "domNotification"
    },
    opacity: {
        opacity10: "opacity-10",
        opacity30: "opacity-30",
        opacity60: "opacity-60",
        opacity90: "opacity-90"
    },
    icons: {
        basket: "/fred/framework/assets/img/core/notification-icons/basket-icon-new.png",
        cargo: "/fred/framework/assets/img/core/notification-icons/cargo-icon.png",
        happy: "/fred/framework/assets/img/core/notification-icons/happy-icon.png",
        productBox: "/fred/framework/assets/img/core/notification-icons/product-box-icon.png",
        review: "/fred/framework/assets/img/core/notification-icons/review-icon.png",
        reviewNow: "/fred/framework/assets/img/core/notification-icons/review-now-icon.png",
        time: "/fred/framework/assets/img/core/notification-icons/time-icon.png"
    },
    defaultId: "body",
    overlayClass: "overlay",
    topLayer: "topLayer",
    effectClassName: "ntf-effect-",
    effectShow: "ntf-show",
    effectHide: "ntf-hide",
    ntfPos: "ntf-pos",
    ntfArrow: "ntf-arrow",
    ntfIcon: "ntf-icon",
    ntfThumbClassName: "ntf-thumb",
    ntfBorder: "ntf-border",
    ntfBgRed: "bg-red",
    ntfBgGreen: "bg-green",
    ntfBgYellow: "bg-yellow",
    ntfBgBlue: "bg-blue",
    ntfBorderGrid: "gg-d-6",
    ntfThumbGrid: "gg-w-6 gg-d-6 gg-t-5 gg-m-4 pl0",
    ntfContentClassName: "ntf-content",
    ntfCloseClassName: "notification-close",
    ntfTableCellClassName: "ntf-table-cell",
    ntfContentGrid: "gg-w-18 gg-d-18 gg-t-19 gg-m-20 pr0",
    ntfDefaultIconPath: "/fred/page-based/sell-form/img/retailwarning_img.png",
    containerClassName: "notificationContainer",
    prependClassName: "prependContainer",
    padding15: "p15",
    containerGridClassName: "gg-w-5 gg-d-8 gg-t-10 gg-m-24",
    defaultGridClass: "gg-w-24 gg-d-24 gg-t-24 gg-m-24",
    contentClassName: "notificationContent",
    clearFix: "clearfix",
    topNtfThumbClassName: "gg-w-2 gg-d-4 gg-t-6 gg-m-6 txt_center",
    topNtfContentClassName: "gg-w-22 gg-d-20 gg-t-18 gg-m-18"
},
GG.Components.prototype.notificationController.prototype.openNotification = function() {
    this.staticData = _gg.static.NotificationStaticData,
    this.config.effect && _gg.utilities.hasCss3Support ? ($GG(this.notificationContent).removeClass(this.staticData.effectHide),
    $GG(this.notificationContent).addClass(this.staticData.effectShow)) : $GG(this.notificationContent).fadeIn(500)
}
,
GG.Components.prototype.notificationController.prototype.closeNotification = function() {
    var a = this;
    _gg.utilities.hasCss3Support ? ($GG(a.notificationContent).removeClass(a.staticData.effectShow),
    setTimeout(function() {
        $GG(a.notificationContent).addClass(a.staticData.effectHide)
    }, 25),
    a.config.effect == a.staticData.effects.thumbSlider ? $GG(a.ntfThumb).on("animationend webkitAnimationEnd oAnimationEnd", function() {
        $GG(a.notificationContent).remove(),
        a.config.overlay && ($GG("." + a.staticData.overlayClass).remove(),
        a.container.removeClass(a.staticData.topLayer)),
        a.config.style == a.staticData.style.domNotification && (a.container.removeClass(a.staticData.ntfPos),
        a.container.find("." + a.staticData.style.contentClassName).remove())
    }) : ($GG(a.notificationContent).hasClass(a.staticData.effectHide) && $GG(a.notificationContent).remove(),
    $GG(a.notificationContent).on("animationend webkitAnimationEnd oAnimationEnd", function() {
        $GG(a.notificationContent).remove(),
        a.config.overlay && ($GG("." + a.staticData.overlayClass).fadeOut(500).remove(),
        a.container.removeClass(a.staticData.topLayer)),
        a.config.style == a.staticData.style.domNotification && (a.container.find("." + a.staticData.contentClassName).remove(),
        a.container.removeClass(a.staticData.ntfPos))
    }))) : ($GG(a.notificationContent).fadeOut(500, function() {
        $GG(a.notificationContent).remove()
    }),
    a.config.overlay && ($GG("." + a.staticData.overlayClass).remove(),
    a.container.removeClass(a.staticData.topLayer)),
    a.config.style == a.staticData.style.domNotification && (a.container.removeClass(a.staticData.ntfPos),
    a.container.find("." + a.staticData.style.contentClassName).remove())),
    a.config.close() && $GG(a).trigger(a.config.close())
}
,
GG.Components.prototype.notificationController.prototype.clickNotification = function() {
    this.config.click() && $GG(this).trigger(this.config.click())
}
,
GG.Components.prototype.notificationController.prototype.hoverNotification = function() {
    this.killTimeOut(),
    stopNotification = !0,
    this.config.hover() && $GG(this).trigger(this.config.hover())
}
,
GG.Components.prototype.notificationController.prototype.leaveNotification = function() {
    stopNotification = !1,
    this.createTimeOut()
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
GG.Static.productReviewStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.userReview = "Kullanıcı Değerlendirmesi",
            a.star = "Yıldız",
            a.seller = "Satıcı : ",
            a.helpfulText = "Bu yorumlar size yardımcı oldu mu?",
            a.likeText = "Evet",
            a.disLikeText = "Hayır",
            a.seeOthers = "Diğerlerini Gör",
            a.seeAll = "Tümünü Gör",
            a.noComment = "Bu değerlendirme için bir yorum bırakılmamıştır";
            break;
        case GG.Static.Enums.lang.ENG:
            a.userReview = "User Review",
            a.star = "Star",
            a.seller = "Seller :",
            a.helpfulText = "Is this comments are helpful?",
            a.likeText = "Yes",
            a.disLikeText = "No",
            a.seeOthers = "See Others",
            a.seeAll = "See All",
            a.noComment = "There is no comment for this review"
        }
        return a
    },
    classNames: {
        loadingClassName: "ajax-loading",
        catalogReviewClearfix: "clearfix",
        productReviewId: "product-review-",
        catalogGroupPointId: "catalog-group-point-",
        catalogGroupInfoTitle: "catalog-group-info-title",
        catalogGroupInfoTitleNormal: "normal",
        catalogGroupInfoEmpty: "empty",
        reviewTitle: "catalog-review-title clearfix",
        reviewTitleNoMargin: "m0",
        catalogImage: "gg-d-2 gg-t-4 gg-m-5 catalog-review-image",
        titleContent: "gg-d-22 gg-t-20 gg-m-19",
        starsContainer: "stars-container mr10",
        smallStarsContainer: "small-container",
        smallStarsContainerSearchResult: "catalog-icons shining-stars-small",
        dullStarsLarge: "catalog-icons dull-stars-large",
        shiningStarsLarge: "catalog-icons shining-stars-large",
        catalogPointContainer: "gg-d-15 gg-t-16 gg-m-24 pt15 pr0 pl0 catalog-point-container",
        catalogPointContainerSearchResult: "gg-w-6 gg-d-8 gg-t-6 gg-m-6 mt10 padding-none catalog-point-container",
        reviewPoint: "catalog-review-point",
        reviewPointSmall: "catalog-review-point-small",
        reviewLink: "catalog-review-link",
        reviewLinkSmall: "catalog-review-link-small",
        reviewStarsInfo: "catalog-review-stars-info clearfix",
        reviewStarsListContent: "gg-d-12 gg-w-10 gg-t-24 gg-m-24 star-info-list",
        starInfoList: "star-info-list",
        starInfoRow: "star-info-row",
        starRow: "clearfix gg-d-24 star-info-row",
        starText: "gg-d-3 gg-m-4 star-text-info padding-none",
        starRateDetail: "star-rate-detail",
        starPercentContent: "gg-d-18 gg-m-17",
        starPercentBg: "review-point-percent-bg",
        starPercentArea: "review-point-percent",
        starReviewCount: "gg-d-3 star-text-info star-rate-count padding-none",
        reviewCommentClass: "user-catalog-review",
        reviewCommentContainer: "user-catalog-review clearfix",
        reviewUserInfo: "gg-w-3 gg-d-3 gg-t-4 gg-m-24 pl0 user-detail-info",
        pictureContainer: "gg-d-24 gg-t-24 gg-m-4 padding-none",
        pictureContent: "user-profile-picture",
        bgColors: {
            0: "bg-blue",
            1: "bg-green",
            2: "bg-red",
            3: "bg-yellow"
        },
        userDetailContainer: "gg-d-24 gg-t-24 gg-m-20 padding-none user-detail-container",
        userNickName: "user-nick-name",
        reviewDate: "user-catalog-review-date",
        commentContainer: "gg-d-16 gg-t-20 gg-m-24 clearfix",
        reviewHeader: "user-catalog-review-header clearfix",
        reviewStars: "user-catalog-review-stars gg-d-24 padding-none",
        dullStarsSmall: "catalog-icons dull-stars-small",
        shiningStarsSmall: "catalog-icons shining-stars-small",
        starsPointContent: "left",
        reviewCommentContent: "user-catalog-review-comment clearfix",
        noComment: "no-comment  mt20",
        disabledFilterClass: "disabled-filter",
        catalogReviewResult: "user-catalog-review-result gg-d-1 gg-m-2 padding-none",
        positiveComment: "catalog-icons positive-review",
        negativeComment: "catalog-icons negative-review",
        catalogReviewComment: "user-catalog-review-comment-detail gg-d-23 gg-m-22 pl0",
        helpfulContainer: "user-catalog-review-comment-detail gg-d-23 pl0 gg-d-push-1",
        helpfulContentClass: "helpful-review",
        helpfulContent: "helpful-review clearfix",
        sellerInfoContainer: "seller-info-container gg-d-24 padding-none mrb20",
        helpfulTextContent: "left pr10",
        helpfulButtonsContent: "gg-m-24 clearfix helpful-buttons-content",
        likeButtonContent: "left pl10 pr10",
        pointContainerClass: "point-container",
        positivePointContainer: "positive-point",
        thumbsUpIcon: "catalog-icons thumbs-up",
        pointCount: "point-count",
        disLikeButtonContent: "left pl10",
        thumbsDownIcon: "catalog-icons thumbs-down",
        negativePointContainer: "negative-point",
        showOtherContentContainer: "gg-d-24",
        seeOthersButton: "see-all-catalog-review"
    },
    profileLink: "https://profil.gittigidiyor.com/",
    loginLink: "https://www.gittigidiyor.com/uye-girisi?url=",
    ajaxUrls: {
        urls: {
            catalogReviewCatalog: "/xhr/catalog-review/catalog",
            catalogReviewCatalogGroup: "/xhr/catalog-review/group",
            catalogsReviewAjax: "/xhr/catalog-review/catalogs",
            catalogsReviewGroupAjax: "/xhr/catalog-review/groups",
            catalogAverageAjax: "/xhr/catalog-review/catalog/details",
            likeReviewAjax: "/xhr/catalog-review/review/like",
            disLikeReviewAjax: "/xhr/catalog-review/review/dislike"
        },
        catalogReviewAjax: {
            type: "GET",
            url: "/xhr/catalog-review/catalog",
            ajaxInfo: {},
            request: {},
            postParams: {
                catalogId: null,
                groupId: null,
                requestFields: "reviewRate,reviewRate.rates,reviews",
                reviewOrder: "ascending",
                reviewOrderField: "id",
                state: "confirmed",
                limit: 3,
                offset: 0
            }
        },
        catalogsReviewAjax: {
            type: "GET",
            url: "/xhr/catalog-review/groups",
            ajaxInfo: {},
            request: !0,
            postParams: {
                groupIds: null,
                requestFields: "reviewRate",
                reviewOrder: "ascending",
                reviewOrderField: "id",
                state: "confirmed",
                limit: 3,
                offset: 0
            }
        },
        catalogAverageAjax: {
            type: "POST",
            url: "/xhr/catalog-review/catalog/details",
            request: !0,
            ajaxInfo: {},
            postParams: {
                catalogId: null,
                groupId: null,
                requestFields: "reviewRate"
            }
        },
        likeReviewAjax: {
            type: "GET",
            url: "/xhr/catalog-review/review/like",
            request: !0,
            ajaxInfo: {},
            postParams: {
                reviewId: null,
                catalogId: null
            }
        },
        disLikeReviewAjax: {
            type: "GET",
            url: "/xhr/catalog-review/review/dislike",
            request: !0,
            ajaxInfo: {},
            postParams: {
                reviewId: null,
                catalogId: null
            }
        }
    }
},
GG.Components.prototype.productReview.prototype.showNextPage = function() {
    var a = this.config.ajaxUrls.catalogReviewAjax
      , b = a.postParams;
    0 == b.offset ? b.offset = b.offset + this.config.maxShowCount : b.offset = b.offset + this.config.showOthersCount,
    b.limit = this.config.showOthersCount,
    a.postParams = b,
    this.config.getProductReviewInfo = !1,
    this.config.getProductReviewRatesInfo = !1,
    this.getAjaxData(this.config.containers.reviewContainer, a, !0)
}
,
GG.Components.prototype.productReview.prototype.getRateComments = function(a, b) {
    if (this.config.containers.reviewCommentsContainer && this.config.containers.reviewContainer) {
        var c = a.attr("rev")
          , d = this.config.ajaxUrls.catalogReviewAjax
          , e = d.postParams;
        e.offset = 0,
        b ? e.rate = c : delete e.rate,
        d.postParams = e;
        var f = a.attr("rel");
        e.hasOwnProperty("rate") || (f = 0),
        this.config.reviewTotalCount = f,
        this.config.getProductReviewInfo = !1,
        this.config.getProductReviewRatesInfo = !1,
        this.config.containers.reviewCommentsContainer.empty(),
        this.getAjaxData(this.config.containers.reviewContainer, d, !0)
    }
}
,
GG.Components.prototype.productReview.prototype.likeReview = function(a, b) {
    if (this.config.isLogin) {
        var c = this.config.ajaxUrls.likeReviewAjax;
        c.postParams.reviewId = a,
        c.postParams.catalogId = b,
        this.getAjaxData(this.config.containers.reviewContainer, c, !0)
    } else
        document.location.href = _gg.static.productReviewStaticData.loginLink + this.getDocumentUrl() + "?likeReviewId=" + a + "-" + b
}
,
GG.Components.prototype.productReview.prototype.disLikeReview = function(a, b) {
    if (this.config.isLogin) {
        var c = this.config.ajaxUrls.disLikeReviewAjax;
        c.postParams.reviewId = a,
        c.postParams.catalogId = b,
        this.getAjaxData(this.config.containers.reviewContainer, c, !0)
    } else
        document.location.href = _gg.static.productReviewStaticData.loginLink + this.getDocumentUrl() + "?dislikeReviewId=" + a + "-" + b
}
,
GG.Components.prototype.productReview.prototype.slideToMainContainer = function() {
    var a = this;
    a.config.containers.scrollContainer.length > 0 && $GG("body,html").animate({
        scrollTop: a.config.containers.scrollContainer.offset().top - 96
    }, 800)
}
,
GG.Components.prototype.productReview.prototype.getDocumentUrl = function() {
    return _gg.utilities.ServerNameGenerator() + document.location.pathname
}
,
GG.Components.prototype.productReview.prototype.reviewEventController = function() {
    var a = _gg.controller.events.Actions
      , b = this;
    b.triggerEventController = !1,
    $GG(b.pointContainers.reviewLink).live(a.CLICK, function() {
        b.slideToMainContainer()
    }),
    b.config.getProductReviewComments && b.config.getProductReviewRatesInfo && ($GG("." + this.staticData.classNames.seeOthersButton).live(a.CLICK, function() {
        null == b.config.catalogReviewPageLink && b.showNextPage()
    }),
    $GG("." + b.staticData.classNames.positivePointContainer).live(a.CLICK, function() {
        b.likeReview($GG(this).attr("rev"), $GG(this).attr("rel"))
    }),
    $GG("." + b.staticData.classNames.negativePointContainer).live(a.CLICK, function() {
        b.disLikeReview($GG(this).attr("rev"), $GG(this).attr("rel"))
    }),
    $GG("." + b.staticData.classNames.starInfoRow).live(a.CLICK, function() {
        if (!$GG(this).hasClass(b.staticData.classNames.disabledFilterClass)) {
            var a = !0;
            $GG(this).hasClass("selected") ? (a = !1,
            $GG(this).removeClass("selected"),
            $GG("." + b.staticData.classNames.starInfoRow).removeClass("unselected")) : ($GG("." + b.staticData.classNames.starInfoRow).removeClass("selected"),
            $GG(this).addClass("selected").siblings().addClass("unselected"),
            $GG(this).removeClass("unselected")),
            b.getRateComments($GG(this).find("." + b.staticData.classNames.starRateDetail), a)
        }
    }))
}
,
GG.Static.productStaticData = {
    staticTexts: function() {
        var a = this;
        switch (GG.Static.globalParameters.lang) {
        case GG.Static.Enums.lang.TR:
            a.errorTitle = "Hata!",
            a.productCatalogInfoError = "Teknik özellikler bulunamamaktadır. Lütfen daha sonra tekrar deneyiniz.",
            a.productCatalogInfoText = "Belirtilen tüm özellikler bilgilendirme amaçlı olup, farklı nitelikte özellikler olabilir. Ürünü satın almadan evvel ürünü satan satıcı ile teyit etmenizi öneririz.",
            a.subscribleProduct = "Aboneliğe Uygun Ürün",
            a.subscribedProduct = "Bu ürüne abonesiniz",
            a.showMore = "Daha Fazla Göster",
            a.showLess = "Daha Az Göster",
            a.undefined = "Belirtilmemiş",
            a.badRequest = "Yaptığınız istek hatalı. Lütfen tekrar deneyiniz.",
            a.badRequestField = "Yaptığınız istek hatalı. Lütfen uyumlu bir %s% yazın! (Örnek: %ss%)",
            a.badRequestForPeriod = "Lütfen periodunuzu %s% değerinden küçük bir değer girin!",
            a.badRequestForZeroPeriod = "Lütfen periodunuzu 0 değerinden büyük bir değer girin!",
            a.badRequestQuantity = "Lütfen bir adet girin.",
            a.watched = "İzlemede",
            a.addToWatch = "İzlemeye Al",
            a.specNames = {
                brand: "Marka",
                serial: "Seri",
                modalName: "Model"
            },
            a.subscribeTexts = {
                period: "Sıklık:",
                amount: "Adet:",
                daysLeft: "Kalan gün:",
                hourLeft: "Kalan saat:"
            },
            a.frequencyTypesText = {
                weekly: "Hafta",
                monthly: "Ay",
                daily: "Gün"
            },
            a.hour = "Saat",
            a.minute = "Dk.",
            a.quantityErrorMessages = {
                maxLimit: "Bu üründen en fazla $Q$ adet alabilirsiniz. Devam etmek için lütfen ürün adedini değiştirin.",
                oneProduct: "Stokta 1 adet ürün bulunmaktadır."
            },
            a.compatibleProductsTitle = "ile birlikte ihtiyacınız olabilecek ürünler";
            break;
        case GG.Static.Enums.lang.ENG:
            a.errorTitle = "Error!",
            a.productCatalogInfoError = "Thecnical Details cannot be found. Please try again later.",
            a.productCatalogInfoText = "All the features mentioned are for informational purposes and may have different qualities. We recommend that you confirm with the seller who sold the product before purchasing the product.",
            a.showMore = "Show More",
            a.showLess = "Show Less",
            a.subscribleProduct = "Subscrible product",
            a.subscribedProduct = "You have already subscribed to this product",
            a.undefined = "Undefined",
            a.badRequest = "Your request is not valid. Please try again.",
            a.badRequestField = "Your request is not valid. Please write a compatible %s%! (%ss%)",
            a.badRequestForPeriod = "Please enter a period less than %s%!",
            a.badRequestForZeroPeriod = "Please enter a period more than 0",
            a.badRequestQuantity = "Please enter quantity field.",
            a.watched = "Watched",
            a.addToWatch = "Add to Watch",
            a.specNames = {
                brand: "Brand",
                serial: "Serial",
                modalName: "Model"
            },
            a.subscribeTexts = {
                period: "Period:",
                amount: "Amount:",
                daysLeft: "Days Left:",
                hourLeft: "Hours Left:"
            },
            a.frequencyTypesText = {
                weekly: "Week",
                monthly: "Month",
                daily: "Day"
            },
            a.hour = "Hour",
            a.minute = "Min.",
            a.quantityErrorMessages = {
                maxLimit: "Maximum product count that you can add to your cart is $Q$. Please change quantity to continue.",
                oneProduct: "We have 1 product in stock."
            },
            a.compatibleProductsTitle = " "
        }
        return a.defaultSpecNames = {
            Marka: "brand",
            Seri: "serial",
            Model: "modal"
        },
        a.tabNames = {
            detail: "product-detail",
            catalog: "product-catalog",
            review: "product-review",
            installments: "product-installments",
            cargo: "product-cargo-info",
            seller: "product-seller-info"
        },
        a.tabClassNames = {
            detail: "ProDesc",
            catalog: "load-catalog-info",
            review: "product-examination",
            installments: "ins-info",
            cargo: "cargo-info",
            seller: "seller-comments"
        },
        a.subscribeClassNames = {
            unsubscribed: "unsubscribed",
            subscribed: "subscribed",
            iconClock: "icon-clock",
            iconConfirm: "icon-confirm",
            iconInfo: "icon-info",
            infoText: "text",
            btnTooltip: "btn-tooltip",
            tooltipContainer: "tooltip",
            tooltipContent: "tooltip-content"
        },
        a
    },
    classNames: {
        errorBox: "error-box gg-d-24 show",
        iconAttention: "icon-attention",
        successBox: "success-box gg-d-24 show"
    },
    statusType: {
        success: "success",
        error: "error",
        failure: "failure"
    },
    frequencyTypes: {
        weekly: "WEEKLY",
        monthly: "MONTHLY",
        daily: "DAILY"
    },
    selectableFrequencyTypes: {
        WEEKLY: 52,
        MONTHLY: 12,
        DAILY: 365
    },
    loginLink: "https://www.gittigidiyor.com/uye-girisi?url=",
    ajaxUrls: {
        catalogInfo: "/catalog-info-ajax",
        similarProducts: "/seller-similar-products",
        getViewCount: "/product-view-count",
        getShippingInfo: "/product-shipping-info",
        getPaymentTable: "/product-payment-table",
        getSellerComments: "/seller-comments-ajax",
        getProductReviews: "/product-reviews-ajax",
        getLastSeenProducts: "/last-seen-products",
        getDescriptionVersion: "/product-description-version",
        addToWatch: "/add-watch-ajax",
        checkSubscription: "/check-subscription-ajax",
        saveSubscription: "/save-subscription-ajax",
        updateProductCookies: "/update-product-cookies",
        getProductSaleInfo: "/product-sale-ajax",
        getProductDiscountPrices: "/product-discount-prices-ajax",
        getWatched: "/get-watched-ajax"
    },
    moexDiscounts: [4997, 4998, 4999, 5e3, 5001, 5002, 5193, 5194, 5195, 5196, 5197, 5198, 5199, 5200, 5201, 5202, 5203, 5204, 5572, 5573, 5574, 5575, 5576, 5577, 5578, 5579, 5580, 5581, 5582, 5583, 5584, 5585, 5586, 5587, 5588, 5589, 5590, 5591, 5592],
    visaDiscounts: [],
    bkmDiscounts: [5374, 5441, 5442, 5443, 5444, 5445],
    disallowedDiscounts: ["BKM", "Visa", "Paypal"]
};
var productReviewController = {
    init: function() {
        this.functions.constructor = this,
        this.ua = navigator.userAgent,
        this.staticData = _gg.static.productReviewStaticData,
        this.staticTexts = this.staticData.staticTexts(),
        this._ggAction = _gg.controller.events.Actions,
        this.responsiveState = _gg.static.globalParameters.responsiveState,
        this.dislikeReviewId = null,
        this.likeReviewId = null,
        this.isUserLogin = !1,
        this._ajaxConfig = {
            type: "POST",
            dataType: "json",
            communicationType: "application/x-www-form-urlencoded; charset=UTF-8",
            timeOut: 2e4,
            likeReview: {
                url: this.staticData.ajaxUrls.urls.likeReviewAjax
            },
            dislikeReview: {
                url: this.staticData.ajaxUrls.urls.disLikeReviewAjax
            }
        },
        this.doms = {}
    },
    onload: function() {
        this.doms = {},
        this.dislikeReviewId = _gg.utilities.getQueryString("dislikeReviewId"),
        this.likeReviewId = _gg.utilities.getQueryString("likeReviewId"),
        setLoginAction.push(this.functions.controlLoginAction),
        this.bindActions()
    },
    bindActions: function() {
        var a = this
          , b = a._ggAction;
        if ($GG("#product-review-professional").length > 0 && ($GG("#professionalReviewContent").find("img").remove(),
        $GG("#product-review-professional").find(".seller-info-container").bind(b.CLICK, function() {
            $GG("#professionalReviewContent").hasClass("hidden") ? ($GG("#professionalReviewContent").removeClass("hidden"),
            $GG("#professionalReviewContent").prev().addClass("hidden"),
            $GG(this).find("span").eq(0).text("Kapat"),
            $GG(this).find("span").eq(1).removeClass("arrowDown"),
            $GG(this).find("span").eq(1).addClass("arrowUp")) : ($GG("#professionalReviewContent").addClass("hidden"),
            $GG("#professionalReviewContent").prev().removeClass("hidden"),
            $GG(this).find("span").eq(0).text("Devamını Oku"),
            $GG(this).find("span").eq(1).addClass("arrowDown"),
            $GG(this).find("span").eq(1).removeClass("arrowUp"),
            $GG("body,html").stop().animate({
                scrollTop: Number($GG("#product-review-professional").offset().top - 200)
            }, 500))
        })),
        $GG(".product-review-page").length > 0) {
            if ($GG(".point-container").bind(b.CLICK, function() {
                a._ajaxConfig.url = a._ajaxConfig.likeReview.url,
                $GG(this).hasClass(a.staticData.classNames.negativePointContainer) && (a._ajaxConfig.url = a._ajaxConfig.dislikeReview.url),
                a.functions.likeDislikeAction(a._ajaxConfig.url, $GG(this).attr("rev"), $GG(this).attr("rel"))
            }),
            $GG(".review-pager-container").length > 0) {
                var c = $GG(".pager li").length;
                $GG(".review-pager-container ul").width(41 * c),
                $GG(".mobile-pager").find("strong").css("margin", "10px"),
                $GG(".pager ul .previous-link").length < 1 && $GG(".mobile-pager .previous-link").addClass("hidden"),
                $GG(".pager ul .next-link").length < 1 && $GG(".mobile-pager .next-link").addClass("hidden");
                var d = $GG(".mobile-pager").clone();
                $GG(".mobile-pager").remove(),
                $GG("#catalog-review-main-page .boxContent").append(d),
                a.functions.controlReviewPagerVisible(),
                $GG(".mobile-pager .next-link a").live(b.CLICK, function() {
                    document.location.href = $GG(".review-pager-container .next-link a").attr("href")
                }),
                $GG(".mobile-pager .previous-link a").live(b.CLICK, function() {
                    document.location.href = $GG(".review-pager-container .previous-link a").attr("href")
                }),
                $GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
                    a.functions.controlReviewPagerVisible()
                })
            }
            $GG(window).on("scroll", function(a) {
                if ($GG(".catalog-review-stars-info").length > 0) {
                    $GG(document).scrollTop() > $GG(".catalog-review-stars-info").offset().top ? $GG("#product-review-fixed-header").removeClass("hidden") : $GG("#product-review-fixed-header").addClass("hidden")
                }
            })
        }
    },
    functions: {
        controlLoginAction: function(a) {
            var b = this;
            b.constructor;
            null != a.memberId && (productReviewController.isUserLogin = !0),
            productReviewController.functions.controlLikeDislikeQuery()
        },
        controlLikeDislikeQuery: function() {
            var a = this
              , b = a.constructor
              , c = [];
            null != b.dislikeReviewId && (b._ajaxConfig.url = b._ajaxConfig.dislikeReview.url,
            c = b.dislikeReviewId.split("-")),
            null != b.likeReviewId && (b._ajaxConfig.url = b._ajaxConfig.likeReview.url,
            c = b.likeReviewId.split("-")),
            a.likeDislikeAction(b._ajaxConfig.url, c[0], c[1])
        },
        likeDislikeAction: function(a, b, c) {
            var d = this
              , e = d.constructor
              , f = "likeReviewId";
            if (null != b && null != c && null != a)
                if (a == e._ajaxConfig.dislikeReview.url && (f = "dislikeReviewId"),
                a += "?reviewId=" + b + "&catalogId=" + c,
                e._ajaxConfig.url = a,
                e.isUserLogin) {
                    e._ajaxConfig.type = "GET",
                    e._ajaxConfig.dataType = "json",
                    e.ajaxLikeDislikeCtrl = new _gg.communication.ajaxController(e._ajaxConfig),
                    e.ajaxLikeDislikeCtrl.tryOnce = !1,
                    e.ajaxLikeDislikeCtrl.ajaxAction();
                    var g = new _gg.utilities.ajaxObserver;
                    g.init(),
                    g.add(e.ajaxLikeDislikeCtrl),
                    e.ajaxLikeDislikeCtrl.completeReq = function() {
                        var a = e.ajaxLikeDislikeCtrl.completeData
                          , b = $GG("#" + e.staticData.classNames.productReviewId + a.reviewId);
                        b.length > 0 ? ($GG("body,html").stop().animate({
                            scrollTop: Number(b.offset().top)
                        }, 500),
                        a.hasOwnProperty("likeCount") && a.likeCount > 0 && b.find("." + e.staticData.classNames.positivePointContainer + " ." + e.staticData.classNames.pointCount).html(" (" + a.likeCount + ")"),
                        a.hasOwnProperty("dislikeCount") && a.dislikeCount > 0 && b.find("." + e.staticData.classNames.negativePointContainer + " ." + e.staticData.classNames.pointCount).html(" (" + a.dislikeCount + ")")) : d.notifyUser("Tebrikler oyunuz kaydedildi")
                    }
                    ,
                    e.ajaxLikeDislikeCtrl.errorReq = function() {
                        var a = e.ajaxLikeDislikeCtrl.completeData;
                        if (null != (a = JSON.parse(a.responseText)) && null != a.error && a.error.hasOwnProperty("message")) {
                            var c = $GG("#" + e.staticData.classNames.productReviewId + b);
                            c.length > 0 ? ($GG("body,html").stop().animate({
                                scrollTop: Number(c.offset().top)
                            }, 500),
                            c.find("." + e.staticData.classNames.helpfulContentClass).find(".FormTxtErr").length < 1 && c.find("." + e.staticData.classNames.helpfulContentClass).append($GG('<div class="FormTxtErr gg-d-24 pl0"/>').text(a.error.message))) : d.notifyUser(a.error.message)
                        }
                    }
                } else
                    document.location.href = e.staticData.loginLink + d.getDocumentUrl() + "?" + f + "=" + b + "-" + c
        },
        controlReviewPagerVisible: function() {
            _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? $GG(".review-pager-container").addClass("hidden") : $GG(".review-pager-container").removeClass("hidden")
        },
        getAjaxHost: function() {
            return _gg.utilities.ServerNameGenerator() + "/xhr"
        },
        getDocumentUrl: function() {
            return _gg.utilities.ServerNameGenerator() + document.location.pathname
        },
        notifyUser: function(a) {
            try {
                var b = {
                    position: _gg.static.Enums.positions.bottomLeft,
                    type: _gg.static.NotificationStaticData.type.info,
                    style: _gg.static.NotificationStaticData.style.basic,
                    effect: _gg.static.NotificationStaticData.effects.fade,
                    content: a,
                    thumbPath: "/fred/framework/assets/img/core/notification-icons/review-now-icon.png",
                    prepend: !0,
                    backgroundImg: !0,
                    duration: 4e3
                };
                _gg.components.notification(b)
            } catch (a) {}
        }
    }
};
productReviewController.init(),
$GG(document).ready(function() {
    productReviewController.onload()
});
var productPageScriptController = {
    init: function() {
        this.functions.constructor = this,
        this.imgDimensionConfig = {
            targetContainerSelector: ".gray-content",
            targetImgSelector: ".lazyload-img"
        },
        this.sliderDefaults = {
            containerId: "product-viewed-con",
            infinite: !0,
            bullets: !1
        },
        this.ajaxHost = this.functions.getAjaxHost(),
        this.productRoute = null,
        this.serverDate = new Date,
        this.hour = this.serverDate.getHours(),
        this.min = this.serverDate.getMinutes(),
        this.sec = this.serverDate.getSeconds(),
        this.ua = navigator.userAgent,
        this._ggAction = _gg.controller.events.Actions,
        this.responsiveState = _gg.static.globalParameters.responsiveState,
        this.jzSpinArr = ["175247822", "179127661", "175944830", "179585501", "181528675", "181529140", "181529270", "181529358", "181529499", "181530050"],
        this.videoArr = ["208671031"],
        this.photoHeight = $GG("#img-cover").height(),
        this.preview = !0,
        this.viewCount = !0,
        this.zoomEnable = !1,
        this.cookieConnection = new _gg.communication.cookieCommunication,
        this.defaultNotificationDuration = 6e3,
        this.zoomMagnify = 1,
        this.staticData = _gg.static.productStaticData,
        this.staticTexts = this.staticData.staticTexts(),
        this.socketObj = {},
        this.socketObj.item = null,
        this.socketObj.cart = null,
        this.socketObj.paynemt = null,
        this.isProductRecognitionEnabled = !1,
        this.showUserFixPackPopUp = !1,
        this.viewedDisplayed = !0,
        this.getProductCatalogReviews = !0,
        this.scrollToCatalogReviews = !0,
        this.isReviewClicked = !1,
        this.isCommentClicked = !1,
        this.isCatalogClicked = !1,
        this.isInsClicked = !1,
        this.lastViewed = !0,
        this.productUi = $GG(".product-ui").is(":visible"),
        this.memberSimilarProducts = !0,
        this.similarProducts = !0,
        this.isCargoClicked = !1,
        this.ntfShow = {
            cart: !1,
            item: !1,
            param: null
        },
        this.stopSocket = !1,
        this.isUserLoyal = !1,
        this.letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzàáÀ??éèÈÉíì??Ìï??óòÓÒúùÚÙ",
        this.trLetters = "ÇçÖöİiÜüĞğŞşı",
        this.numbers = "1234567890",
        this.signs = ",.:;@-'",
        this.mathsigns = "+-=()*/",
        this.custom2 = " _!'-,.*&+()[]=\"",
        this.custom = "<>#$%&?¿",
        this.titleShowLength = 60,
        this.fixedHeaderControlValue = 400,
        this.maxSpecShow = 5,
        this._ajaxConfig = {
            type: "POST",
            dataType: "json",
            communicationType: "application/x-www-form-urlencoded; charset=UTF-8",
            timeOut: 2e5,
            catalogInfo: {
                url: this.ajaxHost + this.staticData.ajaxUrls.catalogInfo
            },
            similarProducts: {
                url: this.ajaxHost + this.staticData.ajaxUrls.similarProducts
            },
            getViewCount: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getViewCount
            },
            getShippingInfo: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getShippingInfo
            },
            getPaymentTable: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getPaymentTable
            },
            getSellerComments: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getSellerComments
            },
            getLastSeenProducts: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getLastSeenProducts
            },
            getDescriptionVersion: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getDescriptionVersion
            },
            addToWatch: {
                url: this.ajaxHost + this.staticData.ajaxUrls.addToWatch
            },
            checkSubscription: {
                url: this.ajaxHost + this.staticData.ajaxUrls.checkSubscription
            },
            getProductSaleInfo: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getProductSaleInfo
            },
            getProductDiscountPrices: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getProductDiscountPrices
            },
            saveSubscription: {
                url: this.ajaxHost + this.staticData.ajaxUrls.saveSubscription
            },
            updateProductCookies: {
                url: this.ajaxHost + this.staticData.ajaxUrls.updateProductCookies
            },
            getWatched: {
                url: this.ajaxHost + this.staticData.ajaxUrls.getWatched
            }
        },
        this.loyaltyTexts = {
            notLogin: 'Bu ürün, GittiGidiyor Kazananlar Kulübü üyelerine indirimli. Siz de GittiGidiyor Kazananlar Kulübü üyesi olup olmadığınızı öğrenmek için <a id="loyalty-login-icon" href="https://www.gittigidiyor.com/uye-girisi"><b>üye girişi</b></a> yapın.',
            loginLoyal: "GittiGidiyor Kazananlar Kulübü üyesi olduğunuz için size özel indirimli ürün.",
            loginNotLoyal: "Bu ürün, GittiGidiyor Kazananlar Kulübü üyelerine indirimli. Siz de Kazananlar Kulübü'ne <a href='https://www.gittigidiyor.com/gittigidiyor-kazananlar-kulubu'><b>katılarak</b></a> avantajlardan yararlanabilirsiniz."
        };
        try {
            _gg.segmentationCallback = function(a) {
                var b = a || {}
                  , c = $GG("#gg-loyalty-information-content")
                  , d = $GG("#gg-loyalty-information-content-for-take-rate")
                  , e = productPageScriptController.loyaltyTexts.notLogin;
                if (void 0 != b.memberId && null != b.memberId && "" != b.memberId)
                    null != b[29] ? (productPageScriptController.isUserLoyal = !0,
                    d.hasClass("hidden") || d.addClass("hidden"),
                    e = productPageScriptController.loyaltyTexts.loginLoyal,
                    $GG(".loyalty-element").removeClass("hidden")) : (e = productPageScriptController.loyaltyTexts.loginNotLoyal,
                    c.length > 0 && d.hasClass("hidden") && (c.append(e),
                    c.removeClass("hidden")),
                    d.append(e));
                else {
                    e = productPageScriptController.loyaltyTexts.notLogin,
                    c.length > 0 && d.hasClass("hidden") && (c.append(e),
                    c.removeClass("hidden")),
                    d.append(e);
                    var f = window.location.href
                      , g = $GG("#H-Login").attr("href") || "https://www.gittigidiyor.com/uye-girisi"
                      , h = g + "?s=1&url=" + encodeURIComponent(f);
                    $GG("#loyalty-login-icon").attr("href", h)
                }
            }
        } catch (a) {}
        this.doms = {},
        this.functions.loginNavigationController(),
        _gg.utilities.androidSmartBannerController(),
        $GG(".lazyload-img").lazyload({})
    },
    onload: function() {
        if (this.doms = {
            specContainer: null,
            catalogInfoDetails: $GG("#catalog-info-details"),
            productRecognition: $GG('[name="isProductRecognitionEnabled"]'),
            subscribeAjaxLoading: $GG("#subscribed-info .ajax-loading"),
            subscribeContainer: $GG("#subscribed-info"),
            subscribeInfoContainer: $GG("#subscribe-product-info"),
            subscribedTooltip: $GG("#subscribed-tooltip"),
            catalogReviewContainer: $GG("#catalog-review-container"),
            minus: $GG(".number-selection .minus"),
            plus: $GG(".number-selection .plus")
        },
        this.bindActions(),
        this.functions.controlProductHash(),
        this.imgDimensionController = new _gg.controller.ImgDimensionController(this.imgDimensionConfig),
        this.imgDimensionController.init(),
        $GG("#PreviewCon").length < 1 && (this.advController = new _gg.controller.advController(this.advControllerConfig),
        this.advController.push()),
        this.functions.calculateLightboxClientHeight(),
        this.functions.loadFirstImg(),
        $GG("#PreviewCon").length < 1 && $GG("#catalog-group-slug").length > 0) {
            var a = {
                _container: "product-compatible .widget-slider",
                _selectBox: ".view-con",
                _staticURL: _gg.utilities.ServerNameGenerator() + "/xhr/uyumlu-urunler?cgs=" + $GG("#catalog-group-slug").val()
            };
            new _gg.components.catalogCompatible(a).init()
        }
    },
    bindActions: function() {
        var a = this
          , b = a._ggAction
          , c = $GG("#productId").val()
          , d = $GG.inArray(c, a.jzSpinArr) > -1
          , e = "";
        if ("www.gittigidiyor.com" == document.location.host && (e = "http://st2.gittigidiyor.net"),
        a.productRoute = $GG("#product-route").val(),
        a.photoHeight = $GG(".img-cover").height(),
        a.functions.controlPreviewSticky(),
        a.functions.controlVideoProduct(c),
        this.advControllerConfig = {
            addCommon: !0,
            configKey: "productPage",
            keywords: $GG("#advert-keywords").val()
        },
        a.doms.productRecognition.length > 0 && (a.isProductRecognitionEnabled = !0),
        $GG(".catalog-review-link-small").bind(b.CLICK, function() {
            a.scrollToCatalogReviews = !0,
            $GG("body,html").stop().animate({
                scrollTop: Number($GG("#catalog-review-container").offset().top) - Number($GG("#fixed-header").height())
            }, 800),
            a.getProductCatalogReviews && a.functions.getProductCatalogReviews()
        }),
        $GG("#product-mobile-ui-con").length > 0 && a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile) {
            var f = $GG(".discounts-show").clone();
            $GG(".discounts-show,.discounts-show.gg-d-10").remove(),
            $GG(".product-price-info-con").append(f)
        }
        var g = function() {
            if (null != c && $GG(".make-bid").length < 1) {
                a._ajaxConfig.url = a._ajaxConfig.getProductDiscountPrices.url,
                a._ajaxConfig.data = {
                    productId: c
                },
                a.ajaxProductDiscountPricesCtrl = new _gg.communication.ajaxController(a._ajaxConfig),
                a.ajaxProductDiscountPricesCtrl.tryOnce = !1,
                a.ajaxProductDiscountPricesCtrl.ajaxAction();
                var b = new _gg.utilities.ajaxObserver;
                b.init(),
                a.ajaxProductDiscountPricesCtrl.pendingReq = function() {}
                ,
                a.ajaxProductDiscountPricesCtrl.completeReq = function() {
                    var b = a.ajaxProductDiscountPricesCtrl.completeData
                      , c = null
                      , d = null
                      , e = !1;
                    if (!b.hasOwnProperty("error")) {
                        if (b.hasOwnProperty("marketPrice") && (d = b.marketPrice),
                        b.hasOwnProperty("bestDeal")) {
                            var f = b.bestDeal;
                            if (null != f.type) {
                                c = f.discountedPrice;
                                var g = "";
                                g = f.hasOwnProperty("summary") && null != f.summary ? f.summary : f.description,
                                $GG(".discounts-show").length > 0 ? ($GG(".discounts-show").html(g),
                                $GG(".discounts-show.gg-d-10").remove()) : $GG('<div class="discounts-show">').html(g).insertAfter($GG("#quantityCol")),
                                e = !0
                            }
                        } else
                            c = b.buyPrice;
                        if ($GG(".price-css").each(function() {
                            $GG(this).hasClass("strike-price") ? null != d && 0 != d && $GG(this).find("strike").html(_gg.utilities.numberWithCommas(Number(d), !0)) : null != c && 0 != c && ($GG(this).parent().hasClass("front") || $GG(this).html(_gg.utilities.numberWithCommas(Number(c), !0)))
                        }),
                        e && ($GG(".discounts-show").removeClass("hidden").hide(),
                        $GG(".discounts-show").slideDown(500, function() {
                            $GG(".flip-container").length > 0 && $GG(".flip-container").addClass("hover")
                        })),
                        b.hasOwnProperty("loyalSegmentDiscount")) {
                            var h = b.loyalSegmentDiscount;
                            if (void 0 != h.range && null != h.range) {
                                var i = $GG("#gg-loyalty-information-content")
                                  , j = $GG("#gg-loyalty-information-content-for-take-rate");
                                a.isUserLoyal || (i.length > 0 && !i.hasClass("hidden") && i.addClass("hidden"),
                                j.removeClass("hidden"),
                                $GG(".loyalty-element").removeClass("hidden"))
                            }
                        }
                    }
                }
                ,
                a.ajaxProductDiscountPricesCtrl.errorReq = function() {}
                ,
                b.add(a.ajaxProductDiscountPricesCtrl)
            }
        };
        $GG("#finished-product").length < 1 && $GG("#PreviewCon").length < 1 && (setLoginAction.push(g),
        a.functions.updateProductCookies(c),
        a.functions.getWatched(c, "online")),
        $GG(".buy-now-and-subscribe").length > 0 && a.functions.controlNumberInputs(),
        $GG(".trigger-subscribe-modal").live(b.CLICK, function() {
            $GG(".buy-now-and-subscribe").trigger(b.CLICK)
        }),
        $GG(".buy-now-and-subscribe").live(b.CLICK, function() {
            if (a.responsiveState = _gg.static.globalParameters.responsiveState,
            $GG("#loggedInMemberId").length > 0) {
                var b = $GG("#product-subscription-modal-" + c);
                a.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile ? ($GG(this).show(),
                b.modal({
                    maxWidth: "470",
                    overlayClose: !0
                }),
                $GG(window).resize()) : ($GG.modal.close(),
                $GG(".buy-now-and-subscribe").hide(),
                b.addClass("show"),
                $GG("body,html").animate({
                    scrollTop: Number($GG("#product-mobile-ui-con").offset().top)
                }, 500))
            } else
                document.location.href = a.staticData.loginLink + document.location.href
        }),
        $GG(".icon-close").live(b.CLICK, function() {
            $GG(this).hasClass("confirm") || ($GG(".simplemodal-close").trigger(b.CLICK),
            $GG(".buy-now-and-subscribe").show(),
            $GG(".product-subscription-modal").removeClass("show"))
        }),
        $GG(".confirm-text strong").live(b.CLICK, function() {
            $GG(".subscription-terms-box").fadeIn(),
            $GG(this).parents().find(".icon-close").addClass("confirm")
        }),
        $GG(".icon-close.confirm").live(b.CLICK, function() {
            $GG(".subscription-terms-box").fadeOut(),
            $GG(this).removeClass("confirm")
        }),
        $GG(".unsubscribed .btn-tooltip").live(b.CLICK, function() {
            $GG("#unsubscribed-tooltip").tooltip({
                direction: "top"
            })
        }),
        $GG(".subscribed .btn-tooltip").live(b.CLICK, function() {
            a.doms.subscribedTooltip.length > 0 && a.doms.subscribedTooltip.tooltip({
                direction: "top"
            })
        }),
        a.doms.minus.bind(b.CLICK, function() {
            var a = Number($GG(this).next().val());
            Number($GG(this).next().attr("data-maxAmount"));
            a > 1 && !$GG(this).hasClass("disabled") && (a--,
            $GG(this).next().attr("data-value", a),
            $GG(this).next().val(a),
            $GG(this).next().attr("data-value", a),
            $GG(this).next().attr("value", a))
        }),
        a.doms.plus.bind(b.CLICK, function() {
            var a = Number($GG(this).prev().val());
            a < Number($GG(this).prev().attr("data-maxAmount")) && !$GG(this).hasClass("disabled") && (a++,
            $GG(this).prev().attr("data-value", a),
            $GG(this).prev().val(a),
            $GG(this).prev().attr("data-value", a),
            $GG(this).prev().attr("value", a))
        }),
        $GG(".btn-subscription").live(b.CLICK, function() {
            var b = $GG(this).parents(".content-box")
              , c = {}
              , d = !0
              , e = null;
            c.productId = b.find(".subscription-product-id").val(),
            b.find(".subscription-variant-id").length > 0 && (c.variantId = b.find(".subscription-variant-id").val()),
            c.frequencyType = b.find(".subscription-frequency").val(),
            c.frequencyName = $GG.trim(b.find(".subscription-frequency option:selected").html()),
            c.selectableFrequencies = b.find(".subscription-frequency option:selected").attr("rev").replace(/\s/g, "").split(","),
            c.quantity = Number(b.find(".amount-selection").find("input").val()),
            c.frequency = b.find(".period-selection").find("input").val(),
            0 == c.quantity || "" == c.quantity ? (d = !1,
            e = a.staticTexts.badRequestQuantity) : Number(c.frequency) <= 0 ? (d = !1,
            e = a.staticTexts.badRequestForZeroPeriod) : "" != c.selectableFrequencies && -1 == $GG.inArray(c.frequency, c.selectableFrequencies) ? (d = !1,
            e = a.staticTexts.badRequestField,
            e = e.replace("%s%", c.frequencyName),
            e = e.replace("%ss%", c.selectableFrequencies)) : Number(c.frequency) > a.staticData.selectableFrequencyTypes[c.frequencyType] && (d = !1,
            e = a.staticTexts.badRequestForPeriod,
            e = e.replace("%s%", a.staticData.selectableFrequencyTypes[c.frequencyType])),
            d ? (b.find(".error-box").remove(),
            b.find(".selection-box").removeClass("error"),
            c.from = "product",
            a.functions.saveSubscriptions(c, b)) : (null == e && (e = a.staticTexts.badRequest),
            b.find(".selection-box").addClass("error"),
            b.find(".error-box").remove(),
            b.find(".error-box").length < 1 && $GG(a.functions.createAjaxInfoBox(a.staticData.statusType.failure, a.staticData.classNames.iconAttention, e)).insertAfter(b.find(".selection-box")))
        });
        var h = b.CLICK;
        (GG.Static.Enums.activeMobileParams.isIOS || GG.Static.Enums.activeMobileParams.isANDROID) && (h = b.DOWN),
        $GG("#big-photo").live(h, function(c) {
            c.stopPropagation(),
            c.preventDefault();
            var d = $GG(this).attr("data-index");
            if (a.responsiveState == GG.Static.Enums.responsiveParameterNames.tablet) {
                var e = $GG(".active-img").parent().index();
                $GG("#mobile-thumbs-first .slider-bullet-container li").eq(e).addClass("selected").siblings().removeClass("selected"),
                $GG(".lazyload-img.swapImage").trigger("click")
            } else
                0 == Number($GG(".largeImage").length) && $GG(".spinner-box").remove(),
                $GG("#product-thumb").modal({
                    overlayClose: !0,
                    autoResize: !0,
                    autoPosition: !0,
                    onShow: function() {
                        var c = ($GG(".h1-container h1 .productId").remove(),
                        $GG(".h1-container h1 .title").text());
                        $GG(".lightbox-title span").html(c),
                        $GG(window).resize(),
                        $GG(".product-lazy-load").lazyload({
                            event: "scrollstop"
                        }),
                        "1" == $GG("#large-photo").attr("data-zoomIn") ? a.functions.lightboxZoomRestart() : $GG(".display-table-cell").trigger("zoom.destroy"),
                        setTimeout(function() {
                            $GG(".product-lazy-load").eq(d).trigger(b.CLICK)
                        }, 1e3)
                    }
                })
        }),
        $GG("#product-thumb .lazyload-img").live(b.CLICK, function() {
            $GG("#product-thumb .lazyload-img").removeClass("selected"),
            $GG(this).addClass("selected"),
            "1" == $GG("#large-photo").attr("data-zoomIn") ? a.functions.lightboxZoomRestart() : $GG(".display-table-cell").trigger("zoom.destroy")
        }),
        $GG(".product-photos-ul .swapImage").live(b.CLICK, function() {
            var a = $GG(".product-photos-ul .swapImage").index(this);
            $("#big-photo").attr("data-index", a)
        }),
        $GG("#lightbox-prev").live(b.CLICK, function() {
            $GG(".largeImage.selected").parents(".product-thumb-img").prev().find(".largeImage").trigger("click"),
            a.functions.disableButtonControl()
        }),
        $GG("#lightbox-next").live(b.CLICK, function() {
            $GG(".largeImage.selected").parents(".product-thumb-img").next().find(".largeImage").trigger("click"),
            a.functions.disableButtonControl()
        }),
        $GG(".product-thumb-img").live(b.CLICK, function() {
            $GG(".product-thumb-img").removeClass("active"),
            $GG(this).addClass("active"),
            a.functions.disableButtonControl()
        }),
        $GG(".ebay-price-detail").bind(b.CLICK, function() {
            var a = $GG(".ebay-price-table");
            a.hasClass("hidden") ? (a.removeClass("hidden"),
            $GG(this).find(".price-button-open").addClass("hidden"),
            $GG(this).find(".price-button-close").removeClass("hidden")) : (a.addClass("hidden"),
            $GG(this).find(".price-button-open").removeClass("hidden"),
            $GG(this).find(".price-button-close").addClass("hidden"))
        }),
        $GG("#executeNotifier").length > 0 && ($GG("#executeAddToBasketNotifier").length > 0 && a.functions.executeIo("cart", c),
        $GG("#executeViewItemNotifier").length > 0 && a.functions.executeIo("item", c)),
        $GG(".trigger-catalog-info").length > 0 && a.functions.addCatalogInfo($GG("#specs-container .futures-container"));
        try {
            a.fixedHeaderControlValue = $GG("#buy-now").offset().top + $GG("#buy-now").height() || a.fixedHeaderControlValue
        } catch (b) {
            a.fixedHeaderControlValue = this.fixedHeaderControlValue
        }
        if (setInterval(function() {
            a.functions.writeGGTime()
        }, 1e3),
        _gg.pageType !== GG.Static.Enums.pageTypes.IOS && _gg.pageType !== GG.Static.Enums.pageTypes.ANDROID || $GG('[data-type="number"]').length > 0 && $GG('[data-type="number"]').each(function() {
            $GG(this).get(0).type = "number",
            $GG(this).attr("data-text", $GG(this).val())
        }),
        $GG(".depozit_globTab").length > 0 && a.ua.indexOf("MSIE 7") < 0) {
            a.cookieConnection.referenceName = "QuickTourProduct";
            "close" != (a.cookieConnection.getCookie() || "") && (a.functions.loadFile(e + "/fred/framework/assets/css/lib/intro/intro.css", "css"),
            a.functions.loadFile(e + "/fred/framework/com/lib/intro/intro.js", "script"),
            a.functions.loadFile(e + "/fred/page-based/product-detail/js/product-deposit-controller.js", "script"))
        }
        if (d && $GG("#scancube_jzspin").length > 0 && (a.functions.loadFile(e + "/fred/framework/assets/css/lib/jzspin/jzspin.css", "css"),
        a.functions.loadFile(e + "/fred/framework/com/lib/jzspin/jzspin.js", "script"),
        setTimeout(function() {
            a.functions.executeSpin(c)
        }, 1e3)),
        a.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile ? $GG(".MbThumbCon,.ThumbCon").removeClass("hidden-m") : ($GG(".MbThumbCon").removeClass("hidden-m"),
        $GG(".ThumbCon").addClass("hidden-m")),
        $GG("#topContainer").hasClass("product-page") && (a.preview = !1),
        a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && $GG("#product-other-infos .ProDesc").parent().removeClass("on"),
        $GG("#mobile-thumbs-first li").length > 1) {
            a.sliderDefaults.containerId = "mobile-thumbs-first",
            a.sliderDefaults.infinite = !0,
            a.sliderDefaults.bullets = !0;
            var i = new _gg.components.slider(a.sliderDefaults);
            i.init();
            var j = i.itemList.find("li:not(." + i.staticData.cloneElementsClass + ")").length;
            $GG(".slider-legend").html(i.currentIndis + "/" + j),
            $GG(i).bind(i.SLIDE_END, function() {
                a.functions.setSliderLegendPosition(this, j),
                $GG(".gg-slider-clone-elements").removeClass("gg-blur-image"),
                $GG(".lazyload-img").lazyload({})
            });
            try {
                if ($GG("#mobile-thumbs-first  iframe").length > 0) {
                    var k = $GG("#mobile-thumbs-first  iframe").attr("src");
                    $GG("#mobile-thumbs-first iframe").attr("src", k)
                }
            } catch (a) {}
        }
        if (a.preview || (navigator.userAgent.indexOf("Discovery Build") > 0 && navigator.userAgent.indexOf("Chrome") < 0 ? $GG("#mobile_zoom_icon").addClass("hidden") : a.functions.zoomingControllerEvents()),
        a.zoomEnable = $GG("#isZoomEnable").val(),
        $GG("#big-photo").length > 0) {
            if ($GG(".private-store-col").length > 0 && a.responsiveState == GG.Static.Enums.responsiveParameterNames.large_desktop) {
                var l = $GG(".table-ul ").height() - 57
                  , m = $GG(".private-store-infos").height();
                l > 0 && m < l && $GG(".private-store-infos").height($GG(".table-ul ").height() - 57)
            }
            $GG("#big-photo").width(),
            $GG("#big-photo").height();
            if (300 == $GG("#col-left").width()) {
                var n = $GG(".product-photos-ul");
                if (n.removeAttr("style"),
                Number(n.attr("rev")) < 4) {
                    var o = 85 * Number(n.attr("rev"));
                    n.attr("style", "width:" + o + "px;")
                }
            } else
                $GG.each($GG(".product-photos-ul li img.swapImage"), function() {
                    $GG(this).attr("swapimg", $GG(this).attr("data-original").replace(/tn30/g, "tn50"))
                }),
                $GG.each($GG(".variant-photos"), function() {
                    "" != $GG(this).val() && $GG(this).val($GG(this).val().replace(/tn30/g, "tn50"))
                });
            $GG("#big-photo").attr("src", $GG("#big-photo").attr("data-original").replace(/tn30/g, "tn50")),
            $GG("#big-photo").attr("data-zoom-image", $GG("#big-photo").attr("src").replace(/tn50/g, "tn120")),
            $GG("#big-photo").data("zoom-image", $GG("#big-photo").attr("data-zoom-image")),
            a.zoomEnable ? ($GG(".zoomContainer").remove(),
            $GG(".zoomEnableIcon").show()) : ($GG("#big-photo").removeData("elevateZoom"),
            $GG(".zoomContainer").remove()),
            setTimeout(function() {
                $GG(".product-photos-ul li:first .swapImage").trigger(b.CLICK)
            }, 100)
        }
        if ($GG(".overflow-content").find("link").length > 0 && $GG(".overflow-content").find("link").each(function() {
            $GG(this).attr("href").indexOf("gittigidiyor") > 0 && $GG(this).remove()
        }),
        $GG(".product-lazy-load").length > 0 && $GG(".product-lazy-load").lazyload({
            event: "scrollstop"
        }),
        0 == $GG("#CargoDetails .CargoInfoUl li").length && $GG("#CargoDetails .CargoInfoUl").addClass("bordernone"),
        a.functions.positionFixedControl(),
        a.functions.addMobileUiActions(),
        $GG('.cargo-info:not(".ebay-cargo-tab")').bind(b.CLICK, function(b) {
            a.isCargoClicked || (a.functions.getShippingInfo(),
            $GG(".work-shop-icon").addClass("dpnone"))
        }),
        $GG(".load-catalog-info").bind(b.CLICK, function(b) {
            a.isCatalogClicked || a.functions.getCatalogInfoDetail($GG(this).attr("rel"))
        }),
        $GG(".trigger-catalog-info, .load-catalog-info-key-feature").bind(b.CLICK, function(c) {
            a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && $GG("body").scrollTop(0),
            $GG(".load-catalog-info").trigger(b.CLICK)
        }),
        $GG(".show-specs a").live(b.CLICK, function(b) {
            $GG(this).hasClass("show-more") ? ($GG(this).parent().siblings("li.hidden-list").removeClass("hidden"),
            $GG(this).addClass("show-less").removeClass("show-more"),
            $GG(this).html(a.staticTexts.showLess)) : ($GG(this).parent().siblings("li.hidden-list").addClass("hidden"),
            $GG(this).removeClass("show-less").addClass("show-more"),
            $GG(this).html(a.staticTexts.showMore))
        }),
        $GG("#show-cargo-details").bind(b.CLICK, function(c) {
            return $GG(".cargo-info").trigger(b.CLICK),
            a.functions.animateToProductInfo(),
            !1
        }),
        $GG("#show-ins-details").bind(b.CLICK, function(c) {
            return $GG(".ins-info").trigger(b.CLICK),
            a.functions.animateToProductInfo(),
            !1
        }),
        $GG(".ins-info").bind(b.CLICK, function(b) {
            !a.isInsClicked && $GG("#PreviewCon").length < 1 && (a.functions.getProductPaymentTable(),
            $GG(".work-shop-icon").addClass("dpnone")),
            a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && $GG("body").scrollTop(0),
            a.functions.animateToProductInfo()
        }),
        $GG(".trigger-installment-info").bind(b.CLICK, function(a) {
            $GG(".ins-info").trigger(b.CLICK)
        }),
        $GG(".seller-comments").bind(b.CLICK, function(b) {
            a.isCommentClicked ? $GG(".loading-center").hide().siblings().show() : (a.functions.getSellerComments($GG(this).attr("rel"), 1, 5),
            $GG(".work-shop-icon").addClass("dpnone"))
        }),
        $GG(".TabSelect ul li a").bind(b.CLICK, function(b) {
            var c = $GG(this).attr("class").split(" ")[1];
            if (a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && $GG("body").scrollTop(0),
            $GG(this).parent().hasClass("passive"))
                a.functions.hideAllTabs(!0);
            else {
                var d = $GG(this).attr("rev");
                $GG(document).width();
                if (a.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile)
                    $GG("#tabContent" + d).show().siblings().hide();
                else {
                    if ($GG(".work-shop-icon").hide(),
                    5 != d) {
                        $GG("#MbTabCon,#product-information").show(),
                        $GG("#SubContent,#product-information").css("margin", "0"),
                        $GG("#TabsCon").css("padding", "0"),
                        a.productUi && ($GG("#product-information .TabSelect").hide(),
                        $GG("#product-general-info").children("div").siblings().hide(),
                        $GG("#product-general-info").removeClass("product-ui"),
                        $GG("#MbTabCon").show()),
                        $GG("#product-information .TabSelect, #col-left,.daily-deal-icon").hide(),
                        $GG("#tabContent" + d).slideDown().siblings().not(".TabSelect").slideUp(),
                        $GG("#ProductDetails").addClass("HiddenImp"),
                        $GG(".title-container").addClass("border-bottom-e3e3e3"),
                        $GG(".TabSelect").removeClass("mt20"),
                        5 == d ? ($GG("#FQACon").slideDown(),
                        $GG("#TabsCon").children().slideUp()) : $GG("#FQACon").slideUp();
                        var e = $GG(this).attr("rel");
                        7 == d && (e = $GG(this).html()),
                        $GG("#MbTabCon h3").html(e),
                        $GG(this).find(".ProMain").length < 1 ? $GG("#mobile-page-view").hide() : $GG("#mobile-page-view").show()
                    }
                    $GG("body,html").animate({
                        scrollTop: 0
                    }, 800)
                }
            }
            $GG("." + c).parent().addClass("on").siblings().removeClass("on")
        }),
        $GG("#BackBtn").bind(b.CLICK, function(b) {
            a.functions.hideAllTabs(!0)
        }),
        $GG(".close-btn-mobile.close-btn-text").bind(b.CLICK, function(b) {
            $GG(".work-shop-icon").show(),
            a.functions.hideAllTabs(!0)
        }),
        $GG(".info-items-container .more-info").bind(b.CLICK, function() {
            $GG("#catalog-review-container, #product-viewed-con").addClass("hidden")
        }),
        $GG(".close-btn-mobile").bind(b.CLICK, function() {
            $GG(".product-detail-responsive, .buttons-container").removeClass("hidden").addClass("visible-m"),
            $GG("#catalog-review-container, #product-viewed-con").removeClass("hidden")
        }),
        $GG(".btn-up").bind(b.CLICK, function() {
            $GG("body,html").animate({
                scrollTop: 0
            }, 500)
        }),
        $GG(".quantity-selection").change(function() {
            var a = $GG(this).val();
            $GG("#buyitnow_adet").val(a)
        }),
        $GG(".control-button").live(b.CLICK, function(b) {
            var d = !0
              , e = Number($GG("#buyitnow_adet").val())
              , f = Number($GG("#stockProduct").val())
              , g = Number($GG("#maxStockVal").val());
            if (a.stopSocket = !0,
            "" == e || e < 1)
                d = !1,
                $GG("#buyitnow_adet").parent().siblings("div.retail-alert").show(),
                $GG("#quantityCol").addClass("FormInputErr"),
                a.functions.focusErr();
            else if (e > f || !isNaN(g) && e > g) {
                d = !1;
                var h = a.staticTexts.quantityErrorMessages.maxLimit;
                h = h.replace("$ID$", c),
                isNaN(g) || (f = g),
                h = h.replace("$Q$", f),
                1 == f && (h = a.staticTexts.quantityErrorMessages.oneProduct),
                $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").html(h),
                $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").show(),
                $GG("#quantityCol").addClass("FormInputErr"),
                a.functions.focusErr()
            } else
                $GG("#quantityCol").removeClass("FormInputErr"),
                $GG("#buyitnow_adet").parent().siblings("div.retail-alert").hide(),
                $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").hide();
            if (d && (a.ntfShow.item || a.ntfShow.cart)) {
                null != a.ntfShow.param && a.ntfShow.param
            }
            return d = retailProductController.functions.insuranceSaleControl(d)
        }),
        $GG("#buyitnow_adet").bind(b.KEYUP, function(a) {
            $GG("#quantityCol").removeClass("FormInputErr"),
            $GG("#buyitnow_adet").parent().siblings("div.retail-alert").hide(),
            $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").hide()
        }),
        $GG(".quantityInpt, #bid_price_l").bind(b.CLICK, function(b) {
            a.ua.indexOf("MSIE 7") < 0 && a.ua.indexOf("MSIE 8") < 0 && this.setSelectionRange(0, this.value.length)
        }),
        $GG("#bid_price_l,#buyitnow_adet").bind(b.KEYPRESS, function(b) {
            return a.functions.alpha(b, a.numbers)
        }),
        $GG("#bid_price_l,#buyitnow_adet").on(b.ONINPUT, function() {
            return a.functions.maxLengthCheck(this)
        }),
        $GG(".selectbox-div").bind(b.CLICK, function(a) {
            $GG("#bid-options").show()
        }),
        $GG("#bid-options ul li a").bind(b.CLICK, function(a) {
            var b = Number($GG(this).attr("rel"));
            $GG("#bid_price_r option:eq(" + b + ")").attr("selected", "selected"),
            $GG("#bid-options").hide()
        }),
        $GG(".trigger-buy").bind(b.CLICK, function(a) {
            $GG(".make-bid").length > 0 ? $GG(".make-bid").trigger(b.CLICK) : $GG(".raise-bid").length > 0 ? $GG(".raise-bid").trigger(b.CLICK) : $GG("#buy-now").length > 0 && $GG("#buy-now").trigger(b.CLICK)
        }),
        $GG(".swapImage").bind(b.CLICK, function(b) {
            if ($GG("#product-video-iframe").length > 0 && ($GG("#product-video-iframe").addClass("hidden").siblings(".product-img").removeClass("hidden"),
            $GG("#product-video-iframe").attr("src", "")),
            $GG(this).attr("src").indexOf("empty") < 0) {
                $GG("#big-photo").attr("src", $GG(this).attr("swapimg")),
                a.zoomEnable = $GG(this).attr("data-zoom");
                var c = $GG("#ProductDetails").width() - 22
                  , d = Number($GG("#col-left .img-cover").outerHeight())
                  , e = d + 100
                  , f = Number($GG("#ProductTitle").outerHeight()) + $GG(".product-info-container").outerHeight();
                if ($GG(".zoomEnableIcon").is(":visible") && (e += Number($GG(".zoomEnableIcon").outerHeight())),
                e < f && (e = f + 20),
                300 == $GG("#col-left").width() ? $GG("#big-photo").attr("data-zoom-image", $GG("#big-photo").attr("src").replace(/tn30/g, "tn120")) : $GG("#big-photo").attr("data-zoom-image", $GG("#big-photo").attr("src").replace(/tn50/g, "tn120")),
                $GG("#bigphoto-link").attr("href", $GG(this).attr("swapurl")),
                $GG("#big-photo").data("zoom-image", $GG("#big-photo").attr("data-zoom-image")),
                1 == a.zoomEnable) {
                    $GG(".zoomEnableIcon").show(),
                    $GG(".product-img").removeClass("mrb20"),
                    $GG(".zoomContainer").remove();
                    try {
                        $GG("#big-photo").elevateZoom({
                            zoomWindowHeight: e,
                            zoomWindowWidth: c,
                            easing: !0
                        })
                    } catch (b) {}
                } else
                    $GG(".zoomEnableIcon").hide(),
                    $GG(".product-img").addClass("mrb20"),
                    $GG("#big-photo").removeData("elevateZoom"),
                    $GG(".zoomContainer").remove();
                $GG(".active-img").removeClass("active-img"),
                $GG(this).addClass("active-img"),
                a.photoHeight = $GG(".img-cover").height()
            }
        }).each(function() {
            (new Image).url = $GG(this).attr("swapimg")
        }),
        $GG(".largeImage").live(b.CLICK, function(c) {
            var d = $GG(this).attr("zoomIn");
            $GG("#large-photo").addClass("hidden"),
            $GG(".spinner-box").removeClass("hidden"),
            $GG("#large-photo").attr("src", $GG(this).attr("swapimg"));
            var e = new Image;
            e.src = $GG("#large-photo").attr("src"),
            e.onload = function() {
                $GG("#large-photo").removeClass("hidden"),
                $GG(".spinner-box").addClass("hidden")
            }
            ,
            $GG(".product-photos-ul li").eq($GG(this).parents(".product-thumb-img").index()).find(".swapImage").trigger(b.CLICK),
            a.functions.calculateLightboxClientHeight(),
            setTimeout(function() {
                "1" == d ? a.functions.lightboxZoomRestart() : $GG(".display-table-cell").trigger("zoom.destroy")
            }, 100)
        }),
        $GG(".ShrIcon").bind(b.CLICK, function(a) {
            $GG("#share-btn,.users-share-txt").hide(),
            $GG("#share").css("display", "inline-block"),
            $GG(".shr-btns-con").addClass("selected")
        }),
        $GG("#UserBandInfo").length > 0) {
            a.cookieConnection.referenceName = "ProductUBadgeInfo";
            var p = a.cookieConnection.getCookie() || "";
            "close" == p && $GG("#UserBandInfo .CloseCon").remove(),
            "open" != p && null != p && "" != p || ($GG("#UserBandInfo").show(),
            null != p && "" != p || a.cookieConnection.setCookie("open")),
            $GG("#UserBandInfo .close").bind(b.CLICK, function(b) {
                $GG("#UserBandInfo").hide(),
                a.cookieConnection.referenceName = "ProductUBadgeInfo",
                a.cookieConnection.setCookie("close"),
                a.cookieConnection.referenceName = "UserBandHide",
                a.cookieConnection.setCookie("false"),
                $GG("#UserBandInfo .CloseCon").remove()
            })
        }
        1 == _gg.static.Enums.activeMobileParams.isMobileDevice ? $GG(".tag-rate-icon").live(b.CLICK, function() {
            $GG("#tag-rate-info").hasClass("hidden") ? $GG("#tag-rate-info").removeClass("hidden").addClass("tag-show") : $GG("#tag-rate-info").removeClass("tag-show").addClass("hidden")
        }) : $GG(".tag-rate-icon").live(b.OVER, function() {
            $GG("#tag-rate-info").removeClass("hidden")
        }).live(b.LEAVE, function() {
            $GG("#tag-rate-info").addClass("hidden")
        }),
        $GG(".badge").live(b.OVER, function(b) {
            $GG("#SMSInfo").hide(),
            a.cookieConnection.referenceName = "ProductUBadgeInfo",
            "close" == (a.cookieConnection.getCookie() || "") && $GG("#UserBandInfo .CloseCon").remove(),
            a.cookieConnection.referenceName = "UserBandHide",
            "false" == (a.cookieConnection.getCookie() || "") && $GG("#UserBandInfo").show()
        }),
        $GG(".profile-label").bind(b.LEAVE, function(a) {
            $GG("#UserBandInfo .CloseCon").length < 1 && $GG("#UserBandInfo").hide()
        }),
        $GG(".smsVerified").bind(b.OVER, function(a) {
            $GG("#UserBandInfo").hide(),
            $GG(this).children("#SMSInfo").length < 1 && $GG(this).append($GG('<div id="SMSInfo" class="InfoBox" />').append($GG('<div class="InfoBubble ArrowR"/>').append($GG('<div class="Arrow"/>')).append($GG("<h3/>").html("Bu Nedir?")).append($GG("<p/>").html('Bu rozet, cep numarasını onaylatan kullanıcılara verilir. Siz de <a target="_blank" href="http://www.gittigidiyor.com/bana-ozel/cep-onay">cebinizi onaylatın</a>, rozetiniz olsun.')))),
            $GG("#SMSInfo").show()
        }),
        $GG(".smsVerified").parent().bind(b.LEAVE, function(a) {
            $GG("#SMSInfo").hide()
        }),
        a.cookieConnection.referenceName = "CCGiftPointShow",
        $GG("#point-tooltip .tooltip-close-button").bind(b.CLICK, function(b) {
            return $GG("#point-tooltip").hide(),
            a.cookieConnection.setCookie(!1),
            !1
        }),
        "false" != a.cookieConnection.getCookie() && $GG("#point-tooltip").removeClass("hidden"),
        $GG(".print").bind(b.CLICK, function(b) {
            a.functions.printProduct()
        }),
        $GG("#addWatchFromQuery").length > 0 && a.functions.addWatchAjax(),
        $GG("#watch-product").bind(b.CLICK, function(b) {
            a.functions.addWatchAjax()
        }),
        $GG(".openHistoryLightBox").bind(b.CLICK, function(b) {
            a.functions.openHistoryLightBox()
        }),
        $GG(".version-details").bind(b.CLICK, function(b) {
            a.functions.getHistoryVersion($GG(this).attr("rev"))
        }),
        $GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
            a.functions.executeSpin(c)
        }),
        $GG(document).live(b.KEYDOWN, function(a) {
            if ($GG("#product-thumb").is(":visible") && $GG(".product-lazy-load.selected").length > 0) {
                var c = a.which
                  , d = $GG(".product-lazy-load.selected").parents(".product-thumb-img")
                  , e = $GG(".tn-cont-list .product-thumb-img")
                  , f = Number(d.index())
                  , g = 1;
                _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.tablet ? 38 == c || 40 == c ? (a.preventDefault(),
                g = 2) : g = 1 : 38 == c || 40 == c ? (a.preventDefault(),
                g = 3) : g = 1,
                (37 == c || 38 == c) && e.eq(f - g).length > 0 ? e.eq(f - g).find(".product-lazy-load").trigger(b.CLICK) : (39 == c || 40 == c) && e.eq(f + g).length > 0 && e.eq(f + g).find(".product-lazy-load").trigger(b.CLICK)
            }
        }),
        $GG(document).live(b.DOWN, function(a) {
            var b = $GG(a.target);
            "share" == b.parent().parent().parent().attr("id") || b.hasClass("ShrIcon") || ($GG("#share").hide(),
            $GG("#share-btn,.users-share-txt").show(),
            $GG(".shr-btns-con").removeClass("selected")),
            b.hasClass("bid-options-con") || b.parents("#bid-options").hasClass("bid-options-con") || $GG("#bid-options").hide(),
            b.hasClass("kalan-sure-text-containter") || $GG(".kalan-sure-text").hide(),
            b.hasClass("badge") || b.hasClass("close") || $GG("#UserBandInfo").hide(),
            b.hasClass("smsVerified") || $GG("#SMSInfo").hide()
        }),
        $GG(window).on("resize", function() {
            a.responsiveState = _gg.static.globalParameters.responsiveState;
            var e = $GG(document).scrollTop();
            if (a.functions.controlSticky(e),
            a.functions.controlPreviewSticky(),
            a.functions.controlVideoProduct(c),
            $GG("#big-photo").length > 0 && (a.responsiveState != GG.Static.Enums.responsiveParameterNames.large_desktop ? $GG("#big-photo").attr("src", $GG("#big-photo").attr("data-original")) : ($GG("#big-photo").attr("src", $GG("#big-photo").attr("data-original").replace(/tn30/g, "tn50")),
            $GG.each($GG(".product-photos-ul li img.swapImage"), function() {
                $GG(this).attr("swapimg", $GG(this).attr("data-original").replace(/tn30/g, "tn50"))
            }),
            $GG.each($GG(".variant-photos"), function() {
                "" != $GG(this).val() && $GG(this).val($GG(this).val().replace(/tn30/g, "tn50"))
            }))),
            a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile) {
                $GG("#product-other-infos .TabSelect,#mobile-page-view").show(),
                $GG("#product-other-infos .ProDesc").parent().removeClass("on");
                var f = $GG("#product-information .TabSelect ul li.on").not(".passive").find("a").attr("class")
                  , g = "";
                "undefined" != f && null != f && (g = f.split(" ")[1],
                "ProDesc" != g || "" != location.hash ? $GG("#product-other-infos").find("." + g).trigger(b.CLICK) : $GG("#product-other-infos").find(".ProMain").trigger(b.CLICK)),
                $GG("#user-product-desc").width($GG("#product-other-infos .TabSelect li:first").width()),
                $GG("#similar-products-mobile").length > 0 && $GG("#similar-products-mobile").find("li").length > 1 && a.functions.controlSimilarHeight()
            } else
                a.functions.hideAllTabs(!1),
                $GG("#user-product-desc").removeAttr("style"),
                $GG("#product-information").show(),
                $GG("#product-other-infos .TabSelect,#mobile-page-view").hide();
            d && $GG("#product-general-info").width() <= 480 && a.functions.executeSpin(c),
            a.photoHeight = $GG(".img-cover").height(),
            a.functions.calculateLightboxClientHeight()
        }, 10),
        $GG(window).on("scroll", function(b) {
            var c = $GG(document).scrollTop();
            Number($GG(document).height()),
            Number($GG(window).height()),
            a.functions.controlPreviewSticky(),
            _gg.utilities.isElementInViewPort($GG(".view-count"), 200) && a.viewCount && a.functions.getViewCount(),
            _gg.utilities.isElementInViewPort(a.doms.catalogReviewContainer, 10) && a.getProductCatalogReviews && (a.scrollToCatalogReviews = !1,
            a.functions.getProductCatalogReviews(!1)),
            _gg.utilities.isElementInViewPort($GG("#product-mobile-ui-con"), 200) && ($GG(".discounts-show").hasClass("animated") || a.functions.startCampaignCountDown(),
            $GG(".discounts-show").addClass("animated")),
            _gg.utilities.isElementInViewPort($GG("#last-seen-products-viewport"), 200) && a.lastViewed && a.functions.getLastSeenProducts(),
            _gg.utilities.isElementInViewPort($GG("#member-other-products-view"), 200) && a.memberSimilarProducts && a.functions.getMemberSimilarProducts(),
            _gg.utilities.isElementInViewPort($GG("#faq-con"), 200) && !a.isCargoClicked && a.functions.getShippingInfo(),
            a.functions.controlSticky(c)
        }, 200),
        $GG(window).hashchange(function() {
            var b = location.hash;
            $GG(document).width(),
            "" == b && a.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? (a.functions.hideAllTabs(!0),
            $GG(".daily-deal-icon").show()) : $GG(".daily-deal-icon").hide()
        }),
        $GG("#show-more-similar").bind(b.CLICK, function(a) {
            $GG(this).remove(),
            $GG("#similar-products").find(".hidden-t").removeClass("hidden-t")
        }),
        a.functions.toolBarControlller(),
        0 != $GG("#productCatalogId").val() && void 0 != $GG("#productCatalogId").val() && a.functions.catalogPagesOtherSeller(),
        $GG("#insurance-notification #ContinueToBasket").bind(b.CLICK, function() {
            $GG("#add-to-basket").trigger(b.CLICK)
        }),
        $GG("#insurance-notification #AddInsurance").bind(b.CLICK, function() {
            $GG("#insurance-product").attr("checked", !0),
            $GG("#buy-now").trigger(b.CLICK)
        }),
        $GG(".tab-btn-box h3").live(b.CLICK, function() {
            $GG(".tab-btn-box h3").removeClass("active"),
            $GG(this).addClass("active"),
            "product-features" == $GG(this).attr("rel") ? ($GG("#mobile-cargo, #mobile-installment").addClass("hidden"),
            $GG("#mobile-product-features, #mobile-product-description, #mobile-seller-info").removeClass("hidden")) : ($GG("#mobile-cargo, #mobile-installment").removeClass("hidden"),
            $GG("#mobile-product-features, #mobile-product-description, #mobile-seller-info").addClass("hidden"))
        })
    },
    functions: {
        controlFixpackPopup: function() {
            var a = this
              , b = a.constructor;
            return $GG("#frm_buyitnow_adet").val($GG("#buyitnow_adet").val()),
            $GG("#frm_add_chard_adet").val($GG("#buyitnow_adet").val()),
            _gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile || (!!b.showUserFixPackPopUp || (0 == $GG("#insurance-product").length || ($GG("#insurance-product").is(":checked") ? void 0 : (b.showUserFixPackPopUp = !0,
            $GG("#insurance-notification").modal({
                height: 450
            }),
            $GG(window).resize(),
            !1))))
        },
        calculateLightboxClientHeight: function() {
            if (0 != $GG("#large-photo").length) {
                var a = _gg.utilities.getClientHeight();
                a > 1200 && (a = 1200),
                $GG("#product-thumb").height(a - 80),
                $GG(".large-photo-container .display-table-cell").height(a - 130);
                (new Image).src = $GG("#large-photo").attr("src"),
                $GG(window).trigger("resize.simplemodal")
            }
        },
        disableButtonControl: function() {
            var a = $GG(".product-thumb-img").length - 1
              , b = $GG(".product-thumb-img.active").index();
            0 == b ? $GG("#lightbox-prev").addClass("disable") : $GG("#lightbox-prev").removeClass("disable"),
            b == a ? $GG("#lightbox-next").addClass("disable") : $GG("#lightbox-next").removeClass("disable")
        },
        loginNavigationController: function() {
            try {
                var a = window.location.href
                  , b = $GG("#H-Login").attr("href") || "https://www.gittigidiyor.com/uye-girisi"
                  , c = b + "?s=1&url=" + encodeURIComponent(a);
                $GG("#H-Login").attr("href", c),
                setLoginAction.guestCallback = function() {
                    $GG(".GGMobileIcons_account.searchLink a").attr("href", c)
                }
            } catch (a) {}
        },
        toolBarControlller: function() {
            $("body").append("<style>#ciuvo-toolbar {display:none !important;} .ciuvo-toolbar-visible {margin-top:0 !important}</style>")
        },
        getCatalogInfoDetail: function(a) {
            var b = this
              , c = b.constructor;
            if (c.isProductRecognitionEnabled) {
                c.isCatalogClicked = !0,
                c._ajaxConfig.url = c._ajaxConfig.catalogInfo.url,
                c._ajaxConfig.data = {
                    catalogId: a
                },
                c._ajaxConfig.dataType = "json",
                c.ajaxCatalogInfoCtrl = new _gg.communication.ajaxController(c._ajaxConfig),
                c.ajaxCatalogInfoCtrl.tryOnce = !1,
                c.ajaxCatalogInfoCtrl.ajaxAction(),
                $GG("#catalog-info-details .WarnBox").remove();
                var d = new _gg.utilities.ajaxObserver;
                c.ajaxCatalogInfoCtrl.completeReq = function() {
                    var a = c.ajaxCatalogInfoCtrl.completeData;
                    b.createSpecData(a),
                    $GG("body,html").animate({
                        scrollTop: Number($GG(".load-catalog-info").offset().top) - Number($GG("#fixed-header").height())
                    }, 800)
                }
                ,
                c.ajaxCatalogInfoCtrl.errorReq = function() {
                    c.isCatalogClicked = !1,
                    b.executeCatalogInfoError()
                }
                ,
                d.init(),
                d.add(c.ajaxCatalogInfoCtrl)
            }
        },
        createSpecData: function(a) {
            var b = this
              , c = b.constructor
              , d = {}
              , e = {};
            c.doms.catalogInfoDetails.siblings(".loading-center").fadeOut(500);
            var f = a.specs;
            null != f ? (e.orderNumber = a.catalogAttributeId,
            e.specGroupAttributeId = a.catalogAttributeId,
            e.specGroupName = a.catalogName,
            a.hasOwnProperty("specGroups") && null != a.specGroups ? e.dataLength = a.specGroups.length + 1 : e.dataLength = 1,
            e.specValueList = [],
            e.dataSort = 0,
            e.firstData = !0,
            $GG.each(f, function(a, b) {
                b.hasOwnProperty("specValueList") && e.specValueList.push(b)
            }),
            b.createSpecGroup(e),
            a.specGroups && a.specGroups.length > 0 && (null != a.specGroups && $GG.each(a.specGroups, function(c, e) {
                d.orderNumber = e.orderNumber,
                d.specGroupAttributeId = e.specGroupAttributeId,
                d.specGroupName = e.specGroupName,
                d.specValueList = [],
                d.dataLength = a.specGroups.length,
                d.dataSort = c,
                d.firstData = !1,
                e.hasOwnProperty("specValueList") && e.specValueList.length > 0 && $GG.each(e.specValueList, function(a, b) {
                    d.specValueList.push(b)
                }),
                b.createSpecGroup(d)
            }),
            b.addCatalogInfo(c.doms.catalogInfoDetails))) : b.executeCatalogInfoError()
        },
        executeCatalogInfoError: function() {
            var a = this
              , b = a.constructor
              , c = {};
            b.doms.catalogInfoDetails.siblings(".loading-center").remove(),
            c.infoContainer = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: ["gg-w-24 gg-d-24 gg-t-24 gg-m-24 WarnBox"],
                htmlContent: '<p><strong class="head">' + b.staticTexts.errorTitle + "</strong><p>" + b.staticTexts.productCatalogInfoError + "</p>"
            }),
            b.doms.catalogInfoDetails.append(c.infoContainer)
        },
        createSpecGroup: function(a) {
            var b = this
              , c = b.constructor
              , d = {}
              , e = Number(a.dataLength / 2).toFixed(0);
            d.container = c.doms.catalogInfoDetails,
            d.catalogTitleDom = "h3",
            d.specGroupContainerClass = "",
            (0 == a.dataSort || a.dataSort + 1 == e && !a.firstData) && (d.gridContainer = _gg.utilities.domGenerator({
                nodeType: "div",
                attributes: {
                    id: "catalog-info-" + a.dataSort
                },
                classNames: ["gg-w-12 gg-d-12 gg-t-24 gg-m-24 catalog-info-content"]
            }),
            c.doms.catalogInfoDetails.append(d.gridContainer),
            c.doms.specContainer = c.doms.catalogInfoDetails.find("#catalog-info-" + a.dataSort)),
            a.firstData && (d.gridContainer = _gg.utilities.domGenerator({
                nodeType: "div",
                attributes: {
                    id: "general-catalog-info"
                },
                classNames: ["gg-w-24 gg-d-24 gg-t-24 gg-m-24"]
            }),
            d.catalogTitleDom = "h2",
            d.specGroupContainerClass = "gg-w-24 gg-d-24 gg-t-24 gg-m-24 padding-none",
            c.doms.catalogInfoDetails.prepend(d.gridContainer)),
            null != c.doms.specContainer && null != a.specValueList && (d.catalogSpecListContainer = _gg.utilities.domGenerator({
                nodeType: "ul",
                attributes: {
                    id: "spec-list-" + a.specGroupAttributeId
                },
                classNames: ["product-items productSpect clearfix " + d.specGroupContainerClass]
            }),
            d.catalogTitle = _gg.utilities.domGenerator({
                nodeType: d.catalogTitleDom,
                classNames: ["catalog-title"],
                htmlContent: a.specGroupName
            }),
            d.specGroupContainer = _gg.utilities.domGenerator({
                nodeType: "div",
                attributes: {
                    id: "spec-group-" + a.specGroupAttributeId
                },
                classNames: ["spec-group-container"],
                htmlContent: [d.catalogTitle, d.catalogSpecListContainer]
            }),
            a.firstData ? $GG("#general-catalog-info").prepend(d.specGroupContainer) : c.doms.specContainer.append(d.specGroupContainer),
            $GG.each(a.specValueList, function(b, e) {
                var f = ""
                  , g = "";
                if (a.firstData ? (f = "gg-w-6 gg-d-6 gg-t-8 gg-m-12 spec-title",
                g = "gg-w-18 gg-d-18 gg-t-16 gg-m-12 productFeaturesitemList") : (f = "gg-w-12 gg-d-12 gg-t-8 gg-m-12 spec-title",
                g = "gg-w-12 gg-d-12 gg-t-16 gg-m-12 productFeaturesitemList"),
                d.catalogSpecDisplayName = _gg.utilities.domGenerator({
                    nodeType: "span",
                    classNames: [f],
                    htmlContent: e.displayName
                }),
                null != e.specValueList) {
                    var h = null
                      , i = "";
                    i += "<ul>",
                    $GG.each(e.specValueList, function(a, b) {
                        null != b.specData && b.specData && (i += '<li class="' + "" + '">' + b.specData + "</li>")
                    }),
                    i += "</ul>",
                    h = i,
                    e.displayName == c.staticTexts.specNames.brand && $GG("." + c.staticTexts.defaultSpecNames[e.displayName] + "-url").length > 0 && (h = _gg.utilities.domGenerator({
                        nodeType: "a",
                        attributes: {
                            title: e.specValueList[b].specData,
                            href: $GG("." + c.staticTexts.defaultSpecNames[e.displayName] + "-url").attr("href"),
                            target: "_blank"
                        },
                        htmlContent: i
                    })),
                    d.catalogSpecData = _gg.utilities.domGenerator({
                        nodeType: "span",
                        classNames: [g],
                        htmlContent: h
                    }),
                    d.catalogSpecDataLi = _gg.utilities.domGenerator({
                        nodeType: "li",
                        classNames: ["gg-w-24 gg-d-24 gg-t-24 gg-m-24 padding-none"],
                        htmlContent: [d.catalogSpecDisplayName, d.catalogSpecData]
                    })
                }
                $GG("#spec-list-" + a.specGroupAttributeId).append(d.catalogSpecDataLi)
            }))
        },
        positionFixedControl: function() {
            $GG(window).scroll(function() {
                if ("none" != $GG("#MbTabCon").css("display")) {
                    (document.documentElement.scrollTop || document.body.scrollTop) > $GG("#topContainer~.gray-content").offset().top ? $GG("#MbTabCon").addClass("pst-fixed") : $GG("#MbTabCon").removeClass("pst-fixed")
                }
            })
        },
        zoomingControllerEvents: function() {
            var a = this
              , b = a.constructor
              , c = b._ggAction
              , d = 0;
            isZoomEnable = !1,
            $GG("#mobile-thumbs-first img, #mobile_zoom_icon").bind(c.CLICK, function(b) {
                d = 0 == $GG("#mobile-thumbs-first .slider-bullet-item").length ? 0 : $GG("#mobile-thumbs-first .slider-bullet-item.selected").index(),
                a.zoomingController(d),
                $GG("#mobile-thumbs-zoom").find("img").panzoom({
                    startTransform: "scale(1.1)",
                    minScale: 1,
                    maxScale: 5,
                    increment: .5,
                    contain: "invert",
                    onZoom: function(a, b) {
                        isZoomEnable = !0
                    },
                    onEnd: function(a, b) {
                        1 == b.getMatrix()[0] ? isZoomEnable = !1 : isZoomEnable = !0
                    }
                }).panzoom("zoom", !0),
                $GG("#topContainer").before($GG("#mobile-thumbs-zoom").detach()),
                $GG("#mobile-thumbs-zoom").css("display", "block")
            });
            var e = {}
              , f = 0
              , g = 0;
            $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").length > 1 ? ($GG("#mobile-thumb").bind(_gg.controller.events.Actions.DOWN, function(a) {
                0 == f ? (f = (new Date).getTime(),
                g = a.originalEvent.targetTouches[0].pageX) : (new Date).getTime() - f < 1e3 ? Math.abs(g - a.originalEvent.targetTouches[0].pageX) < 10 && (f = 0,
                g = 0,
                $GG("#mobile-thumbs-zoom").find("img").panzoom("reset")) : (f = (new Date).getTime(),
                g = a.originalEvent.targetTouches[0].pageX)
            }),
            $GG("#mobile-thumb").bind(_gg.controller.events.Actions.DOWN, function(a) {
                e.initialPoint = {
                    x: a.originalEvent.targetTouches[0].pageX,
                    y: a.originalEvent.targetTouches[0].pageY
                },
                a.preventDefault(),
                $GG("#mobile-thumb").bind(_gg.controller.events.Actions.MOVE, function(a) {
                    if (!isZoomEnable) {
                        var b = 0;
                        b = e.offset = a.originalEvent.targetTouches[0].pageX - e.initialPoint.x,
                        Math.abs(a.originalEvent.targetTouches[0].pageX - e.initialPoint.x) > 30 && a.preventDefault(),
                        e.distance = Math.min(Math.abs(b), 80),
                        g = a.originalEvent.targetTouches[0].pageX
                    }
                }),
                $GG("#mobile-thumb").bind(_gg.controller.events.Actions.UP, function(a) {
                    isZoomEnable || ($GG("#mobile-thumb").unbind([_gg.controller.events.Actions.MOVE, _gg.controller.events.Actions.UP].join(" ")),
                    e.distance >= 80 && (e.offset > 0 ? $GG("#mobile-thumbs-zoom #thumbnail-left").trigger(c.CLICK) : $GG("#mobile-thumbs-zoom #thumbnail-right").trigger(c.CLICK),
                    e.distance = 0))
                })
            }),
            $GG("#mobile-thumbs-zoom #thumbnail-right, #mobile-thumbs-zoom #thumbnail-left").bind(c.CLICK, function(b) {
                $GG("#mobile-thumbs-zoom").find("img").css("opacity", "0"),
                $GG("#mobile-thumbs-zoom").find("img").panzoom("reset"),
                $GG(this).attr("id").indexOf("right") > -1 ? (d += 1) > $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").length - 1 && (d = 0) : $GG(this).attr("id").indexOf("left") > -1 && (d -= 1) < 0 && (d = $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").length - 1),
                document.getElementById("mobile-thumb").addEventListener("load", function() {
                    setTimeout(function() {
                        $GG("#mobile-thumbs-zoom").find("img").css("opacity", "1")
                    }, 250)
                }),
                a.zoomingController(d)
            })) : $GG("#thumbnail-right, #thumbnail-left").css("display", "none"),
            $GG("#mobile-thumbs-zoom #thumbnail-close").bind(c.CLICK, function(b) {
                $GG("#mobile-thumbs-zoom").find("img").panzoom("reset"),
                $GG("#mobile-thumbs-zoom").css("display", "none"),
                a.zoomingController(d)
            })
        },
        zoomingController: function(a) {
            var b = (this.constructor,
            "data-zoominimg");
            "" == $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").eq(a).attr(b) && (b = "src"),
            $GG("#mobile-thumbs-zoom").find("img").attr("src", ""),
            $GG("#mobile-thumbs-zoom").find(".loadingSpinner").removeClass("hidden"),
            $GG("#mobile-thumbs-zoom").find("img").attr("src", $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").eq(a).attr(b)),
            $GG("#mobile-thumbs-zoom").find("img").bind("load", function() {
                $GG("#mobile-thumbs-zoom").find(".loadingSpinner").addClass("hidden")
            }),
            $GG("#mobile-thumbs-zoom #thumbnail-count").html(a + 1 + " / " + $GG("#mobile-thumbs-first li.img_slide:not(.gg-slider-clone-elements) img").length)
        },
        recommendationPassiveItemServicesController: function(a) {
            function b(a) {
                var b = 4;
                return 4 == a && (b = 3),
                b
            }
            for (var c = this.constructor, d = 3, e = 0, f = {
                3: "gg-d-8 gg-w-8 gg-t-8 gg-m-12 recom-wide-content recom-content",
                4: "gg-d-6 gg-w-6 gg-t-8 gg-m-12 recom-standart-content recom-content"
            }, g = '<ul id="recommendation-content" class="padding-none gg-w-24 gg-d-24 gg-m-24 gg-t-24">', h = 0; h < a.length; h++) {
                var i = "";
                a[h].freeCargo && (i = '<div class="free-shipping-container"></div>');
                var j = "";
                a[h].recomLink && (j = 'class="recommendation-navigation-controller" data-recom="' + a[h].recomLink + '"');
                var k = "img-cover";
                "gr" == a[h].recType && (k = "recommendation-gravity-target img-cover");
                var l = "";
                a[h].id && (l = a[h].id),
                g += '<li class="' + f[d] + '"><div class="recom-cover-container clearfix"><a href="' + a[h].link + '" ' + j + 'class="' + k + '" data-id="' + l + '"><div class="recommendation-image-cover"><img class="img-dimension" src="' + a[h].imageUrl + '"/></div><span class="recommendation-title">' + a[h].title + '</span><span class="recommendation-price">' + _gg.utilities.numberWithCommas(Number(a[h].price), !0) + "</span>" + i + "</a></div></li>",
                e++,
                e % d == 0 && (e = 0,
                d = b(d))
            }
            g += "</ul>",
            c.recommendationServicesDefaultHTML = g,
            $GG("#similar-product-list").append(c.recommendationServicesDefaultHTML),
            $GG("#similar-product-list-con").removeClass("hidden"),
            this.recommendationSwitchContent();
            var m = this;
            $GG(document).on(_gg.static.Enums.FireEvents.RESPONSIVE_CHANGE, function() {
                m.recommendationSwitchContent()
            })
        },
        recommendationSwitchContent: function() {
            var a = this.constructor;
            if (_gg.static.globalParameters.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile) {
                if (!a.recommendationSliderActive) {
                    var b = '<div class="slider-overflow-m clearfix"><div class="gg-d-24 gg-t-24 gg-m-24 widget-border-recom padding-none mobile-ready"><div class="gg-w-24 gg-d-24 gg-t-24 gg-m-16 padding-none"><div class="widget-slider">' + a.recommendationServicesDefaultHTML + "</div></div></div></div>";
                    $GG("#similar-product-list").html("").append(b),
                    a.recomDefaults = {},
                    a.recomDefaults.containerId = "similar-product-list .widget-slider",
                    a.recomDefaults.bullets = !1,
                    a.recomDefaults.infinite = !0,
                    a.recomDefaults.transition = "slide",
                    a.recomDefaults.mobileScroll = !0,
                    a.sliderDefaults.mainCoverContainer = ".widget-border-recom",
                    a.recommendationProductSlider = new _gg.components.slider(a.recomDefaults),
                    a.recommendationProductSlider.init(),
                    a.recommendationSliderActive = !0
                }
            } else
                a.recommendationSliderActive && ($GG("#similar-product-list").html("").append(a.recommendationServicesDefaultHTML),
                this.recommendationProductSlider = "",
                a.recommendationSliderActive = !1)
        },
        recommendationServicesController: function(a) {
            var b = $GG("#product-viewed-slider-con")
              , c = this.constructor;
            if (b[0].innerHTML = '<div class="slider-overflow-m"><div class="gg-d-24 gg-t-24 gg-m-24 widget-border padding-none"><div class="gg-d-24 gg-t-24 gg-m-10 gg-mw-11 padding-none"><div class="widget-slider"><ul></ul></div></div></div></div>',
            b = b.find(".widget-slider ul"),
            $GG.each(a, function(c, d) {
                var e = ""
                  , f = "";
                d.recomLink && (f = "recommendation-navigation-controller clearfix",
                e = d.recomLink),
                "gr" == a[c].recType && (f = "recommendation-gravity-target  clearfix");
                var g = "";
                a[c].id && (g = a[c].id);
                var h = "";
                a[c].freeCargo && (h = '<div class="free-shipping-container"></div>'),
                b.append('<li><div class="recom-cover-container clearfix"><a class="img-con clearfix ' + f + '" title="' + d.title + '"  href="' + d.link + '"  data-id="' + g + '" data-recom="' + e + '" ><div class="recom-image-cover"><img class="lazyload-img" src="http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/lazy-load.gif" data-original="' + d.imageUrl + '" width="240" height="240" alt="' + d.title + '" /></div><div class="product-description"><span class="product-title">' + d.title + '</span><span class="price"><strong>' + _gg.utilities.numberWithCommas(Number(d.price), !0) + "</strong></span></div>" + h + "</a></div></li>"),
                $GG(".lazyload-img").not(".swapImage").lazyload({})
            }),
            $GG("#product-viewed-con").fadeIn(),
            $GG("#product-viewed-slider-con").find("li").length >= 4) {
                c.sliderDefaults.containerId = "product-viewed-slider-con .widget-slider ",
                c.sliderDefaults.bullets = !1,
                c.sliderDefaults.infinite = !0,
                c.sliderDefaults.transition = "slide",
                c.sliderDefaults.mobileScroll = !0,
                c.sliderDefaults.mainCoverContainer = ".widget-border";
                var d = new _gg.components.slider(c.sliderDefaults);
                d.init();
                var e = {
                    targetContainerSelector: "#product-viewed-slider-con",
                    targetImgSelector: ".lazyload-img"
                };
                new _gg.controller.ImgDimensionController(e).init();
                var f = $GG("#" + c.sliderDefaults.containerId);
                $GG(d).bind(d.NEXT_ITEM_CLICKED, function() {
                    f.find("img").each(function() {
                        var a = $GG(this).attr("data-original");
                        $GG(this).attr("src", a)
                    })
                }),
                $GG(d).bind(d.PREV_ITEM_CLICKED, function() {
                    f.find("img").each(function() {
                        var a = $GG(this).attr("data-original");
                        $GG(this).attr("src", a)
                    })
                }),
                $GG(d).bind(d.SCROLL_EVENT_CHANGE, function() {
                    f.find("img").each(function() {
                        var a = $GG(this).attr("data-original");
                        $GG(this).attr("src", a)
                    })
                })
            }
        },
        getMemberSimilarProducts: function() {
            var a = {}
              , b = "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/default/"
              , c = ""
              , d = this.constructor;
            a.productId = $GG("#productId").val(),
            a.productTitle = $GG("h1:first").html(),
            a.memberId = $GG("#member-other-products-view").attr("rev"),
            a.categoryCode = $GG("#categoryCode").val(),
            a.count = 10,
            d._ajaxConfig.url = d._ajaxConfig.similarProducts.url,
            d._ajaxConfig.data = a,
            d._ajaxConfig.dataType = "json",
            d.ajaxMemberSimilarProductsCtrl = new _gg.communication.ajaxController(d._ajaxConfig),
            d.ajaxMemberSimilarProductsCtrl.tryOnce = !1,
            d.ajaxMemberSimilarProductsCtrl.ajaxAction();
            var e = new _gg.utilities.ajaxObserver;
            e.init(),
            e.add(d.ajaxMemberSimilarProductsCtrl),
            d.memberSimilarProducts = !1,
            d.ajaxMemberSimilarProductsCtrl.completeReq = function() {
                var a = []
                  , e = {}
                  , f = $GG("#member-other-products")
                  , g = d.ajaxMemberSimilarProductsCtrl.completeData;
                if (d.memberSimilarProducts = !1,
                $GG.each(g, function(b, c) {
                    e = {},
                    e.buyPrice = c.buyPrice,
                    e.id = c.id,
                    c.title.length > d.titleShowLength ? e.title = c.title.substring(0, d.titleShowLength) + "..." : e.title = c.title,
                    e.categoryCode = c.categoryCode,
                    e.imageUrl = c.thumbnail,
                    e.url = c.url,
                    e.specs = c.specs,
                    e.energy = null,
                    e.url = e.url.replace("http://urun.gittigidiyor.com/", d.productRoute),
                    a.push(e)
                }),
                $GG.each(a, function(e) {
                    null != a[e].specs && $GG.each(a[e].specs, function(b, c) {
                        "enerjisinifi_spec" == c.name && (a[e].energy = c.values[0])
                    }),
                    c = a[e].imageUrl.length > 0 && null != a[e].imageUrl[0] ? a[e].imageUrl[0].tn24 : b + "default_tn_24.jpg",
                    f.append($GG('<li id="product' + a[e].id + '"/>').append($GG('<a class="img-container"/>').attr({
                        title: a[e].title,
                        href: a[e].url
                    }).append($GG('<img class="lazyload-img" src="' + c + '" width="300" height="300" alt="' + a[e].title + '"/>'))).append($GG("<h3/>").append($GG('<a class="h3-link" title="' + a[e].title + '" href="' + a[e].url + '" />').html(a[e].title))).append($GG('<span class="price"/>').append($GG("<strong />").html(_gg.utilities.numberWithCommas(Number(a[e].buyPrice), !0))))),
                    null != a[e].energy && a[e].energy != d.staticTexts.undefined && $GG("#product" + a[e].id).find("a:first").append($GG('<span class="energy-class">' + a[e].energy + "</span>"))
                }),
                $GG("#member-other-products-con").fadeIn(),
                $GG("#member-other-products-con").find("li").length > 3) {
                    d.sliderDefaults.containerId = "member-other-products-con",
                    d.sliderDefaults.bullets = !1,
                    d.sliderDefaults.infinite = !0;
                    new _gg.components.slider(d.sliderDefaults).init()
                }
            }
        },
        getViewCount: function() {
            var a = $GG("#productId").val()
              , b = {
                productId: a
            }
              , c = this.constructor
              , d = $GG(".view-count .counter-container");
            if (null != a && a) {
                c.viewCount = !1,
                c._ajaxConfig.url = c._ajaxConfig.getViewCount.url,
                c._ajaxConfig.data = b,
                c._ajaxConfig.dataType = "json",
                c.ajaxViewCountCtrl = new _gg.communication.ajaxController(c._ajaxConfig),
                c.ajaxViewCountCtrl.tryOnce = !1,
                c.ajaxViewCountCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                e.add(c.ajaxViewCountCtrl),
                c.viewCount = !1,
                c.ajaxViewCountCtrl.completeReq = function() {
                    c.viewCount = !1;
                    var a = {}
                      , b = c.ajaxViewCountCtrl.completeData;
                    if (a.data = b.viewCount.toString(),
                    a.length = a.data.length,
                    a.splitArr = a.data.split(""),
                    a.splitArr = a.splitArr.reverse(),
                    a.length < 6)
                        for (var e = a.length; e < 6; e++)
                            a.splitArr[e] = 0;
                    a.splitArr.reverse(),
                    d.empty(),
                    $GG.each(a.splitArr, function(b) {
                        d.append($GG('<div class="number"/>').html(a.splitArr[b]).append($GG('<span class=""/>')))
                    }),
                    d.find(".number").show(),
                    $GG(".view-count").find(".loading-center").hide(),
                    jQuery(".counter-container").each(function() {
                        $(this).find("div").last().addClass("border-hidden")
                    })
                }
            }
        },
        getShippingInfo: function() {
            if (!($GG("#ebay-product-detail-container").length > 0)) {
                var a = {
                    productId: $GG("#productId").val()
                }
                  , b = this.constructor
                  , c = 6
                  , d = this;
                b._ajaxConfig.url = b._ajaxConfig.getShippingInfo.url,
                b._ajaxConfig.data = a,
                b._ajaxConfig.dataType = "json",
                b.ajaxShippingCtrl = new _gg.communication.ajaxController(b._ajaxConfig),
                b.ajaxShippingCtrl.tryOnce = !1,
                b.ajaxShippingCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                e.add(b.ajaxShippingCtrl),
                d.pendingAjaxSetup(c),
                b.ajaxShippingCtrl.completeReq = function() {
                    b.isCargoClicked = !0;
                    var a = $GG("#ship-names").attr("rev").split(",")
                      , e = $GG("#city-name").attr("rev").split(",")
                      , f = b.ajaxShippingCtrl.completeData
                      , g = [];
                    $GG.each(a, function(a, b) {
                        $GG.each(f.firms, function(a, c) {
                            c.firmKey == b && g.push(c.firmDisplayName)
                        })
                    });
                    var h = "-";
                    $GG.each(f.locations, function(a, b) {
                        e == b.cityCode && (h = b.cityName)
                    }),
                    $GG("#ship-names").length > 0 && $GG("#ship-names").html('<span class="Sep">:</span>' + g.toString()),
                    $GG("#city-name").length > 0 && $GG("#city-name").html('<span class="Sep">:</span>' + h),
                    $GG(".city-name-ajax").length > 0 && $GG(".city-name-ajax").html("<em>C</em>: Bu ürünün gönderildiği yer: " + h + "."),
                    $GG(".firm-name-ajax").length > 0 && $GG(".firm-name-ajax").html("<em>C</em>:  Ürün teslimatı " + g.toString() + " ile yapılmaktadır."),
                    d.completeAjaxSetup(c)
                }
            }
        },
        getProductPaymentTable: function() {
            var a = {}
              , b = this.constructor
              , c = 2
              , d = this;
            a.productId = $GG("#productId").val(),
            a.categoryCode = $GG("#categoryCode").val(),
            a.productPrice = $GG("#productPrice").val(),
            a.maxInstallment = $GG("#maxInstallment").val(),
            b._ajaxConfig.url = b._ajaxConfig.getPaymentTable.url,
            b._ajaxConfig.data = a,
            b._ajaxConfig.dataType = "json",
            b.ajaxInsCtrl = new _gg.communication.ajaxController(b._ajaxConfig),
            b.ajaxInsCtrl.tryOnce = !1,
            b.ajaxInsCtrl.ajaxAction();
            var e = new _gg.utilities.ajaxObserver;
            e.init(),
            e.add(b.ajaxInsCtrl),
            d.pendingAjaxSetup(c),
            b.isInsClicked = !0,
            b.ajaxInsCtrl.completeReq = function() {
                var a = b.ajaxInsCtrl.completeData;
                if (null != a.paymentTable) {
                    var e, f = [], g = {}, h = [], i = $GG("#payment-options .BankIns"), j = $GG("#MbInsCon"), k = [], l = [], m = 1, n = {};
                    $GG.each(a.paymentTable, function(a, b) {
                        g = {},
                        h = [],
                        m = 0,
                        n = {},
                        n.month = 0,
                        n.bank = "",
                        $GG.each(b, function(a, b) {
                            g.installmentPrice = _gg.utilities.numberWithCommas(Number(b.installmentPrice), !0),
                            g.isSameWithCachePrice = b.isSameWithCachePrice,
                            "-" != b.totalPrice ? (b.month > n.month && (n.month = b.month,
                            n.bank = b.keyName),
                            g.totalPrice = _gg.utilities.numberWithCommas(Number(b.totalPrice), !0)) : (g.isSameWithCachePrice = !1,
                            g.totalPrice = "-"),
                            g.bankName = b.bankName,
                            g.order = b.order,
                            g.keyName = b.keyName,
                            g.month = b.month,
                            h.push(g),
                            g = {},
                            m <= m && m++
                        }),
                        k.push(m),
                        l.push(n),
                        f.push(h),
                        h = []
                    }),
                    e = Math.max.apply(null, k),
                    i.append($GG('<tr id="firstInsColumn"/>').append($GG('<th class="first"/>'))),
                    $GG.each(f, function(a, b) {
                        b.length < e && b.push({
                            bankName: b[0].bankName,
                            installmentPrice: "-",
                            isSameWithCachePrice: !1,
                            keyName: b[0].keyName,
                            month: 13,
                            order: "",
                            totalPrice: "-"
                        })
                    }),
                    $GG.each(f, function(a, b) {
                        if ($GG.each(b, function(b, c) {
                            c.month > 2 && 0 == a && $GG("#firstInsColumn").append($GG('<th  align="center"/>').html(c.month + " Taksit"))
                        }),
                        i.append($GG('<tr class="bank-' + b[0].keyName + '"/>')),
                        j.append($GG('<table class="bank-mb-' + b[0].keyName + ' BanksIns mrb20" width="100%" cellpadding="0" cellspacing="0"/>')),
                        b[0].month < 3) {
                            i.find(".bank-" + b[0].keyName).append($GG('<td width="225" align="center" class="BankLogo"/>').append($GG('<span class="logo-' + b[0].keyName + '"/>')).append($GG('<p class="Gray"/>').html(b[0].bankName)));
                            var c = Number(b.length) - 1;
                            j.find(".bank-mb-" + b[0].keyName).append($GG('<tr class="first"/>').append($GG('<th colspan="' + c + '" align="center"/>').append($GG('<span class="bank-logo ' + b[0].keyName + '"/>')).append($GG('<span class="BankName"/>').html(b[0].bankName)))).append($GG('<tr class="second"/>')).append($GG('<tr class="third"/>')).append($GG('<tr class="last"/>'))
                        }
                        $GG.each(b, function(a, c) {
                            if (0 != c.month) {
                                var d = i.find(".bank-" + c.keyName);
                                d.append($GG('<td align="center"/>').append($GG('<div class="posr content' + c.month + '" />'))),
                                c.isSameWithCachePrice && d.find(".content" + c.month).append($GG('<span class="CachePrice"/>')),
                                "-" != c.totalPrice ? (d.find(".content" + c.month).append($GG("<p/>").html("<strong>" + c.installmentPrice + " X " + c.month + "</strong>")).append($GG('<p class="Gray"/>').html("Toplam:" + c.totalPrice)),
                                j.find(".bank-mb-" + b[0].keyName).find("tr.second").append($GG('<th class="InsTitle" align="center"/>').html(c.month + " Taksit")),
                                j.find(".bank-mb-" + b[0].keyName).find(".third").append($GG('<td align="center"/>').append($GG('<div class="posr content' + c.month + '" />'))),
                                c.isSameWithCachePrice && j.find(".bank-mb-" + b[0].keyName).find(".third .content" + c.month).append($GG('<span class="CachePrice"/>')),
                                j.find(".bank-mb-" + b[0].keyName).find(".third .content" + c.month).append($GG("<p/>").html("<strong>" + c.installmentPrice + "</strong>")),
                                j.find(".bank-mb-" + b[0].keyName).find(".last").append($GG('<td align="center"/>').append($GG('<p class="Gray"/>').html("Toplam:<br/>" + c.totalPrice)))) : d.find(".content" + c.month).html("-")
                            }
                        })
                    }),
                    d.completeAjaxSetup(c)
                }
                d.animateToProductInfo()
            }
        },
        getSellerComments: function(a, b, c) {
            var d = {}
              , e = this.constructor
              , f = 4
              , g = this;
            d.memberNick = a,
            d.page = b,
            d.limit = c,
            e._ajaxConfig.url = e._ajaxConfig.getSellerComments.url,
            e._ajaxConfig.data = d,
            e._ajaxConfig.dataType = "json",
            e.ajaxSellerCommentsCtrl = new _gg.communication.ajaxController(e._ajaxConfig),
            e.ajaxSellerCommentsCtrl.tryOnce = !1,
            e.ajaxSellerCommentsCtrl.ajaxAction();
            var h = new _gg.utilities.ajaxObserver;
            h.init(),
            h.add(e.ajaxSellerCommentsCtrl),
            g.pendingAjaxSetup(f);
            var i = $GG("#tabContent4");
            e.ajaxSellerCommentsCtrl.completeReq = function() {
                var d = e.ajaxSellerCommentsCtrl.completeData
                  , h = [];
                if (d.error)
                    e.isCommentClicked = !1,
                    $GG(".seller-comments-content h3").show(),
                    i.find("ul.productComment").empty(),
                    $GG(".pager").addClass("hidden"),
                    $GG(".seller-comments-content h3").addClass("text-center").html(d.error).show();
                else {
                    e.isCommentClicked = !0,
                    $GG(".pager").removeClass("hidden"),
                    $GG(".seller-comments-content h3").html("Satışları için aldığı yorumlar (<span></span>)").show().removeClass("text-center"),
                    i.find(".padding-15px").show(),
                    $GG(".loading-center").hide();
                    var j = {}
                      , k = Number(d.totalCount);
                    h = [],
                    $GG.each(d.comments, function(a, b) {
                        j = {},
                        j.date = b.date,
                        j.answerDate = b.answerDate,
                        j.comment = b.comment,
                        j.commentAnswer = b.commentAnswer,
                        j.rate = b.rate,
                        j.productId = b.productId,
                        j.productTitle = b.productTitle,
                        j.productUrl = b.productUrl,
                        j.userProfileUrl = b.userProfileUrl,
                        j.userNickName = b.userNickName,
                        j.maskedNickName = b.maskedNickName,
                        j.totalTransaction = b.totalTransaction,
                        j.hideProfileStatus = b.hideProfileStatus,
                        j.productUrl = j.productUrl.replace("http://urun.gittigidiyor.com/", e.productRoute),
                        h.push(j)
                    }),
                    i.find("h3").find("span").html(k),
                    i.find("ul.productComment").empty();
                    var l = i.find("ul.productComment")
                      , m = "neg"
                      , n = ""
                      , o = "";
                    $GG.each(h, function(b) {
                        m = "neg",
                        n = "",
                        o = "",
                        Number(h[b].rate) > 3 ? m = "pos" : Number(h[b].rate) > 1 && (m = "notr");
                        var c = new Date(h[b].date);
                        if (n = g.convertMS(c),
                        l.append($GG('<li class="clearfix ' + m + '" rev="' + h[b].rate + '" id="comment' + b + '"/>').append($GG('<div class="gg-w-1 gg-d-2 gg-t-2 gg-m-4"/>').append($GG('<span class="icon" />'))).append($GG('<div class="gg-w-23 gg-d-22 gg-t-22 gg-m-20 padding-none"/>').append($GG('<div class="gg-w-18 gg-d-18 gg-t-16 gg-m-24 comment-details"/>').append($GG("<p/>").append($GG('<a href="' + h[b].productUrl + '"/>').html(h[b].productTitle))).append($GG("<span/>").html(h[b].comment))).append($GG('<div class="gg-w-6 gg-d-6 gg-t-8 gg-m-24"/>').append($GG('<em class="user"/>').append($GG('<a href="http://profil.gittigidiyor.com/' + h[b].userNickName + '"/>').html(h[b].userNickName)).append(' ( <a href="http://profil.gittigidiyor.com/' + h[b].userNickName + '">' + h[b].totalTransaction + "</a> ) <span>" + n + "</span>"))))),
                        h[b].commentAnswer) {
                            var d = new Date(h[b].answerDate);
                            o = g.convertMS(d),
                            l.find("#comment" + b + " .comment-details").append($GG("<br />")).append($GG('<span class="comment" />').append("<strong>" + a + " cevabı: </strong>" + h[b].commentAnswer + " - " + o))
                        }
                        l.find("#comment" + b).append($GG('<div class="clear"/>'))
                    });
                    var p = Math.ceil(k / c);
                    g.createPager(p, b, $GG("#tabContent4"))
                }
                g.animateToProductInfo(),
                g.completeAjaxSetup(f)
            }
        },
        getLastSeenProducts: function() {
            var a = this.constructor;
            if (a.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile) {
                var b = {}
                  , a = this.constructor
                  , c = ""
                  , d = "http://st2.gittigidiyor.net/fred/framework/assets/img/core/main/default/"
                  , e = "Enerji Sınıfı";
                if (b.productId = $GG("#productId").val(),
                b.productLists = $GG("#last-seen-products-cookie").val(),
                null != b.productLists && b.productLists && null != b.productId && b.productId && b.productLists.split(",").length >= 4) {
                    a._ajaxConfig.url = a._ajaxConfig.getLastSeenProducts.url,
                    a._ajaxConfig.data = b,
                    a._ajaxConfig.dataType = "json",
                    a.ajaxLastSeenCtrl = new _gg.communication.ajaxController(a._ajaxConfig),
                    a.ajaxLastSeenCtrl.tryOnce = !1,
                    a.ajaxLastSeenCtrl.ajaxAction();
                    var f = new _gg.utilities.ajaxObserver;
                    f.init(),
                    f.add(a.ajaxLastSeenCtrl),
                    a.ajaxLastSeenCtrl.completeReq = function() {
                        var f = []
                          , g = {}
                          , h = $GG("#last-seen-products")
                          , i = a.ajaxLastSeenCtrl.completeData;
                        if (i.length > 4) {
                            if (a.lastViewed = !1,
                            $GG.each(i, function(b, c) {
                                g = {},
                                g.buyPrice = c.buyPrice,
                                g.id = c.id,
                                g.title = c.title,
                                g.categoryCode = c.categoryCode,
                                g.imageUrl = c.imageUrl,
                                g.productUrl = c.productUrl,
                                g.includeJsonKey = c.includeJsonKey,
                                g.lastModifiedDate = c.lastModifiedDate,
                                g.state = c.state,
                                g.specs = c.specs,
                                g.specKeys = [],
                                g.specDetails = [],
                                g.productUrl = g.productUrl.replace("http://urun.gittigidiyor.com/", a.productRoute),
                                f.push(g)
                            }),
                            $GG.each(f, function(a, f) {
                                b.productId != f.id && $GG("#last-seen-products-" + f.id).length < 1 && (null != f.specs && f.specs.length > 0 && $GG.each(f.specs, function(a, b) {
                                    f.specKeys.push(b.mainSpecName),
                                    f.specDetails[b.mainSpecName] = b.specDataName
                                }),
                                h.append($GG('<li class="best-seller" id="last-seen-products-' + f.id + '"/>').append($GG('<div class="product-image"/>')).append($GG('<span class="product-title"/>').append($GG('<a class="imglink black" href="' + f.productUrl + '" title="' + f.title + '" />').html(f.title))).append($GG('<span class="product-price"/>').html(_gg.utilities.numberWithCommas(Number(f.buyPrice), !0)))),
                                $GG.inArray(e, f.specKeys) > -1 && h.find("#last-seen-products-" + f.id + " .product-image").append($GG('<span class="energy-class" />').html(f.specDetails[e])),
                                c = f.imageUrl.length > 0 && null != f.imageUrl[0] ? f.imageUrl[0].tn24 : d + "default_tn_24.jpg",
                                h.find("#last-seen-products-" + f.id + " .product-image").append($GG('<a class="imglink best-seller-product-image" href="' + f.productUrl + '" title="' + f.title + '" rev="' + b.imgUrl + '" />').append($GG('<img class="lazyload-img" src="' + c + '" alt="' + f.title + '" width="240" height="240"/>'))))
                            }),
                            $GG("#last-seen-products-con").fadeIn(),
                            $GG(".best-seller-items-container").length > 0 && $GG(".best-seller-items-container").find("li").length > 3) {
                                a.sliderDefaults.containerId = "last-seen-products-slider-con",
                                a.sliderDefaults.bullets = !1,
                                a.sliderDefaults.infinite = !0;
                                var j = new _gg.components.slider(a.sliderDefaults);
                                j.init()
                            }
                        } else
                            $GG("#last-seen-products-con").remove()
                    }
                }
            }
        },
        addWatchAjax: function() {
            var a = {}
              , b = this.constructor
              , c = !1
              , d = 0;
            if (a.productId = $GG("#productId").val(),
            a.productRetailVariantId = 0,
            a.categoryCode = $GG("#categoryCode").val(),
            $GG(".watched-product").length > 0 && (c = !0,
            d = $GG("#watch-product").attr("rev")),
            a.watched = c,
            a.watchedId = d,
            $GG("#loggedInMemberId").length > 0) {
                if (!$GG("#watch-product").hasClass("disabled")) {
                    $GG("#watch-product").addClass("disabled"),
                    b._ajaxConfig.url = b._ajaxConfig.addToWatch.url,
                    b._ajaxConfig.data = a,
                    b._ajaxConfig.dataType = "json",
                    b.ajaxAddWatchCtrl = new _gg.communication.ajaxController(b._ajaxConfig),
                    b.ajaxAddWatchCtrl.tryOnce = !1,
                    b.ajaxAddWatchCtrl.ajaxAction();
                    var e = new _gg.utilities.ajaxObserver;
                    e.init(),
                    e.add(b.ajaxAddWatchCtrl),
                    b.ajaxAddWatchCtrl.completeReq = function() {
                        var a = b.ajaxAddWatchCtrl.completeData;
                        $GG("#watch-product").removeClass("disabled"),
                        "false" == a.error ? "notInWatchList" == a.status ? ($GG("#add-watch-label").html(b.staticTexts.addToWatch),
                        $GG("#add-watch-label,#watch-product span").removeClass("watched-product").addClass("watch-product"),
                        $GG(".trigger-add-watch").removeClass("watched-item").addClass("watch-item"),
                        $GG(".trigger-add-watch").find(".icon-success").addClass("icon-plus").removeClass("icon-success"),
                        $GG(".trigger-add-watch span").html(b.staticTexts.addToWatch),
                        b.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && ($GG("#watch-product").find("i").removeAttr("class").addClass("icon-plus"),
                        $GG("#watch-product").find("span").html(b.staticTexts.addToWatch))) : "inWatchList" == a.status && ($GG("#add-watch-label,.trigger-add-watch span").html(b.staticTexts.watched),
                        $GG("#add-watch-label,#watch-product span").addClass("watched-product"),
                        $GG(".trigger-add-watch").addClass("watched-item"),
                        $GG(".trigger-add-watch").find(".icon-plus").addClass("icon-success").removeClass("icon-plus"),
                        $GG("#watch-product").attr("rev", a.watchId),
                        b.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && ($GG("#watch-product").find("i").removeAttr("class").addClass("icon-success"),
                        $GG("#watch-product").find("span").html(b.staticTexts.watched))) : alert("Bir hata oluştu. Lütfen tekrar deneyiniz.")
                    }
                }
            } else {
                var f = encodeURIComponent("http://urun.gittigidiyor.com" + document.location.pathname + "?addWatch=1")
                  , g = "https://www.gittigidiyor.com/php/signin_operation.php?url=" + f;
                window.location = g
            }
        },
        getHistoryVersion: function(a) {
            var b = {}
              , c = this.constructor
              , d = $GG("#version-" + a);
            if ("" == d.children(".history-date-content").html()) {
                b.productId = $GG("#productId").val(),
                b.versionId = a,
                c._ajaxConfig.url = c._ajaxConfig.getDescriptionVersion.url,
                c._ajaxConfig.data = b,
                c._ajaxConfig.dataType = "json",
                c.ajaxHistoryVersionCtrl = new _gg.communication.ajaxController(c._ajaxConfig),
                c.ajaxHistoryVersionCtrl.tryOnce = !1,
                c.ajaxHistoryVersionCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                e.add(c.ajaxHistoryVersionCtrl),
                d.siblings().find(".history-date-content").hide(),
                d.siblings().find(".history-date").children("a.get-history-by-date").removeClass("close-icon"),
                c.ajaxHistoryVersionCtrl.completeReq = function() {
                    var a = c.ajaxHistoryVersionCtrl.completeData;
                    null == a.error && (d.find(".history-date-content").html(a.productDesc),
                    d.find(".history-date-content").show(),
                    d.find(".history-date").children("a.get-history-by-date").addClass("close-icon"))
                }
            }
            "none" == d.children(".history-date-content").css("display") ? (d.find(".history-date-content").show(),
            d.find(".history-date").children("a.get-history-by-date").addClass("close-icon")) : (d.find(".history-date-content").hide(),
            d.find(".history-date").children("a.get-history-by-date").removeClass("close-icon")),
            $GG(window).trigger("resize")
        },
        openHistoryLightBox: function() {
            $GG("#item-detail-history").modal({
                minWidth: "980",
                overlayClose: "True"
            });
            try {
                $GG(window).trigger("resize")
            } catch (a) {
                return !1
            }
            return !1
        },
        pendingAjaxSetup: function(a) {
            var b = $GG("#tabContent" + a)
              , c = $GG("#loadingGif").val();
            this.constructor.isCommentClicked || b.addClass("loading-min"),
            b.find(".ajaxLoading").addClass("loading-opacity"),
            b.find(".padding-15px").hide(),
            b.find(".loading-center").remove(),
            b.append($GG('<div class="loading-center position-loading"/>').append($GG('<img src="' + c + '" align="center" />'))),
            b.find(".loading-center").show()
        },
        completeAjaxSetup: function(a) {
            var b = $GG("#tabContent" + a);
            b.removeClass("loading-min"),
            b.find(".loading-center").remove(),
            b.find(".hidden").removeClass("hidden"),
            b.find(".ajaxLoading").removeClass("loading-opacity"),
            b.find(".padding-15px, .padding-15px ul, .padding-15px h3, .padding-15px div").show()
        },
        convertMS: function(a) {
            var b = a.getDate().toString()
              , c = (Number(a.getMonth()) + 1).toString();
            return b.length < 2 && (b = "0" + b),
            c.length < 2 && (c = "0" + c),
            b + "/" + c + "/" + a.getUTCFullYear()
        },
        writeGGTime: function() {
            var a = this.constructor;
            if ($GG("#gg-time").length > 0) {
                var b, c, d, e;
                a.sec++,
                a.sec > 59 && (a.sec = 0,
                a.min++),
                a.min > 59 && (a.min = 0,
                a.hour++),
                a.hour > 23 && (a.hour = 0),
                b = a.hour < 10 ? "0" + parseInt(a.hour).toString() : a.hour,
                c = a.min < 10 ? "0" + parseInt(a.min).toString() : a.min,
                d = a.sec < 10 ? "0" + parseInt(a.sec).toString() : a.sec,
                e = b + ":" + c + ":" + d,
                $GG("#gg-time").html(e)
            }
        },
        loadFile: function(a, b) {
            var c = document.getElementsByTagName("head")[0]
              , d = "";
            "script" == b ? (d = document.createElement("script"),
            d.type = "text/javascript",
            d.src = a) : (d = document.createElement("link"),
            d.rel = "stylesheet",
            d.type = "text/css",
            d.href = a,
            d.media = "all"),
            c.appendChild(d)
        },
        controlSimilarHeight: function() {
            var a = $GG("#similar-products-mobile").find("li:first").outerHeight() + 20;
            $GG("#similar-products-mobile-con .product-pos-con,#similar-products-mobile-con .product-overflow").height(a)
        },
        controlSticky: function(a) {
            a > this.constructor.fixedHeaderControlValue ? ($GG("#fixed-header").stop(!0, !0).slideDown(),
            $GG("#product-video-iframe").attr("style", "z-index:100")) : ($GG("#fixed-header").stop(!0, !0).slideUp(),
            $GG("#product-video-iframe").attr("style", "z-index:99999"))
        },
        hideAllTabs: function(a) {
            var b = this.constructor;
            $GG("#TabsCon,#MobileTitle,#product-information,#SubContent").removeAttr("style"),
            $GG(".work-shop-icon").removeClass("dpnone"),
            $GG(".TabSelect,#col-left").show(),
            $GG("#product-general-info").children("div").siblings().show();
            $GG(document).width();
            this.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? $GG("#mobile-page-view").show() : ($GG("#mobile-page-view").hide(),
            $GG(".daily-deal-icon").show()),
            b.productUi && $GG("#product-general-info").addClass("product-ui"),
            $GG(".TabSelect").addClass("mt20"),
            $GG("#ProductDetails").removeClass("HiddenImp"),
            $GG(".title-container").removeClass("border-bottom-e3e3e3"),
            $GG("#FQACon,#MbTabCon,#mobile-thumbs-zoom").hide(),
            a && $GG("#TabsCon").children(".box").slideUp(),
            $GG("#product-other-infos .TabSelect ul li:first").addClass("on").siblings().removeClass("on")
        },
        focusErr: function(a, b) {
            a && void 0 !== a || (a = "#quantityCol"),
            b && void 0 !== a || (b = ".quantityInpt"),
            $GG("body,html").animate({
                scrollTop: $GG(a).offset().top
            }, 800, function() {
                $GG(b).focus()
            })
        },
        getAjaxHost: function() {
            return _gg.utilities.ServerNameGenerator() + "/xhr"
        },
        maxLengthCheck: function(a) {
            a.value.length > a.maxLength && (a.value = a.value.slice(0, a.maxLength))
        },
        alpha: function(a, b) {
            var c;
            c = document.all ? parseInt(a.keyCode) : parseInt(a.which);
            var d = 0;
            return navigator.userAgent.indexOf("Opera") > -1 && (d = 9),
            8 == c || c == d || -1 != b.indexOf(String.fromCharCode(c))
        },
        printProduct: function() {
            var a, b = !1, c = "";
            if ("Microsoft Internet Explorer" == navigator.appName)
                window.print();
            else {
                if ($GG("#finished-product").length > 0) {
                    var d = $GG(".warning-con")[0].innerHTML;
                    a = $GG("#finished-product")[0].innerHTML,
                    c = $GG("#same-products")[0].innerHTML,
                    b = !0
                } else {
                    a = $GG("#product-general-info")[0].innerHTML;
                    var e = a
                      , f = "<div>" + e + "</div>"
                      , g = f.replace(/script/g, "THISISNOTASCRIPTREALLY")
                      , h = $GG(g);
                    h.find("THISISNOTASCRIPTREALLY").remove(),
                    h.find("#fakeAdvert").remove(),
                    a = h.html().replace(/THISISNOTASCRIPTREALLY/g, "script"),
                    a = h.html().replace(/nothisisnotascriptreally/g, "script")
                }
                var i = $GG("#product-information")[0].innerHTML
                  , j = window.open("", "")
                  , k = "http://st2.gittigidiyor.net";
                j.document.write("<html><head>"),
                j.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"'),
                j.document.write('"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'),
                j.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">'),
                j.document.write('<link type="text/css" rel="stylesheet" href="http://' + k + '/fred/framework/assets/css/core/main/base/base.css"/>'),
                j.document.write('<link type="text/css" rel="stylesheet" href="http://' + k + '/fred/framework/assets/css/core/main/header/header.css"/>'),
                j.document.write('<link type="text/css" rel="stylesheet" href="http://' + k + '/fred/page-based/product-detail/css/product-print.css"/>'),
                j.document.write("</head><body>"),
                j.document.write('<div class="container">'),
                j.document.write('<div class="mt20 mrb20"><img src="http://' + k + '/fred/framework/assets/img/core/main/gg-logo.png" /></div>'),
                j.document.write("</div>"),
                j.document.write('<div class="gray-content">'),
                b ? (j.document.write('<div class="container"><div class="clearfix warning-con">'),
                j.document.write(d),
                j.document.write('</div><div id="finished-product" class="clearfix mrb20">'),
                j.document.write(a),
                j.document.write('</div><div id="same-products" class="mrb40">'),
                j.document.write(c),
                j.document.write('</div><div id="product-information">'),
                j.document.write(i)) : (j.document.write('<div class="container"><div class="boxContent clearfix">'),
                j.document.write(a),
                j.document.write('</div><div id="product-information">'),
                j.document.write(i)),
                j.document.write("</div></div></div>"),
                j.document.write("<script>window.print();<\/script>"),
                j.document.write("</body></html>")
            }
        },
        createPager: function(a, b, c) {
            var d = this.constructor
              , e = this
              , f = c
              , g = f.find(".pager ul")
              , h = f.find(".mobile-pager")
              , i = c.attr("id")
              , j = 6
              , k = 3;
            if ("tabContent3" == i && (b = 0 != b ? b / 5 + 1 : 1),
            a > 1) {
                g.show(),
                g.empty(),
                a = Number(a),
                b = Number(b);
                var l = 0
                  , m = 0
                  , n = !1
                  , o = !1;
                b < j ? (l = 1,
                a < j ? (m = a,
                o = !1) : a - 1 == j ? (m = a,
                o = !1) : (m = j,
                o = !0)) : b + k + 1 >= a ? (n = !0,
                l = b - k,
                m = a) : (n = !0,
                l = b - k,
                m = b + k,
                o = !0,
                l <= 1 && (n = !1,
                l = 1)),
                m == a && (o = !1);
                var p = l
                  , q = b - 1
                  , r = b + 1
                  , s = Number(m) + 1
                  , t = Number(l) - 1;
                for (n && (g.append($GG('<li class="previous-link"/>').append($GG('<a href="javascript:;" title="Önceki Sayfa" onclick="productPageScriptController.functions.getPageInfos(' + q + ",'" + i + "');\"/>").html("Önceki"))),
                g.append($GG('<li class="page1"/>').append($GG('<a href="javascript:;" title="1" onclick="productPageScriptController.functions.getPageInfos(1,\'' + i + "');\"/>").html("1"))),
                g.append($GG('<li class="beforeLast-link page1"/>').append($GG('<a href="javascript:;" title="..." onclick="productPageScriptController.functions.getPageInfos(' + t + ",'" + i + "');\"/>").html("...")))),
                l; p <= m; p++)
                    g.append($GG('<li class="page' + p + '"/>').append($GG('<a href="javascript:;" title="' + p + '" onclick="productPageScriptController.functions.getPageInfos(' + p + ",'" + i + "');\"/>").html(p)));
                o && (g.append($GG('<li class="beforeLast-link page' + a + '"/>').append($GG('<a href="javascript:;" title="..." onclick="productPageScriptController.functions.getPageInfos(' + s + ",'" + i + "');\"/>").html("... "))),
                g.append($GG('<li class="next-link"/>').append($GG('<a href="javascript:;" title="Sonraki Sayfa" onclick="productPageScriptController.functions.getPageInfos(' + r + ",'" + i + "');\"/>").html("Sonraki")))),
                "mobile" != d.responsiveState && e.calculatePager(g),
                g.find(".page" + b).addClass("selected").siblings().removeClass("selected"),
                h.empty(),
                h.append($GG('<div class="previous-link"/>').append($GG('<a href="javascript:;" title="Önceki Sayfa" onclick="productPageScriptController.functions.getPageInfos(' + q + ",'" + i + "');\"/>").html("Önceki"))),
                h.append($GG('<div class="next-link"/>').append($GG('<a href="javascript:;" title="Sonraki Sayfa" onclick="productPageScriptController.functions.getPageInfos(' + r + ",'" + i + "');\"/>").html("Sonraki"))),
                h.append($GG('<strong class="dpblock mt15"/>').html(b + " / " + a)),
                0 == q && $GG(".previous-link").hide(),
                r > a && $GG(".next-link").hide()
            } else
                g.hide()
        },
        getPageInfos: function(a, b) {
            var c = (this.constructor,
            this);
            if ("tabContent4" == b) {
                var d = $GG("#memberNick").val();
                c.getSellerComments(d, a, 5)
            }
        },
        calculatePager: function(a) {
            var b = 0;
            $GG.each(a.find("li"), function(a) {
                b = b + Number($GG(this).innerWidth()) + 10
            }),
            a.width(b)
        },
        executeSpin: function(a) {
            this.constructor;
            if ($GG("#scancube_jzspin").length > 0 && $GG(".spin-product-con").length > 0) {
                $GG(".ThumbCon").removeClass("hidden-m"),
                $GG(".MbThumbCon,.to-first-tab,.gallery-hidden-thumbs").remove(),
                $GG("body").addClass("spin-products-container");
                try {
                    $GG("#scancube_jzspin").jzSpin({
                        ldImageWidth: $GG(".ThumbCon").width(),
                        ldImageHeight: $GG(".ThumbCon").width(),
                        isZoomable: !0,
                        hdImageWidth: 1e3,
                        hdImageHeight: 1e3,
                        numberOfImages: 24,
                        style: 1,
                        magnifierSize: 300,
                        direction: 1,
                        autoSpinAfter: 3e3,
                        rotationSpeed: 7,
                        ldImageBaseName: "http://cm.gittigidiyor.com/media/images/product-360/small/product-" + a + "-",
                        hdImageBaseName: "http://cm.gittigidiyor.com/media/images/product-360/big/product-" + a + "-hd-"
                    })
                } catch (a) {}
            } else
                _gg.static.globalParameters.responsiveState != GG.Static.Enums.responsiveParameterNames.mobile ? $GG(".MbThumbCon,.ThumbCon").removeClass("hidden-m") : ($GG(".MbThumbCon").removeClass("hidden-m"),
                $GG(".ThumbCon").addClass("hidden-m"))
        },
        executeIo: function(a, b) {
            var c = this.constructor
              , d = this;
            try {
                var e = io("http://notifier.gittigidiyor.com", {
                    transports: ["websocket"],
                    query: "r_var=web_" + a + "_" + b,
                    "force new connection": !0
                });
                d.listenSocket(e, a, b, c.defaultNotificationDuration, !0)
            } catch (a) {}
        },
        listenSocket: function(a, b, c, d, e) {
            var f, g = this.constructor, h = "", i = "", j = !0, k = {};
            try {
                a.on("ch_" + b + "_" + c, function(a) {
                    var c = a.split(",");
                    if (k.totalCount = c[1],
                    k.realCount = c[0],
                    !g.stopSocket && ("payment" == b ? (null == g.socketObj.paynemt ? (k.showData = k.totalCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi aldı.") : e ? (k.showData = k.realCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi daha aldı.") : (k.showData = 0,
                    j = !1),
                    i = _gg.static.NotificationStaticData.icons.cargo,
                    g.socketObj.paynemt = k.showData) : "cart" == b ? (null == g.socketObj.cart ? (k.showData = k.totalCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi sepetine ekledi.") : e ? (k.showData = k.realCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi daha sepetine ekledi.") : (k.showData = 0,
                    j = !1),
                    i = _gg.static.NotificationStaticData.icons.basket,
                    g.socketObj.cart = k.showData,
                    g.ntfShow.cart || (g.ntfShow.item ? (f = "ItemVisit-ItemAddedtoCart",
                    g.ntfShow.param = f) : f = "ItemAddedtoCart",
                    g.ntfShow.cart = !0)) : "item" == b && (null == g.socketObj.item ? (k.showData = k.totalCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi daha inceliyor!") : e ? (k.showData = k.realCount,
                    h = "Bu ürünü <strong>" + k.showData + "</strong> kişi daha incelemeye başladı!") : (j = !1,
                    k.showData = 0),
                    i = _gg.static.NotificationStaticData.icons.reviewNow,
                    g.socketObj.item = k.showData,
                    g.ntfShow.item || (g.ntfShow.cart ? (f = "ItemAddedtoCart-ItemVisit",
                    g.ntfShow.param = f) : f = "ItemVisit",
                    g.ntfShow.item = !0)),
                    j = 0 != k.showData)) {
                        var l = {
                            position: _gg.static.Enums.positions.bottomLeft,
                            type: _gg.static.NotificationStaticData.type.info,
                            style: _gg.static.NotificationStaticData.style.basic,
                            effect: _gg.static.NotificationStaticData.effects.fade,
                            content: h,
                            thumbPath: i,
                            prepend: !0,
                            backgroundImg: !0,
                            duration: d
                        };
                        _gg.components.notification(l)
                    }
                })
            } catch (a) {}
        },
        trackEventNtf: function(a, b, c) {
            try {
                var d = s_gi("ebaytkprod");
                d.linkTrackVars = "events,",
                d.linkTrackEvents = b,
                null != c && (d.linkTrackVars = "events," + c.toString(),
                $GG.inArray("prop52", c) > -1 && (d.prop52 = "ProdNotf:" + a),
                $GG.inArray("eVar42", c) > -1 && (d.eVar42 = "ProdNotf:" + a)),
                d.events = b,
                d.tl(this, "o", "ProdNotf:" + a)
            } catch (a) {}
        },
        controlPreviewSticky: function() {
            this.constructor;
            $GG("#PreviewCon").show(),
            _gg.utilities.isElementInViewPort($GG(".footer"), 200) ? ($GG("#PreviewCon").removeClass("fixedpos2"),
            $GG("#PreviewCenter").removeClass("container")) : ($GG("#PreviewCon").addClass("fixedpos2"),
            $GG("#PreviewCenter").addClass("container"),
            $GG("html").removeClass("js-ready csstransforms3d csstransitions"))
        },
        controlVideoProduct: function(a) {
            var b = this.constructor
              , c = b._ggAction;
            $GG.inArray(a, b.videoArr) > -1 && $GG(".swapVideo").bind(c.CLICK, function(a) {
                var c = $GG(this).attr("data-video");
                $GG("#product-video-iframe").removeClass("hidden"),
                $GG(".zoomEnableIcon").hide(),
                $GG("#product-video-iframe").siblings(".product-img").addClass("hidden"),
                $GG("#product-video-iframe").attr("src", c).attr("height", b.photoHeight)
            })
        },
        addMobileUiActions: function() {
            var a = this.constructor
              , b = a._ggAction
              , c = this;
            $GG(".decrease-quantity").live(b.CLICK, function(a) {
                var b = Number($GG(".quantity-selection-input input").val());
                $GG(".increase-quantity").removeClass("disabled"),
                0 == b && (b = 1),
                1 != b ? 1 == --b && $GG(".decrease-quantity").addClass("disabled") : $GG(".decrease-quantity").addClass("disabled"),
                $GG(".quantity-selection-input .quantity-selection, #buyitnow_adet, #frm_buyitnow_adet, #frm_add_chard_adet").val(b)
            }),
            $GG(".increase-quantity").live(b.CLICK, function(a) {
                var b = Number($GG(".quantity-selection-input input").val())
                  , c = Number($GG(".stock-quantity").val())
                  , d = Number($GG(".max-stock-quantity").val());
                0 == b && (b = 1),
                isNaN(d) || (c = d),
                b < c ? (b++,
                c == b && $GG(".increase-quantity").addClass("disabled"),
                1 != b && $GG(".decrease-quantity").removeClass("disabled")) : $GG(".increase-quantity").addClass("disabled"),
                $GG(".quantity-selection-input .quantity-selection, #buyitnow_adet, #frm_buyitnow_adet, #frm_add_chard_adet").val(b)
            }),
            $GG(".trigger-add-watch").live(b.CLICK, function(a) {
                c.addWatchAjax()
            }),
            $GG(".copy-url").live(b.CLICK, function(a) {
                c.copyToClipboard(document.getElementById("productUrl"))
            }),
            document.queryCommandSupported("copy") || ($GG(".share-button-list .share-url").remove(),
            $GG(".share-button-list .gg-m-8").removeClass("gg-m-8").addClass("gg-m-12"),
            $GG(".trigger-add-watch").find("br").replaceWith(" ")),
            setTimeout(function() {
                $GG(".product-ui").length > 0 && $GG("ul#retailInfos").remove()
            }, 1e3)
        },
        startCampaignCountDown: function() {
            if ($GG(".remaining-days .time-count").length > 0) {
                var a = {
                    day: "remaining-days .time-count",
                    hour: "remaining-hour .time-count",
                    min: "remaining-min .time-count",
                    sec: "remaining-sec .time-count"
                }
                  , b = {
                    day: "remaining-days .time-text",
                    hour: "remaining-hour .time-text",
                    min: "remaining-min .time-coutextnt",
                    sec: "remaining-sec .time-text"
                };
                new _gg.components.countDown({
                    startDay: Number($GG(".discounts-show").attr("rev")),
                    endDay: Number($GG(".discounts-show").attr("rel")),
                    zeroShow: !1,
                    containers: a,
                    textContainers: b
                })
            }
        },
        copyToClipboard: function(a) {
            try {
                var b, c, d = "_hiddenCopyText_", e = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
                if (e)
                    f = a,
                    b = a.selectionStart,
                    c = a.selectionEnd;
                else {
                    if (!(f = document.getElementById(d))) {
                        var f = document.createElement("textarea");
                        f.style.position = "absolute",
                        f.style.left = "-9999px",
                        f.style.top = "0",
                        f.id = d,
                        document.body.appendChild(f)
                    }
                    f.textContent = a.textContent
                }
                var g = document.activeElement;
                f.focus(),
                f.setSelectionRange(0, f.value.length);
                var h;
                try {
                    h = document.execCommand("copy")
                } catch (a) {
                    h = !1
                }
                g && "function" == typeof g.focus && g.focus(),
                e ? a.setSelectionRange(b, c) : f.textContent = ""
            } catch (a) {
                h = null
            }
            return h
        },
        setSliderLegendPosition: function(a, b) {
            var c = a.currentIndis;
            c > b ? c = 1 : 0 == c && (c = b),
            $GG(".slider-legend").html(c + "/" + b)
        },
        controlProductHash: function() {
            var a = this.constructor
              , b = a._ggAction
              , c = document.location.hash;
            c.indexOf(a.staticTexts.tabNames.detail) > -1 && $GG("." + a.staticTexts.tabClassNames.detail).trigger(b.CLICK),
            c.indexOf(a.staticTexts.tabNames.review) > -1 && $GG("." + a.staticTexts.tabClassNames.review).trigger(b.CLICK),
            c.indexOf(a.staticTexts.tabNames.installments) > -1 && !a.isInsClicked && $GG("#PreviewCon").length < 1 && $GG("." + a.staticTexts.tabClassNames.installments).trigger(b.CLICK),
            c.indexOf(a.staticTexts.tabNames.cargo) > -1 && $GG("." + a.staticTexts.tabClassNames.cargo).trigger(b.CLICK),
            c.indexOf(a.staticTexts.tabNames.catalog) > -1 && $GG("." + a.staticTexts.tabClassNames.catalog).trigger(b.CLICK),
            c.indexOf(a.staticTexts.tabNames.seller) > -1 && $GG("." + a.staticTexts.tabClassNames.seller).trigger(b.CLICK)
        },
        animateToProductInfo: function() {
            $GG("body,html").animate({
                scrollTop: $GG("#product-information").offset().top - 100
            }, 800)
        },
        catalogPagesOtherSeller: function() {
            var a = this
              , b = a.constructor
              , c = b._ggAction;
            this.ajaxCatalogConfig = {
                type: "GET",
                dataType: "json"
            };
            var d = JSON.parse($GG("#productCatalogId").val());
            this.ajaxCatalogConfig.url = "http://www.gittigidiyor.com/xhr/cswcids?cids=" + d.catalogID + "&exIds=" + $GG("#productId").val() + "&exMemberNicks=" + $GG("#memberNick").val(),
            "" == d.newProduct && (this.ajaxCatalogConfig.url += "&uc=2"),
            this.ajaxCatalog = new _gg.communication.ajaxController(this.ajaxCatalogConfig),
            this.ajaxCatalog.tryOnce = !1,
            this.ajaxCatalog.ajaxAction(),
            $GG(this.ajaxCatalog).bind(this.ajaxCatalog.COMPLETE_REQ, function(a, b) {
                try {
                    if (null != this.completeData) {
                        var d = this.completeData.productList;
                        $GG("#seeAllSellerProduct").find("a").html("Tümünü Gör"),
                        $GG("#seeAllSellerProduct").find("a").attr("href", $GG("#main-route").val() + "/" + $GG("#catalogGroupSlug").val()),
                        $GG("#seeAllSellerProduct").find("a").attr("title", $GG("#catalog-group-title").val().trim()),
                        "" == $GG("#catalogGroupSlug").val() && $GG("#seeAllSellerProduct").find("a").addClass("hidden");
                        var e = this.completeData.productList.length;
                        if (0 == e)
                            return !1;
                        e > 5 && (e = 5);
                        for (var f = 0; f < e; f++) {
                            var g = {}
                              , h = []
                              , i = d[f].sellerSegmentationBadge;
                            "NONE" != i ? ("eTRS" == i && (i = "gold"),
                            "ABV" == i && (i = "diamond"),
                            g.nick = _gg.utilities.domGenerator({
                                nodeType: "span",
                                classNames: ["name fixed"],
                                htmlContent: [d[f].sellerNick, "<span class='segmentation-badges-catalog " + i + "'></span>"]
                            })) : g.nick = _gg.utilities.domGenerator({
                                nodeType: "span",
                                classNames: ["name"],
                                htmlContent: d[f].sellerNick
                            }),
                            g.storeP = _gg.utilities.domGenerator({
                                nodeType: "p",
                                classNames: ["store"],
                                htmlContent: [g.nick]
                            }),
                            g.storeLink = _gg.utilities.domGenerator({
                                nodeType: "a",
                                attributes: {
                                    href: d[f].productUrl
                                },
                                htmlContent: [g.storeP]
                            }),
                            g.storeContainer = _gg.utilities.domGenerator({
                                nodeType: "div",
                                classNames: ["width25Percent floatL"],
                                htmlContent: g.storeLink
                            }),
                            0 != d[f].discountedPrice ? (g.price = _gg.utilities.domGenerator({
                                nodeType: "strike",
                                classNames: ["oldPrice"],
                                htmlContent: d[f].productPrice + " TL"
                            }),
                            h.push(g.price),
                            g.oldPrice = _gg.utilities.domGenerator({
                                nodeType: "p",
                                classNames: ["price"],
                                htmlContent: d[f].discountedPrice + " TL"
                            }),
                            h.push(g.oldPrice)) : (g.price = _gg.utilities.domGenerator({
                                nodeType: "p",
                                classNames: ["price"],
                                htmlContent: d[f].productPrice + " TL"
                            }),
                            h.push(g.price));
                            var j = "";
                            j = d[f].freeShipping ? "Ücretsiz" : "<span class='shippingBuyer'>Alıcı Öder</span>",
                            d[f].freeShipping && d[f].sameDayShipping && (j += " - "),
                            d[f].sameDayShipping && (j += "Aynı gün"),
                            (d[f].freeShipping || d[f].sameDayShipping) && (j += " kargo"),
                            g.shipping = _gg.utilities.domGenerator({
                                nodeType: "p",
                                classNames: ["shippingFree"],
                                htmlContent: j
                            }),
                            h.push(g.shipping),
                            void 0 != d[f].productAmount && (g.lastDay = _gg.utilities.domGenerator({
                                nodeType: "p",
                                classNames: ["lastDays"],
                                htmlContent: "Son " + d[f].productAmount + " Ürün"
                            }),
                            h.push(g.lastDay)),
                            g.priceLink = _gg.utilities.domGenerator({
                                nodeType: "a",
                                attributes: {
                                    href: d[f].productUrl
                                },
                                htmlContent: h
                            }),
                            g.priceContainer = _gg.utilities.domGenerator({
                                nodeType: "div",
                                classNames: ["width50Percent floatL"],
                                htmlContent: g.priceLink
                            }),
                            g.productDetail = _gg.utilities.domGenerator({
                                nodeType: "a",
                                attributes: {
                                    href: d[f].productUrl
                                },
                                htmlContent: "Ürün Detayı"
                            }),
                            g.productDetailContainer = _gg.utilities.domGenerator({
                                nodeType: "div",
                                classNames: ["width25Percent floatR product-detail"],
                                htmlContent: g.productDetail
                            });
                            var k = "";
                            k = f > 1 ? ["dPInline width100Percent p10_0_0_0 greyBorderTop1 hideTheSeller"] : ["dPInline width100Percent p10_0_0_0 greyBorderTop1"],
                            g.row = _gg.utilities.domGenerator({
                                nodeType: "div",
                                classNames: k,
                                htmlContent: [g.storeContainer, g.priceContainer, g.productDetailContainer]
                            }),
                            e <= 2 && $GG("#product-page-other-sellers #showAllSellers").remove(),
                            $GG("#sellerList").append(g.row)
                        }
                        $GG("#product-page-other-sellers #showAllSellers").bind(c.CLICK, function() {
                            "none" == $GG("#product-page-other-sellers").find(".hideTheSeller").css("display") ? ($GG("#product-page-other-sellers").find(".hideTheSeller").css("display", "inline-block"),
                            $GG(this).text("Daha Az Göster")) : ($GG("#product-page-other-sellers").find(".hideTheSeller").removeAttr("style"),
                            $GG(this).text("Daha Fazla Göster"))
                        }),
                        $GG("#product-page-other-sellers").removeClass("hidden")
                    }
                } catch (a) {}
            })
        },
        addCatalogInfo: function(a) {
            var b = this.constructor;
            $GG.modal.close();
            var c = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: ["small-info-icon"],
                htmlContent: b.staticTexts.productCatalogInfoText
            });
            a.prepend(c)
        },
        saveSubscriptions: function(a, b) {
            var c = this
              , d = c.constructor;
            if (null != a.productId && null != a.frequency && null != a.frequencyType && null != a.quantity) {
                d._ajaxConfig.url = d._ajaxConfig.saveSubscription.url,
                d._ajaxConfig.data = {
                    productId: a.productId,
                    from: a.from,
                    frequency: a.frequency,
                    frequencyType: a.frequencyType,
                    quantity: a.quantity
                },
                d.ajaxSaveSubscriptionCtrl = new _gg.communication.ajaxController(d._ajaxConfig),
                d.ajaxSaveSubscriptionCtrl.tryOnce = !1,
                d.ajaxSaveSubscriptionCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                d.ajaxSaveSubscriptionCtrl.pendingReq = function() {
                    b.find(".ajax-loading").show()
                }
                ,
                d.ajaxSaveSubscriptionCtrl.completeReq = function() {
                    d.ajaxSaveSubscriptionCtrl.completeData.status == d.staticData.statusType.success && $GG("#buy-now").trigger(d._ggAction.CLICK)
                }
                ,
                d.ajaxSaveSubscriptionCtrl.errorReq = function() {
                    b.find(".ajax-loading").hide()
                }
                ,
                e.add(d.ajaxSaveSubscriptionCtrl)
            }
        },
        checkSubscriptions: function(a, b) {
            var c = this
              , d = c.constructor;
            if (null != a && d.doms.subscribeContainer.length > 0) {
                d._ajaxConfig.url = d._ajaxConfig.checkSubscription.url,
                d._ajaxConfig.data = {
                    productId: a
                },
                null != b && (d._ajaxConfig.data.variantId = b),
                d.ajaxcheckSubscriptionsCtrl = new _gg.communication.ajaxController(d._ajaxConfig),
                d.ajaxcheckSubscriptionsCtrl.tryOnce = !1,
                d.ajaxcheckSubscriptionsCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                d.ajaxcheckSubscriptionsCtrl.completeReq = function() {
                    d.doms.subscribeAjaxLoading.hide();
                    var a = d.ajaxcheckSubscriptionsCtrl.completeData;
                    null != a && "undefined" != a && (a.status == d.staticData.statusType.success ? null != a.data ? null != a.data.endDate ? (c.createSubscribeProductInfo(d.staticData.subscribeClassNames.subscribed),
                    c.updateSubscribedProductInfo(a.data)) : d.doms.subscribeContainer.remove() : a.hasOwnProperty("userNotSubscribed") && a.userNotSubscribed ? c.createSubscribeProductInfo(d.staticData.subscribeClassNames.unsubscribed) : d.doms.subscribeContainer.remove() : a.status == d.staticData.statusType.failure && d.doms.subscribeContainer.remove())
                }
                ,
                d.ajaxcheckSubscriptionsCtrl.pendingReq = function() {
                    d.doms.subscribeAjaxLoading.show()
                }
                ,
                d.ajaxcheckSubscriptionsCtrl.errorReq = function() {
                    d.doms.subscribeContainer.remove(),
                    d.doms.subscribeAjaxLoading.hide()
                }
                ,
                d.doms.subscribeAjaxLoading.hide(),
                e.add(d.ajaxcheckSubscriptionsCtrl)
            }
        },
        createSubscribeProductInfo: function(a) {
            var b = this
              , c = b.constructor
              , d = {}
              , e = {};
            d.className = a,
            a == c.staticData.subscribeClassNames.unsubscribed ? (d.iconClass = c.staticData.subscribeClassNames.iconClock,
            d.iconText = c.staticTexts.subscribleProduct) : (d.iconClass = c.staticData.subscribeClassNames.iconConfirm,
            d.iconText = c.staticTexts.subscribedProduct),
            e.iconContainer = _gg.utilities.domGenerator({
                nodeType: "i",
                classNames: [d.iconClass]
            }),
            e.iconText = _gg.utilities.domGenerator({
                nodeType: "p",
                classNames: [c.staticData.subscribeClassNames.infoText],
                htmlContent: d.iconText + ' <span class="' + c.staticData.subscribeClassNames.btnTooltip + '">(?)</span>'
            }),
            e.infoContainer = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [d.className],
                htmlContent: [e.iconContainer, e.iconText]
            }),
            c.doms.subscribeInfoContainer.append(e.infoContainer)
        },
        updateSubscribedProductInfo: function(a) {
            var b = this
              , c = b.constructor
              , d = {}
              , e = (_gg.utilities.getDateDiff(Date.parse(a.endDate)),
            "")
              , f = ""
              , g = ""
              , h = [];
            a.frequencyType == c.staticData.frequencyTypes.weekly ? g = c.staticTexts.frequencyTypesText.weekly : a.frequencyType == c.staticData.frequencyTypes.monthly ? g = c.staticTexts.frequencyTypesText.monthly : a.frequencyType == c.staticData.frequencyTypes.daily && (g = c.staticTexts.frequencyTypesText.daily),
            d.iconContainer = _gg.utilities.domGenerator({
                nodeType: "i",
                classNames: [c.staticData.subscribeClassNames.iconInfo]
            }),
            h.push(d.iconContainer),
            null != a.frequencyType && (d.periodText = _gg.utilities.domGenerator({
                nodeType: "p",
                htmlContent: "<strong>" + c.staticTexts.subscribeTexts.period + "</strong><span>" + a.frequency + " " + g + "</span>"
            }),
            h.push(d.periodText)),
            null != a.quantity && (d.amountText = _gg.utilities.domGenerator({
                nodeType: "p",
                htmlContent: "<strong>" + c.staticTexts.subscribeTexts.amount + "</strong><span>" + a.quantity + "</span>"
            }),
            h.push(d.amountText));
            var e = c.staticTexts.subscribeTexts.daysLeft
              , f = 0;
            null != a.remainedTime && (f = a.remainedTime),
            d.daysLeftText = _gg.utilities.domGenerator({
                nodeType: "p",
                htmlContent: e + f
            }),
            h.push(d.daysLeftText),
            d.tooltipContent = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [c.staticData.subscribeClassNames.tooltipContent],
                htmlContent: h
            }),
            h.length > 1 ? c.doms.subscribedTooltip.append(d.tooltipContent) : c.doms.subscribedTooltip.remove()
        },
        getProductSaleInfo: function(a) {
            var b = this
              , c = b.constructor;
            if (null != a && $GG(".make-bid").length < 1) {
                c._ajaxConfig.url = c._ajaxConfig.getProductSaleInfo.url,
                c._ajaxConfig.data = {
                    productId: a
                },
                c.ajaxProductSaleInfoCtrl = new _gg.communication.ajaxController(c._ajaxConfig),
                c.ajaxProductSaleInfoCtrl.tryOnce = !1,
                c.ajaxProductSaleInfoCtrl.ajaxAction();
                var d = new _gg.utilities.ajaxObserver;
                d.init(),
                c.ajaxProductSaleInfoCtrl.completeReq = function() {
                    var a = c.ajaxProductSaleInfoCtrl.completeData;
                    null == a || a.hasOwnProperty("error") || $GG(".price-css").each(function() {
                        !$GG(this).hasClass("strike-price") && a.hasOwnProperty("buyPrice") ? null != a.buyPrice && $GG(this).html(_gg.utilities.numberWithCommas(Number(a.buyPrice), !0)) : a.hasOwnProperty("marketPrice") && null != a.marketPrice && $GG(this).find("strike").html(_gg.utilities.numberWithCommas(Number(a.marketPrice), !0))
                    })
                }
                ,
                c.ajaxProductSaleInfoCtrl.errorReq = function() {}
                ,
                d.add(c.ajaxProductSaleInfoCtrl)
            }
        },
        updateProductCookies: function(a) {
            var b = this
              , c = b.constructor
              , d = _gg.utilities.getQueryString("rcp_action");
            if (null != a && null != d) {
                c._ajaxConfig.url = c._ajaxConfig.updateProductCookies.url,
                c._ajaxConfig.data = {
                    productId: a,
                    rcp_action: d
                },
                c._ajaxConfig.dataType = "json",
                c.updateRecommendationCtrl = new _gg.communication.ajaxController(c._ajaxConfig),
                c.updateRecommendationCtrl.tryOnce = !1,
                c.updateRecommendationCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                c.updateRecommendationCtrl.completeReq = function() {
                    c.updateRecommendationCtrl.completeData
                }
                ,
                e.add(c.updateRecommendationCtrl)
            }
        },
        getProductCatalogReviews: function() {
            var a = "";
            $GG("#catalogReviewsLink").length > 0 && (a = $GG("#catalogReviewsLink").val());
            var b = this.constructor
              , c = {
                catalogImage: $GG("#fixed-header .lazyload-img").attr("src"),
                catalogTitle: $GG("#catalog-group-title").val(),
                catalogId: $GG("#product-catalog-id").val(),
                catalogGroupId: $GG("#catalog-group-id").val(),
                showHelpfulContainer: !0,
                scrollToContainer: b.scrollToCatalogReviews,
                catalogReviewPageLink: a,
                isLogin: productReviewController.isUserLogin
            };
            new _gg.components.productReview(c).init(),
            b.getProductCatalogReviews = !1
        },
        getProductCatalogAverage: function() {
            if ($GG("#catalog-group-point-container").length > 0 && $GG("#product-catalog-id").length > 0 && "" != $GG("#product-catalog-id").val()) {
                var a = (this.constructor,
                {
                    containers: {
                        generalContainer: $GG("#catalog-group-point-container"),
                        scrollContainer: $GG("#catalog-review-container")
                    },
                    getProductReviewInfo: !1,
                    getProductReviewRatesInfo: !0,
                    getProductReviewComments: !1,
                    showOnlyCatalogReviewPoint: !0,
                    catalogId: $GG("#product-catalog-id").val(),
                    catalogGroupId: $GG("#catalog-group-id").val(),
                    showHelpfulContainer: !1
                });
                new _gg.components.productReview(a).init()
            }
        },
        lightboxZoomRestart: function() {
            var a = this.constructor;
            $GG(".display-table-cell").trigger("zoom.destroy"),
            $GG(".display-table-cell").zoom({
                magnify: a.zoomMagnify
            })
        },
        loadFirstImg: function() {
            $GG("#slide1-first img").is(":visible") && $GG("#slide1-first img").lazyload({})
        },
        checkNumbers: function(a) {
            var b = a.which ? a.which : a.keyCode;
            a.keyCode;
            return !(8 != b && b > 31 && (b < 48 || b > 57))
        },
        controlNumberInputs: function() {
            var a = this
              , b = a.constructor
              , c = b._ggAction;
            b.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile ? $GG('[data-type="number"]').length > 0 && $GG('[data-type="number"]').each(function() {
                _gg.pageType !== GG.Static.Enums.pageTypes.IOS && _gg.pageType !== GG.Static.Enums.pageTypes.ANDROID || (_gg.pageType === GG.Static.Enums.pageTypes.IOS ? $GG(this).get(0).type = "tel" : $GG(this).get(0).type = "number"),
                $GG(this).attr("data-text", $GG(this).val())
            }) : $GG(".amount").live(c.KEYPRESS, function(a) {
                return b.functions.checkNumbers(a)
            })
        },
        createAjaxInfoBox: function(a, b, c) {
            var d = this
              , e = d.constructor
              , f = ""
              , g = "";
            return e.containers = {},
            a == e.staticData.statusType.success ? (f = e.staticTexts.subscribedToProductMessage,
            g = e.staticData.classNames.successBox) : a != e.staticData.statusType.failure && a != e.staticData.statusType.error || (f = e.staticTexts.badRequest,
            g = e.staticData.classNames.errorBox),
            null != c && (f = c),
            e.containers.statusIcon = _gg.utilities.domGenerator({
                nodeType: "i",
                classNames: [b]
            }),
            e.containers.statusText = _gg.utilities.domGenerator({
                nodeType: "p",
                htmlContent: f
            }),
            e.containers.ajaxStatusBox = _gg.utilities.domGenerator({
                nodeType: "div",
                classNames: [g],
                htmlContent: [e.containers.statusIcon, e.containers.statusText]
            }),
            e.containers.ajaxStatusBox
        },
        getWatched: function(a, b) {
            var c = this
              , d = c.constructor;
            if (null != a && $GG(".make-bid").length < 1) {
                d._ajaxConfig.url = d._ajaxConfig.getWatched.url,
                d._ajaxConfig.data = {
                    productId: a,
                    state: b
                },
                d.ajaxGetWatchedProductCtrl = new _gg.communication.ajaxController(d._ajaxConfig),
                d.ajaxGetWatchedProductCtrl.tryOnce = !1,
                d.ajaxGetWatchedProductCtrl.ajaxAction();
                var e = new _gg.utilities.ajaxObserver;
                e.init(),
                d.ajaxGetWatchedProductCtrl.completeReq = function() {
                    var a = d.ajaxGetWatchedProductCtrl.completeData
                      , b = $GG("#watch-product");
                    a.watchedProduct && (d.responsiveState == GG.Static.Enums.responsiveParameterNames.mobile && b.find("i").removeAttr("class").addClass("icon-success"),
                    b.attr("title", d.staticTexts.watched).attr("rev", a.watchlist.watchId).find("span").html(d.staticTexts.watched).addClass("watched-product"))
                }
                ,
                e.add(d.ajaxGetWatchedProductCtrl)
            }
        }
    }
};
productPageScriptController.init(),
$GG(document).ready(function() {
    productPageScriptController.onload()
});
var retailProductController = {
    init: function() {
        this._ggAction = _gg.controller.events.Actions,
        this.functions.constructor = this,
        this.selectedSpec = !1,
        this.selectedSpecSort = null,
        this.staticData = _gg.static.productStaticData,
        this.staticTexts = this.staticData.staticTexts()
    },
    onload: function() {
        this.bindActions()
    },
    bindActions: function() {
        var a = this
          , b = a._ggAction
          , c = a.functions.getIsSortedArray();
        if ($GG(".retail-refresh").bind(b.CLICK, function() {
            a.functions.resetSelects();
            var b = $GG(this).siblings().find(".retail-select");
            c || (b = $GG(".retail-select:first"));
            var d = a.functions.controlTrigger(b);
            d && b.val(d).trigger("change")
        }),
        $GG(".changeSpecs,#changeRtColor").bind(b.CHANGE, function() {
            a.functions.changeVariantPhoto($GG(this))
        }),
        $GG("#RetailInfoCon").length > 0 || $GG("#retailInfos").length > 0) {
            var d;
            d = $GG("#retailInfos"),
            d.find("select").bind(b.CHANGE, function() {
                try {
                    a.selectedSpecSort == $GG(this).attr("rev") && (a.selectedSpec = !0),
                    a.selectedSpecSort = $GG(this).attr("rev"),
                    0 != $GG(this).val() && a.functions.createRetailOptions($GG(this), d);
                    var b = a.functions.controlRetailSelected();
                    null != b && a.functions.showSelectedSpecInfo(b),
                    a.functions.controlResetSpecs()
                } catch (a) {}
            })
        }
        $GG(".retail-button").live(b.CLICK, function() {
            return productPageScriptController.stopSocket = !0,
            a.functions.controlRetailForm($GG(this).attr("id"))
        }),
        $GG(".retail-select-li select").bind(b.CHANGE, function() {
            if (0 != $GG(this).val()) {
                var a = $GG(this).attr("rev");
                $GG(".retail-select-li").eq(a).removeClass("FormInputErr"),
                $GG(".retail-select-li").eq(a).find(".retail-alert").hide(),
                $GG("div.retail-alert2").hide()
            }
        }),
        $GG(".retail-select-li").each(function() {
            var b = $GG(this).find(".retail-select")
              , c = a.functions.controlTrigger(b);
            c && b.val(c).trigger("change")
        })
    },
    functions: {
        controlTrigger: function(a) {
            var b = 0
              , c = !1
              , d = "";
            return a.find("option").length > 1 ? (a.find("option").each(function(a, c) {
                0 != a && "disabled" != $GG(this).attr("disabled") && (b++,
                d = $GG(this).val())
            }),
            c = b < 2 && d) : (d = $GG(this).val(),
            c = d),
            c
        },
        changeVariantPhoto: function(a) {
            var b = this.constructor
              , c = b._ggAction
              , d = a.find("option:selected").attr("id");
            if (d && (d = d.replace("_option", "")),
            $GG("#" + d).length > 0)
                $GG(".slider-bullet-container li").eq($GG("#" + d).index()).trigger(c.DOWN),
                $GG("#" + d + " img").trigger(c.CLICK);
            else {
                var e = Number($GG("#mobile-thumbs-first ." + d).not(".gg-slider-clone-elements").index()) - 1;
                e < 0 && (e = Number($GG("#mobile-thumbs-first .img_slide:visible").not(".gg-slider-clone-elements").index()) - 1),
                $GG(".slider-bullet-container li").eq(e).trigger("click");
                var f = $GG("#mobile-thumbs-first ul li").eq(e + 1).find("img");
                setTimeout(function() {
                    f.lazyload({}).removeClass("gg-blur-image")
                }, 500)
            }
        },
        createRetailOptions: function(a, b) {
            var c = a
              , d = this.constructor;
            a.parent().parent(),
            c.attr("rev"),
            c.val(),
            d._ggAction;
            $option = a.children("option:selected"),
            subOpts = $option.attr("rev"),
            $editObj = null,
            $editObj2 = null,
            "undefined" == subOpts && (subOpts = null);
            var e = d.functions.getIsSortedArray();
            if (null != subOpts && $GG(".spec-select-1").length > 0) {
                var f = subOpts.split("#/#");
                if (subOpts.split("##2##").length < 2)
                    a.hasClass("spec-select-1") ? $editObj = $GG(".spec-select-0") : $editObj = $GG(".spec-select-1"),
                    (d.functions.controlGetSelected() || d.selectedSpec) && d.functions.resetOptions($editObj),
                    d.functions.getSpecOptions(f, $editObj);
                else {
                    var g, h = [], i = [], j = [], k = !1, l = {
                        name: "",
                        number: 0
                    };
                    if (k = d.functions.controlGetSelected(),
                    a.hasClass("spec-select-0") ? ($editObj = $GG(".spec-select-1"),
                    $editObj2 = $GG(".spec-select-2")) : a.hasClass("spec-select-1") ? e ? ($editObj = $GG(".spec-select-0"),
                    $editObj2 = $GG(".spec-select-2")) : ($editObj = $GG(".spec-select-2"),
                    $editObj2 = $GG(".spec-select-0")) : e ? ($editObj = $GG(".spec-select-0"),
                    $editObj2 = $GG(".spec-select-1")) : ($editObj = $GG(".spec-select-1"),
                    $editObj2 = $GG(".spec-select-0")),
                    d.functions.resetOptions($editObj),
                    d.functions.resetOptions($editObj2),
                    3 == $GG(".retail-select").length && 3 == k.length) {
                        var m = $GG(".retail-select:last");
                        e || (m = $GG(".retail-select:first"));
                        d.functions.controlTrigger(m) && $GG(".retail-refresh").removeClass("hidden")
                    }
                    for (var n = 0; n < f.length; n++) {
                        var o, p = null, q = null, r = 99;
                        if (f.length < 2) {
                            if (p = f[n].split("##2##")[0],
                            q = f[n].split("##2##")[1],
                            q.indexOf("#-#") > -1 && (o = q.split("#-#"),
                            r = Number(o[1]) - Number(o[2])),
                            j = q.split("*"),
                            j.length > 0)
                                for (var s = 0; s < j.length; s++)
                                    g = j[s].split("#-#"),
                                    l.number += Number(g[1]) - Number(g[2]);
                            else
                                l.number += r;
                            h.push(p),
                            l.name = p,
                            i[l.name] = l
                        } else {
                            l = {
                                name: "",
                                number: 0
                            },
                            p = f[n].split("##2##")[0],
                            q = f[n].split("##2##")[1];
                            var t = q.split("*");
                            q.indexOf("#-#") > -1 && (o = q.split("#-#"),
                            r = Number(o[1]) - Number(o[2]));
                            for (var u = 0; u < t.length; u++)
                                g = t[u].split("#-#"),
                                3 == k.length ? t.length > 0 && ($GG.inArray(t[u], j) < 0 && j.push(t[u]),
                                Number($GG.inArray(p, h)) < 0 && (l.name = p,
                                l.number = Number(g[1]) - Number(g[2]),
                                h.push(p),
                                i[p] = l)) : ($GG.inArray(t[u], j) < 0 && j.push(t[u]),
                                Number($GG.inArray(p, h)) < 0 && (h.push(p),
                                l.name = p),
                                l.number += Number(g[1]) - Number(g[2]),
                                i[p] = l)
                        }
                    }
                    d.functions.editSpecSelect(h, i, $editObj),
                    d.functions.getSpecOptions(j, $editObj2)
                }
            } else {
                var v = []
                  , w = $GG(".retail-select:first option:selected");
                v.push(w.html()),
                v.push(w.attr("rev").split("-")[0]),
                v.push(w.attr("rev").split("-")[1]),
                v.push(w.val()),
                d.functions.showSelectedSpecInfo(v)
            }
        },
        getSpecOptions: function(a, b) {
            for (var c = [], d = [], e = [], f = [], g = 0, h = 0; h < a.length; h++) {
                var i = {}
                  , j = {
                    name: "",
                    number: 0
                }
                  , k = a[h].split("#-#");
                i.subName = k[0],
                i.subQuantity = Number(k[1]),
                i.soldQuantity = Number(k[2]),
                i.variantId = k[3],
                i.defaultId = k[4],
                c.push(i),
                $GG.inArray(i.subName, d) < 0 && d.push(i.subName),
                j.name = i.subName,
                g = Number(i.subQuantity) - Number(i.soldQuantity),
                -1 == Number($GG.inArray(j.name, f)) ? (f.push(j.name),
                j.number = g,
                e[j.name] = j) : (j.number += g,
                e[j.name].number += g)
            }
            this.editSpecSelect(d, e, b)
        },
        editSpecSelect: function(a, b, c) {
            var d = this.getIsSortedArray()
              , e = "spec-select-2";
            d || (e = "spec-select-0");
            var f = -1;
            c.find("option").each(function(d, g) {
                var h = $GG(this).val();
                0 != h && (Number($GG.inArray(h, a)) > -1 || 0 == d ? ($GG(this).show(),
                $GG(this).removeAttr("hidden"),
                $GG(this).parent("span").length > 0 && $GG(this).unwrap(),
                b[h].number < 1 ? ($GG(this).attr("disabled", "disabled"),
                $GG(this).html($GG(this).html() + " (Tükendi)")) : ($GG(this).removeAttr("disabled"),
                $GG(this).html($GG(this).attr("rel"))),
                f++) : (c.hasClass(e) || ($GG(this).attr("hidden", "hidden"),
                $GG(this).parent("span").length < 1 && $GG(this).wrap('<span class="hidden"/>')),
                $GG(this).is(":selected") && ($GG(this).removeAttr("selected"),
                c.find("option:first").attr("selected"))))
            })
        },
        getIsSortedArray: function() {
            var a = [];
            return $GG(".retail-select-li").each(function() {
                $GG(this).find(".special-padding-5").length > 0 ? a.push($GG(this).find(".special-padding-5").html()) : a.push($GG(this).find(".retail-select option:first").attr("rev"))
            }),
            $GG.inArray("Numara", a) > -1 || $GG.inArray("Beden", a) > -1
        },
        controlResetSpecs: function() {
            var a = this
              , b = $GG(".retail-select").length
              , c = 0;
            $GG(".retail-select").each(function() {
                0 == $GG(this).val() && c++
            }),
            c == b && $GG(".retail-select").each(function() {
                a.resetOptions($GG(this))
            })
        },
        resetOptions: function(a) {
            var b = a.find("option");
            b.show(),
            b.removeAttr("disabled"),
            b.each(function() {
                $GG(this).html($GG(this).attr("rel"))
            })
        },
        resetSelects: function() {
            $GG(".retail-refresh").addClass("hidden"),
            $GG(".retail-select").each(function() {
                $GG(this).val(0)
            })
        },
        controlGetSelected: function() {
            var a = !1
              , b = [];
            return $GG("#retailInfos select").each(function() {
                if (0 != $GG(this).val()) {
                    a = !0;
                    var c = $GG(this).find("option:selected").html();
                    c = c.replace("&nbsp;", ""),
                    b.push(c)
                } else
                    a = !1
            }),
            a ? b : a
        },
        controlRetailSelected: function() {
            var a = null
              , b = this.controlGetSelected()
              , c = []
              , d = !0;
            $GG(".retail-select-li").each(function() {
                c.push($GG(this).find(".special-padding-5").html())
            });
            var e = "#retailInfos select:last";
            if (c.indexOf("Numara") < 0 && c.indexOf("Beden") < 0 && (e = "#retailInfos select:first",
            d = !1),
            0 != b) {
                if (d)
                    if (3 == b.length) {
                        b = b.reverse();
                        var f = b[0];
                        b.splice(0, 1),
                        b.push(f),
                        b = b.reverse()
                    } else
                        b = b.reverse();
                var g = null;
                $GG(e).find("option").each(function(c) {
                    if ($GG(this).html() == b[0] && (g = $GG(this).attr("rev").split("#/#")),
                    null != g)
                        for (var c = 0; c < g.length; c++)
                            if (3 == b.length) {
                                var d = g[c].split("##2##")[0];
                                if (d == b[1]) {
                                    a = g[c].split("##2##")[1];
                                    var e = a.split("*");
                                    if (e.length > 1)
                                        for (var f = 0; f < e.length; f++) {
                                            var h = e[f].split("#-#");
                                            h[0] == b[2] && (a = h)
                                        }
                                    else
                                        a = a.split("#-#")
                                }
                            } else {
                                var i = g[c].split("#-#");
                                i[0].toLowerCase().replace(/\s/g, "") == b[1].toLowerCase().replace(/\s/g, "") && (a = i)
                            }
                })
            }
            return a
        },
        showSelectedSpecInfo: function(a) {
            var b = Number(a[1]);
            $GG("#buyitnow_adet").empty();
            var c = Number(a[2])
              , d = b - c
              , e = $GG(".quantity-selection")
              , f = Number($GG(".max-stock-quantity").val());
            if (e.length > 0 && (isNaN(f) || (d = f),
            Number(e.val()) >= d ? (e.val(d),
            $GG(".increase-quantity").addClass("disabled"),
            $GG(".decrease-quantity").removeClass("disabled")) : $GG(".increase-quantity").removeClass("disabled"),
            $GG(".stock-quantity").val(d)),
            d > 0) {
                if ($GG("select#buyitnow_adet").length > 0)
                    for (var g = 1; g <= b; g++)
                        $GG("#buyitnow_adet").append($GG('<option value="' + g + '"/>').html(g));
                $GG("#frm_add_chard_UrunRetailVariantID,#frm_buyitnow_UrunRetailVariantID").val(a[3]);
                var h = "";
                h = d > 20 && d <= 9999 ? "20+" : d > 10 && d < 20 ? "10+" : d > 5 && d < 10 ? "5+" : d,
                h += " adet ürün stokta",
                $GG(".private-store-infos").length < 1 && (h += "<br/>"),
                c > 0 && (h = h + " " + c + " adet satıldı."),
                $GG("#VariantTotalSum").html(h),
                $GG("#stockProduct").val(d),
                $GG("#buyitnow_adet").removeAttr("disabled")
            } else
                $GG("#frm_add_chard_UrunRetailVariantID,#frm_buyitnow_UrunRetailVariantID").val(0)
        },
        controlRetailForm: function(a) {
            var b = $GG(".retail-select-li select").length
              , c = 0
              , d = !0
              , e = this;
            for (c = 0; c < b; c++)
                0 == $GG(".retail-select-li:eq(" + c + ") select").val() ? ($GG(".retail-select-li:eq(" + c + ") div.retail-alert").show(),
                $GG(".retail-select-li:eq(" + c + ")").addClass("FormInputErr"),
                e.focusErr(".retail-select-li", "#retail-select"),
                d = !1) : ($GG(".retail-select-li:eq(" + c + ")").removeClass("FormInputErr"),
                $GG(".retail-select-li:eq(" + c + ") div.retail-alert").hide());
            if (d) {
                var f = $GG("#buyitnow_adet").val()
                  , g = Number($GG("#stockProduct").val());
                if ("" == f || f < 1)
                    d = !1,
                    $GG("#quantityCol").addClass("FormInputErr"),
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert").show(),
                    e.focusErr();
                else if (0 == $GG("#frm_add_chard_UrunRetailVariantID,#frm_buyitnow_UrunRetailVariantID").val())
                    d = !1,
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").html("Seçmiş olduğunuz ürün stokta bulunmamaktadır."),
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").show(),
                    $GG("#retailInfos select:last").parents(".retail-select-li").addClass("FormInputErr"),
                    e.focusErr();
                else if (f > g) {
                    d = !1;
                    var h = e.staticTexts.quantityErrorMessages.maxLimit;
                    h = h.replace("$ID$", $GG("#productId").val()),
                    h = h.replace("$Q$", g),
                    1 != g ? $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").html(h) : (h = e.staticTexts.quantityErrorMessages.oneProduct,
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").html(h)),
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").show(),
                    $GG("#quantityCol").addClass("FormInputErr"),
                    e.focusErr()
                } else
                    $GG("#quantityCol").removeClass("FormInputErr"),
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert").hide(),
                    $GG("#buyitnow_adet").parent().siblings("div.retail-alert2").hide(),
                    $GG("div.retail-alert2").hide();
                d = e.insuranceSaleControl(d, a)
            }
            return d
        },
        focusErr: function(a, b) {
            a && void 0 !== a || (a = "#quantityCol"),
            b && void 0 !== a || (b = ".quantityInpt"),
            $GG("body,html").animate({
                scrollTop: $GG(a).offset().top
            }, 800, function() {
                $GG(b).focus()
            })
        },
        insuranceSaleControl: function(a, b) {
            var c = {}
              , d = (this.constructor,
            this)
              , e = $GG("#insurance-product");
            if (e.length > 0 && e.is(":checked")) {
                c[$GG("#productId").val()] = {
                    id: $GG("#productId").val(),
                    count: $GG("#buyitnow_adet").val()
                },
                $GG("#frm_add_chard_UrunRetailVariantID").length > 0 && (c[$GG("#productId").val()].retailVariantID = $GG("#frm_add_chard_UrunRetailVariantID").val()),
                c[e.attr("rel")] = {
                    id: e.attr("rel"),
                    count: 1
                },
                "buy-now" == b && (c[$GG("#productId").val()].buyItNow = !0,
                c[e.attr("rel")].buyItNow = !0);
                var f = d.createJson(c);
                _gg.communication.formDataPoster("http://www.gittigidiyor.com/sepete-ekle", f, "multipleProductJson"),
                a = !1
            }
            return a
        },
        createJson: function(a) {
            var b = [];
            for (var c in a) {
                var d = {
                    productId: c,
                    count: a[c].count.toString()
                };
                a[c].retailVariantID && (d.retailVariantID = a[c].retailVariantID),
                a[c].buyItNow && (d.buyItNow = a[c].buyItNow),
                b.push(d)
            }
            return b
        }
    }
};
retailProductController.init(),
$GG(document).ready(function() {
    retailProductController.onload()
}),
productPageScriptController.auctionProductController = {
    init: function() {
        this._ggAction = _gg.controller.events.Actions,
        this.functions.constructor = this,
        this.bidInProgress = !1,
        this.isRefrefshBidPageInProgress = !1,
        this.ajaxConfig = productPageScriptController._ajaxConfig,
        this.ajaxHost = productPageScriptController.ajaxHost
    },
    onload: function() {
        this.bindActions()
    },
    bindActions: function() {
        var a = this
          , b = a._ggAction;
        $GG("#makeBidFromQuery").length > 0 && a.functions.doBid("bidapprove", "bid_price_l", "bid_price_r", ""),
        $GG(".countdown-container").length > 0 && a.functions.startCountDown(),
        $GG(".kalan-sure-text-containter a,.bidyouinfo a").live(b.OVER, function() {
            $GG(this).next().show()
        }).live(b.LEAVE, function() {
            $GG(this).next().hide()
        }),
        $GG("#bid_price_l").keyup(function() {
            $GG(this).removeClass("FormInputErr"),
            $GG("#bid_price_l").parents(".special-padding-5").find(".retail-alert").hide()
        }),
        $GG(".show-all-bid").bind(b.CLICK, function(b) {
            a.functions.allBid($GG("#productId").val(), 1)
        }),
        $GG(".make-bid,.raise-bid").live(b.CLICK, function(b) {
            a.functions.doBid("bidapprove", "bid_price_l", "bid_price_r", "")
        }),
        $GG(".confirm-bid").live(b.CLICK, function(b) {
            a.functions.doBid("bid", "bid_price_l", "bid_price_r", "")
        }),
        $GG(".make-bid-btn").live(b.CLICK, function(b) {
            a.functions.doBid("bid", "bid_price_l5", "bid_price_r5", "")
        }),
        $GG(".change-bid-btn").live(b.CLICK, function(b) {
            a.functions.doBid("bidchange", "bid_price_l", "bid_price_r", "")
        })
    },
    functions: {
        startCountDown: function() {
            new _gg.components.countDown({
                startDay: Number($GG(".start-date-second").val()),
                endDay: Number($GG(".time-left-second").val()),
                zeroShow: !1
            })
        },
        doBid: function(a, b, c, d) {
            var e = this.constructor
              , f = $GG("#" + b).val();
            f || (f = 0);
            var g = $GG("#" + c).val();
            g || (g = 0);
            var h = f + "." + g
              , i = $GG("#productId").val();
            if ($GG.modal.close(),
            0 == f && 0 == g)
                return e.bidInProgress = !1,
                $GG("#bid_price_l").parents(".special-padding-5").find(".retail-alert").show(),
                $GG("#bid_price_l").addClass("FormInputErr"),
                $GG("body,html").animate({
                    scrollTop: $GG("#bid_price_l").offset().top
                }, 800, function() {
                    $GG("#bid_price_l").focus()
                }),
                !1;
            if ($GG(this).removeClass("FormInputErr"),
            $GG("#bid_price_l").parents(".special-padding-5").find(".retail-alert").hide(),
            $GG("#loggedInMemberId").length > 0) {
                $GG("#frm_bid_opt").val(a),
                $GG("#frm_secure_text").val("");
                var j = 0
                  , k = {};
                $GG("#loggedInMemberId").length > 0 && (j = $GG("#loggedInMemberId").val()),
                k.productId = i,
                k.price = h,
                k.memberId = j,
                k.option = a,
                e.ajaxConfig.url = e.ajaxHost + "/validate-for-bid",
                e.ajaxConfig.data = k,
                e.ajaxConfig.dataType = "html",
                e.ajaxMakeBidCtrl = new _gg.communication.ajaxController(e.ajaxConfig),
                e.ajaxMakeBidCtrl.tryOnce = !1,
                e.ajaxMakeBidCtrl.ajaxAction();
                var l = new _gg.utilities.ajaxObserver;
                l.init(),
                l.add(e.ajaxMakeBidCtrl),
                e.ajaxMakeBidCtrl.completeReq = function() {
                    var b = e.ajaxMakeBidCtrl.completeData;
                    $GG("#bid-lightBox").html(b),
                    $GG("#bid-lightBox").modal({
                        maxWidth: "378",
                        overlayClose: "True"
                    }),
                    $GG(window).trigger("resize"),
                    "bid" == a && $GG(".ac_ikon_onay").length > 0 && setTimeout(function() {
                        window.location = window.location.pathname
                    }, 1e3)
                }
            } else {
                var m = (encodeURIComponent(document.location.href),
                encodeURIComponent("http://urun.gittigidiyor.com" + document.location.pathname + "?bid=" + h))
                  , n = "https://www.gittigidiyor.com/php/signin_operation.php?url=" + m;
                window.location = n
            }
        },
        allBid: function(a, b) {
            var c = {}
              , d = this.constructor;
            c.productId = a,
            c.page = b,
            c.memberId = $GG("#auction-bid-con").attr("rel"),
            d.ajaxConfig.url = d.ajaxHost + "/bid-list#bidList",
            d.ajaxConfig.data = c,
            d.ajaxConfig.dataType = "html",
            d.ajaxAllBidCtrl = new _gg.communication.ajaxController(d.ajaxConfig),
            d.ajaxAllBidCtrl.tryOnce = !1,
            d.ajaxAllBidCtrl.ajaxAction();
            var e = new _gg.utilities.ajaxObserver;
            return e.init(),
            e.add(d.ajaxAllBidCtrl),
            d.ajaxAllBidCtrl.completeReq = function() {
                var a = d.ajaxAllBidCtrl.completeData;
                $GG("#bidList-lightBox").modal({
                    overlayClose: "True"
                });
                try {
                    $GG(window).trigger("resize")
                } catch (a) {}
                $GG("#bidList-lightBox").html(a)
            }
            ,
            !1
        },
        releaseBidProgress: function() {
            this.constructor.bidInProgress = !1,
            $GG(window).trigger("resize")
        }
    }
},
productPageScriptController.auctionProductController.init(),
$GG(document).ready(function() {
    productPageScriptController.auctionProductController.onload()
}),
$.fn.tooltip = function(a) {
    var b = this
      , c = {
        direction: "top"
    }
      , d = $.extend({}, c, a)
      , e = d.direction;
    return this.each(function() {
        var a = function() {
            c(),
            f(),
            g()
        }
          , c = function() {
            $(b).removeClass("top right bottom left").addClass(e)
        }
          , d = function() {
            $(".tooltip").removeClass("open").addClass("close")
        }
          , f = function() {
            d(),
            $(b).removeClass("close").addClass("open")
        }
          , g = function() {
            $(b).on("mouseleave", function() {
                d()
            })
        };
        a()
    })
}
,
function(a) {
    var b = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    a.zoom = function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = a(b), n = m.css("position"), o = a(c);
        return b.style.position = /(absolute|fixed)/.test(n) ? n : "relative",
        b.style.overflow = "hidden",
        d.style.width = d.style.height = "",
        a(d).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: d.width * e,
            height: d.height * e,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(b),
        {
            init: function() {
                g = m.outerWidth(),
                f = m.outerHeight(),
                c === b ? (i = g,
                h = f) : (i = o.outerWidth(),
                h = o.outerHeight()),
                j = (d.width - g) / i,
                k = (d.height - f) / h,
                l = o.offset()
            },
            move: function(a) {
                var b = a.pageX - l.left
                  , c = a.pageY - l.top;
                c = Math.max(Math.min(c, h), 0),
                b = Math.max(Math.min(b, i), 0),
                d.style.left = b * -j + "px",
                d.style.top = c * -k + "px"
            }
        }
    }
    ,
    a.fn.zoom = function(c) {
        return this.each(function() {
            var d = a.extend({}, b, c || {})
              , e = d.target && a(d.target)[0] || this
              , f = this
              , g = a(f)
              , h = document.createElement("img")
              , i = a(h)
              , j = "mousemove.zoom"
              , k = !1
              , l = !1;
            if (!d.url) {
                var m = f.querySelector("img");
                if (m && (d.url = m.getAttribute("data-src") || m.currentSrc || m.src),
                !d.url)
                    return
            }
            g.one("zoom.destroy", function(a, b) {
                g.off(".zoom"),
                e.style.position = a,
                e.style.overflow = b,
                h.onload = null,
                i.remove()
            }
            .bind(this, e.style.position, e.style.overflow)),
            h.onload = function() {
                function b(b) {
                    m.init(),
                    m.move(b),
                    i.stop().fadeTo(a.support.opacity ? d.duration : 0, 1, !!a.isFunction(d.onZoomIn) && d.onZoomIn.call(h))
                }
                function c() {
                    i.stop().fadeTo(d.duration, 0, !!a.isFunction(d.onZoomOut) && d.onZoomOut.call(h))
                }
                var m = a.zoom(e, f, h, d.magnify);
                "grab" === d.on ? g.on("mousedown.zoom", function(d) {
                    1 === d.which && (a(document).one("mouseup.zoom", function() {
                        c(),
                        a(document).off(j, m.move)
                    }),
                    b(d),
                    a(document).on(j, m.move),
                    d.preventDefault())
                }) : "click" === d.on ? g.on("click.zoom", function(d) {
                    return k ? void 0 : (k = !0,
                    b(d),
                    a(document).on(j, m.move),
                    a(document).one("click.zoom", function() {
                        c(),
                        k = !1,
                        a(document).off(j, m.move)
                    }),
                    !1)
                }) : "toggle" === d.on ? g.on("click.zoom", function(a) {
                    k ? c() : b(a),
                    k = !k
                }) : "mouseover" === d.on && (m.init(),
                g.on("mouseenter.zoom", b).on("mouseleave.zoom", c).on(j, m.move)),
                d.touch && g.on("touchstart.zoom", function(a) {
                    a.preventDefault(),
                    l ? (l = !1,
                    c()) : (l = !0,
                    b(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function(a) {
                    a.preventDefault(),
                    m.move(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
                }).on("touchend.zoom", function(a) {
                    a.preventDefault(),
                    l && (l = !1,
                    c())
                }),
                a.isFunction(d.callback) && d.callback.call(h)
            }
            ,
            h.src = d.url
        })
    }
    ,
    a.fn.zoom.defaults = b
}(window.jQuery);
