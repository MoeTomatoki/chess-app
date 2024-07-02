type Account = {
  id: number;
  displayName: string;
  version: number;
};

type ColorState = {
  colorBg: string | null;
  colorOpacity: string | null;
  colorError: boolean;
} | null;
