<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <h1>台北總公司</h1>
        <h2>+886-2-000-222 / miiroxy921@gmail.com</h2>
        <h3>新北市中和區中正路45巷25弄6號5樓</h3>
        <h4>週一至週五 8:30 - 17:30</h4>
        <div class="footer-btn">
        <button>聯繫我們</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 空的data
    }
  }
}
</script>
<style>
.footer {
  height: 450px;
  width: 100%;
  background-color: #EAE6E5;
  display: flex;
  justify-content: left;
  align-items: center;
}

.footer-content {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: left;
  flex-direction: column;
}

.footer-info {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 18%;
}

.footer-info h1 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 30px;
  /* identical to box height, or 150% */

  letter-spacing: 3px;

  /* style-black */

  color: #171614;
  margin-top: 10%;
}

.footer-info h2 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 1.4vw;
  line-height: 30px;
  /* identical to box height, or 120% */

  letter-spacing: 3px;
  text-decoration-line: underline;

  /* style-black */

  color: #171614;
}

.footer-info h3 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4vw;
  line-height: 35px;
  /* or 140% */

  letter-spacing: 3px;

  /* style-black */

  color: #171614;
}

.footer-info h4 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 35px;
  /* identical to box height, or 175% */

  letter-spacing: 3px;

  /* oher/gray02 */

  color: #9A9999;
}

.footer-btn {
  margin-top: 30px;
}

.footer-btn button {
  padding: 10px 30px;
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.footer-btn button:hover {
  background-color: #000000;
  color: #FFFFFF;
}

.about-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 280px;
  margin-top: 90px;
}

.about-link {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-bottom: 20px;
  transition: color 0.3s;
}

.about-link:hover {
  color: #ff8a3d;
}

</style>