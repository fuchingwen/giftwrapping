<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <p>台北總公司</p>
        <p>+886-2-000-222 / miiroxy921@gmail.com</p>
        <p>新北市中和區中正路45巷25弄6號5樓</p>
        <p>週一至週五 8:30 - 17:30</p>
      </div>
      <div class="footer-btn">
        <button>聯繫我們</button>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 200px;
}

.footer-info p {
  margin: 0;
  line-height: 200%;
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