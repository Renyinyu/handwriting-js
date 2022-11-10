function isObserver(observer) {
  return observer instanceof Observer
}

class Subject {
  constructor() {
    this.observerList = []
  }

  add(observer) {
    if (!isObserver(observer)) {
      throw new Error('target is not a Observer instance')
    }
    this.observerList.push(observer)
  }

  notify() {
    this.observerList.forEach(observer => {
      observer.update()
    })
  }
}

class Observer {
  constructor(executor) {
    this.executor = executor
  }

  update() {
    typeof this.executor == 'function' && this.executor()
  }
}