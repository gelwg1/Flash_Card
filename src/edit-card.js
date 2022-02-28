import React from 'react'

export default class CardEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.selectedCard.question,
      answer: this.props.selectedCard.answer,
      id: this.props.selectedCard.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'question') {
      this.setState({
        question: e.target.value
      })
    }
    if (e.target.name === 'answer') {
      this.setState({
        answer: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const newCard = Object.assign({}, this.state)
    this.props.onSubmit(newCard)
  }

  render() {
    return (
      <div className="card border-light text-center w-50 m-auto shadow-lg">
        <div className="card-header p-5">Edit this Flash Card</div>
        <form className="card-body p-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="question">Question</label>
            <input
              required
              type="text"
              name="question"
              className="form-control form-control-lg shadow-lg"
              id="question"
              value={this.state.question}
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label className="answer">Answer</label>
            <input
              required
              type="text"
              name="answer"
              className="form-control form-control-lg shadow-lg"
              id="answer"
              value={this.state.answer}
              onChange={this.handleChange} />

          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block my-5 shadow-lg">Update</button>
        </form>
      </div>
    )
  }

}
