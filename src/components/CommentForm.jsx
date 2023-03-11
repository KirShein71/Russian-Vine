import React from "react";

function CommentForm({handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",}) {

    const [text, setText] = React.useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form className="commentform" onSubmit={onSubmit}>
      <textarea
        className="commentform__textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="commentform__button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="commentform__button commentform-cancel__button"
          onClick={handleCancel}
        >
          Удалить
        </button>
      )}
    </form>
  );
}

export default CommentForm;