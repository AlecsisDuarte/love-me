import Head from '../components/head';
import Header from "../components/header";
import Question from "../components/question";
import Button from '../components/button';

export default () => (
  <main>
    <Head />
    <div>
    <style jsx>{`
      div {
        box-shadow: 0 0 0 2px #333;
        border-radius: 5px;
        width: 400px;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 500px) {
        div {
          width: 285px;
          padding: 8px;
        }
      }
    `}</style>
      <Header />
      <Question />
      <Button page="thankyou" text="Simon que si" />
      <Button page="wrongpage" text="Nel que pues" />
    </div>
  </main>
)