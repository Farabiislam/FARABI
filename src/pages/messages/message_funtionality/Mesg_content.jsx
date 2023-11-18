import "../messages.scss";



const Mesg_content = () => {
  const message = false;
  return (
    <div className="messages_box">
      <div className="mesg">
        <div className="mesgInfo">
          <div className="userPic">
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
        <div className="mesg_content">
          {message.img && (
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          )}
          {message.video && <video width="320" height="240" controls></video>}

          <p>
            I am from farabi islam.i am from madaripur.I am from farabi islam.i
            am from madaripur.I am from farabi islam.i am from madaripur I am
            from madaripur.
          </p>
        </div>
      </div>
      <div className="mesg owner">
        <div className="mesgInfo">
          <div className="userPic">
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
        <div className="mesg_content">
          {message.img && (
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          )}
          {message.video && <video width="320" height="240" controls></video>}

          <p>
            I am from farabi islam.i am from madaripur.I am from farabi islam.i
            am from madaripur.I am from farabi islam.i am from madaripur I am
            from madaripur.
          </p>
        </div>
      </div>
      <div className="mesg ">
        <div className="mesgInfo">
          <div className="userPic">
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
        <div className="mesg_content">
          {message.img && (
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          )}
          {message.video && <video width="320" height="240" controls></video>}

          <p>
            I am from farabi islam.i am from madaripur.I am from farabi islam.i
            am from madaripur.I am from farabi islam.i am from madaripur I am
            from madaripur.
          </p>
        </div>
      </div>

      <div className="mesg owner">
        <div className="mesgInfo">
          <div className="userPic">
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
        <div className="mesg_content">
         
            <img
              src="https://images.pexels.com/photos/4881613/pexels-photo-4881613.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
       
          {message.video && <video width="320" height="240" controls></video>}

          <p>
            I am from farabi islam.i am from madaripur.I am from farabi islam.i
            am from madaripur.I am from farabi islam.i am from madaripur I am
            from madaripur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mesg_content;
