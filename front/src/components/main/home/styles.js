import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: scroll; /* 세로 스크롤 허용 */
    height: 100vh; /* 뷰포트 높이 설정 */
    scroll-snap-type: y mandatory; /* 스크롤 스냅 유형 설정 */
    display: flex;

    /* 모든 스크롤바를 숨김 */
    ::-webkit-scrollbar, 
    .scroll-container::-webkit-scrollbar {
        display: none; /* Chrome, Safari 등에 적용 */
    }

    scrollbar-width: none; 

    
    /* 이하 생략 */
    section {
        position: relative;
        scroll-snap-align: start;
        height: 100%;
    }
    
    .row {
        width: 60vw;
        margin: auto;
        margin-top: 100px;
    }
    .card {
        width: 350px;
        height: 600px;
        padding-top: 70px;
        align-items: center;
        border-radius: 30px;
        caret-color: transparent;

        .card-body {
            margin-top: 40px;

            hr {
                border: 2px solid #1675f2;
                top: 10px;

            }
        }

        .card-text {
            padding-top: 10px;
            font-size: 15spx;
            line-height: 1.6; /* 줄 간격 조정 */
            color: #a4a4a4;
        }

        .card-title {
            /* 카드 제목 스타일 */
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
        }
    }
    .line1 {
        width: 75vw;
        border: 1.2px solid #a4a4a4;
        margin-left: 190px
    }

    #pedal {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-left: 860px;

        div {
            font-size: 90px;
            color: #ffda5e;
            margin-bottom: -40px;
            margin-top: -30px;
            margin-left: 50px;
        }

        span {
            position: absolute;
            padding-top: 70px;
            color: #1675f2;

            img{
                width: 200px;
            }
        }
    }

    .one {
        height: 650px; /* 높이 고정 */
        overflow: hidden; /* 넘어가는 부분 숨기기 */
        margin-bottom: 300px;
        margin-top: 70px;
    }


    .one img {
        width: 100vw; /* 가로 너비를 화면 전체 너비로 설정 */
        height: 600px; /* 한번 더 써주는 이유 = 그 이미지의 300px 지점 */
        object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 조절 */
    }

    .one_class {
        position: relative;
        top: 150px;

        h2 {
            color: #1675f2;
            font-size: 35px;
            font-weight: bold;
        }

        h5 {
            margin-top: 30px;
        }
    }

    .one_text {
        position: absolute;
        color: #bdbdbd;
        font-size: 18px;
        font-weight: bold;
        top: 100px;
        left: 150px;

        hr {
            position: absolute;
            border: 10px solid #1675f2;
            width: 570px;
            margin-left: -10px;
            top: 10px;
        }
    }

    .one_btn {
        position: absolute;
        top: 300px;
        left: 130px;
    }

    .two {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        width: 100vw;

        .two_class {
            position: relative;
            top:20px; 
            /* 노트북상황에 맞춰 조절하기 */

            h2 {
                color: #fff;
                font-size: 35px;
                font-weight: bold;
            }

            h5 {
                margin-top: 30px;
            }

        }

        .two_text1 {
            position: absolute;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            top: 170px;
            left: 100px;

            hr {
                position: absolute;
                border: 10px solid #fff;
                width: 570px;
                margin-left: -10px;
                top: 10px;
            }
        }

        .two_btn1 {
            position: absolute;
            top: 330px;
            left: 80px;
        }

        /* 반대 */
        .tow_box2 {
            width: 100px;
            height: 100px;
        }

        .two_text2 {
            position: absolute;
            font-size: 18px;
            font-weight: bold;
            bottom: 175px;
            right: 80px;
            justify-content: flex-end;

            hr {
                position: absolute;
                border: 10px solid #fff;
                width: 470px;
                top: 50px;
                right: 90px;
            }
        }

        .two_btn2 {
            position: absolute;
            top: 350px;
            right: 100px;
        }
    }

    .three {
        margin-top: 300px;
        display: flex;
        justify-content: center;

        img {
            width: 53vw;
            margin-bottom: 300px;
        }
    }

    .three_class {
        position: relative;
        top:150px; 
        /* 노트북상황에 맞춰 조절하기 */


        /* text: 작은따옴표*/
        div {
            color: #facc2e;
            font-size: 40px;
            width: 55vw;
            flex-direction: column;
        }

        h5 {
            margin-top: 10px;
            color: #bdbdbd;
        }
    }

    .three_text {
        position: absolute;
        color: #bdbdbd;
        font-size: 18px;
        font-weight: bold;
        top: -100px;
        text-align: center; /* 세로 방향 가운데 정렬을 위한 text-align */

        /* text: 세상과 소통하는 우리 */
        h1 {
            color: #facc2e;
            font-size: 35px;
            font-weight: bold;
            margin-top: -20px;
        }

        hr {
            position: absolute;
            border: 10px solid #ffda5e;
            width: 350px;
            margin-left: 352px;
            top: 2px;
        }
    }


    .four {
        height: 550px; /* 높이 고정 */
        overflow: hidden; /* 넘어가는 부분 숨기기 */
        position: relative;
        top:150px; 
        /* 노트북상황에 맞춰 조절하기 */
    }
        .four img {
        width: 100vw; /* 가로 너비를 화면 전체 너비로 설정 */
        height: 600px; /* 한번 더 써주는 이유 = 그 이미지의 300px 지점 */
        object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 조절 */
    }


        .four_class {

            h2 {
                color: #fff;
                font-size: 35px;
                font-weight: bold;
            }

        }

        .four_text2 {
            position: absolute;
            font-size: 18px;
            font-weight: bold;
            bottom: 330px;
            right: 150px;
            justify-content: flex-end;
            

            hr {
                position: absolute;
                border: 10px solid #fff;
                width: 500px;
                top: 50px;
                right: -5px;
            }
        }

        .four_btn2 {
            position: absolute;
            top: 285px;
            right: 150px;
        }

`;

export const InfoBox = styled.div`
    height: 100px;
    background-color: #1675F2;
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin-bottom: 120px;

    ul {
        display: flex;
        justify-content: space-between;
        width: 800px;
        font-size: 20px;
        margin-top: 15px;

    }

    li {
        flex: 1; //자식 요소 간의 공간을 동일하게 배분
        text-align: center;
        font-weight: bold;

        a{
            text-decoration: none;
            color: #fff;
        }
    }
`;
