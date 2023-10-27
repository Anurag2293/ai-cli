import {Args, Command, Flags} from '@oclif/core';

export default class Create extends Command {

    async run(): Promise<void> {
        this.log('Hello from Create!')
    }
}