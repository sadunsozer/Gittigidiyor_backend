//if (($GG.browser.msie  && parseInt($GG.browser.version, 10) === 8) || ($GG.browser.msie  && parseInt($GG.browser.version, 10) === 9)) {

    document.avp_ready = 1;
    function avp_zone(a) {
        avp_single("zone?zid=" + a.zid, a)
    }

    function avp_campaign(a) {
        avp_single("campaign?cid=" + a.cid, a)
    }

    function avp_media(a) {
        avp_single("media?mid=" + a.mid, a)
    }

    function avp_single(e, a) {
        var c = (window.location.protocol != "https:") ? "http" : "https";
        var d = c + "://" + a.base;
        var b = "";
        if (a.refresh) {
            b += "&refresh=" + a.refresh
        }
        if (a.refresh_limit) {
            b += "&refresh_limit=" + a.refresh_limit
        }
        if (a.click) {
            b += "&click=" + a.click
        }
        if (a.exit) {
            b += "&exit=" + a.exit
        }
        if (a.include) {
            b += "&include=" + a.include
        }
        if (a.exclude) {
            b += "&exclude=" + a.exclude
        }
        if (a.timeout) {
            b += "&timeout=" + a.timeout
        }
        b = avp_opts(a, b);
        if (a.iframe) {
            document.write('<iframe src="' + d + "/servlet/view/" + a.type + "/javascript/html/" + e + "&pid=" + a.pid + b + '" height="' + a.height + '" width="' + a.width + '" hspace="0" vspace="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"><a href="' + d + "/servlet/click/" + e + "&pid=" + a.pid + "&lookup=true" + b + '" rel="nofollow" target="_blank"><img src="' + d + "/servlet/view/" + a.type + "/javascript/image/" + e + "&pid=" + a.pid + b + '" height="' + a.height + '" width="' + a.width + '" hspace="0" vspace="0" border="0" alt="Click Here!"></a></iframe>')
        } else {
            document.write('<script src="' + d + "/servlet/view/" + a.type + "/javascript/" + e + "&pid=" + a.pid + b + '" type="text/javascript"><\/script>')
        }
    }

    function avp_multiple(a) {
        var c = (window.location.protocol != "https:") ? "http" : "https";
        var d = c + "://" + a.base;
        var b = (a.renderer != "grid") ? "&layout=" + a.layout : "&columns=" + a.columns;
        b = avp_opts(a, b);
        document.write('<script src="' + d + "/servlet/view/" + a.type + "/unique/javascript/" + a.renderer + "?zid=" + a.zid + "&pid=" + a.pid + "&total=" + a.total + "&padding=" + parseInt(a.padding || 0) + "&margin=" + parseInt(a.margin || 0) + b + '" type="text/javascript"><\/script>')
    }

    function avp_escape(a) {
        return(!a.indexOf || (a.indexOf("+") == -1 && a.indexOf("%") == -1)) ? ((encodeURIComponent) ? encodeURIComponent(a) : escape(a)) : a
    }

    function avp_opts(b, d) {
        if (b.contextual) {
            d += "&contextual=" + b.contextual
        }
        if (b.crawler) {
            d += "&crawler=" + b.crawler;
            if (b.align) {
                d += "&align=" + b.align
            }
            if (b.closeable) {
                d += "&closeable=" + b.closeable
            }
            if (b.spacing) {
                d += "&spacing=" + b.spacing
            }
            if (b.bgcolor) {
                d += "&bgcolor=" + avp_escape(b.bgcolor)
            }
        }
        for (var g = 1; g <= 10; g++) {
            if (b["custom" + g]) {
                d += "&custom" + g + "=" + avp_escape(b["custom" + g])
            }
        }
        if (b.echo) {
            d += "&echo=" + b.echo;
            var a = b.echo.split(",");
            for (var f = 0; f < a.length; f++) {
                if (b[a[f]]) {
                    d += "&" + a[f] + "=" + avp_escape(b[a[f]])
                }
            }
        }
        if (b.keywords) {
            d += "&keywords=" + avp_escape(b.keywords)
        }
        if (b.language) {
            d += "&language=" + avp_escape(b.language)
        }
        if (b.lightbox) {
            d += "&lightbox=" + b.lightbox;
            if (b.autoclose) {
                d += "&autoclose=" + b.autoclose
            }
        }
        if (b.overlay) {
            d += "&overlay=" + b.overlay;
            if (b.autoclose) {
                d += "&autoclose=" + b.autoclose
            }
            if (b.spacing) {
                d += "&spacing=" + b.spacing
            }
            if (b.bgcolor) {
                d += "&bgcolor=" + avp_escape(b.bgcolor)
            }
        }
        if (b.type == "pagepeel") {
            if (b.color1) {
                d += "&color1=" + avp_escape(b.color1)
            }
            if (b.color2) {
                d += "&color2=" + avp_escape(b.color2)
            }
            if (b.anchor) {
                d += "&anchor=" + avp_escape(b.anchor)
            }
        }
        if (b.type == "wallpaper") {
            d += "&resolution=" + screen.width + "x" + screen.height
        }
        d += "&random=" + Math.floor(89999999 * Math.random() + 10000000);
        d += "&millis=" + new Date().getTime();
        if (b.cturl) {
            d += "&encode=" + parseInt(b.encode || 0)
        }
        d += "&referrer=" + avp_escape(document.location);
        if (b.cturl) {
            d += "&cturl=" + avp_escape(b.cturl)
        }
        return d
    }

//}else{

    var _avp = _avp || [];

    var AVP = {supported: (function () {
        var a = navigator.userAgent.toLowerCase();
        if (a.match(/chrome\/(1|2|3|4)\./)) {
            return 0
        }
        if (a.match(/opera(\s|\/)(4|5|6|7)\./)) {
            return 0
        }
        if (a.indexOf("(khtml, like gecko) safari/") != -1) {
            return 0
        }
        if (!window.XMLHttpRequest && a.indexOf("msie 6") == -1) {
            return 0
        }
        return 1
    })(), single: function (f, b) {
        var e = this.base(b);
        var d = this.opts(b);
        if (b.iframe) {
            var g = document.getElementById(b.tagid);
            g.innerHTML = '<iframe src="' + e + "/servlet/view/" + b.type + "/javascript/html/" + f + d + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>'
        } else {
            if (b.type == "pagepeel" || b.type == "wallpaper" || b.type == "window") {
                var c = document.createElement("script");
                c.type = "text/javascript";
                c.src = e + "/servlet/view/" + b.type + "/javascript/ajax/" + f + d;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(c, a)
            } else {
                if (this.supported) {
                    this.loadAsync(b.type, b.tagid, e + "/servlet/view/" + b.type + "/javascript/ajax/html/" + f + d)
                } else {
                    if (b.type == "banner") {
                        var g = document.getElementById(b.tagid);
                        g.innerHTML = '<a href="' + e + "/servlet/click/" + f + "&lookup=true" + d + '" rel="nofollow" target="_blank"><img src="' + e + "/servlet/view/" + b.type + "/javascript/image/" + f + d + '" height="' + b.height + '" width="' + b.width + '" hspace="0" vspace="0" border="0" alt="Click Here!"></a>'
                    }
                }
            }
        }
    }, multi: function (a) {
        if (this.supported) {
            var c = this.base(a);
            var b = this.opts(a);
            this.loadAsync(a.type, a.tagid, c + "/servlet/view/" + a.type + "/unique/javascript/ajax/html/" + a.renderer + "?zid=" + a.zid + "&total=" + a.total + ((a.renderer != "grid") ? "&layout=" + a.layout : "&columns=" + a.columns) + "&padding=" + parseInt(a.padding || 0) + "&margin=" + parseInt(a.margin || 0) + b)
        }
    }, loadAsync: function (c, b, a) {
        if (c == "banner") {
            this.loadWithIFRAME(b, a)
        }
        if (c == "dynamic") {
            this.loadWithXHR(b, a, true)
        }
        if (c == "text") {
            this.loadWithXHR(b, a, false)
        }
    }, loadWithIFRAME: function (b, a) {
        var d = document.getElementById(b);
        var c = document.createElement("iframe");
        c.setAttribute("id", b + "_iframe");
        c.setAttribute("frameborder", "0");
        c.setAttribute("marginwidth", "0");
        c.setAttribute("maginheight", "0");
        c.setAttribute("allowtransparency", "true");
        c.setAttribute("hspace", "0");
        c.setAttribute("vspace", "0");
        c.setAttribute("scrolling", "no");
        c.setAttribute("style", "margin:0; padding:0; width:0; height:0; border:0; overflow:hidden");
        c.setAttribute("src", a);
        this.listen(c, "load", function () {
            AVP.resizeIFRAME(b)
        });
        d.appendChild(c)
    }, resizeIFRAME: function (e) {
        var c = document.getElementById(e);
        var j = document.getElementById(e + "_iframe");
        var i = navigator.userAgent.toLowerCase();
        if (c && j) {
            var g = (j.contentWindow) ? j.contentWindow.document : (j.contentDocument || j.document);
            g.body.style.border = 0;
            g.body.style.margin = 0;
            g.body.style.padding = 0;
            if ((i.match(/msie\s(6|7|8)/) && i.indexOf("opera") == -1) || !g.body.scrollWidth) {
                g.bgColor = document.bgColor;
                var d = g.getElementsByTagName("*");
                var l = ",APPLET,B,BLOCKQUOTE,CODE,DIV,EM,EMBED,FORM,H1,H2,H3,H4,H5,H6,HR,I,IFRAME,IMG,MAP,OBJECT,OL,P,PRE,SPAN,TABLE,U,UL,";
                var k = 0, p = 0;
                for (var o = 0; o < d.length; o++) {
                    var f = d[o];
                    if (l.indexOf("," + f.nodeName + ",") != -1) {
                        if (f.offsetWidth == f.clientWidth && f.offsetWidth > p) {
                            p = f.offsetWidth
                        }
                        if ((f.offsetHeight == f.clientHeight || (f.scrollHeight && f.offsetHeight == f.scrollHeight)) && f.offsetHeight > k) {
                            k = f.offsetHeight
                        }
                    }
                }
                j.style.width = p;
                j.style.height = k
            } else {
                var d = g.getElementsByTagName("IMG");
                for (var m = 0; m < d.length; m++) {
                    d[m].style.display = "block"
                }
                g.body.style.backgroundColor = "transparent";
                j.style.width = g.body.scrollWidth + "px";
                j.style.height = g.body.scrollHeight + "px"
            }
        }
    }, loadWithXHR: function (b, a, d) {

//if ($.browser.msie && window.XDomainRequest) {

        // ie controller
        function crossDomainAjax (url, successCallback) {
            // IE8 & 9 only Cross domain JSON GET request
            if ('XDomainRequest' in window && window.XDomainRequest !== null) {
                var xdr = new XDomainRequest(); // Use Microsoft XDR
                xdr.open('get', url);
                xdr.onload = function () {



                    successCallback(xdr.responseText); // internal function
                };

                xdr.onerror = function() {
                    _result = false;
                };

                xdr.onprogress = function() {
                };

                window.setTimeout(function(){
                    xdr.send();
                }, 100);
            }
            // IE7 and lower can't do cross domain
            else if (navigator.userAgent.indexOf('MSIE') != -1 &&
                parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
                return false;
            }
        }

        /*      if (window.XDomainRequest) {

         crossDomainAjax(a, function (data) {
         AVP.inject(b, data, false, d);
         });
         }
         }else{
         */
        var pendingRequest = false;
        var operationSuccess = false;
        var data = '';
        $GG.ajax({
            type: "GET",
            url: a,
            beforeSend:function(){
                pendingRequest = true;
            },
            success:function (_data) {
                data = _data;
                operationSuccess = true;

            },
            complete:function (e, xhr) {

                if(operationSuccess == false){
                    homePageScriptController.functions.adBlockController();
                }else{
                    AVP.inject(b, data, false, d);
                }


            },
            error:function(){
                // ERROR
            }
        });


        // }














    }, inject: function (tagid, code, append, evaluate) {



        var code = code.replace(/http:/g, '').replace(/href="\/\//g, 'href="http://').replace(/href='\/\//g, "href='http://");


        var div = document.getElementById(tagid);
        if (append) {
            var innerDiv = document.createElement("div");
            innerDiv.innerHTML = code;
            div.appendChild(innerDiv)
        } else {
            div.innerHTML = code
        }
        var agent = navigator.userAgent.toLowerCase();
        if (evaluate && (!append || !agent.match(/firefox\/(1|2|3)\./))) {
            var startTag = new RegExp("(<script[^>]+javascript[^>]+>s*(<!--)?)", "i");
            var endTag = new RegExp("((-->)?s*<\/script>)", "i");
            var st, et, block;
            while ((st = startTag.exec(code))) {
                code = code.substring(code.indexOf(st[0]) + st[0].length);
                if (!(et = endTag.exec(code))) {
                    break
                }
                block = code.substr(0, code.indexOf(et[0]));
                code = code.substring(block.length + et[0].length);
                try {
                    eval(block)
                } catch (err) {
                }
            }
        }

        //homePageScriptController.functions.bannerImagesCallback(tagid);
        homePageScriptController.functions.rightAndLeftEarControl();
        homePageScriptController.functions.rightAndLeftEarControlOver();


    }, isolate: function (b) {
        var a = document.createElement("iframe");
        a.setAttribute("style", "display:none; visibility:hidden; position:absolute; left:-1000px");
        document.body.appendChild(a);
        var c = (a.contentWindow) ? a.contentWindow.document : (a.contentDocument || a.document);
        c.open();
        c.write(b);
        c.close()
    }, escape: function (a) {
        return(!a.indexOf || (a.indexOf("+") == -1 && a.indexOf("%") == -1)) ? ((encodeURIComponent) ? encodeURIComponent(a) : escape(a)) : a
    }, base: function (a) {
        return window.location.protocol + "//" + ((!a.domain) ? document.domain : a.domain) + ((!a.alias) ? "/advertpro" : (a.alias != "/" ? a.alias : ""))
    }, opts: function (b) {
        var d = "";
        if (b.pid) {
            d += "&pid=" + b.pid
        }
        if (b.uuid) {
            d += "&uuid=" + b.uuid
        }
        if (b.tagid) {
            d += "&tagid=" + b.tagid
        }
        if (b.contextual) {
            d += "&contextual=" + b.contextual
        }
        if (b.crawler) {
            d += "&crawler=" + b.crawler;
            if (b.align) {
                d += "&align=" + b.align
            }
            if (b.closeable) {
                d += "&closeable=" + b.closeable
            }
            if (b.spacing) {
                d += "&spacing=" + b.spacing
            }
            if (b.bgcolor) {
                d += "&bgcolor=" + this.escape(b.bgcolor)
            }
        }
        for (var g = 1; g <= 10; g++) {
            if (b["custom" + g]) {
                d += "&custom" + g + "=" + this.escape(b["custom" + g])
            }
        }
        if (b.echo) {
            d += "&echo=" + b.echo;
            var a = b.echo.split(",");
            for (var f = 0; f < a.length; f++) {
                if (b[a[f]]) {
                    d += "&" + a[f] + "=" + this.escape(b[a[f]])
                }
            }
        }
        if (b.keywords) {
            d += "&keywords=" + this.escape(b.keywords)
        }
        if (b.language) {
            d += "&language=" + this.escape(b.language)
        }
        if (b.lightbox) {
            d += "&lightbox=" + b.lightbox;
            if (b.autoclose) {
                d += "&autoclose=" + b.autoclose
            }
        }
        if (b.overlay) {
            d += "&overlay=" + b.overlay;
            if (b.autoclose) {
                d += "&autoclose=" + b.autoclose
            }
            if (b.spacing) {
                d += "&spacing=" + b.spacing
            }
            if (b.bgcolor) {
                d += "&bgcolor=" + this.escape(b.bgcolor)
            }
        }
        if (b.refresh) {
            d += "&refresh=" + b.refresh
        }
        if (b.refresh_limit) {
            d += "&refresh_limit=" + b.refresh_limit
        }
        if (b.click) {
            d += "&click=" + b.click
        }
        if (b.exit) {
            d += "&exit=" + b.exit
        }
        if (b.include) {
            d += "&include=" + b.include
        }
        if (b.exclude) {
            d += "&exclude=" + b.exclude
        }
        if (b.timeout) {
            d += "&timeout=" + b.timeout
        }
        if (b.type == "pagepeel") {
            if (b.color1) {
                d += "&color1=" + this.escape(b.color1)
            }
            if (b.color2) {
                d += "&color2=" + this.escape(b.color2)
            }
            if (b.anchor) {
                d += "&anchor=" + this.escape(b.anchor)
            }
        }
        if (b.type == "wallpaper") {
            d += "&resolution=" + screen.width + "x" + screen.height
        }
        d += "&random=" + Math.floor(89999999 * Math.random() + 10000000);
        d += "&millis=" + new Date().getTime();
        if (b.cturl) {
            d += "&encode=" + parseInt(b.encode || 0)
        }
        d += "&referrer=" + this.escape(document.location);
        if (b.cturl) {
            d += "&cturl=" + this.escape(b.cturl)
        }
        return d
    }, listen: function (c, b, a) {
        if (c.addEventListener) {
            c.addEventListener(b, a, false)
        } else {
            c.attachEvent("on" + b, a)
        }
    }, polled: 0, poll: function (a, b) {
        if (_avp && _avp.length > 0) {
            this.load(a)
        } else {
            if (b < 20) {
                setTimeout(function () {
                    AVP.poll(a, (b + 1))
                }, ((b + 1) * 50))
            } else {
                this.polled = 1
            }
        }
    }, loaded: 0, load: function (b) {
        if (_avp && _avp.length > 0) {
            while (_avp.length > 0) {
                var a = _avp.shift();
                a.uuid = b;
                if (a.renderer) {
                    this.multi(a)
                } else {
                    if (a.zid) {
                        this.single("zone?zid=" + a.zid, a)
                    } else {
                        if (a.cid) {
                            this.single("campaign?cid=" + a.cid, a)
                        } else {
                            if (a.mid) {
                                this.single("media?mid=" + a.mid, a)
                            }
                        }
                    }
                }
            }
        }
        if (!this.loaded) {
            this.loaded = 1;
            this.listen(document, "DOMContentLoaded", function () {
                AVP.load(b)
            });
            this.listen(window, "load", function () {
                AVP.load(b)
            })
        }
        if (!this.polled) {
            setTimeout(function () {
                AVP.poll(b, 1)
            }, 50)
        }
    }};
    (function () {
        AVP.uuid = '';
        AVP.load(AVP.uuid);
    })();
    function AVP_ActivateApplet(b, a) {
        b.writeln(a)
    }
    function AVP_ActivateFlash(b, a) {
        b.writeln(a)
    }
    function AVP_ActivateFlashByVersion(d, b, a, f) {
        var m = -1;
        var g = navigator.userAgent.toLowerCase();
        if (navigator.plugins != null && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) {
            var l = navigator.plugins["Shockwave Flash"].description;
            var c = l.split(" ");
            var j = c[2].split(".");
            m = j[0]
        } else {
            if (g.indexOf("msie") != -1 && g.indexOf("win") != -1 && g.indexOf("opera") == -1) {
                for (var h = 15; h >= 3; h--) {
                    if (m == -1) {
                        try {
                            var k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + h);
                            m = h
                        } catch (e) {
                        }
                    }
                }
            }
        }
        d.writeln((m >= f || (!a || a.length == 0)) ? b : a)
    }
//}

