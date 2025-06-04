const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function startNgrok() {
  try {
    // Start Vite development server
    console.log('Starting Vite development server...');
    const viteProcess = exec('npm run dev');

    // Wait for Vite to start
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Start ngrok
    console.log('Starting ngrok tunnel...');
    const ngrokProcess = exec('npm run ngrok');

    // Forward ngrok output
    ngrokProcess.stdout.on('data', data => console.log(data.toString()));
    ngrokProcess.stderr.on('data', data => console.error(data.toString()));

    // Handle Ctrl+C
    process.on('SIGINT', () => {
      console.log('\nShutting down...');
      viteProcess.kill();
      ngrokProcess.kill();
      process.exit();
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

startNgrok();
