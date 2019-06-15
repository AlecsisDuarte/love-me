export default () => (
  <header>
    <img width="200px"
      src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54727572_2044407262281306_6337678876126216192_n.jpg?_nc_cat=110&_nc_eui2=AeFZRVcr-a6NBoxDYTg1lvKaYc0m57z9H0lhmk9sZ-JgMLBRRG0CIoSZtNo3Jy6d2aBWbVPoGjMVO8_c_9DM8gW2NO0POX8VY_0y7ME6coBp-Q&_nc_ht=scontent-lax3-1.xx&oh=dfe7017651b35b6d7be000960787097d&oe=5D91C606" alt="Ana"/>
    <p>Ana K. Miranda</p>
    <style jsx>{`
      p {
       font-size: 3em;
       font-weight: bold; 
       font-family: "Times New Roman", Times, serif;
      }
      img {
        border-radius: 50%;
      }
      @media (max-width: 500px) {
        div {
          width: 370px;
          padding: 8px;
        }
        p {
          font-size: 2.3em;
        }
        img {
          width: 180px;
        }
      }
    `}</style>
  </header>
)
