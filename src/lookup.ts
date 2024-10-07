export interface LookupTable {
  origin: string;
  converted: string;
}

export const LookupTables = {
  ROT5: {
    origin: "0123456789",
    converted: "5678901234",
  },
  ROT13: {
    origin: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    converted: "NOPQRSTUVWXYZABCDEFGHIJKLM",
  },
  ROT18: {
    origin: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    converted: "5678901234NOPQRSTUVWXYZABCDEFGHIJKLM",
  },
  ROT47: {
    origin:
      "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    converted:
      "PQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNO",
  },
} as const satisfies { [key: string]: LookupTable };

export type LookupTableName = keyof typeof LookupTables;
