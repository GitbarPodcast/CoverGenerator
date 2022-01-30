"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var consts_1 = require("./consts");
var prompts_1 = __importDefault(require("prompts"));
var cloudinary = __importStar(require("cloudinary"));
var server_1 = __importDefault(require("./server"));
var printer_1 = __importDefault(require("./printer"));
var dotenv_1 = __importDefault(require("dotenv"));
var fileUtils_1 = require("./fileUtils");
var crypto_1 = require("crypto");
dotenv_1["default"].config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var response, tempFileSeed, rawImage, alphaImage, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, prompts_1["default"])(consts_1.PROMPTS)];
                case 1:
                    response = _a.sent();
                    tempFileSeed = (0, crypto_1.randomUUID)();
                    return [4 /*yield*/, (0, fileUtils_1.downloadImage)(response.image, tempFileSeed)];
                case 2:
                    rawImage = _a.sent();
                    if (!process.env.REMOVE_BG_API_KEY) {
                        throw new Error("REMOVE_BG_API_KEY is not set");
                    }
                    if (!response.removeBG) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, fileUtils_1.removeBackground)(rawImage, process.env.REMOVE_BG_API_KEY, tempFileSeed)];
                case 3:
                    alphaImage = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    alphaImage = rawImage;
                    _a.label = 5;
                case 5: return [4 /*yield*/, (0, fileUtils_1.applyEffects)(alphaImage)];
                case 6:
                    url = _a.sent();
                    response.image = url;
                    return [4 /*yield*/, (0, fileUtils_1.downloadFile)(url, "dest")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, (0, server_1["default"])(response, printer_1["default"])];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
function print() { }
