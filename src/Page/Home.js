import { STRINGS } from "../Contents/String";
import '../Contents/Style.css';
import IMAGE from "../img/mini_img.jpg";
import PROFILE_IMAGE from "../img/profile.jpeg";


function Home() {
    return (
        <div>
            <div className="Image_Title">
                <img className="Image_size" src={IMAGE} />

                <h1 className="Main_Text">{STRINGS.HEADER_TITLE}</h1> {/* 이미지 위에 올릴 텍스트 */}
                <p className="Name_Text">{STRINGS.NAME}</p>
            </div>
            <img className="profile_img" src={PROFILE_IMAGE} />


            {/* 아래것은 간단한 내용 업로그 */}

            <div className="TETE">
                <p className="TETE2">
                    {STRINGS.TITLE}
                </p>
            </div>

            <div className="Main_Home">

                <p>
                    {STRINGS.INFO}
                </p>

            </div>

        </div>

    );
}

export default Home;
