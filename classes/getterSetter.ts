class Speaker {
  private message: string
  constructor(private name: string) {}

  get Message() {
    if (!this.name.includes(this.name)) {
      throw Error('message is missing speaker\'s name')
    }
    return this.message
  }

  set Message(val: string) {
    let tmpMessage = val
    if (!val.includes(this.name)) {
      tmpMessage = this.name + ' ' + val
    }
    this.message = tmpMessage
  }
}

const bulat = new Speaker('bulat')
bulat.Message = 'new Message'

console.log('bulat', bulat.Message)