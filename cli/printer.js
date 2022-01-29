"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var puppeteer_1 = __importDefault(require("puppeteer"));
var FORMATS = {
    podcast: { width: 1400, height: 1400 },
    facebook: { width: 1200, height: 630 }
};
exports["default"] = (function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, _i, _a, key;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, puppeteer_1["default"].launch()];
            case 1:
                browser = _b.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _b.sent();
                console.log(address);
                return [4 /*yield*/, page.goto(address)];
            case 3:
                _b.sent();
                _i = 0, _a = Object.keys(FORMATS);
                _b.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 9];
                key = _a[_i];
                return [4 /*yield*/, page.setViewport(FORMATS[key])];
            case 5:
                _b.sent();
                return [4 /*yield*/, page.screenshot({ path: "./tmp/".concat(key, ".png") })];
            case 6:
                _b.sent();
                return [4 /*yield*/, sleep(2000)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _i++;
                return [3 /*break*/, 4];
            case 9: return [4 /*yield*/, browser.close()];
            case 10:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); });
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
