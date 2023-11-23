export const simpleColor = {
  mounted: (element, { arg, value }) => {
    if (arg === 'background') {
      element.style.backgroundColor = value;
    }
    else {
      element.style.color = value;
    }
  },
};

export const advancedColor = {
  mounted: (element, { value, modifiers }) => {
    console.log(modifiers);

    Object.keys(modifiers).forEach((modifier) => {
      element.style[modifier] = value;
    });
  },
};
