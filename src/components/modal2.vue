<template>
            <div class="modal-open2"><a href="#modal2">詳細CHECK!!</a>



  
    <div class="modal2" id="modal2">
    <a href="#!" class="overlay2"></a>
    <div class="modal-wrapper2">
      <div class="modal-contents2">
        <a href="#!" class="modal-close2">✕</a>
        <div class="modal-content2">
こんにちは
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
  *{
      padding: 0;
      margin: 0;
    }

    .modal-open2{
      display: inline-block;
      background-color: 
orange;
      color: #fff;
      margin: 10px;
      position: relative;
      top:530px;
      left: 4%;
     border-radius: 30px;

      z-index: 300
    }

    .modal-open2 a{
      display: inline-block;
      padding: 5px;
      text-decoration: none;
      color: #fff;
    }
    .modal2{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 110%;
      left: 0;
      z-index: 800;

    }
    .modal2:not(:target) {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s, visibility 0.5s;
    }
    .modal2:target{
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s, visibility 0.5s;
    }
    .modal2 .overlay2{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: pink;
      opacity: 0.7;
      top: 0;
      left: 0;
    }
    .modal-wrapper2{
      width: 100%;
      max-width: 600px;
      min-width: 300px;
      height: 100%;
      max-height: 500px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .modal-contents2{
      overflow: auto;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      color: black;
    }
    .modal-content2{
      margin: 25px;
    }
    .modal-close2{
      position: absolute;
      top: 5px;
      right: 10px;
      color: black;
    }

    </style>