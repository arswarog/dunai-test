import { IS_DEV } from './environment'

export class Greeter {
  constructor(private greeting: string) {}
  greet() {
    return `Hello, ${this.greeting}!`
  }

  /**
   * Super method 3
   */
  greetMe3() {
    /* istanbul ignore next line */
    if (IS_DEV) {
      // tslint:disable-next-line:no-console
      console.warn('this method is deprecated, use #greet instead')
    }

    return this.greet()
  }

  /**
   * Super method
   */
  greetMe() {
    /* istanbul ignore next line */
    if (IS_DEV) {
      // tslint:disable-next-line:no-console
      console.warn('this method is deprecated, use #greet instead')
    }

    return this.greet()
  }
}
