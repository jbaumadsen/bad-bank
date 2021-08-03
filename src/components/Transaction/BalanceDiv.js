

const BalanceDiv = ({ balance }) => {
  return (
    <>
    <hr />
    <div className='space-div'>
      <span className="emphasized">Balance:</span>
      <span>${balance}</span>
    </div>
    </>
  );
}

export default BalanceDiv;