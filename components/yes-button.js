import Router from 'next/router';

export default () => (
  <yes-button>
    <button onClick={() => Router.push('/thankyou')}>
      Simon que si
    </button>
  </yes-button>
)
