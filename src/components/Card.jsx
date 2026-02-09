
const Card = (props) => {

  return (
    <div className="w-[350px] h-[400px] bg-[rgb(64,62,87)] rounded-3xl flex flex-col justify-center items-center shrink-0 relative px-[20px]">
      <img
        className="w-[170px] h-[170px] rounded-full z-10 object-cover absolute -top-[100px]"
        src={props.photo}
      />
      <div className="h-[150px]">
        <div className="h-full flex flex-col items-center justify-between text-center">
          <p className="text-white text-[18px]">{props.review}</p>
          <h1 className="text-[rgb(176,147,198)] font-bold text-3xl mt-[20px]">
            {props.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
