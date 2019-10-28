;
(function (win) {

    window.deviceType = null;
    //婵炴潙绻楅～宥夊闯閵娿倓绻嗛柟顓ㄦ嫹
    var browser = {
      versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //缂佸顕ф慨鈺冪磼閸埄浼傛繛鏉戠箺椤秹宕抽妸褍顣奸柡鍫厸娣囧﹪骞侀敓锟�
            trident: u.indexOf('Trident') > -1, //IE闁告劕鎳忛悧锟�
            presto: u.indexOf('Presto') > -1, //opera闁告劕鎳忛悧锟�
            webKit: u.indexOf('AppleWebKit') > -1, //闁兼槒顫夐悘澶愬Υ娴ｅ€熷厭婵繂鑻崬鎾冀閿燂拷
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //闁诲浚鍋嗙€氬嫰宕橀崨顔惧
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //闁哄嫷鍨伴幆浣圭▔閾忓墣鈺呭礉閵娧呯煉缂佹棑鎷�
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缂備礁鐗忛锟�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android缂備礁鐗忛顒勫箣閺夘柀婵炴潙绻楅～宥夊闯閿燂拷
            iPhone: u.indexOf('iPhone') > -1, //闁哄嫷鍨伴幆浣圭▔缁＄笅hone闁瑰瓨鐗為埀顒€灏決HD婵炴潙绻楅～宥夊闯閿燂拷
            iPad: u.indexOf('iPad') > -1, //闁哄嫷鍨伴幆涔甈ad
            webApp: u.indexOf('Safari') == -1 //闁哄嫷鍨伴幆浜€eb閹煎瓨妫侀姘辩矙鐎ｎ亞纰嶉柨娑樻湰閻ュ懘寮垫径濞夸粓闂侇喓鍔嬬粭灞炬償閺囥垹鍔�
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    //婵炴挾濞€娴滈箖鏁嶉崸顪╅柕鍡曠皻echat闁靛棔绨歟ibo闁靛棔鏋剄闁挎稑顦埀顑跨劍閹奸攱鎷呭鍛村厙缂備緤鎷�(ios闁靛棔宸droid)闁靛棔娴囬鏇熷緞閸モ晞顫﹂柛顭掓嫹(iphonex)
    if (browser.versions.mobile) {                                //闁告帇鍊栭弻鍥及椤栨碍鍎婇柡鍕靛灣浜涢柛鏂诲姀椤旀洘寰勯崶銊モ叺鐎殿喒鍋撻柕鍡曠節rowser濞寸媴绲块悥婊堝捶閵娿倗鐟撻梻鍫嫹
        var ua = navigator.userAgent.toLowerCase();               //闁兼儳鍢茶ぐ鍥礆閵堝棙鐒介柣顫妿濞堟垹鈧數顢婇挅锟�
        //闁革负鍔屾禍鏇熺┍閳ヨ尪鍘柟鍨尭缁憋拷
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          // window.wechat = "wechat";
          window.dschannel = "wechat";
        }
        //闁革负鍔嶉弻濠偯归鍕俺闁告鑹鹃褰掑箣妞嬪寒浼傞柟鍨尭缁憋拷
        if (ua.match(/WeiBo/i) == "weibo") {
          window.dschannel = "weibo";
        }
        //闁革腹澧籕缂佸本妞藉Λ鍧楀箥閹惧磭纾�
        if (ua.match(/QQ/i) == "qq") {
          window.dschannel = "qq";
        }
        //闁革腹鍟廜S婵炴潙绻楅～宥夊闯閵婏箑鈪电€殿喒鍋�
        if (browser.versions.ios) {
          window.osType = "ios";
          if(812 == screen.height && 375 == screen.width){
            window.deviceType = 'iphoneX';
          }
        }
        //閻庣懓顦畷锟�
        if (browser.versions.android) {
          window.osType = "android";
          window.gyromode = "self";         //闁哄嫷鍨伴幆渚€宕烽妸銉ф殧闁告鎸荤粊鑽ゆ喆閸繃鐝ら柟鍨尭缁憋拷
        } else {
          window.gyromode = "auto";
        }
    } else {
      //闁告熬绠戦崹顖滀焊鏉堛劍笑PC婵炴潙绻楅～宥夊闯閵婏箑鈪电€殿喒鍋�
      window.dschannel = "pc";
    }

    var h;
    var dpr = win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1;
    var scale = 1 / dpr;
    // scale = 1閿涳拷
    var docEl = document.documentElement;
    var metaEl = document.createElement('meta');

    function setUnitA() {
      if (window.dschannel == 'pc') {
          win.rem = docEl.getBoundingClientRect().width / 37.5;
      } else {
          win.rem = docEl.getBoundingClientRect().width / 37.5;
      }
      console.log(win.rem);
      docEl.style.fontSize = win.rem + 'px';
    }

    win.dpr = dpr;
    win.addEventListener('resize', function () {
        clearTimeout(h);
        h = setTimeout(setUnitA, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(h);
            h = setTimeout(setUnitA, 300);
        }
    }, false);

    docEl.setAttribute('data-dpr', dpr);
    metaEl.setAttribute('name', 'viewport');


    if('android' == window.osType){
      metaEl.setAttribute('content', 'width=device-width,viewport-fit=cover,height=device-height, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    }else{
      metaEl.setAttribute('content', 'width=device-width,viewport-fit=cover, height=device-height, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    }

    if (docEl.firstElementChild) {
      // docEl.firstElementChild.appendChild(metaEl);
      document.head.appendChild(metaEl);
    } else {
      var wrap = document.createElement('div');
      wrap.appendChild(metaEl);
      document.write(wrap.innerHTML);
    }

    setUnitA();
})(window);
