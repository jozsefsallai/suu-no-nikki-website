import Mailchimp from 'react-mailchimp-subscribe';
import { SendingMessage, ErrorMessage, SuccessMessage } from './utils';

const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

function SubscribeForm({ subscribe, status, message }) {
  let email, name;

  const submit = () => email && name && subscribe({
    EMAIL: email.value,
    NAME: name.value
  });

  return (
    <>
      {status === 'sending' && <SendingMessage />}
      {status === 'error' && <ErrorMessage message={message} />}
      {status === 'success' && <SuccessMessage message={message} />}

      <input ref={node => (name = node)} placeholder="Name (*)" autoComplete={false} />
      <input type="email" ref={node => (email = node)} placeholder="E-mail (*)" autoComplete={false} />

      <p>
        By clicking on the "Subscribe" button, you agree that we will use the provided personal information
        to send you an informational email when the game is available for download.
      </p>

      <button onClick={submit}>Subscribe</button>
    </>
  );
}

function SubscribeBlock() {
  return (
    <section className="subscribe-form">
      <h2>Subscribe to the mailing list</h2>
      <p>Don't worry! We will only send you an email when the game is ready.</p>
      <Mailchimp
        url={url}
        render={SubscribeForm}
      />
    </section>
  );
}

export default SubscribeBlock;
