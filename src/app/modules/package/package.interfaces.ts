enum SubscriptionTier {
  SILVER = "SILVER",
  GOLD = "GOLD",
  DIAMOND = "DIAMOND",
}

enum FileType {
  PDF = "PDF",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
}

export type TPackage = {
  name: SubscriptionTier;
  price: number;
  maxFolders: number;
  maxNestingLevel: number;
  allowedFileTypes: FileType[];
  maxFileSizeMB: number;
  totalFileLimit: number;
  filesPerFolder: number;
  isActive: boolean;
};
