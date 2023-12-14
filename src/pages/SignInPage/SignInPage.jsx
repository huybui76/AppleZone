import React from 'react'
import './SignInPage.css'
import { NavLink } from 'react-router-dom'

const SignInPage = () => {
  const imageIphone = 'https://c1.wallpaperflare.com/preview/199/5/177/apple-devices-artificial-flowers-business-computer.jpg'
  const imageIphone2 = 'https://cdnphoto.dantri.com.vn/wAPQEnqTmHPsuw-W-p870UiIxsk=/thumb_w/1020/2023/09/07/iphone-15-pro-max-1694103023894.jpg'
  return (
    <div className="sin">
      <div className="sin-header">
        <div className="sin-header-title">
          <NavLink style={{ textDecoration:'none', color:'black' }} to="/"><h1>Apple Zone</h1></NavLink>
          <h1 style={{ color: 'red' }}>Đăng Nhập</h1>
        </div>
        <p>Bạn cần giúp đỡ ?</p>
      </div>
      <div className="sin-content">
        <div className="sin-content-image">
          <img style={{ width:'70%' }} src={imageIphone} alt="" />
          <img style={{ width:'70%' }} src={imageIphone2} alt="" />
        </div>
        <div className="sin-content-form">
          <div>
            <h1 className="sin-content-form-title">Đăng nhập</h1>
          </div>
          <div>
            <input className="sin-content-form-username" placeholder="Email/Số điện thoại/Tên đăng nhập" type="text" />
          </div>
          <div>
            <input className="sin-content-form-username" placeholder="Mật khẩu" type="password" />
          </div>
          <div>
            <button className="sin-content-form-btn">Đăng nhập</button>
          </div>
          <div className="sin-content-form-try">
            <a className="sin-content-form-try-pass">Quên mật khẩu ?</a>
            <a className="sin-content-form-try-pass">Đăng nhập với SMS</a>
          </div>
          <div className="sin-content-form-sup">
            <p>Bạn mới sử dụng AppleZone</p>
            <NavLink to="/signup">Đăng kí</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
