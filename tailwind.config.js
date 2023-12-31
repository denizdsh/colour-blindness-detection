/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        "theme-sm": "0.625rem",
        "theme-default": "1rem",
        "theme-md": "1.5rem",
        "theme-lg": "2rem",
        "theme-xl": "4rem",
        "theme-full": "9999px",
        "theme-circle": "50%",
      },
      colors: {
        md: {
          source: "#343541",
          dark: {
            primary: "#BCC3FF",
            "on-primary": "#1A2678",
            "primary-container": "#333F90",
            "on-primary-container": "#DFE0FF",
            "primary-fixed": "#DFE0FF",
            "on-primary-fixed": "#000D60",
            "primary-fixed-dim": "#BCC3FF",
            "on-primary-fixed-variant": "#333F90",
            secondary: "#C4C5DD",
            "on-secondary": "#2D2F42",
            "secondary-container": "#434559",
            "on-secondary-container": "#E0E1F9",
            "secondary-fixed": "#E0E1F9",
            "on-secondary-fixed": "#181A2C",
            "secondary-fixed-dim": "#C4C5DD",
            "on-secondary-fixed-variant": "#434559",
            tertiary: "#E6BAD7",
            "on-tertiary": "#45263D",
            "tertiary-container": "#5D3C54",
            "on-tertiary-container": "#FFD7F0",
            "tertiary-fixed": "#FFD7F0",
            "on-tertiary-fixed": "#2D1127",
            "tertiary-fixed-dim": "#E6BAD7",
            "on-tertiary-fixed-variant": "#5D3C54",
            error: "#FFB4AB",
            "on-error": "#690005",
            "error-container": "#93000A",
            "on-error-container": "#FFDAD6",
            outline: "#90909A",
            background: "#1B1B1F",
            "on-background": "#E4E1E6",
            surface: "#131316",
            "on-surface": "#C8C5CA",
            "surface-variant": "#46464F",
            "on-surface-variant": "#C7C5D0",
            "inverse-surface": "#E4E1E6",
            "inverse-on-surface": "#1B1B1F",
            "inverse-primary": "#4B57A9",
            shadow: "#000000",
            "surface-tint": "#BCC3FF",
            "outline-variant": "#46464F",
            scrim: "#000000",
            "surface-container-highest": "#353438",
            "surface-container-high": "#2A2A2D",
            "surface-container": "#1F1F23",
            "surface-container-low": "#1B1B1F",
            "surface-container-lowest": "#0E0E11",
            "surface-bright": "#39393C",
            "surface-dim": "#131316",
          },
          light: {
            darkMode: false,
            primary: "#4B57A9",
            "on-primary": "#FFFFFF",
            "primary-container": "#DFE0FF",
            "on-primary-container": "#000D60",
            "primary-fixed": "#DFE0FF",
            "on-primary-fixed": "#000D60",
            "primary-fixed-dim": "#BCC3FF",
            "on-primary-fixed-variant": "#333F90",
            secondary: "#5B5D72",
            "on-secondary": "#FFFFFF",
            "secondary-container": "#E0E1F9",
            "on-secondary-container": "#181A2C",
            "secondary-fixed": "#E0E1F9",
            "on-secondary-fixed": "#181A2C",
            "secondary-fixed-dim": "#C4C5DD",
            "on-secondary-fixed-variant": "#434559",
            tertiary: "#77536C",
            "on-tertiary": "#FFFFFF",
            "tertiary-container": "#FFD7F0",
            "on-tertiary-container": "#2D1127",
            "tertiary-fixed": "#FFD7F0",
            "on-tertiary-fixed": "#2D1127",
            "tertiary-fixed-dim": "#E6BAD7",
            "on-tertiary-fixed-variant": "#5D3C54",
            error: "#BA1A1A",
            "on-error": "#FFFFFF",
            "error-container": "#FFDAD6",
            "on-error-container": "#410002",
            outline: "#777680",
            background: "#FFFBFF",
            "on-background": "#1B1B1F",
            surface: "#FBF8FD",
            "on-surface": "#1B1B1F",
            "surface-variant": "#E3E1EC",
            "on-surface-variant": "#46464F",
            "inverse-surface": "#303034",
            "inverse-on-surface": "#F3F0F4",
            "inverse-primary": "#BCC3FF",
            shadow: "#000000",
            "surface-tint": "#4B57A9",
            "outline-variant": "#C7C5D0",
            scrim: "#000000",
            "surface-container-highest": "#E4E1E6",
            "surface-container-high": "#EAE7EC",
            "surface-container": "#F0EDF1",
            "surface-container-low": "#F6F2F7",
            "surface-container-lowest": "#FFFFFF",
            "surface-bright": "#FBF8FD",
            "surface-dim": "#DCD9DE",
          },
          ref: {
            /* primary */
            primary0: "#000000",
            primary5: "#000644",
            primary10: "#000D60",
            primary20: "#1A2678",
            primary25: "#273384",
            primary30: "#333F90",
            primary35: "#3F4B9C",
            primary40: "#4B57A9",
            primary50: "#6570C4",
            primary60: "#7E8AE0",
            primary70: "#99A5FD",
            primary80: "#BCC3FF",
            primary90: "#DFE0FF",
            primary95: "#F0EFFF",
            primary98: "#FBF8FF",
            primary99: "#FFFBFF",
            primary100: "#FFFFFF",
            /* secondary */
            secondary0: "#000000",
            secondary5: "#0D1021",
            secondary10: "#181A2C",
            secondary20: "#2D2F42",
            secondary25: "#383A4D",
            secondary30: "#434559",
            secondary35: "#4F5165",
            secondary40: "#5B5D72",
            secondary50: "#74768B",
            secondary60: "#8E8FA6",
            secondary70: "#A8A9C1",
            secondary80: "#C4C5DD",
            secondary90: "#E0E1F9",
            secondary95: "#F0EFFF",
            secondary98: "#FBF8FF",
            secondary99: "#FFFBFF",
            secondary100: "#FFFFFF",
            /* tertiary */
            tertiary0: "#000000",
            tertiary5: "#21071C",
            tertiary10: "#2D1127",
            tertiary20: "#45263D",
            tertiary25: "#513148",
            tertiary30: "#5D3C54",
            tertiary35: "#6A4860",
            tertiary40: "#77536C",
            tertiary50: "#926C86",
            tertiary60: "#AD85A0",
            tertiary70: "#C99FBB",
            tertiary80: "#E6BAD7",
            tertiary90: "#FFD7F0",
            tertiary95: "#FFECF5",
            tertiary98: "#FFF7F9",
            tertiary99: "#FFFBFF",
            tertiary100: "#FFFFFF",
            /* error */
            error0: "#000000",
            error5: "#2D0001",
            error10: "#410002",
            error20: "#690005",
            error25: "#7E0007",
            error30: "#93000A",
            error35: "#A80710",
            error40: "#BA1A1A",
            error50: "#DE3730",
            error60: "#FF5449",
            error70: "#FF897D",
            error80: "#FFB4AB",
            error90: "#FFDAD6",
            error95: "#FFEDEA",
            error98: "#FFF8F7",
            error99: "#FFFBFF",
            error100: "#FFFFFF",
            /* neutral */
            neutral0: "#000000",
            neutral5: "#111114",
            neutral10: "#1B1B1F",
            neutral20: "#303034",
            neutral25: "#3B3B3F",
            neutral30: "#47464A",
            neutral35: "#535256",
            neutral40: "#5F5E62",
            neutral50: "#78767A",
            neutral60: "#929094",
            neutral70: "#ACAAAF",
            neutral80: "#C8C5CA",
            neutral90: "#E4E1E6",
            neutral95: "#F3F0F4",
            neutral98: "#FBF8FD",
            neutral99: "#FFFBFF",
            neutral100: "#FFFFFF",
            /* neutral-variant */
            "neutral-variant0": "#000000",
            "neutral-variant5": "#101018",
            "neutral-variant10": "#1A1B23",
            "neutral-variant20": "#2F3038",
            "neutral-variant25": "#3A3B43",
            "neutral-variant30": "#46464F",
            "neutral-variant35": "#52525B",
            "neutral-variant40": "#5E5E67",
            "neutral-variant50": "#777680",
            "neutral-variant60": "#90909A",
            "neutral-variant70": "#ABAAB4",
            "neutral-variant80": "#C7C5D0",
            "neutral-variant90": "#E3E1EC",
            "neutral-variant95": "#F1EFFA",
            "neutral-variant98": "#FBF8FF",
            "neutral-variant99": "#FFFBFF",
            "neutral-variant100": "#FFFFFF",
          },
        },
      },
    },
  },
  plugins: [],
};
