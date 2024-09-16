function ProfilePicture(){
    const imageUrl = 'https://www.kreactivity.hu/img/23190/G00176/264x264,r/Kis-tigris-festes-es-gyemantszemes-kreativ-hibrid-kep.webp?time=1715340732';


    const handleClick = (e) => e.target.style.display = "none";
    

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} />
    );
}

export default ProfilePicture