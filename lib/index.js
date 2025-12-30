"use strict";

const chalk = require("chalk");

async function Loading() {
    const LoadingSystem = [
        chalk.green("《 ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 0%"),
        chalk.greenBright("《 ▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 5%"),
        chalk.yellow("《 ▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 10%"),
        chalk.yellowBright("《 ▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 20%"),
        chalk.red("《 ▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 30%"),
        chalk.redBright("《 ▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 》 40%"),
        chalk.magenta("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒ 》 50%"),
        chalk.magentaBright("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒ 》 60%"),
        chalk.cyan("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒ 》 70%"),
        chalk.cyanBright("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒ 》 80%"),
        chalk.blue("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒ 》 90%"),
        chalk.blueBright("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒ 》 95%"),
        chalk.white("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒ 》 98%"),
        chalk.whiteBright("《 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 》 100%"),
        chalk.green("[ SYSTEM ] Loading Process Completed."),
        chalk.greenBright("[ SYSTEM ] Loading Process Completed.."),
        chalk.green("[ SYSTEM ] Loading Process Completed..."),
        chalk.greenBright("[ SYSTEM ] Loading Process Completed....")
    ];
    
    console.log(chalk.green('🐾 Starting System...'));
    
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    console.clear();
    
    for (let i = 0; i < LoadingSystem.length; i++) {
        console.log(LoadingSystem[i]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.clear();
    }
}
Loading()

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
