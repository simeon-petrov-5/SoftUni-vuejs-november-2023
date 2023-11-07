import antfu from '@antfu/eslint-config';

export default antfu({
  vue: true,
  typescript: false,
}, {
  rules: {
    'no-console': 'off',
    'style/semi': ['error', 'always'],
  },
});
