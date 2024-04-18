import React from "react";
import { ButtonStyled } from "../ButtonStyled/ButtonStyled";

export default function Footer() {
  return (
    <div className="footer">
      <div class=" container grid grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-5 space-x-5 ">
        <div className="footer_g1">
          <img
            className="w-8/12 sm:w-8/12"
            src="../../img/logo.png"
            alt="logo"
          />
          <ul>
            <li>
              <i class="fa fa-phone"></i>
              <span type="tell">1800-999-9999</span>
            </li>
            <li>
              <i class="fa fa-envelope-open-text"></i>
              <span>elearning@gmail.com</span>
            </li>
            <li>
              <i class="fa fa-map-marked-alt"></i> <span>Hồ Chí Minh</span>
            </li>
          </ul>
        </div>
        <div className="footer_item  ">
          <ul>
            <p className="footer_title">Về Unica</p>
            <li>
              <i class="fa fa-angle-double-right"></i> Giới thiệu về Unica
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Câu hỏi thường gặp
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Chính sách bảo mật
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Hướng dẫn thanh toán
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Kích hoạt khóa học
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Điều khoản dịch vụ
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Góc chia sẻ
            </li>
          </ul>
        </div>
        <div className="footer_item  ">
          <ul>
            <p className="footer_title">Khóa học</p>
            <li>
              <i class="fa fa-angle-double-right"></i> Lập trình Backend
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Thiết kế Web
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Lập trình di động
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Lập trình Front end
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Lập trình Full Stack
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Tư duy lập trình
            </li>
          </ul>
        </div>
        <div className="footer_item  ">
          <ul>
            <p className="footer_title">Liên Kết</p>
            <li>
              <i class="fa fa-angle-double-right"></i> Trang chủ
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Khóa học phổ biến
            </li>
            <li>
              <i class="fa fa-angle-double-right"></i> Blog
            </li>
          </ul>
          <p className="footer_title mt-3">Đăng kí tư vấn</p>
          <form className="text-black">
            <input type="text" placeholder="Họ và tên" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="tel" placeholder="Số điện thoại" />
            <br />
            <ButtonStyled className="mt-3">Đăng ký</ButtonStyled>
          </form>
        </div>
      </div>
      <hr className="px-5 my-5" />
      <div className="footer_bottom">
        <h4>
          Copyright © 2024. <a href="#url">All rights reserved.</a>
        </h4>
      </div>
    </div>
  );
}
