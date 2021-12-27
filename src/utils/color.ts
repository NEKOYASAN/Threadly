type Theme = {
  background: string;

  mainPrimary: string;
  mainSecondly: string;

  textPrimary: string;
  textSecondly: string;

  buttonPrimary: string;
  buttonSecondly: string;
};

const light: Theme = {
  background: '#f5f5f5',

  mainPrimary: '#bdd7ee',
  mainSecondly: '#ecca63',

  textPrimary: '#010101',
  textSecondly: '#bebebe',

  buttonPrimary: '#1d9bf0',
  buttonSecondly: '#cccccc',
};

export const colors = (colorName: keyof Theme): string => light[colorName];
