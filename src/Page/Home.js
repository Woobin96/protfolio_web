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


                <div className="resume-container">
                    <div className="resume-left">
                        <h3>경력 (총 7년)</h3>
                        <p><strong>Neurophet</strong> 2024.07 ~ 현재</p>
                        <ul>
                            <li>Data Validation Tools 개발</li>
                            <li>SCALE CTP 검증</li>
                        </ul>

                        <p><strong>NHN KCP</strong> 2024.02 ~ 2024.07</p>
                        <ul>
                            <li>"Cherry POS" QA 진행</li>
                            <li>"SPL" (해외 결제) Test 진행</li>
                        </ul>

                        <p><strong>슈프리마</strong> 2022.02 ~ 2024.02</p>
                        <ul>
                            <li>“CLuE” 서비스 출시 및 QA 진행</li>
                            <li>“Suprema Middle Ware” QA 진행</li>
                        </ul>

                        <p><strong>와이드넷</strong> 2018.08 ~ 2022.02</p>
                        <ul>
                            <li>JLR Tmap for Car QA 진행</li>
                            <li>RSM Tmap for Car QA 진행</li>
                        </ul>
                    </div>

                    <div className="resume-right">
                        <h3>학력</h3>
                        <p>연성대학교 정보통신공학 2010.03 ~ 2016.02</p>

                        <h3>자격증</h3>
                        <ul>
                            <li>컴퓨터 응용 밀링 기능사 2009.02</li>
                            <li>문서실무사 1급 2009.03</li>
                        </ul>

                        <h3>외국어</h3>
                        <p>비즈니스 회화 OPIc IM2 2021.11</p>

                        <h3>스터디</h3>
                        <ul>
                            <li>정보기술개발 응용 SW양성과정 - 에이콘 아카데미 (2016.12 ~ 2017.06)</li>
                            <li>데이터베이스 심화과정 - 에이콘 아카데미</li>
                            <li>안드로이드를 활용한 웨어러블 개발 - 에이콘 아카데미</li>
                        </ul>
                    </div>
                </div>



            </div>



        </div>
        // 맨 위
    );
}

export default Home;
