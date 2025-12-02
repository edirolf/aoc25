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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptRunner = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const util_1 = require("util");
const path = __importStar(require("path"));
const execAsync = (0, util_1.promisify)(child_process_1.exec);
class TypeScriptRunner {
    /**
     * Runs a TypeScript file dynamically using ts-node
     * @param filePath - Path to the TypeScript file to run
     */
    async runTsFile(filePath) {
        try {
            // Check if file exists
            await fs_1.promises.access(filePath);
            // Get absolute path
            const absolutePath = path.resolve(filePath);
            console.log(`🚀 Running TypeScript file: ${absolutePath}`);
            console.log('─'.repeat(50));
            // Execute the TypeScript file using ts-node
            const { stdout, stderr } = await execAsync(`npx ts-node "${absolutePath}"`);
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.error('Error output:', stderr);
            }
            console.log('─'.repeat(50));
            console.log('✅ Execution completed');
        }
        catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('ENOENT')) {
                    console.error(`❌ File not found: ${filePath}`);
                }
                else {
                    console.error(`❌ Error running file: ${error.message}`);
                }
            }
            else {
                console.error('❌ Unknown error occurred');
            }
        }
    }
    /**
     * Lists all TypeScript files in the current directory
     */
    async listTsFiles() {
        try {
            const files = await fs_1.promises.readdir('.');
            return files.filter(file => file.endsWith('.ts'));
        }
        catch (error) {
            console.error('Error reading directory:', error);
            return [];
        }
    }
    /**
     * Interactive mode to select and run a TypeScript file
     */
    async interactive() {
        console.log('🔍 Available TypeScript files:');
        const tsFiles = await this.listTsFiles();
        if (tsFiles.length === 0) {
            console.log('No TypeScript files found in current directory');
            return;
        }
        tsFiles.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        console.log('\nTo run a specific file, use: npm run exec <filename>');
        console.log('Example: npm run exec example.ts');
    }
}
exports.TypeScriptRunner = TypeScriptRunner;
// Main execution logic
async function main() {
    const runner = new TypeScriptRunner();
    const args = process.argv.slice(2);
    if (args.length === 0) {
        // Interactive mode - show available files
        await runner.interactive();
    }
    else {
        // Run the specified file
        const filePath = args[0];
        await runner.runTsFile(filePath);
    }
}
// Run if this file is executed directly
if (require.main === module) {
    main().catch(console.error);
}
//# sourceMappingURL=runner.js.map