import readline from 'readline';

require('dotenv').config();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.write('Hello, world!\n');
process.exit(0);
