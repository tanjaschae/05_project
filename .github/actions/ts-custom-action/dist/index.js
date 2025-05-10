"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const allowedInput_1 = require("./allowedInput");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const javaVersion = core.getInput('java-version');
            const distribution = core.getInput('distribution', { required: true });
            const javaPackage = core.getInput('java-package');
            if ((0, allowedInput_1.isAllowed)(javaVersion, "version") && (0, allowedInput_1.isAllowed)(distribution, "distribution") && (0, allowedInput_1.isAllowed)(javaPackage, "package")) {
                console.log(`${javaVersion.toUpperCase()} is a valid fruit`);
            }
            else {
                console.log(`${javaVersion} is not a valid fruit`);
            }
            // OpenJDK21U-jdk_x64_linux_hotspot_21.0.7_6.tar.gz temurin
            // OpenJDK11U-jdk_x64_linux_hotspot_11.0.27_6.tar.gz
            // zulu21.42.19-ca-jdk21.0.7-linux_x64.tar.gz zulu
            // jdk-24_linux-x64_bin.tar.gz oracle
            core.notice(`First try with ${javaVersion} ${distribution} ${javaPackage}`);
            core.setOutput('distribution', distribution);
            core.setOutput('version', javaVersion);
            core.setOutput('path', "java/home/path");
        }
        catch (error) {
            if (error instanceof Error)
                core.setFailed(error.message);
        }
    });
}
run();
