"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/lottie-web@5.12.2/node_modules/lottie-web/build/player/lottie.js
  var require_lottie = __commonJS({
    "node_modules/.pnpm/lottie-web@5.12.2/node_modules/lottie-web/build/player/lottie.js"(exports, module) {
      init_live_reload();
      typeof navigator !== "undefined" && function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.lottie = factory());
      }(exports, function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg";
        var locationHref = "";
        var _useWebWorker = false;
        var initialDefaultFrame = -999999;
        var setWebWorker = function setWebWorker2(flag) {
          _useWebWorker = !!flag;
        };
        var getWebWorker = function getWebWorker2() {
          return _useWebWorker;
        };
        var setLocationHref = function setLocationHref2(value2) {
          locationHref = value2;
        };
        var getLocationHref = function getLocationHref2() {
          return locationHref;
        };
        function createTag(type) {
          return document.createElement(type);
        }
        function extendPrototype(sources, destination) {
          var i;
          var len = sources.length;
          var sourcePrototype;
          for (i = 0; i < len; i += 1) {
            sourcePrototype = sources[i].prototype;
            for (var attr in sourcePrototype) {
              if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
            }
          }
        }
        function getDescriptor(object, prop) {
          return Object.getOwnPropertyDescriptor(object, prop);
        }
        function createProxyFunction(prototype) {
          function ProxyFunction() {
          }
          ProxyFunction.prototype = prototype;
          return ProxyFunction;
        }
        var audioControllerFactory = function() {
          function AudioController(audioFactory) {
            this.audios = [];
            this.audioFactory = audioFactory;
            this._volume = 1;
            this._isMuted = false;
          }
          AudioController.prototype = {
            addAudio: function addAudio(audio) {
              this.audios.push(audio);
            },
            pause: function pause() {
              var i;
              var len = this.audios.length;
              for (i = 0; i < len; i += 1) {
                this.audios[i].pause();
              }
            },
            resume: function resume() {
              var i;
              var len = this.audios.length;
              for (i = 0; i < len; i += 1) {
                this.audios[i].resume();
              }
            },
            setRate: function setRate(rateValue) {
              var i;
              var len = this.audios.length;
              for (i = 0; i < len; i += 1) {
                this.audios[i].setRate(rateValue);
              }
            },
            createAudio: function createAudio(assetPath) {
              if (this.audioFactory) {
                return this.audioFactory(assetPath);
              }
              if (window.Howl) {
                return new window.Howl({
                  src: [assetPath]
                });
              }
              return {
                isPlaying: false,
                play: function play() {
                  this.isPlaying = true;
                },
                seek: function seek() {
                  this.isPlaying = false;
                },
                playing: function playing() {
                },
                rate: function rate() {
                },
                setVolume: function setVolume() {
                }
              };
            },
            setAudioFactory: function setAudioFactory(audioFactory) {
              this.audioFactory = audioFactory;
            },
            setVolume: function setVolume(value2) {
              this._volume = value2;
              this._updateVolume();
            },
            mute: function mute() {
              this._isMuted = true;
              this._updateVolume();
            },
            unmute: function unmute() {
              this._isMuted = false;
              this._updateVolume();
            },
            getVolume: function getVolume() {
              return this._volume;
            },
            _updateVolume: function _updateVolume() {
              var i;
              var len = this.audios.length;
              for (i = 0; i < len; i += 1) {
                this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
              }
            }
          };
          return function() {
            return new AudioController();
          };
        }();
        var createTypedArray = function() {
          function createRegularArray(type, len) {
            var i = 0;
            var arr = [];
            var value2;
            switch (type) {
              case "int16":
              case "uint8c":
                value2 = 1;
                break;
              default:
                value2 = 1.1;
                break;
            }
            for (i = 0; i < len; i += 1) {
              arr.push(value2);
            }
            return arr;
          }
          function createTypedArrayFactory(type, len) {
            if (type === "float32") {
              return new Float32Array(len);
            }
            if (type === "int16") {
              return new Int16Array(len);
            }
            if (type === "uint8c") {
              return new Uint8ClampedArray(len);
            }
            return createRegularArray(type, len);
          }
          if (typeof Uint8ClampedArray === "function" && typeof Float32Array === "function") {
            return createTypedArrayFactory;
          }
          return createRegularArray;
        }();
        function createSizedArray(len) {
          return Array.apply(null, {
            length: len
          });
        }
        function _typeof$6(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$6 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$6 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$6(obj);
        }
        var subframeEnabled = true;
        var expressionsPlugin = null;
        var expressionsInterfaces = null;
        var idPrefix$1 = "";
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var _shouldRoundValues = false;
        var bmPow = Math.pow;
        var bmSqrt = Math.sqrt;
        var bmFloor = Math.floor;
        var bmMax = Math.max;
        var bmMin = Math.min;
        var BMMath = {};
        (function() {
          var propertyNames = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"];
          var i;
          var len = propertyNames.length;
          for (i = 0; i < len; i += 1) {
            BMMath[propertyNames[i]] = Math[propertyNames[i]];
          }
        })();
        function ProjectInterface$1() {
          return {};
        }
        BMMath.random = Math.random;
        BMMath.abs = function(val2) {
          var tOfVal = _typeof$6(val2);
          if (tOfVal === "object" && val2.length) {
            var absArr = createSizedArray(val2.length);
            var i;
            var len = val2.length;
            for (i = 0; i < len; i += 1) {
              absArr[i] = Math.abs(val2[i]);
            }
            return absArr;
          }
          return Math.abs(val2);
        };
        var defaultCurveSegments = 150;
        var degToRads = Math.PI / 180;
        var roundCorner = 0.5519;
        function roundValues(flag) {
          _shouldRoundValues = !!flag;
        }
        function bmRnd(value2) {
          if (_shouldRoundValues) {
            return Math.round(value2);
          }
          return value2;
        }
        function styleDiv(element) {
          element.style.position = "absolute";
          element.style.top = 0;
          element.style.left = 0;
          element.style.display = "block";
          element.style.transformOrigin = "0 0";
          element.style.webkitTransformOrigin = "0 0";
          element.style.backfaceVisibility = "visible";
          element.style.webkitBackfaceVisibility = "visible";
          element.style.transformStyle = "preserve-3d";
          element.style.webkitTransformStyle = "preserve-3d";
          element.style.mozTransformStyle = "preserve-3d";
        }
        function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
          this.type = type;
          this.currentTime = currentTime;
          this.totalTime = totalTime;
          this.direction = frameMultiplier < 0 ? -1 : 1;
        }
        function BMCompleteEvent(type, frameMultiplier) {
          this.type = type;
          this.direction = frameMultiplier < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
          this.type = type;
          this.currentLoop = currentLoop;
          this.totalLoops = totalLoops;
          this.direction = frameMultiplier < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(type, firstFrame, totalFrames) {
          this.type = type;
          this.firstFrame = firstFrame;
          this.totalFrames = totalFrames;
        }
        function BMDestroyEvent(type, target) {
          this.type = type;
          this.target = target;
        }
        function BMRenderFrameErrorEvent(nativeError, currentTime) {
          this.type = "renderFrameError";
          this.nativeError = nativeError;
          this.currentTime = currentTime;
        }
        function BMConfigErrorEvent(nativeError) {
          this.type = "configError";
          this.nativeError = nativeError;
        }
        function BMAnimationConfigErrorEvent(type, nativeError) {
          this.type = type;
          this.nativeError = nativeError;
        }
        var createElementID = /* @__PURE__ */ function() {
          var _count = 0;
          return function createID() {
            _count += 1;
            return idPrefix$1 + "__lottie_element_" + _count;
          };
        }();
        function HSVtoRGB(h, s, v) {
          var r;
          var g;
          var b;
          var i;
          var f;
          var p;
          var q;
          var t;
          i = Math.floor(h * 6);
          f = h * 6 - i;
          p = v * (1 - s);
          q = v * (1 - f * s);
          t = v * (1 - (1 - f) * s);
          switch (i % 6) {
            case 0:
              r = v;
              g = t;
              b = p;
              break;
            case 1:
              r = q;
              g = v;
              b = p;
              break;
            case 2:
              r = p;
              g = v;
              b = t;
              break;
            case 3:
              r = p;
              g = q;
              b = v;
              break;
            case 4:
              r = t;
              g = p;
              b = v;
              break;
            case 5:
              r = v;
              g = p;
              b = q;
              break;
            default:
              break;
          }
          return [r, g, b];
        }
        function RGBtoHSV(r, g, b) {
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var d = max - min;
          var h;
          var s = max === 0 ? 0 : d / max;
          var v = max / 255;
          switch (max) {
            case min:
              h = 0;
              break;
            case r:
              h = g - b + d * (g < b ? 6 : 0);
              h /= 6 * d;
              break;
            case g:
              h = b - r + d * 2;
              h /= 6 * d;
              break;
            case b:
              h = r - g + d * 4;
              h /= 6 * d;
              break;
            default:
              break;
          }
          return [h, s, v];
        }
        function addSaturationToRGB(color, offset) {
          var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
          hsv[1] += offset;
          if (hsv[1] > 1) {
            hsv[1] = 1;
          } else if (hsv[1] <= 0) {
            hsv[1] = 0;
          }
          return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
        }
        function addBrightnessToRGB(color, offset) {
          var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
          hsv[2] += offset;
          if (hsv[2] > 1) {
            hsv[2] = 1;
          } else if (hsv[2] < 0) {
            hsv[2] = 0;
          }
          return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
        }
        function addHueToRGB(color, offset) {
          var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
          hsv[0] += offset / 360;
          if (hsv[0] > 1) {
            hsv[0] -= 1;
          } else if (hsv[0] < 0) {
            hsv[0] += 1;
          }
          return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
        }
        var rgbToHex = function() {
          var colorMap = [];
          var i;
          var hex;
          for (i = 0; i < 256; i += 1) {
            hex = i.toString(16);
            colorMap[i] = hex.length === 1 ? "0" + hex : hex;
          }
          return function(r, g, b) {
            if (r < 0) {
              r = 0;
            }
            if (g < 0) {
              g = 0;
            }
            if (b < 0) {
              b = 0;
            }
            return "#" + colorMap[r] + colorMap[g] + colorMap[b];
          };
        }();
        var setSubframeEnabled = function setSubframeEnabled2(flag) {
          subframeEnabled = !!flag;
        };
        var getSubframeEnabled = function getSubframeEnabled2() {
          return subframeEnabled;
        };
        var setExpressionsPlugin = function setExpressionsPlugin2(value2) {
          expressionsPlugin = value2;
        };
        var getExpressionsPlugin = function getExpressionsPlugin2() {
          return expressionsPlugin;
        };
        var setExpressionInterfaces = function setExpressionInterfaces2(value2) {
          expressionsInterfaces = value2;
        };
        var getExpressionInterfaces = function getExpressionInterfaces2() {
          return expressionsInterfaces;
        };
        var setDefaultCurveSegments = function setDefaultCurveSegments2(value2) {
          defaultCurveSegments = value2;
        };
        var getDefaultCurveSegments = function getDefaultCurveSegments2() {
          return defaultCurveSegments;
        };
        var setIdPrefix = function setIdPrefix2(value2) {
          idPrefix$1 = value2;
        };
        var getIdPrefix = function getIdPrefix2() {
          return idPrefix$1;
        };
        function createNS(type) {
          return document.createElementNS(svgNS, type);
        }
        function _typeof$5(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$5 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$5 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$5(obj);
        }
        var dataManager = /* @__PURE__ */ function() {
          var _counterId = 1;
          var processes = [];
          var workerFn;
          var workerInstance;
          var workerProxy = {
            onmessage: function onmessage() {
            },
            postMessage: function postMessage(path) {
              workerFn({
                data: path
              });
            }
          };
          var _workerSelf = {
            postMessage: function postMessage(data2) {
              workerProxy.onmessage({
                data: data2
              });
            }
          };
          function createWorker(fn) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var blob = new Blob(["var _workerSelf = self; self.onmessage = ", fn.toString()], {
                type: "text/javascript"
              });
              var url = URL.createObjectURL(blob);
              return new Worker(url);
            }
            workerFn = fn;
            return workerProxy;
          }
          function setupWorker() {
            if (!workerInstance) {
              workerInstance = createWorker(function workerStart(e) {
                function dataFunctionManager() {
                  function completeLayers(layers, comps) {
                    var layerData;
                    var i;
                    var len = layers.length;
                    var j;
                    var jLen;
                    var k;
                    var kLen;
                    for (i = 0; i < len; i += 1) {
                      layerData = layers[i];
                      if ("ks" in layerData && !layerData.completed) {
                        layerData.completed = true;
                        if (layerData.hasMask) {
                          var maskProps = layerData.masksProperties;
                          jLen = maskProps.length;
                          for (j = 0; j < jLen; j += 1) {
                            if (maskProps[j].pt.k.i) {
                              convertPathsToAbsoluteValues(maskProps[j].pt.k);
                            } else {
                              kLen = maskProps[j].pt.k.length;
                              for (k = 0; k < kLen; k += 1) {
                                if (maskProps[j].pt.k[k].s) {
                                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                                }
                                if (maskProps[j].pt.k[k].e) {
                                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                                }
                              }
                            }
                          }
                        }
                        if (layerData.ty === 0) {
                          layerData.layers = findCompLayers(layerData.refId, comps);
                          completeLayers(layerData.layers, comps);
                        } else if (layerData.ty === 4) {
                          completeShapes(layerData.shapes);
                        } else if (layerData.ty === 5) {
                          completeText(layerData);
                        }
                      }
                    }
                  }
                  function completeChars(chars, assets) {
                    if (chars) {
                      var i = 0;
                      var len = chars.length;
                      for (i = 0; i < len; i += 1) {
                        if (chars[i].t === 1) {
                          chars[i].data.layers = findCompLayers(chars[i].data.refId, assets);
                          completeLayers(chars[i].data.layers, assets);
                        }
                      }
                    }
                  }
                  function findComp(id, comps) {
                    var i = 0;
                    var len = comps.length;
                    while (i < len) {
                      if (comps[i].id === id) {
                        return comps[i];
                      }
                      i += 1;
                    }
                    return null;
                  }
                  function findCompLayers(id, comps) {
                    var comp2 = findComp(id, comps);
                    if (comp2) {
                      if (!comp2.layers.__used) {
                        comp2.layers.__used = true;
                        return comp2.layers;
                      }
                      return JSON.parse(JSON.stringify(comp2.layers));
                    }
                    return null;
                  }
                  function completeShapes(arr) {
                    var i;
                    var len = arr.length;
                    var j;
                    var jLen;
                    for (i = len - 1; i >= 0; i -= 1) {
                      if (arr[i].ty === "sh") {
                        if (arr[i].ks.k.i) {
                          convertPathsToAbsoluteValues(arr[i].ks.k);
                        } else {
                          jLen = arr[i].ks.k.length;
                          for (j = 0; j < jLen; j += 1) {
                            if (arr[i].ks.k[j].s) {
                              convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                            }
                            if (arr[i].ks.k[j].e) {
                              convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                            }
                          }
                        }
                      } else if (arr[i].ty === "gr") {
                        completeShapes(arr[i].it);
                      }
                    }
                  }
                  function convertPathsToAbsoluteValues(path) {
                    var i;
                    var len = path.i.length;
                    for (i = 0; i < len; i += 1) {
                      path.i[i][0] += path.v[i][0];
                      path.i[i][1] += path.v[i][1];
                      path.o[i][0] += path.v[i][0];
                      path.o[i][1] += path.v[i][1];
                    }
                  }
                  function checkVersion(minimum, animVersionString) {
                    var animVersion = animVersionString ? animVersionString.split(".") : [100, 100, 100];
                    if (minimum[0] > animVersion[0]) {
                      return true;
                    }
                    if (animVersion[0] > minimum[0]) {
                      return false;
                    }
                    if (minimum[1] > animVersion[1]) {
                      return true;
                    }
                    if (animVersion[1] > minimum[1]) {
                      return false;
                    }
                    if (minimum[2] > animVersion[2]) {
                      return true;
                    }
                    if (animVersion[2] > minimum[2]) {
                      return false;
                    }
                    return null;
                  }
                  var checkText = /* @__PURE__ */ function() {
                    var minimumVersion = [4, 4, 14];
                    function updateTextLayer(textLayer) {
                      var documentData = textLayer.t.d;
                      textLayer.t.d = {
                        k: [{
                          s: documentData,
                          t: 0
                        }]
                      };
                    }
                    function iterateLayers(layers) {
                      var i;
                      var len = layers.length;
                      for (i = 0; i < len; i += 1) {
                        if (layers[i].ty === 5) {
                          updateTextLayer(layers[i]);
                        }
                      }
                    }
                    return function(animationData2) {
                      if (checkVersion(minimumVersion, animationData2.v)) {
                        iterateLayers(animationData2.layers);
                        if (animationData2.assets) {
                          var i;
                          var len = animationData2.assets.length;
                          for (i = 0; i < len; i += 1) {
                            if (animationData2.assets[i].layers) {
                              iterateLayers(animationData2.assets[i].layers);
                            }
                          }
                        }
                      }
                    };
                  }();
                  var checkChars = /* @__PURE__ */ function() {
                    var minimumVersion = [4, 7, 99];
                    return function(animationData2) {
                      if (animationData2.chars && !checkVersion(minimumVersion, animationData2.v)) {
                        var i;
                        var len = animationData2.chars.length;
                        for (i = 0; i < len; i += 1) {
                          var charData = animationData2.chars[i];
                          if (charData.data && charData.data.shapes) {
                            completeShapes(charData.data.shapes);
                            charData.data.ip = 0;
                            charData.data.op = 99999;
                            charData.data.st = 0;
                            charData.data.sr = 1;
                            charData.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            };
                            if (!animationData2.chars[i].t) {
                              charData.data.shapes.push({
                                ty: "no"
                              });
                              charData.data.shapes[0].it.push({
                                p: {
                                  k: [0, 0],
                                  a: 0
                                },
                                s: {
                                  k: [100, 100],
                                  a: 0
                                },
                                a: {
                                  k: [0, 0],
                                  a: 0
                                },
                                r: {
                                  k: 0,
                                  a: 0
                                },
                                o: {
                                  k: 100,
                                  a: 0
                                },
                                sk: {
                                  k: 0,
                                  a: 0
                                },
                                sa: {
                                  k: 0,
                                  a: 0
                                },
                                ty: "tr"
                              });
                            }
                          }
                        }
                      }
                    };
                  }();
                  var checkPathProperties = /* @__PURE__ */ function() {
                    var minimumVersion = [5, 7, 15];
                    function updateTextLayer(textLayer) {
                      var pathData = textLayer.t.p;
                      if (typeof pathData.a === "number") {
                        pathData.a = {
                          a: 0,
                          k: pathData.a
                        };
                      }
                      if (typeof pathData.p === "number") {
                        pathData.p = {
                          a: 0,
                          k: pathData.p
                        };
                      }
                      if (typeof pathData.r === "number") {
                        pathData.r = {
                          a: 0,
                          k: pathData.r
                        };
                      }
                    }
                    function iterateLayers(layers) {
                      var i;
                      var len = layers.length;
                      for (i = 0; i < len; i += 1) {
                        if (layers[i].ty === 5) {
                          updateTextLayer(layers[i]);
                        }
                      }
                    }
                    return function(animationData2) {
                      if (checkVersion(minimumVersion, animationData2.v)) {
                        iterateLayers(animationData2.layers);
                        if (animationData2.assets) {
                          var i;
                          var len = animationData2.assets.length;
                          for (i = 0; i < len; i += 1) {
                            if (animationData2.assets[i].layers) {
                              iterateLayers(animationData2.assets[i].layers);
                            }
                          }
                        }
                      }
                    };
                  }();
                  var checkColors = /* @__PURE__ */ function() {
                    var minimumVersion = [4, 1, 9];
                    function iterateShapes(shapes) {
                      var i;
                      var len = shapes.length;
                      var j;
                      var jLen;
                      for (i = 0; i < len; i += 1) {
                        if (shapes[i].ty === "gr") {
                          iterateShapes(shapes[i].it);
                        } else if (shapes[i].ty === "fl" || shapes[i].ty === "st") {
                          if (shapes[i].c.k && shapes[i].c.k[0].i) {
                            jLen = shapes[i].c.k.length;
                            for (j = 0; j < jLen; j += 1) {
                              if (shapes[i].c.k[j].s) {
                                shapes[i].c.k[j].s[0] /= 255;
                                shapes[i].c.k[j].s[1] /= 255;
                                shapes[i].c.k[j].s[2] /= 255;
                                shapes[i].c.k[j].s[3] /= 255;
                              }
                              if (shapes[i].c.k[j].e) {
                                shapes[i].c.k[j].e[0] /= 255;
                                shapes[i].c.k[j].e[1] /= 255;
                                shapes[i].c.k[j].e[2] /= 255;
                                shapes[i].c.k[j].e[3] /= 255;
                              }
                            }
                          } else {
                            shapes[i].c.k[0] /= 255;
                            shapes[i].c.k[1] /= 255;
                            shapes[i].c.k[2] /= 255;
                            shapes[i].c.k[3] /= 255;
                          }
                        }
                      }
                    }
                    function iterateLayers(layers) {
                      var i;
                      var len = layers.length;
                      for (i = 0; i < len; i += 1) {
                        if (layers[i].ty === 4) {
                          iterateShapes(layers[i].shapes);
                        }
                      }
                    }
                    return function(animationData2) {
                      if (checkVersion(minimumVersion, animationData2.v)) {
                        iterateLayers(animationData2.layers);
                        if (animationData2.assets) {
                          var i;
                          var len = animationData2.assets.length;
                          for (i = 0; i < len; i += 1) {
                            if (animationData2.assets[i].layers) {
                              iterateLayers(animationData2.assets[i].layers);
                            }
                          }
                        }
                      }
                    };
                  }();
                  var checkShapes = /* @__PURE__ */ function() {
                    var minimumVersion = [4, 4, 18];
                    function completeClosingShapes(arr) {
                      var i;
                      var len = arr.length;
                      var j;
                      var jLen;
                      for (i = len - 1; i >= 0; i -= 1) {
                        if (arr[i].ty === "sh") {
                          if (arr[i].ks.k.i) {
                            arr[i].ks.k.c = arr[i].closed;
                          } else {
                            jLen = arr[i].ks.k.length;
                            for (j = 0; j < jLen; j += 1) {
                              if (arr[i].ks.k[j].s) {
                                arr[i].ks.k[j].s[0].c = arr[i].closed;
                              }
                              if (arr[i].ks.k[j].e) {
                                arr[i].ks.k[j].e[0].c = arr[i].closed;
                              }
                            }
                          }
                        } else if (arr[i].ty === "gr") {
                          completeClosingShapes(arr[i].it);
                        }
                      }
                    }
                    function iterateLayers(layers) {
                      var layerData;
                      var i;
                      var len = layers.length;
                      var j;
                      var jLen;
                      var k;
                      var kLen;
                      for (i = 0; i < len; i += 1) {
                        layerData = layers[i];
                        if (layerData.hasMask) {
                          var maskProps = layerData.masksProperties;
                          jLen = maskProps.length;
                          for (j = 0; j < jLen; j += 1) {
                            if (maskProps[j].pt.k.i) {
                              maskProps[j].pt.k.c = maskProps[j].cl;
                            } else {
                              kLen = maskProps[j].pt.k.length;
                              for (k = 0; k < kLen; k += 1) {
                                if (maskProps[j].pt.k[k].s) {
                                  maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                                }
                                if (maskProps[j].pt.k[k].e) {
                                  maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                                }
                              }
                            }
                          }
                        }
                        if (layerData.ty === 4) {
                          completeClosingShapes(layerData.shapes);
                        }
                      }
                    }
                    return function(animationData2) {
                      if (checkVersion(minimumVersion, animationData2.v)) {
                        iterateLayers(animationData2.layers);
                        if (animationData2.assets) {
                          var i;
                          var len = animationData2.assets.length;
                          for (i = 0; i < len; i += 1) {
                            if (animationData2.assets[i].layers) {
                              iterateLayers(animationData2.assets[i].layers);
                            }
                          }
                        }
                      }
                    };
                  }();
                  function completeData(animationData2) {
                    if (animationData2.__complete) {
                      return;
                    }
                    checkColors(animationData2);
                    checkText(animationData2);
                    checkChars(animationData2);
                    checkPathProperties(animationData2);
                    checkShapes(animationData2);
                    completeLayers(animationData2.layers, animationData2.assets);
                    completeChars(animationData2.chars, animationData2.assets);
                    animationData2.__complete = true;
                  }
                  function completeText(data2) {
                    if (data2.t.a.length === 0 && !("m" in data2.t.p)) {
                    }
                  }
                  var moduleOb = {};
                  moduleOb.completeData = completeData;
                  moduleOb.checkColors = checkColors;
                  moduleOb.checkChars = checkChars;
                  moduleOb.checkPathProperties = checkPathProperties;
                  moduleOb.checkShapes = checkShapes;
                  moduleOb.completeLayers = completeLayers;
                  return moduleOb;
                }
                if (!_workerSelf.dataManager) {
                  _workerSelf.dataManager = dataFunctionManager();
                }
                if (!_workerSelf.assetLoader) {
                  _workerSelf.assetLoader = /* @__PURE__ */ function() {
                    function formatResponse(xhr) {
                      var contentTypeHeader = xhr.getResponseHeader("content-type");
                      if (contentTypeHeader && xhr.responseType === "json" && contentTypeHeader.indexOf("json") !== -1) {
                        return xhr.response;
                      }
                      if (xhr.response && _typeof$5(xhr.response) === "object") {
                        return xhr.response;
                      }
                      if (xhr.response && typeof xhr.response === "string") {
                        return JSON.parse(xhr.response);
                      }
                      if (xhr.responseText) {
                        return JSON.parse(xhr.responseText);
                      }
                      return null;
                    }
                    function loadAsset(path, fullPath, callback, errorCallback) {
                      var response;
                      var xhr = new XMLHttpRequest();
                      try {
                        xhr.responseType = "json";
                      } catch (err) {
                      }
                      xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                          if (xhr.status === 200) {
                            response = formatResponse(xhr);
                            callback(response);
                          } else {
                            try {
                              response = formatResponse(xhr);
                              callback(response);
                            } catch (err) {
                              if (errorCallback) {
                                errorCallback(err);
                              }
                            }
                          }
                        }
                      };
                      try {
                        xhr.open(["G", "E", "T"].join(""), path, true);
                      } catch (error) {
                        xhr.open(["G", "E", "T"].join(""), fullPath + "/" + path, true);
                      }
                      xhr.send();
                    }
                    return {
                      load: loadAsset
                    };
                  }();
                }
                if (e.data.type === "loadAnimation") {
                  _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function(data2) {
                    _workerSelf.dataManager.completeData(data2);
                    _workerSelf.postMessage({
                      id: e.data.id,
                      payload: data2,
                      status: "success"
                    });
                  }, function() {
                    _workerSelf.postMessage({
                      id: e.data.id,
                      status: "error"
                    });
                  });
                } else if (e.data.type === "complete") {
                  var animation = e.data.animation;
                  _workerSelf.dataManager.completeData(animation);
                  _workerSelf.postMessage({
                    id: e.data.id,
                    payload: animation,
                    status: "success"
                  });
                } else if (e.data.type === "loadData") {
                  _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function(data2) {
                    _workerSelf.postMessage({
                      id: e.data.id,
                      payload: data2,
                      status: "success"
                    });
                  }, function() {
                    _workerSelf.postMessage({
                      id: e.data.id,
                      status: "error"
                    });
                  });
                }
              });
              workerInstance.onmessage = function(event) {
                var data2 = event.data;
                var id = data2.id;
                var process = processes[id];
                processes[id] = null;
                if (data2.status === "success") {
                  process.onComplete(data2.payload);
                } else if (process.onError) {
                  process.onError();
                }
              };
            }
          }
          function createProcess(onComplete, onError) {
            _counterId += 1;
            var id = "processId_" + _counterId;
            processes[id] = {
              onComplete,
              onError
            };
            return id;
          }
          function loadAnimation2(path, onComplete, onError) {
            setupWorker();
            var processId = createProcess(onComplete, onError);
            workerInstance.postMessage({
              type: "loadAnimation",
              path,
              fullPath: window.location.origin + window.location.pathname,
              id: processId
            });
          }
          function loadData(path, onComplete, onError) {
            setupWorker();
            var processId = createProcess(onComplete, onError);
            workerInstance.postMessage({
              type: "loadData",
              path,
              fullPath: window.location.origin + window.location.pathname,
              id: processId
            });
          }
          function completeAnimation(anim, onComplete, onError) {
            setupWorker();
            var processId = createProcess(onComplete, onError);
            workerInstance.postMessage({
              type: "complete",
              animation: anim,
              id: processId
            });
          }
          return {
            loadAnimation: loadAnimation2,
            loadData,
            completeAnimation
          };
        }();
        var ImagePreloader = function() {
          var proxyImage = function() {
            var canvas = createTag("canvas");
            canvas.width = 1;
            canvas.height = 1;
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "rgba(0,0,0,0)";
            ctx.fillRect(0, 0, 1, 1);
            return canvas;
          }();
          function imageLoaded() {
            this.loadedAssets += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
              if (this.imagesLoadedCb) {
                this.imagesLoadedCb(null);
              }
            }
          }
          function footageLoaded() {
            this.loadedFootagesCount += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
              if (this.imagesLoadedCb) {
                this.imagesLoadedCb(null);
              }
            }
          }
          function getAssetsPath(assetData, assetsPath, originalPath) {
            var path = "";
            if (assetData.e) {
              path = assetData.p;
            } else if (assetsPath) {
              var imagePath = assetData.p;
              if (imagePath.indexOf("images/") !== -1) {
                imagePath = imagePath.split("/")[1];
              }
              path = assetsPath + imagePath;
            } else {
              path = originalPath;
              path += assetData.u ? assetData.u : "";
              path += assetData.p;
            }
            return path;
          }
          function testImageLoaded(img) {
            var _count = 0;
            var intervalId = setInterval(function() {
              var box = img.getBBox();
              if (box.width || _count > 500) {
                this._imageLoaded();
                clearInterval(intervalId);
              }
              _count += 1;
            }.bind(this), 50);
          }
          function createImageData(assetData) {
            var path = getAssetsPath(assetData, this.assetsPath, this.path);
            var img = createNS("image");
            if (isSafari) {
              this.testImageLoaded(img);
            } else {
              img.addEventListener("load", this._imageLoaded, false);
            }
            img.addEventListener("error", function() {
              ob2.img = proxyImage;
              this._imageLoaded();
            }.bind(this), false);
            img.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
            if (this._elementHelper.append) {
              this._elementHelper.append(img);
            } else {
              this._elementHelper.appendChild(img);
            }
            var ob2 = {
              img,
              assetData
            };
            return ob2;
          }
          function createImgData(assetData) {
            var path = getAssetsPath(assetData, this.assetsPath, this.path);
            var img = createTag("img");
            img.crossOrigin = "anonymous";
            img.addEventListener("load", this._imageLoaded, false);
            img.addEventListener("error", function() {
              ob2.img = proxyImage;
              this._imageLoaded();
            }.bind(this), false);
            img.src = path;
            var ob2 = {
              img,
              assetData
            };
            return ob2;
          }
          function createFootageData(data2) {
            var ob2 = {
              assetData: data2
            };
            var path = getAssetsPath(data2, this.assetsPath, this.path);
            dataManager.loadData(path, function(footageData) {
              ob2.img = footageData;
              this._footageLoaded();
            }.bind(this), function() {
              ob2.img = {};
              this._footageLoaded();
            }.bind(this));
            return ob2;
          }
          function loadAssets(assets, cb) {
            this.imagesLoadedCb = cb;
            var i;
            var len = assets.length;
            for (i = 0; i < len; i += 1) {
              if (!assets[i].layers) {
                if (!assets[i].t || assets[i].t === "seq") {
                  this.totalImages += 1;
                  this.images.push(this._createImageData(assets[i]));
                } else if (assets[i].t === 3) {
                  this.totalFootages += 1;
                  this.images.push(this.createFootageData(assets[i]));
                }
              }
            }
          }
          function setPath(path) {
            this.path = path || "";
          }
          function setAssetsPath(path) {
            this.assetsPath = path || "";
          }
          function getAsset(assetData) {
            var i = 0;
            var len = this.images.length;
            while (i < len) {
              if (this.images[i].assetData === assetData) {
                return this.images[i].img;
              }
              i += 1;
            }
            return null;
          }
          function destroy() {
            this.imagesLoadedCb = null;
            this.images.length = 0;
          }
          function loadedImages() {
            return this.totalImages === this.loadedAssets;
          }
          function loadedFootages() {
            return this.totalFootages === this.loadedFootagesCount;
          }
          function setCacheType(type, elementHelper) {
            if (type === "svg") {
              this._elementHelper = elementHelper;
              this._createImageData = this.createImageData.bind(this);
            } else {
              this._createImageData = this.createImgData.bind(this);
            }
          }
          function ImagePreloaderFactory() {
            this._imageLoaded = imageLoaded.bind(this);
            this._footageLoaded = footageLoaded.bind(this);
            this.testImageLoaded = testImageLoaded.bind(this);
            this.createFootageData = createFootageData.bind(this);
            this.assetsPath = "";
            this.path = "";
            this.totalImages = 0;
            this.totalFootages = 0;
            this.loadedAssets = 0;
            this.loadedFootagesCount = 0;
            this.imagesLoadedCb = null;
            this.images = [];
          }
          ImagePreloaderFactory.prototype = {
            loadAssets,
            setAssetsPath,
            setPath,
            loadedImages,
            loadedFootages,
            destroy,
            getAsset,
            createImgData,
            createImageData,
            imageLoaded,
            footageLoaded,
            setCacheType
          };
          return ImagePreloaderFactory;
        }();
        function BaseEvent() {
        }
        BaseEvent.prototype = {
          triggerEvent: function triggerEvent(eventName, args) {
            if (this._cbs[eventName]) {
              var callbacks = this._cbs[eventName];
              for (var i = 0; i < callbacks.length; i += 1) {
                callbacks[i](args);
              }
            }
          },
          addEventListener: function addEventListener2(eventName, callback) {
            if (!this._cbs[eventName]) {
              this._cbs[eventName] = [];
            }
            this._cbs[eventName].push(callback);
            return function() {
              this.removeEventListener(eventName, callback);
            }.bind(this);
          },
          removeEventListener: function removeEventListener2(eventName, callback) {
            if (!callback) {
              this._cbs[eventName] = null;
            } else if (this._cbs[eventName]) {
              var i = 0;
              var len = this._cbs[eventName].length;
              while (i < len) {
                if (this._cbs[eventName][i] === callback) {
                  this._cbs[eventName].splice(i, 1);
                  i -= 1;
                  len -= 1;
                }
                i += 1;
              }
              if (!this._cbs[eventName].length) {
                this._cbs[eventName] = null;
              }
            }
          }
        };
        var markerParser = /* @__PURE__ */ function() {
          function parsePayloadLines(payload) {
            var lines = payload.split("\r\n");
            var keys = {};
            var line;
            var keysCount = 0;
            for (var i = 0; i < lines.length; i += 1) {
              line = lines[i].split(":");
              if (line.length === 2) {
                keys[line[0]] = line[1].trim();
                keysCount += 1;
              }
            }
            if (keysCount === 0) {
              throw new Error();
            }
            return keys;
          }
          return function(_markers) {
            var markers = [];
            for (var i = 0; i < _markers.length; i += 1) {
              var _marker = _markers[i];
              var markerData = {
                time: _marker.tm,
                duration: _marker.dr
              };
              try {
                markerData.payload = JSON.parse(_markers[i].cm);
              } catch (_) {
                try {
                  markerData.payload = parsePayloadLines(_markers[i].cm);
                } catch (__) {
                  markerData.payload = {
                    name: _markers[i].cm
                  };
                }
              }
              markers.push(markerData);
            }
            return markers;
          };
        }();
        var ProjectInterface = /* @__PURE__ */ function() {
          function registerComposition(comp2) {
            this.compositions.push(comp2);
          }
          return function() {
            function _thisProjectFunction(name2) {
              var i = 0;
              var len = this.compositions.length;
              while (i < len) {
                if (this.compositions[i].data && this.compositions[i].data.nm === name2) {
                  if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
                    this.compositions[i].prepareFrame(this.currentFrame);
                  }
                  return this.compositions[i].compInterface;
                }
                i += 1;
              }
              return null;
            }
            _thisProjectFunction.compositions = [];
            _thisProjectFunction.currentFrame = 0;
            _thisProjectFunction.registerComposition = registerComposition;
            return _thisProjectFunction;
          };
        }();
        var renderers = {};
        var registerRenderer = function registerRenderer2(key2, value2) {
          renderers[key2] = value2;
        };
        function getRenderer(key2) {
          return renderers[key2];
        }
        function getRegisteredRenderer() {
          if (renderers.canvas) {
            return "canvas";
          }
          for (var key2 in renderers) {
            if (renderers[key2]) {
              return key2;
            }
          }
          return "";
        }
        function _typeof$4(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$4 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$4 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$4(obj);
        }
        var AnimationItem = function AnimationItem2() {
          this._cbs = [];
          this.name = "";
          this.path = "";
          this.isLoaded = false;
          this.currentFrame = 0;
          this.currentRawFrame = 0;
          this.firstFrame = 0;
          this.totalFrames = 0;
          this.frameRate = 0;
          this.frameMult = 0;
          this.playSpeed = 1;
          this.playDirection = 1;
          this.playCount = 0;
          this.animationData = {};
          this.assets = [];
          this.isPaused = true;
          this.autoplay = false;
          this.loop = true;
          this.renderer = null;
          this.animationID = createElementID();
          this.assetsPath = "";
          this.timeCompleted = 0;
          this.segmentPos = 0;
          this.isSubframeEnabled = getSubframeEnabled();
          this.segments = [];
          this._idle = true;
          this._completedLoop = false;
          this.projectInterface = ProjectInterface();
          this.imagePreloader = new ImagePreloader();
          this.audioController = audioControllerFactory();
          this.markers = [];
          this.configAnimation = this.configAnimation.bind(this);
          this.onSetupError = this.onSetupError.bind(this);
          this.onSegmentComplete = this.onSegmentComplete.bind(this);
          this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
          this.expressionsPlugin = getExpressionsPlugin();
        };
        extendPrototype([BaseEvent], AnimationItem);
        AnimationItem.prototype.setParams = function(params) {
          if (params.wrapper || params.container) {
            this.wrapper = params.wrapper || params.container;
          }
          var animType = "svg";
          if (params.animType) {
            animType = params.animType;
          } else if (params.renderer) {
            animType = params.renderer;
          }
          var RendererClass = getRenderer(animType);
          this.renderer = new RendererClass(this, params.rendererSettings);
          this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
          this.renderer.setProjectInterface(this.projectInterface);
          this.animType = animType;
          if (params.loop === "" || params.loop === null || params.loop === void 0 || params.loop === true) {
            this.loop = true;
          } else if (params.loop === false) {
            this.loop = false;
          } else {
            this.loop = parseInt(params.loop, 10);
          }
          this.autoplay = "autoplay" in params ? params.autoplay : true;
          this.name = params.name ? params.name : "";
          this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, "autoloadSegments") ? params.autoloadSegments : true;
          this.assetsPath = params.assetsPath;
          this.initialSegment = params.initialSegment;
          if (params.audioFactory) {
            this.audioController.setAudioFactory(params.audioFactory);
          }
          if (params.animationData) {
            this.setupAnimation(params.animationData);
          } else if (params.path) {
            if (params.path.lastIndexOf("\\") !== -1) {
              this.path = params.path.substr(0, params.path.lastIndexOf("\\") + 1);
            } else {
              this.path = params.path.substr(0, params.path.lastIndexOf("/") + 1);
            }
            this.fileName = params.path.substr(params.path.lastIndexOf("/") + 1);
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
            dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
          }
        };
        AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed");
        };
        AnimationItem.prototype.setupAnimation = function(data2) {
          dataManager.completeAnimation(data2, this.configAnimation);
        };
        AnimationItem.prototype.setData = function(wrapper, animationData2) {
          if (animationData2) {
            if (_typeof$4(animationData2) !== "object") {
              animationData2 = JSON.parse(animationData2);
            }
          }
          var params = {
            wrapper,
            animationData: animationData2
          };
          var wrapperAttributes = wrapper.attributes;
          params.path = wrapperAttributes.getNamedItem("data-animation-path") ? wrapperAttributes.getNamedItem("data-animation-path").value : wrapperAttributes.getNamedItem("data-bm-path") ? wrapperAttributes.getNamedItem("data-bm-path").value : wrapperAttributes.getNamedItem("bm-path") ? wrapperAttributes.getNamedItem("bm-path").value : "";
          params.animType = wrapperAttributes.getNamedItem("data-anim-type") ? wrapperAttributes.getNamedItem("data-anim-type").value : wrapperAttributes.getNamedItem("data-bm-type") ? wrapperAttributes.getNamedItem("data-bm-type").value : wrapperAttributes.getNamedItem("bm-type") ? wrapperAttributes.getNamedItem("bm-type").value : wrapperAttributes.getNamedItem("data-bm-renderer") ? wrapperAttributes.getNamedItem("data-bm-renderer").value : wrapperAttributes.getNamedItem("bm-renderer") ? wrapperAttributes.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var loop = wrapperAttributes.getNamedItem("data-anim-loop") ? wrapperAttributes.getNamedItem("data-anim-loop").value : wrapperAttributes.getNamedItem("data-bm-loop") ? wrapperAttributes.getNamedItem("data-bm-loop").value : wrapperAttributes.getNamedItem("bm-loop") ? wrapperAttributes.getNamedItem("bm-loop").value : "";
          if (loop === "false") {
            params.loop = false;
          } else if (loop === "true") {
            params.loop = true;
          } else if (loop !== "") {
            params.loop = parseInt(loop, 10);
          }
          var autoplay = wrapperAttributes.getNamedItem("data-anim-autoplay") ? wrapperAttributes.getNamedItem("data-anim-autoplay").value : wrapperAttributes.getNamedItem("data-bm-autoplay") ? wrapperAttributes.getNamedItem("data-bm-autoplay").value : wrapperAttributes.getNamedItem("bm-autoplay") ? wrapperAttributes.getNamedItem("bm-autoplay").value : true;
          params.autoplay = autoplay !== "false";
          params.name = wrapperAttributes.getNamedItem("data-name") ? wrapperAttributes.getNamedItem("data-name").value : wrapperAttributes.getNamedItem("data-bm-name") ? wrapperAttributes.getNamedItem("data-bm-name").value : wrapperAttributes.getNamedItem("bm-name") ? wrapperAttributes.getNamedItem("bm-name").value : "";
          var prerender = wrapperAttributes.getNamedItem("data-anim-prerender") ? wrapperAttributes.getNamedItem("data-anim-prerender").value : wrapperAttributes.getNamedItem("data-bm-prerender") ? wrapperAttributes.getNamedItem("data-bm-prerender").value : wrapperAttributes.getNamedItem("bm-prerender") ? wrapperAttributes.getNamedItem("bm-prerender").value : "";
          if (prerender === "false") {
            params.prerender = false;
          }
          if (!params.path) {
            this.trigger("destroy");
          } else {
            this.setParams(params);
          }
        };
        AnimationItem.prototype.includeLayers = function(data2) {
          if (data2.op > this.animationData.op) {
            this.animationData.op = data2.op;
            this.totalFrames = Math.floor(data2.op - this.animationData.ip);
          }
          var layers = this.animationData.layers;
          var i;
          var len = layers.length;
          var newLayers = data2.layers;
          var j;
          var jLen = newLayers.length;
          for (j = 0; j < jLen; j += 1) {
            i = 0;
            while (i < len) {
              if (layers[i].id === newLayers[j].id) {
                layers[i] = newLayers[j];
                break;
              }
              i += 1;
            }
          }
          if (data2.chars || data2.fonts) {
            this.renderer.globalData.fontManager.addChars(data2.chars);
            this.renderer.globalData.fontManager.addFonts(data2.fonts, this.renderer.globalData.defs);
          }
          if (data2.assets) {
            len = data2.assets.length;
            for (i = 0; i < len; i += 1) {
              this.animationData.assets.push(data2.assets[i]);
            }
          }
          this.animationData.__complete = false;
          dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
        };
        AnimationItem.prototype.onSegmentComplete = function(data2) {
          this.animationData = data2;
          var expressionsPlugin2 = getExpressionsPlugin();
          if (expressionsPlugin2) {
            expressionsPlugin2.initExpressions(this);
          }
          this.loadNextSegment();
        };
        AnimationItem.prototype.loadNextSegment = function() {
          var segments = this.animationData.segments;
          if (!segments || segments.length === 0 || !this.autoloadSegments) {
            this.trigger("data_ready");
            this.timeCompleted = this.totalFrames;
            return;
          }
          var segment = segments.shift();
          this.timeCompleted = segment.time * this.frameRate;
          var segmentPath = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1;
          dataManager.loadData(segmentPath, this.includeLayers.bind(this), function() {
            this.trigger("data_failed");
          }.bind(this));
        };
        AnimationItem.prototype.loadSegments = function() {
          var segments = this.animationData.segments;
          if (!segments) {
            this.timeCompleted = this.totalFrames;
          }
          this.loadNextSegment();
        };
        AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images");
          this.checkLoaded();
        };
        AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath);
          this.imagePreloader.setPath(this.path);
          this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        };
        AnimationItem.prototype.configAnimation = function(animData) {
          if (!this.renderer) {
            return;
          }
          try {
            this.animationData = animData;
            if (this.initialSegment) {
              this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
              this.firstFrame = Math.round(this.initialSegment[0]);
            } else {
              this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
              this.firstFrame = Math.round(this.animationData.ip);
            }
            this.renderer.configAnimation(animData);
            if (!animData.assets) {
              animData.assets = [];
            }
            this.assets = this.animationData.assets;
            this.frameRate = this.animationData.fr;
            this.frameMult = this.animationData.fr / 1e3;
            this.renderer.searchExtraCompositions(animData.assets);
            this.markers = markerParser(animData.markers || []);
            this.trigger("config_ready");
            this.preloadImages();
            this.loadSegments();
            this.updaFrameModifier();
            this.waitForFontsLoaded();
            if (this.isPaused) {
              this.audioController.pause();
            }
          } catch (error) {
            this.triggerConfigError(error);
          }
        };
        AnimationItem.prototype.waitForFontsLoaded = function() {
          if (!this.renderer) {
            return;
          }
          if (this.renderer.globalData.fontManager.isLoaded) {
            this.checkLoaded();
          } else {
            setTimeout(this.waitForFontsLoaded.bind(this), 20);
          }
        };
        AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
            this.isLoaded = true;
            var expressionsPlugin2 = getExpressionsPlugin();
            if (expressionsPlugin2) {
              expressionsPlugin2.initExpressions(this);
            }
            this.renderer.initItems();
            setTimeout(function() {
              this.trigger("DOMLoaded");
            }.bind(this), 0);
            this.gotoFrame();
            if (this.autoplay) {
              this.play();
            }
          }
        };
        AnimationItem.prototype.resize = function(width2, height2) {
          var _width2 = typeof width2 === "number" ? width2 : void 0;
          var _height2 = typeof height2 === "number" ? height2 : void 0;
          this.renderer.updateContainerSize(_width2, _height2);
        };
        AnimationItem.prototype.setSubframe = function(flag) {
          this.isSubframeEnabled = !!flag;
        };
        AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
          if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
            this.currentFrame = this.timeCompleted;
          }
          this.trigger("enterFrame");
          this.renderFrame();
          this.trigger("drawnFrame");
        };
        AnimationItem.prototype.renderFrame = function() {
          if (this.isLoaded === false || !this.renderer) {
            return;
          }
          try {
            if (this.expressionsPlugin) {
              this.expressionsPlugin.resetFrame();
            }
            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
          } catch (error) {
            this.triggerRenderFrameError(error);
          }
        };
        AnimationItem.prototype.play = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          if (this.isPaused === true) {
            this.isPaused = false;
            this.trigger("_play");
            this.audioController.resume();
            if (this._idle) {
              this._idle = false;
              this.trigger("_active");
            }
          }
        };
        AnimationItem.prototype.pause = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          if (this.isPaused === false) {
            this.isPaused = true;
            this.trigger("_pause");
            this._idle = true;
            this.trigger("_idle");
            this.audioController.pause();
          }
        };
        AnimationItem.prototype.togglePause = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          if (this.isPaused === true) {
            this.play();
          } else {
            this.pause();
          }
        };
        AnimationItem.prototype.stop = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          this.pause();
          this.playCount = 0;
          this._completedLoop = false;
          this.setCurrentRawFrameValue(0);
        };
        AnimationItem.prototype.getMarkerData = function(markerName) {
          var marker;
          for (var i = 0; i < this.markers.length; i += 1) {
            marker = this.markers[i];
            if (marker.payload && marker.payload.name === markerName) {
              return marker;
            }
          }
          return null;
        };
        AnimationItem.prototype.goToAndStop = function(value2, isFrame, name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          var numValue = Number(value2);
          if (isNaN(numValue)) {
            var marker = this.getMarkerData(value2);
            if (marker) {
              this.goToAndStop(marker.time, true);
            }
          } else if (isFrame) {
            this.setCurrentRawFrameValue(value2);
          } else {
            this.setCurrentRawFrameValue(value2 * this.frameModifier);
          }
          this.pause();
        };
        AnimationItem.prototype.goToAndPlay = function(value2, isFrame, name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          var numValue = Number(value2);
          if (isNaN(numValue)) {
            var marker = this.getMarkerData(value2);
            if (marker) {
              if (!marker.duration) {
                this.goToAndStop(marker.time, true);
              } else {
                this.playSegments([marker.time, marker.time + marker.duration], true);
              }
            }
          } else {
            this.goToAndStop(numValue, isFrame, name2);
          }
          this.play();
        };
        AnimationItem.prototype.advanceTime = function(value2) {
          if (this.isPaused === true || this.isLoaded === false) {
            return;
          }
          var nextValue = this.currentRawFrame + value2 * this.frameModifier;
          var _isComplete = false;
          if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
            if (!this.loop || this.playCount === this.loop) {
              if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
                _isComplete = true;
                nextValue = this.totalFrames - 1;
              }
            } else if (nextValue >= this.totalFrames) {
              this.playCount += 1;
              if (!this.checkSegments(nextValue % this.totalFrames)) {
                this.setCurrentRawFrameValue(nextValue % this.totalFrames);
                this._completedLoop = true;
                this.trigger("loopComplete");
              }
            } else {
              this.setCurrentRawFrameValue(nextValue);
            }
          } else if (nextValue < 0) {
            if (!this.checkSegments(nextValue % this.totalFrames)) {
              if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
                this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);
                if (!this._completedLoop) {
                  this._completedLoop = true;
                } else {
                  this.trigger("loopComplete");
                }
              } else {
                _isComplete = true;
                nextValue = 0;
              }
            }
          } else {
            this.setCurrentRawFrameValue(nextValue);
          }
          if (_isComplete) {
            this.setCurrentRawFrameValue(nextValue);
            this.pause();
            this.trigger("complete");
          }
        };
        AnimationItem.prototype.adjustSegment = function(arr, offset) {
          this.playCount = 0;
          if (arr[1] < arr[0]) {
            if (this.frameModifier > 0) {
              if (this.playSpeed < 0) {
                this.setSpeed(-this.playSpeed);
              } else {
                this.setDirection(-1);
              }
            }
            this.totalFrames = arr[0] - arr[1];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = arr[1];
            this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - offset);
          } else if (arr[1] > arr[0]) {
            if (this.frameModifier < 0) {
              if (this.playSpeed < 0) {
                this.setSpeed(-this.playSpeed);
              } else {
                this.setDirection(1);
              }
            }
            this.totalFrames = arr[1] - arr[0];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = arr[0];
            this.setCurrentRawFrameValue(1e-3 + offset);
          }
          this.trigger("segmentStart");
        };
        AnimationItem.prototype.setSegment = function(init4, end) {
          var pendingFrame = -1;
          if (this.isPaused) {
            if (this.currentRawFrame + this.firstFrame < init4) {
              pendingFrame = init4;
            } else if (this.currentRawFrame + this.firstFrame > end) {
              pendingFrame = end - init4;
            }
          }
          this.firstFrame = init4;
          this.totalFrames = end - init4;
          this.timeCompleted = this.totalFrames;
          if (pendingFrame !== -1) {
            this.goToAndStop(pendingFrame, true);
          }
        };
        AnimationItem.prototype.playSegments = function(arr, forceFlag) {
          if (forceFlag) {
            this.segments.length = 0;
          }
          if (_typeof$4(arr[0]) === "object") {
            var i;
            var len = arr.length;
            for (i = 0; i < len; i += 1) {
              this.segments.push(arr[i]);
            }
          } else {
            this.segments.push(arr);
          }
          if (this.segments.length && forceFlag) {
            this.adjustSegment(this.segments.shift(), 0);
          }
          if (this.isPaused) {
            this.play();
          }
        };
        AnimationItem.prototype.resetSegments = function(forceFlag) {
          this.segments.length = 0;
          this.segments.push([this.animationData.ip, this.animationData.op]);
          if (forceFlag) {
            this.checkSegments(0);
          }
        };
        AnimationItem.prototype.checkSegments = function(offset) {
          if (this.segments.length) {
            this.adjustSegment(this.segments.shift(), offset);
            return true;
          }
          return false;
        };
        AnimationItem.prototype.destroy = function(name2) {
          if (name2 && this.name !== name2 || !this.renderer) {
            return;
          }
          this.renderer.destroy();
          this.imagePreloader.destroy();
          this.trigger("destroy");
          this._cbs = null;
          this.onEnterFrame = null;
          this.onLoopComplete = null;
          this.onComplete = null;
          this.onSegmentStart = null;
          this.onDestroy = null;
          this.renderer = null;
          this.expressionsPlugin = null;
          this.imagePreloader = null;
          this.projectInterface = null;
        };
        AnimationItem.prototype.setCurrentRawFrameValue = function(value2) {
          this.currentRawFrame = value2;
          this.gotoFrame();
        };
        AnimationItem.prototype.setSpeed = function(val2) {
          this.playSpeed = val2;
          this.updaFrameModifier();
        };
        AnimationItem.prototype.setDirection = function(val2) {
          this.playDirection = val2 < 0 ? -1 : 1;
          this.updaFrameModifier();
        };
        AnimationItem.prototype.setLoop = function(isLooping) {
          this.loop = isLooping;
        };
        AnimationItem.prototype.setVolume = function(val2, name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          this.audioController.setVolume(val2);
        };
        AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume();
        };
        AnimationItem.prototype.mute = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          this.audioController.mute();
        };
        AnimationItem.prototype.unmute = function(name2) {
          if (name2 && this.name !== name2) {
            return;
          }
          this.audioController.unmute();
        };
        AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
          this.audioController.setRate(this.playSpeed * this.playDirection);
        };
        AnimationItem.prototype.getPath = function() {
          return this.path;
        };
        AnimationItem.prototype.getAssetsPath = function(assetData) {
          var path = "";
          if (assetData.e) {
            path = assetData.p;
          } else if (this.assetsPath) {
            var imagePath = assetData.p;
            if (imagePath.indexOf("images/") !== -1) {
              imagePath = imagePath.split("/")[1];
            }
            path = this.assetsPath + imagePath;
          } else {
            path = this.path;
            path += assetData.u ? assetData.u : "";
            path += assetData.p;
          }
          return path;
        };
        AnimationItem.prototype.getAssetData = function(id) {
          var i = 0;
          var len = this.assets.length;
          while (i < len) {
            if (id === this.assets[i].id) {
              return this.assets[i];
            }
            i += 1;
          }
          return null;
        };
        AnimationItem.prototype.hide = function() {
          this.renderer.hide();
        };
        AnimationItem.prototype.show = function() {
          this.renderer.show();
        };
        AnimationItem.prototype.getDuration = function(isFrame) {
          return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
        };
        AnimationItem.prototype.updateDocumentData = function(path, documentData, index2) {
          try {
            var element = this.renderer.getElementByPath(path);
            element.updateDocumentData(documentData, index2);
          } catch (error) {
          }
        };
        AnimationItem.prototype.trigger = function(name2) {
          if (this._cbs && this._cbs[name2]) {
            switch (name2) {
              case "enterFrame":
                this.triggerEvent(name2, new BMEnterFrameEvent(name2, this.currentFrame, this.totalFrames, this.frameModifier));
                break;
              case "drawnFrame":
                this.drawnFrameEvent.currentTime = this.currentFrame;
                this.drawnFrameEvent.totalTime = this.totalFrames;
                this.drawnFrameEvent.direction = this.frameModifier;
                this.triggerEvent(name2, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(name2, new BMCompleteLoopEvent(name2, this.loop, this.playCount, this.frameMult));
                break;
              case "complete":
                this.triggerEvent(name2, new BMCompleteEvent(name2, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(name2, new BMSegmentStartEvent(name2, this.firstFrame, this.totalFrames));
                break;
              case "destroy":
                this.triggerEvent(name2, new BMDestroyEvent(name2, this));
                break;
              default:
                this.triggerEvent(name2);
            }
          }
          if (name2 === "enterFrame" && this.onEnterFrame) {
            this.onEnterFrame.call(this, new BMEnterFrameEvent(name2, this.currentFrame, this.totalFrames, this.frameMult));
          }
          if (name2 === "loopComplete" && this.onLoopComplete) {
            this.onLoopComplete.call(this, new BMCompleteLoopEvent(name2, this.loop, this.playCount, this.frameMult));
          }
          if (name2 === "complete" && this.onComplete) {
            this.onComplete.call(this, new BMCompleteEvent(name2, this.frameMult));
          }
          if (name2 === "segmentStart" && this.onSegmentStart) {
            this.onSegmentStart.call(this, new BMSegmentStartEvent(name2, this.firstFrame, this.totalFrames));
          }
          if (name2 === "destroy" && this.onDestroy) {
            this.onDestroy.call(this, new BMDestroyEvent(name2, this));
          }
        };
        AnimationItem.prototype.triggerRenderFrameError = function(nativeError) {
          var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
          this.triggerEvent("error", error);
          if (this.onError) {
            this.onError.call(this, error);
          }
        };
        AnimationItem.prototype.triggerConfigError = function(nativeError) {
          var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
          this.triggerEvent("error", error);
          if (this.onError) {
            this.onError.call(this, error);
          }
        };
        var animationManager = function() {
          var moduleOb = {};
          var registeredAnimations = [];
          var initTime = 0;
          var len = 0;
          var playingAnimationsNum = 0;
          var _stopped = true;
          var _isFrozen = false;
          function removeElement(ev) {
            var i = 0;
            var animItem = ev.target;
            while (i < len) {
              if (registeredAnimations[i].animation === animItem) {
                registeredAnimations.splice(i, 1);
                i -= 1;
                len -= 1;
                if (!animItem.isPaused) {
                  subtractPlayingCount();
                }
              }
              i += 1;
            }
          }
          function registerAnimation(element, animationData2) {
            if (!element) {
              return null;
            }
            var i = 0;
            while (i < len) {
              if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
                return registeredAnimations[i].animation;
              }
              i += 1;
            }
            var animItem = new AnimationItem();
            setupAnimation(animItem, element);
            animItem.setData(element, animationData2);
            return animItem;
          }
          function getRegisteredAnimations() {
            var i;
            var lenAnims = registeredAnimations.length;
            var animations = [];
            for (i = 0; i < lenAnims; i += 1) {
              animations.push(registeredAnimations[i].animation);
            }
            return animations;
          }
          function addPlayingCount() {
            playingAnimationsNum += 1;
            activate();
          }
          function subtractPlayingCount() {
            playingAnimationsNum -= 1;
          }
          function setupAnimation(animItem, element) {
            animItem.addEventListener("destroy", removeElement);
            animItem.addEventListener("_active", addPlayingCount);
            animItem.addEventListener("_idle", subtractPlayingCount);
            registeredAnimations.push({
              elem: element,
              animation: animItem
            });
            len += 1;
          }
          function loadAnimation2(params) {
            var animItem = new AnimationItem();
            setupAnimation(animItem, null);
            animItem.setParams(params);
            return animItem;
          }
          function setSpeed(val2, animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.setSpeed(val2, animation);
            }
          }
          function setDirection(val2, animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.setDirection(val2, animation);
            }
          }
          function play(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.play(animation);
            }
          }
          function resume(nowTime) {
            var elapsedTime = nowTime - initTime;
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.advanceTime(elapsedTime);
            }
            initTime = nowTime;
            if (playingAnimationsNum && !_isFrozen) {
              window.requestAnimationFrame(resume);
            } else {
              _stopped = true;
            }
          }
          function first(nowTime) {
            initTime = nowTime;
            window.requestAnimationFrame(resume);
          }
          function pause(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.pause(animation);
            }
          }
          function goToAndStop(value2, isFrame, animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.goToAndStop(value2, isFrame, animation);
            }
          }
          function stop(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.stop(animation);
            }
          }
          function togglePause(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.togglePause(animation);
            }
          }
          function destroy(animation) {
            var i;
            for (i = len - 1; i >= 0; i -= 1) {
              registeredAnimations[i].animation.destroy(animation);
            }
          }
          function searchAnimations2(animationData2, standalone2, renderer2) {
            var animElements = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
            var i;
            var lenAnims = animElements.length;
            for (i = 0; i < lenAnims; i += 1) {
              if (renderer2) {
                animElements[i].setAttribute("data-bm-type", renderer2);
              }
              registerAnimation(animElements[i], animationData2);
            }
            if (standalone2 && lenAnims === 0) {
              if (!renderer2) {
                renderer2 = "svg";
              }
              var body = document.getElementsByTagName("body")[0];
              body.innerText = "";
              var div2 = createTag("div");
              div2.style.width = "100%";
              div2.style.height = "100%";
              div2.setAttribute("data-bm-type", renderer2);
              body.appendChild(div2);
              registerAnimation(div2, animationData2);
            }
          }
          function resize() {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.resize();
            }
          }
          function activate() {
            if (!_isFrozen && playingAnimationsNum) {
              if (_stopped) {
                window.requestAnimationFrame(first);
                _stopped = false;
              }
            }
          }
          function freeze() {
            _isFrozen = true;
          }
          function unfreeze() {
            _isFrozen = false;
            activate();
          }
          function setVolume(val2, animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.setVolume(val2, animation);
            }
          }
          function mute(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.mute(animation);
            }
          }
          function unmute(animation) {
            var i;
            for (i = 0; i < len; i += 1) {
              registeredAnimations[i].animation.unmute(animation);
            }
          }
          moduleOb.registerAnimation = registerAnimation;
          moduleOb.loadAnimation = loadAnimation2;
          moduleOb.setSpeed = setSpeed;
          moduleOb.setDirection = setDirection;
          moduleOb.play = play;
          moduleOb.pause = pause;
          moduleOb.stop = stop;
          moduleOb.togglePause = togglePause;
          moduleOb.searchAnimations = searchAnimations2;
          moduleOb.resize = resize;
          moduleOb.goToAndStop = goToAndStop;
          moduleOb.destroy = destroy;
          moduleOb.freeze = freeze;
          moduleOb.unfreeze = unfreeze;
          moduleOb.setVolume = setVolume;
          moduleOb.mute = mute;
          moduleOb.unmute = unmute;
          moduleOb.getRegisteredAnimations = getRegisteredAnimations;
          return moduleOb;
        }();
        var BezierFactory = function() {
          var ob2 = {};
          ob2.getBezierEasing = getBezierEasing;
          var beziers = {};
          function getBezierEasing(a, b, c, d, nm) {
            var str = nm || ("bez_" + a + "_" + b + "_" + c + "_" + d).replace(/\./g, "p");
            if (beziers[str]) {
              return beziers[str];
            }
            var bezEasing = new BezierEasing([a, b, c, d]);
            beziers[str] = bezEasing;
            return bezEasing;
          }
          var NEWTON_ITERATIONS = 4;
          var NEWTON_MIN_SLOPE = 1e-3;
          var SUBDIVISION_PRECISION = 1e-7;
          var SUBDIVISION_MAX_ITERATIONS = 10;
          var kSplineTableSize = 11;
          var kSampleStepSize = 1 / (kSplineTableSize - 1);
          var float32ArraySupported = typeof Float32Array === "function";
          function A(aA1, aA2) {
            return 1 - 3 * aA2 + 3 * aA1;
          }
          function B(aA1, aA2) {
            return 3 * aA2 - 6 * aA1;
          }
          function C(aA1) {
            return 3 * aA1;
          }
          function calcBezier(aT, aA1, aA2) {
            return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
          }
          function getSlope(aT, aA1, aA2) {
            return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
          }
          function binarySubdivide(aX, aA, aB, mX1, mX2) {
            var currentX, currentT, i = 0;
            do {
              currentT = aA + (aB - aA) / 2;
              currentX = calcBezier(currentT, mX1, mX2) - aX;
              if (currentX > 0) {
                aB = currentT;
              } else {
                aA = currentT;
              }
            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
            return currentT;
          }
          function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
              var currentSlope = getSlope(aGuessT, mX1, mX2);
              if (currentSlope === 0) return aGuessT;
              var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
              aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
          }
          function BezierEasing(points) {
            this._p = points;
            this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
            this._precomputed = false;
            this.get = this.get.bind(this);
          }
          BezierEasing.prototype = {
            get: function get(x) {
              var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
              if (!this._precomputed) this._precompute();
              if (mX1 === mY1 && mX2 === mY2) return x;
              if (x === 0) return 0;
              if (x === 1) return 1;
              return calcBezier(this._getTForX(x), mY1, mY2);
            },
            // Private part
            _precompute: function _precompute() {
              var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
              this._precomputed = true;
              if (mX1 !== mY1 || mX2 !== mY2) {
                this._calcSampleValues();
              }
            },
            _calcSampleValues: function _calcSampleValues() {
              var mX1 = this._p[0], mX2 = this._p[2];
              for (var i = 0; i < kSplineTableSize; ++i) {
                this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
              }
            },
            /**
                 * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
                 */
            _getTForX: function _getTForX(aX) {
              var mX1 = this._p[0], mX2 = this._p[2], mSampleValues = this._mSampleValues;
              var intervalStart = 0;
              var currentSample = 1;
              var lastSample = kSplineTableSize - 1;
              for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
                intervalStart += kSampleStepSize;
              }
              --currentSample;
              var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
              var guessForT = intervalStart + dist * kSampleStepSize;
              var initialSlope = getSlope(guessForT, mX1, mX2);
              if (initialSlope >= NEWTON_MIN_SLOPE) {
                return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
              }
              if (initialSlope === 0) {
                return guessForT;
              }
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
          };
          return ob2;
        }();
        var pooling = /* @__PURE__ */ function() {
          function _double(arr) {
            return arr.concat(createSizedArray(arr.length));
          }
          return {
            "double": _double
          };
        }();
        var poolFactory = /* @__PURE__ */ function() {
          return function(initialLength, _create, _release) {
            var _length = 0;
            var _maxLength = initialLength;
            var pool = createSizedArray(_maxLength);
            var ob2 = {
              newElement,
              release
            };
            function newElement() {
              var element;
              if (_length) {
                _length -= 1;
                element = pool[_length];
              } else {
                element = _create();
              }
              return element;
            }
            function release(element) {
              if (_length === _maxLength) {
                pool = pooling["double"](pool);
                _maxLength *= 2;
              }
              if (_release) {
                _release(element);
              }
              pool[_length] = element;
              _length += 1;
            }
            return ob2;
          };
        }();
        var bezierLengthPool = function() {
          function create() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            };
          }
          return poolFactory(8, create);
        }();
        var segmentsLengthPool = function() {
          function create() {
            return {
              lengths: [],
              totalLength: 0
            };
          }
          function release(element) {
            var i;
            var len = element.lengths.length;
            for (i = 0; i < len; i += 1) {
              bezierLengthPool.release(element.lengths[i]);
            }
            element.lengths.length = 0;
          }
          return poolFactory(8, create, release);
        }();
        function bezFunction() {
          var math = Math;
          function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
            var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
            return det1 > -1e-3 && det1 < 1e-3;
          }
          function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
            if (z1 === 0 && z2 === 0 && z3 === 0) {
              return pointOnLine2D(x1, y1, x2, y2, x3, y3);
            }
            var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
            var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
            var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
            var diffDist;
            if (dist1 > dist2) {
              if (dist1 > dist3) {
                diffDist = dist1 - dist2 - dist3;
              } else {
                diffDist = dist3 - dist2 - dist1;
              }
            } else if (dist3 > dist2) {
              diffDist = dist3 - dist2 - dist1;
            } else {
              diffDist = dist2 - dist1 - dist3;
            }
            return diffDist > -1e-4 && diffDist < 1e-4;
          }
          var getBezierLength = /* @__PURE__ */ function() {
            return function(pt1, pt2, pt3, pt4) {
              var curveSegments = getDefaultCurveSegments();
              var k;
              var i;
              var len;
              var ptCoord;
              var perc;
              var addedLength = 0;
              var ptDistance;
              var point = [];
              var lastPoint = [];
              var lengthData = bezierLengthPool.newElement();
              len = pt3.length;
              for (k = 0; k < curveSegments; k += 1) {
                perc = k / (curveSegments - 1);
                ptDistance = 0;
                for (i = 0; i < len; i += 1) {
                  ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
                  point[i] = ptCoord;
                  if (lastPoint[i] !== null) {
                    ptDistance += bmPow(point[i] - lastPoint[i], 2);
                  }
                  lastPoint[i] = point[i];
                }
                if (ptDistance) {
                  ptDistance = bmSqrt(ptDistance);
                  addedLength += ptDistance;
                }
                lengthData.percents[k] = perc;
                lengthData.lengths[k] = addedLength;
              }
              lengthData.addedLength = addedLength;
              return lengthData;
            };
          }();
          function getSegmentsLength(shapeData) {
            var segmentsLength = segmentsLengthPool.newElement();
            var closed = shapeData.c;
            var pathV = shapeData.v;
            var pathO = shapeData.o;
            var pathI = shapeData.i;
            var i;
            var len = shapeData._length;
            var lengths = segmentsLength.lengths;
            var totalLength = 0;
            for (i = 0; i < len - 1; i += 1) {
              lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
              totalLength += lengths[i].addedLength;
            }
            if (closed && len) {
              lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
              totalLength += lengths[i].addedLength;
            }
            segmentsLength.totalLength = totalLength;
            return segmentsLength;
          }
          function BezierData(length2) {
            this.segmentLength = 0;
            this.points = new Array(length2);
          }
          function PointData(partial, point) {
            this.partialLength = partial;
            this.point = point;
          }
          var buildBezierData = /* @__PURE__ */ function() {
            var storedData = {};
            return function(pt1, pt2, pt3, pt4) {
              var bezierName = (pt1[0] + "_" + pt1[1] + "_" + pt2[0] + "_" + pt2[1] + "_" + pt3[0] + "_" + pt3[1] + "_" + pt4[0] + "_" + pt4[1]).replace(/\./g, "p");
              if (!storedData[bezierName]) {
                var curveSegments = getDefaultCurveSegments();
                var k;
                var i;
                var len;
                var ptCoord;
                var perc;
                var addedLength = 0;
                var ptDistance;
                var point;
                var lastPoint = null;
                if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
                  curveSegments = 2;
                }
                var bezierData = new BezierData(curveSegments);
                len = pt3.length;
                for (k = 0; k < curveSegments; k += 1) {
                  point = createSizedArray(len);
                  perc = k / (curveSegments - 1);
                  ptDistance = 0;
                  for (i = 0; i < len; i += 1) {
                    ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
                    point[i] = ptCoord;
                    if (lastPoint !== null) {
                      ptDistance += bmPow(point[i] - lastPoint[i], 2);
                    }
                  }
                  ptDistance = bmSqrt(ptDistance);
                  addedLength += ptDistance;
                  bezierData.points[k] = new PointData(ptDistance, point);
                  lastPoint = point;
                }
                bezierData.segmentLength = addedLength;
                storedData[bezierName] = bezierData;
              }
              return storedData[bezierName];
            };
          }();
          function getDistancePerc(perc, bezierData) {
            var percents = bezierData.percents;
            var lengths = bezierData.lengths;
            var len = percents.length;
            var initPos = bmFloor((len - 1) * perc);
            var lengthPos = perc * bezierData.addedLength;
            var lPerc = 0;
            if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
              return percents[initPos];
            }
            var dir = lengths[initPos] > lengthPos ? -1 : 1;
            var flag = true;
            while (flag) {
              if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
                lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
                flag = false;
              } else {
                initPos += dir;
              }
              if (initPos < 0 || initPos >= len - 1) {
                if (initPos === len - 1) {
                  return percents[initPos];
                }
                flag = false;
              }
            }
            return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
          }
          function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
            var t1 = getDistancePerc(percent, bezierData);
            var u1 = 1 - t1;
            var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1e3) / 1e3;
            var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1e3) / 1e3;
            return [ptX, ptY];
          }
          var bezierSegmentPoints = createTypedArray("float32", 8);
          function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
            if (startPerc < 0) {
              startPerc = 0;
            } else if (startPerc > 1) {
              startPerc = 1;
            }
            var t0 = getDistancePerc(startPerc, bezierData);
            endPerc = endPerc > 1 ? 1 : endPerc;
            var t1 = getDistancePerc(endPerc, bezierData);
            var i;
            var len = pt1.length;
            var u0 = 1 - t0;
            var u1 = 1 - t1;
            var u0u0u0 = u0 * u0 * u0;
            var t0u0u0_3 = t0 * u0 * u0 * 3;
            var t0t0u0_3 = t0 * t0 * u0 * 3;
            var t0t0t0 = t0 * t0 * t0;
            var u0u0u1 = u0 * u0 * u1;
            var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1;
            var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1;
            var t0t0t1 = t0 * t0 * t1;
            var u0u1u1 = u0 * u1 * u1;
            var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1;
            var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1;
            var t0t1t1 = t0 * t1 * t1;
            var u1u1u1 = u1 * u1 * u1;
            var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1;
            var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1;
            var t1t1t1 = t1 * t1 * t1;
            for (i = 0; i < len; i += 1) {
              bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1e3) / 1e3;
              bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1e3) / 1e3;
              bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1e3) / 1e3;
              bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1e3) / 1e3;
            }
            return bezierSegmentPoints;
          }
          return {
            getSegmentsLength,
            getNewSegment,
            getPointInSegment,
            buildBezierData,
            pointOnLine2D,
            pointOnLine3D
          };
        }
        var bez = bezFunction();
        var initFrame = initialDefaultFrame;
        var mathAbs = Math.abs;
        function interpolateValue(frameNum, caching) {
          var offsetTime = this.offsetTime;
          var newValue;
          if (this.propType === "multidimensional") {
            newValue = createTypedArray("float32", this.pv.length);
          }
          var iterationIndex = caching.lastIndex;
          var i = iterationIndex;
          var len = this.keyframes.length - 1;
          var flag = true;
          var keyData;
          var nextKeyData;
          var keyframeMetadata;
          while (flag) {
            keyData = this.keyframes[i];
            nextKeyData = this.keyframes[i + 1];
            if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
              if (keyData.h) {
                keyData = nextKeyData;
              }
              iterationIndex = 0;
              break;
            }
            if (nextKeyData.t - offsetTime > frameNum) {
              iterationIndex = i;
              break;
            }
            if (i < len - 1) {
              i += 1;
            } else {
              iterationIndex = 0;
              flag = false;
            }
          }
          keyframeMetadata = this.keyframesMetadata[i] || {};
          var k;
          var kLen;
          var perc;
          var jLen;
          var j;
          var fnc;
          var nextKeyTime = nextKeyData.t - offsetTime;
          var keyTime = keyData.t - offsetTime;
          var endValue;
          if (keyData.to) {
            if (!keyframeMetadata.bezierData) {
              keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
            }
            var bezierData = keyframeMetadata.bezierData;
            if (frameNum >= nextKeyTime || frameNum < keyTime) {
              var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
              kLen = bezierData.points[ind].point.length;
              for (k = 0; k < kLen; k += 1) {
                newValue[k] = bezierData.points[ind].point[k];
              }
            } else {
              if (keyframeMetadata.__fnct) {
                fnc = keyframeMetadata.__fnct;
              } else {
                fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
                keyframeMetadata.__fnct = fnc;
              }
              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
              var distanceInLine = bezierData.segmentLength * perc;
              var segmentPerc;
              var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
              j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
              flag = true;
              jLen = bezierData.points.length;
              while (flag) {
                addedLength += bezierData.points[j].partialLength;
                if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
                  kLen = bezierData.points[j].point.length;
                  for (k = 0; k < kLen; k += 1) {
                    newValue[k] = bezierData.points[j].point[k];
                  }
                  break;
                } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
                  segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
                  kLen = bezierData.points[j].point.length;
                  for (k = 0; k < kLen; k += 1) {
                    newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
                  }
                  break;
                }
                if (j < jLen - 1) {
                  j += 1;
                } else {
                  flag = false;
                }
              }
              caching._lastPoint = j;
              caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
              caching._lastKeyframeIndex = i;
            }
          } else {
            var outX;
            var outY;
            var inX;
            var inY;
            var keyValue;
            len = keyData.s.length;
            endValue = nextKeyData.s || keyData.e;
            if (this.sh && keyData.h !== 1) {
              if (frameNum >= nextKeyTime) {
                newValue[0] = endValue[0];
                newValue[1] = endValue[1];
                newValue[2] = endValue[2];
              } else if (frameNum <= keyTime) {
                newValue[0] = keyData.s[0];
                newValue[1] = keyData.s[1];
                newValue[2] = keyData.s[2];
              } else {
                var quatStart = createQuaternion(keyData.s);
                var quatEnd = createQuaternion(endValue);
                var time2 = (frameNum - keyTime) / (nextKeyTime - keyTime);
                quaternionToEuler(newValue, slerp(quatStart, quatEnd, time2));
              }
            } else {
              for (i = 0; i < len; i += 1) {
                if (keyData.h !== 1) {
                  if (frameNum >= nextKeyTime) {
                    perc = 1;
                  } else if (frameNum < keyTime) {
                    perc = 0;
                  } else {
                    if (keyData.o.x.constructor === Array) {
                      if (!keyframeMetadata.__fnct) {
                        keyframeMetadata.__fnct = [];
                      }
                      if (!keyframeMetadata.__fnct[i]) {
                        outX = keyData.o.x[i] === void 0 ? keyData.o.x[0] : keyData.o.x[i];
                        outY = keyData.o.y[i] === void 0 ? keyData.o.y[0] : keyData.o.y[i];
                        inX = keyData.i.x[i] === void 0 ? keyData.i.x[0] : keyData.i.x[i];
                        inY = keyData.i.y[i] === void 0 ? keyData.i.y[0] : keyData.i.y[i];
                        fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                        keyframeMetadata.__fnct[i] = fnc;
                      } else {
                        fnc = keyframeMetadata.__fnct[i];
                      }
                    } else if (!keyframeMetadata.__fnct) {
                      outX = keyData.o.x;
                      outY = keyData.o.y;
                      inX = keyData.i.x;
                      inY = keyData.i.y;
                      fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                      keyData.keyframeMetadata = fnc;
                    } else {
                      fnc = keyframeMetadata.__fnct;
                    }
                    perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
                  }
                }
                endValue = nextKeyData.s || keyData.e;
                keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;
                if (this.propType === "multidimensional") {
                  newValue[i] = keyValue;
                } else {
                  newValue = keyValue;
                }
              }
            }
          }
          caching.lastIndex = iterationIndex;
          return newValue;
        }
        function slerp(a, b, t) {
          var out = [];
          var ax = a[0];
          var ay = a[1];
          var az = a[2];
          var aw = a[3];
          var bx = b[0];
          var by = b[1];
          var bz = b[2];
          var bw = b[3];
          var omega;
          var cosom;
          var sinom;
          var scale0;
          var scale1;
          cosom = ax * bx + ay * by + az * bz + aw * bw;
          if (cosom < 0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
          }
          if (1 - cosom > 1e-6) {
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
          } else {
            scale0 = 1 - t;
            scale1 = t;
          }
          out[0] = scale0 * ax + scale1 * bx;
          out[1] = scale0 * ay + scale1 * by;
          out[2] = scale0 * az + scale1 * bz;
          out[3] = scale0 * aw + scale1 * bw;
          return out;
        }
        function quaternionToEuler(out, quat) {
          var qx = quat[0];
          var qy = quat[1];
          var qz = quat[2];
          var qw = quat[3];
          var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
          var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
          var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
          out[0] = heading / degToRads;
          out[1] = attitude / degToRads;
          out[2] = bank / degToRads;
        }
        function createQuaternion(values) {
          var heading = values[0] * degToRads;
          var attitude = values[1] * degToRads;
          var bank = values[2] * degToRads;
          var c1 = Math.cos(heading / 2);
          var c2 = Math.cos(attitude / 2);
          var c3 = Math.cos(bank / 2);
          var s1 = Math.sin(heading / 2);
          var s2 = Math.sin(attitude / 2);
          var s3 = Math.sin(bank / 2);
          var w = c1 * c2 * c3 - s1 * s2 * s3;
          var x = s1 * s2 * c3 + c1 * c2 * s3;
          var y = s1 * c2 * c3 + c1 * s2 * s3;
          var z = c1 * s2 * c3 - s1 * c2 * s3;
          return [x, y, z, w];
        }
        function getValueAtCurrentTime() {
          var frameNum = this.comp.renderedFrame - this.offsetTime;
          var initTime = this.keyframes[0].t - this.offsetTime;
          var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
            if (this._caching.lastFrame >= frameNum) {
              this._caching._lastKeyframeIndex = -1;
              this._caching.lastIndex = 0;
            }
            var renderResult = this.interpolateValue(frameNum, this._caching);
            this.pv = renderResult;
          }
          this._caching.lastFrame = frameNum;
          return this.pv;
        }
        function setVValue(val2) {
          var multipliedValue;
          if (this.propType === "unidimensional") {
            multipliedValue = val2 * this.mult;
            if (mathAbs(this.v - multipliedValue) > 1e-5) {
              this.v = multipliedValue;
              this._mdf = true;
            }
          } else {
            var i = 0;
            var len = this.v.length;
            while (i < len) {
              multipliedValue = val2[i] * this.mult;
              if (mathAbs(this.v[i] - multipliedValue) > 1e-5) {
                this.v[i] = multipliedValue;
                this._mdf = true;
              }
              i += 1;
            }
          }
        }
        function processEffectsSequence() {
          if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true;
          this._mdf = this._isFirstFrame;
          var i;
          var len = this.effectsSequence.length;
          var finalValue = this.kf ? this.pv : this.data.k;
          for (i = 0; i < len; i += 1) {
            finalValue = this.effectsSequence[i](finalValue);
          }
          this.setVValue(finalValue);
          this._isFirstFrame = false;
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        }
        function addEffect(effectFunction) {
          this.effectsSequence.push(effectFunction);
          this.container.addDynamicProperty(this);
        }
        function ValueProperty(elem2, data2, mult, container) {
          this.propType = "unidimensional";
          this.mult = mult || 1;
          this.data = data2;
          this.v = mult ? data2.k * mult : data2.k;
          this.pv = data2.k;
          this._mdf = false;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.k = false;
          this.kf = false;
          this.vel = 0;
          this.effectsSequence = [];
          this._isFirstFrame = true;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(elem2, data2, mult, container) {
          this.propType = "multidimensional";
          this.mult = mult || 1;
          this.data = data2;
          this._mdf = false;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.k = false;
          this.kf = false;
          this.frameId = -1;
          var i;
          var len = data2.k.length;
          this.v = createTypedArray("float32", len);
          this.pv = createTypedArray("float32", len);
          this.vel = createTypedArray("float32", len);
          for (i = 0; i < len; i += 1) {
            this.v[i] = data2.k[i] * this.mult;
            this.pv[i] = data2.k[i];
          }
          this._isFirstFrame = true;
          this.effectsSequence = [];
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.addEffect = addEffect;
        }
        function KeyframedValueProperty(elem2, data2, mult, container) {
          this.propType = "unidimensional";
          this.keyframes = data2.k;
          this.keyframesMetadata = [];
          this.offsetTime = elem2.data.st;
          this.frameId = -1;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          };
          this.k = true;
          this.kf = true;
          this.data = data2;
          this.mult = mult || 1;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.v = initFrame;
          this.pv = initFrame;
          this._isFirstFrame = true;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.interpolateValue = interpolateValue;
          this.effectsSequence = [getValueAtCurrentTime.bind(this)];
          this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(elem2, data2, mult, container) {
          this.propType = "multidimensional";
          var i;
          var len = data2.k.length;
          var s;
          var e;
          var to;
          var ti;
          for (i = 0; i < len - 1; i += 1) {
            if (data2.k[i].to && data2.k[i].s && data2.k[i + 1] && data2.k[i + 1].s) {
              s = data2.k[i].s;
              e = data2.k[i + 1].s;
              to = data2.k[i].to;
              ti = data2.k[i].ti;
              if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
                data2.k[i].to = null;
                data2.k[i].ti = null;
              }
              if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
                if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
                  data2.k[i].to = null;
                  data2.k[i].ti = null;
                }
              }
            }
          }
          this.effectsSequence = [getValueAtCurrentTime.bind(this)];
          this.data = data2;
          this.keyframes = data2.k;
          this.keyframesMetadata = [];
          this.offsetTime = elem2.data.st;
          this.k = true;
          this.kf = true;
          this._isFirstFrame = true;
          this.mult = mult || 1;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.interpolateValue = interpolateValue;
          this.frameId = -1;
          var arrLen = data2.k[0].s.length;
          this.v = createTypedArray("float32", arrLen);
          this.pv = createTypedArray("float32", arrLen);
          for (i = 0; i < arrLen; i += 1) {
            this.v[i] = initFrame;
            this.pv[i] = initFrame;
          }
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", arrLen)
          };
          this.addEffect = addEffect;
        }
        var PropertyFactory = /* @__PURE__ */ function() {
          function getProp(elem2, data2, type, mult, container) {
            if (data2.sid) {
              data2 = elem2.globalData.slotManager.getProp(data2);
            }
            var p;
            if (!data2.k.length) {
              p = new ValueProperty(elem2, data2, mult, container);
            } else if (typeof data2.k[0] === "number") {
              p = new MultiDimensionalProperty(elem2, data2, mult, container);
            } else {
              switch (type) {
                case 0:
                  p = new KeyframedValueProperty(elem2, data2, mult, container);
                  break;
                case 1:
                  p = new KeyframedMultidimensionalProperty(elem2, data2, mult, container);
                  break;
                default:
                  break;
              }
            }
            if (p.effectsSequence.length) {
              container.addDynamicProperty(p);
            }
            return p;
          }
          var ob2 = {
            getProp
          };
          return ob2;
        }();
        function DynamicPropertyContainer() {
        }
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function addDynamicProperty(prop) {
            if (this.dynamicProperties.indexOf(prop) === -1) {
              this.dynamicProperties.push(prop);
              this.container.addDynamicProperty(this);
              this._isAnimated = true;
            }
          },
          iterateDynamicProperties: function iterateDynamicProperties() {
            this._mdf = false;
            var i;
            var len = this.dynamicProperties.length;
            for (i = 0; i < len; i += 1) {
              this.dynamicProperties[i].getValue();
              if (this.dynamicProperties[i]._mdf) {
                this._mdf = true;
              }
            }
          },
          initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
            this.container = container;
            this.dynamicProperties = [];
            this._mdf = false;
            this._isAnimated = false;
          }
        };
        var pointPool = function() {
          function create() {
            return createTypedArray("float32", 2);
          }
          return poolFactory(8, create);
        }();
        function ShapePath() {
          this.c = false;
          this._length = 0;
          this._maxLength = 8;
          this.v = createSizedArray(this._maxLength);
          this.o = createSizedArray(this._maxLength);
          this.i = createSizedArray(this._maxLength);
        }
        ShapePath.prototype.setPathData = function(closed, len) {
          this.c = closed;
          this.setLength(len);
          var i = 0;
          while (i < len) {
            this.v[i] = pointPool.newElement();
            this.o[i] = pointPool.newElement();
            this.i[i] = pointPool.newElement();
            i += 1;
          }
        };
        ShapePath.prototype.setLength = function(len) {
          while (this._maxLength < len) {
            this.doubleArrayLength();
          }
          this._length = len;
        };
        ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength));
          this.i = this.i.concat(createSizedArray(this._maxLength));
          this.o = this.o.concat(createSizedArray(this._maxLength));
          this._maxLength *= 2;
        };
        ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
          var arr;
          this._length = Math.max(this._length, pos + 1);
          if (this._length >= this._maxLength) {
            this.doubleArrayLength();
          }
          switch (type) {
            case "v":
              arr = this.v;
              break;
            case "i":
              arr = this.i;
              break;
            case "o":
              arr = this.o;
              break;
            default:
              arr = [];
              break;
          }
          if (!arr[pos] || arr[pos] && !replace) {
            arr[pos] = pointPool.newElement();
          }
          arr[pos][0] = x;
          arr[pos][1] = y;
        };
        ShapePath.prototype.setTripleAt = function(vX, vY, oX, oY, iX, iY, pos, replace) {
          this.setXYAt(vX, vY, "v", pos, replace);
          this.setXYAt(oX, oY, "o", pos, replace);
          this.setXYAt(iX, iY, "i", pos, replace);
        };
        ShapePath.prototype.reverse = function() {
          var newPath = new ShapePath();
          newPath.setPathData(this.c, this._length);
          var vertices = this.v;
          var outPoints = this.o;
          var inPoints = this.i;
          var init4 = 0;
          if (this.c) {
            newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
            init4 = 1;
          }
          var cnt = this._length - 1;
          var len = this._length;
          var i;
          for (i = init4; i < len; i += 1) {
            newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
            cnt -= 1;
          }
          return newPath;
        };
        ShapePath.prototype.length = function() {
          return this._length;
        };
        var shapePool = function() {
          function create() {
            return new ShapePath();
          }
          function release(shapePath) {
            var len = shapePath._length;
            var i;
            for (i = 0; i < len; i += 1) {
              pointPool.release(shapePath.v[i]);
              pointPool.release(shapePath.i[i]);
              pointPool.release(shapePath.o[i]);
              shapePath.v[i] = null;
              shapePath.i[i] = null;
              shapePath.o[i] = null;
            }
            shapePath._length = 0;
            shapePath.c = false;
          }
          function clone(shape) {
            var cloned = factory.newElement();
            var i;
            var len = shape._length === void 0 ? shape.v.length : shape._length;
            cloned.setLength(len);
            cloned.c = shape.c;
            for (i = 0; i < len; i += 1) {
              cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
            }
            return cloned;
          }
          var factory = poolFactory(4, create, release);
          factory.clone = clone;
          return factory;
        }();
        function ShapeCollection() {
          this._length = 0;
          this._maxLength = 4;
          this.shapes = createSizedArray(this._maxLength);
        }
        ShapeCollection.prototype.addShape = function(shapeData) {
          if (this._length === this._maxLength) {
            this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
            this._maxLength *= 2;
          }
          this.shapes[this._length] = shapeData;
          this._length += 1;
        };
        ShapeCollection.prototype.releaseShapes = function() {
          var i;
          for (i = 0; i < this._length; i += 1) {
            shapePool.release(this.shapes[i]);
          }
          this._length = 0;
        };
        var shapeCollectionPool = function() {
          var ob2 = {
            newShapeCollection,
            release
          };
          var _length = 0;
          var _maxLength = 4;
          var pool = createSizedArray(_maxLength);
          function newShapeCollection() {
            var shapeCollection;
            if (_length) {
              _length -= 1;
              shapeCollection = pool[_length];
            } else {
              shapeCollection = new ShapeCollection();
            }
            return shapeCollection;
          }
          function release(shapeCollection) {
            var i;
            var len = shapeCollection._length;
            for (i = 0; i < len; i += 1) {
              shapePool.release(shapeCollection.shapes[i]);
            }
            shapeCollection._length = 0;
            if (_length === _maxLength) {
              pool = pooling["double"](pool);
              _maxLength *= 2;
            }
            pool[_length] = shapeCollection;
            _length += 1;
          }
          return ob2;
        }();
        var ShapePropertyFactory = function() {
          var initFrame2 = -999999;
          function interpolateShape(frameNum, previousValue, caching) {
            var iterationIndex = caching.lastIndex;
            var keyPropS;
            var keyPropE;
            var isHold;
            var j;
            var k;
            var jLen;
            var kLen;
            var perc;
            var vertexValue;
            var kf = this.keyframes;
            if (frameNum < kf[0].t - this.offsetTime) {
              keyPropS = kf[0].s[0];
              isHold = true;
              iterationIndex = 0;
            } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
              keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
              isHold = true;
            } else {
              var i = iterationIndex;
              var len = kf.length - 1;
              var flag = true;
              var keyData;
              var nextKeyData;
              var keyframeMetadata;
              while (flag) {
                keyData = kf[i];
                nextKeyData = kf[i + 1];
                if (nextKeyData.t - this.offsetTime > frameNum) {
                  break;
                }
                if (i < len - 1) {
                  i += 1;
                } else {
                  flag = false;
                }
              }
              keyframeMetadata = this.keyframesMetadata[i] || {};
              isHold = keyData.h === 1;
              iterationIndex = i;
              if (!isHold) {
                if (frameNum >= nextKeyData.t - this.offsetTime) {
                  perc = 1;
                } else if (frameNum < keyData.t - this.offsetTime) {
                  perc = 0;
                } else {
                  var fnc;
                  if (keyframeMetadata.__fnct) {
                    fnc = keyframeMetadata.__fnct;
                  } else {
                    fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
                    keyframeMetadata.__fnct = fnc;
                  }
                  perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
                }
                keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
              }
              keyPropS = keyData.s[0];
            }
            jLen = previousValue._length;
            kLen = keyPropS.i[0].length;
            caching.lastIndex = iterationIndex;
            for (j = 0; j < jLen; j += 1) {
              for (k = 0; k < kLen; k += 1) {
                vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
                previousValue.i[j][k] = vertexValue;
                vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
                previousValue.o[j][k] = vertexValue;
                vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
                previousValue.v[j][k] = vertexValue;
              }
            }
          }
          function interpolateShapeCurrentTime() {
            var frameNum = this.comp.renderedFrame - this.offsetTime;
            var initTime = this.keyframes[0].t - this.offsetTime;
            var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            var lastFrame = this._caching.lastFrame;
            if (!(lastFrame !== initFrame2 && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
              this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
              this.interpolateShape(frameNum, this.pv, this._caching);
            }
            this._caching.lastFrame = frameNum;
            return this.pv;
          }
          function resetShape() {
            this.paths = this.localShapeCollection;
          }
          function shapesEqual(shape1, shape2) {
            if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
              return false;
            }
            var i;
            var len = shape1._length;
            for (i = 0; i < len; i += 1) {
              if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
                return false;
              }
            }
            return true;
          }
          function setVValue2(newPath) {
            if (!shapesEqual(this.v, newPath)) {
              this.v = shapePool.clone(newPath);
              this.localShapeCollection.releaseShapes();
              this.localShapeCollection.addShape(this.v);
              this._mdf = true;
              this.paths = this.localShapeCollection;
            }
          }
          function processEffectsSequence2() {
            if (this.elem.globalData.frameId === this.frameId) {
              return;
            }
            if (!this.effectsSequence.length) {
              this._mdf = false;
              return;
            }
            if (this.lock) {
              this.setVValue(this.pv);
              return;
            }
            this.lock = true;
            this._mdf = false;
            var finalValue;
            if (this.kf) {
              finalValue = this.pv;
            } else if (this.data.ks) {
              finalValue = this.data.ks.k;
            } else {
              finalValue = this.data.pt.k;
            }
            var i;
            var len = this.effectsSequence.length;
            for (i = 0; i < len; i += 1) {
              finalValue = this.effectsSequence[i](finalValue);
            }
            this.setVValue(finalValue);
            this.lock = false;
            this.frameId = this.elem.globalData.frameId;
          }
          function ShapeProperty(elem2, data2, type) {
            this.propType = "shape";
            this.comp = elem2.comp;
            this.container = elem2;
            this.elem = elem2;
            this.data = data2;
            this.k = false;
            this.kf = false;
            this._mdf = false;
            var pathData = type === 3 ? data2.pt.k : data2.ks.k;
            this.v = shapePool.clone(pathData);
            this.pv = shapePool.clone(this.v);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.reset = resetShape;
            this.effectsSequence = [];
          }
          function addEffect2(effectFunction) {
            this.effectsSequence.push(effectFunction);
            this.container.addDynamicProperty(this);
          }
          ShapeProperty.prototype.interpolateShape = interpolateShape;
          ShapeProperty.prototype.getValue = processEffectsSequence2;
          ShapeProperty.prototype.setVValue = setVValue2;
          ShapeProperty.prototype.addEffect = addEffect2;
          function KeyframedShapeProperty(elem2, data2, type) {
            this.propType = "shape";
            this.comp = elem2.comp;
            this.elem = elem2;
            this.container = elem2;
            this.offsetTime = elem2.data.st;
            this.keyframes = type === 3 ? data2.pt.k : data2.ks.k;
            this.keyframesMetadata = [];
            this.k = true;
            this.kf = true;
            var len = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement();
            this.v.setPathData(this.keyframes[0].s[0].c, len);
            this.pv = shapePool.clone(this.v);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.lastFrame = initFrame2;
            this.reset = resetShape;
            this._caching = {
              lastFrame: initFrame2,
              lastIndex: 0
            };
            this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
          }
          KeyframedShapeProperty.prototype.getValue = processEffectsSequence2;
          KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
          KeyframedShapeProperty.prototype.setVValue = setVValue2;
          KeyframedShapeProperty.prototype.addEffect = addEffect2;
          var EllShapeProperty = function() {
            var cPoint = roundCorner;
            function EllShapePropertyFactory(elem2, data2) {
              this.v = shapePool.newElement();
              this.v.setPathData(true, 4);
              this.localShapeCollection = shapeCollectionPool.newShapeCollection();
              this.paths = this.localShapeCollection;
              this.localShapeCollection.addShape(this.v);
              this.d = data2.d;
              this.elem = elem2;
              this.comp = elem2.comp;
              this.frameId = -1;
              this.initDynamicPropertyContainer(elem2);
              this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
              this.s = PropertyFactory.getProp(elem2, data2.s, 1, 0, this);
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertEllToPath();
              }
            }
            EllShapePropertyFactory.prototype = {
              reset: resetShape,
              getValue: function getValue() {
                if (this.elem.globalData.frameId === this.frameId) {
                  return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertEllToPath();
                }
              },
              convertEllToPath: function convertEllToPath() {
                var p0 = this.p.v[0];
                var p1 = this.p.v[1];
                var s0 = this.s.v[0] / 2;
                var s1 = this.s.v[1] / 2;
                var _cw = this.d !== 3;
                var _v = this.v;
                _v.v[0][0] = p0;
                _v.v[0][1] = p1 - s1;
                _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.v[1][1] = p1;
                _v.v[2][0] = p0;
                _v.v[2][1] = p1 + s1;
                _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.v[3][1] = p1;
                _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.i[0][1] = p1 - s1;
                _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.i[1][1] = p1 - s1 * cPoint;
                _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.i[2][1] = p1 + s1;
                _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.i[3][1] = p1 + s1 * cPoint;
                _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
                _v.o[0][1] = p1 - s1;
                _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
                _v.o[1][1] = p1 + s1 * cPoint;
                _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
                _v.o[2][1] = p1 + s1;
                _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
                _v.o[3][1] = p1 - s1 * cPoint;
              }
            };
            extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
            return EllShapePropertyFactory;
          }();
          var StarShapeProperty = function() {
            function StarShapePropertyFactory(elem2, data2) {
              this.v = shapePool.newElement();
              this.v.setPathData(true, 0);
              this.elem = elem2;
              this.comp = elem2.comp;
              this.data = data2;
              this.frameId = -1;
              this.d = data2.d;
              this.initDynamicPropertyContainer(elem2);
              if (data2.sy === 1) {
                this.ir = PropertyFactory.getProp(elem2, data2.ir, 0, 0, this);
                this.is = PropertyFactory.getProp(elem2, data2.is, 0, 0.01, this);
                this.convertToPath = this.convertStarToPath;
              } else {
                this.convertToPath = this.convertPolygonToPath;
              }
              this.pt = PropertyFactory.getProp(elem2, data2.pt, 0, 0, this);
              this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
              this.r = PropertyFactory.getProp(elem2, data2.r, 0, degToRads, this);
              this.or = PropertyFactory.getProp(elem2, data2.or, 0, 0, this);
              this.os = PropertyFactory.getProp(elem2, data2.os, 0, 0.01, this);
              this.localShapeCollection = shapeCollectionPool.newShapeCollection();
              this.localShapeCollection.addShape(this.v);
              this.paths = this.localShapeCollection;
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertToPath();
              }
            }
            StarShapePropertyFactory.prototype = {
              reset: resetShape,
              getValue: function getValue() {
                if (this.elem.globalData.frameId === this.frameId) {
                  return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertToPath();
                }
              },
              convertStarToPath: function convertStarToPath() {
                var numPts = Math.floor(this.pt.v) * 2;
                var angle = Math.PI * 2 / numPts;
                var longFlag = true;
                var longRad = this.or.v;
                var shortRad = this.ir.v;
                var longRound = this.os.v;
                var shortRound = this.is.v;
                var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
                var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
                var i;
                var rad;
                var roundness;
                var perimSegment;
                var currentAng = -Math.PI / 2;
                currentAng += this.r.v;
                var dir = this.data.d === 3 ? -1 : 1;
                this.v._length = 0;
                for (i = 0; i < numPts; i += 1) {
                  rad = longFlag ? longRad : shortRad;
                  roundness = longFlag ? longRound : shortRound;
                  perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                  var x = rad * Math.cos(currentAng);
                  var y = rad * Math.sin(currentAng);
                  var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                  var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                  x += +this.p.v[0];
                  y += +this.p.v[1];
                  this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
                  longFlag = !longFlag;
                  currentAng += angle * dir;
                }
              },
              convertPolygonToPath: function convertPolygonToPath() {
                var numPts = Math.floor(this.pt.v);
                var angle = Math.PI * 2 / numPts;
                var rad = this.or.v;
                var roundness = this.os.v;
                var perimSegment = 2 * Math.PI * rad / (numPts * 4);
                var i;
                var currentAng = -Math.PI * 0.5;
                var dir = this.data.d === 3 ? -1 : 1;
                currentAng += this.r.v;
                this.v._length = 0;
                for (i = 0; i < numPts; i += 1) {
                  var x = rad * Math.cos(currentAng);
                  var y = rad * Math.sin(currentAng);
                  var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                  var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                  x += +this.p.v[0];
                  y += +this.p.v[1];
                  this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
                  currentAng += angle * dir;
                }
                this.paths.length = 0;
                this.paths[0] = this.v;
              }
            };
            extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
            return StarShapePropertyFactory;
          }();
          var RectShapeProperty = function() {
            function RectShapePropertyFactory(elem2, data2) {
              this.v = shapePool.newElement();
              this.v.c = true;
              this.localShapeCollection = shapeCollectionPool.newShapeCollection();
              this.localShapeCollection.addShape(this.v);
              this.paths = this.localShapeCollection;
              this.elem = elem2;
              this.comp = elem2.comp;
              this.frameId = -1;
              this.d = data2.d;
              this.initDynamicPropertyContainer(elem2);
              this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
              this.s = PropertyFactory.getProp(elem2, data2.s, 1, 0, this);
              this.r = PropertyFactory.getProp(elem2, data2.r, 0, 0, this);
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertRectToPath();
              }
            }
            RectShapePropertyFactory.prototype = {
              convertRectToPath: function convertRectToPath() {
                var p0 = this.p.v[0];
                var p1 = this.p.v[1];
                var v0 = this.s.v[0] / 2;
                var v1 = this.s.v[1] / 2;
                var round = bmMin(v0, v1, this.r.v);
                var cPoint = round * (1 - roundCorner);
                this.v._length = 0;
                if (this.d === 2 || this.d === 1) {
                  this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
                  this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
                  if (round !== 0) {
                    this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
                    this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
                    this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
                    this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
                    this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
                    this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
                  } else {
                    this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
                    this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
                  }
                } else {
                  this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
                  if (round !== 0) {
                    this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
                    this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
                    this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
                    this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
                    this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
                    this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
                    this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
                  } else {
                    this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
                    this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
                    this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
                  }
                }
              },
              getValue: function getValue() {
                if (this.elem.globalData.frameId === this.frameId) {
                  return;
                }
                this.frameId = this.elem.globalData.frameId;
                this.iterateDynamicProperties();
                if (this._mdf) {
                  this.convertRectToPath();
                }
              },
              reset: resetShape
            };
            extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
            return RectShapePropertyFactory;
          }();
          function getShapeProp(elem2, data2, type) {
            var prop;
            if (type === 3 || type === 4) {
              var dataProp = type === 3 ? data2.pt : data2.ks;
              var keys = dataProp.k;
              if (keys.length) {
                prop = new KeyframedShapeProperty(elem2, data2, type);
              } else {
                prop = new ShapeProperty(elem2, data2, type);
              }
            } else if (type === 5) {
              prop = new RectShapeProperty(elem2, data2);
            } else if (type === 6) {
              prop = new EllShapeProperty(elem2, data2);
            } else if (type === 7) {
              prop = new StarShapeProperty(elem2, data2);
            }
            if (prop.k) {
              elem2.addDynamicProperty(prop);
            }
            return prop;
          }
          function getConstructorFunction() {
            return ShapeProperty;
          }
          function getKeyframedConstructorFunction() {
            return KeyframedShapeProperty;
          }
          var ob2 = {};
          ob2.getShapeProp = getShapeProp;
          ob2.getConstructorFunction = getConstructorFunction;
          ob2.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
          return ob2;
        }();
        var Matrix = /* @__PURE__ */ function() {
          var _cos2 = Math.cos;
          var _sin2 = Math.sin;
          var _tan = Math.tan;
          var _rnd = Math.round;
          function reset() {
            this.props[0] = 1;
            this.props[1] = 0;
            this.props[2] = 0;
            this.props[3] = 0;
            this.props[4] = 0;
            this.props[5] = 1;
            this.props[6] = 0;
            this.props[7] = 0;
            this.props[8] = 0;
            this.props[9] = 0;
            this.props[10] = 1;
            this.props[11] = 0;
            this.props[12] = 0;
            this.props[13] = 0;
            this.props[14] = 0;
            this.props[15] = 1;
            return this;
          }
          function rotate(angle) {
            if (angle === 0) {
              return this;
            }
            var mCos = _cos2(angle);
            var mSin = _sin2(angle);
            return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function rotateX(angle) {
            if (angle === 0) {
              return this;
            }
            var mCos = _cos2(angle);
            var mSin = _sin2(angle);
            return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
          }
          function rotateY(angle) {
            if (angle === 0) {
              return this;
            }
            var mCos = _cos2(angle);
            var mSin = _sin2(angle);
            return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
          }
          function rotateZ(angle) {
            if (angle === 0) {
              return this;
            }
            var mCos = _cos2(angle);
            var mSin = _sin2(angle);
            return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function shear(sx, sy) {
            return this._t(1, sy, sx, 1, 0, 0);
          }
          function skew(ax, ay) {
            return this.shear(_tan(ax), _tan(ay));
          }
          function skewFromAxis(ax, angle) {
            var mCos = _cos2(angle);
            var mSin = _sin2(angle);
            return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function scale2(sx, sy, sz) {
            if (!sz && sz !== 0) {
              sz = 1;
            }
            if (sx === 1 && sy === 1 && sz === 1) {
              return this;
            }
            return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
          }
          function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            this.props[0] = a;
            this.props[1] = b;
            this.props[2] = c;
            this.props[3] = d;
            this.props[4] = e;
            this.props[5] = f;
            this.props[6] = g;
            this.props[7] = h;
            this.props[8] = i;
            this.props[9] = j;
            this.props[10] = k;
            this.props[11] = l;
            this.props[12] = m;
            this.props[13] = n;
            this.props[14] = o;
            this.props[15] = p;
            return this;
          }
          function translate(tx, ty, tz) {
            tz = tz || 0;
            if (tx !== 0 || ty !== 0 || tz !== 0) {
              return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
            }
            return this;
          }
          function transform2(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
            var _p = this.props;
            if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
              _p[12] = _p[12] * a2 + _p[15] * m2;
              _p[13] = _p[13] * f2 + _p[15] * n2;
              _p[14] = _p[14] * k2 + _p[15] * o2;
              _p[15] *= p2;
              this._identityCalculated = false;
              return this;
            }
            var a1 = _p[0];
            var b1 = _p[1];
            var c1 = _p[2];
            var d1 = _p[3];
            var e1 = _p[4];
            var f1 = _p[5];
            var g1 = _p[6];
            var h1 = _p[7];
            var i1 = _p[8];
            var j1 = _p[9];
            var k1 = _p[10];
            var l1 = _p[11];
            var m1 = _p[12];
            var n1 = _p[13];
            var o1 = _p[14];
            var p1 = _p[15];
            _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
            _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
            _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
            _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
            _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
            _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
            _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
            _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
            _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
            _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
            _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
            _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
            _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
            _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
            _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
            _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
            this._identityCalculated = false;
            return this;
          }
          function multiply(matrix) {
            var matrixProps = matrix.props;
            return this.transform(matrixProps[0], matrixProps[1], matrixProps[2], matrixProps[3], matrixProps[4], matrixProps[5], matrixProps[6], matrixProps[7], matrixProps[8], matrixProps[9], matrixProps[10], matrixProps[11], matrixProps[12], matrixProps[13], matrixProps[14], matrixProps[15]);
          }
          function isIdentity() {
            if (!this._identityCalculated) {
              this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
              this._identityCalculated = true;
            }
            return this._identity;
          }
          function equals(matr) {
            var i = 0;
            while (i < 16) {
              if (matr.props[i] !== this.props[i]) {
                return false;
              }
              i += 1;
            }
            return true;
          }
          function clone(matr) {
            var i;
            for (i = 0; i < 16; i += 1) {
              matr.props[i] = this.props[i];
            }
            return matr;
          }
          function cloneFromProps(props) {
            var i;
            for (i = 0; i < 16; i += 1) {
              this.props[i] = props[i];
            }
          }
          function applyToPoint(x, y, z) {
            return {
              x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
              y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
              z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
            };
          }
          function applyToX(x, y, z) {
            return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
          }
          function applyToY(x, y, z) {
            return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
          }
          function applyToZ(x, y, z) {
            return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
          }
          function getInverseMatrix() {
            var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
            var a = this.props[5] / determinant;
            var b = -this.props[1] / determinant;
            var c = -this.props[4] / determinant;
            var d = this.props[0] / determinant;
            var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
            var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
            var inverseMatrix = new Matrix();
            inverseMatrix.props[0] = a;
            inverseMatrix.props[1] = b;
            inverseMatrix.props[4] = c;
            inverseMatrix.props[5] = d;
            inverseMatrix.props[12] = e;
            inverseMatrix.props[13] = f;
            return inverseMatrix;
          }
          function inversePoint(pt) {
            var inverseMatrix = this.getInverseMatrix();
            return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
          }
          function inversePoints(pts) {
            var i;
            var len = pts.length;
            var retPts = [];
            for (i = 0; i < len; i += 1) {
              retPts[i] = inversePoint(pts[i]);
            }
            return retPts;
          }
          function applyToTriplePoints(pt1, pt2, pt3) {
            var arr = createTypedArray("float32", 6);
            if (this.isIdentity()) {
              arr[0] = pt1[0];
              arr[1] = pt1[1];
              arr[2] = pt2[0];
              arr[3] = pt2[1];
              arr[4] = pt3[0];
              arr[5] = pt3[1];
            } else {
              var p0 = this.props[0];
              var p1 = this.props[1];
              var p4 = this.props[4];
              var p5 = this.props[5];
              var p12 = this.props[12];
              var p13 = this.props[13];
              arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
              arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
              arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
              arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
              arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
              arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
            }
            return arr;
          }
          function applyToPointArray(x, y, z) {
            var arr;
            if (this.isIdentity()) {
              arr = [x, y, z];
            } else {
              arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
            }
            return arr;
          }
          function applyToPointStringified(x, y) {
            if (this.isIdentity()) {
              return x + "," + y;
            }
            var _p = this.props;
            return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + "," + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
          }
          function toCSS() {
            var i = 0;
            var props = this.props;
            var cssValue = "matrix3d(";
            var v = 1e4;
            while (i < 16) {
              cssValue += _rnd(props[i] * v) / v;
              cssValue += i === 15 ? ")" : ",";
              i += 1;
            }
            return cssValue;
          }
          function roundMatrixProperty(val2) {
            var v = 1e4;
            if (val2 < 1e-6 && val2 > 0 || val2 > -1e-6 && val2 < 0) {
              return _rnd(val2 * v) / v;
            }
            return val2;
          }
          function to2dCSS() {
            var props = this.props;
            var _a = roundMatrixProperty(props[0]);
            var _b = roundMatrixProperty(props[1]);
            var _c = roundMatrixProperty(props[4]);
            var _d = roundMatrixProperty(props[5]);
            var _e = roundMatrixProperty(props[12]);
            var _f = roundMatrixProperty(props[13]);
            return "matrix(" + _a + "," + _b + "," + _c + "," + _d + "," + _e + "," + _f + ")";
          }
          return function() {
            this.reset = reset;
            this.rotate = rotate;
            this.rotateX = rotateX;
            this.rotateY = rotateY;
            this.rotateZ = rotateZ;
            this.skew = skew;
            this.skewFromAxis = skewFromAxis;
            this.shear = shear;
            this.scale = scale2;
            this.setTransform = setTransform;
            this.translate = translate;
            this.transform = transform2;
            this.multiply = multiply;
            this.applyToPoint = applyToPoint;
            this.applyToX = applyToX;
            this.applyToY = applyToY;
            this.applyToZ = applyToZ;
            this.applyToPointArray = applyToPointArray;
            this.applyToTriplePoints = applyToTriplePoints;
            this.applyToPointStringified = applyToPointStringified;
            this.toCSS = toCSS;
            this.to2dCSS = to2dCSS;
            this.clone = clone;
            this.cloneFromProps = cloneFromProps;
            this.equals = equals;
            this.inversePoints = inversePoints;
            this.inversePoint = inversePoint;
            this.getInverseMatrix = getInverseMatrix;
            this._t = this.transform;
            this.isIdentity = isIdentity;
            this._identity = true;
            this._identityCalculated = false;
            this.props = createTypedArray("float32", 16);
            this.reset();
          };
        }();
        function _typeof$3(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$3 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$3 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$3(obj);
        }
        var lottie = {};
        var standalone = "__[STANDALONE]__";
        var animationData = "__[ANIMATIONDATA]__";
        var renderer = "";
        function setLocation(href) {
          setLocationHref(href);
        }
        function searchAnimations() {
          if (standalone === true) {
            animationManager.searchAnimations(animationData, standalone, renderer);
          } else {
            animationManager.searchAnimations();
          }
        }
        function setSubframeRendering(flag) {
          setSubframeEnabled(flag);
        }
        function setPrefix(prefix) {
          setIdPrefix(prefix);
        }
        function loadAnimation(params) {
          if (standalone === true) {
            params.animationData = JSON.parse(animationData);
          }
          return animationManager.loadAnimation(params);
        }
        function setQuality(value2) {
          if (typeof value2 === "string") {
            switch (value2) {
              case "high":
                setDefaultCurveSegments(200);
                break;
              default:
              case "medium":
                setDefaultCurveSegments(50);
                break;
              case "low":
                setDefaultCurveSegments(10);
                break;
            }
          } else if (!isNaN(value2) && value2 > 1) {
            setDefaultCurveSegments(value2);
          }
          if (getDefaultCurveSegments() >= 50) {
            roundValues(false);
          } else {
            roundValues(true);
          }
        }
        function inBrowser() {
          return typeof navigator !== "undefined";
        }
        function installPlugin(type, plugin) {
          if (type === "expressions") {
            setExpressionsPlugin(plugin);
          }
        }
        function getFactory(name2) {
          switch (name2) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null;
          }
        }
        lottie.play = animationManager.play;
        lottie.pause = animationManager.pause;
        lottie.setLocationHref = setLocation;
        lottie.togglePause = animationManager.togglePause;
        lottie.setSpeed = animationManager.setSpeed;
        lottie.setDirection = animationManager.setDirection;
        lottie.stop = animationManager.stop;
        lottie.searchAnimations = searchAnimations;
        lottie.registerAnimation = animationManager.registerAnimation;
        lottie.loadAnimation = loadAnimation;
        lottie.setSubframeRendering = setSubframeRendering;
        lottie.resize = animationManager.resize;
        lottie.goToAndStop = animationManager.goToAndStop;
        lottie.destroy = animationManager.destroy;
        lottie.setQuality = setQuality;
        lottie.inBrowser = inBrowser;
        lottie.installPlugin = installPlugin;
        lottie.freeze = animationManager.freeze;
        lottie.unfreeze = animationManager.unfreeze;
        lottie.setVolume = animationManager.setVolume;
        lottie.mute = animationManager.mute;
        lottie.unmute = animationManager.unmute;
        lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
        lottie.useWebWorker = setWebWorker;
        lottie.setIDPrefix = setPrefix;
        lottie.__getFactory = getFactory;
        lottie.version = "5.12.2";
        function checkReady() {
          if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            searchAnimations();
          }
        }
        function getQueryVariable(variable) {
          var vars = queryString.split("&");
          for (var i = 0; i < vars.length; i += 1) {
            var pair = vars[i].split("=");
            if (decodeURIComponent(pair[0]) == variable) {
              return decodeURIComponent(pair[1]);
            }
          }
          return null;
        }
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script");
          var index = scripts.length - 1;
          var myScript = scripts[index] || {
            src: ""
          };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "";
          renderer = getQueryVariable("renderer");
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          if (!((typeof exports === "undefined" ? "undefined" : _typeof$3(exports)) === "object" && typeof module !== "undefined") && !(typeof define === "function" && define.amd)) {
            window.bodymovin = lottie;
          }
        } catch (err) {
        }
        var ShapeModifiers = function() {
          var ob2 = {};
          var modifiers = {};
          ob2.registerModifier = registerModifier;
          ob2.getModifier = getModifier;
          function registerModifier(nm, factory) {
            if (!modifiers[nm]) {
              modifiers[nm] = factory;
            }
          }
          function getModifier(nm, elem2, data2) {
            return new modifiers[nm](elem2, data2);
          }
          return ob2;
        }();
        function ShapeModifier() {
        }
        ShapeModifier.prototype.initModifierProperties = function() {
        };
        ShapeModifier.prototype.addShapeToModifier = function() {
        };
        ShapeModifier.prototype.addShape = function(data2) {
          if (!this.closed) {
            data2.sh.container.addDynamicProperty(data2.sh);
            var shapeData = {
              shape: data2.sh,
              data: data2,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(shapeData);
            this.addShapeToModifier(shapeData);
            if (this._isAnimated) {
              data2.setAsAnimated();
            }
          }
        };
        ShapeModifier.prototype.init = function(elem2, data2) {
          this.shapes = [];
          this.elem = elem2;
          this.initDynamicPropertyContainer(elem2);
          this.initModifierProperties(elem2, data2);
          this.frameId = initialDefaultFrame;
          this.closed = false;
          this.k = false;
          if (this.dynamicProperties.length) {
            this.k = true;
          } else {
            this.getValue(true);
          }
        };
        ShapeModifier.prototype.processKeys = function() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }
          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();
        };
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
        function TrimModifier() {
        }
        extendPrototype([ShapeModifier], TrimModifier);
        TrimModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.s = PropertyFactory.getProp(elem2, data2.s, 0, 0.01, this);
          this.e = PropertyFactory.getProp(elem2, data2.e, 0, 0.01, this);
          this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0, this);
          this.sValue = 0;
          this.eValue = 0;
          this.getValue = this.processKeys;
          this.m = data2.m;
          this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        };
        TrimModifier.prototype.addShapeToModifier = function(shapeData) {
          shapeData.pathsData = [];
        };
        TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
          var segments = [];
          if (e <= 1) {
            segments.push({
              s,
              e
            });
          } else if (s >= 1) {
            segments.push({
              s: s - 1,
              e: e - 1
            });
          } else {
            segments.push({
              s,
              e: 1
            });
            segments.push({
              s: 0,
              e: e - 1
            });
          }
          var shapeSegments = [];
          var i;
          var len = segments.length;
          var segmentOb;
          for (i = 0; i < len; i += 1) {
            segmentOb = segments[i];
            if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
              var shapeS;
              var shapeE;
              if (segmentOb.s * totalModifierLength <= addedLength) {
                shapeS = 0;
              } else {
                shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
              }
              if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
                shapeE = 1;
              } else {
                shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
              }
              shapeSegments.push([shapeS, shapeE]);
            }
          }
          if (!shapeSegments.length) {
            shapeSegments.push([0, 0]);
          }
          return shapeSegments;
        };
        TrimModifier.prototype.releasePathsData = function(pathsData) {
          var i;
          var len = pathsData.length;
          for (i = 0; i < len; i += 1) {
            segmentsLengthPool.release(pathsData[i]);
          }
          pathsData.length = 0;
          return pathsData;
        };
        TrimModifier.prototype.processShapes = function(_isFirstFrame) {
          var s;
          var e;
          if (this._mdf || _isFirstFrame) {
            var o = this.o.v % 360 / 360;
            if (o < 0) {
              o += 1;
            }
            if (this.s.v > 1) {
              s = 1 + o;
            } else if (this.s.v < 0) {
              s = 0 + o;
            } else {
              s = this.s.v + o;
            }
            if (this.e.v > 1) {
              e = 1 + o;
            } else if (this.e.v < 0) {
              e = 0 + o;
            } else {
              e = this.e.v + o;
            }
            if (s > e) {
              var _s = s;
              s = e;
              e = _s;
            }
            s = Math.round(s * 1e4) * 1e-4;
            e = Math.round(e * 1e4) * 1e-4;
            this.sValue = s;
            this.eValue = e;
          } else {
            s = this.sValue;
            e = this.eValue;
          }
          var shapePaths;
          var i;
          var len = this.shapes.length;
          var j;
          var jLen;
          var pathsData;
          var pathData;
          var totalShapeLength;
          var totalModifierLength = 0;
          if (e === s) {
            for (i = 0; i < len; i += 1) {
              this.shapes[i].localShapeCollection.releaseShapes();
              this.shapes[i].shape._mdf = true;
              this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
              if (this._mdf) {
                this.shapes[i].pathsData.length = 0;
              }
            }
          } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
            var segments = [];
            var shapeData;
            var localShapeCollection;
            for (i = 0; i < len; i += 1) {
              shapeData = this.shapes[i];
              if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
                shapeData.shape.paths = shapeData.localShapeCollection;
              } else {
                shapePaths = shapeData.shape.paths;
                jLen = shapePaths._length;
                totalShapeLength = 0;
                if (!shapeData.shape._mdf && shapeData.pathsData.length) {
                  totalShapeLength = shapeData.totalShapeLength;
                } else {
                  pathsData = this.releasePathsData(shapeData.pathsData);
                  for (j = 0; j < jLen; j += 1) {
                    pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
                    pathsData.push(pathData);
                    totalShapeLength += pathData.totalLength;
                  }
                  shapeData.totalShapeLength = totalShapeLength;
                  shapeData.pathsData = pathsData;
                }
                totalModifierLength += totalShapeLength;
                shapeData.shape._mdf = true;
              }
            }
            var shapeS = s;
            var shapeE = e;
            var addedLength = 0;
            var edges;
            for (i = len - 1; i >= 0; i -= 1) {
              shapeData = this.shapes[i];
              if (shapeData.shape._mdf) {
                localShapeCollection = shapeData.localShapeCollection;
                localShapeCollection.releaseShapes();
                if (this.m === 2 && len > 1) {
                  edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                  addedLength += shapeData.totalShapeLength;
                } else {
                  edges = [[shapeS, shapeE]];
                }
                jLen = edges.length;
                for (j = 0; j < jLen; j += 1) {
                  shapeS = edges[j][0];
                  shapeE = edges[j][1];
                  segments.length = 0;
                  if (shapeE <= 1) {
                    segments.push({
                      s: shapeData.totalShapeLength * shapeS,
                      e: shapeData.totalShapeLength * shapeE
                    });
                  } else if (shapeS >= 1) {
                    segments.push({
                      s: shapeData.totalShapeLength * (shapeS - 1),
                      e: shapeData.totalShapeLength * (shapeE - 1)
                    });
                  } else {
                    segments.push({
                      s: shapeData.totalShapeLength * shapeS,
                      e: shapeData.totalShapeLength
                    });
                    segments.push({
                      s: 0,
                      e: shapeData.totalShapeLength * (shapeE - 1)
                    });
                  }
                  var newShapesData = this.addShapes(shapeData, segments[0]);
                  if (segments[0].s !== segments[0].e) {
                    if (segments.length > 1) {
                      var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
                      if (lastShapeInCollection.c) {
                        var lastShape = newShapesData.pop();
                        this.addPaths(newShapesData, localShapeCollection);
                        newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                      } else {
                        this.addPaths(newShapesData, localShapeCollection);
                        newShapesData = this.addShapes(shapeData, segments[1]);
                      }
                    }
                    this.addPaths(newShapesData, localShapeCollection);
                  }
                }
                shapeData.shape.paths = localShapeCollection;
              }
            }
          } else if (this._mdf) {
            for (i = 0; i < len; i += 1) {
              this.shapes[i].pathsData.length = 0;
              this.shapes[i].shape._mdf = true;
            }
          }
        };
        TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) {
          var i;
          var len = newPaths.length;
          for (i = 0; i < len; i += 1) {
            localShapeCollection.addShape(newPaths[i]);
          }
        };
        TrimModifier.prototype.addSegment = function(pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
          shapePath.setXYAt(pt2[0], pt2[1], "o", pos);
          shapePath.setXYAt(pt3[0], pt3[1], "i", pos + 1);
          if (newShape) {
            shapePath.setXYAt(pt1[0], pt1[1], "v", pos);
          }
          shapePath.setXYAt(pt4[0], pt4[1], "v", pos + 1);
        };
        TrimModifier.prototype.addSegmentFromArray = function(points, shapePath, pos, newShape) {
          shapePath.setXYAt(points[1], points[5], "o", pos);
          shapePath.setXYAt(points[2], points[6], "i", pos + 1);
          if (newShape) {
            shapePath.setXYAt(points[0], points[4], "v", pos);
          }
          shapePath.setXYAt(points[3], points[7], "v", pos + 1);
        };
        TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath) {
          var pathsData = shapeData.pathsData;
          var shapePaths = shapeData.shape.paths.shapes;
          var i;
          var len = shapeData.shape.paths._length;
          var j;
          var jLen;
          var addedLength = 0;
          var currentLengthData;
          var segmentCount;
          var lengths;
          var segment;
          var shapes = [];
          var initPos;
          var newShape = true;
          if (!shapePath) {
            shapePath = shapePool.newElement();
            segmentCount = 0;
            initPos = 0;
          } else {
            segmentCount = shapePath._length;
            initPos = shapePath._length;
          }
          shapes.push(shapePath);
          for (i = 0; i < len; i += 1) {
            lengths = pathsData[i].lengths;
            shapePath.c = shapePaths[i].c;
            jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
            for (j = 1; j < jLen; j += 1) {
              currentLengthData = lengths[j - 1];
              if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
                addedLength += currentLengthData.addedLength;
                shapePath.c = false;
              } else if (addedLength > shapeSegment.e) {
                shapePath.c = false;
                break;
              } else {
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
                  this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
                  newShape = false;
                } else {
                  segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
                  this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                  newShape = false;
                  shapePath.c = false;
                }
                addedLength += currentLengthData.addedLength;
                segmentCount += 1;
              }
            }
            if (shapePaths[i].c && lengths.length) {
              currentLengthData = lengths[j - 1];
              if (addedLength <= shapeSegment.e) {
                var segmentLength = lengths[j - 1].addedLength;
                if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
                  this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
                  newShape = false;
                } else {
                  segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
                  this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                  newShape = false;
                  shapePath.c = false;
                }
              } else {
                shapePath.c = false;
              }
              addedLength += currentLengthData.addedLength;
              segmentCount += 1;
            }
            if (shapePath._length) {
              shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], "i", initPos);
              shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], "o", shapePath._length - 1);
            }
            if (addedLength > shapeSegment.e) {
              break;
            }
            if (i < len - 1) {
              shapePath = shapePool.newElement();
              newShape = true;
              shapes.push(shapePath);
              segmentCount = 0;
            }
          }
          return shapes;
        };
        function PuckerAndBloatModifier() {
        }
        extendPrototype([ShapeModifier], PuckerAndBloatModifier);
        PuckerAndBloatModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.getValue = this.processKeys;
          this.amount = PropertyFactory.getProp(elem2, data2.a, 0, null, this);
          this._isAnimated = !!this.amount.effectsSequence.length;
        };
        PuckerAndBloatModifier.prototype.processPath = function(path, amount) {
          var percent = amount / 100;
          var centerPoint = [0, 0];
          var pathLength = path._length;
          var i = 0;
          for (i = 0; i < pathLength; i += 1) {
            centerPoint[0] += path.v[i][0];
            centerPoint[1] += path.v[i][1];
          }
          centerPoint[0] /= pathLength;
          centerPoint[1] /= pathLength;
          var clonedPath = shapePool.newElement();
          clonedPath.c = path.c;
          var vX;
          var vY;
          var oX;
          var oY;
          var iX;
          var iY;
          for (i = 0; i < pathLength; i += 1) {
            vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
            vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
            oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
            oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
            iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
            iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
            clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
          }
          return clonedPath;
        };
        PuckerAndBloatModifier.prototype.processShapes = function(_isFirstFrame) {
          var shapePaths;
          var i;
          var len = this.shapes.length;
          var j;
          var jLen;
          var amount = this.amount.v;
          if (amount !== 0) {
            var shapeData;
            var localShapeCollection;
            for (i = 0; i < len; i += 1) {
              shapeData = this.shapes[i];
              localShapeCollection = shapeData.localShapeCollection;
              if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for (j = 0; j < jLen; j += 1) {
                  localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
                }
              }
              shapeData.shape.paths = shapeData.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        var TransformPropertyFactory = function() {
          var defaultVector = [0, 0];
          function applyToMatrix(mat) {
            var _mdf = this._mdf;
            this.iterateDynamicProperties();
            this._mdf = this._mdf || _mdf;
            if (this.a) {
              mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if (this.s) {
              mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.sk) {
              mat.skewFromAxis(-this.sk.v, this.sa.v);
            }
            if (this.r) {
              mat.rotate(-this.r.v);
            } else {
              mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.data.p.s) {
              if (this.data.p.z) {
                mat.translate(this.px.v, this.py.v, -this.pz.v);
              } else {
                mat.translate(this.px.v, this.py.v, 0);
              }
            } else {
              mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
          }
          function processKeys(forceRender) {
            if (this.elem.globalData.frameId === this.frameId) {
              return;
            }
            if (this._isDirty) {
              this.precalculateMatrix();
              this._isDirty = false;
            }
            this.iterateDynamicProperties();
            if (this._mdf || forceRender) {
              var frameRate;
              this.v.cloneFromProps(this.pre.props);
              if (this.appliedTransformations < 1) {
                this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
              }
              if (this.appliedTransformations < 2) {
                this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
              }
              if (this.sk && this.appliedTransformations < 3) {
                this.v.skewFromAxis(-this.sk.v, this.sa.v);
              }
              if (this.r && this.appliedTransformations < 4) {
                this.v.rotate(-this.r.v);
              } else if (!this.r && this.appliedTransformations < 4) {
                this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
              }
              if (this.autoOriented) {
                var v1;
                var v2;
                frameRate = this.elem.globalData.frameRate;
                if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                  if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                    v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
                    v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
                  } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                    v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
                    v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
                  } else {
                    v1 = this.p.pv;
                    v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
                  }
                } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                  v1 = [];
                  v2 = [];
                  var px = this.px;
                  var py = this.py;
                  if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
                    v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
                    v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
                    v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
                    v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
                  } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
                    v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
                    v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
                    v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
                    v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
                  } else {
                    v1 = [px.pv, py.pv];
                    v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
                    v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
                  }
                } else {
                  v2 = defaultVector;
                  v1 = v2;
                }
                this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
              }
              if (this.data.p && this.data.p.s) {
                if (this.data.p.z) {
                  this.v.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                  this.v.translate(this.px.v, this.py.v, 0);
                }
              } else {
                this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
            }
            this.frameId = this.elem.globalData.frameId;
          }
          function precalculateMatrix() {
            this.appliedTransformations = 0;
            this.pre.reset();
            if (!this.a.effectsSequence.length) {
              this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
              this.appliedTransformations = 1;
            } else {
              return;
            }
            if (!this.s.effectsSequence.length) {
              this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
              this.appliedTransformations = 2;
            } else {
              return;
            }
            if (this.sk) {
              if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
                this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                this.appliedTransformations = 3;
              } else {
                return;
              }
            }
            if (this.r) {
              if (!this.r.effectsSequence.length) {
                this.pre.rotate(-this.r.v);
                this.appliedTransformations = 4;
              }
            } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
              this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
              this.appliedTransformations = 4;
            }
          }
          function autoOrient() {
          }
          function addDynamicProperty(prop) {
            this._addDynamicProperty(prop);
            this.elem.addDynamicProperty(prop);
            this._isDirty = true;
          }
          function TransformProperty(elem2, data2, container) {
            this.elem = elem2;
            this.frameId = -1;
            this.propType = "transform";
            this.data = data2;
            this.v = new Matrix();
            this.pre = new Matrix();
            this.appliedTransformations = 0;
            this.initDynamicPropertyContainer(container || elem2);
            if (data2.p && data2.p.s) {
              this.px = PropertyFactory.getProp(elem2, data2.p.x, 0, 0, this);
              this.py = PropertyFactory.getProp(elem2, data2.p.y, 0, 0, this);
              if (data2.p.z) {
                this.pz = PropertyFactory.getProp(elem2, data2.p.z, 0, 0, this);
              }
            } else {
              this.p = PropertyFactory.getProp(elem2, data2.p || {
                k: [0, 0, 0]
              }, 1, 0, this);
            }
            if (data2.rx) {
              this.rx = PropertyFactory.getProp(elem2, data2.rx, 0, degToRads, this);
              this.ry = PropertyFactory.getProp(elem2, data2.ry, 0, degToRads, this);
              this.rz = PropertyFactory.getProp(elem2, data2.rz, 0, degToRads, this);
              if (data2.or.k[0].ti) {
                var i;
                var len = data2.or.k.length;
                for (i = 0; i < len; i += 1) {
                  data2.or.k[i].to = null;
                  data2.or.k[i].ti = null;
                }
              }
              this.or = PropertyFactory.getProp(elem2, data2.or, 1, degToRads, this);
              this.or.sh = true;
            } else {
              this.r = PropertyFactory.getProp(elem2, data2.r || {
                k: 0
              }, 0, degToRads, this);
            }
            if (data2.sk) {
              this.sk = PropertyFactory.getProp(elem2, data2.sk, 0, degToRads, this);
              this.sa = PropertyFactory.getProp(elem2, data2.sa, 0, degToRads, this);
            }
            this.a = PropertyFactory.getProp(elem2, data2.a || {
              k: [0, 0, 0]
            }, 1, 0, this);
            this.s = PropertyFactory.getProp(elem2, data2.s || {
              k: [100, 100, 100]
            }, 1, 0.01, this);
            if (data2.o) {
              this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, elem2);
            } else {
              this.o = {
                _mdf: false,
                v: 1
              };
            }
            this._isDirty = true;
            if (!this.dynamicProperties.length) {
              this.getValue(true);
            }
          }
          TransformProperty.prototype = {
            applyToMatrix,
            getValue: processKeys,
            precalculateMatrix,
            autoOrient
          };
          extendPrototype([DynamicPropertyContainer], TransformProperty);
          TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
          TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
          function getTransformProperty(elem2, data2, container) {
            return new TransformProperty(elem2, data2, container);
          }
          return {
            getTransformProperty
          };
        }();
        function RepeaterModifier() {
        }
        extendPrototype([ShapeModifier], RepeaterModifier);
        RepeaterModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.getValue = this.processKeys;
          this.c = PropertyFactory.getProp(elem2, data2.c, 0, null, this);
          this.o = PropertyFactory.getProp(elem2, data2.o, 0, null, this);
          this.tr = TransformPropertyFactory.getTransformProperty(elem2, data2.tr, this);
          this.so = PropertyFactory.getProp(elem2, data2.tr.so, 0, 0.01, this);
          this.eo = PropertyFactory.getProp(elem2, data2.tr.eo, 0, 0.01, this);
          this.data = data2;
          if (!this.dynamicProperties.length) {
            this.getValue(true);
          }
          this._isAnimated = !!this.dynamicProperties.length;
          this.pMatrix = new Matrix();
          this.rMatrix = new Matrix();
          this.sMatrix = new Matrix();
          this.tMatrix = new Matrix();
          this.matrix = new Matrix();
        };
        RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform2, perc, inv) {
          var dir = inv ? -1 : 1;
          var scaleX = transform2.s.v[0] + (1 - transform2.s.v[0]) * (1 - perc);
          var scaleY = transform2.s.v[1] + (1 - transform2.s.v[1]) * (1 - perc);
          pMatrix.translate(transform2.p.v[0] * dir * perc, transform2.p.v[1] * dir * perc, transform2.p.v[2]);
          rMatrix.translate(-transform2.a.v[0], -transform2.a.v[1], transform2.a.v[2]);
          rMatrix.rotate(-transform2.r.v * dir * perc);
          rMatrix.translate(transform2.a.v[0], transform2.a.v[1], transform2.a.v[2]);
          sMatrix.translate(-transform2.a.v[0], -transform2.a.v[1], transform2.a.v[2]);
          sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
          sMatrix.translate(transform2.a.v[0], transform2.a.v[1], transform2.a.v[2]);
        };
        RepeaterModifier.prototype.init = function(elem2, arr, pos, elemsData) {
          this.elem = elem2;
          this.arr = arr;
          this.pos = pos;
          this.elemsData = elemsData;
          this._currentCopies = 0;
          this._elements = [];
          this._groups = [];
          this.frameId = -1;
          this.initDynamicPropertyContainer(elem2);
          this.initModifierProperties(elem2, arr[pos]);
          while (pos > 0) {
            pos -= 1;
            this._elements.unshift(arr[pos]);
          }
          if (this.dynamicProperties.length) {
            this.k = true;
          } else {
            this.getValue(true);
          }
        };
        RepeaterModifier.prototype.resetElements = function(elements) {
          var i;
          var len = elements.length;
          for (i = 0; i < len; i += 1) {
            elements[i]._processed = false;
            if (elements[i].ty === "gr") {
              this.resetElements(elements[i].it);
            }
          }
        };
        RepeaterModifier.prototype.cloneElements = function(elements) {
          var newElements = JSON.parse(JSON.stringify(elements));
          this.resetElements(newElements);
          return newElements;
        };
        RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) {
          var i;
          var len = elements.length;
          for (i = 0; i < len; i += 1) {
            elements[i]._render = renderFlag;
            if (elements[i].ty === "gr") {
              this.changeGroupRender(elements[i].it, renderFlag);
            }
          }
        };
        RepeaterModifier.prototype.processShapes = function(_isFirstFrame) {
          var items;
          var itemsTransform;
          var i;
          var dir;
          var cont;
          var hasReloaded = false;
          if (this._mdf || _isFirstFrame) {
            var copies = Math.ceil(this.c.v);
            if (this._groups.length < copies) {
              while (this._groups.length < copies) {
                var group = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                group.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                });
                this.arr.splice(0, 0, group);
                this._groups.splice(0, 0, group);
                this._currentCopies += 1;
              }
              this.elem.reloadShapes();
              hasReloaded = true;
            }
            cont = 0;
            var renderFlag;
            for (i = 0; i <= this._groups.length - 1; i += 1) {
              renderFlag = cont < copies;
              this._groups[i]._render = renderFlag;
              this.changeGroupRender(this._groups[i].it, renderFlag);
              if (!renderFlag) {
                var elems = this.elemsData[i].it;
                var transformData = elems[elems.length - 1];
                if (transformData.transform.op.v !== 0) {
                  transformData.transform.op._mdf = true;
                  transformData.transform.op.v = 0;
                } else {
                  transformData.transform.op._mdf = false;
                }
              }
              cont += 1;
            }
            this._currentCopies = copies;
            var offset = this.o.v;
            var offsetModulo = offset % 1;
            var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
            var pProps = this.pMatrix.props;
            var rProps = this.rMatrix.props;
            var sProps = this.sMatrix.props;
            this.pMatrix.reset();
            this.rMatrix.reset();
            this.sMatrix.reset();
            this.tMatrix.reset();
            this.matrix.reset();
            var iteration = 0;
            if (offset > 0) {
              while (iteration < roundOffset) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                iteration += 1;
              }
              if (offsetModulo) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
                iteration += offsetModulo;
              }
            } else if (offset < 0) {
              while (iteration > roundOffset) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                iteration -= 1;
              }
              if (offsetModulo) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
                iteration -= offsetModulo;
              }
            }
            i = this.data.m === 1 ? 0 : this._currentCopies - 1;
            dir = this.data.m === 1 ? 1 : -1;
            cont = this._currentCopies;
            var j;
            var jLen;
            while (cont) {
              items = this.elemsData[i].it;
              itemsTransform = items[items.length - 1].transform.mProps.v.props;
              jLen = itemsTransform.length;
              items[items.length - 1].transform.mProps._mdf = true;
              items[items.length - 1].transform.op._mdf = true;
              items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
              if (iteration !== 0) {
                if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                }
                this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
                this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
                this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);
                for (j = 0; j < jLen; j += 1) {
                  itemsTransform[j] = this.matrix.props[j];
                }
                this.matrix.reset();
              } else {
                this.matrix.reset();
                for (j = 0; j < jLen; j += 1) {
                  itemsTransform[j] = this.matrix.props[j];
                }
              }
              iteration += 1;
              cont -= 1;
              i += dir;
            }
          } else {
            cont = this._currentCopies;
            i = 0;
            dir = 1;
            while (cont) {
              items = this.elemsData[i].it;
              itemsTransform = items[items.length - 1].transform.mProps.v.props;
              items[items.length - 1].transform.mProps._mdf = false;
              items[items.length - 1].transform.op._mdf = false;
              cont -= 1;
              i += dir;
            }
          }
          return hasReloaded;
        };
        RepeaterModifier.prototype.addShape = function() {
        };
        function RoundCornersModifier() {
        }
        extendPrototype([ShapeModifier], RoundCornersModifier);
        RoundCornersModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.getValue = this.processKeys;
          this.rd = PropertyFactory.getProp(elem2, data2.r, 0, null, this);
          this._isAnimated = !!this.rd.effectsSequence.length;
        };
        RoundCornersModifier.prototype.processPath = function(path, round) {
          var clonedPath = shapePool.newElement();
          clonedPath.c = path.c;
          var i;
          var len = path._length;
          var currentV;
          var currentI;
          var currentO;
          var closerV;
          var distance;
          var newPosPerc;
          var index2 = 0;
          var vX;
          var vY;
          var oX;
          var oY;
          var iX;
          var iY;
          for (i = 0; i < len; i += 1) {
            currentV = path.v[i];
            currentO = path.o[i];
            currentI = path.i[i];
            if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
              if ((i === 0 || i === len - 1) && !path.c) {
                clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index2);
                index2 += 1;
              } else {
                if (i === 0) {
                  closerV = path.v[len - 1];
                } else {
                  closerV = path.v[i - 1];
                }
                distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
                newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
                iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
                vX = iX;
                iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
                vY = iY;
                oX = vX - (vX - currentV[0]) * roundCorner;
                oY = vY - (vY - currentV[1]) * roundCorner;
                clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index2);
                index2 += 1;
                if (i === len - 1) {
                  closerV = path.v[0];
                } else {
                  closerV = path.v[i + 1];
                }
                distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
                newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
                oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
                vX = oX;
                oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
                vY = oY;
                iX = vX - (vX - currentV[0]) * roundCorner;
                iY = vY - (vY - currentV[1]) * roundCorner;
                clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index2);
                index2 += 1;
              }
            } else {
              clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index2);
              index2 += 1;
            }
          }
          return clonedPath;
        };
        RoundCornersModifier.prototype.processShapes = function(_isFirstFrame) {
          var shapePaths;
          var i;
          var len = this.shapes.length;
          var j;
          var jLen;
          var rd = this.rd.v;
          if (rd !== 0) {
            var shapeData;
            var localShapeCollection;
            for (i = 0; i < len; i += 1) {
              shapeData = this.shapes[i];
              localShapeCollection = shapeData.localShapeCollection;
              if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for (j = 0; j < jLen; j += 1) {
                  localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
                }
              }
              shapeData.shape.paths = shapeData.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        function floatEqual(a, b) {
          return Math.abs(a - b) * 1e5 <= Math.min(Math.abs(a), Math.abs(b));
        }
        function floatZero(f) {
          return Math.abs(f) <= 1e-5;
        }
        function lerp(p0, p1, amount) {
          return p0 * (1 - amount) + p1 * amount;
        }
        function lerpPoint(p0, p1, amount) {
          return [lerp(p0[0], p1[0], amount), lerp(p0[1], p1[1], amount)];
        }
        function quadRoots(a, b, c) {
          if (a === 0) return [];
          var s = b * b - 4 * a * c;
          if (s < 0) return [];
          var singleRoot = -b / (2 * a);
          if (s === 0) return [singleRoot];
          var delta = Math.sqrt(s) / (2 * a);
          return [singleRoot - delta, singleRoot + delta];
        }
        function polynomialCoefficients(p0, p1, p2, p3) {
          return [-p0 + 3 * p1 - 3 * p2 + p3, 3 * p0 - 6 * p1 + 3 * p2, -3 * p0 + 3 * p1, p0];
        }
        function singlePoint(p) {
          return new PolynomialBezier(p, p, p, p, false);
        }
        function PolynomialBezier(p0, p1, p2, p3, linearize) {
          if (linearize && pointEqual(p0, p1)) {
            p1 = lerpPoint(p0, p3, 1 / 3);
          }
          if (linearize && pointEqual(p2, p3)) {
            p2 = lerpPoint(p0, p3, 2 / 3);
          }
          var coeffx = polynomialCoefficients(p0[0], p1[0], p2[0], p3[0]);
          var coeffy = polynomialCoefficients(p0[1], p1[1], p2[1], p3[1]);
          this.a = [coeffx[0], coeffy[0]];
          this.b = [coeffx[1], coeffy[1]];
          this.c = [coeffx[2], coeffy[2]];
          this.d = [coeffx[3], coeffy[3]];
          this.points = [p0, p1, p2, p3];
        }
        PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
        };
        PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
        };
        PolynomialBezier.prototype.tangentAngle = function(t) {
          var p = this.derivative(t);
          return Math.atan2(p[1], p[0]);
        };
        PolynomialBezier.prototype.normalAngle = function(t) {
          var p = this.derivative(t);
          return Math.atan2(p[0], p[1]);
        };
        PolynomialBezier.prototype.inflectionPoints = function() {
          var denom = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(denom)) return [];
          var tcusp = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom;
          var square = tcusp * tcusp - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom;
          if (square < 0) return [];
          var root = Math.sqrt(square);
          if (floatZero(root)) {
            if (root > 0 && root < 1) return [tcusp];
            return [];
          }
          return [tcusp - root, tcusp + root].filter(function(r) {
            return r > 0 && r < 1;
          });
        };
        PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var p10 = lerpPoint(this.points[0], this.points[1], t);
          var p11 = lerpPoint(this.points[1], this.points[2], t);
          var p12 = lerpPoint(this.points[2], this.points[3], t);
          var p20 = lerpPoint(p10, p11, t);
          var p21 = lerpPoint(p11, p12, t);
          var p3 = lerpPoint(p20, p21, t);
          return [new PolynomialBezier(this.points[0], p10, p20, p3, true), new PolynomialBezier(p3, p21, p12, this.points[3], true)];
        };
        function extrema(bez2, comp2) {
          var min = bez2.points[0][comp2];
          var max = bez2.points[bez2.points.length - 1][comp2];
          if (min > max) {
            var e = max;
            max = min;
            min = e;
          }
          var f = quadRoots(3 * bez2.a[comp2], 2 * bez2.b[comp2], bez2.c[comp2]);
          for (var i = 0; i < f.length; i += 1) {
            if (f[i] > 0 && f[i] < 1) {
              var val2 = bez2.point(f[i])[comp2];
              if (val2 < min) min = val2;
              else if (val2 > max) max = val2;
            }
          }
          return {
            min,
            max
          };
        }
        PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          };
        };
        PolynomialBezier.prototype.boundingBox = function() {
          var bounds = this.bounds();
          return {
            left: bounds.x.min,
            right: bounds.x.max,
            top: bounds.y.min,
            bottom: bounds.y.max,
            width: bounds.x.max - bounds.x.min,
            height: bounds.y.max - bounds.y.min,
            cx: (bounds.x.max + bounds.x.min) / 2,
            cy: (bounds.y.max + bounds.y.min) / 2
          };
        };
        function intersectData(bez2, t1, t2) {
          var box = bez2.boundingBox();
          return {
            cx: box.cx,
            cy: box.cy,
            width: box.width,
            height: box.height,
            bez: bez2,
            t: (t1 + t2) / 2,
            t1,
            t2
          };
        }
        function splitData(data2) {
          var split = data2.bez.split(0.5);
          return [intersectData(split[0], data2.t1, data2.t), intersectData(split[1], data2.t, data2.t2)];
        }
        function boxIntersect(b1, b2) {
          return Math.abs(b1.cx - b2.cx) * 2 < b1.width + b2.width && Math.abs(b1.cy - b2.cy) * 2 < b1.height + b2.height;
        }
        function intersectsImpl(d1, d2, depth, tolerance, intersections, maxRecursion) {
          if (!boxIntersect(d1, d2)) return;
          if (depth >= maxRecursion || d1.width <= tolerance && d1.height <= tolerance && d2.width <= tolerance && d2.height <= tolerance) {
            intersections.push([d1.t, d2.t]);
            return;
          }
          var d1s = splitData(d1);
          var d2s = splitData(d2);
          intersectsImpl(d1s[0], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
          intersectsImpl(d1s[0], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
          intersectsImpl(d1s[1], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
          intersectsImpl(d1s[1], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
        }
        PolynomialBezier.prototype.intersections = function(other, tolerance, maxRecursion) {
          if (tolerance === void 0) tolerance = 2;
          if (maxRecursion === void 0) maxRecursion = 7;
          var intersections = [];
          intersectsImpl(intersectData(this, 0, 1), intersectData(other, 0, 1), 0, tolerance, intersections, maxRecursion);
          return intersections;
        };
        PolynomialBezier.shapeSegment = function(shapePath, index2) {
          var nextIndex = (index2 + 1) % shapePath.length();
          return new PolynomialBezier(shapePath.v[index2], shapePath.o[index2], shapePath.i[nextIndex], shapePath.v[nextIndex], true);
        };
        PolynomialBezier.shapeSegmentInverted = function(shapePath, index2) {
          var nextIndex = (index2 + 1) % shapePath.length();
          return new PolynomialBezier(shapePath.v[nextIndex], shapePath.i[nextIndex], shapePath.o[index2], shapePath.v[index2], true);
        };
        function crossProduct(a, b) {
          return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
        }
        function lineIntersection(start1, end1, start2, end2) {
          var v1 = [start1[0], start1[1], 1];
          var v2 = [end1[0], end1[1], 1];
          var v3 = [start2[0], start2[1], 1];
          var v4 = [end2[0], end2[1], 1];
          var r = crossProduct(crossProduct(v1, v2), crossProduct(v3, v4));
          if (floatZero(r[2])) return null;
          return [r[0] / r[2], r[1] / r[2]];
        }
        function polarOffset(p, angle, length2) {
          return [p[0] + Math.cos(angle) * length2, p[1] - Math.sin(angle) * length2];
        }
        function pointDistance(p1, p2) {
          return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
        }
        function pointEqual(p1, p2) {
          return floatEqual(p1[0], p2[0]) && floatEqual(p1[1], p2[1]);
        }
        function ZigZagModifier() {
        }
        extendPrototype([ShapeModifier], ZigZagModifier);
        ZigZagModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.getValue = this.processKeys;
          this.amplitude = PropertyFactory.getProp(elem2, data2.s, 0, null, this);
          this.frequency = PropertyFactory.getProp(elem2, data2.r, 0, null, this);
          this.pointsType = PropertyFactory.getProp(elem2, data2.pt, 0, null, this);
          this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        function setPoint(outputBezier, point, angle, direction, amplitude, outAmplitude, inAmplitude) {
          var angO = angle - Math.PI / 2;
          var angI = angle + Math.PI / 2;
          var px = point[0] + Math.cos(angle) * direction * amplitude;
          var py = point[1] - Math.sin(angle) * direction * amplitude;
          outputBezier.setTripleAt(px, py, px + Math.cos(angO) * outAmplitude, py - Math.sin(angO) * outAmplitude, px + Math.cos(angI) * inAmplitude, py - Math.sin(angI) * inAmplitude, outputBezier.length());
        }
        function getPerpendicularVector(pt1, pt2) {
          var vector = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
          var rot = -Math.PI * 0.5;
          var rotatedVector = [Math.cos(rot) * vector[0] - Math.sin(rot) * vector[1], Math.sin(rot) * vector[0] + Math.cos(rot) * vector[1]];
          return rotatedVector;
        }
        function getProjectingAngle(path, cur) {
          var prevIndex = cur === 0 ? path.length() - 1 : cur - 1;
          var nextIndex = (cur + 1) % path.length();
          var prevPoint = path.v[prevIndex];
          var nextPoint = path.v[nextIndex];
          var pVector = getPerpendicularVector(prevPoint, nextPoint);
          return Math.atan2(0, 1) - Math.atan2(pVector[1], pVector[0]);
        }
        function zigZagCorner(outputBezier, path, cur, amplitude, frequency, pointType, direction) {
          var angle = getProjectingAngle(path, cur);
          var point = path.v[cur % path._length];
          var prevPoint = path.v[cur === 0 ? path._length - 1 : cur - 1];
          var nextPoint = path.v[(cur + 1) % path._length];
          var prevDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - prevPoint[0], 2) + Math.pow(point[1] - prevPoint[1], 2)) : 0;
          var nextDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2)) : 0;
          setPoint(outputBezier, path.v[cur % path._length], angle, direction, amplitude, nextDist / ((frequency + 1) * 2), prevDist / ((frequency + 1) * 2), pointType);
        }
        function zigZagSegment(outputBezier, segment, amplitude, frequency, pointType, direction) {
          for (var i = 0; i < frequency; i += 1) {
            var t = (i + 1) / (frequency + 1);
            var dist = pointType === 2 ? Math.sqrt(Math.pow(segment.points[3][0] - segment.points[0][0], 2) + Math.pow(segment.points[3][1] - segment.points[0][1], 2)) : 0;
            var angle = segment.normalAngle(t);
            var point = segment.point(t);
            setPoint(outputBezier, point, angle, direction, amplitude, dist / ((frequency + 1) * 2), dist / ((frequency + 1) * 2), pointType);
            direction = -direction;
          }
          return direction;
        }
        ZigZagModifier.prototype.processPath = function(path, amplitude, frequency, pointType) {
          var count = path._length;
          var clonedPath = shapePool.newElement();
          clonedPath.c = path.c;
          if (!path.c) {
            count -= 1;
          }
          if (count === 0) return clonedPath;
          var direction = -1;
          var segment = PolynomialBezier.shapeSegment(path, 0);
          zigZagCorner(clonedPath, path, 0, amplitude, frequency, pointType, direction);
          for (var i = 0; i < count; i += 1) {
            direction = zigZagSegment(clonedPath, segment, amplitude, frequency, pointType, -direction);
            if (i === count - 1 && !path.c) {
              segment = null;
            } else {
              segment = PolynomialBezier.shapeSegment(path, (i + 1) % count);
            }
            zigZagCorner(clonedPath, path, i + 1, amplitude, frequency, pointType, direction);
          }
          return clonedPath;
        };
        ZigZagModifier.prototype.processShapes = function(_isFirstFrame) {
          var shapePaths;
          var i;
          var len = this.shapes.length;
          var j;
          var jLen;
          var amplitude = this.amplitude.v;
          var frequency = Math.max(0, Math.round(this.frequency.v));
          var pointType = this.pointsType.v;
          if (amplitude !== 0) {
            var shapeData;
            var localShapeCollection;
            for (i = 0; i < len; i += 1) {
              shapeData = this.shapes[i];
              localShapeCollection = shapeData.localShapeCollection;
              if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for (j = 0; j < jLen; j += 1) {
                  localShapeCollection.addShape(this.processPath(shapePaths[j], amplitude, frequency, pointType));
                }
              }
              shapeData.shape.paths = shapeData.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        function linearOffset(p1, p2, amount) {
          var angle = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
          return [polarOffset(p1, angle, amount), polarOffset(p2, angle, amount)];
        }
        function offsetSegment(segment, amount) {
          var p0;
          var p1a;
          var p1b;
          var p2b;
          var p2a;
          var p3;
          var e;
          e = linearOffset(segment.points[0], segment.points[1], amount);
          p0 = e[0];
          p1a = e[1];
          e = linearOffset(segment.points[1], segment.points[2], amount);
          p1b = e[0];
          p2b = e[1];
          e = linearOffset(segment.points[2], segment.points[3], amount);
          p2a = e[0];
          p3 = e[1];
          var p1 = lineIntersection(p0, p1a, p1b, p2b);
          if (p1 === null) p1 = p1a;
          var p2 = lineIntersection(p2a, p3, p1b, p2b);
          if (p2 === null) p2 = p2a;
          return new PolynomialBezier(p0, p1, p2, p3);
        }
        function joinLines(outputBezier, seg1, seg2, lineJoin, miterLimit) {
          var p0 = seg1.points[3];
          var p1 = seg2.points[0];
          if (lineJoin === 3) return p0;
          if (pointEqual(p0, p1)) return p0;
          if (lineJoin === 2) {
            var angleOut = -seg1.tangentAngle(1);
            var angleIn = -seg2.tangentAngle(0) + Math.PI;
            var center = lineIntersection(p0, polarOffset(p0, angleOut + Math.PI / 2, 100), p1, polarOffset(p1, angleOut + Math.PI / 2, 100));
            var radius = center ? pointDistance(center, p0) : pointDistance(p0, p1) / 2;
            var tan = polarOffset(p0, angleOut, 2 * radius * roundCorner);
            outputBezier.setXYAt(tan[0], tan[1], "o", outputBezier.length() - 1);
            tan = polarOffset(p1, angleIn, 2 * radius * roundCorner);
            outputBezier.setTripleAt(p1[0], p1[1], p1[0], p1[1], tan[0], tan[1], outputBezier.length());
            return p1;
          }
          var t0 = pointEqual(p0, seg1.points[2]) ? seg1.points[0] : seg1.points[2];
          var t1 = pointEqual(p1, seg2.points[1]) ? seg2.points[3] : seg2.points[1];
          var intersection = lineIntersection(t0, p0, p1, t1);
          if (intersection && pointDistance(intersection, p0) < miterLimit) {
            outputBezier.setTripleAt(intersection[0], intersection[1], intersection[0], intersection[1], intersection[0], intersection[1], outputBezier.length());
            return intersection;
          }
          return p0;
        }
        function getIntersection(a, b) {
          var intersect = a.intersections(b);
          if (intersect.length && floatEqual(intersect[0][0], 1)) intersect.shift();
          if (intersect.length) return intersect[0];
          return null;
        }
        function pruneSegmentIntersection(a, b) {
          var outa = a.slice();
          var outb = b.slice();
          var intersect = getIntersection(a[a.length - 1], b[0]);
          if (intersect) {
            outa[a.length - 1] = a[a.length - 1].split(intersect[0])[0];
            outb[0] = b[0].split(intersect[1])[1];
          }
          if (a.length > 1 && b.length > 1) {
            intersect = getIntersection(a[0], b[b.length - 1]);
            if (intersect) {
              return [[a[0].split(intersect[0])[0]], [b[b.length - 1].split(intersect[1])[1]]];
            }
          }
          return [outa, outb];
        }
        function pruneIntersections(segments) {
          var e;
          for (var i = 1; i < segments.length; i += 1) {
            e = pruneSegmentIntersection(segments[i - 1], segments[i]);
            segments[i - 1] = e[0];
            segments[i] = e[1];
          }
          if (segments.length > 1) {
            e = pruneSegmentIntersection(segments[segments.length - 1], segments[0]);
            segments[segments.length - 1] = e[0];
            segments[0] = e[1];
          }
          return segments;
        }
        function offsetSegmentSplit(segment, amount) {
          var flex = segment.inflectionPoints();
          var left;
          var right;
          var split;
          var mid;
          if (flex.length === 0) {
            return [offsetSegment(segment, amount)];
          }
          if (flex.length === 1 || floatEqual(flex[1], 1)) {
            split = segment.split(flex[0]);
            left = split[0];
            right = split[1];
            return [offsetSegment(left, amount), offsetSegment(right, amount)];
          }
          split = segment.split(flex[0]);
          left = split[0];
          var t = (flex[1] - flex[0]) / (1 - flex[0]);
          split = split[1].split(t);
          mid = split[0];
          right = split[1];
          return [offsetSegment(left, amount), offsetSegment(mid, amount), offsetSegment(right, amount)];
        }
        function OffsetPathModifier() {
        }
        extendPrototype([ShapeModifier], OffsetPathModifier);
        OffsetPathModifier.prototype.initModifierProperties = function(elem2, data2) {
          this.getValue = this.processKeys;
          this.amount = PropertyFactory.getProp(elem2, data2.a, 0, null, this);
          this.miterLimit = PropertyFactory.getProp(elem2, data2.ml, 0, null, this);
          this.lineJoin = data2.lj;
          this._isAnimated = this.amount.effectsSequence.length !== 0;
        };
        OffsetPathModifier.prototype.processPath = function(inputBezier, amount, lineJoin, miterLimit) {
          var outputBezier = shapePool.newElement();
          outputBezier.c = inputBezier.c;
          var count = inputBezier.length();
          if (!inputBezier.c) {
            count -= 1;
          }
          var i;
          var j;
          var segment;
          var multiSegments = [];
          for (i = 0; i < count; i += 1) {
            segment = PolynomialBezier.shapeSegment(inputBezier, i);
            multiSegments.push(offsetSegmentSplit(segment, amount));
          }
          if (!inputBezier.c) {
            for (i = count - 1; i >= 0; i -= 1) {
              segment = PolynomialBezier.shapeSegmentInverted(inputBezier, i);
              multiSegments.push(offsetSegmentSplit(segment, amount));
            }
          }
          multiSegments = pruneIntersections(multiSegments);
          var lastPoint = null;
          var lastSeg = null;
          for (i = 0; i < multiSegments.length; i += 1) {
            var multiSegment = multiSegments[i];
            if (lastSeg) lastPoint = joinLines(outputBezier, lastSeg, multiSegment[0], lineJoin, miterLimit);
            lastSeg = multiSegment[multiSegment.length - 1];
            for (j = 0; j < multiSegment.length; j += 1) {
              segment = multiSegment[j];
              if (lastPoint && pointEqual(segment.points[0], lastPoint)) {
                outputBezier.setXYAt(segment.points[1][0], segment.points[1][1], "o", outputBezier.length() - 1);
              } else {
                outputBezier.setTripleAt(segment.points[0][0], segment.points[0][1], segment.points[1][0], segment.points[1][1], segment.points[0][0], segment.points[0][1], outputBezier.length());
              }
              outputBezier.setTripleAt(segment.points[3][0], segment.points[3][1], segment.points[3][0], segment.points[3][1], segment.points[2][0], segment.points[2][1], outputBezier.length());
              lastPoint = segment.points[3];
            }
          }
          if (multiSegments.length) joinLines(outputBezier, lastSeg, multiSegments[0][0], lineJoin, miterLimit);
          return outputBezier;
        };
        OffsetPathModifier.prototype.processShapes = function(_isFirstFrame) {
          var shapePaths;
          var i;
          var len = this.shapes.length;
          var j;
          var jLen;
          var amount = this.amount.v;
          var miterLimit = this.miterLimit.v;
          var lineJoin = this.lineJoin;
          if (amount !== 0) {
            var shapeData;
            var localShapeCollection;
            for (i = 0; i < len; i += 1) {
              shapeData = this.shapes[i];
              localShapeCollection = shapeData.localShapeCollection;
              if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
                localShapeCollection.releaseShapes();
                shapeData.shape._mdf = true;
                shapePaths = shapeData.shape.paths.shapes;
                jLen = shapeData.shape.paths._length;
                for (j = 0; j < jLen; j += 1) {
                  localShapeCollection.addShape(this.processPath(shapePaths[j], amount, lineJoin, miterLimit));
                }
              }
              shapeData.shape.paths = shapeData.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        function getFontProperties(fontData) {
          var styles = fontData.fStyle ? fontData.fStyle.split(" ") : [];
          var fWeight = "normal";
          var fStyle = "normal";
          var len = styles.length;
          var styleName;
          for (var i = 0; i < len; i += 1) {
            styleName = styles[i].toLowerCase();
            switch (styleName) {
              case "italic":
                fStyle = "italic";
                break;
              case "bold":
                fWeight = "700";
                break;
              case "black":
                fWeight = "900";
                break;
              case "medium":
                fWeight = "500";
                break;
              case "regular":
              case "normal":
                fWeight = "400";
                break;
              case "light":
              case "thin":
                fWeight = "200";
                break;
              default:
                break;
            }
          }
          return {
            style: fStyle,
            weight: fontData.fWeight || fWeight
          };
        }
        var FontManager = function() {
          var maxWaitingTime = 5e3;
          var emptyChar = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          };
          var combinedCharacters = [];
          combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var BLACK_FLAG_CODE_POINT = 127988;
          var CANCEL_TAG_CODE_POINT = 917631;
          var A_TAG_CODE_POINT = 917601;
          var Z_TAG_CODE_POINT = 917626;
          var VARIATION_SELECTOR_16_CODE_POINT = 65039;
          var ZERO_WIDTH_JOINER_CODE_POINT = 8205;
          var REGIONAL_CHARACTER_A_CODE_POINT = 127462;
          var REGIONAL_CHARACTER_Z_CODE_POINT = 127487;
          var surrogateModifiers = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
          function trimFontOptions(font) {
            var familyArray = font.split(",");
            var i;
            var len = familyArray.length;
            var enabledFamilies = [];
            for (i = 0; i < len; i += 1) {
              if (familyArray[i] !== "sans-serif" && familyArray[i] !== "monospace") {
                enabledFamilies.push(familyArray[i]);
              }
            }
            return enabledFamilies.join(",");
          }
          function setUpNode(font, family) {
            var parentNode = createTag("span");
            parentNode.setAttribute("aria-hidden", true);
            parentNode.style.fontFamily = family;
            var node = createTag("span");
            node.innerText = "giItT1WQy@!-/#";
            parentNode.style.position = "absolute";
            parentNode.style.left = "-10000px";
            parentNode.style.top = "-10000px";
            parentNode.style.fontSize = "300px";
            parentNode.style.fontVariant = "normal";
            parentNode.style.fontStyle = "normal";
            parentNode.style.fontWeight = "normal";
            parentNode.style.letterSpacing = "0";
            parentNode.appendChild(node);
            document.body.appendChild(parentNode);
            var width2 = node.offsetWidth;
            node.style.fontFamily = trimFontOptions(font) + ", " + family;
            return {
              node,
              w: width2,
              parent: parentNode
            };
          }
          function checkLoadedFonts() {
            var i;
            var len = this.fonts.length;
            var node;
            var w;
            var loadedCount = len;
            for (i = 0; i < len; i += 1) {
              if (this.fonts[i].loaded) {
                loadedCount -= 1;
              } else if (this.fonts[i].fOrigin === "n" || this.fonts[i].origin === 0) {
                this.fonts[i].loaded = true;
              } else {
                node = this.fonts[i].monoCase.node;
                w = this.fonts[i].monoCase.w;
                if (node.offsetWidth !== w) {
                  loadedCount -= 1;
                  this.fonts[i].loaded = true;
                } else {
                  node = this.fonts[i].sansCase.node;
                  w = this.fonts[i].sansCase.w;
                  if (node.offsetWidth !== w) {
                    loadedCount -= 1;
                    this.fonts[i].loaded = true;
                  }
                }
                if (this.fonts[i].loaded) {
                  this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                  this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
                }
              }
            }
            if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
              setTimeout(this.checkLoadedFontsBinded, 20);
            } else {
              setTimeout(this.setIsLoadedBinded, 10);
            }
          }
          function createHelper(fontData, def) {
            var engine = document.body && def ? "svg" : "canvas";
            var helper;
            var fontProps = getFontProperties(fontData);
            if (engine === "svg") {
              var tHelper = createNS("text");
              tHelper.style.fontSize = "100px";
              tHelper.setAttribute("font-family", fontData.fFamily);
              tHelper.setAttribute("font-style", fontProps.style);
              tHelper.setAttribute("font-weight", fontProps.weight);
              tHelper.textContent = "1";
              if (fontData.fClass) {
                tHelper.style.fontFamily = "inherit";
                tHelper.setAttribute("class", fontData.fClass);
              } else {
                tHelper.style.fontFamily = fontData.fFamily;
              }
              def.appendChild(tHelper);
              helper = tHelper;
            } else {
              var tCanvasHelper = new OffscreenCanvas(500, 500).getContext("2d");
              tCanvasHelper.font = fontProps.style + " " + fontProps.weight + " 100px " + fontData.fFamily;
              helper = tCanvasHelper;
            }
            function measure(text2) {
              if (engine === "svg") {
                helper.textContent = text2;
                return helper.getComputedTextLength();
              }
              return helper.measureText(text2).width;
            }
            return {
              measureText: measure
            };
          }
          function addFonts(fontData, defs) {
            if (!fontData) {
              this.isLoaded = true;
              return;
            }
            if (this.chars) {
              this.isLoaded = true;
              this.fonts = fontData.list;
              return;
            }
            if (!document.body) {
              this.isLoaded = true;
              fontData.list.forEach(function(data2) {
                data2.helper = createHelper(data2);
                data2.cache = {};
              });
              this.fonts = fontData.list;
              return;
            }
            var fontArr = fontData.list;
            var i;
            var len = fontArr.length;
            var _pendingFonts = len;
            for (i = 0; i < len; i += 1) {
              var shouldLoadFont = true;
              var loadedSelector;
              var j;
              fontArr[i].loaded = false;
              fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, "monospace");
              fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, "sans-serif");
              if (!fontArr[i].fPath) {
                fontArr[i].loaded = true;
                _pendingFonts -= 1;
              } else if (fontArr[i].fOrigin === "p" || fontArr[i].origin === 3) {
                loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');
                if (loadedSelector.length > 0) {
                  shouldLoadFont = false;
                }
                if (shouldLoadFont) {
                  var s = createTag("style");
                  s.setAttribute("f-forigin", fontArr[i].fOrigin);
                  s.setAttribute("f-origin", fontArr[i].origin);
                  s.setAttribute("f-family", fontArr[i].fFamily);
                  s.type = "text/css";
                  s.innerText = "@font-face {font-family: " + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
                  defs.appendChild(s);
                }
              } else if (fontArr[i].fOrigin === "g" || fontArr[i].origin === 1) {
                loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
                for (j = 0; j < loadedSelector.length; j += 1) {
                  if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
                    shouldLoadFont = false;
                  }
                }
                if (shouldLoadFont) {
                  var l = createTag("link");
                  l.setAttribute("f-forigin", fontArr[i].fOrigin);
                  l.setAttribute("f-origin", fontArr[i].origin);
                  l.type = "text/css";
                  l.rel = "stylesheet";
                  l.href = fontArr[i].fPath;
                  document.body.appendChild(l);
                }
              } else if (fontArr[i].fOrigin === "t" || fontArr[i].origin === 2) {
                loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
                for (j = 0; j < loadedSelector.length; j += 1) {
                  if (fontArr[i].fPath === loadedSelector[j].src) {
                    shouldLoadFont = false;
                  }
                }
                if (shouldLoadFont) {
                  var sc = createTag("link");
                  sc.setAttribute("f-forigin", fontArr[i].fOrigin);
                  sc.setAttribute("f-origin", fontArr[i].origin);
                  sc.setAttribute("rel", "stylesheet");
                  sc.setAttribute("href", fontArr[i].fPath);
                  defs.appendChild(sc);
                }
              }
              fontArr[i].helper = createHelper(fontArr[i], defs);
              fontArr[i].cache = {};
              this.fonts.push(fontArr[i]);
            }
            if (_pendingFonts === 0) {
              this.isLoaded = true;
            } else {
              setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
          }
          function addChars(chars) {
            if (!chars) {
              return;
            }
            if (!this.chars) {
              this.chars = [];
            }
            var i;
            var len = chars.length;
            var j;
            var jLen = this.chars.length;
            var found;
            for (i = 0; i < len; i += 1) {
              j = 0;
              found = false;
              while (j < jLen) {
                if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
                  found = true;
                }
                j += 1;
              }
              if (!found) {
                this.chars.push(chars[i]);
                jLen += 1;
              }
            }
          }
          function getCharData(_char, style, font) {
            var i = 0;
            var len = this.chars.length;
            while (i < len) {
              if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
                return this.chars[i];
              }
              i += 1;
            }
            if ((typeof _char === "string" && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn && !this._warned) {
              this._warned = true;
              console.warn("Missing character from exported characters list: ", _char, style, font);
            }
            return emptyChar;
          }
          function measureText(_char2, fontName, size) {
            var fontData = this.getFontByName(fontName);
            var index2 = _char2;
            if (!fontData.cache[index2]) {
              var tHelper = fontData.helper;
              if (_char2 === " ") {
                var doubleSize = tHelper.measureText("|" + _char2 + "|");
                var singleSize = tHelper.measureText("||");
                fontData.cache[index2] = (doubleSize - singleSize) / 100;
              } else {
                fontData.cache[index2] = tHelper.measureText(_char2) / 100;
              }
            }
            return fontData.cache[index2] * size;
          }
          function getFontByName(name2) {
            var i = 0;
            var len = this.fonts.length;
            while (i < len) {
              if (this.fonts[i].fName === name2) {
                return this.fonts[i];
              }
              i += 1;
            }
            return this.fonts[0];
          }
          function getCodePoint(string) {
            var codePoint = 0;
            var first = string.charCodeAt(0);
            if (first >= 55296 && first <= 56319) {
              var second = string.charCodeAt(1);
              if (second >= 56320 && second <= 57343) {
                codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
              }
            }
            return codePoint;
          }
          function isModifier(firstCharCode, secondCharCode) {
            var sum2 = firstCharCode.toString(16) + secondCharCode.toString(16);
            return surrogateModifiers.indexOf(sum2) !== -1;
          }
          function isZeroWidthJoiner(charCode) {
            return charCode === ZERO_WIDTH_JOINER_CODE_POINT;
          }
          function isVariationSelector(charCode) {
            return charCode === VARIATION_SELECTOR_16_CODE_POINT;
          }
          function isRegionalCode(string) {
            var codePoint = getCodePoint(string);
            if (codePoint >= REGIONAL_CHARACTER_A_CODE_POINT && codePoint <= REGIONAL_CHARACTER_Z_CODE_POINT) {
              return true;
            }
            return false;
          }
          function isFlagEmoji(string) {
            return isRegionalCode(string.substr(0, 2)) && isRegionalCode(string.substr(2, 2));
          }
          function isCombinedCharacter(_char3) {
            return combinedCharacters.indexOf(_char3) !== -1;
          }
          function isRegionalFlag(text2, index2) {
            var codePoint = getCodePoint(text2.substr(index2, 2));
            if (codePoint !== BLACK_FLAG_CODE_POINT) {
              return false;
            }
            var count = 0;
            index2 += 2;
            while (count < 5) {
              codePoint = getCodePoint(text2.substr(index2, 2));
              if (codePoint < A_TAG_CODE_POINT || codePoint > Z_TAG_CODE_POINT) {
                return false;
              }
              count += 1;
              index2 += 2;
            }
            return getCodePoint(text2.substr(index2, 2)) === CANCEL_TAG_CODE_POINT;
          }
          function setIsLoaded() {
            this.isLoaded = true;
          }
          var Font = function Font2() {
            this.fonts = [];
            this.chars = null;
            this.typekitLoaded = 0;
            this.isLoaded = false;
            this._warned = false;
            this.initTime = Date.now();
            this.setIsLoadedBinded = this.setIsLoaded.bind(this);
            this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
          };
          Font.isModifier = isModifier;
          Font.isZeroWidthJoiner = isZeroWidthJoiner;
          Font.isFlagEmoji = isFlagEmoji;
          Font.isRegionalCode = isRegionalCode;
          Font.isCombinedCharacter = isCombinedCharacter;
          Font.isRegionalFlag = isRegionalFlag;
          Font.isVariationSelector = isVariationSelector;
          Font.BLACK_FLAG_CODE_POINT = BLACK_FLAG_CODE_POINT;
          var fontPrototype = {
            addChars,
            addFonts,
            getCharData,
            getFontByName,
            measureText,
            checkLoadedFonts,
            setIsLoaded
          };
          Font.prototype = fontPrototype;
          return Font;
        }();
        function SlotManager(animationData2) {
          this.animationData = animationData2;
        }
        SlotManager.prototype.getProp = function(data2) {
          if (this.animationData.slots && this.animationData.slots[data2.sid]) {
            return Object.assign(data2, this.animationData.slots[data2.sid].p);
          }
          return data2;
        };
        function slotFactory(animationData2) {
          return new SlotManager(animationData2);
        }
        function RenderableElement() {
        }
        RenderableElement.prototype = {
          initRenderable: function initRenderable() {
            this.isInRange = false;
            this.hidden = false;
            this.isTransparent = false;
            this.renderableComponents = [];
          },
          addRenderableComponent: function addRenderableComponent(component) {
            if (this.renderableComponents.indexOf(component) === -1) {
              this.renderableComponents.push(component);
            }
          },
          removeRenderableComponent: function removeRenderableComponent(component) {
            if (this.renderableComponents.indexOf(component) !== -1) {
              this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
            }
          },
          prepareRenderableFrame: function prepareRenderableFrame(num) {
            this.checkLayerLimits(num);
          },
          checkTransparency: function checkTransparency() {
            if (this.finalTransform.mProp.o.v <= 0) {
              if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
                this.isTransparent = true;
                this.hide();
              }
            } else if (this.isTransparent) {
              this.isTransparent = false;
              this.show();
            }
          },
          /**
             * @function
             * Initializes frame related properties.
             *
             * @param {number} num
             * current frame number in Layer's time
             *
             */
          checkLayerLimits: function checkLayerLimits(num) {
            if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
              if (this.isInRange !== true) {
                this.globalData._mdf = true;
                this._mdf = true;
                this.isInRange = true;
                this.show();
              }
            } else if (this.isInRange !== false) {
              this.globalData._mdf = true;
              this.isInRange = false;
              this.hide();
            }
          },
          renderRenderable: function renderRenderable() {
            var i;
            var len = this.renderableComponents.length;
            for (i = 0; i < len; i += 1) {
              this.renderableComponents[i].renderFrame(this._isFirstFrame);
            }
          },
          sourceRectAtTime: function sourceRectAtTime2() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            };
          },
          getLayerSize: function getLayerSize() {
            if (this.data.ty === 5) {
              return {
                w: this.data.textData.width,
                h: this.data.textData.height
              };
            }
            return {
              w: this.data.width,
              h: this.data.height
            };
          }
        };
        var getBlendMode = /* @__PURE__ */ function() {
          var blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          };
          return function(mode) {
            return blendModeEnums[mode] || "";
          };
        }();
        function SliderEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
        }
        function AngleEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
        }
        function ColorEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 1, 0, container);
        }
        function PointEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 1, 0, container);
        }
        function LayerIndexEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
        }
        function MaskIndexEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
        }
        function CheckboxEffect(data2, elem2, container) {
          this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(data2, element) {
          var effects = data2.ef || [];
          this.effectElements = [];
          var i;
          var len = effects.length;
          var effectItem;
          for (i = 0; i < len; i += 1) {
            effectItem = new GroupEffect(effects[i], element);
            this.effectElements.push(effectItem);
          }
        }
        function GroupEffect(data2, element) {
          this.init(data2, element);
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect);
        GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;
        GroupEffect.prototype.init = function(data2, element) {
          this.data = data2;
          this.effectElements = [];
          this.initDynamicPropertyContainer(element);
          var i;
          var len = this.data.ef.length;
          var eff;
          var effects = this.data.ef;
          for (i = 0; i < len; i += 1) {
            eff = null;
            switch (effects[i].ty) {
              case 0:
                eff = new SliderEffect(effects[i], element, this);
                break;
              case 1:
                eff = new AngleEffect(effects[i], element, this);
                break;
              case 2:
                eff = new ColorEffect(effects[i], element, this);
                break;
              case 3:
                eff = new PointEffect(effects[i], element, this);
                break;
              case 4:
              case 7:
                eff = new CheckboxEffect(effects[i], element, this);
                break;
              case 10:
                eff = new LayerIndexEffect(effects[i], element, this);
                break;
              case 11:
                eff = new MaskIndexEffect(effects[i], element, this);
                break;
              case 5:
                eff = new EffectsManager(effects[i], element, this);
                break;
              // case 6:
              default:
                eff = new NoValueEffect(effects[i], element, this);
                break;
            }
            if (eff) {
              this.effectElements.push(eff);
            }
          }
        };
        function BaseElement() {
        }
        BaseElement.prototype = {
          checkMasks: function checkMasks() {
            if (!this.data.hasMask) {
              return false;
            }
            var i = 0;
            var len = this.data.masksProperties.length;
            while (i < len) {
              if (this.data.masksProperties[i].mode !== "n" && this.data.masksProperties[i].cl !== false) {
                return true;
              }
              i += 1;
            }
            return false;
          },
          initExpressions: function initExpressions() {
            var expressionsInterfaces2 = getExpressionInterfaces();
            if (!expressionsInterfaces2) {
              return;
            }
            var LayerExpressionInterface2 = expressionsInterfaces2("layer");
            var EffectsExpressionInterface2 = expressionsInterfaces2("effects");
            var ShapeExpressionInterface2 = expressionsInterfaces2("shape");
            var TextExpressionInterface2 = expressionsInterfaces2("text");
            var CompExpressionInterface2 = expressionsInterfaces2("comp");
            this.layerInterface = LayerExpressionInterface2(this);
            if (this.data.hasMask && this.maskManager) {
              this.layerInterface.registerMaskInterface(this.maskManager);
            }
            var effectsInterface = EffectsExpressionInterface2.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(effectsInterface);
            if (this.data.ty === 0 || this.data.xt) {
              this.compInterface = CompExpressionInterface2(this);
            } else if (this.data.ty === 4) {
              this.layerInterface.shapeInterface = ShapeExpressionInterface2(this.shapesData, this.itemsData, this.layerInterface);
              this.layerInterface.content = this.layerInterface.shapeInterface;
            } else if (this.data.ty === 5) {
              this.layerInterface.textInterface = TextExpressionInterface2(this);
              this.layerInterface.text = this.layerInterface.textInterface;
            }
          },
          setBlendMode: function setBlendMode() {
            var blendModeValue = getBlendMode(this.data.bm);
            var elem2 = this.baseElement || this.layerElement;
            elem2.style["mix-blend-mode"] = blendModeValue;
          },
          initBaseData: function initBaseData(data2, globalData2, comp2) {
            this.globalData = globalData2;
            this.comp = comp2;
            this.data = data2;
            this.layerId = createElementID();
            if (!this.data.sr) {
              this.data.sr = 1;
            }
            this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
          },
          getType: function getType() {
            return this.type;
          },
          sourceRectAtTime: function sourceRectAtTime2() {
          }
        };
        function FrameElement() {
        }
        FrameElement.prototype = {
          /**
             * @function
             * Initializes frame related properties.
             *
             */
          initFrame: function initFrame2() {
            this._isFirstFrame = false;
            this.dynamicProperties = [];
            this._mdf = false;
          },
          /**
             * @function
             * Calculates all dynamic values
             *
             * @param {number} num
             * current frame number in Layer's time
             * @param {boolean} isVisible
             * if layers is currently in range
             *
             */
          prepareProperties: function prepareProperties(num, isVisible) {
            var i;
            var len = this.dynamicProperties.length;
            for (i = 0; i < len; i += 1) {
              if (isVisible || this._isParent && this.dynamicProperties[i].propType === "transform") {
                this.dynamicProperties[i].getValue();
                if (this.dynamicProperties[i]._mdf) {
                  this.globalData._mdf = true;
                  this._mdf = true;
                }
              }
            }
          },
          addDynamicProperty: function addDynamicProperty(prop) {
            if (this.dynamicProperties.indexOf(prop) === -1) {
              this.dynamicProperties.push(prop);
            }
          }
        };
        function FootageElement(data2, globalData2, comp2) {
          this.initFrame();
          this.initRenderable();
          this.assetData = globalData2.getAssetData(data2.refId);
          this.footageData = globalData2.imageLoader.getAsset(this.assetData);
          this.initBaseData(data2, globalData2, comp2);
        }
        FootageElement.prototype.prepareFrame = function() {
        };
        extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);
        FootageElement.prototype.getBaseElement = function() {
          return null;
        };
        FootageElement.prototype.renderFrame = function() {
        };
        FootageElement.prototype.destroy = function() {
        };
        FootageElement.prototype.initExpressions = function() {
          var expressionsInterfaces2 = getExpressionInterfaces();
          if (!expressionsInterfaces2) {
            return;
          }
          var FootageInterface2 = expressionsInterfaces2("footage");
          this.layerInterface = FootageInterface2(this);
        };
        FootageElement.prototype.getFootageData = function() {
          return this.footageData;
        };
        function AudioElement(data2, globalData2, comp2) {
          this.initFrame();
          this.initRenderable();
          this.assetData = globalData2.getAssetData(data2.refId);
          this.initBaseData(data2, globalData2, comp2);
          this._isPlaying = false;
          this._canPlay = false;
          var assetPath = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(assetPath);
          this._currentTime = 0;
          this.globalData.audioController.addAudio(this);
          this._volumeMultiplier = 1;
          this._volume = 1;
          this._previousVolume = null;
          this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
            _placeholder: true
          };
          this.lv = PropertyFactory.getProp(this, data2.au && data2.au.lv ? data2.au.lv : {
            k: [100]
          }, 1, 0.01, this);
        }
        AudioElement.prototype.prepareFrame = function(num) {
          this.prepareRenderableFrame(num, true);
          this.prepareProperties(num, true);
          if (!this.tm._placeholder) {
            var timeRemapped = this.tm.v;
            this._currentTime = timeRemapped;
          } else {
            this._currentTime = num / this.data.sr;
          }
          this._volume = this.lv.v[0];
          var totalVolume = this._volume * this._volumeMultiplier;
          if (this._previousVolume !== totalVolume) {
            this._previousVolume = totalVolume;
            this.audio.volume(totalVolume);
          }
        };
        extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);
        AudioElement.prototype.renderFrame = function() {
          if (this.isInRange && this._canPlay) {
            if (!this._isPlaying) {
              this.audio.play();
              this.audio.seek(this._currentTime / this.globalData.frameRate);
              this._isPlaying = true;
            } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
              this.audio.seek(this._currentTime / this.globalData.frameRate);
            }
          }
        };
        AudioElement.prototype.show = function() {
        };
        AudioElement.prototype.hide = function() {
          this.audio.pause();
          this._isPlaying = false;
        };
        AudioElement.prototype.pause = function() {
          this.audio.pause();
          this._isPlaying = false;
          this._canPlay = false;
        };
        AudioElement.prototype.resume = function() {
          this._canPlay = true;
        };
        AudioElement.prototype.setRate = function(rateValue) {
          this.audio.rate(rateValue);
        };
        AudioElement.prototype.volume = function(volumeValue) {
          this._volumeMultiplier = volumeValue;
          this._previousVolume = volumeValue * this._volume;
          this.audio.volume(this._previousVolume);
        };
        AudioElement.prototype.getBaseElement = function() {
          return null;
        };
        AudioElement.prototype.destroy = function() {
        };
        AudioElement.prototype.sourceRectAtTime = function() {
        };
        AudioElement.prototype.initExpressions = function() {
        };
        function BaseRenderer() {
        }
        BaseRenderer.prototype.checkLayers = function(num) {
          var i;
          var len = this.layers.length;
          var data2;
          this.completeLayers = true;
          for (i = len - 1; i >= 0; i -= 1) {
            if (!this.elements[i]) {
              data2 = this.layers[i];
              if (data2.ip - data2.st <= num - this.layers[i].st && data2.op - data2.st > num - this.layers[i].st) {
                this.buildItem(i);
              }
            }
            this.completeLayers = this.elements[i] ? this.completeLayers : false;
          }
          this.checkPendingElements();
        };
        BaseRenderer.prototype.createItem = function(layer) {
          switch (layer.ty) {
            case 2:
              return this.createImage(layer);
            case 0:
              return this.createComp(layer);
            case 1:
              return this.createSolid(layer);
            case 3:
              return this.createNull(layer);
            case 4:
              return this.createShape(layer);
            case 5:
              return this.createText(layer);
            case 6:
              return this.createAudio(layer);
            case 13:
              return this.createCamera(layer);
            case 15:
              return this.createFootage(layer);
            default:
              return this.createNull(layer);
          }
        };
        BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        };
        BaseRenderer.prototype.createAudio = function(data2) {
          return new AudioElement(data2, this.globalData, this);
        };
        BaseRenderer.prototype.createFootage = function(data2) {
          return new FootageElement(data2, this.globalData, this);
        };
        BaseRenderer.prototype.buildAllItems = function() {
          var i;
          var len = this.layers.length;
          for (i = 0; i < len; i += 1) {
            this.buildItem(i);
          }
          this.checkPendingElements();
        };
        BaseRenderer.prototype.includeLayers = function(newLayers) {
          this.completeLayers = false;
          var i;
          var len = newLayers.length;
          var j;
          var jLen = this.layers.length;
          for (i = 0; i < len; i += 1) {
            j = 0;
            while (j < jLen) {
              if (this.layers[j].id === newLayers[i].id) {
                this.layers[j] = newLayers[i];
                break;
              }
              j += 1;
            }
          }
        };
        BaseRenderer.prototype.setProjectInterface = function(pInterface) {
          this.globalData.projectInterface = pInterface;
        };
        BaseRenderer.prototype.initItems = function() {
          if (!this.globalData.progressiveLoad) {
            this.buildAllItems();
          }
        };
        BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy) {
          var elements = this.elements;
          var layers = this.layers;
          var i = 0;
          var len = layers.length;
          while (i < len) {
            if (layers[i].ind == parentName) {
              if (!elements[i] || elements[i] === true) {
                this.buildItem(i);
                this.addPendingElement(element);
              } else {
                hierarchy.push(elements[i]);
                elements[i].setAsParent();
                if (layers[i].parent !== void 0) {
                  this.buildElementParenting(element, layers[i].parent, hierarchy);
                } else {
                  element.setHierarchy(hierarchy);
                }
              }
            }
            i += 1;
          }
        };
        BaseRenderer.prototype.addPendingElement = function(element) {
          this.pendingElements.push(element);
        };
        BaseRenderer.prototype.searchExtraCompositions = function(assets) {
          var i;
          var len = assets.length;
          for (i = 0; i < len; i += 1) {
            if (assets[i].xt) {
              var comp2 = this.createComp(assets[i]);
              comp2.initExpressions();
              this.globalData.projectInterface.registerComposition(comp2);
            }
          }
        };
        BaseRenderer.prototype.getElementById = function(ind) {
          var i;
          var len = this.elements.length;
          for (i = 0; i < len; i += 1) {
            if (this.elements[i].data.ind === ind) {
              return this.elements[i];
            }
          }
          return null;
        };
        BaseRenderer.prototype.getElementByPath = function(path) {
          var pathValue = path.shift();
          var element;
          if (typeof pathValue === "number") {
            element = this.elements[pathValue];
          } else {
            var i;
            var len = this.elements.length;
            for (i = 0; i < len; i += 1) {
              if (this.elements[i].data.nm === pathValue) {
                element = this.elements[i];
                break;
              }
            }
          }
          if (path.length === 0) {
            return element;
          }
          return element.getElementByPath(path);
        };
        BaseRenderer.prototype.setupGlobalData = function(animData, fontsContainer) {
          this.globalData.fontManager = new FontManager();
          this.globalData.slotManager = slotFactory(animData);
          this.globalData.fontManager.addChars(animData.chars);
          this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
          this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
          this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
          this.globalData.imageLoader = this.animationItem.imagePreloader;
          this.globalData.audioController = this.animationItem.audioController;
          this.globalData.frameId = 0;
          this.globalData.frameRate = animData.fr;
          this.globalData.nm = animData.nm;
          this.globalData.compSize = {
            w: animData.w,
            h: animData.h
          };
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };
        function TransformElement() {
        }
        TransformElement.prototype = {
          initTransform: function initTransform() {
            var mat = new Matrix();
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: false,
              _localMatMdf: false,
              _opMdf: false,
              mat,
              localMat: mat,
              localOpacity: 1
            };
            if (this.data.ao) {
              this.finalTransform.mProp.autoOriented = true;
            }
            if (this.data.ty !== 11) {
            }
          },
          renderTransform: function renderTransform() {
            this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
            if (this.hierarchy) {
              var mat;
              var finalMat = this.finalTransform.mat;
              var i = 0;
              var len = this.hierarchy.length;
              if (!this.finalTransform._matMdf) {
                while (i < len) {
                  if (this.hierarchy[i].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = true;
                    break;
                  }
                  i += 1;
                }
              }
              if (this.finalTransform._matMdf) {
                mat = this.finalTransform.mProp.v.props;
                finalMat.cloneFromProps(mat);
                for (i = 0; i < len; i += 1) {
                  finalMat.multiply(this.hierarchy[i].finalTransform.mProp.v);
                }
              }
            }
            if (this.finalTransform._matMdf) {
              this.finalTransform._localMatMdf = this.finalTransform._matMdf;
            }
            if (this.finalTransform._opMdf) {
              this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
            }
          },
          renderLocalTransform: function renderLocalTransform() {
            if (this.localTransforms) {
              var i = 0;
              var len = this.localTransforms.length;
              this.finalTransform._localMatMdf = this.finalTransform._matMdf;
              if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
                while (i < len) {
                  if (this.localTransforms[i]._mdf) {
                    this.finalTransform._localMatMdf = true;
                  }
                  if (this.localTransforms[i]._opMdf && !this.finalTransform._opMdf) {
                    this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                    this.finalTransform._opMdf = true;
                  }
                  i += 1;
                }
              }
              if (this.finalTransform._localMatMdf) {
                var localMat = this.finalTransform.localMat;
                this.localTransforms[0].matrix.clone(localMat);
                for (i = 1; i < len; i += 1) {
                  var lmat = this.localTransforms[i].matrix;
                  localMat.multiply(lmat);
                }
                localMat.multiply(this.finalTransform.mat);
              }
              if (this.finalTransform._opMdf) {
                var localOp = this.finalTransform.localOpacity;
                for (i = 0; i < len; i += 1) {
                  localOp *= this.localTransforms[i].opacity * 0.01;
                }
                this.finalTransform.localOpacity = localOp;
              }
            }
          },
          searchEffectTransforms: function searchEffectTransforms() {
            if (this.renderableEffectsManager) {
              var transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (transformEffects.length) {
                this.localTransforms = [];
                this.finalTransform.localMat = new Matrix();
                var i = 0;
                var len = transformEffects.length;
                for (i = 0; i < len; i += 1) {
                  this.localTransforms.push(transformEffects[i]);
                }
              }
            }
          },
          globalToLocal: function globalToLocal(pt) {
            var transforms = [];
            transforms.push(this.finalTransform);
            var flag = true;
            var comp2 = this.comp;
            while (flag) {
              if (comp2.finalTransform) {
                if (comp2.data.hasMask) {
                  transforms.splice(0, 0, comp2.finalTransform);
                }
                comp2 = comp2.comp;
              } else {
                flag = false;
              }
            }
            var i;
            var len = transforms.length;
            var ptNew;
            for (i = 0; i < len; i += 1) {
              ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
              pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
            }
            return pt;
          },
          mHelper: new Matrix()
        };
        function MaskElement(data2, element, globalData2) {
          this.data = data2;
          this.element = element;
          this.globalData = globalData2;
          this.storedData = [];
          this.masksProperties = this.data.masksProperties || [];
          this.maskElement = null;
          var defs = this.globalData.defs;
          var i;
          var len = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(len);
          this.solidPath = "";
          var path;
          var properties = this.masksProperties;
          var count = 0;
          var currentMasks = [];
          var j;
          var jLen;
          var layerId = createElementID();
          var rect;
          var expansor;
          var feMorph;
          var x;
          var maskType = "clipPath";
          var maskRef = "clip-path";
          for (i = 0; i < len; i += 1) {
            if (properties[i].mode !== "a" && properties[i].mode !== "n" || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
              maskType = "mask";
              maskRef = "mask";
            }
            if ((properties[i].mode === "s" || properties[i].mode === "i") && count === 0) {
              rect = createNS("rect");
              rect.setAttribute("fill", "#ffffff");
              rect.setAttribute("width", this.element.comp.data.w || 0);
              rect.setAttribute("height", this.element.comp.data.h || 0);
              currentMasks.push(rect);
            } else {
              rect = null;
            }
            path = createNS("path");
            if (properties[i].mode === "n") {
              this.viewData[i] = {
                op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
                elem: path,
                lastPath: ""
              };
              defs.appendChild(path);
            } else {
              count += 1;
              path.setAttribute("fill", properties[i].mode === "s" ? "#000000" : "#ffffff");
              path.setAttribute("clip-rule", "nonzero");
              var filterID;
              if (properties[i].x.k !== 0) {
                maskType = "mask";
                maskRef = "mask";
                x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
                filterID = createElementID();
                expansor = createNS("filter");
                expansor.setAttribute("id", filterID);
                feMorph = createNS("feMorphology");
                feMorph.setAttribute("operator", "erode");
                feMorph.setAttribute("in", "SourceGraphic");
                feMorph.setAttribute("radius", "0");
                expansor.appendChild(feMorph);
                defs.appendChild(expansor);
                path.setAttribute("stroke", properties[i].mode === "s" ? "#000000" : "#ffffff");
              } else {
                feMorph = null;
                x = null;
              }
              this.storedData[i] = {
                elem: path,
                x,
                expan: feMorph,
                lastPath: "",
                lastOperator: "",
                filterId: filterID,
                lastRadius: 0
              };
              if (properties[i].mode === "i") {
                jLen = currentMasks.length;
                var g = createNS("g");
                for (j = 0; j < jLen; j += 1) {
                  g.appendChild(currentMasks[j]);
                }
                var mask2 = createNS("mask");
                mask2.setAttribute("mask-type", "alpha");
                mask2.setAttribute("id", layerId + "_" + count);
                mask2.appendChild(path);
                defs.appendChild(mask2);
                g.setAttribute("mask", "url(" + getLocationHref() + "#" + layerId + "_" + count + ")");
                currentMasks.length = 0;
                currentMasks.push(g);
              } else {
                currentMasks.push(path);
              }
              if (properties[i].inv && !this.solidPath) {
                this.solidPath = this.createLayerSolidPath();
              }
              this.viewData[i] = {
                elem: path,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
                invRect: rect
              };
              if (!this.viewData[i].prop.k) {
                this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
              }
            }
          }
          this.maskElement = createNS(maskType);
          len = currentMasks.length;
          for (i = 0; i < len; i += 1) {
            this.maskElement.appendChild(currentMasks[i]);
          }
          if (count > 0) {
            this.maskElement.setAttribute("id", layerId);
            this.element.maskedElement.setAttribute(maskRef, "url(" + getLocationHref() + "#" + layerId + ")");
            defs.appendChild(this.maskElement);
          }
          if (this.viewData.length) {
            this.element.addRenderableComponent(this);
          }
        }
        MaskElement.prototype.getMaskProperty = function(pos) {
          return this.viewData[pos].prop;
        };
        MaskElement.prototype.renderFrame = function(isFirstFrame) {
          var finalMat = this.element.finalTransform.mat;
          var i;
          var len = this.masksProperties.length;
          for (i = 0; i < len; i += 1) {
            if (this.viewData[i].prop._mdf || isFirstFrame) {
              this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
            }
            if (this.viewData[i].op._mdf || isFirstFrame) {
              this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v);
            }
            if (this.masksProperties[i].mode !== "n") {
              if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
                this.viewData[i].invRect.setAttribute("transform", finalMat.getInverseMatrix().to2dCSS());
              }
              if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
                var feMorph = this.storedData[i].expan;
                if (this.storedData[i].x.v < 0) {
                  if (this.storedData[i].lastOperator !== "erode") {
                    this.storedData[i].lastOperator = "erode";
                    this.storedData[i].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i].filterId + ")");
                  }
                  feMorph.setAttribute("radius", -this.storedData[i].x.v);
                } else {
                  if (this.storedData[i].lastOperator !== "dilate") {
                    this.storedData[i].lastOperator = "dilate";
                    this.storedData[i].elem.setAttribute("filter", null);
                  }
                  this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2);
                }
              }
            }
          }
        };
        MaskElement.prototype.getMaskelement = function() {
          return this.maskElement;
        };
        MaskElement.prototype.createLayerSolidPath = function() {
          var path = "M0,0 ";
          path += " h" + this.globalData.compSize.w;
          path += " v" + this.globalData.compSize.h;
          path += " h-" + this.globalData.compSize.w;
          path += " v-" + this.globalData.compSize.h + " ";
          return path;
        };
        MaskElement.prototype.drawPath = function(pathData, pathNodes, viewData) {
          var pathString = " M" + pathNodes.v[0][0] + "," + pathNodes.v[0][1];
          var i;
          var len;
          len = pathNodes._length;
          for (i = 1; i < len; i += 1) {
            pathString += " C" + pathNodes.o[i - 1][0] + "," + pathNodes.o[i - 1][1] + " " + pathNodes.i[i][0] + "," + pathNodes.i[i][1] + " " + pathNodes.v[i][0] + "," + pathNodes.v[i][1];
          }
          if (pathNodes.c && len > 1) {
            pathString += " C" + pathNodes.o[i - 1][0] + "," + pathNodes.o[i - 1][1] + " " + pathNodes.i[0][0] + "," + pathNodes.i[0][1] + " " + pathNodes.v[0][0] + "," + pathNodes.v[0][1];
          }
          if (viewData.lastPath !== pathString) {
            var pathShapeValue = "";
            if (viewData.elem) {
              if (pathNodes.c) {
                pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
              }
              viewData.elem.setAttribute("d", pathShapeValue);
            }
            viewData.lastPath = pathString;
          }
        };
        MaskElement.prototype.destroy = function() {
          this.element = null;
          this.globalData = null;
          this.maskElement = null;
          this.data = null;
          this.masksProperties = null;
        };
        var filtersFactory = function() {
          var ob2 = {};
          ob2.createFilter = createFilter;
          ob2.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;
          function createFilter(filId, skipCoordinates) {
            var fil = createNS("filter");
            fil.setAttribute("id", filId);
            if (skipCoordinates !== true) {
              fil.setAttribute("filterUnits", "objectBoundingBox");
              fil.setAttribute("x", "0%");
              fil.setAttribute("y", "0%");
              fil.setAttribute("width", "100%");
              fil.setAttribute("height", "100%");
            }
            return fil;
          }
          function createAlphaToLuminanceFilter() {
            var feColorMatrix = createNS("feColorMatrix");
            feColorMatrix.setAttribute("type", "matrix");
            feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
            feColorMatrix.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
            return feColorMatrix;
          }
          return ob2;
        }();
        var featureSupport = function() {
          var ob2 = {
            maskType: true,
            svgLumaHidden: true,
            offscreenCanvas: typeof OffscreenCanvas !== "undefined"
          };
          if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            ob2.maskType = false;
          }
          if (/firefox/i.test(navigator.userAgent)) {
            ob2.svgLumaHidden = false;
          }
          return ob2;
        }();
        var registeredEffects$1 = {};
        var idPrefix = "filter_result_";
        function SVGEffects(elem2) {
          var i;
          var source = "SourceGraphic";
          var len = elem2.data.ef ? elem2.data.ef.length : 0;
          var filId = createElementID();
          var fil = filtersFactory.createFilter(filId, true);
          var count = 0;
          this.filters = [];
          var filterManager;
          for (i = 0; i < len; i += 1) {
            filterManager = null;
            var type = elem2.data.ef[i].ty;
            if (registeredEffects$1[type]) {
              var Effect = registeredEffects$1[type].effect;
              filterManager = new Effect(fil, elem2.effectsManager.effectElements[i], elem2, idPrefix + count, source);
              source = idPrefix + count;
              if (registeredEffects$1[type].countsAsEffect) {
                count += 1;
              }
            }
            if (filterManager) {
              this.filters.push(filterManager);
            }
          }
          if (count) {
            elem2.globalData.defs.appendChild(fil);
            elem2.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
          }
          if (this.filters.length) {
            elem2.addRenderableComponent(this);
          }
        }
        SVGEffects.prototype.renderFrame = function(_isFirstFrame) {
          var i;
          var len = this.filters.length;
          for (i = 0; i < len; i += 1) {
            this.filters[i].renderFrame(_isFirstFrame);
          }
        };
        SVGEffects.prototype.getEffects = function(type) {
          var i;
          var len = this.filters.length;
          var effects = [];
          for (i = 0; i < len; i += 1) {
            if (this.filters[i].type === type) {
              effects.push(this.filters[i]);
            }
          }
          return effects;
        };
        function registerEffect$1(id, effect2, countsAsEffect) {
          registeredEffects$1[id] = {
            effect: effect2,
            countsAsEffect
          };
        }
        function SVGBaseElement() {
        }
        SVGBaseElement.prototype = {
          initRendererElement: function initRendererElement() {
            this.layerElement = createNS("g");
          },
          createContainerElements: function createContainerElements() {
            this.matteElement = createNS("g");
            this.transformedElement = this.layerElement;
            this.maskedElement = this.layerElement;
            this._sizeChanged = false;
            var layerElementParent = null;
            if (this.data.td) {
              this.matteMasks = {};
              var gg = createNS("g");
              gg.setAttribute("id", this.layerId);
              gg.appendChild(this.layerElement);
              layerElementParent = gg;
              this.globalData.defs.appendChild(gg);
            } else if (this.data.tt) {
              this.matteElement.appendChild(this.layerElement);
              layerElementParent = this.matteElement;
              this.baseElement = this.matteElement;
            } else {
              this.baseElement = this.layerElement;
            }
            if (this.data.ln) {
              this.layerElement.setAttribute("id", this.data.ln);
            }
            if (this.data.cl) {
              this.layerElement.setAttribute("class", this.data.cl);
            }
            if (this.data.ty === 0 && !this.data.hd) {
              var cp = createNS("clipPath");
              var pt = createNS("path");
              pt.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var clipId = createElementID();
              cp.setAttribute("id", clipId);
              cp.appendChild(pt);
              this.globalData.defs.appendChild(cp);
              if (this.checkMasks()) {
                var cpGroup = createNS("g");
                cpGroup.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId + ")");
                cpGroup.appendChild(this.layerElement);
                this.transformedElement = cpGroup;
                if (layerElementParent) {
                  layerElementParent.appendChild(this.transformedElement);
                } else {
                  this.baseElement = this.transformedElement;
                }
              } else {
                this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId + ")");
              }
            }
            if (this.data.bm !== 0) {
              this.setBlendMode();
            }
          },
          renderElement: function renderElement() {
            if (this.finalTransform._localMatMdf) {
              this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS());
            }
            if (this.finalTransform._opMdf) {
              this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
            }
          },
          destroyBaseElement: function destroyBaseElement() {
            this.layerElement = null;
            this.matteElement = null;
            this.maskManager.destroy();
          },
          getBaseElement: function getBaseElement() {
            if (this.data.hd) {
              return null;
            }
            return this.baseElement;
          },
          createRenderableComponents: function createRenderableComponents() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
            this.renderableEffectsManager = new SVGEffects(this);
            this.searchEffectTransforms();
          },
          getMatte: function getMatte(matteType) {
            if (!this.matteMasks) {
              this.matteMasks = {};
            }
            if (!this.matteMasks[matteType]) {
              var id = this.layerId + "_" + matteType;
              var filId;
              var fil;
              var useElement;
              var gg;
              if (matteType === 1 || matteType === 3) {
                var masker = createNS("mask");
                masker.setAttribute("id", id);
                masker.setAttribute("mask-type", matteType === 3 ? "luminance" : "alpha");
                useElement = createNS("use");
                useElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                masker.appendChild(useElement);
                this.globalData.defs.appendChild(masker);
                if (!featureSupport.maskType && matteType === 1) {
                  masker.setAttribute("mask-type", "luminance");
                  filId = createElementID();
                  fil = filtersFactory.createFilter(filId);
                  this.globalData.defs.appendChild(fil);
                  fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                  gg = createNS("g");
                  gg.appendChild(useElement);
                  masker.appendChild(gg);
                  gg.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
                }
              } else if (matteType === 2) {
                var maskGroup = createNS("mask");
                maskGroup.setAttribute("id", id);
                maskGroup.setAttribute("mask-type", "alpha");
                var maskGrouper = createNS("g");
                maskGroup.appendChild(maskGrouper);
                filId = createElementID();
                fil = filtersFactory.createFilter(filId);
                var feCTr = createNS("feComponentTransfer");
                feCTr.setAttribute("in", "SourceGraphic");
                fil.appendChild(feCTr);
                var feFunc = createNS("feFuncA");
                feFunc.setAttribute("type", "table");
                feFunc.setAttribute("tableValues", "1.0 0.0");
                feCTr.appendChild(feFunc);
                this.globalData.defs.appendChild(fil);
                var alphaRect = createNS("rect");
                alphaRect.setAttribute("width", this.comp.data.w);
                alphaRect.setAttribute("height", this.comp.data.h);
                alphaRect.setAttribute("x", "0");
                alphaRect.setAttribute("y", "0");
                alphaRect.setAttribute("fill", "#ffffff");
                alphaRect.setAttribute("opacity", "0");
                maskGrouper.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
                maskGrouper.appendChild(alphaRect);
                useElement = createNS("use");
                useElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                maskGrouper.appendChild(useElement);
                if (!featureSupport.maskType) {
                  maskGroup.setAttribute("mask-type", "luminance");
                  fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                  gg = createNS("g");
                  maskGrouper.appendChild(alphaRect);
                  gg.appendChild(this.layerElement);
                  maskGrouper.appendChild(gg);
                }
                this.globalData.defs.appendChild(maskGroup);
              }
              this.matteMasks[matteType] = id;
            }
            return this.matteMasks[matteType];
          },
          setMatte: function setMatte(id) {
            if (!this.matteElement) {
              return;
            }
            this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + id + ")");
          }
        };
        function HierarchyElement() {
        }
        HierarchyElement.prototype = {
          /**
             * @function
             * Initializes hierarchy properties
             *
             */
          initHierarchy: function initHierarchy() {
            this.hierarchy = [];
            this._isParent = false;
            this.checkParenting();
          },
          /**
             * @function
             * Sets layer's hierarchy.
             * @param {array} hierarch
             * layer's parent list
             *
             */
          setHierarchy: function setHierarchy(hierarchy) {
            this.hierarchy = hierarchy;
          },
          /**
             * @function
             * Sets layer as parent.
             *
             */
          setAsParent: function setAsParent() {
            this._isParent = true;
          },
          /**
             * @function
             * Searches layer's parenting chain
             *
             */
          checkParenting: function checkParenting() {
            if (this.data.parent !== void 0) {
              this.comp.buildElementParenting(this, this.data.parent, []);
            }
          }
        };
        function RenderableDOMElement() {
        }
        (function() {
          var _prototype = {
            initElement: function initElement(data2, globalData2, comp2) {
              this.initFrame();
              this.initBaseData(data2, globalData2, comp2);
              this.initTransform(data2, globalData2, comp2);
              this.initHierarchy();
              this.initRenderable();
              this.initRendererElement();
              this.createContainerElements();
              this.createRenderableComponents();
              this.createContent();
              this.hide();
            },
            hide: function hide() {
              if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                var elem2 = this.baseElement || this.layerElement;
                elem2.style.display = "none";
                this.hidden = true;
              }
            },
            show: function show() {
              if (this.isInRange && !this.isTransparent) {
                if (!this.data.hd) {
                  var elem2 = this.baseElement || this.layerElement;
                  elem2.style.display = "block";
                }
                this.hidden = false;
                this._isFirstFrame = true;
              }
            },
            renderFrame: function renderFrame() {
              if (this.data.hd || this.hidden) {
                return;
              }
              this.renderTransform();
              this.renderRenderable();
              this.renderLocalTransform();
              this.renderElement();
              this.renderInnerContent();
              if (this._isFirstFrame) {
                this._isFirstFrame = false;
              }
            },
            renderInnerContent: function renderInnerContent() {
            },
            prepareFrame: function prepareFrame(num) {
              this._mdf = false;
              this.prepareRenderableFrame(num);
              this.prepareProperties(num, this.isInRange);
              this.checkTransparency();
            },
            destroy: function destroy() {
              this.innerElem = null;
              this.destroyBaseElement();
            }
          };
          extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
        })();
        function IImageElement(data2, globalData2, comp2) {
          this.assetData = globalData2.getAssetData(data2.refId);
          if (this.assetData && this.assetData.sid) {
            this.assetData = globalData2.slotManager.getProp(this.assetData);
          }
          this.initElement(data2, globalData2, comp2);
          this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          };
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);
        IImageElement.prototype.createContent = function() {
          var assetPath = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image");
          this.innerElem.setAttribute("width", this.assetData.w + "px");
          this.innerElem.setAttribute("height", this.assetData.h + "px");
          this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
          this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath);
          this.layerElement.appendChild(this.innerElem);
        };
        IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect;
        };
        function ProcessedElement(element, position2) {
          this.elem = element;
          this.pos = position2;
        }
        function IShapeElement() {
        }
        IShapeElement.prototype = {
          addShapeToModifiers: function addShapeToModifiers(data2) {
            var i;
            var len = this.shapeModifiers.length;
            for (i = 0; i < len; i += 1) {
              this.shapeModifiers[i].addShape(data2);
            }
          },
          isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data2) {
            var i = 0;
            var len = this.shapeModifiers.length;
            while (i < len) {
              if (this.shapeModifiers[i].isAnimatedWithShape(data2)) {
                return true;
              }
            }
            return false;
          },
          renderModifiers: function renderModifiers() {
            if (!this.shapeModifiers.length) {
              return;
            }
            var i;
            var len = this.shapes.length;
            for (i = 0; i < len; i += 1) {
              this.shapes[i].sh.reset();
            }
            len = this.shapeModifiers.length;
            var shouldBreakProcess;
            for (i = len - 1; i >= 0; i -= 1) {
              shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame);
              if (shouldBreakProcess) {
                break;
              }
            }
          },
          searchProcessedElement: function searchProcessedElement(elem2) {
            var elements = this.processedElements;
            var i = 0;
            var len = elements.length;
            while (i < len) {
              if (elements[i].elem === elem2) {
                return elements[i].pos;
              }
              i += 1;
            }
            return 0;
          },
          addProcessedElement: function addProcessedElement(elem2, pos) {
            var elements = this.processedElements;
            var i = elements.length;
            while (i) {
              i -= 1;
              if (elements[i].elem === elem2) {
                elements[i].pos = pos;
                return;
              }
            }
            elements.push(new ProcessedElement(elem2, pos));
          },
          prepareFrame: function prepareFrame(num) {
            this.prepareRenderableFrame(num);
            this.prepareProperties(num, this.isInRange);
          }
        };
        var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        };
        var lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };
        function SVGShapeData(transformers, level, shape) {
          this.caches = [];
          this.styles = [];
          this.transformers = transformers;
          this.lStr = "";
          this.sh = shape;
          this.lvl = level;
          this._isAnimated = !!shape.k;
          var i = 0;
          var len = transformers.length;
          while (i < len) {
            if (transformers[i].mProps.dynamicProperties.length) {
              this._isAnimated = true;
              break;
            }
            i += 1;
          }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = true;
        };
        function SVGStyleData(data2, level) {
          this.data = data2;
          this.type = data2.ty;
          this.d = "";
          this.lvl = level;
          this._mdf = false;
          this.closed = data2.hd === true;
          this.pElem = createNS("path");
          this.msElem = null;
        }
        SVGStyleData.prototype.reset = function() {
          this.d = "";
          this._mdf = false;
        };
        function DashProperty(elem2, data2, renderer2, container) {
          this.elem = elem2;
          this.frameId = -1;
          this.dataProps = createSizedArray(data2.length);
          this.renderer = renderer2;
          this.k = false;
          this.dashStr = "";
          this.dashArray = createTypedArray("float32", data2.length ? data2.length - 1 : 0);
          this.dashoffset = createTypedArray("float32", 1);
          this.initDynamicPropertyContainer(container);
          var i;
          var len = data2.length || 0;
          var prop;
          for (i = 0; i < len; i += 1) {
            prop = PropertyFactory.getProp(elem2, data2[i].v, 0, 0, this);
            this.k = prop.k || this.k;
            this.dataProps[i] = {
              n: data2[i].n,
              p: prop
            };
          }
          if (!this.k) {
            this.getValue(true);
          }
          this._isAnimated = this.k;
        }
        DashProperty.prototype.getValue = function(forceRender) {
          if (this.elem.globalData.frameId === this.frameId && !forceRender) {
            return;
          }
          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();
          this._mdf = this._mdf || forceRender;
          if (this._mdf) {
            var i = 0;
            var len = this.dataProps.length;
            if (this.renderer === "svg") {
              this.dashStr = "";
            }
            for (i = 0; i < len; i += 1) {
              if (this.dataProps[i].n !== "o") {
                if (this.renderer === "svg") {
                  this.dashStr += " " + this.dataProps[i].p.v;
                } else {
                  this.dashArray[i] = this.dataProps[i].p.v;
                }
              } else {
                this.dashoffset[0] = this.dataProps[i].p.v;
              }
            }
          }
        };
        extendPrototype([DynamicPropertyContainer], DashProperty);
        function SVGStrokeStyleData(elem2, data2, styleOb) {
          this.initDynamicPropertyContainer(elem2);
          this.getValue = this.iterateDynamicProperties;
          this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
          this.w = PropertyFactory.getProp(elem2, data2.w, 0, null, this);
          this.d = new DashProperty(elem2, data2.d || {}, "svg", this);
          this.c = PropertyFactory.getProp(elem2, data2.c, 1, 255, this);
          this.style = styleOb;
          this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
        function SVGFillStyleData(elem2, data2, styleOb) {
          this.initDynamicPropertyContainer(elem2);
          this.getValue = this.iterateDynamicProperties;
          this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
          this.c = PropertyFactory.getProp(elem2, data2.c, 1, 255, this);
          this.style = styleOb;
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
        function SVGNoStyleData(elem2, data2, styleOb) {
          this.initDynamicPropertyContainer(elem2);
          this.getValue = this.iterateDynamicProperties;
          this.style = styleOb;
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
        function GradientProperty(elem2, data2, container) {
          this.data = data2;
          this.c = createTypedArray("uint8c", data2.p * 4);
          var cLength = data2.k.k[0].s ? data2.k.k[0].s.length - data2.p * 4 : data2.k.k.length - data2.p * 4;
          this.o = createTypedArray("float32", cLength);
          this._cmdf = false;
          this._omdf = false;
          this._collapsable = this.checkCollapsable();
          this._hasOpacity = cLength;
          this.initDynamicPropertyContainer(container);
          this.prop = PropertyFactory.getProp(elem2, data2.k, 1, null, this);
          this.k = this.prop.k;
          this.getValue(true);
        }
        GradientProperty.prototype.comparePoints = function(values, points) {
          var i = 0;
          var len = this.o.length / 2;
          var diff;
          while (i < len) {
            diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
            if (diff > 0.01) {
              return false;
            }
            i += 1;
          }
          return true;
        };
        GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 !== this.c.length / 4) {
            return false;
          }
          if (this.data.k.k[0].s) {
            var i = 0;
            var len = this.data.k.k.length;
            while (i < len) {
              if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
                return false;
              }
              i += 1;
            }
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
            return false;
          }
          return true;
        };
        GradientProperty.prototype.getValue = function(forceRender) {
          this.prop.getValue();
          this._mdf = false;
          this._cmdf = false;
          this._omdf = false;
          if (this.prop._mdf || forceRender) {
            var i;
            var len = this.data.p * 4;
            var mult;
            var val2;
            for (i = 0; i < len; i += 1) {
              mult = i % 4 === 0 ? 100 : 255;
              val2 = Math.round(this.prop.v[i] * mult);
              if (this.c[i] !== val2) {
                this.c[i] = val2;
                this._cmdf = !forceRender;
              }
            }
            if (this.o.length) {
              len = this.prop.v.length;
              for (i = this.data.p * 4; i < len; i += 1) {
                mult = i % 2 === 0 ? 100 : 1;
                val2 = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
                if (this.o[i - this.data.p * 4] !== val2) {
                  this.o[i - this.data.p * 4] = val2;
                  this._omdf = !forceRender;
                }
              }
            }
            this._mdf = !forceRender;
          }
        };
        extendPrototype([DynamicPropertyContainer], GradientProperty);
        function SVGGradientFillStyleData(elem2, data2, styleOb) {
          this.initDynamicPropertyContainer(elem2);
          this.getValue = this.iterateDynamicProperties;
          this.initGradientData(elem2, data2, styleOb);
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(elem2, data2, styleOb) {
          this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
          this.s = PropertyFactory.getProp(elem2, data2.s, 1, null, this);
          this.e = PropertyFactory.getProp(elem2, data2.e, 1, null, this);
          this.h = PropertyFactory.getProp(elem2, data2.h || {
            k: 0
          }, 0, 0.01, this);
          this.a = PropertyFactory.getProp(elem2, data2.a || {
            k: 0
          }, 0, degToRads, this);
          this.g = new GradientProperty(elem2, data2.g, this);
          this.style = styleOb;
          this.stops = [];
          this.setGradientData(styleOb.pElem, data2);
          this.setGradientOpacity(data2, styleOb);
          this._isAnimated = !!this._isAnimated;
        };
        SVGGradientFillStyleData.prototype.setGradientData = function(pathElement, data2) {
          var gradientId = createElementID();
          var gfill = createNS(data2.t === 1 ? "linearGradient" : "radialGradient");
          gfill.setAttribute("id", gradientId);
          gfill.setAttribute("spreadMethod", "pad");
          gfill.setAttribute("gradientUnits", "userSpaceOnUse");
          var stops = [];
          var stop;
          var j;
          var jLen;
          jLen = data2.g.p * 4;
          for (j = 0; j < jLen; j += 4) {
            stop = createNS("stop");
            gfill.appendChild(stop);
            stops.push(stop);
          }
          pathElement.setAttribute(data2.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + gradientId + ")");
          this.gf = gfill;
          this.cst = stops;
        };
        SVGGradientFillStyleData.prototype.setGradientOpacity = function(data2, styleOb) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var stop;
            var j;
            var jLen;
            var mask2 = createNS("mask");
            var maskElement = createNS("path");
            mask2.appendChild(maskElement);
            var opacityId = createElementID();
            var maskId = createElementID();
            mask2.setAttribute("id", maskId);
            var opFill = createNS(data2.t === 1 ? "linearGradient" : "radialGradient");
            opFill.setAttribute("id", opacityId);
            opFill.setAttribute("spreadMethod", "pad");
            opFill.setAttribute("gradientUnits", "userSpaceOnUse");
            jLen = data2.g.k.k[0].s ? data2.g.k.k[0].s.length : data2.g.k.k.length;
            var stops = this.stops;
            for (j = data2.g.p * 4; j < jLen; j += 2) {
              stop = createNS("stop");
              stop.setAttribute("stop-color", "rgb(255,255,255)");
              opFill.appendChild(stop);
              stops.push(stop);
            }
            maskElement.setAttribute(data2.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + opacityId + ")");
            if (data2.ty === "gs") {
              maskElement.setAttribute("stroke-linecap", lineCapEnum[data2.lc || 2]);
              maskElement.setAttribute("stroke-linejoin", lineJoinEnum[data2.lj || 2]);
              if (data2.lj === 1) {
                maskElement.setAttribute("stroke-miterlimit", data2.ml);
              }
            }
            this.of = opFill;
            this.ms = mask2;
            this.ost = stops;
            this.maskId = maskId;
            styleOb.msElem = maskElement;
          }
        };
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(elem2, data2, styleOb) {
          this.initDynamicPropertyContainer(elem2);
          this.getValue = this.iterateDynamicProperties;
          this.w = PropertyFactory.getProp(elem2, data2.w, 0, null, this);
          this.d = new DashProperty(elem2, data2.d || {}, "svg", this);
          this.initGradientData(elem2, data2, styleOb);
          this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
          this.it = [];
          this.prevViewData = [];
          this.gr = createNS("g");
        }
        function SVGTransformData(mProps, op, container) {
          this.transform = {
            mProps,
            op,
            container
          };
          this.elements = [];
          this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var buildShapeString = function buildShapeString2(pathNodes, length2, closed, mat) {
          if (length2 === 0) {
            return "";
          }
          var _o = pathNodes.o;
          var _i2 = pathNodes.i;
          var _v = pathNodes.v;
          var i;
          var shapeString = " M" + mat.applyToPointStringified(_v[0][0], _v[0][1]);
          for (i = 1; i < length2; i += 1) {
            shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i2[i][0], _i2[i][1]) + " " + mat.applyToPointStringified(_v[i][0], _v[i][1]);
          }
          if (closed && length2) {
            shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i2[0][0], _i2[0][1]) + " " + mat.applyToPointStringified(_v[0][0], _v[0][1]);
            shapeString += "z";
          }
          return shapeString;
        };
        var SVGElementsRenderer = function() {
          var _identityMatrix = new Matrix();
          var _matrixHelper = new Matrix();
          var ob2 = {
            createRenderFunction
          };
          function createRenderFunction(data2) {
            switch (data2.ty) {
              case "fl":
                return renderFill;
              case "gf":
                return renderGradient;
              case "gs":
                return renderGradientStroke;
              case "st":
                return renderStroke;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return renderPath;
              case "tr":
                return renderContentTransform;
              case "no":
                return renderNoop;
              default:
                return null;
            }
          }
          function renderContentTransform(styleData, itemData, isFirstFrame) {
            if (isFirstFrame || itemData.transform.op._mdf) {
              itemData.transform.container.setAttribute("opacity", itemData.transform.op.v);
            }
            if (isFirstFrame || itemData.transform.mProps._mdf) {
              itemData.transform.container.setAttribute("transform", itemData.transform.mProps.v.to2dCSS());
            }
          }
          function renderNoop() {
          }
          function renderPath(styleData, itemData, isFirstFrame) {
            var j;
            var jLen;
            var pathStringTransformed;
            var redraw;
            var pathNodes;
            var l;
            var lLen = itemData.styles.length;
            var lvl = itemData.lvl;
            var paths;
            var mat;
            var iterations;
            var k;
            for (l = 0; l < lLen; l += 1) {
              redraw = itemData.sh._mdf || isFirstFrame;
              if (itemData.styles[l].lvl < lvl) {
                mat = _matrixHelper.reset();
                iterations = lvl - itemData.styles[l].lvl;
                k = itemData.transformers.length - 1;
                while (!redraw && iterations > 0) {
                  redraw = itemData.transformers[k].mProps._mdf || redraw;
                  iterations -= 1;
                  k -= 1;
                }
                if (redraw) {
                  iterations = lvl - itemData.styles[l].lvl;
                  k = itemData.transformers.length - 1;
                  while (iterations > 0) {
                    mat.multiply(itemData.transformers[k].mProps.v);
                    iterations -= 1;
                    k -= 1;
                  }
                }
              } else {
                mat = _identityMatrix;
              }
              paths = itemData.sh.paths;
              jLen = paths._length;
              if (redraw) {
                pathStringTransformed = "";
                for (j = 0; j < jLen; j += 1) {
                  pathNodes = paths.shapes[j];
                  if (pathNodes && pathNodes._length) {
                    pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
                  }
                }
                itemData.caches[l] = pathStringTransformed;
              } else {
                pathStringTransformed = itemData.caches[l];
              }
              itemData.styles[l].d += styleData.hd === true ? "" : pathStringTransformed;
              itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
            }
          }
          function renderFill(styleData, itemData, isFirstFrame) {
            var styleElem = itemData.style;
            if (itemData.c._mdf || isFirstFrame) {
              styleElem.pElem.setAttribute("fill", "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")");
            }
            if (itemData.o._mdf || isFirstFrame) {
              styleElem.pElem.setAttribute("fill-opacity", itemData.o.v);
            }
          }
          function renderGradientStroke(styleData, itemData, isFirstFrame) {
            renderGradient(styleData, itemData, isFirstFrame);
            renderStroke(styleData, itemData, isFirstFrame);
          }
          function renderGradient(styleData, itemData, isFirstFrame) {
            var gfill = itemData.gf;
            var hasOpacity = itemData.g._hasOpacity;
            var pt1 = itemData.s.v;
            var pt2 = itemData.e.v;
            if (itemData.o._mdf || isFirstFrame) {
              var attr = styleData.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              itemData.style.pElem.setAttribute(attr, itemData.o.v);
            }
            if (itemData.s._mdf || isFirstFrame) {
              var attr1 = styleData.t === 1 ? "x1" : "cx";
              var attr2 = attr1 === "x1" ? "y1" : "cy";
              gfill.setAttribute(attr1, pt1[0]);
              gfill.setAttribute(attr2, pt1[1]);
              if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute(attr1, pt1[0]);
                itemData.of.setAttribute(attr2, pt1[1]);
              }
            }
            var stops;
            var i;
            var len;
            var stop;
            if (itemData.g._cmdf || isFirstFrame) {
              stops = itemData.cst;
              var cValues = itemData.g.c;
              len = stops.length;
              for (i = 0; i < len; i += 1) {
                stop = stops[i];
                stop.setAttribute("offset", cValues[i * 4] + "%");
                stop.setAttribute("stop-color", "rgb(" + cValues[i * 4 + 1] + "," + cValues[i * 4 + 2] + "," + cValues[i * 4 + 3] + ")");
              }
            }
            if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
              var oValues = itemData.g.o;
              if (itemData.g._collapsable) {
                stops = itemData.cst;
              } else {
                stops = itemData.ost;
              }
              len = stops.length;
              for (i = 0; i < len; i += 1) {
                stop = stops[i];
                if (!itemData.g._collapsable) {
                  stop.setAttribute("offset", oValues[i * 2] + "%");
                }
                stop.setAttribute("stop-opacity", oValues[i * 2 + 1]);
              }
            }
            if (styleData.t === 1) {
              if (itemData.e._mdf || isFirstFrame) {
                gfill.setAttribute("x2", pt2[0]);
                gfill.setAttribute("y2", pt2[1]);
                if (hasOpacity && !itemData.g._collapsable) {
                  itemData.of.setAttribute("x2", pt2[0]);
                  itemData.of.setAttribute("y2", pt2[1]);
                }
              }
            } else {
              var rad;
              if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
                rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
                gfill.setAttribute("r", rad);
                if (hasOpacity && !itemData.g._collapsable) {
                  itemData.of.setAttribute("r", rad);
                }
              }
              if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
                if (!rad) {
                  rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
                }
                var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
                var percent = itemData.h.v;
                if (percent >= 1) {
                  percent = 0.99;
                } else if (percent <= -1) {
                  percent = -0.99;
                }
                var dist = rad * percent;
                var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
                var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
                gfill.setAttribute("fx", x);
                gfill.setAttribute("fy", y);
                if (hasOpacity && !itemData.g._collapsable) {
                  itemData.of.setAttribute("fx", x);
                  itemData.of.setAttribute("fy", y);
                }
              }
            }
          }
          function renderStroke(styleData, itemData, isFirstFrame) {
            var styleElem = itemData.style;
            var d = itemData.d;
            if (d && (d._mdf || isFirstFrame) && d.dashStr) {
              styleElem.pElem.setAttribute("stroke-dasharray", d.dashStr);
              styleElem.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0]);
            }
            if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
              styleElem.pElem.setAttribute("stroke", "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")");
            }
            if (itemData.o._mdf || isFirstFrame) {
              styleElem.pElem.setAttribute("stroke-opacity", itemData.o.v);
            }
            if (itemData.w._mdf || isFirstFrame) {
              styleElem.pElem.setAttribute("stroke-width", itemData.w.v);
              if (styleElem.msElem) {
                styleElem.msElem.setAttribute("stroke-width", itemData.w.v);
              }
            }
          }
          return ob2;
        }();
        function SVGShapeElement(data2, globalData2, comp2) {
          this.shapes = [];
          this.shapesData = data2.shapes;
          this.stylesList = [];
          this.shapeModifiers = [];
          this.itemsData = [];
          this.processedElements = [];
          this.animatedContents = [];
          this.initElement(data2, globalData2, comp2);
          this.prevViewData = [];
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);
        SVGShapeElement.prototype.initSecondaryElement = function() {
        };
        SVGShapeElement.prototype.identityMatrix = new Matrix();
        SVGShapeElement.prototype.buildExpressionInterface = function() {
        };
        SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
          this.filterUniqueShapes();
        };
        SVGShapeElement.prototype.filterUniqueShapes = function() {
          var i;
          var len = this.shapes.length;
          var shape;
          var j;
          var jLen = this.stylesList.length;
          var style;
          var tempShapes = [];
          var areAnimated = false;
          for (j = 0; j < jLen; j += 1) {
            style = this.stylesList[j];
            areAnimated = false;
            tempShapes.length = 0;
            for (i = 0; i < len; i += 1) {
              shape = this.shapes[i];
              if (shape.styles.indexOf(style) !== -1) {
                tempShapes.push(shape);
                areAnimated = shape._isAnimated || areAnimated;
              }
            }
            if (tempShapes.length > 1 && areAnimated) {
              this.setShapesAsAnimated(tempShapes);
            }
          }
        };
        SVGShapeElement.prototype.setShapesAsAnimated = function(shapes) {
          var i;
          var len = shapes.length;
          for (i = 0; i < len; i += 1) {
            shapes[i].setAsAnimated();
          }
        };
        SVGShapeElement.prototype.createStyleElement = function(data2, level) {
          var elementData;
          var styleOb = new SVGStyleData(data2, level);
          var pathElement = styleOb.pElem;
          if (data2.ty === "st") {
            elementData = new SVGStrokeStyleData(this, data2, styleOb);
          } else if (data2.ty === "fl") {
            elementData = new SVGFillStyleData(this, data2, styleOb);
          } else if (data2.ty === "gf" || data2.ty === "gs") {
            var GradientConstructor = data2.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
            elementData = new GradientConstructor(this, data2, styleOb);
            this.globalData.defs.appendChild(elementData.gf);
            if (elementData.maskId) {
              this.globalData.defs.appendChild(elementData.ms);
              this.globalData.defs.appendChild(elementData.of);
              pathElement.setAttribute("mask", "url(" + getLocationHref() + "#" + elementData.maskId + ")");
            }
          } else if (data2.ty === "no") {
            elementData = new SVGNoStyleData(this, data2, styleOb);
          }
          if (data2.ty === "st" || data2.ty === "gs") {
            pathElement.setAttribute("stroke-linecap", lineCapEnum[data2.lc || 2]);
            pathElement.setAttribute("stroke-linejoin", lineJoinEnum[data2.lj || 2]);
            pathElement.setAttribute("fill-opacity", "0");
            if (data2.lj === 1) {
              pathElement.setAttribute("stroke-miterlimit", data2.ml);
            }
          }
          if (data2.r === 2) {
            pathElement.setAttribute("fill-rule", "evenodd");
          }
          if (data2.ln) {
            pathElement.setAttribute("id", data2.ln);
          }
          if (data2.cl) {
            pathElement.setAttribute("class", data2.cl);
          }
          if (data2.bm) {
            pathElement.style["mix-blend-mode"] = getBlendMode(data2.bm);
          }
          this.stylesList.push(styleOb);
          this.addToAnimatedContents(data2, elementData);
          return elementData;
        };
        SVGShapeElement.prototype.createGroupElement = function(data2) {
          var elementData = new ShapeGroupData();
          if (data2.ln) {
            elementData.gr.setAttribute("id", data2.ln);
          }
          if (data2.cl) {
            elementData.gr.setAttribute("class", data2.cl);
          }
          if (data2.bm) {
            elementData.gr.style["mix-blend-mode"] = getBlendMode(data2.bm);
          }
          return elementData;
        };
        SVGShapeElement.prototype.createTransformElement = function(data2, container) {
          var transformProperty = TransformPropertyFactory.getTransformProperty(this, data2, this);
          var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
          this.addToAnimatedContents(data2, elementData);
          return elementData;
        };
        SVGShapeElement.prototype.createShapeElement = function(data2, ownTransformers, level) {
          var ty = 4;
          if (data2.ty === "rc") {
            ty = 5;
          } else if (data2.ty === "el") {
            ty = 6;
          } else if (data2.ty === "sr") {
            ty = 7;
          }
          var shapeProperty = ShapePropertyFactory.getShapeProp(this, data2, ty, this);
          var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
          this.shapes.push(elementData);
          this.addShapeToModifiers(elementData);
          this.addToAnimatedContents(data2, elementData);
          return elementData;
        };
        SVGShapeElement.prototype.addToAnimatedContents = function(data2, element) {
          var i = 0;
          var len = this.animatedContents.length;
          while (i < len) {
            if (this.animatedContents[i].element === element) {
              return;
            }
            i += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(data2),
            element,
            data: data2
          });
        };
        SVGShapeElement.prototype.setElementStyles = function(elementData) {
          var arr = elementData.styles;
          var j;
          var jLen = this.stylesList.length;
          for (j = 0; j < jLen; j += 1) {
            if (!this.stylesList[j].closed) {
              arr.push(this.stylesList[j]);
            }
          }
        };
        SVGShapeElement.prototype.reloadShapes = function() {
          this._isFirstFrame = true;
          var i;
          var len = this.itemsData.length;
          for (i = 0; i < len; i += 1) {
            this.prevViewData[i] = this.itemsData[i];
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
          this.filterUniqueShapes();
          len = this.dynamicProperties.length;
          for (i = 0; i < len; i += 1) {
            this.dynamicProperties[i].getValue();
          }
          this.renderModifiers();
        };
        SVGShapeElement.prototype.searchShapes = function(arr, itemsData, prevViewData, container, level, transformers, render3) {
          var ownTransformers = [].concat(transformers);
          var i;
          var len = arr.length - 1;
          var j;
          var jLen;
          var ownStyles = [];
          var ownModifiers = [];
          var currentTransform;
          var modifier;
          var processedPos;
          for (i = len; i >= 0; i -= 1) {
            processedPos = this.searchProcessedElement(arr[i]);
            if (!processedPos) {
              arr[i]._render = render3;
            } else {
              itemsData[i] = prevViewData[processedPos - 1];
            }
            if (arr[i].ty === "fl" || arr[i].ty === "st" || arr[i].ty === "gf" || arr[i].ty === "gs" || arr[i].ty === "no") {
              if (!processedPos) {
                itemsData[i] = this.createStyleElement(arr[i], level);
              } else {
                itemsData[i].style.closed = false;
              }
              if (arr[i]._render) {
                if (itemsData[i].style.pElem.parentNode !== container) {
                  container.appendChild(itemsData[i].style.pElem);
                }
              }
              ownStyles.push(itemsData[i].style);
            } else if (arr[i].ty === "gr") {
              if (!processedPos) {
                itemsData[i] = this.createGroupElement(arr[i]);
              } else {
                jLen = itemsData[i].it.length;
                for (j = 0; j < jLen; j += 1) {
                  itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
              }
              this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render3);
              if (arr[i]._render) {
                if (itemsData[i].gr.parentNode !== container) {
                  container.appendChild(itemsData[i].gr);
                }
              }
            } else if (arr[i].ty === "tr") {
              if (!processedPos) {
                itemsData[i] = this.createTransformElement(arr[i], container);
              }
              currentTransform = itemsData[i].transform;
              ownTransformers.push(currentTransform);
            } else if (arr[i].ty === "sh" || arr[i].ty === "rc" || arr[i].ty === "el" || arr[i].ty === "sr") {
              if (!processedPos) {
                itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
              }
              this.setElementStyles(itemsData[i]);
            } else if (arr[i].ty === "tm" || arr[i].ty === "rd" || arr[i].ty === "ms" || arr[i].ty === "pb" || arr[i].ty === "zz" || arr[i].ty === "op") {
              if (!processedPos) {
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this, arr[i]);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
              } else {
                modifier = itemsData[i];
                modifier.closed = false;
              }
              ownModifiers.push(modifier);
            } else if (arr[i].ty === "rp") {
              if (!processedPos) {
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this, arr, i, itemsData);
                this.shapeModifiers.push(modifier);
                render3 = false;
              } else {
                modifier = itemsData[i];
                modifier.closed = true;
              }
              ownModifiers.push(modifier);
            }
            this.addProcessedElement(arr[i], i + 1);
          }
          len = ownStyles.length;
          for (i = 0; i < len; i += 1) {
            ownStyles[i].closed = true;
          }
          len = ownModifiers.length;
          for (i = 0; i < len; i += 1) {
            ownModifiers[i].closed = true;
          }
        };
        SVGShapeElement.prototype.renderInnerContent = function() {
          this.renderModifiers();
          var i;
          var len = this.stylesList.length;
          for (i = 0; i < len; i += 1) {
            this.stylesList[i].reset();
          }
          this.renderShape();
          for (i = 0; i < len; i += 1) {
            if (this.stylesList[i]._mdf || this._isFirstFrame) {
              if (this.stylesList[i].msElem) {
                this.stylesList[i].msElem.setAttribute("d", this.stylesList[i].d);
                this.stylesList[i].d = "M0 0" + this.stylesList[i].d;
              }
              this.stylesList[i].pElem.setAttribute("d", this.stylesList[i].d || "M0 0");
            }
          }
        };
        SVGShapeElement.prototype.renderShape = function() {
          var i;
          var len = this.animatedContents.length;
          var animatedContent;
          for (i = 0; i < len; i += 1) {
            animatedContent = this.animatedContents[i];
            if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
              animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
            }
          }
        };
        SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement();
          this.shapesData = null;
          this.itemsData = null;
        };
        function LetterProps(o, sw, sc, fc, m, p) {
          this.o = o;
          this.sw = sw;
          this.sc = sc;
          this.fc = fc;
          this.m = m;
          this.p = p;
          this._mdf = {
            o: true,
            sw: !!sw,
            sc: !!sc,
            fc: !!fc,
            m: true,
            p: true
          };
        }
        LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
          this._mdf.o = false;
          this._mdf.sw = false;
          this._mdf.sc = false;
          this._mdf.fc = false;
          this._mdf.m = false;
          this._mdf.p = false;
          var updated = false;
          if (this.o !== o) {
            this.o = o;
            this._mdf.o = true;
            updated = true;
          }
          if (this.sw !== sw) {
            this.sw = sw;
            this._mdf.sw = true;
            updated = true;
          }
          if (this.sc !== sc) {
            this.sc = sc;
            this._mdf.sc = true;
            updated = true;
          }
          if (this.fc !== fc) {
            this.fc = fc;
            this._mdf.fc = true;
            updated = true;
          }
          if (this.m !== m) {
            this.m = m;
            this._mdf.m = true;
            updated = true;
          }
          if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
            this.p = p;
            this._mdf.p = true;
            updated = true;
          }
          return updated;
        };
        function TextProperty(elem2, data2) {
          this._frameId = initialDefaultFrame;
          this.pv = "";
          this.v = "";
          this.kf = false;
          this._isFirstFrame = true;
          this._mdf = false;
          if (data2.d && data2.d.sid) {
            data2.d = elem2.globalData.slotManager.getProp(data2.d);
          }
          this.data = data2;
          this.elem = elem2;
          this.comp = this.elem.comp;
          this.keysIndex = 0;
          this.canResize = false;
          this.minimumFontSize = 1;
          this.effectsSequence = [];
          this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: false,
            strokeColorAnim: false,
            strokeWidthAnim: false,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: false
          };
          this.copyData(this.currentData, this.data.d.k[0].s);
          if (!this.searchProperty()) {
            this.completeTextData(this.currentData);
          }
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0];
        TextProperty.prototype.copyData = function(obj, data2) {
          for (var s in data2) {
            if (Object.prototype.hasOwnProperty.call(data2, s)) {
              obj[s] = data2[s];
            }
          }
          return obj;
        };
        TextProperty.prototype.setCurrentData = function(data2) {
          if (!data2.__complete) {
            this.completeTextData(data2);
          }
          this.currentData = data2;
          this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
          this._mdf = true;
        };
        TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes();
        };
        TextProperty.prototype.searchKeyframes = function() {
          this.kf = this.data.d.k.length > 1;
          if (this.kf) {
            this.addEffect(this.getKeyframeValue.bind(this));
          }
          return this.kf;
        };
        TextProperty.prototype.addEffect = function(effectFunction) {
          this.effectsSequence.push(effectFunction);
          this.elem.addDynamicProperty(this);
        };
        TextProperty.prototype.getValue = function(_finalValue) {
          if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
            return;
          }
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var currentValue = this.currentData;
          var currentIndex = this.keysIndex;
          if (this.lock) {
            this.setCurrentData(this.currentData);
            return;
          }
          this.lock = true;
          this._mdf = false;
          var i;
          var len = this.effectsSequence.length;
          var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
          for (i = 0; i < len; i += 1) {
            if (currentIndex !== this.keysIndex) {
              finalValue = this.effectsSequence[i](finalValue, finalValue.t);
            } else {
              finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
            }
          }
          if (currentValue !== finalValue) {
            this.setCurrentData(finalValue);
          }
          this.v = this.currentData;
          this.pv = this.v;
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        };
        TextProperty.prototype.getKeyframeValue = function() {
          var textKeys = this.data.d.k;
          var frameNum = this.elem.comp.renderedFrame;
          var i = 0;
          var len = textKeys.length;
          while (i <= len - 1) {
            if (i === len - 1 || textKeys[i + 1].t > frameNum) {
              break;
            }
            i += 1;
          }
          if (this.keysIndex !== i) {
            this.keysIndex = i;
          }
          return this.data.d.k[this.keysIndex].s;
        };
        TextProperty.prototype.buildFinalText = function(text2) {
          var charactersArray = [];
          var i = 0;
          var len = text2.length;
          var charCode;
          var secondCharCode;
          var shouldCombine = false;
          var shouldCombineNext = false;
          var currentChars = "";
          while (i < len) {
            shouldCombine = shouldCombineNext;
            shouldCombineNext = false;
            charCode = text2.charCodeAt(i);
            currentChars = text2.charAt(i);
            if (FontManager.isCombinedCharacter(charCode)) {
              shouldCombine = true;
            } else if (charCode >= 55296 && charCode <= 56319) {
              if (FontManager.isRegionalFlag(text2, i)) {
                currentChars = text2.substr(i, 14);
              } else {
                secondCharCode = text2.charCodeAt(i + 1);
                if (secondCharCode >= 56320 && secondCharCode <= 57343) {
                  if (FontManager.isModifier(charCode, secondCharCode)) {
                    currentChars = text2.substr(i, 2);
                    shouldCombine = true;
                  } else if (FontManager.isFlagEmoji(text2.substr(i, 4))) {
                    currentChars = text2.substr(i, 4);
                  } else {
                    currentChars = text2.substr(i, 2);
                  }
                }
              }
            } else if (charCode > 56319) {
              secondCharCode = text2.charCodeAt(i + 1);
              if (FontManager.isVariationSelector(charCode)) {
                shouldCombine = true;
              }
            } else if (FontManager.isZeroWidthJoiner(charCode)) {
              shouldCombine = true;
              shouldCombineNext = true;
            }
            if (shouldCombine) {
              charactersArray[charactersArray.length - 1] += currentChars;
              shouldCombine = false;
            } else {
              charactersArray.push(currentChars);
            }
            i += currentChars.length;
          }
          return charactersArray;
        };
        TextProperty.prototype.completeTextData = function(documentData) {
          documentData.__complete = true;
          var fontManager = this.elem.globalData.fontManager;
          var data2 = this.data;
          var letters = [];
          var i;
          var len;
          var newLineFlag;
          var index2 = 0;
          var val2;
          var anchorGrouping = data2.m.g;
          var currentSize = 0;
          var currentPos = 0;
          var currentLine = 0;
          var lineWidths = [];
          var lineWidth = 0;
          var maxLineWidth = 0;
          var j;
          var jLen;
          var fontData = fontManager.getFontByName(documentData.f);
          var charData;
          var cLength = 0;
          var fontProps = getFontProperties(fontData);
          documentData.fWeight = fontProps.weight;
          documentData.fStyle = fontProps.style;
          documentData.finalSize = documentData.s;
          documentData.finalText = this.buildFinalText(documentData.t);
          len = documentData.finalText.length;
          documentData.finalLineHeight = documentData.lh;
          var trackingOffset = documentData.tr / 1e3 * documentData.finalSize;
          var charCode;
          if (documentData.sz) {
            var flag = true;
            var boxWidth = documentData.sz[0];
            var boxHeight = documentData.sz[1];
            var currentHeight;
            var finalText;
            while (flag) {
              finalText = this.buildFinalText(documentData.t);
              currentHeight = 0;
              lineWidth = 0;
              len = finalText.length;
              trackingOffset = documentData.tr / 1e3 * documentData.finalSize;
              var lastSpaceIndex = -1;
              for (i = 0; i < len; i += 1) {
                charCode = finalText[i].charCodeAt(0);
                newLineFlag = false;
                if (finalText[i] === " ") {
                  lastSpaceIndex = i;
                } else if (charCode === 13 || charCode === 3) {
                  lineWidth = 0;
                  newLineFlag = true;
                  currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
                }
                if (fontManager.chars) {
                  charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
                  cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
                } else {
                  cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
                }
                if (lineWidth + cLength > boxWidth && finalText[i] !== " ") {
                  if (lastSpaceIndex === -1) {
                    len += 1;
                  } else {
                    i = lastSpaceIndex;
                  }
                  currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
                  finalText.splice(i, lastSpaceIndex === i ? 1 : 0, "\r");
                  lastSpaceIndex = -1;
                  lineWidth = 0;
                } else {
                  lineWidth += cLength;
                  lineWidth += trackingOffset;
                }
              }
              currentHeight += fontData.ascent * documentData.finalSize / 100;
              if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
                documentData.finalSize -= 1;
                documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
              } else {
                documentData.finalText = finalText;
                len = documentData.finalText.length;
                flag = false;
              }
            }
          }
          lineWidth = -trackingOffset;
          cLength = 0;
          var uncollapsedSpaces = 0;
          var currentChar;
          for (i = 0; i < len; i += 1) {
            newLineFlag = false;
            currentChar = documentData.finalText[i];
            charCode = currentChar.charCodeAt(0);
            if (charCode === 13 || charCode === 3) {
              uncollapsedSpaces = 0;
              lineWidths.push(lineWidth);
              maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
              lineWidth = -2 * trackingOffset;
              val2 = "";
              newLineFlag = true;
              currentLine += 1;
            } else {
              val2 = currentChar;
            }
            if (fontManager.chars) {
              charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
              cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
            } else {
              cLength = fontManager.measureText(val2, documentData.f, documentData.finalSize);
            }
            if (currentChar === " ") {
              uncollapsedSpaces += cLength + trackingOffset;
            } else {
              lineWidth += cLength + trackingOffset + uncollapsedSpaces;
              uncollapsedSpaces = 0;
            }
            letters.push({
              l: cLength,
              an: cLength,
              add: currentSize,
              n: newLineFlag,
              anIndexes: [],
              val: val2,
              line: currentLine,
              animatorJustifyOffset: 0
            });
            if (anchorGrouping == 2) {
              currentSize += cLength;
              if (val2 === "" || val2 === " " || i === len - 1) {
                if (val2 === "" || val2 === " ") {
                  currentSize -= cLength;
                }
                while (currentPos <= i) {
                  letters[currentPos].an = currentSize;
                  letters[currentPos].ind = index2;
                  letters[currentPos].extra = cLength;
                  currentPos += 1;
                }
                index2 += 1;
                currentSize = 0;
              }
            } else if (anchorGrouping == 3) {
              currentSize += cLength;
              if (val2 === "" || i === len - 1) {
                if (val2 === "") {
                  currentSize -= cLength;
                }
                while (currentPos <= i) {
                  letters[currentPos].an = currentSize;
                  letters[currentPos].ind = index2;
                  letters[currentPos].extra = cLength;
                  currentPos += 1;
                }
                currentSize = 0;
                index2 += 1;
              }
            } else {
              letters[index2].ind = index2;
              letters[index2].extra = 0;
              index2 += 1;
            }
          }
          documentData.l = letters;
          maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
          lineWidths.push(lineWidth);
          if (documentData.sz) {
            documentData.boxWidth = documentData.sz[0];
            documentData.justifyOffset = 0;
          } else {
            documentData.boxWidth = maxLineWidth;
            switch (documentData.j) {
              case 1:
                documentData.justifyOffset = -documentData.boxWidth;
                break;
              case 2:
                documentData.justifyOffset = -documentData.boxWidth / 2;
                break;
              default:
                documentData.justifyOffset = 0;
            }
          }
          documentData.lineWidths = lineWidths;
          var animators = data2.a;
          var animatorData;
          var letterData;
          jLen = animators.length;
          var based;
          var ind;
          var indexes = [];
          for (j = 0; j < jLen; j += 1) {
            animatorData = animators[j];
            if (animatorData.a.sc) {
              documentData.strokeColorAnim = true;
            }
            if (animatorData.a.sw) {
              documentData.strokeWidthAnim = true;
            }
            if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
              documentData.fillColorAnim = true;
            }
            ind = 0;
            based = animatorData.s.b;
            for (i = 0; i < len; i += 1) {
              letterData = letters[i];
              letterData.anIndexes[j] = ind;
              if (based == 1 && letterData.val !== "" || based == 2 && letterData.val !== "" && letterData.val !== " " || based == 3 && (letterData.n || letterData.val == " " || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
                if (animatorData.s.rn === 1) {
                  indexes.push(ind);
                }
                ind += 1;
              }
            }
            data2.a[j].s.totalChars = ind;
            var currentInd = -1;
            var newInd;
            if (animatorData.s.rn === 1) {
              for (i = 0; i < len; i += 1) {
                letterData = letters[i];
                if (currentInd != letterData.anIndexes[j]) {
                  currentInd = letterData.anIndexes[j];
                  newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
                }
                letterData.anIndexes[j] = newInd;
              }
            }
          }
          documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
          documentData.ls = documentData.ls || 0;
          documentData.ascent = fontData.ascent * documentData.finalSize / 100;
        };
        TextProperty.prototype.updateDocumentData = function(newData, index2) {
          index2 = index2 === void 0 ? this.keysIndex : index2;
          var dData = this.copyData({}, this.data.d.k[index2].s);
          dData = this.copyData(dData, newData);
          this.data.d.k[index2].s = dData;
          this.recalculate(index2);
          this.setCurrentData(dData);
          this.elem.addDynamicProperty(this);
        };
        TextProperty.prototype.recalculate = function(index2) {
          var dData = this.data.d.k[index2].s;
          dData.__complete = false;
          this.keysIndex = 0;
          this._isFirstFrame = true;
          this.getValue(dData);
        };
        TextProperty.prototype.canResizeFont = function(_canResize) {
          this.canResize = _canResize;
          this.recalculate(this.keysIndex);
          this.elem.addDynamicProperty(this);
        };
        TextProperty.prototype.setMinimumFontSize = function(_fontValue) {
          this.minimumFontSize = Math.floor(_fontValue) || 1;
          this.recalculate(this.keysIndex);
          this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
          var max = Math.max;
          var min = Math.min;
          var floor = Math.floor;
          function TextSelectorPropFactory(elem2, data2) {
            this._currentTextLength = -1;
            this.k = false;
            this.data = data2;
            this.elem = elem2;
            this.comp = elem2.comp;
            this.finalS = 0;
            this.finalE = 0;
            this.initDynamicPropertyContainer(elem2);
            this.s = PropertyFactory.getProp(elem2, data2.s || {
              k: 0
            }, 0, 0, this);
            if ("e" in data2) {
              this.e = PropertyFactory.getProp(elem2, data2.e, 0, 0, this);
            } else {
              this.e = {
                v: 100
              };
            }
            this.o = PropertyFactory.getProp(elem2, data2.o || {
              k: 0
            }, 0, 0, this);
            this.xe = PropertyFactory.getProp(elem2, data2.xe || {
              k: 0
            }, 0, 0, this);
            this.ne = PropertyFactory.getProp(elem2, data2.ne || {
              k: 0
            }, 0, 0, this);
            this.sm = PropertyFactory.getProp(elem2, data2.sm || {
              k: 100
            }, 0, 0, this);
            this.a = PropertyFactory.getProp(elem2, data2.a, 0, 0.01, this);
            if (!this.dynamicProperties.length) {
              this.getValue();
            }
          }
          TextSelectorPropFactory.prototype = {
            getMult: function getMult(ind) {
              if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
                this.getValue();
              }
              var x1 = 0;
              var y1 = 0;
              var x2 = 1;
              var y2 = 1;
              if (this.ne.v > 0) {
                x1 = this.ne.v / 100;
              } else {
                y1 = -this.ne.v / 100;
              }
              if (this.xe.v > 0) {
                x2 = 1 - this.xe.v / 100;
              } else {
                y2 = 1 + this.xe.v / 100;
              }
              var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
              var mult = 0;
              var s = this.finalS;
              var e = this.finalE;
              var type = this.data.sh;
              if (type === 2) {
                if (e === s) {
                  mult = ind >= e ? 1 : 0;
                } else {
                  mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                }
                mult = easer(mult);
              } else if (type === 3) {
                if (e === s) {
                  mult = ind >= e ? 0 : 1;
                } else {
                  mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                }
                mult = easer(mult);
              } else if (type === 4) {
                if (e === s) {
                  mult = 0;
                } else {
                  mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                  if (mult < 0.5) {
                    mult *= 2;
                  } else {
                    mult = 1 - 2 * (mult - 0.5);
                  }
                }
                mult = easer(mult);
              } else if (type === 5) {
                if (e === s) {
                  mult = 0;
                } else {
                  var tot = e - s;
                  ind = min(max(0, ind + 0.5 - s), e - s);
                  var x = -tot / 2 + ind;
                  var a = tot / 2;
                  mult = Math.sqrt(1 - x * x / (a * a));
                }
                mult = easer(mult);
              } else if (type === 6) {
                if (e === s) {
                  mult = 0;
                } else {
                  ind = min(max(0, ind + 0.5 - s), e - s);
                  mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2;
                }
                mult = easer(mult);
              } else {
                if (ind >= floor(s)) {
                  if (ind - s < 0) {
                    mult = max(0, min(min(e, 1) - (s - ind), 1));
                  } else {
                    mult = max(0, min(e - ind, 1));
                  }
                }
                mult = easer(mult);
              }
              if (this.sm.v !== 100) {
                var smoothness = this.sm.v * 0.01;
                if (smoothness === 0) {
                  smoothness = 1e-8;
                }
                var threshold = 0.5 - smoothness * 0.5;
                if (mult < threshold) {
                  mult = 0;
                } else {
                  mult = (mult - threshold) / smoothness;
                  if (mult > 1) {
                    mult = 1;
                  }
                }
              }
              return mult * this.a.v;
            },
            getValue: function getValue(newCharsFlag) {
              this.iterateDynamicProperties();
              this._mdf = newCharsFlag || this._mdf;
              this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
              if (newCharsFlag && this.data.r === 2) {
                this.e.v = this._currentTextLength;
              }
              var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
              var o = this.o.v / divisor;
              var s = this.s.v / divisor + o;
              var e = this.e.v / divisor + o;
              if (s > e) {
                var _s = s;
                s = e;
                e = _s;
              }
              this.finalS = s;
              this.finalE = e;
            }
          };
          extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);
          function getTextSelectorProp(elem2, data2, arr) {
            return new TextSelectorPropFactory(elem2, data2, arr);
          }
          return {
            getTextSelectorProp
          };
        }();
        function TextAnimatorDataProperty(elem2, animatorProps, container) {
          var defaultData = {
            propType: false
          };
          var getProp = PropertyFactory.getProp;
          var textAnimatorAnimatables = animatorProps.a;
          this.a = {
            r: textAnimatorAnimatables.r ? getProp(elem2, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
            rx: textAnimatorAnimatables.rx ? getProp(elem2, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
            ry: textAnimatorAnimatables.ry ? getProp(elem2, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
            sk: textAnimatorAnimatables.sk ? getProp(elem2, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
            sa: textAnimatorAnimatables.sa ? getProp(elem2, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
            s: textAnimatorAnimatables.s ? getProp(elem2, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
            a: textAnimatorAnimatables.a ? getProp(elem2, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
            o: textAnimatorAnimatables.o ? getProp(elem2, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
            p: textAnimatorAnimatables.p ? getProp(elem2, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
            sw: textAnimatorAnimatables.sw ? getProp(elem2, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
            sc: textAnimatorAnimatables.sc ? getProp(elem2, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
            fc: textAnimatorAnimatables.fc ? getProp(elem2, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
            fh: textAnimatorAnimatables.fh ? getProp(elem2, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
            fs: textAnimatorAnimatables.fs ? getProp(elem2, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
            fb: textAnimatorAnimatables.fb ? getProp(elem2, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
            t: textAnimatorAnimatables.t ? getProp(elem2, textAnimatorAnimatables.t, 0, 0, container) : defaultData
          };
          this.s = TextSelectorProp.getTextSelectorProp(elem2, animatorProps.s, container);
          this.s.t = animatorProps.s.t;
        }
        function TextAnimatorProperty(textData, renderType, elem2) {
          this._isFirstFrame = true;
          this._hasMaskedPath = false;
          this._frameId = -1;
          this._textData = textData;
          this._renderType = renderType;
          this._elem = elem2;
          this._animatorsData = createSizedArray(this._textData.a.length);
          this._pathData = {};
          this._moreOptions = {
            alignment: {}
          };
          this.renderedLetters = [];
          this.lettersChangedFlag = false;
          this.initDynamicPropertyContainer(elem2);
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
          var i;
          var len = this._textData.a.length;
          var animatorProps;
          var getProp = PropertyFactory.getProp;
          for (i = 0; i < len; i += 1) {
            animatorProps = this._textData.a[i];
            this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
          }
          if (this._textData.p && "m" in this._textData.p) {
            this._pathData = {
              a: getProp(this._elem, this._textData.p.a, 0, 0, this),
              f: getProp(this._elem, this._textData.p.f, 0, 0, this),
              l: getProp(this._elem, this._textData.p.l, 0, 0, this),
              r: getProp(this._elem, this._textData.p.r, 0, 0, this),
              p: getProp(this._elem, this._textData.p.p, 0, 0, this),
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            };
            this._hasMaskedPath = true;
          } else {
            this._hasMaskedPath = false;
          }
          this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
        };
        TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag) {
          this.lettersChangedFlag = lettersChangedFlag;
          if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
            return;
          }
          this._isFirstFrame = false;
          var alignment = this._moreOptions.alignment.v;
          var animators = this._animatorsData;
          var textData = this._textData;
          var matrixHelper = this.mHelper;
          var renderType = this._renderType;
          var renderedLettersCount = this.renderedLetters.length;
          var xPos;
          var yPos;
          var i;
          var len;
          var letters = documentData.l;
          var pathInfo;
          var currentLength;
          var currentPoint;
          var segmentLength;
          var flag;
          var pointInd;
          var segmentInd;
          var prevPoint;
          var points;
          var segments;
          var partialLength;
          var totalLength;
          var perc;
          var tanAngle;
          var mask2;
          if (this._hasMaskedPath) {
            mask2 = this._pathData.m;
            if (!this._pathData.n || this._pathData._mdf) {
              var paths = mask2.v;
              if (this._pathData.r.v) {
                paths = paths.reverse();
              }
              pathInfo = {
                tLength: 0,
                segments: []
              };
              len = paths._length - 1;
              var bezierData;
              totalLength = 0;
              for (i = 0; i < len; i += 1) {
                bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
                pathInfo.tLength += bezierData.segmentLength;
                pathInfo.segments.push(bezierData);
                totalLength += bezierData.segmentLength;
              }
              i = len;
              if (mask2.v.c) {
                bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
                pathInfo.tLength += bezierData.segmentLength;
                pathInfo.segments.push(bezierData);
                totalLength += bezierData.segmentLength;
              }
              this._pathData.pi = pathInfo;
            }
            pathInfo = this._pathData.pi;
            currentLength = this._pathData.f.v;
            segmentInd = 0;
            pointInd = 1;
            segmentLength = 0;
            flag = true;
            segments = pathInfo.segments;
            if (currentLength < 0 && mask2.v.c) {
              if (pathInfo.tLength < Math.abs(currentLength)) {
                currentLength = -Math.abs(currentLength) % pathInfo.tLength;
              }
              segmentInd = segments.length - 1;
              points = segments[segmentInd].points;
              pointInd = points.length - 1;
              while (currentLength < 0) {
                currentLength += points[pointInd].partialLength;
                pointInd -= 1;
                if (pointInd < 0) {
                  segmentInd -= 1;
                  points = segments[segmentInd].points;
                  pointInd = points.length - 1;
                }
              }
            }
            points = segments[segmentInd].points;
            prevPoint = points[pointInd - 1];
            currentPoint = points[pointInd];
            partialLength = currentPoint.partialLength;
          }
          len = letters.length;
          xPos = 0;
          yPos = 0;
          var yOff = documentData.finalSize * 1.2 * 0.714;
          var firstLine = true;
          var animatorProps;
          var animatorSelector;
          var j;
          var jLen;
          var letterValue;
          jLen = animators.length;
          var mult;
          var ind = -1;
          var offf;
          var xPathPos;
          var yPathPos;
          var initPathPos = currentLength;
          var initSegmentInd = segmentInd;
          var initPointInd = pointInd;
          var currentLine = -1;
          var elemOpacity;
          var sc;
          var sw;
          var fc;
          var k;
          var letterSw;
          var letterSc;
          var letterFc;
          var letterM = "";
          var letterP = this.defaultPropsArray;
          var letterO;
          if (documentData.j === 2 || documentData.j === 1) {
            var animatorJustifyOffset = 0;
            var animatorFirstCharOffset = 0;
            var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
            var lastIndex = 0;
            var isNewLine = true;
            for (i = 0; i < len; i += 1) {
              if (letters[i].n) {
                if (animatorJustifyOffset) {
                  animatorJustifyOffset += animatorFirstCharOffset;
                }
                while (lastIndex < i) {
                  letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
                  lastIndex += 1;
                }
                animatorJustifyOffset = 0;
                isNewLine = true;
              } else {
                for (j = 0; j < jLen; j += 1) {
                  animatorProps = animators[j].a;
                  if (animatorProps.t.propType) {
                    if (isNewLine && documentData.j === 2) {
                      animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
                    }
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                    if (mult.length) {
                      animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
                    } else {
                      animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
                    }
                  }
                }
                isNewLine = false;
              }
            }
            if (animatorJustifyOffset) {
              animatorJustifyOffset += animatorFirstCharOffset;
            }
            while (lastIndex < i) {
              letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
              lastIndex += 1;
            }
          }
          for (i = 0; i < len; i += 1) {
            matrixHelper.reset();
            elemOpacity = 1;
            if (letters[i].n) {
              xPos = 0;
              yPos += documentData.yOffset;
              yPos += firstLine ? 1 : 0;
              currentLength = initPathPos;
              firstLine = false;
              if (this._hasMaskedPath) {
                segmentInd = initSegmentInd;
                pointInd = initPointInd;
                points = segments[segmentInd].points;
                prevPoint = points[pointInd - 1];
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
                segmentLength = 0;
              }
              letterM = "";
              letterFc = "";
              letterSw = "";
              letterO = "";
              letterP = this.defaultPropsArray;
            } else {
              if (this._hasMaskedPath) {
                if (currentLine !== letters[i].line) {
                  switch (documentData.j) {
                    case 1:
                      currentLength += totalLength - documentData.lineWidths[letters[i].line];
                      break;
                    case 2:
                      currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
                      break;
                    default:
                      break;
                  }
                  currentLine = letters[i].line;
                }
                if (ind !== letters[i].ind) {
                  if (letters[ind]) {
                    currentLength += letters[ind].extra;
                  }
                  currentLength += letters[i].an / 2;
                  ind = letters[i].ind;
                }
                currentLength += alignment[0] * letters[i].an * 5e-3;
                var animatorOffset = 0;
                for (j = 0; j < jLen; j += 1) {
                  animatorProps = animators[j].a;
                  if (animatorProps.p.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                    if (mult.length) {
                      animatorOffset += animatorProps.p.v[0] * mult[0];
                    } else {
                      animatorOffset += animatorProps.p.v[0] * mult;
                    }
                  }
                  if (animatorProps.a.propType) {
                    animatorSelector = animators[j].s;
                    mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                    if (mult.length) {
                      animatorOffset += animatorProps.a.v[0] * mult[0];
                    } else {
                      animatorOffset += animatorProps.a.v[0] * mult;
                    }
                  }
                }
                flag = true;
                if (this._pathData.a.v) {
                  currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
                  currentLength += this._pathData.f.v;
                }
                while (flag) {
                  if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                    perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                    xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                    yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                    matrixHelper.translate(-alignment[0] * letters[i].an * 5e-3, -(alignment[1] * yOff) * 0.01);
                    flag = false;
                  } else if (points) {
                    segmentLength += currentPoint.partialLength;
                    pointInd += 1;
                    if (pointInd >= points.length) {
                      pointInd = 0;
                      segmentInd += 1;
                      if (!segments[segmentInd]) {
                        if (mask2.v.c) {
                          pointInd = 0;
                          segmentInd = 0;
                          points = segments[segmentInd].points;
                        } else {
                          segmentLength -= currentPoint.partialLength;
                          points = null;
                        }
                      } else {
                        points = segments[segmentInd].points;
                      }
                    }
                    if (points) {
                      prevPoint = currentPoint;
                      currentPoint = points[pointInd];
                      partialLength = currentPoint.partialLength;
                    }
                  }
                }
                offf = letters[i].an / 2 - letters[i].add;
                matrixHelper.translate(-offf, 0, 0);
              } else {
                offf = letters[i].an / 2 - letters[i].add;
                matrixHelper.translate(-offf, 0, 0);
                matrixHelper.translate(-alignment[0] * letters[i].an * 5e-3, -alignment[1] * yOff * 0.01, 0);
              }
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.t.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (xPos !== 0 || documentData.j !== 0) {
                    if (this._hasMaskedPath) {
                      if (mult.length) {
                        currentLength += animatorProps.t.v * mult[0];
                      } else {
                        currentLength += animatorProps.t.v * mult;
                      }
                    } else if (mult.length) {
                      xPos += animatorProps.t.v * mult[0];
                    } else {
                      xPos += animatorProps.t.v * mult;
                    }
                  }
                }
              }
              if (documentData.strokeWidthAnim) {
                sw = documentData.sw || 0;
              }
              if (documentData.strokeColorAnim) {
                if (documentData.sc) {
                  sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
                } else {
                  sc = [0, 0, 0];
                }
              }
              if (documentData.fillColorAnim && documentData.fc) {
                fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
              }
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.a.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (mult.length) {
                    matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
                  } else {
                    matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
                  }
                }
              }
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.s.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (mult.length) {
                    matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
                  } else {
                    matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
                  }
                }
              }
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                if (animatorProps.sk.propType) {
                  if (mult.length) {
                    matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
                  } else {
                    matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
                  }
                }
                if (animatorProps.r.propType) {
                  if (mult.length) {
                    matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
                  } else {
                    matrixHelper.rotateZ(-animatorProps.r.v * mult);
                  }
                }
                if (animatorProps.ry.propType) {
                  if (mult.length) {
                    matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
                  } else {
                    matrixHelper.rotateY(animatorProps.ry.v * mult);
                  }
                }
                if (animatorProps.rx.propType) {
                  if (mult.length) {
                    matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
                  } else {
                    matrixHelper.rotateX(animatorProps.rx.v * mult);
                  }
                }
                if (animatorProps.o.propType) {
                  if (mult.length) {
                    elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
                  } else {
                    elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
                  }
                }
                if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
                  if (mult.length) {
                    sw += animatorProps.sw.v * mult[0];
                  } else {
                    sw += animatorProps.sw.v * mult;
                  }
                }
                if (documentData.strokeColorAnim && animatorProps.sc.propType) {
                  for (k = 0; k < 3; k += 1) {
                    if (mult.length) {
                      sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
                    } else {
                      sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
                    }
                  }
                }
                if (documentData.fillColorAnim && documentData.fc) {
                  if (animatorProps.fc.propType) {
                    for (k = 0; k < 3; k += 1) {
                      if (mult.length) {
                        fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
                      } else {
                        fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
                      }
                    }
                  }
                  if (animatorProps.fh.propType) {
                    if (mult.length) {
                      fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
                    } else {
                      fc = addHueToRGB(fc, animatorProps.fh.v * mult);
                    }
                  }
                  if (animatorProps.fs.propType) {
                    if (mult.length) {
                      fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
                    } else {
                      fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
                    }
                  }
                  if (animatorProps.fb.propType) {
                    if (mult.length) {
                      fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
                    } else {
                      fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
                    }
                  }
                }
              }
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.p.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (this._hasMaskedPath) {
                    if (mult.length) {
                      matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
                    } else {
                      matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                    }
                  } else if (mult.length) {
                    matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
                  } else {
                    matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                  }
                }
              }
              if (documentData.strokeWidthAnim) {
                letterSw = sw < 0 ? 0 : sw;
              }
              if (documentData.strokeColorAnim) {
                letterSc = "rgb(" + Math.round(sc[0] * 255) + "," + Math.round(sc[1] * 255) + "," + Math.round(sc[2] * 255) + ")";
              }
              if (documentData.fillColorAnim && documentData.fc) {
                letterFc = "rgb(" + Math.round(fc[0] * 255) + "," + Math.round(fc[1] * 255) + "," + Math.round(fc[2] * 255) + ")";
              }
              if (this._hasMaskedPath) {
                matrixHelper.translate(0, -documentData.ls);
                matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);
                if (this._pathData.p.v) {
                  tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                  var rot = Math.atan(tanAngle) * 180 / Math.PI;
                  if (currentPoint.point[0] < prevPoint.point[0]) {
                    rot += 180;
                  }
                  matrixHelper.rotate(-rot * Math.PI / 180);
                }
                matrixHelper.translate(xPathPos, yPathPos, 0);
                currentLength -= alignment[0] * letters[i].an * 5e-3;
                if (letters[i + 1] && ind !== letters[i + 1].ind) {
                  currentLength += letters[i].an / 2;
                  currentLength += documentData.tr * 1e-3 * documentData.finalSize;
                }
              } else {
                matrixHelper.translate(xPos, yPos, 0);
                if (documentData.ps) {
                  matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
                }
                switch (documentData.j) {
                  case 1:
                    matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
                    break;
                  case 2:
                    matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
                    break;
                  default:
                    break;
                }
                matrixHelper.translate(0, -documentData.ls);
                matrixHelper.translate(offf, 0, 0);
                matrixHelper.translate(alignment[0] * letters[i].an * 5e-3, alignment[1] * yOff * 0.01, 0);
                xPos += letters[i].l + documentData.tr * 1e-3 * documentData.finalSize;
              }
              if (renderType === "html") {
                letterM = matrixHelper.toCSS();
              } else if (renderType === "svg") {
                letterM = matrixHelper.to2dCSS();
              } else {
                letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
              }
              letterO = elemOpacity;
            }
            if (renderedLettersCount <= i) {
              letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
              this.renderedLetters.push(letterValue);
              renderedLettersCount += 1;
              this.lettersChangedFlag = true;
            } else {
              letterValue = this.renderedLetters[i];
              this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
            }
          }
        };
        TextAnimatorProperty.prototype.getValue = function() {
          if (this._elem.globalData.frameId === this._frameId) {
            return;
          }
          this._frameId = this._elem.globalData.frameId;
          this.iterateDynamicProperties();
        };
        TextAnimatorProperty.prototype.mHelper = new Matrix();
        TextAnimatorProperty.prototype.defaultPropsArray = [];
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
        function ITextElement() {
        }
        ITextElement.prototype.initElement = function(data2, globalData2, comp2) {
          this.lettersChangedFlag = true;
          this.initFrame();
          this.initBaseData(data2, globalData2, comp2);
          this.textProperty = new TextProperty(this, data2.t, this.dynamicProperties);
          this.textAnimator = new TextAnimatorProperty(data2.t, this.renderType, this);
          this.initTransform(data2, globalData2, comp2);
          this.initHierarchy();
          this.initRenderable();
          this.initRendererElement();
          this.createContainerElements();
          this.createRenderableComponents();
          this.createContent();
          this.hide();
          this.textAnimator.searchProperties(this.dynamicProperties);
        };
        ITextElement.prototype.prepareFrame = function(num) {
          this._mdf = false;
          this.prepareRenderableFrame(num);
          this.prepareProperties(num, this.isInRange);
        };
        ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
          var j;
          var jLen = shapes.length;
          var pathNodes;
          var shapeStr = "";
          for (j = 0; j < jLen; j += 1) {
            if (shapes[j].ty === "sh") {
              pathNodes = shapes[j].ks.k;
              shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
            }
          }
          return shapeStr;
        };
        ITextElement.prototype.updateDocumentData = function(newData, index2) {
          this.textProperty.updateDocumentData(newData, index2);
        };
        ITextElement.prototype.canResizeFont = function(_canResize) {
          this.textProperty.canResizeFont(_canResize);
        };
        ITextElement.prototype.setMinimumFontSize = function(_fontSize) {
          this.textProperty.setMinimumFontSize(_fontSize);
        };
        ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData, matrixHelper, lineNumber, xPos, yPos) {
          if (documentData.ps) {
            matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
          }
          matrixHelper.translate(0, -documentData.ls, 0);
          switch (documentData.j) {
            case 1:
              matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
              break;
            case 2:
              matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
              break;
            default:
              break;
          }
          matrixHelper.translate(xPos, yPos, 0);
        };
        ITextElement.prototype.buildColor = function(colorData) {
          return "rgb(" + Math.round(colorData[0] * 255) + "," + Math.round(colorData[1] * 255) + "," + Math.round(colorData[2] * 255) + ")";
        };
        ITextElement.prototype.emptyProp = new LetterProps();
        ITextElement.prototype.destroy = function() {
        };
        ITextElement.prototype.validateText = function() {
          if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
            this.buildNewText();
            this.textProperty._isFirstFrame = false;
            this.textProperty._mdf = false;
          }
        };
        var emptyShapeData = {
          shapes: []
        };
        function SVGTextLottieElement(data2, globalData2, comp2) {
          this.textSpans = [];
          this.renderType = "svg";
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);
        SVGTextLottieElement.prototype.createContent = function() {
          if (this.data.singleShape && !this.globalData.fontManager.chars) {
            this.textContainer = createNS("text");
          }
        };
        SVGTextLottieElement.prototype.buildTextContents = function(textArray) {
          var i = 0;
          var len = textArray.length;
          var textContents = [];
          var currentTextContent = "";
          while (i < len) {
            if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
              textContents.push(currentTextContent);
              currentTextContent = "";
            } else {
              currentTextContent += textArray[i];
            }
            i += 1;
          }
          textContents.push(currentTextContent);
          return textContents;
        };
        SVGTextLottieElement.prototype.buildShapeData = function(data2, scale2) {
          if (data2.shapes && data2.shapes.length) {
            var shape = data2.shapes[0];
            if (shape.it) {
              var shapeItem = shape.it[shape.it.length - 1];
              if (shapeItem.s) {
                shapeItem.s.k[0] = scale2;
                shapeItem.s.k[1] = scale2;
              }
            }
          }
          return data2;
        };
        SVGTextLottieElement.prototype.buildNewText = function() {
          this.addDynamicProperty(this);
          var i;
          var len;
          var documentData = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
          if (documentData.fc) {
            this.layerElement.setAttribute("fill", this.buildColor(documentData.fc));
          } else {
            this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
          }
          if (documentData.sc) {
            this.layerElement.setAttribute("stroke", this.buildColor(documentData.sc));
            this.layerElement.setAttribute("stroke-width", documentData.sw);
          }
          this.layerElement.setAttribute("font-size", documentData.finalSize);
          var fontData = this.globalData.fontManager.getFontByName(documentData.f);
          if (fontData.fClass) {
            this.layerElement.setAttribute("class", fontData.fClass);
          } else {
            this.layerElement.setAttribute("font-family", fontData.fFamily);
            var fWeight = documentData.fWeight;
            var fStyle = documentData.fStyle;
            this.layerElement.setAttribute("font-style", fStyle);
            this.layerElement.setAttribute("font-weight", fWeight);
          }
          this.layerElement.setAttribute("aria-label", documentData.t);
          var letters = documentData.l || [];
          var usesGlyphs = !!this.globalData.fontManager.chars;
          len = letters.length;
          var tSpan;
          var matrixHelper = this.mHelper;
          var shapeStr = "";
          var singleShape = this.data.singleShape;
          var xPos = 0;
          var yPos = 0;
          var firstLine = true;
          var trackingOffset = documentData.tr * 1e-3 * documentData.finalSize;
          if (singleShape && !usesGlyphs && !documentData.sz) {
            var tElement = this.textContainer;
            var justify = "start";
            switch (documentData.j) {
              case 1:
                justify = "end";
                break;
              case 2:
                justify = "middle";
                break;
              default:
                justify = "start";
                break;
            }
            tElement.setAttribute("text-anchor", justify);
            tElement.setAttribute("letter-spacing", trackingOffset);
            var textContent = this.buildTextContents(documentData.finalText);
            len = textContent.length;
            yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
            for (i = 0; i < len; i += 1) {
              tSpan = this.textSpans[i].span || createNS("tspan");
              tSpan.textContent = textContent[i];
              tSpan.setAttribute("x", 0);
              tSpan.setAttribute("y", yPos);
              tSpan.style.display = "inherit";
              tElement.appendChild(tSpan);
              if (!this.textSpans[i]) {
                this.textSpans[i] = {
                  span: null,
                  glyph: null
                };
              }
              this.textSpans[i].span = tSpan;
              yPos += documentData.finalLineHeight;
            }
            this.layerElement.appendChild(tElement);
          } else {
            var cachedSpansLength = this.textSpans.length;
            var charData;
            for (i = 0; i < len; i += 1) {
              if (!this.textSpans[i]) {
                this.textSpans[i] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                };
              }
              if (!usesGlyphs || !singleShape || i === 0) {
                tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? "g" : "text");
                if (cachedSpansLength <= i) {
                  tSpan.setAttribute("stroke-linecap", "butt");
                  tSpan.setAttribute("stroke-linejoin", "round");
                  tSpan.setAttribute("stroke-miterlimit", "4");
                  this.textSpans[i].span = tSpan;
                  if (usesGlyphs) {
                    var childSpan = createNS("g");
                    tSpan.appendChild(childSpan);
                    this.textSpans[i].childSpan = childSpan;
                  }
                  this.textSpans[i].span = tSpan;
                  this.layerElement.appendChild(tSpan);
                }
                tSpan.style.display = "inherit";
              }
              matrixHelper.reset();
              if (singleShape) {
                if (letters[i].n) {
                  xPos = -trackingOffset;
                  yPos += documentData.yOffset;
                  yPos += firstLine ? 1 : 0;
                  firstLine = false;
                }
                this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
                xPos += letters[i].l || 0;
                xPos += trackingOffset;
              }
              if (usesGlyphs) {
                charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
                var glyphElement;
                if (charData.t === 1) {
                  glyphElement = new SVGCompElement(charData.data, this.globalData, this);
                } else {
                  var data2 = emptyShapeData;
                  if (charData.data && charData.data.shapes) {
                    data2 = this.buildShapeData(charData.data, documentData.finalSize);
                  }
                  glyphElement = new SVGShapeElement(data2, this.globalData, this);
                }
                if (this.textSpans[i].glyph) {
                  var glyph = this.textSpans[i].glyph;
                  this.textSpans[i].childSpan.removeChild(glyph.layerElement);
                  glyph.destroy();
                }
                this.textSpans[i].glyph = glyphElement;
                glyphElement._debug = true;
                glyphElement.prepareFrame(0);
                glyphElement.renderFrame();
                this.textSpans[i].childSpan.appendChild(glyphElement.layerElement);
                if (charData.t === 1) {
                  this.textSpans[i].childSpan.setAttribute("transform", "scale(" + documentData.finalSize / 100 + "," + documentData.finalSize / 100 + ")");
                }
              } else {
                if (singleShape) {
                  tSpan.setAttribute("transform", "translate(" + matrixHelper.props[12] + "," + matrixHelper.props[13] + ")");
                }
                tSpan.textContent = letters[i].val;
                tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
              }
            }
            if (singleShape && tSpan) {
              tSpan.setAttribute("d", shapeStr);
            }
          }
          while (i < this.textSpans.length) {
            this.textSpans[i].span.style.display = "none";
            i += 1;
          }
          this._sizeChanged = true;
        };
        SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          this.prepareFrame(this.comp.renderedFrame - this.data.st);
          this.renderInnerContent();
          if (this._sizeChanged) {
            this._sizeChanged = false;
            var textBox = this.layerElement.getBBox();
            this.bbox = {
              top: textBox.y,
              left: textBox.x,
              width: textBox.width,
              height: textBox.height
            };
          }
          return this.bbox;
        };
        SVGTextLottieElement.prototype.getValue = function() {
          var i;
          var len = this.textSpans.length;
          var glyphElement;
          this.renderedFrame = this.comp.renderedFrame;
          for (i = 0; i < len; i += 1) {
            glyphElement = this.textSpans[i].glyph;
            if (glyphElement) {
              glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);
              if (glyphElement._mdf) {
                this._mdf = true;
              }
            }
          }
        };
        SVGTextLottieElement.prototype.renderInnerContent = function() {
          this.validateText();
          if (!this.data.singleShape || this._mdf) {
            this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
              this._sizeChanged = true;
              var i;
              var len;
              var renderedLetters = this.textAnimator.renderedLetters;
              var letters = this.textProperty.currentData.l;
              len = letters.length;
              var renderedLetter;
              var textSpan;
              var glyphElement;
              for (i = 0; i < len; i += 1) {
                if (!letters[i].n) {
                  renderedLetter = renderedLetters[i];
                  textSpan = this.textSpans[i].span;
                  glyphElement = this.textSpans[i].glyph;
                  if (glyphElement) {
                    glyphElement.renderFrame();
                  }
                  if (renderedLetter._mdf.m) {
                    textSpan.setAttribute("transform", renderedLetter.m);
                  }
                  if (renderedLetter._mdf.o) {
                    textSpan.setAttribute("opacity", renderedLetter.o);
                  }
                  if (renderedLetter._mdf.sw) {
                    textSpan.setAttribute("stroke-width", renderedLetter.sw);
                  }
                  if (renderedLetter._mdf.sc) {
                    textSpan.setAttribute("stroke", renderedLetter.sc);
                  }
                  if (renderedLetter._mdf.fc) {
                    textSpan.setAttribute("fill", renderedLetter.fc);
                  }
                }
              }
            }
          }
        };
        function ISolidElement(data2, globalData2, comp2) {
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([IImageElement], ISolidElement);
        ISolidElement.prototype.createContent = function() {
          var rect = createNS("rect");
          rect.setAttribute("width", this.data.sw);
          rect.setAttribute("height", this.data.sh);
          rect.setAttribute("fill", this.data.sc);
          this.layerElement.appendChild(rect);
        };
        function NullElement(data2, globalData2, comp2) {
          this.initFrame();
          this.initBaseData(data2, globalData2, comp2);
          this.initFrame();
          this.initTransform(data2, globalData2, comp2);
          this.initHierarchy();
        }
        NullElement.prototype.prepareFrame = function(num) {
          this.prepareProperties(num, true);
        };
        NullElement.prototype.renderFrame = function() {
        };
        NullElement.prototype.getBaseElement = function() {
          return null;
        };
        NullElement.prototype.destroy = function() {
        };
        NullElement.prototype.sourceRectAtTime = function() {
        };
        NullElement.prototype.hide = function() {
        };
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
        function SVGRendererBase() {
        }
        extendPrototype([BaseRenderer], SVGRendererBase);
        SVGRendererBase.prototype.createNull = function(data2) {
          return new NullElement(data2, this.globalData, this);
        };
        SVGRendererBase.prototype.createShape = function(data2) {
          return new SVGShapeElement(data2, this.globalData, this);
        };
        SVGRendererBase.prototype.createText = function(data2) {
          return new SVGTextLottieElement(data2, this.globalData, this);
        };
        SVGRendererBase.prototype.createImage = function(data2) {
          return new IImageElement(data2, this.globalData, this);
        };
        SVGRendererBase.prototype.createSolid = function(data2) {
          return new ISolidElement(data2, this.globalData, this);
        };
        SVGRendererBase.prototype.configAnimation = function(animData) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
          if (this.renderConfig.viewBoxSize) {
            this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
          } else {
            this.svgElement.setAttribute("viewBox", "0 0 " + animData.w + " " + animData.h);
          }
          if (!this.renderConfig.viewBoxOnly) {
            this.svgElement.setAttribute("width", animData.w);
            this.svgElement.setAttribute("height", animData.h);
            this.svgElement.style.width = "100%";
            this.svgElement.style.height = "100%";
            this.svgElement.style.transform = "translate3d(0,0,0)";
            this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
          }
          if (this.renderConfig.width) {
            this.svgElement.setAttribute("width", this.renderConfig.width);
          }
          if (this.renderConfig.height) {
            this.svgElement.setAttribute("height", this.renderConfig.height);
          }
          if (this.renderConfig.className) {
            this.svgElement.setAttribute("class", this.renderConfig.className);
          }
          if (this.renderConfig.id) {
            this.svgElement.setAttribute("id", this.renderConfig.id);
          }
          if (this.renderConfig.focusable !== void 0) {
            this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
          }
          this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio);
          this.animationItem.wrapper.appendChild(this.svgElement);
          var defs = this.globalData.defs;
          this.setupGlobalData(animData, defs);
          this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
          this.data = animData;
          var maskElement = createNS("clipPath");
          var rect = createNS("rect");
          rect.setAttribute("width", animData.w);
          rect.setAttribute("height", animData.h);
          rect.setAttribute("x", 0);
          rect.setAttribute("y", 0);
          var maskId = createElementID();
          maskElement.setAttribute("id", maskId);
          maskElement.appendChild(rect);
          this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + maskId + ")");
          defs.appendChild(maskElement);
          this.layers = animData.layers;
          this.elements = createSizedArray(animData.layers.length);
        };
        SVGRendererBase.prototype.destroy = function() {
          if (this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
          }
          this.layerElement = null;
          this.globalData.defs = null;
          var i;
          var len = this.layers ? this.layers.length : 0;
          for (i = 0; i < len; i += 1) {
            if (this.elements[i] && this.elements[i].destroy) {
              this.elements[i].destroy();
            }
          }
          this.elements.length = 0;
          this.destroyed = true;
          this.animationItem = null;
        };
        SVGRendererBase.prototype.updateContainerSize = function() {
        };
        SVGRendererBase.prototype.findIndexByInd = function(ind) {
          var i = 0;
          var len = this.layers.length;
          for (i = 0; i < len; i += 1) {
            if (this.layers[i].ind === ind) {
              return i;
            }
          }
          return -1;
        };
        SVGRendererBase.prototype.buildItem = function(pos) {
          var elements = this.elements;
          if (elements[pos] || this.layers[pos].ty === 99) {
            return;
          }
          elements[pos] = true;
          var element = this.createItem(this.layers[pos]);
          elements[pos] = element;
          if (getExpressionsPlugin()) {
            if (this.layers[pos].ty === 0) {
              this.globalData.projectInterface.registerComposition(element);
            }
            element.initExpressions();
          }
          this.appendElementInPos(element, pos);
          if (this.layers[pos].tt) {
            var elementIndex = "tp" in this.layers[pos] ? this.findIndexByInd(this.layers[pos].tp) : pos - 1;
            if (elementIndex === -1) {
              return;
            }
            if (!this.elements[elementIndex] || this.elements[elementIndex] === true) {
              this.buildItem(elementIndex);
              this.addPendingElement(element);
            } else {
              var matteElement = elements[elementIndex];
              var matteMask = matteElement.getMatte(this.layers[pos].tt);
              element.setMatte(matteMask);
            }
          }
        };
        SVGRendererBase.prototype.checkPendingElements = function() {
          while (this.pendingElements.length) {
            var element = this.pendingElements.pop();
            element.checkParenting();
            if (element.data.tt) {
              var i = 0;
              var len = this.elements.length;
              while (i < len) {
                if (this.elements[i] === element) {
                  var elementIndex = "tp" in element.data ? this.findIndexByInd(element.data.tp) : i - 1;
                  var matteElement = this.elements[elementIndex];
                  var matteMask = matteElement.getMatte(this.layers[i].tt);
                  element.setMatte(matteMask);
                  break;
                }
                i += 1;
              }
            }
          }
        };
        SVGRendererBase.prototype.renderFrame = function(num) {
          if (this.renderedFrame === num || this.destroyed) {
            return;
          }
          if (num === null) {
            num = this.renderedFrame;
          } else {
            this.renderedFrame = num;
          }
          this.globalData.frameNum = num;
          this.globalData.frameId += 1;
          this.globalData.projectInterface.currentFrame = num;
          this.globalData._mdf = false;
          var i;
          var len = this.layers.length;
          if (!this.completeLayers) {
            this.checkLayers(num);
          }
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].prepareFrame(num - this.layers[i].st);
            }
          }
          if (this.globalData._mdf) {
            for (i = 0; i < len; i += 1) {
              if (this.completeLayers || this.elements[i]) {
                this.elements[i].renderFrame();
              }
            }
          }
        };
        SVGRendererBase.prototype.appendElementInPos = function(element, pos) {
          var newElement = element.getBaseElement();
          if (!newElement) {
            return;
          }
          var i = 0;
          var nextElement;
          while (i < pos) {
            if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
              nextElement = this.elements[i].getBaseElement();
            }
            i += 1;
          }
          if (nextElement) {
            this.layerElement.insertBefore(newElement, nextElement);
          } else {
            this.layerElement.appendChild(newElement);
          }
        };
        SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none";
        };
        SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block";
        };
        function ICompElement() {
        }
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);
        ICompElement.prototype.initElement = function(data2, globalData2, comp2) {
          this.initFrame();
          this.initBaseData(data2, globalData2, comp2);
          this.initTransform(data2, globalData2, comp2);
          this.initRenderable();
          this.initHierarchy();
          this.initRendererElement();
          this.createContainerElements();
          this.createRenderableComponents();
          if (this.data.xt || !globalData2.progressiveLoad) {
            this.buildAllItems();
          }
          this.hide();
        };
        ICompElement.prototype.prepareFrame = function(num) {
          this._mdf = false;
          this.prepareRenderableFrame(num);
          this.prepareProperties(num, this.isInRange);
          if (!this.isInRange && !this.data.xt) {
            return;
          }
          if (!this.tm._placeholder) {
            var timeRemapped = this.tm.v;
            if (timeRemapped === this.data.op) {
              timeRemapped = this.data.op - 1;
            }
            this.renderedFrame = timeRemapped;
          } else {
            this.renderedFrame = num / this.data.sr;
          }
          var i;
          var len = this.elements.length;
          if (!this.completeLayers) {
            this.checkLayers(this.renderedFrame);
          }
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
              if (this.elements[i]._mdf) {
                this._mdf = true;
              }
            }
          }
        };
        ICompElement.prototype.renderInnerContent = function() {
          var i;
          var len = this.layers.length;
          for (i = 0; i < len; i += 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].renderFrame();
            }
          }
        };
        ICompElement.prototype.setElements = function(elems) {
          this.elements = elems;
        };
        ICompElement.prototype.getElements = function() {
          return this.elements;
        };
        ICompElement.prototype.destroyElements = function() {
          var i;
          var len = this.layers.length;
          for (i = 0; i < len; i += 1) {
            if (this.elements[i]) {
              this.elements[i].destroy();
            }
          }
        };
        ICompElement.prototype.destroy = function() {
          this.destroyElements();
          this.destroyBaseElement();
        };
        function SVGCompElement(data2, globalData2, comp2) {
          this.layers = data2.layers;
          this.supports3d = true;
          this.completeLayers = false;
          this.pendingElements = [];
          this.elements = this.layers ? createSizedArray(this.layers.length) : [];
          this.initElement(data2, globalData2, comp2);
          this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
            _placeholder: true
          };
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);
        SVGCompElement.prototype.createComp = function(data2) {
          return new SVGCompElement(data2, this.globalData, this);
        };
        function SVGRenderer(animationItem, config3) {
          this.animationItem = animationItem;
          this.layers = null;
          this.renderedFrame = -1;
          this.svgElement = createNS("svg");
          var ariaLabel = "";
          if (config3 && config3.title) {
            var titleElement = createNS("title");
            var titleId = createElementID();
            titleElement.setAttribute("id", titleId);
            titleElement.textContent = config3.title;
            this.svgElement.appendChild(titleElement);
            ariaLabel += titleId;
          }
          if (config3 && config3.description) {
            var descElement = createNS("desc");
            var descId = createElementID();
            descElement.setAttribute("id", descId);
            descElement.textContent = config3.description;
            this.svgElement.appendChild(descElement);
            ariaLabel += " " + descId;
          }
          if (ariaLabel) {
            this.svgElement.setAttribute("aria-labelledby", ariaLabel);
          }
          var defs = createNS("defs");
          this.svgElement.appendChild(defs);
          var maskElement = createNS("g");
          this.svgElement.appendChild(maskElement);
          this.layerElement = maskElement;
          this.renderConfig = {
            preserveAspectRatio: config3 && config3.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: config3 && config3.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: config3 && config3.contentVisibility || "visible",
            progressiveLoad: config3 && config3.progressiveLoad || false,
            hideOnTransparent: !(config3 && config3.hideOnTransparent === false),
            viewBoxOnly: config3 && config3.viewBoxOnly || false,
            viewBoxSize: config3 && config3.viewBoxSize || false,
            className: config3 && config3.className || "",
            id: config3 && config3.id || "",
            focusable: config3 && config3.focusable,
            filterSize: {
              width: config3 && config3.filterSize && config3.filterSize.width || "100%",
              height: config3 && config3.filterSize && config3.filterSize.height || "100%",
              x: config3 && config3.filterSize && config3.filterSize.x || "0%",
              y: config3 && config3.filterSize && config3.filterSize.y || "0%"
            },
            width: config3 && config3.width,
            height: config3 && config3.height,
            runExpressions: !config3 || config3.runExpressions === void 0 || config3.runExpressions
          };
          this.globalData = {
            _mdf: false,
            frameNum: -1,
            defs,
            renderConfig: this.renderConfig
          };
          this.elements = [];
          this.pendingElements = [];
          this.destroyed = false;
          this.rendererType = "svg";
        }
        extendPrototype([SVGRendererBase], SVGRenderer);
        SVGRenderer.prototype.createComp = function(data2) {
          return new SVGCompElement(data2, this.globalData, this);
        };
        function ShapeTransformManager() {
          this.sequences = {};
          this.sequenceList = [];
          this.transform_key_count = 0;
        }
        ShapeTransformManager.prototype = {
          addTransformSequence: function addTransformSequence(transforms) {
            var i;
            var len = transforms.length;
            var key2 = "_";
            for (i = 0; i < len; i += 1) {
              key2 += transforms[i].transform.key + "_";
            }
            var sequence = this.sequences[key2];
            if (!sequence) {
              sequence = {
                transforms: [].concat(transforms),
                finalTransform: new Matrix(),
                _mdf: false
              };
              this.sequences[key2] = sequence;
              this.sequenceList.push(sequence);
            }
            return sequence;
          },
          processSequence: function processSequence(sequence, isFirstFrame) {
            var i = 0;
            var len = sequence.transforms.length;
            var _mdf = isFirstFrame;
            while (i < len && !isFirstFrame) {
              if (sequence.transforms[i].transform.mProps._mdf) {
                _mdf = true;
                break;
              }
              i += 1;
            }
            if (_mdf) {
              sequence.finalTransform.reset();
              for (i = len - 1; i >= 0; i -= 1) {
                sequence.finalTransform.multiply(sequence.transforms[i].transform.mProps.v);
              }
            }
            sequence._mdf = _mdf;
          },
          processSequences: function processSequences(isFirstFrame) {
            var i;
            var len = this.sequenceList.length;
            for (i = 0; i < len; i += 1) {
              this.processSequence(this.sequenceList[i], isFirstFrame);
            }
          },
          getNewKey: function getNewKey() {
            this.transform_key_count += 1;
            return "_" + this.transform_key_count;
          }
        };
        var lumaLoader = function lumaLoader2() {
          var id = "__lottie_element_luma_buffer";
          var lumaBuffer = null;
          var lumaBufferCtx = null;
          var svg = null;
          function createLumaSvgFilter() {
            var _svg = createNS("svg");
            var fil = createNS("filter");
            var matrix = createNS("feColorMatrix");
            fil.setAttribute("id", id);
            matrix.setAttribute("type", "matrix");
            matrix.setAttribute("color-interpolation-filters", "sRGB");
            matrix.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0");
            fil.appendChild(matrix);
            _svg.appendChild(fil);
            _svg.setAttribute("id", id + "_svg");
            if (featureSupport.svgLumaHidden) {
              _svg.style.display = "none";
            }
            return _svg;
          }
          function loadLuma() {
            if (!lumaBuffer) {
              svg = createLumaSvgFilter();
              document.body.appendChild(svg);
              lumaBuffer = createTag("canvas");
              lumaBufferCtx = lumaBuffer.getContext("2d");
              lumaBufferCtx.filter = "url(#" + id + ")";
              lumaBufferCtx.fillStyle = "rgba(0,0,0,0)";
              lumaBufferCtx.fillRect(0, 0, 1, 1);
            }
          }
          function getLuma(canvas) {
            if (!lumaBuffer) {
              loadLuma();
            }
            lumaBuffer.width = canvas.width;
            lumaBuffer.height = canvas.height;
            lumaBufferCtx.filter = "url(#" + id + ")";
            return lumaBuffer;
          }
          return {
            load: loadLuma,
            get: getLuma
          };
        };
        function createCanvas(width2, height2) {
          if (featureSupport.offscreenCanvas) {
            return new OffscreenCanvas(width2, height2);
          }
          var canvas = createTag("canvas");
          canvas.width = width2;
          canvas.height = height2;
          return canvas;
        }
        var assetLoader = function() {
          return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          };
        }();
        var registeredEffects = {};
        function CVEffects(elem2) {
          var i;
          var len = elem2.data.ef ? elem2.data.ef.length : 0;
          this.filters = [];
          var filterManager;
          for (i = 0; i < len; i += 1) {
            filterManager = null;
            var type = elem2.data.ef[i].ty;
            if (registeredEffects[type]) {
              var Effect = registeredEffects[type].effect;
              filterManager = new Effect(elem2.effectsManager.effectElements[i], elem2);
            }
            if (filterManager) {
              this.filters.push(filterManager);
            }
          }
          if (this.filters.length) {
            elem2.addRenderableComponent(this);
          }
        }
        CVEffects.prototype.renderFrame = function(_isFirstFrame) {
          var i;
          var len = this.filters.length;
          for (i = 0; i < len; i += 1) {
            this.filters[i].renderFrame(_isFirstFrame);
          }
        };
        CVEffects.prototype.getEffects = function(type) {
          var i;
          var len = this.filters.length;
          var effects = [];
          for (i = 0; i < len; i += 1) {
            if (this.filters[i].type === type) {
              effects.push(this.filters[i]);
            }
          }
          return effects;
        };
        function registerEffect(id, effect2) {
          registeredEffects[id] = {
            effect: effect2
          };
        }
        function CVMaskElement(data2, element) {
          this.data = data2;
          this.element = element;
          this.masksProperties = this.data.masksProperties || [];
          this.viewData = createSizedArray(this.masksProperties.length);
          var i;
          var len = this.masksProperties.length;
          var hasMasks = false;
          for (i = 0; i < len; i += 1) {
            if (this.masksProperties[i].mode !== "n") {
              hasMasks = true;
            }
            this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
          }
          this.hasMasks = hasMasks;
          if (hasMasks) {
            this.element.addRenderableComponent(this);
          }
        }
        CVMaskElement.prototype.renderFrame = function() {
          if (!this.hasMasks) {
            return;
          }
          var transform2 = this.element.finalTransform.mat;
          var ctx = this.element.canvasContext;
          var i;
          var len = this.masksProperties.length;
          var pt;
          var pts;
          var data2;
          ctx.beginPath();
          for (i = 0; i < len; i += 1) {
            if (this.masksProperties[i].mode !== "n") {
              if (this.masksProperties[i].inv) {
                ctx.moveTo(0, 0);
                ctx.lineTo(this.element.globalData.compSize.w, 0);
                ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
                ctx.lineTo(0, this.element.globalData.compSize.h);
                ctx.lineTo(0, 0);
              }
              data2 = this.viewData[i].v;
              pt = transform2.applyToPointArray(data2.v[0][0], data2.v[0][1], 0);
              ctx.moveTo(pt[0], pt[1]);
              var j;
              var jLen = data2._length;
              for (j = 1; j < jLen; j += 1) {
                pts = transform2.applyToTriplePoints(data2.o[j - 1], data2.i[j], data2.v[j]);
                ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
              }
              pts = transform2.applyToTriplePoints(data2.o[j - 1], data2.i[0], data2.v[0]);
              ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
            }
          }
          this.element.globalData.renderer.save(true);
          ctx.clip();
        };
        CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;
        CVMaskElement.prototype.destroy = function() {
          this.element = null;
        };
        function CVBaseElement() {
        }
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };
        CVBaseElement.prototype = {
          createElements: function createElements() {
          },
          initRendererElement: function initRendererElement() {
          },
          createContainerElements: function createContainerElements() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var canvasContext = this.globalData.canvasContext;
              var bufferCanvas = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
              this.buffers.push(bufferCanvas);
              var bufferCanvas2 = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
              this.buffers.push(bufferCanvas2);
              if (this.data.tt >= 3 && !document._isProxy) {
                assetLoader.loadLumaCanvas();
              }
            }
            this.canvasContext = this.globalData.canvasContext;
            this.transformCanvas = this.globalData.transformCanvas;
            this.renderableEffectsManager = new CVEffects(this);
            this.searchEffectTransforms();
          },
          createContent: function createContent() {
          },
          setBlendMode: function setBlendMode() {
            var globalData2 = this.globalData;
            if (globalData2.blendMode !== this.data.bm) {
              globalData2.blendMode = this.data.bm;
              var blendModeValue = getBlendMode(this.data.bm);
              globalData2.canvasContext.globalCompositeOperation = blendModeValue;
            }
          },
          createRenderableComponents: function createRenderableComponents() {
            this.maskManager = new CVMaskElement(this.data, this);
            this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          },
          hideElement: function hideElement() {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              this.hidden = true;
            }
          },
          showElement: function showElement() {
            if (this.isInRange && !this.isTransparent) {
              this.hidden = false;
              this._isFirstFrame = true;
              this.maskManager._isFirstFrame = true;
            }
          },
          clearCanvas: function clearCanvas(canvasContext) {
            canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
          },
          prepareLayer: function prepareLayer() {
            if (this.data.tt >= 1) {
              var buffer = this.buffers[0];
              var bufferCtx = buffer.getContext("2d");
              this.clearCanvas(bufferCtx);
              bufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
              this.currentTransform = this.canvasContext.getTransform();
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
              this.clearCanvas(this.canvasContext);
              this.canvasContext.setTransform(this.currentTransform);
            }
          },
          exitLayer: function exitLayer() {
            if (this.data.tt >= 1) {
              var buffer = this.buffers[1];
              var bufferCtx = buffer.getContext("2d");
              this.clearCanvas(bufferCtx);
              bufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
              this.clearCanvas(this.canvasContext);
              this.canvasContext.setTransform(this.currentTransform);
              var mask2 = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
              mask2.renderFrame(true);
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
              if (this.data.tt >= 3 && !document._isProxy) {
                var lumaBuffer = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                var lumaBufferCtx = lumaBuffer.getContext("2d");
                lumaBufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
                this.clearCanvas(this.canvasContext);
                this.canvasContext.drawImage(lumaBuffer, 0, 0);
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
              this.canvasContext.drawImage(buffer, 0, 0);
              this.canvasContext.globalCompositeOperation = "destination-over";
              this.canvasContext.drawImage(this.buffers[0], 0, 0);
              this.canvasContext.setTransform(this.currentTransform);
              this.canvasContext.globalCompositeOperation = "source-over";
            }
          },
          renderFrame: function renderFrame(forceRender) {
            if (this.hidden || this.data.hd) {
              return;
            }
            if (this.data.td === 1 && !forceRender) {
              return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderLocalTransform();
            this.setBlendMode();
            var forceRealStack = this.data.ty === 0;
            this.prepareLayer();
            this.globalData.renderer.save(forceRealStack);
            this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props);
            this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity);
            this.renderInnerContent();
            this.globalData.renderer.restore(forceRealStack);
            this.exitLayer();
            if (this.maskManager.hasMasks) {
              this.globalData.renderer.restore(true);
            }
            if (this._isFirstFrame) {
              this._isFirstFrame = false;
            }
          },
          destroy: function destroy() {
            this.canvasContext = null;
            this.data = null;
            this.globalData = null;
            this.maskManager.destroy();
          },
          mHelper: new Matrix()
        };
        CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
        CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
        function CVShapeData(element, data2, styles, transformsManager) {
          this.styledShapes = [];
          this.tr = [0, 0, 0, 0, 0, 0];
          var ty = 4;
          if (data2.ty === "rc") {
            ty = 5;
          } else if (data2.ty === "el") {
            ty = 6;
          } else if (data2.ty === "sr") {
            ty = 7;
          }
          this.sh = ShapePropertyFactory.getShapeProp(element, data2, ty, element);
          var i;
          var len = styles.length;
          var styledShape;
          for (i = 0; i < len; i += 1) {
            if (!styles[i].closed) {
              styledShape = {
                transforms: transformsManager.addTransformSequence(styles[i].transforms),
                trNodes: []
              };
              this.styledShapes.push(styledShape);
              styles[i].elements.push(styledShape);
            }
          }
        }
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
        function CVShapeElement(data2, globalData2, comp2) {
          this.shapes = [];
          this.shapesData = data2.shapes;
          this.stylesList = [];
          this.itemsData = [];
          this.prevViewData = [];
          this.shapeModifiers = [];
          this.processedElements = [];
          this.transformsManager = new ShapeTransformManager();
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
        CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
        CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: false
        };
        CVShapeElement.prototype.dashResetter = [];
        CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
        };
        CVShapeElement.prototype.createStyleElement = function(data2, transforms) {
          var styleElem = {
            data: data2,
            type: data2.ty,
            preTransforms: this.transformsManager.addTransformSequence(transforms),
            transforms: [],
            elements: [],
            closed: data2.hd === true
          };
          var elementData = {};
          if (data2.ty === "fl" || data2.ty === "st") {
            elementData.c = PropertyFactory.getProp(this, data2.c, 1, 255, this);
            if (!elementData.c.k) {
              styleElem.co = "rgb(" + bmFloor(elementData.c.v[0]) + "," + bmFloor(elementData.c.v[1]) + "," + bmFloor(elementData.c.v[2]) + ")";
            }
          } else if (data2.ty === "gf" || data2.ty === "gs") {
            elementData.s = PropertyFactory.getProp(this, data2.s, 1, null, this);
            elementData.e = PropertyFactory.getProp(this, data2.e, 1, null, this);
            elementData.h = PropertyFactory.getProp(this, data2.h || {
              k: 0
            }, 0, 0.01, this);
            elementData.a = PropertyFactory.getProp(this, data2.a || {
              k: 0
            }, 0, degToRads, this);
            elementData.g = new GradientProperty(this, data2.g, this);
          }
          elementData.o = PropertyFactory.getProp(this, data2.o, 0, 0.01, this);
          if (data2.ty === "st" || data2.ty === "gs") {
            styleElem.lc = lineCapEnum[data2.lc || 2];
            styleElem.lj = lineJoinEnum[data2.lj || 2];
            if (data2.lj == 1) {
              styleElem.ml = data2.ml;
            }
            elementData.w = PropertyFactory.getProp(this, data2.w, 0, null, this);
            if (!elementData.w.k) {
              styleElem.wi = elementData.w.v;
            }
            if (data2.d) {
              var d = new DashProperty(this, data2.d, "canvas", this);
              elementData.d = d;
              if (!elementData.d.k) {
                styleElem.da = elementData.d.dashArray;
                styleElem["do"] = elementData.d.dashoffset[0];
              }
            }
          } else {
            styleElem.r = data2.r === 2 ? "evenodd" : "nonzero";
          }
          this.stylesList.push(styleElem);
          elementData.style = styleElem;
          return elementData;
        };
        CVShapeElement.prototype.createGroupElement = function() {
          var elementData = {
            it: [],
            prevViewData: []
          };
          return elementData;
        };
        CVShapeElement.prototype.createTransformElement = function(data2) {
          var elementData = {
            transform: {
              opacity: 1,
              _opMdf: false,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, data2.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, data2, this)
            }
          };
          return elementData;
        };
        CVShapeElement.prototype.createShapeElement = function(data2) {
          var elementData = new CVShapeData(this, data2, this.stylesList, this.transformsManager);
          this.shapes.push(elementData);
          this.addShapeToModifiers(elementData);
          return elementData;
        };
        CVShapeElement.prototype.reloadShapes = function() {
          this._isFirstFrame = true;
          var i;
          var len = this.itemsData.length;
          for (i = 0; i < len; i += 1) {
            this.prevViewData[i] = this.itemsData[i];
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
          len = this.dynamicProperties.length;
          for (i = 0; i < len; i += 1) {
            this.dynamicProperties[i].getValue();
          }
          this.renderModifiers();
          this.transformsManager.processSequences(this._isFirstFrame);
        };
        CVShapeElement.prototype.addTransformToStyleList = function(transform2) {
          var i;
          var len = this.stylesList.length;
          for (i = 0; i < len; i += 1) {
            if (!this.stylesList[i].closed) {
              this.stylesList[i].transforms.push(transform2);
            }
          }
        };
        CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var i;
          var len = this.stylesList.length;
          for (i = 0; i < len; i += 1) {
            if (!this.stylesList[i].closed) {
              this.stylesList[i].transforms.pop();
            }
          }
        };
        CVShapeElement.prototype.closeStyles = function(styles) {
          var i;
          var len = styles.length;
          for (i = 0; i < len; i += 1) {
            styles[i].closed = true;
          }
        };
        CVShapeElement.prototype.searchShapes = function(arr, itemsData, prevViewData, shouldRender, transforms) {
          var i;
          var len = arr.length - 1;
          var j;
          var jLen;
          var ownStyles = [];
          var ownModifiers = [];
          var processedPos;
          var modifier;
          var currentTransform;
          var ownTransforms = [].concat(transforms);
          for (i = len; i >= 0; i -= 1) {
            processedPos = this.searchProcessedElement(arr[i]);
            if (!processedPos) {
              arr[i]._shouldRender = shouldRender;
            } else {
              itemsData[i] = prevViewData[processedPos - 1];
            }
            if (arr[i].ty === "fl" || arr[i].ty === "st" || arr[i].ty === "gf" || arr[i].ty === "gs") {
              if (!processedPos) {
                itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
              } else {
                itemsData[i].style.closed = false;
              }
              ownStyles.push(itemsData[i].style);
            } else if (arr[i].ty === "gr") {
              if (!processedPos) {
                itemsData[i] = this.createGroupElement(arr[i]);
              } else {
                jLen = itemsData[i].it.length;
                for (j = 0; j < jLen; j += 1) {
                  itemsData[i].prevViewData[j] = itemsData[i].it[j];
                }
              }
              this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
            } else if (arr[i].ty === "tr") {
              if (!processedPos) {
                currentTransform = this.createTransformElement(arr[i]);
                itemsData[i] = currentTransform;
              }
              ownTransforms.push(itemsData[i]);
              this.addTransformToStyleList(itemsData[i]);
            } else if (arr[i].ty === "sh" || arr[i].ty === "rc" || arr[i].ty === "el" || arr[i].ty === "sr") {
              if (!processedPos) {
                itemsData[i] = this.createShapeElement(arr[i]);
              }
            } else if (arr[i].ty === "tm" || arr[i].ty === "rd" || arr[i].ty === "pb" || arr[i].ty === "zz" || arr[i].ty === "op") {
              if (!processedPos) {
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                modifier.init(this, arr[i]);
                itemsData[i] = modifier;
                this.shapeModifiers.push(modifier);
              } else {
                modifier = itemsData[i];
                modifier.closed = false;
              }
              ownModifiers.push(modifier);
            } else if (arr[i].ty === "rp") {
              if (!processedPos) {
                modifier = ShapeModifiers.getModifier(arr[i].ty);
                itemsData[i] = modifier;
                modifier.init(this, arr, i, itemsData);
                this.shapeModifiers.push(modifier);
                shouldRender = false;
              } else {
                modifier = itemsData[i];
                modifier.closed = true;
              }
              ownModifiers.push(modifier);
            }
            this.addProcessedElement(arr[i], i + 1);
          }
          this.removeTransformFromStyleList();
          this.closeStyles(ownStyles);
          len = ownModifiers.length;
          for (i = 0; i < len; i += 1) {
            ownModifiers[i].closed = true;
          }
        };
        CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1;
          this.transformHelper._opMdf = false;
          this.renderModifiers();
          this.transformsManager.processSequences(this._isFirstFrame);
          this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
        };
        CVShapeElement.prototype.renderShapeTransform = function(parentTransform, groupTransform) {
          if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
            groupTransform.opacity = parentTransform.opacity;
            groupTransform.opacity *= groupTransform.op.v;
            groupTransform._opMdf = true;
          }
        };
        CVShapeElement.prototype.drawLayer = function() {
          var i;
          var len = this.stylesList.length;
          var j;
          var jLen;
          var k;
          var kLen;
          var elems;
          var nodes;
          var renderer2 = this.globalData.renderer;
          var ctx = this.globalData.canvasContext;
          var type;
          var currentStyle;
          for (i = 0; i < len; i += 1) {
            currentStyle = this.stylesList[i];
            type = currentStyle.type;
            if (!((type === "st" || type === "gs") && currentStyle.wi === 0 || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
              renderer2.save();
              elems = currentStyle.elements;
              if (type === "st" || type === "gs") {
                renderer2.ctxStrokeStyle(type === "st" ? currentStyle.co : currentStyle.grd);
                renderer2.ctxLineWidth(currentStyle.wi);
                renderer2.ctxLineCap(currentStyle.lc);
                renderer2.ctxLineJoin(currentStyle.lj);
                renderer2.ctxMiterLimit(currentStyle.ml || 0);
              } else {
                renderer2.ctxFillStyle(type === "fl" ? currentStyle.co : currentStyle.grd);
              }
              renderer2.ctxOpacity(currentStyle.coOp);
              if (type !== "st" && type !== "gs") {
                ctx.beginPath();
              }
              renderer2.ctxTransform(currentStyle.preTransforms.finalTransform.props);
              jLen = elems.length;
              for (j = 0; j < jLen; j += 1) {
                if (type === "st" || type === "gs") {
                  ctx.beginPath();
                  if (currentStyle.da) {
                    ctx.setLineDash(currentStyle.da);
                    ctx.lineDashOffset = currentStyle["do"];
                  }
                }
                nodes = elems[j].trNodes;
                kLen = nodes.length;
                for (k = 0; k < kLen; k += 1) {
                  if (nodes[k].t === "m") {
                    ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
                  } else if (nodes[k].t === "c") {
                    ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
                  } else {
                    ctx.closePath();
                  }
                }
                if (type === "st" || type === "gs") {
                  renderer2.ctxStroke();
                  if (currentStyle.da) {
                    ctx.setLineDash(this.dashResetter);
                  }
                }
              }
              if (type !== "st" && type !== "gs") {
                this.globalData.renderer.ctxFill(currentStyle.r);
              }
              renderer2.restore();
            }
          }
        };
        CVShapeElement.prototype.renderShape = function(parentTransform, items, data2, isMain) {
          var i;
          var len = items.length - 1;
          var groupTransform;
          groupTransform = parentTransform;
          for (i = len; i >= 0; i -= 1) {
            if (items[i].ty === "tr") {
              groupTransform = data2[i].transform;
              this.renderShapeTransform(parentTransform, groupTransform);
            } else if (items[i].ty === "sh" || items[i].ty === "el" || items[i].ty === "rc" || items[i].ty === "sr") {
              this.renderPath(items[i], data2[i]);
            } else if (items[i].ty === "fl") {
              this.renderFill(items[i], data2[i], groupTransform);
            } else if (items[i].ty === "st") {
              this.renderStroke(items[i], data2[i], groupTransform);
            } else if (items[i].ty === "gf" || items[i].ty === "gs") {
              this.renderGradientFill(items[i], data2[i], groupTransform);
            } else if (items[i].ty === "gr") {
              this.renderShape(groupTransform, items[i].it, data2[i].it);
            } else if (items[i].ty === "tm") {
            }
          }
          if (isMain) {
            this.drawLayer();
          }
        };
        CVShapeElement.prototype.renderStyledShape = function(styledShape, shape) {
          if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
            var shapeNodes = styledShape.trNodes;
            var paths = shape.paths;
            var i;
            var len;
            var j;
            var jLen = paths._length;
            shapeNodes.length = 0;
            var groupTransformMat = styledShape.transforms.finalTransform;
            for (j = 0; j < jLen; j += 1) {
              var pathNodes = paths.shapes[j];
              if (pathNodes && pathNodes.v) {
                len = pathNodes._length;
                for (i = 1; i < len; i += 1) {
                  if (i === 1) {
                    shapeNodes.push({
                      t: "m",
                      p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                    });
                  }
                  shapeNodes.push({
                    t: "c",
                    pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
                  });
                }
                if (len === 1) {
                  shapeNodes.push({
                    t: "m",
                    p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                  });
                }
                if (pathNodes.c && len) {
                  shapeNodes.push({
                    t: "c",
                    pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
                  });
                  shapeNodes.push({
                    t: "z"
                  });
                }
              }
            }
            styledShape.trNodes = shapeNodes;
          }
        };
        CVShapeElement.prototype.renderPath = function(pathData, itemData) {
          if (pathData.hd !== true && pathData._shouldRender) {
            var i;
            var len = itemData.styledShapes.length;
            for (i = 0; i < len; i += 1) {
              this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
            }
          }
        };
        CVShapeElement.prototype.renderFill = function(styleData, itemData, groupTransform) {
          var styleElem = itemData.style;
          if (itemData.c._mdf || this._isFirstFrame) {
            styleElem.co = "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")";
          }
          if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
            styleElem.coOp = itemData.o.v * groupTransform.opacity;
          }
        };
        CVShapeElement.prototype.renderGradientFill = function(styleData, itemData, groupTransform) {
          var styleElem = itemData.style;
          var grd;
          if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf)) {
            var ctx = this.globalData.canvasContext;
            var pt1 = itemData.s.v;
            var pt2 = itemData.e.v;
            if (styleData.t === 1) {
              grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
            } else {
              var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
              var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
              var percent = itemData.h.v;
              if (percent >= 1) {
                percent = 0.99;
              } else if (percent <= -1) {
                percent = -0.99;
              }
              var dist = rad * percent;
              var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
              var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
              grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
            }
            var i;
            var len = styleData.g.p;
            var cValues = itemData.g.c;
            var opacity = 1;
            for (i = 0; i < len; i += 1) {
              if (itemData.g._hasOpacity && itemData.g._collapsable) {
                opacity = itemData.g.o[i * 2 + 1];
              }
              grd.addColorStop(cValues[i * 4] / 100, "rgba(" + cValues[i * 4 + 1] + "," + cValues[i * 4 + 2] + "," + cValues[i * 4 + 3] + "," + opacity + ")");
            }
            styleElem.grd = grd;
          }
          styleElem.coOp = itemData.o.v * groupTransform.opacity;
        };
        CVShapeElement.prototype.renderStroke = function(styleData, itemData, groupTransform) {
          var styleElem = itemData.style;
          var d = itemData.d;
          if (d && (d._mdf || this._isFirstFrame)) {
            styleElem.da = d.dashArray;
            styleElem["do"] = d.dashoffset[0];
          }
          if (itemData.c._mdf || this._isFirstFrame) {
            styleElem.co = "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")";
          }
          if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
            styleElem.coOp = itemData.o.v * groupTransform.opacity;
          }
          if (itemData.w._mdf || this._isFirstFrame) {
            styleElem.wi = itemData.w.v;
          }
        };
        CVShapeElement.prototype.destroy = function() {
          this.shapesData = null;
          this.globalData = null;
          this.canvasContext = null;
          this.stylesList.length = 0;
          this.itemsData.length = 0;
        };
        function CVTextElement(data2, globalData2, comp2) {
          this.textSpans = [];
          this.yOffset = 0;
          this.fillColorAnim = false;
          this.strokeColorAnim = false;
          this.strokeWidthAnim = false;
          this.stroke = false;
          this.fill = false;
          this.justifyOffset = 0;
          this.currentRender = null;
          this.renderType = "canvas";
          this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          };
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
        CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d");
        CVTextElement.prototype.buildNewText = function() {
          var documentData = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
          var hasFill = false;
          if (documentData.fc) {
            hasFill = true;
            this.values.fill = this.buildColor(documentData.fc);
          } else {
            this.values.fill = "rgba(0,0,0,0)";
          }
          this.fill = hasFill;
          var hasStroke = false;
          if (documentData.sc) {
            hasStroke = true;
            this.values.stroke = this.buildColor(documentData.sc);
            this.values.sWidth = documentData.sw;
          }
          var fontData = this.globalData.fontManager.getFontByName(documentData.f);
          var i;
          var len;
          var letters = documentData.l;
          var matrixHelper = this.mHelper;
          this.stroke = hasStroke;
          this.values.fValue = documentData.finalSize + "px " + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
          len = documentData.finalText.length;
          var charData;
          var shapeData;
          var k;
          var kLen;
          var shapes;
          var j;
          var jLen;
          var pathNodes;
          var commands;
          var pathArr;
          var singleShape = this.data.singleShape;
          var trackingOffset = documentData.tr * 1e-3 * documentData.finalSize;
          var xPos = 0;
          var yPos = 0;
          var firstLine = true;
          var cnt = 0;
          for (i = 0; i < len; i += 1) {
            charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            shapeData = charData && charData.data || {};
            matrixHelper.reset();
            if (singleShape && letters[i].n) {
              xPos = -trackingOffset;
              yPos += documentData.yOffset;
              yPos += firstLine ? 1 : 0;
              firstLine = false;
            }
            shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
            jLen = shapes.length;
            matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
            if (singleShape) {
              this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
            }
            commands = createSizedArray(jLen - 1);
            var commandsCounter = 0;
            for (j = 0; j < jLen; j += 1) {
              if (shapes[j].ty === "sh") {
                kLen = shapes[j].ks.k.i.length;
                pathNodes = shapes[j].ks.k;
                pathArr = [];
                for (k = 1; k < kLen; k += 1) {
                  if (k === 1) {
                    pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
                  }
                  pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
                }
                pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
                commands[commandsCounter] = pathArr;
                commandsCounter += 1;
              }
            }
            if (singleShape) {
              xPos += letters[i].l;
              xPos += trackingOffset;
            }
            if (this.textSpans[cnt]) {
              this.textSpans[cnt].elem = commands;
            } else {
              this.textSpans[cnt] = {
                elem: commands
              };
            }
            cnt += 1;
          }
        };
        CVTextElement.prototype.renderInnerContent = function() {
          this.validateText();
          var ctx = this.canvasContext;
          ctx.font = this.values.fValue;
          this.globalData.renderer.ctxLineCap("butt");
          this.globalData.renderer.ctxLineJoin("miter");
          this.globalData.renderer.ctxMiterLimit(4);
          if (!this.data.singleShape) {
            this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          }
          var i;
          var len;
          var j;
          var jLen;
          var k;
          var kLen;
          var renderedLetters = this.textAnimator.renderedLetters;
          var letters = this.textProperty.currentData.l;
          len = letters.length;
          var renderedLetter;
          var lastFill = null;
          var lastStroke = null;
          var lastStrokeW = null;
          var commands;
          var pathArr;
          var renderer2 = this.globalData.renderer;
          for (i = 0; i < len; i += 1) {
            if (!letters[i].n) {
              renderedLetter = renderedLetters[i];
              if (renderedLetter) {
                renderer2.save();
                renderer2.ctxTransform(renderedLetter.p);
                renderer2.ctxOpacity(renderedLetter.o);
              }
              if (this.fill) {
                if (renderedLetter && renderedLetter.fc) {
                  if (lastFill !== renderedLetter.fc) {
                    renderer2.ctxFillStyle(renderedLetter.fc);
                    lastFill = renderedLetter.fc;
                  }
                } else if (lastFill !== this.values.fill) {
                  lastFill = this.values.fill;
                  renderer2.ctxFillStyle(this.values.fill);
                }
                commands = this.textSpans[i].elem;
                jLen = commands.length;
                this.globalData.canvasContext.beginPath();
                for (j = 0; j < jLen; j += 1) {
                  pathArr = commands[j];
                  kLen = pathArr.length;
                  this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                  for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                  }
                }
                this.globalData.canvasContext.closePath();
                renderer2.ctxFill();
              }
              if (this.stroke) {
                if (renderedLetter && renderedLetter.sw) {
                  if (lastStrokeW !== renderedLetter.sw) {
                    lastStrokeW = renderedLetter.sw;
                    renderer2.ctxLineWidth(renderedLetter.sw);
                  }
                } else if (lastStrokeW !== this.values.sWidth) {
                  lastStrokeW = this.values.sWidth;
                  renderer2.ctxLineWidth(this.values.sWidth);
                }
                if (renderedLetter && renderedLetter.sc) {
                  if (lastStroke !== renderedLetter.sc) {
                    lastStroke = renderedLetter.sc;
                    renderer2.ctxStrokeStyle(renderedLetter.sc);
                  }
                } else if (lastStroke !== this.values.stroke) {
                  lastStroke = this.values.stroke;
                  renderer2.ctxStrokeStyle(this.values.stroke);
                }
                commands = this.textSpans[i].elem;
                jLen = commands.length;
                this.globalData.canvasContext.beginPath();
                for (j = 0; j < jLen; j += 1) {
                  pathArr = commands[j];
                  kLen = pathArr.length;
                  this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                  for (k = 2; k < kLen; k += 6) {
                    this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                  }
                }
                this.globalData.canvasContext.closePath();
                renderer2.ctxStroke();
              }
              if (renderedLetter) {
                this.globalData.renderer.restore();
              }
            }
          }
        };
        function CVImageElement(data2, globalData2, comp2) {
          this.assetData = globalData2.getAssetData(data2.refId);
          this.img = globalData2.imageLoader.getAsset(this.assetData);
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
        CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
        CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
        CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var canvas = createTag("canvas");
            canvas.width = this.assetData.w;
            canvas.height = this.assetData.h;
            var ctx = canvas.getContext("2d");
            var imgW = this.img.width;
            var imgH = this.img.height;
            var imgRel = imgW / imgH;
            var canvasRel = this.assetData.w / this.assetData.h;
            var widthCrop;
            var heightCrop;
            var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            if (imgRel > canvasRel && par === "xMidYMid slice" || imgRel < canvasRel && par !== "xMidYMid slice") {
              heightCrop = imgH;
              widthCrop = heightCrop * canvasRel;
            } else {
              widthCrop = imgW;
              heightCrop = widthCrop / canvasRel;
            }
            ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
            this.img = canvas;
          }
        };
        CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0);
        };
        CVImageElement.prototype.destroy = function() {
          this.img = null;
        };
        function CVSolidElement(data2, globalData2, comp2) {
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
        CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
        CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
        CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc);
          this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
        };
        function CanvasRendererBase() {
        }
        extendPrototype([BaseRenderer], CanvasRendererBase);
        CanvasRendererBase.prototype.createShape = function(data2) {
          return new CVShapeElement(data2, this.globalData, this);
        };
        CanvasRendererBase.prototype.createText = function(data2) {
          return new CVTextElement(data2, this.globalData, this);
        };
        CanvasRendererBase.prototype.createImage = function(data2) {
          return new CVImageElement(data2, this.globalData, this);
        };
        CanvasRendererBase.prototype.createSolid = function(data2) {
          return new CVSolidElement(data2, this.globalData, this);
        };
        CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
        CanvasRendererBase.prototype.ctxTransform = function(props) {
          if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
            return;
          }
          this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
        };
        CanvasRendererBase.prototype.ctxOpacity = function(op) {
          this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
        };
        CanvasRendererBase.prototype.ctxFillStyle = function(value2) {
          this.canvasContext.fillStyle = value2;
        };
        CanvasRendererBase.prototype.ctxStrokeStyle = function(value2) {
          this.canvasContext.strokeStyle = value2;
        };
        CanvasRendererBase.prototype.ctxLineWidth = function(value2) {
          this.canvasContext.lineWidth = value2;
        };
        CanvasRendererBase.prototype.ctxLineCap = function(value2) {
          this.canvasContext.lineCap = value2;
        };
        CanvasRendererBase.prototype.ctxLineJoin = function(value2) {
          this.canvasContext.lineJoin = value2;
        };
        CanvasRendererBase.prototype.ctxMiterLimit = function(value2) {
          this.canvasContext.miterLimit = value2;
        };
        CanvasRendererBase.prototype.ctxFill = function(rule) {
          this.canvasContext.fill(rule);
        };
        CanvasRendererBase.prototype.ctxFillRect = function(x, y, w, h) {
          this.canvasContext.fillRect(x, y, w, h);
        };
        CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke();
        };
        CanvasRendererBase.prototype.reset = function() {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          this.contextData.reset();
        };
        CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save();
        };
        CanvasRendererBase.prototype.restore = function(actionFlag) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          if (actionFlag) {
            this.globalData.blendMode = "source-over";
          }
          this.contextData.restore(actionFlag);
        };
        CanvasRendererBase.prototype.configAnimation = function(animData) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var containerStyle = this.animationItem.container.style;
            containerStyle.width = "100%";
            containerStyle.height = "100%";
            var origin = "0px 0px 0px";
            containerStyle.transformOrigin = origin;
            containerStyle.mozTransformOrigin = origin;
            containerStyle.webkitTransformOrigin = origin;
            containerStyle["-webkit-transform"] = origin;
            containerStyle.contentVisibility = this.renderConfig.contentVisibility;
            this.animationItem.wrapper.appendChild(this.animationItem.container);
            this.canvasContext = this.animationItem.container.getContext("2d");
            if (this.renderConfig.className) {
              this.animationItem.container.setAttribute("class", this.renderConfig.className);
            }
            if (this.renderConfig.id) {
              this.animationItem.container.setAttribute("id", this.renderConfig.id);
            }
          } else {
            this.canvasContext = this.renderConfig.context;
          }
          this.contextData.setContext(this.canvasContext);
          this.data = animData;
          this.layers = animData.layers;
          this.transformCanvas = {
            w: animData.w,
            h: animData.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          };
          this.setupGlobalData(animData, document.body);
          this.globalData.canvasContext = this.canvasContext;
          this.globalData.renderer = this;
          this.globalData.isDashed = false;
          this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
          this.globalData.transformCanvas = this.transformCanvas;
          this.elements = createSizedArray(animData.layers.length);
          this.updateContainerSize();
        };
        CanvasRendererBase.prototype.updateContainerSize = function(width2, height2) {
          this.reset();
          var elementWidth;
          var elementHeight;
          if (width2) {
            elementWidth = width2;
            elementHeight = height2;
            this.canvasContext.canvas.width = elementWidth;
            this.canvasContext.canvas.height = elementHeight;
          } else {
            if (this.animationItem.wrapper && this.animationItem.container) {
              elementWidth = this.animationItem.wrapper.offsetWidth;
              elementHeight = this.animationItem.wrapper.offsetHeight;
            } else {
              elementWidth = this.canvasContext.canvas.width;
              elementHeight = this.canvasContext.canvas.height;
            }
            this.canvasContext.canvas.width = elementWidth * this.renderConfig.dpr;
            this.canvasContext.canvas.height = elementHeight * this.renderConfig.dpr;
          }
          var elementRel;
          var animationRel;
          if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
            var par = this.renderConfig.preserveAspectRatio.split(" ");
            var fillType = par[1] || "meet";
            var pos = par[0] || "xMidYMid";
            var xPos = pos.substr(0, 4);
            var yPos = pos.substr(4);
            elementRel = elementWidth / elementHeight;
            animationRel = this.transformCanvas.w / this.transformCanvas.h;
            if (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice") {
              this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
              this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
            } else {
              this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
              this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
            }
            if (xPos === "xMid" && (animationRel < elementRel && fillType === "meet" || animationRel > elementRel && fillType === "slice")) {
              this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
            } else if (xPos === "xMax" && (animationRel < elementRel && fillType === "meet" || animationRel > elementRel && fillType === "slice")) {
              this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
            } else {
              this.transformCanvas.tx = 0;
            }
            if (yPos === "YMid" && (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice")) {
              this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
            } else if (yPos === "YMax" && (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice")) {
              this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) * this.renderConfig.dpr;
            } else {
              this.transformCanvas.ty = 0;
            }
          } else if (this.renderConfig.preserveAspectRatio === "none") {
            this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.tx = 0;
            this.transformCanvas.ty = 0;
          } else {
            this.transformCanvas.sx = this.renderConfig.dpr;
            this.transformCanvas.sy = this.renderConfig.dpr;
            this.transformCanvas.tx = 0;
            this.transformCanvas.ty = 0;
          }
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
          this.ctxTransform(this.transformCanvas.props);
          this.canvasContext.beginPath();
          this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
          this.canvasContext.closePath();
          this.canvasContext.clip();
          this.renderFrame(this.renderedFrame, true);
        };
        CanvasRendererBase.prototype.destroy = function() {
          if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
          }
          var i;
          var len = this.layers ? this.layers.length : 0;
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.elements[i] && this.elements[i].destroy) {
              this.elements[i].destroy();
            }
          }
          this.elements.length = 0;
          this.globalData.canvasContext = null;
          this.animationItem.container = null;
          this.destroyed = true;
        };
        CanvasRendererBase.prototype.renderFrame = function(num, forceRender) {
          if (this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender || this.destroyed || num === -1) {
            return;
          }
          this.renderedFrame = num;
          this.globalData.frameNum = num - this.animationItem._isFirstFrame;
          this.globalData.frameId += 1;
          this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
          this.globalData.projectInterface.currentFrame = num;
          var i;
          var len = this.layers.length;
          if (!this.completeLayers) {
            this.checkLayers(num);
          }
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].prepareFrame(num - this.layers[i].st);
            }
          }
          if (this.globalData._mdf) {
            if (this.renderConfig.clearCanvas === true) {
              this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
            } else {
              this.save();
            }
            for (i = len - 1; i >= 0; i -= 1) {
              if (this.completeLayers || this.elements[i]) {
                this.elements[i].renderFrame();
              }
            }
            if (this.renderConfig.clearCanvas !== true) {
              this.restore();
            }
          }
        };
        CanvasRendererBase.prototype.buildItem = function(pos) {
          var elements = this.elements;
          if (elements[pos] || this.layers[pos].ty === 99) {
            return;
          }
          var element = this.createItem(this.layers[pos], this, this.globalData);
          elements[pos] = element;
          element.initExpressions();
        };
        CanvasRendererBase.prototype.checkPendingElements = function() {
          while (this.pendingElements.length) {
            var element = this.pendingElements.pop();
            element.checkParenting();
          }
        };
        CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none";
        };
        CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block";
        };
        function CanvasContext() {
          this.opacity = -1;
          this.transform = createTypedArray("float32", 16);
          this.fillStyle = "";
          this.strokeStyle = "";
          this.lineWidth = "";
          this.lineCap = "";
          this.lineJoin = "";
          this.miterLimit = "";
          this.id = Math.random();
        }
        function CVContextData() {
          this.stack = [];
          this.cArrPos = 0;
          this.cTr = new Matrix();
          var i;
          var len = 15;
          for (i = 0; i < len; i += 1) {
            var canvasContext = new CanvasContext();
            this.stack[i] = canvasContext;
          }
          this._length = len;
          this.nativeContext = null;
          this.transformMat = new Matrix();
          this.currentOpacity = 1;
          this.currentFillStyle = "";
          this.appliedFillStyle = "";
          this.currentStrokeStyle = "";
          this.appliedStrokeStyle = "";
          this.currentLineWidth = "";
          this.appliedLineWidth = "";
          this.currentLineCap = "";
          this.appliedLineCap = "";
          this.currentLineJoin = "";
          this.appliedLineJoin = "";
          this.appliedMiterLimit = "";
          this.currentMiterLimit = "";
        }
        CVContextData.prototype.duplicate = function() {
          var newLength = this._length * 2;
          var i = 0;
          for (i = this._length; i < newLength; i += 1) {
            this.stack[i] = new CanvasContext();
          }
          this._length = newLength;
        };
        CVContextData.prototype.reset = function() {
          this.cArrPos = 0;
          this.cTr.reset();
          this.stack[this.cArrPos].opacity = 1;
        };
        CVContextData.prototype.restore = function(forceRestore) {
          this.cArrPos -= 1;
          var currentContext = this.stack[this.cArrPos];
          var transform2 = currentContext.transform;
          var i;
          var arr = this.cTr.props;
          for (i = 0; i < 16; i += 1) {
            arr[i] = transform2[i];
          }
          if (forceRestore) {
            this.nativeContext.restore();
            var prevStack = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = prevStack.fillStyle;
            this.appliedStrokeStyle = prevStack.strokeStyle;
            this.appliedLineWidth = prevStack.lineWidth;
            this.appliedLineCap = prevStack.lineCap;
            this.appliedLineJoin = prevStack.lineJoin;
            this.appliedMiterLimit = prevStack.miterLimit;
          }
          this.nativeContext.setTransform(transform2[0], transform2[1], transform2[4], transform2[5], transform2[12], transform2[13]);
          if (forceRestore || currentContext.opacity !== -1 && this.currentOpacity !== currentContext.opacity) {
            this.nativeContext.globalAlpha = currentContext.opacity;
            this.currentOpacity = currentContext.opacity;
          }
          this.currentFillStyle = currentContext.fillStyle;
          this.currentStrokeStyle = currentContext.strokeStyle;
          this.currentLineWidth = currentContext.lineWidth;
          this.currentLineCap = currentContext.lineCap;
          this.currentLineJoin = currentContext.lineJoin;
          this.currentMiterLimit = currentContext.miterLimit;
        };
        CVContextData.prototype.save = function(saveOnNativeFlag) {
          if (saveOnNativeFlag) {
            this.nativeContext.save();
          }
          var props = this.cTr.props;
          if (this._length <= this.cArrPos) {
            this.duplicate();
          }
          var currentStack = this.stack[this.cArrPos];
          var i;
          for (i = 0; i < 16; i += 1) {
            currentStack.transform[i] = props[i];
          }
          this.cArrPos += 1;
          var newStack = this.stack[this.cArrPos];
          newStack.opacity = currentStack.opacity;
          newStack.fillStyle = currentStack.fillStyle;
          newStack.strokeStyle = currentStack.strokeStyle;
          newStack.lineWidth = currentStack.lineWidth;
          newStack.lineCap = currentStack.lineCap;
          newStack.lineJoin = currentStack.lineJoin;
          newStack.miterLimit = currentStack.miterLimit;
        };
        CVContextData.prototype.setOpacity = function(value2) {
          this.stack[this.cArrPos].opacity = value2;
        };
        CVContextData.prototype.setContext = function(value2) {
          this.nativeContext = value2;
        };
        CVContextData.prototype.fillStyle = function(value2) {
          if (this.stack[this.cArrPos].fillStyle !== value2) {
            this.currentFillStyle = value2;
            this.stack[this.cArrPos].fillStyle = value2;
          }
        };
        CVContextData.prototype.strokeStyle = function(value2) {
          if (this.stack[this.cArrPos].strokeStyle !== value2) {
            this.currentStrokeStyle = value2;
            this.stack[this.cArrPos].strokeStyle = value2;
          }
        };
        CVContextData.prototype.lineWidth = function(value2) {
          if (this.stack[this.cArrPos].lineWidth !== value2) {
            this.currentLineWidth = value2;
            this.stack[this.cArrPos].lineWidth = value2;
          }
        };
        CVContextData.prototype.lineCap = function(value2) {
          if (this.stack[this.cArrPos].lineCap !== value2) {
            this.currentLineCap = value2;
            this.stack[this.cArrPos].lineCap = value2;
          }
        };
        CVContextData.prototype.lineJoin = function(value2) {
          if (this.stack[this.cArrPos].lineJoin !== value2) {
            this.currentLineJoin = value2;
            this.stack[this.cArrPos].lineJoin = value2;
          }
        };
        CVContextData.prototype.miterLimit = function(value2) {
          if (this.stack[this.cArrPos].miterLimit !== value2) {
            this.currentMiterLimit = value2;
            this.stack[this.cArrPos].miterLimit = value2;
          }
        };
        CVContextData.prototype.transform = function(props) {
          this.transformMat.cloneFromProps(props);
          var currentTransform = this.cTr;
          this.transformMat.multiply(currentTransform);
          currentTransform.cloneFromProps(this.transformMat.props);
          var trProps = currentTransform.props;
          this.nativeContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
        };
        CVContextData.prototype.opacity = function(op) {
          var currentOpacity = this.stack[this.cArrPos].opacity;
          currentOpacity *= op < 0 ? 0 : op;
          if (this.stack[this.cArrPos].opacity !== currentOpacity) {
            if (this.currentOpacity !== op) {
              this.nativeContext.globalAlpha = op;
              this.currentOpacity = op;
            }
            this.stack[this.cArrPos].opacity = currentOpacity;
          }
        };
        CVContextData.prototype.fill = function(rule) {
          if (this.appliedFillStyle !== this.currentFillStyle) {
            this.appliedFillStyle = this.currentFillStyle;
            this.nativeContext.fillStyle = this.appliedFillStyle;
          }
          this.nativeContext.fill(rule);
        };
        CVContextData.prototype.fillRect = function(x, y, w, h) {
          if (this.appliedFillStyle !== this.currentFillStyle) {
            this.appliedFillStyle = this.currentFillStyle;
            this.nativeContext.fillStyle = this.appliedFillStyle;
          }
          this.nativeContext.fillRect(x, y, w, h);
        };
        CVContextData.prototype.stroke = function() {
          if (this.appliedStrokeStyle !== this.currentStrokeStyle) {
            this.appliedStrokeStyle = this.currentStrokeStyle;
            this.nativeContext.strokeStyle = this.appliedStrokeStyle;
          }
          if (this.appliedLineWidth !== this.currentLineWidth) {
            this.appliedLineWidth = this.currentLineWidth;
            this.nativeContext.lineWidth = this.appliedLineWidth;
          }
          if (this.appliedLineCap !== this.currentLineCap) {
            this.appliedLineCap = this.currentLineCap;
            this.nativeContext.lineCap = this.appliedLineCap;
          }
          if (this.appliedLineJoin !== this.currentLineJoin) {
            this.appliedLineJoin = this.currentLineJoin;
            this.nativeContext.lineJoin = this.appliedLineJoin;
          }
          if (this.appliedMiterLimit !== this.currentMiterLimit) {
            this.appliedMiterLimit = this.currentMiterLimit;
            this.nativeContext.miterLimit = this.appliedMiterLimit;
          }
          this.nativeContext.stroke();
        };
        function CVCompElement(data2, globalData2, comp2) {
          this.completeLayers = false;
          this.layers = data2.layers;
          this.pendingElements = [];
          this.elements = createSizedArray(this.layers.length);
          this.initElement(data2, globalData2, comp2);
          this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
            _placeholder: true
          };
        }
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);
        CVCompElement.prototype.renderInnerContent = function() {
          var ctx = this.canvasContext;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(this.data.w, 0);
          ctx.lineTo(this.data.w, this.data.h);
          ctx.lineTo(0, this.data.h);
          ctx.lineTo(0, 0);
          ctx.clip();
          var i;
          var len = this.layers.length;
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].renderFrame();
            }
          }
        };
        CVCompElement.prototype.destroy = function() {
          var i;
          var len = this.layers.length;
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.elements[i]) {
              this.elements[i].destroy();
            }
          }
          this.layers = null;
          this.elements = null;
        };
        CVCompElement.prototype.createComp = function(data2) {
          return new CVCompElement(data2, this.globalData, this);
        };
        function CanvasRenderer(animationItem, config3) {
          this.animationItem = animationItem;
          this.renderConfig = {
            clearCanvas: config3 && config3.clearCanvas !== void 0 ? config3.clearCanvas : true,
            context: config3 && config3.context || null,
            progressiveLoad: config3 && config3.progressiveLoad || false,
            preserveAspectRatio: config3 && config3.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: config3 && config3.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: config3 && config3.contentVisibility || "visible",
            className: config3 && config3.className || "",
            id: config3 && config3.id || "",
            runExpressions: !config3 || config3.runExpressions === void 0 || config3.runExpressions
          };
          this.renderConfig.dpr = config3 && config3.dpr || 1;
          if (this.animationItem.wrapper) {
            this.renderConfig.dpr = config3 && config3.dpr || window.devicePixelRatio || 1;
          }
          this.renderedFrame = -1;
          this.globalData = {
            frameNum: -1,
            _mdf: false,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          };
          this.contextData = new CVContextData();
          this.elements = [];
          this.pendingElements = [];
          this.transformMat = new Matrix();
          this.completeLayers = false;
          this.rendererType = "canvas";
          if (this.renderConfig.clearCanvas) {
            this.ctxTransform = this.contextData.transform.bind(this.contextData);
            this.ctxOpacity = this.contextData.opacity.bind(this.contextData);
            this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData);
            this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData);
            this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData);
            this.ctxLineCap = this.contextData.lineCap.bind(this.contextData);
            this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData);
            this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData);
            this.ctxFill = this.contextData.fill.bind(this.contextData);
            this.ctxFillRect = this.contextData.fillRect.bind(this.contextData);
            this.ctxStroke = this.contextData.stroke.bind(this.contextData);
            this.save = this.contextData.save.bind(this.contextData);
          }
        }
        extendPrototype([CanvasRendererBase], CanvasRenderer);
        CanvasRenderer.prototype.createComp = function(data2) {
          return new CVCompElement(data2, this.globalData, this);
        };
        function HBaseElement() {
        }
        HBaseElement.prototype = {
          checkBlendMode: function checkBlendMode() {
          },
          initRendererElement: function initRendererElement() {
            this.baseElement = createTag(this.data.tg || "div");
            if (this.data.hasMask) {
              this.svgElement = createNS("svg");
              this.layerElement = createNS("g");
              this.maskedElement = this.layerElement;
              this.svgElement.appendChild(this.layerElement);
              this.baseElement.appendChild(this.svgElement);
            } else {
              this.layerElement = this.baseElement;
            }
            styleDiv(this.baseElement);
          },
          createContainerElements: function createContainerElements() {
            this.renderableEffectsManager = new CVEffects(this);
            this.transformedElement = this.baseElement;
            this.maskedElement = this.layerElement;
            if (this.data.ln) {
              this.layerElement.setAttribute("id", this.data.ln);
            }
            if (this.data.cl) {
              this.layerElement.setAttribute("class", this.data.cl);
            }
            if (this.data.bm !== 0) {
              this.setBlendMode();
            }
          },
          renderElement: function renderElement() {
            var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var matrixValue = this.finalTransform.mat.toCSS();
              transformedElementStyle.transform = matrixValue;
              transformedElementStyle.webkitTransform = matrixValue;
            }
            if (this.finalTransform._opMdf) {
              transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
            }
          },
          renderFrame: function renderFrame() {
            if (this.data.hd || this.hidden) {
              return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            if (this._isFirstFrame) {
              this._isFirstFrame = false;
            }
          },
          destroy: function destroy() {
            this.layerElement = null;
            this.transformedElement = null;
            if (this.matteElement) {
              this.matteElement = null;
            }
            if (this.maskManager) {
              this.maskManager.destroy();
              this.maskManager = null;
            }
          },
          createRenderableComponents: function createRenderableComponents() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
          },
          addEffects: function addEffects() {
          },
          setMatte: function setMatte() {
          }
        };
        HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
        HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
        HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
        function HSolidElement(data2, globalData2, comp2) {
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);
        HSolidElement.prototype.createContent = function() {
          var rect;
          if (this.data.hasMask) {
            rect = createNS("rect");
            rect.setAttribute("width", this.data.sw);
            rect.setAttribute("height", this.data.sh);
            rect.setAttribute("fill", this.data.sc);
            this.svgElement.setAttribute("width", this.data.sw);
            this.svgElement.setAttribute("height", this.data.sh);
          } else {
            rect = createTag("div");
            rect.style.width = this.data.sw + "px";
            rect.style.height = this.data.sh + "px";
            rect.style.backgroundColor = this.data.sc;
          }
          this.layerElement.appendChild(rect);
        };
        function HShapeElement(data2, globalData2, comp2) {
          this.shapes = [];
          this.shapesData = data2.shapes;
          this.stylesList = [];
          this.shapeModifiers = [];
          this.itemsData = [];
          this.processedElements = [];
          this.animatedContents = [];
          this.shapesContainer = createNS("g");
          this.initElement(data2, globalData2, comp2);
          this.prevViewData = [];
          this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          };
        }
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
        HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;
        HShapeElement.prototype.createContent = function() {
          var cont;
          this.baseElement.style.fontSize = 0;
          if (this.data.hasMask) {
            this.layerElement.appendChild(this.shapesContainer);
            cont = this.svgElement;
          } else {
            cont = createNS("svg");
            var size = this.comp.data ? this.comp.data : this.globalData.compSize;
            cont.setAttribute("width", size.w);
            cont.setAttribute("height", size.h);
            cont.appendChild(this.shapesContainer);
            this.layerElement.appendChild(cont);
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
          this.filterUniqueShapes();
          this.shapeCont = cont;
        };
        HShapeElement.prototype.getTransformedPoint = function(transformers, point) {
          var i;
          var len = transformers.length;
          for (i = 0; i < len; i += 1) {
            point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
          }
          return point;
        };
        HShapeElement.prototype.calculateShapeBoundingBox = function(item, boundingBox) {
          var shape = item.sh.v;
          var transformers = item.transformers;
          var i;
          var len = shape._length;
          var vPoint;
          var oPoint;
          var nextIPoint;
          var nextVPoint;
          if (len <= 1) {
            return;
          }
          for (i = 0; i < len - 1; i += 1) {
            vPoint = this.getTransformedPoint(transformers, shape.v[i]);
            oPoint = this.getTransformedPoint(transformers, shape.o[i]);
            nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
            nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
            this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
          }
          if (shape.c) {
            vPoint = this.getTransformedPoint(transformers, shape.v[i]);
            oPoint = this.getTransformedPoint(transformers, shape.o[i]);
            nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
            nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
            this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
          }
        };
        HShapeElement.prototype.checkBounds = function(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
          this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
          var bounds = this.shapeBoundingBox;
          boundingBox.x = bmMin(bounds.left, boundingBox.x);
          boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
          boundingBox.y = bmMin(bounds.top, boundingBox.y);
          boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
        };
        HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };
        HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        };
        HShapeElement.prototype.getBoundsOfCurve = function(p0, p1, p2, p3) {
          var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];
          for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {
            b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
            a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
            c = 3 * p1[i] - 3 * p0[i];
            b |= 0;
            a |= 0;
            c |= 0;
            if (a === 0 && b === 0) {
            } else if (a === 0) {
              t = -c / b;
              if (t > 0 && t < 1) {
                bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
              }
            } else {
              b2ac = b * b - 4 * c * a;
              if (b2ac >= 0) {
                t1 = (-b + bmSqrt(b2ac)) / (2 * a);
                if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
                t2 = (-b - bmSqrt(b2ac)) / (2 * a);
                if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
              }
            }
          }
          this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
          this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
          this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
          this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
        };
        HShapeElement.prototype.calculateF = function(t, p0, p1, p2, p3, i) {
          return bmPow(1 - t, 3) * p0[i] + 3 * bmPow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * bmPow(t, 2) * p2[i] + bmPow(t, 3) * p3[i];
        };
        HShapeElement.prototype.calculateBoundingBox = function(itemsData, boundingBox) {
          var i;
          var len = itemsData.length;
          for (i = 0; i < len; i += 1) {
            if (itemsData[i] && itemsData[i].sh) {
              this.calculateShapeBoundingBox(itemsData[i], boundingBox);
            } else if (itemsData[i] && itemsData[i].it) {
              this.calculateBoundingBox(itemsData[i].it, boundingBox);
            } else if (itemsData[i] && itemsData[i].style && itemsData[i].w) {
              this.expandStrokeBoundingBox(itemsData[i].w, boundingBox);
            }
          }
        };
        HShapeElement.prototype.expandStrokeBoundingBox = function(widthProperty, boundingBox) {
          var width2 = 0;
          if (widthProperty.keyframes) {
            for (var i = 0; i < widthProperty.keyframes.length; i += 1) {
              var kfw = widthProperty.keyframes[i].s;
              if (kfw > width2) {
                width2 = kfw;
              }
            }
            width2 *= widthProperty.mult;
          } else {
            width2 = widthProperty.v * widthProperty.mult;
          }
          boundingBox.x -= width2;
          boundingBox.xMax += width2;
          boundingBox.y -= width2;
          boundingBox.yMax += width2;
        };
        HShapeElement.prototype.currentBoxContains = function(box) {
          return this.currentBBox.x <= box.x && this.currentBBox.y <= box.y && this.currentBBox.width + this.currentBBox.x >= box.x + box.width && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
        };
        HShapeElement.prototype.renderInnerContent = function() {
          this._renderShapeFrame();
          if (!this.hidden && (this._isFirstFrame || this._mdf)) {
            var tempBoundingBox = this.tempBoundingBox;
            var max = 999999;
            tempBoundingBox.x = max;
            tempBoundingBox.xMax = -max;
            tempBoundingBox.y = max;
            tempBoundingBox.yMax = -max;
            this.calculateBoundingBox(this.itemsData, tempBoundingBox);
            tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
            tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
            if (this.currentBoxContains(tempBoundingBox)) {
              return;
            }
            var changed = false;
            if (this.currentBBox.w !== tempBoundingBox.width) {
              this.currentBBox.w = tempBoundingBox.width;
              this.shapeCont.setAttribute("width", tempBoundingBox.width);
              changed = true;
            }
            if (this.currentBBox.h !== tempBoundingBox.height) {
              this.currentBBox.h = tempBoundingBox.height;
              this.shapeCont.setAttribute("height", tempBoundingBox.height);
              changed = true;
            }
            if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
              this.currentBBox.w = tempBoundingBox.width;
              this.currentBBox.h = tempBoundingBox.height;
              this.currentBBox.x = tempBoundingBox.x;
              this.currentBBox.y = tempBoundingBox.y;
              this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var shapeStyle = this.shapeCont.style;
              var shapeTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              shapeStyle.transform = shapeTransform;
              shapeStyle.webkitTransform = shapeTransform;
            }
          }
        };
        function HTextElement(data2, globalData2, comp2) {
          this.textSpans = [];
          this.textPaths = [];
          this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          };
          this.renderType = "svg";
          this.isMasked = false;
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);
        HTextElement.prototype.createContent = function() {
          this.isMasked = this.checkMasks();
          if (this.isMasked) {
            this.renderType = "svg";
            this.compW = this.comp.data.w;
            this.compH = this.comp.data.h;
            this.svgElement.setAttribute("width", this.compW);
            this.svgElement.setAttribute("height", this.compH);
            var g = createNS("g");
            this.maskedElement.appendChild(g);
            this.innerElem = g;
          } else {
            this.renderType = "html";
            this.innerElem = this.layerElement;
          }
          this.checkParenting();
        };
        HTextElement.prototype.buildNewText = function() {
          var documentData = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
          var innerElemStyle = this.innerElem.style;
          var textColor = documentData.fc ? this.buildColor(documentData.fc) : "rgba(0,0,0,0)";
          innerElemStyle.fill = textColor;
          innerElemStyle.color = textColor;
          if (documentData.sc) {
            innerElemStyle.stroke = this.buildColor(documentData.sc);
            innerElemStyle.strokeWidth = documentData.sw + "px";
          }
          var fontData = this.globalData.fontManager.getFontByName(documentData.f);
          if (!this.globalData.fontManager.chars) {
            innerElemStyle.fontSize = documentData.finalSize + "px";
            innerElemStyle.lineHeight = documentData.finalSize + "px";
            if (fontData.fClass) {
              this.innerElem.className = fontData.fClass;
            } else {
              innerElemStyle.fontFamily = fontData.fFamily;
              var fWeight = documentData.fWeight;
              var fStyle = documentData.fStyle;
              innerElemStyle.fontStyle = fStyle;
              innerElemStyle.fontWeight = fWeight;
            }
          }
          var i;
          var len;
          var letters = documentData.l;
          len = letters.length;
          var tSpan;
          var tParent;
          var tCont;
          var matrixHelper = this.mHelper;
          var shapes;
          var shapeStr = "";
          var cnt = 0;
          for (i = 0; i < len; i += 1) {
            if (this.globalData.fontManager.chars) {
              if (!this.textPaths[cnt]) {
                tSpan = createNS("path");
                tSpan.setAttribute("stroke-linecap", lineCapEnum[1]);
                tSpan.setAttribute("stroke-linejoin", lineJoinEnum[2]);
                tSpan.setAttribute("stroke-miterlimit", "4");
              } else {
                tSpan = this.textPaths[cnt];
              }
              if (!this.isMasked) {
                if (this.textSpans[cnt]) {
                  tParent = this.textSpans[cnt];
                  tCont = tParent.children[0];
                } else {
                  tParent = createTag("div");
                  tParent.style.lineHeight = 0;
                  tCont = createNS("svg");
                  tCont.appendChild(tSpan);
                  styleDiv(tParent);
                }
              }
            } else if (!this.isMasked) {
              if (this.textSpans[cnt]) {
                tParent = this.textSpans[cnt];
                tSpan = this.textPaths[cnt];
              } else {
                tParent = createTag("span");
                styleDiv(tParent);
                tSpan = createTag("span");
                styleDiv(tSpan);
                tParent.appendChild(tSpan);
              }
            } else {
              tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS("text");
            }
            if (this.globalData.fontManager.chars) {
              var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
              var shapeData;
              if (charData) {
                shapeData = charData.data;
              } else {
                shapeData = null;
              }
              matrixHelper.reset();
              if (shapeData && shapeData.shapes && shapeData.shapes.length) {
                shapes = shapeData.shapes[0].it;
                matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
                shapeStr = this.createPathShape(matrixHelper, shapes);
                tSpan.setAttribute("d", shapeStr);
              }
              if (!this.isMasked) {
                this.innerElem.appendChild(tParent);
                if (shapeData && shapeData.shapes) {
                  document.body.appendChild(tCont);
                  var boundingBox = tCont.getBBox();
                  tCont.setAttribute("width", boundingBox.width + 2);
                  tCont.setAttribute("height", boundingBox.height + 2);
                  tCont.setAttribute("viewBox", boundingBox.x - 1 + " " + (boundingBox.y - 1) + " " + (boundingBox.width + 2) + " " + (boundingBox.height + 2));
                  var tContStyle = tCont.style;
                  var tContTranslation = "translate(" + (boundingBox.x - 1) + "px," + (boundingBox.y - 1) + "px)";
                  tContStyle.transform = tContTranslation;
                  tContStyle.webkitTransform = tContTranslation;
                  letters[i].yOffset = boundingBox.y - 1;
                } else {
                  tCont.setAttribute("width", 1);
                  tCont.setAttribute("height", 1);
                }
                tParent.appendChild(tCont);
              } else {
                this.innerElem.appendChild(tSpan);
              }
            } else {
              tSpan.textContent = letters[i].val;
              tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
              if (!this.isMasked) {
                this.innerElem.appendChild(tParent);
                var tStyle = tSpan.style;
                var tSpanTranslation = "translate3d(0," + -documentData.finalSize / 1.2 + "px,0)";
                tStyle.transform = tSpanTranslation;
                tStyle.webkitTransform = tSpanTranslation;
              } else {
                this.innerElem.appendChild(tSpan);
              }
            }
            if (!this.isMasked) {
              this.textSpans[cnt] = tParent;
            } else {
              this.textSpans[cnt] = tSpan;
            }
            this.textSpans[cnt].style.display = "block";
            this.textPaths[cnt] = tSpan;
            cnt += 1;
          }
          while (cnt < this.textSpans.length) {
            this.textSpans[cnt].style.display = "none";
            cnt += 1;
          }
        };
        HTextElement.prototype.renderInnerContent = function() {
          this.validateText();
          var svgStyle;
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) {
              return;
            }
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
              svgStyle = this.svgElement.style;
              var translation = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              svgStyle.transform = translation;
              svgStyle.webkitTransform = translation;
            }
          }
          this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
            return;
          }
          var i;
          var len;
          var count = 0;
          var renderedLetters = this.textAnimator.renderedLetters;
          var letters = this.textProperty.currentData.l;
          len = letters.length;
          var renderedLetter;
          var textSpan;
          var textPath;
          for (i = 0; i < len; i += 1) {
            if (letters[i].n) {
              count += 1;
            } else {
              textSpan = this.textSpans[i];
              textPath = this.textPaths[i];
              renderedLetter = renderedLetters[count];
              count += 1;
              if (renderedLetter._mdf.m) {
                if (!this.isMasked) {
                  textSpan.style.webkitTransform = renderedLetter.m;
                  textSpan.style.transform = renderedLetter.m;
                } else {
                  textSpan.setAttribute("transform", renderedLetter.m);
                }
              }
              textSpan.style.opacity = renderedLetter.o;
              if (renderedLetter.sw && renderedLetter._mdf.sw) {
                textPath.setAttribute("stroke-width", renderedLetter.sw);
              }
              if (renderedLetter.sc && renderedLetter._mdf.sc) {
                textPath.setAttribute("stroke", renderedLetter.sc);
              }
              if (renderedLetter.fc && renderedLetter._mdf.fc) {
                textPath.setAttribute("fill", renderedLetter.fc);
                textPath.style.color = renderedLetter.fc;
              }
            }
          }
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var boundingBox = this.innerElem.getBBox();
            if (this.currentBBox.w !== boundingBox.width) {
              this.currentBBox.w = boundingBox.width;
              this.svgElement.setAttribute("width", boundingBox.width);
            }
            if (this.currentBBox.h !== boundingBox.height) {
              this.currentBBox.h = boundingBox.height;
              this.svgElement.setAttribute("height", boundingBox.height);
            }
            var margin = 1;
            if (this.currentBBox.w !== boundingBox.width + margin * 2 || this.currentBBox.h !== boundingBox.height + margin * 2 || this.currentBBox.x !== boundingBox.x - margin || this.currentBBox.y !== boundingBox.y - margin) {
              this.currentBBox.w = boundingBox.width + margin * 2;
              this.currentBBox.h = boundingBox.height + margin * 2;
              this.currentBBox.x = boundingBox.x - margin;
              this.currentBBox.y = boundingBox.y - margin;
              this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              svgStyle = this.svgElement.style;
              var svgTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              svgStyle.transform = svgTransform;
              svgStyle.webkitTransform = svgTransform;
            }
          }
        };
        function HCameraElement(data2, globalData2, comp2) {
          this.initFrame();
          this.initBaseData(data2, globalData2, comp2);
          this.initHierarchy();
          var getProp = PropertyFactory.getProp;
          this.pe = getProp(this, data2.pe, 0, 0, this);
          if (data2.ks.p.s) {
            this.px = getProp(this, data2.ks.p.x, 1, 0, this);
            this.py = getProp(this, data2.ks.p.y, 1, 0, this);
            this.pz = getProp(this, data2.ks.p.z, 1, 0, this);
          } else {
            this.p = getProp(this, data2.ks.p, 1, 0, this);
          }
          if (data2.ks.a) {
            this.a = getProp(this, data2.ks.a, 1, 0, this);
          }
          if (data2.ks.or.k.length && data2.ks.or.k[0].to) {
            var i;
            var len = data2.ks.or.k.length;
            for (i = 0; i < len; i += 1) {
              data2.ks.or.k[i].to = null;
              data2.ks.or.k[i].ti = null;
            }
          }
          this.or = getProp(this, data2.ks.or, 1, degToRads, this);
          this.or.sh = true;
          this.rx = getProp(this, data2.ks.rx, 0, degToRads, this);
          this.ry = getProp(this, data2.ks.ry, 0, degToRads, this);
          this.rz = getProp(this, data2.ks.rz, 0, degToRads, this);
          this.mat = new Matrix();
          this._prevMat = new Matrix();
          this._isFirstFrame = true;
          this.finalTransform = {
            mProp: this
          };
        }
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);
        HCameraElement.prototype.setup = function() {
          var i;
          var len = this.comp.threeDElements.length;
          var comp2;
          var perspectiveStyle;
          var containerStyle;
          for (i = 0; i < len; i += 1) {
            comp2 = this.comp.threeDElements[i];
            if (comp2.type === "3d") {
              perspectiveStyle = comp2.perspectiveElem.style;
              containerStyle = comp2.container.style;
              var perspective = this.pe.v + "px";
              var origin = "0px 0px 0px";
              var matrix = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              perspectiveStyle.perspective = perspective;
              perspectiveStyle.webkitPerspective = perspective;
              containerStyle.transformOrigin = origin;
              containerStyle.mozTransformOrigin = origin;
              containerStyle.webkitTransformOrigin = origin;
              perspectiveStyle.transform = matrix;
              perspectiveStyle.webkitTransform = matrix;
            }
          }
        };
        HCameraElement.prototype.createElements = function() {
        };
        HCameraElement.prototype.hide = function() {
        };
        HCameraElement.prototype.renderFrame = function() {
          var _mdf = this._isFirstFrame;
          var i;
          var len;
          if (this.hierarchy) {
            len = this.hierarchy.length;
            for (i = 0; i < len; i += 1) {
              _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
            }
          }
          if (_mdf || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            this.mat.reset();
            if (this.hierarchy) {
              len = this.hierarchy.length - 1;
              for (i = len; i >= 0; i -= 1) {
                var mTransf = this.hierarchy[i].finalTransform.mProp;
                this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
                this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
                this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
                this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
                this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
              }
            }
            if (this.p) {
              this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
            } else {
              this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
            }
            if (this.a) {
              var diffVector;
              if (this.p) {
                diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
              } else {
                diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              }
              var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2));
              var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
              var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
              var mRotationX = Math.atan2(lookDir[1], lookLengthOnXZ);
              var mRotationY = Math.atan2(lookDir[0], -lookDir[2]);
              this.mat.rotateY(mRotationY).rotateX(-mRotationX);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
            this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
            this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
            this.mat.translate(0, 0, this.pe.v);
            var hasMatrixChanged = !this._prevMat.equals(this.mat);
            if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
              len = this.comp.threeDElements.length;
              var comp2;
              var perspectiveStyle;
              var containerStyle;
              for (i = 0; i < len; i += 1) {
                comp2 = this.comp.threeDElements[i];
                if (comp2.type === "3d") {
                  if (hasMatrixChanged) {
                    var matValue = this.mat.toCSS();
                    containerStyle = comp2.container.style;
                    containerStyle.transform = matValue;
                    containerStyle.webkitTransform = matValue;
                  }
                  if (this.pe._mdf) {
                    perspectiveStyle = comp2.perspectiveElem.style;
                    perspectiveStyle.perspective = this.pe.v + "px";
                    perspectiveStyle.webkitPerspective = this.pe.v + "px";
                  }
                }
              }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = false;
        };
        HCameraElement.prototype.prepareFrame = function(num) {
          this.prepareProperties(num, true);
        };
        HCameraElement.prototype.destroy = function() {
        };
        HCameraElement.prototype.getBaseElement = function() {
          return null;
        };
        function HImageElement(data2, globalData2, comp2) {
          this.assetData = globalData2.getAssetData(data2.refId);
          this.initElement(data2, globalData2, comp2);
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);
        HImageElement.prototype.createContent = function() {
          var assetPath = this.globalData.getAssetsPath(this.assetData);
          var img = new Image();
          if (this.data.hasMask) {
            this.imageElem = createNS("image");
            this.imageElem.setAttribute("width", this.assetData.w + "px");
            this.imageElem.setAttribute("height", this.assetData.h + "px");
            this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath);
            this.layerElement.appendChild(this.imageElem);
            this.baseElement.setAttribute("width", this.assetData.w);
            this.baseElement.setAttribute("height", this.assetData.h);
          } else {
            this.layerElement.appendChild(img);
          }
          img.crossOrigin = "anonymous";
          img.src = assetPath;
          if (this.data.ln) {
            this.baseElement.setAttribute("id", this.data.ln);
          }
        };
        function HybridRendererBase(animationItem, config3) {
          this.animationItem = animationItem;
          this.layers = null;
          this.renderedFrame = -1;
          this.renderConfig = {
            className: config3 && config3.className || "",
            imagePreserveAspectRatio: config3 && config3.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(config3 && config3.hideOnTransparent === false),
            filterSize: {
              width: config3 && config3.filterSize && config3.filterSize.width || "400%",
              height: config3 && config3.filterSize && config3.filterSize.height || "400%",
              x: config3 && config3.filterSize && config3.filterSize.x || "-100%",
              y: config3 && config3.filterSize && config3.filterSize.y || "-100%"
            }
          };
          this.globalData = {
            _mdf: false,
            frameNum: -1,
            renderConfig: this.renderConfig
          };
          this.pendingElements = [];
          this.elements = [];
          this.threeDElements = [];
          this.destroyed = false;
          this.camera = null;
          this.supports3d = true;
          this.rendererType = "html";
        }
        extendPrototype([BaseRenderer], HybridRendererBase);
        HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;
        HybridRendererBase.prototype.checkPendingElements = function() {
          while (this.pendingElements.length) {
            var element = this.pendingElements.pop();
            element.checkParenting();
          }
        };
        HybridRendererBase.prototype.appendElementInPos = function(element, pos) {
          var newDOMElement = element.getBaseElement();
          if (!newDOMElement) {
            return;
          }
          var layer = this.layers[pos];
          if (!layer.ddd || !this.supports3d) {
            if (this.threeDElements) {
              this.addTo3dContainer(newDOMElement, pos);
            } else {
              var i = 0;
              var nextDOMElement;
              var nextLayer;
              var tmpDOMElement;
              while (i < pos) {
                if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
                  nextLayer = this.elements[i];
                  tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
                  nextDOMElement = tmpDOMElement || nextDOMElement;
                }
                i += 1;
              }
              if (nextDOMElement) {
                if (!layer.ddd || !this.supports3d) {
                  this.layerElement.insertBefore(newDOMElement, nextDOMElement);
                }
              } else if (!layer.ddd || !this.supports3d) {
                this.layerElement.appendChild(newDOMElement);
              }
            }
          } else {
            this.addTo3dContainer(newDOMElement, pos);
          }
        };
        HybridRendererBase.prototype.createShape = function(data2) {
          if (!this.supports3d) {
            return new SVGShapeElement(data2, this.globalData, this);
          }
          return new HShapeElement(data2, this.globalData, this);
        };
        HybridRendererBase.prototype.createText = function(data2) {
          if (!this.supports3d) {
            return new SVGTextLottieElement(data2, this.globalData, this);
          }
          return new HTextElement(data2, this.globalData, this);
        };
        HybridRendererBase.prototype.createCamera = function(data2) {
          this.camera = new HCameraElement(data2, this.globalData, this);
          return this.camera;
        };
        HybridRendererBase.prototype.createImage = function(data2) {
          if (!this.supports3d) {
            return new IImageElement(data2, this.globalData, this);
          }
          return new HImageElement(data2, this.globalData, this);
        };
        HybridRendererBase.prototype.createSolid = function(data2) {
          if (!this.supports3d) {
            return new ISolidElement(data2, this.globalData, this);
          }
          return new HSolidElement(data2, this.globalData, this);
        };
        HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
        HybridRendererBase.prototype.getThreeDContainerByPos = function(pos) {
          var i = 0;
          var len = this.threeDElements.length;
          while (i < len) {
            if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
              return this.threeDElements[i].perspectiveElem;
            }
            i += 1;
          }
          return null;
        };
        HybridRendererBase.prototype.createThreeDContainer = function(pos, type) {
          var perspectiveElem = createTag("div");
          var style;
          var containerStyle;
          styleDiv(perspectiveElem);
          var container = createTag("div");
          styleDiv(container);
          if (type === "3d") {
            style = perspectiveElem.style;
            style.width = this.globalData.compSize.w + "px";
            style.height = this.globalData.compSize.h + "px";
            var center = "50% 50%";
            style.webkitTransformOrigin = center;
            style.mozTransformOrigin = center;
            style.transformOrigin = center;
            containerStyle = container.style;
            var matrix = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            containerStyle.transform = matrix;
            containerStyle.webkitTransform = matrix;
          }
          perspectiveElem.appendChild(container);
          var threeDContainerData = {
            container,
            perspectiveElem,
            startPos: pos,
            endPos: pos,
            type
          };
          this.threeDElements.push(threeDContainerData);
          return threeDContainerData;
        };
        HybridRendererBase.prototype.build3dContainers = function() {
          var i;
          var len = this.layers.length;
          var lastThreeDContainerData;
          var currentContainer = "";
          for (i = 0; i < len; i += 1) {
            if (this.layers[i].ddd && this.layers[i].ty !== 3) {
              if (currentContainer !== "3d") {
                currentContainer = "3d";
                lastThreeDContainerData = this.createThreeDContainer(i, "3d");
              }
              lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
            } else {
              if (currentContainer !== "2d") {
                currentContainer = "2d";
                lastThreeDContainerData = this.createThreeDContainer(i, "2d");
              }
              lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
            }
          }
          len = this.threeDElements.length;
          for (i = len - 1; i >= 0; i -= 1) {
            this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
          }
        };
        HybridRendererBase.prototype.addTo3dContainer = function(elem2, pos) {
          var i = 0;
          var len = this.threeDElements.length;
          while (i < len) {
            if (pos <= this.threeDElements[i].endPos) {
              var j = this.threeDElements[i].startPos;
              var nextElement;
              while (j < pos) {
                if (this.elements[j] && this.elements[j].getBaseElement) {
                  nextElement = this.elements[j].getBaseElement();
                }
                j += 1;
              }
              if (nextElement) {
                this.threeDElements[i].container.insertBefore(elem2, nextElement);
              } else {
                this.threeDElements[i].container.appendChild(elem2);
              }
              break;
            }
            i += 1;
          }
        };
        HybridRendererBase.prototype.configAnimation = function(animData) {
          var resizerElem = createTag("div");
          var wrapper = this.animationItem.wrapper;
          var style = resizerElem.style;
          style.width = animData.w + "px";
          style.height = animData.h + "px";
          this.resizerElem = resizerElem;
          styleDiv(resizerElem);
          style.transformStyle = "flat";
          style.mozTransformStyle = "flat";
          style.webkitTransformStyle = "flat";
          if (this.renderConfig.className) {
            resizerElem.setAttribute("class", this.renderConfig.className);
          }
          wrapper.appendChild(resizerElem);
          style.overflow = "hidden";
          var svg = createNS("svg");
          svg.setAttribute("width", "1");
          svg.setAttribute("height", "1");
          styleDiv(svg);
          this.resizerElem.appendChild(svg);
          var defs = createNS("defs");
          svg.appendChild(defs);
          this.data = animData;
          this.setupGlobalData(animData, svg);
          this.globalData.defs = defs;
          this.layers = animData.layers;
          this.layerElement = this.resizerElem;
          this.build3dContainers();
          this.updateContainerSize();
        };
        HybridRendererBase.prototype.destroy = function() {
          if (this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
          }
          this.animationItem.container = null;
          this.globalData.defs = null;
          var i;
          var len = this.layers ? this.layers.length : 0;
          for (i = 0; i < len; i += 1) {
            if (this.elements[i] && this.elements[i].destroy) {
              this.elements[i].destroy();
            }
          }
          this.elements.length = 0;
          this.destroyed = true;
          this.animationItem = null;
        };
        HybridRendererBase.prototype.updateContainerSize = function() {
          var elementWidth = this.animationItem.wrapper.offsetWidth;
          var elementHeight = this.animationItem.wrapper.offsetHeight;
          var elementRel = elementWidth / elementHeight;
          var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
          var sx;
          var sy;
          var tx;
          var ty;
          if (animationRel > elementRel) {
            sx = elementWidth / this.globalData.compSize.w;
            sy = elementWidth / this.globalData.compSize.w;
            tx = 0;
            ty = (elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2;
          } else {
            sx = elementHeight / this.globalData.compSize.h;
            sy = elementHeight / this.globalData.compSize.h;
            tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
            ty = 0;
          }
          var style = this.resizerElem.style;
          style.webkitTransform = "matrix3d(" + sx + ",0,0,0,0," + sy + ",0,0,0,0,1,0," + tx + "," + ty + ",0,1)";
          style.transform = style.webkitTransform;
        };
        HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;
        HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none";
        };
        HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block";
        };
        HybridRendererBase.prototype.initItems = function() {
          this.buildAllItems();
          if (this.camera) {
            this.camera.setup();
          } else {
            var cWidth = this.globalData.compSize.w;
            var cHeight = this.globalData.compSize.h;
            var i;
            var len = this.threeDElements.length;
            for (i = 0; i < len; i += 1) {
              var style = this.threeDElements[i].perspectiveElem.style;
              style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + "px";
              style.perspective = style.webkitPerspective;
            }
          }
        };
        HybridRendererBase.prototype.searchExtraCompositions = function(assets) {
          var i;
          var len = assets.length;
          var floatingContainer = createTag("div");
          for (i = 0; i < len; i += 1) {
            if (assets[i].xt) {
              var comp2 = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
              comp2.initExpressions();
              this.globalData.projectInterface.registerComposition(comp2);
            }
          }
        };
        function HCompElement(data2, globalData2, comp2) {
          this.layers = data2.layers;
          this.supports3d = !data2.hasMask;
          this.completeLayers = false;
          this.pendingElements = [];
          this.elements = this.layers ? createSizedArray(this.layers.length) : [];
          this.initElement(data2, globalData2, comp2);
          this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
            _placeholder: true
          };
        }
        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
        HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;
        HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements();
          if (this.data.hasMask) {
            this.svgElement.setAttribute("width", this.data.w);
            this.svgElement.setAttribute("height", this.data.h);
            this.transformedElement = this.baseElement;
          } else {
            this.transformedElement = this.layerElement;
          }
        };
        HCompElement.prototype.addTo3dContainer = function(elem2, pos) {
          var j = 0;
          var nextElement;
          while (j < pos) {
            if (this.elements[j] && this.elements[j].getBaseElement) {
              nextElement = this.elements[j].getBaseElement();
            }
            j += 1;
          }
          if (nextElement) {
            this.layerElement.insertBefore(elem2, nextElement);
          } else {
            this.layerElement.appendChild(elem2);
          }
        };
        HCompElement.prototype.createComp = function(data2) {
          if (!this.supports3d) {
            return new SVGCompElement(data2, this.globalData, this);
          }
          return new HCompElement(data2, this.globalData, this);
        };
        function HybridRenderer(animationItem, config3) {
          this.animationItem = animationItem;
          this.layers = null;
          this.renderedFrame = -1;
          this.renderConfig = {
            className: config3 && config3.className || "",
            imagePreserveAspectRatio: config3 && config3.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(config3 && config3.hideOnTransparent === false),
            filterSize: {
              width: config3 && config3.filterSize && config3.filterSize.width || "400%",
              height: config3 && config3.filterSize && config3.filterSize.height || "400%",
              x: config3 && config3.filterSize && config3.filterSize.x || "-100%",
              y: config3 && config3.filterSize && config3.filterSize.y || "-100%"
            },
            runExpressions: !config3 || config3.runExpressions === void 0 || config3.runExpressions
          };
          this.globalData = {
            _mdf: false,
            frameNum: -1,
            renderConfig: this.renderConfig
          };
          this.pendingElements = [];
          this.elements = [];
          this.threeDElements = [];
          this.destroyed = false;
          this.camera = null;
          this.supports3d = true;
          this.rendererType = "html";
        }
        extendPrototype([HybridRendererBase], HybridRenderer);
        HybridRenderer.prototype.createComp = function(data2) {
          if (!this.supports3d) {
            return new SVGCompElement(data2, this.globalData, this);
          }
          return new HCompElement(data2, this.globalData, this);
        };
        var CompExpressionInterface = /* @__PURE__ */ function() {
          return function(comp2) {
            function _thisLayerFunction(name2) {
              var i = 0;
              var len = comp2.layers.length;
              while (i < len) {
                if (comp2.layers[i].nm === name2 || comp2.layers[i].ind === name2) {
                  return comp2.elements[i].layerInterface;
                }
                i += 1;
              }
              return null;
            }
            Object.defineProperty(_thisLayerFunction, "_name", {
              value: comp2.data.nm
            });
            _thisLayerFunction.layer = _thisLayerFunction;
            _thisLayerFunction.pixelAspect = 1;
            _thisLayerFunction.height = comp2.data.h || comp2.globalData.compSize.h;
            _thisLayerFunction.width = comp2.data.w || comp2.globalData.compSize.w;
            _thisLayerFunction.pixelAspect = 1;
            _thisLayerFunction.frameDuration = 1 / comp2.globalData.frameRate;
            _thisLayerFunction.displayStartTime = 0;
            _thisLayerFunction.numLayers = comp2.layers.length;
            return _thisLayerFunction;
          };
        }();
        function _typeof$2(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$2 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$2 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$2(obj);
        }
        function seedRandom(pool, math) {
          var global = this, width2 = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width2, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask2 = width2 - 1, nodecrypto;
          function seedrandom(seed, options, callback) {
            var key2 = [];
            options = options === true ? {
              entropy: true
            } : options || {};
            var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed === null ? autoseed() : seed, 3), key2);
            var arc4 = new ARC4(key2);
            var prng = function prng2() {
              var n = arc4.g(chunks), d = startdenom, x = 0;
              while (n < significance) {
                n = (n + x) * width2;
                d *= width2;
                x = arc4.g(1);
              }
              while (n >= overflow) {
                n /= 2;
                d /= 2;
                x >>>= 1;
              }
              return (n + x) / d;
            };
            prng.int32 = function() {
              return arc4.g(4) | 0;
            };
            prng.quick = function() {
              return arc4.g(4) / 4294967296;
            };
            prng["double"] = prng;
            mixkey(tostring(arc4.S), pool);
            return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
              if (state) {
                if (state.S) {
                  copy(state, arc4);
                }
                prng2.state = function() {
                  return copy(arc4, {});
                };
              }
              if (is_math_call) {
                math[rngname] = prng2;
                return seed2;
              } else return prng2;
            })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
          }
          math["seed" + rngname] = seedrandom;
          function ARC4(key2) {
            var t, keylen = key2.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
            if (!keylen) {
              key2 = [keylen++];
            }
            while (i < width2) {
              s[i] = i++;
            }
            for (i = 0; i < width2; i++) {
              s[i] = s[j = mask2 & j + key2[i % keylen] + (t = s[i])];
              s[j] = t;
            }
            me.g = function(count) {
              var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
              while (count--) {
                t2 = s2[i2 = mask2 & i2 + 1];
                r = r * width2 + s2[mask2 & (s2[i2] = s2[j2 = mask2 & j2 + t2]) + (s2[j2] = t2)];
              }
              me.i = i2;
              me.j = j2;
              return r;
            };
          }
          function copy(f, t) {
            t.i = f.i;
            t.j = f.j;
            t.S = f.S.slice();
            return t;
          }
          function flatten(obj, depth) {
            var result = [], typ = _typeof$2(obj), prop;
            if (depth && typ == "object") {
              for (prop in obj) {
                try {
                  result.push(flatten(obj[prop], depth - 1));
                } catch (e) {
                }
              }
            }
            return result.length ? result : typ == "string" ? obj : obj + "\0";
          }
          function mixkey(seed, key2) {
            var stringseed = seed + "", smear, j = 0;
            while (j < stringseed.length) {
              key2[mask2 & j] = mask2 & (smear ^= key2[mask2 & j] * 19) + stringseed.charCodeAt(j++);
            }
            return tostring(key2);
          }
          function autoseed() {
            try {
              if (nodecrypto) {
                return tostring(nodecrypto.randomBytes(width2));
              }
              var out = new Uint8Array(width2);
              (global.crypto || global.msCrypto).getRandomValues(out);
              return tostring(out);
            } catch (e) {
              var browser = global.navigator, plugins = browser && browser.plugins;
              return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
            }
          }
          function tostring(a) {
            return String.fromCharCode.apply(0, a);
          }
          mixkey(math.random(), pool);
        }
        ;
        function initialize$2(BMMath2) {
          seedRandom([], BMMath2);
        }
        var propTypes = {
          SHAPE: "shape"
        };
        function _typeof$1(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$1 = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof$1 = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof$1(obj);
        }
        var ExpressionManager = function() {
          "use strict";
          var ob = {};
          var Math = BMMath;
          var window = null;
          var document = null;
          var XMLHttpRequest = null;
          var fetch = null;
          var frames = null;
          var _lottieGlobal = {};
          initialize$2(BMMath);
          function resetFrame() {
            _lottieGlobal = {};
          }
          function $bm_isInstanceOfArray(arr) {
            return arr.constructor === Array || arr.constructor === Float32Array;
          }
          function isNumerable(tOfV, v) {
            return tOfV === "number" || v instanceof Number || tOfV === "boolean" || tOfV === "string";
          }
          function $bm_neg(a) {
            var tOfA = _typeof$1(a);
            if (tOfA === "number" || a instanceof Number || tOfA === "boolean") {
              return -a;
            }
            if ($bm_isInstanceOfArray(a)) {
              var i;
              var lenA = a.length;
              var retArr = [];
              for (i = 0; i < lenA; i += 1) {
                retArr[i] = -a[i];
              }
              return retArr;
            }
            if (a.propType) {
              return a.v;
            }
            return -a;
          }
          var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get;
          var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get;
          var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
          function sum(a, b) {
            var tOfA = _typeof$1(a);
            var tOfB = _typeof$1(b);
            if (isNumerable(tOfA, a) && isNumerable(tOfB, b) || tOfA === "string" || tOfB === "string") {
              return a + b;
            }
            if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
              a = a.slice(0);
              a[0] += b;
              return a;
            }
            if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
              b = b.slice(0);
              b[0] = a + b[0];
              return b;
            }
            if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
              var i = 0;
              var lenA = a.length;
              var lenB = b.length;
              var retArr = [];
              while (i < lenA || i < lenB) {
                if ((typeof a[i] === "number" || a[i] instanceof Number) && (typeof b[i] === "number" || b[i] instanceof Number)) {
                  retArr[i] = a[i] + b[i];
                } else {
                  retArr[i] = b[i] === void 0 ? a[i] : a[i] || b[i];
                }
                i += 1;
              }
              return retArr;
            }
            return 0;
          }
          var add = sum;
          function sub(a, b) {
            var tOfA = _typeof$1(a);
            var tOfB = _typeof$1(b);
            if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
              if (tOfA === "string") {
                a = parseInt(a, 10);
              }
              if (tOfB === "string") {
                b = parseInt(b, 10);
              }
              return a - b;
            }
            if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
              a = a.slice(0);
              a[0] -= b;
              return a;
            }
            if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
              b = b.slice(0);
              b[0] = a - b[0];
              return b;
            }
            if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
              var i = 0;
              var lenA = a.length;
              var lenB = b.length;
              var retArr = [];
              while (i < lenA || i < lenB) {
                if ((typeof a[i] === "number" || a[i] instanceof Number) && (typeof b[i] === "number" || b[i] instanceof Number)) {
                  retArr[i] = a[i] - b[i];
                } else {
                  retArr[i] = b[i] === void 0 ? a[i] : a[i] || b[i];
                }
                i += 1;
              }
              return retArr;
            }
            return 0;
          }
          function mul(a, b) {
            var tOfA = _typeof$1(a);
            var tOfB = _typeof$1(b);
            var arr;
            if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
              return a * b;
            }
            var i;
            var len;
            if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
              len = a.length;
              arr = createTypedArray("float32", len);
              for (i = 0; i < len; i += 1) {
                arr[i] = a[i] * b;
              }
              return arr;
            }
            if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
              len = b.length;
              arr = createTypedArray("float32", len);
              for (i = 0; i < len; i += 1) {
                arr[i] = a * b[i];
              }
              return arr;
            }
            return 0;
          }
          function div(a, b) {
            var tOfA = _typeof$1(a);
            var tOfB = _typeof$1(b);
            var arr;
            if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
              return a / b;
            }
            var i;
            var len;
            if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
              len = a.length;
              arr = createTypedArray("float32", len);
              for (i = 0; i < len; i += 1) {
                arr[i] = a[i] / b;
              }
              return arr;
            }
            if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
              len = b.length;
              arr = createTypedArray("float32", len);
              for (i = 0; i < len; i += 1) {
                arr[i] = a / b[i];
              }
              return arr;
            }
            return 0;
          }
          function mod(a, b) {
            if (typeof a === "string") {
              a = parseInt(a, 10);
            }
            if (typeof b === "string") {
              b = parseInt(b, 10);
            }
            return a % b;
          }
          var $bm_sum = sum;
          var $bm_sub = sub;
          var $bm_mul = mul;
          var $bm_div = div;
          var $bm_mod = mod;
          function clamp(num, min, max) {
            if (min > max) {
              var mm = max;
              max = min;
              min = mm;
            }
            return Math.min(Math.max(num, min), max);
          }
          function radiansToDegrees(val2) {
            return val2 / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(val2) {
            return val2 * degToRads;
          }
          var degrees_to_radians = radiansToDegrees;
          var helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(arr1, arr2) {
            if (typeof arr1 === "number" || arr1 instanceof Number) {
              arr2 = arr2 || 0;
              return Math.abs(arr1 - arr2);
            }
            if (!arr2) {
              arr2 = helperLengthArray;
            }
            var i;
            var len = Math.min(arr1.length, arr2.length);
            var addedLength = 0;
            for (i = 0; i < len; i += 1) {
              addedLength += Math.pow(arr2[i] - arr1[i], 2);
            }
            return Math.sqrt(addedLength);
          }
          function normalize(vec) {
            return div(vec, length(vec));
          }
          function rgbToHsl(val2) {
            var r = val2[0];
            var g = val2[1];
            var b = val2[2];
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var h;
            var s;
            var l = (max + min) / 2;
            if (max === min) {
              h = 0;
              s = 0;
            } else {
              var d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
                case g:
                  h = (b - r) / d + 2;
                  break;
                case b:
                  h = (r - g) / d + 4;
                  break;
                default:
                  break;
              }
              h /= 6;
            }
            return [h, s, l, val2[3]];
          }
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }
          function hslToRgb(val2) {
            var h = val2[0];
            var s = val2[1];
            var l = val2[2];
            var r;
            var g;
            var b;
            if (s === 0) {
              r = l;
              b = l;
              g = l;
            } else {
              var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
              var p = 2 * l - q;
              r = hue2rgb(p, q, h + 1 / 3);
              g = hue2rgb(p, q, h);
              b = hue2rgb(p, q, h - 1 / 3);
            }
            return [r, g, b, val2[3]];
          }
          function linear(t, tMin, tMax, value1, value2) {
            if (value1 === void 0 || value2 === void 0) {
              value1 = tMin;
              value2 = tMax;
              tMin = 0;
              tMax = 1;
            }
            if (tMax < tMin) {
              var _tMin = tMax;
              tMax = tMin;
              tMin = _tMin;
            }
            if (t <= tMin) {
              return value1;
            }
            if (t >= tMax) {
              return value2;
            }
            var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);
            if (!value1.length) {
              return value1 + (value2 - value1) * perc;
            }
            var i;
            var len = value1.length;
            var arr = createTypedArray("float32", len);
            for (i = 0; i < len; i += 1) {
              arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
            }
            return arr;
          }
          function random(min, max) {
            if (max === void 0) {
              if (min === void 0) {
                min = 0;
                max = 1;
              } else {
                max = min;
                min = void 0;
              }
            }
            if (max.length) {
              var i;
              var len = max.length;
              if (!min) {
                min = createTypedArray("float32", len);
              }
              var arr = createTypedArray("float32", len);
              var rnd = BMMath.random();
              for (i = 0; i < len; i += 1) {
                arr[i] = min[i] + rnd * (max[i] - min[i]);
              }
              return arr;
            }
            if (min === void 0) {
              min = 0;
            }
            var rndm = BMMath.random();
            return min + rndm * (max - min);
          }
          function createPath(points, inTangents, outTangents, closed) {
            var i;
            var len = points.length;
            var path = shapePool.newElement();
            path.setPathData(!!closed, len);
            var arrPlaceholder = [0, 0];
            var inVertexPoint;
            var outVertexPoint;
            for (i = 0; i < len; i += 1) {
              inVertexPoint = inTangents && inTangents[i] ? inTangents[i] : arrPlaceholder;
              outVertexPoint = outTangents && outTangents[i] ? outTangents[i] : arrPlaceholder;
              path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
            }
            return path;
          }
          function initiateExpression(elem, data, property) {
            function noOp(_value) {
              return _value;
            }
            if (!elem.globalData.renderConfig.runExpressions) {
              return noOp;
            }
            var val = data.x;
            var needsVelocity = /velocity(?![\w\d])/.test(val);
            var _needsRandom = val.indexOf("random") !== -1;
            var elemType = elem.data.ty;
            var transform;
            var $bm_transform;
            var content;
            var effect;
            var thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime;
            Object.defineProperty(thisProperty, "value", {
              get: function get() {
                return thisProperty.v;
              }
            });
            elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
            elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
            var outPoint = elem.data.op / elem.comp.globalData.frameRate;
            var width = elem.data.sw ? elem.data.sw : 0;
            var height = elem.data.sh ? elem.data.sh : 0;
            var name = elem.data.nm;
            var loopIn;
            var loop_in;
            var loopOut;
            var loop_out;
            var smooth;
            var toWorld;
            var fromWorld;
            var fromComp;
            var toComp;
            var fromCompToSurface;
            var position;
            var rotation;
            var anchorPoint;
            var scale;
            var thisLayer;
            var thisComp;
            var mask;
            var valueAtTime;
            var velocityAtTime;
            var scoped_bm_rt;
            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0];
            var numKeys = property.kf ? data.k.length : 0;
            var active = !this.data || this.data.hd !== true;
            var wiggle = function wiggle2(freq, amp) {
              var iWiggle;
              var j;
              var lenWiggle = this.pv.length ? this.pv.length : 1;
              var addedAmps = createTypedArray("float32", lenWiggle);
              freq = 5;
              var iterations = Math.floor(time * freq);
              iWiggle = 0;
              j = 0;
              while (iWiggle < iterations) {
                for (j = 0; j < lenWiggle; j += 1) {
                  addedAmps[j] += -amp + amp * 2 * BMMath.random();
                }
                iWiggle += 1;
              }
              var periods = time * freq;
              var perc = periods - Math.floor(periods);
              var arr = createTypedArray("float32", lenWiggle);
              if (lenWiggle > 1) {
                for (j = 0; j < lenWiggle; j += 1) {
                  arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc;
                }
                return arr;
              }
              return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
            }.bind(this);
            if (thisProperty.loopIn) {
              loopIn = thisProperty.loopIn.bind(thisProperty);
              loop_in = loopIn;
            }
            if (thisProperty.loopOut) {
              loopOut = thisProperty.loopOut.bind(thisProperty);
              loop_out = loopOut;
            }
            if (thisProperty.smooth) {
              smooth = thisProperty.smooth.bind(thisProperty);
            }
            function loopInDuration(type, duration) {
              return loopIn(type, duration, true);
            }
            function loopOutDuration(type, duration) {
              return loopOut(type, duration, true);
            }
            if (this.getValueAtTime) {
              valueAtTime = this.getValueAtTime.bind(this);
            }
            if (this.getVelocityAtTime) {
              velocityAtTime = this.getVelocityAtTime.bind(this);
            }
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
            function lookAt(elem1, elem2) {
              var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
              var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
              var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
              return [yaw, pitch, 0];
            }
            function easeOut(t, tMin, tMax, val1, val2) {
              return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
            }
            function easeIn(t, tMin, tMax, val1, val2) {
              return applyEase(easeInBez, t, tMin, tMax, val1, val2);
            }
            function ease(t, tMin, tMax, val1, val2) {
              return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
            }
            function applyEase(fn, t, tMin, tMax, val1, val2) {
              if (val1 === void 0) {
                val1 = tMin;
                val2 = tMax;
              } else {
                t = (t - tMin) / (tMax - tMin);
              }
              if (t > 1) {
                t = 1;
              } else if (t < 0) {
                t = 0;
              }
              var mult = fn(t);
              if ($bm_isInstanceOfArray(val1)) {
                var iKey;
                var lenKey = val1.length;
                var arr = createTypedArray("float32", lenKey);
                for (iKey = 0; iKey < lenKey; iKey += 1) {
                  arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
                }
                return arr;
              }
              return (val2 - val1) * mult + val1;
            }
            function nearestKey(time2) {
              var iKey;
              var lenKey = data.k.length;
              var index2;
              var keyTime;
              if (!data.k.length || typeof data.k[0] === "number") {
                index2 = 0;
                keyTime = 0;
              } else {
                index2 = -1;
                time2 *= elem.comp.globalData.frameRate;
                if (time2 < data.k[0].t) {
                  index2 = 1;
                  keyTime = data.k[0].t;
                } else {
                  for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
                    if (time2 === data.k[iKey].t) {
                      index2 = iKey + 1;
                      keyTime = data.k[iKey].t;
                      break;
                    } else if (time2 > data.k[iKey].t && time2 < data.k[iKey + 1].t) {
                      if (time2 - data.k[iKey].t > data.k[iKey + 1].t - time2) {
                        index2 = iKey + 2;
                        keyTime = data.k[iKey + 1].t;
                      } else {
                        index2 = iKey + 1;
                        keyTime = data.k[iKey].t;
                      }
                      break;
                    }
                  }
                  if (index2 === -1) {
                    index2 = iKey + 1;
                    keyTime = data.k[iKey].t;
                  }
                }
              }
              var obKey = {};
              obKey.index = index2;
              obKey.time = keyTime / elem.comp.globalData.frameRate;
              return obKey;
            }
            function key(ind) {
              var obKey;
              var iKey;
              var lenKey;
              if (!data.k.length || typeof data.k[0] === "number") {
                throw new Error("The property has no keyframe at index " + ind);
              }
              ind -= 1;
              obKey = {
                time: data.k[ind].t / elem.comp.globalData.frameRate,
                value: []
              };
              var arr = Object.prototype.hasOwnProperty.call(data.k[ind], "s") ? data.k[ind].s : data.k[ind - 1].e;
              lenKey = arr.length;
              for (iKey = 0; iKey < lenKey; iKey += 1) {
                obKey[iKey] = arr[iKey];
                obKey.value[iKey] = arr[iKey];
              }
              return obKey;
            }
            function framesToTime(fr, fps) {
              if (!fps) {
                fps = elem.comp.globalData.frameRate;
              }
              return fr / fps;
            }
            function timeToFrames(t, fps) {
              if (!t && t !== 0) {
                t = time;
              }
              if (!fps) {
                fps = elem.comp.globalData.frameRate;
              }
              return t * fps;
            }
            function seedRandom(seed) {
              BMMath.seedrandom(randSeed + seed);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(init4, end) {
              if (typeof value === "string") {
                if (end === void 0) {
                  return value.substring(init4);
                }
                return value.substring(init4, end);
              }
              return "";
            }
            function substr(init4, end) {
              if (typeof value === "string") {
                if (end === void 0) {
                  return value.substr(init4);
                }
                return value.substr(init4, end);
              }
              return "";
            }
            function posterizeTime(framesPerSecond) {
              time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
              value = valueAtTime(time);
            }
            var time;
            var velocity;
            var value;
            var text;
            var textIndex;
            var textTotal;
            var selectorValue;
            var index = elem.data.ind;
            var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            var parent;
            var randSeed = Math.floor(Math.random() * 1e6);
            var globalData = elem.globalData;
            function executeExpression(_value) {
              value = _value;
              if (this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector") {
                return value;
              }
              if (this.propType === "textSelector") {
                textIndex = this.textIndex;
                textTotal = this.textTotal;
                selectorValue = this.selectorValue;
              }
              if (!thisLayer) {
                text = elem.layerInterface.text;
                thisLayer = elem.layerInterface;
                thisComp = elem.comp.compInterface;
                toWorld = thisLayer.toWorld.bind(thisLayer);
                fromWorld = thisLayer.fromWorld.bind(thisLayer);
                fromComp = thisLayer.fromComp.bind(thisLayer);
                toComp = thisLayer.toComp.bind(thisLayer);
                mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
                fromCompToSurface = fromComp;
              }
              if (!transform) {
                transform = elem.layerInterface("ADBE Transform Group");
                $bm_transform = transform;
                if (transform) {
                  anchorPoint = transform.anchorPoint;
                }
              }
              if (elemType === 4 && !content) {
                content = thisLayer("ADBE Root Vectors Group");
              }
              if (!effect) {
                effect = thisLayer(4);
              }
              hasParent = !!(elem.hierarchy && elem.hierarchy.length);
              if (hasParent && !parent) {
                parent = elem.hierarchy[0].layerInterface;
              }
              time = this.comp.renderedFrame / this.comp.globalData.frameRate;
              if (_needsRandom) {
                seedRandom(randSeed + time);
              }
              if (needsVelocity) {
                velocity = velocityAtTime(time);
              }
              expression_function();
              this.frameExpressionId = elem.globalData.frameId;
              scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
              return scoped_bm_rt;
            }
            executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
            return executeExpression;
          }
          ob.initiateExpression = initiateExpression;
          ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal];
          ob.resetFrame = resetFrame;
          return ob;
        }();
        var Expressions = function() {
          var ob2 = {};
          ob2.initExpressions = initExpressions;
          ob2.resetFrame = ExpressionManager.resetFrame;
          function initExpressions(animation) {
            var stackCount = 0;
            var registers = [];
            function pushExpression() {
              stackCount += 1;
            }
            function popExpression() {
              stackCount -= 1;
              if (stackCount === 0) {
                releaseInstances();
              }
            }
            function registerExpressionProperty(expression) {
              if (registers.indexOf(expression) === -1) {
                registers.push(expression);
              }
            }
            function releaseInstances() {
              var i;
              var len = registers.length;
              for (i = 0; i < len; i += 1) {
                registers[i].release();
              }
              registers.length = 0;
            }
            animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
            animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
            animation.renderer.globalData.pushExpression = pushExpression;
            animation.renderer.globalData.popExpression = popExpression;
            animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
          }
          return ob2;
        }();
        var MaskManagerInterface = function() {
          function MaskInterface(mask2, data2) {
            this._mask = mask2;
            this._data = data2;
          }
          Object.defineProperty(MaskInterface.prototype, "maskPath", {
            get: function get() {
              if (this._mask.prop.k) {
                this._mask.prop.getValue();
              }
              return this._mask.prop;
            }
          });
          Object.defineProperty(MaskInterface.prototype, "maskOpacity", {
            get: function get() {
              if (this._mask.op.k) {
                this._mask.op.getValue();
              }
              return this._mask.op.v * 100;
            }
          });
          var MaskManager = function MaskManager2(maskManager) {
            var _masksInterfaces = createSizedArray(maskManager.viewData.length);
            var i;
            var len = maskManager.viewData.length;
            for (i = 0; i < len; i += 1) {
              _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
            }
            var maskFunction = function maskFunction2(name2) {
              i = 0;
              while (i < len) {
                if (maskManager.masksProperties[i].nm === name2) {
                  return _masksInterfaces[i];
                }
                i += 1;
              }
              return null;
            };
            return maskFunction;
          };
          return MaskManager;
        }();
        var ExpressionPropertyInterface = /* @__PURE__ */ function() {
          var defaultUnidimensionalValue = {
            pv: 0,
            v: 0,
            mult: 1
          };
          var defaultMultidimensionalValue = {
            pv: [0, 0, 0],
            v: [0, 0, 0],
            mult: 1
          };
          function completeProperty(expressionValue, property2, type) {
            Object.defineProperty(expressionValue, "velocity", {
              get: function get() {
                return property2.getVelocityAtTime(property2.comp.currentFrame);
              }
            });
            expressionValue.numKeys = property2.keyframes ? property2.keyframes.length : 0;
            expressionValue.key = function(pos) {
              if (!expressionValue.numKeys) {
                return 0;
              }
              var value2 = "";
              if ("s" in property2.keyframes[pos - 1]) {
                value2 = property2.keyframes[pos - 1].s;
              } else if ("e" in property2.keyframes[pos - 2]) {
                value2 = property2.keyframes[pos - 2].e;
              } else {
                value2 = property2.keyframes[pos - 2].s;
              }
              var valueProp = type === "unidimensional" ? new Number(value2) : Object.assign({}, value2);
              valueProp.time = property2.keyframes[pos - 1].t / property2.elem.comp.globalData.frameRate;
              valueProp.value = type === "unidimensional" ? value2[0] : value2;
              return valueProp;
            };
            expressionValue.valueAtTime = property2.getValueAtTime;
            expressionValue.speedAtTime = property2.getSpeedAtTime;
            expressionValue.velocityAtTime = property2.getVelocityAtTime;
            expressionValue.propertyGroup = property2.propertyGroup;
          }
          function UnidimensionalPropertyInterface(property2) {
            if (!property2 || !("pv" in property2)) {
              property2 = defaultUnidimensionalValue;
            }
            var mult = 1 / property2.mult;
            var val2 = property2.pv * mult;
            var expressionValue = new Number(val2);
            expressionValue.value = val2;
            completeProperty(expressionValue, property2, "unidimensional");
            return function() {
              if (property2.k) {
                property2.getValue();
              }
              val2 = property2.v * mult;
              if (expressionValue.value !== val2) {
                expressionValue = new Number(val2);
                expressionValue.value = val2;
                completeProperty(expressionValue, property2, "unidimensional");
              }
              return expressionValue;
            };
          }
          function MultidimensionalPropertyInterface(property2) {
            if (!property2 || !("pv" in property2)) {
              property2 = defaultMultidimensionalValue;
            }
            var mult = 1 / property2.mult;
            var len = property2.data && property2.data.l || property2.pv.length;
            var expressionValue = createTypedArray("float32", len);
            var arrValue = createTypedArray("float32", len);
            expressionValue.value = arrValue;
            completeProperty(expressionValue, property2, "multidimensional");
            return function() {
              if (property2.k) {
                property2.getValue();
              }
              for (var i = 0; i < len; i += 1) {
                arrValue[i] = property2.v[i] * mult;
                expressionValue[i] = arrValue[i];
              }
              return expressionValue;
            };
          }
          function defaultGetter() {
            return defaultUnidimensionalValue;
          }
          return function(property2) {
            if (!property2) {
              return defaultGetter;
            }
            if (property2.propType === "unidimensional") {
              return UnidimensionalPropertyInterface(property2);
            }
            return MultidimensionalPropertyInterface(property2);
          };
        }();
        var TransformExpressionInterface = /* @__PURE__ */ function() {
          return function(transform2) {
            function _thisFunction(name2) {
              switch (name2) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return _thisFunction.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return _thisFunction.rotation;
                case "ADBE Rotate X":
                  return _thisFunction.xRotation;
                case "ADBE Rotate Y":
                  return _thisFunction.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return _thisFunction.position;
                case "ADBE Position_0":
                  return _thisFunction.xPosition;
                case "ADBE Position_1":
                  return _thisFunction.yPosition;
                case "ADBE Position_2":
                  return _thisFunction.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return _thisFunction.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return _thisFunction.opacity;
                default:
                  return null;
              }
            }
            Object.defineProperty(_thisFunction, "rotation", {
              get: ExpressionPropertyInterface(transform2.r || transform2.rz)
            });
            Object.defineProperty(_thisFunction, "zRotation", {
              get: ExpressionPropertyInterface(transform2.rz || transform2.r)
            });
            Object.defineProperty(_thisFunction, "xRotation", {
              get: ExpressionPropertyInterface(transform2.rx)
            });
            Object.defineProperty(_thisFunction, "yRotation", {
              get: ExpressionPropertyInterface(transform2.ry)
            });
            Object.defineProperty(_thisFunction, "scale", {
              get: ExpressionPropertyInterface(transform2.s)
            });
            var _px2;
            var _py;
            var _pz;
            var _transformFactory;
            if (transform2.p) {
              _transformFactory = ExpressionPropertyInterface(transform2.p);
            } else {
              _px2 = ExpressionPropertyInterface(transform2.px);
              _py = ExpressionPropertyInterface(transform2.py);
              if (transform2.pz) {
                _pz = ExpressionPropertyInterface(transform2.pz);
              }
            }
            Object.defineProperty(_thisFunction, "position", {
              get: function get() {
                if (transform2.p) {
                  return _transformFactory();
                }
                return [_px2(), _py(), _pz ? _pz() : 0];
              }
            });
            Object.defineProperty(_thisFunction, "xPosition", {
              get: ExpressionPropertyInterface(transform2.px)
            });
            Object.defineProperty(_thisFunction, "yPosition", {
              get: ExpressionPropertyInterface(transform2.py)
            });
            Object.defineProperty(_thisFunction, "zPosition", {
              get: ExpressionPropertyInterface(transform2.pz)
            });
            Object.defineProperty(_thisFunction, "anchorPoint", {
              get: ExpressionPropertyInterface(transform2.a)
            });
            Object.defineProperty(_thisFunction, "opacity", {
              get: ExpressionPropertyInterface(transform2.o)
            });
            Object.defineProperty(_thisFunction, "skew", {
              get: ExpressionPropertyInterface(transform2.sk)
            });
            Object.defineProperty(_thisFunction, "skewAxis", {
              get: ExpressionPropertyInterface(transform2.sa)
            });
            Object.defineProperty(_thisFunction, "orientation", {
              get: ExpressionPropertyInterface(transform2.or)
            });
            return _thisFunction;
          };
        }();
        var LayerExpressionInterface = /* @__PURE__ */ function() {
          function getMatrix(time2) {
            var toWorldMat = new Matrix();
            if (time2 !== void 0) {
              var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time2);
              propMatrix.clone(toWorldMat);
            } else {
              var transformMat = this._elem.finalTransform.mProp;
              transformMat.applyToMatrix(toWorldMat);
            }
            return toWorldMat;
          }
          function toWorldVec(arr, time2) {
            var toWorldMat = this.getMatrix(time2);
            toWorldMat.props[12] = 0;
            toWorldMat.props[13] = 0;
            toWorldMat.props[14] = 0;
            return this.applyPoint(toWorldMat, arr);
          }
          function toWorld2(arr, time2) {
            var toWorldMat = this.getMatrix(time2);
            return this.applyPoint(toWorldMat, arr);
          }
          function fromWorldVec(arr, time2) {
            var toWorldMat = this.getMatrix(time2);
            toWorldMat.props[12] = 0;
            toWorldMat.props[13] = 0;
            toWorldMat.props[14] = 0;
            return this.invertPoint(toWorldMat, arr);
          }
          function fromWorld2(arr, time2) {
            var toWorldMat = this.getMatrix(time2);
            return this.invertPoint(toWorldMat, arr);
          }
          function applyPoint(matrix, arr) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var i;
              var len = this._elem.hierarchy.length;
              for (i = 0; i < len; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
              }
            }
            return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
          }
          function invertPoint(matrix, arr) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var i;
              var len = this._elem.hierarchy.length;
              for (i = 0; i < len; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
              }
            }
            return matrix.inversePoint(arr);
          }
          function fromComp2(arr) {
            var toWorldMat = new Matrix();
            toWorldMat.reset();
            this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var i;
              var len = this._elem.hierarchy.length;
              for (i = 0; i < len; i += 1) {
                this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
              }
              return toWorldMat.inversePoint(arr);
            }
            return toWorldMat.inversePoint(arr);
          }
          function sampleImage() {
            return [1, 1, 1, 1];
          }
          return function(elem2) {
            var transformInterface;
            function _registerMaskInterface(maskManager) {
              _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem2);
            }
            function _registerEffectsInterface(effects) {
              _thisLayerFunction.effect = effects;
            }
            function _thisLayerFunction(name2) {
              switch (name2) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return _thisLayerFunction.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return transformInterface;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return _thisLayerFunction.effect;
                case "ADBE Text Properties":
                  return _thisLayerFunction.textInterface;
                default:
                  return null;
              }
            }
            _thisLayerFunction.getMatrix = getMatrix;
            _thisLayerFunction.invertPoint = invertPoint;
            _thisLayerFunction.applyPoint = applyPoint;
            _thisLayerFunction.toWorld = toWorld2;
            _thisLayerFunction.toWorldVec = toWorldVec;
            _thisLayerFunction.fromWorld = fromWorld2;
            _thisLayerFunction.fromWorldVec = fromWorldVec;
            _thisLayerFunction.toComp = toWorld2;
            _thisLayerFunction.fromComp = fromComp2;
            _thisLayerFunction.sampleImage = sampleImage;
            _thisLayerFunction.sourceRectAtTime = elem2.sourceRectAtTime.bind(elem2);
            _thisLayerFunction._elem = elem2;
            transformInterface = TransformExpressionInterface(elem2.finalTransform.mProp);
            var anchorPointDescriptor = getDescriptor(transformInterface, "anchorPoint");
            Object.defineProperties(_thisLayerFunction, {
              hasParent: {
                get: function get() {
                  return elem2.hierarchy.length;
                }
              },
              parent: {
                get: function get() {
                  return elem2.hierarchy[0].layerInterface;
                }
              },
              rotation: getDescriptor(transformInterface, "rotation"),
              scale: getDescriptor(transformInterface, "scale"),
              position: getDescriptor(transformInterface, "position"),
              opacity: getDescriptor(transformInterface, "opacity"),
              anchorPoint: anchorPointDescriptor,
              anchor_point: anchorPointDescriptor,
              transform: {
                get: function get() {
                  return transformInterface;
                }
              },
              active: {
                get: function get() {
                  return elem2.isInRange;
                }
              }
            });
            _thisLayerFunction.startTime = elem2.data.st;
            _thisLayerFunction.index = elem2.data.ind;
            _thisLayerFunction.source = elem2.data.refId;
            _thisLayerFunction.height = elem2.data.ty === 0 ? elem2.data.h : 100;
            _thisLayerFunction.width = elem2.data.ty === 0 ? elem2.data.w : 100;
            _thisLayerFunction.inPoint = elem2.data.ip / elem2.comp.globalData.frameRate;
            _thisLayerFunction.outPoint = elem2.data.op / elem2.comp.globalData.frameRate;
            _thisLayerFunction._name = elem2.data.nm;
            _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
            _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
            return _thisLayerFunction;
          };
        }();
        var propertyGroupFactory = /* @__PURE__ */ function() {
          return function(interfaceFunction, parentPropertyGroup) {
            return function(val2) {
              val2 = val2 === void 0 ? 1 : val2;
              if (val2 <= 0) {
                return interfaceFunction;
              }
              return parentPropertyGroup(val2 - 1);
            };
          };
        }();
        var PropertyInterface = /* @__PURE__ */ function() {
          return function(propertyName, propertyGroup) {
            var interfaceFunction = {
              _name: propertyName
            };
            function _propertyGroup(val2) {
              val2 = val2 === void 0 ? 1 : val2;
              if (val2 <= 0) {
                return interfaceFunction;
              }
              return propertyGroup(val2 - 1);
            }
            return _propertyGroup;
          };
        }();
        var EffectsExpressionInterface = /* @__PURE__ */ function() {
          var ob2 = {
            createEffectsInterface
          };
          function createEffectsInterface(elem2, propertyGroup) {
            if (elem2.effectsManager) {
              var effectElements = [];
              var effectsData = elem2.data.ef;
              var i;
              var len = elem2.effectsManager.effectElements.length;
              for (i = 0; i < len; i += 1) {
                effectElements.push(createGroupInterface(effectsData[i], elem2.effectsManager.effectElements[i], propertyGroup, elem2));
              }
              var effects = elem2.data.ef || [];
              var groupInterface = function groupInterface2(name2) {
                i = 0;
                len = effects.length;
                while (i < len) {
                  if (name2 === effects[i].nm || name2 === effects[i].mn || name2 === effects[i].ix) {
                    return effectElements[i];
                  }
                  i += 1;
                }
                return null;
              };
              Object.defineProperty(groupInterface, "numProperties", {
                get: function get() {
                  return effects.length;
                }
              });
              return groupInterface;
            }
            return null;
          }
          function createGroupInterface(data2, elements, propertyGroup, elem2) {
            function groupInterface(name2) {
              var effects = data2.ef;
              var i2 = 0;
              var len2 = effects.length;
              while (i2 < len2) {
                if (name2 === effects[i2].nm || name2 === effects[i2].mn || name2 === effects[i2].ix) {
                  if (effects[i2].ty === 5) {
                    return effectElements[i2];
                  }
                  return effectElements[i2]();
                }
                i2 += 1;
              }
              throw new Error();
            }
            var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);
            var effectElements = [];
            var i;
            var len = data2.ef.length;
            for (i = 0; i < len; i += 1) {
              if (data2.ef[i].ty === 5) {
                effectElements.push(createGroupInterface(data2.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem2));
              } else {
                effectElements.push(createValueInterface(elements.effectElements[i], data2.ef[i].ty, elem2, _propertyGroup));
              }
            }
            if (data2.mn === "ADBE Color Control") {
              Object.defineProperty(groupInterface, "color", {
                get: function get() {
                  return effectElements[0]();
                }
              });
            }
            Object.defineProperties(groupInterface, {
              numProperties: {
                get: function get() {
                  return data2.np;
                }
              },
              _name: {
                value: data2.nm
              },
              propertyGroup: {
                value: _propertyGroup
              }
            });
            groupInterface.enabled = data2.en !== 0;
            groupInterface.active = groupInterface.enabled;
            return groupInterface;
          }
          function createValueInterface(element, type, elem2, propertyGroup) {
            var expressionProperty = ExpressionPropertyInterface(element.p);
            function interfaceFunction() {
              if (type === 10) {
                return elem2.comp.compInterface(element.p.v);
              }
              return expressionProperty();
            }
            if (element.p.setGroupProperty) {
              element.p.setGroupProperty(PropertyInterface("", propertyGroup));
            }
            return interfaceFunction;
          }
          return ob2;
        }();
        var ShapePathInterface = /* @__PURE__ */ function() {
          return function pathInterfaceFactory(shape, view, propertyGroup) {
            var prop = view.sh;
            function interfaceFunction(val2) {
              if (val2 === "Shape" || val2 === "shape" || val2 === "Path" || val2 === "path" || val2 === "ADBE Vector Shape" || val2 === 2) {
                return interfaceFunction.path;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            prop.setGroupProperty(PropertyInterface("Path", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              path: {
                get: function get() {
                  if (prop.k) {
                    prop.getValue();
                  }
                  return prop;
                }
              },
              shape: {
                get: function get() {
                  if (prop.k) {
                    prop.getValue();
                  }
                  return prop;
                }
              },
              _name: {
                value: shape.nm
              },
              ix: {
                value: shape.ix
              },
              propertyIndex: {
                value: shape.ix
              },
              mn: {
                value: shape.mn
              },
              propertyGroup: {
                value: propertyGroup
              }
            });
            return interfaceFunction;
          };
        }();
        var ShapeExpressionInterface = /* @__PURE__ */ function() {
          function iterateElements(shapes, view, propertyGroup) {
            var arr = [];
            var i;
            var len = shapes ? shapes.length : 0;
            for (i = 0; i < len; i += 1) {
              if (shapes[i].ty === "gr") {
                arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "fl") {
                arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "st") {
                arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "tm") {
                arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "tr") {
              } else if (shapes[i].ty === "el") {
                arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "sr") {
                arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "sh") {
                arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "rc") {
                arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "rd") {
                arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "rp") {
                arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else if (shapes[i].ty === "gf") {
                arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
              } else {
                arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
              }
            }
            return arr;
          }
          function contentsInterfaceFactory(shape, view, propertyGroup) {
            var interfaces2;
            var interfaceFunction = function _interfaceFunction(value2) {
              var i = 0;
              var len = interfaces2.length;
              while (i < len) {
                if (interfaces2[i]._name === value2 || interfaces2[i].mn === value2 || interfaces2[i].propertyIndex === value2 || interfaces2[i].ix === value2 || interfaces2[i].ind === value2) {
                  return interfaces2[i];
                }
                i += 1;
              }
              if (typeof value2 === "number") {
                return interfaces2[value2 - 1];
              }
              return null;
            };
            interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            interfaces2 = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
            interfaceFunction.numProperties = interfaces2.length;
            var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
            interfaceFunction.transform = transformInterface;
            interfaceFunction.propertyIndex = shape.cix;
            interfaceFunction._name = shape.nm;
            return interfaceFunction;
          }
          function groupInterfaceFactory(shape, view, propertyGroup) {
            var interfaceFunction = function _interfaceFunction(value2) {
              switch (value2) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return interfaceFunction.content;
                // Not necessary for now. Keeping them here in case a new case appears
                // case 'ADBE Vector Transform Group':
                // case 3:
                default:
                  return interfaceFunction.transform;
              }
            };
            interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var content2 = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
            var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
            interfaceFunction.content = content2;
            interfaceFunction.transform = transformInterface;
            Object.defineProperty(interfaceFunction, "_name", {
              get: function get() {
                return shape.nm;
              }
            });
            interfaceFunction.numProperties = shape.np;
            interfaceFunction.propertyIndex = shape.ix;
            interfaceFunction.nm = shape.nm;
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function fillInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(val2) {
              if (val2 === "Color" || val2 === "color") {
                return interfaceFunction.color;
              }
              if (val2 === "Opacity" || val2 === "opacity") {
                return interfaceFunction.opacity;
              }
              return null;
            }
            Object.defineProperties(interfaceFunction, {
              color: {
                get: ExpressionPropertyInterface(view.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(view.o)
              },
              _name: {
                value: shape.nm
              },
              mn: {
                value: shape.mn
              }
            });
            view.c.setGroupProperty(PropertyInterface("Color", propertyGroup));
            view.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup));
            return interfaceFunction;
          }
          function gradientFillInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(val2) {
              if (val2 === "Start Point" || val2 === "start point") {
                return interfaceFunction.startPoint;
              }
              if (val2 === "End Point" || val2 === "end point") {
                return interfaceFunction.endPoint;
              }
              if (val2 === "Opacity" || val2 === "opacity") {
                return interfaceFunction.opacity;
              }
              return null;
            }
            Object.defineProperties(interfaceFunction, {
              startPoint: {
                get: ExpressionPropertyInterface(view.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(view.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(view.o)
              },
              type: {
                get: function get() {
                  return "a";
                }
              },
              _name: {
                value: shape.nm
              },
              mn: {
                value: shape.mn
              }
            });
            view.s.setGroupProperty(PropertyInterface("Start Point", propertyGroup));
            view.e.setGroupProperty(PropertyInterface("End Point", propertyGroup));
            view.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup));
            return interfaceFunction;
          }
          function defaultInterfaceFactory() {
            function interfaceFunction() {
              return null;
            }
            return interfaceFunction;
          }
          function strokeInterfaceFactory(shape, view, propertyGroup) {
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);
            function addPropertyToDashOb(i2) {
              Object.defineProperty(dashOb, shape.d[i2].nm, {
                get: ExpressionPropertyInterface(view.d.dataProps[i2].p)
              });
            }
            var i;
            var len = shape.d ? shape.d.length : 0;
            var dashOb = {};
            for (i = 0; i < len; i += 1) {
              addPropertyToDashOb(i);
              view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
            }
            function interfaceFunction(val2) {
              if (val2 === "Color" || val2 === "color") {
                return interfaceFunction.color;
              }
              if (val2 === "Opacity" || val2 === "opacity") {
                return interfaceFunction.opacity;
              }
              if (val2 === "Stroke Width" || val2 === "stroke width") {
                return interfaceFunction.strokeWidth;
              }
              return null;
            }
            Object.defineProperties(interfaceFunction, {
              color: {
                get: ExpressionPropertyInterface(view.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(view.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(view.w)
              },
              dash: {
                get: function get() {
                  return dashOb;
                }
              },
              _name: {
                value: shape.nm
              },
              mn: {
                value: shape.mn
              }
            });
            view.c.setGroupProperty(PropertyInterface("Color", _propertyGroup));
            view.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
            view.w.setGroupProperty(PropertyInterface("Stroke Width", _propertyGroup));
            return interfaceFunction;
          }
          function trimInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(val2) {
              if (val2 === shape.e.ix || val2 === "End" || val2 === "end") {
                return interfaceFunction.end;
              }
              if (val2 === shape.s.ix) {
                return interfaceFunction.start;
              }
              if (val2 === shape.o.ix) {
                return interfaceFunction.offset;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            interfaceFunction.propertyIndex = shape.ix;
            view.s.setGroupProperty(PropertyInterface("Start", _propertyGroup));
            view.e.setGroupProperty(PropertyInterface("End", _propertyGroup));
            view.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup));
            interfaceFunction.propertyIndex = shape.ix;
            interfaceFunction.propertyGroup = propertyGroup;
            Object.defineProperties(interfaceFunction, {
              start: {
                get: ExpressionPropertyInterface(view.s)
              },
              end: {
                get: ExpressionPropertyInterface(view.e)
              },
              offset: {
                get: ExpressionPropertyInterface(view.o)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function transformInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.a.ix === value2 || value2 === "Anchor Point") {
                return interfaceFunction.anchorPoint;
              }
              if (shape.o.ix === value2 || value2 === "Opacity") {
                return interfaceFunction.opacity;
              }
              if (shape.p.ix === value2 || value2 === "Position") {
                return interfaceFunction.position;
              }
              if (shape.r.ix === value2 || value2 === "Rotation" || value2 === "ADBE Vector Rotation") {
                return interfaceFunction.rotation;
              }
              if (shape.s.ix === value2 || value2 === "Scale") {
                return interfaceFunction.scale;
              }
              if (shape.sk && shape.sk.ix === value2 || value2 === "Skew") {
                return interfaceFunction.skew;
              }
              if (shape.sa && shape.sa.ix === value2 || value2 === "Skew Axis") {
                return interfaceFunction.skewAxis;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            view.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
            view.transform.mProps.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
            view.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", _propertyGroup));
            view.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", _propertyGroup));
            view.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
            if (view.transform.mProps.sk) {
              view.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", _propertyGroup));
              view.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", _propertyGroup));
            }
            view.transform.op.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              opacity: {
                get: ExpressionPropertyInterface(view.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(view.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(view.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(view.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(view.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(view.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(view.transform.mProps.sa)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.ty = "tr";
            interfaceFunction.mn = shape.mn;
            interfaceFunction.propertyGroup = propertyGroup;
            return interfaceFunction;
          }
          function ellipseInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.p.ix === value2) {
                return interfaceFunction.position;
              }
              if (shape.s.ix === value2) {
                return interfaceFunction.size;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            interfaceFunction.propertyIndex = shape.ix;
            var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
            prop.s.setGroupProperty(PropertyInterface("Size", _propertyGroup));
            prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              size: {
                get: ExpressionPropertyInterface(prop.s)
              },
              position: {
                get: ExpressionPropertyInterface(prop.p)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function starInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.p.ix === value2) {
                return interfaceFunction.position;
              }
              if (shape.r.ix === value2) {
                return interfaceFunction.rotation;
              }
              if (shape.pt.ix === value2) {
                return interfaceFunction.points;
              }
              if (shape.or.ix === value2 || value2 === "ADBE Vector Star Outer Radius") {
                return interfaceFunction.outerRadius;
              }
              if (shape.os.ix === value2) {
                return interfaceFunction.outerRoundness;
              }
              if (shape.ir && (shape.ir.ix === value2 || value2 === "ADBE Vector Star Inner Radius")) {
                return interfaceFunction.innerRadius;
              }
              if (shape.is && shape.is.ix === value2) {
                return interfaceFunction.innerRoundness;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
            interfaceFunction.propertyIndex = shape.ix;
            prop.or.setGroupProperty(PropertyInterface("Outer Radius", _propertyGroup));
            prop.os.setGroupProperty(PropertyInterface("Outer Roundness", _propertyGroup));
            prop.pt.setGroupProperty(PropertyInterface("Points", _propertyGroup));
            prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
            prop.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
            if (shape.ir) {
              prop.ir.setGroupProperty(PropertyInterface("Inner Radius", _propertyGroup));
              prop.is.setGroupProperty(PropertyInterface("Inner Roundness", _propertyGroup));
            }
            Object.defineProperties(interfaceFunction, {
              position: {
                get: ExpressionPropertyInterface(prop.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(prop.r)
              },
              points: {
                get: ExpressionPropertyInterface(prop.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(prop.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(prop.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(prop.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(prop.is)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function rectInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.p.ix === value2) {
                return interfaceFunction.position;
              }
              if (shape.r.ix === value2) {
                return interfaceFunction.roundness;
              }
              if (shape.s.ix === value2 || value2 === "Size" || value2 === "ADBE Vector Rect Size") {
                return interfaceFunction.size;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
            interfaceFunction.propertyIndex = shape.ix;
            prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
            prop.s.setGroupProperty(PropertyInterface("Size", _propertyGroup));
            prop.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              position: {
                get: ExpressionPropertyInterface(prop.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(prop.r)
              },
              size: {
                get: ExpressionPropertyInterface(prop.s)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function roundedInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.r.ix === value2 || value2 === "Round Corners 1") {
                return interfaceFunction.radius;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var prop = view;
            interfaceFunction.propertyIndex = shape.ix;
            prop.rd.setGroupProperty(PropertyInterface("Radius", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              radius: {
                get: ExpressionPropertyInterface(prop.rd)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          function repeaterInterfaceFactory(shape, view, propertyGroup) {
            function interfaceFunction(value2) {
              if (shape.c.ix === value2 || value2 === "Copies") {
                return interfaceFunction.copies;
              }
              if (shape.o.ix === value2 || value2 === "Offset") {
                return interfaceFunction.offset;
              }
              return null;
            }
            var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
            var prop = view;
            interfaceFunction.propertyIndex = shape.ix;
            prop.c.setGroupProperty(PropertyInterface("Copies", _propertyGroup));
            prop.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup));
            Object.defineProperties(interfaceFunction, {
              copies: {
                get: ExpressionPropertyInterface(prop.c)
              },
              offset: {
                get: ExpressionPropertyInterface(prop.o)
              },
              _name: {
                value: shape.nm
              }
            });
            interfaceFunction.mn = shape.mn;
            return interfaceFunction;
          }
          return function(shapes, view, propertyGroup) {
            var interfaces2;
            function _interfaceFunction(value2) {
              if (typeof value2 === "number") {
                value2 = value2 === void 0 ? 1 : value2;
                if (value2 === 0) {
                  return propertyGroup;
                }
                return interfaces2[value2 - 1];
              }
              var i = 0;
              var len = interfaces2.length;
              while (i < len) {
                if (interfaces2[i]._name === value2) {
                  return interfaces2[i];
                }
                i += 1;
              }
              return null;
            }
            function parentGroupWrapper() {
              return propertyGroup;
            }
            _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
            interfaces2 = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
            _interfaceFunction.numProperties = interfaces2.length;
            _interfaceFunction._name = "Contents";
            return _interfaceFunction;
          };
        }();
        var TextExpressionInterface = /* @__PURE__ */ function() {
          return function(elem2) {
            var _sourceText;
            function _thisLayerFunction(name2) {
              switch (name2) {
                case "ADBE Text Document":
                  return _thisLayerFunction.sourceText;
                default:
                  return null;
              }
            }
            Object.defineProperty(_thisLayerFunction, "sourceText", {
              get: function get() {
                elem2.textProperty.getValue();
                var stringValue = elem2.textProperty.currentData.t;
                if (!_sourceText || stringValue !== _sourceText.value) {
                  _sourceText = new String(stringValue);
                  _sourceText.value = stringValue || new String(stringValue);
                  Object.defineProperty(_sourceText, "style", {
                    get: function get2() {
                      return {
                        fillColor: elem2.textProperty.currentData.fc
                      };
                    }
                  });
                }
                return _sourceText;
              }
            });
            return _thisLayerFunction;
          };
        }();
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        var FootageInterface = /* @__PURE__ */ function() {
          var outlineInterfaceFactory = function outlineInterfaceFactory2(elem2) {
            var currentPropertyName = "";
            var currentProperty = elem2.getFootageData();
            function init4() {
              currentPropertyName = "";
              currentProperty = elem2.getFootageData();
              return searchProperty;
            }
            function searchProperty(value2) {
              if (currentProperty[value2]) {
                currentPropertyName = value2;
                currentProperty = currentProperty[value2];
                if (_typeof(currentProperty) === "object") {
                  return searchProperty;
                }
                return currentProperty;
              }
              var propertyNameIndex = value2.indexOf(currentPropertyName);
              if (propertyNameIndex !== -1) {
                var index2 = parseInt(value2.substr(propertyNameIndex + currentPropertyName.length), 10);
                currentProperty = currentProperty[index2];
                if (_typeof(currentProperty) === "object") {
                  return searchProperty;
                }
                return currentProperty;
              }
              return "";
            }
            return init4;
          };
          var dataInterfaceFactory = function dataInterfaceFactory2(elem2) {
            function interfaceFunction(value2) {
              if (value2 === "Outline") {
                return interfaceFunction.outlineInterface();
              }
              return null;
            }
            interfaceFunction._name = "Outline";
            interfaceFunction.outlineInterface = outlineInterfaceFactory(elem2);
            return interfaceFunction;
          };
          return function(elem2) {
            function _interfaceFunction(value2) {
              if (value2 === "Data") {
                return _interfaceFunction.dataInterface;
              }
              return null;
            }
            _interfaceFunction._name = "Data";
            _interfaceFunction.dataInterface = dataInterfaceFactory(elem2);
            return _interfaceFunction;
          };
        }();
        var interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };
        function getInterface(type) {
          return interfaces[type] || null;
        }
        var expressionHelpers = /* @__PURE__ */ function() {
          function searchExpressions(elem2, data2, prop) {
            if (data2.x) {
              prop.k = true;
              prop.x = true;
              prop.initiateExpression = ExpressionManager.initiateExpression;
              prop.effectsSequence.push(prop.initiateExpression(elem2, data2, prop).bind(prop));
            }
          }
          function getValueAtTime(frameNum) {
            frameNum *= this.elem.globalData.frameRate;
            frameNum -= this.offsetTime;
            if (frameNum !== this._cachingAtTime.lastFrame) {
              this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
              this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
              this._cachingAtTime.lastFrame = frameNum;
            }
            return this._cachingAtTime.value;
          }
          function getSpeedAtTime(frameNum) {
            var delta = -0.01;
            var v1 = this.getValueAtTime(frameNum);
            var v2 = this.getValueAtTime(frameNum + delta);
            var speed = 0;
            if (v1.length) {
              var i;
              for (i = 0; i < v1.length; i += 1) {
                speed += Math.pow(v2[i] - v1[i], 2);
              }
              speed = Math.sqrt(speed) * 100;
            } else {
              speed = 0;
            }
            return speed;
          }
          function getVelocityAtTime(frameNum) {
            if (this.vel !== void 0) {
              return this.vel;
            }
            var delta = -1e-3;
            var v1 = this.getValueAtTime(frameNum);
            var v2 = this.getValueAtTime(frameNum + delta);
            var velocity2;
            if (v1.length) {
              velocity2 = createTypedArray("float32", v1.length);
              var i;
              for (i = 0; i < v1.length; i += 1) {
                velocity2[i] = (v2[i] - v1[i]) / delta;
              }
            } else {
              velocity2 = (v2 - v1) / delta;
            }
            return velocity2;
          }
          function getStaticValueAtTime() {
            return this.pv;
          }
          function setGroupProperty(propertyGroup) {
            this.propertyGroup = propertyGroup;
          }
          return {
            searchExpressions,
            getSpeedAtTime,
            getVelocityAtTime,
            getValueAtTime,
            getStaticValueAtTime,
            setGroupProperty
          };
        }();
        function addPropertyDecorator() {
          function loopOut2(type, duration, durationFlag) {
            if (!this.k || !this.keyframes) {
              return this.pv;
            }
            type = type ? type.toLowerCase() : "";
            var currentFrame = this.comp.renderedFrame;
            var keyframes = this.keyframes;
            var lastKeyFrame = keyframes[keyframes.length - 1].t;
            if (currentFrame <= lastKeyFrame) {
              return this.pv;
            }
            var cycleDuration;
            var firstKeyFrame;
            if (!durationFlag) {
              if (!duration || duration > keyframes.length - 1) {
                duration = keyframes.length - 1;
              }
              firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
              cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
              if (!duration) {
                cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
              } else {
                cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
              }
              firstKeyFrame = lastKeyFrame - cycleDuration;
            }
            var i;
            var len;
            var ret;
            if (type === "pingpong") {
              var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
              if (iterations % 2 !== 0) {
                return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
              }
            } else if (type === "offset") {
              var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
              var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
              var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
              var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
              if (this.pv.length) {
                ret = new Array(initV.length);
                len = ret.length;
                for (i = 0; i < len; i += 1) {
                  ret[i] = (endV[i] - initV[i]) * repeats + current[i];
                }
                return ret;
              }
              return (endV - initV) * repeats + current;
            } else if (type === "continue") {
              var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
              var nextLastValue = this.getValueAtTime((lastKeyFrame - 1e-3) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                ret = new Array(lastValue.length);
                len = ret.length;
                for (i = 0; i < len; i += 1) {
                  ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 5e-4;
                }
                return ret;
              }
              return lastValue + (lastValue - nextLastValue) * ((currentFrame - lastKeyFrame) / 1e-3);
            }
            return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
          }
          function loopIn2(type, duration, durationFlag) {
            if (!this.k) {
              return this.pv;
            }
            type = type ? type.toLowerCase() : "";
            var currentFrame = this.comp.renderedFrame;
            var keyframes = this.keyframes;
            var firstKeyFrame = keyframes[0].t;
            if (currentFrame >= firstKeyFrame) {
              return this.pv;
            }
            var cycleDuration;
            var lastKeyFrame;
            if (!durationFlag) {
              if (!duration || duration > keyframes.length - 1) {
                duration = keyframes.length - 1;
              }
              lastKeyFrame = keyframes[duration].t;
              cycleDuration = lastKeyFrame - firstKeyFrame;
            } else {
              if (!duration) {
                cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
              } else {
                cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
              }
              lastKeyFrame = firstKeyFrame + cycleDuration;
            }
            var i;
            var len;
            var ret;
            if (type === "pingpong") {
              var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);
              if (iterations % 2 === 0) {
                return this.getValueAtTime(((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
              }
            } else if (type === "offset") {
              var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
              var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
              var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
              var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;
              if (this.pv.length) {
                ret = new Array(initV.length);
                len = ret.length;
                for (i = 0; i < len; i += 1) {
                  ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
                }
                return ret;
              }
              return current - (endV - initV) * repeats;
            } else if (type === "continue") {
              var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
              var nextFirstValue = this.getValueAtTime((firstKeyFrame + 1e-3) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                ret = new Array(firstValue.length);
                len = ret.length;
                for (i = 0; i < len; i += 1) {
                  ret[i] = firstValue[i] + (firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame) / 1e-3;
                }
                return ret;
              }
              return firstValue + (firstValue - nextFirstValue) * (firstKeyFrame - currentFrame) / 1e-3;
            }
            return this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0);
          }
          function smooth2(width2, samples) {
            if (!this.k) {
              return this.pv;
            }
            width2 = (width2 || 0.4) * 0.5;
            samples = Math.floor(samples || 5);
            if (samples <= 1) {
              return this.pv;
            }
            var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
            var initFrame2 = currentTime - width2;
            var endFrame = currentTime + width2;
            var sampleFrequency = samples > 1 ? (endFrame - initFrame2) / (samples - 1) : 1;
            var i = 0;
            var j = 0;
            var value2;
            if (this.pv.length) {
              value2 = createTypedArray("float32", this.pv.length);
            } else {
              value2 = 0;
            }
            var sampleValue;
            while (i < samples) {
              sampleValue = this.getValueAtTime(initFrame2 + i * sampleFrequency);
              if (this.pv.length) {
                for (j = 0; j < this.pv.length; j += 1) {
                  value2[j] += sampleValue[j];
                }
              } else {
                value2 += sampleValue;
              }
              i += 1;
            }
            if (this.pv.length) {
              for (j = 0; j < this.pv.length; j += 1) {
                value2[j] /= samples;
              }
            } else {
              value2 /= samples;
            }
            return value2;
          }
          function getTransformValueAtTime(time2) {
            if (!this._transformCachingAtTime) {
              this._transformCachingAtTime = {
                v: new Matrix()
              };
            }
            var matrix = this._transformCachingAtTime.v;
            matrix.cloneFromProps(this.pre.props);
            if (this.appliedTransformations < 1) {
              var anchor = this.a.getValueAtTime(time2);
              matrix.translate(-anchor[0] * this.a.mult, -anchor[1] * this.a.mult, anchor[2] * this.a.mult);
            }
            if (this.appliedTransformations < 2) {
              var scale2 = this.s.getValueAtTime(time2);
              matrix.scale(scale2[0] * this.s.mult, scale2[1] * this.s.mult, scale2[2] * this.s.mult);
            }
            if (this.sk && this.appliedTransformations < 3) {
              var skew = this.sk.getValueAtTime(time2);
              var skewAxis = this.sa.getValueAtTime(time2);
              matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
            }
            if (this.r && this.appliedTransformations < 4) {
              var rotation2 = this.r.getValueAtTime(time2);
              matrix.rotate(-rotation2 * this.r.mult);
            } else if (!this.r && this.appliedTransformations < 4) {
              var rotationZ = this.rz.getValueAtTime(time2);
              var rotationY = this.ry.getValueAtTime(time2);
              var rotationX = this.rx.getValueAtTime(time2);
              var orientation = this.or.getValueAtTime(time2);
              matrix.rotateZ(-rotationZ * this.rz.mult).rotateY(rotationY * this.ry.mult).rotateX(rotationX * this.rx.mult).rotateZ(-orientation[2] * this.or.mult).rotateY(orientation[1] * this.or.mult).rotateX(orientation[0] * this.or.mult);
            }
            if (this.data.p && this.data.p.s) {
              var positionX = this.px.getValueAtTime(time2);
              var positionY = this.py.getValueAtTime(time2);
              if (this.data.p.z) {
                var positionZ = this.pz.getValueAtTime(time2);
                matrix.translate(positionX * this.px.mult, positionY * this.py.mult, -positionZ * this.pz.mult);
              } else {
                matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
              }
            } else {
              var position2 = this.p.getValueAtTime(time2);
              matrix.translate(position2[0] * this.p.mult, position2[1] * this.p.mult, -position2[2] * this.p.mult);
            }
            return matrix;
          }
          function getTransformStaticValueAtTime() {
            return this.v.clone(new Matrix());
          }
          var getTransformProperty = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(elem2, data2, container) {
            var prop = getTransformProperty(elem2, data2, container);
            if (prop.dynamicProperties.length) {
              prop.getValueAtTime = getTransformValueAtTime.bind(prop);
            } else {
              prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
            }
            prop.setGroupProperty = expressionHelpers.setGroupProperty;
            return prop;
          };
          var propertyGetProp = PropertyFactory.getProp;
          PropertyFactory.getProp = function(elem2, data2, type, mult, container) {
            var prop = propertyGetProp(elem2, data2, type, mult, container);
            if (prop.kf) {
              prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
            } else {
              prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
            }
            prop.setGroupProperty = expressionHelpers.setGroupProperty;
            prop.loopOut = loopOut2;
            prop.loopIn = loopIn2;
            prop.smooth = smooth2;
            prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
            prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
            prop.numKeys = data2.a === 1 ? data2.k.length : 0;
            prop.propertyIndex = data2.ix;
            var value2 = 0;
            if (type !== 0) {
              value2 = createTypedArray("float32", data2.a === 1 ? data2.k[0].s.length : data2.k.length);
            }
            prop._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: value2
            };
            expressionHelpers.searchExpressions(elem2, data2, prop);
            if (prop.k) {
              container.addDynamicProperty(prop);
            }
            return prop;
          };
          function getShapeValueAtTime(frameNum) {
            if (!this._cachingAtTime) {
              this._cachingAtTime = {
                shapeValue: shapePool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
              };
            }
            frameNum *= this.elem.globalData.frameRate;
            frameNum -= this.offsetTime;
            if (frameNum !== this._cachingAtTime.lastTime) {
              this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
              this._cachingAtTime.lastTime = frameNum;
              this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
            }
            return this._cachingAtTime.shapeValue;
          }
          var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
          var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();
          function ShapeExpressions() {
          }
          ShapeExpressions.prototype = {
            vertices: function vertices(prop, time2) {
              if (this.k) {
                this.getValue();
              }
              var shapePath = this.v;
              if (time2 !== void 0) {
                shapePath = this.getValueAtTime(time2, 0);
              }
              var i;
              var len = shapePath._length;
              var vertices2 = shapePath[prop];
              var points = shapePath.v;
              var arr = createSizedArray(len);
              for (i = 0; i < len; i += 1) {
                if (prop === "i" || prop === "o") {
                  arr[i] = [vertices2[i][0] - points[i][0], vertices2[i][1] - points[i][1]];
                } else {
                  arr[i] = [vertices2[i][0], vertices2[i][1]];
                }
              }
              return arr;
            },
            points: function points(time2) {
              return this.vertices("v", time2);
            },
            inTangents: function inTangents(time2) {
              return this.vertices("i", time2);
            },
            outTangents: function outTangents(time2) {
              return this.vertices("o", time2);
            },
            isClosed: function isClosed() {
              return this.v.c;
            },
            pointOnPath: function pointOnPath(perc, time2) {
              var shapePath = this.v;
              if (time2 !== void 0) {
                shapePath = this.getValueAtTime(time2, 0);
              }
              if (!this._segmentsLength) {
                this._segmentsLength = bez.getSegmentsLength(shapePath);
              }
              var segmentsLength = this._segmentsLength;
              var lengths = segmentsLength.lengths;
              var lengthPos = segmentsLength.totalLength * perc;
              var i = 0;
              var len = lengths.length;
              var accumulatedLength = 0;
              var pt;
              while (i < len) {
                if (accumulatedLength + lengths[i].addedLength > lengthPos) {
                  var initIndex = i;
                  var endIndex = shapePath.c && i === len - 1 ? 0 : i + 1;
                  var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
                  pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
                  break;
                } else {
                  accumulatedLength += lengths[i].addedLength;
                }
                i += 1;
              }
              if (!pt) {
                pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
              }
              return pt;
            },
            vectorOnPath: function vectorOnPath(perc, time2, vectorType) {
              if (perc == 1) {
                perc = this.v.c;
              } else if (perc == 0) {
                perc = 0.999;
              }
              var pt1 = this.pointOnPath(perc, time2);
              var pt2 = this.pointOnPath(perc + 1e-3, time2);
              var xLength = pt2[0] - pt1[0];
              var yLength = pt2[1] - pt1[1];
              var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
              if (magnitude === 0) {
                return [0, 0];
              }
              var unitVector = vectorType === "tangent" ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
              return unitVector;
            },
            tangentOnPath: function tangentOnPath(perc, time2) {
              return this.vectorOnPath(perc, time2, "tangent");
            },
            normalOnPath: function normalOnPath(perc, time2) {
              return this.vectorOnPath(perc, time2, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          };
          extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
          extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
          KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
          KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(elem2, data2, type, arr, trims) {
            var prop = propertyGetShapeProp(elem2, data2, type, arr, trims);
            prop.propertyIndex = data2.ix;
            prop.lock = false;
            if (type === 3) {
              expressionHelpers.searchExpressions(elem2, data2.pt, prop);
            } else if (type === 4) {
              expressionHelpers.searchExpressions(elem2, data2.ks, prop);
            }
            if (prop.k) {
              elem2.addDynamicProperty(prop);
            }
            return prop;
          };
        }
        function initialize$1() {
          addPropertyDecorator();
        }
        function addDecorator() {
          function searchExpressions() {
            if (this.data.d.x) {
              this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
              this.addEffect(this.getExpressionValue.bind(this));
              return true;
            }
            return null;
          }
          TextProperty.prototype.getExpressionValue = function(currentValue, text2) {
            var newValue = this.calculateExpression(text2);
            if (currentValue.t !== newValue) {
              var newData = {};
              this.copyData(newData, currentValue);
              newData.t = newValue.toString();
              newData.__complete = false;
              return newData;
            }
            return currentValue;
          };
          TextProperty.prototype.searchProperty = function() {
            var isKeyframed = this.searchKeyframes();
            var hasExpressions = this.searchExpressions();
            this.kf = isKeyframed || hasExpressions;
            return this.kf;
          };
          TextProperty.prototype.searchExpressions = searchExpressions;
        }
        function initialize() {
          addDecorator();
        }
        function SVGComposableEffect() {
        }
        SVGComposableEffect.prototype = {
          createMergeNode: function createMergeNode(resultId, ins) {
            var feMerge = createNS("feMerge");
            feMerge.setAttribute("result", resultId);
            var feMergeNode;
            var i;
            for (i = 0; i < ins.length; i += 1) {
              feMergeNode = createNS("feMergeNode");
              feMergeNode.setAttribute("in", ins[i]);
              feMerge.appendChild(feMergeNode);
              feMerge.appendChild(feMergeNode);
            }
            return feMerge;
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(filter, filterManager, elem2, id, source) {
          this.filterManager = filterManager;
          var feColorMatrix = createNS("feColorMatrix");
          feColorMatrix.setAttribute("type", "matrix");
          feColorMatrix.setAttribute("color-interpolation-filters", "linearRGB");
          feColorMatrix.setAttribute("values", linearFilterValue + " 1 0");
          this.linearFilter = feColorMatrix;
          feColorMatrix.setAttribute("result", id + "_tint_1");
          filter.appendChild(feColorMatrix);
          feColorMatrix = createNS("feColorMatrix");
          feColorMatrix.setAttribute("type", "matrix");
          feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
          feColorMatrix.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
          feColorMatrix.setAttribute("result", id + "_tint_2");
          filter.appendChild(feColorMatrix);
          this.matrixFilter = feColorMatrix;
          var feMerge = this.createMergeNode(id, [source, id + "_tint_1", id + "_tint_2"]);
          filter.appendChild(feMerge);
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter);
        SVGTintFilter.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            var colorBlack = this.filterManager.effectElements[0].p.v;
            var colorWhite = this.filterManager.effectElements[1].p.v;
            var opacity = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + opacity + " 0");
            this.matrixFilter.setAttribute("values", colorWhite[0] - colorBlack[0] + " 0 0 0 " + colorBlack[0] + " " + (colorWhite[1] - colorBlack[1]) + " 0 0 0 " + colorBlack[1] + " " + (colorWhite[2] - colorBlack[2]) + " 0 0 0 " + colorBlack[2] + " 0 0 0 1 0");
          }
        };
        function SVGFillFilter(filter, filterManager, elem2, id) {
          this.filterManager = filterManager;
          var feColorMatrix = createNS("feColorMatrix");
          feColorMatrix.setAttribute("type", "matrix");
          feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
          feColorMatrix.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
          feColorMatrix.setAttribute("result", id);
          filter.appendChild(feColorMatrix);
          this.matrixFilter = feColorMatrix;
        }
        SVGFillFilter.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            var color = this.filterManager.effectElements[2].p.v;
            var opacity = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + color[0] + " 0 0 0 0 " + color[1] + " 0 0 0 0 " + color[2] + " 0 0 0 " + opacity + " 0");
          }
        };
        function SVGStrokeEffect(fil, filterManager, elem2) {
          this.initialized = false;
          this.filterManager = filterManager;
          this.elem = elem2;
          this.paths = [];
        }
        SVGStrokeEffect.prototype.initialize = function() {
          var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          var path;
          var groupPath;
          var i;
          var len;
          if (this.filterManager.effectElements[1].p.v === 1) {
            len = this.elem.maskManager.masksProperties.length;
            i = 0;
          } else {
            i = this.filterManager.effectElements[0].p.v - 1;
            len = i + 1;
          }
          groupPath = createNS("g");
          groupPath.setAttribute("fill", "none");
          groupPath.setAttribute("stroke-linecap", "round");
          groupPath.setAttribute("stroke-dashoffset", 1);
          for (i; i < len; i += 1) {
            path = createNS("path");
            groupPath.appendChild(path);
            this.paths.push({
              p: path,
              m: i
            });
          }
          if (this.filterManager.effectElements[10].p.v === 3) {
            var mask2 = createNS("mask");
            var id = createElementID();
            mask2.setAttribute("id", id);
            mask2.setAttribute("mask-type", "alpha");
            mask2.appendChild(groupPath);
            this.elem.globalData.defs.appendChild(mask2);
            var g = createNS("g");
            g.setAttribute("mask", "url(" + getLocationHref() + "#" + id + ")");
            while (elemChildren[0]) {
              g.appendChild(elemChildren[0]);
            }
            this.elem.layerElement.appendChild(g);
            this.masker = mask2;
            groupPath.setAttribute("stroke", "#fff");
          } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (this.filterManager.effectElements[10].p.v === 2) {
              elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
              while (elemChildren.length) {
                this.elem.layerElement.removeChild(elemChildren[0]);
              }
            }
            this.elem.layerElement.appendChild(groupPath);
            this.elem.layerElement.removeAttribute("mask");
            groupPath.setAttribute("stroke", "#fff");
          }
          this.initialized = true;
          this.pathMasker = groupPath;
        };
        SVGStrokeEffect.prototype.renderFrame = function(forceRender) {
          if (!this.initialized) {
            this.initialize();
          }
          var i;
          var len = this.paths.length;
          var mask2;
          var path;
          for (i = 0; i < len; i += 1) {
            if (this.paths[i].m !== -1) {
              mask2 = this.elem.maskManager.viewData[this.paths[i].m];
              path = this.paths[i].p;
              if (forceRender || this.filterManager._mdf || mask2.prop._mdf) {
                path.setAttribute("d", mask2.lastPath);
              }
              if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask2.prop._mdf) {
                var dasharrayValue;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                  var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                  var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                  var l = path.getTotalLength();
                  dasharrayValue = "0 0 0 " + l * s + " ";
                  var lineLength = l * (e - s);
                  var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
                  var units = Math.floor(lineLength / segment);
                  var j;
                  for (j = 0; j < units; j += 1) {
                    dasharrayValue += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                  }
                  dasharrayValue += "0 " + l * 10 + " 0 0";
                } else {
                  dasharrayValue = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
                }
                path.setAttribute("stroke-dasharray", dasharrayValue);
              }
            }
          }
          if (forceRender || this.filterManager.effectElements[4].p._mdf) {
            this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2);
          }
          if (forceRender || this.filterManager.effectElements[6].p._mdf) {
            this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v);
          }
          if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (forceRender || this.filterManager.effectElements[3].p._mdf) {
              var color = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(color[0] * 255) + "," + bmFloor(color[1] * 255) + "," + bmFloor(color[2] * 255) + ")");
            }
          }
        };
        function SVGTritoneFilter(filter, filterManager, elem2, id) {
          this.filterManager = filterManager;
          var feColorMatrix = createNS("feColorMatrix");
          feColorMatrix.setAttribute("type", "matrix");
          feColorMatrix.setAttribute("color-interpolation-filters", "linearRGB");
          feColorMatrix.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");
          filter.appendChild(feColorMatrix);
          var feComponentTransfer = createNS("feComponentTransfer");
          feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
          feComponentTransfer.setAttribute("result", id);
          this.matrixFilter = feComponentTransfer;
          var feFuncR = createNS("feFuncR");
          feFuncR.setAttribute("type", "table");
          feComponentTransfer.appendChild(feFuncR);
          this.feFuncR = feFuncR;
          var feFuncG = createNS("feFuncG");
          feFuncG.setAttribute("type", "table");
          feComponentTransfer.appendChild(feFuncG);
          this.feFuncG = feFuncG;
          var feFuncB = createNS("feFuncB");
          feFuncB.setAttribute("type", "table");
          feComponentTransfer.appendChild(feFuncB);
          this.feFuncB = feFuncB;
          filter.appendChild(feComponentTransfer);
        }
        SVGTritoneFilter.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            var color1 = this.filterManager.effectElements[0].p.v;
            var color2 = this.filterManager.effectElements[1].p.v;
            var color3 = this.filterManager.effectElements[2].p.v;
            var tableR = color3[0] + " " + color2[0] + " " + color1[0];
            var tableG = color3[1] + " " + color2[1] + " " + color1[1];
            var tableB = color3[2] + " " + color2[2] + " " + color1[2];
            this.feFuncR.setAttribute("tableValues", tableR);
            this.feFuncG.setAttribute("tableValues", tableG);
            this.feFuncB.setAttribute("tableValues", tableB);
          }
        };
        function SVGProLevelsFilter(filter, filterManager, elem2, id) {
          this.filterManager = filterManager;
          var effectElements = this.filterManager.effectElements;
          var feComponentTransfer = createNS("feComponentTransfer");
          if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
            this.feFuncR = this.createFeFunc("feFuncR", feComponentTransfer);
          }
          if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
            this.feFuncG = this.createFeFunc("feFuncG", feComponentTransfer);
          }
          if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
            this.feFuncB = this.createFeFunc("feFuncB", feComponentTransfer);
          }
          if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
            this.feFuncA = this.createFeFunc("feFuncA", feComponentTransfer);
          }
          if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
            feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
            filter.appendChild(feComponentTransfer);
          }
          if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
            feComponentTransfer = createNS("feComponentTransfer");
            feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
            feComponentTransfer.setAttribute("result", id);
            filter.appendChild(feComponentTransfer);
            this.feFuncRComposed = this.createFeFunc("feFuncR", feComponentTransfer);
            this.feFuncGComposed = this.createFeFunc("feFuncG", feComponentTransfer);
            this.feFuncBComposed = this.createFeFunc("feFuncB", feComponentTransfer);
          }
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
          var feFunc = createNS(type);
          feFunc.setAttribute("type", "table");
          feComponentTransfer.appendChild(feFunc);
          return feFunc;
        };
        SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
          var cnt = 0;
          var segments = 256;
          var perc;
          var min = Math.min(inputBlack, inputWhite);
          var max = Math.max(inputBlack, inputWhite);
          var table = Array.call(null, {
            length: segments
          });
          var colorValue;
          var pos = 0;
          var outputDelta = outputWhite - outputBlack;
          var inputDelta = inputWhite - inputBlack;
          while (cnt <= 256) {
            perc = cnt / 256;
            if (perc <= min) {
              colorValue = inputDelta < 0 ? outputWhite : outputBlack;
            } else if (perc >= max) {
              colorValue = inputDelta < 0 ? outputBlack : outputWhite;
            } else {
              colorValue = outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma);
            }
            table[pos] = colorValue;
            pos += 1;
            cnt += 256 / (segments - 1);
          }
          return table.join(" ");
        };
        SVGProLevelsFilter.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            var val2;
            var effectElements = this.filterManager.effectElements;
            if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
              val2 = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
              this.feFuncRComposed.setAttribute("tableValues", val2);
              this.feFuncGComposed.setAttribute("tableValues", val2);
              this.feFuncBComposed.setAttribute("tableValues", val2);
            }
            if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
              val2 = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
              this.feFuncR.setAttribute("tableValues", val2);
            }
            if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
              val2 = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
              this.feFuncG.setAttribute("tableValues", val2);
            }
            if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
              val2 = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
              this.feFuncB.setAttribute("tableValues", val2);
            }
            if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
              val2 = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
              this.feFuncA.setAttribute("tableValues", val2);
            }
          }
        };
        function SVGDropShadowEffect(filter, filterManager, elem2, id, source) {
          var globalFilterSize = filterManager.container.globalData.renderConfig.filterSize;
          var filterSize = filterManager.data.fs || globalFilterSize;
          filter.setAttribute("x", filterSize.x || globalFilterSize.x);
          filter.setAttribute("y", filterSize.y || globalFilterSize.y);
          filter.setAttribute("width", filterSize.width || globalFilterSize.width);
          filter.setAttribute("height", filterSize.height || globalFilterSize.height);
          this.filterManager = filterManager;
          var feGaussianBlur = createNS("feGaussianBlur");
          feGaussianBlur.setAttribute("in", "SourceAlpha");
          feGaussianBlur.setAttribute("result", id + "_drop_shadow_1");
          feGaussianBlur.setAttribute("stdDeviation", "0");
          this.feGaussianBlur = feGaussianBlur;
          filter.appendChild(feGaussianBlur);
          var feOffset = createNS("feOffset");
          feOffset.setAttribute("dx", "25");
          feOffset.setAttribute("dy", "0");
          feOffset.setAttribute("in", id + "_drop_shadow_1");
          feOffset.setAttribute("result", id + "_drop_shadow_2");
          this.feOffset = feOffset;
          filter.appendChild(feOffset);
          var feFlood = createNS("feFlood");
          feFlood.setAttribute("flood-color", "#00ff00");
          feFlood.setAttribute("flood-opacity", "1");
          feFlood.setAttribute("result", id + "_drop_shadow_3");
          this.feFlood = feFlood;
          filter.appendChild(feFlood);
          var feComposite = createNS("feComposite");
          feComposite.setAttribute("in", id + "_drop_shadow_3");
          feComposite.setAttribute("in2", id + "_drop_shadow_2");
          feComposite.setAttribute("operator", "in");
          feComposite.setAttribute("result", id + "_drop_shadow_4");
          filter.appendChild(feComposite);
          var feMerge = this.createMergeNode(id, [id + "_drop_shadow_4", source]);
          filter.appendChild(feMerge);
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect);
        SVGDropShadowEffect.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            if (forceRender || this.filterManager.effectElements[4].p._mdf) {
              this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4);
            }
            if (forceRender || this.filterManager.effectElements[0].p._mdf) {
              var col = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
            }
            if (forceRender || this.filterManager.effectElements[1].p._mdf) {
              this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255);
            }
            if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var distance = this.filterManager.effectElements[3].p.v;
              var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
              var x = distance * Math.cos(angle);
              var y = distance * Math.sin(angle);
              this.feOffset.setAttribute("dx", x);
              this.feOffset.setAttribute("dy", y);
            }
          }
        };
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(filterElem, filterManager, elem2) {
          this.initialized = false;
          this.filterManager = filterManager;
          this.filterElem = filterElem;
          this.elem = elem2;
          elem2.matteElement = createNS("g");
          elem2.matteElement.appendChild(elem2.layerElement);
          elem2.matteElement.appendChild(elem2.transformedElement);
          elem2.baseElement = elem2.matteElement;
        }
        SVGMatte3Effect.prototype.findSymbol = function(mask2) {
          var i = 0;
          var len = _svgMatteSymbols.length;
          while (i < len) {
            if (_svgMatteSymbols[i] === mask2) {
              return _svgMatteSymbols[i];
            }
            i += 1;
          }
          return null;
        };
        SVGMatte3Effect.prototype.replaceInParent = function(mask2, symbolId) {
          var parentNode = mask2.layerElement.parentNode;
          if (!parentNode) {
            return;
          }
          var children = parentNode.children;
          var i = 0;
          var len = children.length;
          while (i < len) {
            if (children[i] === mask2.layerElement) {
              break;
            }
            i += 1;
          }
          var nextChild;
          if (i <= len - 2) {
            nextChild = children[i + 1];
          }
          var useElem = createNS("use");
          useElem.setAttribute("href", "#" + symbolId);
          if (nextChild) {
            parentNode.insertBefore(useElem, nextChild);
          } else {
            parentNode.appendChild(useElem);
          }
        };
        SVGMatte3Effect.prototype.setElementAsMask = function(elem2, mask2) {
          if (!this.findSymbol(mask2)) {
            var symbolId = createElementID();
            var masker = createNS("mask");
            masker.setAttribute("id", mask2.layerId);
            masker.setAttribute("mask-type", "alpha");
            _svgMatteSymbols.push(mask2);
            var defs = elem2.globalData.defs;
            defs.appendChild(masker);
            var symbol = createNS("symbol");
            symbol.setAttribute("id", symbolId);
            this.replaceInParent(mask2, symbolId);
            symbol.appendChild(mask2.layerElement);
            defs.appendChild(symbol);
            var useElem = createNS("use");
            useElem.setAttribute("href", "#" + symbolId);
            masker.appendChild(useElem);
            mask2.data.hd = false;
            mask2.show();
          }
          elem2.setMatte(mask2.layerId);
        };
        SVGMatte3Effect.prototype.initialize = function() {
          var ind = this.filterManager.effectElements[0].p.v;
          var elements = this.elem.comp.elements;
          var i = 0;
          var len = elements.length;
          while (i < len) {
            if (elements[i] && elements[i].data.ind === ind) {
              this.setElementAsMask(this.elem, elements[i]);
            }
            i += 1;
          }
          this.initialized = true;
        };
        SVGMatte3Effect.prototype.renderFrame = function() {
          if (!this.initialized) {
            this.initialize();
          }
        };
        function SVGGaussianBlurEffect(filter, filterManager, elem2, id) {
          filter.setAttribute("x", "-100%");
          filter.setAttribute("y", "-100%");
          filter.setAttribute("width", "300%");
          filter.setAttribute("height", "300%");
          this.filterManager = filterManager;
          var feGaussianBlur = createNS("feGaussianBlur");
          feGaussianBlur.setAttribute("result", id);
          filter.appendChild(feGaussianBlur);
          this.feGaussianBlur = feGaussianBlur;
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(forceRender) {
          if (forceRender || this.filterManager._mdf) {
            var kBlurrinessToSigma = 0.3;
            var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;
            var dimensions = this.filterManager.effectElements[1].p.v;
            var sigmaX = dimensions == 3 ? 0 : sigma;
            var sigmaY = dimensions == 2 ? 0 : sigma;
            this.feGaussianBlur.setAttribute("stdDeviation", sigmaX + " " + sigmaY);
            var edgeMode = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", edgeMode);
          }
        };
        function TransformEffect() {
        }
        TransformEffect.prototype.init = function(effectsManager) {
          this.effectsManager = effectsManager;
          this.type = effectTypes.TRANSFORM_EFFECT;
          this.matrix = new Matrix();
          this.opacity = -1;
          this._mdf = false;
          this._opMdf = false;
        };
        TransformEffect.prototype.renderFrame = function(forceFrame) {
          this._opMdf = false;
          this._mdf = false;
          if (forceFrame || this.effectsManager._mdf) {
            var effectElements = this.effectsManager.effectElements;
            var anchor = effectElements[0].p.v;
            var position2 = effectElements[1].p.v;
            var isUniformScale = effectElements[2].p.v === 1;
            var scaleHeight = effectElements[3].p.v;
            var scaleWidth = isUniformScale ? scaleHeight : effectElements[4].p.v;
            var skew = effectElements[5].p.v;
            var skewAxis = effectElements[6].p.v;
            var rotation2 = effectElements[7].p.v;
            this.matrix.reset();
            this.matrix.translate(-anchor[0], -anchor[1], anchor[2]);
            this.matrix.scale(scaleWidth * 0.01, scaleHeight * 0.01, 1);
            this.matrix.rotate(-rotation2 * degToRads);
            this.matrix.skewFromAxis(-skew * degToRads, (skewAxis + 90) * degToRads);
            this.matrix.translate(position2[0], position2[1], 0);
            this._mdf = true;
            if (this.opacity !== effectElements[8].p.v) {
              this.opacity = effectElements[8].p.v;
              this._opMdf = true;
            }
          }
        };
        function SVGTransformEffect(_, filterManager) {
          this.init(filterManager);
        }
        extendPrototype([TransformEffect], SVGTransformEffect);
        function CVTransformEffect(effectsManager) {
          this.init(effectsManager);
        }
        extendPrototype([TransformEffect], CVTransformEffect);
        registerRenderer("canvas", CanvasRenderer);
        registerRenderer("html", HybridRenderer);
        registerRenderer("svg", SVGRenderer);
        ShapeModifiers.registerModifier("tm", TrimModifier);
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
        ShapeModifiers.registerModifier("rp", RepeaterModifier);
        ShapeModifiers.registerModifier("rd", RoundCornersModifier);
        ShapeModifiers.registerModifier("zz", ZigZagModifier);
        ShapeModifiers.registerModifier("op", OffsetPathModifier);
        setExpressionsPlugin(Expressions);
        setExpressionInterfaces(getInterface);
        initialize$1();
        initialize();
        registerEffect$1(20, SVGTintFilter, true);
        registerEffect$1(21, SVGFillFilter, true);
        registerEffect$1(22, SVGStrokeEffect, false);
        registerEffect$1(23, SVGTritoneFilter, true);
        registerEffect$1(24, SVGProLevelsFilter, true);
        registerEffect$1(25, SVGDropShadowEffect, true);
        registerEffect$1(28, SVGMatte3Effect, false);
        registerEffect$1(29, SVGGaussianBlurEffect, true);
        registerEffect$1(35, SVGTransformEffect, false);
        registerEffect(35, CVTransformEffect);
        return lottie;
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // src/utils/scrollAnimation.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value2) {
    return typeof value2 === "string";
  };
  var _isFunction = function _isFunction2(value2) {
    return typeof value2 === "function";
  };
  var _isNumber = function _isNumber2(value2) {
    return typeof value2 === "number";
  };
  var _isUndefined = function _isUndefined2(value2) {
    return typeof value2 === "undefined";
  };
  var _isObject = function _isObject2(value2) {
    return typeof value2 === "object";
  };
  var _isNotFalse = function _isNotFalse2(value2) {
    return value2 !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value2) {
    return _isFunction(value2) || _isString(value2);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property2, value2) {
    return console.warn("Invalid property", property2, "set to", value2, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name2, obj) {
    return name2 && (_globals[name2] = obj) && _installScope && (_installScope[name2] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property2, v) {
    return (v = target[property2]) && _isFunction(v) ? target[property2]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property2) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value2) {
    return Math.round(value2 * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value2) {
    return Math.round(value2 * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value2) {
    var operator = value2.charAt(0), end = parseFloat(value2.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _isRevertWorthy = function _isRevertWorthy2(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time2, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time2, suppressEvents, force || !!(_reverting && time2 < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value2) {
    var n = parseFloat(value2);
    return (n || n === 0) && (value2 + "").match(_delimitedValueExp).length < 2 ? n : _isString(value2) ? value2.trim() : value2;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent2 = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent2) {
        func(vars, parent2.vars.defaults);
        parent2 = parent2.parent || parent2._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent2, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent2[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent2[firstProp];
      parent2[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent2[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent2;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent2, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent2[firstProp] === child) {
      parent2[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent2[lastProp] === child) {
      parent2[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent2 = animation.parent;
    while (parent2 && parent2.parent) {
      parent2._dirty = 1;
      parent2.totalDuration();
      parent2 = parent2.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent2 = animation._dp;
    if (parent2 && parent2.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent2._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent2._dirty || _uncache(parent2, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position2, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position2) ? position2 : position2 || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position2, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time2, force, suppressEvents, tTime) {
    _initTween(tween, time2, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent2 = _ref.parent;
    return parent2 && parent2._ts && parent2._initted && !parent2._lock && (parent2.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent2));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data2 = _ref2.data;
    return data2 === "isFromStart" || data2 === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time2) {
    var child;
    if (time2 > prevTime) {
      child = animation._first;
      while (child && child._start <= time2) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time2) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position2, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position2) && (isNaN(position2) || position2 in labels)) {
      offset = position2.charAt(0);
      isPercent = position2.substr(-1) === "%";
      i = position2.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position2 = position2.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position2.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position2 in labels || (labels[position2] = clippedDuration);
        return labels[position2];
      }
      offset = parseFloat(position2.charAt(i - 1) + position2.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position2.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position2 == null ? clippedDuration : +position2;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent2;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent2 = timeline2;
      while (parent2 && !("immediateRender" in irVars)) {
        irVars = parent2.vars.defaults || {};
        parent2 = _isNotFalse(parent2.vars.inherit) && parent2.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value2, func) {
    return value2 || value2 === 0 ? func(value2) : func;
  };
  var _clamp = function _clamp2(min, max, value2) {
    return value2 < min ? min : value2 > max ? max : value2;
  };
  var getUnit = function getUnit2(value2, v) {
    return !_isString(value2) || !(v = _unitExp.exec(value2)) ? "" : v[1];
  };
  var clamp2 = function clamp3(min, max, value2) {
    return _conditionalReturn(value2, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value2, nonEmpty) {
    return value2 && _isObject(value2) && "length" in value2 && (!nonEmpty && !value2.length || value2.length - 1 in value2 && _isObject(value2[0])) && !value2.nodeType && value2 !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value2) {
      var _accumulator;
      return _isString(value2) && !leaveStrings || _isArrayLike(value2, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value2)) : accumulator.push(value2);
    }) || accumulator;
  };
  var toArray = function toArray2(value2, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value2) : _isString(value2) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value2), 0) : _isArray(value2) ? _flatten(value2, leaveStrings) : _isArrayLike(value2) ? _slice.call(value2, 0) : value2 ? [value2] : [];
  };
  var selector = function selector2(value2) {
    value2 = toArray(value2)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value2.current || value2.nativeElement || value2;
      return toArray(v, el.querySelectorAll ? el : el === value2 ? _warn("Invalid scope") || _doc.createElement("div") : value2);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease2 = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease2 = ease2 && l < 0 ? _invertEase(ease2) : ease2;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease2 ? ease2(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value2) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value2, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random2 = function random3(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value2) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value2);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value2) {
      return func(parseFloat(value2)) + (unit || getUnit(value2));
    };
  };
  var normalize2 = function normalize3(min, max, value2) {
    return mapRange(min, max, 0, 1, value2);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value2) {
    return _conditionalReturn(value2, function(index2) {
      return a[~~wrapper(index2)];
    });
  };
  var wrap = function wrap2(min, max, value2) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value2, function(value3) {
      return (range + (value3 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value2) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value2, function(value3) {
      value3 = (total + (value3 - min) % total) % total || 0;
      return min + (value3 > range ? total - value3 : value3);
    });
  };
  var _replaceRandom = function _replaceRandom2(value2) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value2.indexOf("random(", prev))) {
      end = value2.indexOf(")", i);
      isArray = value2.charAt(i + 7) === "[";
      nums = value2.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value2.substr(prev, i - prev) + random2(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value2.substr(prev, value2.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value2) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value2, function(value3) {
      return outMin + ((value3 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name2 = config3.name, isFunc = _isFunction(config3), Plugin = name2 && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name2]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name2] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name2] = 1;
        }
        name2 = (name2 === "css" ? "CSS" : name2.charAt(0).toUpperCase() + name2.substr(1)) + "Plugin";
      }
      _addGlobal(name2, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time2, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time2 = _lastUpdate - _startTime;
      overlap = time2 - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time2 - _self.time * 1e3;
        _self.time = time2 = time2 / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time2, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add2(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value2) {
    var obj = {}, split = value2.substr(1, value2.length - 3).split(":"), key2 = split[0], i = 1, l = split.length, index2, val2, parsedVal;
    for (; i < l; i++) {
      val2 = split[i];
      index2 = i !== l - 1 ? val2.lastIndexOf(",") : val2.length;
      parsedVal = val2.substr(0, index2);
      obj[key2] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key2 = val2.substr(index2 + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value2) {
    var open = value2.indexOf("(") + 1, close = value2.indexOf(")"), nested = value2.indexOf("(", open);
    return value2.substring(open, ~nested && nested < close ? value2.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name2) {
    var split = (name2 + "").split("("), ease2 = _easeMap[split[0]];
    return ease2 && split.length > 1 && ease2.config ? ease2.config.apply(null, ~name2.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name2).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name2) ? _easeMap._CE("", name2) : ease2;
  };
  var _invertEase = function _invertEase2(ease2) {
    return function(p) {
      return 1 - ease2(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease2;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease2 = child._ease;
          child._ease = child._yEase;
          child._yEase = ease2;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease2, defaultEase) {
    return !ease2 ? defaultEase : (_isFunction(ease2) ? ease2 : _easeMap[ease2] || _configEaseFromString(ease2)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn2, easeOut2, easeInOut) {
    if (easeOut2 === void 0) {
      easeOut2 = function easeOut3(p) {
        return 1 - easeIn2(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn2(p * 2) / 2 : 1 - easeIn2((1 - p) * 2) / 2;
      };
    }
    var ease2 = {
      easeIn: easeIn2,
      easeOut: easeOut2,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name2) {
      _easeMap[name2] = _globals[name2] = ease2;
      _easeMap[lowercaseName = name2.toLowerCase()] = easeOut2;
      for (var p in ease2) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name2 + "." + p] = ease2[p];
      }
    });
    return ease2;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut2) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut2(1 - p * 2)) / 2 : 0.5 + easeOut2((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut2 = function easeOut3(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease2 = type === "out" ? easeOut2 : type === "in" ? function(p) {
      return 1 - easeOut2(1 - p);
    } : _easeInOutFromOut(easeOut2);
    p2 = _2PI / p2;
    ease2.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease2;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut2 = function easeOut3(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease2 = type === "out" ? easeOut2 : type === "in" ? function(p) {
      return 1 - easeOut2(1 - p);
    } : _easeInOutFromOut(easeOut2);
    ease2.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease2;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name2, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name2 + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut2 = function easeOut3(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut2(1 - p);
    }, easeOut2);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name2) {
    return _callbackNames += name2 + "," + name2 + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value2) {
      if (value2 || value2 === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value2 - this._delay);
        this._delay = value2;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value2) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value2 + (value2 + this._rDelay) * this._repeat : value2) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value2) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value2 : (value2 - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent2 = this._dp;
      if (parent2 && parent2.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent2._dp || parent2.parent || _postAddChecks(parent2, this);
        while (parent2 && parent2.parent) {
          if (parent2.parent._time !== parent2._start + (parent2._ts >= 0 ? parent2._tTime / parent2._ts : (parent2.totalDuration() - parent2._tTime) / -parent2._ts)) {
            parent2.totalTime(parent2._tTime, true);
          }
          parent2 = parent2.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time2(value2, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value2 + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value2 ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value2, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value2, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value2, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value2 : value2) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value2, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value2 - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value2, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value2) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value2 || 0;
      this._ts = this._ps || value2 === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value2) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value2) {
        this._ps = value2;
        if (value2) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value2) {
      if (arguments.length) {
        this._start = value2;
        var parent2 = this.parent || this._dp;
        parent2 && (parent2._sort || !this.parent) && _addToTimeline(parent2, this, value2 - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent2 = this.parent || this._dp;
      return !parent2 ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent2.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (_isRevertWorthy(this)) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time2 = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time2 = animation._start + time2 / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time2;
    };
    _proto.repeat = function repeat(value2) {
      if (arguments.length) {
        this._repeat = value2 === Infinity ? -2 : value2;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value2) {
      if (arguments.length) {
        var time2 = this._time;
        this._rDelay = value2;
        _onUpdateTotalDuration(this);
        return time2 ? this.time(time2) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value2) {
      if (arguments.length) {
        this._yoyo = value2;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position2, suppressEvents) {
      return this.totalTime(_parsePosition(this, position2), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      this._dur || (this._zTime = -_tinyNum);
      return this;
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value2) {
      if (arguments.length) {
        !!value2 !== this.reversed() && this.timeScale(-this._rts || (value2 ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent2 = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent2 || this._ts && this._initted && parent2.isActive() && (rawTime = parent2.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
          resolve(f);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position2) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position2);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position2) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position2) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position2) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position2) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position2), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position2) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position2);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position2));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position2, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time2, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time2 = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time2 = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time2 = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time2 = dur;
              iteration--;
            }
            time2 > dur && (time2 = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time2 = dur - time2;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time2));
          if (pauseTween) {
            tTime -= time2 - (time2 = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time2;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time2 >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time2 >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time2 - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time2 - child._start) * child._ts, suppressEvents, force);
              if (time2 !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time2;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
              if (time2 !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time2 >= prevTime ? 0 : -_tinyNum)._zTime = time2 >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add2(child, position2) {
      var _this2 = this;
      _isNumber(position2) || (position2 = _parsePosition(this, position2, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position2);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position2);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position2) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position2) {
      this.labels[label] = _parsePosition(this, position2);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position2, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position2));
    };
    _proto2.removePause = function removePause(position2) {
      var child = this._first;
      position2 = _parsePosition(this, position2);
      while (child) {
        if (child._start === position2 && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position2, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position2), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value2) {
      return arguments.length ? this.seek(value2, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value2) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent2;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value2 : value2));
      }
      if (self2._dirty) {
        parent2 = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent2 && !self2._dp || parent2 && parent2.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time2) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time2, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index2 = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index2, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index2 = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index2, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index2 || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index2, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index2, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index2, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index2, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property2, vars, tween, index2, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property2] && (plugin = new _plugins[property2]()).init(target, plugin.rawVars ? vars[property2] : _processVars(vars[property2], index2, target, targets, tween), tween, index2, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property2, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time2, tTime) {
    var vars = tween.vars, ease2 = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent2 = tween.parent, fullTargets = parent2 && parent2.data === "nested" ? parent2.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index2, harnessVars, overwritten;
    tl && (!keyframes || !ease2) && (ease2 = "none");
    tween._ease = _parseEase(ease2, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease2 : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time2 < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent2,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time2 < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time2 <= 0 && tTime <= 0) {
            time2 && (tween._zTime = time2);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time2 && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent: parent2
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time2 < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time2;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time2) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index2 = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index2, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name2) {
            ptLookup[name2] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index2, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index2, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time2));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time2 <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property2, value2, start, startIsRelative, ratio, time2, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property2], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property2] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property2];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property2 && pt.fp !== property2) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property2] = "+=0";
          _initTween(tween, time2);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property2 + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value2 - pt.s;
      rootPT.e && (rootPT.e = _round(value2) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease2 = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value2, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value2,
          e: ease2
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease2
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value2, tween, i, target, targets) {
    return _isFunction(value2) ? value2.call(tween, i, target, targets) : _isString(value2) && ~value2.indexOf("random(") ? _replaceRandom(value2) : value2;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name2) {
    return _staggerPropsToSkip[name2] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position2, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position2.duration = vars;
        vars = position2;
        position2 = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent2 = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent2 && parent2.data === "nested" ? parent2.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time2 = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time2 = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time2);
                time2 += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent2, _assertThisInitialized(_this3), position2);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent2._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent2.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time2, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
        time2 = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time2 = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time2 = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time2 = dur;
              iteration--;
            } else if (time2 > dur) {
              time2 = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time2 = dur - time2;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time2 === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && time2 !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time2, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time2;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time2 / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time2 / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property2, value2, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time2);
      ratio = this._ease(time2 / this._dur);
      if (_updatePropTweens(this, property2, value2, start, startIsRelative, ratio, time2, skipRecursion)) {
        return this.resetTo(property2, value2, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name2) {
            return p[name2] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name2) {
    Tween[name2] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name2 === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name2].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property2, value2) {
    return target[property2] = value2;
  };
  var _setterFunc = function _setterFunc2(target, property2, value2) {
    return target[property2](value2);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property2, value2, data2) {
    return target[property2](data2.fp, value2);
  };
  var _setterAttribute = function _setterAttribute2(target, property2, value2) {
    return target.setAttribute(property2, value2);
  };
  var _getSetter = function _getSetter2(target, property2) {
    return _isFunction(target[property2]) ? _setterFunc : _isUndefined(target[property2]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data2) {
    return data2.set(data2.t, data2.p, Math.round((data2.s + data2.c * ratio) * 1e6) / 1e6, data2);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data2) {
    return data2.set(data2.t, data2.p, !!(data2.s + data2.c * ratio), data2);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data2) {
    var pt = data2._pt, s = "";
    if (!ratio && data2.b) {
      s = data2.b;
    } else if (ratio === 1 && data2.e) {
      s = data2.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data2.c;
    }
    data2.set(data2.t, data2.p, s, data2);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data2) {
    var pt = data2._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property2) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property2 && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property2) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property2 && !pt.op || pt.op === property2) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property2, value2, data2) {
    data2.mSet(target, property2, data2.m.call(data2.tween, value2, data2.mt), data2);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent2) {
    var pt = parent2._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent2._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer2, data2, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer2 || _renderPlain;
      this.d = data2 || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name2) {
    return _reservedProps[name2] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time2 = Date.now(), matches = [];
    if (time2 - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c, function(func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time2;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add2(name2, func, scope) {
      if (_isFunction(name2)) {
        scope = func;
        func = name2;
        name2 = _isFunction;
      }
      var self2 = this, f = function f2() {
        var prev = _context, prevSelector = self2.selector, result;
        prev && prev !== self2 && prev.data.push(self2);
        scope && (self2.selector = selector(scope));
        _context = self2;
        result = func.apply(self2, arguments);
        _isFunction(result) && self2._r.push(result);
        _context = prev;
        self2.selector = prevSelector;
        self2.isReverted = false;
        return result;
      };
      self2.last = f;
      return name2 === _isFunction ? f(self2, function(func2) {
        return self2.add(null, func2);
      }) : name2 ? self2[name2] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t2) {
            return {
              g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
              t: t2
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add2(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active2;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active2 = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active2 = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active2 && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property2, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property2 ? function(property3, unit2, uncache2) {
        return format((_plugins[property3] && _plugins[property3].get || getter)(target, property3, unit2, uncache2));
      } : format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit, uncache));
    },
    quickSetter: function quickSetter(target, property2, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property2, unit);
        }), l = setters.length;
        return function(value2) {
          var i = l;
          while (i--) {
            setters[i](value2);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property2], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property2] || property2, setter = Plugin ? function(value2) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value2 + unit : value2, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value2) {
        return setter(target, p, unit ? value2 + unit : value2, cache, 1);
      };
    },
    quickTo: function quickTo(target, property2, vars) {
      var _setDefaults22;
      var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property2] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value2, start, startIsRelative) {
        return tween.resetTo(property2, value2, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value2) {
      value2 && value2.ease && (value2.ease = _parseEase(value2.ease, _defaults.ease));
      return _mergeDeep(_defaults, value2 || {});
    },
    config: function config2(value2) {
      return _mergeDeep(_config, value2 || {});
    },
    registerEffect: function registerEffect2(_ref3) {
      var name2 = _ref3.name, effect2 = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name2 + " effect requires " + pluginName + " plugin.");
      });
      _effects[name2] = function(targets, vars, tl) {
        return effect2(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name2] = function(targets, vars, position2) {
          return this.add(_effects[name2](targets, _isObject(vars) ? vars : (position2 = vars) && {}, this), position2);
        };
      }
    },
    registerEase: function registerEase(name2, ease2) {
      _easeMap[name2] = _parseEase(ease2);
    },
    parseEase: function parseEase(ease2, defaultEase) {
      return arguments.length ? _parseEase(ease2, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random: random2,
      snap,
      normalize: normalize2,
      getUnit,
      clamp: clamp2,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value2) {
        return _suppressOverwrites = value2;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name2) {
    return _gsap[name2] = Tween[name2];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name2, modifier) {
    return {
      name: name2,
      headless: 1,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name3) {
              return temp[name3] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index2, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index2, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data2) {
      var pt = data2._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function init2(target, value2) {
      var i = value2.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value2[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.13.0";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data2) {
    return data2.set(data2.t, data2.p, Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u, data2);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio === 1 ? data2.e : Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u, data2);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio ? Math.round((data2.s + data2.c * ratio) * 1e4) / 1e4 + data2.u : data2.b, data2);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data2) {
    var value2 = data2.s + data2.c * ratio;
    data2.set(data2.t, data2.p, ~~(value2 + (value2 < 0 ? -0.5 : 0.5)) + data2.u, data2);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio ? data2.e : data2.b, data2);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data2) {
    return data2.set(data2.t, data2.p, ratio !== 1 ? data2.b : data2.e, data2);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property2, value2) {
    return target.style[property2] = value2;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property2, value2) {
    return target.style.setProperty(property2, value2);
  };
  var _setterTransform = function _setterTransform2(target, property2, value2) {
    return target._gsap[property2] = value2;
  };
  var _setterScale = function _setterScale2(target, property2, value2) {
    return target._gsap.scaleX = target._gsap.scaleY = value2;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property2, value2, data2, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value2;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property2, value2, data2, ratio) {
    var cache = target._gsap;
    cache[property2] = value2;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property2, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property2 in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property2 !== "transform") {
        property2 = _propertyAliases[property2] || property2;
        ~property2.indexOf(",") ? property2.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property2] = cache.x ? cache[property2] : _get(target, property2);
        property2 === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property2 = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property2, isNotCSS, style[property2]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      if (!props[i + 1]) {
        props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
      } else if (props[i + 1] === 2) {
        target[props[i]](props[i + 2]);
      } else {
        target[props[i]] = props[i + 2];
      }
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e && e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property2, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property2] || cs.getPropertyValue(property2.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property2) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property2) || property2, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property2, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property2 in s && !preferPrefix) {
      return property2;
    }
    property2 = property2.charAt(0).toUpperCase() + property2.substr(1);
    while (i-- && !(_prefixes[i] + property2 in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property2;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
      bbox = clone.getBBox();
    } catch (e) {
    }
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds, cloned;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getReparentedCloneBBox(target);
      cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property2) {
    if (property2) {
      var style = target.style, first2Chars;
      if (property2 in _transformProps && property2 !== _transformOriginProp) {
        property2 = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property2.substr(0, 2);
        if (first2Chars === "ms" || property2.substr(0, 6) === "webkit") {
          property2 = "-" + property2;
        }
        style.removeProperty(first2Chars === "--" ? property2 : property2.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property2);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property2, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property2, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property2);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property2, value2, unit) {
    var curValue = parseFloat(value2) || 0, curUnit = (value2 + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property2), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent2, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property2, value2, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property2] || ~property2.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent2 = unit !== "rem" && ~property2.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent2 = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent2 || parent2 === _doc2 || !parent2.appendChild) {
      parent2 = _doc2.body;
    }
    cache = parent2._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property2 === "height" || property2 === "width")) {
        var v = target.style[property2];
        target.style[property2] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property2] = v : _removeProperty(target, property2);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent2, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent2 === target && (style.position = "static");
        parent2.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent2.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent2);
        cache.time = _ticker.time;
        cache.width = parent2[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property2, unit, uncache) {
    var value2;
    _pluginInitted || _initCore();
    if (property2 in _propertyAliases && property2 !== "transform") {
      property2 = _propertyAliases[property2];
      if (~property2.indexOf(",")) {
        property2 = property2.split(",")[0];
      }
    }
    if (_transformProps[property2] && property2 !== "transform") {
      value2 = _parseTransform(target, uncache);
      value2 = property2 !== "transformOrigin" ? value2[property2] : value2.svg ? value2.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value2.zOrigin + "px";
    } else {
      value2 = target.style[property2];
      if (!value2 || value2 === "auto" || uncache || ~(value2 + "").indexOf("calc(")) {
        value2 = _specialProps[property2] && _specialProps[property2](target, property2, unit) || _getComputedProperty(target, property2) || _getProperty(target, property2) || (property2 === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value2 + "").trim().indexOf(" ") ? _convertToUnit(target, property2, value2, unit) + unit : value2;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index2 = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end.substring(0, 6) === "var(--") {
      end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index2, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index2 = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index2 === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value2) {
    var split = value2.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value2 = x;
      x = y;
      y = value2;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data2) {
    if (data2.tween && data2.tween._time === data2.tween._dur) {
      var target = data2.t, style = target.style, props = data2.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          style.scale = style.rotate = style.translate = "none";
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property2, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property2, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property2);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value2) {
    return value2 === "matrix(1, 0, 0, 1, 0, 0)" || value2 === "none" || !value2;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent2, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent2 = target.parentNode;
      if (!parent2 || !target.offsetParent && !target.getBoundingClientRect().width) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent2.insertBefore(target, nextSibling) : parent2 ? parent2.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth2, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth2 || smooth2 !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth2;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation2, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation2 = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation2 = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation2 : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation2 = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation2) > 359.9) {
          rotationX = rotation2 = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation2 <= 0 ? 180 : -180;
        rotation2 += rotation2 <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation2) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value2) {
    return (value2 = value2.split(" "))[0] + " " + value2[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value2) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value2 + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation2 = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation2 !== _zeroDeg) {
      transforms += "rotate(" + rotation2 + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation2 = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation2 = parseFloat(rotation2);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation2 += skewY;
    }
    if (rotation2 || skewX) {
      rotation2 *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation2) * scaleX;
      a21 = Math.sin(rotation2) * scaleX;
      a12 = Math.sin(rotation2 - skewX) * -scaleY;
      a22 = Math.cos(rotation2 - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property2, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property2, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property2);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name2, index2) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index2 < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index2 < 2 ? name2 + side : "border" + side + name2;
    });
    _specialProps[index2 > 1 ? "border" + name2 : name2] = function(plugin, target, property2, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property2);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index2, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth2, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index2, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index2, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index2, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index2, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (type === "string" && endValue.substring(0, 6) === "var(--") {
              endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
              endNum = parseFloat(endValue);
            }
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth2 = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth2, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth2, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index2, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data2) {
      if (data2.tween._time || !_reverting2()) {
        var pt = data2._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data2.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property2, plugin) {
      var p = _propertyAliases[property2];
      p && p.indexOf(",") < 0 && (property2 = p);
      return property2 in _transformProps && property2 !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property2 === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property2 === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property2]) ? _setterCSSStyle : ~property2.indexOf("-") ? _setterCSSProp : _getSetter(target, property2);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation2, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation2 + "," + others, function(name2) {
      _transformProps[name2] = 1;
    });
    _forEachName(rotation2, function(name2) {
      _config.units[name2] = "deg";
      _rotationalProperties[name2] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation2;
    _forEachName(aliases, function(name2) {
      var split = name2.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name2) {
    _config.units[name2] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap2;
  var _coreInitted2;
  var _clamp3;
  var _win3;
  var _doc3;
  var _docEl;
  var _body;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP = function _getGSAP2() {
    return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name2, value2) {
    return value2;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data2 = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name2, value2) {
      return data2[name2](value2);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property2) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property2];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
    var cachingFunc = function cachingFunc2(value2) {
      if (value2 || value2 === 0) {
        _startup && (_win3.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value2 = cachingFunc2.v = Math.round(value2) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value2);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value2);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value2) {
      return arguments.length ? _win3.scrollTo(value2, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value2) {
      return arguments.length ? _win3.scrollTo(_horizontal.sc(), value2) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap2.utils.toArray)(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  };
  var _isWithin = function _isWithin2(element, list) {
    var i = list.length;
    while (i--) {
      if (list[i] === element || list[i].contains(element)) {
        return true;
      }
    }
    return false;
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value2) {
      return arguments.length ? element[s] = value2 : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value2, minTimeRefresh, useDelta) {
    var v1 = value2, v2 = value2, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value3, force) {
      var t = _getTime();
      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value3;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value3;
      } else {
        v1 = v2 + (value3 - v2) / (t - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
    };
    return {
      update,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap2.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore3 = function _initCore4(core) {
    gsap2 = core || _getGSAP();
    if (!_coreInitted2 && gsap2 && typeof document !== "undefined" && document.body) {
      _win3 = window;
      _doc3 = document;
      _docEl = _doc3.documentElement;
      _body = _doc3.body;
      _root = [_win3, _doc3, _docEl, _body];
      _clamp3 = gsap2.utils.clamp;
      _context2 = gsap2.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted2 = 1;
    }
    return _coreInitted2;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer2(vars) {
      this.init(vars);
    }
    var _proto = Observer2.prototype;
    _proto.init = function init4(vars) {
      _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap2.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
        return (self2.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update = function update2() {
        var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self2.deltaX > 0 && onRight(self2);
          onLeft && self2.deltaX < 0 && onLeft(self2);
          onChangeX && onChangeX(self2);
          onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
          prevDeltaX = self2.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self2.deltaY > 0 && onDown(self2);
          onUp && self2.deltaY < 0 && onUp(self2);
          onChangeY && onChangeY(self2);
          onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
          prevDeltaY = self2.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self2);
          if (dragged) {
            onDragStart && dragged === 1 && onDragStart(self2);
            onDrag && onDrag(self2);
            dragged = 0;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self2);
        if (wheeled) {
          onWheel(self2);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x, y, index2) {
        deltaX[index2] += x;
        deltaY[index2] += y;
        self2._vx.update(x);
        self2._vy.update(y);
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
        if (lockAxis && !axis) {
          self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x;
          self2._vx.update(x, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self2._vy.update(y, true);
        }
        debounce ? id || (id = requestAnimationFrame(update)) : update();
      }, _onDrag = function _onDrag2(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
        self2.x = x;
        self2.y = y;
        if (isDragging || (dx || dy) && (Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum)) {
          dragged = isDragging ? 2 : 1;
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
        }
      }, _onPress = self2.onPress = function(e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e.clientX;
        self2.startY = self2.y = e.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap2.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        dragged && update();
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e) {
        return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll = function onScroll2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e) {
        if (_ignoreCheck(e)) {
          return;
        }
        var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
        self2.x = x;
        self2.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e) {
        self2.event = e;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e) {
        self2.event = e;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
      };
      onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context2(this);
      self2.enable = function(e) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          self2.isDragging = self2.isGesturing = self2.isPressed = moved = dragged = false;
          self2._vx.reset();
          self2._vy.reset();
          scrollX = scrollFuncX();
          scrollY = scrollFuncY();
          e && e.type && _onPress(e);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o) {
            return o !== self2 && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self2.isEnabled = self2.isPressed = self2.isDragging = false;
          onDisable && onDisable(self2);
        }
      };
      self2.kill = self2.revert = function() {
        self2.disable();
        var i = _observers.indexOf(self2);
        i >= 0 && _observers.splice(i, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event);
    };
    _createClass(Observer2, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer2;
  }();
  Observer.version = "3.13.0";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore3;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP() && gsap2.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/ScrollTrigger.js
  var gsap3;
  var _coreInitted3;
  var _win4;
  var _doc4;
  var _docEl2;
  var _body2;
  var _root2;
  var _resizeDelay;
  var _toArray;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp2;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value2, type, self2) {
    var clamp4 = _isString3(value2) && (value2.substr(0, 6) === "clamp(" || value2.indexOf("max") > -1);
    self2["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value2.substr(6, value2.length - 7) : value2;
  };
  var _keepClamp = function _keepClamp2(value2, clamp4) {
    return clamp4 && (!_isString3(value2) || value2.substr(0, 6) !== "clamp(") ? "clamp(" + value2 + ")" : value2;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round3 = function _round4(value2) {
    return Math.round(value2 * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _isViewport3 = function _isViewport4(e) {
    return !!~_root2.indexOf(e);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win4.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d];
    } : function() {
      return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  };
  var _isString3 = function _isString4(value2) {
    return typeof value2 === "string";
  };
  var _isFunction3 = function _isFunction4(value2) {
    return typeof value2 === "function";
  };
  var _isNumber3 = function _isNumber4(value2) {
    return typeof value2 === "number";
  };
  var _isObject3 = function _isObject4(value2) {
    return typeof value2 === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self2, func) {
    if (self2.enabled) {
      var result = self2._ctx ? self2._ctx.add(function() {
        return func(self2);
      }) : func(self2);
      result && result.totalTime && (self2.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win4.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position2 = _getComputedStyle(element).position;
    element.style.position = position2 === "absolute" || position2 === "fixed" ? position2 : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value2) {
      return gsap3.utils.snap(_getLabelRatioArray(animation), value2);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value2, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i;
      if (!direction) {
        return snap3(value2);
      }
      if (direction > 0) {
        value2 -= threshold;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value2) {
            return a[i];
          }
        }
        return a[i - 1];
      } else {
        i = a.length;
        value2 += threshold;
        while (i--) {
          if (a[i] <= value2) {
            return a[i];
          }
        }
      }
      return a[0];
    } : function(value2, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value2);
      return !direction || Math.abs(snapped - value2) < threshold || snapped - value2 < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value2 - snapIncrementOrArray : value2 + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value2, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value2, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value2, size) {
    if (_isString3(value2)) {
      var eqIndex = value2.indexOf("="), relative = ~eqIndex ? +(value2.charAt(eqIndex - 1) + 1) * parseFloat(value2.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value2.indexOf("%") > eqIndex && (relative *= size / 100);
        value2 = value2.substr(0, eqIndex - 1);
      }
      value2 = relative + (value2 in _keywords ? _keywords[value2] * size : ~value2.indexOf("%") ? parseFloat(value2) * size / 100 : parseFloat(value2) || 0);
    }
    return value2;
  };
  var _createMarker = function _createMarker2(type, name2, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent2 = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name2 ? " marker-" + name2 : ""));
    e.style.cssText = css;
    e.innerText = name2 || name2 === 0 ? type + "-" + name2 : type;
    parent2.children[0] ? parent2.insertBefore(e, parent2.children[0]) : parent2.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap3.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win4.innerWidth;
    _baseScreenHeight = _win4.innerHeight;
  };
  var _onResize = function _onResize2(force) {
    _scrollers.cache++;
    (force === true || !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25)) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f) {
      return f();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body2.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win4.innerHeight;
    _body2.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    _docEl2 = _doc4.documentElement;
    _body2 = _doc4.body;
    _root2 = [_win4, _doc4, _docEl2, _body2];
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t) {
      return t.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t) {
      var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
      (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
      return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l = _triggers.length, time2 = _getTime2(), recordVelocity = time2 - _time1 >= 50, scroll = l && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time2 - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time2;
      }
      if (_direction < 0) {
        _i = l;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent2 = spacer.parentNode;
      if (parent2) {
        parent2.insertBefore(pin, spacer);
        parent2.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value2;
      (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value2 = state[i + 1];
        p = state[i];
        if (value2) {
          style[p] = value2;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value2, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value2) && (value2 = value2(self2));
    if (_isString3(value2) && value2.substr(0, 3) === "max") {
      value2 = scrollerMax + (value2.charAt(4) === "=" ? _offsetToPx("0" + value2.substr(3), scrollerSize) : 0);
    }
    var time2 = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value2) || (value2 = +value2);
    if (!_isNumber3(value2)) {
      _isFunction3(trigger) && (trigger = trigger(self2));
      var offsets = (value2 || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self2) || _body2;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value2 = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value2 = gsap3.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value2));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self2[clampZeroProp] = value2 || -1e-3;
      value2 < 0 && (value2 = 0);
    }
    if (marker) {
      var position2 = value2 + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position2, direction, isStart && position2 > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position2 + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value2 = value2 / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time2);
    return containerAnimation ? value2 : Math.round(value2);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent2, top, left) {
    if (element.parentNode !== parent2) {
      var style = element.style, p, cs;
      if (parent2 === _body2) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap3.core.getCache(element).uncache = 1;
      parent2.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value2) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value2 = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = Math.round(value2);
      return last1;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value2) {
    var vars = {};
    vars[direction.p] = "+=" + value2;
    gsap3.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap3.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self2._startClamp = self2._endClamp = false;
      self2._dir = direction;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self2);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self2.scrubDuration = function(value2) {
        scrubSmooth = _isNumber3(value2) && value2;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value2) : scrubTween = gsap3.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self2);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        self2.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value2, st) {
          return _snapDirectional(snap3.snapTo)(value2, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap3.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity2 = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity2 / 2) * velocity2 / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self2);
            _isNumber3(endValue) || (endValue = naturalEnd);
            endScroll = Math.max(0, Math.round(start + endValue * change));
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity2 / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  self2.update();
                  lastSnap = scrollFunc();
                  if (animation && !isToggle) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self2));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        pinCache = gsap3.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap3.set(pin, {
          force3D: true
        });
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap3.getProperty(pin);
        pinSetter = gsap3.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content2 = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content2, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content2, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body2 : scroller);
          gsap3.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert, temp) {
        if (!temp) {
          return self2.kill(true);
        }
        var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r !== self2.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = self2;
            self2.update(r);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r || self2.update(r);
          _refreshing = prevRefreshing;
          self2.isReverted = r;
        }
      };
      self2.refresh = function(soft, force, position2, pinOffset) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self2);
        _refreshing = self2;
        if (tweenTo.tween && !position2) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        if (invalidateOnRefresh && animation) {
          animation.revert({
            kill: false
          }).invalidate();
          animation.getChildren && animation.getChildren(true, true, false).forEach(function(t) {
            return t.vars.immediateRender && t.render(0, true, true);
          });
        }
        self2.isReverted || self2.revert(true, true);
        self2._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position2) ? position2.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position2) ? position2.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position2)) {
          markerStartOffset = gsap3.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap3.getProperty(markerEndTrigger, direction.p);
        }
        while (i-- > 0) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap3.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._startClamp && (self2._startClamp += offset2);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap3.utils.clamp(0, 1, gsap3.utils.normalize(start, end, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap3.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i) {
              spacerState.push(direction.d, i + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i = _getSize(pin, direction);
            i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body2) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(false, true);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
          animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap3.utils.normalize(start, end, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap3.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap3.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self2.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self2);
          executingOnRefresh = false;
        }
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.labelToScroll = function(label) {
        return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name2) {
        var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
        return (_isString3(name2) ? a.filter(function(t) {
          return t.vars.preventOverlaps === name2;
        }) : a).filter(function(t) {
          return self2.direction > 0 ? t.end <= start : t.start >= end;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round3(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self2, onToggle);
              callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self2.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
        }, pinOffset);
        self2.update();
      };
      self2.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert(true, true);
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i = _triggers.indexOf(self2);
        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;
        _triggers.forEach(function(t) {
          return t.scroller === self2.scroller && (i = 1);
        });
        i || _refreshingAll || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self2 && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function(t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self2);
      };
      _triggers.push(self2);
      self2.enable(false, false);
      customRevertReturn && customRevertReturn(self2);
      if (animation && animation.add && !change) {
        var updateFunc = self2.update;
        self2.update = function() {
          self2.update = updateFunc;
          _scrollers.cache++;
          start || end || self2.refresh();
        };
        gsap3.delayedCall(0.01, self2.update);
        change = 0.01;
        start = end = 0;
      } else {
        self2.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted3) {
        gsap3 = core || _getGSAP3();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted3 = _enabled;
      }
      return _coreInitted3;
    };
    ScrollTrigger3.defaults = function defaults2(config3) {
      if (config3) {
        for (var p in config3) {
          _defaults2[p] = config3[p];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win4, "wheel", _onScroll3);
      _removeListener3(_doc4, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc4, "touchcancel", _passThrough3);
      _removeListener3(_body2, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win4 = window;
      _doc4 = document;
      _docEl2 = _doc4.documentElement;
      _body2 = _doc4.body;
      if (gsap3) {
        _toArray = gsap3.utils.toArray;
        _clamp4 = gsap3.utils.clamp;
        _context3 = gsap3.core.context || _passThrough3;
        _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win4.history.scrollRestoration || "auto";
        _lastScroll = _win4.pageYOffset || 0;
        gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body2) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap3);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win4, "wheel", _onScroll3);
          _root2 = [_win4, _doc4, _docEl2, _body2];
          if (gsap3.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap3.matchMedia(), p;
              for (p in vars) {
                mm.add(p, vars[p]);
              }
              return mm;
            };
            gsap3.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap3.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap3.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap3.matchMedia().add("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc4, "scroll", _onScroll3);
          var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value2() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body2);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          if (!bodyHasStyle) {
            _body2.setAttribute("style", "");
            _body2.removeAttribute("style");
          }
          _syncInterval = setInterval(_sync, 250);
          gsap3.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc4, "touchcancel", _passThrough3);
          _addListener3(_body2, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp2 = gsap3.utils.checkPrefix("transform");
          _stateProps.push(_transformProp2);
          _coreInitted3 = _getTime2();
          _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc4, "visibilitychange", function() {
            var w = _win4.innerWidth, h = _win4.innerHeight;
            if (_doc4.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f) {
          return f();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.13.0";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize(true) : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function(target) {
      var config3 = {};
      for (p in varsCopy) {
        config3[p] = varsCopy[p];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body2, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time2 = _getTime2(), cs;
    if (!cache._isScrollT || time2 - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time2;
    }
    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content2 = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale2 = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self2);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content2._gsap.y = _round3(parseFloat(content2._gsap.y) + scrollFuncY.offset) + "px";
      content2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content2._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round3(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content2 && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round3((parseFloat(content2 && content2._gsap.y) || 0) - scrollFuncY.offset);
          content2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content2._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content2 && gsap3.set(content2, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale2 > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale2;
      scale2 = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale2 && _allowNativePanning(target, scale2 > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap3.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self3);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self3, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize);
      _addListener3(_win4, "resize", onResize);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win4, "resize", onResize);
      ScrollTrigger2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self2 = new Observer(vars);
    self2.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap3.ticker.add(_passThrough3);
    onStopDelayedCall = self2._dc;
    tween = gsap3.to(self2, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self2;
  };
  ScrollTrigger2.sort = function(func) {
    if (_isFunction3(func)) {
      return _triggers.sort(func);
    }
    var scroll = _win4.pageYOffset || 0;
    ScrollTrigger2.getAll().forEach(function(t) {
      return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win4.innerHeight;
    });
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);

  // src/utils/scrollAnimation.ts
  var import_lottie_web = __toESM(require_lottie(), 1);
  gsapWithCSS.registerPlugin(ScrollTrigger2);
  function initScrollAnimation() {
    const scrollContainer = document.getElementById("scroll");
    if (!scrollContainer) {
      console.warn('Element with id "scroll" not found');
      return;
    }
    const bubbles = [
      { num: 1, top: 59, left: 79 },
      { num: 2, top: 90, left: 322 },
      { num: 3, top: 188, left: 523 },
      { num: 4, top: 239, left: 127 },
      { num: 5, top: 449, left: 104 },
      { num: 6, top: 608, left: 332 },
      { num: 7, top: 707, left: 147 },
      { num: 8, top: 722, left: 520 },
      { num: 9, top: 75, left: 721 },
      { num: 10, top: 210, left: 870 },
      { num: 11, top: 594, left: 675 },
      { num: 12, top: 732, left: 885 },
      { num: 13, top: 564, left: 1060 },
      { num: 14, top: 91, left: 1308 },
      { num: 15, top: 206, left: 1472 },
      { num: 16, top: 271, left: 1305 },
      { num: 17, top: 379, left: 1447 },
      { num: 18, top: 641, left: 1232 },
      { num: 19, top: 721, left: 1449 }
    ];
    bubbles.forEach(({ num, top, left }) => {
      const el = document.querySelector(`[bubble-number="${num}"]`);
      if (!el) return;
      el.style.position = "absolute";
      el.style.left = `${left}px`;
      const startTop = top + (Math.random() * 200 - 100);
      el.style.top = `${startTop}px`;
      gsapWithCSS.to(el, {
        top,
        duration: 1.5,
        ease: "power2.out"
      });
    });
    let lottieAnimation = null;
    const lottieElement = document.getElementById("section-lottie");
    if (lottieElement) {
      lottieAnimation = import_lottie_web.default.loadAnimation({
        container: lottieElement,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json"
      });
      lottieAnimation.goToAndStop(0, true);
    }
    const textElement = document.getElementById("reveal-text");
    const words = [];
    if (textElement) {
      const text2 = textElement.textContent?.trim() || "";
      textElement.textContent = "";
      const wordsArray = text2.split(/\s+/);
      for (let i = 0; i < wordsArray.length; i++) {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = wordsArray[i];
        wordSpan.style.opacity = "0.5";
        wordSpan.style.display = "inline-block";
        wordSpan.style.transition = "opacity 0.1s ease";
        wordSpan.classList.add("reveal-word");
        wordSpan.dataset.index = i.toString();
        wordSpan.style.marginRight = "0em";
        textElement.appendChild(wordSpan);
        words.push(wordSpan);
        if (i < wordsArray.length - 1) {
          const space = document.createTextNode(" ");
          textElement.appendChild(space);
        }
      }
    }
    const bubblesContainer = document.getElementById("bubbles");
    if (!bubblesContainer) {
      console.warn('Element with id "bubbles" not found');
    }
    ScrollTrigger2.create({
      trigger: "#scroll",
      start: "top top",
      end: "bottom bottom",
      markers: false,
      // Set to true during development
      scrub: 0.5,
      // Smoothing factor for animation (adds slight delay for smoother effect)
      onUpdate: (self2) => {
        const firstAnimProgress = 0.25;
        const secondAnimProgress = 0.5;
        const textRevealStart = secondAnimProgress;
        const textRevealEnd = textRevealStart + 0.3;
        const thirdAnimProgress = 0.75;
        const lottieAnimProgress = 0.95;
        if (self2.progress < firstAnimProgress) {
          const opacity = gsapWithCSS.utils.interpolate(1, 0, self2.progress / firstAnimProgress);
          gsapWithCSS.set('[data-scroll-item="1"]', { opacity });
        } else {
          gsapWithCSS.set('[data-scroll-item="1"]', { opacity: 0 });
        }
        if (self2.progress >= firstAnimProgress && self2.progress < secondAnimProgress) {
          const adjustedProgress = (self2.progress - firstAnimProgress) / (secondAnimProgress - firstAnimProgress);
          const opacity = gsapWithCSS.utils.interpolate(0, 1, adjustedProgress);
          gsapWithCSS.set('[data-scroll-item="2"]', { opacity });
        } else if (self2.progress < firstAnimProgress) {
          gsapWithCSS.set('[data-scroll-item="2"]', { opacity: 0 });
        } else {
          gsapWithCSS.set('[data-scroll-item="2"]', { opacity: 1 });
        }
        if (self2.progress >= textRevealStart && self2.progress <= textRevealEnd && words.length > 0) {
          const textProgress = (self2.progress - textRevealStart) / (textRevealEnd - textRevealStart);
          const wordsToReveal = Math.floor(textProgress * words.length);
          words.forEach((word, index2) => {
            if (index2 <= wordsToReveal) {
              word.style.opacity = "1";
            } else {
              word.style.opacity = "0.2";
            }
          });
        } else if (self2.progress < textRevealStart && words.length > 0) {
          words.forEach((word) => {
            word.style.opacity = "0.2";
          });
        } else if (self2.progress > textRevealEnd && words.length > 0) {
          words.forEach((word) => {
            word.style.opacity = "1";
          });
        }
        if (self2.progress >= secondAnimProgress && self2.progress < thirdAnimProgress) {
          const adjustedProgress = (self2.progress - secondAnimProgress) / (thirdAnimProgress - secondAnimProgress);
          const opacity = gsapWithCSS.utils.interpolate(0, 1, adjustedProgress);
          gsapWithCSS.set("#section-lottie", { opacity });
        } else if (self2.progress < secondAnimProgress) {
          gsapWithCSS.set("#section-lottie", { opacity: 0 });
        } else {
          gsapWithCSS.set("#section-lottie", { opacity: 1 });
        }
        if (self2.progress >= thirdAnimProgress) {
          const adjustedProgress = (self2.progress - thirdAnimProgress) / (1 - thirdAnimProgress);
          const opacity = gsapWithCSS.utils.interpolate(1, 0, adjustedProgress);
          gsapWithCSS.set("#hero-lottie", { opacity });
        } else {
          gsapWithCSS.set("#hero-lottie", { opacity: 1 });
        }
        if (lottieAnimation && self2.progress >= thirdAnimProgress && self2.progress <= lottieAnimProgress) {
          const lottieProgress = (self2.progress - thirdAnimProgress) / (lottieAnimProgress - thirdAnimProgress);
          const totalFrames = lottieAnimation.totalFrames;
          const currentFrame = Math.floor(lottieProgress * totalFrames);
          lottieAnimation.goToAndStop(currentFrame, true);
        } else if (lottieAnimation && self2.progress < thirdAnimProgress) {
          lottieAnimation.goToAndStop(0, true);
        } else if (lottieAnimation && self2.progress > lottieAnimProgress) {
          lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
        }
        if (bubblesContainer) {
          if (self2.progress >= lottieAnimProgress) {
            const bubbleProgress = (self2.progress - lottieAnimProgress) / (1 - lottieAnimProgress);
            const opacity = Math.min(1, bubbleProgress * 3);
            const yPosition = 100 * (1 - Math.pow(bubbleProgress, 0.33));
            gsapWithCSS.set(bubblesContainer, {
              opacity,
              y: `${yPosition}%`
            });
            if (bubbleProgress > 0.99) {
              console.log("Final bubble position:", yPosition);
            }
          } else {
            gsapWithCSS.set(bubblesContainer, {
              opacity: 0,
              y: "100%"
            });
          }
        }
      }
    });
    console.log("Scroll animations initialized for #scroll with Lottie animation, word-by-word text reveal, and bubble animation after Lottie (parallax removed)");
  }

  // src/utils/fadeAnimations.ts
  init_live_reload();
  function fadeIn(element, duration = 0.5, delay = 0, onComplete, ease2 = "power2.out") {
    gsapWithCSS.set(element, { autoAlpha: 0 });
    return gsapWithCSS.to(element, {
      duration,
      autoAlpha: 1,
      delay,
      ease: ease2,
      onComplete
    });
  }
  function fadeOut(element, duration = 0.5, delay = 0, onComplete, ease2 = "power2.out") {
    return gsapWithCSS.to(element, {
      duration,
      autoAlpha: 0,
      delay,
      ease: ease2,
      onComplete
    });
  }

  // src/utils/lottieLoader.ts
  init_live_reload();

  // src/utils/lottiePlayer.ts
  init_live_reload();
  var import_lottie_web2 = __toESM(require_lottie(), 1);
  function playLottieAnimation(container, animationUrl, options = {}) {
    const defaultOptions = {
      container,
      renderer: "svg",
      // 'svg', 'canvas', or 'html'
      loop: true,
      autoplay: true,
      path: animationUrl,
      ...options
    };
    const animation = import_lottie_web2.default.loadAnimation(defaultOptions);
    animation.addEventListener("DOMLoaded", () => {
      if (options.onDOMLoaded) {
        options.onDOMLoaded(animation);
      }
    });
    animation.addEventListener("data_ready", () => {
      if (options.onDataReady) {
        options.onDataReady(animation);
      }
    });
    animation.addEventListener("data_failed", () => {
      if (options.onError) {
        options.onError("Failed to load animation");
      }
    });
    return animation;
  }
  function destroyLottieAnimation(animation) {
    if (animation) {
      animation.destroy();
    }
  }

  // src/utils/lottieLoader.ts
  function loadAndPlayLottie(containerId, animationUrl, options) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found`);
      return null;
    }
    const loop = options?.loop ?? false;
    const autoplay = options?.autoplay ?? false;
    let animation = null;
    try {
      animation = playLottieAnimation(container, animationUrl, {
        loop,
        autoplay,
        renderer: "svg",
        onDataReady: () => {
          if (animation && !autoplay) {
            animation.play();
          }
        },
        onError: (error) => {
          console.error("Animation loading error:", error);
        }
      });
      return animation;
    } catch (error) {
      console.error("Failed to initialize animation:", error);
      return null;
    }
  }

  // src/index.ts
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  window.scrollTo(0, 0);
  document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const loaderLottie = "https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/682725b636da1042ae7797f8_H1_gradient.json";
    const heroLottie = "https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/68272532ccd07135e49d65f4_H2.json";
    const sectionLottie = "https://cdn.prod.website-files.com/65b94b2bab54c86c1cd618a8/6827264cc032f162afebc33f_Copy%20of%20h3______.json";
    const myAnimation = loadAndPlayLottie("lottie-loader", loaderLottie);
    if (myAnimation) {
      myAnimation.addEventListener("complete", () => {
        console.log("Lottie animation completed");
        fadeIn("#text-block-1", 1.5, 0.1, () => {
          console.log("Text block fade-in complete");
          fadeIn("#hero-lottie", 0, 0, () => {
            console.log("Hero lottie fade-in complete");
            loadAndPlayLottie("hero-lottie", heroLottie);
          });
          setTimeout(() => {
            fadeOut("#lottie-loader", 0, 0, () => {
              console.log("Loader fade-out complete");
              document.body.style.overflow = "";
              initScrollAnimation();
            });
          }, 500);
        });
      });
      window.addEventListener("beforeunload", () => {
        destroyLottieAnimation(myAnimation);
      });
    }
  });
})();
/*! Bundled license information:

lottie-web/build/player/lottie.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
