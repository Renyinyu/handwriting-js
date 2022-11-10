class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(event, executor) {
    if (typeof event !== 'string') {
      throw new Error('event is not a string')
    }
    if (typeof executor !== 'function') return 
    if (!this.events[event]) {
      this.events[event] = [executor]
    } else {
      this.events[event].push(executor)
    }
  }

  off(event, executor) {
    if (typeof event !== 'string') {
      throw new Error('event is not a string')
    }
    if (!executor) {
      this.events[event] = undefined
      return
    }
    if (Array.isArray(this.events[event])) {
      this.events[event] = this.events.filter(cb => cb != executor)
    }
  }

  emit(event, ...args) {
    if (typeof event !== 'string') {
      throw new Error('event is not a string')
    }
    if (Array.isArray(this.events[event])) {
      this.events[event].forEach(executor => executor(...args))
    }
  }
}