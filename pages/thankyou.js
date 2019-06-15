import { Component } from 'react'
import Head from '../components/head';
import Button from '../components/button';

const texts = ["Me imagine!", "Lo sé, soy irresistible", "Te comprendo", "Inevitable"];

class ThankYouPage extends Component {

  render() {
    return (
      <main>
        <Head />
        <div>
          <p>{this.getText()}</p>
          <Button page="" text="Amonos de aqui"/>
        </div>
        <style jsx>{`
      div {
        box-shadow: 0 0 0 2px #333;
        border-radius: 5px;
        width: 400px;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
      }
      p {
        font-size: 1.5em;
        font-weight: bold;
      }
      @media (max-width: 500px) {
        div {
          width: 370px;
          padding: 8px;
        }
      }
    `}</style>
      </main>
    )
  }

  getText() {
   const index = Math.floor(Math.random() * 3);
   return texts[index];
  }
}

export default ThankYouPage