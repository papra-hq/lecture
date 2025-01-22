import { Buffer } from 'node:buffer';
import { exec } from 'node:child_process';
import { env } from 'node:process';
import { defineTextExtractor } from '../extractors.models';

export const imageExtractorDefinition = defineTextExtractor({
  name: 'image',
  mimeTypes: [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
  ],
  extract: async ({ arrayBuffer }) => {
    const binary = env.LECTURE_TESSERACT_BINARY ?? 'tesseract';

    const { stdout } = await new Promise<{ stdout: string }>((resolve, reject) => {
      const child = exec(`${binary} stdin stdout`, (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout });
        }
      });

      child.stdin.write(Buffer.from(arrayBuffer));
      child.stdin.end();
    });

    return {
      content: stdout,
    };
  },
});
