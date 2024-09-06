module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1d4ed8',

          secondary: '#22d3ee',

          accent: '#fde047',

          neutral: '#1f2937',

          'base-100': '#f5f5f4',

          info: '#67e8f9',

          success: '#4ade80',

          warning: '#fb923c',

          error: '#dc2626',
        },
        darkTheme: {
          primary: '#3b82f6', // A slightly lighter shade of blue
          secondary: '#67e8f9', // A lighter and more vibrant cyan
          accent: '#fbbf24', // A darker but still vibrant yellow
          neutral: '#d1d5db', // Light gray for text and elements
          'base-100': '#1f2937', // Dark color for the main background
          info: '#93c5fd', // Light blue for info
          success: '#4ade80', // Green for success
          warning: '#f97316', // A slightly lighter orange for warning
          error: '#ef4444', // Red for error
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
