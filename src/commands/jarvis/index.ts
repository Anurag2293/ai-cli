import {Args, Command, Flags} from '@oclif/core';

export default class Jarvis extends Command {
    static description = 'Jarvis is a command to run the AI assistant CLI';

    static args = {
        prompt: Args.string({description: 'Prompt to run', required: true}),
    }

    async run(): Promise<void> {
        const {args, flags} = await this.parse(Jarvis);


        this.log(`Hello from Jarvis! ${args.prompt}`)
    }
}