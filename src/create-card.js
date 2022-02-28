import React from 'react'

export default class CardCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const { question, answer } = this.state
    this.setState({ question: '', answer: '' })
    this.props.onSubmit({ question, answer })

  }

  render() {
    const { question, answer } = this.state
    return (
      <div className="card border-light text-center w-50 m-auto shadow-lg">
        <div className="card-header p-5">Create a Flash Card</div>
        <form className="card-body p-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="question">Question</label>
            <input
              required
              type="text"
              name="question"
              className="form-control form-control-lg shadow-lg"
              id="question"
              value={question}
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
              value={answer}
              onChange={this.handleChange} />
            <button type="submit" className="btn btn-secondary btn-lg btn-block my-5 shadow-lg">Save</button>
          </div>
        </form>
      </div>
    )
  }

}
