function LongInfo(props) {
  const { name, page, content } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>{page}</p>
      <p>{content}</p>
    </div>
  );
}

export default LongInfo;
