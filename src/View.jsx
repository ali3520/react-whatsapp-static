const View =({image,title,mess,time,newMess})=>{
    return(
      <>
        <div className="row">
          <div className="col-lg-2 col-2">
            <img style={{
              height:"60px",
              width:"60px",
              objectFit:"cover",
              clipPath:"circle()",
              
            }} src={image} alt="" />
          </div>
          <div className="col-lg-7 col-7">
            <div className="head">
              <h4> {title}</h4>
            </div>
            <div className="mess">
              <p style={{
                color:"gray"
              }}>{mess}</p>
            </div>
          </div>
          <div className="col-lg-3 col-3 ">
            <div className="time">
              <p style={{
                color:"#30D14E",
                textAlign:"right",
              }}> {time}</p>
            </div>
            <div style={{
               background:"#30D14E",
               clipPath:"circle()",
            }} className="newmes">
              <p style={{
                color:"white",
                textAlign:"center",
               
              }}>{newMess}</p>
            </div>
          </div>
        </div>
      </>
    )
    }
export default View;  