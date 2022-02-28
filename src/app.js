import CardCreator from './create-card'
import React, { Component, Fragment } from 'react'
import CardsList from './cards-list'
import Navbar from './navbar'
import hash from './hash'
import CardEditor from './edit-card'
import Practice from './practice'

export default class App extends Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('card-app-state')
    const appState = JSON.parse(stateJson) || {}
    const { path, params } = hash.parse(location.hash)
    this.state = {
      view: { path, params },
      cards: appState.cards || [],
      cardNumber: appState.cardNumber || 1
    }
    this.saveCard = this.saveCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  saveCard(card) {
    const { cardNumber, cards } = this.state
    const cardsArray = cards.slice()
    card.id = cardNumber
    cardsArray.push(card)
    this.setState({
      cards: cardsArray,
      cardNumber: cardNumber + 1
    })
    location.hash = '#list'
  }

  updateCard(changedCard) {
    const { cards } = this.state
    const cardsArray = cards.map(card => {
      if (card.id === parseInt(this.state.view.params.cardId, 10)) {
        return changedCard
      }
      else {
        return card
      }
    })
    this.setState({
      cards: cardsArray
    })
    location.hash = '#list'
  }

  deleteCard(e) {
    const id = parseInt(e.target.id, 10)
    const cards = [...this.state.cards].filter(card => card.id !== id)
    this.setState({ cards })
  }

  renderView() {
    const { path, params } = this.state.view
    switch (path) {
      case 'create':
        return <CardCreator onSubmit={this.saveCard} cardNumber={this.state.cardNumber} />
      case 'practice':
        return this.state.cards.length > 1
          ? <Practice cards={this.state.cards} />
          : <CardsList cards={this.state.cards} />
      case 'edit':
        const { cardId } = params
        const selectedCard = cardId
          ? this.state.cards.find(card => card.id === parseInt(cardId, 10))
          : this.state.cards
        return <CardEditor selectedCard={selectedCard} onSubmit={this.updateCard} />
      default:
        return <CardsList cards={this.state.cards} deleteCard={this.deleteCard} />
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { cardNumber, cards } = this.state
      const stateJson = JSON.stringify({ cardNumber, cards })
      localStorage.setItem('card-app-state', stateJson)
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        {this.renderView()}
      </Fragment>
    )
  }
}
