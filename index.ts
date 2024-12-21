import * as fs from 'fs';

export function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function createIndexHtmlFile(): void {
    const content = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Index</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 50px;
      }
      h1 {
        color: #4CAF50;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Simple Page</h1>
    <p>This is a simple index.html file created with TypeScript.</p>
  </body>
  </html>`;
  
    const filePath = './index.html';
  
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error writing the file:', err);
      } else {
        console.log(`index.html has been created successfully at ${filePath}`);
      }
    });
  }
  
  // Call the function to create the file
  createIndexHtmlFile();