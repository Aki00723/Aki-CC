import { RGB } from './types';

export const PDF_CONFIG = {
  pageSize: 'A4',
  margins: {
    top: 40,
    right: 20,
    bottom: 40,
    left: 20
  },
  colors: {
    primary: [236, 72, 153] as RGB, // Pink
    text: [31, 41, 55] as RGB, // Dark gray
    textLight: [107, 114, 128] as RGB, // Medium gray
    border: [229, 231, 235] as RGB, // Light gray
    background: [253, 242, 248] as RGB // Light pink
  },
  fonts: {
    sizes: {
      title: 24,
      heading: 18,
      subheading: 16,
      body: 12,
      small: 10
    }
  }
};