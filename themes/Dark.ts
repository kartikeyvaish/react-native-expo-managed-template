import { DefaultTheme } from '@react-navigation/native';

import ColorPallete from '../utils/ColorPallete';

const dark = {
    ...DefaultTheme,
    dark: true,
    colors: {
        primary: ColorPallete.primaryDark,
        background: ColorPallete.backgroundDark,
        card: ColorPallete.cardDark,
        text: ColorPallete.textDark,
        border: ColorPallete.borderDark,
        notification: ColorPallete.notificationDark,
    },
};

export default dark;