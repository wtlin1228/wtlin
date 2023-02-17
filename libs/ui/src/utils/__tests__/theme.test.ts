import { flatWithPath, toCssCustomProperties } from '../theme';

const primitives = {
  garden: {
    flower: 'red',
    stone: ['blue', 'green', 'yellow'],
    animal: {
      cat: 'black',
      dog: 'pink',
      rabbit: ['white', 'cream'],
    },
  },
  bag: ['blue', 'red', 'yellow'],
  hair: 'brown',
};

it('flats colors', () => {
  expect(flatWithPath(primitives, '--wtlin-ui-colors')).toStrictEqual({
    '--wtlin-ui-colors-garden-flower': 'red',
    '--wtlin-ui-colors-garden-stone-0': 'blue',
    '--wtlin-ui-colors-garden-stone-1': 'green',
    '--wtlin-ui-colors-garden-stone-2': 'yellow',
    '--wtlin-ui-colors-garden-animal-cat': 'black',
    '--wtlin-ui-colors-garden-animal-dog': 'pink',
    '--wtlin-ui-colors-garden-animal-rabbit-0': 'white',
    '--wtlin-ui-colors-garden-animal-rabbit-1': 'cream',
    '--wtlin-ui-colors-bag-0': 'blue',
    '--wtlin-ui-colors-bag-1': 'red',
    '--wtlin-ui-colors-bag-2': 'yellow',
    '--wtlin-ui-colors-hair': 'brown',
  });
});

it('maps colors to CSS custom properties', () => {
  expect(toCssCustomProperties(primitives, '--wtlin-ui-colors')).toStrictEqual({
    garden: {
      flower: 'var(--wtlin-ui-colors-garden-flower)',
      stone: [
        'var(--wtlin-ui-colors-garden-stone-0)',
        'var(--wtlin-ui-colors-garden-stone-1)',
        'var(--wtlin-ui-colors-garden-stone-2)',
      ],
      animal: {
        cat: 'var(--wtlin-ui-colors-garden-animal-cat)',
        dog: 'var(--wtlin-ui-colors-garden-animal-dog)',
        rabbit: [
          'var(--wtlin-ui-colors-garden-animal-rabbit-0)',
          'var(--wtlin-ui-colors-garden-animal-rabbit-1)',
        ],
      },
    },
    bag: [
      'var(--wtlin-ui-colors-bag-0)',
      'var(--wtlin-ui-colors-bag-1)',
      'var(--wtlin-ui-colors-bag-2)',
    ],
    hair: 'var(--wtlin-ui-colors-hair)',
  });
});
