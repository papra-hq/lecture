import type { PartialExtractorConfig } from './types';
import { parseConfig } from './config';
import { getExtractor } from './extractors.registry';

export async function extractText({ arrayBuffer, mimeType, config: rawConfig }: { arrayBuffer: ArrayBuffer; mimeType: string; config?: PartialExtractorConfig }): Promise<{
  extractorName: string | undefined;
  textContent: string | undefined;
  error?: Error;
}> {
  const { config } = parseConfig({ rawConfig });
  const { extractor } = getExtractor({ mimeType });

  if (!extractor) {
    return {
      extractorName: undefined,
      textContent: undefined,
    };
  }

  try {
    const { content } = await extractor.extract({ arrayBuffer, config });

    return {
      extractorName: extractor.name,
      textContent: content,
    };
  } catch (error) {
    return {
      error,
      extractorName: extractor.name,
      textContent: undefined,
    };
  }
}

export async function extractTextFromBlob({ blob, config }: { blob: Blob; config?: PartialExtractorConfig }) {
  const arrayBuffer = await blob.arrayBuffer();
  const mimeType = blob.type;

  return extractText({ arrayBuffer, mimeType, config });
}

export async function extractTextFromFile({ file, config }: { file: File; config?: PartialExtractorConfig }) {
  return extractTextFromBlob({ blob: file, config });
}
