const Header = () => {
    return(
        <>
        <div style={{ background:"#1B393B", color:"white",}}>
            <h3 style={{
                marginLeft:"25px",
            }}>Whatsapp</h3>
           <div style={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            marginBottom:"3rem",
            marginTop:"3rem",
           }} className="col-lg-12 ">
                <h5> <i class="bi bi-person-lines-fill"></i>Chats</h5>
                <h5> <i class="bi bi-record-fill"></i> Status</h5>
                <h5> <i class="bi bi-record-fill"></i> Calls</h5>
            </div>
            </div>
        </>
    )
}
export default Header ;