import { Buffer } from 'node:buffer';
import { createWorker } from 'tesseract.js';
import { defineTextExtractor } from '../extractors.models';

export const imageExtractorDefinition = defineTextExtractor({
  name: 'image',
  mimeTypes: [
    'image/png',
    'image/jpeg',
    'image/webp',
    'image/gif',
  ],
  extract: async ({ arrayBuffer, config }) => {
    const { languages } = config.tesseract;

    const buffer = Buffer.from(arrayBuffer);

    const worker = await createWorker(languages);

    const { data: { text } } = await worker.recognize(buffer);
    await worker.terminate();

    return { content: text };
  },
});
