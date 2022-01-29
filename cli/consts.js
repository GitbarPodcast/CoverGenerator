"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.PROMPTS = void 0;
var theme_1 = require("../src/theme");
exports.PROMPTS = [
    {
        type: "text",
        name: "name",
        message: "Name of the guest or title",
        validate: function (value) { return (value.length > 2 ? true : "Name is required"); }
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
        type: "toggle",
        name: "removeBG",
        message: "Remove backgorund?",
        initial: true,
        active: "yes",
        inactive: "no"
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
];
