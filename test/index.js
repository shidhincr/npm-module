import test from 'ava';
import myModule from '../index';
const { greet } = myModule;

test.beforeEach(t => {
  console.log('set up before each');
});

test('module exist and sane', t => {
  t.truthy(typeof myModule === 'object', 'Module doesnt exist');
  t.truthy(typeof greet === 'function', '$ function doesnt exist');
});

// See full AVA documentation: https://github.com/avajs/ava
