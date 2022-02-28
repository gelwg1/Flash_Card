import React from 'react'
const styles = {
  card: { width: '20rem' }
}
export default class CardsList extends React.Component {

  render() {
    if (this.props.cards.length !== 0) {
      return (
        <div className="container p-2">
          <div className="row d-flex justify-content-center">
            {
              this.props.cards.map((card, index) => {
                const id = card.id
                return (
                  <div id={id} key={index} className="card border-light m-2 shadow-lg" style={styles.card}>
                    <div className="card-body">
                      <h6 className="card-title">{card.question}</h6>
                      <p className="card-text">{card.answer}</p>
                      <a href={`#edit?cardId=${id}`} className="far fa-edit mx-1"></a>
                      <a href="#list" onClick={this.props.deleteCard} className="far fa-trash-alt mx-1" id={id}></a>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div
            className="text-center mt-3">
            <div className="h1">You have no flash cards</div>
            <a
              href="#create" id="create">
              <button
                className="btn btn-secondary btn-lg btn-block my-5 shadow-lg">Create One</button></a>
          </div>
        </div>
      )
    }
  }
}
