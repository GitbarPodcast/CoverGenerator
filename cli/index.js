"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var theme_1 = require("./../src/theme");
var fastify_1 = __importDefault(require("fastify"));
var fastify_static_1 = __importDefault(require("fastify-static"));
var path = __importStar(require("path"));
var pfs = __importStar(require("fs/promises"));
var fs = __importStar(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
var prompts_1 = __importDefault(require("prompts"));
var axios_1 = __importDefault(require("axios"));
var form_data_1 = __importDefault(require("form-data"));
var cloudinary = __importStar(require("cloudinary"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
console.log(process.env);
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var cover, response, _a, e_1, injectHtml, server;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cover = {
                        name: null,
                        surname: null,
                        episodeNumber: null,
                        imageUrl: null,
                        generateImage: false,
                        theme: null
                    };
                    console.log("".concat(chalk_1["default"].blue("Welcome"), " in the cover generator!"));
                    return [4 /*yield*/, (0, prompts_1["default"])([
                            {
                                type: "text",
                                name: "name",
                                message: "Name of the guest or title",
                                validate: function (value) {
                                    return value.length > 2 ? true : "Name is required";
                                }
                            },
                            {
                                type: "text",
                                name: "surname",
                                message: "Surname of the guest or subtitle",
                                validate: function (value) {
                                    return value.length > 2 ? true : "Surname is required";
                                }
                            },
                            {
                                type: "number",
                                name: "episodeNumber",
                                message: "Episode Number"
                            },
                            {
                                type: "text",
                                name: "company",
                                message: "Guest's company",
                                validate: function (value) {
                                    return value.length > 2 ? true : "Company is required";
                                }
                            },
                            {
                                type: "text",
                                name: "image",
                                message: "Image",
                                validate: function (value) {
                                    return value.length > 2 ? true : "Image is required";
                                }
                            },
                            {
                                type: "confirm",
                                name: "imageParse",
                                message: "Do you want to edit image?",
                                initial: true
                            },
                            {
                                type: "select",
                                name: "theme",
                                message: "Pick theme",
                                choices: __spreadArray([
                                    { title: "auto", value: null }
                                ], Object.keys(theme_1.THEMES).map(function (e) { return ({ title: e, value: e }); }), true)
                            },
                            {
                                type: "select",
                                name: "variant",
                                message: "Pick variant",
                                choices: __spreadArray([
                                    { title: "auto", value: null }
                                ], Object.keys(theme_1.VARIANTS).map(function (e) { return ({ title: e, value: e }); }), true)
                            },
                        ])];
                case 1:
                    response = _b.sent();
                    if (!response.imageParse) return [3 /*break*/, 7];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 6, , 7]);
                    return [4 /*yield*/, downloadBG(response.image)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, removeBG()];
                case 4:
                    _b.sent();
                    _a = response;
                    return [4 /*yield*/, applyEffects()];
                case 5:
                    _a.image = _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _b.sent();
                    console.error(e_1);
                    throw e_1;
                case 7:
                    injectHtml = "\n  <script>\n    window.__COVER__ = ".concat(JSON.stringify(response), "\n  </script>\n");
                    server = (0, fastify_1["default"])({ logger: { level: "trace" } });
                    server.register(fastify_static_1["default"], {
                        root: path.join(__dirname, "../dist"),
                        index: false
                    });
                    server.get("/", function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
                        var html;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, pfs.readFile(path.join(__dirname, "../dist/index.html"), "utf8")];
                                case 1:
                                    html = (_a.sent()).replace("<title>Vite App</title>", injectHtml);
                                    reply.type("text/html").send(html);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    server.listen(8080, function (err, address) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
                        console.log("Server listening at ".concat(address));
                    });
                    return [2 /*return*/];
            }
        });
    });
})();
function downloadBG(url) {
    return __awaiter(this, void 0, void 0, function () {
        var p, writer, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    p = path.resolve(__dirname, "../tmp", "bg.png");
                    writer = fs.createWriteStream(p);
                    return [4 /*yield*/, (0, axios_1["default"])({
                            url: url,
                            method: "GET",
                            responseType: "stream"
                        })];
                case 1:
                    response = _a.sent();
                    response.data.pipe(writer);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            writer.on("finish", resolve);
                            writer.on("error", reject);
                        })];
            }
        });
    });
}
function removeBG() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var p, dest, formData, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    p = path.resolve(__dirname, "../tmp", "bg.png");
                    dest = path.resolve(__dirname, "../tmp", "no-bg.png");
                    formData = new form_data_1["default"]();
                    formData.append("size", "small");
                    formData.append("image_file", fs.createReadStream(p), path.basename(p));
                    return [4 /*yield*/, (0, axios_1["default"])({
                            method: "post",
                            url: "https://api.remove.bg/v1.0/removebg",
                            data: formData,
                            responseType: "arraybuffer",
                            headers: __assign(__assign({}, formData.getHeaders()), { "X-Api-Key": (_a = process.env.REMOVEBG_API_KEY) !== null && _a !== void 0 ? _a : "" })
                        })];
                case 1:
                    response = _b.sent();
                    fs.writeFileSync(dest, response.data);
                    return [2 /*return*/];
            }
        });
    });
}
function applyEffects() {
    return __awaiter(this, void 0, void 0, function () {
        var source, a, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    source = path.resolve(__dirname, "../tmp", "no-bg.png");
                    return [4 /*yield*/, cloudinary.v2.uploader.upload(source)];
                case 1:
                    a = _a.sent();
                    return [4 /*yield*/, cloudinary.v2.url(a.public_id, {
                            width: 800,
                            height: 800,
                            gravity: "face",
                            crop: "crop",
                            zoom: "0.7",
                            effect: "vectorize:detail:1.0:corners:40:colors:5",
                            format: "svg"
                        })];
                case 2:
                    url = _a.sent();
                    return [2 /*return*/, url];
            }
        });
    });
}
