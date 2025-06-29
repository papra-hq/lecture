import type { ExtractorConfig, PartialExtractorConfig } from './types';
import { languages as tesseractLanguages } from 'tesseract.js';

const languages = Object.values(tesseractLanguages);

export function parseConfig({ rawConfig = {} }: { rawConfig?: PartialExtractorConfig } = {}): { config: ExtractorConfig } {
  const ocrLanguages = rawConfig.tesseract?.languages ?? [];
  const invalidLanguages = ocrLanguages.filter(language => !languages.includes(language));

  if (invalidLanguages.length > 0) {
    throw new Error(`Invalid languages for tesseract: ${invalidLanguages.join(', ')}. Valid languages are: ${languages.join(', ')}`);
  }

  return {
    config: {
      tesseract: {
        languages: ocrLanguages.length > 0 ? ocrLanguages : ['eng'],
      },
    },
  };
}
