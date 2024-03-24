import { relative } from 'path';
import process from 'process';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write --ignore-unknown ${filenames.join(' ')}`;

export default {
  '*.{js,jsx,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
};
