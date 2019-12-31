class IncrementStringId {
  minSize: number;
  seed: number;

  constructor(seed: number = 0, minSize: number = 4) {
    if (minSize < 4) {
      throw RangeError('minSize value must greater than 4')
    }
    this.minSize = minSize
    this.seed = seed
  }

  generateId(): string {
    const str = this.seed.toString(36)
    this.seed += 1

    if (str.length < this.minSize) {
      return this.randomStr(this.minSize - str.length) + str
    }

    return str
  }

  getSeed() {
    return this.seed
  }

  setSeed(seed: number) {
    this.seed = seed
  }

  private randomStr(length: number = 0) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
  }
}

export default IncrementStringId
