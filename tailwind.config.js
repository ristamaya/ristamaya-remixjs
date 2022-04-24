function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/homehero.jpg')",
      },
      backgroundColor: {
        theme: {
          fill: withOpacity("--color-fill"),
          muted: withOpacity("--color-muted"),
          inverted: withOpacity("--color-inverted"),
          "btn-base": withOpacity("--color-btn-base"),
          "btn-hover": withOpacity("--color-btn-hover"),
          "btn-inverted": withOpacity("--color-btn-inverted"),
        },
      },
      textColor: {
        theme: {
          base: withOpacity("--color-text-base"),
          strong: withOpacity("--color-text-strong"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          warning: withOpacity("--color-text-warning"),
          link: withOpacity("--color-text-link"),
        },
      },
      borderColor: {
        theme: {
          base: withOpacity("--color-border-base"),
          warning: withOpacity("--color-border-warning"),
        },
      },
      gradientColorStops: {
        theme: {
          hue: withOpacity("--color-fill"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
