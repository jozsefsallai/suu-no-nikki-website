function SendingMessage() {
  return <div className="messagebox info">Sending...</div>;
}

function ErrorMessage({ message }) {
  return <div className="messagebox error" dangerouslySetInnerHTML={{ __html: message }} />;
}

function SuccessMessage({ message }) {
  return <div className="messagebox success" dangerouslySetInnerHTML={{ __html: message }} />;
}

export {
  SendingMessage,
  SuccessMessage,
  ErrorMessage
}
