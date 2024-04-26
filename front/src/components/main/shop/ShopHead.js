import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { loginToken } from '../../nav/store';
import { useDispatch } from 'react-redux';
import '../shop/ShopHead.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart2 } from "react-icons/bs";
import { IoCaretDown } from "react-icons/io5";
import { PiList } from "react-icons/pi";


const ShopHead = () => {

  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [uid, setUid] = useState('');
  const [uname, setUname] = useState('');


  useEffect(() => {
    if (cookies.jwtToken) {
      console.log("걍 토큰 있네")
      setUser();
    } else if (cookies.googleJwtToken) {
      console.log("구글 토큰 있네")
      setGoogleUser();
    }
  }, [cookies.jwtToken, cookies.googleJwtToken]);


  const setUser = () => {

    let token;
    let decodedToken;
    try {
      const token = cookies.jwtToken; //쿠키에서 토큰 빼오기
      decodedToken = jwtDecode(token); //가져온 토큰 디코딩
    } catch (error) {
      console.log(error)
    }

    const uid = decodedToken.sub; //디코딩된 토큰 속 uid
    const uname = decodedToken.nickname; //디코딩된 토큰 속 uname

    setToken(token);
    setUid(uid);
    setUname(uname);

    dispatch(loginToken({ uid: uid, uname: uname })); //store.js로 uid,uname보내주기
  }

  const setGoogleUser = () => {
    let decodedToken;
    try {
      const token = cookies.googleJwtToken; // 쿠키에서 토큰 빼오기
      decodedToken = jwtDecode(token); // 가져온 토큰 디코딩
      const uid = decodedToken.email; // 디코딩된 토큰 속 uid
      const uname = decodedToken.sub; // 디코딩된 토큰 속 uname

      setToken(token);
      setUid(uid);
      setUname(uname);

      dispatch(loginToken({ uid: uid, uname: uname })); // store.js로 uid, uname 보내주기
    } catch (error) {
      console.log(error)
    }
  }


    const onBuy = () => {
        if(token === null){
            alert("로그인이 필요합니다.")
            navigate('/pedal/login');
        }else{
            navigate('/pedal/cart');
        }
    };




  return (
      <div>
          {/* <div style={{ backgroundColor:'#1675F2', height:'20px', marginTop:'20px'}}> */}
          <br />
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid" style={{ backgroundColor: '#1675F2', height: '90px', marginTop: '-15px' }}>
                  {/* 로고 */}
                  <a class="navbar-brand" href="/pedal/home" style={{ marginLeft: '50px' }}>
                      <PiList style={{ marginRight: '90px', fontSize:'40px' }} />
                      PEDAL +
                  </a>
                  <br />
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarText">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: '240px', display: 'flex', justifyContent: 'space-between', marginLeft: '-15px' }}>
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="/pedal/station" style={{ color: '#fff', marginBottom: '15px' }}>
                                  자전거
                              </a>
                          </li>
                          <span style={{ marginTop: '8px', fontSize: '20px', color: '#fff' }}>ㅣ</span>
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="/pedal/ticket" style={{ color: '#fff' }}>
                                  안전용품
                              </a>
                          </li>
                      </ul>
                      <span class="navbar-text">
                          
                              <div class="header_right2">
                                  <div style={{ display: 'flex' }}>
                                      <form className="d-flex" role="search" style={{ marginRight: '50px', position: 'relative' }}>
                                          <input className="form-control me-2" type="search" placeholder=" ✨오늘의 특가!!" aria-label="Search" />
                                          <button
                                              type="button"
                                              className="btn btn-outline-primary"
                                              style={{
                                                  position: 'absolute',
                                                  right: '20px',
                                                  top: '0',
                                                  bottom: '0',
                                                  margin: 'auto',
                                                  border: 'none',
                                                  fontSize: '13px',
                                                  backgroundColor: 'transparent',
                                                  color: '#1675F2',
                                              }}
                                          >
                                              검색
                                          </button>
                                      </form>
                                      <BsCart2 onClick={onBuy} style={{ color: '#fff', fontSize: '37px', marginRight: '30px'}} />
                                  </div>
                              </div>
                      </span>
                  </div>
              </div>
          </nav>
      </div>
  );
};

export default ShopHead;