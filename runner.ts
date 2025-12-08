import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { promisify } from 'util';
import * as path from 'path';

const execAsync = promisify(exec);

class TypeScriptRunner {
    /**
     * Runs a TypeScript file dynamically using ts-node
     * @param filePath - Path to the TypeScript file to run
     */
    async runTsFile(filePath: string): Promise<void> {
        try {
            // Check if file exists
            await fs.access(filePath);
            
            // Get absolute path
            const absolutePath = path.resolve(filePath);
            
            console.log(`🚀 Running TypeScript file: ${absolutePath}`);
            console.log('─'.repeat(50));
            
            // Execute the TypeScript file using ts-node
            const { stdout, stderr } = await execAsync(`npx --stack-size=4000 ts-node  "${absolutePath}"`);
            
            if (stdout) {
                console.log(stdout);
            }
            
            if (stderr) {
                console.error('Error output:', stderr);
            }
            
            console.log('─'.repeat(50));
            console.log('✅ Execution completed');
            
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('ENOENT')) {
                    console.error(`❌ File not found: ${filePath}`);
                } else {
                    console.error(`❌ Error running file: ${error.message}`);
                }
            } else {
                console.error('❌ Unknown error occurred');
            }
        }
    }

    /**
     * Lists all TypeScript files in the current directory
     */
    async listTsFiles(): Promise<string[]> {
        try {
            const files = await fs.readdir('.');
            return files.filter(file => file.endsWith('.ts'));
        } catch (error) {
            console.error('Error reading directory:', error);
            return [];
        }
    }

    /**
     * Interactive mode to select and run a TypeScript file
     */
    async interactive(): Promise<void> {
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

// Main execution logic
async function main() {
    const runner = new TypeScriptRunner();
    const args = process.argv.slice(2);

    if (args.length === 0) {
        // Interactive mode - show available files
        await runner.interactive();
    } else {
        // Run the specified file
        const filePath = args[0];
        await runner.runTsFile(filePath);
    }
}

// Run if this file is executed directly
if (require.main === module) {
    main().catch(console.error);
}

export { TypeScriptRunner };