/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			black: '#000000',
  			white: '#ffffff',
  			gray: {
  				'50': '#fafafa',
  				'100': '#f5f5f5',
  				'200': '#e5e5e5',
  				'300': '#d4d4d4',
  				'400': '#a3a3a3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717',
  				'950': '#0a0a0a'
  			},
  			primary: {
  				'50': '#ecfdf5',
  				'100': '#d1fae5',
  				'200': '#a7f3d0',
  				'300': '#6ee7b7',
  				'400': '#34d399',
  				'500': '#10b981',
  				'600': '#059669',
  				'700': '#047857',
  				'800': '#065f46',
  				'900': '#064e3b',
  				'950': '#022c22',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			neon: {
  				green: '#00ff88',
  				blue: '#0080ff',
  				pink: '#ff0080',
  				purple: '#8000ff',
  				cyan: '#00ffff',
  				yellow: '#ffff00'
  			},
  			gradient: {
  				from: '#00ff88',
  				to: '#0080ff',
  				pink: '#ff0080'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Monaco',
  				'Cascadia Code',
  				'Segoe UI Mono',
  				'Roboto Mono',
  				'monospace'
  			],
  			display: [
  				'Space Grotesk',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'7xl': [
  				'4.5rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'8xl': [
  				'6rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'9xl': [
  				'8rem',
  				{
  					lineHeight: '1'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'100': '25rem',
  			'112': '28rem',
  			'128': '32rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-neon': 'linear-gradient(135deg, #00ff88 0%, #0080ff 100%)',
  			'gradient-neon-reverse': 'linear-gradient(135deg, #0080ff 0%, #00ff88 100%)',
  			'gradient-pink': 'linear-gradient(135deg, #ff0080 0%, #00ff88 100%)',
  			'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
  			'dot-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
  			'grid-pattern': 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)'
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-in-up': 'fade-in-up 0.5s ease-out',
  			'fade-in-down': 'fade-in-down 0.5s ease-out',
  			'slide-in-left': 'slide-in-left 0.5s ease-out',
  			'slide-in-right': 'slide-in-right 0.5s ease-out',
  			'bounce-slow': 'bounce 2s infinite',
  			'pulse-slow': 'pulse 3s infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'shimmer': 'shimmer 2.5s linear infinite',
  			'gradient-x': 'gradient-x 15s ease infinite',
  			'gradient-y': 'gradient-y 15s ease infinite',
  			'gradient-xy': 'gradient-xy 15s ease infinite',
  			'line-draw': 'line-draw 2s ease-in-out',
  			'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
  			'blink': 'blink 1s infinite'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-down': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-in-left': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'slide-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'glow': {
  				'0%': {
  					boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88'
  				},
  				'100%': {
  					boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88'
  				}
  			},
  			'shimmer': {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					transform: 'translateX(0%)'
  				},
  				'50%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			'gradient-y': {
  				'0%, 100%': {
  					transform: 'translateY(0%)'
  				},
  				'50%': {
  					transform: 'translateY(100%)'
  				}
  			},
  			'gradient-xy': {
  				'0%, 100%': {
  					transform: 'translate(0%, 0%)'
  				},
  				'25%': {
  					transform: 'translate(100%, 0%)'
  				},
  				'50%': {
  					transform: 'translate(100%, 100%)'
  				},
  				'75%': {
  					transform: 'translate(0%, 100%)'
  				}
  			},
  			'line-draw': {
  				'0%': {
  					strokeDasharray: '0 100'
  				},
  				'100%': {
  					strokeDasharray: '100 0'
  				}
  			},
  			'typewriter': {
  				'0%': {
  					width: '0'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			'blink': {
  				'0%, 50%': {
  					borderColor: 'transparent'
  				},
  				'50%, 100%': {
  					borderColor: '#00ff88'
  				}
  			}
  		},
  		boxShadow: {
  			neon: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88',
  			'neon-blue': '0 0 5px #0080ff, 0 0 10px #0080ff, 0 0 15px #0080ff',
  			'neon-pink': '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080',
  			glow: '0 0 20px rgba(0, 255, 136, 0.3)',
  			'glow-lg': '0 0 40px rgba(0, 255, 136, 0.4)',
  			dark: '0 10px 25px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  		},
  		backgroundSize: {
  			dots: '20px 20px',
  			grid: '50px 50px'
  		}
  	}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
      require("tailwindcss-animate")
],
} 