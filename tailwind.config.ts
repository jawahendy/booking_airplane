import type { Config } from "tailwindcss";
import butterfailInvertedRadius from '@butterfail/tailwindcss-inverted-radius';
import tailwindcssAnimate from 'tailwindcss-animate';

import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		screens: {
			'xs': '475px',
			'xxs': '320px',
		},
		invRad: {
			'4.5': '1.125rem'
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		fontFamily: {
			geistSans: [
				'var(--font-geist-sans)',
				'sans-serif'
			],
			geistMono: [
				'var(--font-geist-mono)',
				'sans-serif'
			],
			montserrat: [
				'var(--font-montserrat)',
				'sans-serif'
			],
			inter: [
				'var(--font-inter)',
				'sans-serif'
			],
			poppins: [
				'var(--font-poppins)',
				'sans-serif'
			]
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
  },
  plugins: [
	butterfailInvertedRadius,
	tailwindcssAnimate
  ],
};
export default withMT(config);
