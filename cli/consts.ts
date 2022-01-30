import { PromptObject } from "prompts";
import { VARIANTS, THEMES } from "../src/theme";

export interface Conf {
  name: string;
  surname: string;
  episodeNumber: string;
  image: string;
  generateImage: boolean;
  theme: string;
}

export const PROMPTS: PromptObject[] = [
  {
    type: "text",
    name: "name",
    message: "Name of the guest or title",
    validate: (value: string) => (value.length > 2 ? true : "Name is required"),
  },
  {
    type: "text",
    name: "surname",
    message: "Surname of the guest or subtitle",
    validate: (value: string) =>
      value.length > 2 ? true : "Surname is required",
  },
  {
    type: "number",
    name: "episodeNumber",
    message: "Episode Number",
  },
  {
    type: "text",
    name: "company",
    message: "Guest's company",
    validate: (value: string) =>
      value.length > 2 ? true : "Company is required",
  },
  {
    type: "toggle",
    name: "removeBG",
    message: "Remove backgorund?",
    initial: true,
    active: "yes",
    inactive: "no",
  },
  {
    type: "text",
    name: "image",
    message: "Image",
    validate: (value: string) =>
      value.length > 2 ? true : "Image is required",
  },
  {
    type: "select",
    name: "theme",
    message: "Pick theme",
    choices: [
      { title: "auto", value: null },
      ...Object.keys(THEMES).map((e) => ({ title: e, value: e })),
    ],
  },
  {
    type: "select",
    name: "variant",
    message: "Pick variant",
    choices: [
      { title: "auto", value: null },
      ...Object.keys(VARIANTS).map((e) => ({ title: e, value: e })),
    ],
  },
];
