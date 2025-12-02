// Example 3: Async operations and promises
import { promises as fs } from 'fs';

async function createTempFile(): Promise<string> {
    const filename = `temp_${Date.now()}.txt`;
    const content = `This is a temporary file created at ${new Date().toISOString()}`;
    
    try {
        await fs.writeFile(filename, content);
        console.log(`📝 Created temporary file: ${filename}`);
        return filename;
    } catch (error) {
        console.error('Error creating file:', error);
        throw error;
    }
}

async function readAndDeleteFile(filename: string): Promise<void> {
    try {
        const content = await fs.readFile(filename, 'utf-8');
        console.log(`📖 File content: ${content}`);
        
        await fs.unlink(filename);
        console.log(`🗑️ Deleted file: ${filename}`);
    } catch (error) {
        console.error('Error reading/deleting file:', error);
    }
}

async function simulateApiCall(): Promise<{ id: number; message: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Math.floor(Math.random() * 1000),
                message: 'Hello from simulated API!'
            });
        }, 1000);
    });
}

async function main(): Promise<void> {
    console.log('🚀 Async Operations Demo');
    console.log('='.repeat(30));

    try {
        // File operations
        const filename = await createTempFile();
        await readAndDeleteFile(filename);

        console.log('\n⏱️ Simulating API call (1 second delay)...');
        const apiResponse = await simulateApiCall();
        console.log(`📡 API Response:`, apiResponse);

        // Parallel operations
        console.log('\n🔄 Running parallel operations...');
        const startTime = Date.now();
        
        const promises = [
            simulateApiCall(),
            simulateApiCall(),
            simulateApiCall()
        ];
        
        const results = await Promise.all(promises);
        const endTime = Date.now();
        
        console.log(`✨ All operations completed in ${endTime - startTime}ms`);
        results.forEach((result, index) => {
            console.log(`Result ${index + 1}:`, result);
        });

    } catch (error) {
        console.error('Error in main function:', error);
    }
}

// Run the demo
main();