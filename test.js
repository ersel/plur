import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('unicorn', 0), 'unicorns');
	t.is(fn('unicorn', 1), 'unicorn');
	t.is(fn('unicorn', 2), 'unicorns');
	t.is(fn('unicorn', 'horse', 0), 'horse');
	t.is(fn('unicorn', 'horse', 1), 'unicorn');
	t.is(fn('unicorn', 'horse', 2), 'horse');
	t.is(fn('bus', 2), 'buses');
	t.is(fn('box', 2), 'boxes');
	t.is(fn('fizz', 2), 'fizzes');
	t.is(fn('batch', 2), 'batches');
	t.is(fn('bush', 2), 'bushes');
	t.is(fn('guppy', 2), 'guppies');
	t.is(fn('UNICORN', 2), 'UNICORNS');
	t.is(fn('puppY', 2), 'puppIES');
	t.is(fn('man', 2), 'men');
	t.is(fn('woman', 2), 'women');
	t.is(fn('fish', 2), 'fish');
	t.is(fn('sheep', 2), 'sheep');
	t.is(fn('tooth', 2), 'teeth');
	t.is(fn('tomato', 2), 'tomatoes');
	t.is(fn('torpedo', 2), 'torpedoes');
	t.is(fn('wife', 2), 'wives');
	t.is(fn('shelf', 2), 'shelves');
	t.end();
});
