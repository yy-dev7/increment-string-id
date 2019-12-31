import IncrementStringId from '../src'

test('generate 10000 unique id', () => {
  const instance = new IncrementStringId
  const items = new Set
  for (let i = 10000; i--;) {
    items.add(instance.generateId())
  }
  expect(items.size).toBe(10000)
})

test('get correct seed value', () => {
  let seed = 10
  const instance = new IncrementStringId(seed)
  instance.generateId()
  instance.generateId()
  seed += 2

  expect(instance.getSeed()).toBe(seed)
})
