import * as core from '@actions/core';

async function run(): Promise<void> {
    try {
        const input = core.getInput('example-input');
        core.info(`Hello, ${input}!`);

        // Set an example output
        core.setOutput('example-output', `Hello, ${input}!`);
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();
