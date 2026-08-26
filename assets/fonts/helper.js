import { Platform } from 'react-native';

export const getFontFamily = (baseFont = 'Inter', weight = '400', isItalic = false) => {
  // In iOS the PostScript name includes the "18pt", in Android it goes directly.
  const prefix = Platform.OS === 'ios' ? `${baseFont}18pt` : baseFont;
  const separator = Platform.OS === 'ios' ? '-' : '-'; 

  let styleName = 'Regular';

  switch (weight) {
    case '100':
      styleName = isItalic ? 'ThinItalic' : 'Thin';
      break;
    case '200':
      styleName = isItalic ? 'ExtraLightItalic' : 'ExtraLight';
      break;
    case '300':
      styleName = isItalic ? 'LightItalic' : 'Light';
      break;
    case 'normal':
    case '400':
      styleName = isItalic ? 'Italic' : 'Regular';
      break;
    case '500':
      styleName = isItalic ? 'MediumItalic' : 'Medium';
      break;
    case '600':
      styleName = isItalic ? 'SemiBoldItalic' : 'SemiBold';
      break;
    case 'bold':
    case '700':
      styleName = isItalic ? 'BoldItalic' : 'Bold';
      break;
    case '800':
      styleName = isItalic ? 'ExtraBoldItalic' : 'ExtraBold';
      break;
    case '900':
      styleName = isItalic ? 'BlackItalic' : 'Black';
      break;
    default:
      styleName = isItalic ? 'Italic' : 'Regular';
      break;
  }

  return `${prefix}${separator}${styleName}`;
};