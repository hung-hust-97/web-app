import React, {useEffect, useState} from "react";
import classes from "./MarketTitle.module.css";
import {useTranslation} from "react-i18next";
import {EasyTrading, Panel} from "../../../../Routes/routes";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Icon from "../../../../../../components/Icon/Icon";
import Button from "../../../../../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setThemeInitiate} from "../../../../../../store/actions";

const MarketTitle = () => {
  const {t} = useTranslation();
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const location = useLocation();

  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Điều hướng tới Login page và truyền thêm state nếu cần
    navigate("/login", {state: {from: location, activeTab: 1, email: input}});
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.marketTitleContainer}>
        <h1 className={classes.title}>{t("MarketTitle.discover")}</h1>
        <h1 className={classes.subtitle}>{t("MarketTitle.theBlockchain")}</h1>

        {/* Kiểm tra nếu người dùng đã đăng nhập */}
        {isLogin ? (
          <div className={`column`}>
            <div className={`row jc-start ai-center my-1`}>
              <span className={`${classes.arrow} ml-05`}></span>
              <Link
                to={Panel}
                className={`mr-05 cursor-pointer hover-text hover-scale-01`}>
                {t("MarketTitle.advancedTrading")}
              </Link>
            </div>
            <div className={`row jc-start ai-center my-1`}>
              <span className={`${classes.arrow} ml-05`}></span>
              <Link
                to={EasyTrading}
                className={`mr-05 cursor-pointer hover-text hover-scale-01`}>
                {t("MarketTitle.easyTrading")}
              </Link>
            </div>
          </div>
        ) : (
          // Nếu chưa login, hiển thị form đăng ký
          <p className={classes.tagline}>{t("MarketTitle.exploreTrading")}</p>
        )}

        {/* Nếu chưa đăng nhập, hiển thị input và nút đăng ký */}
        {!isLogin && (
          <div className={classes.inputContainer}>
            <input
              type="text"
              className={classes.input}
              placeholder={t("MarketTitle.emailPhone")}
              value={input}
              onChange={handleInputChange}
            />
            <button className={classes.button} onClick={handleSubmit}>
              {t("MarketTitle.register")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketTitle;
