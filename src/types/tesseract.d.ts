export * from 'tesseract.js';

declare module 'tesseract.js' {
  type LanguageKey = 'AFR' | 'AMH' | 'ARA' | 'ASM' | 'AZE' | 'AZE_CYRL' | 'BEL' | 'BEN' | 'BOD' | 'BOS' | 'BUL' | 'CAT' | 'CEB' | 'CES' | 'CHI_SIM' | 'CHI_TRA' | 'CHR' | 'CYM' | 'DAN' | 'DEU' | 'DZO' | 'ELL' | 'ENG' | 'ENM' | 'EPO' | 'EST' | 'EUS' | 'FAS' | 'FIN' | 'FRA' | 'FRK' | 'FRM' | 'GLE' | 'GLG' | 'GRC' | 'GUJ' | 'HAT' | 'HEB' | 'HIN' | 'HRV' | 'HUN' | 'IKU' | 'IND' | 'ISL' | 'ITA' | 'ITA_OLD' | 'JAV' | 'JPN' | 'KAN' | 'KAT' | 'KAT_OLD' | 'KAZ' | 'KHM' | 'KIR' | 'KOR' | 'KUR' | 'LAO' | 'LAT' | 'LAV' | 'LIT' | 'MAL' | 'MAR' | 'MKD' | 'MLT' | 'MSA' | 'MYA' | 'NEP' | 'NLD' | 'NOR' | 'ORI' | 'PAN' | 'POL' | 'POR' | 'PUS' | 'RON' | 'RUS' | 'SAN' | 'SIN' | 'SLK' | 'SLV' | 'SPA' | 'SPA_OLD' | 'SQI' | 'SRP' | 'SRP_LATN' | 'SWA' | 'SWE' | 'SYR' | 'TAM' | 'TEL' | 'TGK' | 'TGL' | 'THA' | 'TIR' | 'TUR' | 'UIG' | 'UKR' | 'URD' | 'UZB' | 'UZB_CYRL' | 'VIE' | 'YID';

  export const languages: Record<LanguageKey, string>;
}
