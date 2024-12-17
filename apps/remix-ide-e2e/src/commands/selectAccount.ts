import { NightwatchBrowser } from 'nightwatch'
import EventEmitter from 'events'

class SelectAccount extends EventEmitter {
  command (this: NightwatchBrowser, account?: string): NightwatchBrowser {
    if (account) {
      this.api
        .click(`*[data-id="runTabSelectAccount"] a:contains("${account}")`)
        .perform(() => {
          this.emit('complete')
        })
    } else this.emit('complete')
    return this
  }
}

module.exports = SelectAccount
