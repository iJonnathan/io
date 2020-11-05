<template>
  <div class="footer">
    <footer class="Footer">
      <div class="footer-social-media">
        <address class="social-media">
          <ul class="social-media-list">
            <li class="socials-item">
              <a
                target="_blank"
                href="https://twitter.com/jonn4p"
                class="socials-link socials-link-twitter"
              >
                <span class="visually-hidden">twitter</span>
              </a>
            </li>
            <li class="socials-item">
              <a
                target="_blank"
                href="https://github.com/iJonnathan"
                class="socials-link socials-link-pinterest"
              >
                <span class="visually-hidden">GitHub</span>
              </a>
            </li>
            <li class="socials-item">
              <a
                target="_blank"
                href="https://facebook.com/jonnxthxn"
                class="socials-link socials-link-facebook"
              >
                <span class="visually-hidden">facebook</span>
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div class="footer-copyright">
        <span>
          Copyright &copy;
          <img class="rotate"
            src="../assets/logoJonna.png"
            style="height: 25px; width: 45px"
          /> 2019
        </span>
      </div>
    </footer>
  </div>
</template>
<script>


export default {
  name: 'footer',
  props: {
    msg: String
  }
}
</script>

<style >

.rotate{
  color: #00b2ca;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-animation: rotate-letter 5s infinite;
  animation: rotate-letter 5s infinite;
}

.Footer {
  background-color: #1f2e29;
  bottom: 5px;
  z-index: 5;
}

.footer-social-media {
  width: auto;
  background-color: #1f2e29;

  justify-content: space-between;
  padding: 0 15px;
  margin: auto;
  justify-content: center;
}

.social-media {
  padding: 25px 0;
}

.social-media-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.socials-item:nth-child(n + 2) {
  margin-left: 20px;
}

.socials-link {
  display: block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
}

.socials-link-twitter {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/jonnawebsite-d83f1.appspot.com/o/twitterLogo.svg?alt=media&token=d792812a-24ed-46b4-b5f9-19670b5ba7d5");
}

.socials-link-pinterest {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/jonnawebsite-d83f1.appspot.com/o/gitLogo.svg?alt=media&token=80af1488-48d1-4d00-8348-d6a9b48ec620");
}

.socials-link-facebook {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/jonnawebsite-d83f1.appspot.com/o/fbLogo.svg?alt=media&token=a93f853b-b0ba-4063-9aff-0bc6b25002ac");
}

.socials-link-instagram {
  background-image: url("https://netology-code.github.io/html-2-diploma/sources/images/social/005-instagram.svg");
}

.socials-link-tumblr {
  background-image: url("https://netology-code.github.io/html-2-diploma/sources/images/social/006-github.svg");
}

.footer-copyright {
  padding-bottom: 2px;
  padding-top: 2px;
  background-color: #3c4744;
  color: #a0a0a0;
  font-size: 11px;
  text-align: center;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
}

</style>
