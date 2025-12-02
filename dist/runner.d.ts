declare class TypeScriptRunner {
    /**
     * Runs a TypeScript file dynamically using ts-node
     * @param filePath - Path to the TypeScript file to run
     */
    runTsFile(filePath: string): Promise<void>;
    /**
     * Lists all TypeScript files in the current directory
     */
    listTsFiles(): Promise<string[]>;
    /**
     * Interactive mode to select and run a TypeScript file
     */
    interactive(): Promise<void>;
}
export { TypeScriptRunner };
//# sourceMappingURL=runner.d.ts.map