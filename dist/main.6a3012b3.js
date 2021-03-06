// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"d6sW":[function(require,module,exports) {
!function () {
  var cssCode = "/**\n * Hello\uFF0C\u4F60\u597D\uFF0C\u6B22\u8FCE\u6765\u5230\u8FD9\u91CC\n * \u4F60\u5C06\u89C1\u8BC1\u4E00\u53EA\u5C0F\u9EC4\u4EBA\u7684\u8BDE\u751F\n */\n\n/******\u5148\u753B\u5C0F\u9EC4\u4EBA\u7684\u76AE*******/\n\n#minion-body {\n    background: #fce55b;\n    border-radius: 100px 100px 60px 60px;\n    height: 340px;\n    width: 200px;\n    z-index: 0;\n}\n\n/******\u518D\u753B\u5C0F\u9EC4\u4EBA\u7684\u773C\u775B*******/\n\n#goggles {\n    background: #2a2a2a;\n    border-radius: 2px;\n    height: 26px;\n    margin: 80px 0 0 -2px;\n    width: 204px;\n    z-index: 10;\n}\n#frame {\n    background: #898989;\n    border-radius: 2px;\n    height: 32px;\n    margin: -3px 0 0 46px;\n    width: 108px;\n    z-index: 11;\n}\n#lense {\n    background: #000;\n    border-radius: 50%;\n    border: solid 14px #898989;\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);\n    height: 100px;\n    margin: -36px 0 0 50px;\n    width: 100px;\n    z-index: 12;\n}\n#eye-ball {\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;\n    height: 80px;\n    margin: -26px 0 0 60px;\n    width: 80px;\n    z-index: 13;\n}\n#eye-pupil {\n    background: #000;\n    border-radius: 50%;\n    border: solid 8px #3F1515;\n    height: 26px;\n    margin: 30px 0 0 26px;\n    width: 26px;\n    z-index: 13;\n}\n\n/******\u7136\u540E\u662F\u5C0F\u9EC4\u4EBA\u7684\u5634**********/\n\n#mouth {\n    background: #640F0F;\n    border-radius: 0 0 100px 100px;\n    height: 50px;\n    margin: 170px 0 0 50px;\n    width: 100px;\n    z-index: 20;\n}\n.teeth {\n    background: #fff;\n    border-radius: 0 0 8px 8px;\n    float: left;\n    height: 14px;\n    margin: 0 0 0 0;\n    width: 20px;\n    z-index: 22;\n}\n#tongue {\n    background: #D54747;\n    border-radius: 50%;\n    height: 20px;\n    margin: 30px 0 0 23px;\n    width: 54px;\n    z-index: 20;\n}\n#mouth-shadow {\n    border-radius: 0 0 100px 100px;\n    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;\n    height: 50px;\n    width: 100px;\n    z-index: 29;\n}\n\n/********\u624B\u624B**********/\n\n#left-arm {\n    transform: rotate(40deg);\n    height: 70px;\n    margin: 210px 0 0 -20px;\n    z-index: -30;\n}\n#left-hand {\n    transform: rotate(120deg);\n    height: 90px;\n    margin: 240px 0 0 -4px;\n    z-index: 50;\n}\n#right-arm {\n    transform: rotate(-40deg);\n    height: 70px;\n    margin: 210px 0 0 200px;\n    z-index: -30;\n}\n#right-hand {\n    transform: rotate(-120deg);\n    height: 90px;\n    margin: 240px 0 0 190px;\n    z-index: 50;\n}\n\n/********\u5C0F\u9EC4\u4EBA\u7684\u5DE5\u88C5\u88E4*********/\n\n#dungarees {\n    margin: 280px 0 0 0;\n}\n#left-strap {\n    visibility: visible;\n    transform: rotate(-50deg);\n    border-radius: 16px 0 4px 4px;\n    margin: -90px 0 0 18px;\n    z-index: 50;\n}\n#right-strap {\n    visibility: visible;\n    transform: rotate(50deg);\n    border-radius: 0 16px 4px 4px;\n    margin: -90px 0 0 170px;\n    z-index: 50;\n}\n#dungarees-main {\n    height: 60px;\n    width: 200px;\n    border-radius: 0 0 100px 100px;\n    box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.5);\n    z-index: 36;\n}\n#dungarees-front {\n    height: 70px;\n    width: 120px;\n    border-radius: 10px 10px 0 0;\n    margin: -40px 0 0 40px;\n    z-index: 36;\n}\n#dungarees-pocket {\n    z-index: 50;\n    height: 40px;\n    width: 60px;\n    border-radius: 0 0 50% 50%;\n    margin: -14px 0 0 70px;\n}\n#dungarees-pocket-left {\n    z-index: 50;\n    height: 36px;\n    width: 40px;\n    transform: rotate(-40deg);\n    border-radius: 0 0 50% 50%;\n    margin: 10px 0 0 14px;\n}\n#dungarees-pocket-right {\n    z-index: 50;\n    height: 36px;\n    width: 40px;\n    transform: rotate(40deg);\n    border-radius: 0 0 50% 50%;\n    margin: 10px 0 0 146px;\n}\n#dungarees-logo {\n    z-index: 50;\n    height: 20px;\n    width: 20px;\n    transform: rotate(45deg);\n    border: 5px solid;\n    margin: -6px 0 0 90px;\n}\n\n/********\u811A\u811A************/\n\n#legs {\n    margin: 260px 0 0 0;\n}\n#left-leg, #right-leg {\n    background: #336188;\n    height: 80px;\n    width: 40px;\n    z-index: 31;\n}\n#left-foot, #right-foot {\n    background: #272727;\n    height: 24px;\n    width: 50px;\n    border-bottom: 6px solid #000000;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n    z-index: 34;\n}\n\n/**\n * \u597D\u4E86\uFF0C\u5C0F\u9EC4\u4EBA\u753B\u597D\u4E86\uFF0C\u9001\u7ED9\u4F60\u5427\n * \n * \u5982\u679C\u5BF9\u6211\u7684\u9879\u76EE\u611F\u5174\u8DA3\uFF0C\u8BF7\u8054\u7CFB\u6211\u54DF~\n */\n";

  function writeCode(prefix, cssCode, fn) {
    var code = document.querySelector("#code");
    var styleTag = document.querySelector("#styleTag");
    var n = 0;
    var duration = 0;
    var id = setInterval(function () {
      n++;
      code.innerHTML = prefix + cssCode.substring(0, n);
      styleTag.innerHTML = prefix + cssCode.substring(0, n);
      code.scrollTop = code.scrollHeight;

      if (n >= cssCode.length) {
        window.clearInterval(id);
        fn && fn.call();
      }
    }, duration);
  }

  writeCode("", cssCode);
}.call();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.6a3012b3.js.map