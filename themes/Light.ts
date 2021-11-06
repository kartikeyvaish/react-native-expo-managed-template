import { DefaultTheme } from '@react-navigation/native';

import ColorPallete from '../utils/ColorPallete';

const light = {
    ...DefaultTheme,
    dark: false,
    colors: {
        primary: ColorPallete.primary,
        background: ColorPallete.background,
        text: ColorPallete.text,
        card: ColorPallete.card,
        border: ColorPallete.border,
        notification: ColorPallete.notification,
    },
};

export default light;