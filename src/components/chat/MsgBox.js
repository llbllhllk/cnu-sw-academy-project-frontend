const MsgBox = ({ item, name, msg }) => {
  return (
    <div className={item.name === name ? 'me' : 'other'}>
      <span>
        <b>{item.name}</b>
      </span>
      <span>{item.msg}</span>
    </div>
  );
};

export default MsgBox;
