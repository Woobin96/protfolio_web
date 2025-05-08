import { STRINGS } from "../Contents/String";
import '../Contents/Style.css';
import IMAGE from "../img/mini_img.jpg";
import PROFILE_IMAGE from "../img/profile.jpeg";
import PROFILE_ICON from "../img/profile.png";
import GIF from '../img/pc.gif';


function Home() {
    return (
        <div>
            <div className="Image_Title">
                <img className="Image_size" src={IMAGE} />

                <h1 className="HEADER_TITLE">{STRINGS.HEADER_TITLE}</h1> {/* 이미지 위에 올릴 텍스트 */}
                <img className="Gif" src={GIF} alt="gif" />


                <p className="Name_Text">{STRINGS.NAME}</p>
            </div>
            <img className="profile_img" src={PROFILE_IMAGE} />



            {/* 아래것은 간단한 내용 업로그 */}
            <div className="Main_Title">
                <p className="Main_Title_Text">
                    {STRINGS.TITLE}
                </p>
            </div>
            <div className="Main_Home">
                <p className="Main_Text">
                    {STRINGS.INFO}
                </p>
            </div>

            <div className="Profile_Text_div">
                <div className="Profile_Text_div2">
                    <img className="Profile_Text_img" src={PROFILE_ICON}></img>
                    <h2 className="textText">{STRINGS.SUB_TITLE}</h2>
                </div>


                <div>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>
                    <p>경력 n년</p>

                </div>


            </div>



        </div>
        // 맨 위
    );
}

export default Home;
