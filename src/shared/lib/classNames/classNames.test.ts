import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with with mods', () => {
    const expected = 'someClass class1 class2 hovered hidden';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false, hidden: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
  test('with with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false, hidden: undefined },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
