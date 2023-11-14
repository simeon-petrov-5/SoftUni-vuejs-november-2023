import antfu from '@antfu/eslint-config';

export default antfu({
  vue: true,
  typescript: false,
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/singleline-html-element-content-newline': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
  },
}, {
  rules: {
    'curly': 'off',
    'no-console': 'off',
    'style/semi': ['error', 'always'],
  },
});
